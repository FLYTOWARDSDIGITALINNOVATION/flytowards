import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) setActiveDropdown(null);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (name, e) => {
        if (window.innerWidth <= 968) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === name ? null : name);
        }
    };

    return (
        <nav>
            <Link to="/" className="logo">
                <img src="/logo.webp" alt="Fly Towards Logo" style={{ height: '80px', width: 'auto' }} />
            </Link>

            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <li onClick={closeMenu}><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li onClick={closeMenu}><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>

                <li className={`dropdown ${activeDropdown === 'products' ? 'mobile-active' : ''}`}>
                    <Link to="/products" className={location.pathname === '/products' ? 'active' : ''} onClick={(e) => toggleDropdown('products', e)}>
                        Products <ChevronDown size={12} strokeWidth={3} className={activeDropdown === 'products' ? 'rotate' : ''} />
                    </Link>
                    <ul className={`dropdown-menu ${activeDropdown === 'products' ? 'show' : ''}`}>
                        <li onClick={closeMenu}><Link to="/products/payroll-software">Payroll Software</Link></li>
                        <li onClick={closeMenu}><Link to="/products/billing-software">Billing Software</Link></li>
                        <li onClick={closeMenu}><Link to="/products/crm-software">CRM Software</Link></li>
                        <li onClick={closeMenu}><Link to="/products/food-delivery-solution">Food Delivery Solution</Link></li>
                        <li onClick={closeMenu}><Link to="/products/fix">Fix Product</Link></li>
                    </ul>
                </li>

                <li className={`dropdown dropdown--mega ${activeDropdown === 'services' ? 'mobile-active' : ''}`}>
                    <Link to="/services" onClick={(e) => toggleDropdown('services', e)}>
                        Service <ChevronDown size={12} strokeWidth={3} className={activeDropdown === 'services' ? 'rotate' : ''} />
                    </Link>
                    <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
                        <li onClick={closeMenu}><Link to="/services/custom-software-development">Custom Software Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/enterprise-software-development">Enterprise Software Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/web-application-development">Web Application Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/saas-development">SaaS Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/crm-development">CRM Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/erp-development">ERP Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/api-development">API Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/cloud-application-development">Cloud App Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/ai-software-development">AI Software Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/business-process-automation">Business Process Automation</Link></li>
                        <li onClick={closeMenu}><Link to="/services/software-consulting">Software Consulting</Link></li>
                        <li onClick={closeMenu}><Link to="/services/software-modernization">Software Modernization</Link></li>
                        <li onClick={closeMenu}><Link to="/services/software-maintenance-support">Maintenance & Support</Link></li>
                        <li onClick={closeMenu}><Link to="/services/ui-ux-design">UI/UX Design</Link></li>
                        <li onClick={closeMenu}><Link to="/services/web-development">Web Development</Link></li>
                        <li onClick={closeMenu}><Link to="/services/whatsapp-api">WhatsApp Marketing API</Link></li>
                        <li onClick={closeMenu}><Link to="/services/digital-marketing">Digital Marketing</Link></li>
                        <li onClick={closeMenu}><Link to="/services">All Services</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${activeDropdown === 'industries' ? 'mobile-active' : ''}`}>
                    <Link to="/industries" className={location.pathname === '/industries' ? 'active' : ''} onClick={(e) => toggleDropdown('industries', e)}>
                        Industries <ChevronDown size={12} strokeWidth={3} className={activeDropdown === 'industries' ? 'rotate' : ''} />
                    </Link>
                    <ul className={`dropdown-menu ${activeDropdown === 'industries' ? 'show' : ''}`}>
                        <li onClick={closeMenu}><Link to="/industries/manufacturing">Manufacturing</Link></li>
                        <li onClick={closeMenu}><Link to="/industries/healthcare">Healthcare</Link></li>
                        <li onClick={closeMenu}><Link to="/industries/education">Education</Link></li>
                        <li onClick={closeMenu}><Link to="/industries/construction">Construction</Link></li>
                        <li onClick={closeMenu}><Link to="/industries/retail">Retail</Link></li>
                        <li onClick={closeMenu}><Link to="/industries/finance">Finance</Link></li>
                        <li onClick={closeMenu}><Link to="/industries/travel">Travel</Link></li>
                        <li onClick={closeMenu}><Link to="/industries/hospitality">Hospitality</Link></li>
                        <li onClick={closeMenu}><Link to="/industries/insurance">Insurance</Link></li>
                        <li onClick={closeMenu}><Link to="/industries/government">Government</Link></li>
                    </ul>
                </li>
                <li onClick={closeMenu}><Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link></li>
                <li onClick={closeMenu}><Link to="/internship" className={location.pathname === '/internship' ? 'active' : ''}>Internship</Link></li>
                <li onClick={closeMenu}><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
                <li onClick={closeMenu}><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>

            <Link to="/contact" className="btn btn-primary nav-btn-desktop" style={{ padding: '0.6rem 2rem', fontSize: '0.85rem' }}>
                Enquire Now
            </Link>
        </nav>
    );
};

export default Navbar;
