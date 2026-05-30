import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    ArrowRight,
    Bold,
    Code,
    Image as ImageIcon,
    ImagePlus,
    Italic,
    Link2,
    List,
    ListOrdered,
    Minus,
    PenTool,
    Quote,
    Redo2,
    RefreshCw,
    Save,
    Trash2,
    Undo2,
    UploadCloud
} from 'lucide-react';
import { API_BASE_URL, buildApiUrl } from '../config';
import CoverCropModal from '../components/CoverCropModal';
import './AdminCreateBlog.css';

const DRAFT_STORAGE_KEY = 'flytowards_admin_blog_draft_v1';
const COVER_CROP_ASPECT = 16 / 9;
const COVER_CROP_OUTPUT_WIDTH = 1600;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const sanitizeFileBaseName = (filename = 'cover-image') => {
    const base = String(filename || 'cover-image').replace(/\.[^.]+$/, '');
    return base
        .toLowerCase()
        .replace(/[^a-z0-9-_]+/g, '-')
        .replace(/-{2,}/g, '-')
        .replace(/^-+|-+$/g, '') || 'cover-image';
};

const buildCroppedCoverFileName = (filename = 'cover-image.jpg') => {
    const base = sanitizeFileBaseName(filename);
    return `${base}-cropped.jpg`;
};

const stripHtml = (html) =>
    (html || '')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

const fileToDataUrl = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
    });

const parseResponseBody = async (response) => {
    const raw = await response.text();
    if (!raw) return {};

    try {
        return JSON.parse(raw);
    } catch {
        return { message: raw };
    }
};

const dataUrlToFile = (dataUrl, filename) => {
    const [meta, base64Data] = (dataUrl || '').split(',');
    if (!meta || !base64Data) return null;

    const match = meta.match(/data:(.*?);base64/);
    const mime = match?.[1] || 'application/octet-stream';

    const binary = atob(base64Data);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new File([bytes], filename, { type: mime });
};

const AdminCreateBlog = () => {
    // Tab State: 'create' or 'manage'
    const [activeTab, setActiveTab] = useState('create');
    
    // Create Blog States
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(''); // HTML
    const [coverImage, setCoverImage] = useState(null); // Preview URL or DataURL
    const [coverImageDataUrl, setCoverImageDataUrl] = useState(null); // For drafts
    const [imageFile, setImageFile] = useState(null); // Actual File to send to server
    const [isPublishing, setIsPublishing] = useState(false);
    
    // Manage Blogs States
    const [blogs, setBlogs] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    // Global Status Message State
    const [status, setStatus] = useState({ message: '', type: '' });

    // Editor refs/state
    const editorRef = useRef(null);
    const inlineImageInputRef = useRef(null);
    const coverImageInputRef = useRef(null);
    const coverCropStageRef = useRef(null);
    const coverCropImageRef = useRef(null);
    const coverCropPointerRef = useRef(null);
    const coverCropObjectUrlRef = useRef(null);
    const didHydrateDraftRef = useRef(false);
    const autosaveTimerRef = useRef(null);

    const [, setDraftState] = useState({ status: 'idle', lastSavedAt: null });
    const [coverCropModalOpen, setCoverCropModalOpen] = useState(false);
    const [coverCropSource, setCoverCropSource] = useState(null);
    const [coverCropImageSize, setCoverCropImageSize] = useState({ width: 0, height: 0 });
    const [coverCropStageSize, setCoverCropStageSize] = useState({ width: 0, height: 0 });
    const [coverCropOffset, setCoverCropOffset] = useState({ x: 0, y: 0 });
    const [isApplyingCrop, setIsApplyingCrop] = useState(false);

    const isEditorEmpty = useMemo(() => {
        const plain = stripHtml(content);
        const hasImage = /<img\b/i.test(content || '');
        return !plain && !hasImage;
    }, [content]);

    // Fetch existing blogs when switching to Manage tab
    useEffect(() => {
        if (activeTab === 'manage') {
            fetchBlogs();
        }
    }, [activeTab]);

    const fetchBlogs = async () => {
        setIsFetching(true);
        try {
            const response = await fetch(buildApiUrl('/blogs'));
            if (response.ok) {
                const data = await response.json();
                const sorted = Array.isArray(data)
                    ? [...data].sort((a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0))
                    : [];
                setBlogs(sorted);
            } else {
                console.error("Failed to fetch blogs from server");
            }
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
        } finally {
            setIsFetching(false);
        }
    };

    // Hydrate draft once on load
    useEffect(() => {
        try {
            const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
            if (!raw) {
                didHydrateDraftRef.current = true;
                return;
            }

            const draft = JSON.parse(raw);
            if (draft?.title) setTitle(draft.title);
            if (draft?.content) setContent(draft.content);

            if (draft?.coverImageDataUrl) {
                setCoverImage(draft.coverImageDataUrl);
                setCoverImageDataUrl(draft.coverImageDataUrl);
                const restoredFile = dataUrlToFile(draft.coverImageDataUrl, draft.coverImageFilename || 'cover-image');
                if (restoredFile) setImageFile(restoredFile);
            }

            if (draft?.updatedAt) {
                setDraftState({ status: 'saved', lastSavedAt: draft.updatedAt });
            }
        } catch (e) {
            console.warn('Failed to load draft:', e);
        } finally {
            didHydrateDraftRef.current = true;
        }
    }, []);

    // Keep editor DOM in sync when content is set programmatically (draft load/reset)
    useEffect(() => {
        if (!editorRef.current) return;
        if (!didHydrateDraftRef.current) return;
        const current = editorRef.current.innerHTML;
        if (current !== content) editorRef.current.innerHTML = content || '';
    }, [content]);

    // Improve Enter behavior in contentEditable
    useEffect(() => {
        try {
            document.execCommand('defaultParagraphSeparator', false, 'p');
        } catch {
            // ignore
        }
    }, []);

    const saveDraft = async ({ forceStatus = 'saved' } = {}) => {
        setDraftState((s) => ({ ...s, status: 'saving' }));
        const payload = {
            title,
            content,
            coverImageDataUrl,
            coverImageFilename: imageFile?.name || null,
            updatedAt: Date.now(),
        };
        try {
            localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
            setDraftState({ status: forceStatus, lastSavedAt: payload.updatedAt });
        } catch (e) {
            console.warn('Draft save failed:', e);
            setDraftState((s) => ({ ...s, status: 'error' }));
        }
    };

    const handleDeleteDraft = () => {
        const hasAnything = Boolean(title || content || coverImageDataUrl);
        if (!hasAnything) return;

        const ok = window.confirm('Delete this draft? This will clear the title, content, and cover image.');
        if (!ok) return;

        setTitle('');
        setContent('');
        setCoverImage(null);
        setCoverImageDataUrl(null);
        setImageFile(null);

        try {
            localStorage.removeItem(DRAFT_STORAGE_KEY);
        } catch {
            // ignore
        }

        setDraftState({ status: 'idle', lastSavedAt: null });
        setStatus({ message: 'Draft deleted.', type: 'success' });
        setTimeout(() => setStatus({ message: '', type: '' }), 3000);
    };

    // Autosave draft on changes (debounced)
    useEffect(() => {
        if (!didHydrateDraftRef.current) return;
        if (!title && !content && !coverImageDataUrl) return;

        setDraftState((s) => (s.status === 'saving' ? s : { ...s, status: 'saving' }));
        if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
        autosaveTimerRef.current = setTimeout(() => {
            saveDraft();
        }, 700);

        return () => {
            if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
        };
    }, [title, content, coverImageDataUrl]);

    const handleCoverImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (coverCropObjectUrlRef.current) {
            URL.revokeObjectURL(coverCropObjectUrlRef.current);
            coverCropObjectUrlRef.current = null;
        }

        const objectUrl = URL.createObjectURL(file);
        coverCropObjectUrlRef.current = objectUrl;
        setCoverCropSource({ file, url: objectUrl, name: file.name, type: file.type || 'image/jpeg' });
        setCoverCropImageSize({ width: 0, height: 0 });
        setCoverCropStageSize({ width: 0, height: 0 });
        setCoverCropOffset({ x: 0, y: 0 });
        setCoverCropModalOpen(true);

        e.target.value = '';
    };

    const handleCoverCropApply = async (cropRect) => {
        if (!coverCropSource?.url || !coverCropSource.file) {
            throw new Error('No cover image selected.');
        }

        if (!cropRect || !Number.isFinite(cropRect.x) || !Number.isFinite(cropRect.y) || !Number.isFinite(cropRect.w) || !Number.isFinite(cropRect.h)) {
            throw new Error('Invalid crop area.');
        }

        setIsApplyingCrop(true);
        try {
            const image = await new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = () => reject(new Error('Failed to load crop source image'));
                img.src = coverCropSource.url;
            });

            const targetWidth = Math.max(1, Math.round(cropRect.w));
            const targetHeight = Math.max(1, Math.round(cropRect.h));
            const canvas = document.createElement('canvas');
            canvas.width = targetWidth;
            canvas.height = targetHeight;

            const ctx = canvas.getContext('2d');
            if (!ctx) {
                throw new Error('Canvas not supported');
            }

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, targetWidth, targetHeight);
            ctx.drawImage(image, cropRect.x, cropRect.y, cropRect.w, cropRect.h, 0, 0, targetWidth, targetHeight);

            const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
            const croppedFile = dataUrlToFile(dataUrl, buildCroppedCoverFileName(coverCropSource.name));
            if (!croppedFile) {
                throw new Error('Could not build cropped file');
            }

            setCoverImage(dataUrl);
            setImageFile(croppedFile);

            const maxBytes = 1_800_000;
            if (croppedFile.size <= maxBytes) {
                setCoverImageDataUrl(dataUrl);
            } else {
                setCoverImageDataUrl(null);
            }
        } finally {
            setIsApplyingCrop(false);
        }
    };

    const closeCoverCropModal = () => {
        setCoverCropModalOpen(false);
        setCoverCropSource(null);
        setCoverCropImageSize({ width: 0, height: 0 });
        setCoverCropStageSize({ width: 0, height: 0 });
        setCoverCropOffset({ x: 0, y: 0 });
        setIsApplyingCrop(false);
        coverCropPointerRef.current = null;
    };

    const resetCoverCrop = () => {
        setCoverCropOffset({ x: 0, y: 0 });
    };

    const clampCoverCropOffset = (nextOffset, stageSize = coverCropStageSize, imageSize = coverCropImageSize) => {
        if (!stageSize.width || !stageSize.height || !imageSize.width || !imageSize.height) {
            return nextOffset;
        }

        const baseScale = Math.max(stageSize.width / imageSize.width, stageSize.height / imageSize.height);
        const displayScale = baseScale;
        const displayWidth = imageSize.width * displayScale;
        const displayHeight = imageSize.height * displayScale;
        const maxOffsetX = Math.max(0, (displayWidth - stageSize.width) / 2);
        const maxOffsetY = Math.max(0, (displayHeight - stageSize.height) / 2);

        return {
            x: clamp(nextOffset.x, -maxOffsetX, maxOffsetX),
            y: clamp(nextOffset.y, -maxOffsetY, maxOffsetY),
        };
    };

    const handleCoverCropPointerDown = (e) => {
        if (!coverCropSource?.url || !coverCropImageSize.width) return;
        e.preventDefault();
        e.currentTarget.setPointerCapture?.(e.pointerId);
        coverCropPointerRef.current = {
            pointerId: e.pointerId,
            startX: e.clientX,
            startY: e.clientY,
            originX: coverCropOffset.x,
            originY: coverCropOffset.y,
        };
    };

    const handleCoverCropPointerMove = (e) => {
        const drag = coverCropPointerRef.current;
        if (!drag || drag.pointerId !== e.pointerId) return;

        const nextOffset = {
            x: drag.originX + (e.clientX - drag.startX),
            y: drag.originY + (e.clientY - drag.startY),
        };

        setCoverCropOffset(clampCoverCropOffset(nextOffset));
    };

    const handleCoverCropPointerEnd = (e) => {
        const drag = coverCropPointerRef.current;
        if (!drag || drag.pointerId !== e.pointerId) return;
        coverCropPointerRef.current = null;
        e.currentTarget.releasePointerCapture?.(e.pointerId);
    };

    const applyCoverCrop = async () => {
        if (!coverCropSource?.url || !coverCropImageRef.current || !coverCropImageSize.width || !coverCropStageSize.width || !coverCropStageSize.height) {
            return;
        }

        setIsApplyingCrop(true);
        try {
            const image = coverCropImageRef.current;
            const stageSize = coverCropStageSize;
            const imageSize = coverCropImageSize;
            const baseScale = Math.max(stageSize.width / imageSize.width, stageSize.height / imageSize.height);
            const displayScale = baseScale;
            const displayWidth = imageSize.width * displayScale;
            const displayHeight = imageSize.height * displayScale;
            const offset = clampCoverCropOffset(coverCropOffset, stageSize, imageSize);
            const left = (stageSize.width - displayWidth) / 2 + offset.x;
            const top = (stageSize.height - displayHeight) / 2 + offset.y;
            const sourceW = Math.max(1, Math.min(imageSize.width, stageSize.width / displayScale));
            const sourceH = Math.max(1, Math.min(imageSize.height, stageSize.height / displayScale));
            const sourceX = clamp((-left) / displayScale, 0, Math.max(0, imageSize.width - sourceW));
            const sourceY = clamp((-top) / displayScale, 0, Math.max(0, imageSize.height - sourceH));

            const targetWidth = Math.min(COVER_CROP_OUTPUT_WIDTH, Math.max(1200, imageSize.width));
            const targetHeight = Math.round(targetWidth / COVER_CROP_ASPECT);

            const canvas = document.createElement('canvas');
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                throw new Error('Canvas not supported');
            }

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, targetWidth, targetHeight);
            ctx.drawImage(image, sourceX, sourceY, sourceW, sourceH, 0, 0, targetWidth, targetHeight);

            const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
            const croppedFile = dataUrlToFile(dataUrl, buildCroppedCoverFileName(coverCropSource.name));
            if (!croppedFile) {
                throw new Error('Could not build cropped file');
            }

            setCoverImage(dataUrl);
            setImageFile(croppedFile);

            const maxBytes = 1_800_000;
            if (croppedFile.size <= maxBytes) {
                setCoverImageDataUrl(dataUrl);
            } else {
                setCoverImageDataUrl(null);
            }

            closeCoverCropModal();
        } catch (error) {
            console.error('Cover crop failed:', error);
            setStatus({ message: 'Could not crop the selected image. Please try again.', type: 'error' });
            setTimeout(() => setStatus({ message: '', type: '' }), 4000);
        } finally {
            setIsApplyingCrop(false);
        }
    };

    useEffect(() => {
        if (!coverCropModalOpen) return undefined;

        const measureStage = () => {
            const rect = coverCropStageRef.current?.getBoundingClientRect();
            if (rect?.width && rect?.height) {
                setCoverCropStageSize({ width: rect.width, height: rect.height });
            }
        };

        measureStage();

        let resizeObserver = null;
        if (typeof ResizeObserver !== 'undefined' && coverCropStageRef.current) {
            resizeObserver = new ResizeObserver(measureStage);
            resizeObserver.observe(coverCropStageRef.current);
        } else {
            window.addEventListener('resize', measureStage);
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeCoverCropModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            resizeObserver?.disconnect();
            window.removeEventListener('resize', measureStage);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [coverCropModalOpen, coverCropSource?.url]);

    useEffect(() => {
        if (coverCropModalOpen || !coverCropObjectUrlRef.current) return undefined;

        const objectUrl = coverCropObjectUrlRef.current;
        coverCropObjectUrlRef.current = null;
        const cleanupTimer = window.setTimeout(() => URL.revokeObjectURL(objectUrl), 0);

        return () => window.clearTimeout(cleanupTimer);
    }, [coverCropModalOpen]);

    useEffect(() => {
        if (!coverCropModalOpen || !coverCropStageSize.width || !coverCropStageSize.height || !coverCropImageSize.width || !coverCropImageSize.height) {
            return;
        }

        setCoverCropOffset((current) => {
            const next = clampCoverCropOffset(current, coverCropStageSize, coverCropImageSize);
            if (next.x === current.x && next.y === current.y) return current;
            return next;
        });
    }, [coverCropModalOpen, coverCropStageSize.width, coverCropStageSize.height, coverCropImageSize.width, coverCropImageSize.height]);

    const handlePublish = async () => {
        if (!title || isEditorEmpty) {
            setStatus({ message: 'Please enter a title and content before publishing.', type: 'error' });
            setTimeout(() => setStatus({ message: '', type: '' }), 4000);
            return;
        }

        setIsPublishing(true);
        setStatus({ message: 'Publishing blog...', type: 'info' });

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (imageFile) {
            formData.append('coverImage', imageFile);
        }

        try {
            const response = await fetch(buildApiUrl('/blogs'), {
                method: 'POST',
                body: formData, // Sending form data so image can be uploaded
            });

            if (response.ok) {
                const payload = await parseResponseBody(response);

                if (payload?.blog) {
                    setBlogs((currentBlogs) => [
                        payload.blog,
                        ...currentBlogs.filter((blog) => blog._id !== payload.blog._id)
                    ]);
                }

                const publishNote = payload?.storage === 'file'
                    ? 'saved locally because MongoDB is unavailable'
                    : 'saved to MongoDB';

                setStatus({
                    message: `Blog published successfully — ${publishNote}.`,
                    type: 'success'
                });
                // Reset form
                setTitle('');
                setContent('');
                setCoverImage(null);
                setCoverImageDataUrl(null);
                setImageFile(null);

                try {
                    localStorage.removeItem(DRAFT_STORAGE_KEY);
                } catch {
                    // ignore
                }
                setDraftState({ status: 'idle', lastSavedAt: null });
                
                setTimeout(() => setStatus({ message: '', type: '' }), 4000);
            } else {
                const payload = await parseResponseBody(response);
                setStatus({
                    message: payload.error || payload.message || `Failed to publish (HTTP ${response.status}).`,
                    type: 'error'
                });
            }
        } catch (error) {
            console.error('Publish error:', error);
            setStatus({
                message: `Could not connect to server (${API_BASE_URL}). Start the backend with \`cd server && npm start\`.`,
                type: 'error'
            });
        } finally {
            setIsPublishing(false);
        }
    };

    // Delete Blog Handler
    const handleDelete = async (id, blogTitle) => {
        if (!window.confirm(`Are you sure you want to delete the blog post: "${blogTitle}"?`)) {
            return;
        }

        setStatus({ message: 'Deleting blog post...', type: 'info' });

        try {
            const response = await fetch(buildApiUrl(`/blogs/${id}`), {
                method: 'DELETE',
            });

            if (response.ok) {
                setStatus({ message: 'Blog post deleted successfully!', type: 'success' });
                // Filter out the deleted blog from UI state
                setBlogs((currentBlogs) => currentBlogs.filter((blog) => blog._id !== id));
                setTimeout(() => setStatus({ message: '', type: '' }), 4000);
            } else {
                const payload = await parseResponseBody(response);
                setStatus({
                    message: payload.error || payload.message || `Failed to delete (HTTP ${response.status}).`,
                    type: 'error'
                });
            }
        } catch (error) {
            console.error('Delete error:', error);
            setStatus({ message: `Could not connect to server (${API_BASE_URL}).`, type: 'error' });
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const exec = (command, value = null) => {
        if (!editorRef.current) return;
        editorRef.current.focus();
        try {
            document.execCommand(command, false, value);
        } catch (e) {
            console.warn(`Command failed: ${command}`, e);
        }
        // sync state
        const html = editorRef.current.innerHTML;
        setContent(html === '<br>' ? '' : html);
    };

    const formatBlock = (blockTag) => {
        if (!blockTag) return;
        exec('formatBlock', blockTag);
    };

    const wrapSelection = (tagName, attributes = {}) => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return false;
        const range = selection.getRangeAt(0);
        if (range.collapsed) return false;

        const wrapper = document.createElement(tagName);
        Object.entries(attributes).forEach(([key, value]) => {
            wrapper.setAttribute(key, value);
        });
        wrapper.appendChild(range.extractContents());
        range.insertNode(wrapper);
        range.setStartAfter(wrapper);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
        return true;
    };

    const insertTextAtCaret = (text) => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;
        const range = selection.getRangeAt(0);
        range.deleteContents();
        const node = document.createTextNode(text);
        range.insertNode(node);
        range.setStartAfter(node);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
    };

    const insertLink = () => {
        if (!editorRef.current) return;
        editorRef.current.focus();

        const url = window.prompt('Enter a URL (https://...)');
        if (!url) return;

        const selection = window.getSelection();
        const hasSelection = selection && selection.rangeCount > 0 && !selection.getRangeAt(0).collapsed;

        if (hasSelection) {
            const didWrap = wrapSelection('a', { href: url, target: '_blank', rel: 'noopener noreferrer' });
            if (!didWrap) return;
        } else {
            const text = window.prompt('Link text', url) || url;
            exec('insertHTML', `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`);
        }

        setContent(editorRef.current.innerHTML);
    };

    const insertInlineCode = () => {
        if (!editorRef.current) return;
        editorRef.current.focus();
        const wrapped = wrapSelection('code', { class: 'rte-inline-code' });
        if (!wrapped) {
            exec('insertHTML', '<code class="rte-inline-code">code</code>');
        }
        setContent(editorRef.current.innerHTML);
    };

    const triggerInlineImagePick = () => {
        inlineImageInputRef.current?.click();
    };

    const handleInlineImagePicked = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const dataUrl = await fileToDataUrl(file);
            exec('insertImage', dataUrl);
        } catch (err) {
            console.error('Inline image insert failed:', err);
        } finally {
            e.target.value = '';
        }
    };

    return (
        <section className="admin-blog-section">
            <div className="mesh-bg"></div>
            
            <div className="admin-header">
                <span className="section-tag">Admin Panel</span>
                <h1 className="hero-title">FlyTowards <span className="gradient-text">Blog Studio</span></h1>
                <p className="admin-subtitle">Design, publish, and manage your strategic articles in real-time.</p>
            </div>

            {/* Premium Tab Navigation */}
            <div className="admin-tabs-nav">
                <button 
                    className={`tab-nav-btn ${activeTab === 'create' ? 'active' : ''}`}
                    onClick={() => setActiveTab('create')}
                >
                    <PenTool size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Create Post
                </button>
                <button 
                    className={`tab-nav-btn ${activeTab === 'manage' ? 'active' : ''}`}
                    onClick={() => setActiveTab('manage')}
                >
                    <Trash2 size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Manage Posts
                </button>
            </div>

            {/* Status Messages */}
            {status.message && (
                <div style={{
                    maxWidth: '1000px',
                    margin: '0 auto 1.5rem',
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    backgroundColor: status.type === 'error' ? '#fef2f2' : (status.type === 'success' ? '#ecfdf5' : '#eff6ff'),
                    border: `1px solid ${status.type === 'error' ? '#fee2e2' : (status.type === 'success' ? '#d1fae5' : '#dbeafe')}`,
                    color: status.type === 'error' ? '#b91c1c' : (status.type === 'success' ? '#047857' : '#1d4ed8'),
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                }}>
                    <span>{status.message}</span>
                    <button 
                        onClick={() => setStatus({ message: '', type: '' })}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'inherit',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            fontWeight: '700'
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            {activeTab === 'create' ? (
                <>
                {/* Create Post Editor */}
                <div className="editor-container glass-container" data-aos="fade-up">
                    {/* Editor Actions Toolbar */}
                    <div className="modern-toolbar">
                        <div className="toolbar-left">
                            <span className="draft-status-text">Drafting New Post...</span>

                            <div className="tool-group">
                                <span className="tool-label">Style</span>
                                <select
                                    className="style-select"
                                    defaultValue="P"
                                    onChange={(e) => formatBlock(e.target.value)}
                                >
                                    <option value="P">Normal</option>
                                    <option value="H1">Heading 1</option>
                                    <option value="H2">Heading 2</option>
                                    <option value="BLOCKQUOTE">Quote</option>
                                    <option value="PRE">Code Block</option>
                                </select>
                            </div>

                            <div className="tool-group">
                                <button type="button" className="tool-btn-modern" onClick={() => exec('bold')} title="Bold">
                                    <Bold size={16} />
                                </button>
                                <button type="button" className="tool-btn-modern" onClick={() => exec('italic')} title="Italic">
                                    <Italic size={16} />
                                </button>
                                <span className="tool-divider-modern" />
                                <button type="button" className="tool-btn-modern" onClick={() => exec('insertUnorderedList')} title="Bulleted list">
                                    <List size={16} />
                                </button>
                                <button type="button" className="tool-btn-modern" onClick={() => exec('insertOrderedList')} title="Numbered list">
                                    <ListOrdered size={16} />
                                </button>
                                <span className="tool-divider-modern" />
                                <button type="button" className="tool-btn-modern" onClick={() => formatBlock('BLOCKQUOTE')} title="Quote">
                                    <Quote size={16} />
                                </button>
                                <button type="button" className="tool-btn-modern" onClick={() => formatBlock('PRE')} title="Code block">
                                    <Code size={16} />
                                </button>
                                <button type="button" className="tool-btn-modern" onClick={insertInlineCode} title="Inline code">
                                    <Code size={16} strokeWidth={2.5} />
                                </button>
                                <span className="tool-divider-modern" />
                                <button type="button" className="tool-btn-modern" onClick={() => exec('insertHorizontalRule')} title="Divider">
                                    <Minus size={16} />
                                </button>
                                <button type="button" className="tool-btn-modern" onClick={insertLink} title="Insert link">
                                    <Link2 size={16} />
                                </button>
                                <button type="button" className="tool-btn-modern" onClick={triggerInlineImagePick} title="Insert image">
                                    <ImagePlus size={16} />
                                </button>
                                <input
                                    ref={inlineImageInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleInlineImagePicked}
                                    hidden
                                />
                                <span className="tool-divider-modern" />
                                <button type="button" className="tool-btn-modern" onClick={() => exec('undo')} title="Undo">
                                    <Undo2 size={16} />
                                </button>
                                <button type="button" className="tool-btn-modern" onClick={() => exec('redo')} title="Redo">
                                    <Redo2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Editor Area */}
                    <div className="editor-main">
                        {/* Cover Image */}
                        <div className={`modern-cover-area ${coverImage ? 'has-image' : ''}`}>
                            {coverImage ? (
                                <div className="modern-cover-preview">
                                    <img src={coverImage} alt="Cover" />
                                    <label className="btn btn-outline change-cover-float">
                                        <ImageIcon size={16} /> Change Cover Image
                                        <input ref={coverImageInputRef} type="file" accept="image/*" onChange={handleCoverImageUpload} hidden />
                                    </label>
                                </div>
                            ) : (
                                <div className="modern-cover-placeholder">
                                    <div className="icon-glow-box">
                                        <UploadCloud size={40} color="var(--primary)" />
                                    </div>
                                    <h3>Add a Cover Image</h3>
                                    <p>Make your article stand out with a beautiful cover.</p>
                                    <label className="btn btn-outline mt-4">
                                        <ImageIcon size={18} /> Upload Image
                                        <input ref={coverImageInputRef} type="file" accept="image/*" onChange={handleCoverImageUpload} hidden />
                                    </label>
                                </div>
                            )}
                        </div>

                        {/* Editor Content Area */}
                        <div className="modern-content-inputs">
                            <textarea 
                                className="modern-title-input" 
                                placeholder="Enter your amazing title..."
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    e.target.style.height = 'auto';
                                    e.target.style.height = (e.target.scrollHeight) + 'px';
                                }}
                                rows={1}
                            />

                            <div
                                ref={editorRef}
                                className="modern-body-editor rte-editor"
                                contentEditable
                                suppressContentEditableWarning
                                data-placeholder="Start writing your story here..."
                                onInput={() => {
                                    if (!editorRef.current) return;
                                    const html = editorRef.current.innerHTML;
                                    const normalizedEmpty = ['<br>', '<p><br></p>', '<div><br></div>'].includes((html || '').trim());
                                    setContent(normalizedEmpty ? '' : html);
                                }}
                                onPaste={(e) => {
                                    // Paste as plain text to avoid bringing external styles
                                    e.preventDefault();
                                    const text = e.clipboardData.getData('text/plain');
                                    if (!editorRef.current) return;
                                    editorRef.current.focus();
                                    try {
                                        const ok = document.execCommand('insertText', false, text);
                                        if (!ok) insertTextAtCaret(text);
                                    } catch {
                                        insertTextAtCaret(text);
                                    }
                                    setContent(editorRef.current.innerHTML);
                                }}
                            />
                        </div>
                    </div>

                    <div className="editor-actions-bottom">
                        <div className="editor-actions-left">
                            <button
                                type="button"
                                className="btn btn-outline draft-btn"
                                onClick={() => saveDraft({ forceStatus: 'saved' })}
                            >
                                <Save size={16} /> Save Draft
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline draft-delete-btn"
                                onClick={handleDeleteDraft}
                                disabled={!title && !content && !coverImageDataUrl}
                                title="Delete draft"
                            >
                                <Trash2 size={16} /> Delete Draft
                            </button>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary publish-btn"
                            onClick={handlePublish}
                            disabled={isPublishing}
                            style={{ opacity: isPublishing ? 0.7 : 1 }}
                        >
                            {isPublishing ? 'Publishing...' : 'Publish'} <ArrowRight size={16} />
                        </button>
                    </div>

                </div>

            {coverCropModalOpen && coverCropSource?.url && (
                <CoverCropModal
                    imageSrc={coverCropSource.url}
                    onApply={handleCoverCropApply}
                    onCancel={closeCoverCropModal}
                    isApplying={isApplyingCrop}
                />
            )}
            {false && (
                <div className="cover-crop-modal" role="dialog" aria-modal="true" aria-labelledby="cover-crop-title">
                    <div className="cover-crop-backdrop" onClick={closeCoverCropModal} />
                    <div className="cover-crop-panel glass-container">
                        <div className="cover-crop-header">
                            <div>
                                <span className="cover-crop-kicker">Cover crop</span>
                                <h3 id="cover-crop-title">Adjust your image before publishing</h3>
                            </div>
                            <button type="button" className="cover-crop-close" onClick={closeCoverCropModal}>
                                ×
                            </button>
                        </div>

                        <div
                            ref={coverCropStageRef}
                            className={`cover-crop-stage ${coverCropImageSize.width ? 'is-ready' : 'is-loading'}`}
                            onPointerDown={handleCoverCropPointerDown}
                            onPointerMove={handleCoverCropPointerMove}
                            onPointerUp={handleCoverCropPointerEnd}
                            onPointerCancel={handleCoverCropPointerEnd}
                            style={{
                                aspectRatio: `${COVER_CROP_ASPECT}`,
                            }}
                        >
                            {coverCropSource?.url ? (
                                <img
                                    ref={coverCropImageRef}
                                    src={coverCropSource.url}
                                    alt="Crop preview"
                                    draggable="false"
                                    onLoad={(event) => {
                                        const image = event.currentTarget;
                                        setCoverCropImageSize({
                                            width: image.naturalWidth || 0,
                                            height: image.naturalHeight || 0,
                                        });
                                    }}
                                    style={(() => {
                                        const stageWidth = coverCropStageSize.width || 760;
                                        const stageHeight = coverCropStageSize.height || Math.round(stageWidth / COVER_CROP_ASPECT);
                                        const imageWidth = coverCropImageSize.width || stageWidth;
                                        const imageHeight = coverCropImageSize.height || stageHeight;
                                        const baseScale = Math.max(stageWidth / imageWidth, stageHeight / imageHeight);
                                        const displayScale = baseScale;
                                        const displayWidth = imageWidth * displayScale;
                                        const displayHeight = imageHeight * displayScale;
                                        const offset = clampCoverCropOffset(coverCropOffset, { width: stageWidth, height: stageHeight }, coverCropImageSize);
                                        const left = (stageWidth - displayWidth) / 2 + offset.x;
                                        const top = (stageHeight - displayHeight) / 2 + offset.y;

                                        return {
                                            width: `${displayWidth}px`,
                                            height: `${displayHeight}px`,
                                            left: `${left}px`,
                                            top: `${top}px`,
                                        };
                                    })()}
                                />
                            ) : (
                                <div className="cover-crop-loading">
                                    <RefreshCw size={20} className="animate-spin" />
                                    Loading image...
                                </div>
                            )}
                            <div className="cover-crop-grid" />
                            <div className="cover-crop-hint">Drag to reposition the crop</div>
                        </div>

                        <div className="cover-crop-footer">
                            <div className="cover-crop-info">
                                Drag the photo to choose the crop area.
                            </div>
                            <div className="cover-crop-actions">
                                <button type="button" className="btn btn-outline draft-btn" onClick={resetCoverCrop}>
                                    Reset
                                </button>
                                <button type="button" className="btn btn-outline draft-delete-btn" onClick={closeCoverCropModal}>
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary publish-btn"
                                    onClick={applyCoverCrop}
                                    disabled={isApplyingCrop}
                                    style={{ opacity: isApplyingCrop ? 0.75 : 1 }}
                                >
                                    {isApplyingCrop ? 'Cropping...' : 'Apply Crop'} <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                </>
            ) : (
                /* Manage Posts Dashboard */
                <div style={{ maxWidth: '1000px', margin: '0 auto' }} data-aos="fade-up">
                    {isFetching ? (
                        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                            <RefreshCw className="animate-spin" size={40} style={{ margin: '0 auto 1rem', animation: 'spin 2s linear infinite', color: 'var(--primary)' }} />
                            <p style={{ color: 'var(--text-muted)', fontFamily: 'Outfit' }}>Fetching articles...</p>
                        </div>
                    ) : blogs.length > 0 ? (
                        <div className="manage-list">
                            {blogs.map((blog) => (
                                <div key={blog._id} className="manage-item">
                                    <div className="manage-item-info">
                                        <h3 className="manage-item-title">{blog.title}</h3>
                                        <span className="manage-item-date">Published on {formatDate(blog.createdAt)}</span>
                                    </div>
                                    <button 
                                        className="manage-delete-btn"
                                        onClick={() => handleDelete(blog._id, blog.title)}
                                    >
                                        <Trash2 size={14} /> Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="admin-empty-state glass-container">
                            <h3>No dynamic posts found</h3>
                            <p>You haven't published any blogs from the panel yet. Go to "Create Post" to publish your first one!</p>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export default AdminCreateBlog;
