import { Link } from 'react-router-dom';
import {
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    MessageCircle
} from 'lucide-react';

const Footer = () => {
    return (
        <footer
            style={{
                background: '#0a0a0a',
                paddingTop: '4rem',
                paddingBottom: '2rem',
                borderTop: '1px solid var(--border)'
            }}
        >
            <div
                className="footer-grid max-w-1200"
                style={{
                    margin: '0 auto',
                    padding: '0 2rem'
                }}
            >

                {/* Column 1: Brand & Address */}
                <div style={{ gridColumn: 'span 1' }}>
                    <Link
                        to="/"
                        className="logo"
                        style={{
                            marginBottom: '1.5rem',
                            display: 'block',
                            textDecoration: 'none'
                        }}
                    >
                        <img
                            src="/logo.webp"
                            alt="Fly Towards Logo"
                            style={{
                                height: '100px',
                                width: '100px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                        />
                    </Link>

                    <p
                        style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.95rem',
                            lineHeight: 1.8,
                            marginBottom: '2rem'
                        }}
                    >
                        Empowering your growth with our digital expertise.
                        Bridging creativity with technology to boost your
                        visibility and performance.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '0.95rem',
                            color: 'var(--text-muted)'
                        }}
                    >
                        <MapPin
                            size={20}
                            color="var(--primary)"
                            style={{
                                flexShrink: 0,
                                marginTop: '4px'
                            }}
                        />

                        <span>
                            Address: Vadaku Ratha Veethi,
                            Sankarankovil, Tenkasi,
                            Tamil Nadu 627756
                        </span>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4
                        style={{
                            marginBottom: '1.5rem',
                            fontWeight: 800,
                            color: 'white',
                            fontSize: '1.2rem'
                        }}
                    >
                        Quick Links
                    </h4>

                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.8rem'
                        }}
                    >
                        <li>
                            <Link to="/" className="footer-link">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/about" className="footer-link">
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link to="/industries" className="footer-link">
                                Industries
                            </Link>
                        </li>

                        <li>
                            <Link to="/careers" className="footer-link">
                                Careers
                            </Link>
                        </li>

                        <li>
                            <Link to="/internship" className="footer-link">
                                Internship
                            </Link>
                        </li>

                        <li>
                            <Link to="/gallery" className="footer-link">
                                Gallery
                            </Link>
                        </li>

                        <li>
                            <Link to="/blog" className="footer-link">
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact" className="footer-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Products */}
                <div>
                    <h4
                        style={{
                            marginBottom: '1.5rem',
                            fontWeight: 800,
                            color: 'white',
                            fontSize: '1.2rem'
                        }}
                    >
                        Products
                    </h4>

                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.8rem'
                        }}
                    >
                        <li>
                            <Link
                                to="/products/billing-software"
                                className="footer-link"
                            >
                                Billing Software
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/products/payroll-software"
                                className="footer-link"
                            >
                                Payroll Software
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/products/crm-software"
                                className="footer-link"
                            >
                                CRM Software
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/fly-bill"
                                className="footer-link"
                            >
                                Fly Bill
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/payroll"
                                className="footer-link"
                            >
                                FlyPayroll
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/smart-crm"
                                className="footer-link"
                            >
                                Smart CRM
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/products"
                                className="footer-link"
                            >
                                View All Products
                            </Link>
                        </li>
                    </ul>

                    {/* Social Media */}
                    <div
                        style={{
                            marginTop: '2rem',
                            display: 'flex',
                            gap: '1rem'
                        }}
                    >
                        <a
                            href="https://www.facebook.com/profile.php?id=61574481060238"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="Facebook"
                        >
                            <Facebook size={18} />
                        </a>

                        <a
                            href="https://www.instagram.com/flytowardsdigitalinnovation/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="Instagram"
                        >
                            <Instagram size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/sanjay-kumar-k-founder/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>

                        <a
                            href="https://wa.me/919080999823"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            title="WhatsApp"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle size={18} />
                        </a>
                    </div>
                </div>

                {/* Column 4: Services */}
                <div>
                    <h4
                        style={{
                            marginBottom: '1.5rem',
                            fontWeight: 800,
                            color: 'white',
                            fontSize: '1.2rem'
                        }}
                    >
                        Services
                    </h4>

                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.8rem'
                        }}
                    >
                        <li>
                            <Link
                                to="/services/web-development"
                                className="footer-link"
                            >
                                Web Development
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/services/whatsapp-api"
                                className="footer-link"
                            >
                                WhatsApp Marketing API
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/services/digital-marketing"
                                className="footer-link"
                            >
                                Digital Marketing
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/services"
                                className="footer-link"
                            >
                                All Services
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div
                style={{
                    marginTop: '4rem',
                    padding: '2rem 2rem 0',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}
            >
                Copyright &copy; 2025 flytowardsdigitalinnovation.com |
                Powered by flytowardsdigitalinnovation.com
            </div>

            {/* Footer Styles */}
            <style>{`
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
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .social-icon:hover {
                    background: var(--primary);
                    transform: translateY(-3px);
                }
            `}</style>
        </footer>
    );
};

export default Footer;