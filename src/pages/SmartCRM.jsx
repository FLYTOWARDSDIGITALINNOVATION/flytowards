import { ArrowRight, CheckCircle2, Target, BarChart, Users, Calendar, UserPlus, Database, Rocket, Shield, Clock, Zap, Star, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SmartCRM = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Lead Management",
            description: "Capture, track, and convert leads efficiently with automated pipelines.",
            img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop",
            icon: <Target size={30} color="var(--primary)" />,
            delay: "0.1s"
        },
        {
            title: "Sales Pipeline",
            description: "Visual pipelines to monitor deals at every stage and forecast revenue.",
            img: "https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=800&auto=format&fit=crop",
            icon: <BarChart size={30} color="var(--secondary)" />,
            delay: "0.2s"
        },
        {
            title: "Customer Profiles",
            description: "Complete customer history, interactions, and data in one centralized place.",
            img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
            icon: <Users size={30} color="var(--accent)" />,
            delay: "0.3s"
        },
        {
            title: "Task & Follow-ups",
            description: "Never miss a follow-up with smart reminders and automated task scheduling.",
            img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
            icon: <Calendar size={30} color="var(--primary)" />,
            delay: "0.4s"
        }
    ];

    const workflowSteps = [
        {
            title: "Sign Up & Setup",
            description: "Create your account and customize your dashboard in minutes.",
            icon: <UserPlus size={24} color="var(--primary)" />
        },
        {
            title: "Import Contacts",
            description: "Seamlessly bring leads and customers from any data source.",
            icon: <Database size={24} color="var(--secondary)" />
        },
        {
            title: "Start Selling",
            description: "Track deals, automate tasks, and watch your revenue grow.",
            icon: <Rocket size={24} color="var(--accent)" />
        }
    ];

    return (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-bg"></div>
            
            {/* Ambient background blur */}
            <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>
            <div style={{ position: 'absolute', bottom: '20%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(157,0,255,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(50px)' }}></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Rocket size={18} /> Intelligent Business Management
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Scale Growth with <br />
                            <span className="gradient-text">SmartCRM</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
                            SmartCRM helps businesses track leads, automate sales, manage customer relationships, and close deals faster—all in one powerful, elegant platform.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Start Free Trial <ArrowRight size={20} />
                            </a>
                            <a href="#features" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', border: '1px solid var(--border)' }}>Explore Features</a>
                        </div>
                        
                        <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid white', zIndex: 3 }} alt="User" />
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid white', marginLeft: '-15px', zIndex: 2 }} alt="User" />
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid white', marginLeft: '-15px', zIndex: 1 }} alt="User" />
                            </div>
                            <div>
                                <div style={{ display: 'flex', gap: '4px', color: 'var(--accent)' }}>
                                    {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                                </div>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Trusted by 500+ Businesses</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s', position: 'relative' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px', background: 'rgba(255, 255, 255, 0.4)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&auto=format&fit=crop&q=80"
                                alt="Smart CRM Analytics Dashboard"
                                className="floating-img"
                                style={{ borderRadius: '30px', width: '100%', objectFit: 'cover', height: '500px' }}
                            />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.2 }}></div>
                        </div>
                        
                        {/* Floating Metric Card */}
                        <div data-aos="fade-up" data-aos-delay="500" style={{ position: 'absolute', bottom: '-20px', left: '-30px', background: 'var(--bg-white)', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '15px' }}>
                                <TrendingUp size={30} color="var(--primary)" />
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 900 }}>+45%</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Sales Conversion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Bento Box Features */}
            <section id="features" style={{ padding: '8rem 0', background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Powerful Tools</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Core CRM <span className="gradient-text">Features</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Visual pipelines, intelligent automation, and deep analytics. Everything your sales and support teams need to work smarter.
                    </p>
                </div>

                <div className="grid max-w-1200" style={{ margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {features.map((feature, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ 
                            padding: '0', 
                            overflow: 'hidden', 
                            display: 'flex', 
                            flexDirection: 'column',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-white)'
                        }}>
                            <div style={{ height: '220px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                                <img src={feature.img} alt={feature.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="hover-zoom" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))' }}></div>
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                                    <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '12px', borderRadius: '15px' }}>
                                        {feature.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 800 }}>{feature.title}</h3>
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interactive Workflow Section */}
            <section id="workflow" style={{ padding: '6rem 0' }}>
                <div className="grid-2 max-w-1200" style={{ margin: '0 auto', alignItems: 'center', gap: '5rem' }}>
                    <div data-aos="fade-right">
                        <span className="section-tag">Simple Process</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2rem', lineHeight: 1.2 }}>How SmartCRM <br/><span className="gradient-text">Works</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8 }}>
                            A streamlined workflow designed to eliminate manual data entry and keep your team focused on what matters most: closing deals and delighting customers.
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {workflowSteps.map((step, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', background: 'var(--bg-white)', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                                    <div style={{ 
                                        width: '60px', height: '60px', flexShrink: 0,
                                        background: `linear-gradient(135deg, rgba(${idx === 0 ? '0, 242, 255' : idx === 1 ? '255, 0, 122' : '157, 0, 255'}, 0.1) 0%, rgba(${idx === 0 ? '0, 242, 255' : idx === 1 ? '255, 0, 122' : '157, 0, 255'}, 0.2) 100%)`,
                                        borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>{step.title}</h4>
                                        <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-aos="fade-left" style={{ position: 'relative' }}>
                        <div className="glass-container" style={{ padding: '1rem', borderRadius: '40px', background: 'var(--bg-white)', border: '1px solid var(--border)' }}>
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" alt="Team Collaboration" style={{ width: '100%', borderRadius: '30px', objectFit: 'cover', height: '600px' }} />
                            
                            {/* Overlay Stats */}
                            <div style={{ position: 'absolute', top: '10%', right: '-20px', background: 'var(--bg-white)', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                                    <Shield size={20} color="var(--primary)" />
                                    <span style={{ fontWeight: 700 }}>Data Security</span>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Bank-level encryption</p>
                            </div>
                            
                            <div style={{ position: 'absolute', bottom: '15%', left: '-20px', background: 'var(--bg-white)', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                                    <Clock size={20} color="var(--secondary)" />
                                    <span style={{ fontWeight: 700 }}>Save Time</span>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Automate daily tasks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" style={{ padding: '5rem 1rem' }}>
                <div className="cta-content relative" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    background: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat',
                    padding: '8rem 3rem',
                    borderRadius: '50px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    overflow: 'hidden',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(5px)' }}></div>
                    
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span className="section-tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>Grow Faster</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>
                            Build Stronger  <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 0 30px rgba(0, 242, 255, 0.3)' }}>Customer Relationships</span>
                        </h2>
                        <p style={{ fontSize: '1.3rem', margin: '0 auto 3rem auto', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', lineHeight: 1.6 }}>
                            Join thousands of growing businesses using SmartCRM to manage customers and scale faster.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Get Started Today <ArrowRight size={20} />
                            </a>
                            <Link to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', color: 'white', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}>Talk with Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SmartCRM;
