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
            "https://flytowardsdigitalinnovation.com/about/");

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
                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', borderColor: 'var(--primary)', color: 'var(--primary)', background: 'transparent' }}>
                                Chat on WhatsApp <MessageSquare size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
