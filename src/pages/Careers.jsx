
import { Users, Zap, ArrowRight, ShieldCheck, Lightbulb, Smartphone, Code } from 'lucide-react';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Start Career With us & Join Our Fly Family";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Start your professional journey with Fly Towards Digital Innovation. Explore current job openings and grow your career in the IT industry"
            );
        }

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute(
                "content",
                "Digital Marketing career, Software developer career"
            );
        }

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) {
            robots.setAttribute("content", "index, follow");
        }

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute(
                "href",
                "https://flytowardsdigitalinnovation.com/careers"
            );
        }
    }, []);

    const [activeFaq, setActiveFaq] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState("");

    const handleApplyClick = (jobTitle) => {
        setSelectedJob(jobTitle);
        setShowModal(true);
    };

    const handleFormSubmit = (e) => {
        const form = e.target;
        const requiredElements = form.querySelectorAll('input[required]');
        let hasErrors = false;
        
        requiredElements.forEach(el => {
            if (el.type === 'file') {
                if (!el.files || el.files.length === 0) {
                    el.style.border = '2px solid red';
                    hasErrors = true;
                } else {
                    el.style.border = '1px solid #e2e8f0';
                }
            } else {
                if (!el.value.trim()) {
                    el.style.border = '2px solid red';
                    hasErrors = true;
                } else {
                    el.style.border = '1px solid #e2e8f0';
                }
            }
        });

        if (hasErrors) {
            e.preventDefault();
            alert('Please fill out all required fields and upload your resume.');
        }
    };

    const values = [
        { icon: <Lightbulb size={28} />, title: "Relentless Curiosity", desc: "We don't just follow trends; we ask 'Why?' and 'What's next?' to lead the industry." },
        { icon: <ShieldCheck size={28} />, title: "Radical Ownership", desc: "Every team member is an owner. We take pride in our work and its impact on the world." },
        { icon: <Users size={28} />, title: "Collective Genius", desc: "We believe the best ideas come from diverse perspectives and collaborative friction." },
    ];

    const openPositions = [
        {
            title: "Full Stack Developer",
            department: "Engineering",
            location: "Remote / Tenkasi",
            type: "Full-Time",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
            icon: <Code size={20} color="var(--primary)" />,
            tags: ["Full Stack", "React", "Node.js"],
            salary: "Competitive",
            featured: true
        },
        {
            title: "Mobile App Developer",
            department: "Mobile Engineering",
            location: "Hybrid / Tenkasi",
            type: "Full-Time",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
            icon: <Smartphone size={20} color="#ec4899" />,
            tags: ["Flutter", "Swift", "Android"],
            salary: "Competitive",
            featured: true
        },
        {
            title: "Digital Marketing Strategist",
            department: "Marketing",
            location: "Hybrid / Tenkasi",
            type: "Full-Time",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
            icon: <Zap size={20} color="#f59e0b" />,
            tags: ["SEO", "Meta Ads", "Strategy"],
            salary: "Competitive",
            featured: false
        }
    ];

    const hiringSteps = [
        {
            title: "Apply",
            desc: "Submit your profile and portfolio.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Review",
            desc: "Our team reviews your craft and fit.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        },
        {
            title: "Interview",
            desc: "Deep dive into your skills and goals.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Offer",
            desc: "Welcome to the future of innovation.",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const faqs = [
        { q: "Do you offer remote work?", a: "Yes, we are a remote-first company, but we maintain a beautiful hub in Tenkasi for those who love in-person collaboration." },
        { q: "What is your interview process like?", a: "We value your time. Our process usually involves an initial chat, a technical/design review, and a culture-fit meeting." },
        { q: "Are there growth opportunities?", a: "Absolutely. We have a dedicated 'Growth Blueprint' for every employee to help them scale their skills and salary." }
    ];

    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', fontFamily: "'Outfit', sans-serif", color: '#0f172a' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap');
                
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(1deg); }
                    50% { transform: translateY(-20px) rotate(-1deg); }
                }
                .hero-image { animation: float 8s ease-in-out infinite; }
                
                .glass-card {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .glass-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
                
                .role-card {
                    background: white;
                    border: 1px solid #f1f5f9;
                    border-radius: 35px;
                    overflow: hidden;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }
                .role-card:hover {
                    transform: translateY(-12px) scale(1.02);
                    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.1);
                    border-color: var(--primary);
                }
                .role-img-container {
                    height: 220px;
                    overflow: hidden;
                    position: relative;
                }
                .role-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s ease;
                }
                .role-card:hover .role-img {
                    transform: scale(1.1);
                }

                .journey-step-card:hover img { transform: scale(1.1); }
                .journey-step-card img { transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
                
                .gradient-portal {
                    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1e40af 100%);
                    position: relative;
                    overflow: hidden;
                }
                .gradient-portal::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
                    opacity: 0.1;
                }

                .btn-glow {
                    background: var(--primary);
                    color: black;
                    padding: 1.5rem 5rem;
                    border-radius: 50px;
                    font-size: 1.3rem;
                    font-weight: 800;
                    display: inline-flex;
                    align-items: center;
                    gap: 15px;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    text-decoration: none;
                    cursor: pointer;
                    border: none;
                }
                .btn-glow:hover {
                    box-shadow: 0 0 30px rgba(0, 242, 255, 0.5);
                    transform: scale(1.05);
                }

                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.8);
                    backdrop-filter: blur(8px);
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    animation: fadeIn 0.3s ease;
                }
                .modal-container {
                    background: white;
                    width: 100%;
                    max-width: 700px;
                    max-height: 90vh;
                    border-radius: 40px;
                    position: relative;
                    overflow-y: auto;
                    box-shadow: 0 50px 100px rgba(0,0,0,0.3);
                    padding: 3rem;
                }
                .form-input {
                    width: 100%;
                    padding: 1.2rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    background: #f8fafc;
                    font-family: inherit;
                    font-size: 1rem;
                    margin-top: 0.5rem;
                    transition: all 0.3s;
                }
                .form-input:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: white;
                    box-shadow: 0 0 0 4px rgba(0, 242, 255, 0.1);
                }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

                @media (max-width: 991px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                        gap: 3rem !important;
                    }
                    .hero-content-box {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-image {
                        margin-top: 2rem;
                    }
                    .hero-image img {
                        height: 400px !important;
                    }
                    .values-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .journey-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 1.5rem !important;
                    }
                }

                @media (max-width: 768px) {
                    .section-padding {
                        padding: 80px 0 !important;
                    }
                    .section-title {
                        font-size: 2.8rem !important;
                    }
                    .hero-title {
                        font-size: 3rem !important;
                    }
                    .roles-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .journey-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .btn-glow {
                        padding: 1.2rem 3rem !important;
                        font-size: 1.1rem !important;
                    }
                    .gradient-portal {
                        padding: 6rem 2rem !important;
                        border-radius: 40px !important;
                    }
                }
            `}</style>

            {/* Modal - Professional Gmail Submission Form */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-container" onClick={e => e.stopPropagation()}>
                        <div style={{ position: 'absolute', top: '30px', right: '30px', cursor: 'pointer' }} onClick={() => setShowModal(false)}>
                            <div style={{ width: '40px', height: '40px', background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</div>
                        </div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e1b4b' }}>Apply for <span style={{ color: 'var(--primary)' }}>{selectedJob}</span></h2>
                        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Your application and CV will be sent directly to our recruitment team.</p>

                        <form
                            action="https://formsubmit.co/info@flytowardsdigitalinnovation.com"
                            method="POST"
                            onSubmit={handleFormSubmit}
                            encType="multipart/form-data"
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}
                        >
                            {/* FormSubmit.co Configuration */}
                            <input type="hidden" name="_subject" value={`New Job Application: ${selectedJob}`} />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="Job_Position" value={selectedJob} />

                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Full Name</label>
                                <input required type="text" name="Candidate_Name" className="form-input" placeholder="Enter your full name" />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email Address</label>
                                <input required type="email" name="Email_ID" className="form-input" placeholder="yourname@gmail.com" />
                            </div>
                            <div>
                                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Phone No.</label>
                                <input required type="tel" name="Phone_No" className="form-input" placeholder="+91 XXXXX XXXXX" />
                            </div>
                            <div>
                                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Degree & Specialization</label>
                                <input required type="text" name="Degree" className="form-input" placeholder="e.g. B.Tech IT" />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Upload Resume (PDF/DOC)</label>
                                <input required type="file" name="attachment" accept=".pdf,.doc,.docx" className="form-input" style={{ padding: '0.8rem' }} />
                                <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>Max file size: 5MB</p>
                            </div>

                            <div style={{ gridColumn: 'span 2', marginTop: '1rem' }}>
                                <button type="submit" style={{
                                    width: '100%', padding: '1.4rem', background: 'var(--gradient-primary)',
                                    color: 'white', border: 'none', borderRadius: '15px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer',
                                    transition: 'transform 0.2s', boxShadow: '0 10px 25px rgba(0, 242, 255, 0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
                                }}>
                                    Submit Application to Gmail <ArrowRight size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Background Orbs */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            {/* Hero Section */}
            <section className="section-padding" style={{ position: 'relative', zIndex: 1, paddingTop: '180px', paddingBottom: '120px' }}>
                <div className="max-w-1200" style={{ margin: '0 auto', padding: '0 2rem' }}>
                    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', alignItems: 'center', gap: '4rem' }}>
                        <div data-aos="fade-right" className="hero-content-box">
                            <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>Careers at Fly Towards</span>
                            <h1 className="hero-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 0.9, marginBottom: '2.5rem', letterSpacing: '-0.03em', color: '#1e1b4b' }}>
                                The Future <br /> Needs Your <br />
                                <span className="gradient-text">Boldness.</span>
                            </h1>
                            <p style={{ fontSize: '1.4rem', color: '#64748b', lineHeight: 1.6, marginBottom: '3.5rem', maxWidth: '550px' }}>
                                We are building the next generation of digital infrastructure. Join a tribe that values craft, impact, and your individual growth.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <a href="#openings" className="btn btn-primary" style={{ padding: '1.4rem 3.5rem', borderRadius: '50px', fontWeight: 800, fontSize: '1.1rem' }}>Open Roles</a>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem', background: '#f8fafc', borderRadius: '50px' }}>
                                    <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Hiring: Engineering & Design</span>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="hero-image">
                            <div style={{ position: 'relative', borderRadius: '50px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,0,0,0.1)' }}>
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="The Team" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', padding: '2rem', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', borderRadius: '30px', border: '1px solid white' }}>
                                    <p style={{ margin: 0, fontWeight: 800, fontSize: '1.1rem' }}>"The culture here isn't just about work, it's about pushing what's possible."</p>
                                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>— Engineering Lead</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding" style={{ padding: '120px 0', background: '#fcfcfd', position: 'relative', zIndex: 1 }}>
                <div className="max-w-1200" style={{ margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <h2 className="section-title" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#1e1b4b' }}>Our Core <span className="gradient-text">DNA</span></h2>
                        <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>We hired humans, not resources. These are the values that bind us together.</p>
                    </div>
                    <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
                        {values.map((v, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="glass-card" style={{ padding: '4rem 3rem', borderRadius: '40px', textAlign: 'center', background: '#fff' }}>
                                <div style={{ width: '70px', height: '70px', background: 'var(--primary)', color: 'black', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                                    {v.icon}
                                </div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.2rem', color: '#1e1b4b' }}>{v.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '1.05rem' }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Role Listings */}
            <section id="openings" className="section-padding" style={{ padding: '120px 0', background: '#f8fafc', color: '#0f172a', position: 'relative', zIndex: 1 }}>
                <div className="max-w-1200" style={{ margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Opportunities</span>
                        <h2 className="section-title" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', color: '#1e1b4b', letterSpacing: '-0.04em' }}>Join the <span className="gradient-text">Tribe</span></h2>
                        <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>We aren't looking for employees. We're looking for architects of the future.</p>
                    </div>

                    <div className="roles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem' }}>
                        {openPositions.map((job, idx) => (
                            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="role-card">
                                <div className="role-img-container">
                                    <img src={job.image} alt={job.title} className="role-img" />
                                    <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '10px' }}>
                                        {job.featured && (
                                            <span style={{ padding: '6px 14px', background: 'var(--primary)', color: 'black', fontSize: '0.75rem', fontWeight: 800, borderRadius: '50px', boxShadow: '0 10px 20px rgba(0, 242, 255, 0.3)' }}>HOT ROLE</span>
                                        )}
                                        <span style={{ padding: '6px 14px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', color: 'white', fontSize: '0.75rem', fontWeight: 700, borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)' }}>{job.type}</span>
                                    </div>
                                    <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '50px', height: '50px', background: 'white', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                                        {job.icon}
                                    </div>
                                </div>
                                <div style={{ padding: '2.5rem' }}>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.8rem' }}>{job.department}</span>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.2rem', color: '#1e1b4b', minHeight: '60px' }}>{job.title}</h3>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2rem' }}>
                                        {job.tags.map((tag, tIdx) => (
                                            <span key={tIdx} style={{ padding: '6px 12px', background: '#f1f5f9', color: '#475569', fontSize: '0.8rem', fontWeight: 700, borderRadius: '8px' }}>#{tag}</span>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>Location</span>
                                            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b' }}>{job.location}</span>
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            style={{ padding: '0.8rem 2rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: 800 }}
                                            onClick={() => handleApplyClick(job.title)}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Process */}
            <section id="journey" className="section-padding" style={{ padding: '120px 0', position: 'relative', zIndex: 1, background: '#fff' }}>
                <div className="max-w-1200" style={{ margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Steps to join</span>
                        <h2 className="section-title" style={{ fontSize: '3.5rem', fontWeight: 800, marginTop: '1rem', color: '#1e1b4b' }}>Your Journey <span style={{ color: 'var(--primary)' }}>Starts Here.</span></h2>
                    </div>

                    <div className="journey-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                        {hiringSteps.map((step, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="journey-step-card" style={{
                                background: '#f8fafc', padding: '1.5rem', borderRadius: '32px', border: '1px solid #f1f5f9',
                                transition: 'all 0.3s'
                            }}>
                                <div style={{
                                    height: '160px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    marginBottom: '1.5rem',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                                }}>
                                    <img src={step.image} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="journey-img" />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                                    <div style={{
                                        width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)',
                                        color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.9rem', fontWeight: 800
                                    }}>
                                        {i + 1}
                                    </div>
                                    <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e1b4b' }}>{step.title}</h4>
                                </div>
                                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '1.05rem' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '120px 0', position: 'relative', zIndex: 1, background: '#fcfcfd' }}>
                <div className="max-w-800" style={{ margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: '#1e1b4b' }}>Common <span style={{ color: 'var(--primary)' }}>Questions</span></h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} data-aos="fade-up" style={{
                                padding: '2.2rem', background: '#fff', borderRadius: '24px',
                                cursor: 'pointer', border: activeFaq === i ? '2px solid var(--primary)' : '2px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.3s',
                                boxShadow: activeFaq === i ? '0 15px 30px rgba(0, 242, 255, 0.1)' : 'none'
                            }} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e1b4b' }}>{faq.q}</h4>
                                    <div style={{
                                        width: '32px', height: '32px', borderRadius: '50%',
                                        background: activeFaq === i ? 'var(--primary)' : '#f1f5f9',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: activeFaq === i ? 'black' : '#64748b', transition: 'all 0.3s'
                                    }}>
                                        <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{activeFaq === i ? '−' : '+'}</span>
                                    </div>
                                </div>
                                {activeFaq === i && (
                                    <p style={{ marginTop: '1.5rem', color: '#64748b', fontSize: '1.15rem', lineHeight: 1.8, animation: 'fadeIn 0.5s ease' }}>
                                        {faq.a}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '0 2rem 160px' }}>
                <div data-aos="zoom-in" className="gradient-portal" style={{
                    margin: '0 auto',
                    padding: '12rem 4rem',
                    borderRadius: '100px',
                    textAlign: 'center',
                    boxShadow: '0 80px 150px rgba(15, 23, 42, 0.4)',
                    background: 'linear-gradient(225deg, #0f172a 0%, #1e1b4b 100%)'
                }}>
                    <style>{`
                        @keyframes pulse-glow {
                            0%, 100% { opacity: 0.5; transform: scale(1); }
                            50% { opacity: 0.8; transform: scale(1.1); }
                        }
                        .glow-overlay {
                            position: absolute;
                            inset: 0;
                            background: radial-gradient(circle at center, var(--primary) 0%, transparent 70%);
                            mix-blend-mode: overlay;
                            animation: pulse-glow 10s infinite;
                        }
                    `}</style>
                    <div className="glow-overlay"></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{
                            display: 'inline-block', padding: '1rem 2.5rem', borderRadius: '50px',
                            background: 'rgba(0, 242, 255, 0.1)', backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 242, 255, 0.2)', marginBottom: '3.5rem',
                            color: 'var(--primary)', fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase',
                            letterSpacing: '0.3em'
                        }}>
                            The Future Starts Now
                        </div>
                        <h2 style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)', fontWeight: 800, color: '#fff', marginBottom: '3rem', letterSpacing: '-0.05em', lineHeight: 0.9 }}>
                            Join the <br /><span style={{ color: 'var(--primary)' }}>Revolution.</span>
                        </h2>
                        <p style={{ fontSize: '1.6rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 5rem', lineHeight: 1.6, opacity: 0.9 }}>
                            We aren't creating jobs. We're assembling a tribe of visionaries to redefine what's possible.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                            <button className="btn-glow" onClick={() => handleApplyClick("General Application")}>
                                Send Your CV <ArrowRight size={28} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Careers;
