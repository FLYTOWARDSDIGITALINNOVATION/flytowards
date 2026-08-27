import { ArrowRight, Phone, Mail, Clock, MapPin, Send, Zap, Shield, Target, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
<<<<<<< HEAD
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
=======

        document.title = "Contact Fly Towards Digital Innovation";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content",
            "Let's Talk Share Your Innovation and Idea to us, We are here to help you");

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content",
            "Digital marketing services, Payroll Software, CRM Software, website development");

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "index, follow");

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href",
            "https://flytowardsdigitalinnovation.com/contact");

    }, []);

    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Ensure no inputs are empty or just whitespace
        const form = e.target;
        const requiredElements = form.querySelectorAll('input[required], textarea[required]');
        let hasErrors = false;
        
        requiredElements.forEach(el => {
            if (!el.value.trim()) {
                el.style.border = '2px solid red';
                hasErrors = true;
            } else {
                el.style.border = '1px solid var(--border)';
            }
        });
        
        if (hasErrors) {
            alert('Please fill out all required fields properly.');
            return;
        }

        setFormStatus('sending');
        
        try {
            const formData = new FormData(form);
            // Using FormSubmit.co AJAX for professional in-page feedback
            const response = await fetch("https://formsubmit.co/ajax/info@flytowardsdigitalinnovation.com", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus(null), 8000);
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setFormStatus('error');
            setTimeout(() => setFormStatus(null), 5000);
        }
>>>>>>> origin/main
    };

    const whyChooseUs = [
        { icon: <Zap size={24} color="var(--primary)" />, text: "Fast Response" },
        { icon: <Shield size={24} color="var(--secondary)" />, text: "Affordable Services" },
        { icon: <Users size={24} color="var(--accent)" />, text: "Expert Digital Marketing Team" },
        { icon: <Target size={24} color="var(--primary)" />, text: "Custom Strategies" }
    ];

<<<<<<< HEAD
    const subjectOptions = ['Digital Marketing', 'Web Development'];

=======
>>>>>>> origin/main
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
<<<<<<< HEAD
                        Let’s Take Your Business to <br />
                        <span className="gradient-text">New Digital Heights</span>
=======
                        Contact Us
>>>>>>> origin/main
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
<<<<<<< HEAD
                                        <a href="mailto:flytowardsdigitalinnovation@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', textDecoration: 'none', wordBreak: 'break-all' }}>flytowardsdigitalinnovation@gmail.com</a>
=======
                                        <a href="mailto:info@flytowardsdigitalinnovation.com" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', textDecoration: 'none', wordBreak: 'break-all' }}>info@flytowardsdigitalinnovation.com</a>
>>>>>>> origin/main
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
<<<<<<< HEAD
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                {whyChooseUs.map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-white)', padding: '1rem', borderRadius: '10px', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }}>
=======
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem' }}>
                                {whyChooseUs.map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-white)', padding: '1rem', borderRadius: '15px', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }}>
>>>>>>> origin/main
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
<<<<<<< HEAD
                                    <input type="text" required placeholder="First Name" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Last Name</label>
                                    <input type="text" required placeholder="Last Name" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
=======
                                    <input type="text" name="First Name" required placeholder="John" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Last Name</label>
                                    <input type="text" name="Last Name" required placeholder="Doe" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
>>>>>>> origin/main
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Email Address</label>
<<<<<<< HEAD
                                <input type="email" required placeholder="Your mail address" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
=======
                                <input type="email" name="Email" required placeholder="john@example.com" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
>>>>>>> origin/main
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Subject</label>
<<<<<<< HEAD
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
=======
                                <input type="text" name="Subject" required placeholder="Project Inquiry" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
>>>>>>> origin/main
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Your Message</label>
<<<<<<< HEAD
                                <textarea rows="5" required placeholder="Tell us about your project..." style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem', resize: 'vertical' }}></textarea>
                            </div>

                            <button type="submit" disabled={formStatus === 'sending'} className="btn btn-primary" style={{ padding: '1.2rem', fontSize: '1.1rem', width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                {formStatus === 'sending' ? 'Sending...' : 'Submit Form'} {formStatus !== 'sending' && <Send size={20} />}
=======
                                <textarea name="Message" rows="5" required placeholder="Tell us about your project..." style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem', resize: 'vertical' }}></textarea>
                            </div>

                            <button type="submit" disabled={formStatus === 'sending'} className="btn btn-primary" style={{ padding: '1.2rem', fontSize: '1.1rem', width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                {formStatus === 'sending' ? 'Sending...' : 'Submit Form to Gmail'} {formStatus !== 'sending' && <Send size={20} />}
>>>>>>> origin/main
                            </button>

                            {formStatus === 'success' && (
                                <div style={{ background: 'rgba(0, 242, 255, 0.1)', color: 'var(--primary)', padding: '1rem', borderRadius: '10px', textAlign: 'center', fontWeight: 600, marginTop: '1rem' }}>
<<<<<<< HEAD
                                    Thank you! Your message has been sent successfully.
=======
                                    Thank you! Your message has been sent successfully to info@flytowardsdigitalinnovation.com.
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div style={{ background: 'rgba(255, 0, 0, 0.1)', color: 'red', padding: '1rem', borderRadius: '10px', textAlign: 'center', fontWeight: 600, marginTop: '1rem' }}>
                                    Submission failed. Please try again or contact us via WhatsApp.
>>>>>>> origin/main
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> origin/main
