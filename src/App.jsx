import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Service = React.lazy(() => import('./pages/Service'));
const Industries = React.lazy(() => import('./pages/Industries'));
const WebDev = React.lazy(() => import('./pages/WebDev'));
const WhatsAppAPI = React.lazy(() => import('./pages/WhatsAppAPI'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Products = React.lazy(() => import('./pages/Products'));
const DigitalMarketing = React.lazy(() => import('./pages/DigitalMarketing'));
const SEO = React.lazy(() => import('./pages/SEO'));
const FlyBill = React.lazy(() => import('./pages/FlyBill'));
const FlyPayroll = React.lazy(() => import('./pages/FlyPayroll'));
const SmartCRM = React.lazy(() => import('./pages/SmartCRM'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Careers = React.lazy(() => import('./pages/Careers'));
const AdminLogin = React.lazy(() => import('./pages/AdminLogin'));
const AdminCreateBlog = React.lazy(() => import('./pages/AdminCreateBlog'));
const Internship = React.lazy(() => import('./pages/Internship'));

const DynamicCanonical = () => {
    const location = useLocation();
    useEffect(() => {
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.rel = 'canonical';
            document.head.appendChild(canonicalLink);
        }
        const cleanPath = location.pathname.endsWith('/') && location.pathname !== '/'
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
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });
    }, []);

    return (
        <Router>
            <DynamicCanonical />
            <Loader />
            <div className="app">
                <Navbar />
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/industries" element={<Industries />} />
                        <Route path="/web-development" element={<WebDev />} />
                        <Route path="/whatsapp-api" element={<WhatsAppAPI />} />
                        <Route path="/digital-marketing" element={<DigitalMarketing />} />
                        <Route path="/seo" element={<SEO />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/fly-bill" element={<FlyBill />} />
                        <Route path="/payroll" element={<FlyPayroll />} />
                        <Route path="/smart-crm" element={<SmartCRM />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/internship" element={<Internship />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* Admin Routes */}
                        <Route path="/admin" element={<AdminLogin />} />
                        <Route path="/admin/create-blog" element={<AdminCreateBlog />} />
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
