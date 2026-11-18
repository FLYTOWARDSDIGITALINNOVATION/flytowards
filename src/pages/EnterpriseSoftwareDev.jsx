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
    Network,
    Lock,
    Users,
    TrendingUp,
    GitBranch,
    Send
} from 'lucide-react';

const EnterpriseSoftwareDev = () => {
    // FAQ Accordion State (first item open by default)
    const [openFaq, setOpenFaq] = useState(0);

    // Active Industry Tab for Section 05
    const [activeIndustry, setActiveIndustry] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        // SEO Title
        document.title = "Enterprise Software Development in Tamil Nadu | FlyTowards";

        // Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute(
            "content",
            "Enterprise software development services in Tamil Nadu. FlyTowards builds tailored business systems to connect departments, automate workflows and manage operations."
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
            "enterprise software development, enterprise application development, custom enterprise software, enterprise software solutions, enterprise application integration, business process automation"
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
            "https://flytowardsdigitalinnovation.com/services/enterprise-software-development/"
        );

        // Inject Structured Data (Schema.org: Service, Organization, BreadcrumbList, FAQPage)
        const schemaId = 'enterprise-software-schema-script';
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
                    "@id": "https://flytowardsdigitalinnovation.com/services/enterprise-software-development/#service",
                    "name": "Enterprise Software Development Services",
                    "serviceType": "Enterprise Application Development",
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
                    "description": "Enterprise software development services in Tamil Nadu. FlyTowards builds tailored business systems to connect departments, automate workflows and manage operations.",
                    "url": "https://flytowardsdigitalinnovation.com/services/enterprise-software-development/"
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": "https://flytowardsdigitalinnovation.com/services/enterprise-software-development/#breadcrumb",
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
                            "name": "Enterprise Software Development",
                            "item": "https://flytowardsdigitalinnovation.com/services/enterprise-software-development/"
                        }
                    ]
                },
                {
                    "@type": "FAQPage",
                    "@id": "https://flytowardsdigitalinnovation.com/services/enterprise-software-development/#faq",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is enterprise software development?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Enterprise software development involves creating applications that support organization-wide operations, multiple departments, business workflows and centralized information management."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What types of enterprise software can be developed?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Enterprise software may include ERP systems, CRM applications, HR management platforms, inventory systems, workflow automation tools and integrated business management applications."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does enterprise software development cost in Tamil Nadu?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Costs depend on the number of modules, user roles, integrations, technical complexity, security requirements and development scope. A requirements assessment is needed for a meaningful estimate."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does it take to develop enterprise software?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Timelines depend on application complexity, departmental requirements, integrations, data migration and testing. Large enterprise systems generally require more planning and development than smaller internal applications."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can enterprise software integrate with existing business systems?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. Enterprise applications can often integrate with existing ERP, CRM, accounting and other business tools through supported APIs or integration methods, depending on technical compatibility."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What is the difference between enterprise software and custom software?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Custom software is developed for specific business requirements. Enterprise software is typically designed for broader organizational operations involving multiple users, departments, systems and complex workflows. Enterprise software can also be custom-built."
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

    // Section 02 Key Highlights Data (Icon List without cards)
    const overviewHighlights = [
        {
            title: "Centralized Operations",
            desc: "Manage information across multiple departments.",
            icon: <Network size={24} color="#EAB308" />
        },
        {
            title: "Workflow Automation",
            desc: "Simplify approvals and repetitive business tasks.",
            icon: <Zap size={24} color="#EAB308" />
        },
        {
            title: "System Integration",
            desc: "Connect compatible applications and data sources.",
            icon: <GitBranch size={24} color="#EAB308" />
        },
        {
            title: "Role-Based Access",
            desc: "Provide appropriate system access for different users.",
            icon: <Lock size={24} color="#EAB308" />
        }
    ];

    // Section 03 Six Services Cards Data
    const serviceCards = [
        {
            id: '01',
            title: "Custom ERP Development",
            desc: "Enterprise resource planning solutions for managing inventory, purchasing, finance, production and other connected business functions.",
            icon: <Layers size={30} color="#EAB308" />,
            link: "/services/erp-development"
        },
        {
            id: '02',
            title: "Enterprise CRM Development",
            desc: "Customer management applications for organizing leads, sales activities, customer records and internal follow-ups.",
            icon: <Users size={30} color="#EAB308" />,
            link: "/services/crm-development"
        },
        {
            id: '03',
            title: "Enterprise Web Application Development",
            desc: "Web-based enterprise platforms, internal portals, administrative dashboards and multi-department management applications.",
            icon: <MonitorSmartphone size={30} color="#EAB308" />,
            link: "/services/web-application-development"
        },
        {
            id: '04',
            title: "Business Process Automation",
            desc: "Applications that streamline approvals, notifications, data entry and recurring operational workflows.",
            icon: <Workflow size={30} color="#EAB308" />,
            link: "/services/business-process-automation"
        },
        {
            id: '05',
            title: "Enterprise Application Integration",
            desc: "Connect compatible ERP, CRM, accounting, inventory and other business systems to improve data consistency.",
            icon: <Cpu size={30} color="#EAB308" />,
            link: "/services/api-development"
        },
        {
            id: '06',
            title: "Enterprise Software Modernization",
            desc: "Upgrade existing enterprise applications, improve functionality and adapt outdated systems to changing business requirements.",
            icon: <RefreshCw size={30} color="#EAB308" />,
            link: "/services/software-modernization"
        }
    ];

    // Section 04 Business Benefits Data (Vertically stacked, no cards)
    const businessBenefits = [
        {
            title: "Centralize Business Operations",
            desc: "Bring important processes and information into connected applications for easier management.",
            icon: <Network size={22} color="#EAB308" />
        },
        {
            title: "Improve Team Collaboration",
            desc: "Enable departments to access relevant information and coordinate activities through shared workflows.",
            icon: <Users size={22} color="#EAB308" />
        },
        {
            title: "Reduce Manual Processes",
            desc: "Automate repetitive tasks, internal approvals and routine information transfers.",
            icon: <Zap size={22} color="#EAB308" />
        },
        {
            title: "Make Better-Informed Decisions",
            desc: "Use centralized reporting and operational dashboards to review business performance.",
            icon: <BarChart3 size={22} color="#EAB308" />
        },
        {
            title: "Support Business Expansion",
            desc: "Plan applications that can accommodate additional users, departments, branches and business functions.",
            icon: <TrendingUp size={22} color="#EAB308" />
        }
    ];

    // Section 05 Industry Solutions Data
    const industries = [
        {
            title: "Manufacturing",
            desc: "ERP systems for production planning, inventory, procurement, quality-related records and dispatch coordination.",
            icon: <HardHat size={26} />,
            link: "/industries/manufacturing",
            tag: "Production & Supply Chain"
        },
        {
            title: "Healthcare",
            desc: "Enterprise applications for patient administration, appointments, billing, departmental coordination and operational reporting.",
            icon: <Stethoscope size={26} />,
            link: "/industries/healthcare",
            tag: "Clinical & Administration"
        },
        {
            title: "Retail & Wholesale",
            desc: "Integrated systems for sales, purchasing, stock management, customer accounts and multi-branch operations.",
            icon: <ShoppingBag size={26} />,
            link: "/industries/retail",
            tag: "Multi-Store & POS"
        },
        {
            title: "Education",
            desc: "Centralized applications for admissions, student information, fee management, administration and institutional reporting.",
            icon: <GraduationCap size={26} />,
            link: "/industries/education",
            tag: "Campus & Institutional"
        },
        {
            title: "Construction",
            desc: "Enterprise project management systems for materials, vendors, project expenses, workforce records and reporting.",
            icon: <Building2 size={26} />,
            link: "/industries/construction",
            tag: "Sites & Cost Tracking"
        },
        {
            title: "Logistics & Transportation",
            desc: "Applications for shipment management, dispatch coordination, fleet administration and operational visibility.",
            icon: <Truck size={26} />,
            link: "/industries/logistics",
            tag: "Fleet & Consignments"
        }
    ];

    // Section 06 Development Process Steps Data
    const processSteps = [
        {
            num: "01",
            title: "Business Requirement Analysis",
            desc: "Understand your departments, existing systems, operational challenges and enterprise software goals."
        },
        {
            num: "02",
            title: "Solution Planning & Architecture",
            desc: "Define application modules, user roles, integrations, data requirements and system architecture."
        },
        {
            num: "03",
            title: "UI/UX Design & Development",
            desc: "Design user workflows and develop the application according to the agreed project scope."
        },
        {
            num: "04",
            title: "Testing & Quality Assurance",
            desc: "Review functionality, user permissions, integrations and important business workflows."
        },
        {
            num: "05",
            title: "Deployment & Implementation",
            desc: "Prepare the application for deployment, system configuration and implementation activities."
        },
        {
            num: "06",
            title: "Maintenance & Enhancements",
            desc: "Plan ongoing updates, issue resolution and future functionality based on business needs."
        }
    ];

    // Section 08 Why Choose Differentiators Data
    const whyChoosePoints = [
        {
            num: "01",
            title: "Business-Focused Planning",
            desc: "We begin by understanding your enterprise workflows, departmental requirements and operational challenges."
        },
        {
            num: "02",
            title: "Tailored Enterprise Solutions",
            desc: "Applications are planned around your organization’s users, processes and specific functionality requirements."
        },
        {
            num: "03",
            title: "Integration-Oriented Approach",
            desc: "We consider how compatible existing systems and business data can connect with the proposed application."
        },
        {
            num: "04",
            title: "Long-Term Software Planning",
            desc: "We consider maintainability and future enhancements when discussing enterprise application requirements."
        }
    ];

    // Section 09 Checklist Data
    const challengeChecklist = [
        "Different departments use disconnected applications.",
        "Employees repeatedly enter the same information into multiple systems.",
        "Manual approvals slow down operational workflows.",
        "Business data is difficult to consolidate across departments.",
        "Existing applications cannot support multiple branches or growing teams.",
        "Managers lack centralized operational reporting.",
        "Legacy software is difficult to integrate, maintain or expand."
    ];

    // Section 10 FAQs Data
    const faqList = [
        {
            q: "What is enterprise software development?",
            a: "Enterprise software development involves creating applications that support organization-wide operations, multiple departments, business workflows and centralized information management."
        },
        {
            q: "What types of enterprise software can be developed?",
            a: "Enterprise software may include ERP systems, CRM applications, HR management platforms, inventory systems, workflow automation tools and integrated business management applications."
        },
        {
            q: "How much does enterprise software development cost in Tamil Nadu?",
            a: "Costs depend on the number of modules, user roles, integrations, technical complexity, security requirements and development scope. A requirements assessment is needed for a meaningful estimate."
        },
        {
            q: "How long does it take to develop enterprise software?",
            a: "Timelines depend on application complexity, departmental requirements, integrations, data migration and testing. Large enterprise systems generally require more planning and development than smaller internal applications."
        },
        {
            q: "Can enterprise software integrate with existing business systems?",
            a: "Yes. Enterprise applications can often integrate with existing ERP, CRM, accounting and other business tools through supported APIs or integration methods, depending on technical compatibility."
        },
        {
            q: "What is the difference between enterprise software and custom software?",
            a: (
                <span>
                    Custom software is developed for specific business requirements. Enterprise software is typically designed for broader organizational operations involving multiple users, departments, systems and complex workflows. Enterprise software can also be custom-built. Explore our{' '}
                    <Link to="/services/custom-software-development/" style={{ color: '#EAB308', fontWeight: 700 }}>
                        custom software development services
                    </Link>{' '}
                    to understand specific application planning.
                </span>
            )
        }
    ];

    return (
        <main style={{ background: '#ffffff', color: '#1e293b', fontFamily: "'Outfit', sans-serif", position: 'relative', overflowX: 'hidden' }}>
            {/* Ambient Home Theme Background Lights */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.08) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

                .esd-page-wrapper {
                    position: relative;
                    z-index: 1;
                }

                .esd-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }

                .esd-section {
                    padding: 80px 0;
                    position: relative;
                }

                @media (max-width: 768px) {
                    .esd-section {
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
                .home-badge-tag:hover {
                    background: #FACC15;
                    color: #1F2937;
                    border-color: #FACC15;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(250, 204, 21, 0.35);
                }

                /* Enterprise Signature Animations: Architectural / System Matrix */
                @keyframes enterpriseRadarScan {
                    0% { top: -10%; opacity: 0; }
                    25% { opacity: 0.8; }
                    75% { opacity: 0.8; }
                    100% { top: 110%; opacity: 0; }
                }

                @keyframes circuitNodeTravel {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }

                @keyframes nodeBeaconPulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.3); opacity: 0.6; }
                }

                /* Heading 2 */
                .esd-heading-h2 {
                    font-family: 'Outfit', sans-serif;
                    font-size: clamp(2rem, 3.5vw, 2.85rem);
                    font-weight: 800;
                    line-height: 1.25;
                    color: #1e1b4b;
                    margin-bottom: 1.2rem;
                    letter-spacing: -0.03em;
                }

                .esd-subtext {
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
                }
                .hero-visual-card::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #FACC15, #EAB308, transparent);
                    box-shadow: 0 0 15px rgba(250, 204, 21, 0.8);
                    animation: enterpriseRadarScan 5s ease-in-out infinite;
                    pointer-events: none;
                }
                .hero-visual-card img {
                    width: 100%;
                    height: 460px;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.5s ease;
                }
                .hero-visual-card:hover img {
                    transform: scale(1.03);
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
                    transition: border-color 0.3s ease;
                }
                .hero-visual-card:hover .hero-badge-float {
                    border-color: #FACC15;
                }

                /* SECTION 02: OVERVIEW & KEY HIGHLIGHTS (ENTERPRISE HOVER ANIMATION) */
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

                .key-highlight-card-enterprise {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1.25rem;
                    padding: 1.2rem 1.4rem;
                    background: #ffffff;
                    border-radius: 18px;
                    border: 1.5px solid rgba(226, 232, 240, 0.9);
                    border-left: 4px solid #cbd5e1;
                    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.02);
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: pointer;
                    position: relative;
                }
                .key-highlight-card-enterprise:hover {
                    transform: translateX(10px);
                    background: linear-gradient(90deg, #FEF9C3 0%, #FFFFFF 100%);
                    border-color: rgba(250, 204, 21, 0.8);
                    border-left-color: #EAB308;
                    box-shadow: 0 10px 28px rgba(250, 204, 21, 0.2);
                }
                .key-highlight-card-enterprise:hover .home-icon-box {
                    background: #FACC15;
                    transform: scale(1.1);
                    box-shadow: 0 6px 16px rgba(250, 204, 21, 0.35);
                }
                .key-highlight-card-enterprise:hover .enterprise-status-badge {
                    opacity: 1;
                    transform: translateX(0);
                }

                .enterprise-status-badge {
                    opacity: 0;
                    transform: translateX(-6px);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.78rem;
                    font-weight: 800;
                    color: #EAB308;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    white-space: nowrap;
                }

                .status-beacon-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #EAB308;
                    box-shadow: 0 0 8px #EAB308;
                    animation: nodeBeaconPulse 2s infinite;
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

                /* SECTION 03: SERVICES 3x2 GRID (ENTERPRISE ARCHITECTURAL HOVER) */
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
                    border-left: 4px solid #cbd5e1;
                    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .service-card-item:hover {
                    transform: translateY(-8px);
                    border-color: rgba(250, 204, 21, 0.7);
                    border-left-color: #FACC15;
                    box-shadow: 0 20px 45px rgba(30, 27, 75, 0.12);
                }
                .service-card-item:hover .home-icon-box {
                    transform: scale(1.08);
                    background: #FACC15;
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

                /* SECTION 05: INDUSTRIES TABS */
                .industry-tabs-header {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 2.5rem;
                    justify-content: center;
                }
                .industry-tab-btn {
                    padding: 11px 22px;
                    border-radius: 50px;
                    background: #ffffff;
                    border: 1.5px solid #e2e8f0;
                    color: #475569;
                    font-weight: 700;
                    font-size: 0.92rem;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.25s ease;
                }
                .industry-tab-btn:hover {
                    border-color: #FACC15;
                    background: #FEF9C3;
                    color: #1F2937;
                }
                .industry-tab-btn.active {
                    background: #FACC15;
                    border-color: #FACC15;
                    color: #1F2937;
                    box-shadow: 0 6px 20px rgba(250, 204, 21, 0.35);
                }

                .industry-active-view {
                    background: #ffffff;
                    border-radius: 24px;
                    border: 1px solid rgba(226, 232, 240, 0.9);
                    padding: 3rem;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 2.5rem;
                    align-items: center;
                }
                @media (max-width: 868px) {
                    .industry-active-view {
                        grid-template-columns: 1fr;
                        padding: 2rem 1.5rem;
                    }
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
                        height: 3px;
                        background: linear-gradient(90deg, #EAB308, #FACC15, #FEF9C3, #EAB308);
                        background-size: 200% 100%;
                        animation: circuitNodeTravel 3.5s linear infinite;
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
                        border-radius: 16px;
                        background: #ffffff;
                        border: 3px solid #EAB308;
                        color: #1e1b4b;
                        font-weight: 800;
                        font-size: 1.15rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 1.25rem;
                        box-shadow: 0 6px 16px rgba(30, 27, 75, 0.08);
                        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .process-step-node:hover .process-number-circle {
                        background: #1e1b4b;
                        border-color: #FACC15;
                        color: #FACC15;
                        transform: translateY(-4px);
                        box-shadow: 0 10px 24px rgba(250, 204, 21, 0.35);
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
                        box-shadow: 0 4px 12px rgba(250, 204, 21, 0.2);
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
                    justify-content: center;
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

                /* SECTION 11: FINAL CTA BANNER MATCHING HOME PAGE */
                .home-cta-banner {
                    background: #1e1b4b;
                    border-radius: 36px;
                    padding: 5rem 3rem;
                    color: #ffffff;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 25px 60px rgba(30, 27, 75, 0.2);
                }
                @media (max-width: 768px) {
                    .home-cta-banner {
                        padding: 3.5rem 1.5rem;
                    }
                }
                .home-cta-banner::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 70%;
                    height: 80%;
                    background: radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%);
                    pointer-events: none;
                }
            `}</style>

            <div className="esd-page-wrapper">
                {/* =========================================================================
                    SECTION 01 — HERO
                ========================================================================= */}
                <section className="esd-section" style={{ paddingTop: '140px', paddingBottom: '80px', background: 'transparent' }}>
                    <div className="esd-container">
                        <div className="hero-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">
                                    <Zap size={15} color="#EAB308" style={{ fill: '#EAB308' }} /> Connected Enterprise Systems
                                </span>

                                {/* Single H1 on page with Home gradient-text */}
                                <h1 style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                                    fontWeight: 800,
                                    lineHeight: 1.18,
                                    color: '#1e1b4b',
                                    marginBottom: '1.25rem',
                                    letterSpacing: '-0.03em'
                                }}>
                                    Enterprise Software Development Services in <span className="gradient-text">Tamil Nadu</span>
                                </h1>

                                <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e1b4b', marginBottom: '1.25rem', lineHeight: 1.4 }}>
                                    Connect Your Teams, Systems and Business Operations
                                </p>

                                <p style={{ fontSize: '1.08rem', color: '#1F2937', lineHeight: 1.75, marginBottom: '1.25rem', fontWeight: 500 }}>
                                    Disconnected departments, manual approvals and scattered business data can make growing organizations difficult to manage.
                                </p>

                                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                                    FlyTowards provides enterprise software development services for businesses across Tamil Nadu, helping organizations centralize operations, automate workflows and improve coordination between teams. From enterprise management systems to integrated business applications, we develop software tailored to your operational requirements.
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <Link to="/contact" className="home-btn-primary">
                                        Discuss Your Project <ArrowRight size={18} />
                                    </Link>
                                    <a href="#services" className="home-btn-outline">
                                        Explore Our Solutions
                                    </a>
                                </div>
                            </div>

                            <div data-aos="fade-left">
                                <div className="hero-visual-card">
                                    <img
                                        src="/enterprise-software-dev.jpg"
                                        alt="Enterprise software dashboard for managing business departments"
                                        loading="eager"
                                    />
                                    <div className="hero-badge-float">
                                        <div style={{ width: '40px', height: '40px', minWidth: '40px', borderRadius: '12px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <ShieldCheck size={22} color="#1F2937" />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#ffffff' }}>Enterprise Systems & Automation</div>
                                            <div style={{ fontSize: '0.8rem', color: '#FEF9C3' }}>Connected departments, reports and workflows</div>
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
                <section className="esd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="esd-container">
                        <div className="overview-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Service Overview</span>
                                <h2 className="esd-heading-h2">What Is Enterprise <span className="gradient-text">Software Development?</span></h2>
                                <p style={{ fontSize: '1.12rem', color: '#1e1b4b', fontWeight: 600, lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    Enterprise software development involves designing and building applications that support complex business operations, multiple departments and organization-wide workflows.
                                </p>
                                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    Unlike basic standalone applications, enterprise software solutions can connect business functions such as finance, inventory, sales, human resources and operations within a coordinated system.
                                </p>
                                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.8 }}>
                                    Custom enterprise software helps organizations manage information, standardize processes and support business requirements as they evolve. For specialized single-workflow tools, explore our{' '}
                                    <Link to="/services/custom-software-development/" style={{ color: '#EAB308', fontWeight: 700, textDecoration: 'none' }}>
                                        custom software development services
                                    </Link>.
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
                                        <div key={idx} className="key-highlight-card-enterprise">
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
                                            <div className="enterprise-status-badge">
                                                <span className="status-beacon-dot"></span>
                                                <span>Active</span>
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
                <section id="services" className="esd-section" style={{ background: '#ffffff' }}>
                    <div className="esd-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Enterprise Capabilities</span>
                            <h2 className="esd-heading-h2">Our Enterprise Software <span className="gradient-text">Development Services</span></h2>
                            <p className="esd-subtext" style={{ marginBottom: 0 }}>
                                We develop enterprise applications designed to connect business processes, improve information management and support operational requirements.
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
                <section className="esd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="esd-container">
                        <div className="benefits-grid">
                            <div data-aos="fade-right">
                                <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)', border: '1px solid #e2e8f0' }}>
                                    <img
                                        src="/Smart-GST-Invoicing.webp"
                                        alt="Custom ERP system for inventory, finance and operational workflows"
                                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>

                            <div data-aos="fade-left">
                                <span className="home-badge-tag">Enterprise Value</span>
                                <h2 className="esd-heading-h2">Benefits of Enterprise <span className="gradient-text">Software Development</span></h2>
                                <p className="esd-subtext" style={{ marginBottom: '2rem' }}>
                                    Enterprise software helps organizations manage complex workflows and improve coordination between departments.
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
                    SECTION 05 — INDUSTRY SOLUTIONS
                ========================================================================= */}
                <section className="esd-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="esd-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Sector-Specific Architecture</span>
                            <h2 className="esd-heading-h2">Enterprise Software Solutions for <span className="gradient-text">Different Industries</span></h2>
                            <p className="esd-subtext" style={{ marginBottom: 0 }}>
                                Enterprise applications should reflect the operational requirements of each industry.
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
                                    Explore {industries[activeIndustry].title} Enterprise Systems <ChevronRight size={18} />
                                </Link>
                            </div>

                            <div style={{ background: '#FEF9C3', borderRadius: '20px', padding: '2.5rem', border: '1px solid rgba(250, 204, 21, 0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: '#FACC15', color: '#1F2937', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)' }}>
                                    {React.cloneElement(industries[activeIndustry].icon, { size: 36, color: '#1F2937' })}
                                </div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                    Enterprise-Grade for {industries[activeIndustry].title}
                                </h4>
                                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                                    Multi-department visibility, approval hierarchies, and secure data pipelines aligned with industry requirements.
                                </p>
                            </div>
                        </div>

                        {/* Search bot fallback */}
                        <div style={{ display: 'none' }}>
                            {industries.map((ind, idx) => (
                                <div key={idx}>
                                    <h3>{ind.title}</h3>
                                    <p>{ind.desc}</p>
                                    <Link to={ind.link}>{ind.title} enterprise software solutions</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 06 — DEVELOPMENT PROCESS
                ========================================================================= */}
                <section className="esd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="esd-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Implementation Blueprint</span>
                            <h2 className="esd-heading-h2">Our Enterprise Software <span className="gradient-text">Development Process</span></h2>
                            <p className="esd-subtext" style={{ marginBottom: 0 }}>
                                We follow a structured approach to plan and develop enterprise applications around business requirements.
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
                <section className="esd-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="esd-container">
                        <div className="location-box" data-aos="fade-up">
                            <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2, textAlign: 'center' }}>
                                <span className="home-badge-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                                    <MapPin size={16} /> Tamil Nadu Enterprise Focus
                                </span>

                                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, lineHeight: 1.2, color: '#ffffff', marginBottom: '1.5rem' }}>
                                    Enterprise Software Development Services in <span className="gradient-text">Tamil Nadu</span>
                                </h2>

                                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#e2e8f0', marginBottom: '1.25rem' }}>
                                    Businesses across Tamil Nadu manage increasingly complex operations involving multiple teams, departments and business locations.
                                </p>

                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#cbd5e1', marginBottom: '1.25rem' }}>
                                    In South Tamil Nadu, manufacturing companies, distributors, healthcare organizations, educational institutions and growing enterprises may require connected software to manage their operations efficiently.
                                </p>

                                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#94a3b8', marginBottom: '1.25rem' }}>
                                    FlyTowards provides enterprise software development services for organizations across Tamil Nadu, focusing on solutions that address departmental workflows, business reporting, data management and integration requirements.
                                </p>

                                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#94a3b8', marginBottom: '2rem' }}>
                                    Whether you need a new enterprise application or improvements to existing systems, we focus on software aligned with your business processes.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 08 — WHY CHOOSE FLYTOWARDS
                ========================================================================= */}
                <section className="esd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="esd-container">
                        <div className="why-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Enterprise Reliability</span>
                                <h2 className="esd-heading-h2">
                                    Why Choose FlyTowards for Enterprise <span className="gradient-text">Software Development?</span>
                                </h2>
                                <p className="esd-subtext">
                                    Choosing an enterprise software development partner requires careful consideration of business requirements, system complexity and future maintenance needs.
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
                <section className="esd-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="esd-container">
                        <div className="challenges-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Operational Diagnostic</span>
                                <h2 className="esd-heading-h2">
                                    When Does Your Business Need <span className="gradient-text">Enterprise Software?</span>
                                </h2>
                                <p className="esd-subtext" style={{ marginBottom: '1.25rem' }}>
                                    Enterprise software may be suitable when your organization needs better coordination across departments, systems and business processes.
                                </p>
                                <p style={{ fontSize: '1.05rem', color: '#1e1b4b', fontWeight: 600, lineHeight: 1.7, marginBottom: '2.25rem' }}>
                                    If these challenges affect your organization, a tailored enterprise application may help create more connected and manageable operations.
                                </p>
                                <Link to="/contact" className="home-btn-primary">
                                    Discuss Your Enterprise Software Requirements <ArrowRight size={18} />
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
                <section className="esd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="esd-container">
                        <div className="faq-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Clear Answers</span>
                                <h2 className="esd-heading-h2">
                                    Frequently Asked Questions About Enterprise <span className="gradient-text">Software Development</span>
                                </h2>
                                <p className="esd-subtext" style={{ marginBottom: '1.75rem' }}>
                                    Key considerations around organizational software systems, ERP integration, departmental coordination and deployment in Tamil Nadu.
                                </p>
                                <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '18px', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                        Need an architectural evaluation?
                                    </h4>
                                    <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                                        Our enterprise solution architects can discuss your departmental workflows, data structures and system roadmap.
                                    </p>
                                    <Link to="/contact" style={{ color: '#EAB308', fontWeight: 800, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                                        Connect with an enterprise architect <ChevronRight size={18} />
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
                    SECTION 11 — FINAL CTA (MATCHING HOME PAGE THEME)
                ========================================================================= */}
                <section className="esd-section" style={{ background: '#ffffff', paddingBottom: '110px' }}>
                    <div className="esd-container">
                        <div className="home-cta-banner" data-aos="zoom-in">
                            <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                                <span style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '0.5rem 1.4rem',
                                    background: '#FEF9C3',
                                    border: '1px solid rgba(250, 204, 21, 0.5)',
                                    borderRadius: '50px',
                                    fontSize: '0.85rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    marginBottom: '1.5rem',
                                    color: '#1F2937'
                                }}>
                                    <Send size={15} color="#EAB308" style={{ transform: 'rotate(-20deg)' }} /> CONNECT OPERATIONS
                                </span>

                                <h2 style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                                    fontWeight: 800,
                                    lineHeight: 1.2,
                                    color: '#ffffff',
                                    marginBottom: '1.5rem',
                                    letterSpacing: '-0.03em'
                                }}>
                                    Connect Your Business Operations with <span className="gradient-text">Enterprise Software</span>
                                </h2>

                                <p style={{ fontSize: '1.15rem', lineHeight: 1.75, color: '#e2e8f0', marginBottom: '2.5rem' }}>
                                    Managing multiple departments, disconnected systems or complex workflows? FlyTowards helps businesses explore enterprise software solutions designed around their operational requirements. Share your project needs and take the next step toward more connected business processes.
                                </p>

                                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                                    <Link
                                        to="/contact"
                                        className="home-btn-primary"
                                        style={{ padding: '1.15rem 2.8rem', fontSize: '1.05rem' }}
                                    >
                                        Discuss Your Enterprise Project <ArrowRight size={18} />
                                    </Link>

                                    <Link
                                        to="/contact"
                                        className="home-btn-outline"
                                        style={{ padding: '1.15rem 2.5rem', fontSize: '1.05rem', background: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.3)', color: '#ffffff' }}
                                    >
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

export default EnterpriseSoftwareDev;
