import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CheckCircle2,
    Database,
    CreditCard,
    Wrench,
    ChevronDown,
    Activity,
    Settings,
    ShoppingBag,
    BookOpen,
    Building,
    Coffee,
    Compass,
    Shield,
    Landmark,
    Cpu,
    GitBranch,
    TrendingUp,
    HelpCircle,
    CheckCircle,
    Users
} from 'lucide-react';

const Products = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        document.title =
            'Business Software Solutions for Everyday Business Needs | Fly Towards';

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );
        if (metaDescription) {
            metaDescription.setAttribute(
                'content',
                'Fly Towards Digital Innovation provides business software solutions designed to support practical business requirements, including CRM, Billing and Payroll software.'
            );
        }

        const metaKeywords = document.querySelector(
            'meta[name="keywords"]'
        );
        if (metaKeywords) {
            metaKeywords.setAttribute(
                'content',
                'Business Software, CRM Software, Billing Software, Payroll Software, Custom Software Development, Software Development Services'
            );
        }

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) {
            robots.setAttribute('content', 'index, follow');
        }

        const canonical = document.querySelector(
            'link[rel="canonical"]'
        );
        if (canonical) {
            canonical.setAttribute(
                'href',
                'https://flytowardsdigitalinnovation.com/products'
            );
        }
    }, []);

    const toggleFaq = (idx) => {
        setActiveFaq(activeFaq === idx ? null : idx);
    };

    const crmNeeds = [
        'Organise customer information',
        'Manage customer-related activities',
        'Improve visibility of customer records',
        'Reduce dependence on scattered information',
        'Bring customer-related workflows into a more structured system'
    ];

    const billingNeeds = [
        'Organise billing activities',
        'Manage billing information',
        'Reduce repetitive manual work',
        'Improve visibility of billing processes',
        'Maintain a more structured approach to business billing'
    ];

    const payrollNeeds = [
        'Manage employee salary profiles',
        'Automate monthly payroll runs',
        'Track leaves, attendance, and deductions',
        'Generate detailed payslips',
        'Maintain compliance with salary and tax regulations'
    ];

    const selectionQuestions = [
        'What business problem needs to be addressed?',
        'Who will use the software?',
        'Which processes need to be managed?',
        'What information needs to be captured?',
        'Are existing systems involved?',
        'Does the software need to integrate with another application?',
        'What functionality is essential?',
        'Will the requirement change as the business grows?'
    ];

    const productExplains = [
        'What it does',
        'Who it is intended for',
        'Which business problem it addresses',
        'Key features',
        'Supported workflows',
        'Integrations, where confirmed',
        'Deployment model, where confirmed',
        'Support options, where confirmed',
        'How to request a demo or enquiry'
    ];

    const readyMadeNotEnough = [
        'A workflow designed around its own operations',
        'Integration between multiple existing systems',
        'A specialised business application',
        'Custom user roles and processes',
        'A unique customer or employee portal',
        'Functionality that is not available in an existing product'
    ];

    const faqs = [
        {
            q: 'What are business software solutions?',
            a: 'Business software solutions are applications designed to support specific business activities, workflows or operational requirements. Examples can include CRM, billing, accounting, ERP and other business management applications.'
        },
        {
            q: 'What type of business software does Fly Towards Digital Innovation provide?',
            a: 'Fly Towards Digital Innovation provides business software solutions including CRM, billing and payroll products. Additional product categories or features can be introduced based on confirmed product capabilities.'
        },
        {
            q: 'Is business software suitable for small businesses?',
            a: 'Business software can be useful for small businesses when it addresses a genuine operational need. The suitability depends on the business size, processes, users, functionality and future requirements.'
        },
        {
            q: 'What is the difference between business software and custom software?',
            a: 'Business software can refer to applications designed to support common business activities, while custom software is developed around specific requirements. If an existing product does not adequately address a business workflow, custom development may be considered.'
        },
        {
            q: 'Can you build custom software if an existing product does not meet our requirements?',
            a: 'Yes. Custom software development is part of Fly Towards Digital Innovation’s wider service portfolio. The specific scope and approach can be determined based on the business requirement.'
        }
    ];

    const industries = [
        {
            name: 'Manufacturing Software',
            path: '/industries/manufacturing/',
            icon: <Settings size={22} color="#FACC15" />
        },
        {
            name: 'Healthcare Software',
            path: '/industries/healthcare/',
            icon: <Activity size={22} color="#FACC15" />
        },
        {
            name: 'Education Software',
            path: '/industries/education/',
            icon: <BookOpen size={22} color="#FACC15" />
        },
        {
            name: 'Construction Software',
            path: '/industries/construction/',
            icon: <Building size={22} color="#FACC15" />
        },
        {
            name: 'Retail Software',
            path: '/industries/retail/',
            icon: <ShoppingBag size={22} color="#FACC15" />
        },
        {
            name: 'Finance Software',
            path: '/industries/finance/',
            icon: <Database size={22} color="#FACC15" />
        },
        {
            name: 'Travel Software',
            path: '/industries/travel/',
            icon: <Compass size={22} color="#FACC15" />
        },
        {
            name: 'Hospitality Software',
            path: '/industries/hospitality/',
            icon: <Coffee size={22} color="#FACC15" />
        },
        {
            name: 'Insurance Software',
            path: '/industries/insurance/',
            icon: <Shield size={22} color="#FACC15" />
        },
        {
            name: 'Government Software',
            path: '/industries/government/',
            icon: <Landmark size={22} color="#FACC15" />
        }
    ];

    return (
        <div style={{ width: '100%', overflow: 'hidden', background: '#E5E7EB' }}>
            <style>{`
                body {
                    margin: 0 !important;
                    background-color: #111827 !important;
                    box-sizing: border-box !important;
                }
            `}</style>

            <div style={{ position: 'relative', zIndex: 1, width: '100%', margin: 0, padding: 0 }}>
                
                {/* ================= HERO SECTION ================= */}
                <section className="hero" style={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '140px 0 80px', background: 'radial-gradient(ellipse at 50% 0%, rgba(250, 204, 21, 0.35) 0%, rgba(253, 224, 71, 0.15) 40%, rgba(229, 231, 235, 0.9) 65%, #E5E7EB 85%)' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%', width: '100%' }}>
                        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }} data-aos="fade-up">
                            <span className="section-tag" style={{ display: 'inline-block', margin: '0 auto 1.5rem' }}>Ecosystem Products</span>
                            
                            <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', lineHeight: 1.25, fontWeight: 800, maxWidth: '1200px', margin: '0 auto 1.5rem', letterSpacing: '-0.02em', color: '#1F2937' }}>
                                Business Software Solutions <br />
                                <span style={{
                                    color: '#FACC15',
                                    WebkitTextStroke: '1.5px #1F2937',
                                    display: 'inline-block',
                                    marginTop: '0.25rem',
                                    fontWeight: 900
                                }}>
                                    for Everyday Business Needs
                                </span>
                            </h1>

                            <p style={{ fontSize: '1.2rem', color: '#1E293B', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '850px', margin: '0 auto 2.5rem', fontWeight: 500 }}>
                                Empower your team and streamline your processes with smart software products designed to fit your operational workflows.
                            </p>

                            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="#products" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', background: '#1F2937', color: '#FACC15', fontWeight: 800 }}>
                                    Explore Our Products <ArrowRight size={20} color="#FACC15" />
                                </a>

                                <Link to="/contact" className="btn btn-outline" style={{ padding: '1.1rem 2.5rem', fontWeight: 800, borderColor: '#1F2937', color: '#1F2937' }}>
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

                {/* ================= INTRO: SOFTWARE PRODUCTS DESIGNED FOR OPERATIONS ================= */}
                <section style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }} data-aos="fade-up">
                            <span className="section-tag" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>Operational Design</span>
                            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: '#1F2937', fontWeight: 900 }}>
                                Software Products Designed <span style={{ color: '#D97706' }}>for Business Operations</span>
                            </h2>
                            <p style={{ fontSize: '1.18rem', color: '#1E293B', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 500 }}>
                                Businesses need software that supports the way they actually work. Managing customer information, handling billing activities and coordinating everyday business processes can become increasingly difficult when teams rely on manual work or disconnected tools.
                            </p>
                            <p style={{ fontSize: '1.18rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                                Fly Towards Digital Innovation provides <Link to="/services/" style={{ color: '#1F2937', fontWeight: 800, textDecoration: 'underline' }}>Software Development Services</Link> and business software solutions designed to support practical business requirements.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

                {/* ================= PRODUCTS CARDS SECTION - 2-Tier Architectural Layout ================= */}
                <section id="products" className="full-bleed-yellow" style={{ padding: '6rem 5%' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                        
                        {/* Section Header */}
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                            <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>Explore Portfolio</span>
                            <h2 style={{ fontSize: '2.8rem', color: '#1F2937', fontWeight: 900, marginBottom: '1rem' }}>
                                Our Business Software Products
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#1F2937', maxWidth: '850px', margin: '0 auto', lineHeight: 1.8, fontWeight: 500 }}>
                                Practical software tools designed to digitise operations, reduce manual work, and improve productivity.
                            </p>
                        </div>

                        {/* Tier 1: Core Business Management Systems (3 Equal Column Grid) */}
                        <div style={{ marginBottom: '3.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.75rem' }} data-aos="fade-up">
                                <span style={{ width: '10px', height: '24px', background: '#1F2937', borderRadius: '4px', display: 'inline-block' }}></span>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1F2937', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    Core Management Systems
                                </h3>
                            </div>

                            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                                {[
                                    {
                                        num: "01",
                                        title: "Payroll Software",
                                        icon: <Users size={26} color="#FACC15" />,
                                        desc: "Process employee salaries, track deductions, manage leaves, and generate payslips. Payroll Software helps businesses automate salary runs and maintain precise payroll records.",
                                        needsTitle: "Suitable for businesses that need to:",
                                        needs: payrollNeeds,
                                        link: "/products/payroll-software",
                                        btnText: "Explore Payroll Software"
                                    },
                                    {
                                        num: "02",
                                        title: "Billing Software",
                                        icon: <CreditCard size={26} color="#FACC15" />,
                                        desc: "Billing activities are an important part of everyday business operations. A dedicated billing product can help businesses manage billing-related activities through a structured software environment rather than relying entirely on manual processes.",
                                        needsTitle: "Suitable for businesses that need to:",
                                        needs: billingNeeds,
                                        link: "/products/billing-software",
                                        btnText: "Explore Billing Software"
                                    },
                                    {
                                        num: "03",
                                        title: "CRM Software",
                                        icon: <Database size={26} color="#FACC15" />,
                                        desc: "Customer information and related business activities can become difficult to manage when information is spread across different systems or maintained manually. A CRM product can provide a structured environment for managing customer-related information and business interactions.",
                                        needsTitle: "Suitable for businesses that need to:",
                                        needs: crmNeeds,
                                        link: "/products/crm-software",
                                        btnText: "Explore CRM Software"
                                    }
                                ].map((prod, idx) => (
                                    <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ 
                                        padding: '2.5rem 2rem', 
                                        background: '#111827', 
                                        color: '#FFFFFF',
                                        borderRadius: '28px', 
                                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        gap: '1.25rem',
                                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.35)';
                                        e.currentTarget.style.borderColor = '#FACC15';
                                        const line = e.currentTarget.querySelector('.prod-bottom-glow');
                                        if (line) line.style.width = '100%';
                                        const iconBox = e.currentTarget.querySelector('.prod-unique-icon');
                                        if (iconBox) iconBox.style.transform = 'rotate(360deg) scale(1.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        const line = e.currentTarget.querySelector('.prod-bottom-glow');
                                        if (line) line.style.width = '40px';
                                        const iconBox = e.currentTarget.querySelector('.prod-unique-icon');
                                        if (iconBox) iconBox.style.transform = 'rotate(0deg) scale(1)';
                                    }}
                                    >
                                        {/* Big Watermark Number */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '20px',
                                            fontSize: '5.5rem',
                                            fontWeight: 900,
                                            color: 'rgba(255, 255, 255, 0.05)',
                                            fontFamily: 'Outfit',
                                            userSelect: 'none',
                                            lineHeight: 1
                                        }}>
                                            {prod.num}
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', position: 'relative', zIndex: 2 }}>
                                            <div className="prod-unique-icon" style={{ 
                                                width: '52px', 
                                                height: '52px', 
                                                minWidth: '52px',
                                                background: 'rgba(250, 204, 21, 0.15)', 
                                                color: '#FACC15',
                                                borderRadius: '16px', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center', 
                                                border: '1px solid rgba(250, 204, 21, 0.4)',
                                                boxShadow: '0 4px 15px rgba(250, 204, 21, 0.2)',
                                                transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                            }}>
                                                {prod.icon}
                                            </div>
                                            <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#FFFFFF', margin: 0, lineHeight: 1.3 }}>{prod.title}</h3>
                                        </div>

                                        <p style={{ color: '#D1D5DB', fontSize: '0.98rem', lineHeight: 1.7, margin: 0, fontWeight: 400, position: 'relative', zIndex: 2, minHeight: '80px' }}>
                                            {prod.desc}
                                        </p>

                                        <div style={{ position: 'relative', zIndex: 2, marginBottom: '1rem' }}>
                                            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FACC15', marginBottom: '0.85rem' }}>{prod.needsTitle}</h4>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                {prod.needs.map((need, nIdx) => (
                                                    <li key={nIdx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#E5E7EB', fontSize: '0.92rem', fontWeight: 500 }}>
                                                        <CheckCircle2 size={16} color="#FACC15" style={{ flexShrink: 0, marginTop: '3px' }} />
                                                        <span>{need}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Link to={prod.link} className="btn btn-primary" style={{ marginTop: 'auto', background: '#FACC15', color: '#1F2937', fontWeight: 800, textAlign: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
                                            {prod.btnText} <ArrowRight size={18} color="#1F2937" />
                                        </Link>

                                        {/* Bottom Glowing Line */}
                                        <div className="prod-bottom-glow" style={{
                                            height: '4px',
                                            width: '40px',
                                            background: 'linear-gradient(90deg, #FACC15 0%, #EAB308 100%)',
                                            borderRadius: '2px',
                                            marginTop: '0.5rem',
                                            boxShadow: '0 0 10px rgba(250, 204, 21, 0.5)',
                                            transition: 'width 0.4s ease'
                                        }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tier 2: Specialized & Maintenance Solutions (2 Full-Width Sleek Showcase Banners) */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.75rem' }} data-aos="fade-up">
                                <span style={{ width: '10px', height: '24px', background: '#1F2937', borderRadius: '4px', display: 'inline-block' }}></span>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1F2937', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    Specialized & Maintenance Solutions
                                </h3>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                
                                {/* Banner 1: Food Delivery Solution */}
                                <div data-aos="fade-up" style={{
                                    background: '#111827',
                                    color: '#FFFFFF',
                                    borderRadius: '24px',
                                    padding: '2.25rem 2.5rem',
                                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '2rem',
                                    flexWrap: 'wrap',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#FACC15';
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 25px 45px rgba(0, 0, 0, 0.35)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                                }}
                                >
                                    <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                            <div style={{ 
                                                width: '52px', 
                                                height: '52px', 
                                                minWidth: '52px',
                                                background: 'rgba(250, 204, 21, 0.15)', 
                                                borderRadius: '16px', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center', 
                                                border: '1px solid rgba(250, 204, 21, 0.4)'
                                            }}>
                                                <ShoppingBag size={26} color="#FACC15" />
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#FACC15', letterSpacing: '1px', textTransform: 'uppercase' }}>04 // Industry Platform</span>
                                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', margin: 0, lineHeight: 1.2 }}>Food Delivery Solution</h3>
                                            </div>
                                        </div>

                                        <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                                            On-demand food ordering and delivery system with real-time tracking, custom menus, and order management capabilities.
                                        </p>

                                        {/* Highlight Chips */}
                                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                                            {['Real-Time Tracking', 'Custom Restaurant Menus', 'Order & Dispatch Management'].map((chip, cIdx) => (
                                                <span key={cIdx} style={{ fontSize: '0.82rem', fontWeight: 700, padding: '5px 14px', borderRadius: '50px', background: 'rgba(255, 255, 255, 0.08)', color: '#FACC15', border: '1px solid rgba(250, 204, 21, 0.25)' }}>
                                                    • {chip}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <Link to="/products/food-delivery-solution" className="btn btn-primary" style={{ padding: '1.1rem 2.2rem', background: '#FACC15', color: '#1F2937', fontWeight: 800, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                            Explore Food Delivery <ArrowRight size={18} color="#1F2937" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Banner 2: Fix Product */}
                                <div data-aos="fade-up" data-aos-delay="100" style={{
                                    background: '#111827',
                                    color: '#FFFFFF',
                                    borderRadius: '24px',
                                    padding: '2.25rem 2.5rem',
                                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '2rem',
                                    flexWrap: 'wrap',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#FACC15';
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 25px 45px rgba(0, 0, 0, 0.35)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                                }}
                                >
                                    <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                            <div style={{ 
                                                width: '52px', 
                                                height: '52px', 
                                                minWidth: '52px',
                                                background: 'rgba(250, 204, 21, 0.15)', 
                                                borderRadius: '16px', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center', 
                                                border: '1px solid rgba(250, 204, 21, 0.4)'
                                            }}>
                                                <Wrench size={26} color="#FACC15" />
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#FACC15', letterSpacing: '1px', textTransform: 'uppercase' }}>05 // Technical Care</span>
                                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', margin: 0, lineHeight: 1.2 }}>Fix Product</h3>
                                            </div>
                                        </div>

                                        <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                                            Troubleshoot and fix software systems, handle platform optimization, and keep applications performing at their best.
                                        </p>

                                        {/* Highlight Chips */}
                                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                                            {['System Troubleshooting', 'Platform Optimization', 'Performance Maintenance'].map((chip, cIdx) => (
                                                <span key={cIdx} style={{ fontSize: '0.82rem', fontWeight: 700, padding: '5px 14px', borderRadius: '50px', background: 'rgba(255, 255, 255, 0.08)', color: '#FACC15', border: '1px solid rgba(250, 204, 21, 0.25)' }}>
                                                    • {chip}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <Link to="/products/fix" className="btn btn-primary" style={{ padding: '1.1rem 2.2rem', background: '#FACC15', color: '#1F2937', fontWeight: 800, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                            Explore Fix Product <ArrowRight size={18} color="#1F2937" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

                {/* ================= HOW BUSINESS SOFTWARE CAN SUPPORT YOUR OPERATIONS ================= */}
                <section style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 2 }}>
                        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4.5rem' }} data-aos="fade-up">
                            <span className="section-tag" style={{ background: 'rgba(31, 41, 55, 0.08)', color: '#1F2937', borderColor: 'rgba(31, 41, 55, 0.2)' }}>
                                Interactive Operational Roadmap
                            </span>
                            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900, letterSpacing: '-0.02em' }}>
                                How Business Software Can Support Your Operations
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                                The right business management software should address a real operational requirement. Rather than selecting software based only on the number of features, businesses should consider how the product fits their existing processes, users and business objectives.
                            </p>
                        </div>

                        {/* Interconnected Operational Step Cards Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem', position: 'relative' }}>
                            {[
                                {
                                    step: '01',
                                    tag: 'DATA STRUCTURE',
                                    title: 'Manage Business Information',
                                    text: 'Business information becomes easier to work with when it is organised within an appropriate software environment. A suitable application can help teams reduce fragmented information and create a more structured way of managing business activities.',
                                    icon: <Shield size={26} color="#FACC15" />,
                                    accent: '#FACC15'
                                },
                                {
                                    step: '02',
                                    tag: 'AUTOMATION',
                                    title: 'Reduce Manual Work',
                                    text: 'Manual processes can consume employee time and increase the possibility of inconsistent information. Business software can help move suitable activities into a more structured digital workflow. The objective should not be to automate every process. Instead, businesses should identify repetitive or time-consuming activities where software can provide practical value.',
                                    icon: <Cpu size={26} color="#FACC15" />,
                                    accent: '#FACC15'
                                },
                                {
                                    step: '03',
                                    tag: 'INTEGRATION',
                                    title: 'Connect Business Processes',
                                    text: 'Businesses often use multiple applications for different activities. When systems are disconnected, employees may need to enter or move information between different tools. Depending on the requirement, software products or integrations can help create a more connected operating environment.',
                                    icon: <GitBranch size={26} color="#FACC15" />,
                                    accent: '#FACC15'
                                },
                                {
                                    step: '04',
                                    tag: 'SCALABILITY',
                                    title: 'Support Business Growth',
                                    text: 'As a business grows, its software requirements can change. A system that works for a small operation may need to evolve as the number of users, customers, transactions or processes increases. Choosing software with the right fit for current requirements and future needs can help businesses avoid unnecessary disruption.',
                                    icon: <TrendingUp size={26} color="#FACC15" />,
                                    accent: '#FACC15'
                                }
                            ].map((item, idx) => (
                                <div 
                                    key={idx} 
                                    data-aos="fade-up" 
                                    data-aos-delay={idx * 120} 
                                    style={{
                                        position: 'relative',
                                        background: '#FFFFFF',
                                        borderRadius: '24px',
                                        border: '1px solid #CBD5E1',
                                        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                        e.currentTarget.style.borderColor = '#1F2937';
                                        e.currentTarget.style.boxShadow = '0 25px 45px -10px rgba(31, 41, 55, 0.15), 0 0 20px rgba(250, 204, 21, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.borderColor = '#CBD5E1';
                                        e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(0, 0, 0, 0.05)';
                                    }}
                                >
                                    {/* Top Dark Header Ribbon with Step Badge */}
                                    <div style={{ background: '#1F2937', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '3px solid #FACC15' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(250, 204, 21, 0.15)', border: '1px solid rgba(250, 204, 21, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {item.icon}
                                            </div>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.08em', color: '#FACC15', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: '50px' }}>
                                                STEP {item.step}
                                            </span>
                                        </div>
                                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.05em' }}>
                                            {item.tag}
                                        </span>
                                    </div>

                                    {/* Card Body Content */}
                                    <div style={{ padding: '2rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                                        {/* Background Giant Watermark Number */}
                                        <div style={{ 
                                            position: 'absolute', 
                                            top: '10px', 
                                            right: '15px', 
                                            fontSize: '5.5rem', 
                                            fontWeight: 900, 
                                            lineHeight: 1, 
                                            color: 'rgba(31, 41, 55, 0.04)', 
                                            userSelect: 'none', 
                                            pointerEvents: 'none',
                                            fontFamily: 'monospace'
                                        }}>
                                            {item.step}
                                        </div>

                                        <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#1F2937', marginBottom: '1rem', lineHeight: 1.3, position: 'relative', zIndex: 2 }}>
                                            {item.title}
                                        </h3>

                                        <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.7, margin: 0, fontWeight: 500, position: 'relative', zIndex: 2, flex: 1 }}>
                                            {item.text}
                                        </p>

                                        {/* Dynamic Indicator Footer line */}
                                        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                                            <div style={{ height: '4px', flex: 1, background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
                                                <div style={{ width: `${(idx + 1) * 25}%`, height: '100%', background: '#1F2937', borderRadius: '4px' }} />
                                            </div>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B' }}>
                                                Phase {idx + 1} of 4
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

                {/* ================= CHOOSING THE RIGHT BUSINESS MANAGEMENT SOFTWARE ================= */}
                <section style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                        <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
                            <div data-aos="fade-right">
                                <span className="section-tag">Evaluation Criteria</span>
                                <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: '#1F2937', fontWeight: 900, lineHeight: 1.25 }}>
                                    Choosing the Right Business Management Software
                                </h2>
                                <p style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, marginBottom: '1.5rem' }}>
                                    Choosing business management software should begin with the business requirement rather than the software name. A good product decision should balance functionality, usability, business fit and long-term requirements.
                                </p>
                                <p style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                                    Evaluating existing environments and future expansion options via <Link to="/services/software-consulting/" style={{ color: '#1F2937', fontWeight: 800, textDecoration: 'underline' }}>Software Consulting</Link> can help organisations map requirements to viable technical solutions.
                                </p>
                            </div>

                            <div data-aos="fade-left" style={{ padding: '2.25rem', background: '#FFFFFF', borderRadius: '24px', border: '1px solid #D1D5DB', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1F2937', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ width: '8px', height: '24px', background: '#FACC15', borderRadius: '4px', display: 'inline-block' }}></span>
                                    Before selecting a product, consider:
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                    {selectionQuestions.map((q, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '0.75rem 1rem', background: '#F9FAFB', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                                            <div style={{ width: '28px', height: '28px', minWidth: '28px', borderRadius: '8px', background: '#FEF9C3', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #FDE047' }}>
                                                <HelpCircle size={16} color="#D97706" />
                                            </div>
                                            <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1F2937' }}>{q}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

                {/* ================= SOFTWARE FOR DIFFERENT BUSINESS REQUIREMENTS ================= */}
                <section style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                        <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
                            <div data-aos="fade-right" style={{ padding: '2.25rem', background: '#FFFFFF', borderRadius: '24px', border: '1px solid #D1D5DB', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1F2937', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ width: '8px', height: '24px', background: '#FACC15', borderRadius: '4px', display: 'inline-block' }}></span>
                                    Each product should clearly explain:
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                                    {productExplains.map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '0.7rem 0.9rem', background: '#F9FAFB', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                                            <CheckCircle size={16} color="#D97706" style={{ flexShrink: 0 }} />
                                            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1F2937' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div data-aos="fade-left">
                                <span className="section-tag">Diverse Demands</span>
                                <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: '#1F2937', fontWeight: 900, lineHeight: 1.25 }}>
                                    Software for Different Business Requirements
                                </h2>
                                <p style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, marginBottom: '1.25rem' }}>
                                    Different businesses can have very different software requirements. A business looking for customer management capabilities may need a dedicated <Link to="/services/crm-development/" style={{ color: '#1F2937', fontWeight: 800, textDecoration: 'underline' }}>CRM Development</Link> solution. A business focused on billing operations may need billing software.
                                </p>
                                <p style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                                    Another organisation may require software that connects several departments or supports a workflow that does not fit within an existing product, pointing to the need for <Link to="/services/business-process-automation/" style={{ color: '#1F2937', fontWeight: 800, textDecoration: 'underline' }}>Business Process Automation</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

                {/* ================= WHEN A READY-MADE PRODUCT IS NOT ENOUGH ================= */}
                <section style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem' }} data-aos="fade-up">
                            <span className="section-tag">Bespoke vs Out-of-the-box</span>
                            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900 }}>
                                When a Ready-Made Product Is Not Enough
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                                Sometimes an existing product can address the requirement. In other situations, the business may have workflows, integrations or functionality that require a different approach.
                            </p>
                        </div>

                        <div style={{ padding: '3rem 2.5rem', background: '#FFFFFF', borderRadius: '28px', border: '1px solid #D1D5DB', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', maxWidth: '1100px', margin: '0 auto' }} data-aos="fade-up">
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1F2937', marginBottom: '2rem', textAlign: 'center' }}>
                                For example, an organisation may need:
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                                {readyMadeNotEnough.map((need, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '1rem 1.25rem', background: '#F9FAFB', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FACC15', flexShrink: 0 }}></div>
                                        <p style={{ margin: 0, color: '#1F2937', fontWeight: 700, fontSize: '0.98rem' }}>{need}</p>
                                    </div>
                                ))}
                            </div>
                            <p style={{ marginTop: '2.5rem', textAlign: 'center', color: '#1F2937', fontSize: '1.1rem', fontWeight: 800, margin: '2.5rem 0 0 0' }}>
                                In these situations, a product may not be the right solution.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

                {/* ================= BESPOKE SOFTWARE DEVELOPMENT & IT DEVELOPMENT ================= */}
                <section style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                        <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
                            <div data-aos="fade-right">
                                <span className="section-tag">Custom Services</span>
                                <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: '#1F2937', fontWeight: 900, lineHeight: 1.25 }}>
                                    Bespoke Software Development for Specific Requirements
                                </h2>
                                <p style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, marginBottom: '1.25rem' }}>
                                    When a business needs software built around its own processes, a bespoke software development service may be more appropriate. Fly Towards Digital Innovation provides <Link to="/services/custom-software-development/" style={{ color: '#1F2937', fontWeight: 800, textDecoration: 'underline' }}>Custom Software Development Services</Link>, Enterprise Software Development, SaaS Development, Web Application Development and Mobile App Development.
                                </p>
                                <p style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, marginBottom: '2rem' }}>
                                    Custom development can be considered when the requirement involves functionality or workflows that cannot be adequately addressed by an existing product.
                                </p>
                                <Link to="/services/custom-software-development/" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', background: '#1F2937', color: '#FACC15', fontWeight: 800 }}>
                                    Explore Custom Software Development Services <ArrowRight size={20} color="#FACC15" />
                                </Link>
                            </div>

                            <div data-aos="fade-left" style={{ padding: '2.5rem', background: '#111827', color: '#FFFFFF', borderRadius: '24px', borderLeft: '4px solid #FACC15', boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}>
                                <span className="section-tag" style={{ background: '#FACC15', color: '#1F2937', marginBottom: '1rem', display: 'inline-block' }}>IT Development</span>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                                    Business Software and IT Software Development
                                </h3>
                                <p style={{ color: '#D1D5DB', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem', fontWeight: 400 }}>
                                    Business software sits at the intersection of business requirements and technical implementation. A useful solution needs to address both sides.
                                </p>
                                <p style={{ color: '#D1D5DB', lineHeight: 1.8, fontSize: '1rem', margin: 0, fontWeight: 400 }}>
                                    The business needs to understand what the software should accomplish, while the technical implementation needs to support the required functionality, users, data and integrations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

                {/* ================= INDUSTRY SOLUTIONS SECTION ================= */}
                <section style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem' }} data-aos="fade-up">
                            <span className="section-tag">Industry Solutions</span>
                            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900 }}>
                                Industry-Specific Software Solutions
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                                We design and develop bespoke solutions tailored specifically to the standards, compliances, and workflows of various industry sectors.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto' }} data-aos="fade-up">
                            {industries.map((ind, idx) => (
                                <Link key={idx} to={ind.path} style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.85rem',
                                    padding: '0.9rem 1.6rem',
                                    background: '#1F2937',
                                    border: '1px solid rgba(250, 204, 21, 0.25)',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    color: '#FFFFFF',
                                    fontWeight: 700,
                                    fontSize: '0.98rem',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.04)';
                                    e.currentTarget.style.background = '#111827';
                                    e.currentTarget.style.borderColor = '#FACC15';
                                    e.currentTarget.style.color = '#FACC15';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(250, 204, 21, 0.25)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.background = '#1F2937';
                                    e.currentTarget.style.borderColor = 'rgba(250, 204, 21, 0.25)';
                                    e.currentTarget.style.color = '#FFFFFF';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                                }}
                                >
                                    <span style={{ color: '#FACC15', display: 'flex', alignItems: 'center' }}>
                                        {ind.icon}
                                    </span>
                                    <span>{ind.name}</span>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FACC15', marginLeft: '4px' }}></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

                {/* ================= FAQ SECTION ================= */}
                <section id="faq" style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                            <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>Got Questions?</span>
                            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', color: '#1F2937', fontWeight: 900 }}>
                                Frequently Asked <span style={{ color: '#D97706' }}>Questions</span>
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '700px', margin: '0 auto', fontWeight: 500 }}>
                                Clear answers to common questions about business software solutions and our delivery models.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', alignItems: 'start' }} data-aos="fade-up">
                            {faqs.map((faq, idx) => {
                                const isOpen = activeFaq === idx;
                                return (
                                    <div key={idx} style={{
                                        background: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
                                        borderRadius: '20px',
                                        padding: '1.5rem 1.75rem',
                                        border: isOpen ? '2px solid #1F2937' : '1px solid #D1D5DB',
                                        boxShadow: isOpen ? '0 12px 30px rgba(31, 41, 55, 0.15)' : '0 4px 15px rgba(0, 0, 0, 0.03)',
                                        cursor: 'pointer',
                                        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        position: 'relative'
                                    }}
                                    onClick={() => toggleFaq(idx)}
                                    onMouseEnter={(e) => {
                                        if (!isOpen) {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.borderColor = '#9CA3AF';
                                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.06)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isOpen) {
                                            e.currentTarget.style.transform = 'none';
                                            e.currentTarget.style.borderColor = '#D1D5DB';
                                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                                        }
                                    }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                                            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#1F2937', lineHeight: 1.35 }}>
                                                {faq.q}
                                            </h3>
                                            <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', color: '#1F2937', flexShrink: 0 }}>
                                                <ChevronDown size={20} />
                                            </div>
                                        </div>
                                        {isOpen && (
                                            <p style={{ color: '#4B5563', fontSize: '0.96rem', lineHeight: 1.65, marginTop: '1rem', marginBottom: 0, fontWeight: 500 }}>
                                                {faq.a}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

                {/* ================= FINAL CTA SECTION ================= */}
                <section id="contact" style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                        <div style={{
                            background: '#111827',
                            borderRadius: '32px',
                            padding: '5rem 3rem',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }} data-aos="zoom-in">
                            <span className="section-tag" style={{ background: '#FACC15', color: '#1F2937', marginBottom: '1.5rem', display: 'inline-block' }}>Next Steps</span>
                            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '1.25rem', color: '#FFFFFF', lineHeight: 1.2 }}>
                                Find the Right Software <span style={{ color: '#FACC15' }}>for Your Business</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#D1D5DB', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: 1.8, fontWeight: 400 }}>
                                Whether you are looking for business management software, evaluating a CRM or billing product, or have a requirement that needs a more tailored solution, the starting point should be the business problem you want to solve.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="#products" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', background: '#FACC15', color: '#1F2937', fontWeight: 800 }}>
                                    Explore Our Products <ArrowRight size={20} color="#1F2937" />
                                </a>
                                <Link to="/contact" className="btn btn-outline" style={{ padding: '1.1rem 2.5rem', fontWeight: 800, borderColor: 'rgba(255, 255, 255, 0.3)', color: '#FFFFFF' }}>
                                    Discuss a Custom Software Requirement
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Products;