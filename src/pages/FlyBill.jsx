import { ArrowRight, CheckCircle2, Shield, Settings, TrendingUp, Clock, FileText, Smartphone, Users, Briefcase, Database, Lock } from 'lucide-react';
import { useEffect } from 'react';

const FlyBill = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const challenges = [
        {
            title: "Billing Errors",
            description: "Manual calculations cause mistakes and customer dissatisfaction.",
            icon: <FileText size={40} color="var(--secondary)" />,
            image: "https://images.unsplash.com/photo-1507208356972-e567eb72acc3?q=80&w=1000&auto=format&fit=crop", // Stressed professional in a sleek environment
            delay: "0.1s"
        },
        {
            title: "GST Complexity",
            description: "Tax compliance becomes stressful without automation.",
            icon: <TrendingUp size={40} color="var(--primary)" />,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop", // Beautifully lit tax/accounting documents
            delay: "0.2s"
        },
        {
            title: "Delayed Payments",
            description: "Poor payment tracking affects cash flow.",
            icon: <Clock size={40} color="var(--accent)" />,
            image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=1000&auto=format&fit=crop", // Premium minimalist clock/time tracking
            delay: "0.3s"
        },
        {
            title: "No Insights",
            description: "Lack of reports blocks smart business decisions.",
            icon: <Database size={40} color="var(--secondary)" />,
            image: "https://images.unsplash.com/photo-1606189201503-4c92f1cbfa1f?q=80&w=1000&auto=format&fit=crop", // Elegant magnifying glass analyzing documents
            delay: "0.4s"
        }
    ];

    const features = [
        {
            title: "Smart GST Invoicing",
            description: "Automatic CGST, SGST & IGST calculations with branded invoices.",
            icon: <Settings size={40} color="var(--primary)" />,
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop" // Elegant tablet showing financial calculations
        },
        {
            title: "Inventory Management",
            description: "Live stock tracking and low-stock alerts.",
            icon: <Briefcase size={40} color="var(--secondary)" />,
            image: "https://images.unsplash.com/photo-1583095123989-138d6df7247a?q=80&w=1000&auto=format&fit=crop" // Beautifully organized high-end shelves
        },
        {
            title: "Customer & Credit",
            description: "Track customer history, dues and credit limits.",
            icon: <Users size={40} color="var(--accent)" />,
            image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000&auto=format&fit=crop" // Premium retail customer transaction
        },
        {
            title: "Payment Tracking",
            description: "Monitor cash, UPI, card and bank payments.",
            icon: <Smartphone size={40} color="var(--primary)" />,
            image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop" // Sleek modern POS payment terminal
        },
        {
            title: "Reports & Analytics",
            description: "Sales, tax and profit reports with export options.",
            icon: <TrendingUp size={40} color="var(--secondary)" />,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" // Stunning glowing charts on a Macbook
        },
        {
            title: "Secure Cloud",
            description: "Anytime access with backups and role-based control.",
            icon: <Lock size={40} color="var(--accent)" />,
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop" // Sleek professional neon server room
        }
    ];

    return (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-bg"></div>

            {/* Aesthetic Background Orbs */}
            <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>
            <div style={{ position: 'absolute', top: '40%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(255,0,122,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(70px)' }}></div>
            <div style={{ position: 'absolute', top: '75%', left: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(157,0,255,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag">Fly Bill Ecosystem</span>
                        <h1 className="hero-title">
                            Professional Billing <br />
                            <span className="gradient-text">Software</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.8rem', fontWeight: 700, opacity: 0.9 }}>
                            For Modern Businesses
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
                            Fly Bill helps businesses automate invoicing, stay GST compliant, track payments, and gain real-time control over sales and finances.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary">
                                Request a Demo <ArrowRight size={20} />
                            </a>
                            <a href="#pricing" className="btn btn-outline" style={{ border: '1px solid var(--border)' }}>View Pricing</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s', position: 'relative' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px', position: 'relative', zIndex: 2 }}>
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                                alt="Fly Bill Dashboard Innovation"
                                className="floating-img"
                                style={{ borderRadius: '30px', width: '100%', maxWidth: '650px', display: 'block' }}
                            />
                            
                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-30px',
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '20px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                animation: 'float 6s ease-in-out infinite'
                            }}>
                                <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                                    <FileText color="var(--primary)" size={24} />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: '1.2rem', margin: 0, color: '#1e293b' }}>GST Compliant</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Smart Invoicing</p>
                                </div>
                            </div>
                            
                            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=300&auto=format&fit=crop" alt="Payments" style={{
                                position: 'absolute',
                                top: '-20px',
                                left: '-30px',
                                width: '140px',
                                height: '140px',
                                objectFit: 'cover',
                                borderRadius: '20px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                border: '4px solid white',
                                animation: 'float 8s ease-in-out infinite reverse'
                            }} />

                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section - Challenges (Bento Grid) */}
            <section id="challenges" style={{ background: 'rgba(255, 0, 122, 0.01)', padding: '6rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">The Problem</span>
                    <h2 className="responsive-h2">Business Challenges <span className="gradient-text">We Solve</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Growing businesses struggle with manual billing, compliance risks, and lack of financial visibility.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        {challenges.slice(0, 2).map((challenge, idx) => (
                            <div key={idx} data-aos="fade-up" style={{ 
                                flex: idx === 0 ? '2 1 600px' : '1 1 300px', 
                                minWidth: '300px', position: 'relative', overflow: 'hidden', borderRadius: '40px', height: '400px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}>
                                <img src={challenge.image} alt={challenge.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="hover-zoom" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.5) 50%, transparent 100%)' }}></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem', zIndex: 2 }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                                        {challenge.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'white', fontWeight: 800 }}>{challenge.title}</h3>
                                    <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.6 }}>{challenge.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        {challenges.slice(2, 4).map((challenge, idx) => (
                            <div key={idx + 2} data-aos="fade-up" style={{ 
                                flex: idx === 0 ? '1 1 300px' : '2 1 600px', 
                                minWidth: '300px', position: 'relative', overflow: 'hidden', borderRadius: '40px', height: '400px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}>
                                <img src={challenge.image} alt={challenge.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="hover-zoom" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.5) 50%, transparent 100%)' }}></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem', zIndex: 2 }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                                        {challenge.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'white', fontWeight: 800 }}>{challenge.title}</h3>
                                    <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.6 }}>{challenge.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section - Core Features */}
            <section id="features" style={{ padding: '6rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Capabilities</span>
                    <h2 className="responsive-h2">Core <span className="gradient-text">Features</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Everything you need to run billing operations professionally.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    {features.map((feature, idx) => (
                        <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{ position: 'relative', height: '420px', borderRadius: '35px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src={feature.image} alt={feature.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="hover-zoom" />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)' }}></div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem' }}>
                                <div style={{ background: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                                    {feature.icon}
                                </div>
                                <h4 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.5rem 0' }}>{feature.title}</h4>
                                <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Elegant Banner */}
            <section style={{ 
                background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop) center/cover fixed',
                padding: '8rem 2rem',
                textAlign: 'center',
                boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
            }}>
                <div data-aos="zoom-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1.5rem', fontWeight: 800 }}>Transforming How You <br/> Manage Finances</h2>
                    <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '2rem' }}>Step into the future of accounting with our modern, AI-driven billing platform designed specifically to eliminate stress.</p>
                </div>
            </section>

            {/* Seamless Workflow Section */}
            <section style={{ padding: '8rem 0', background: 'var(--bg-white)', position: 'relative', overflow: 'hidden' }}>
                <div className="grid-2 max-w-1200" style={{ margin: '0 auto', gap: '5rem', alignItems: 'center' }}>
                    <div data-aos="fade-right">
                        <span className="section-tag">Seamless Workflow</span>
                        <h2 className="responsive-h2" style={{ marginBottom: '1.5rem' }}>
                            Designed for <span className="gradient-text">Efficiency</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            Experience a billing workflow that feels natural. With Fly Bill, we have eliminated the clutter to give you a pristine, intuitive interface that lets you focus on what really matters—growing your business while we handle the math and compliance.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                 <CheckCircle2 size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                                 <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Zero Learning Curve Architecture</span>
                             </li>
                             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                 <CheckCircle2 size={24} color="var(--secondary)" style={{ flexShrink: 0 }} />
                                 <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Lightning Fast Invoicing Speed</span>
                             </li>
                             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                 <CheckCircle2 size={24} color="var(--accent)" style={{ flexShrink: 0 }} />
                                 <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Automated GST Returns Generation</span>
                             </li>
                        </ul>
                    </div>
                    <div data-aos="fade-left" style={{ position: 'relative', padding: '2rem' }}>
                        <div style={{ position: 'relative', borderRadius: '40px', padding: '1rem', background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border)', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', zIndex: 2 }}>
                            <img src="https://images.unsplash.com/photo-1620802051798-8df09e6c2718?q=80&w=1000&auto=format&fit=crop" alt="Efficient Workflow" style={{ width: '100%', borderRadius: '30px', objectFit: 'cover' }} />
                        </div>
                        {/* Floating elements */}
                        <div style={{ position: 'absolute', top: '5%', left: '0%', background: 'white', padding: '1.5rem', borderRadius: '25px', boxShadow: '0 15px 40px rgba(0,0,0,0.15)', animation: 'float 5s ease-in-out infinite', zIndex: 3 }}>
                            <Shield color="var(--primary)" size={35} />
                        </div>
                        <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15, zIndex: 1, top: '20%', left: '10%', width: '120%', height: '120%' }}></div>
                    </div>
                </div>
            </section>

            {/* Ideal For Section */}
            <section style={{ background: 'rgba(0, 242, 255, 0.01)', padding: '6rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Who Uses Fly Bill</span>
                    <h2 className="responsive-h2">Built For <span className="gradient-text">Every Industry</span></h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }} data-aos="fade-up">
                    {[
                        { title: 'Retail & Wholesale', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop' }, // Beautiful modern neon clothing store
                        { title: 'Medical & Pharmacy', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop' }, // Clean pristine medical environment
                        { title: 'Restaurants & Cafes', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop' }, // Gorgeous moody fine dining
                        { title: 'Service Providers', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop' } // Sleek modern office handshake
                    ].map((industry, idx) => (
                        <div key={idx} style={{ position: 'relative', height: '200px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
                            <img src={industry.img} alt={industry.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="hover-zoom" />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(15,23,42,0.2), rgba(15,23,42,0.8))' }}></div>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <h4 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 800, textAlign: 'center', padding: '0 1rem' }}>{industry.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section id="contact" style={{ padding: '5rem 2rem' }}>
                <div className="cta-content relative" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    background: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat',
                    padding: '6rem 3rem',
                    borderRadius: '50px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(5px)' }}></div>
                    
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span className="section-tag" style={{ background: 'white' }}>Take the Next Step</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            Simplify Billing. <br /> <span className="gradient-text">Strengthen Compliance.</span>
                        </h2>
                        <p style={{ fontSize: '1.3rem', margin: '0 auto 3rem auto', color: '#475569', maxWidth: '700px' }}>
                            Join businesses that trust Fly Bill for fast, accurate, and secure billing.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                                Book a Free Demo <ArrowRight size={20} />
                            </a>
                            <a href="mailto:info@flytowards-digital.com" className="btn btn-outline" style={{ padding: '1.2rem 3rem', background: 'white', border: '1px solid var(--border)' }}>Request Pricing</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FlyBill;
