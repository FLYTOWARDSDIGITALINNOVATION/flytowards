import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

<<<<<<< HEAD
=======
    const isProductsActive = ['/products', '/fly-bill', '/payroll', '/smart-crm'].includes(location.pathname);
    const isServicesActive = ['/service', '/web-development', '/whatsapp-api', '/digital-marketing', '/seo'].includes(location.pathname);

>>>>>>> origin/main
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
<<<<<<< HEAD
                    <Link to="/products" className={location.pathname === '/products' ? 'active' : ''} onClick={(e) => toggleDropdown('products', e)}>
=======
                    <Link to="/products" className={isProductsActive ? 'active' : ''} onClick={(e) => toggleDropdown('products', e)}>
>>>>>>> origin/main
                        Products <ChevronDown size={12} strokeWidth={3} className={activeDropdown === 'products' ? 'rotate' : ''} />
                    </Link>
                    <ul className={`dropdown-menu ${activeDropdown === 'products' ? 'show' : ''}`}>
                        <li onClick={closeMenu}><Link to="/fly-bill">Fly Bill</Link></li>
<<<<<<< HEAD
                        <li onClick={closeMenu}><Link to="/payroll">FLYROLL</Link></li>
=======
                        <li onClick={closeMenu}><Link to="/payroll">FlyPayroll</Link></li>
>>>>>>> origin/main
                        <li onClick={closeMenu}><Link to="/smart-crm">Smart CRM</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${activeDropdown === 'services' ? 'mobile-active' : ''}`}>
<<<<<<< HEAD
                    <Link to="/service" onClick={(e) => toggleDropdown('services', e)}>
=======
                    <Link to="/service" className={isServicesActive ? 'active' : ''} onClick={(e) => toggleDropdown('services', e)}>
>>>>>>> origin/main
                        Service <ChevronDown size={12} strokeWidth={3} className={activeDropdown === 'services' ? 'rotate' : ''} />
                    </Link>
                    <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
                        <li onClick={closeMenu}><Link to="/web-development">Web Development</Link></li>
                        <li onClick={closeMenu}><Link to="/whatsapp-api">WhatsApp Marketing API</Link></li>
                        <li onClick={closeMenu}><Link to="/digital-marketing">Digital Marketing</Link></li>
<<<<<<< HEAD
=======
                        <li onClick={closeMenu}><Link to="/seo">SEO Optimization</Link></li>
>>>>>>> origin/main
                        <li onClick={closeMenu}><Link to="/service">All Services</Link></li>
                    </ul>
                </li>

<<<<<<< HEAD
                <li onClick={closeMenu}><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
                <li onClick={closeMenu}><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
                <li onClick={closeMenu}><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
=======
                <li onClick={closeMenu}><Link to="/industries" className={location.pathname === '/industries' ? 'active' : ''}>Industries</Link></li>
                <li onClick={closeMenu}><Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link></li>
                <li onClick={closeMenu}><Link to="/internship" className={location.pathname === '/internship' ? 'active' : ''}>Internship</Link></li>
                <li onClick={closeMenu}><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
                <li onClick={closeMenu}><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

                <li className="nav-btn-mobile" onClick={closeMenu}>
                    <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
                </li>
>>>>>>> origin/main
            </ul>

            <Link to="/contact" className="btn btn-primary nav-btn-desktop" style={{ padding: '0.6rem 2rem', fontSize: '0.85rem' }}>
                Enquire Now
            </Link>
        </nav>
    );
};

export default Navbar;
