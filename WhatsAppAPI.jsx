import { ArrowRight, MessageCircle, Users, Zap, Bot, LayoutTemplate, Briefcase, BellRing, Key, Link, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

const WhatsAppAPI = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Bulk Messaging",
            description: "Send personalized messages to thousands of users instantly.",
            icon: <MessageCircle size={40} color="var(--primary)" />,
            image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=800&auto=format&fit=crop",
            delay: "0.1s"
        },
        {
            title: "Automated Workflows",
            description: "Create chatbots and automated replies using simple APIs.",
            icon: <Bot size={40} color="var(--secondary)" />,
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
            delay: "0.2s"
        },
        {
            title: "Template Management",
            description: "Create, submit, and manage WhatsApp message templates.",
            icon: <LayoutTemplate size={40} color="var(--accent)" />,
            image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=800&auto=format&fit=crop",
            delay: "0.3s"
        },
        {
            title: "Multi-Agent Inbox",
            description: "Collaborate with your team and reply faster.",
            icon: <Users size={40} color="var(--primary)" />,
            image: "https://images.unsplash.com/photo-1522071823991-b99c223034cf?q=80&w=800&auto=format&fit=crop",
            delay: "0.4s"
        }
    ];

    const useCases = [
        {
            title: "Marketing Campaigns",
            description: "Promotions, offers, product launches.",
            icon: <Zap size={30} color="var(--primary)" />,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Customer Support",
            description: "Instant responses with real-time notifications.",
            icon: <Briefcase size={30} color="var(--secondary)" />,
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Order & Payment Alerts",
            description: "Transactional updates and reminders.",
            icon: <BellRing size={30} color="var(--accent)" />,
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "OTP & Verification",
            description: "Secure authentication via WhatsApp.",
            icon: <Key size={30} color="var(--primary)" />,
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const workflowSteps = [
        {
            title: "Connect",
            description: "Get WhatsApp Business API access through our platform instantly.",
            icon: <Link color="var(--primary)" size={28} />,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Integrate",
            description: "Use REST APIs or webhooks to securely integrate with your CRM, website, or backend.",
            icon: <Code color="var(--secondary)" size={28} />,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Launch",
            description: "Send personalized messages, automate workflows, and track results in real-time.",
            icon: <Rocket color="var(--accent)" size={28} />,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Aesthetic Background Orbs to fill empty spaces */}
            <div style={{ position: 'absolute', top: '15%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(50px)' }}></div>
            <div style={{ position: 'absolute', top: '40%', right: '-15%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255,0,122,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>
            <div style={{ position: 'absolute', top: '75%', left: '10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(157,0,255,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
                <div className="grid-2 max-w-1200" style={{ margin: '0 auto', padding: '0 2rem' }}>
                    <div data-aos="fade-up">
                        <span className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'white', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                            <MessageCircle size={18} color="var(--primary)" /> Premium API Solutions
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Powerful WhatsApp Marketing API <br />
                            <span className="gradient-text">For Growing Businesses</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.3rem', fontWeight: 500, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '600px' }}>
                            Automate conversations, send bulk messages, manage campaigns, and engage customers on WhatsApp using our secure and scalable API.
                        </h2>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
                            <a href="#contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', boxShadow: '0 10px 20px rgba(0, 242, 255, 0.2)' }}>
                                Get API Access <ArrowRight size={20} />
                            </a>
                            <a href="#docs" className="btn btn-outline" style={{ border: '1px solid var(--border)', background: 'white' }}>View Documentation</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s', position: 'relative' }}>
                        <div style={{ padding: '1rem', background: 'white', border: '1px solid var(--border)', borderRadius: '40px', position: 'relative', zIndex: 2, boxShadow: '0 30px 60px rgba(0,0,0,0.05)' }}>
                            <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1000&auto=format&fit=crop" alt="WhatsApp Marketing Automation" style={{ borderRadius: '30px', width: '100%', height: '550px', objectFit: 'cover', display: 'block' }} />

                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '25px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                animation: 'float 6s ease-in-out infinite',
                                border: '1px solid var(--border)'
                            }}>
                                <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                                    <MessageCircle color="var(--primary)" size={24} />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: '1.2rem', margin: 0, color: '#1e293b' }}>10k+</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Messages Sent</p>
                                </div>
                            </div>

                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop" alt="Analytics" style={{
                                position: 'absolute',
                                top: '-30px',
                                left: '-30px',
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '25px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                border: '5px solid white',
                                animation: 'float 8s ease-in-out infinite reverse'
                            }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Everything You Need Section */}
            <section id="features" style={{ padding: '8rem 0', background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ background: 'white', border: '1px solid var(--border)' }}>Marketing Tools</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Everything You Need for <span className="gradient-text">WhatsApp Marketing</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Our WhatsApp Business API helps you connect with customers at scale while staying compliant and reliable.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        {features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} data-aos="fade-up" style={{
                                flex: idx === 0 ? '2 1 600px' : '1 1 300px', // Asymmetric split
                                minWidth: '300px',
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '40px',
                                height: '450px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                border: '1px solid var(--border)'
                            }}>
                                <img src={feature.image} alt={feature.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.5) 40%, transparent 100%)' }}></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem', zIndex: 2 }}>
                                    <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', width: '70px', height: '70px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.3)' }}>
                                        {feature.icon}
                                    </div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'white', fontWeight: 800 }}>{feature.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: idx === 0 ? '80%' : '100%' }}>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        {features.slice(2, 4).map((feature, idx) => (
                            <div key={idx + 2} data-aos="fade-up" style={{
                                flex: idx === 0 ? '1 1 300px' : '2 1 600px', // Reverse asymmetric split
                                minWidth: '300px',
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '40px',
                                height: '450px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                border: '1px solid var(--border)'
                            }}>
                                <img src={feature.image} alt={feature.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.5) 40%, transparent 100%)' }}></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem', zIndex: 2 }}>
                                    <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', width: '70px', height: '70px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.3)' }}>
                                        {feature.icon}
                                    </div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'white', fontWeight: 800 }}>{feature.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: idx === 1 ? '80%' : '100%' }}>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Immersive Image-Heavy Use Cases */}
            <section id="use-cases" style={{ padding: '8rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ background: 'white', border: '1px solid var(--border)' }}>Versatility</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Built for <span className="gradient-text">Multiple Use Cases</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Scale your business communication with dynamic, highly convertible messaging structures driven through the world's most popular messaging app.
                    </p>
                </div>

                <div className="grid max-w-1200" style={{ margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '0 2rem' }}>
                    {useCases.map((useCase, idx) => (
                        <div key={idx} style={{
                            background: 'white',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: '1px solid var(--border)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div style={{ height: '200px', position: 'relative' }}>
                                <img src={useCase.image} alt={useCase.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: '-25px', left: '25px', width: '50px', height: '50px', background: 'white', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                                    {useCase.icon}
                                </div>
                            </div>
                            <div style={{ padding: '3rem 2rem 2rem 2rem' }}>
                                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.8rem' }}>{useCase.title}</h4>
                                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{useCase.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Beautiful Zig-Zag Workflow */}
            <section id="process" style={{ background: 'linear-gradient(to bottom, rgba(0, 242, 255, 0.02), rgba(255, 0, 122, 0.02))', padding: '8rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ background: 'white', border: '1px solid var(--border)' }}>Integration Flow</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>How It <span className="gradient-text">Works</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        A seamless process to integrate WhatsApp Business API and start growing your customer base.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    {workflowSteps.map((step, idx) => (
                        <div key={idx} data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} style={{
                            display: 'flex',
                            flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                            alignItems: 'center',
                            gap: '4rem',
                            background: 'white',
                            borderRadius: '40px',
                            padding: '1.5rem',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                            border: '1px solid var(--border)'
                        }}>
                            <div style={{ flex: 1, height: '400px', borderRadius: '30px', overflow: 'hidden', position: 'relative' }}>
                                <img src={step.image} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(0,242,255,0.1), rgba(255,0,122,0.1))', mixBlendMode: 'overlay' }}></div>
                            </div>

                            <div style={{ flex: 1, padding: '2rem 3rem' }}>
                                <div style={{
                                    width: '80px', height: '80px',
                                    background: `linear-gradient(135deg, rgba(${idx === 0 ? '0, 242, 255' : idx === 1 ? '255, 0, 122' : '157, 0, 255'}, 0.1) 0%, transparent 100%)`,
                                    borderRadius: '25px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '2rem',
                                    border: `1px solid rgba(${idx === 0 ? '0, 242, 255' : idx === 1 ? '255, 0, 122' : '157, 0, 255'}, 0.3)`
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>
                                    <span style={{ color: idx === 0 ? 'var(--primary)' : idx === 1 ? 'var(--secondary)' : 'var(--accent)', marginRight: '15px' }}>
                                        0{idx + 1}.
                                    </span>
                                    {step.title}
                                </h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8 }}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" style={{ padding: '4rem 1rem 8rem 1rem' }}>
                <div className="cta-content relative" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    background: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat',
                    padding: '6rem 3rem',
                    borderRadius: '40px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)'
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span className="section-tag" style={{ background: 'white', border: '1px solid var(--border)' }}>Grow Faster</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-dark)' }}>
                            Start WhatsApp Marketing <span className="gradient-text">Today</span>
                        </h2>
                        <p style={{ fontSize: '1.3rem', margin: '2rem 0 3rem', color: '#475569', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                            Join thousands of businesses reaching their customers where they are most active. Setup in minutes.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem', boxShadow: '0 10px 20px rgba(0, 242, 255, 0.2)' }}>
                                Get Started Today <ArrowRight size={20} />
                            </a>
                            <a href="mailto:info@flytowards-digital.com" className="btn btn-outline" style={{ padding: '1.2rem 3rem', background: 'white', border: '1px solid var(--border)' }}>Talk to Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WhatsAppAPI;
