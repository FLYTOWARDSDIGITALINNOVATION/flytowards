import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Main Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Service = React.lazy(() => import('./pages/Service'));
const WebDev = React.lazy(() => import('./pages/WebDev'));
const WhatsAppAPI = React.lazy(() => import('./pages/WhatsAppAPI'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Products = React.lazy(() => import('./pages/Products'));
const Industries = React.lazy(() => import('./pages/Industries'));
const DigitalMarketing = React.lazy(() => import('./pages/DigitalMarketing'));
const SEO = React.lazy(() => import('./pages/SEO'));

const FlyBill = React.lazy(() => import('./pages/FlyBill'));
const FlyPayroll = React.lazy(() => import('./pages/FlyPayroll'));
const SmartCRM = React.lazy(() => import('./pages/SmartCRM'));

const Contact = React.lazy(() => import('./pages/Contact'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Internship = React.lazy(() => import('./pages/Internship'));

// Admin Pages
const AdminLogin = React.lazy(() => import('./pages/AdminLogin'));
const AdminCreateBlog = React.lazy(() => import('./pages/AdminCreateBlog'));

// Services Pages
const CustomSoftwareDev = React.lazy(() => import('./pages/CustomSoftwareDev'));
const EnterpriseSoftwareDev = React.lazy(() => import('./pages/EnterpriseSoftwareDev'));
const WebApplicationDev = React.lazy(() => import('./pages/WebApplicationDev'));
const MobileAppDev = React.lazy(() => import('./pages/MobileAppDev'));
const SaaSDev = React.lazy(() => import('./pages/SaaSDev'));
const CRMDev = React.lazy(() => import('./pages/CRMDev'));
const ERPDev = React.lazy(() => import('./pages/ERPDev'));
const APIDev = React.lazy(() => import('./pages/APIDev'));
const CloudAppDev = React.lazy(() => import('./pages/CloudAppDev'));
const AISoftwareDev = React.lazy(() => import('./pages/AISoftwareDev'));

const BusinessProcessAutomation = React.lazy(
    () => import('./pages/BusinessProcessAutomation')
);

const SoftwareConsulting = React.lazy(
    () => import('./pages/SoftwareConsulting')
);

const SoftwareModernization = React.lazy(
    () => import('./pages/SoftwareModernization')
);

const SoftwareMaintenanceSupport = React.lazy(
    () => import('./pages/SoftwareMaintenanceSupport')
);

const UIUXDesign = React.lazy(() => import('./pages/UIUXDesign'));

// Products Pages
const FoodDeliverySolution = React.lazy(
    () => import('./pages/FoodDeliverySolution')
);

const FixProduct = React.lazy(() => import('./pages/FixProduct'));

// Industries Pages
const Manufacturing = React.lazy(() => import('./pages/Manufacturing'));
const Healthcare = React.lazy(() => import('./pages/Healthcare'));
const Education = React.lazy(() => import('./pages/Education'));
const Construction = React.lazy(() => import('./pages/Construction'));
const Retail = React.lazy(() => import('./pages/Retail'));
const Finance = React.lazy(() => import('./pages/Finance'));
const Travel = React.lazy(() => import('./pages/Travel'));
const Hospitality = React.lazy(() => import('./pages/Hospitality'));
const Insurance = React.lazy(() => import('./pages/Insurance'));
const Government = React.lazy(() => import('./pages/Government'));

// Dynamic Canonical URL
const DynamicCanonical = () => {
    const location = useLocation();

    useEffect(() => {
        let canonicalLink = document.querySelector(
            "link[rel='canonical']"
        );

        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.rel = 'canonical';
            document.head.appendChild(canonicalLink);
        }

        const cleanPath =
            location.pathname.endsWith('/') && location.pathname !== '/'
                ? location.pathname.slice(0, -1)
                : location.pathname;

        canonicalLink.href = `https://www.flytowards.in${cleanPath}`;
    }, [location]);

    return null;
};

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        });
    }, []);

    return (
        <Router>
            <DynamicCanonical />

            <div className="app">
                <Navbar />

                <Suspense fallback={<Loader />}>
                    <Routes>

                        {/* Main Pages */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />

                        <Route path="/service" element={<Service />} />
                        <Route path="/services" element={<Service />} />
                        <Route path="/services/" element={<Service />} />

                        {/* Web Development */}
                        <Route
                            path="/services/web-development"
                            element={<WebDev />}
                        />

                        <Route
                            path="/service/web-development"
                            element={<WebDev />}
                        />

                        <Route
                            path="/web-development"
                            element={<WebDev />}
                        />

                        {/* WhatsApp API */}
                        <Route
                            path="/services/whatsapp-api"
                            element={<WhatsAppAPI />}
                        />

                        <Route
                            path="/service/whatsapp-api"
                            element={<WhatsAppAPI />}
                        />

                        <Route
                            path="/whatsapp-api"
                            element={<WhatsAppAPI />}
                        />

                        {/* Digital Marketing */}
                        <Route
                            path="/services/digital-marketing"
                            element={<DigitalMarketing />}
                        />

                        <Route
                            path="/service/digital-marketing"
                            element={<DigitalMarketing />}
                        />

                        <Route
                            path="/digital-marketing"
                            element={<DigitalMarketing />}
                        />

                        {/* SEO */}
                        <Route
                            path="/seo"
                            element={<SEO />}
                        />

                        {/* Software Development Services */}
                        <Route
                            path="/services/custom-software-development"
                            element={<CustomSoftwareDev />}
                        />

                        <Route
                            path="/services/custom-software-development/"
                            element={<CustomSoftwareDev />}
                        />

                        <Route
                            path="/services/enterprise-software-development"
                            element={<EnterpriseSoftwareDev />}
                        />

                        <Route
                            path="/services/enterprise-software-development/"
                            element={<EnterpriseSoftwareDev />}
                        />

                        <Route
                            path="/services/web-application-development"
                            element={<WebApplicationDev />}
                        />

                        <Route
                            path="/services/web-application-development/"
                            element={<WebApplicationDev />}
                        />

                        <Route
                            path="/services/mobile-app-development"
                            element={<MobileAppDev />}
                        />

                        <Route
                            path="/services/mobile-app-development/"
                            element={<MobileAppDev />}
                        />

                        <Route
                            path="/services/saas-development"
                            element={<SaaSDev />}
                        />

                        <Route
                            path="/services/saas-development/"
                            element={<SaaSDev />}
                        />

                        <Route
                            path="/services/crm-development"
                            element={<CRMDev />}
                        />

                        <Route
                            path="/services/crm-development/"
                            element={<CRMDev />}
                        />

                        <Route
                            path="/services/erp-development"
                            element={<ERPDev />}
                        />

                        <Route
                            path="/services/erp-development/"
                            element={<ERPDev />}
                        />

                        <Route
                            path="/services/api-development"
                            element={<APIDev />}
                        />

                        <Route
                            path="/services/api-development/"
                            element={<APIDev />}
                        />

                        <Route
                            path="/services/cloud-application-development"
                            element={<CloudAppDev />}
                        />

                        <Route
                            path="/services/cloud-application-development/"
                            element={<CloudAppDev />}
                        />

                        <Route
                            path="/services/ai-software-development"
                            element={<AISoftwareDev />}
                        />

                        <Route
                            path="/services/ai-software-development/"
                            element={<AISoftwareDev />}
                        />

                        <Route
                            path="/services/business-process-automation"
                            element={<BusinessProcessAutomation />}
                        />

                        <Route
                            path="/services/business-process-automation/"
                            element={<BusinessProcessAutomation />}
                        />

                        <Route
                            path="/services/software-consulting"
                            element={<SoftwareConsulting />}
                        />

                        <Route
                            path="/services/software-consulting/"
                            element={<SoftwareConsulting />}
                        />

                        <Route
                            path="/services/software-modernization"
                            element={<SoftwareModernization />}
                        />

                        <Route
                            path="/services/software-modernization/"
                            element={<SoftwareModernization />}
                        />

                        <Route
                            path="/services/software-maintenance-support"
                            element={<SoftwareMaintenanceSupport />}
                        />

                        <Route
                            path="/services/software-maintenance-support/"
                            element={<SoftwareMaintenanceSupport />}
                        />

                        <Route
                            path="/services/ui-ux-design"
                            element={<UIUXDesign />}
                        />

                        <Route
                            path="/services/ui-ux-design/"
                            element={<UIUXDesign />}
                        />

                        {/* Blog */}
                        <Route
                            path="/blog"
                            element={<Blog />}
                        />

                        {/* Products */}
                        <Route
                            path="/products"
                            element={<Products />}
                        />

                        {/* FlyBill */}
                        <Route
                            path="/product/fly-bill"
                            element={<FlyBill />}
                        />

                        <Route
                            path="/products/fly-bill"
                            element={<FlyBill />}
                        />

                        <Route
                            path="/products/billing-software"
                            element={<FlyBill />}
                        />

                        <Route
                            path="/fly-bill"
                            element={<FlyBill />}
                        />

                        {/* FlyPayroll */}
                        <Route
                            path="/product/payroll"
                            element={<FlyPayroll />}
                        />

                        <Route
                            path="/products/payroll"
                            element={<FlyPayroll />}
                        />

                        <Route
                            path="/products/payroll-software"
                            element={<FlyPayroll />}
                        />

                        <Route
                            path="/payroll"
                            element={<FlyPayroll />}
                        />

                        {/* Smart CRM */}
                        <Route
                            path="/product/smart-crm"
                            element={<SmartCRM />}
                        />

                        <Route
                            path="/products/smart-crm"
                            element={<SmartCRM />}
                        />

                        <Route
                            path="/products/crm-software"
                            element={<SmartCRM />}
                        />

                        <Route
                            path="/smart-crm"
                            element={<SmartCRM />}
                        />

                        {/* Food Delivery */}
                        <Route
                            path="/products/food-delivery-solution"
                            element={<FoodDeliverySolution />}
                        />

                        {/* Fix Product */}
                        <Route
                            path="/products/fix"
                            element={<FixProduct />}
                        />

                        {/* Industries */}
                        <Route
                            path="/industries"
                            element={<Industries />}
                        />

                        <Route
                            path="/industries/manufacturing"
                            element={<Manufacturing />}
                        />

                        <Route
                            path="/industries/manufacturing/"
                            element={<Manufacturing />}
                        />

                        <Route
                            path="/industries/healthcare"
                            element={<Healthcare />}
                        />

                        <Route
                            path="/industries/healthcare/"
                            element={<Healthcare />}
                        />

                        <Route
                            path="/industries/education"
                            element={<Education />}
                        />

                        <Route
                            path="/industries/education/"
                            element={<Education />}
                        />

                        <Route
                            path="/industries/construction"
                            element={<Construction />}
                        />

                        <Route
                            path="/industries/construction/"
                            element={<Construction />}
                        />

                        <Route
                            path="/industries/retail"
                            element={<Retail />}
                        />

                        <Route
                            path="/industries/retail/"
                            element={<Retail />}
                        />

                        <Route
                            path="/industries/finance"
                            element={<Finance />}
                        />

                        <Route
                            path="/industries/finance/"
                            element={<Finance />}
                        />

                        <Route
                            path="/industries/travel"
                            element={<Travel />}
                        />

                        <Route
                            path="/industries/hospitality"
                            element={<Hospitality />}
                        />

                        <Route
                            path="/industries/hospitality/"
                            element={<Hospitality />}
                        />

                        <Route
                            path="/industries/insurance"
                            element={<Insurance />}
                        />

                        <Route
                            path="/industries/government"
                            element={<Government />}
                        />

                        {/* Additional SEO Industry Routes */}
                        <Route
                            path="/industries/logistics/"
                            element={<Industries />}
                        />

                        {/* Careers */}
                        <Route
                            path="/careers"
                            element={<Careers />}
                        />

                        {/* Internship */}
                        <Route
                            path="/internship"
                            element={<Internship />}
                        />

                        {/* Gallery */}
                        <Route
                            path="/gallery"
                            element={<Gallery />}
                        />

                        {/* Contact */}
                        <Route
                            path="/contact"
                            element={<Contact />}
                        />

                        <Route
                            path="/contact/"
                            element={<Contact />}
                        />

                        {/* Admin */}
                        <Route
                            path="/admin"
                            element={<AdminLogin />}
                        />

                        <Route
                            path="/admin/create-blog"
                            element={<AdminCreateBlog />}
                        />

                    </Routes>
                </Suspense>

                <Footer />
            </div>
        </Router>
    );
}

export default App;