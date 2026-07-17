import React, { useEffect } from 'react';
import { ArrowRight, Search, TrendingUp, BarChart3, Users, Zap, Award, Globe, LineChart, Target, Gauge, Layout, Link2, MapPin } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const SEO = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Elite SEO Optimization & Rank Building Services | Fly Towards";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content",
            "Fly Towards delivers data-backed SEO search marketing services. Dominate search rankings, secure top positions, and capture high-intent organic traffic.");

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content",
            "search engine optimization, SEO services, local SEO audit, link building agency");

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "index, follow");

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href",
            "https://flytowardsdigitalinnovation.com/seo");

    }, []);

    const heroCardTheme = {
        background: '#0a0d14',
        accentText: '#00f2ff',
        subtext: '#cbd5e1',
    };

    const whyChooseUs = [
        {
            title: "Core Web Vitals & Technical Speed",
            desc: "Speed is a primary search engine ranking factor. We optimize code execution, caching policies, and Cumulative Layout Shifts.",
            points: ["Under 2s First Contentful Paint", "Optimal Schema Markup", "Mobile Usability Fixes"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=80&h=80&q=80",
            delay: "0.1s"
        },
        {
            title: "Intent-Focused Keyword Clusters",
            desc: "We look beyond search volumes. We prioritize transaction-ready search queries that directly generate sales pipeline.",
            points: ["Commercial Intent Focus", "Topic Map Abstractions", "Competitor Keyword Hijack"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=80&h=80&q=80",
            delay: "0.2s"
        }
    ];

    const coreServices = [
        {
            title: "Technical SEO Audits",
            description: "Deep codebase scanning covering canonical errors, crawl loops, robots blockages, and duplicate tag resolutions.",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            title: "On-Page Semantic Optimization",
            description: "Keyword density tuning, responsive heading hierarchies, LSI integration, metadata audits, and internal page link maps.",
            image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            title: "Authority Link Acquisition",
            description: "Ethical link-building strategies using manual outreach, custom resource pages, and guest features to scale Domain Authority.",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            title: "Local SEO & GMB Optimization",
            description: "Climb Google's Map Pack using localized citations, Google Business profile posts, local keywords, and reviews automation.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            title: "Semantic Content Calendars",
            description: "Creating comprehensive content plans matching Google's E-E-A-T directives, ensuring you establish domain authority.",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            title: "Rank Analytics & Custom Dashboards",
            description: "Monitor changes with daily position trackers, clicks attribution logs, search impressions breakdowns, and competitive audits.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=150&h=150&q=80"
        }
    ];

    const ctaFeatures = [
        { text: "Ethical White-Hat SEO", icon: <Award size={20} color="#F9FAFB" /> },
        { text: "Daily Ranking Logs", icon: <BarChart3 size={20} color="#F9FAFB" /> },
        { text: "No Hidden Agency Fees", icon: <TrendingUp size={20} color="#F9FAFB" /> },
        { text: "Dedicated SEO Architect", icon: <Users size={20} color="#F9FAFB" /> }
    ];

    return (
        <main style={{ minHeight: '100vh', fontFamily: "'Outfit', sans-serif", color: '#0f172a', overflowX: 'hidden' }}>
            <style>{`
                .seo-hero-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 4rem;
                    align-items: center;
                }
                .seo-why-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 3rem;
                }
                .seo-services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 3rem;
                }
                .seo-cta-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 4rem;
                    align-items: center;
                }

                @media (max-width: 991px) {
                    .seo-hero-grid {
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
                    .seo-why-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .seo-cta-grid {
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
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', paddingBottom: '40px' }}>
                <div className="seo-hero-grid">
                    <div data-aos="fade-up" className="hero-content-box">
                        <span className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Zap size={18} /> Search Engine Dominance
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            SEO Optimization Services
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.4rem', fontWeight: 600, opacity: 0.9, lineHeight: 1.6, maxWidth: '600px' }}>
                            Command top organic rankings and scale transaction-ready traffic.
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
                            Deploy a programmatic, technical, and semantic SEO strategy built for growth. We run audits, optimize vitals, and acquire domain authority links that place your pages at the top.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary">
                                Get Your Free SEO Audit <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container" style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '40px', position: 'relative' }}>
                            <div style={{ background: heroCardTheme.background, borderRadius: '25px', padding: '3rem 2rem', color: heroCardTheme.subtext, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                <TrendingUp size={80} color={heroCardTheme.accentText} style={{ marginBottom: '2rem' }} />
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: heroCardTheme.accentText }}>+500% organic</h3>
                                <p style={{ color: heroCardTheme.subtext, fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    Watch your search engine visibility and click volumes scale. We build permanent white-hat organic assets that pay dividends over time.
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
                    <span className="section-tag">Search Domination Engine</span>
                    <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Strategy That <span className="gradient-text">Increases Revenues</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        SEO isn't just about traffic numbers. It's about securing market authority and building high-intent user pipelines.
                    </p>
                </div>

                <div className="seo-why-grid">
                    {whyChooseUs.map((item, idx) => (
                        <div
                            key={idx}
                            className="card"
                            data-aos="fade-up"
                            style={{
                                transitionDelay: item.delay,
                                padding: '3.5rem 3rem',
                                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.92)), url('/digital.webp')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderColor: 'rgba(56, 189, 248, 0.5)',
                            }}
                        >
                            <div className="mb-4" style={{
                                background: 'rgba(56, 189, 248, 0.05)',
                                padding: '0.4rem',
                                borderRadius: '20px',
                                display: 'inline-block',
                                overflow: 'hidden',
                                width: '70px',
                                height: '70px'
                            }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#E2E8F0' }}>{item.title}</h3>
                            <p style={{ color: '#CBD5E1', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>{item.desc}</p>

                            <ul style={{ listStyle: 'none', color: '#E2E8F0', fontWeight: 600 }}>
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
                    <span className="section-tag">SEO Capabilities</span>
                    <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our Technical <span className="gradient-text">Arsenal</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        From initial script parsing checks to off-page editorial backlinks networks, we deploy a programmatic, modern approach.
                    </p>
                </div>

                <div className="seo-services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="card card--pastel" data-aos="fade-up" style={{ padding: '3rem 2.5rem', transition: 'all 0.4s ease' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div className="icon-box" style={{ padding: '0.4rem', borderRadius: '15px', overflow: 'hidden', width: '65px', height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#0f172a' }}>{service.title}</h3>
                            <p style={{ lineHeight: 1.7, color: '#475569' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section id="contact">
                <div className="cta-content" data-aos="zoom-in" style={{
                    backgroundImage: `url('/serviceseo.webp')`,
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
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 13, 20, 0.88)' }}></div>

                    <div className="seo-cta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <div>
                            <span className="section-tag" style={{ justifyContent: 'flex-start', color: 'rgba(249, 250, 251, 0.9)' }}>Free Visibility Audit</span>
                            <h2 className="section-title" style={{ fontSize: 'clamp(2.4rem, 4.6vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.15, color: '#F9FAFB', textShadow: '0 6px 18px rgba(0, 0, 0, 0.45)' }}>
                                Ready to Dominate Your <span className="gradient-text">Search Niche?</span>
                            </h2>
                            <p style={{ fontSize: '1.35rem', color: 'rgba(249, 250, 251, 0.82)', marginBottom: '2.2rem', lineHeight: 1.8, textShadow: '0 4px 14px rgba(0, 0, 0, 0.5)' }}>
                                Request a comprehensive competitive rank scan and a technical Core Web Vitals audit free of charge. Let our specialist team design your rank strategy.
                            </p>

                            <div className="cta-features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
                                {ctaFeatures.map((feat, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.15rem', fontWeight: 700, color: 'rgba(249, 250, 251, 0.88)' }}>
                                        {feat.icon} {feat.text}
                                    </div>
                                ))}
                            </div>

                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '1.2rem 3rem', background: 'var(--secondary)', color: 'white' }}>
                                Claim Free SEO Audit <ArrowRight size={20} />
                            </a>
                        </div>

                        <div className="cta-image-box" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ background: 'rgba(255, 0, 122, 0.05)', padding: '2rem', borderRadius: '50%', position: 'relative' }}>
                                <div style={{ background: 'rgba(0, 242, 255, 0.05)', padding: '2rem', borderRadius: '50%' }}>
                                    <Search size={100} color="var(--secondary)" />
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

export default SEO;
