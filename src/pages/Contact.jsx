import { ArrowRight, Phone, Mail, Clock, MapPin, Send, Zap, Shield, Target, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        { icon: <Zap size={22} color="#CA8A04" strokeWidth={2.2} />, text: "Fast Response" },
        { icon: <Shield size={22} color="#CA8A04" strokeWidth={2.2} />, text: "Affordable Services" },
        { icon: <Users size={22} color="#CA8A04" strokeWidth={2.2} />, text: "Expert Digital Marketing Team" },
        { icon: <Target size={22} color="#CA8A04" strokeWidth={2.2} />, text: "Custom Strategies" }
    ];

    const subjectOptions = ['Digital Marketing', 'Web Development'];

    return (
        <main>
            <div className="mesh-bg"></div>

            <motion.section
                aria-labelledby="contact-software-development-heading"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: '140px 5% 4rem', background: '#FDFDFD' }}
            >
                <div style={{ width: 'min(100%, 1240px)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', alignItems: 'center', gap: 'clamp(2rem, 5vw, 4.5rem)' }}>
                    <div style={{ maxWidth: '720px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', padding: '8px 15px', marginBottom: '1rem', border: '1px solid rgba(234, 179, 8, 0.35)', borderRadius: '999px', background: '#FEFCE8', color: '#854D0E', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                            Fly Towards Digital Innovation
                        </span>
                        <motion.h1
                            id="contact-software-development-heading"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{ margin: '0 0 1.2rem', color: '#1F2937', fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.1 }}
                        >
                            Contact Software Development <span style={{ color: '#D6A900' }}>Company</span>
                        </motion.h1>
                        <p style={{ margin: '0 0 1.15rem', color: '#334155', fontSize: 'clamp(1.2rem, 2vw, 1.45rem)', lineHeight: 1.55, fontWeight: 650 }}>
                            Have a software idea, business challenge, or technology requirement?
                        </p>
                        <p style={{ margin: '0 0 1rem', color: '#64748B', fontSize: '1.06rem', lineHeight: 1.8 }}>
                            <strong>Contact our software development company</strong> to discuss your requirements, explore potential solutions, and understand the next steps for your software project.
                        </p>
                        <p style={{ margin: '0 0 1rem', color: '#64748B', fontSize: '1.06rem', lineHeight: 1.8 }}>
                            Whether you need custom software, an enterprise application, a SaaS product, a web application, a mobile application, software maintenance, or digital transformation support, our team can discuss your requirements and help you identify a suitable approach.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginTop: '1.7rem' }}>
                            <motion.a href="#contact-details" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '9px', minHeight: '48px', padding: '11px 18px', borderRadius: '999px', background: '#FACC15', color: '#1F2937', fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 20px rgba(234, 179, 8, 0.2)' }}>
                                Request a Software Consultation <ArrowRight size={17} />
                            </motion.a>
                            <motion.a href="#contact-details" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '9px', minHeight: '48px', padding: '11px 18px', borderRadius: '999px', border: '1px solid #CBD5E1', background: '#FFFFFF', color: '#1F2937', fontWeight: 800, textDecoration: 'none' }}>
                                Get a Software Quote <ArrowRight size={17} />
                            </motion.a>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.12 }}
                        style={{ position: 'relative', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '28px', background: '#FFFFFF', boxShadow: '0 24px 55px rgba(31, 41, 55, 0.12)' }}
                    >
                        <img src="/images%20(18).jpg" alt="Software development team discussing business requirements" style={{ display: 'block', position: 'relative', zIndex: 1, width: '100%', minHeight: '400px', maxHeight: '540px', objectFit: 'cover', borderRadius: '20px' }} />
                        <span aria-hidden="true" style={{ position: 'absolute', right: '-14px', bottom: '-14px', width: '42%', height: '42%', borderRight: '5px solid #FACC15', borderBottom: '5px solid #FACC15', borderRadius: '0 0 26px 0' }} />
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                aria-labelledby="discuss-software-requirement-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: '2rem 5% 3.5rem', background: '#FFFFFF' }}
            >
                <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0' }}>
                    <motion.h2
                        id="discuss-software-requirement-heading"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ margin: '0 0 1rem', color: '#1F2937', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', lineHeight: 1.2 }}
                    >
                        Let’s Discuss Your Software Requirement
                    </motion.h2>
                    <p style={{ margin: '0 0 0.75rem', color: '#334155', fontSize: '1.08rem', lineHeight: 1.75, fontWeight: 650 }}>
                        Every business has different processes, challenges, and technology requirements. Instead of starting with a predefined solution, we begin by understanding what you are trying to achieve.
                    </p>
                    <p style={{ margin: '0 0 1.25rem', color: '#64748B', lineHeight: 1.75 }}>
                        Tell us about your business requirement, existing system, software idea, or project goals. Our team can review the information and discuss possible approaches based on your needs.
                    </p>
                    <h3 style={{ margin: '0 0 0.9rem', color: '#334155', fontSize: '1.05rem' }}>You can contact us if you are:</h3>
                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '0.7rem', margin: 0, padding: 0, listStyle: 'none' }}
                    >
                        {[
                            'Planning a new software application',
                            'Looking for custom software development',
                            'Replacing or modernizing an existing system',
                            'Developing a SaaS product',
                            'Building a web or mobile application',
                            'Connecting different business systems',
                            'Exploring automation opportunities',
                            'Planning a digital transformation initiative',
                            'Looking for ongoing software maintenance and improvement'
                        ].map((need) => (
                            <motion.li
                                key={need}
                                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '0.8rem 0.9rem', border: '1px solid #E2E8F0', borderRadius: '13px', background: '#FFFFFF', color: '#475569', lineHeight: 1.55 }}
                            >
                                <span aria-hidden="true" style={{ width: '8px', height: '8px', flex: '0 0 8px', marginTop: '0.45rem', borderRadius: '50%', background: '#EAB308' }} />
                                {need}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </motion.section>

            <motion.section
                aria-labelledby="software-consultation-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: '0 5% 3.5rem', background: '#FFFFFF' }}
            >
                <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'clamp(1.5rem, 4vw, 2.75rem)', borderLeft: '4px solid #EAB308', borderRadius: '0 24px 24px 0', background: 'linear-gradient(120deg, #FEFCE8 0%, #FFFFFF 65%, #F8FAFC 100%)', boxShadow: '0 14px 38px rgba(31, 41, 55, 0.06)' }}>
                    <motion.h2
                        id="software-consultation-heading"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ margin: '0 0 0.85rem', color: '#1F2937', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', lineHeight: 1.2 }}
                    >
                        Request a Software Consultation
                    </motion.h2>
                    <p style={{ margin: '0 0 0.75rem', color: '#334155', fontSize: '1.08rem', fontWeight: 650, lineHeight: 1.7 }}>
                        Not sure which technology or development approach is right for your business?
                    </p>
                    <p style={{ margin: '0 0 1.2rem', color: '#64748B', lineHeight: 1.75 }}>
                        A <strong>software consultation</strong> can help you clarify your requirements before committing to a development approach.
                    </p>
                    <h3 style={{ margin: '0 0 0.85rem', color: '#334155', fontSize: '1.05rem' }}>During an initial discussion, you can share:</h3>
                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '0.65rem', margin: '0 0 1rem', padding: 0, listStyle: 'none' }}
                    >
                        {[
                            'Your business objectives',
                            'Current operational challenges',
                            'Existing software or systems',
                            'Required features and functionality',
                            'Target users',
                            'Integration requirements',
                            'Expected project scope',
                            'Your preferred timeline'
                        ].map((detail) => (
                            <motion.li
                                key={detail}
                                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.38, ease: 'easeOut' }}
                                style={{ padding: '0.75rem 0.85rem', border: '1px solid #E2E8F0', borderRadius: '13px', background: '#FFFFFF', color: '#475569', lineHeight: 1.5 }}
                            >
                                {detail}
                            </motion.li>
                        ))}
                    </motion.ul>
                    <p style={{ margin: '0 0 1.25rem', color: '#64748B', lineHeight: 1.75 }}>
                        The more information you provide, the easier it is to understand your requirement and discuss potential next steps.
                    </p>
                    <motion.a
                        href="#contact-details"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.2 }}
                        whileHover={{ y: -3, boxShadow: '0 12px 26px rgba(234, 179, 8, 0.22)' }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '12px 20px', borderRadius: '999px', background: '#FACC15', color: '#1F2937', fontWeight: 800, textDecoration: 'none' }}
                    >
                        Request Software Consultation <ArrowRight size={17} />
                    </motion.a>
                </div>
            </motion.section>

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
            <section id="contact-details" style={{ paddingTop: '2rem', paddingBottom: '6rem', scrollMarginTop: '130px' }}>
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
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Send Us Your <span className="gradient-text">Software Development Enquiry</span></h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Use the enquiry form to tell us about your project.</p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label htmlFor="enquiry-name" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Name</label>
                                    <input id="enquiry-name" name="name" type="text" required placeholder="Enter your name" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label htmlFor="enquiry-company" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Business / Company Name</label>
                                    <input id="enquiry-company" name="company" type="text" required placeholder="Enter your company name" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label htmlFor="enquiry-email" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Email Address</label>
                                    <input id="enquiry-email" name="email" type="email" required placeholder="Enter your business email" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label htmlFor="enquiry-phone" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Phone Number</label>
                                    <input id="enquiry-phone" name="phone" type="tel" required placeholder="Enter your contact number" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label htmlFor="enquiry-project-type" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Project Type</label>
                                    <select id="enquiry-project-type" name="projectType" required defaultValue="" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem', color: 'var(--text-dark)' }}>
                                        <option value="" disabled>Select your requirement</option>
                                        <option value="Custom Software">Custom Software</option>
                                        <option value="Enterprise Software">Enterprise Software</option>
                                        <option value="SaaS Development">SaaS Development</option>
                                        <option value="Web Application">Web Application</option>
                                        <option value="Mobile Application">Mobile Application</option>
                                        <option value="Software Maintenance">Software Maintenance</option>
                                        <option value="Digital Transformation">Digital Transformation</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label htmlFor="enquiry-budget" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Estimated Project Budget <span style={{ color: '#94A3B8', fontWeight: 400 }}>(Optional)</span></label>
                                    <input id="enquiry-budget" name="budget" type="text" placeholder="Enter an estimated budget" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label htmlFor="enquiry-timeline" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Expected Timeline <span style={{ color: '#94A3B8', fontWeight: 400 }}>(Optional)</span></label>
                                    <input id="enquiry-timeline" name="timeline" type="text" placeholder="When would you like to start?" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label htmlFor="enquiry-description" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Tell Us About Your Requirement</label>
                                <textarea id="enquiry-description" name="requirement" rows="5" required placeholder="Describe your business challenge, software idea, required features, or project requirements." style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem', resize: 'vertical' }}></textarea>
                            </div>

                            <label htmlFor="enquiry-policy-consent" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginTop: '1.25rem', color: 'var(--text-dark)', fontSize: '0.98rem', lineHeight: 1.6, cursor: 'pointer' }}>
                                <input id="enquiry-policy-consent" name="policyConsent" type="checkbox" required style={{ width: '18px', height: '18px', flex: '0 0 18px', marginTop: '4px', accentColor: '#F97316', cursor: 'pointer' }} />
                                <span>
                                    I agree to the <Link to="/privacy-policy" style={{ color: '#F97316', fontWeight: 650, textDecoration: 'none' }}>Privacy Policy</Link> and <Link to="/terms-and-conditions" style={{ color: '#F97316', fontWeight: 650, textDecoration: 'none' }}>Terms &amp; Conditions</Link>
                                </span>
                            </label>

                            <motion.button type="submit" disabled={formStatus === 'sending'} whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }} className="btn btn-primary" style={{ padding: '1.2rem', fontSize: '1.1rem', width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                {formStatus === 'sending' ? 'Sending...' : 'Submit Enquiry'} {formStatus !== 'sending' && <Send size={20} />}
                            </motion.button>

                            {formStatus === 'success' && (
                                <div style={{ background: 'rgba(0, 242, 255, 0.1)', color: 'var(--primary)', padding: '1rem', borderRadius: '10px', textAlign: 'center', fontWeight: 600, marginTop: '1rem' }}>
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            <motion.section
                aria-labelledby="contact-services-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: '1rem 5% 6rem', background: '#F8FAFC' }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 2rem' }}>
                        <h2 id="contact-services-heading" style={{ margin: '0 0 0.75rem', color: '#1F2937', fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', lineHeight: 1.2 }}>
                            What Can We Help You With?
                        </h2>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}
                    >
                        {[
                            { title: 'Custom Software Development', description: 'Build software around your specific business processes, requirements, and workflows.', action: 'Explore Custom Software Development', path: '/services/custom-software-development' },
                            { title: 'Enterprise Software', description: 'Develop business applications designed to support operational requirements, connected systems, and organizational growth.', action: 'Explore Enterprise Software', path: '/services/enterprise-software-development' },
                            { title: 'SaaS Development', description: 'Turn a software product idea into a scalable SaaS application designed around your product and business requirements.', action: 'Explore SaaS Development', path: '/services/saas-development' },
                            { title: 'Web Application Development', description: 'Develop web applications that support customers, employees, business processes, and digital operations.', action: 'Explore Web Application Development', path: '/services/web-application-development' },
                            { title: 'Mobile App Development', description: 'Build mobile applications that provide convenient and engaging experiences for your users.', action: 'Explore Mobile App Development', path: '/services/mobile-app-development' },
                            { title: 'Software Maintenance', description: 'Improve, maintain, update, and support existing software applications as business requirements evolve.', action: 'Explore Software Maintenance', path: '/services/software-maintenance-support' },
                            { title: 'Digital Transformation', description: 'Use software and technology to modernize processes, improve operations, connect systems, and support business transformation.', action: 'Explore Digital Transformation', path: '/services/software-modernization' }
                        ].map((service) => (
                            <motion.article
                                key={service.title}
                                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.42, ease: 'easeOut' }}
                                whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(31, 41, 55, 0.09)' }}
                                style={{ display: 'flex', minHeight: '235px', flexDirection: 'column', alignItems: 'flex-start', padding: '1.4rem', border: '1px solid #E2E8F0', borderRadius: '19px', background: '#FFFFFF', boxShadow: '0 7px 22px rgba(31, 41, 55, 0.045)' }}
                            >
                                <span aria-hidden="true" style={{ display: 'block', width: '30px', height: '4px', marginBottom: '0.9rem', borderRadius: '5px', background: '#EAB308' }} />
                                <h3 style={{ margin: '0 0 0.55rem', color: '#1F2937', fontSize: '1.12rem', lineHeight: 1.35 }}>{service.title}</h3>
                                <p style={{ flex: 1, margin: '0 0 1rem', color: '#64748B', lineHeight: 1.65 }}>{service.description}</p>
                                <Link to={service.path} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: '#854D0E', fontWeight: 800, lineHeight: 1.4, textDecoration: 'none' }}>
                                    {service.action} <ArrowRight size={15} />
                                </Link>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                aria-labelledby="after-enquiry-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: '1rem 5% 6rem', background: '#FFFFFF' }}
            >
                <div style={{ maxWidth: '1450px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', alignItems: 'center', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
                    <div>
                    <div style={{ textAlign: 'left', maxWidth: '850px', margin: '0 0 2rem' }}>
                        <h2 id="after-enquiry-heading" style={{ margin: '0 0 0.75rem', color: '#1F2937', fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', lineHeight: 1.2 }}>
                            What Happens After Your Enquiry?
                        </h2>
                        <p style={{ color: '#64748B', lineHeight: 1.7, margin: 0 }}>
                            We aim to make the initial conversation straightforward and focused on your requirements.
                        </p>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}
                        variants={{ visible: { transition: { staggerChildren: 0.11 } } }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}
                    >
                        {[
                            { number: '01', title: 'Share Your Requirement', description: 'Tell us about your business, software requirement, current challenges, or project idea.' },
                            { number: '02', title: 'Understand Your Needs', description: 'We review the information you provide and discuss the key requirements and objectives.' },
                            { number: '03', title: 'Explore the Approach', description: 'We discuss potential software approaches based on your requirements, scope, and business goals.' },
                            { number: '04', title: 'Discuss Next Steps', description: 'Once the requirement is understood, we can discuss the appropriate next steps for your project.' }
                        ].map((step) => (
                            <motion.article
                                key={step.number}
                                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                                whileHover={{ y: -4, boxShadow: '0 16px 30px rgba(31, 41, 55, 0.08)' }}
                                style={{ padding: '1.4rem', border: '1px solid #E2E8F0', borderRadius: '18px', background: 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)', boxShadow: '0 7px 20px rgba(31, 41, 55, 0.045)' }}
                            >
                                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', marginBottom: '0.9rem', borderRadius: '12px', background: '#FEF3C7', color: '#854D0E', fontSize: '0.82rem', fontWeight: 850 }}>{step.number}</span>
                                <h3 style={{ margin: '0 0 0.6rem', color: '#1F2937', fontSize: '1.08rem', lineHeight: 1.4 }}>{step.title}</h3>
                                <p style={{ margin: 0, color: '#64748B', lineHeight: 1.65 }}>{step.description}</p>
                            </motion.article>
                        ))}
                    </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 24, scale: 0.98 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden', minHeight: '320px', borderRadius: '22px', border: '1px solid #E2E8F0', boxShadow: '0 16px 36px rgba(31, 41, 55, 0.12)' }}
                    >
                        <img
                            src="/images%20(20).jpg"
                            alt="Planning the next steps for a software project enquiry"
                            style={{ display: 'block', width: '100%', height: '100%', minHeight: '320px', maxHeight: '500px', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                aria-labelledby="software-quote-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: '0 5% 6rem', background: '#FFFFFF' }}
            >
                <div style={{ maxWidth: '1300px', margin: '0 auto', padding: 'clamp(1.7rem, 4vw, 2.8rem)', borderRadius: '24px', border: '1px solid #E2E8F0', borderTop: '4px solid #EAB308', background: 'linear-gradient(145deg, #FFFFFF 0%, #FEFCE8 100%)', boxShadow: '0 14px 38px rgba(31, 41, 55, 0.07)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', alignItems: 'center', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
                    <div>
                    <motion.h2
                        id="software-quote-heading"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ margin: '0 0 0.85rem', color: '#1F2937', fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', lineHeight: 1.2 }}
                    >
                        Looking to Get a Software Quote?
                    </motion.h2>
                    <p style={{ margin: '0 0 0.75rem', color: '#334155', fontSize: '1.08rem', fontWeight: 650, lineHeight: 1.7 }}>
                        A software quote is most useful when the project requirements and scope are sufficiently clear.
                    </p>
                    <p style={{ margin: '0 0 0.75rem', color: '#64748B', lineHeight: 1.75 }}>
                        If you are looking to <strong>get a software quote</strong>, provide as much information as possible about your project, including the application type, key features, users, integrations, existing systems, and expected scope.
                    </p>
                    <p style={{ margin: '0 0 1.4rem', color: '#64748B', lineHeight: 1.75 }}>
                        If your requirements are still being defined, you can start with a <strong>software consultation</strong> instead. This can help establish the project direction before detailed estimation.
                    </p>
                    <motion.a
                        href="#contact-details"
                        whileHover={{ y: -3, boxShadow: '0 12px 26px rgba(234, 179, 8, 0.24)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '12px 21px', borderRadius: '999px', background: '#FACC15', color: '#1F2937', fontWeight: 800, textDecoration: 'none' }}
                    >
                        Get a Software Quote <ArrowRight size={17} />
                    </motion.a>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 24, scale: 0.98 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden', minHeight: '300px', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 16px 36px rgba(31, 41, 55, 0.12)' }}
                    >
                        <img
                            src="/images%20(19).jpg"
                            alt="Planning a software project quote and requirements"
                            style={{ display: 'block', width: '100%', height: '100%', minHeight: '300px', maxHeight: '430px', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                aria-labelledby="why-discuss-project-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: '0 5% 6rem', background: '#FFFFFF' }}
            >
                <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 0 }}>
                    <motion.h2
                        id="why-discuss-project-heading"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ margin: '0 0 0.9rem', color: '#1F2937', fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', lineHeight: 1.2 }}
                    >
                        Why Discuss Your Project With Us?
                    </motion.h2>
                    <p style={{ margin: '0 0 0.7rem', color: '#334155', fontSize: '1.08rem', fontWeight: 650, lineHeight: 1.7 }}>
                        Choosing a software development partner is an important decision.
                    </p>
                    <p style={{ margin: '0 0 0.7rem', color: '#64748B', lineHeight: 1.75 }}>
                        At Fly Towards Digital Innovation, our approach is centered on understanding the business requirement before defining the software solution.
                    </p>
                    <p style={{ margin: '0 0 1.15rem', color: '#64748B', lineHeight: 1.75 }}>
                        We can work with businesses that need support across different stages of their software journey—from developing a new application to improving an existing system or exploring digital transformation opportunities.
                    </p>
                    <h3 style={{ margin: '0 0 0.85rem', color: '#334155', fontSize: '1.05rem' }}>Our focus includes:</h3>
                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '0.7rem', margin: 0, padding: 0, listStyle: 'none' }}
                    >
                        {[
                            'Understanding your business requirement',
                            'Designing solutions around specific needs',
                            'Supporting software development projects',
                            'Working across different application types',
                            'Supporting ongoing software improvements',
                            'Helping businesses explore technology-driven opportunities'
                        ].map((focus) => (
                            <motion.li
                                key={focus}
                                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '0.8rem 0.9rem', border: '1px solid #E2E8F0', borderRadius: '13px', background: '#FFFFFF', color: '#475569', lineHeight: 1.55 }}
                            >
                                <span aria-hidden="true" style={{ width: '8px', height: '8px', flex: '0 0 8px', marginTop: '0.45rem', borderRadius: '50%', background: '#EAB308' }} />
                                {focus}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </motion.section>

            <motion.section
                aria-labelledby="software-enquiry-cta-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: '0 5% 6rem', background: '#FFFFFF' }}
            >
                <div style={{ maxWidth: '1050px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: '25px', textAlign: 'center', background: 'linear-gradient(135deg, #1F2937 0%, #334155 100%)', boxShadow: '0 18px 44px rgba(31, 41, 55, 0.16)', position: 'relative', overflow: 'hidden' }}>
                    <motion.span
                        aria-hidden="true"
                        animate={{ scale: [1, 1.14, 1], opacity: [0.15, 0.27, 0.15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ position: 'absolute', width: '240px', height: '240px', top: '-140px', right: '-75px', borderRadius: '50%', background: '#EAB308', filter: 'blur(75px)', pointerEvents: 'none' }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <motion.h2
                            id="software-enquiry-cta-heading"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{ margin: '0 0 0.9rem', color: '#FFFFFF', fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', lineHeight: 1.2 }}
                        >
                            Have a Software Development Enquiry?
                        </motion.h2>
                        <p style={{ maxWidth: '850px', margin: '0 auto 0.7rem', color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.75 }}>
                            Whether you already have a detailed project specification or are still exploring an idea, you can start the conversation with our team.
                        </p>
                        <p style={{ maxWidth: '850px', margin: '0 auto 1.4rem', color: '#CBD5E1', lineHeight: 1.75 }}>
                            Share your requirement and tell us what you are trying to achieve. We can then discuss the potential next steps based on your project.
                        </p>
                        <motion.a
                            href="#contact-details"
                            whileHover={{ y: -3, boxShadow: '0 12px 26px rgba(234, 179, 8, 0.24)' }}
                            whileTap={{ scale: 0.98 }}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '12px 20px', borderRadius: '999px', background: '#FACC15', color: '#1F2937', fontWeight: 800, textDecoration: 'none' }}
                        >
                            Submit Your Software Development Enquiry <ArrowRight size={17} />
                        </motion.a>
                    </div>
                </div>
            </motion.section>

            <motion.section
                aria-labelledby="contact-software-faq-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: '0 5% 6rem', background: '#FFFFFF' }}
            >
                <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
                    <motion.h2
                        id="contact-software-faq-heading"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ margin: '0 0 1.8rem', color: '#1F2937', fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', lineHeight: 1.2, textAlign: 'center' }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{ visible: { transition: { staggerChildren: 0.075 } } }}
                        style={{ display: 'grid', gap: '0.75rem' }}
                    >
                        {[
                            {
                                question: 'How can I contact a software development company about my project?',
                                answer: 'You can submit your project requirements through the contact form. Include information about your business, project objectives, required features, and any existing systems that may be relevant.'
                            },
                            {
                                question: 'Can I request a software consultation before starting development?',
                                answer: <>Yes. If you are still defining your project or are unsure about the right approach, you can <strong>request a software consultation</strong> to discuss your requirements.</>
                            },
                            {
                                question: 'Can I get a software quote?',
                                answer: 'Yes. You can request a software quote by providing details about your project scope, functionality, application type, integrations, and other relevant requirements.'
                            },
                            {
                                question: 'What should I include in my software development enquiry?',
                                answer: 'Include as much relevant information as possible, such as your business objective, current challenge, target users, required features, existing systems, integrations, expected timeline, and project scope.'
                            },
                            {
                                question: 'What types of software projects can I discuss?',
                                answer: 'You can enquire about custom software, enterprise applications, SaaS products, web applications, mobile applications, software maintenance, and digital transformation projects.'
                            },
                            {
                                question: "What if I don't have a complete project specification?",
                                answer: "That's okay. You can start by describing the business problem or idea you want to solve. The initial discussion can help clarify the requirements and potential direction of the project."
                            },
                            {
                                question: 'Do you work with existing software applications?',
                                answer: 'If you need to improve, maintain, modernize, or extend an existing application, you can include those requirements in your enquiry.'
                            }
                        ].map((faq) => (
                            <motion.article
                                key={faq.question}
                                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                style={{ padding: '1.15rem 1.3rem', border: '1px solid #E2E8F0', borderRadius: '16px', background: '#F8FAFC' }}
                            >
                                <h3 style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', margin: '0 0 0.5rem', color: '#1F2937', fontSize: '1.04rem', lineHeight: 1.45 }}>
                                    <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '23px', height: '23px', flex: '0 0 23px', borderRadius: '50%', background: '#FEF3C7', color: '#854D0E', fontSize: '0.8rem', fontWeight: 850 }}>?</span>
                                    {faq.question}
                                </h3>
                                <p style={{ margin: '0 0 0 31px', color: '#64748B', lineHeight: 1.7 }}>{faq.answer}</p>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                aria-labelledby="right-software-solution-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: '0 5% 6rem', background: '#FFFFFF' }}
            >
                <div style={{ maxWidth: '1050px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: '25px', textAlign: 'center', background: 'linear-gradient(135deg, #1F2937 0%, #334155 100%)', boxShadow: '0 18px 44px rgba(31, 41, 55, 0.16)', position: 'relative', overflow: 'hidden' }}>
                    <motion.span
                        aria-hidden="true"
                        animate={{ scale: [1, 1.14, 1], opacity: [0.14, 0.26, 0.14] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ position: 'absolute', width: '240px', height: '240px', top: '-140px', right: '-75px', borderRadius: '50%', background: '#EAB308', filter: 'blur(75px)', pointerEvents: 'none' }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <motion.h2
                            id="right-software-solution-heading"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{ margin: '0 0 0.8rem', color: '#FFFFFF', fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', lineHeight: 1.2 }}
                        >
                            Let’s Build the Right Software Solution
                        </motion.h2>
                        <p style={{ margin: '0 auto 0.65rem', maxWidth: '850px', color: '#FDE68A', fontSize: '1.12rem', fontWeight: 750, lineHeight: 1.65 }}>
                            Your software project starts with understanding the problem.
                        </p>
                        <p style={{ margin: '0 auto 1.5rem', maxWidth: '900px', color: '#CBD5E1', lineHeight: 1.75 }}>
                            Whether you need a new application, want to modernize an existing system, or are exploring a digital transformation initiative, we're ready to discuss your requirements.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.85rem' }}>
                            {[
                                { label: 'Request a Software Consultation', primary: true },
                                { label: 'Get a Software Quote', primary: false },
                                { label: 'Contact Our Team', primary: false }
                            ].map((action) => (
                                <motion.a
                                    key={action.label}
                                    href="#contact-details"
                                    whileHover={{ y: -3, boxShadow: action.primary ? '0 12px 26px rgba(234, 179, 8, 0.24)' : '0 10px 24px rgba(0, 0, 0, 0.14)' }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 18px', borderRadius: '999px', border: action.primary ? '1px solid #FACC15' : '1px solid rgba(255,255,255,0.3)', background: action.primary ? '#FACC15' : 'rgba(255,255,255,0.06)', color: action.primary ? '#1F2937' : '#FFFFFF', fontWeight: 800, textDecoration: 'none' }}
                                >
                                    {action.label} <ArrowRight size={16} color={action.primary ? '#1F2937' : '#FACC15'} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default Contact;
