import React, { useState } from 'react';
import { ArrowRight, UploadCloud, Save, Image as ImageIcon } from 'lucide-react';
import './AdminCreateBlog.css';

const AdminCreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [coverImage, setCoverImage] = useState(null); // Preview URL
    const [imageFile, setImageFile] = useState(null); // Actual File to send to server
    const [status, setStatus] = useState({ message: '', type: '' });
    const [isPublishing, setIsPublishing] = useState(false);

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
            const response = await fetch('http://localhost:5000/api/blogs', {
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

    return (
        <section className="admin-blog-section">
            <div className="mesh-bg"></div>
            
            <div className="admin-header">
                <span className="section-tag">Admin Panel</span>
                <h1 className="hero-title">Create <span className="gradient-text">Blog</span></h1>
                <p className="admin-subtitle">Design and publish your next article.</p>
            </div>

            <div className="editor-container glass-container">
                {/* Editor Actions Toolbar */}
                <div className="modern-toolbar">
                    <div className="toolbar-left">
                        <span className="draft-status-text">Drafting New Post...</span>
                        {status.message && (
                            <span className={`status-message ${status.type}`} style={{
                                marginLeft: '1rem', 
                                fontSize: '0.9rem', 
                                color: status.type === 'error' ? '#ef4444' : (status.type === 'success' ? '#10b981' : '#3b82f6'),
                                fontWeight: '600'
                            }}>
                                {status.message}
                            </span>
                        )}
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
        </section>
    );
};

export default AdminCreateBlog;
