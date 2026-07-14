import { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const [error, setError] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setError(false);
        setIsLoading(true);

        const ADMIN_EMAIL = "info@flytowardsdigitalinnovation.com";
        const ADMIN_PASS = "admin123";

        // Simulating authentication
        setTimeout(() => {
            if (formData.email === ADMIN_EMAIL && formData.password === ADMIN_PASS) {
                setIsLoading(false);
                navigate('/admin/create-blog');
            } else {
                setIsLoading(false);
                setError(true);
                alert("❌ Access Denied: Invalid Administrative Credentials.");
            }
        }, 1200);
    };

    return (
        <main style={{
            minHeight: '100vh',
            background: 'url(admin-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Outfit', sans-serif",
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem'
        }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(2, 6, 23, 0.9) 0%, rgba(2, 6, 23, 0.75) 100%)',
                zIndex: 1
            }}></div>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap');

                .login-card {
                    background: rgba(15, 23, 42, 0.6);
                    backdrop-filter: blur(25px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 40px;
                    width: 100%;
                    max-width: 500px;
                    padding: 4rem 3rem;
                    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
                    position: relative;
                    z-index: 2;
                    text-align: center;
                }

                .input-group {
                    position: relative;
                    margin-bottom: 2rem;
                    text-align: left;
                }

                .login-input {
                    breadth: 100%;
                    width: 100%;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 1.2rem 1.2rem 1.2rem 3.5rem;
                    border-radius: 18px;
                    color: white;
                    font-size: 1rem;
                    transition: all 0.3s;
                }

                .login-input:focus {
                    outline: none;
                    background: rgba(255, 255, 255, 0.08);
                    border-color: #6366f1;
                    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
                }

                .login-btn {
                    width: 100%;
                    padding: 1.3rem;
                    background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);
                    border: none;
                    border-radius: 18px;
                    color: white;
                    font-weight: 800;
                    font-size: 1.1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
                    margin-top: 2rem;
                }

                .login-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.6);
                }

                .login-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
                }

                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }

                .glow-orb {
                    position: absolute;
                    width: 600px;
                    height: 600px;
                    border-radius: 50%;
                    filter: blur(120px);
                    z-index: 1;
                    animation: pulse-glow 10s infinite;
                }
            `}</style>

            {/* Background Aesthetics */}
            <div className="glow-orb" style={{ top: '-10%', right: '-10%', background: 'rgba(99, 102, 241, 0.2)' }}></div>
            <div className="glow-orb" style={{ bottom: '-10%', left: '-10%', background: 'rgba(217, 70, 239, 0.15)' }}></div>

            <div className="login-card" data-aos="zoom-in">
                <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(217, 70, 239, 0.1))',
                    borderRadius: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <ShieldCheck size={35} color="#6366f1" />
                </div>

                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '0.8rem', letterSpacing: '-0.03em' }}>
                    Admin Center
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '3.5rem' }}>
                    Restricted access. Please authenticate.
                </p>

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <Mail size={20} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                        <input
                            required
                            type="email"
                            className="login-input"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="input-group">
                        <Lock size={20} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            className="login-input"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <div
                            style={{ position: 'absolute', right: '1.2rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#64748b' }}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </div>
                    </div>

                    <button type="submit" className="login-btn" disabled={isLoading}>
                        {isLoading ? "Authenticating..." : "Authenticate"}
                        {!isLoading && <ArrowRight size={20} />}
                    </button>
                </form>

                <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '3rem' }}>
                    © 2026 Fly Towards Digital Innovation. All rights reserved.
                </p>
            </div>
        </main>
    );
};

export default AdminLogin;
