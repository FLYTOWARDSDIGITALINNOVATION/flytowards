import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        setActiveDropdown(null);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (name, e) => {
        if (window.innerWidth <= 968) {
            e.preventDefault();
            setActiveDropdown((prev) => (prev === name ? null : name));
        }
    };

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/' ? 'active' : '';
        }
        return location.pathname.startsWith(path) ? 'active' : '';
    };

    return (
        <nav className="site-header">
            {/* Logo */}
            <Link to="/" className="site-logo" onClick={closeMenu}>
                <img
                    src="/logo.webp"
                    alt="Fly Towards Logo"
                    className="site-logo-img"
                />
            </Link>

            {/* Mobile Menu Icon */}
            <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle Navigation">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            {/* Navigation Menu */}
            <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                {/* Home */}
                <li onClick={closeMenu}>
                    <Link to="/" className={isActive('/')}>
                        Home
                    </Link>
                </li>

                {/* About Us */}
                <li onClick={closeMenu}>
                    <Link to="/about" className={isActive('/about')}>
                        About Us
                    </Link>
                </li>

                {/* Products */}
                <li
                    className={`dropdown ${
                        activeDropdown === 'products' ? 'mobile-active' : ''
                    }`}
                >
                    <Link
                        to="/products"
                        className={isActive('/products')}
                        onClick={(e) => toggleDropdown('products', e)}
                    >
                        Products
                        <ChevronDown
                            size={13}
                            strokeWidth={2.5}
                            className={`dropdown-arrow ${
                                activeDropdown === 'products' ? 'rotate' : ''
                            }`}
                        />
                    </Link>

                    <ul
                        className={`dropdown-menu ${
                            activeDropdown === 'products' ? 'show' : ''
                        }`}
                    >
                        <li onClick={closeMenu}>
                            <Link to="/products/payroll-software">
                                Payroll Software
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/products/billing-software">
                                Billing Software
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/products/crm-software">
                                CRM Software
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/products/food-delivery-solution">
                                Food Delivery Solution
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/products/fix">
                                Fix Product
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/fly-bill">
                                Fly Bill
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/payroll">
                                FLYROLL
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/smart-crm">
                                Smart CRM
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/products">
                                View All Products
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* Service */}
                <li
                    className={`dropdown dropdown--mega ${
                        activeDropdown === 'services' ? 'mobile-active' : ''
                    }`}
                >
                    <Link
                        to="/services"
                        className={isActive('/services')}
                        onClick={(e) => toggleDropdown('services', e)}
                    >
                        Service
                        <ChevronDown
                            size={13}
                            strokeWidth={2.5}
                            className={`dropdown-arrow ${
                                activeDropdown === 'services' ? 'rotate' : ''
                            }`}
                        />
                    </Link>

                    <ul
                        className={`dropdown-menu ${
                            activeDropdown === 'services' ? 'show' : ''
                        }`}
                    >
                        <li onClick={closeMenu}>
                            <Link to="/services/custom-software-development">
                                Custom Software Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/enterprise-software-development">
                                Enterprise Software Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/web-application-development">
                                Web Application Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/mobile-app-development">
                                Mobile App Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/saas-development">
                                SaaS Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/crm-development">
                                CRM Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/erp-development">
                                ERP Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/api-development">
                                API Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/cloud-application-development">
                                Cloud App Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/ai-software-development">
                                AI Software Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/business-process-automation">
                                Business Process Automation
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/software-consulting">
                                Software Consulting
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/software-modernization">
                                Software Modernization
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/software-maintenance-support">
                                Maintenance & Support
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/ui-ux-design">
                                UI/UX Design
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/web-development">
                                Web Development
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/whatsapp-api">
                                WhatsApp Marketing API
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services/digital-marketing">
                                Digital Marketing
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/services">
                                All Services
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* Industries */}
                <li
                    className={`dropdown ${
                        activeDropdown === 'industries' ? 'mobile-active' : ''
                    }`}
                >
                    <Link
                        to="/industries"
                        className={isActive('/industries')}
                        onClick={(e) => toggleDropdown('industries', e)}
                    >
                        Industries
                    </Link>

                    <ul
                        className={`dropdown-menu ${
                            activeDropdown === 'industries' ? 'show' : ''
                        }`}
                    >
                        <li onClick={closeMenu}>
                            <Link to="/industries/manufacturing">
                                Manufacturing
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/industries/healthcare">
                                Healthcare
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/industries/education">
                                Education
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/industries/construction">
                                Construction
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/industries/retail">
                                Retail
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/industries/finance">
                                Finance
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/industries/travel">
                                Travel
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/industries/hospitality">
                                Hospitality
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/industries/insurance">
                                Insurance
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link to="/industries/government">
                                Government
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* Careers */}
                <li onClick={closeMenu}>
                    <Link
                        to="/careers"
                        className={isActive('/careers')}
                    >
                        Careers
                    </Link>
                </li>

                {/* Internship */}
                <li onClick={closeMenu}>
                    <Link
                        to="/internship"
                        className={isActive('/internship')}
                    >
                        Internship
                    </Link>
                </li>

                {/* Blog */}
                <li onClick={closeMenu}>
                    <Link
                        to="/blog"
                        className={isActive('/blog')}
                    >
                        Blog
                    </Link>
                </li>

                {/* Contact */}
                <li onClick={closeMenu}>
                    <Link
                        to="/contact"
                        className={isActive('/contact')}
                    >
                        Contact
                    </Link>
                </li>

                {/* Mobile Enquire Button */}
                <li
                    className="nav-btn-mobile"
                    onClick={closeMenu}
                >

                </li>
            </ul>

            {/* Desktop Enquire Button */}
<Link to="/contact" className="nav-enquire-btn desktop-enquire">
    Enquire Now
</Link>
        </nav>
    );
};

export default Navbar;