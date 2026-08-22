import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import WebDev from './pages/WebDev';
import WhatsAppAPI from './pages/WhatsAppAPI';
import Blog from './pages/Blog';
import Products from './pages/Products';
import Industries from './pages/Industries';
import DigitalMarketing from './pages/DigitalMarketing';
import FlyBill from './pages/FlyBill';
import FlyPayroll from './pages/FlyPayroll';
import SmartCRM from './pages/SmartCRM';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import Internship from './pages/Internship';
import Loader from './components/Loader';

import AdminCreateBlog from './pages/AdminCreateBlog';

// Services Pages
import CustomSoftwareDev from './pages/CustomSoftwareDev';
import EnterpriseSoftwareDev from './pages/EnterpriseSoftwareDev';
import WebApplicationDev from './pages/WebApplicationDev';
import MobileAppDev from './pages/MobileAppDev';
import SaaSDev from './pages/SaaSDev';
import CRMDev from './pages/CRMDev';
import ERPDev from './pages/ERPDev';
import APIDev from './pages/APIDev';
import CloudAppDev from './pages/CloudAppDev';
import AISoftwareDev from './pages/AISoftwareDev';
import BusinessProcessAutomation from './pages/BusinessProcessAutomation';
import SoftwareConsulting from './pages/SoftwareConsulting';
import SoftwareModernization from './pages/SoftwareModernization';
import SoftwareMaintenanceSupport from './pages/SoftwareMaintenanceSupport';
import UIUXDesign from './pages/UIUXDesign';

// Products Pages
import FoodDeliverySolution from './pages/FoodDeliverySolution';
import FixProduct from './pages/FixProduct';

// Industries Pages
import Manufacturing from './pages/Manufacturing';
import Healthcare from './pages/Healthcare';
import Education from './pages/Education';
import Construction from './pages/Construction';
import Retail from './pages/Retail';
import Finance from './pages/Finance';
import Travel from './pages/Travel';
import Hospitality from './pages/Hospitality';
import Insurance from './pages/Insurance';
import Government from './pages/Government';

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
            <Loader />
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/services" element={<Service />} />
                    
                    {/* Services Pages */}
                    <Route path="/services/web-development" element={<WebDev />} />
                    <Route path="/service/web-development" element={<WebDev />} />
                    
                    <Route path="/services/whatsapp-api" element={<WhatsAppAPI />} />
                    <Route path="/service/whatsapp-api" element={<WhatsAppAPI />} />
                    
                    <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="/service/digital-marketing" element={<DigitalMarketing />} />

                    <Route path="/services/custom-software-development" element={<CustomSoftwareDev />} />
                    <Route path="/services/enterprise-software-development" element={<EnterpriseSoftwareDev />} />
                    <Route path="/services/web-application-development" element={<WebApplicationDev />} />
                    <Route path="/services/mobile-app-development" element={<MobileAppDev />} />
                    <Route path="/services/saas-development" element={<SaaSDev />} />
                    <Route path="/services/crm-development" element={<CRMDev />} />
                    <Route path="/services/erp-development" element={<ERPDev />} />
                    <Route path="/services/api-development" element={<APIDev />} />
                    <Route path="/services/cloud-application-development" element={<CloudAppDev />} />
                    <Route path="/services/ai-software-development" element={<AISoftwareDev />} />
                    <Route path="/services/business-process-automation" element={<BusinessProcessAutomation />} />
                    <Route path="/services/software-consulting" element={<SoftwareConsulting />} />
                    <Route path="/services/software-modernization" element={<SoftwareModernization />} />
                    <Route path="/services/software-maintenance-support" element={<SoftwareMaintenanceSupport />} />
                    <Route path="/services/ui-ux-design" element={<UIUXDesign />} />

                    <Route path="/blog" element={<Blog />} />
                    
                    {/* Products Pages */}
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/fly-bill" element={<FlyBill />} />
                    <Route path="/products/fly-bill" element={<FlyBill />} />
                    <Route path="/products/billing-software" element={<FlyBill />} />
                    <Route path="/product/payroll" element={<FlyPayroll />} />
                    <Route path="/products/payroll" element={<FlyPayroll />} />
                    <Route path="/products/payroll-software" element={<FlyPayroll />} />
                    <Route path="/product/smart-crm" element={<SmartCRM />} />
                    <Route path="/products/smart-crm" element={<SmartCRM />} />
                    <Route path="/products/crm-software" element={<SmartCRM />} />

                    <Route path="/products/food-delivery-solution" element={<FoodDeliverySolution />} />
                    <Route path="/products/fix" element={<FixProduct />} />

                    {/* Industries Pages */}
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/industries/manufacturing" element={<Manufacturing />} />
                    <Route path="/industries/healthcare" element={<Healthcare />} />
                    <Route path="/industries/education" element={<Education />} />
                    <Route path="/industries/construction" element={<Construction />} />
                    <Route path="/industries/retail" element={<Retail />} />
                    <Route path="/industries/finance" element={<Finance />} />
                    <Route path="/industries/travel" element={<Travel />} />
                    <Route path="/industries/hospitality" element={<Hospitality />} />
                    <Route path="/industries/insurance" element={<Insurance />} />
                    <Route path="/industries/government" element={<Government />} />

                    <Route path="/careers" element={<Careers />} />
                    <Route path="/internship" element={<Internship />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminCreateBlog />} />
                    <Route path="/admin/create-blog" element={<AdminCreateBlog />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
