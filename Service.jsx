import { Monitor, Smartphone, MessageCircle, BarChart, Globe, Palette, ArrowRight, Zap, Lightbulb, Target, Rocket, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Web Development",
            desc: "High-end, performance-focused web architectures designed for conversion and scale.",
            icon: <Monitor size={40} color="var(--primary)" />,
            link: "/web-development",
            delay: "0s",
            color: "0, 242, 255"
        },
        {
            title: "WhatsApp Marketing",
            desc: "Automated customer engagement and marketing campaigns at enterprise scale.",
            icon: <MessageCircle size={40} color="var(--secondary)" />,
            link: "/whatsapp-api",
            delay: "0.1s",
            color: "255, 0, 122"
        },
        {
            title: "Digital Marketing",
            desc: "ROI-driven campaigns across Google, Meta, and LinkedIn to flood your funnel with leads.",
            icon: <BarChart size={40} color="var(--accent)" />,
            link: "/digital-marketing",
            delay: "0.2s",
            color: "157, 0, 255"
        },
        {
            title: "App Development",
            desc: "Sleek, native and cross-platform mobile experiences that users love to engage with.",
            icon: <Smartphone size={40} color="var(--primary)" />,
            link: "#",
            delay: "0.3s",
            color: "0, 242, 255"
        },
        {
            title: "Brand Identity",
            desc: "Complete visual storytelling and design systems that make your brand unmistakable.",
            icon: <Palette size={40} color="var(--secondary)" />,
            link: "#",
            delay: "0.4s",
            color: "255, 0, 122"
        },
        {
            title: "Cloud Solutions",
            desc: "Scalable cloud infrastructure and hosting services to keep your platform online 24/7.",
            icon: <Globe size={40} color="var(--accent)" />,
            link: "#",
            delay: "0.5s",
            color: "157, 0, 255"
        }
    ];

    const processes = [
        {
            step: "01",
            title: "Discovery & Strategy",
            desc: "We analyze your business, market, and competitors to craft a bulletproof digital strategy.",
            icon: <Target />
        },
        {
            step: "02",
            title: "Design & Architecture",
            desc: "Our team designs high-converting user interfaces mapped to your business goals.",
            icon: <Lightbulb />
        },
        {
            step: "03",
            title: "Development & Build",
            desc: "We build scalable solutions using modern tech stacks for maximum performance.",
            icon: <Zap />
        },
        {
            step: "04",
            title: "Launch & Scale",
            desc: "After rigorous testing, we launch and continuously optimize your digital assets.",
            icon: <Rocket />
        }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Zap size={18} /> Premium Services
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Our Digital <br />
                            <span className="gradient-text">Excellence</span>
                        </h1>
                        <h2 style={{ fontSize: '1.3rem', fontWeight: 600, opacity: 0.9, lineHeight: 1.6, maxWidth: '600px', marginBottom: '2.5rem' }}>
                            We provide holistic digital transformation services that help businesses evolve, scale, and dominate their niche through innovation.
                        </h2>
                        
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#services-list" className="btn btn-primary">
                                Explore Services <ArrowRight size={20} />
                            </a>
                            <a href="/contact" className="btn btn-outline" style={{ border: '1px solid var(--border)' }}>Book a Consultation</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px' }}>
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60" alt="Digital Services" className="floating-img" style={{ borderRadius: '30px', width: '100%', maxWidth: '650px' }} />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section id="services-list" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Core Offerings</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Transformative <span className="gradient-text">Solutions</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Elevate your brand with our comprehensive suite of high-performance digital services.
                    </p>
                </div>

                <div className="grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ transitionDelay: service.delay, position: 'relative', overflow: 'hidden' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-15px)';
                                e.currentTarget.style.boxShadow = `0 30px 60px rgba(${service.color}, 0.15)`;
                                e.currentTarget.style.borderColor = `rgba(${service.color}, 0.3)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                            }}
                        >
                            <div style={{
                                width: '80px', height: '80px',
                                background: `linear-gradient(135deg, rgba(${service.color}, 0.1) 0%, transparent 100%)`,
                                borderRadius: '25px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '2rem', border: `1px solid rgba(${service.color}, 0.2)`
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 800 }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>{service.desc}</p>
                            
                            {service.link !== "#" ? (
                                <Link to={service.link} style={{ 
                                    display: 'inline-flex', alignItems: 'center', gap: '8px', 
                                    color: `rgba(${service.color}, 1)`, textDecoration: 'none', 
                                    fontWeight: 700, fontSize: '1rem', marginTop: 'auto' 
                                }}>
                                    Learn More <ArrowRight size={18} />
                                </Link>
                            ) : (
                                <span style={{ 
                                    display: 'inline-flex', alignItems: 'center', gap: '8px', 
                                    color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', marginTop: 'auto',
                                    opacity: 0.6
                                }}>
                                    Coming Soon
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Process Section */}
            <section style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">How We Work</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our Proven <span className="gradient-text">Methodology</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        We follow a systematic approach to ensure maximum value and seamless execution on every project.
                    </p>
                </div>

                <div className="grid">
                    {processes.map((process, idx) => (
                        <div key={idx} style={{
                            background: 'var(--bg-white)',
                            padding: '3rem 2rem',
                            borderRadius: '30px',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow)',
                            position: 'relative'
                        }} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <h4 style={{ 
                                position: 'absolute', top: '1rem', right: '1.5rem', 
                                fontSize: '4rem', fontWeight: 900, color: 'var(--text-dark)', opacity: 0.05, 
                                fontFamily: 'Outfit' 
                            }}>
                                {process.step}
                            </h4>
                            <div style={{
                                width: '60px', height: '60px',
                                background: 'var(--gradient-primary)',
                                color: 'white',
                                borderRadius: '20px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {process.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{process.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{process.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section>
                <div className="cta-card" data-aos="zoom-in" style={{
                    background: 'var(--text-dark)', color: 'white',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                    padding: '6rem 3rem'
                }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
                        Ready to <span style={{ color: 'var(--primary)' }}>Scale</span> Your Business?
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '700px', marginBottom: '3rem', lineHeight: 1.8 }}>
                        Let's build something extraordinary together. Connect with our team of experts to discuss your digital transformation journey.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Start a Project <ArrowRight size={20} />
                        </Link>
                        <a href="mailto:info@flytowards-digital.com" className="btn btn-outline" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                            Contact Sales
                        </a>
                    </div>
                    <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.2 }}></div>
                </div>
            </section>
        </main>
    );
};

export default Service;
