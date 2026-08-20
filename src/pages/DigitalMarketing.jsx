import { ArrowRight, Megaphone, Target, TrendingUp, Search, Mail, BarChart3, Users, Zap, Award, Globe, LineChart } from 'lucide-react';
import { useEffect } from 'react';

const DigitalMarketing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
<<<<<<< HEAD
=======

        document.title = "Our Best Digital Marketing Services & Solution";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content",
            "Fly Towards Help to Grow Your Business at Online Presence We Provide The Best Digital Marketing Service & Solution");

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content",
            "digital marketing agency, performance marketing, marketing strategy");

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "index, follow");

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href",
            "https://flytowardsdigitalinnovation.com/digital-marketing");

>>>>>>> origin/main
    }, []);

    const heroCardTheme = {
        background: '#0F172A',
        accentText: '#38BDF8',
        subtext: '#CBD5E1',
    };

    const whyChooseUs = [
        {
            title: "Data-Driven Strategies",
            desc: "We don't guess. Every campaign is backed by deep analytics and consumer insights.",
            points: ["Audience Analysis", "Competitor Research", "ROI Tracking"],
<<<<<<< HEAD
            icon: <LineChart size={40} color="var(--primary)" />,
=======
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=80&h=80&q=80",
>>>>>>> origin/main
            delay: "0.1s"
        },
        {
            title: "Multi-Channel Dominance",
            desc: "Reach your audience exactly where they are, across all major digital touchpoints.",
            points: ["Google Search", "Meta & IG", "LinkedIn B2B"],
<<<<<<< HEAD
            icon: <Globe size={40} color="var(--secondary)" />,
=======
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=80&h=80&q=80",
>>>>>>> origin/main
            delay: "0.2s"
        }
    ];

    const coreServices = [
        {
            title: "Search Engine Optimization (SEO)",
            description: "Dominate search results and drive organic, high-intent traffic to your website continuously.",
<<<<<<< HEAD
            icon: <Search size={40} color="#0F172A" />
=======
            image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=150&h=150&q=80"
>>>>>>> origin/main
        },
        {
            title: "Social Media Marketing",
            description: "Build an engaged community and strong brand presence across relevant social platforms.",
<<<<<<< HEAD
            icon: <Users size={40} color="#0F172A" />
=======
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=150&h=150&q=80"
>>>>>>> origin/main
        },
        {
            title: "Pay-Per-Click (PPC) Ads",
            description: "Instant, targeted traffic through highly optimized Google and Meta advertising campaigns.",
<<<<<<< HEAD
            icon: <Target size={40} color="#0F172A" />
=======
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=150&h=150&q=80"
>>>>>>> origin/main
        },
        {
            title: "Content Marketing",
            description: "Compelling storytelling and valuable content that converts visitors into loyal customers.",
<<<<<<< HEAD
            icon: <Megaphone size={40} color="#0F172A" />
=======
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&h=150&q=80"
>>>>>>> origin/main
        },
        {
            title: "Email & Automation",
            description: "Nurture leads and drive repeat sales with personalized, automated email sequences.",
<<<<<<< HEAD
            icon: <Mail size={40} color="#0F172A" />
=======
            image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=150&h=150&q=80"
>>>>>>> origin/main
        },
        {
            title: "Conversion Optimization",
            description: "Turn more of your existing traffic into revenue through A/B testing and UX improvements.",
<<<<<<< HEAD
            icon: <TrendingUp size={40} color="#0F172A" />
=======
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&h=150&q=80"
>>>>>>> origin/main
        }
    ];

    const ctaFeatures = [
        { text: "Proven Results", icon: <Award size={20} color="#F9FAFB" /> },
        { text: "Transparent Reporting", icon: <BarChart3 size={20} color="#F9FAFB" /> },
        { text: "Scalable Growth", icon: <TrendingUp size={20} color="#F9FAFB" /> },
        { text: "Dedicated Team", icon: <Users size={20} color="#F9FAFB" /> }
    ];

    return (
        <main>
<<<<<<< HEAD
=======
            <style>{`
                .dm-hero-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 4rem;
                    align-items: center;
                }
                .dm-why-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 3rem;
                }
                .dm-services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 3rem;
                }
                .dm-cta-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 4rem;
                    align-items: center;
                }

                @media (max-width: 991px) {
                    .dm-hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    .hero-content-box {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-image-v2 {
                        margin-top: 4rem;
                        justify-content: center !important;
                    }
                    .dm-why-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .dm-cta-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    .cta-features-grid {
                        justify-items: center;
                    }
                    .cta-image-box {
                        margin-top: 4rem;
                    }
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2.5rem !important;
                    }
                    .hero-title {
                        font-size: 2.8rem !important;
                    }
                    .card {
                        padding: 2.5rem 2rem !important;
                    }
                }
            `}</style>
>>>>>>> origin/main
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', paddingBottom: '40px' }}>
<<<<<<< HEAD
                <div className="grid-2">
                    <div data-aos="fade-up">
=======
                <div className="dm-hero-grid">
                    <div data-aos="fade-up" className="hero-content-box">
>>>>>>> origin/main
                        <span className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Zap size={18} /> Elite Growth Agency
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
<<<<<<< HEAD
                            Explosive Growth <br />
                            <span className="gradient-text">Through Digital Marketing</span>
=======
                            Our Digital Marketing Services
>>>>>>> origin/main
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.4rem', fontWeight: 600, opacity: 0.9, lineHeight: 1.6, maxWidth: '600px' }}>
                            We turn clicks into clients and traffic into revenue.
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
                            Experience a digital marketing strategy engineered for scale. We leverage SEO, paid ads, and deep analytics to flood your funnel with high-quality leads.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary">
                                Get Your Growth Audit <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container" style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '40px', position: 'relative' }}>
                            <div style={{ background: heroCardTheme.background, borderRadius: '25px', padding: '3rem 2rem', color: heroCardTheme.subtext, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                <TrendingUp size={80} color={heroCardTheme.accentText} style={{ marginBottom: '2rem' }} />
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: heroCardTheme.accentText }}>300% Avg ROI</h3>
                                <p style={{ color: heroCardTheme.subtext, fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    Stop wasting budget on ineffective ad spend. Our precision-targeted campaigns ensure maximum return on every dollar invested.
                                </p>
                            </div>
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.2, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section id="whyus" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">The Unfair Advantage</span>
<<<<<<< HEAD
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Marketing That <span className="gradient-text">Actually Works</span></h2>
=======
                    <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Marketing That <span className="gradient-text">Actually Works</span></h2>
>>>>>>> origin/main
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        We blur the lines between marketing, technology, and sales to create comprehensive growth systems.
                    </p>
                </div>

<<<<<<< HEAD
                <div className="grid">
=======
                <div className="dm-why-grid">
>>>>>>> origin/main
                    {whyChooseUs.map((item, idx) => (
                        <div
                            key={idx}
                            className="card"
                            data-aos="fade-up"
                            style={(() => {
                                const isDataDriven = item.title === 'Data-Driven Strategies';
                                const isMultiChannel = item.title === 'Multi-Channel Dominance';
                                return {
                                    transitionDelay: item.delay,
                                    padding: '3.5rem 3rem',
                                    ...((isDataDriven || isMultiChannel)
                                        ? {
                                            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.88)), url("${encodeURI(isDataDriven ? '/Data-Driven Strategies.webp' : '/Multi-Channel Dominance.webp')}")`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderColor: 'rgba(56, 189, 248, 0.5)',
                                        }
                                        : {}),
                                };
                            })()}
                        >
                            <div className="mb-4" style={{
<<<<<<< HEAD
                                background: (item.title === 'Data-Driven Strategies' || item.title === 'Multi-Channel Dominance') ? 'rgba(56, 189, 248, 0.12)' : 'rgba(0, 242, 255, 0.05)',
                                padding: '1.2rem',
                                borderRadius: '25px',
                                display: 'inline-block'
                            }}>
                                {item.icon}
=======
                                background: (item.title === 'Data-Driven Strategies' || item.title === 'Multi-Channel Dominance') ? 'rgba(56, 189, 248, 0.05)' : 'rgba(0, 242, 255, 0.05)',
                                padding: '0.4rem',
                                borderRadius: '20px',
                                display: 'inline-block',
                                overflow: 'hidden',
                                width: '70px',
                                height: '70px'
                            }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
>>>>>>> origin/main
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: (item.title === 'Data-Driven Strategies' || item.title === 'Multi-Channel Dominance') ? '#E2E8F0' : 'var(--text-dark)' }}>{item.title}</h3>
                            <p style={{ color: (item.title === 'Data-Driven Strategies' || item.title === 'Multi-Channel Dominance') ? '#CBD5E1' : 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>{item.desc}</p>

                            <ul style={{ listStyle: 'none', color: (item.title === 'Data-Driven Strategies' || item.title === 'Multi-Channel Dominance') ? '#E2E8F0' : 'var(--text-dark)', fontWeight: 600 }}>
                                {item.points.map((pt, pIdx) => (
                                    <li key={pIdx} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '0.8rem' }}>
                                        <Award size={18} color="var(--primary)" /> {pt}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Services Section */}
            <section id="services" style={{ background: '#FFFFFF' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Our Arsenal</span>
<<<<<<< HEAD
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Omnichannel <span className="gradient-text">Expertise</span></h2>
=======
                    <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Omnichannel <span className="gradient-text">Expertise</span></h2>
>>>>>>> origin/main
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Comprehensive digital solutions ensuring your brand captures attention at every stage of the customer journey.
                    </p>
                </div>

<<<<<<< HEAD
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="card card--pastel" data-aos="fade-up" style={{ padding: '3rem 2.5rem', transition: 'all 0.4s ease' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div className="icon-box" style={{ padding: '1rem', borderRadius: '15px' }}>
                                    {service.icon}
=======
                <div className="dm-services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="card card--pastel" data-aos="fade-up" style={{ padding: '3rem 2.5rem', transition: 'all 0.4s ease' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div className="icon-box" style={{ padding: '0.4rem', borderRadius: '15px', overflow: 'hidden', width: '65px', height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
>>>>>>> origin/main
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ lineHeight: 1.7 }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section id="contact">
                <div className="cta-content" data-aos="zoom-in" style={{
                    backgroundImage: `url("${encodeURI('/service market.webp')}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '6rem 4rem',
                    borderRadius: '40px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'var(--gradient-secondary)' }}></div>

<<<<<<< HEAD
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="section-tag" style={{ justifyContent: 'flex-start', color: 'rgba(249, 250, 251, 0.9)' }}>Scale Your Revenue</span>
                            <h2 style={{ fontSize: 'clamp(2.4rem, 4.6vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.15, color: '#F9FAFB', textShadow: '0 6px 18px rgba(0, 0, 0, 0.45)' }}>
=======
                    <div className="dm-cta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="section-tag" style={{ justifyContent: 'flex-start', color: 'rgba(249, 250, 251, 0.9)' }}>Scale Your Revenue</span>
                            <h2 className="section-title" style={{ fontSize: 'clamp(2.4rem, 4.6vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.15, color: '#F9FAFB', textShadow: '0 6px 18px rgba(0, 0, 0, 0.45)' }}>
>>>>>>> origin/main
                                Ready to Dominate Your <span className="gradient-text">Market?</span>
                            </h2>
                            <p style={{ fontSize: '1.35rem', color: 'rgba(249, 250, 251, 0.82)', marginBottom: '2.2rem', lineHeight: 1.8, textShadow: '0 4px 14px rgba(0, 0, 0, 0.5)' }}>
                                Stop leaving money on the table. Let our team of digital growth experts build a custom strategy to skyrocket your sales and brand visibility.
                            </p>

<<<<<<< HEAD
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
=======
                            <div className="cta-features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
>>>>>>> origin/main
                                {ctaFeatures.map((feat, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.15rem', fontWeight: 700, color: 'rgba(249, 250, 251, 0.9)', textShadow: '0 3px 10px rgba(0, 0, 0, 0.45)' }}>
                                        {feat.icon} {feat.text}
                                    </div>
                                ))}
                            </div>

                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '1.2rem 3rem', background: 'var(--secondary)', color: 'white' }}>
                                Request Free Proposal <ArrowRight size={20} />
                            </a>
                        </div>

<<<<<<< HEAD
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
=======
                        <div className="cta-image-box" style={{ display: 'flex', justifyContent: 'center' }}>
>>>>>>> origin/main
                            <div style={{ background: 'rgba(255, 0, 122, 0.05)', padding: '2rem', borderRadius: '50%', position: 'relative' }}>
                                <div style={{ background: 'rgba(0, 242, 255, 0.05)', padding: '2rem', borderRadius: '50%' }}>
                                    <Target size={100} color="var(--secondary)" />
                                </div>
                                <div className="glow-aura" style={{ borderRadius: '50%', background: 'var(--gradient-secondary)' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DigitalMarketing;
