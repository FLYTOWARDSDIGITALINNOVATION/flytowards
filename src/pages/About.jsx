import { ArrowRight, CheckCircle2, Target, Eye, Code, TrendingUp, Cpu, Monitor, Zap, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "About Fly Towards Digital Innovation";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content",
            "We Are The Best & Leading IT Company in Sankarankovil Provide the Software & Website Development Digital Marketing Services");

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content",
            "Digital marketing services, Payroll Software, CRM Software, Website Development");

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "index, follow");

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href",
            "https://flytowardsdigitalinnovation.com/about");

    }, []);
    return (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-bg"></div>

            {/* Aesthetic Ambient Background */}
            <div style={{ position: 'absolute', top: '5%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(50px)' }}></div>
            <div style={{ position: 'absolute', top: '35%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(255,0,122,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>
            <div style={{ position: 'absolute', top: '65%', left: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(157,0,255,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>

            {/* Hero Section */}
            <section className="hero about-hero">
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag">Driven by Innovation.</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 900 }}>
                            About Us Fly Towards <br />
                            Your <span className="gradient-text">Growth.</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8 }}>
                            We help brands grow smarter, faster, and stronger through innovative digital marketing and scalable software solutions designed for today’s competitive digital landscape.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#about" className="btn btn-primary">Learn More <ArrowRight size={20} /></a>
                            <a href="/contact" className="btn btn-outline">Free Consultation</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container">
                            <img
                                src="ab.webp"
                                alt="Innovation Hub"
                                className="floating-img"
                            />
                            <div className="glow-aura"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Fly Towards */}
            <section id="about" style={{ position: 'relative', padding: '6rem 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                    {/* Block 1: About Company */}
                    <div className="about-company-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '5rem' }}>
                        <div className="about-company-media" style={{ flex: '1 1 500px', position: 'relative', minHeight: '500px' }} data-aos="fade-right">
                            <img src="ab (1).webp" alt="Team Working" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }} />
                            
                        </div>
                        <div style={{ flex: '1 1 400px' }} data-aos="fade-left">
                            <span className="section-tag">About Company</span>
                            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.1 }}>About Fly Towards <br /><span className="gradient-text">Digital Innovation</span></h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.15rem' }}>
                                Fly Towards Digital Innovation is a results driven digital marketing and software solutions company focused on helping businesses build a strong online presence and achieve consistent growth.
                            </p>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8, fontSize: '1.15rem' }}>
                                We provide innovative, scalable, and affordable digital solutions for startups, small businesses, and growing enterprises looking to succeed in today’s competitive digital landscape.
                            </p>

                            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                <div style={{ padding: '1.5rem', background: 'var(--bg-white)', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem' }}>Multiple</h3>
                                    <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Digital Services</span>
                                </div>
                                <div style={{ padding: '1.5rem', background: 'var(--bg-white)', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--secondary)', marginBottom: '0.5rem' }}>Multiple</h3>
                                    <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Projects Delivered</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Block 2: Who We Are */}
                    <div className="about-team-row" style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '5rem' }}>
                        <div style={{ flex: '1 1 400px' }} data-aos="fade-right">
                            <span className="section-tag">Who We Are</span>
                            <h3 className="mb-4" style={{ fontSize: '3rem', lineHeight: 1.1 }}>Transforming Businesses Through <span className="gradient-text">Innovation</span></h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8, fontSize: '1.15rem' }}>
                                We are a team of skilled digital marketers, designers, developers, and growth strategists passionate about transforming businesses. Our expertise includes digital marketing, SEO, social media marketing, Google Ads, web/app development, CRM software, billing software, payroll software, and WhatsApp Marketing API solutions.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '1rem', background: 'var(--bg-white)', borderRadius: '15px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Result-oriented strategies</span>
                                </li>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '1rem', background: 'var(--bg-white)', borderRadius: '15px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                                    <CheckCircle2 size={24} color="var(--secondary)" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Transparent communication</span>
                                </li>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '1rem', background: 'var(--bg-white)', borderRadius: '15px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                                    <CheckCircle2 size={24} color="var(--accent)" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Affordable & scalable pricing</span>
                                </li>
                            </ul>
                        </div>
                        <div className="about-team-media" style={{ flex: '1 1 500px', position: 'relative' }} data-aos="fade-left">
                            <img src="ab part.webp" alt="Business People" style={{ width: '100%', height: '550px', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }} />
                            <div className="about-team-badge" style={{ position: 'absolute', top: '3rem', left: '-3rem', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.5)' }}>
                                <h4 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)', margin: 0 }}>Expert</h4>
                                <p style={{ color: 'var(--text-dark)', margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>Development Team </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* What We Do */}
            <section id="services" style={{ padding: '100px 8%' }}>
                <div className="text-center max-w-800 mb-4" data-aos="fade-up">
                    <span className="section-tag">Services</span>
                    <h2 style={{ fontSize: '3rem' }}>What We Do</h2>
                </div>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: '4rem', gap: '2rem' }}>
                    {[
                        { title: 'Digital Marketing & SEO', img: 'Digital Marketing & SEO.webp', link: '/digital-marketing' },
                        { title: 'Web & App Development', img: 'Web & app development.jpg.webp', link: '/web-development' },
                        { title: 'CRM & Business Software', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', link: '/smart-crm' },
                        { title: 'Billing & Payroll Systems', img: 'Billing-_-Payroll-Systems.webp', link: '/products' },
                        { title: 'WhatsApp Marketing API', img: 'WhatsApp Marketing API.jpg.webp', link: '/whatsapp-api' },
                        { title: 'Growth Strategy', img: 'Growth-Strategy.webp', link: '/service' }
                    ].map((service, idx) => (
                        <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{ position: 'relative', height: '420px', borderRadius: '35px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="hover-zoom" />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)' }}></div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem' }}>
                                <h4 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 1rem 0' }}>{service.title}</h4>
                                <Link to={service.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700, padding: '0.6rem 1.2rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', textDecoration: 'none' }}>
                                    Explore <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div className="grid">
                    <div className="card text-center ft-video-card" data-aos="fade-up">
                        <video
                            className="ft-video-card__media"
                            src="/ab vd.mov"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-hidden="true"
                            tabIndex={-1}
                        />
                        <div className="ft-video-card__overlay" aria-hidden="true"></div>
                        <div className="ft-video-card__content">
                            <h2 className="mb-4">Our Mission</h2>
                            <p>
                                Our mission is to empower businesses with innovative digital marketing and software solutions that drive real growth and long term value.
                            </p>
                        </div>
                    </div>

                    <div className="card text-center ft-video-card" data-aos="fade-up" style={{ transitionDelay: '0.1s' }} id="vision">
                        <video
                            className="ft-video-card__media"
                            src="/ab vd2.mov"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-hidden="true"
                            tabIndex={-1}
                        />
                        <div className="ft-video-card__overlay" aria-hidden="true"></div>
                        <div className="ft-video-card__content">
                            <h2 className="mb-4">Our Vision</h2>
                            <p>
                                Our vision is to become a trusted digital marketing and technology partner by delivering future ready, scalable, and impactful solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="cta" className="text-center" data-aos="zoom-in" style={{ padding: '5rem 2rem' }}>
                <div className="cta-content relative" style={{
                    background: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat',
                    padding: '6rem 3rem',
                    borderRadius: '50px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    overflow: 'hidden',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(5px)' }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span className="section-tag" style={{ background: 'clack' }}>Let’s Grow Together</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-dark)' }}>
                            Ready to Grow Your <span className="gradient-text">Business?</span>
                        </h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '4rem', color: '#475569', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                            Don’t just build a website—build a system that works for you.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Book Free Consultation Now <ArrowRight size={20} />
                            </Link>
                             <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                                Chat on WhatsApp 
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "About Fly Towards Digital Innovation";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content",
            "We Are The Best & Leading IT Company in Sankarankovil Provide the Software & Website Development Digital Marketing Services");

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content",
            "Digital marketing services, Payroll Software, CRM Software, Website Development");

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "index, follow");

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href",
            "https://flytowardsdigitalinnovation.com/about");

    }, []);
    return (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            <style>{`
                .about-section {
                    padding: 5rem 5%;
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                }
                .about-title {
                    font-size: clamp(2.2rem, 4vw, 3.2rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 1.5rem;
                    color: var(--text-dark);
                }
                .about-card-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }
                .about-card {
                    background: transparent;
                    border: none;
                    border-left: 3px solid rgba(15, 23, 42, 0.08);
                    border-radius: 0;
                    padding: 1.5rem 0 1.5rem 2rem;
                    transition: all 0.3s ease;
                    box-shadow: none;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .about-card:hover {
                    transform: translateX(8px);
                    box-shadow: none;
                    border-left-color: var(--primary);
                }
                .about-card-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    background: rgba(0, 242, 255, 0.05);
                    color: var(--primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }
                .about-card-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: var(--text-dark);
                }
                .about-card-desc {
                    color: var(--text-muted);
                    line-height: 1.6;
                    font-size: 1.05rem;
                }
                .step-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1.5rem;
                }
                .step-card {
                    position: relative;
                    background: transparent;
                    border: none;
                    border-left: 3px solid rgba(15, 23, 42, 0.06);
                    border-radius: 0;
                    padding: 1.5rem 0 1.5rem 1.8rem;
                    transition: all 0.3s ease;
                }
                .step-card:hover {
                    border-left-color: var(--primary);
                    transform: translateX(6px);
                }
                .step-number {
                    font-size: 2.5rem;
                    font-weight: 900;
                    background: var(--gradient-primary);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 1rem;
                    opacity: 0.8;
                }
                .faq-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .faq-card {
                    background: transparent;
                    border: none;
                    border-left: 3px solid rgba(15, 23, 42, 0.06);
                    border-radius: 0;
                    padding: 1.5rem 0 1.5rem 1.8rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .faq-card:hover {
                    border-left-color: var(--primary);
                }
                .faq-card.open {
                    border-left-color: var(--primary);
                    box-shadow: none;
                }
                @media (max-width: 991px) {
                    .about-section {
                        padding: 4rem 1.5rem;
                    }
                    .about-card-grid {
                        grid-template-columns: 1fr;
                    }
                    .step-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <div className="mesh-bg"></div>

            {/* Aesthetic Ambient Background */}
            <div style={{ position: 'absolute', top: '5%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(50px)' }}></div>
            <div style={{ position: 'absolute', top: '35%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(255,0,122,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>
            <div style={{ position: 'absolute', top: '65%', left: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(157,0,255,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>

            {/* Hero Section */}
            <section className="hero about-hero">
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag">Driven by Innovation.</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 900 }}>
                            About Us Fly Towards <br />
                            Your <span className="gradient-text">Growth.</span>
                        </h1>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: 1.4 }}>
                            A Software Development Company Focused on Building for Real Business Needs
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.8 }}>
                            Technology should make business easier to operate, not add another layer of complexity. Fly Towards Digital Innovation is a software development company focused on helping businesses turn their technology requirements into practical software solutions. We work with organisations that need software built around their processes, users, operational requirements and growth plans.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.8 }}>
                            From custom business applications and enterprise software to SaaS platforms, web applications, mobile apps and digital transformation initiatives, we approach every project with the business requirement at the centre.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            Our focus is simple: understand the problem, define the right solution and build software that supports the way your business needs to work.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary">Talk to Our Team <ArrowRight size={20} /></Link>
                            <Link to="/contact" className="btn btn-outline">Discuss Your Project</Link>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container">
                            <img
                                src="ab.webp"
                                alt="Innovation Hub"
                                className="floating-img"
                            />
                            <div className="glow-aura"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Fly Towards */}
            <section id="about" style={{ position: 'relative', padding: '6rem 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                    {/* Block 1: About Company */}
                    <div className="about-company-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '5rem' }}>
                        <div className="about-company-media" style={{ flex: '1 1 500px', position: 'relative', minHeight: '500px' }} data-aos="fade-right">
                            <img src="ab (1).webp" alt="Team Working" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }} />
                            
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3.5rem' }} data-aos="fade-up">
                    <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-dark)', fontStyle: 'italic', margin: 0 }}>
                        This approach keeps technology connected to business objectives.
                    </p>
                </div>
            </section>

            {/* SECTION 5: Why Businesses Work With Us */}
            <section className="about-section" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Why Us</span>
                    <h2 className="about-title" style={{ marginTop: '1rem' }}>Why Businesses Work With Us</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.7 }}>
                        Choosing between software development firms is not only about comparing technical capabilities. It is also about finding a team that understands the requirement and can work with the business throughout the project. Our <Link to="/blog">case studies</Link> demonstrate our commitment to solving business problems.
                    </p>
                </div>

                <div className="grid-matrix grid-matrix-2col">
                    {[
                        {
                            title: "Technical Expertise",
                            icon: <Code size={26} />,
                            desc: "Our strategy identifies technical expertise as one of Fly Towards Digital Innovation's core strengths. We apply that technical focus to projects where businesses need software designed around specific requirements.",
                            color: "var(--primary)"
                        },
                        {
                            title: "Experienced Developers",
                            icon: <Users size={26} />,
                            desc: "Software needs to work in the real world, not only in a specification document. Our development approach is supported by experienced developers working across different software requirements.",
                            color: "var(--secondary)"
                        },
                        {
                            title: "End-to-End Development",
                            icon: <Workflow size={26} />,
                            desc: "We provide an end-to-end development approach, from understanding the requirement through software development and future improvement.",
                            color: "var(--accent)"
                        },
                        {
                            title: "Flexible Engagement Models",
                            icon: <Layers size={26} />,
                            desc: "Different businesses have different project requirements. Our strategy identifies flexible engagement models as one of our strengths, allowing projects to be approached according to their individual needs.",
                            color: "var(--primary)"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="grid-matrix-item" data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="about-card-icon" style={{ background: `rgba(0, 242, 255, 0.05)`, color: item.color, border: `1px solid rgba(0, 242, 255, 0.1)` }}>
                                {item.icon}
                            </div>
                            <h4 className="about-card-title">{item.title}</h4>
                            <p className="about-card-desc" style={{ margin: 0 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 6: Our Core Capabilities */}
            <section className="about-section" style={{ background: 'rgba(255, 0, 122, 0.02)', borderRadius: '40px', padding: '5rem 5%', marginTop: '3rem', marginBottom: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Capabilities</span>
                    <h2 className="about-title" style={{ marginTop: '1rem' }}>Our Core Capabilities</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                        We deliver robust custom software engineering and digital transformation systems optimized for enterprise and commercial requirements.
                    </p>
                </div>

                <div className="about-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                    {[
                        {
                            title: "Custom Software Development",
                            icon: <Code size={26} />,
                            desc: <span>We focus on <Link to="/service">custom software development</Link> around specific business processes, users, workflows and requirements.</span>
                        },
                        {
                            title: "Enterprise Software",
                            icon: <Database size={26} />,
                            desc: <span>We build <Link to="/products">enterprise software</Link> solutions designed to support structured business operations, teams, workflows and organisational requirements.</span>
                        },
                        {
                            title: "SaaS Development",
                            icon: <Sparkles size={26} />,
                            desc: <span>We help businesses with <Link to="/service">SaaS development</Link> around defined product requirements, users and business models.</span>
                        },
                        {
                            title: "Web Application Development",
                            icon: <Code size={26} />,
                            desc: <span>We specialize in <Link to="/web-development">web application development</Link> for internal operations, customer experiences, business workflows and digital products.</span>
                        },
                        {
                            title: "Mobile App Development",
                            icon: <Smartphone size={26} />,
                            desc: <span>We deliver <Link to="/web-development">mobile app development</Link> services designed around specific business use cases, customer requirements and operational needs.</span>
                        },
                        {
                            title: "Software Maintenance",
                            icon: <Wrench size={26} />,
                            desc: <span>We support existing software requirements through <Link to="/service">software maintenance</Link>, improvements and ongoing development where appropriate.</span>
                        },
                        {
                            title: "Digital Transformation",
                            icon: <Workflow size={26} />,
                            desc: <span>We help businesses navigate <Link to="/service">digital transformation</Link>, moving from manual, outdated or disconnected processes toward more connected digital workflows and software systems.</span>
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="about-card" data-aos="fade-up" data-aos-delay={idx * 50}>
                            <div className="about-card-icon" style={{ background: 'rgba(255, 0, 122, 0.05)', color: 'var(--secondary)' }}>
                                {item.icon}
                            </div>
                            <h4 className="about-card-title">{item.title}</h4>
                            <p className="about-card-desc" style={{ margin: 0 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 7: Industries We Support */}
            <section className="about-section" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Industries We Support</span>
                    <h2 className="about-title" style={{ marginTop: '1rem' }}>Built Around the Needs of Different Industries</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.7 }}>
                        Businesses in different industries operate differently. Their workflows, users, processes and technology requirements are not interchangeable.
                    </p>
                </div>

                <div className="about-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                    {[
                        { title: "Healthcare", icon: <HeartPulse size={26} />, desc: <span>We build customized <Link to="/industries">healthcare software</Link> for patient records and hospital management workflows.</span> },
                        { title: "Manufacturing", icon: <Factory size={26} />, desc: <span>We develop <Link to="/industries">manufacturing software</Link> to streamline material tracking and shop floor logs.</span> },
                        { title: "Retail", icon: <ShoppingBag size={26} />, desc: <span>We engineer <Link to="/industries">retail software</Link> with POS counter billing and omnichannel inventory synchronization.</span> },
                        { title: "Education", icon: <GraduationCap size={26} />, desc: <span>We provide <Link to="/industries">education software</Link> supporting student registration and portal solutions.</span> },
                        { title: "Construction", icon: <HardHat size={26} />, desc: <span>We design <Link to="/industries">construction software</Link> to track raw materials and project ledger reports.</span> },
                        { title: "Finance", icon: <Landmark size={26} />, desc: <span>We deliver secure <Link to="/industries">finance software</Link> for pawn calculators and savings scheme accounts.</span> },
                        { title: "Hospitality", icon: <Utensils size={26} />, desc: <span>We build tailored <Link to="/industries">hospitality software</Link> for booking registers and customer counters.</span> }
                    ].map((item, idx) => (
                        <div key={idx} className="about-card" data-aos="fade-up" data-aos-delay={idx * 50}>
                            <div className="about-card-icon" style={{ background: 'rgba(0, 242, 255, 0.08)', color: 'var(--primary)' }}>
                                {item.icon}
                            </div>
                            <h4 className="about-card-title">{item.title}</h4>
                            <p className="about-card-desc" style={{ margin: 0 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3.5rem', opacity: 0.8 }} data-aos="fade-up">
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', fontStyle: 'italic', margin: 0 }}>
                        The SEO strategy identifies these industries as key target markets for the business.
                    </p>
                </div>
            </section>

            {/* SECTION 8: What Makes Our Approach Different */}
            <section className="about-section" style={{ background: 'rgba(15, 23, 42, 0.02)', borderRadius: '40px', padding: '6rem 5%', marginTop: '3rem', marginBottom: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Our Approach Difference</span>
                    <h2 className="about-title" style={{ marginTop: '1rem' }}>What Makes Our Approach Different</h2>
                </div>

                    {/* Block 2: Who We Are */}
                    <div className="about-team-row" style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '5rem' }}>
                        <div style={{ flex: '1 1 400px' }} data-aos="fade-right">
                            <span className="section-tag">Who We Are</span>
                            <h3 className="mb-4" style={{ fontSize: '3rem', lineHeight: 1.1 }}>Transforming Businesses Through <span className="gradient-text">Innovation</span></h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8, fontSize: '1.15rem' }}>
                                We are a team of skilled digital marketers, designers, developers, and growth strategists passionate about transforming businesses. Our expertise includes digital marketing, SEO, social media marketing, Google Ads, web/app development, CRM software, billing software, payroll software, and WhatsApp Marketing API solutions.
                            </p>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text-dark)' }}>This means asking:</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                                {[
                                    "What problem are we solving?",
                                    "Who will use the software?",
                                    "What process needs to change?",
                                    "What systems already exist?",
                                    "What functionality is actually required?",
                                    "What could the business need in the future?"
                                ].map((q, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-dark)', fontWeight: 500 }}>
                                        <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                                        <span>{q}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="about-team-media" style={{ flex: '1 1 500px', position: 'relative' }} data-aos="fade-left">
                            <img src="ab part.webp" alt="Business People" style={{ width: '100%', height: '550px', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }} />
                            <div className="about-team-badge" style={{ position: 'absolute', top: '3rem', left: '-3rem', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.5)' }}>
                                <h4 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)', margin: 0 }}>Expert</h4>
                                <p style={{ color: 'var(--text-dark)', margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>Development Team </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 9: Our Commitment to Clients */}
            <section className="about-section" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Our Commitment</span>
                    <h2 className="about-title" style={{ marginTop: '1rem' }}>Our Commitment to Clients</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7 }}>
                        We aim to make software development easier to understand and more closely connected to business objectives by sharing our <Link to="/blog">software development insights</Link> and focusing on:
                    </p>
                </div>

                <div className="about-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                    {[
                        { title: 'Digital Marketing & SEO', img: 'Digital Marketing & SEO.webp', link: '/digital-marketing' },
                        { title: 'Web & App Development', img: 'Web & app development.jpg.webp', link: '/web-development' },
                        { title: 'CRM & Business Software', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', link: '/smart-crm' },
                        { title: 'Billing & Payroll Systems', img: 'Billing-_-Payroll-Systems.webp', link: '/products' },
                        { title: 'WhatsApp Marketing API', img: 'WhatsApp Marketing API.jpg.webp', link: '/whatsapp-api' },
                        { title: 'Growth Strategy', img: 'Growth-Strategy.webp', link: '/service' }
                    ].map((service, idx) => (
                        <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{ position: 'relative', height: '420px', borderRadius: '35px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="hover-zoom" />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)' }}></div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem' }}>
                                <h4 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 1rem 0' }}>{service.title}</h4>
                                <Link to={service.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700, padding: '0.6rem 1.2rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', textDecoration: 'none' }}>
                                    Explore <ArrowRight size={18} />
                                </Link>
                            </div>
                            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--text-dark)' }}>{commitment.title}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{commitment.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div className="grid">
                    <div className="card text-center ft-video-card" data-aos="fade-up">
                        <video
                            className="ft-video-card__media"
                            src="/ab vd.mov"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-hidden="true"
                            tabIndex={-1}
                        />
                        <div className="ft-video-card__overlay" aria-hidden="true"></div>
                        <div className="ft-video-card__content">
                            <h2 className="mb-4">Our Mission</h2>
                            <p>
                                Our mission is to empower businesses with innovative digital marketing and software solutions that drive real growth and long term value.
                            </p>
                        </div>
                    </div>

                    <div className="card text-center ft-video-card" data-aos="fade-up" style={{ transitionDelay: '0.1s' }} id="vision">
                        <video
                            className="ft-video-card__media"
                            src="/ab vd2.mov"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-hidden="true"
                            tabIndex={-1}
                        />
                        <div className="ft-video-card__overlay" aria-hidden="true"></div>
                        <div className="ft-video-card__content">
                            <h2 className="mb-4">Our Vision</h2>
                            <p>
                                Our vision is to become a trusted digital marketing and technology partner by delivering future ready, scalable, and impactful solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10B: FAQ (Line-based format) */}
            <section id="faq" className="about-section" style={{ background: '#ffffff', marginTop: '3rem', marginBottom: '3rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3rem' }} data-aos="fade-up">
                        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div style={{ borderTop: '1px solid #e2e8f0' }} data-aos="fade-up">
                        {[
                            {
                                q: "What does Fly Towards Digital Innovation do?",
                                a: "Fly Towards Digital Innovation provides software development and digital technology services, including custom software development, enterprise software, SaaS development, web application development, mobile app development, software maintenance and digital transformation."
                            },
                            {
                                q: "Is Fly Towards Digital Innovation a custom software development company?",
                                a: "Yes. Custom software development is one of the company's core services. The focus is on developing software around specific business requirements, workflows and users."
                            },
                            {
                                q: "What makes a custom software development agency different from an off-the-shelf software provider?",
                                a: "A custom software development agency develops solutions around specific requirements rather than providing one standard product for every customer. This can be useful when a business has specialised workflows, integration requirements or processes that do not fit standard software."
                            },
                            {
                                q: "What industries do you serve?",
                                a: "The target industries identified for Fly Towards Digital Innovation include healthcare, manufacturing, retail, education, construction, finance and hospitality."
                            },
                            {
                                q: "Do you work with businesses in Tamil Nadu?",
                                a: "Tamil Nadu is the company's target location according to the SEO strategy. Projects and requirements should be evaluated based on the specific business and engagement needs."
                            },
                            {
                                q: "Can you work with an existing software application?",
                                a: "Existing software can be considered for maintenance, improvement, modernisation or related development work, depending on its technical condition and the project's requirements."
                            },
                            {
                                q: "How do I start a software development project?",
                                a: "Start by explaining the business problem, current process, users and what you want the software to achieve. A detailed technical specification is helpful when available, but the initial conversation can begin with the business requirement."
                            }
                        ].map((faq, idx) => {
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
                                        maxHeight: isOpen ? '300px' : '0',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease-out',
                                        opacity: isOpen ? 1 : 0,
                                        paddingLeft: '36px',
                                        paddingBottom: isOpen ? '1.5rem' : '0'
                                    }}>
                                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7 }}>{faq.a}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 11: Final CTA */}
            <section id="cta" className="text-center" data-aos="zoom-in" style={{ padding: '5rem 2rem' }}>
                <div className="cta-content relative" style={{
                    background: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat',
                    padding: '6rem 3rem',
                    borderRadius: '50px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    overflow: 'hidden',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(5px)' }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span className="section-tag" style={{ background: 'clack' }}>Let’s Grow Together</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-dark)' }}>
                            Let's Build Software Around Your Business
                        </h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '4rem', color: '#475569', maxWidth: '800px', margin: '0 auto 4rem auto', lineHeight: 1.8 }}>
                            Your software requirement starts with a business need. Tell us what you are trying to improve, automate, replace or build. Our team can discuss the requirement, understand the context and explore the right development approach.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Talk to Our Team <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                                Discuss Your Project
                            </Link>
                             <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                                Chat on WhatsApp 
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
