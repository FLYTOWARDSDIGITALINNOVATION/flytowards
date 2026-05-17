import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Share2, Calendar, Clock, RefreshCw, PenTool } from 'lucide-react';
import { API_BASE_URL } from '../config';
import './Blog.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Static Strategic Guide Blog Post (to ensure the page is already pre-populated beautifully)
    const staticArticle = {
        _id: "strategic-guide-grow-online",
        title: "How to Grow Your Business Online: A Strategic Guide",
        isStatic: true,
        coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        createdAt: "2026-05-18T00:00:00.000Z",
        author: "Fly Towards Digital Innovation",
        category: "Strategy",
        desc: "In today’s digital economy, growth is no longer defined by physical presence — it’s driven by online visibility, digital systems, and customer engagement.",
        content: `
            <p>In today’s digital economy, growth is no longer defined by physical presence — it’s driven by online visibility, digital systems, and customer engagement. Whether you’re a small business, startup, or established corporate firm, your ability to scale depends on how effectively you leverage the digital ecosystem.</p>
            
            <h2>1. Establish a Strong Digital Foundation</h2>
            <p>Every successful digital journey begins with a solid online foundation — your website. Think of it as your company's digital headquarters.</p>
            <h3>a. Professional Website Development</h3>
            <p>A professional, responsive, and SEO-optimized website is the first step to credibility. It clearly communicates your brand message, loads beautifully on mobile, and features strong CTAs (Call to Actions).</p>
            <h3>b. Domain, Hosting, and Subdomain Strategy</h3>
            <p>Your domain represents your digital identity. Setting up dynamic subdomain strategies like shop.yourcompany.com for eCommerce or crm.yourcompany.com for internal operations ensures smooth routing and modular organization.</p>

            <h2>2. Leverage Digital Marketing for Visibility</h2>
            <p>Once your foundation is set, the next step is to drive traffic and awareness. Digital marketing bridges your brand and your audience.</p>
            <h3>a. Search Engine Optimization (SEO)</h3>
            <p>Organic visibility increases trust and attracts high-intent visitors. Key elements include targeted keywords, on-page optimization, and Local SEO setups so customers near you can find you instantly.</p>
            <h3>b. Social Media Marketing</h3>
            <p>Position your brand where your audience spends their time — LinkedIn, Instagram, Facebook, and YouTube to generate daily inquiries and foster brand loyalty.</p>
            <h3>c. Paid Advertising (Google & Meta Ads)</h3>
            <p>When growth needs acceleration, paid campaigns help you reach specific target demographics quickly with absolute ROI precision and immediate lead generation.</p>

            <h2>3. Build a Strong Brand Identity</h2>
            <p>Your brand is much more than a logo — it's your story, your values, and your customer experience.</p>
            <h3>a. Brand Strategy & Design</h3>
            <p>Define your brand voice, color palette, typography, and visual identity so your business looks highly professional and cohesive across every physical and digital touchpoint.</p>
            <h3>b. Content that Converts</h3>
            <p>Words have power. High-quality landing pages, newsletters, and engaging blogs speak directly to your audience's paint points and establish you as a domain expert.</p>

            <h2>4. Digital Automation & Integration</h2>
            <p>Smart businesses grow faster when they automate repetitive processes. From CRM systems to billing software, automation saves precious time.</p>
            <h3>a. CRM and Lead Management</h3>
            <p>Integrate systems like Field CRM or custom dashboards that track leads, follow-ups, and conversion metrics in real-time to avoid dropping hot deals.</p>
            <h3>b. Billing & Invoicing Solutions</h3>
            <p>Simplify invoicing and bookkeeping using dedicated software like FlyBill to manage multiple accounts, generate PDFs, and track payments with ease.</p>

            <h2>5. Engage & Retain Customers</h2>
            <p>Attracting customers is just the beginning — retaining them is where real growth continuously happens.</p>
            <h3>a. Email & WhatsApp Marketing</h3>
            <p>Personalized automated campaigns keep your customers informed. Setting up automated customer journeys turns one-time buyers into lifelong clients.</p>
            <h3>b. Analytics & Insights</h3>
            <p>Utilize Google Analytics, Meta Pixel insights, and deep database reports to constantly track traffic behaviors and continuously scale your digital performance.</p>
        `
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/blogs`);
            if (response.ok) {
                const data = await response.json();
                // Merge dynamic blogs from MongoDB with the static strategic guide
                setBlogs([staticArticle, ...data]);
            } else {
                setBlogs([staticArticle]);
            }
        } catch (error) {
            console.error("Failed to fetch blogs from server:", error);
            // Fallback to static article if server is offline
            setBlogs([staticArticle]);
        } finally {
            setIsLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const getImageUrl = (coverImage) => {
        if (!coverImage) return 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop';
        if (coverImage.startsWith('/uploads')) {
            return `${API_BASE_URL}${coverImage}`;
        }
        return coverImage;
    };

    if (selectedBlog) {
        return (
            <main className="blog-page-container">
                <div className="mesh-bg"></div>
                <div className="reader-container">
                    <button className="back-btn" onClick={() => { setSelectedBlog(null); window.scrollTo(0,0); }}>
                        <ArrowLeft size={16} /> Back to Blogs
                    </button>
                    
                    <div className="reader-header">
                        <span className="blog-tag">{selectedBlog.category || 'Article'}</span>
                        <h1 className="reader-title">{selectedBlog.title}</h1>
                        <div className="blog-meta">
                            <Calendar size={14} /> <span>{formatDate(selectedBlog.createdAt)}</span>
                            <span className="tool-divider-modern" style={{ height: '12px' }}></span>
                            <Clock size={14} /> <span>5 min read</span>
                        </div>
                    </div>

                    <div className="reader-cover-box">
                        <img src={getImageUrl(selectedBlog.coverImage)} alt={selectedBlog.title} />
                    </div>

                    <div className="reader-body">
                        {selectedBlog.isStatic ? (
                            // Render static guide's HTML structure safely
                            <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
                        ) : (
                            // Render dynamic blog paragraphs beautifully
                            selectedBlog.content.split('\n').map((para, i) => (
                                para.trim() ? <p key={i}>{para}</p> : null
                            ))
                        )}
                    </div>
                </div>
            </main>
        );
    }

    // Identify Featured post (first item) and standard posts (the rest)
    const featuredPost = blogs[0];
    const standardPosts = blogs.slice(1);

    return (
        <main className="blog-page-container">
            <div className="mesh-bg"></div>

            <div className="container">
                <div className="blog-header" data-aos="fade-up">
                    <span className="section-tag" style={{ justifyContent: 'center', display: 'flex', gap: '8px' }}>
                        <Share2 size={18} /> Official Journal
                    </span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.2 }}>
                        Digital Insights & <span className="gradient-text">Innovation</span>
                    </h1>
                    <p className="blog-subtitle">
                        Expert strategies, technology updates, and guides on growing your brand in today's modern digital economy.
                    </p>
                </div>

                {isLoading ? (
                    <div className="loading-box">
                        <RefreshCw className="animate-spin" size={40} style={{ margin: '0 auto 1rem', animation: 'spin 2s linear infinite' }} />
                        <p>Loading latest articles...</p>
                    </div>
                ) : (
                    <>
                        {/* Featured Post Card */}
                        {featuredPost && (
                            <div className="featured-blog-card" data-aos="fade-up" onClick={() => { setSelectedBlog(featuredPost); window.scrollTo(0,0); }}>
                                <div className="featured-img-box">
                                    <img src={getImageUrl(featuredPost.coverImage)} alt={featuredPost.title} />
                                </div>
                                <div className="featured-content">
                                    <div className="blog-meta">
                                        <span className="blog-tag">{featuredPost.category || 'Featured'}</span>
                                        <Calendar size={14} /> <span>{formatDate(featuredPost.createdAt)}</span>
                                    </div>
                                    <h2 className="hero-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                                        {featuredPost.title}
                                    </h2>
                                    <p className="blog-card-excerpt">
                                        {featuredPost.desc || (featuredPost.content.substring(0, 180) + '...')}
                                    </p>
                                    <span className="read-more-link">
                                        Read Article <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Other Articles Grid */}
                        {standardPosts.length > 0 ? (
                            <div className="blogs-grid">
                                {standardPosts.map((blog) => (
                                    <div key={blog._id} className="blog-card" data-aos="fade-up" onClick={() => { setSelectedBlog(blog); window.scrollTo(0,0); }}>
                                        <div className="blog-card-img">
                                            <img src={getImageUrl(blog.coverImage)} alt={blog.title} />
                                        </div>
                                        <div className="blog-card-content">
                                            <div className="blog-meta">
                                                <span className="blog-tag">{blog.category || 'Insights'}</span>
                                                <Calendar size={14} /> <span>{formatDate(blog.createdAt)}</span>
                                            </div>
                                            <h3 className="blog-card-title">{blog.title}</h3>
                                            <p className="blog-card-excerpt">
                                                {blog.content.substring(0, 120)}...
                                            </p>
                                            <span className="read-more-link">
                                                Read Article <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                                <p>Stay tuned! More digital strategy articles are coming soon.</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    );
};

export default Blog;
