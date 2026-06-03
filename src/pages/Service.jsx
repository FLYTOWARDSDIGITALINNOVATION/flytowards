import React, { useEffect } from 'react';
import { Monitor, Smartphone, MessageCircle, BarChart, Globe, Palette, ArrowRight, Zap, Lightbulb, Target, Rocket, CheckCircle2, ChevronRight, Cpu, Shield, TrendingUp, Handshake, Code } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Fly Towards Digital Innovation Services";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content",
            "Fly Towards offers Digital Marketing, Software & Website Development services to help businesses grow online with smart technology and result driven solutions.");

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content",
            "Digital Marketing, Software development");

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "index, follow");

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href",
            "https://flytowardsdigitalinnovation.com/service/");

    }, []);

    const services = [
        {
            title: "Web Development",
            desc: "High-end, performance-focused web architectures designed for maximum conversion and global scale.",
            icon: <Monitor size={35} />,
            link: "/web-development",
            img: "servicewebdev.webp",
            color: "0, 242, 255"
        },
        {
            title: "WhatsApp Marketing",
            desc: "Enterprise-grade automation and marketing campaigns that drive real results on the world's most popular messaging app.",
            icon: <MessageCircle size={35} />,
            link: "/whatsapp-api",
            img: "servicewhatsapp.webp",
            color: "255, 0, 122"
        },
        {
            title: "Digital Marketing",
            desc: "Data-driven, ROI-obsessed marketing strategies that dominate search engines and social platforms.",
            icon: <BarChart size={35} />,
            link: "/digital-marketing",
            img: "servicedigital.webp",
            color: "157, 0, 255"
        },
        {
            title: "App Development",
            desc: "Premium native and cross-platform mobile experiences crafted with precision for the modern user.",
            icon: <Smartphone size={35} />,
            link: "/contact",
            img: "serviceappdev.webp",
            color: "0, 242, 255"
        },
        {
            title: "Brand Identity",
            desc: "Complete visual storytelling and strategic design systems that make your business unforgettable.",
            icon: <Palette size={35} />,
            link: "/contact",
            img: "servicebrandiden.webp",
            color: "255, 0, 122"
        },
        {
            title: "Cloud Solutions",
            desc: "Resilient, high-availability cloud infrastructure and managed services to power your digital growth.",
            icon: <Globe size={35} />,
            link: "/contact",
            img: "servicecloudsol.webp",
            color: "157, 0, 255"
        }
    ];

    const processes = [
        {
            step: "01",
            title: "Strategic Discovery",
            desc: "We dive deep into your business ecosystem to identify growth opportunities and technical requirements.",
            icon: <Target size={30} />,
            color: "0, 242, 255"
        },
        {
            step: "02",
            title: "Concept & Architecture",
            desc: "Designing the blueprint for success with modern UI/UX and scalable technical architectures.",
            icon: <Lightbulb size={30} />,
            color: "255, 0, 122"
        },
        {
            step: "03",
            title: "Technical Excellence",
            desc: "Our expert engineering team builds your solution using cutting-edge technologies and clean code.",
            icon: <Code size={30} />,
            color: "157, 0, 255"
        },
        {
            step: "04",
            title: "Launch & Evolution",
            desc: "Precision deployment followed by continuous data-driven optimization for long-term dominance.",
            icon: <Rocket size={30} />,
            color: "0, 242, 255"
        }
    ];

    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', fontFamily: "'Outfit', sans-serif", color: '#0f172a', overflowX: 'hidden' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&display=swap');
                
                .service-bento-card {
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: pointer;
                    height: 100%;
                    min-height: 450px;
                }
                .service-bento-card:hover {
                    transform: translateY(-20px);
                }
                .service-bento-card:hover .service-img-overlay {
                    opacity: 0.15;
                }
                .service-bento-card:hover .service-img {
                    transform: scale(1.1);
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(1deg); }
                }
                .floating { animation: float 8s ease-in-out infinite; }
                
                .gradient-text {
                    background: linear-gradient(135deg, #00f2ff 0%, #ff007a 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .step-number {
                    font-size: 8rem;
                    font-weight: 900;
                    position: absolute;
                    top: -20px;
                    right: 0;
                    opacity: 0.03;
                    pointer-events: none;
                    line-height: 1;
                }

                .cta-hover:hover {
                    background: white !important;
                    color: black !important;
                }
            `}</style>

            {/* Ambient Background decoration */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '650px', height: '650px', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.06) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255, 0, 122, 0.04) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            {/* Hero Section */}
            <section style={{ position: 'relative', zIndex: 1, paddingTop: '180px', paddingBottom: '120px' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', gap: '6rem' }}>
                        <div data-aos="fade-right">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2.5rem' }}>
                                <div style={{ width: '50px', height: '2px', background: '#00f2ff' }}></div>
                                <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Digital Agency Excellence</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(4rem, 10vw, 6.5rem)', fontWeight: 900, lineHeight: 0.9, marginBottom: '3rem', letterSpacing: '-0.05em' }}>
                                Our Services
                            </h1>
                            <p style={{ fontSize: '1.5rem', color: '#64748b', lineHeight: 1.6, marginBottom: '4rem', maxWidth: '650px' }}>
                                We provide high-impact digital transformation services designed to evolve your business, scale your reach, and dominate your industry.
                            </p>
                            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                                <a href="#offerings" className="btn btn-primary" style={{ padding: '1.5rem 4rem', borderRadius: '60px', fontWeight: 800, fontSize: '1.2rem', boxShadow: '0 20px 50px rgba(0, 242, 255, 0.25)' }}>
                                    View Our Services
                                </a>
                                <RouterLink to="/contact" className="btn btn-outline" style={{ padding: '1.5rem 4rem', borderRadius: '60px', fontWeight: 800, fontSize: '1.2rem', borderColor: '#e2e8f0', color: '#1e293b' }}>
                                    Start a Project
                                </RouterLink>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="floating">
                            <div style={{ position: 'relative', borderRadius: '60px', overflow: 'hidden', boxShadow: '0 80px 150px rgba(15, 23, 42, 0.12)' }}>
                                <img src="Web & app development.jpg.webp" alt="Service Excellence" style={{ width: '100%', height: '700px', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent 60%)' }}></div>
                                <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', padding: '2.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(25px)', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.2)' }}>
                                    <h4 style={{ color: 'white', margin: '0 0 0.5rem', fontSize: '1.4rem', fontWeight: 800 }}>99% Customer Success</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '1rem' }}>Data-driven strategies for elite brands.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section id="offerings" style={{ padding: '140px 0', background: '#f8fafc', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <span style={{ color: '#ff007a', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.4em' }}>Our Capabilities</span>
                        <h2 style={{ fontSize: '4.5rem', fontWeight: 900, marginTop: '1.5rem', color: '#1e1b4b', letterSpacing: '-0.04em' }}>Transformative <span className="gradient-text">Solutions.</span></h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
                        {services.map((service, idx) => (
                            <RouterLink 
                                to={service.link} 
                                key={idx} 
                                data-aos="fade-up" 
                                data-aos-delay={idx * 100}
                                className="service-bento-card"
                                style={{ 
                                    textDecoration: 'none',
                                    background: 'white', 
                                    borderRadius: '50px', 
                                    overflow: 'hidden', 
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.03)',
                                    border: '1px solid #f1f5f9',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ height: '350px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={service.img} alt={service.title} className="service-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
                                    <div className="service-img-overlay" style={{ position: 'absolute', inset: 0, background: `rgb(${service.color})`, opacity: 0, transition: 'opacity 0.4s ease' }}></div>
                                    <div style={{ position: 'absolute', top: '30px', left: '30px', width: '70px', height: '70px', background: 'white', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
                                        {React.cloneElement(service.icon, { color: `rgb(${service.color})` })}
                                    </div>
                                </div>
                                <div style={{ padding: '4.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', color: '#1e1b4b' }}>{service.title}</h3>
                                    <p style={{ fontSize: '1.3rem', color: '#64748b', lineHeight: 1.7, marginBottom: '3rem' }}>{service.desc}</p>
                                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '10px', color: `rgb(${service.color})`, fontWeight: 800, fontSize: '1.1rem' }}>
                                        Discover Solution <ChevronRight size={22} />
                                    </div>
                                </div>
                            </RouterLink>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section style={{ padding: '160px 0', background: '#ffffff', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.4em' }}>Our Process</span>
                        <h2 style={{ fontSize: '4rem', fontWeight: 900, marginTop: '1.5rem', color: '#1e1b4b' }}>Engineered for <span className="gradient-text">Impact.</span></h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                        {processes.map((step, idx) => (
                            <div 
                                key={idx} 
                                data-aos="fade-up" 
                                data-aos-delay={idx * 150}
                                style={{ 
                                    padding: '4rem 3.5rem', 
                                    background: '#fcfcfe', 
                                    borderRadius: '45px', 
                                    border: '1px solid #f1f5f9',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 25px 60px rgba(0,0,0,0.02)'
                                }}
                            >
                                <span className="step-number" style={{ color: `rgb(${step.color})` }}>{step.step}</span>
                                <div style={{ width: '75px', height: '75px', background: `rgba(${step.color}, 0.1)`, borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem' }}>
                                    {React.cloneElement(step.icon, { color: `rgb(${step.color})` })}
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.2rem', color: '#1e1b4b' }}>{step.title}</h3>
                                <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: 1.7 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA */}
            <section style={{ padding: '0 2rem 160px' }}>
                <div data-aos="zoom-in" style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '120px 60px',
                    borderRadius: '80px',
                    textAlign: 'center',
                    background: 'linear-gradient(225deg, #0f172a 0%, #1e1b4b 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 60px 120px rgba(15, 23, 42, 0.35)'
                }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")', opacity: 0.1 }}></div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900, color: 'white', marginBottom: '3rem', letterSpacing: '-0.05em', lineHeight: 1 }}>
                            Ready to Elevate <br /><span className="gradient-text">Your Brand?</span>
                        </h2>
                        <p style={{ fontSize: '1.6rem', color: '#cbd5e1', maxWidth: '850px', margin: '0 auto 5rem', lineHeight: 1.6 }}>
                            Connect with our team of digital architects to discuss your transformation journey.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                            <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.6rem 4.5rem', borderRadius: '60px', fontWeight: 900, fontSize: '1.3rem' }}>
                                Start Your Project
                            </RouterLink>
                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-outline cta-hover" style={{ padding: '1.6rem 4.5rem', borderRadius: '60px', fontWeight: 900, fontSize: '1.3rem', color: 'white', borderColor: 'rgba(255,255,255,0.2)', transition: 'all 0.3s ease' }}>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '450px', height: '450px', background: 'radial-gradient(circle, #00f2ff 0%, transparent 70%)', opacity: 0.15, filter: 'blur(100px)' }}></div>
                </div>
            </section>
        </main>
    );
};

export default Service;
