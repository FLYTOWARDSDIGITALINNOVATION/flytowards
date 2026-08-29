import { ArrowRight, CheckCircle2, Shield, MapPin, Camera, Smartphone, ScanFace, Building, Settings, RefreshCcw, Lock, FileCheck } from 'lucide-react';
import { useEffect } from 'react';

const FlyPayroll = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goals = [
        "Allow attendance only when employees are physically present at the correct location",
        "Prevent fake attendance such as photo, video replay, proxy, or fake GPS",
        "Automatically sync attendance data with payroll"
    ];

    const workforceCategories = [
        {
            title: "Office-Based Employees",
            icon: <Building size={35} color="var(--primary)" />,
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
            features: [
                { title: "Fixed Office Location", desc: "Employees work from a predefined office location with a configured geo-fence." },
                { title: "Location-Based Attendance", desc: "Attendance can be marked only when physically present inside the office boundary." }
            ],
            delay: "0.1s"
        },
        {
            title: "Field-Based Employees",
            icon: <MapPin size={35} color="var(--secondary)" />,
            image: "https://images.unsplash.com/photo-1541888087-b95764d26f74?q=80&w=800&auto=format&fit=crop",
            features: [
                { title: "Client / Site Based Work", desc: "Employees work at customer or project locations assigned by the admin." },
                { title: "Dynamic Location Assignment", desc: "Locations can change daily or per task based on business needs." }
            ],
            delay: "0.2s"
        },
        {
            title: "Hybrid Workforce",
            icon: <Smartphone size={35} color="var(--accent)" />,
            image: "https://images.unsplash.com/photo-1587560699334-bea5353f0ce5?q=80&w=800&auto=format&fit=crop",
            features: [
                { title: "Office + Field Work", desc: "Employees can operate from office or field depending on assigned duties." },
                { title: "Flexible Attendance Rules", desc: "The system adapts attendance validation based on the assigned work type." },
                { title: "Admin Location Config", desc: "Office geo-fence, client sites, and task-based field assignments." }
            ],
            delay: "0.3s"
        }
    ];

    const workflows = [
        {
            title: "Office Workflow",
            steps: [
                "Reach authorized Office Location",
                "GPS & Geo-Fence Validation",
                "Live Camera Activation",
                "Liveness Detection (blink, head movement)",
                "Face Verification & Attendance Recorded"
            ],
            icon: <CheckCircle2 color="var(--primary)" />
        },
        {
            title: "Field Workflow",
            steps: [
                "Admin assigns Site or Client Location",
                "Travel to assigned Site Location",
                "GPS & Geo-Fence Validation",
                "Live Face & Liveness Detection Check",
                "Attendance Recorded with Site Details"
            ],
            icon: <ScanFace color="var(--secondary)" />
        }
    ];

    const controls = [
        {
            title: "Security Enforcement",
            icon: <Lock size={24} color="white" />,
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
            desc: "GPS validation, geo fencing, device restrictions, and controlled camera access ensure attendance data cannot be manipulated or misused."
        },
        {
            title: "Live Presence & Anti-Spoof",
            icon: <Camera size={24} color="white" />,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
            desc: "Prevents photo, video replay, proxy attendance, and other impersonation attempts using real-time camera sessions and liveness detection."
        },
        {
            title: "Automated Payroll Flow",
            icon: <RefreshCcw size={24} color="white" />,
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
            desc: "Check-in/out times, late entries, and overtime rules automatically flow to payroll processing without manual entry."
        },
        {
            title: "Compliance & Audit",
            icon: <FileCheck size={24} color="white" />,
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=800&auto=format&fit=crop",
            desc: "Detailed audit logs provide full traceability for compliance checks, internal audits, and management reviews."
        }
    ];

    return (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-bg"></div>

            {/* Aesthetic Background Orbs */}
            <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>
            <div style={{ position: 'absolute', top: '40%', left: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(255,0,122,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(70px)' }}></div>
            <div style={{ position: 'absolute', top: '75%', right: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(157,0,255,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <div style={{ display: 'inline-flex', padding: '0.5rem 1.2rem', background: 'rgba(0, 242, 255, 0.1)', border: '1px solid rgba(0, 242, 255, 0.2)', borderRadius: '50px', marginBottom: '2rem', alignItems: 'center', gap: '10px' }}>
                             <Settings size={18} color="var(--primary)" /> <span style={{ fontWeight: 700, color: 'var(--primary)' }}>FlyRoll Ecosystem</span>
                        </div>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Fully Automated <br />
                            <span className="gradient-text" style={{ textShadow: '0 0 40px rgba(255,0,122,0.3)' }}>Attendance & Payroll</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.3rem', fontWeight: 500, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '600px' }}>
                            Office + Field Attendance Solution using GPS, Geo-fencing, Face Recognition and Liveness Detection without any biometric or IoT devices.
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                            {goals.map((goal, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.8)', border: '1px solid var(--border)', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', backdropFilter: 'blur(10px)' }}>
                                    <div style={{ background: 'var(--gradient-primary)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                                        <CheckCircle2 size={16} color="white" />
                                    </div>
                                    <span style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{goal}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="https://flyroll.flytowardsdigitalinnovation.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Go to FlyRoll App <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="btn btn-outline" style={{ border: '1px solid var(--border)' }}>Request a Demo</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s', position: 'relative' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px', position: 'relative', zIndex: 2 }}>
                            <img
                                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
                                alt="FlyRoll Dashboard Analytics"
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
                                    <ScanFace color="var(--primary)" size={24} />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: '1.2rem', margin: 0, color: '#1e293b' }}>Face Verify</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Liveness Checked</p>
                                </div>
                            </div>

                            <img src="https://images.unsplash.com/photo-1510511459019-5d058cf283d5?q=80&w=300&auto=format&fit=crop" alt="Mobile Scan" style={{
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

            {/* Workforce Categories Section */}
            <section id="categories" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Adaptability</span>
                    <h2 className="responsive-h2">Workforce <span className="gradient-text">Categories</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Designed to manage diverse work environments seamlessly.
                    </p>
                </div>

                <div className="grid">
                    {workforceCategories.map((cat, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ transitionDelay: cat.delay, padding: '2rem' }}>
                            <div style={{ height: '200px', borderRadius: '20px', overflow: 'hidden', marginBottom: '2rem', position: 'relative' }}>
                                <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="hover-zoom" />
                                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'white', padding: '0.8rem', borderRadius: '50%', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>{cat.icon}</div>
                            </div>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>{cat.title}</h3>

                            {cat.features.map((feature, fIdx) => (
                                <div key={fIdx} style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>{feature.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Elegant Parallax Statistics */}
            <section style={{ 
                background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.95)), url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop) center/cover fixed',
                padding: '7rem 2rem',
                textAlign: 'center',
                boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
            }}>
                <div data-aos="zoom-in" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '4.5rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 800, textShadow: '0 0 30px rgba(0, 242, 255, 0.4)' }}>100%</h2>
                        <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px' }}>Face Liveness</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '4.5rem', color: 'var(--secondary)', marginBottom: '0.5rem', fontWeight: 800, textShadow: '0 0 30px rgba(255, 0, 122, 0.4)' }}>Zero</h2>
                        <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px' }}>Hardware Required</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '4.5rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 800, textShadow: '0 0 30px rgba(157, 0, 255, 0.4)' }}>&lt; 2s</h2>
                        <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px' }}>Instant Check-in</p>
                    </div>
                </div>
            </section>

            {/* Attendance Workflows */}
            <section id="workflows">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Step-by-Step</span>
                    <h2 className="responsive-h2">Attendance <span className="gradient-text">Workflows</span></h2>
                </div>

                <div className="grid-2 max-w-1200" style={{ margin: '0 auto', gap: '4rem', alignItems: 'center' }}>
                    <div data-aos="fade-right" style={{ position: 'relative' }}>
                        <div style={{ position: 'relative', borderRadius: '40px', padding: '1rem', background: 'rgba(255, 255, 255, 0.7)', border: '1px solid var(--border)', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', borderRadius: '30px', objectFit: 'cover' }} alt="Workflow Automation" />
                        </div>
                        <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                    </div>

                    <div data-aos="fade-left" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {workflows.map((workflow, idx) => (
                            <div key={idx} className="card" style={{ background: 'var(--bg-white)', position: 'relative', padding: '2rem' }}>
                                <h3 className="responsive-h3" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.5rem' }}>
                                    {workflow.icon} {workflow.title}
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {workflow.steps.map((step, sIdx) => (
                                        <div key={sIdx} className="workflow-card" style={{ padding: '0.8rem 1rem' }}>
                                            <div className="workflow-number" style={{ width: '25px', height: '25px', fontSize: '0.9rem' }}>
                                                {sIdx + 1}
                                            </div>
                                            <span style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security & Compliance Section */}
            <section style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Enterprise Grade</span>
                    <h2 className="responsive-h2">Security, Compliance <span className="gradient-text">& Controls</span></h2>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', padding: '0 1rem' }}>
                    {controls.map((control, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ padding: '0', overflow: 'hidden', borderRadius: '40px' }}>
                            <div style={{ height: '220px', position: 'relative' }}>
                                <img src={control.image} alt={control.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="hover-zoom" />
                                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--gradient-primary)', padding: '0.8rem', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                                    {control.icon}
                                </div>
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <h3 className="responsive-h3" style={{ marginBottom: '1rem', fontSize: '1.6rem' }}>{control.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{control.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Impact Gallery */}
            <section style={{ padding: '6rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Impact at Scale</span>
                    <h2 className="responsive-h2">Experience the <span className="gradient-text">Difference</span></h2>
                </div>

                <div className="grid-2 max-w-1200" style={{ margin: '0 auto', gap: '2rem', padding: '0 1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div data-aos="zoom-in" data-aos-delay="100" style={{ height: '350px', borderRadius: '40px', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="hover-zoom" alt="Collaborative Teamwork" />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                <h3 style={{ color: 'white', margin: 0, fontSize: '1.6rem', fontWeight: 800 }}>Empowered Teams</h3>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="200" style={{ height: '250px', borderRadius: '40px', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="hover-zoom" alt="Analytics Team" />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                <h3 style={{ color: 'white', margin: 0, fontSize: '1.6rem', fontWeight: 800 }}>Data-Driven Insights</h3>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div data-aos="zoom-in" data-aos-delay="300" style={{ height: '250px', borderRadius: '40px', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="hover-zoom" alt="Global Office" />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                <h3 style={{ color: 'white', margin: 0, fontSize: '1.6rem', fontWeight: 800 }}>Enterprise Scale</h3>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="400" style={{ height: '350px', borderRadius: '40px', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="hover-zoom" alt="Happy Workforce" />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                <h3 style={{ color: 'white', margin: 0, fontSize: '1.6rem', fontWeight: 800 }}>Happy Workforce</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" style={{ padding: '4rem 1rem' }}>
                <div className="cta-content" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    padding: '8rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000) center/cover no-repeat'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(8, 15, 30, 0.9) 0%, rgba(10, 15, 25, 0.95) 100%)', zIndex: 1 }}></div>

                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <span className="section-tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>Upgrade Your Operations</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
                            Achieve a <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 0 30px rgba(0, 242, 255, 0.3)' }}>Future-Ready</span> <br /> Attendance System.
                        </h2>
                        <p style={{ fontSize: '1.3rem', margin: '2rem auto 3rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px' }}>
                            No biometric device needed. Just intelligent technology powering your workforce.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://flyroll.flytowardsdigitalinnovation.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Go to FlyRoll App <ArrowRight size={20} />
                            </a>
                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1.2rem 3rem', color: 'white', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}>Book a Free Demo</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FlyPayroll;
