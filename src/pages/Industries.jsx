import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, 
    Building, 
    Gem, 
    Coins, 
    GraduationCap, 
    Activity, 
    Settings, 
    CheckCircle2,
    ShoppingBag,
    Server,
    Shield,
    MessageCircle
} from 'lucide-react';

const Industries = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const industriesList = [
        {
            title: "Construction",
            subheading: "BUILD WITH TECHNICAL PRECISION",
            desc: "Custom ERP & project management environments designed to control budgets, manage sites, and automate supplier transactions.",
            color: "#f97316", // Orange
            bgColor: "rgba(249, 115, 22, 0.05)",
            icon: <Building size={32} color="#f97316" />,
            capabilities: [
                "Real-time material & inventory tracking",
                "Contractor & workforce logs automation",
                "Milestone billing & progress invoicing"
            ],
            link: "/industries/construction"
        },
        {
            title: "Jewelry Shop",
            subheading: "LUSTER MEETS SMART MANAGEMENT",
            desc: "High-security inventory management with client tracking schemes, barcode support, and elegant visual cataloging.",
            color: "var(--primary)", // Cyan
            bgColor: "rgba(0, 242, 255, 0.05)",
            icon: <Gem size={32} color="var(--primary)" />,
            capabilities: [
                "RFID & Barcode stock controls",
                "Gold & silver savings scheme tracking",
                "Interactive digital catalogue displays"
            ],
            link: "/industries/retail"
        },
        {
            title: "Gold Loan",
            subheading: "SECURE INTEREST & PLEDGE WORKFLOWS",
            desc: "Calculators and ledger frameworks built for fast pawn processing, interest accrual audit, and payment reminders.",
            color: "#eab308", // Yellow/Gold
            bgColor: "rgba(234, 179, 8, 0.05)",
            icon: <Coins size={32} color="#eab308" />,
            capabilities: [
                "Live market gold rate synchronization",
                "Flexible scheme & interest tier setup",
                "Auto SMS & WhatsApp payment alerts"
            ],
            link: "/industries/finance"
        },
        {
            title: "School / College",
            subheading: "NURTURING SMART DIGITAL CAMPUSES",
            desc: "Next-gen ERP systems supporting fee collecting portals, digital grading sheets, timetables, and teacher-parent workspaces.",
            color: "var(--accent)", // Blue/Indigo
            bgColor: "rgba(157, 0, 255, 0.05)",
            icon: <GraduationCap size={32} color="var(--accent)" />,
            capabilities: [
                "Admissions & student lifecycle tracking",
                "Integrated online fee collections",
                "Automated report cards & gradebook"
            ],
            link: "/industries/education"
        },
        {
            title: "Hospital & Clinic",
            subheading: "PRIORITIZE SEAMLESS PATIENT CARE",
            desc: "OPD scheduling portals, EMR records integration, smart pharmacy tracking, and doctor availability widgets.",
            color: "#10b981", // Green
            bgColor: "rgba(16, 185, 129, 0.05)",
            icon: <Activity size={32} color="#10b981" />,
            capabilities: [
                "Electronic health records (EHR) database",
                "WhatsApp Booking & OPD queue updates",
                "Ward availability & pharmacy counter bills"
            ],
            link: "/industries/healthcare"
        },
        {
            title: "Manufacturing",
            subheading: "ZERO DOWNTIME PRODUCT WORKFLOWS",
            desc: "Materials Requirements Planning (MRP), quality check control nodes, assembly flow schedules, and logistics sync.",
            color: "#6366f1", // Indigo
            bgColor: "rgba(99, 102, 241, 0.05)",
            icon: <Settings size={32} color="#6366f1" />,
            capabilities: [
                "Shop floor execution & machine logs",
                "Automated supply chain notifications",
                "Preventive maintenance scheduling"
            ],
            link: "/industries/manufacturing"
        },
        {
            title: "Retail Shop",
            subheading: "NEXT-GEN POINT-OF-SALE EFFICIENCY",
            desc: "Multi-counter billing modules with integrated digital payment gateways, bulk discount controllers, and vendor sync engines.",
            color: "#ec4899", // Pink
            bgColor: "rgba(236, 72, 153, 0.05)",
            icon: <ShoppingBag size={32} color="#ec4899" />,
            capabilities: [
                "High-speed POS with barcode scan",
                "Omnichannel inventory reconciliation",
                "Customer database & loyalty points list"
            ],
            link: "/industries/retail"
        }
    ];

    return (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ padding: '140px 8% 60px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', width: '100%' }}>
                    
                    {/* Left Text content */}
                    <div data-aos="fade-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
                            <span style={{ width: '30px', height: '2px', background: 'var(--primary)' }}></span>
                            Tailored Business Solutions
                        </span>
                        
                        <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1 }}>
                            Industries We <br />
                            <span className="gradient-text">Transform</span>
                        </h1>
                        
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '520px' }}>
                            We craft premium, customized digital systems designed to streamline workflows, secure data assets, and drive conversions for specialized business sectors.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                            <a href="#sectors" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                Explore Industries <ArrowRight size={18} />
                            </a>
                            <Link to="/contact" className="btn btn-outline">
                                Discuss Your Need
                            </Link>
                        </div>
                    </div>

                    {/* Right Image/Mockup Showcase */}
                    <div data-aos="fade-left" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.15)', background: 'var(--bg-white)', border: '1px solid var(--border)', maxWidth: '480px' }}>
                            <img 
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                                alt="Digital Solutions Showcase" 
                                style={{ width: '100%', height: 'auto', display: 'block' }} 
                            />
                            
                            {/* Overlay Card */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                right: '20px',
                                background: 'rgba(10, 15, 30, 0.85)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '1.25rem',
                                borderRadius: '18px',
                                color: '#fff',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.4rem',
                                boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                            }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></span>
                                    Operational Excellence
                                </span>
                                <span style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.4 }}>
                                    Customized Suite For Every Sector
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Sectors Grid Section */}
            <section id="sectors" style={{ padding: '6rem 8%', background: 'rgba(157, 0, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '1rem' }}>Industries We Power</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800 }}>
                        Engineered for Your <span className="gradient-text">Specialty</span>
                    </h2>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.8 }}>
                        Discover standard integrations, secure operational flows, and customer retention systems built specifically for your sector.
                    </p>
                </div>

                <div className="grid" style={{ gap: '3rem' }}>
                    {industriesList.map((ind, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '24px', background: 'var(--bg-white)', position: 'relative' }}>
                            
                            {/* Card Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <div style={{ background: ind.bgColor, padding: '12px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {ind.icon}
                                </div>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    color: 'var(--primary)',
                                    background: 'rgba(0, 242, 255, 0.08)',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '20px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Smart Tech
                                </span>
                            </div>

                            {/* Card Body */}
                            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)' }}>{ind.title}</h3>
                            
                            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: ind.color, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                                {ind.subheading}
                            </span>
                            
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.7, flexGrow: 1 }}>
                                {ind.desc}
                            </p>

                            <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0 0 1.5rem 0' }} />

                            {/* Capabilities List */}
                            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                                Key Capabilities
                            </h4>
                            
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {ind.capabilities.map((cap, cidx) => (
                                    <li key={cidx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'var(--text-dark)', fontSize: '0.95rem', fontWeight: 600 }}>
                                        <CheckCircle2 size={16} color={ind.color} style={{ flexShrink: 0, marginTop: '3px' }} />
                                        <span>{cap}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Action Button */}
                            <Link to={ind.link} className="btn btn-outline" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 'auto', padding: '0.8rem' }}>
                                Learn More <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                            </Link>

                        </div>
                    ))}
                </div>
            </section>

            {/* Value Proposition Section */}
            <section style={{ padding: '6rem 8%', background: 'var(--bg-white)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    
                    {/* Left Column: Text & Features List */}
                    <div data-aos="fade-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
                            <span style={{ width: '30px', height: '2px', background: 'var(--primary)' }}></span>
                            Value Proposition
                        </span>
                        
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800 }}>
                            Unified Technology <span className="gradient-text">Ecosystem</span>
                        </h2>
                        
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            We don't just deliver generic features. We establish a complete business system containing customized permissions, API gateways, and notification models suitable for audit controls.
                        </p>

                        {/* Features List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <div style={{ background: 'rgba(0, 242, 255, 0.05)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Server size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 0.25rem 0', color: 'var(--text-dark)' }}>High-Availability Cloud</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                                        Your database and transactions remain secure and backed up daily on enterprise grade clouds.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <div style={{ background: 'rgba(255, 0, 122, 0.05)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Shield size={24} color="var(--secondary)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 0.25rem 0', color: 'var(--text-dark)' }}>Role-Based Privacy Controls</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                                        Configure multiple branches, counters, managers, and auditors with tight action permissions.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <div style={{ background: 'rgba(157, 0, 255, 0.05)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <MessageCircle size={24} color="var(--accent)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 0.25rem 0', color: 'var(--text-dark)' }}>WhatsApp & SMS Operations</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                                        Direct customer notifications on invoice release, order confirmation, and payment schedules.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div data-aos="fade-left" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        
                        <div style={{ background: 'rgba(37, 99, 235, 0.02)', border: '1px solid var(--border)', padding: '2.5rem 1.5rem', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <span style={{ fontSize: '3rem', fontWeight: 800, color: '#2563eb' }}>100+</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Clients</span>
                        </div>

                        <div style={{ background: 'rgba(16, 185, 129, 0.02)', border: '1px solid var(--border)', padding: '2.5rem 1.5rem', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <span style={{ fontSize: '3rem', fontWeight: 800, color: '#10b981' }}>99%</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Uptime SLA</span>
                        </div>

                        <div style={{ background: 'rgba(217, 119, 6, 0.02)', border: '1px solid var(--border)', padding: '2.5rem 1.5rem', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <span style={{ fontSize: '3rem', fontWeight: 800, color: '#d97706' }}>24/7</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Engineers Standby</span>
                        </div>

                        <div style={{ background: 'rgba(219, 39, 119, 0.02)', border: '1px solid var(--border)', padding: '2.5rem 1.5rem', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <span style={{ fontSize: '3rem', fontWeight: 800, color: '#db2777' }}>2x</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Process Speed</span>
                        </div>

                    </div>

                </div>
            </section>

            {/* Section 11 — Final CTA (Boxed Card format with Home Page text alignment) */}
            <section id="contact-cta" style={{ padding: '6rem 1rem' }}>
                <div className="cta-content" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    padding: '6rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#0b0f19'
                }}>
                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span className="section-tag" style={{ marginBottom: '1.5rem', justifyContent: 'center', marginInline: 'auto' }}>
                            <span style={{ color: 'var(--primary)' }}>Get</span> <span style={{ color: 'var(--secondary)' }}>Started</span>
                        </span>
                        
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Scale Your Industry Operations <span className="gradient-text">With Custom Software Solutions</span>
                        </h2>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', maxWidth: '850px' }}>
                            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.6 }}>
                                The right system starts with a clear understanding of your industry workflows.
                            </p>
                            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.8 }}>
                                Whether you need to manage construction sites, track retail sales, coordinate medical clinics, automate shop floor machinery, or run digital school portals, start by choosing a sector.
                            </p>
                            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.8, fontWeight: 500 }}>
                                Schedule a custom demo built with dummy data of your specific industry workspace to explore the capabilities.
                            </p>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Request a Demo <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </Link>
                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1.2rem 3rem', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'transparent', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                                WhatsApp Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Industries;
