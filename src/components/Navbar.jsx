import { useState, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Search, ArrowRight, CornerDownLeft, TrendingUp, Video, Camera, Package, ShoppingBag, Layers, Factory, HeartPulse, Building2 } from 'lucide-react';

const SEARCH_ITEMS = [
    { title: 'Home', path: '/', category: 'Page' },
    { title: 'About Us', path: '/about', category: 'Page' },
    { title: 'Products', path: '/products', category: 'Page' },
    { title: 'Payroll Software', path: '/products/payroll-software', category: 'Product' },
    { title: 'Billing Software', path: '/products/billing-software', category: 'Product' },
    { title: 'CRM Software', path: '/products/crm-software', category: 'Product' },
    { title: 'Food Delivery Solution', path: '/products/food-delivery-solution', category: 'Product' },
    { title: 'Fly Bill', path: '/fly-bill', category: 'Product' },
    { title: 'FLYROLL', path: '/payroll', category: 'Product' },
    { title: 'Smart CRM', path: '/smart-crm', category: 'Product' },
    { title: 'Custom Software Development', path: '/services/custom-software-development', category: 'Service' },
    { title: 'Enterprise Software Development', path: '/services/enterprise-software-development', category: 'Service' },
    { title: 'Web Application Development', path: '/services/web-application-development', category: 'Service' },
    { title: 'Mobile App Development', path: '/services/mobile-app-development', category: 'Service' },
    { title: 'SaaS Development', path: '/services/saas-development', category: 'Service' },
    { title: 'CRM Development', path: '/services/crm-development', category: 'Service' },
    { title: 'ERP Development', path: '/services/erp-development', category: 'Service' },
    { title: 'API Development', path: '/services/api-development', category: 'Service' },
    { title: 'Cloud App Development', path: '/services/cloud-application-development', category: 'Service' },
    { title: 'AI Software Development', path: '/services/ai-software-development', category: 'Service' },
    { title: 'Business Process Automation', path: '/services/business-process-automation', category: 'Service' },
    { title: 'Software Consulting', path: '/services/software-consulting', category: 'Service' },
    { title: 'UI/UX Design', path: '/services/ui-ux-design', category: 'Service' },
    { title: 'Web Development', path: '/services/web-development', category: 'Service' },
    { title: 'WhatsApp Marketing API', path: '/services/whatsapp-api', category: 'Service' },
    { title: 'Digital Marketing', path: '/services/digital-marketing', category: 'Service' },
    { title: 'Industries Overview', path: '/industries', category: 'Industry' },
    { title: 'Manufacturing Industry', path: '/industries/manufacturing', category: 'Industry' },
    { title: 'Healthcare Industry', path: '/industries/healthcare', category: 'Industry' },
    { title: 'Careers & Openings', path: '/careers', category: 'Page' },
    { title: 'Internship Programs', path: '/internship', category: 'Page' },
    { title: 'Blog & Articles', path: '/blog', category: 'Page' },
    { title: 'Contact Us', path: '/contact', category: 'Page' },
];

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

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

    const filteredResults = useMemo(() => {
        if (!searchQuery.trim()) return SEARCH_ITEMS.slice(0, 10);
        const query = searchQuery.toLowerCase();
        return SEARCH_ITEMS.filter(
            (item) =>
                item.title.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const handleSelectResult = (path) => {
        setIsSearchOpen(false);
        setSearchQuery('');
        closeMenu();
        navigate(path);
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
                    className={`dropdown dropdown--mega ${
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

                    <div
                        className={`dropdown-menu mega-menu-container ${
                            activeDropdown === 'products' ? 'show' : ''
                        }`}
                    >
                        <div className="mega-menu-grid">
                            {/* Column 1: Business Management Software */}
                            <div className="mega-menu-col">
                                <div className="mega-menu-header">
                                    <Package size={18} />
                                    <span>Business Software</span>
                                </div>
                                <ul className="mega-menu-list">
                                    <li onClick={closeMenu}><Link to="/products/payroll-software">Payroll Software</Link></li>
                                    <li onClick={closeMenu}><Link to="/products/billing-software">Billing Software</Link></li>
                                    <li onClick={closeMenu}><Link to="/products/crm-software">CRM Software</Link></li>
                                </ul>
                            </div>

                            {/* Column 2: Industry & Specialised Solutions */}
                            <div className="mega-menu-col">
                                <div className="mega-menu-header">
                                    <ShoppingBag size={18} />
                                    <span>Specialised Solutions</span>
                                </div>
                                <ul className="mega-menu-list">
                                    <li onClick={closeMenu}><Link to="/products/food-delivery-solution">Food Delivery Solution</Link></li>
                                    <li onClick={closeMenu}><Link to="/products/fix">Fix Product</Link></li>
                                    <li onClick={closeMenu}><Link to="/fly-bill">Fly Bill</Link></li>
                                </ul>
                            </div>

                            {/* Column 3: Featured Enterprise Platforms */}
                            <div className="mega-menu-col">
                                <div className="mega-menu-header">
                                    <Layers size={18} />
                                    <span>Featured Platforms</span>
                                </div>
                                <ul className="mega-menu-list">
                                    <li onClick={closeMenu}><Link to="/payroll">FLYROLL</Link></li>
                                    <li onClick={closeMenu}><Link to="/smart-crm">Smart CRM</Link></li>
                                    <li onClick={closeMenu}><Link to="/products" className="all-services-link">View All Products →</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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

                    <div
                        className={`dropdown-menu mega-menu-container ${
                            activeDropdown === 'services' ? 'show' : ''
                        }`}
                    >
                        <div className="mega-menu-grid">
                            {/* Column 1: Software & Digital Solutions */}
                            <div className="mega-menu-col">
                                <div className="mega-menu-header">
                                    <TrendingUp size={18} />
                                    <span>Software & Digital Solutions</span>
                                </div>
                                <ul className="mega-menu-list">
                                    <li onClick={closeMenu}><Link to="/services/custom-software-development">Custom Software Development</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/web-application-development">Web Application Development</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/saas-development">SaaS Development</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/cloud-application-development">Cloud App Development</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/ai-software-development">AI Software Development</Link></li>
                                </ul>
                            </div>

                            {/* Column 2: Enterprise & Systems */}
                            <div className="mega-menu-col">
                                <div className="mega-menu-header">
                                    <Video size={18} />
                                    <span>Enterprise & Integrations</span>
                                </div>
                                <ul className="mega-menu-list">
                                    <li onClick={closeMenu}><Link to="/services/enterprise-software-development">Enterprise Software Development</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/crm-development">CRM Development</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/erp-development">ERP Development</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/api-development">API Development</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/business-process-automation">Business Process Automation</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/software-modernization">Software Modernization</Link></li>
                                </ul>
                            </div>

                            {/* Column 3: Marketing & Design */}
                            <div className="mega-menu-col">
                                <div className="mega-menu-header">
                                    <Camera size={18} />
                                    <span>Marketing & Design</span>
                                </div>
                                <ul className="mega-menu-list">
                                    <li onClick={closeMenu}><Link to="/services/digital-marketing">Digital Marketing</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/ui-ux-design">UI/UX Design</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/web-development">Web Development</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/whatsapp-api">WhatsApp Marketing API</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/software-consulting">Software Consulting</Link></li>
                                    <li onClick={closeMenu}><Link to="/services/software-maintenance-support">Maintenance & Support</Link></li>
                                    <li onClick={closeMenu}><Link to="/services" className="all-services-link">All Services →</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                {/* Industries */}
                <li
                    className={`dropdown dropdown--mega ${
                        activeDropdown === 'industries' ? 'mobile-active' : ''
                    }`}
                >
                    <Link
                        to="/industries"
                        className={isActive('/industries')}
                        onClick={(e) => toggleDropdown('industries', e)}
                    >
                        Industries
                        <ChevronDown
                            size={13}
                            strokeWidth={2.5}
                            className={`dropdown-arrow ${
                                activeDropdown === 'industries' ? 'rotate' : ''
                            }`}
                        />
                    </Link>

                    <div
                        className={`dropdown-menu mega-menu-container ${
                            activeDropdown === 'industries' ? 'show' : ''
                        }`}
                    >
                        <div className="mega-menu-grid">
                            {/* Column 1: Industrial & Infrastructure */}
                            <div className="mega-menu-col">
                                <div className="mega-menu-header">
                                    <Factory size={18} />
                                    <span>Industrial & Core Sectors</span>
                                </div>
                                <ul className="mega-menu-list">
                                    <li onClick={closeMenu}><Link to="/industries/manufacturing">Manufacturing</Link></li>
                                    <li onClick={closeMenu}><Link to="/industries/construction">Construction</Link></li>
                                    <li onClick={closeMenu}><Link to="/industries/healthcare">Healthcare</Link></li>
                                </ul>
                            </div>

                            {/* Column 2: Commerce, Finance & Hospitality */}
                            <div className="mega-menu-col">
                                <div className="mega-menu-header">
                                    <HeartPulse size={18} />
                                    <span>Commerce & Finance</span>
                                </div>
                                <ul className="mega-menu-list">
                                    <li onClick={closeMenu}><Link to="/industries/retail">Retail</Link></li>
                                    <li onClick={closeMenu}><Link to="/industries/finance">Finance</Link></li>
                                    <li onClick={closeMenu}><Link to="/industries/insurance">Insurance</Link></li>
                                    <li onClick={closeMenu}><Link to="/industries/travel">Travel</Link></li>
                                </ul>
                            </div>

                            {/* Column 3: Institutions & Public Services */}
                            <div className="mega-menu-col">
                                <div className="mega-menu-header">
                                    <Building2 size={18} />
                                    <span>Public & Institutions</span>
                                </div>
                                <ul className="mega-menu-list">
                                    <li onClick={closeMenu}><Link to="/industries/education">Education</Link></li>
                                    <li onClick={closeMenu}><Link to="/industries/hospitality">Hospitality</Link></li>
                                    <li onClick={closeMenu}><Link to="/industries/government">Government</Link></li>
                                    <li onClick={closeMenu}><Link to="/industries" className="all-services-link">View All Industries →</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
            </ul>

            {/* Header Right Actions */}
            <div className="nav-header-actions">
                <button
                    type="button"
                    className="nav-search-btn"
                    aria-label="Search"
                    onClick={() => setIsSearchOpen(true)}
                >
                    <Search size={18} />
                </button>

                <Link to="/contact" className="nav-enquire-btn desktop-enquire" onClick={closeMenu}>
                    Get Started 
                    <span className="nav-btn-icon-circle">
                        <ArrowRight size={15} color="#1F2937" />
                    </span>
                </Link>

                <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle Navigation">
                    {isOpen ? <X size={24} /> : <Menu size={22} />}
                </div>
            </div>

            {/* Interactive Search Modal */}
            {isSearchOpen && (
                <div className="search-modal-backdrop" onClick={() => setIsSearchOpen(false)}>
                    <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="search-input-wrapper">
                            <Search size={20} className="search-input-icon" />
                            <input
                                type="text"
                                className="search-input-field"
                                placeholder="Search products, services, industries..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                            />
                            <button
                                type="button"
                                className="search-close-btn"
                                onClick={() => setIsSearchOpen(false)}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {searchQuery.trim() !== '' && (
                            <div className="search-results-list">
                                {filteredResults.length > 0 ? (
                                    filteredResults.map((item, index) => (
                                        <div
                                            key={index}
                                            className="search-result-item"
                                            onClick={() => handleSelectResult(item.path)}
                                        >
                                            <div className="search-item-info">
                                                <span className="search-item-title">{item.title}</span>
                                                <span className="search-item-category">{item.category}</span>
                                            </div>
                                            <CornerDownLeft size={16} className="search-item-icon" />
                                        </div>
                                    ))
                                ) : (
                                    <div className="search-empty-state">
                                        No results found for &quot;{searchQuery}&quot;
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;