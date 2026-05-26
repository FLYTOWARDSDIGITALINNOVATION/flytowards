import { useState, useEffect } from 'react';
import { Send, User, MapPin, GraduationCap, Briefcase, Mail, Phone, Github, BookOpen, Upload } from 'lucide-react';

const Apply = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Using formsubmit.co to route submissions directly to the provided email
    // The user will need to confirm their email on the very first submission.
    return (
        <main style={{ minHeight: '100vh', padding: '6rem 2rem 4rem', background: '#f8fafc' }}>
            <div data-aos="fade-up" style={{
                maxWidth: '800px',
                margin: '0 auto',
                background: 'white',
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
            }}>
                {/* Header */}
                <div style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem'
                    }}>
                        <Briefcase size={32} color="white" />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem', color: 'white' }}>
                        Job Application
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                        Join the Fly Towards Digital Innovation Team
                    </p>
                </div>

                {/* Form */}
                <form
                    action="https://formsubmit.co/flytowardsdigitalinnovation@gmail.com"
                    method="POST"
                    encType="multipart/form-data"
                    className="application-form"
                    style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Job Application - Fly Towards" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={window.location.origin + "/contact"} />

                    {/* Position Field (Full width) */}
                    <div className="form-group" style={{ gridColumn: 'span 2' }}>
                        <label style={labelStyle}>Applied Position *</label>
                        <div className="input-with-icon" style={inputWrapperStyle}>
                            <Briefcase size={18} style={iconStyle} />
                            <select name="Position" required style={inputStyle}>
                                <option value="" disabled selected>Select the position you are applying for</option>
                                <option value="Senior React Developer">Senior React Developer</option>
                                <option value="Digital Marketing Strategist">Digital Marketing Strategist</option>
                                <option value="Full Stack Web Developer">Full Stack Web Developer</option>
                                <option value="UI/UX Product Designer">UI/UX Product Designer</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {/* Name */}
                        <div className="form-group">
                            <label style={labelStyle}>Full Name *</label>
                            <div className="input-with-icon" style={inputWrapperStyle}>
                                <User size={18} style={iconStyle} />
                                <input type="text" name="Name" required placeholder="John Doe" style={inputStyle} />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label style={labelStyle}>Email Address *</label>
                            <div className="input-with-icon" style={inputWrapperStyle}>
                                <Mail size={18} style={iconStyle} />
                                <input type="email" name="Email" required placeholder="john@example.com" style={inputStyle} />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                            <label style={labelStyle}>Phone Number *</label>
                            <div className="input-with-icon" style={inputWrapperStyle}>
                                <Phone size={18} style={iconStyle} />
                                <input type="tel" name="Phone" required placeholder="+91 9876543210" style={inputStyle} />
                            </div>
                        </div>

                        {/* Github */}
                        <div className="form-group">
                            <label style={labelStyle}>GitHub Username / URL</label>
                            <div className="input-with-icon" style={inputWrapperStyle}>
                                <Github size={18} style={iconStyle} />
                                <input type="text" name="Github" placeholder="github.com/johndoe" style={inputStyle} />
                            </div>
                        </div>

                        {/* College */}
                        <div className="form-group">
                            <label style={labelStyle}>College Name *</label>
                            <div className="input-with-icon" style={inputWrapperStyle}>
                                <GraduationCap size={18} style={iconStyle} />
                                <input type="text" name="College" required placeholder="University Name" style={inputStyle} />
                            </div>
                        </div>

                        {/* Degree */}
                        <div className="form-group">
                            <label style={labelStyle}>Degree & Specialization *</label>
                            <div className="input-with-icon" style={inputWrapperStyle}>
                                <BookOpen size={18} style={iconStyle} />
                                <input type="text" name="Degree" required placeholder="B.Tech Computer Science" style={inputStyle} />
                            </div>
                        </div>
                    </div>

                    {/* Address (Full width) */}
                    <div className="form-group">
                        <label style={labelStyle}>Residential Address *</label>
                        <div className="input-with-icon" style={inputWrapperStyle}>
                            <MapPin size={18} style={{ ...iconStyle, top: '24px' }} />
                            <textarea name="Address" required placeholder="Enter your full address" rows="3" style={{ ...inputStyle, resize: 'vertical', paddingTop: '16px' }}></textarea>
                        </div>
                    </div>

                    {/* Resume Upload (Full width) */}
                    <div className="form-group">
                        <label style={labelStyle}>Upload Resume (PDF / DOC) *</label>
                        <div className="input-with-icon" style={inputWrapperStyle}>
                            <Upload size={18} style={iconStyle} />
                            <input 
                                type="file" 
                                name="attachment" 
                                accept=".pdf,.doc,.docx" 
                                required 
                                style={{
                                    ...inputStyle, 
                                    paddingTop: '12px',
                                    paddingBottom: '12px',
                                    cursor: 'pointer'
                                }} 
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={() => setIsSubmitting(true)}
                        style={{
                            marginTop: '1rem',
                            padding: '16px',
                            fontSize: '1.1rem',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}
                    >
                        {isSubmitting ? 'Sending Application...' : 'Submit Application'} <Send size={20} />
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        Your application details will be securely sent to flytowardsdigitalinnovation@gmail.com
                    </p>
                </form>
            </div>

            {/* Injected base styles for form fields to avoid polluting global css */}
            <style jsx>{`
                .input-with-icon:focus-within svg {
                    color: var(--primary) !important;
                }
                .input-with-icon input:focus, .input-with-icon select:focus, .input-with-icon textarea:focus {
                    border-color: var(--primary) !important;
                    box-shadow: 0 0 0 4px rgba(30, 80, 255, 0.1) !important;
                }
            `}</style>
        </main>
    );
};

// Inline styles 
const labelStyle = {
    display: 'block',
    fontSize: '0.95rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#334155'
};

const inputWrapperStyle = {
    position: 'relative'
};

const iconStyle = {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
    transition: 'color 0.3s ease'
};

const inputStyle = {
    width: '100%',
    padding: '16px 16px 16px 48px',
    borderRadius: '12px',
    border: '1px solid #cbd5e1',
    background: '#f8fafc',
    fontSize: '1rem',
    color: '#0f172a',
    outline: 'none',
    transition: 'all 0.3s ease'
};

export default Apply;
