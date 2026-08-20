import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, MessageSquare, ArrowRight } from 'lucide-react';

const CommonFAQ = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(null);

    // Don't show FAQ on admin pages
    if (location.pathname.startsWith('/admin')) {
        return null;
    }

    const faqs = [
        {
            q: "What services does Fly Towards offer?",
            a: "We specialize in custom software development (web & mobile apps), IT solutions (Billing, CRM, ERP, Attendance, Booking, and Inventory systems), SEO, and WhatsApp API marketing."
        },
        {
            q: "How can Fly Towards help my business grow?",
            a: "Our custom-built software and digital solutions streamline operations, reduce management overhead, and improve customer engagement, leading to measurable business growth."
        },
        {
            q: "Do you provide custom API integrations?",
            a: "Yes, we build and integrate custom APIs to connect your website or software with third-party networks, billing portals, and communication channels."
        },
        {
            q: "How do I request a demo or consultation?",
            a: "You can click the 'Talk to Us' or 'Request Demo' buttons on our website, fill out the form on our Contact page, or connect with us directly via WhatsApp."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="common-faq-section" style={{ padding: '6rem 2rem', background: 'var(--bg-light, #f8fafc)', borderTop: '1px solid var(--border, #e2e8f0)', position: 'relative', overflow: 'hidden' }}>
            <div className="max-w-1200" style={{ margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'flex-start' }}>
                
                {/* Left side: Heading / Context */}
                <div style={{ position: 'sticky', top: '120px' }}>
                    <span className="section-tag" style={{
                        color: 'var(--primary, #00f2ff)',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>FAQ Support</span>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2, color: 'var(--text-dark, #1e1b4b)' }}>
                        Frequently Asked <br />
                        <span className="gradient-text" style={{ background: 'var(--gradient-primary, linear-gradient(135deg, #00f2ff 0%, #0077ff 100%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted, #64748b)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                        Have any doubts or need custom clarifications? We've answered some of the most common questions here. Feel free to connect directly with our experts.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.2rem', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', borderRadius: '12px', fontWeight: 700 }}>
                        Get in Touch <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Right side: Accordion */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {faqs.map((faq, idx) => {
                        const isOpen = activeIndex === idx;
                        return (
                            <div 
                                key={idx} 
                                className="faq-item" 
                                style={{
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    border: isOpen ? '2px solid var(--primary, #00f2ff)' : '2px solid rgba(0,0,0,0.04)',
                                    padding: '1.8rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: isOpen ? '0 15px 35px rgba(0, 242, 255, 0.08)' : '0 4px 15px rgba(0,0,0,0.02)'
                                }}
                                onClick={() => toggleFaq(idx)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: '#1e1b4b' }}>
                                        {faq.q}
                                    </h4>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: isOpen ? 'var(--primary, #00f2ff)' : 'rgba(0,0,0,0.03)',
                                        color: isOpen ? '#000' : '#64748b',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s',
                                        flexShrink: 0
                                    }}>
                                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                </div>
                                
                                <div style={{
                                    maxHeight: isOpen ? '200px' : '0',
                                    opacity: isOpen ? 1 : 0,
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease-out',
                                    marginTop: isOpen ? '1rem' : '0'
                                }}>
                                    <p style={{
                                        margin: 0,
                                        color: 'var(--text-muted, #64748b)',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.7,
                                        borderTop: '1px solid rgba(0,0,0,0.05)',
                                        paddingTop: '1rem'
                                    }}>
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* Responsive styles */}
            <style>{`
                @media (max-width: 991px) {
                    .common-faq-section .max-w-1200 {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    .common-faq-section div[style*="top: 120px"] {
                        position: relative !important;
                        top: 0 !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default CommonFAQ;
