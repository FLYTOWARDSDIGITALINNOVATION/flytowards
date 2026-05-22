import { ArrowRight, CheckCircle2, Shield, Search, Layout, RefreshCcw, Gauge, Server, Phone, Lock, TrendingUp, Handshake, Code, Workflow, MonitorSmartphone, Star, Zap, Cpu } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WebDev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whyChooseUs = [
        {
            title: "Business-Driven Development",
            desc: "Every decision is made with conversions, clarity, and ROI in mind.",
            points: ["SEO-first structure", "Conversion-focused layouts", "Clear messaging"],
            icon: <TrendingUp size={40} color="var(--primary)" />,
            delay: "0.1s"
        },
        {
            title: "Built to Scale & Perform",
            desc: "Clean code, fast loading, and future-ready architecture.",
            points: ["High performance & security", "Modern UI/UX", "Long-term scalability"],
            icon: <Server size={40} color="var(--secondary)" />,
            delay: "0.2s"
        }
    ];

    const coreServices = [
        {
            title: "Custom Website Development",
            description: "High-performance, tailor-made websites built around your brand, goals, and users.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
            icon: <Code size={30} color="var(--primary)" />
        },
        {
            title: "WordPress Development",
            description: "Scalable WordPress solutions with custom themes, speed optimization, and clean architecture.",
            img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
            icon: <Layout size={30} color="var(--secondary)" />
        },
        {
            title: "Landing Page Development",
            description: "Conversion-focused landing pages designed to turn traffic into qualified leads.",
            img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
            icon: <MonitorSmartphone size={30} color="var(--accent)" />
        },
        {
            title: "Corporate Websites",
            description: "Professional, trust-driven websites that communicate authority and credibility.",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
            icon: <Shield size={30} color="var(--primary)" />
        },
        {
            title: "Website Redesign",
            description: "Modern UI/UX, improved SEO structure, faster load times, and better user flow.",
            img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
            icon: <RefreshCcw size={30} color="var(--secondary)" />
        },
        {
            title: "Performance & SEO",
            description: "Technical SEO, speed enhancements, and structure optimization for long-term growth.",
            img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
            icon: <Gauge size={30} color="var(--accent)" />
        }
    ];

    const devProcess = [
        { title: "Discovery", desc: "Deep understanding of your business goals, audience, and challenges.", icon: <Search color="var(--primary)" /> },
        { title: "Strategy", desc: "SEO planning, structure mapping, and technical architecture.", icon: <Workflow color="var(--secondary)" /> },
        { title: "Design", desc: "Modern UI/UX crafted for clarity, trust, and conversion.", icon: <Layout color="var(--accent)" /> },
        { title: "Development", desc: "Clean, scalable code built with performance and security in mind.", icon: <Code color="var(--primary)" /> },
        { title: "Launch & Growth", desc: "Testing, deployment, and continuous improvement post-launch.", icon: <TrendingUp color="var(--secondary)" /> }
    ];

    return (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-bg"></div>

            {/* Ambient background blur */}
            <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>
            <div style={{ position: 'absolute', bottom: '20%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(157,0,255,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(50px)' }}></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Code size={18} /> Premium Web Architecture
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Professional <br />
                            <span className="gradient-text">Web Development</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.4rem', fontWeight: 600, opacity: 0.9, lineHeight: 1.6, maxWidth: '600px' }}>
                            Services That Drive Real Business Growth.
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
                            We build fast, secure, SEO-ready websites that convert visitors into customers and scale with your business in the modern digital landscape.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Get a Free Consultation <ArrowRight size={20} />
                            </Link>
                            <a href="#services" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', border: '1px solid var(--border)' }}>Explore Services</a>
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid white', zIndex: 3 }} alt="User" />
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid white', marginLeft: '-15px', zIndex: 2 }} alt="User" />
                                <img src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=100&auto=format&fit=crop" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid white', marginLeft: '-15px', zIndex: 1 }} alt="User" />
                            </div>
                            <div>
                                <div style={{ display: 'flex', gap: '4px', color: 'var(--accent)' }}>
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                                </div>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>100+ Successful Launches</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s', position: 'relative' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px', background: 'rgba(255, 255, 255, 0.4)' }}>
                            <img src="web_development_hero_cyber_1772536127131.png" alt="Futuristic Web Development Services" className="floating-img" style={{ borderRadius: '30px', width: '100%', maxWidth: '650px', objectFit: 'cover' }} />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>

                        {/* Floating Performance Card */}
                        <div data-aos="fade-up" data-aos-delay="500" style={{ position: 'absolute', bottom: '-20px', left: '-30px', background: 'var(--bg-white)', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '15px' }}>
                                <Zap size={30} color="var(--primary)" />
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 900 }}>99.9%</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Uptime & Speed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Bento Box Features - Core Services */}
            <section id="services" style={{ padding: '8rem 0', background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Our Core Services</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Engineered for <span className="gradient-text">Growth & Speed</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Future-ready web solutions designed for peak performance, extreme stability, and unparalleled conversion optimization.
                    </p>
                </div>

                <div className="grid max-w-1200" style={{ margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{
                            padding: '0',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-white)',
                            boxShadow: 'var(--shadow)'
                        }}>
                            <div style={{ height: '240px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="hover-zoom" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))' }}></div>
                                <div style={{ position: 'absolute', bottom: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', padding: '12px', borderRadius: '15px', backdropFilter: 'blur(5px)' }}>
                                    {service.icon}
                                </div>
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 800, color: 'var(--text-dark)' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us & Workflow Side-by-Side */}
            <section id="process" style={{ padding: '6rem 0' }}>
                <div className="grid-2 max-w-1200" style={{ margin: '0 auto', alignItems: 'flex-start', gap: '5rem' }}>
                    {/* Left Side - Process */}
                    <div data-aos="fade-right">
                        <span className="section-tag">Transparent Workflow</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2rem', lineHeight: 1.2 }}>Our Development <br /><span className="gradient-text">Process</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8 }}>
                            A futuristic workflow designed for clarity, speed, and measurable results. We keep you informed at every single stage.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {devProcess.map((step, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', background: 'var(--bg-white)', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                                    <div style={{
                                        width: '60px', height: '60px', flexShrink: 0,
                                        background: `linear-gradient(135deg, rgba(${idx % 2 === 0 ? '0, 242, 255' : '255, 0, 122'}, 0.1) 0%, rgba(${idx % 2 === 0 ? '0, 242, 255' : '255, 0, 122'}, 0.2) 100%)`,
                                        borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.4rem' }}>{step.title}</h4>
                                        <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Why Us Image and Cards */}
                    <div data-aos="fade-left" style={{ position: 'relative', paddingTop: '2rem' }}>
                        <div className="glass-container" style={{ padding: '1rem', borderRadius: '40px', background: 'var(--bg-white)', border: '1px solid var(--border)', marginBottom: '3rem' }}>
                            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop" alt="Team Collaboration" style={{ width: '100%', borderRadius: '30px', objectFit: 'cover', height: '400px' }} />
                        </div>

                        <span className="section-tag">Competitive Edge</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why <span className="gradient-text">Choose Us</span></h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {whyChooseUs.map((item, idx) => (
                                <div key={idx} className="card" style={{ padding: '2.5rem 2rem', background: 'var(--bg-white)', borderLeft: `4px solid ${idx === 0 ? 'var(--primary)' : 'var(--secondary)'}` }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                                        {item.icon}
                                        <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{item.title}</h3>
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>{item.desc}</p>
                                    <ul style={{ listStyle: 'none', color: 'var(--text-dark)', fontWeight: 600, padding: 0 }}>
                                        {item.points.map((pt, pIdx) => (
                                            <li key={pIdx} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '0.5rem' }}>
                                                <CheckCircle2 size={18} color="var(--primary)" /> {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" style={{ padding: '5rem 1rem' }}>
                <div className="cta-content relative" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    background: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat',
                    padding: '8rem 3rem',
                    borderRadius: '50px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    overflow: 'hidden',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(5px)' }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span className="section-tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>Let’s Discuss Your Project</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>
                            Ready to Build a Website That <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 0 30px rgba(0, 242, 255, 0.3)' }}>Works for Your Business?</span>
                        </h2>
                        <p style={{ fontSize: '1.3rem', margin: '0 auto 3rem auto', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', lineHeight: 1.6 }}>
                            Have an idea, a challenge, or an existing website that needs improvement? We’ll help you turn it into a high-performing digital asset.
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 600 }}>
                                <Phone size={20} color="var(--primary)" /> Fast Response
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 600 }}>
                                <Lock size={20} color="var(--secondary)" /> Secure & Confidential
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 600 }}>
                                <Handshake size={20} color="var(--accent)" /> Long-Term Partnership
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Book a Free Strategy Call <ArrowRight size={20} />
                            </a>
                            <Link to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', color: 'white', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}>Talk with Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WebDev;
