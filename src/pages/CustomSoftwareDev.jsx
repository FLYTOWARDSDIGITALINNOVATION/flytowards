import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CheckCircle2,
    Check,
    ChevronDown,
    ChevronRight,
    Layers,
    Workflow,
    Building2,
    Stethoscope,
    ShoppingBag,
    GraduationCap,
    HardHat,
    Truck,
    ShieldCheck,
    BarChart3,
    Database,
    Sparkles,
    RefreshCw,
    Globe,
    Cpu,
    MonitorSmartphone,
    LayoutDashboard,
    Zap,
    MapPin,
    Sliders,
    TrendingUp,
    Send
} from 'lucide-react';

const CustomSoftwareDev = () => {
    // FAQ Accordion State (first open by default)
    const [openFaq, setOpenFaq] = useState(0);

    // Active Industry Tab for Section 05
    const [activeIndustry, setActiveIndustry] = useState(2); // Default selected tab: Retail & Wholesale

    useEffect(() => {
        window.scrollTo(0, 0);

        // SEO Title
        document.title = "Custom Software Development Services in Tamil Nadu | FlyTowards";

        // Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute(
            "content",
            "Custom software development services in Tamil Nadu. FlyTowards builds tailored business applications to automate workflows and support growth."
        );

        // Meta Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = "keywords";
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute(
            "content",
            "custom software development services, custom software development companies, custom software development agency, custom software development firms, bespoke software development"
        );

        // Robots
        let robots = document.querySelector('meta[name="robots"]');
        if (!robots) {
            robots = document.createElement('meta');
            robots.name = "robots";
            document.head.appendChild(robots);
        }
        robots.setAttribute("content", "index, follow");

        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }
        canonical.setAttribute(
            "href",
            "https://flytowardsdigitalinnovation.com/services/custom-software-development/"
        );

        // Inject Structured Data (Schema.org: Service, Organization, BreadcrumbList, FAQPage)
        const schemaId = 'custom-software-schema-script';
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
                    "@id": "https://flytowardsdigitalinnovation.com/services/custom-software-development/#service",
                    "name": "Custom Software Development Services",
                    "serviceType": "Bespoke Software Development",
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
                    "description": "Tailored business software development services in Tamil Nadu. FlyTowards develops bespoke web platforms, enterprise management systems, and workflow automation.",
                    "url": "https://flytowardsdigitalinnovation.com/services/custom-software-development/"
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": "https://flytowardsdigitalinnovation.com/services/custom-software-development/#breadcrumb",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://flytowardsdigitalinnovation.com/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Services",
                            "item": "https://flytowardsdigitalinnovation.com/services"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Custom Software Development",
                            "item": "https://flytowardsdigitalinnovation.com/services/custom-software-development/"
                        }
                    ]
                },
                {
                    "@type": "FAQPage",
                    "@id": "https://flytowardsdigitalinnovation.com/services/custom-software-development/#faq",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What are custom software development services?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Custom software development services involve designing, building, testing, deploying, and maintaining applications tailored to specific business requirements."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does custom software development cost in Tamil Nadu?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Costs depend on application features, technical complexity, integrations, and project scope. A requirement assessment helps determine the development budget."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does custom software development take?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Timelines vary depending on functionality, project complexity, integrations, and testing requirements."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What is bespoke software development?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Bespoke software development means creating software specifically for an organization's unique workflows and operational requirements."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can custom software integrate with existing applications?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. Integration is often possible through APIs or other supported methods, depending on technical compatibility."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How do I choose a custom software development agency?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Evaluate relevant experience, technical capabilities, communication, development processes, testing practices, and maintenance options."
                            }
                        }
                    ]
                }
            ]
        };

        schemaScript.textContent = JSON.stringify(structuredData);

        return () => {
            const existingScript = document.getElementById(schemaId);
            if (existingScript) existingScript.remove();
        };
    }, []);

    // Section 02 Icon List Data
    const overviewHighlights = [
        {
            title: "Tailored Workflows",
            desc: "Software designed around your business processes.",
            icon: <Sliders size={24} color="#EAB308" />
        },
        {
            title: "Workflow Automation",
            desc: "Reduce repetitive manual activities.",
            icon: <Zap size={24} color="#EAB308" />
        },
        {
            title: "Connected Systems",
            desc: "Improve information flow between compatible applications.",
            icon: <Workflow size={24} color="#EAB308" />
        },
        {
            title: "Future Flexibility",
            desc: "Adapt functionality as business requirements evolve.",
            icon: <TrendingUp size={24} color="#EAB308" />
        }
    ];

    // Section 03 Six Services Cards
    const serviceCards = [
        {
            id: '01',
            title: "Custom Business Software Development",
            desc: "Applications for inventory, billing, CRM, order management, and everyday business operations.",
            icon: <LayoutDashboard size={30} color="#EAB308" />,
            link: "/services"
        },
        {
            id: '02',
            title: "Enterprise Software Development",
            desc: "Centralized applications for managing departments, workflows, approvals, and reporting.",
            icon: <Building2 size={30} color="#EAB308" />,
            link: "/services/enterprise-software-development"
        },
        {
            id: '03',
            title: "Web Application Development",
            desc: "Browser-based platforms, customer portals, employee dashboards, and administrative systems.",
            icon: <MonitorSmartphone size={30} color="#EAB308" />,
            link: "/services/web-application-development"
        },
        {
            id: '04',
            title: "SaaS Application Development",
            desc: "Online software products with user management, subscription functionality, and administrative controls.",
            icon: <Globe size={30} color="#EAB308" />,
            link: "/services/saas-development"
        },
        {
            id: '05',
            title: "Software Integration & Automation",
            desc: "Connect compatible applications, synchronize data, and automate repetitive workflows.",
            icon: <Cpu size={30} color="#EAB308" />,
            link: "/services/business-process-automation"
        },
        {
            id: '06',
            title: "Software Maintenance & Modernization",
            desc: "Improve existing applications, update functionality, and address changing business requirements.",
            icon: <RefreshCw size={30} color="#EAB308" />,
            link: "/services/software-maintenance-support"
        }
    ];

    // Section 04 Business Benefits Data
    const businessBenefits = [
        {
            title: "Simplify Business Operations",
            desc: "Bring important workflows into a structured application and reduce dependence on disconnected tools.",
            icon: <Layers size={22} color="#EAB308" />
        },
        {
            title: "Reduce Manual Work",
            desc: "Automate repetitive activities such as data entry, reporting, and internal notifications.",
            icon: <Zap size={22} color="#EAB308" />
        },
        {
            title: "Improve Business Visibility",
            desc: "Access relevant operational information through centralized records and reporting dashboards.",
            icon: <BarChart3 size={22} color="#EAB308" />
        },
        {
            title: "Support Future Growth",
            desc: "Plan software functionality that can evolve alongside your business requirements.",
            icon: <Sparkles size={22} color="#EAB308" />
        }
    ];

    // Section 05 Industry Solutions Data
    const industries = [
        {
            title: "Manufacturing",
            desc: "Production tracking, inventory management, purchase orders, and dispatch coordination.",
            icon: <HardHat size={16} />,
            link: "/industries/manufacturing",
            tag: "SHOP FLOOR & PRODUCTION"
        },
        {
            title: "Healthcare",
            desc: "Appointment scheduling, patient administration, billing, and internal management.",
            icon: <Stethoscope size={16} />,
            link: "/industries/healthcare",
            tag: "CLINICAL & RECORDS"
        },
        {
            title: "Retail & Wholesale",
            desc: "Integrated systems for sales, purchasing, stock management, customer accounts and multi-branch operations.",
            icon: <ShoppingBag size={16} />,
            link: "/industries/retail",
            tag: "MULTI-STORE & POS"
        },
        {
            title: "Education",
            desc: "Student information, attendance tracking, fee management, and administrative reporting.",
            icon: <GraduationCap size={16} />,
            link: "/industries/education",
            tag: "INSTITUTES & ACADEMICS"
        },
        {
            title: "Construction",
            desc: "Project tracking, material management, expenses, and operational reporting.",
            icon: <Building2 size={16} />,
            link: "/industries/construction",
            tag: "SITES & COST CONTROL"
        },
        {
            title: "Logistics & Transportation",
            desc: "Shipment records, dispatch management, delivery updates, and transport administration.",
            icon: <Truck size={16} />,
            link: "/industries/logistics",
            tag: "FLEET & CONSIGNMENTS"
        }
    ];

    // Section 06 Development Process Steps
    const processSteps = [
        {
            num: "01",
            title: "Requirement Analysis",
            desc: "Understand your business workflows, challenges, users, and project goals."
        },
        {
            num: "02",
            title: "Planning & UI/UX Design",
            desc: "Define application functionality, user experience, and technical requirements."
        },
        {
            num: "03",
            title: "Software Development",
            desc: "Develop the application according to the agreed project scope."
        },
        {
            num: "04",
            title: "Testing & Quality Assurance",
            desc: "Review functionality, identify issues, and verify important workflows."
        },
        {
            num: "05",
            title: "Deployment & Implementation",
            desc: "Prepare and implement the application in its intended environment."
        },
        {
            num: "06",
            title: "Maintenance & Support",
            desc: "Plan updates, improvements, and future enhancements."
        }
    ];

    // Section 08 Why Choose Differentiators
    const whyChoosePoints = [
        {
            num: "01",
            title: "Business-First Approach",
            desc: "We focus on understanding your business challenges before defining software functionality."
        },
        {
            num: "02",
            title: "Tailored Development",
            desc: "Applications are planned around your workflows, users, and operational priorities."
        },
        {
            num: "03",
            title: "End-to-End Software Services",
            desc: "Our service portfolio covers software planning, development, implementation, and maintenance."
        },
        {
            num: "04",
            title: "Practical Business Solutions",
            desc: "We focus on software that helps organize information, simplify workflows, and support daily operations."
        }
    ];

    // Section 09 Checklist Data
    const challengeChecklist = [
        "Your business relies heavily on spreadsheets and manual data entry.",
        "Existing software cannot handle specialized workflows.",
        "Departments work with disconnected applications.",
        "Business reports are difficult to access or consolidate.",
        "Your organization requires custom integrations or functionality.",
        "Existing systems are difficult to maintain or expand."
    ];

    // Section 10 FAQs Data
    const faqList = [
        {
            q: "What are custom software development services?",
            a: "Custom software development services involve designing, building, testing, deploying, and maintaining applications tailored to specific business requirements."
        },
        {
            q: "How much does custom software development cost in Tamil Nadu?",
            a: "Costs depend on application features, technical complexity, integrations, and project scope. A requirement assessment helps determine the development budget."
        },
        {
            q: "How long does custom software development take?",
            a: "Timelines vary depending on functionality, project complexity, integrations, and testing requirements."
        },
        {
            q: "What is bespoke software development?",
            a: "Bespoke software development means creating software specifically for an organization's unique workflows and operational requirements."
        },
        {
            q: "Can custom software integrate with existing applications?",
            a: "Yes. Integration is often possible through APIs or other supported methods, depending on technical compatibility."
        },
        {
            q: "How do I choose a custom software development agency?",
            a: "Evaluate relevant experience, technical capabilities, communication, development processes, testing practices, and maintenance options."
        }
    ];

    const activeIndData = industries[activeIndustry];
    const isEvenIndex = activeIndustry % 2 === 0;

    return (
        <main style={{ background: '#ffffff', color: '#1e293b', fontFamily: "'Outfit', sans-serif", position: 'relative', overflowX: 'hidden' }}>
            {/* Ambient Home Theme Background Lights */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.08) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

                .csd-page-wrapper {
                    position: relative;
                    z-index: 1;
                }

                .csd-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }

                .csd-section {
                    padding: 80px 0;
                    position: relative;
                }

                @media (max-width: 768px) {
                    .csd-section {
                        padding: 55px 0;
                    }
                }

                /* Section Tag matching Home page .section-tag-featured */
                .home-badge-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 0.6rem 1.6rem;
                    border-radius: 9999px;
                    background: #FEF9C3;
                    border: 1.5px solid rgba(250, 204, 21, 0.5);
                    color: #1F2937;
                    font-size: 0.88rem;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    box-shadow: 0 4px 18px rgba(250, 204, 21, 0.2);
                    margin-bottom: 1.5rem;
                    transition: all 0.3s ease;
                }
                .csd-page-wrapper .home-badge-tag {
                    padding: 6px 14px !important;
                    color: #1e1b4b !important;
                    font-size: 0.75rem !important;
                    letter-spacing: 0.1em !important;
                    background: #fff7cc !important;
                    border: 1px solid #facc15 !important;
                }
                .home-badge-tag:hover {
                    background: #FACC15;
                    color: #1F2937;
                    border-color: #FACC15;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(250, 204, 21, 0.35);
                }

                /* Custom Page Signature Animations: Bespoke / Fluid Agility */
                @keyframes floatBespoke {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(0.8deg); }
                }

                @keyframes shimmerBeam {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }

                /* Heading 2 */
                .csd-heading-h2 {
                    font-family: 'Outfit', sans-serif;
                    font-size: clamp(2rem, 3.5vw, 2.85rem);
                    font-weight: 800;
                    line-height: 1.25;
                    color: #1e1b4b;
                    margin-bottom: 1.2rem;
                    letter-spacing: -0.03em;
                }

                .csd-subtext {
                    font-size: 1.1rem;
                    color: #64748b;
                    line-height: 1.75;
                    margin-bottom: 2rem;
                }

                /* Buttons matching Home Hero Primary & Secondary */
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
                    justify-content: center;
                    gap: 10px;
                    box-shadow: 0 8px 25px rgba(250, 204, 21, 0.35);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: none;
                    cursor: pointer;
                }
                .home-btn-primary:hover {
                    background: #FDE047 !important;
                    color: #1F2937 !important;
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 12px 35px rgba(250, 204, 21, 0.5);
                }

                .home-btn-outline {
                    border: 2px solid #cbd5e1;
                    color: #1F2937 !important;
                    padding: 1.05rem 2.2rem;
                    border-radius: 9999px;
                    font-size: 1rem;
                    font-weight: 700;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: #ffffff;
                    transition: all 0.3s ease;
                }
                .home-btn-outline:hover {
                    border-color: #FACC15;
                    background: #FEF9C3;
                    transform: translateY(-2px);
                }

                /* HERO SECTION */
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 0.85fr;
                    gap: 4rem;
                    align-items: center;
                }
                @media (max-width: 992px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }

                .hero-visual-card {
                    position: relative;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px rgba(15, 23, 42, 0.08);
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    background: #ffffff;
                    animation: floatBespoke 6s ease-in-out infinite;
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
                    border: 1px solid rgba(250, 204, 21, 0.35);
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    transition: transform 0.3s ease;
                }
                .hero-visual-card:hover .hero-badge-float {
                    transform: translateY(-4px);
                    border-color: #FACC15;
                }

                /* SECTION 02: OVERVIEW & KEY HIGHLIGHTS */
                .overview-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                @media (max-width: 992px) {
                    .overview-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }

                .key-highlight-card {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1.25rem;
                    padding: 1.2rem 1.4rem;
                    background: #ffffff;
                    border-radius: 20px;
                    border: 1.5px solid rgba(226, 232, 240, 0.9);
                    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.02);
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                }
                .key-highlight-card::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: #FACC15;
                    transform: scaleY(0);
                    transition: transform 0.3s ease;
                }
                .key-highlight-card:hover {
                    transform: translateX(12px);
                    background: linear-gradient(135deg, #FEF9C3 0%, #FFFFFF 100%);
                    border-color: #FACC15;
                    box-shadow: 0 12px 30px rgba(250, 204, 21, 0.22);
                }
                .key-highlight-card:hover::before {
                    transform: scaleY(1);
                }
                .key-highlight-card:hover .home-icon-box {
                    transform: scale(1.15) rotate(6deg);
                    background: #FACC15;
                    box-shadow: 0 6px 16px rgba(250, 204, 21, 0.4);
                }
                .key-highlight-card:hover .key-arrow-cue {
                    opacity: 1;
                    transform: translateX(0);
                    color: #EAB308;
                }

                .key-arrow-cue {
                    opacity: 0;
                    transform: translateX(-8px);
                    transition: all 0.3s ease;
                    color: #94a3b8;
                    display: flex;
                    align-items: center;
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

                /* SECTION 03: SERVICES 3x2 GRID */
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

                .service-card-item {
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 2rem 1.75rem;
                    border: 1px solid rgba(226, 232, 240, 0.85);
                    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                }
                .service-card-item::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 20px;
                    right: 20px;
                    height: 3px;
                    background: linear-gradient(90deg, #FACC15, #EAB308);
                    border-radius: 3px;
                    transform: scaleX(0);
                    transition: transform 0.35s ease;
                }
                .service-card-item:hover {
                    transform: translateY(-10px) scale(1.01);
                    border-color: rgba(250, 204, 21, 0.7);
                    box-shadow: 0 20px 40px rgba(250, 204, 21, 0.15);
                }
                .service-card-item:hover::after {
                    transform: scaleX(1);
                }
                .service-card-item:hover .home-icon-box {
                    transform: rotate(-6deg) scale(1.1);
                }

                /* SECTION 04: BENEFITS */
                .benefits-grid {
                    display: grid;
                    grid-template-columns: 0.95fr 1.05fr;
                    gap: 4rem;
                    align-items: center;
                }
                @media (max-width: 992px) {
                    .benefits-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }

                /* SECTION 05: COMPACT ONE-ROW TABS & ALTERNATING LAYOUT */
                .industry-tabs-scroll {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    flex-wrap: nowrap;
                    overflow-x: auto;
                    padding-bottom: 8px;
                    margin-bottom: 2.5rem;
                }

                .ind-tab-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.45rem;
                    padding: 0.55rem 1rem;
                    border-radius: 9999px;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    color: #334155;
                    font-size: 0.84rem;
                    font-weight: 700;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.25s ease;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
                }

                .ind-tab-pill:hover {
                    border-color: #facc15;
                    background: #fffef0;
                }

                .ind-tab-pill.active {
                    background: #facc15;
                    color: #0f172a;
                    border-color: #facc15;
                    box-shadow: 0 4px 12px rgba(250, 204, 21, 0.35);
                }

                .ind-tab-pill.active svg {
                    stroke: #0f172a;
                }

                .industry-content-container {
                    background: #ffffff;
                    border-radius: 28px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
                    padding: 3rem;
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 3rem;
                    align-items: center;
                }

                @media (max-width: 900px) {
                    .industry-content-container {
                        grid-template-columns: 1fr !important;
                        padding: 2rem 1.5rem;
                        gap: 2rem;
                    }
                }

                .ind-yellow-box {
                    background: #fffbeb;
                    border: 1.5px solid #fde68a;
                    border-radius: 24px;
                    padding: 3.2rem 2.2rem;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .ind-yellow-icon-wrapper {
                    width: 64px;
                    height: 64px;
                    border-radius: 18px;
                    background: #facc15;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 8px 18px rgba(250, 204, 21, 0.25);
                }

                /* SECTION 06: PROCESS TIMELINE */
                .process-timeline {
                    position: relative;
                    margin-top: 3rem;
                }
                @media (min-width: 993px) {
                    .process-steps-row {
                        display: grid;
                        grid-template-columns: repeat(6, 1fr);
                        gap: 1.25rem;
                        position: relative;
                    }
                    .process-steps-row::before {
                        content: '';
                        position: absolute;
                        top: 26px;
                        left: 35px;
                        right: 35px;
                        height: 3.5px;
                        background: linear-gradient(90deg, #FACC15 0%, #EAB308 50%, #FEF9C3 75%, #FACC15 100%);
                        background-size: 200% 100%;
                        animation: shimmerBeam 4s linear infinite;
                        z-index: 1;
                    }
                    .process-step-node {
                        position: relative;
                        z-index: 2;
                        text-align: center;
                    }
                    .process-number-circle {
                        width: 54px;
                        height: 54px;
                        border-radius: 50%;
                        background: #ffffff;
                        border: 3px solid #FACC15;
                        color: #1e1b4b;
                        font-weight: 800;
                        font-size: 1.15rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 1.25rem;
                        box-shadow: 0 6px 16px rgba(250, 204, 21, 0.25);
                        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .process-step-node:hover .process-number-circle {
                        background: #FACC15;
                        color: #1F2937;
                        transform: scale(1.15) rotate(4deg);
                        box-shadow: 0 10px 24px rgba(250, 204, 21, 0.45);
                    }
                }
                @media (max-width: 992px) {
                    .process-steps-row {
                        display: flex;
                        flex-direction: column;
                        gap: 1.75rem;
                        position: relative;
                        padding-left: 2rem;
                    }
                    .process-steps-row::before {
                        content: '';
                        position: absolute;
                        top: 15px;
                        bottom: 15px;
                        left: 26px;
                        width: 3px;
                        background: linear-gradient(180deg, #FACC15 0%, #EAB308 100%);
                        z-index: 1;
                    }
                    .process-step-node {
                        position: relative;
                        z-index: 2;
                        display: flex;
                        align-items: flex-start;
                        gap: 1.25rem;
                    }
                    .process-number-circle {
                        width: 48px;
                        height: 48px;
                        min-width: 48px;
                        border-radius: 50%;
                        background: #ffffff;
                        border: 3px solid #FACC15;
                        color: #1e1b4b;
                        font-weight: 800;
                        font-size: 1rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 12px rgba(250, 204, 21, 0.25);
                    }
                }

                /* SECTION 07: LOCATION RELEVANCE */
                .location-box {
                    background: #1e1b4b;
                    border-radius: 32px;
                    padding: 4.5rem 3.5rem;
                    color: #ffffff;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 20px 50px rgba(30, 27, 75, 0.15);
                }
                @media (max-width: 768px) {
                    .location-box {
                        padding: 3rem 1.75rem;
                    }
                }
                .location-box::after {
                    content: '';
                    position: absolute;
                    top: -80px;
                    right: -80px;
                    width: 360px;
                    height: 360px;
                    background: radial-gradient(circle, rgba(250, 204, 21, 0.18) 0%, transparent 70%);
                    pointer-events: none;
                }
                .location-city-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 2rem;
                }
                .city-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 8px 16px;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(250, 204, 21, 0.35);
                    border-radius: 50px;
                    font-size: 0.9rem;
                    color: #FEF9C3;
                    font-weight: 600;
                }

                /* SECTION 08: WHY CHOOSE FLYTOWARDS */
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

                /* SECTION 09: BUSINESS CHALLENGES */
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
                .checklist-container {
                    background: #ffffff;
                    border-radius: 24px;
                    border: 1px solid rgba(226, 232, 240, 0.9);
                    padding: 2.5rem 2.25rem;
                    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.03);
                }
                .checklist-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 1.15rem;
                }
                .checklist-item:last-child {
                    margin-bottom: 0;
                }
                .check-circle {
                    width: 24px;
                    height: 24px;
                    min-width: 24px;
                    border-radius: 50%;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.5);
                    color: #1F2937;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 2px;
                }

                /* SECTION 10: FAQ ACCORDION */
                .faq-grid {
                    display: grid;
                    grid-template-columns: 0.9fr 1.1fr;
                    gap: 4.5rem;
                    align-items: flex-start;
                }
                @media (max-width: 992px) {
                    .faq-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }
                .faq-accordion-item {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 18px;
                    margin-bottom: 1rem;
                    overflow: hidden;
                    transition: all 0.25s ease;
                }
                .faq-accordion-item.active {
                    border-color: rgba(250, 204, 21, 0.8);
                    box-shadow: 0 4px 18px rgba(250, 204, 21, 0.12);
                }
                .faq-accordion-header {
                    width: 100%;
                    padding: 1.35rem 1.6rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    background: none;
                    border: none;
                    text-align: left;
                    cursor: pointer;
                    font-family: inherit;
                }
                .faq-accordion-body {
                    padding: 0 1.6rem 1.5rem;
                    color: #475569;
                    font-size: 1rem;
                    line-height: 1.7;
                }

                /* SECTION 11: FULL-WIDTH CTA BANNER */
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
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.05rem;
                    text-decoration: none;
                    border: 1.5px solid rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }
                .cta-btn-secondary-glass:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }
            `}</style>

            <div className="csd-page-wrapper">
                {/* =========================================================================
                    SECTION 01 — HERO
                ========================================================================= */}
                <section className="csd-section" style={{ paddingTop: '140px', paddingBottom: '80px', background: 'transparent' }}>
                    <div className="csd-container">
                        <div className="hero-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">
                                    <Zap size={15} color="#EAB308" style={{ fill: '#EAB308' }} /> Software Built Around Your Business
                                </span>

                                <h1 style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                                    fontWeight: 800,
                                    lineHeight: 1.18,
                                    color: '#1e1b4b',
                                    marginBottom: '1.25rem',
                                    letterSpacing: '-0.03em'
                                }}>
                                    Custom Software Development Services in <span className="gradient-text">Tamil Nadu</span>
                                </h1>

                                <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e1b4b', marginBottom: '1.25rem', lineHeight: 1.4 }}>
                                    Software Built Around Your Business, Not the Other Way Around
                                </p>

                                <p style={{ fontSize: '1.08rem', color: '#1F2937', lineHeight: 1.75, marginBottom: '1.25rem', fontWeight: 500 }}>
                                    Streamline operations, reduce manual work, and connect business processes with custom-built software. FlyTowards develops tailored business applications for organizations across Tamil Nadu, with a focus on South Tamil Nadu.
                                </p>

                                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                                    From internal management systems to enterprise applications, we help turn your business requirements into practical digital solutions.
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <Link to="/contact" className="home-btn-primary">
                                        Discuss Your Project <ArrowRight size={18} />
                                    </Link>
                                    <a href="#services" className="home-btn-outline">
                                        Explore Our Services
                                    </a>
                                </div>
                            </div>

                            <div data-aos="fade-left">
                                <div className="hero-visual-card">
                                    <img
                                        src="/custom-software-dev.jpg"
                                        alt="Custom software dashboard for managing business operations"
                                        loading="eager"
                                    />
                                    <div className="hero-badge-float">
                                        <div style={{ width: '40px', height: '40px', minWidth: '40px', borderRadius: '12px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <ShieldCheck size={22} color="#1F2937" />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#ffffff' }}>Bespoke Software Engineering</div>
                                            <div style={{ fontSize: '0.8rem', color: '#FEF9C3' }}>Designed specifically for Tamil Nadu businesses</div>
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
                <section className="csd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="csd-container">
                        <div className="overview-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Service Overview</span>
                                <h2 className="csd-heading-h2">
                                    What Is <span className="gradient-text">Custom Software Development?</span>
                                </h2>
                                <p style={{ fontSize: '1.12rem', color: '#1e1b4b', fontWeight: 600, lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    Custom software development is the process of designing and building applications specifically for an organization's workflows, operational challenges, and business goals.
                                </p>
                                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.8 }}>
                                    Unlike ready-made software, bespoke software development allows businesses to prioritize the features, integrations, and functionality they actually need.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '4px 12px',
                                        background: '#FEF9C3',
                                        border: '1px solid rgba(250, 204, 21, 0.6)',
                                        borderRadius: '50px',
                                        fontSize: '0.8rem',
                                        fontWeight: 800,
                                        color: '#1F2937',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em'
                                    }}>
                                        <Sparkles size={13} color="#EAB308" /> Key Highlights
                                    </span>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {overviewHighlights.map((item, idx) => (
                                        <div key={idx} className="key-highlight-card">
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }}>
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
                                            </div>
                                            <div className="key-arrow-cue">
                                                <ChevronRight size={20} />
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
                <section id="services" className="csd-section" style={{ background: '#ffffff' }}>
                    <div className="csd-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Solutions Portfolio</span>
                            <h2 className="csd-heading-h2">
                                Our Custom Software <span className="gradient-text">Development Services</span>
                            </h2>
                            <p className="csd-subtext" style={{ marginBottom: 0 }}>
                                We develop software solutions to help businesses manage operations, organize information, and address specialized requirements.
                            </p>
                        </div>

                        <div className="services-grid-3x2">
                            {serviceCards.map((service, index) => (
                                <div
                                    key={index}
                                    className="service-card-item"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                >
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                                            <div className="home-icon-box" style={{ width: '54px', height: '54px' }}>
                                                {service.icon}
                                            </div>
                                            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#EAB308', background: '#FEF9C3', padding: '4px 10px', borderRadius: '50px' }}>
                                                SERVICE {service.id}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                                            {service.title}
                                        </h3>
                                        <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                                            {service.desc}
                                        </p>
                                    </div>

                                    <Link
                                        to={service.link}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '6px',
                                            width: '100%',
                                            padding: '0.65rem 1.25rem',
                                            borderRadius: '50px',
                                            background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 60%, #CBD5E1 100%)',
                                            border: '1px solid #94A3B8',
                                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 3px 8px rgba(0, 0, 0, 0.08)',
                                            color: '#1F2937',
                                            fontSize: '0.9rem',
                                            fontWeight: 800,
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            marginTop: 'auto'
                                        }}
                                    >
                                        Learn More <ArrowRight size={15} color="#1F2937" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 04 — BUSINESS BENEFITS
                ========================================================================= */}
                <section className="csd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="csd-container">
                        <div className="benefits-grid">
                            <div data-aos="fade-right">
                                <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)', border: '1px solid #e2e8f0' }}>
                                    <img
                                        src="/serviceprocessdev.webp"
                                        alt="Business workflow automation through custom software"
                                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>

                            <div data-aos="fade-left">
                                <span className="home-badge-tag">Strategic Value</span>
                                <h2 className="csd-heading-h2">
                                    Benefits of <span className="gradient-text">Custom Software Development</span>
                                </h2>
                                <p className="csd-subtext" style={{ marginBottom: '2rem' }}>
                                    Custom software helps businesses address operational challenges through applications designed around their specific requirements.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    {businessBenefits.map((benefit, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
                                            <div className="home-icon-box" style={{ width: '42px', height: '42px', minWidth: '42px' }}>
                                                {benefit.icon}
                                            </div>
                                            <div>
                                                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.35rem' }}>
                                                    {benefit.title}
                                                </h3>
                                                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                                                    {benefit.desc}
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
                    SECTION 05 — INDUSTRY SOLUTIONS (COMPACT ONE-ROW TABS + ALTERNATING LAYOUT)
                ========================================================================= */}
                <section className="csd-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="csd-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }} data-aos="fade-up">
                            <h2 className="csd-heading-h2" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
                                Custom Software Solutions for <span style={{ color: '#facc15' }}>Different Industries</span>
                            </h2>
                        </div>

                        {/* Compact Single-Row Industry Tab Bar */}
                        <div className="industry-tabs-scroll" data-aos="fade-up">
                            {industries.map((ind, idx) => (
                                <button
                                    key={idx}
                                    className={`ind-tab-pill ${activeIndustry === idx ? 'active' : ''}`}
                                    onClick={() => setActiveIndustry(idx)}
                                >
                                    {ind.icon}
                                    {ind.title}
                                </button>
                            ))}
                        </div>

                        {/* Active Industry Content (Alternates sides automatically based on even/odd index) */}
                        <div
                            className="industry-content-container"
                            style={{
                                gridTemplateColumns: isEvenIndex ? '1.1fr 0.9fr' : '0.9fr 1.1fr'
                            }}
                            data-aos="fade-up"
                        >
                            {/* Left Column depending on Even/Odd */}
                            {isEvenIndex ? (
                                /* Even Index (e.g. Manufacturing, Retail, Construction): Text Left, Box Right */
                                <>
                                    <div>
                                        <span style={{
                                            display: 'inline-block',
                                            color: '#eab308',
                                            fontWeight: 800,
                                            fontSize: '0.85rem',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            marginBottom: '1rem'
                                        }}>
                                            {activeIndData.tag}
                                        </span>

                                        <h3 style={{
                                            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                                            fontWeight: 900,
                                            color: '#0f172a',
                                            marginBottom: '1.25rem',
                                            lineHeight: 1.15
                                        }}>
                                            {activeIndData.title}
                                        </h3>

                                        <p style={{
                                            fontSize: '1.05rem',
                                            color: '#475569',
                                            lineHeight: 1.7,
                                            marginBottom: '2rem'
                                        }}>
                                            {activeIndData.desc}
                                        </p>

                                        <Link
                                            to={activeIndData.link}
                                            className="home-btn-primary"
                                            style={{
                                                padding: '0.95rem 1.8rem',
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            Explore {activeIndData.title} Enterprise Systems <ChevronRight size={18} />
                                        </Link>
                                    </div>

                                    <div className="ind-yellow-box">
                                        <div className="ind-yellow-icon-wrapper">
                                            {React.cloneElement(activeIndData.icon, { size: 32, color: '#0f172a' })}
                                        </div>

                                        <h4 style={{
                                            fontSize: '1.35rem',
                                            fontWeight: 900,
                                            color: '#0f172a',
                                            marginBottom: '0.85rem',
                                            lineHeight: 1.3
                                        }}>
                                            Enterprise-Grade for {activeIndData.title}
                                        </h4>

                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: '#475569',
                                            lineHeight: 1.65,
                                            margin: 0
                                        }}>
                                            Multi-department visibility, approval hierarchies, and secure data pipelines aligned with industry requirements.
                                        </p>
                                    </div>
                                </>
                            ) : (
                                /* Odd Index (e.g. Healthcare, Education, Logistics): Box Left, Text Right */
                                <>
                                    <div className="ind-yellow-box">
                                        <div className="ind-yellow-icon-wrapper">
                                            {React.cloneElement(activeIndData.icon, { size: 32, color: '#0f172a' })}
                                        </div>

                                        <h4 style={{
                                            fontSize: '1.35rem',
                                            fontWeight: 900,
                                            color: '#0f172a',
                                            marginBottom: '0.85rem',
                                            lineHeight: 1.3
                                        }}>
                                            Enterprise-Grade for {activeIndData.title}
                                        </h4>

                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: '#475569',
                                            lineHeight: 1.65,
                                            margin: 0
                                        }}>
                                            Multi-department visibility, approval hierarchies, and secure data pipelines aligned with industry requirements.
                                        </p>
                                    </div>

                                    <div>
                                        <span style={{
                                            display: 'inline-block',
                                            color: '#eab308',
                                            fontWeight: 800,
                                            fontSize: '0.85rem',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            marginBottom: '1rem'
                                        }}>
                                            {activeIndData.tag}
                                        </span>

                                        <h3 style={{
                                            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                                            fontWeight: 900,
                                            color: '#0f172a',
                                            marginBottom: '1.25rem',
                                            lineHeight: 1.15
                                        }}>
                                            {activeIndData.title}
                                        </h3>

                                        <p style={{
                                            fontSize: '1.05rem',
                                            color: '#475569',
                                            lineHeight: 1.7,
                                            marginBottom: '2rem'
                                        }}>
                                            {activeIndData.desc}
                                        </p>

                                        <Link
                                            to={activeIndData.link}
                                            className="home-btn-primary"
                                            style={{
                                                padding: '0.95rem 1.8rem',
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            Explore {activeIndData.title} Enterprise Systems <ChevronRight size={18} />
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 06 — DEVELOPMENT PROCESS
                ========================================================================= */}
                <section className="csd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="csd-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Structured Delivery</span>
                            <h2 className="csd-heading-h2">
                                Our Custom Software <span className="gradient-text">Development Process</span>
                            </h2>
                            <p className="csd-subtext" style={{ marginBottom: 0 }}>
                                We follow a structured approach to translate your business requirements into working software.
                            </p>
                        </div>

                        <div className="process-timeline" data-aos="fade-up">
                            <div className="process-steps-row">
                                {processSteps.map((step, idx) => (
                                    <div key={idx} className="process-step-node">
                                        <div className="process-number-circle">
                                            {step.num}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.4rem' }}>
                                                {step.title}
                                            </h3>
                                            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 07 — LOCATION RELEVANCE
                ========================================================================= */}
                <section className="csd-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="csd-container">
                        <div className="location-box" data-aos="fade-up">
                            <div style={{ maxWidth: '850px', position: 'relative', zIndex: 2 }}>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(250, 204, 21, 0.15)', border: '1px solid rgba(250, 204, 21, 0.35)', borderRadius: '50px', color: '#FACC15', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
                                    <MapPin size={16} /> Regional Focus
                                </span>

                                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, lineHeight: 1.2, color: '#ffffff', marginBottom: '1.5rem' }}>
                                    Custom Software Development Services in <span className="gradient-text">Tamil Nadu</span>
                                </h2>

                                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#e2e8f0', marginBottom: '1.25rem' }}>
                                    FlyTowards provides custom software development services for businesses across Tamil Nadu, with particular attention to organizations in South Tamil Nadu.
                                </p>

                                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#cbd5e1', marginBottom: '2rem' }}>
                                    Manufacturing businesses, wholesalers, healthcare organizations, educational institutions, and service providers may need specialized software to manage inventory, billing, workflow automation, and reporting. We focus on understanding these requirements and developing software suited to each business's operations.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 08 — WHY CHOOSE FLYTOWARDS
                ========================================================================= */}
                <section className="csd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="csd-container">
                        <div className="why-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Proven Engineering</span>
                                <h2 className="csd-heading-h2">
                                    Why Choose FlyTowards for <span className="gradient-text">Custom Software Development?</span>
                                </h2>
                                <p className="csd-subtext">
                                    When comparing custom software development companies and firms, finding a partner who understands your operational requirements is essential.
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
                <section className="csd-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="csd-container">
                        <div className="challenges-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Self-Assessment</span>
                                <h2 className="csd-heading-h2">
                                    When Does Your Business Need <span className="gradient-text">Custom Software?</span>
                                </h2>
                                <p className="csd-subtext" style={{ marginBottom: '1.25rem' }}>
                                    Custom software may be suitable when your existing applications no longer support your business requirements.
                                </p>
                                <p style={{ fontSize: '1.05rem', color: '#1e1b4b', fontWeight: 600, lineHeight: 1.7, marginBottom: '2.25rem' }}>
                                    If these challenges affect your operations, a custom application may provide a more suitable long-term solution.
                                </p>
                                <Link to="/contact" className="home-btn-primary">
                                    Discuss Your Software Challenges <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div data-aos="fade-left">
                                <div className="checklist-container">
                                    {challengeChecklist.map((item, idx) => (
                                        <div key={idx} className="checklist-item">
                                            <div className="check-circle">
                                                <Check size={14} color="#EAB308" strokeWidth={3} />
                                            </div>
                                            <p style={{ fontSize: '1.02rem', color: '#1F2937', lineHeight: 1.6, margin: 0, fontWeight: 600 }}>
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
                    SECTION 10 — FREQUENTLY ASKED QUESTIONS
                ========================================================================= */}
                <section className="csd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="csd-container">
                        <div className="faq-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Common Queries</span>
                                <h2 className="csd-heading-h2">
                                    Frequently Asked Questions About <span className="gradient-text">Custom Software Development</span>
                                </h2>
                                <p className="csd-subtext" style={{ marginBottom: '1.75rem' }}>
                                    Clear answers about bespoke software development, cost estimates, timelines, and technical integrations for growing businesses in Tamil Nadu.
                                </p>
                                <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '18px', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                        Have a specific project query?
                                    </h4>
                                    <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                                        Our software architects in Tamil Nadu are ready to evaluate your requirements and offer practical recommendations.
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
                    SECTION 11 — FINAL CTA
                ========================================================================= */}
                <section className="csd-section" style={{ background: '#f8fafc', paddingBottom: '120px' }}>
                    <div className="csd-container">
                        <div className="cta-banner" data-aos="zoom-in">
                            <div className="cta-banner-content">
                                <span className="home-badge-tag" style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#e0f2fe' }}>
                                    Start Your Transformation
                                </span>

                                <h2>Let's Build Software That Works for Your Business</h2>

                                <p>
                                    Need a custom business application, enterprise system, or software solution designed around your operations? Share your requirements with FlyTowards and explore a practical approach to your next software project.
                                </p>

                                <div className="cta-buttons-wrap">
                                    <Link to="/contact" className="cta-btn-primary-white">
                                        Discuss Your Project <ArrowRight size={18} />
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

export default CustomSoftwareDev;
