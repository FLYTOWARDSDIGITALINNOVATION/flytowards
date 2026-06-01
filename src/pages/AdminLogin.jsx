import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, ShieldAlert } from 'lucide-react';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        
        if (email === 'flytowardsdigitalinnovation@gmail.com' && password === 'admin123') {
            navigate('/admin/create-blog');
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            /* Using the high-resolution AI generated premium image */
            background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6)), url("/admin-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            position: 'relative'
        }}>
            
            {/* Login Card - Glassmorphism */}
            <div style={{
                background: 'rgba(20, 20, 25, 0.55)', /* More transparent to let the background shine through */
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '30px',
                padding: '3.5rem',
                width: '100%',
                maxWidth: '460px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                zIndex: 1,
                transform: 'translateY(0)',
                animation: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
                
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, rgba(30, 80, 255, 0.2) 0%, rgba(255, 30, 150, 0.2) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15)'
                    }}>
                        <ShieldAlert size={32} color="#fff" strokeWidth={1.5} />
                    </div>
                    <h2 style={{
                        fontSize: '2.2rem',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '0.5rem',
                        letterSpacing: '-0.5px',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        Admin Center
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
                        Restricted access. Please authenticate.
                    </p>
                </div>

                {/* Error Box */}
                {error && (
                    <div className="error-box" style={{
                        background: 'rgba(255, 50, 50, 0.15)',
                        border: '1px solid rgba(255, 50, 50, 0.4)',
                        color: '#ff8a8a',
                        padding: '12px 20px',
                        borderRadius: '12px',
                        marginBottom: '2rem',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        animation: 'shake 0.4s ease-in-out',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <ShieldAlert size={18} />
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    
                    <div className="input-group" style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'rgba(255,255,255,0.6)',
                            transition: 'color 0.3s ease'
                        }} className="icon">
                            <Mail size={20} />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            name="email"
                            className="luxury-input"
                            style={{
                                width: '100%',
                                padding: '18px 20px 18px 56px',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.15)',
                                background: 'rgba(255,255,255,0.05)',
                                fontSize: '1rem',
                                color: 'white',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    </div>

                    <div className="input-group" style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'rgba(255,255,255,0.6)',
                            transition: 'color 0.3s ease'
                        }} className="icon">
                            <Lock size={20} />
                        </div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            name="password"
                            className="luxury-input"
                            style={{
                                width: '100%',
                                padding: '18px 20px 18px 56px',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.15)',
                                background: 'rgba(255,255,255,0.05)',
                                fontSize: '1rem',
                                color: 'white',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="luxury-btn"
                        style={{
                            width: '100%',
                            padding: '18px',
                            borderRadius: '16px',
                            border: 'none',
                            background: 'linear-gradient(135deg, #1e50ff 0%, #ff1e96 100%)',
                            color: 'white',
                            fontSize: '1.05rem',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            marginTop: '1rem',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 25px rgba(30, 80, 255, 0.4)'
                        }}
                    >
                        <span>Authenticate</span>
                        <LogIn size={20} />
                    </button>
                </form>
            </div>

            <style jsx>{`
                .luxury-input:focus {
                    border-color: rgba(30, 80, 255, 0.9) !important;
                    background: rgba(255, 255, 255, 0.12) !important;
                    box-shadow: 0 0 0 4px rgba(30, 80, 255, 0.2) !important;
                }
                .input-group:focus-within .icon {
                    color: #ff1e96 !important;
                }
                .luxury-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 15px 35px rgba(255, 30, 150, 0.6) !important;
                    filter: brightness(1.2);
                }
                
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                
                /* Webkit Autofill override for dark inputs */
                input:-webkit-autofill,
                input:-webkit-autofill:hover, 
                input:-webkit-autofill:focus, 
                input:-webkit-autofill:active{
                    -webkit-box-shadow: 0 0 0 30px rgba(30, 30, 35, 0.9) inset !important;
                    -webkit-text-fill-color: white !important;
                    transition: background-color 5000s ease-in-out 0s;
                }
                ::placeholder {
                    color: rgba(255,255,255,0.5) !important;
                }
            `}</style>
        </div>
    );
};

export default AdminLogin;
