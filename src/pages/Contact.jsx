import { ArrowRight, Phone, Mail, Clock, MapPin, Send, Zap, Shield, Target, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formStatus, setFormStatus] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState('Digital Marketing');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            e.target.reset();
            setSelectedSubject('Digital Marketing');
            setTimeout(() => setFormStatus(null), 5000);
        }, 1500);
    };

    const whyChooseUs = [
        { icon: <Zap size={22} color="#CA8A04" strokeWidth={2.2} />, text: "Fast Response" },
        { icon: <Shield size={22} color="#CA8A04" strokeWidth={2.2} />, text: "Affordable Services" },
        { icon: <Users size={22} color="#CA8A04" strokeWidth={2.2} />, text: "Expert Digital Marketing Team" },
        { icon: <Target size={22} color="#CA8A04" strokeWidth={2.2} />, text: "Custom Strategies" }
    ];

    const subjectOptions = ['Digital Marketing', 'Web Development'];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '140px', paddingBottom: '3rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
                    <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <Send size={18} /> Contact Us
                    </span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Let’s Take Your Business to <br />
                        <span className="gradient-text">New Digital Heights</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                        Have a project in mind? Need more customers? Or want to grow your brand online? Our team is here to support your digital journey every step of the way.
                    </p>
                </div>
            </section>

            {/* Contact Grid Section */}
            <section id="contact-details" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
                <div className="grid-2 max-w-1200" style={{ gap: '4rem', alignItems: 'start', margin: '0 auto' }}>

                    {/* Left Column - Contact Info */}
                    <div data-aos="fade-right">
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get in <span className="gradient-text">Touch</span></h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                                Your digital success starts here. Contact us today and fly towards digital innovation.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: '#FFFFFF', padding: '1.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)' }}>
                                    <div style={{ background: '#1F2937', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 8px 18px rgba(31, 41, 55, 0.15)' }}>
                                        <Phone size={24} color="#FACC15" strokeWidth={2.2} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 800, color: '#1e1b4b' }}>Phone / WhatsApp</h4>
                                        <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" style={{ color: '#4B5563', fontSize: '1.05rem', textDecoration: 'none', fontWeight: 600 }}>+91 90809 99823</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: '#FFFFFF', padding: '1.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)' }}>
                                    <div style={{ background: '#1F2937', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 8px 18px rgba(31, 41, 55, 0.15)' }}>
                                        <Mail size={24} color="#FACC15" strokeWidth={2.2} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 800, color: '#1e1b4b' }}>Email Address</h4>
                                        <a href="mailto:flytowardsdigitalinnovation@gmail.com" style={{ color: '#4B5563', fontSize: '1.05rem', textDecoration: 'none', wordBreak: 'break-all', fontWeight: 600 }}>flytowardsdigitalinnovation@gmail.com</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: '#FFFFFF', padding: '1.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)' }}>
                                    <div style={{ background: '#1F2937', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 8px 18px rgba(31, 41, 55, 0.15)' }}>
                                        <Clock size={24} color="#FACC15" strokeWidth={2.2} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 800, color: '#1e1b4b' }}>Working Hours</h4>
                                        <p style={{ color: '#4B5563', fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Mon–Sat | 9:00 AM – 7:00 PM</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: '#FFFFFF', padding: '1.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)' }}>
                                    <div style={{ background: '#1F2937', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 8px 18px rgba(31, 41, 55, 0.15)' }}>
                                        <MapPin size={24} color="#FACC15" strokeWidth={2.2} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 800, color: '#1e1b4b' }}>Office Address</h4>
                                        <p style={{ color: '#4B5563', fontSize: '1.05rem', margin: 0, lineHeight: 1.6, fontWeight: 600 }}>Fly Towards Digital Innovation,<br />vadaku Ratha veethi sankarankovil,<br />Tenkasi, Tamil Nadu - 627756</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 800, color: '#1e1b4b' }}>Why <span className="gradient-text">Choose Us?</span></h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                                {whyChooseUs.map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#FFFFFF', padding: '1.25rem 1.4rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)', border: '1px solid #E2E8F0', minHeight: '80px' }}>
                                        <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#FEF9C3', border: '1px solid rgba(250, 204, 21, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            {item.icon}
                                        </div>
                                        <span style={{ fontWeight: 700, fontSize: '0.98rem', color: '#1F2937', lineHeight: 1.35 }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="card" data-aos="fade-left" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'var(--gradient-primary)' }}></div>
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Send Us a <span className="gradient-text">Message</span></h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Fill out the form below and our team will get back to you shortly.</p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>First Name</label>
                                    <input type="text" required placeholder="First Name" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Last Name</label>
                                    <input type="text" required placeholder="Last Name" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Email Address</label>
                                <input type="email" required placeholder="Your mail address" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Subject</label>
                                <select name="subject" required defaultValue="" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem', color: 'var(--text-dark)' }}>
                                    <option value="" disabled>Select a subject</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                                    <option value="Video Editing">Video Editing</option>
                                    <option value="Courses & Internship">Courses & Internship</option>
                                    <option value="Customized Software">Customized Software</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Your Message</label>
                                <textarea rows="5" required placeholder="Tell us about your project..." style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem', resize: 'vertical' }}></textarea>
                            </div>

                            <button type="submit" disabled={formStatus === 'sending'} className="btn btn-primary" style={{ padding: '1.2rem', fontSize: '1.1rem', width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                {formStatus === 'sending' ? 'Sending...' : 'Submit Form'} {formStatus !== 'sending' && <Send size={20} />}
                            </button>

                            {formStatus === 'success' && (
                                <div style={{ background: 'rgba(0, 242, 255, 0.1)', color: 'var(--primary)', padding: '1rem', borderRadius: '10px', textAlign: 'center', fontWeight: 600, marginTop: '1rem' }}>
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
