import React, { useEffect } from 'react';
import { HardHat, Gem, Coins, GraduationCap, Stethoscope, Factory, Store, ArrowRight, CheckCircle2, ChevronRight, Server, Zap, ShieldCheck } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Industries = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Industries We Serve | Fly Towards Digital Innovation";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content",
            "Fly Towards delivers industry-specific custom softwares, ERPs, CRM platforms, and WhatsApp integrations for Construction, Jewelry, Gold Loan, Education, Healthcare, Manufacturing, and Retail.");

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content",
            "Construction ERP, Jewelry Shop Billing, Gold Loan Software, School Management System, Hospital OPD CRM, Manufacturing ERP, Retail POS");

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "index, follow");

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href",
            "https://flytowardsdigitalinnovation.com/industries");

    }, []);

    const industriesList = [
        {
            title: "Construction",
            tagline: "Build with technical precision",
            desc: "Custom ERP & project management environments designed to control budgets, manage sites, and automate supplier transactions.",
            icon: <HardHat size={35} />,
            color: "249, 115, 22", // Orange
            features: [
                "Real-time material & inventory tracking",
                "Contractor & workforce logs automation",
                "Milestone billing & progress invoicing"
            ]
        },
        {
            title: "Jewelry Shop",
            tagline: "Luster meets smart management",
            desc: "High-security inventory management with client tracking schemes, barcode support, and elegant visual cataloging.",
            icon: <Gem size={35} />,
            color: "13, 148, 136", // Emerald/Teal
            features: [
                "RFID & Barcode stock controls",
                "Gold & silver savings scheme tracking",
                "Interactive digital catalogue displays"
            ]
        },
        {
            title: "Gold Loan",
            tagline: "Secure interest & pledge workflows",
            desc: "Calculators and ledger frameworks built for fast pawn processing, interest accrual audit, and payment reminders.",
            icon: <Coins size={35} />,
            color: "202, 138, 4", // Gold
            features: [
                "Live market gold rate synchronization",
                "Flexible scheme & interest tier setup",
                "Auto SMS & WhatsApp payment alerts"
            ]
        },
        {
            title: "School / College",
            tagline: "Nurturing smart digital campuses",
            desc: "Next-gen ERP systems supporting fee collecting portals, digital grading sheets, timetables, and teacher-parent workspaces.",
            icon: <GraduationCap size={35} />,
            color: "29, 78, 216", // Royal Blue
            features: [
                "Admissions & student lifecycle tracking",
                "Integrated online fee collections",
                "Automated report cards & gradebook"
            ]
        },
        {
            title: "Hospital & Clinic",
            tagline: "Prioritize seamless patient care",
            desc: "OPD scheduling portals, EMR records integration, smart pharmacy tracking, and doctor availability widgets.",
            icon: <Stethoscope size={35} />,
            color: "5, 150, 105", // Emerald Green
            features: [
                "Electronic health records (EHR) database",
                "WhatsApp Booking & OPD queue updates",
                "Ward availability & pharmacy counter bills"
            ]
        },
        {
            title: "Manufacturing",
            tagline: "Zero downtime product workflows",
            desc: "Materials Requirements Planning (MRP), quality check control nodes, assembly flow schedules, and logistics sync.",
            icon: <Factory size={35} />,
            color: "79, 70, 229", // Indigo
            features: [
                "Shop floor execution & machine logs",
                "Automated supply chain notifications",
                "Preventive maintenance scheduling"
            ]
        },
        {
            title: "Retail Shop",
            tagline: "Next-gen point-of-sale efficiency",
            desc: "Multi-counter billing modules with integrated digital payment gateways, bulk discount controllers, and vendor sync engines.",
            icon: <Store size={35} />,
            color: "219, 39, 119", // Pink
            features: [
                "High-speed POS with barcode scan",
                "Omnichannel inventory reconciliation",
                "Customer database & loyalty points list"
            ]
        }
    ];

    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', fontFamily: "'Outfit', sans-serif", color: '#0f172a', overflowX: 'hidden' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&family=Inter:wght@300;400;600;700&display=swap');
                
                .industry-card {
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    position: relative;
                    z-index: 1;
                }
                .industry-card:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.08) !important;
                }
                .industry-card:hover .industry-icon-wrapper {
                    transform: scale(1.1) rotate(5deg);
                }
                .industry-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 40px;
                    padding: 2px;
                    background: linear-gradient(135deg, rgba(var(--color), 0.3) 0%, rgba(var(--color), 0.02) 100%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                    transition: all 0.5s ease;
                }
                .industry-card:hover::before {
                    background: linear-gradient(135deg, rgba(var(--color), 0.7) 0%, rgba(var(--color), 0.2) 100%);
                }
                
                @keyframes orbit {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                .gradient-text-industry {
                    background: linear-gradient(135deg, #00f2ff 0%, #ff007a 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .floating-mesh {
                    animation: float-slow 12s ease-in-out infinite alternate;
                }

                @keyframes float-slow {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(5%, 5%) scale(1.05); }
                }
                
                .cta-hover-industry:hover {
                    background: white !important;
                    color: black !important;
                }

                @media (max-width: 968px) {
                    .industries-hero-container {
                        padding-top: 130px !important;
                        padding-bottom: 60px !important;
                    }
                    .industries-hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                        text-align: center;
                    }
                    .industries-hero-grid > div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .industries-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2.5rem !important;
                    }
                    .feature-showcase-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            {/* Ambient Background Lights */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} className="floating-mesh">
                <div style={{ position: 'absolute', top: '15%', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 68%)', filter: 'blur(120px)' }}></div>
                <div style={{ position: 'absolute', bottom: '15%', right: '-5%', width: '850px', height: '850px', background: 'radial-gradient(circle, rgba(255, 0, 122, 0.04) 0%, transparent 70%)', filter: 'blur(130px)' }}></div>
            </div>

            {/* Hero Section */}
            <section className="industries-hero-container" style={{ position: 'relative', zIndex: 1, paddingTop: '190px', paddingBottom: '110px' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="industries-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', gap: '5rem' }}>
                        <div data-aos="fade-right">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem' }}>
                                <div style={{ width: '40px', height: '2.5px', background: 'var(--primary)' }}></div>
                                <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.35em' }}>Tailored Business Solutions</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, lineHeight: 1.0, marginBottom: '2.5rem', letterSpacing: '-0.04em' }}>
                                Industries We <span className="gradient-text-industry">Transform</span>
                            </h1>
                            <p style={{ fontSize: '1.3rem', color: '#55657e', lineHeight: 1.7, marginBottom: '3.5rem', maxWidth: '650px' }}>
                                We craft premium, customized digital systems designed to streamline workflows, secure data assets, and drive conversions for specialized business sectors.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <a href="#explore-sectors" className="btn btn-primary" style={{ padding: '1.3rem 3.5rem', borderRadius: '50px', fontWeight: 800, fontSize: '1.05rem', boxShadow: '0 15px 35px rgba(0, 242, 255, 0.2)' }}>
                                    Explore Industries
                                </a>
                                <RouterLink to="/contact" className="btn btn-outline" style={{ padding: '1.3rem 3.5rem', borderRadius: '50px', fontWeight: 800, fontSize: '1.05rem', borderColor: '#e2e8f0', color: '#1e293b' }}>
                                    Discuss Your Need
                                </RouterLink>
                            </div>
                        </div>
                        <div data-aos="fade-left" style={{ position: 'relative' }}>
                            <div style={{ position: 'relative', borderRadius: '45px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(15, 23, 42, 0.08)', background: '#0a0b10', padding: '2px' }}>
                                <div style={{ position: 'absolute', inset: 0, padding: '2px', borderRadius: '45px', background: 'linear-gradient(225deg, #00f2ff, #ff007a)', opacity: 0.8, zIndex: 0 }}></div>
                                <div style={{ position: 'relative', zIndex: 1, background: '#0f1016', borderRadius: '43px', overflow: 'hidden' }}>
                                    <img src="Web & app development.jpg.webp" alt="Industry Transformation Hub" style={{ width: '100%', height: '520px', objectFit: 'cover', opacity: 0.85, filter: 'contrast(1.05) brightness(0.95)' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 17, 26, 0.95), transparent 75%)' }}></div>
                                    <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', padding: '1.8rem', background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(20px)', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f2ff' }}></span>
                                            <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Operational Excellence</span>
                                        </div>
                                        <h4 style={{ color: 'white', margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>Customized Suite For Every Sector</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries System Grid */}
            <section id="explore-sectors" style={{ padding: '80px 0 140px', background: '#f8fafc', position: 'relative', zIndex: 1 }} className="section-full">
                <div className="section-inner">
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Industries We Power</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, marginTop: '1rem', color: '#1e1b4b' }}>
                            Engineered for Your <span className="gradient-text-industry">Specialty</span>
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1.15rem', maxWidth: '650px', margin: '1.5rem auto 0', lineHeight: 1.6 }}>
                            Discover standard integrations, secure operational flows, and customer retention systems built specifically for your sector.
                        </p>
                    </div>

                    <div className="industries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem' }}>
                        {industriesList.map((industry, index) => (
                            <div 
                                key={index} 
                                className="industry-card" 
                                data-aos="fade-up" 
                                data-aos-delay={index * 80}
                                style={{
                                    background: 'white',
                                    borderRadius: '40px',
                                    padding: '3.5rem',
                                    border: '1px solid #f1f5f9',
                                    boxShadow: '0 15px 30px rgba(0,0,0,0.015)',
                                    '--color': industry.color
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                                    <div 
                                        className="industry-icon-wrapper" 
                                        style={{ 
                                            width: '72px', 
                                            height: '72px', 
                                            borderRadius: '22px', 
                                            background: `rgba(${industry.color}, 0.08)`, 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            color: `rgb(${industry.color})`,
                                            transition: 'all 0.4s ease'
                                        }}
                                    >
                                        {industry.icon}
                                    </div>
                                    <span style={{ 
                                        fontSize: '0.8rem', 
                                        fontWeight: 800, 
                                        color: `rgb(${industry.color})`, 
                                        background: `rgba(${industry.color}, 0.1)`, 
                                        padding: '0.4rem 1.2rem', 
                                        borderRadius: '20px', 
                                        textTransform: 'uppercase', 
                                        letterSpacing: '1px' 
                                    }}>
                                        Smart Tech
                                    </span>
                                </div>

                                <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.4rem' }}>
                                    {industry.title}
                                </h3>
                                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: `rgb(${industry.color})`, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    {industry.tagline}
                                </p>
                                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7, marginBottom: '2.5rem', minHeight: '80px' }}>
                                    {industry.desc}
                                </p>

                                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '2rem', marginTop: 'auto' }}>
                                    <h5 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#475569', letterSpacing: '1.5px', marginBottom: '1.2rem' }}>
                                        Key Capabilities
                                    </h5>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                                        {industry.features.map((feature, fIdx) => (
                                            <li key={fIdx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.98rem', color: '#334155', fontWeight: 500 }}>
                                                <CheckCircle2 size={16} color={`rgb(${industry.color})`} style={{ flexShrink: 0, marginTop: '4px' }} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Fly Towards Services */}
            <section style={{ padding: '140px 0', background: '#ffffff', position: 'relative', zIndex: 1 }} className="section-full">
                <div className="section-inner">
                    <div className="feature-showcase-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
                        <div data-aos="fade-right">
                            <span className="section-tag">Value Proposition</span>
                            <h2 style={{ fontSize: '3.2rem', fontWeight: 900, color: '#1e1b4b', marginBottom: '2rem', lineHeight: 1.1 }}>
                                Unified Technology Ecosystem
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#55657e', lineHeight: 1.7, marginBottom: '3rem' }}>
                                We don’t just deliver generic features. We establish a complete business system containing customized permissions, API gateways, and notification models suitable for audit controls.
                            </p>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '15px', background: 'rgba(0, 242, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f2ff', flexShrink: 0 }}>
                                        <Server size={22} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.3rem' }}>High-Availability Cloud</h4>
                                        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.5 }}>Your database and transactions remain secure and backed up daily on enterprise grade clouds.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '15px', background: 'rgba(255, 0, 122, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff007a', flexShrink: 0 }}>
                                        <ShieldCheck size={22} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.3rem' }}>Role-Based Privacy Controls</h4>
                                        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.5 }}>Configure multiple branches, counters, managers, and auditors with tight action permissions.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '15px', background: 'rgba(157, 0, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9d00ff', flexShrink: 0 }}>
                                        <Zap size={22} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.3rem' }}>WhatsApp & SMS Operations</h4>
                                        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.5 }}>Direct customer notifications on invoice release, order confirmation, and payment schedules.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div style={{ background: '#f8fafc', padding: '3.5rem 2.5rem', borderRadius: '35px', textAlign: 'center', border: '1px solid #f1f5f9' }}>
                                <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#1d4ed8', marginBottom: '0.5rem' }}>100+</h3>
                                <p style={{ color: '#475569', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Global Clients</p>
                            </div>
                            <div style={{ background: '#f8fafc', padding: '3.5rem 2.5rem', borderRadius: '35px', textAlign: 'center', border: '1px solid #f1f5f9', marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#059669', marginBottom: '0.5rem' }}>99%</h3>
                                <p style={{ color: '#475569', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Uptime SLA</p>
                            </div>
                            <div style={{ background: '#f8fafc', padding: '3.5rem 2.5rem', borderRadius: '35px', textAlign: 'center', border: '1px solid #f1f5f9', marginTop: '-2rem' }}>
                                <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#d97706', marginBottom: '0.5rem' }}>24/7</h3>
                                <p style={{ color: '#475569', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Engineers Standby</p>
                            </div>
                            <div style={{ background: '#f8fafc', padding: '3.5rem 2.5rem', borderRadius: '35px', textAlign: 'center', border: '1px solid #f1f5f9' }}>
                                <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#db2777', marginBottom: '0.5rem' }}>2x</h3>
                                <p style={{ color: '#475569', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Process Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elegant Industry CTA */}
            <section style={{ padding: '0 2rem 140px' }} className="section-full">
                <div className="section-inner">
                    <div data-aos="zoom-in" style={{
                        padding: '100px 50px',
                        borderRadius: '70px',
                        textAlign: 'center',
                        background: 'linear-gradient(225deg, #090b10 0%, #1e1b4b 100%)',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 50px 100px rgba(15, 23, 42, 0.25)'
                    }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")', opacity: 0.08 }}></div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'white', marginBottom: '2.5rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                                Scale Your Industry Operations <br />With Custom Software Solutions
                            </h2>
                            <p style={{ fontSize: '1.4rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto 4.5rem', lineHeight: 1.6 }}>
                                Schedule a custom demo built with dummy data of your specific industry workspace.
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                                <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.4rem 4rem', borderRadius: '50px', fontWeight: 900, fontSize: '1.15rem' }}>
                                    Request a Demo
                                </RouterLink>
                                <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-outline cta-hover-industry" style={{ padding: '1.4rem 4rem', borderRadius: '50px', fontWeight: 900, fontSize: '1.15rem', color: 'white', borderColor: 'rgba(255,255,255,0.2)', transition: 'all 0.3s ease' }}>
                                    WhatsApp Consultation
                                </a>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', bottom: '-15%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, #ff007a 0%, transparent 70%)', opacity: 0.1, filter: 'blur(80px)' }}></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Industries;
