import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CheckCircle2,
    Check,
    ChevronDown,
    ChevronRight,
    Layers,
    Building2,
    Stethoscope,
    ShoppingBag,
    GraduationCap,
    HardHat,
    Truck,
    ShieldCheck,
    BarChart3,
    Sparkles,
    Globe,
    MonitorSmartphone,
    LayoutDashboard,
    Zap,
    MapPin,
    TrendingUp,
    Send,
    Code,
    Users,
    Server,
    RefreshCw,
    Smartphone,
    Settings,
    MousePointerClick,
    PackageCheck,
    CreditCard,
    Plug
} from 'lucide-react';

const WebAppDev = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [activeIndustry, setActiveIndustry] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Web Application Development Services in Tamil Nadu | FlyTowards";

        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute(
            "content",
            "Web application development services in Tamil Nadu. FlyTowards builds custom web apps, business portals and scalable digital platforms for your business."
        );

        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = "keywords";
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute(
            "content",
            "web application development, web app development, website and app development, web programming, web and app development"
        );

        let robots = document.querySelector('meta[name="robots"]');
        if (!robots) {
            robots = document.createElement('meta');
            robots.name = "robots";
            document.head.appendChild(robots);
        }
        robots.setAttribute("content", "index, follow");

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", "https://flytowardsdigitalinnovation.com/services/web-application-development/");

        const schemaId = 'web-app-schema-script';
        let schemaScript = document.getElementById(schemaId);
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = schemaId;
            schemaScript.type = 'application/ld+json';
            document.head.appendChild(schemaScript);
        }
        const structuredData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Service",
                    "@id": "https://flytowardsdigitalinnovation.com/services/web-application-development/#service",
                    "name": "Web Application Development Services",
                    "serviceType": "Custom Web App Development",
                    "provider": {
                        "@type": "Organization",
                        "name": "FlyTowards Digital Innovation",
                        "url": "https://flytowardsdigitalinnovation.com/",
                        "logo": "https://flytowardsdigitalinnovation.com/WD.png"
                    },
                    "areaServed": [
                        { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
                        { "@type": "City", "name": "Tirunelveli" },
                        { "@type": "City", "name": "Madurai" },
                        { "@type": "City", "name": "Tuticorin" },
                        { "@type": "City", "name": "Coimbatore" },
                        { "@type": "City", "name": "Chennai" }
                    ],
                    "description": "Web application development services in Tamil Nadu. FlyTowards builds custom web apps, business portals and scalable digital platforms for your business.",
                    "url": "https://flytowardsdigitalinnovation.com/services/web-application-development/"
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://flytowardsdigitalinnovation.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://flytowardsdigitalinnovation.com/services/" },
                        { "@type": "ListItem", "position": 3, "name": "Web Application Development", "item": "https://flytowardsdigitalinnovation.com/services/web-application-development/" }
                    ]
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is web application development?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Web application development involves creating interactive software that users access through web browsers to perform tasks, manage information and use digital services." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is the difference between a website and a web application?",
                            "acceptedAnswer": { "@type": "Answer", "text": "A website primarily presents information, while a web application provides interactive functionality such as user accounts, dashboards, bookings, data management and online transactions." }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does web application development cost in Tamil Nadu?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Costs depend on application features, UI/UX requirements, user roles, integrations, technical complexity and development scope. A requirements assessment helps determine the project budget." }
                        }
                    ]
                }
            ]
        };
        schemaScript.textContent = JSON.stringify(structuredData, null, 2);

        return () => {
            const s = document.getElementById(schemaId);
            if (s) s.remove();
        };
    }, []);

    // Section 02 — Key Highlights
    const overviewHighlights = [
        {
            title: "Browser-Based Access",
            desc: "Use applications through supported web browsers without desktop installation.",
            icon: <Globe size={22} color="#EAB308" />
        },
        {
            title: "Interactive Functionality",
            desc: "Manage data, users and business activities through dynamic interfaces.",
            icon: <MousePointerClick size={22} color="#EAB308" />
        },
        {
            title: "System Integration",
            desc: "Connect compatible APIs, payment systems and business applications.",
            icon: <Plug size={22} color="#EAB308" />
        },
        {
            title: "Flexible Architecture",
            desc: "Plan features and functionality that can grow with future requirements.",
            icon: <Layers size={22} color="#EAB308" />
        }
    ];

    // Section 03 — Services Cards
    const serviceCards = [
        {
            icon: <Code size={28} color="#EAB308" />,
            title: "Custom Web Application Development",
            desc: "Business-specific web applications designed around your workflows, users and operational requirements.",
            link: "/services/custom-software-development"
        },
        {
            icon: <LayoutDashboard size={28} color="#EAB308" />,
            title: "Business Web Portal Development",
            desc: "Customer portals, employee portals, vendor platforms and centralized business dashboards.",
            link: "/services/enterprise-software-development"
        },
        {
            icon: <Server size={28} color="#EAB308" />,
            title: "SaaS Web Application Development",
            desc: "Web-based software platforms with user accounts, administrative controls and subscription-related functionality.",
            link: "/services/saas-application-development"
        },
        {
            icon: <ShoppingBag size={28} color="#EAB308" />,
            title: "E-commerce Web Application Development",
            desc: "Custom online ordering platforms, product management, customer accounts and order tracking features.",
            link: "/services/ecommerce-development"
        },
        {
            icon: <Plug size={28} color="#EAB308" />,
            title: "Web Application Integration",
            desc: "Connect compatible APIs, payment services, CRM systems and other business applications.",
            link: "/services/software-integration-automation"
        },
        {
            icon: <RefreshCw size={28} color="#EAB308" />,
            title: "Web Application Maintenance & Modernization",
            desc: "Improve existing web applications, update functionality and address changing technical or business requirements.",
            link: "/services/software-maintenance-support"
        }
    ];

    // Section 04 — Business Benefits
    const businessBenefits = [
        {
            title: "Access Business Tools Through a Browser",
            desc: "Allow authorized users to access application features through supported browsers without requiring a traditional desktop software installation.",
            icon: <Globe size={22} color="#EAB308" />
        },
        {
            title: "Simplify Everyday Operations",
            desc: "Manage tasks, records, approvals and business activities through structured digital workflows.",
            icon: <Zap size={22} color="#EAB308" />
        },
        {
            title: "Improve Customer Experience",
            desc: "Provide customers with convenient access to relevant services, information and account features.",
            icon: <Users size={22} color="#EAB308" />
        },
        {
            title: "Centralize Business Information",
            desc: "Bring important data and application functions into a connected platform.",
            icon: <BarChart3 size={22} color="#EAB308" />
        },
        {
            title: "Support Future Enhancements",
            desc: "Plan application architecture that can accommodate additional functionality as business needs evolve.",
            icon: <TrendingUp size={22} color="#EAB308" />
        }
    ];

    // Section 05 — Industries
    const industries = [
        {
            title: "Manufacturing",
            desc: "Web dashboards for production information, inventory tracking, order management and internal coordination.",
            icon: <HardHat size={26} />,
            link: "/industries/manufacturing",
            tag: "Shop Floor & Operations"
        },
        {
            title: "Healthcare",
            desc: "Patient appointment portals, administrative applications, billing interfaces and healthcare workflow management.",
            icon: <Stethoscope size={26} />,
            link: "/industries/healthcare",
            tag: "Clinical & Patient Access"
        },
        {
            title: "Retail & Wholesale",
            desc: "Online ordering portals, product catalogs, inventory dashboards and customer account management.",
            icon: <ShoppingBag size={26} />,
            link: "/industries/retail",
            tag: "POS & Online Ordering"
        },
        {
            title: "Education",
            desc: "Student portals, admission applications, learning management interfaces and administrative dashboards.",
            icon: <GraduationCap size={26} />,
            link: "/industries/education",
            tag: "Campus & Academics"
        },
        {
            title: "Construction",
            desc: "Project tracking portals, material management applications, vendor coordination and reporting dashboards.",
            icon: <Building2 size={26} />,
            link: "/industries/construction",
            tag: "Sites & Cost Control"
        },
        {
            title: "Logistics & Transportation",
            desc: "Shipment tracking portals, delivery management interfaces and dispatch coordination applications.",
            icon: <Truck size={26} />,
            link: "/industries/logistics",
            tag: "Fleet & Consignments"
        }
    ];

    // Section 06 — Process Steps
    const processSteps = [
        { num: "01", title: "Requirement Analysis", desc: "Understand your users, business goals, required features and application workflows." },
        { num: "02", title: "UI/UX Design & Planning", desc: "Plan application screens, user journeys, navigation and technical requirements." },
        { num: "03", title: "Frontend & Backend Development", desc: "Develop user interfaces, application functionality, databases and required backend processes." },
        { num: "04", title: "Testing & Quality Assurance", desc: "Review functionality, usability, browser compatibility and important application workflows." },
        { num: "05", title: "Deployment & Launch", desc: "Prepare the application for deployment, configure the environment and complete launch activities." },
        { num: "06", title: "Maintenance & Enhancements", desc: "Plan updates, issue resolution, performance improvements and future functionality." }
    ];

    // Section 08 — Why Choose FlyTowards
    const whyChoosePoints = [
        {
            num: "01",
            title: "Business-Focused Development",
            desc: "We begin by understanding your business challenges, application users and required functionality."
        },
        {
            num: "02",
            title: "User-Centered Application Design",
            desc: "We consider usability, navigation and workflow clarity when planning application interfaces."
        },
        {
            num: "03",
            title: "Frontend & Backend Development",
            desc: "Our web application development scope includes user interfaces, application functionality and supporting backend systems."
        },
        {
            num: "04",
            title: "Future-Ready Planning",
            desc: "We consider maintainability, integrations and potential enhancements during application planning."
        }
    ];

    // Section 09 — Challenges Checklist
    const challenges = [
        "Your business processes depend on spreadsheets and manual records.",
        "Customers need online access to services, accounts or information.",
        "Employees require a centralized platform for daily tasks.",
        "Existing software cannot support your specific workflows.",
        "You need an online ordering, booking or management system.",
        "Different business tools need to share information.",
        "You are planning a new browser-based software product."
    ];

    // Section 10 — FAQs
    const faqList = [
        {
            q: "What is web application development?",
            a: "Web application development involves creating interactive software that users access through web browsers to perform tasks, manage information and use digital services."
        },
        {
            q: "What is the difference between a website and a web application?",
            a: "A website primarily presents information, while a web application provides interactive functionality such as user accounts, dashboards, bookings, data management and online transactions."
        },
        {
            q: "How much does web application development cost in Tamil Nadu?",
            a: "Costs depend on application features, UI/UX requirements, user roles, integrations, technical complexity and development scope. A requirements assessment helps determine the project budget."
        },
        {
            q: "How long does it take to develop a web application?",
            a: "Development time varies based on functionality, design complexity, integrations, testing requirements and project scope."
        },
        {
            q: "What is the difference between web app development and mobile app development?",
            a: "Web applications run through browsers, while native mobile applications are developed for mobile operating systems. Some web applications can also be designed for mobile-friendly use."
        },
        {
            q: "Can a web application integrate with existing business software?",
            a: "Yes. Web applications can often connect with existing CRM, ERP, payment and other business systems through supported APIs or integration methods."
        },
        {
            q: "Do you provide website and app development services?",
            a: "FlyTowards' service portfolio includes web application development and mobile application development. The appropriate solution depends on whether your project requires an informational website, an interactive web platform or a mobile application."
        }
    ];

    return (
        <main style={{ fontFamily: "'Outfit', sans-serif" }}>
            {/* Ambient background glow */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 100, 255, 0.06) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(250, 204, 21, 0.07) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

                .wad-page-wrapper {
                    position: relative;
                    z-index: 1;
                }

                .wad-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    width: 100%;
                    box-sizing: border-box;
                }

                .wad-section {
                    padding: 80px 0;
                    position: relative;
                }

                @media (max-width: 768px) {
                    .wad-section {
                        padding: 55px 0;
                    }
                }

                /* Heading 2 */
                .wad-heading-h2 {
                    font-family: 'Outfit', sans-serif;
                    font-size: clamp(2rem, 3.5vw, 2.85rem);
                    font-weight: 800;
                    line-height: 1.25;
                    color: #1e1b4b;
                    margin-bottom: 1.2rem;
                    letter-spacing: -0.03em;
                    background: none !important;
                    -webkit-text-fill-color: #1e1b4b !important;
                    text-shadow: none !important;
                }

                .wad-heading-h2 .gradient-text {
                    background: none !important;
                    -webkit-background-clip: initial !important;
                    background-clip: initial !important;
                    color: #facc15 !important;
                    -webkit-text-fill-color: #facc15 !important;
                    text-shadow: none !important;
                }

                .wad-subtext {
                    font-size: 1.1rem;
                    color: #64748b;
                    line-height: 1.75;
                    margin-bottom: 2rem;
                }

                /* Buttons */
                .home-btn-primary {
                    background: #FACC15 !important;
                    color: #1F2937 !important;
                    padding: 1.05rem 2.2rem;
                    border-radius: 9999px;
                    font-size: 1rem;
                    font-weight: 700;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    border: none;
                    cursor: pointer;
                    white-space: nowrap;
                }
                .home-btn-primary:hover {
                    background: #EAB308 !important;
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(250, 204, 21, 0.4);
                }

                .home-btn-outline {
                    background: transparent;
                    color: #1e1b4b !important;
                    padding: 1.05rem 2.2rem;
                    border-radius: 9999px;
                    font-size: 1rem;
                    font-weight: 700;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    border: 2px solid #1e1b4b;
                    cursor: pointer;
                    white-space: nowrap;
                }
                .home-btn-outline:hover {
                    background: #1e1b4b;
                    color: #FACC15 !important;
                    transform: translateY(-2px);
                }

                /* Badge Tag */
                .home-badge-tag {
                    display: inline-block;
                    padding: 6px 16px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.6);
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 800;
                    color: #1F2937;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 1.25rem;
                }

                /* ===== SECTION 01: HERO ===== */
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                    align-items: center;
                }
                @media (max-width: 992px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }

                .hero-tagline {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 18px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.6);
                    border-radius: 50px;
                    font-size: 0.88rem;
                    font-weight: 700;
                    color: #1F2937;
                    margin-bottom: 1.5rem;
                    letter-spacing: 0.02em;
                }

                .hero-visual-card {
                    position: relative;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px rgba(15, 23, 42, 0.08);
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    background: #ffffff;
                    animation: floatWebApp 6s ease-in-out infinite;
                }
                @keyframes floatWebApp {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(0.3deg); }
                    66% { transform: translateY(-5px) rotate(-0.2deg); }
                }
                .hero-visual-card img {
                    width: 100%;
                    height: 460px;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.5s ease;
                }
                .hero-visual-card:hover img {
                    transform: scale(1.04);
                }

                .hero-badge-float {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    right: 20px;
                    padding: 14px 18px;
                    background: rgba(30, 27, 75, 0.94);
                    backdrop-filter: blur(12px);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                /* ===== SECTION 02: OVERVIEW ===== */
                .overview-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: start;
                }
                @media (max-width: 992px) {
                    .overview-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }

                .key-highlight-card-web {
                    display: flex;
                    align-items: center;
                    gap: 1.15rem;
                    padding: 1.2rem 1.4rem;
                    background: #ffffff;
                    border-radius: 18px;
                    border: 1.5px solid rgba(226, 232, 240, 0.9);
                    border-left: 4px solid #cbd5e1;
                    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.02);
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                }
                .key-highlight-card-web:hover {
                    transform: translateX(10px);
                    background: linear-gradient(90deg, #FEF9C3 0%, #FFFFFF 100%);
                    border-color: rgba(250, 204, 21, 0.8);
                    border-left-color: #EAB308;
                    box-shadow: 0 10px 28px rgba(250, 204, 21, 0.2);
                }
                .key-highlight-card-web:hover .home-icon-box {
                    background: #FACC15;
                    transform: scale(1.1);
                    box-shadow: 0 6px 16px rgba(250, 204, 21, 0.35);
                }
                .key-highlight-card-web:hover .web-arrow-badge {
                    opacity: 1;
                    transform: translateX(0);
                }
                .web-arrow-badge {
                    opacity: 0;
                    transform: translateX(-6px);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    margin-left: auto;
                    color: #EAB308;
                }
                .home-icon-box {
                    width: 48px;
                    height: 48px;
                    min-width: 48px;
                    border-radius: 14px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(250, 204, 21, 0.15);
                    transition: all 0.35s ease;
                }

                /* ===== SECTION 03: SERVICES GRID ===== */
                .services-grid-3x2 {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 1024px) {
                    .services-grid-3x2 {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 640px) {
                    .services-grid-3x2 {
                        grid-template-columns: 1fr;
                    }
                }
                .service-card-web {
                    background: #ffffff;
                    border-radius: 22px;
                    padding: 2rem 1.75rem;
                    border: 1.5px solid rgba(226, 232, 240, 0.8);
                    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                }
                .service-card-web::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #FACC15, #EAB308);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.35s ease;
                }
                .service-card-web:hover {
                    transform: translateY(-8px);
                    border-color: rgba(250, 204, 21, 0.4);
                    box-shadow: 0 20px 45px rgba(250, 204, 21, 0.15);
                }
                .service-card-web:hover::before {
                    transform: scaleX(1);
                }
                .service-card-web:hover .svc-icon-wrap {
                    background: #FACC15;
                    transform: scale(1.1) rotate(6deg);
                    box-shadow: 0 8px 20px rgba(250, 204, 21, 0.4);
                }
                .svc-icon-wrap {
                    width: 58px;
                    height: 58px;
                    border-radius: 18px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.25rem;
                    transition: all 0.35s ease;
                }

                /* ===== SECTION 04: BENEFITS ===== */
                .benefits-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: center;
                }
                @media (max-width: 992px) {
                    .benefits-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }
                .benefit-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1.25rem;
                    padding: 1.4rem 0;
                    border-bottom: 1px solid #f1f5f9;
                    transition: all 0.3s ease;
                }
                .benefit-item:last-child {
                    border-bottom: none;
                }
                .benefit-icon-wrap {
                    width: 48px;
                    height: 48px;
                    min-width: 48px;
                    border-radius: 14px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.35s ease;
                }
                .benefit-item:hover .benefit-icon-wrap {
                    background: #FACC15;
                    transform: scale(1.1);
                    box-shadow: 0 6px 16px rgba(250, 204, 21, 0.3);
                }

                /* ===== SECTION 05: INDUSTRY TABS ===== */
                .industry-tabs-header {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.65rem;
                    margin-bottom: 2.5rem;
                }
                .industry-tab-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 0.65rem 1.35rem;
                    border-radius: 50px;
                    border: 2px solid rgba(226, 232, 240, 0.8);
                    background: #ffffff;
                    font-size: 0.92rem;
                    font-weight: 700;
                    color: #64748b;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: 'Outfit', sans-serif;
                }
                .industry-tab-btn:hover {
                    border-color: #FACC15;
                    color: #1e1b4b;
                }
                .industry-tab-btn.active {
                    background: #FACC15;
                    border-color: #FACC15;
                    color: #1F2937;
                    box-shadow: 0 6px 20px rgba(250, 204, 21, 0.3);
                }
                .industry-active-view {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3.5rem;
                    align-items: center;
                    background: #f8fafc;
                    border-radius: 28px;
                    padding: 3rem;
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    min-height: 260px;
                }
                @media (max-width: 768px) {
                    .industry-active-view {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        padding: 2rem 1.5rem;
                    }
                }

                /* ===== SECTION 06: PROCESS TIMELINE ===== */
                .process-timeline {
                    position: relative;
                }
                .process-steps-row {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 0;
                    position: relative;
                }
                .process-steps-row::before {
                    content: '';
                    position: absolute;
                    top: 36px;
                    left: 10%;
                    right: 10%;
                    height: 2px;
                    background: linear-gradient(90deg, #FACC15 0%, #EAB308 50%, #FEF9C3 75%, #FACC15 100%);
                    z-index: 0;
                }
                @media (max-width: 1024px) {
                    .process-steps-row {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .process-steps-row::before {
                        display: none;
                    }
                }
                @media (max-width: 640px) {
                    .process-steps-row {
                        grid-template-columns: 1fr;
                    }
                }
                .process-step-node {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 0 0.75rem;
                    position: relative;
                    z-index: 1;
                }
                .step-circle {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    background: linear-gradient(180deg, #FACC15 0%, #EAB308 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.15rem;
                    font-weight: 900;
                    color: #1F2937;
                    margin-bottom: 1.25rem;
                    box-shadow: 0 8px 24px rgba(250, 204, 21, 0.35);
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }
                .process-step-node:hover .step-circle {
                    transform: scale(1.12);
                    box-shadow: 0 14px 32px rgba(250, 204, 21, 0.5);
                }

                /* ===== SECTION 07: LOCATION ===== */
                .location-split {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: center;
                }
                @media (max-width: 992px) {
                    .location-split {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }
                .location-city-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.65rem;
                    margin-top: 1.5rem;
                }
                .city-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 14px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.5);
                    border-radius: 50px;
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: #1F2937;
                }

                /* ===== SECTION 08: WHY CHOOSE US ===== */
                .why-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.15fr;
                    gap: 4.5rem;
                    align-items: center;
                }
                @media (max-width: 992px) {
                    .why-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }
                .differentiator-item {
                    padding: 1.4rem 1.6rem;
                    border-bottom: 1px solid #f1f5f9;
                    display: flex;
                    align-items: flex-start;
                    gap: 1.5rem;
                    border-radius: 18px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: pointer;
                }
                .differentiator-item:first-child {
                    padding-top: 1.4rem;
                }
                .differentiator-item:last-child {
                    border-bottom: none;
                    padding-bottom: 1.4rem;
                }
                .differentiator-item:hover {
                    background: #FEF9C3;
                    transform: translateX(8px);
                    box-shadow: 0 4px 18px rgba(250, 204, 21, 0.15);
                }
                .differentiator-item:hover .diff-title {
                    color: #EAB308 !important;
                }
                .differentiator-item:hover .diff-number {
                    color: #FACC15;
                    transform: scale(1.15);
                }
                .diff-title {
                    transition: color 0.3s ease;
                }
                .diff-number {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #EAB308;
                    line-height: 1;
                    padding-top: 4px;
                    transition: all 0.3s ease;
                }

                /* ===== SECTION 09: CHALLENGES ===== */
                .challenges-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.1fr;
                    gap: 4.5rem;
                    align-items: center;
                }
                @media (max-width: 992px) {
                    .challenges-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }
                .challenge-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 1rem 1.25rem;
                    border-radius: 14px;
                    transition: all 0.3s ease;
                    cursor: default;
                }
                .challenge-item:hover {
                    background: #FEF9C3;
                }

                /* ===== SECTION 10: FAQ ===== */
                .faq-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.4fr;
                    gap: 5rem;
                    align-items: start;
                }
                @media (max-width: 992px) {
                    .faq-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }
                .faq-accordion-item {
                    border-bottom: 1px solid #f1f5f9;
                    overflow: hidden;
                }
                .faq-accordion-item.active {
                    background: #fafafa;
                    border-radius: 18px;
                    border: 1px solid rgba(250, 204, 21, 0.3);
                    margin-bottom: 0.5rem;
                }
                .faq-accordion-header {
                    width: 100%;
                    background: none;
                    border: none;
                    padding: 1.4rem 1.6rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    cursor: pointer;
                    text-align: left;
                }
                .faq-accordion-body {
                    padding: 0 1.6rem 1.5rem;
                    color: #475569;
                    font-size: 1rem;
                    line-height: 1.7;
                }

                /* ===== SECTION 11: CTA BANNER ===== */
                .cta-banner {
                    background: linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0f172a 100%);
                    border-radius: 36px;
                    padding: 5rem 3rem;
                    color: #ffffff;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(2, 132, 199, 0.2);
                }
                @media (max-width: 768px) {
                    .cta-banner {
                        padding: 3.5rem 1.5rem;
                    }
                }
                .cta-banner-content {
                    max-width: 820px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }
                .cta-banner h2 {
                    font-size: clamp(2.2rem, 4vw, 3.4rem);
                    font-weight: 900;
                    line-height: 1.15;
                    margin-bottom: 1.25rem;
                    letter-spacing: -0.03em;
                    color: #ffffff;
                }
                .cta-banner p {
                    font-size: 1.2rem;
                    line-height: 1.7;
                    color: #e0f2fe;
                    margin-bottom: 2.5rem;
                }
                .cta-buttons-wrap {
                    display: flex;
                    justify-content: center;
                    gap: 1.25rem;
                    flex-wrap: wrap;
                }
                .cta-btn-primary-white {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 16px 36px;
                    background: #ffffff;
                    color: #0f172a !important;
                    border-radius: 50px;
                    font-weight: 800;
                    font-size: 1.05rem;
                    text-decoration: none;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }
                .cta-btn-primary-white:hover {
                    transform: translateY(-3px) scale(1.02);
                    background: #FEF9C3;
                    color: #1F2937 !important;
                }
                .cta-btn-secondary-glass {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 16px 32px;
                    background: rgba(255, 255, 255, 0.12);
                    color: #ffffff !important;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.05rem;
                    text-decoration: none;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }
                .cta-btn-secondary-glass:hover {
                    background: rgba(255, 255, 255, 0.22);
                    border-color: rgba(255, 255, 255, 0.5);
                    transform: translateY(-2px);
                }

                /* Animations */
                @keyframes nodeBeaconPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.4); }
                }
            `}</style>

            <div className="wad-page-wrapper">

                {/* =========================================================================
                    SECTION 01 — HERO
                ========================================================================= */}
                <section className="wad-section" style={{ paddingTop: '140px', paddingBottom: '80px', background: 'transparent' }}>
                    <div className="wad-container">
                        <div className="hero-grid">
                            <div data-aos="fade-right">
                                <span className="hero-tagline">
                                    <Globe size={16} color="#EAB308" />
                                    Web Application Development
                                </span>

                                {/* H1 — Primary SEO heading */}
                                <h1 style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                                    fontWeight: 900,
                                    lineHeight: 1.12,
                                    color: '#1e1b4b',
                                    marginBottom: '0.75rem',
                                    letterSpacing: '-0.04em'
                                }}>
                                    Web Application Development Services in <span className="gradient-text">Tamil Nadu</span>
                                </h1>

                                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e1b4b', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                                    Powerful Web Applications Built for Your Business
                                </p>

                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '560px' }}>
                                    Turn your business ideas and workflows into accessible, user-friendly web applications. FlyTowards provides web application development services for businesses across Tamil Nadu, with a focus on South Tamil Nadu.
                                    <br /><br />
                                    From customer portals and internal management systems to interactive business platforms, we develop web applications tailored to your operational needs.
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <Link to="/contact" className="home-btn-primary">
                                        Discuss Your Project <ArrowRight size={18} />
                                    </Link>
                                    <Link to="/services" className="home-btn-outline">
                                        Explore Our Services
                                    </Link>
                                </div>
                            </div>

                            <div data-aos="fade-left">
                                <div className="hero-visual-card">
                                    <img
                                        src="/services/web-app-dashboard.jpg"
                                        alt="Custom web application dashboard for business operations"
                                        onError={e => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.style.minHeight = '460px';
                                            e.target.parentNode.style.background = 'linear-gradient(135deg, #1e1b4b 0%, #0369a1 50%, #1e1b4b 100%)';
                                            e.target.parentNode.style.display = 'flex';
                                            e.target.parentNode.style.alignItems = 'center';
                                            e.target.parentNode.style.justifyContent = 'center';
                                            e.target.parentNode.innerHTML = `<div style="text-align:center;padding:3rem;">
                                                <div style="width:72px;height:72px;border-radius:20px;background:#FACC15;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;">
                                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1F2937" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                                </div>
                                                <p style="color:#e2e8f0;font-size:1rem;font-weight:700;">Web Application Platform</p>
                                                <p style="color:#94a3b8;font-size:0.88rem;margin-top:0.5rem;">Business portals &amp; digital tools</p>
                                            </div>`;
                                        }}
                                    />
                                    <div className="hero-badge-float">
                                        <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Globe size={20} color="#1F2937" />
                                        </div>
                                        <div>
                                            <p style={{ color: '#FACC15', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Browser-Based</p>
                                            <p style={{ color: '#e2e8f0', fontSize: '0.88rem', fontWeight: 600, margin: 0 }}>Custom Web App Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 02 — SERVICE OVERVIEW
                ========================================================================= */}
                <section className="wad-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="wad-container">
                        <div className="overview-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Service Overview</span>
                                <h2 className="wad-heading-h2">
                                    What Is <span className="gradient-text">Web Application Development?</span>
                                </h2>
                                <p className="wad-subtext">
                                    Web application development is the process of designing, building and maintaining interactive software applications that users access through a web browser.
                                </p>
                                <p className="wad-subtext" style={{ marginBottom: 0 }}>
                                    Unlike a standard informational website, a web application allows users to perform tasks, manage data, access dashboards and interact with business systems. Custom web app development helps businesses create digital tools that support customers, employees and operational workflows.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: '#FEF9C3', border: '1px solid rgba(250, 204, 21, 0.6)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, color: '#1F2937', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
                                    <Sparkles size={13} color="#EAB308" /> Key Highlights
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {overviewHighlights.map((item, idx) => (
                                        <div key={idx} className="key-highlight-card-web">
                                            <div className="home-icon-box">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.25rem' }}>
                                                    {item.title}
                                                </h3>
                                                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className="web-arrow-badge">
                                                <ChevronRight size={18} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 03 — OUR SERVICES
                ========================================================================= */}
                <section className="wad-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="wad-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">What We Build</span>
                            <h2 className="wad-heading-h2">
                                Our Web Application <span className="gradient-text">Development Services</span>
                            </h2>
                            <p className="wad-subtext" style={{ marginBottom: 0 }}>
                                We develop browser-based applications that help businesses manage processes, deliver digital services and improve user experiences.
                            </p>
                        </div>

                        <div className="services-grid-3x2" data-aos="fade-up">
                            {serviceCards.map((card, idx) => (
                                <Link
                                    to={card.link}
                                    key={idx}
                                    className="service-card-web"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className="svc-icon-wrap">
                                        {card.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.65rem', lineHeight: 1.35 }}>
                                        {card.title}
                                    </h3>
                                    <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                                        {card.desc}
                                    </p>
                                    <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#EAB308', fontWeight: 800, fontSize: '0.88rem' }}>
                                        Learn more <ChevronRight size={16} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 04 — BUSINESS BENEFITS
                ========================================================================= */}
                <section className="wad-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="wad-container">
                        <div className="benefits-grid">
                            {/* Left: Visual */}
                            <div data-aos="fade-right">
                                <div style={{
                                    borderRadius: '28px',
                                    overflow: 'hidden',
                                    background: 'linear-gradient(135deg, #1e1b4b 0%, #0369a1 60%, #1e1b4b 100%)',
                                    padding: '3rem 2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '420px',
                                    position: 'relative',
                                    border: '1px solid rgba(226, 232, 240, 0.2)',
                                    boxShadow: '0 25px 50px rgba(15, 23, 42, 0.12)'
                                }}>
                                    <div style={{ position: 'absolute', top: '20%', left: '10%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(250, 204, 21, 0.18) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
                                    <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 12px 30px rgba(250, 204, 21, 0.4)', zIndex: 1 }}>
                                        <MonitorSmartphone size={40} color="#1F2937" />
                                    </div>
                                    <h3 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.75rem', zIndex: 1 }}>
                                        Benefits of Custom Web Application Development
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '1rem', textAlign: 'center', lineHeight: 1.65, maxWidth: '320px', zIndex: 1 }}>
                                        Web applications help businesses deliver digital services and manage information through accessible, interactive platforms.
                                    </p>
                                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1 }}>
                                        {['Browser-Based', 'Interactive', 'Scalable'].map((tag, i) => (
                                            <span key={i} style={{ padding: '6px 14px', background: 'rgba(250, 204, 21, 0.15)', border: '1px solid rgba(250, 204, 21, 0.3)', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 700, color: '#FEF9C3' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Benefits List */}
                            <div data-aos="fade-left">
                                <span className="home-badge-tag">Why It Matters</span>
                                <h2 className="wad-heading-h2">
                                    Benefits of Custom <span className="gradient-text">Web Application Development</span>
                                </h2>
                                <div style={{ marginTop: '1.5rem' }}>
                                    {businessBenefits.map((b, idx) => (
                                        <div key={idx} className="benefit-item">
                                            <div className="benefit-icon-wrap">
                                                {b.icon}
                                            </div>
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.35rem' }}>
                                                    {b.title}
                                                </h3>
                                                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                                                    {b.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 05 — INDUSTRY SOLUTIONS
                ========================================================================= */}
                <section className="wad-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="wad-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Domain Expertise</span>
                            <h2 className="wad-heading-h2">
                                Web Application Solutions for <span className="gradient-text">Different Industries</span>
                            </h2>
                            <p className="wad-subtext" style={{ marginBottom: 0 }}>
                                Different industries need web applications that support their specific users, services and business processes.
                            </p>
                        </div>

                        {/* Interactive Industry Tabs */}
                        <div className="industry-tabs-header" data-aos="fade-up">
                            {industries.map((ind, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndustry(idx)}
                                    className={`industry-tab-btn ${activeIndustry === idx ? 'active' : ''}`}
                                    role="tab"
                                    aria-selected={activeIndustry === idx}
                                >
                                    {React.cloneElement(ind.icon, { size: 18, color: activeIndustry === idx ? '#1F2937' : '#EAB308' })}
                                    <span>{ind.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Active Industry Showcase View */}
                        <div className="industry-active-view" data-aos="fade-up">
                            <div>
                                <span className="home-badge-tag" style={{ display: 'inline-flex', marginBottom: '0.65rem' }}>
                                    {industries[activeIndustry].tag}
                                </span>
                                <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '1.15rem' }}>
                                    {industries[activeIndustry].title}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '2.25rem' }}>
                                    {industries[activeIndustry].desc}
                                </p>
                                <Link
                                    to={industries[activeIndustry].link}
                                    className="home-btn-primary"
                                    style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}
                                >
                                    Explore {industries[activeIndustry].title} Web Solutions <ChevronRight size={18} />
                                </Link>
                            </div>

                            <div style={{ background: '#FEF9C3', borderRadius: '20px', padding: '2.5rem', border: '1px solid rgba(250, 204, 21, 0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: '#FACC15', color: '#1F2937', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)' }}>
                                    {React.cloneElement(industries[activeIndustry].icon, { size: 36, color: '#1F2937' })}
                                </div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                    Web Apps for {industries[activeIndustry].title}
                                </h4>
                                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                                    Browser-based tools, role-based access, workflow management and reporting designed around real operational challenges.
                                </p>
                            </div>
                        </div>

                        {/* Search bot fallback */}
                        <div style={{ display: 'none' }}>
                            {industries.map((ind, idx) => (
                                <div key={idx}>
                                    <h3>{ind.title}</h3>
                                    <p>{ind.desc}</p>
                                    <Link to={ind.link}>{ind.title} web application solutions</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 06 — DEVELOPMENT PROCESS
                ========================================================================= */}
                <section className="wad-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="wad-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Structured Delivery</span>
                            <h2 className="wad-heading-h2">
                                Our Web Application <span className="gradient-text">Development Process</span>
                            </h2>
                            <p className="wad-subtext" style={{ marginBottom: 0 }}>
                                We follow a structured process to turn your web application requirements into a functional digital platform.
                            </p>
                        </div>

                        <div className="process-timeline" data-aos="fade-up">
                            <div className="process-steps-row">
                                {processSteps.map((step, idx) => (
                                    <div key={idx} className="process-step-node">
                                        <div className="step-circle">{step.num}</div>
                                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                                            {step.title}
                                        </h3>
                                        <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 07 — LOCATION RELEVANCE
                ========================================================================= */}
                <section className="wad-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="wad-container">
                        <div className="location-split">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Tamil Nadu Focus</span>
                                <h2 className="wad-heading-h2">
                                    Web Application Development Services in <span className="gradient-text">Tamil Nadu</span>
                                </h2>
                                <p className="wad-subtext">
                                    Businesses across Tamil Nadu increasingly use browser-based applications to manage operations, serve customers and organize business information.
                                </p>
                                <p className="wad-subtext">
                                    In South Tamil Nadu, manufacturers, distributors, healthcare organizations, educational institutions and service providers may require custom web platforms for order management, online services, customer access and administrative workflows.
                                </p>
                                <p className="wad-subtext" style={{ marginBottom: '1.5rem' }}>
                                    FlyTowards provides web application development services for businesses across Tamil Nadu, focusing on practical digital solutions aligned with their operational requirements.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ background: '#f8fafc', borderRadius: '28px', padding: '3rem 2.5rem', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                                    <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)' }}>
                                        <MapPin size={30} color="#1F2937" />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.75rem' }}>
                                        Whether you need an internal business portal or a customer-facing web platform
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                                        We focus on building functionality around your users and business goals — not generic templates.
                                    </p>
                                    <Link to="/contact" className="home-btn-primary">
                                        Discuss Your Requirements <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 08 — WHY CHOOSE FLYTOWARDS
                ========================================================================= */}
                <section className="wad-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="wad-container">
                        <div className="why-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Proven Engineering</span>
                                <h2 className="wad-heading-h2">
                                    Why Choose FlyTowards for <span className="gradient-text">Web Application Development?</span>
                                </h2>
                                <p className="wad-subtext">
                                    Choosing a web application development partner requires more than comparing web programming technologies. The right solution should support your business workflows and provide a useful experience for its intended users.
                                </p>
                                <Link to="/contact" className="home-btn-primary">
                                    Talk to Our Team <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {whyChoosePoints.map((item, idx) => (
                                        <div key={idx} className="differentiator-item">
                                            <div className="diff-number">
                                                {item.num}
                                            </div>
                                            <div>
                                                <h3 className="diff-title" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.4rem' }}>
                                                    {item.title}
                                                </h3>
                                                <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 09 — BUSINESS CHALLENGES
                ========================================================================= */}
                <section className="wad-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="wad-container">
                        <div className="challenges-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Operational Diagnostic</span>
                                <h2 className="wad-heading-h2">
                                    When Does Your Business Need a <span className="gradient-text">Custom Web Application?</span>
                                </h2>
                                <p className="wad-subtext">
                                    A custom web application may be suitable when your business needs interactive functionality beyond a standard website.
                                </p>
                                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    If these challenges affect your business, custom web application development may provide a more suitable solution.
                                </p>
                                <Link to="/contact" className="home-btn-primary">
                                    Discuss Your Web Application Requirements <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {challenges.map((item, idx) => (
                                        <div key={idx} className="challenge-item">
                                            <div style={{ width: '28px', height: '28px', minWidth: '28px', borderRadius: '8px', background: '#FEF9C3', border: '1px solid rgba(250, 204, 21, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Check size={16} color="#EAB308" strokeWidth={3} />
                                            </div>
                                            <p style={{ fontSize: '1rem', color: '#1e1b4b', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 10 — FAQ
                ========================================================================= */}
                <section className="wad-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="wad-container">
                        <div className="faq-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Clear Answers</span>
                                <h2 className="wad-heading-h2">
                                    Frequently Asked Questions About <span className="gradient-text">Web Application Development</span>
                                </h2>
                                <p className="wad-subtext">
                                    Key considerations around browser-based platforms, integrations, costs and web vs. mobile development in Tamil Nadu.
                                </p>
                                <div style={{ background: '#ffffff', borderRadius: '20px', padding: '1.75rem', border: '1px solid rgba(250, 204, 21, 0.3)', marginTop: '1.5rem' }}>
                                    <p style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                        Need a technical consultation?
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1rem' }}>
                                        Our web application architects in Tamil Nadu are ready to evaluate your requirements and offer practical recommendations.
                                    </p>
                                    <Link to="/contact" style={{ color: '#EAB308', fontWeight: 800, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                                        Contact our engineering desk <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div data-aos="fade-left">
                                {faqList.map((faq, idx) => (
                                    <div
                                        key={idx}
                                        className={`faq-accordion-item ${openFaq === idx ? 'active' : ''}`}
                                    >
                                        <button
                                            className="faq-accordion-header"
                                            onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                                            aria-expanded={openFaq === idx}
                                        >
                                            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: openFaq === idx ? '#EAB308' : '#1e1b4b', lineHeight: 1.4 }}>
                                                {faq.q}
                                            </h3>
                                            <ChevronDown
                                                size={20}
                                                style={{
                                                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s ease',
                                                    minWidth: '20px',
                                                    color: openFaq === idx ? '#EAB308' : '#64748b'
                                                }}
                                            />
                                        </button>
                                        {openFaq === idx && (
                                            <div className="faq-accordion-body">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 11 — FINAL CTA (ORIGINAL PROVEN HIGH-CONTRAST BANNER)
                ========================================================================= */}
                <section className="wad-section" style={{ background: '#f8fafc', paddingBottom: '120px' }}>
                    <div className="wad-container">
                        <div className="cta-banner" data-aos="zoom-in">
                            <div className="cta-banner-content">
                                <span className="home-badge-tag" style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#e0f2fe' }}>
                                    Start Your Project
                                </span>

                                <h2>Turn Your Business Idea into a Powerful Web Application</h2>

                                <p>
                                    Need a customer portal, internal business platform or custom web application? FlyTowards helps businesses explore web and app development solutions designed around their users, workflows and operational requirements. Share your project requirements and take the next step toward a practical digital solution.
                                </p>

                                <div className="cta-buttons-wrap">
                                    <Link to="/contact" className="cta-btn-primary-white">
                                        Discuss Your Web App Project <ArrowRight size={18} />
                                    </Link>

                                    <Link to="/contact" className="cta-btn-secondary-glass">
                                        Request a Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
};

export default WebAppDev;
