import React, { useState, useEffect } from 'react';
import { ArrowRight, UploadCloud, Save, Image as ImageIcon, Trash2, PenTool, RefreshCw } from 'lucide-react';
import { API_BASE_URL } from '../config';
import './AdminCreateBlog.css';

const AdminCreateBlog = () => {
    // Tab State: 'create' or 'manage'
    const [activeTab, setActiveTab] = useState('create');
    
    // Create Blog States
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [coverImage, setCoverImage] = useState(null); // Preview URL
    const [imageFile, setImageFile] = useState(null); // Actual File to send to server
    const [isPublishing, setIsPublishing] = useState(false);
    
    // Manage Blogs States
    const [blogs, setBlogs] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    // Global Status Message State
    const [status, setStatus] = useState({ message: '', type: '' });

    // Fetch existing blogs when switching to Manage tab
    useEffect(() => {
        if (activeTab === 'manage') {
            fetchBlogs();
        }
    }, [activeTab]);

    const fetchBlogs = async () => {
        setIsFetching(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/blogs`);
            if (response.ok) {
                const data = await response.json();
                setBlogs(data);
            } else {
                console.error("Failed to fetch blogs from server");
            }
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
        } finally {
            setIsFetching(false);
        }
    };

    const handleCoverImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCoverImage(URL.createObjectURL(file));
            setImageFile(file); // Save file for uploading
        }
    };

    const handlePublish = async () => {
        if (!title || !content) {
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
            const response = await fetch(`${API_BASE_URL}/api/blogs`, {
                method: 'POST',
                body: formData, // Sending form data so image can be uploaded
            });

            if (response.ok) {
                setStatus({ message: 'Blog published successfully!', type: 'success' });
                // Reset form
                setTitle('');
                setContent('');
                setCoverImage(null);
                setImageFile(null);
                
                setTimeout(() => setStatus({ message: '', type: '' }), 4000);
            } else {
                setStatus({ message: 'Failed to publish. Check server logs.', type: 'error' });
            }
        } catch (error) {
            console.error('Publish error:', error);
            setStatus({ message: 'Could not connect to server. Is it running on port 5000?', type: 'error' });
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
            const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setStatus({ message: 'Blog post deleted successfully!', type: 'success' });
                // Filter out the deleted blog from UI state
                setBlogs(blogs.filter(blog => blog._id !== id));
                setTimeout(() => setStatus({ message: '', type: '' }), 4000);
            } else {
                setStatus({ message: 'Failed to delete. Check server logs.', type: 'error' });
            }
        } catch (error) {
            console.error('Delete error:', error);
            setStatus({ message: 'Could not connect to server to delete.', type: 'error' });
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
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
                /* Create Post Editor */
                <div className="editor-container glass-container" data-aos="fade-up">
                    {/* Editor Actions Toolbar */}
                    <div className="modern-toolbar">
                        <div className="toolbar-left">
                            <span className="draft-status-text">Drafting New Post...</span>
                        </div>

                        <div className="toolbar-right">
                            <button className="btn btn-outline draft-btn">
                                <Save size={16} /> Save Draft
                            </button>
                            <button 
                                className="btn btn-primary publish-btn" 
                                onClick={handlePublish}
                                disabled={isPublishing}
                                style={{ opacity: isPublishing ? 0.7 : 1 }}
                            >
                                {isPublishing ? 'Publishing...' : 'Publish'} <ArrowRight size={16} />
                            </button>
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
                                        <input type="file" accept="image/*" onChange={handleCoverImageUpload} hidden />
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
                                        <input type="file" accept="image/*" onChange={handleCoverImageUpload} hidden />
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
                            
                            <textarea 
                                className="modern-body-input" 
                                placeholder="Start writing your story here..."
                                value={content}
                                onChange={(e) => {
                                    setContent(e.target.value);
                                    e.target.style.height = 'auto';
                                    e.target.style.height = (e.target.scrollHeight) + 'px';
                                }}
                            />
                        </div>
                    </div>
                </div>
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
