import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import './Blog.css';

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

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
    }, []);

    const formatDate = (dateString) => new Date(dateString).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    if (selectedBlog) {
        return (
            <main className="blog-page-container" style={{ paddingTop: '100px' }}>
                <div className="mesh-bg"></div>
                <div className="reader-container">
                    <button className="back-btn" onClick={() => { setSelectedBlog(null); window.scrollTo(0, 0); }}>
                        <ArrowLeft size={16} /> Back to Blogs
                    </button>
                    <div className="reader-header">
                        <span className="blog-tag">{selectedBlog.category}</span>
                        <h1 className="reader-title">{selectedBlog.title}</h1>
                        <div className="blog-meta">
                            <Calendar size={14} /> <span>{formatDate(selectedBlog.createdAt)}</span>
                            <span className="tool-divider-modern" style={{ height: '12px' }}></span>
                            <Clock size={14} /> <span>5 min read</span>
                        </div>
                    </div>
                    <div className="reader-cover-box">
                        <img src={selectedBlog.coverImage} alt={selectedBlog.title} />
                    </div>
                    <div className="reader-body" dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
                </div>
            </main>
        );
    }

    return (
        <main className="blog-page-container" style={{ paddingTop: '100px' }}>
            <div className="mesh-bg"></div>
            <section id="blog-articles" className="container" style={{ maxWidth: '1450px', margin: '0 auto', padding: '1.5rem 1rem 0' }}>
                <h1 id="latest-articles-heading" style={{ textAlign: 'center', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.2, color: '#1F2937', margin: '0 auto 2rem', fontWeight: 800 }}>
                    Latest Articles
                </h1>
                <motion.article
                    className="featured-blog-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => { setSelectedBlog(staticArticle); window.scrollTo(0, 0); }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            setSelectedBlog(staticArticle);
                            window.scrollTo(0, 0);
                        }
                    }}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    style={{ maxWidth: '1250px', margin: '0 auto 4rem' }}
                >
                    <div className="featured-img-box">
                        <img src={staticArticle.coverImage} alt="Business analytics dashboard on a laptop" />
                    </div>
                    <div className="featured-content">
                        <div className="blog-meta">
                            <span className="blog-tag">{staticArticle.category}</span>
                            <Calendar size={14} />
                            <span>{formatDate(staticArticle.createdAt)}</span>
                        </div>
                        <h2 className="blog-card-title">{staticArticle.title}</h2>
                        <p className="blog-card-excerpt">{staticArticle.desc}</p>
                        <span className="read-more-link">Read full article <ArrowRight size={18} /></span>
                    </div>
                </motion.article>
            </section>
        </main>
    );
};

export default Blog;