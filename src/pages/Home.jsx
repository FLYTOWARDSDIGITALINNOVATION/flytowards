import { ArrowRight, CheckCircle2, Globe, Shield, MessageSquare, Briefcase, Users, ChevronRight, Trophy, Target, Zap, Server, Code, PlaySquare, Smartphone, MonitorSmartphone, BarChart, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ProfileCard from '../components/ProfileCard';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add('home-page');
        document.documentElement.classList.add('home-snap');

        return () => {
            document.body.classList.remove('home-page');
            document.documentElement.classList.remove('home-snap');
        };
    }, []);

    const digitalMarketingServices = [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Google Ads / Meta ads",
        "LinkedIn Marketing",
        "Digital Marketing Strategy",
        "Branding & Design",
        "WhatsApp Marketing",
        "Video Edits and Production"
    ];

    const itSolutionsServices = [
        "Billing Software",
        "CRM Systems",
        "Attendance Systems",
        "Booking Systems",
        "Inventory Systems"
    ];

    const whyTrustUs = [
        { title: 'Data-Driven Strategy', icon: <Target size={32} color="var(--primary)" /> },
        { title: 'Transparent Reporting', icon: <BarChart size={32} color="var(--secondary)" />, iconAlternative: <Zap size={32} color="var(--secondary)" /> },
        { title: '24/7 Support', icon: <Shield size={32} color="var(--accent)" /> },
        { title: 'Skilled & Certified Team', icon: <Users size={32} color="var(--primary)" /> },
        { title: 'Global Experience', icon: <Globe size={32} color="var(--secondary)" /> }
    ];

    const faqs = [
        { q: "What exactly does Fly Towards Digital Innovation do?", a: "We provide complete digital marketing and IT solutions to increase your reach and revenue." },
        { q: "How can this help my business grow?", a: "Our data-driven strategies and custom campaigns focus on real, measurable business results. It helps businesses reach customers online, increase visibility, and grow sales faster than traditional methods." },
        { q: "Do you offer both Marketing and Engineering?", a: "Yes, we handle everything — from marketing to web, app, and software development." },
        { q: "Does digital marketing actually work?", a: "Yes! Targeted campaigns attract the right audience who are ready to buy your products or services." }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero home-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                <video className="home-hero__video" autoPlay loop muted playsInline preload="metadata">
                    <source src="/Background.mp4" type="video/mp4" />
                </video>

                <div className="home-hero__overlay" aria-hidden="true"></div>

                <div className="home-hero__content">
                    <div className="home-hero__text" data-aos="fade-up">
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
                            FLY TOWARDS <br />
                            <span className="gradient-text" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', display: 'block', marginTop: '0.5rem' }}>DIGITAL INNOVATION</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.6rem', fontWeight: 700, opacity: 0.9, lineHeight: 1.4, maxWidth: '600px' }}>
                            Empowering Businesses Through <br /> Digital Marketing & IT Innovation
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
                            We help brands grow, connect, and succeed through result-driven digital marketing and modern IT solutions.
                        </p>
                        <div className="home-hero__actions" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="#services" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                                Explore Our Service <ArrowRight size={20} />
                            </a>
                            <Link to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>Get a Free Consultation</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section id="about" className="about-section section-full">
                <div className="section-inner">
                <div className="grid-2 max-w-1200" style={{ margin: '0 auto', alignItems: 'center', gap: '4rem' }}>
                    <div data-aos="fade-right">
                        <div style={{ position: 'relative', padding: '1rem', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                            <img src="/Student.webp" alt="Students" style={{ borderRadius: '30px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative', zIndex: 2 }} />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15, zIndex: 1, top: '10%', right: '-10%', width: '150%', height: '150%' }}></div>
                        </div>
                    </div>
                    <div data-aos="fade-left" style={{ paddingTop: '2rem' }}>
                        <span className="section-tag" style={{ marginBottom: '1.5rem' }}>Who We Are</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>Bridging Creativity <br/><span className="gradient-text">with Technology</span></h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Fly Towards is a growth focused company offering end-to-end Digital Marketing and IT Solutions. Our mission is to bridge creativity with technology — helping businesses boost visibility, sales, and performance in the digital world.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                 <CheckCircle2 size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                                 <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Innovative Strategies</span>
                             </li>
                             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                 <CheckCircle2 size={24} color="var(--secondary)" style={{ flexShrink: 0 }} />
                                 <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Modern Tech Architecture</span>
                             </li>
                             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                 <CheckCircle2 size={24} color="var(--accent)" style={{ flexShrink: 0 }} />
                                 <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Result-Driven Approach</span>
                             </li>
                        </ul>
                    </div>
                </div>

                <div className="stats-grid-v2 text-center about-stats-card" data-aos="fade-up">
                    <div className="stat-item-v2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'var(--nav-accent)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem', boxShadow: '0 14px 35px rgba(11, 61, 145, 0.22)' }}>
                            <Users size={32} color="#fff" />
                        </div>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Experienced Employees</span>
                    </div>
                    <div className="stat-item-v2" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)', paddingLeft: '3rem', paddingRight: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'var(--nav-accent)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem', boxShadow: '0 14px 35px rgba(11, 61, 145, 0.22)' }}>
                            <Trophy size={32} color="#fff" />
                        </div>
                        <span className="stat-num" style={{ fontSize: '2.5rem', marginBottom: '0.2rem' }}>15+</span>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Clients Served</span>
                    </div>
                    <div className="stat-item-v2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'var(--nav-accent)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem', boxShadow: '0 14px 35px rgba(11, 61, 145, 0.22)' }}>
                            <Globe size={32} color="#fff" />
                        </div>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Trusted by Global Brands</span>
                    </div>
                </div>
                </div>
            </section>

            {/* Core Solutions Grid */}
            <section id="services">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Our Expertise</span>
                    <h2 style={{ fontSize: '3.5rem' }}>Solutions Targeted <span className="gradient-text">for Growth</span></h2>
                </div>

                <div className="grid" style={{ margin: '0 auto', gap: '3rem', width: '100%' }}>

                    {/* Marketing Column */}
                    <div className="card" data-aos="fade-right" style={{ padding: '3.5rem', borderTop: '4px solid var(--primary)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.05, transform: 'rotate(15deg)' }}>
                            <Target size={200} />
                        </div>
                        <div className="solution-header">
                            <div className="solution-img-box">
                                <img src="digital.webp" alt="Digital Marketing" />
                            </div>
                            <h3 className="solution-title">Digital <br />Marketing</h3>
                        </div>

                        <ul style={{ listStyle: 'none', color: 'var(--text-dark)', fontSize: '1.1rem' }}>
                            {digitalMarketingServices.map((service, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '1rem 0', borderBottom: idx !== digitalMarketingServices.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                    <CheckCircle2 size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontWeight: 500 }}>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* IT Column */}
                    <div className="card" data-aos="fade-left" style={{ padding: '3.5rem', borderTop: '4px solid var(--secondary)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.03, transform: 'rotate(-15deg)' }}>
                            <Code size={200} />
                        </div>
                        <div className="solution-header">
                            <div className="solution-img-box">
                                <img src="Roll.webp" alt="Custom Business Software Solutions" />
                            </div>
                            <h3 className="solution-title">Custom Business <br />Software Solutions</h3>
                        </div>

                        <ul style={{ listStyle: 'none', color: 'var(--text-dark)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            {itSolutionsServices.map((service, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '1rem 0', borderBottom: idx !== itSolutionsServices.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                    <CheckCircle2 size={22} color="var(--secondary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontWeight: 500 }}>{service}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/service" className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            View All Services <ArrowRight size={18} />
                        </Link>
                    </div>

                </div>
            </section>

            {/* Why Businesses Trust Us */}
            <section
                className="trust-section section-full"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop)',
                }}
            >
                <div className="section-inner trust-inner">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Core Value</span>
                        <h2 style={{ fontSize: '3rem' }}>
                            Why Businesses <span className="gradient-text trust-title-line">Trust Us</span>
                        </h2>
                    </div>
                </div>

                <div className="trust-marquee trust-marquee--full" aria-label="Core values">
                    <div className="trust-track">
                        {whyTrustUs.map((item, i) => (
                            <div
                                key={`trust-${i}`}
                                className="card trust-card"
                                style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                    {item.iconAlternative || item.icon}
                                </div>
                                <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.92)' }}>{item.title}</h4>
                            </div>
                        ))}

                        {whyTrustUs.map((item, i) => (
                            <div
                                key={`trust-dup-${i}`}
                                className="card trust-card"
                                aria-hidden="true"
                                style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                    {item.iconAlternative || item.icon}
                                </div>
                                <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.92)' }}>{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Quote */}
            <section className="section-full" style={{ paddingTop: '160px' }}>
                <div data-aos="zoom-in">
                    <ProfileCard image="/sanjay.webp" />
                </div>

                {/* Official Partner Badge */}

            </section>

            {/* Testimonials */}
            <TestimonialCarousel />

            {/* FAQ Section*/}
            <section id="faq">
                <div className="grid-2 max-w-1200" style={{ margin: '0 auto', gap: '4rem', alignItems: 'flex-start' }}>
                    <div data-aos="fade-right" style={{ position: 'sticky', top: '120px' }}>
                        <span className="section-tag">Your Questions Answered</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Let’s Build Your <br /><span className="gradient-text">Digital Future</span> Together
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
                            Whether you need a powerful digital marketing strategy or a custom IT solution, we’re ready to help your business grow.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', marginBottom: '3rem', display: 'inline-flex' }}>
                            Start Your Journey <ArrowRight size={20} />
                        </Link>
                        
                        <div style={{ position: 'relative', marginTop: '2rem', display: 'none' }} className="faq-img-desktop">
                            {/* Adding a display: none by default and unhiding via CSS or just relying on layout */}
                        </div>
                        <div style={{ position: 'relative', marginTop: '1rem' }}>
                            <img src="students1.webp" alt="Customer Support" style={{ borderRadius: '24px', width: '100%', boxShadow: 'var(--shadow)', maxHeight: '350px', objectFit: 'cover' }} />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.1 }}></div>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <div className="faq-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <div style={{ background: 'rgba(0, 242, 255, 0.1)', color: 'var(--primary)', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.9rem' }}>Q</div>
                                        {faq.q}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '42px', lineHeight: 1.7 }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery / Our Impact */}
            <section style={{ padding: '5rem 1rem', background: 'var(--bg-white)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Our Impact</span>
                    <h2 style={{ fontSize: '3rem' }}>Moments of <span className="gradient-text">Excellence</span></h2>
                </div>
                <div className="grid max-w-1200" style={{ margin: '0 auto', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <div style={{ overflow: 'hidden', borderRadius: '30px', boxShadow: 'var(--shadow)' }} data-aos="fade-up" data-aos-delay="100">
                        <img src="Student2.webp" alt="Team Discussion" style={{ width: '100%', height: '300px', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                    <div style={{ overflow: 'hidden', borderRadius: '30px', boxShadow: 'var(--shadow)' }} data-aos="fade-up" data-aos-delay="200">
                        <img src="Student4.webp" alt="Business Meeting" style={{ width: '100%', height: '300px', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                    <div style={{ overflow: 'hidden', borderRadius: '30px', boxShadow: 'var(--shadow)' }} data-aos="fade-up" data-aos-delay="300">
                        <img src="Student3.webp" alt="Creative Process" style={{ width: '100%', height: '300px', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section id="launch" style={{ padding: '4rem 1rem' }}>
                <div className="cta-content" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    padding: '6rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'url(https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=1800) center/cover no-repeat'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.9) 0%, rgba(10, 15, 25, 0.95) 100%)', zIndex: 1 }}></div>
                    
                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>
                            Enjoy Flat <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 0 30px rgba(255, 111, 0, 0.3)' }}>25% OFF</span>
                        </h2>
                        <p style={{ fontSize: '1.3rem', margin: '1rem auto 3rem', maxWidth: '600px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                            On all services! This is a limited time launch offer. Ready to build your digital future together? Let's talk to our experts.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Enquire Now <ArrowRight size={20} />
                            </a>
                            <Link to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
