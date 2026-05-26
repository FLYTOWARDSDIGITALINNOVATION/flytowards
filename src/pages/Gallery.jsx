import { Briefcase, MapPin, Users, Zap, ArrowRight, Heart, Trophy, Globe, Code, X, Upload, Send, User, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);

    const handleIframeLoad = () => {
        if (isSubmitting) {
            setIsSubmitting(false);
            setIsModalOpen(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }
    };

    const perks = [
        { icon: <Heart size={28} />, title: 'Health & Wellness', desc: 'Comprehensive health coverage and wellness programs for you and your family.' },
        { icon: <Globe size={28} />, title: 'Work from Anywhere', desc: 'Flexible remote and hybrid options allowing you to work where you are most productive.' },
        { icon: <Trophy size={28} />, title: 'Continuous Growth', desc: 'Generous learning budgets and dedicated time for professional development and training.' },
        { icon: <Code size={28} />, title: 'Cutting-edge Tech', desc: 'Work with the latest modern frameworks and tools to build future-ready solutions.' }
    ];

    const openPositions = [
        {
            title: "Senior React Developer",
            department: "Engineering",
            location: "Remote / Tenkasi, Tamil Nadu",
            type: "Full-Time",
            desc: "Lead the frontend architecture and build highly performant reactive applications.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Digital Marketing Strategist",
            department: "Marketing",
            location: "Hybrid / Tenkasi, Tamil Nadu",
            type: "Full-Time",
            desc: "Drive growth through innovative digital campaigns and data-driven marketing strategies.",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
        },
        {
            title: "Full Stack Web Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-Time",
            desc: "Develop robust backends and seamless frontends for our diverse client portfolio.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "UI/UX Product Designer",
            department: "Design",
            location: "Remote",
            type: "Full-Time",
            desc: "Craft premium, intuitive, and highly functional digital experiences.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    return (
        <main style={{ background: '#f8fafc' }}>
            <div className="mesh-bg"></div>

            {/* HERO SECTION */}
            <section style={{
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '120px',
                paddingBottom: '4rem',
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(30, 80, 255, 0.03) 0%, rgba(255, 30, 150, 0.03) 100%)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
                    <div data-aos="fade-right">
                        <span className="section-tag" style={{ display: 'inline-flex', gap: '8px', marginBottom: '1.5rem' }}>
                            <Briefcase size={18} /> Careers at Fly Towards
                        </span>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.1, color: '#0f172a' }}>
                            Do the best work of <br /> your life <span className="gradient-text">here.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            We are a passionate team pushing the boundaries of digital innovation. Join us to build world-class products in a culture that genuinely values your growth and creativity.
                        </p>
                        <button className="btn btn-primary" onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}>
                            Explore Openings <ArrowRight size={18} />
                        </button>
                    </div>

                    <div data-aos="fade-left" style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(30,80,255,0.15) 0%, transparent 60%)', filter: 'blur(40px)', zIndex: 0 }}></div>
                        <div style={{
                            width: '100%',
                            height: '500px',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                            border: '8px solid white',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Fly Towards Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        {/* Decorative floating card */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            left: '-40px',
                            background: 'white',
                            padding: '1.5rem',
                            borderRadius: '20px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            animation: 'fadeUp 1s ease-out 0.5s both'
                        }}>
                            <div style={{ background: 'rgba(30,80,255,0.1)', padding: '12px', borderRadius: '15px', color: 'var(--primary)' }}>
                                <Users size={24} />
                            </div>
                            <div>
                                <p style={{ fontWeight: '800', fontSize: '1.2rem', margin: 0, color: '#0f172a' }}>30+</p>
                                <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Team Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PERKS SECTION */}
            <section style={{ padding: '6rem 2rem', background: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#0f172a' }}>Why join us?</h2>
                        <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>We believe that taking care of our team is the best way to take care of our clients. Everything you need to thrive.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                        {perks.map((perk, idx) => (
                            <div key={idx} style={{
                                padding: '2.5rem',
                                background: '#f8fafc',
                                borderRadius: '24px',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s ease'
                            }} className="perk-card" data-aos="fade-up" data-aos-delay={100 * idx}>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '16px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                                }}>
                                    {perk.icon}
                                </div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: '#0f172a' }}>{perk.title}</h3>
                                <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OPEN POSITIONS */}
            <section id="openings" style={{ padding: '6rem 2rem', background: '#0a0a0a' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }} data-aos="fade-up">
                        <div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: 'white' }}>Open Positions</h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Find your perfect role and make an immediate impact.</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))', gap: '2rem' }}>
                        {openPositions.map((job, idx) => (
                            <div key={idx} style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '30px',
                                overflow: 'hidden',
                                transition: 'all 0.4s ease',
                                display: 'flex',
                                flexDirection: 'column'
                            }} className="career-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div style={{ height: '240px', width: '100%', overflow: 'hidden' }}>
                                    <img src={job.image} alt={job.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="career-card-img" />
                                </div>

                                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                                        <span style={{ padding: '6px 14px', background: 'rgba(30, 80, 255, 0.15)', color: '#60a5fa', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                                            {job.department}
                                        </span>
                                        <span style={{ padding: '6px 14px', background: 'rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                                            {job.type}
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem', color: 'white' }}>{job.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>{job.desc}</p>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.9rem' }}>
                                            <MapPin size={16} /> {job.location}
                                        </div>
                                        <Link to="/apply" className="btn" style={{ background: 'white', color: 'black', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', borderRadius: '12px', textDecoration: 'none' }}>
                                            Apply <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section style={{ padding: '4rem 2rem 8rem', background: '#0a0a0a' }}>
                <div className="max-w-1200" style={{ margin: '0 auto' }}>
                    <div data-aos="zoom-in" style={{
                        padding: '4rem 3rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(30,80,255,0.1) 0%, rgba(255,30,150,0.1) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '40px',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
                                <Zap size={40} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white', fontWeight: '800' }}>
                                Don't see a perfect fit?
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '650px', marginInline: 'auto' }}>
                                We're constantly evolving and always ready to make room for exceptional talent. If you have unique skills, we want to hear from you.
                            </p>
                            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                                Send Your Resume <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* UPLOAD MODAL */}
            {isModalOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '24px', width: '90%', maxWidth: '450px', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
                        <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer' }}>
                            <X size={24} color="#94a3b8" />
                        </button>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem', color: '#0f172a' }}>Drop your resume</h2>
                        <p style={{ color: '#64748b', marginBottom: '2rem' }}>We're always looking for great talent.</p>
                        
                        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={handleIframeLoad}></iframe>
                        
                        <form 
                            action="https://formsubmit.co/flytowardsdigitalinnovation@gmail.com" 
                            method="POST" 
                            encType="multipart/form-data" 
                            target="hidden_iframe" 
                            onSubmit={() => setIsSubmitting(true)} 
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                        >
                            <input type="hidden" name="_subject" value="New General Resume Uploaded!" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            
                            <div style={{ position: 'relative' }}>
                                <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                <input type="text" name="Name" placeholder="Full Name" required style={{ width: '100%', padding: '16px 16px 16px 48px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem', color: '#0f172a' }} />
                            </div>
                            
                            <div style={{ position: 'relative' }}>
                                <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                <input type="email" name="Email" placeholder="Email Address" required style={{ width: '100%', padding: '16px 16px 16px 48px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem', color: '#0f172a' }} />
                            </div>

                            <div style={{ position: 'relative' }}>
                                <Upload size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                <input type="file" name="attachment" accept=".pdf,.doc,.docx" required style={{ width: '100%', padding: '14px 16px 14px 48px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem', color: '#0f172a', background: '#f8fafc', cursor: 'pointer' }} />
                            </div>

                            <button type="submit" disabled={isSubmitting} style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', color: 'white', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}>
                                {isSubmitting ? 'Uploading...' : 'Submit Resume'} <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* SUCCESS POPUP */}
            {showSuccess && (
                <div style={{ position: 'fixed', bottom: '40px', right: '40px', background: '#22c55e', color: 'white', padding: '16px 24px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)', zIndex: 1001, display: 'flex', alignItems: 'center', gap: '12px', animation: 'fadeUp 0.3s ease' }}>
                    <div style={{ background: 'white', color: '#22c55e', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '14px' }}>✓</div>
                    <span>Resume uploaded successfully!</span>
                </div>
            )}

            <style jsx>{`
                .perk-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                    border-color: rgba(30,80,255,0.3) !important;
                }
                .career-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                    border-color: rgba(255,255,255,0.2) !important;
                }
                .career-card:hover .career-card-img {
                    transform: scale(1.05);
                }
                @media (max-width: 768px) {
                    section > div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </main>
    );
};

export default Gallery;
