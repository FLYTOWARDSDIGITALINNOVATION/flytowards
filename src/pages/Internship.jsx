import { useEffect, useState } from 'react';
import {
    Users, Briefcase, Zap, ArrowRight, Globe, Search,
    Code, Brain, Database, Layers, MessageSquare,
    TrendingUp, Star, CheckCircle, ShieldCheck,
    Rocket, BookOpen, Clock, Target, Cpu, MousePointer2
} from 'lucide-react';

const Internship = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Industrial Internships & Courses | Fly Towards";
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState("");

    const handleApplyClick = (title) => {
        setSelectedProgram(title);
        setShowModal(true);
    };

    const handleFormSubmit = (e) => {
        const form = e.target;
        const requiredElements = form.querySelectorAll('input[required]');
        let hasErrors = false;
        
        requiredElements.forEach(el => {
            if (!el.value.trim()) {
                el.style.border = '2px solid red';
                hasErrors = true;
            } else {
                el.style.border = '2px solid #f1f5f9';
            }
        });

        if (hasErrors) {
            e.preventDefault();
            alert('Please fill out all required fields properly.');
        }
    };

    const categories = [
        {
            name: "Technical Hub",
            icon: <Cpu size={24} />,
            desc: "Master the core technologies that power the modern web.",
            courses: [
                { title: "Full Stack Development", desc: "Build robust, scalable web applications from scratch.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", icon: <Code size={20} />, detail: "MERN Stack" },
                { title: "AI & Machine Learning", desc: "Unlock the power of neural networks and data models.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop", icon: <Brain size={20} />, detail: "Python & TensorFlow" },
                { title: "Blockchain Engineering", desc: "Explore the decentralized future of the internet.", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032&auto=format&fit=crop", icon: <Layers size={20} />, detail: "Web3 & Solidity" },
                { title: "NLP Specialization", desc: "Teach machines to understand human language.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop", icon: <MessageSquare size={20} />, detail: "Linguistic AI" }
            ]
        },
        {
            name: "Growth & Analysis",
            icon: <TrendingUp size={24} />,
            desc: "Fuel business success through data and digital reach.",
            courses: [
                { title: "Digital Marketing", desc: "Dominate the digital landscape with proven strategies.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", icon: <Globe size={20} />, detail: "Strategic Growth" },
                { title: "Data Mining & BI", desc: "Translate raw data into powerful business insights.", image: "https://images.unsplash.com/photo-1551288049-bebda436639a?q=80&w=800&auto=format&fit=crop", icon: <Search size={20} />, detail: "Business Intelligence" },
                { title: "SEO Engineering", desc: "Master the art of search visibility and optimization.", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop", icon: <Zap size={20} />, detail: "Search Optimization" }
            ]
        },
        {
            name: "Career Excellence",
            icon: <Star size={24} />,
            desc: "Prepare yourself for the global job market.",
            courses: [
                { title: "Placement Training", desc: "Get industry-ready with intensive prep and mock calls.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop", icon: <Users size={20} />, detail: "Interview Prep" },
                { title: "Freelancing Blueprint", desc: "Launch and scale your own remote business.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", icon: <Briefcase size={20} />, detail: "Personal Brand" }
            ]
        }
    ];

    const stats = [
        { label: "Duration", value: "3-6 Months" },
        { label: "Format", value: "Online / Offline" }
    ];

    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap');

                .hero-visual {
                    position: relative;
                    padding: 220px 2rem 160px;
                    background: #020617;
                    color: white;
                    overflow: hidden;
                    text-align: center;
                }

                .hero-bg-img {
                    position: absolute;
                    inset: 0;
                    background: url('https://images.unsplash.com/photo-1517245318772-19816dc82548?q=80&w=2070&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                    opacity: 0.15;
                    filter: grayscale(100%);
                }

                .glass-overlay {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, rgba(0, 242, 255, 0.1) 0%, transparent 70%);
                    pointer-events: none;
                }

                .program-grid {
<<<<<<< HEAD
                    display: flex;
                    flex-direction: column;
                    gap: 3.5rem;
=======
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 3rem;
>>>>>>> origin/main
                    padding: 40px 0;
                }

                .elegant-card {
<<<<<<< HEAD
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
                    border-radius: 0;
                    overflow: visible;
                    display: flex;
                    gap: 3rem;
                    padding-bottom: 3.5rem;
                    transition: all 0.4s ease;
                    position: relative;
                    height: auto;
                }

                .elegant-card:hover {
                    transform: translateX(8px);
                    box-shadow: none;
                }

                .card-img-wrapper {
                    width: 320px;
                    height: 220px;
                    border-radius: 24px;
                    overflow: hidden;
                    flex-shrink: 0;
                    position: relative;
                }

                @media (max-width: 991px) {
                    .elegant-card {
                        flex-direction: column !important;
                        gap: 2rem !important;
                        padding-bottom: 2.5rem !important;
                    }
                    .card-img-wrapper {
                        width: 100% !important;
                        height: 220px !important;
                    }
                }

=======
                    background: white;
                    border-radius: 40px;
                    border: 1px solid #f1f5f9;
                    overflow: hidden;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    height: 100%;
                }

                .elegant-card:hover {
                    transform: translateY(-15px);
                    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.08);
                    border-color: rgba(0, 242, 255, 0.3);
                }

                .card-img-wrapper {
                    height: 240px;
                    overflow: hidden;
                    position: relative;
                }

>>>>>>> origin/main
                .card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 1s ease;
                }

                .elegant-card:hover .card-img {
                    transform: scale(1.1);
                }

                .category-tag {
                    padding: 8px 16px;
                    border-radius: 50px;
                    background: rgba(0, 242, 255, 0.1);
                    color: var(--primary);
                    font-weight: 800;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 1.5rem;
                }

                .btn-shine {
                    position: relative;
                    overflow: hidden;
                }

                .btn-shine::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
                    transform: rotate(45deg);
                    transition: all 0.6s;
                }

                .btn-shine:hover::after {
                    left: 100%;
                    top: 100%;
                }

                .stat-box {
                    padding: 2rem;
                    background: #f8fafc;
                    border-radius: 24px;
                    text-align: center;
                    border: 1px solid transparent;
                    transition: all 0.3s;
                }

                .stat-box:hover {
                    background: white;
                    border-color: var(--primary);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
                }

                @media (max-width: 968px) {
                    .program-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            {/* Premium Hero */}
            <section className="hero-visual">
                <div className="hero-bg-img"></div>
                <div className="glass-overlay"></div>
                <div className="max-w-1200" style={{ margin: '0 auto', position: 'relative', zIndex: 5 }}>
                    <div data-aos="fade-down" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.07)', padding: '10px 25px', borderRadius: '50px', backdropFilter: 'blur(10px)', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.15)' }}>
                        <Rocket size={18} color="var(--primary)" />
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.12em' }}>INDUSTRIAL INTERNSHIP ENROLLMENT OPEN</span>
                    </div>
                    <h1 data-aos="zoom-out" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '2.5rem' }}>
                        Elevate Your <br />
                        <span className="gradient-text" style={{ textShadow: '0 0 30px rgba(0, 242, 255, 0.3)', display: 'inline-block' }}>Future Self.</span>
                    </h1>
                    <p data-aos="fade-up" style={{ fontSize: '1.4rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
                        A curated selection of industrial internships designed to transform ambitious minds into world-class engineers and strategists.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', maxWidth: '600px', margin: '0 auto', flexWrap: 'wrap' }}>
                        {stats.map((s, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} style={{ padding: '1.5rem 2.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', flex: '1', minWidth: '220px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800 }}>{s.label}</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Content Transition */}
            <section style={{ padding: '100px 2rem', background: '#ffffff', minHeight: '80vh' }}>
                <div className="max-w-1200" style={{ margin: '0 auto' }}>
                    {!selectedProgram ? (
                        /* Case 1: Program Grid */
                        <div data-aos="fade-in">
                            {categories.map((cat, ci) => (
                                <div key={ci} style={{ marginBottom: '120px' }}>
                                    <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
                                        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>{cat.name}</h2>
                                        <p style={{ color: '#64748b', fontSize: '1.2rem' }}>{cat.desc}</p>
                                    </div>

                                    <div className="program-grid">
                                        {cat.courses.map((course, idx) => (
                                            <div key={idx} className="elegant-card" data-aos="fade-up" data-aos-delay={idx * 150}>
                                                <div className="card-img-wrapper">
                                                    <img src={course.image} alt={course.title} className="card-img" />
                                                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', padding: '12px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                                                        {course.icon}
                                                    </div>
                                                </div>
<<<<<<< HEAD
                                                <div style={{ padding: '0.5rem 0', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
=======
                                                <div style={{ padding: '3rem' }}>
>>>>>>> origin/main
                                                    <span className="category-tag">Featured Program</span>
                                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>{course.title}</h3>
                                                    <p style={{ color: '#64748b', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '1.05rem' }}>{course.desc}</p>

                                                    <div style={{ padding: '1rem 0', borderTop: '1px solid #f1f5f9', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8' }}>{course.detail}</span>
                                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                                                    </div>

                                                    <button
                                                        onClick={() => {
                                                            setSelectedProgram(course.title);
                                                            window.scrollTo({ top: 400, behavior: 'smooth' });
                                                        }}
                                                        className="btn btn-primary btn-shine"
                                                        style={{ width: '100%', padding: '1.2rem', borderRadius: '18px', fontWeight: 800, fontSize: '1.1rem' }}
                                                    >
                                                        Start Application
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Case 2: Direct Application Form */
                        <div data-aos="zoom-in" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                            <style>{`
                                .form-card-ultra {
                                    background: #ffffff;
                                    padding: 6rem;
                                    border-radius: 60px;
                                    box-shadow: 0 50px 150px rgba(15, 23, 42, 0.1);
                                    border: 1px solid #f1f5f9;
                                    position: relative;
                                }
                                .form-input-lux {
                                    width: 100%;
                                    padding: 1.5rem 1.5rem 1.5rem 4rem;
                                    border-radius: 24px;
                                    border: 2px solid #f1f5f9;
                                    background: #f8fafc;
                                    font-size: 1.1rem;
                                    transition: all 0.3s;
                                }
                                .form-input-lux:focus {
                                    border-color: var(--primary);
                                    background: white;
                                    box-shadow: 0 15px 40px rgba(0, 242, 255, 0.1);
                                    outline: none;
                                }
                                .back-btn {
                                    display: flex;
                                    align-items: center;
                                    gap: 10px;
                                    color: #64748b;
                                    cursor: pointer;
                                    margin-bottom: 3rem;
                                    font-weight: 700;
                                    transition: color 0.3s;
                                }
                                .back-btn:hover { color: var(--primary); }
                            `}</style>

                            <div className="back-btn" onClick={() => setSelectedProgram(null)}>
                                <Zap size={18} /> Back to Programs
                            </div>

                            <div className="form-card-ultra">
                                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                                    <span className="category-tag">Enrolment Portal</span>
                                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0f172a', marginTop: '1.5rem' }}>Joining <span style={{ color: 'var(--primary)' }}>{selectedProgram}</span></h2>
                                    <p style={{ color: '#64748b', fontSize: '1.2rem', marginTop: '1rem' }}>Complete your industrial dossier to begin the selection process.</p>
                                </div>

                                <form action="https://formsubmit.co/info@flytowardsdigitalinnovation.com" method="POST" onSubmit={handleFormSubmit}>
                                    <input type="hidden" name="_subject" value={`New Internship Application: ${selectedProgram}`} />

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '2.5rem' }}>
                                        <div style={{ position: 'relative' }}>
                                            <label style={{ display: 'block', fontWeight: 800, color: '#64748b', marginBottom: '1rem', fontSize: '0.85rem', textTransform: 'uppercase' }}>Identity</label>
                                            <input required type="text" name="Name" className="form-input-lux" placeholder="Full Name" />
                                            <Users size={22} style={{ position: 'absolute', left: '1.5rem', bottom: '1.6rem', color: '#94a3b8' }} />
                                        </div>
                                        <div style={{ position: 'relative' }}>
                                            <label style={{ display: 'block', fontWeight: 800, color: '#64748b', marginBottom: '1rem', fontSize: '0.85rem', textTransform: 'uppercase' }}>Digital Address</label>
                                            <input required type="email" name="Email" className="form-input-lux" placeholder="Email ID" />
                                            <Globe size={22} style={{ position: 'absolute', left: '1.5rem', bottom: '1.6rem', color: '#94a3b8' }} />
                                        </div>
                                    </div>

                                    <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                                        <label style={{ display: 'block', fontWeight: 800, color: '#64748b', marginBottom: '1rem', fontSize: '0.85rem', textTransform: 'uppercase' }}>Secure Contact (WhatsApp)</label>
                                        <input required type="tel" name="Contact" className="form-input-lux" placeholder="+91 XXX XXX XXXX" />
                                        <TrendingUp size={22} style={{ position: 'absolute', left: '1.5rem', bottom: '1.6rem', color: '#94a3b8' }} />
                                    </div>

                                    <div style={{ position: 'relative', marginBottom: '5rem' }}>
                                        <label style={{ display: 'block', fontWeight: 800, color: '#64748b', marginBottom: '1rem', fontSize: '0.85rem', textTransform: 'uppercase' }}>Current Institution / Work</label>
                                        <input required type="text" name="Profile" className="form-input-lux" placeholder="e.g. SRM University" />
                                        <ShieldCheck size={22} style={{ position: 'absolute', left: '1.5rem', bottom: '1.6rem', color: '#94a3b8' }} />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-shine" style={{ width: '100%', padding: '2rem', borderRadius: '30px', fontSize: '1.4rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                                        Submit Enrollment Request <ArrowRight size={28} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Internship;
