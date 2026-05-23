import { ArrowRight, Megaphone, Target, TrendingUp, Search, Mail, BarChart3, Users, Zap, Award, Globe, LineChart } from 'lucide-react';
import { useEffect } from 'react';

const DigitalMarketing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whyChooseUs = [
        {
            title: "Data-Driven Strategies",
            desc: "We don't guess. Every campaign is backed by deep analytics and consumer insights.",
            points: ["Audience Analysis", "Competitor Research", "ROI Tracking"],
            icon: <LineChart size={40} color="var(--primary)" />,
            delay: "0.1s"
        },
        {
            title: "Multi-Channel Dominance",
            desc: "Reach your audience exactly where they are, across all major digital touchpoints.",
            points: ["Google Search", "Meta & IG", "LinkedIn B2B"],
            icon: <Globe size={40} color="var(--secondary)" />,
            delay: "0.2s"
        }
    ];

    const coreServices = [
        {
            title: "Search Engine Optimization (SEO)",
            description: "Dominate search results and drive organic, high-intent traffic to your website continuously.",
            icon: <Search size={40} color="var(--primary)" />
        },
        {
            title: "Social Media Marketing",
            description: "Build an engaged community and strong brand presence across relevant social platforms.",
            icon: <Users size={40} color="var(--secondary)" />
        },
        {
            title: "Pay-Per-Click (PPC) Ads",
            description: "Instant, targeted traffic through highly optimized Google and Meta advertising campaigns.",
            icon: <Target size={40} color="var(--accent)" />
        },
        {
            title: "Content Marketing",
            description: "Compelling storytelling and valuable content that converts visitors into loyal customers.",
            icon: <Megaphone size={40} color="var(--primary)" />
        },
        {
            title: "Email & Automation",
            description: "Nurture leads and drive repeat sales with personalized, automated email sequences.",
            icon: <Mail size={40} color="var(--secondary)" />
        },
        {
            title: "Conversion Optimization",
            description: "Turn more of your existing traffic into revenue through A/B testing and UX improvements.",
            icon: <TrendingUp size={40} color="var(--accent)" />
        }
    ];

    const ctaFeatures = [
        { text: "Proven Results", icon: <Award size={20} color="var(--primary)" /> },
        { text: "Transparent Reporting", icon: <BarChart3 size={20} color="var(--secondary)" /> },
        { text: "Scalable Growth", icon: <TrendingUp size={20} color="var(--accent)" /> },
        { text: "Dedicated Team", icon: <Users size={20} color="var(--primary)" /> }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', paddingBottom: '40px' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Zap size={18} /> Elite Growth Agency
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Explosive Growth <br />
                            <span className="gradient-text">Through Digital Marketing</span>
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
                            <div style={{ background: 'var(--text-dark)', borderRadius: '25px', padding: '3rem 2rem', color: 'white', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                <TrendingUp size={80} color="var(--primary)" style={{ marginBottom: '2rem' }} />
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>300% Avg ROI</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.8 }}>
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
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Marketing That <span className="gradient-text">Actually Works</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        We blur the lines between marketing, technology, and sales to create comprehensive growth systems.
                    </p>
                </div>

                <div className="grid">
                    {whyChooseUs.map((item, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ transitionDelay: item.delay, padding: '3.5rem 3rem' }}>
                            <div className="mb-4" style={{
                                background: 'rgba(0, 242, 255, 0.05)',
                                padding: '1.2rem',
                                borderRadius: '25px',
                                display: 'inline-block'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>{item.desc}</p>

                            <ul style={{ listStyle: 'none', color: 'var(--text-dark)', fontWeight: 600 }}>
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
            <section id="services">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Our Arsenal</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Omnichannel <span className="gradient-text">Expertise</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Comprehensive digital solutions ensuring your brand captures attention at every stage of the customer journey.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ padding: '3rem 2.5rem', transition: 'all 0.4s ease' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = `0 20px 40px rgba(255, 0, 122, 0.1)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div style={{ background: 'rgba(255, 0, 122, 0.05)', padding: '1rem', borderRadius: '15px' }}>
                                    {service.icon}
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section id="contact">
                <div className="cta-content" data-aos="zoom-in" style={{
                    background: '#fff',
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

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="section-tag" style={{ justifyContent: 'flex-start' }}>Scale Your Revenue</span>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                Ready to Dominate Your <span className="gradient-text">Market?</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                Stop leaving money on the table. Let our team of digital growth experts build a custom strategy to skyrocket your sales and brand visibility.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
                                {ctaFeatures.map((feat, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem', fontWeight: 600 }}>
                                        {feat.icon} {feat.text}
                                    </div>
                                ))}
                            </div>

                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '1.2rem 3rem', background: 'var(--secondary)', color: 'white' }}>
                                Request Free Proposal <ArrowRight size={20} />
                            </a>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
