import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Search, Layout, RefreshCcw, Gauge, Server, Phone, Lock, TrendingUp, Handshake, Code, Workflow, MonitorSmartphone, Star, Zap, Cpu, Globe, Rocket, MessageSquare, ChevronRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const WebDev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Website Development For your Business";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content",
            "We Help to Build the Best & Reliable Website For You Small to Big Scale Business & Company for Affordable Price");

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content",
            "website development company, web design and development");

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "index, follow");

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href",
            "https://flytowardsdigitalinnovation.com/web-development/");

    }, []);

    const coreServices = [
        {
            title: "Custom Website Development",
            description: "High-performance, tailor-made websites built around your brand, goals, and users.",
            img: "serviceprocessdev.webp",
            icon: <Code size={30} />,
            color: "0, 242, 255"
        },
        {
            title: "WordPress Development",
            description: "Scalable WordPress solutions with custom themes, speed optimization, and clean architecture.",
            img: "servicewordpress.webp",
            icon: <Globe size={30} />,
            color: "255, 0, 122"
        },
        {
            title: "Landing Page Development",
            description: "Conversion-focused landing pages designed to turn traffic into qualified leads.",
            img: "servicelanding.webp",
            icon: <MonitorSmartphone size={30} />,
            color: "157, 0, 255"
        },
        {
            title: "Corporate Websites",
            description: "Professional, trust-driven websites that communicate authority and credibility.",
            img: "servicecorporate.webp",
            icon: <Shield size={30} />,
            color: "0, 242, 255"
        },
        {
            title: "Website Redesign",
            description: "Modern UI/UX, improved SEO structure, faster load times, and better user flow.",
            img: "serviceredesign.webp",
            icon: <RefreshCcw size={30} />,
            color: "255, 0, 122"
        },
        {
            title: "Performance & SEO",
            description: "Technical SEO, speed enhancements, and structure optimization for long-term growth.",
            img: "serviceseo.webp",
            icon: <Gauge size={30} />,
            color: "157, 0, 255"
        }
    ];

    const devProcess = [
        {
            title: "Discovery & Strategy",
            desc: "Deep understanding of your business goals, target audience, and market challenges to craft a winning digital blueprint.",
            icon: <Search size={40} />,
            color: "0, 242, 255"
        },
        {
            title: "Architecture & Planning",
            desc: "Mapping out SEO structure, technical requirements, and user flow for a seamless digital experience.",
            icon: <Workflow size={40} />,
            color: "255, 0, 122"
        },
        {
            title: "Premium UI/UX Design",
            desc: "Crafting modern, trust-driven interfaces designed for clarity, engagement, and maximum conversion rates.",
            icon: <Layout size={40} />,
            color: "157, 0, 255"
        },
        {
            title: "Expert Development",
            desc: "Building clean, scalable, and high-performance code with a focus on security and lightning-fast speed.",
            icon: <Code size={40} />,
            color: "0, 242, 255"
        },
        {
            title: "Launch & Optimization",
            desc: "Rigorous testing, optimized deployment, and continuous performance tracking to ensure long-term growth.",
            icon: <Rocket size={40} />,
            color: "255, 0, 122"
        }
    ];

    const whyChooseUs = [
        {
            title: "Business-Driven Development",
            desc: "Every line of code is written with conversions, ROI, and your business goals as the primary focus.",
            points: ["SEO-first structure", "Conversion-focused layouts", "Clear value messaging"],
            icon: <TrendingUp size={35} />,
            color: "0, 242, 255"
        },
        {
            title: "Built to Scale & Perform",
            desc: "We don't just build for today; we build for your future success with high-performance architectures.",
            points: ["99th Percentile Performance", "Hardened Security Protocols", "Cloud-Native Scalability"],
            icon: <Server size={35} />,
            color: "255, 0, 122"
        }
    ];

    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', fontFamily: "'Outfit', sans-serif", color: '#0f172a', overflowX: 'hidden' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&display=swap');
                
                .service-card { transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
                .service-card:hover { transform: translateY(-15px); }
                .service-card:hover .service-img { transform: scale(1.1); }
                
                .step-card { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
                .step-card:hover { transform: translateX(20px); }
                
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

                .whatsapp-btn-custom {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }

                .whatsapp-btn-custom:hover, 
                .whatsapp-btn-custom:active {
                    background: white !important;
                    color: black !important;
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.15);
                }

                @media (max-width: 768px) {
                    .hero-section {
                        padding-top: 120px !important;
                        padding-bottom: 60px !important;
                    }
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                        text-align: center;
                    }
                    .hero-grid > div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-image-container img {
                        height: 400px !important;
                        border-radius: 40px !important;
                    }
                    .services-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .service-card {
                        border-radius: 40px !important;
                    }
                    .service-card-image {
                        height: 250px !important;
                    }
                    .service-card-content {
                        padding: 2.5rem !important;
                    }
                    .process-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    .step-card {
                        flex-direction: column !important;
                        text-align: center;
                        gap: 2rem !important;
                        padding: 3rem 2rem !important;
                        border-radius: 35px !important;
                    }
                    .step-card:hover {
                        transform: translateY(-10px) !important;
                    }
                    .step-icon-box {
                        width: 90px !important;
                        height: 90px !important;
                    }
                    .process-sidebar {
                        position: relative !important;
                        top: 0 !important;
                        margin-top: 6rem;
                    }
                    .process-sidebar img {
                        height: 350px !important;
                        border-radius: 40px !important;
                    }
                    .cta-card {
                        padding: 60px 30px !important;
                        border-radius: 40px !important;
                    }
                    .section-padding {
                        padding: 80px 0 !important;
                    }
                    .section-title {
                        font-size: 3rem !important;
                        line-height: 1.1 !important;
                    }
                }
            `}</style>

            {/* Ambient decoration */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.08) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255, 0, 122, 0.05) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            {/* Hero Section */}
            <section className="hero-section" style={{ position: 'relative', zIndex: 1, paddingTop: '180px', paddingBottom: '120px' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', alignItems: 'center', gap: '4rem' }}>
                        <div data-aos="fade-right">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                                <div style={{ width: '40px', height: '2px', background: '#00f2ff' }}></div>
                                <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Web Excellence</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', fontWeight: 900, lineHeight: 0.95, marginBottom: '2.5rem', letterSpacing: '-0.04em' }}>
                                Website Development Service
                            </h1>
                            <p style={{ fontSize: '1.4rem', color: '#64748b', lineHeight: 1.6, marginBottom: '3.5rem', maxWidth: '600px' }}>
                                We build performance-obsessed web architectures that convert visitors into loyal customers and scale seamlessly with your vision.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.4rem 3.5rem', borderRadius: '50px', fontWeight: 800, fontSize: '1.1rem', boxShadow: '0 20px 40px rgba(0, 242, 255, 0.2)' }}>
                                    Launch Your Project
                                </RouterLink>
                                <a href="#services" style={{ color: '#1e1b4b', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
                                    Explore Solutions <ChevronRight size={20} />
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="floating hero-image-container">
                            <div style={{ position: 'relative', borderRadius: '60px', overflow: 'hidden', boxShadow: '0 60px 120px rgba(15, 23, 42, 0.15)' }}>
                                <img src="service image1.webp" alt="Web Dev" style={{ width: '100%', height: '650px', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent 60%)' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section id="services" className="section-padding" style={{ padding: '120px 0', background: '#f8fafc', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Our Capabilities</span>
                        <h2 className="section-title" style={{ fontSize: '4rem', fontWeight: 900, marginTop: '1.5rem', color: '#1e1b4b', letterSpacing: '-0.04em' }}>Comprehensive <span className="gradient-text">Web Solutions.</span></h2>
                    </div>

                    <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                        {coreServices.map((service, idx) => (
                            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="service-card" style={{ background: 'white', borderRadius: '50px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
                                <div className="service-card-image" style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={service.img} alt={service.title} className="service-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
                                    <div style={{ position: 'absolute', top: '30px', left: '30px', width: '60px', height: '60px', background: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                                        {React.cloneElement(service.icon, { color: `rgb(${service.color})` })}
                                    </div>
                                </div>
                                <div className="service-card-content" style={{ padding: '3.5rem' }}>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.2rem', color: '#1e1b4b' }}>{service.title}</h3>
                                    <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: 1.7, marginBottom: '2rem' }}>{service.description}</p>
                                    <RouterLink to="/contact" style={{ fontWeight: 800, color: '#00f2ff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        Start Building <ArrowRight size={20} />
                                    </RouterLink>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section id="process" className="section-padding" style={{ padding: '160px 0', position: 'relative', zIndex: 1, background: '#ffffff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '6rem', alignItems: 'flex-start' }}>

                        <div data-aos="fade-right">
                            <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Our Workflow</span>
                            <h2 className="section-title" style={{ fontSize: '4.5rem', fontWeight: 900, marginTop: '1.5rem', marginBottom: '4rem', color: '#1e1b4b', lineHeight: 1 }}>How We <span className="gradient-text">Build Greatness.</span></h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '60px', bottom: '60px', left: '55px', width: '2px', background: 'linear-gradient(to bottom, #00f2ff, #25d366, #ff007a)', opacity: 0.15 }}></div>

                                {devProcess.map((step, idx) => (
                                    <div key={idx} className="step-card" style={{ display: 'flex', gap: '3rem', alignItems: 'center', padding: '3.5rem', background: '#fcfcfe', borderRadius: '45px', border: '1px solid #f1f5f9', boxShadow: '0 25px 60px rgba(0,0,0,0.02)', position: 'relative', zIndex: 2 }}>
                                        <div className="step-icon-box" style={{ width: '110px', height: '110px', background: `linear-gradient(135deg, rgba(${step.color}, 0.1) 0%, rgba(${step.color}, 0.2) 100%)`, borderRadius: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 15px 30px rgba(${step.color}, 0.15)` }}>
                                            {React.cloneElement(step.icon, { color: `rgb(${step.color})` })}
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                                                <span style={{ fontSize: '1rem', fontWeight: 900, color: `rgb(${step.color})`, opacity: 0.6 }}>STEP 0{idx + 1}</span>
                                                <div style={{ width: '40px', height: '1px', background: '#cbd5e1' }}></div>
                                            </div>
                                            <h3 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1e1b4b', marginBottom: '1.2rem' }}>{step.title}</h3>
                                            <p style={{ fontSize: '1.4rem', color: '#64748b', lineHeight: 1.6, margin: 0, maxWidth: '600px' }}>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div data-aos="fade-left" className="process-sidebar" style={{ position: 'sticky', top: '140px' }}>
                            <div style={{ borderRadius: '60px', overflow: 'hidden', marginBottom: '5rem', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}>
                                <img src="Empowered Teams.png" alt="Strategy" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            </div>

                            <span style={{ color: '#ff007a', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>The Difference</span>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginTop: '1.5rem', marginBottom: '3.5rem', color: '#1e1b4b' }}>Why <span style={{ color: '#ff007a' }}>Fly Towards?</span></h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                                {whyChooseUs.map((item, idx) => (
                                    <div key={idx} style={{ padding: '4.5rem', background: '#fff', borderRadius: '55px', border: '1px solid #f1f5f9', boxShadow: '0 30px 70px rgba(0,0,0,0.04)', transition: 'transform 0.4s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '2rem' }}>
                                            <div style={{ width: '80px', height: '80px', background: `rgba(${item.color}, 0.1)`, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                {React.cloneElement(item.icon, { color: `rgb(${item.color})`, size: 38 })}
                                            </div>
                                            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, color: '#1e1b4b', lineHeight: 1.2 }}>{item.title}</h3>
                                        </div>
                                        <p style={{ fontSize: '1.4rem', color: '#475569', lineHeight: 1.7, marginBottom: '2.5rem' }}>{item.desc}</p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                            {item.points.map((pt, pIdx) => (
                                                <div key={pIdx} style={{ padding: '12px 24px', background: '#f8fafc', borderRadius: '50px', fontSize: '1rem', fontWeight: 800, color: '#1e1b4b', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #f1f5f9' }}>
                                                    <CheckCircle2 size={18} color="#00f2ff" /> {pt}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '0 2rem 140px' }}>
                <div data-aos="zoom-in" className="cta-card" style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 60px', borderRadius: '80px', textAlign: 'center', background: 'linear-gradient(225deg, #0f172a 0%, #1e1b4b 100%)', position: 'relative', overflow: 'hidden', boxShadow: '0 60px 120px rgba(15, 23, 42, 0.3)' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")', opacity: 0.1 }}></div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900, color: 'white', marginBottom: '3rem', letterSpacing: '-0.04em', lineHeight: 1 }}>Ready to Building a <br /><span className="gradient-text">Masterpiece?</span></h2>
                        <p style={{ fontSize: '1.5rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto 5rem', lineHeight: 1.6 }}>Turn your vision into a high-performing digital reality. Let's build something extraordinary together.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                            <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.5rem 4rem', borderRadius: '50px', fontWeight: 900, fontSize: '1.2rem' }}>Start Your Journey</RouterLink>
                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-outline whatsapp-btn-custom" style={{ padding: '1.5rem 4rem', borderRadius: '50px', fontWeight: 900, fontSize: '1.2rem', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>WhatsApp Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WebDev;