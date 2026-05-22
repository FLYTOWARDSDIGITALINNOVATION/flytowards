import { ArrowRight, Phone, Mail, Clock, MapPin, Send, Zap, Shield, Target, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            e.target.reset();
            setTimeout(() => setFormStatus(null), 5000);
        }, 1500);
    };

    const whyChooseUs = [
        { icon: <Zap size={24} color="var(--primary)" />, text: "Fast Response" },
        { icon: <Shield size={24} color="var(--secondary)" />, text: "Affordable Services" },
        { icon: <Users size={24} color="var(--accent)" />, text: "Expert Digital Marketing Team" },
        { icon: <Target size={24} color="var(--primary)" />, text: "Custom Strategies" }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '140px', paddingBottom: '3rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
                    <span className="section-tag" style={{ justifyContent: 'center', display: 'flex', gap: '8px' }}>
                        <Send size={18} /> Contact Us
                    </span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
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
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: 'rgba(255, 255, 255, 0.5)', padding: '1.5rem', borderRadius: '15px', border: '1px solid var(--border)' }}>
                                    <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                                        <Phone size={24} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700 }}>Phone / WhatsApp</h4>
                                        <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', textDecoration: 'none' }}>+91 90809 99823</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: 'rgba(255, 255, 255, 0.5)', padding: '1.5rem', borderRadius: '15px', border: '1px solid var(--border)' }}>
                                    <div style={{ background: 'rgba(255, 0, 122, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                                        <Mail size={24} color="var(--secondary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700 }}>Email Address</h4>
                                        <a href="mailto:flytowardsdigitalinnovation@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', textDecoration: 'none', wordBreak: 'break-all' }}>flytowardsdigitalinnovation@gmail.com</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: 'rgba(255, 255, 255, 0.5)', padding: '1.5rem', borderRadius: '15px', border: '1px solid var(--border)' }}>
                                    <div style={{ background: 'rgba(157, 0, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                                        <Clock size={24} color="var(--accent)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700 }}>Working Hours</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0 }}>Mon–Sat | 9:00 AM – 7:00 PM</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: 'rgba(255, 255, 255, 0.5)', padding: '1.5rem', borderRadius: '15px', border: '1px solid var(--border)' }}>
                                    <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                                        <MapPin size={24} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700 }}>Office Address</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>Fly Towards Digital Innovation,<br />vadaku Ratha veethi sankarankovil,<br />Tenkasi, Tamil Nadu - 627756</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Why <span className="gradient-text">Choose Us?</span></h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                {whyChooseUs.map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-white)', padding: '1rem', borderRadius: '10px', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }}>
                                        {item.icon}
                                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
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
                                    <input type="text" required placeholder="John" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Last Name</label>
                                    <input type="text" required placeholder="Doe" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Email Address</label>
                                <input type="email" required placeholder="john@example.com" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Subject</label>
                                <input type="text" required placeholder="Project Inquiry" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
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
