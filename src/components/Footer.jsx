import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#0a0a0a', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '1px solid var(--border)' }}>
            <div className="footer-grid max-w-1200" style={{ margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', padding: '0 2rem' }}>

                {/* Column 1: Brand & Address */}
                <div style={{ gridColumn: 'span 1' }}>
                    <Link to="/" className="footer-logo-link" style={{ marginBottom: '1.5rem', display: 'inline-flex', textDecoration: 'none' }}>
                        <span className="footer-logo-badge">
                            <img src="/logo.webp" alt="Fly Towards Logo" />
                        </span>
                    </Link>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                        Empowering your growth with our digital expertise. Bridging creativity with technology to boost your visibility and performance.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                        <MapPin size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                        <span>Address : vadaku Ratha veethi sankarankovil, Tenkasi, Tamil Nadu 627756</span>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontWeight: 800, color: 'white', fontSize: '1.2rem' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/about" className="footer-link">About Us</Link></li>
                        <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
                        <li><Link to="/blog" className="footer-link">Blog</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Products */}
                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontWeight: 800, color: 'white', fontSize: '1.2rem' }}>Products</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><Link to="/fly-bill" className="footer-link">Fly Bill</Link></li>
                        <li><Link to="/payroll" className="footer-link">FLYROLL</Link></li>
                        <li><Link to="/smart-crm" className="footer-link">Smart CRM</Link></li>
                        <li><Link to="/products" className="footer-link">View All Products</Link></li>
                    </ul>
                </div>

                {/* Column 4: Services */}
                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontWeight: 800, color: 'white', fontSize: '1.2rem' }}>Service</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><Link to="/web-development" className="footer-link">Web Development</Link></li>
                        <li><Link to="/whatsapp-api" className="footer-link">WhatsApp Marketing API</Link></li>
                        <li><Link to="/digital-marketing" className="footer-link">Digital Marketing</Link></li>
                        <li><Link to="/service" className="footer-link">All Services</Link></li>
                    </ul>

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                        <a href="https://www.facebook.com/profile.php?id=61574481060238" target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook size={18} /></a>
                        <a href="https://www.instagram.com/flytowardsdigitalinnovation/" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={18} /></a>
                        <a href="https://www.linkedin.com/in/sanjay-kumar-k-founder/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={18} /></a>
                        <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp"><MessageCircle size={18} /></a>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '4rem', padding: '2rem 2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Copyright &copy; 2025 flytowardsdigitalinnovation.com | Powered by flytowardsdigitalinnovation.com
            </div>

            {/* Embedded styles specifically for footer links to keep hover effects clean */}
            <style jsx>{`
                .footer-logo-link {
                    justify-content: flex-start;
                }
                .footer-logo-badge {
                    width: 110px;
                    height: 110px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.95);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 14px;
                    overflow: hidden;
                }
                .footer-logo-badge img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    display: block;
                }
                .footer-link {
                    color: var(--text-muted);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: inline-block;
                }
                .footer-link:hover {
                    color: var(--primary);
                    transform: translateX(5px);
                }
                .social-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    background: var(--primary);
                    transform: translateY(-3px);
                }

                @media (max-width: 968px) {
                    .footer-logo-link {
                        justify-content: center;
                        width: 100%;
                    }
                }

                @media (max-width: 480px) {
                    .footer-logo-badge {
                        width: 92px;
                        height: 92px;
                        padding: 12px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
