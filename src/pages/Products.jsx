import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, 
    CheckCircle2, 
    Database, 
    CreditCard, 
    Info, 
    HelpCircle,
    ChevronDown, 
    ChevronUp,
    Shield,
    Cpu,
    GitBranch,
    TrendingUp,
    CheckCircle,
    FileQuestion,
    Sparkles
} from 'lucide-react';

const Products = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Business Software Solutions for Everyday Business Needs | Fly Towards";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content",
            "Fly Towards Digital Innovation provides business software solutions designed to support practical business requirements, including CRM and Billing software.");

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content",
            "Business Software, CRM Software, Billing Software, Custom Software Development, Software Development Services");

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "index, follow");

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href",
            "https://flytowardsdigitalinnovation.com/products");
    }, []);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "What does custom software development include?",
            a: "Custom software development involves designing and building software around a business's specific requirements, workflows, users and operational needs. Depending on the project, this can include business applications, enterprise software, SaaS products, web applications, mobile applications and software improvements."
        },
        {
            q: "When should a business consider custom software?",
            a: "Custom software can be worth considering when existing products do not adequately support your workflows, when multiple systems need to be connected, when manual processes create operational challenges, or when a business needs a software product built for a specific purpose."
        },
        {
            q: "Do you develop software for specific industries?",
            a: "Yes. The company's SEO strategy identifies healthcare, manufacturing, retail, logistics, education, construction and hospitality as target industries. The exact software requirements are determined based on each business and project."
        },
        {
            q: "Can you develop a new software product from an idea?",
            a: "Yes, where the project requirements are suitable for custom development. The initial discussion should establish the business objective, users, required functionality, technical requirements and expected scope before development begins."
        },
        {
            q: "Can you work with an existing software system?",
            a: "Existing software can be considered as part of a project where the requirement involves maintenance, improvement, modernisation, integration or development of additional functionality. The appropriate approach depends on the existing application's condition and technical requirements."
        }
    ];

    const chooseQuestions = [
        "What business problem needs to be addressed?",
        "Who will use the software?",
        "Which processes need to be managed?",
        "What information needs to be captured?",
        "Are existing systems involved?",
        "Does the software need to integrate with another application?",
        "What functionality is essential?",
        "Will the requirement change as the business grows?"
    ];

    const readyMadeChecklist = [
        "A workflow designed around its own operations",
        "Integration between multiple existing systems",
        "A specialised business application",
        "Custom user roles and processes",
        "A unique customer or employee portal",
        "Functionality that is not available in an existing product"
    ];

    return (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-bg"></div>

            {/* Ambient Background Glows */}
            <div style={{ position: 'absolute', top: '5%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,242,255,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>
            <div style={{ position: 'absolute', top: '35%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,0,122,0.04) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(70px)' }}></div>
            <div style={{ position: 'absolute', bottom: '15%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(157,0,255,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(50px)' }}></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '140px', paddingBottom: '60px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }} data-aos="fade-up">
                    <span className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex', margin: '0 auto 1.5rem' }}>
                        Software Products Designed for Business Operations
                    </span>
                    
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 800 }}>
                        Business Software Solutions for <span className="gradient-text">Everyday Business Needs</span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '900px', margin: '0 auto 2.5rem' }}>
                        Businesses need software that supports the way they actually work.
                        Managing customer information, handling billing activities and coordinating everyday business processes can become increasingly difficult when teams rely on manual work or disconnected tools.
                        Fly Towards Digital Innovation provides business software solutions designed to support practical business requirements.
                        Our product portfolio currently includes CRM and billing software, while businesses with requirements that go beyond the available products can explore a custom software development approach. The available product information confirms CRM and billing software as part of the existing product offering.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#our-products" className="btn btn-primary" style={{ padding: '1.1rem 2.8rem' }}>
                            Explore Our Products <ArrowRight size={18} />
                        </a>
                        <Link to="/contact/" className="btn btn-outline" style={{ padding: '1.1rem 2.8rem', borderColor: 'rgba(15, 23, 42, 0.2)' }}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Business Software Products Section */}
            <section id="our-products" style={{ padding: '6rem 8% 5rem', borderTop: '1px solid var(--border)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1rem' }}>Product Portfolio</span>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800 }}>
                        Our Business <span className="gradient-text">Software Products</span>
                    </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    
                    {/* CRM Software Section (Text Left, Explore Right) */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }} className="product-row">
                        <style>{`
                            @media (max-width: 991px) {
                                .product-row {
                                    grid-template-columns: 1fr !important;
                                    gap: 3rem !important;
                                }
                            }
                        `}</style>
                        <div data-aos="fade-right">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.8rem' }}>
                                <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '15px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Database size={35} color="var(--primary)" />
                                </div>
                                <h3 style={{ margin: 0, fontSize: '2.2rem', fontWeight: 800 }}>CRM Software</h3>
                            </div>

                            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                Customer information and related business activities can become difficult to manage when information is spread across different systems or maintained manually.
                                A CRM product can provide a structured environment for managing customer-related information and business interactions.
                            </p>

                            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.02)' }}>
                                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    Suitable for businesses that need to:
                                </h4>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {[
                                        "Organise customer information",
                                        "Manage customer-related activities",
                                        "Improve visibility of customer records",
                                        "Reduce dependence on scattered information",
                                        "Bring customer-related workflows into a more structured system"
                                    ].map((bullet, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                                            <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div data-aos="fade-left" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: 'rgba(11, 61, 145, 0.02)', padding: '3.5rem', borderRadius: '35px', border: '1px solid rgba(11, 61, 145, 0.05)' }}>
                            {/* Product Pending Information Alert */}
                            <div style={{ display: 'flex', gap: '12px', background: 'rgba(0, 242, 255, 0.05)', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(0, 242, 255, 0.15)' }}>
                                <Info size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div style={{ fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: 1.6 }}>
                                    <strong>Product features: [Information required]</strong><br />
                                    Product-specific functionality, integrations, pricing and screenshots should be added after confirmation from the product team. For advanced configurations, explore our dedicated <Link to="/services/crm-development/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'underline' }}>CRM Development</Link> capabilities.
                                </div>
                            </div>

                            <Link to="/smart-crm" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', borderRadius: '18px' }}>
                                Explore CRM Software <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Billing Software Section (Explore Left, Text Right) */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }} className="product-row">
                        <div data-aos="fade-right" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: 'rgba(255, 0, 122, 0.02)', padding: '3.5rem', borderRadius: '35px', border: '1px solid rgba(255, 0, 122, 0.05)' }}>
                            {/* Product Pending Information Alert */}
                            <div style={{ display: 'flex', gap: '12px', background: 'rgba(255, 0, 122, 0.05)', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255, 0, 122, 0.12)' }}>
                                <Info size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div style={{ fontSize: '0.92rem', color: 'var(--text-dark)', lineHeight: 1.5 }}>
                                    <strong>Product features: [Information required]</strong><br />
                                    Do not publish specific billing, invoicing, tax, payment gateway or accounting features until the actual product capabilities are confirmed.
                                </div>
                            </div>

                            <Link to="/fly-bill" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', borderRadius: '18px', background: 'var(--gradient-primary)' }}>
                                Explore Billing Software <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div data-aos="fade-left">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.8rem' }}>
                                <div style={{ background: 'rgba(255, 0, 122, 0.08)', padding: '15px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CreditCard size={35} color="var(--secondary)" />
                                </div>
                                <h3 style={{ margin: 0, fontSize: '2.2rem', fontWeight: 800 }}>Billing Software</h3>
                            </div>

                            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                Billing activities are an important part of everyday business operations.
                                A dedicated billing product can help businesses manage billing-related activities through a structured software environment rather than relying entirely on manual processes.
                            </p>

                            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.02)' }}>
                                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    Suitable for businesses that need to:
                                </h4>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {[
                                        "Organise billing activities",
                                        "Manage billing information",
                                        "Reduce repetitive manual work",
                                        "Improve visibility of billing processes",
                                        "Maintain a more structured approach to business billing"
                                    ].map((bullet, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                                            <CheckCircle2 size={18} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* How Business Software Can Support Your Operations Section */}
            <section style={{ padding: '6rem 8% 5rem', background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 4.5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1rem' }}>Operational Efficiency</span>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
                        How Business Software Can <span className="gradient-text">Support Your Operations</span>
                    </h2>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                        The right business management software should address a real operational requirement.
                        Rather than selecting software based only on the number of features, businesses should consider how the product fits their existing processes, users and business objectives.
                    </p>
                </div>

                <div className="grid-matrix">
                    {[
                        {
                            title: "Manage Business Information",
                            text: "Business information becomes easier to work with when it is organised within an organised software environment. A suitable application can help teams reduce fragmented information and create a more structured way of managing business activities.",
                            icon: <Shield size={24} color="var(--primary)" />
                        },
                        {
                            title: "Reduce Manual Work",
                            text: "Manual processes can consume employee time and increase the possibility of inconsistent information. Business software can help move suitable activities into a more structured digital workflow. The objective should not be to automate every process. Instead, businesses should identify repetitive or time-consuming activities where software can provide practical value.",
                            icon: <Cpu size={24} color="var(--secondary)" />
                        },
                        {
                            title: "Connect Business Processes",
                            text: "Businesses often use multiple applications for different activities. When systems are disconnected, employees may need to enter or move information between different tools. Depending on the requirement, software products or integrations can help create a more connected operating environment.",
                            icon: <GitBranch size={24} color="var(--accent)" />
                        },
                        {
                            title: "Support Business Growth",
                            text: "As a business grows, its software requirements can change. A system that works for a small operation may need to evolve as the number of users, customers, transactions or processes increases. Choosing software with the right fit for current requirements and future needs can help businesses avoid unnecessary disruption.",
                            icon: <TrendingUp size={24} color="var(--primary)" />
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="grid-matrix-item" data-aos="fade-up" data-aos-delay={idx * 100} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ background: 'rgba(15, 23, 42, 0.04)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.98rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Choosing the Right Software & Different Requirements */}
            <section style={{ padding: '6rem 8% 5rem' }}>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
                    
                    {/* Choosing the Right Business Management Software */}
                    <div className="card" data-aos="fade-right" style={{ padding: '1.5rem 0 1.5rem 2rem', background: 'transparent', border: 'none', borderLeft: '3px solid rgba(15, 23, 42, 0.08)', borderRadius: '0' }}>
                        <span className="section-tag" style={{ marginBottom: '1rem' }}>Selection Guide</span>
                        <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Choosing the Right Business Management Software
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.8rem', fontSize: '1.05rem' }}>
                            Choosing business management software should begin with the business requirement rather than the software name. Before selecting a product, consider:
                        </p>
                        
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2rem' }}>
                            {chooseQuestions.map((q, idx) => (
                                <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.98rem' }}>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(0, 242, 255, 0.1)', color: 'var(--primary)', fontWeight: '700', fontSize: '0.8rem', flexShrink: 0, marginTop: '2px' }}>
                                        ?
                                    </span>
                                    <span>{q}</span>
                                </li>
                            ))}
                        </ul>

                        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', fontStyle: 'italic', color: 'var(--text-dark)', fontWeight: '600' }}>
                            A good product decision should balance functionality, usability, business fit and long-term requirements.
                        </div>
                    </div>

                    {/* Software for Different Business Requirements */}
                    <div data-aos="fade-left">
                        <span className="section-tag" style={{ marginBottom: '1rem' }}>Adaptability</span>
                        <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Software for Different Business Requirements
                        </h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                            Different businesses can have very different software requirements.
                            A business looking for customer management capabilities may need a CRM product.
                            A business focused on billing operations may need billing software.
                            Another organisation may require software that connects several departments or supports a workflow that does not fit within an existing product.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                            This is why the Products page should not present one software product as a universal answer. Instead, each product should clearly explain:
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'rgba(15, 23, 42, 0.03)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                            {[
                                "What it does",
                                "Who it is intended for",
                                "Which business problem it addresses",
                                "Key features",
                                "Supported workflows",
                                "Integrations, where confirmed",
                                "Deployment model, where confirmed",
                                "Support options, where confirmed",
                                "How to request a demo or enquiry"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 500 }}>
                                    <CheckCircle size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Industry solution path internal links */}
                        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #061b3b 100%)', color: '#fff', padding: '2rem', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                                <Sparkles size={18} color="var(--primary)" /> Industry-Specific Software Solutions
                            </h4>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', marginBottom: '1.2rem' }}>
                                We design specialized workflows optimized for distinct vertical market demands. Learn more about our targeted offerings:
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 15px' }}>
                                <Link to="/industries/healthcare/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Healthcare Software <ArrowRight size={12} /></Link>
                                <Link to="/industries/manufacturing/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Manufacturing Software <ArrowRight size={12} /></Link>
                                <Link to="/industries/retail/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Retail Software <ArrowRight size={12} /></Link>
                                <Link to="/industries/education/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Education Software <ArrowRight size={12} /></Link>
                                <Link to="/industries/construction/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Construction Software <ArrowRight size={12} /></Link>
                                <Link to="/industries/hospitality/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Hospitality Software <ArrowRight size={12} /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Custom Software Development & Scenarios */}
            <section style={{ padding: '6rem 8% 5rem', borderTop: '1px solid var(--border)', background: 'rgba(157, 0, 255, 0.01)' }}>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    
                    {/* When a Ready-Made Product Is Not Enough */}
                    <div data-aos="fade-right">
                        <span className="section-tag" style={{ marginBottom: '1rem' }}>Bespoke Fit</span>
                        <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            When a Ready-Made Product Is Not Enough
                        </h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.8rem', fontSize: '1.05rem' }}>
                            Sometimes an existing product can address the requirement. In other situations, the business may have workflows, integrations or functionality that require a different approach. For example, an organisation may need:
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.8rem' }}>
                            {readyMadeChecklist.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)', marginTop: '8px', flexShrink: 0 }}></div>
                                    <span style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p style={{ color: 'var(--text-dark)', fontWeight: '700', fontSize: '1.05rem' }}>
                            In these situations, a product may not be the right solution.
                        </p>
                    </div>

                    {/* Bespoke Software Development for Specific Requirements */}
                    <div className="card" data-aos="fade-left" style={{ padding: '1.5rem 0 1.5rem 2rem', background: 'transparent', border: 'none', borderLeft: '3px solid rgba(15, 23, 42, 0.08)', borderRadius: '0' }}>
                        <span className="section-tag" style={{ marginBottom: '1rem' }}>Tailored Services</span>
                        <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Bespoke Software Development for Specific Requirements
                        </h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.98rem' }}>
                            When a business needs software built around its own processes, a bespoke software development service may be more appropriate.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.98rem' }}>
                            Fly Towards Digital Innovation's wider <Link to="/services/" style={{ color: 'var(--secondary)', fontWeight: '700', textDecoration: 'underline' }}>Software Development Services</Link> portfolio includes <Link to="/services/custom-software-development/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'underline' }}>Custom Software Development Services</Link>, <Link to="/services/enterprise-software-development/" style={{ color: 'var(--secondary)', fontWeight: '700', textDecoration: 'underline' }}>Enterprise Software Development</Link>, <Link to="/services/saas-development/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'underline' }}>SaaS Development</Link>, <Link to="/services/web-application-development/" style={{ color: 'var(--secondary)', fontWeight: '700', textDecoration: 'underline' }}>Web Application Development</Link>, <Link to="/services/mobile-app-development/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'underline' }}>Mobile App Development</Link> and <Link to="/services/software-maintenance-support/" style={{ color: 'var(--secondary)', fontWeight: '700', textDecoration: 'underline' }}>Software Maintenance</Link>.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.8rem', fontSize: '0.98rem' }}>
                            Custom development can be considered when the requirement involves functionality or workflows that cannot be adequately addressed by an existing product. We also deliver solutions for <Link to="/services/software-consulting/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'underline' }}>Software Consulting</Link>, <Link to="/services/software-modernization/" style={{ color: 'var(--secondary)', fontWeight: '700', textDecoration: 'underline' }}>Software Modernization</Link>, and <Link to="/services/business-process-automation/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'underline' }}>Business Process Automation</Link>.
                        </p>

                        <div style={{ display: 'block', background: '#f8fafc', padding: '1.5rem', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.02)' }}>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
                                <strong>Explore:</strong> We recommend visiting our dedicated page for <Link to="/services/custom-software-development/" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'underline' }}>Custom Software Development Services</Link> to see how we build software tailored to your specific goals.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Business Software and IT Software Development Section */}
            <section style={{ padding: '5rem 8%', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
                <div style={{ maxWidth: '850px', margin: '0 auto' }} data-aos="fade-up">
                    <span className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex', margin: '0 auto 1rem' }}>
                        Strategic Synthesis
                    </span>
                    <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Business Software and IT Software Development
                    </h2>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                        Business software sits at the intersection of business requirements and technical implementation.
                        A useful solution needs to address both sides.
                        The business needs to understand what the software should accomplish, while the technical implementation needs to support the required functionality, users, data and integrations.
                        This is where IT software development can become relevant when an organisation needs a new application or needs to extend an existing software environment.
                        The appropriate approach depends on the actual business requirement.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" style={{ padding: '6rem 8% 7rem', borderTop: '1px solid var(--border)', background: '#ffffff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3rem', textAlign: 'left' }} data-aos="fade-up">
                        <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div style={{ borderTop: '1px solid #e2e8f0' }} data-aos="fade-up">
                        {faqs.map((faq, idx) => {
                            const isOpen = activeFaq === idx;
                            return (
                                <div key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '16px',
                                            padding: '1.5rem 0',
                                            background: 'none',
                                            border: 'none',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            color: 'var(--text-dark)',
                                            outline: 'none',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        <span style={{ 
                                            fontSize: '1.4rem', 
                                            fontWeight: '400', 
                                            color: 'var(--text-dark)',
                                            minWidth: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            {isOpen ? '−' : '+'}
                                        </span>
                                        <span style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-dark)' }}>{faq.q}</span>
                                    </button>
                                    
                                    <div style={{
                                        maxHeight: isOpen ? '250px' : '0',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        opacity: isOpen ? 1 : 0,
                                        paddingLeft: '36px',
                                        paddingBottom: isOpen ? '1.5rem' : '0'
                                    }}>
                                        <p style={{
                                            margin: 0,
                                            color: 'var(--text-muted)',
                                            fontSize: '1.02rem',
                                            lineHeight: 1.7
                                        }}>
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Find the Right Software for Your Business CTA Section */}
            <section style={{ padding: '6rem 8% 7rem', borderTop: '1px solid var(--border)', background: 'var(--bg-white)' }}>
                <div className="cta-content" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #0f172a 0%, #061b3b 100%)',
                    padding: '5rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 30px 60px rgba(15, 23, 42, 0.25)',
                    maxWidth: '1100px',
                    margin: '0 auto',
                    color: '#fff'
                }}>
                    <span className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex', margin: '0 auto 1rem' }}>
                        Get Started
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1.5rem' }}>
                        Find the Right Software for Your Business
                    </h2>
                    <p style={{ fontSize: '1.15rem', margin: '0 auto 2.5rem', color: '#cbd5e1', maxWidth: '850px', lineHeight: 1.7 }}>
                        Whether you are looking for business management software, evaluating a CRM or billing product, or have a requirement that needs a more tailored solution, the starting point should be the business problem you want to solve.
                        Explore the available products to understand their purpose and capabilities.
                        If your requirement does not fit an existing product, discuss it with the software development team to determine whether a custom solution would be appropriate.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#our-products" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem' }}>
                            Explore Our Products
                        </a>
                        <Link to="/contact/" className="btn btn-outline" style={{ padding: '1.1rem 2.5rem', border: '2px solid rgba(255, 255, 255, 0.2)', color: '#fff', background: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }}>
                            Discuss a Custom Software Requirement
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;
