import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
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
    BarChart3,
    Sparkles,
    MapPin,
    TrendingUp,
    Send,
    RefreshCw,
    Code,
    Cpu,
    Database,
    ShieldCheck,
    Sliders,
    Zap,
    Users,
    Activity,
    Server,
    Globe,
    Terminal,
    Layout,
    ArrowUpRight,
    Sparkle,
    Boxes
} from 'lucide-react';

const SoftwareModernization = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [activeIndustry, setActiveIndustry] = useState(0);
    const [modernizeTab, setModernizeTab] = useState('modern'); // 'legacy' | 'modern'

    useEffect(() => {
        window.scrollTo(0, 0);

        // SEO Title
        document.title = "Software Modernization Services in Tamil Nadu | FlyTowards";

        // Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute(
            "content",
            "Software modernization services in Tamil Nadu. FlyTowards helps businesses upgrade legacy applications, improve functionality and modernize existing software."
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
            "software modernization, software modernization company, application modernization software, software product modernization, software modernization process"
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
            "https://flytowardsdigitalinnovation.com/services/software-modernization/"
        );

        // Inject Structured Data (Schema.org: Service, Organization, BreadcrumbList, FAQPage)
        const schemaId = 'software-modernization-schema-script';
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
                    "@id": "https://flytowardsdigitalinnovation.com/services/software-modernization/#service",
                    "name": "Software Modernization Services",
                    "serviceType": "Legacy Application Upgrades & Architecture Modernization",
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
                    "description": "Software modernization services in Tamil Nadu. FlyTowards helps businesses upgrade legacy applications, improve functionality and modernize existing software.",
                    "url": "https://flytowardsdigitalinnovation.com/services/software-modernization/"
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://flytowardsdigitalinnovation.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://flytowardsdigitalinnovation.com/services/" },
                        { "@type": "ListItem", "position": 3, "name": "Software Modernization", "item": "https://flytowardsdigitalinnovation.com/services/software-modernization/" }
                    ]
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is software modernization?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Software modernization is the process of updating existing applications to improve their functionality, usability, technical architecture, integration capabilities or maintainability." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is the software modernization process?",
                            "acceptedAnswer": { "@type": "Answer", "text": "A typical software modernization process includes application assessment, modernization planning, architecture or interface design, development, testing, deployment and ongoing improvement." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is the difference between software modernization and software redevelopment?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Software modernization may retain and improve significant parts of an existing application. Software redevelopment generally involves rebuilding an application or substantial components. The suitable approach depends on technical condition and business requirements." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is software product modernization?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Software product modernization involves improving an existing software product's features, user experience, architecture or integrations to support changing user and business needs." }
                        },
                        {
                            "@type": "Question",
                            "name": "What does application modernization software mean?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Application modernization software can refer to tools or platforms used to assess, update, migrate or manage existing applications. Modernization projects may use such tools alongside custom development and architectural improvements." }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does software modernization cost in Tamil Nadu?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Costs depend on the application's current condition, technology stack, required changes, data migration needs, integrations and testing scope. An initial assessment helps define the project budget." }
                        },
                        {
                            "@type": "Question",
                            "name": "Can existing software be modernized without replacing it completely?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Depending on its architecture and technical condition, an application may be improved through interface updates, component upgrades, refactoring or integrations without a complete rebuild." }
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
            title: "Legacy Application Upgrades",
            desc: "Improve outdated software components and functionality while preserving business logic.",
            icon: <RefreshCw size={22} color="#EAB308" />
        },
        {
            title: "Interface Modernization",
            desc: "Update application usability and user workflows for modern screens and browsers.",
            icon: <Layout size={22} color="#EAB308" />
        },
        {
            title: "System Integration",
            desc: "Connect existing applications with compatible modern services, payment gateways, and APIs.",
            icon: <Globe size={22} color="#EAB308" />
        },
        {
            title: "Architecture Improvement",
            desc: "Address technical limitations and maintainability needs through modular architecture.",
            icon: <Boxes size={22} color="#EAB308" />
        }
    ];

    // Section 03 — Services Cards
    const serviceCards = [
        {
            icon: <RefreshCw size={28} color="#EAB308" />,
            title: "Legacy Software Modernization",
            desc: "Evaluate and upgrade aging business applications to address outdated functionality, dependencies and technical limitations.",
            link: "/services/custom-software-development/"
        },
        {
            icon: <Boxes size={28} color="#EAB308" />,
            title: "Application Architecture Modernization",
            desc: "Review application structure and plan suitable changes to improve maintainability, integration and future development.",
            link: "/services/enterprise-software-development/"
        },
        {
            icon: <Layout size={28} color="#EAB308" />,
            title: "UI/UX Modernization",
            desc: "Improve outdated interfaces, navigation and user workflows while considering existing business functionality.",
            link: "/services/web-application-development/"
        },
        {
            icon: <Sparkles size={28} color="#EAB308" />,
            title: "Software Product Modernization",
            desc: "Update established software products with improved features, interfaces and technical components based on evolving user needs.",
            link: "/services/cloud-application-development/"
        },
        {
            icon: <Server size={28} color="#EAB308" />,
            title: "Cloud & API Modernization",
            desc: "Assess opportunities to connect existing software with cloud services, APIs and compatible business applications.",
            link: "/services/api-development/"
        },
        {
            icon: <Code size={28} color="#EAB308" />,
            title: "Software Refactoring & Enhancement",
            desc: "Improve selected application components, simplify maintainability challenges and introduce agreed functionality without necessarily replacing the entire system.",
            link: "/services/erp-development/"
        }
    ];

    // Section 04 — Business Benefits
    const businessBenefits = [
        {
            title: "Extend the Value of Existing Applications",
            desc: "Improve software that still supports important business processes instead of automatically replacing it.",
            icon: <Zap size={22} color="#EAB308" />
        },
        {
            title: "Improve User Experience",
            desc: "Update interfaces and workflows to make routine tasks easier for employees and other authorized users.",
            icon: <Users size={22} color="#EAB308" />
        },
        {
            title: "Address Maintenance Challenges",
            desc: "Review outdated components, dependencies and application structure to simplify future improvements.",
            icon: <ShieldCheck size={22} color="#EAB308" />
        },
        {
            title: "Enable New Integrations",
            desc: "Connect compatible applications with modern APIs, services and business systems.",
            icon: <Globe size={22} color="#EAB308" />
        },
        {
            title: "Support Changing Business Requirements",
            desc: "Introduce suitable features and architecture improvements as operational needs evolve.",
            icon: <TrendingUp size={22} color="#EAB308" />
        }
    ];

    // Section 05 — Industries
    const industries = [
        {
            title: "Manufacturing",
            desc: "Modernize production management applications, inventory systems, procurement workflows and operational reporting tools.",
            icon: <HardHat size={26} />,
            link: "/industries/manufacturing",
            tag: "Production & Inventory"
        },
        {
            title: "Healthcare",
            desc: "Improve administrative applications, appointment-related systems and internal information workflows, with appropriate privacy and data protection considerations.",
            icon: <Stethoscope size={26} />,
            link: "/industries/healthcare",
            tag: "Clinical & Admin Workflows"
        },
        {
            title: "Retail & Wholesale",
            desc: "Update billing-related applications, inventory software, order management systems and customer management interfaces.",
            icon: <ShoppingBag size={26} />,
            link: "/industries/retail",
            tag: "Billing & POS Systems"
        },
        {
            title: "Education",
            desc: "Modernize student administration software, institutional portals, admission applications and internal management systems.",
            icon: <GraduationCap size={26} />,
            link: "/industries/education",
            tag: "Portals & Admissions"
        },
        {
            title: "Construction",
            desc: "Improve project tracking applications, procurement systems, material management tools and reporting interfaces.",
            icon: <Building2 size={26} />,
            link: "/industries/construction",
            tag: "Sites & Cost Control"
        },
        {
            title: "Logistics & Transportation",
            desc: "Upgrade dispatch applications, shipment management tools, transport administration systems and operational dashboards.",
            icon: <Truck size={26} />,
            link: "/industries/logistics",
            tag: "Dispatch & Tracking"
        }
    ];

    // Section 06 — Process Steps
    const processSteps = [
        { num: "01", title: "Existing Application Assessment", desc: "Review the application's functionality, technology, dependencies, user workflows and current challenges." },
        { num: "02", title: "Modernization Strategy & Planning", desc: "Identify suitable approaches such as targeted enhancement, refactoring, replatforming or rebuilding selected components." },
        { num: "03", title: "Architecture & Interface Design", desc: "Plan agreed technical improvements, interface updates, integrations and data-handling requirements." },
        { num: "04", title: "Software Modernization & Development", desc: "Implement selected upgrades, application enhancements and architecture changes according to the approved scope." },
        { num: "05", title: "Testing & Migration Validation", desc: "Review functionality, data integrity, integrations and compatibility before deploying changes to the intended environment." },
        { num: "06", title: "Deployment & Ongoing Improvement", desc: "Plan deployment, monitor identified issues and evaluate future enhancements as business needs change." }
    ];

    // Section 08 — Why Choose FlyTowards
    const whyChoosePoints = [
        {
            num: "01",
            title: "Existing-System Understanding",
            desc: "We begin by examining current application requirements, workflows, dependencies and technical limitations."
        },
        {
            num: "02",
            title: "Practical Modernization Planning",
            desc: "We consider whether targeted improvements, architecture changes or selected component replacements are appropriate."
        },
        {
            num: "03",
            title: "Business Workflow Consideration",
            desc: "We plan application changes with attention to the processes and users that depend on the existing software."
        },
        {
            num: "04",
            title: "Future-Focused Improvements",
            desc: "We consider maintainability, integration needs and potential enhancements when planning modernization activities."
        }
    ];

    // Section 09 — Challenges
    const challenges = [
        "Your business depends on software built with outdated technologies.",
        "Employees struggle with an old or difficult-to-use interface.",
        "Adding new features requires significant development effort.",
        "Existing applications cannot easily connect with newer business systems.",
        "Unsupported components or dependencies create maintenance concerns.",
        "Your software needs better support for current business workflows.",
        "Replacing the entire application would be difficult or unnecessarily disruptive."
    ];

    // Section 10 — FAQs
    const faqList = [
        {
            q: "What is software modernization?",
            a: "Software modernization is the process of updating existing applications to improve their functionality, usability, technical architecture, integration capabilities or maintainability."
        },
        {
            q: "What is the software modernization process?",
            a: "A typical software modernization process includes application assessment, modernization planning, architecture or interface design, development, testing, deployment and ongoing improvement."
        },
        {
            q: "What is the difference between software modernization and software redevelopment?",
            a: "Software modernization may retain and improve significant parts of an existing application. Software redevelopment generally involves rebuilding an application or substantial components. The suitable approach depends on technical condition and business requirements."
        },
        {
            q: "What is software product modernization?",
            a: "Software product modernization involves improving an existing software product's features, user experience, architecture or integrations to support changing user and business needs."
        },
        {
            q: "What does application modernization software mean?",
            a: "Application modernization software can refer to tools or platforms used to assess, update, migrate or manage existing applications. Modernization projects may use such tools alongside custom development and architectural improvements."
        },
        {
            q: "How much does software modernization cost in Tamil Nadu?",
            a: "Costs depend on the application's current condition, technology stack, required changes, data migration needs, integrations and testing scope. An initial assessment helps define the project budget."
        },
        {
            q: "Can existing software be modernized without replacing it completely?",
            a: "Yes. Depending on its architecture and technical condition, an application may be improved through interface updates, component upgrades, refactoring or integrations without a complete rebuild."
        }
    ];

    return (
        <main style={{ fontFamily: "'Outfit', sans-serif" }}>
            {/* Ambient glow background */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '10%', right: '5%', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(30, 27, 75, 0.07) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

                /* ─── Base ─── */
                .smd-page-wrapper { position: relative; z-index: 1; }
                .smd-container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; box-sizing: border-box; }
                .smd-section { padding: 80px 0; position: relative; }
                @media (max-width: 768px) { .smd-section { padding: 55px 0; } }

                /* ─── Typography ─── */
                .smd-heading-h2 {
                    font-family: 'Outfit', sans-serif;
                    font-size: clamp(2rem, 3.5vw, 2.85rem);
                    font-weight: 800;
                    line-height: 1.25;
                    color: #1e1b4b;
                    margin-bottom: 1.2rem;
                    letter-spacing: -0.03em;
                }
                .smd-subtext { font-size: 1.1rem; color: #64748b; line-height: 1.75; margin-bottom: 2rem; }

                /* ─── Badges ─── */
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

                /* ─── Buttons ─── */
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
                    transform: translateY(-3px);
                    box-shadow: 0 14px 32px rgba(250, 204, 21, 0.45);
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
                    transform: translateY(-3px);
                }

                /* ─── SECTION 01: HERO ─── */
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                    align-items: center;
                }
                @media (max-width: 992px) {
                    .hero-grid { grid-template-columns: 1fr; gap: 3rem; }
                }

                .hero-tagline-pill {
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

                /* Before-and-After Modernization Interactive Window */
                .modernization-hero-card {
                    background: #1e1b4b;
                    border-radius: 32px;
                    padding: 1.75rem;
                    box-shadow: 0 35px 70px rgba(30, 27, 75, 0.35), 0 0 0 1px rgba(250, 204, 21, 0.2);
                    position: relative;
                    overflow: hidden;
                    animation: floatHeroWindow 6s ease-in-out infinite;
                }
                @keyframes floatHeroWindow {
                    0%, 100% { transform: translateY(0px); }
                    50%      { transform: translateY(-8px); }
                }

                /* Modern vs Legacy Switcher Header */
                .hero-interface-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: rgba(15, 23, 42, 0.8);
                    border-radius: 18px;
                    padding: 6px;
                    margin-bottom: 1.25rem;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .toggle-mode-btn {
                    flex: 1;
                    padding: 9px 14px;
                    border-radius: 12px;
                    border: none;
                    background: transparent;
                    color: #94a3b8;
                    font-weight: 700;
                    font-size: 0.84rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-family: 'Outfit', sans-serif;
                }
                .toggle-mode-btn.active-modern {
                    background: #FACC15;
                    color: #1F2937;
                    box-shadow: 0 4px 14px rgba(250, 204, 21, 0.35);
                }
                .toggle-mode-btn.active-legacy {
                    background: #475569;
                    color: #ffffff;
                }

                /* Transformation Screen Content */
                .screen-frame {
                    border-radius: 20px;
                    padding: 1.5rem;
                    min-height: 310px;
                    transition: all 0.4s ease;
                    position: relative;
                }
                .screen-modern {
                    background: linear-gradient(135deg, rgba(30, 27, 75, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%);
                    border: 1px solid rgba(250, 204, 21, 0.25);
                }
                .screen-legacy {
                    background: #c0c0c0;
                    border: 2px outset #ffffff;
                    color: #000000;
                    font-family: 'Courier New', monospace;
                }

                /* Modern Screen Elements */
                .modern-metric-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                    margin-bottom: 1rem;
                }
                .modern-stat-box {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(250, 204, 21, 0.2);
                    border-radius: 12px;
                    padding: 10px;
                    text-align: center;
                }
                .modern-chart-bar {
                    display: flex;
                    align-items: flex-end;
                    gap: 6px;
                    height: 60px;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 12px;
                    padding: 10px;
                    margin-top: 10px;
                }
                .modern-bar {
                    flex: 1;
                    background: rgba(250, 204, 21, 0.35);
                    border-radius: 4px 4px 0 0;
                    transition: height 0.4s ease;
                }
                .modern-bar.highlight {
                    background: #FACC15;
                    box-shadow: 0 0 10px #FACC15;
                }

                /* Legacy Screen Elements */
                .legacy-window-header {
                    background: #000080;
                    color: #ffffff;
                    padding: 4px 8px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 12px;
                }
                .legacy-form-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 8px;
                    font-size: 0.75rem;
                }
                .legacy-input {
                    background: #ffffff;
                    border: 2px inset #ffffff;
                    padding: 2px 4px;
                    font-size: 0.75rem;
                    flex: 1;
                }
                .legacy-alert {
                    background: #ffffcc;
                    border: 1px solid #999900;
                    padding: 6px;
                    font-size: 0.72rem;
                    color: #660000;
                    margin-top: 10px;
                }

                /* Scanning Laser Beam Effect across the visual */
                .scan-laser {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #FACC15, #ffffff, #FACC15, transparent);
                    box-shadow: 0 0 14px #FACC15;
                    animation: scanBeam 4s ease-in-out infinite;
                    pointer-events: none;
                    z-index: 10;
                }
                @keyframes scanBeam {
                    0%   { top: 10%; opacity: 0; }
                    20%  { opacity: 1; }
                    80%  { opacity: 1; }
                    100% { top: 90%; opacity: 0; }
                }

                /* ─── SECTION 02: OVERVIEW ─── */
                .overview-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: start;
                }
                @media (max-width: 992px) { .overview-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

                .key-highlight-card-smd {
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
                .key-highlight-card-smd:hover {
                    transform: translateX(12px);
                    background: linear-gradient(90deg, #FEF9C3 0%, #FFFFFF 100%);
                    border-color: rgba(250, 204, 21, 0.8);
                    border-left-color: #EAB308;
                    box-shadow: 0 12px 32px rgba(250, 204, 21, 0.22);
                }
                .key-highlight-card-smd:hover .smd-icon-box {
                    background: #FACC15;
                    transform: scale(1.12) rotate(6deg);
                    box-shadow: 0 8px 20px rgba(250, 204, 21, 0.4);
                }
                .key-highlight-card-smd:hover .smd-chevron {
                    opacity: 1;
                    transform: translateX(0);
                    color: #EAB308;
                }
                .smd-chevron {
                    opacity: 0;
                    transform: translateX(-8px);
                    transition: all 0.3s ease;
                    margin-left: auto;
                    display: flex;
                    align-items: center;
                }
                .smd-icon-box {
                    width: 48px; height: 48px; min-width: 48px;
                    border-radius: 14px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.5);
                    display: flex; align-items: center; justify-content: center;
                    box-shadow: 0 4px 12px rgba(250, 204, 21, 0.15);
                    transition: all 0.35s ease;
                }

                /* ─── SECTION 03: SERVICES GRID ─── */
                .services-grid-3x2 {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 1024px) { .services-grid-3x2 { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 640px)  { .services-grid-3x2 { grid-template-columns: 1fr; } }

                .service-card-smd {
                    background: #ffffff;
                    border-radius: 22px;
                    padding: 2rem 1.75rem;
                    border: 1.5px solid rgba(226, 232, 240, 0.8);
                    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
                    transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    text-decoration: none;
                    display: block;
                }
                .service-card-smd::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #FACC15, #EAB308);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.38s ease;
                }
                .service-card-smd:hover {
                    transform: translateY(-10px);
                    border-color: rgba(250, 204, 21, 0.4);
                    box-shadow: 0 24px 50px rgba(250, 204, 21, 0.18);
                }
                .service-card-smd:hover::before { transform: scaleX(1); }
                .service-card-smd:hover .svc-smd-icon {
                    background: #FACC15;
                    transform: scale(1.12) rotate(8deg);
                    box-shadow: 0 10px 24px rgba(250, 204, 21, 0.45);
                }
                .svc-smd-icon {
                    width: 58px; height: 58px;
                    border-radius: 18px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.4);
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 1.25rem;
                    transition: all 0.38s ease;
                }

                /* ─── SECTION 04: BENEFITS ─── */
                .benefits-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: center;
                }
                @media (max-width: 992px) { .benefits-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

                .benefit-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1.25rem;
                    padding: 1.35rem 1rem;
                    border-bottom: 1px solid #f1f5f9;
                    border-radius: 14px;
                    transition: all 0.3s ease;
                    cursor: default;
                }
                .benefit-item:last-child { border-bottom: none; }
                .benefit-item:hover {
                    background: #FEFCE8;
                    padding-left: 1.4rem;
                }
                .benefit-item:hover .ben-icon-wrap {
                    background: #FACC15;
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 6px 18px rgba(250, 204, 21, 0.35);
                }
                .ben-icon-wrap {
                    width: 48px; height: 48px; min-width: 48px;
                    border-radius: 14px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.5);
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.35s ease;
                }

                /* ─── SECTION 05: INDUSTRY TABS ─── */
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
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    font-family: 'Outfit', sans-serif;
                }
                .industry-tab-btn:hover {
                    border-color: #FACC15;
                    color: #1e1b4b;
                    transform: translateY(-2px);
                }
                .industry-tab-btn.active {
                    background: #FACC15;
                    border-color: #FACC15;
                    color: #1F2937;
                    box-shadow: 0 6px 20px rgba(250, 204, 21, 0.3);
                    transform: translateY(-2px);
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
                    .industry-active-view { grid-template-columns: 1fr; gap: 2rem; padding: 2rem 1.5rem; }
                }

                /* ─── SECTION 06: PROCESS TIMELINE ─── */
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
                    left: 10%; right: 10%;
                    height: 2px;
                    background: linear-gradient(90deg, #FACC15 0%, #EAB308 50%, #FEF9C3 75%, #FACC15 100%);
                    background-size: 200% 100%;
                    animation: lineShimmer 3s ease-in-out infinite;
                    z-index: 0;
                }
                @keyframes lineShimmer {
                    0%   { background-position: 100% 0; }
                    100% { background-position: -100% 0; }
                }
                @media (max-width: 1024px) {
                    .process-steps-row { grid-template-columns: repeat(3, 1fr); }
                    .process-steps-row::before { display: none; }
                }
                @media (max-width: 640px) { .process-steps-row { grid-template-columns: 1fr; } }

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
                    width: 72px; height: 72px;
                    border-radius: 50%;
                    background: linear-gradient(180deg, #FACC15 0%, #EAB308 100%);
                    display: flex; align-items: center; justify-content: center;
                    font-size: 1.15rem;
                    font-weight: 900;
                    color: #1F2937;
                    margin-bottom: 1.25rem;
                    box-shadow: 0 8px 24px rgba(250, 204, 21, 0.35);
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    flex-shrink: 0;
                    position: relative;
                }
                .process-step-node:hover .step-circle {
                    transform: scale(1.15) rotate(8deg);
                    box-shadow: 0 16px 36px rgba(250, 204, 21, 0.55);
                }

                /* ─── SECTION 07: LOCATION ─── */
                .location-split {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: center;
                }
                @media (max-width: 992px) { .location-split { grid-template-columns: 1fr; gap: 2.5rem; } }
                .location-city-tags { display: flex; flex-wrap: wrap; gap: 0.65rem; margin-top: 1.5rem; }
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
                    transition: all 0.25s ease;
                }
                .city-tag:hover {
                    background: #FACC15;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(250, 204, 21, 0.3);
                }

                /* ─── SECTION 08: WHY CHOOSE ─── */
                .why-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.15fr;
                    gap: 4.5rem;
                    align-items: center;
                }
                @media (max-width: 992px) { .why-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

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
                .differentiator-item:first-child { padding-top: 1.4rem; }
                .differentiator-item:last-child  { border-bottom: none; padding-bottom: 1.4rem; }
                .differentiator-item:hover {
                    background: #FEF9C3;
                    transform: translateX(8px);
                    box-shadow: 0 4px 18px rgba(250, 204, 21, 0.15);
                }
                .differentiator-item:hover .diff-title  { color: #EAB308 !important; }
                .differentiator-item:hover .diff-number { color: #FACC15; transform: scale(1.18); }
                .diff-title  { transition: color 0.3s ease; }
                .diff-number {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #EAB308;
                    line-height: 1;
                    padding-top: 4px;
                    transition: all 0.3s ease;
                }

                /* ─── SECTION 09: CHALLENGES ─── */
                .challenges-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.1fr;
                    gap: 4.5rem;
                    align-items: center;
                }
                @media (max-width: 992px) { .challenges-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

                .challenge-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 1rem 1.25rem;
                    border-radius: 14px;
                    transition: all 0.25s ease;
                    cursor: default;
                }
                .challenge-item:hover { background: #FEF9C3; }
                .challenge-item:hover .chk-box {
                    background: #FACC15;
                    border-color: #EAB308;
                    transform: scale(1.1);
                }
                .chk-box {
                    width: 28px; height: 28px; min-width: 28px;
                    border-radius: 8px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.5);
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.25s ease;
                }

                /* ─── SECTION 10: FAQ ─── */
                .faq-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.4fr;
                    gap: 5rem;
                    align-items: start;
                }
                @media (max-width: 992px) { .faq-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

                .faq-accordion-item { border-bottom: 1px solid #f1f5f9; overflow: hidden; }
                .faq-accordion-item.active {
                    background: #fafafa;
                    border-radius: 18px;
                    border: 1px solid rgba(250, 204, 21, 0.3);
                    margin-bottom: 0.5rem;
                }
                .faq-accordion-header {
                    width: 100%; background: none; border: none;
                    padding: 1.4rem 1.6rem;
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 1rem; cursor: pointer; text-align: left;
                }
                .faq-accordion-body {
                    padding: 0 1.6rem 1.5rem;
                    color: #475569;
                    font-size: 1rem;
                    line-height: 1.7;
                }

                /* ─── SECTION 11: CTA BANNER ─── */
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
                .cta-banner::before {
                    content: '';
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 60%; height: 70%;
                    background: radial-gradient(circle, rgba(250, 204, 21, 0.1) 0%, transparent 70%);
                    pointer-events: none;
                }
                @media (max-width: 768px) { .cta-banner { padding: 3.5rem 1.5rem; } }
                .cta-banner-content { max-width: 820px; margin: 0 auto; position: relative; z-index: 2; }
                .cta-banner h2 {
                    font-size: clamp(2.2rem, 4vw, 3.4rem);
                    font-weight: 900;
                    line-height: 1.15;
                    margin-bottom: 1.25rem;
                    letter-spacing: -0.03em;
                    color: #ffffff;
                }
                .cta-banner p { font-size: 1.2rem; line-height: 1.7; color: #e0f2fe; margin-bottom: 2.5rem; }
                .cta-buttons-wrap { display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap; }
                .cta-btn-primary-white {
                    display: inline-flex; align-items: center; gap: 10px;
                    padding: 16px 36px;
                    background: #ffffff;
                    color: #0f172a !important;
                    border-radius: 50px;
                    font-weight: 800; font-size: 1.05rem;
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
                    display: inline-flex; align-items: center; gap: 10px;
                    padding: 16px 32px;
                    background: rgba(255, 255, 255, 0.12);
                    color: #ffffff !important;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50px;
                    font-weight: 700; font-size: 1.05rem;
                    text-decoration: none;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }
                .cta-btn-secondary-glass:hover {
                    background: rgba(255, 255, 255, 0.22);
                    border-color: rgba(255, 255, 255, 0.5);
                    transform: translateY(-2px);
                }
            `}</style>

            <div className="smd-page-wrapper">

                {/* =========================================================================
                    SECTION 01 — HERO
                ========================================================================= */}
                <section className="smd-section" style={{ paddingTop: '140px', paddingBottom: '80px', background: 'transparent' }}>
                    <div className="smd-container">
                        <div className="hero-grid">

                            {/* Left: Copy */}
                            <div data-aos="fade-right">
                                <span className="hero-tagline-pill">
                                    <RefreshCw size={16} color="#EAB308" />
                                    Software Modernization
                                </span>

                                <h1 style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                                    fontWeight: 900,
                                    lineHeight: 1.12,
                                    color: '#1e1b4b',
                                    marginBottom: '0.75rem',
                                    letterSpacing: '-0.04em'
                                }}>
                                    Software Modernization Services in <span className="gradient-text">Tamil Nadu</span>
                                </h1>

                                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e1b4b', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                                    Upgrade Existing Software. Prepare for What's Next.
                                </p>

                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '560px' }}>
                                    Outdated interfaces, limited integrations and difficult-to-maintain applications can slow down daily operations and make software improvements more complicated.
                                    <br /><br />
                                    FlyTowards provides software modernization services for businesses across Tamil Nadu, with a focus on South Tamil Nadu. We help organizations evaluate and improve existing applications through suitable technology upgrades, interface enhancements, system integrations and architecture changes.
                                    <br /><br />
                                    Whether your business uses an aging internal application or an established software product, we focus on modernization aligned with your operational needs.
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <Link to="/contact" className="home-btn-primary">
                                        Discuss Your Modernization Project <ArrowRight size={18} />
                                    </Link>
                                    <Link to="/services" className="home-btn-outline">
                                        Explore Our Services
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Before-and-After Modernization Interactive Window */}
                            <div data-aos="fade-left">
                                <div className="modernization-hero-card">
                                    {/* Scanning laser beam animation */}
                                    <div className="scan-laser"></div>

                                    {/* Interactive Toggle for Before vs After */}
                                    <div className="hero-interface-toggle">
                                        <button
                                            onClick={() => setModernizeTab('legacy')}
                                            className={`toggle-mode-btn ${modernizeTab === 'legacy' ? 'active-legacy' : ''}`}
                                        >
                                            <Terminal size={14} /> Legacy Application (Before)
                                        </button>
                                        <button
                                            onClick={() => setModernizeTab('modern')}
                                            className={`toggle-mode-btn ${modernizeTab === 'modern' ? 'active-modern' : ''}`}
                                        >
                                            <Sparkles size={14} /> Modernized Cloud UI (After)
                                        </button>
                                    </div>

                                    {/* Screen Frame */}
                                    {modernizeTab === 'modern' ? (
                                        <div className="screen-frame screen-modern">
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', borderBottom: '1px solid rgba(250,204,21,0.2)', paddingBottom: '0.75rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FACC15', boxShadow: '0 0 10px #FACC15' }}></div>
                                                    <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.88rem' }}>FlyTowards Cloud Architecture</span>
                                                </div>
                                                <span style={{ background: 'rgba(34,197,94,0.2)', color: '#4ade80', fontSize: '0.72rem', fontWeight: 800, padding: '3px 10px', borderRadius: '50px', border: '1px solid rgba(34,197,94,0.3)' }}>
                                                    Modernized Stack
                                                </span>
                                            </div>

                                            <div className="modern-metric-row">
                                                <div className="modern-stat-box">
                                                    <p style={{ color: '#94a3b8', fontSize: '0.65rem', margin: '0 0 3px', fontWeight: 600 }}>API Latency</p>
                                                    <p style={{ color: '#FACC15', fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>42ms</p>
                                                    <span style={{ color: '#4ade80', fontSize: '0.65rem' }}>▲ 85% Faster</span>
                                                </div>
                                                <div className="modern-stat-box">
                                                    <p style={{ color: '#94a3b8', fontSize: '0.65rem', margin: '0 0 3px', fontWeight: 600 }}>Cloud Uptime</p>
                                                    <p style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>99.9%</p>
                                                    <span style={{ color: '#4ade80', fontSize: '0.65rem' }}>Reliable</span>
                                                </div>
                                                <div className="modern-stat-box">
                                                    <p style={{ color: '#94a3b8', fontSize: '0.65rem', margin: '0 0 3px', fontWeight: 600 }}>Integrations</p>
                                                    <p style={{ color: '#FACC15', fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>Active</p>
                                                    <span style={{ color: '#38bdf8', fontSize: '0.65rem' }}>REST + GraphQL</span>
                                                </div>
                                            </div>

                                            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span style={{ color: '#cbd5e1', fontSize: '0.75rem', fontWeight: 700 }}>Performance Throughput</span>
                                                    <span style={{ color: '#FACC15', fontSize: '0.75rem', fontWeight: 700 }}>Optimized</span>
                                                </div>
                                                <div className="modern-chart-bar">
                                                    {[35, 50, 45, 75, 60, 90, 85, 95, 70, 100].map((h, i) => (
                                                        <div key={i} className={`modern-bar ${i >= 6 ? 'highlight' : ''}`} style={{ height: `${h}%` }}></div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                                <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Responsive across Desktop &amp; Mobile</span>
                                                <span style={{ color: '#FACC15', fontSize: '0.75rem', fontWeight: 800 }}>✓ Zero Disruption</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="screen-frame screen-legacy">
                                            <div className="legacy-window-header">
                                                <span>LegacyApp.exe - [Orders Database v1.4]</span>
                                                <span>[ _ | □ | X ]</span>
                                            </div>
                                            <div className="legacy-form-row">
                                                <span style={{ width: '80px' }}>DB Status:</span>
                                                <span style={{ color: '#cc0000', fontWeight: 'bold' }}>Offline / Outdated DLLs</span>
                                            </div>
                                            <div className="legacy-form-row">
                                                <span style={{ width: '80px' }}>Query Time:</span>
                                                <input className="legacy-input" readOnly value="14,280ms (Slow response)" />
                                            </div>
                                            <div className="legacy-form-row">
                                                <span style={{ width: '80px' }}>API Link:</span>
                                                <input className="legacy-input" readOnly value="Error 404: Web services not supported" />
                                            </div>
                                            <div className="legacy-alert">
                                                ⚠ Warning: Framework support discontinued. Security patches unavailable. Modernization required.
                                            </div>
                                            <div style={{ textAlign: 'center', marginTop: '14px' }}>
                                                <button
                                                    onClick={() => setModernizeTab('modern')}
                                                    style={{ background: '#000080', color: '#ffffff', border: '2px outset #ffffff', padding: '6px 14px', fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'inherit' }}
                                                >
                                                    Modernize System Now →
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 02 — SERVICE OVERVIEW
                ========================================================================= */}
                <section className="smd-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="smd-container">
                        <div className="overview-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Service Overview</span>
                                <h2 className="smd-heading-h2">
                                    What Is <span className="gradient-text">Software Modernization?</span>
                                </h2>
                                <p className="smd-subtext">
                                    Software modernization is the process of improving existing applications to address outdated technologies, changing business requirements, usability limitations and maintenance challenges.
                                </p>
                                <p className="smd-subtext">
                                    It may involve updating application interfaces, replacing unsupported components, improving architecture, integrating new services or moving suitable workloads to a different environment.
                                </p>
                                <p className="smd-subtext" style={{ marginBottom: 0 }}>
                                    A software modernization process does not always require rebuilding an entire application. The right approach depends on the software's current condition, business importance, technical dependencies and future requirements.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: '#FEF9C3', border: '1px solid rgba(250, 204, 21, 0.6)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, color: '#1F2937', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
                                    <Sparkles size={13} color="#EAB308" /> Key Highlights
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {overviewHighlights.map((item, idx) => (
                                        <div key={idx} className="key-highlight-card-smd">
                                            <div className="smd-icon-box">{item.icon}</div>
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.25rem' }}>
                                                    {item.title}
                                                </h3>
                                                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className="smd-chevron"><ChevronRight size={18} /></div>
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
                <section className="smd-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="smd-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">What We Deliver</span>
                            <h2 className="smd-heading-h2">
                                Our Software <span className="gradient-text">Modernization Services</span>
                            </h2>
                            <p className="smd-subtext" style={{ marginBottom: 0 }}>
                                We assess existing applications and plan improvements based on their architecture, business workflows and technical requirements.
                            </p>
                        </div>

                        <div className="services-grid-3x2" data-aos="fade-up">
                            {serviceCards.map((card, idx) => (
                                <Link to={card.link} key={idx} className="service-card-smd">
                                    <div className="svc-smd-icon">{card.icon}</div>
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
                <section className="smd-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="smd-container">
                        <div className="benefits-grid">
                            {/* Left: Visual */}
                            <div data-aos="fade-right">
                                <div style={{
                                    borderRadius: '28px',
                                    background: 'linear-gradient(150deg, #1e1b4b 0%, #0f172a 100%)',
                                    padding: '3rem 2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '460px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 25px 50px rgba(15, 23, 42, 0.12)'
                                }}>
                                    <div style={{ position: 'absolute', top: '20%', left: '10%', width: '180px', height: '180px', background: 'radial-gradient(circle, rgba(250,204,21,0.18) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

                                    <div style={{ width: '88px', height: '88px', borderRadius: '28px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem', boxShadow: '0 16px 36px rgba(250, 204, 21, 0.45)', zIndex: 1 }}>
                                        <RefreshCw size={44} color="#1F2937" />
                                    </div>

                                    <h3 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.75rem', zIndex: 1 }}>
                                        Benefits of Software Modernization
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '1rem', textAlign: 'center', lineHeight: 1.65, maxWidth: '320px', zIndex: 1 }}>
                                        Modernizing existing software can help businesses address technical limitations while preserving useful functionality and established workflows.
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1 }}>
                                        {['Preserve Logic', 'Modern UI/UX', 'Cloud-Ready'].map((t, i) => (
                                            <span key={i} style={{ padding: '6px 14px', background: 'rgba(250,204,21,0.12)', border: '1px solid rgba(250,204,21,0.25)', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 700, color: '#FEF9C3' }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Benefits List */}
                            <div data-aos="fade-left">
                                <span className="home-badge-tag">Strategic Value</span>
                                <h2 className="smd-heading-h2">
                                    Benefits of <span className="gradient-text">Software Modernization</span>
                                </h2>
                                <div style={{ marginTop: '1.5rem' }}>
                                    {businessBenefits.map((b, idx) => (
                                        <div key={idx} className="benefit-item">
                                            <div className="ben-icon-wrap">{b.icon}</div>
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
                <section className="smd-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="smd-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Domain Expertise</span>
                            <h2 className="smd-heading-h2">
                                Software Modernization for <span className="gradient-text">Different Industries</span>
                            </h2>
                            <p className="smd-subtext" style={{ marginBottom: 0 }}>
                                Many organizations depend on established software that supports critical workflows but may no longer meet current usability, integration or technical requirements.
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
                                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#EAB308', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.65rem' }}>
                                    {industries[activeIndustry].tag}
                                </span>
                                <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '1.15rem' }}>
                                    {industries[activeIndustry].title}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '2.25rem' }}>
                                    {industries[activeIndustry].desc}
                                </p>
                                <Link to={industries[activeIndustry].link} className="home-btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}>
                                    Explore {industries[activeIndustry].title} Modernization <ChevronRight size={18} />
                                </Link>
                            </div>

                            <div style={{ background: '#FEF9C3', borderRadius: '20px', padding: '2.5rem', border: '1px solid rgba(250, 204, 21, 0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)' }}>
                                    {React.cloneElement(industries[activeIndustry].icon, { size: 36, color: '#1F2937' })}
                                </div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                    Modernization for {industries[activeIndustry].title}
                                </h4>
                                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                                    Incremental upgrades, legacy data migration, modern interface redesign, and robust system APIs tailored to domain needs.
                                </p>
                            </div>
                        </div>

                        {/* Search bot fallback */}
                        <div style={{ display: 'none' }}>
                            {industries.map((ind, idx) => (
                                <div key={idx}><h3>{ind.title}</h3><p>{ind.desc}</p><Link to={ind.link}>{ind.title} software modernization</Link></div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 06 — MODERNIZATION PROCESS
                ========================================================================= */}
                <section className="smd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="smd-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Structured Delivery</span>
                            <h2 className="smd-heading-h2">
                                Our Software <span className="gradient-text">Modernization Process</span>
                            </h2>
                            <p className="smd-subtext" style={{ marginBottom: 0 }}>
                                We follow a structured approach to understand existing software, identify modernization priorities and plan changes with attention to business continuity.
                            </p>
                        </div>

                        <div data-aos="fade-up">
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
                <section className="smd-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="smd-container">
                        <div className="location-split">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Tamil Nadu Focus</span>
                                <h2 className="smd-heading-h2">
                                    Software Modernization Services in <span className="gradient-text">Tamil Nadu</span>
                                </h2>
                                <p className="smd-subtext">
                                    Businesses across Tamil Nadu rely on software applications developed at different stages of their growth. Some systems continue to support essential operations even when their interfaces, integrations or underlying technologies become outdated.
                                </p>
                                <p className="smd-subtext">
                                    In South Tamil Nadu, manufacturers, wholesalers, educational institutions, healthcare organizations and service providers may need to improve existing applications without unnecessarily disrupting established business workflows.
                                </p>
                                <p className="smd-subtext" style={{ marginBottom: '1.5rem' }}>
                                    FlyTowards provides software modernization services for businesses across Tamil Nadu, focusing on practical application improvements, technical compatibility and operational requirements.
                                </p>
                                <div className="location-city-tags">
                                    {['Tirunelveli', 'Madurai', 'Thoothukudi / Tuticorin', 'Tenkasi', 'Nagercoil', 'Virudhunagar', 'Sivakasi', 'Coimbatore', 'Chennai'].map((city, i) => (
                                        <span key={i} className="city-tag">
                                            <MapPin size={13} color="#EAB308" /> {city}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ background: '#f8fafc', borderRadius: '28px', padding: '3rem 2.5rem', border: '1px solid rgba(226, 232, 240, 0.8)', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
                                    <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)' }}>
                                        <MapPin size={30} color="#1F2937" />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.75rem' }}>
                                        Retain What Works. Upgrade What's Outdated.
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                                        Whether you need to update an internal management system or modernize an established software product, the first step is understanding what should be retained, improved or replaced.
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
                <section className="smd-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="smd-container">
                        <div className="why-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Proven Engineering</span>
                                <h2 className="smd-heading-h2">
                                    Why Choose FlyTowards as Your <span className="gradient-text">Software Modernization Company?</span>
                                </h2>
                                <p className="smd-subtext">
                                    Choosing a software modernization company involves understanding the condition of existing applications, the risks of changing them and the business value of each proposed improvement.
                                </p>
                                <Link to="/contact" className="home-btn-primary">
                                    Talk to Our Team <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {whyChoosePoints.map((item, idx) => (
                                        <div key={idx} className="differentiator-item">
                                            <div className="diff-number">{item.num}</div>
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
                <section className="smd-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="smd-container">
                        <div className="challenges-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Operational Diagnostic</span>
                                <h2 className="smd-heading-h2">
                                    When Does Your Business Need <span className="gradient-text">Software Modernization?</span>
                                </h2>
                                <p className="smd-subtext">
                                    Software modernization may be appropriate when an existing application remains valuable but its technical limitations affect usability, maintenance or future improvements.
                                </p>
                                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    If these challenges affect your business, a modernization assessment can help determine which improvements are technically and commercially appropriate.
                                </p>
                                <Link to="/contact" className="home-btn-primary">
                                    Discuss Your Existing Software <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {challenges.map((item, idx) => (
                                        <div key={idx} className="challenge-item">
                                            <div className="chk-box">
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
                <section className="smd-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="smd-container">
                        <div className="faq-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Clear Answers</span>
                                <h2 className="smd-heading-h2">
                                    Frequently Asked Questions About <span className="gradient-text">Software Modernization</span>
                                </h2>
                                <p className="smd-subtext">
                                    Key considerations around modernization vs redevelopment, process, timelines and costs for businesses in Tamil Nadu.
                                </p>
                                <div style={{ background: '#ffffff', borderRadius: '20px', padding: '1.75rem', border: '1px solid rgba(250, 204, 21, 0.3)', marginTop: '1.5rem' }}>
                                    <p style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                        Need an architecture review?
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1rem' }}>
                                        Our software modernization specialists in Tamil Nadu can evaluate your legacy application and recommend an incremental upgrade plan.
                                    </p>
                                    <Link to="/contact" style={{ color: '#EAB308', fontWeight: 800, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                                        Connect with our engineering desk <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div data-aos="fade-left">
                                {faqList.map((faq, idx) => (
                                    <div key={idx} className={`faq-accordion-item ${openFaq === idx ? 'active' : ''}`}>
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
                                            <div className="faq-accordion-body">{faq.a}</div>
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
                <section className="smd-section" style={{ background: '#f8fafc', paddingBottom: '120px' }}>
                    <div className="smd-container">
                        <div className="cta-banner" data-aos="zoom-in">
                            <div className="cta-banner-content">
                                <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#e0f2fe' }}>
                                    Transform Legacy Systems
                                </span>
                                <h2>Give Your Existing Software a Better Future</h2>
                                <p>
                                    Working with outdated applications, difficult integrations or software that no longer fits your business needs? FlyTowards helps businesses explore software modernization solutions focused on improving existing applications while considering operational requirements and technical constraints. Share your software challenges and take the next step toward a practical modernization plan.
                                </p>
                                <div className="cta-buttons-wrap">
                                    <Link to="/contact" className="cta-btn-primary-white">
                                        Discuss Your Modernization Project <ArrowRight size={18} />
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

export default SoftwareModernization;
