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
    Palette,
    Layout,
    Smartphone,
    MonitorSmartphone,
    Component,
    MousePointer,
    Figma,
    Eye,
    PenTool,
    Maximize2,
    Sliders,
    Zap,
    Users,
    ShieldCheck,
    Grid,
    CheckCircle2
} from 'lucide-react';

const UIUXDesign = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [activeIndustry, setActiveIndustry] = useState(0);
    const [canvasMode, setCanvasMode] = useState('hifi'); // 'hifi' | 'wireframe'

    useEffect(() => {
        window.scrollTo(0, 0);

        // SEO Title
        document.title = "UI/UX Design Services in Tamil Nadu | FlyTowards";

        // Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute(
            "content",
            "UI/UX design services in Tamil Nadu. FlyTowards designs intuitive websites, mobile apps and business software with user-focused interfaces and workflows."
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
            "ui ux design, user interface design, ui and ux design, ux design ui design, user interface and user experience design"
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
            "https://flytowardsdigitalinnovation.com/services/ui-ux-design/"
        );

        // Inject Structured Data (Schema.org: Service, Organization, BreadcrumbList, FAQPage)
        const schemaId = 'uiux-design-schema-script';
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
                    "@id": "https://flytowardsdigitalinnovation.com/services/ui-ux-design/#service",
                    "name": "UI/UX Design Services",
                    "serviceType": "User Interface & User Experience Design",
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
                    "description": "UI/UX design services in Tamil Nadu. FlyTowards designs intuitive websites, mobile apps and business software with user-focused interfaces and workflows.",
                    "url": "https://flytowardsdigitalinnovation.com/services/ui-ux-design/"
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://flytowardsdigitalinnovation.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://flytowardsdigitalinnovation.com/services/" },
                        { "@type": "ListItem", "position": 3, "name": "UI/UX Design", "item": "https://flytowardsdigitalinnovation.com/services/ui-ux-design/" }
                    ]
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is UI/UX design?",
                            "acceptedAnswer": { "@type": "Answer", "text": "UI/UX design combines user interface design and user experience design to create digital products that are visually clear, easy to navigate and suited to user needs." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is the difference between UI design and UX design?",
                            "acceptedAnswer": { "@type": "Answer", "text": "UI design focuses on visual and interactive elements such as layouts, buttons, colors and typography. UX design focuses on user journeys, information architecture, task flows and overall usability." }
                        },
                        {
                            "@type": "Question",
                            "name": "What do UI/UX design services include?",
                            "acceptedAnswer": { "@type": "Answer", "text": "UI/UX design services may include requirement analysis, user flow planning, information architecture, wireframing, visual interface design, prototyping and design handoff." }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does UI/UX design cost in Tamil Nadu?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Costs depend on the number of screens, application complexity, user flows, design requirements, prototypes and revision scope. A project assessment helps determine the design budget." }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does a UI/UX design project take?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Timelines depend on the number of pages or screens, interaction complexity, feedback cycles and required deliverables." }
                        },
                        {
                            "@type": "Question",
                            "name": "Can UI/UX design improve an existing website or application?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Existing interfaces can be reviewed and redesigned to address navigation problems, inconsistent layouts, difficult workflows and other usability concerns." }
                        },
                        {
                            "@type": "Question",
                            "name": "Is UI/UX design required before software development?",
                            "acceptedAnswer": { "@type": "Answer", "text": "UI/UX planning is useful for many software projects because it helps clarify screens, user interactions and functional expectations before implementation. The required design depth depends on project complexity." }
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
            title: "User-Centered Design",
            desc: "Plan interfaces around user goals and common tasks to minimize friction.",
            icon: <Users size={22} color="#EAB308" />
        },
        {
            title: "Clear Navigation",
            desc: "Organize information and application workflows logically for effortless discovery.",
            icon: <Layout size={22} color="#EAB308" />
        },
        {
            title: "Responsive Interfaces",
            desc: "Design flexible layouts tailored for desktop, tablet, and mobile displays.",
            icon: <MonitorSmartphone size={22} color="#EAB308" />
        },
        {
            title: "Consistent Visual Design",
            desc: "Establish reusable patterns, typography, and design tokens for a cohesive experience.",
            icon: <Component size={22} color="#EAB308" />
        }
    ];

    // Section 03 — Services Cards
    const serviceCards = [
        {
            icon: <Layout size={28} color="#EAB308" />,
            title: "Website UI/UX Design",
            desc: "Design clear website layouts, navigation structures and responsive interfaces that help visitors find relevant information.",
            link: "/services/web-application-development/"
        },
        {
            icon: <Smartphone size={28} color="#EAB308" />,
            title: "Mobile App UI/UX Design",
            desc: "Create mobile application screens and user flows suited to touch interactions, smaller displays and common mobile tasks.",
            link: "/services/mobile-app-development/"
        },
        {
            icon: <MonitorSmartphone size={28} color="#EAB308" />,
            title: "Web Application & Dashboard Design",
            desc: "Design interfaces for business portals, administrative dashboards and workflow-driven web applications.",
            link: "/services/enterprise-software-development/"
        },
        {
            icon: <Grid size={28} color="#EAB308" />,
            title: "Wireframing & Interactive Prototyping",
            desc: "Plan page structures, screen layouts and user interactions before development begins.",
            link: "/services/custom-software-development/"
        },
        {
            icon: <Component size={28} color="#EAB308" />,
            title: "UI Design Systems & Components",
            desc: "Define reusable interface elements, typography, spacing and visual patterns to support design consistency.",
            link: "/services/saas-development/"
        },
        {
            icon: <PenTool size={28} color="#EAB308" />,
            title: "UI/UX Redesign & Usability Improvement",
            desc: "Review existing interfaces and plan improvements to navigation, screen layouts and user workflows.",
            link: "/services/software-modernization/"
        }
    ];

    // Section 04 — Business Benefits
    const businessBenefits = [
        {
            title: "Make Digital Products Easier to Use",
            desc: "Create clearer layouts and interaction patterns that help users complete common tasks.",
            icon: <Zap size={22} color="#EAB308" />
        },
        {
            title: "Simplify User Journeys",
            desc: "Organize screens and workflows to reduce unnecessary steps and confusing navigation.",
            icon: <MousePointer size={22} color="#EAB308" />
        },
        {
            title: "Improve Visual Consistency",
            desc: "Use consistent interface components and design patterns across relevant pages and screens.",
            icon: <Component size={22} color="#EAB308" />
        },
        {
            title: "Support Different Devices",
            desc: "Plan responsive experiences for desktop, tablet and mobile users.",
            icon: <MonitorSmartphone size={22} color="#EAB308" />
        },
        {
            title: "Reduce Design Uncertainty Before Development",
            desc: "Use wireframes and prototypes to review important interactions before investing in full implementation.",
            icon: <ShieldCheck size={22} color="#EAB308" />
        }
    ];

    // Section 05 — Industries
    const industries = [
        {
            title: "Manufacturing",
            desc: "Design interfaces for production dashboards, inventory applications, procurement workflows and internal management systems.",
            icon: <HardHat size={26} />,
            link: "/industries/manufacturing",
            tag: "Shop Floor & Dashboards"
        },
        {
            title: "Healthcare",
            desc: "Create clear interfaces for appointment management, administrative applications and patient-facing digital services, with attention to accessibility and privacy.",
            icon: <Stethoscope size={26} />,
            link: "/industries/healthcare",
            tag: "Patient Portals & Clinical Apps"
        },
        {
            title: "Retail & Wholesale",
            desc: "Design product browsing experiences, ordering interfaces, customer portals and inventory management dashboards.",
            icon: <ShoppingBag size={26} />,
            link: "/industries/retail",
            tag: "E-Commerce & POS Layouts"
        },
        {
            title: "Education",
            desc: "Develop user-friendly designs for student portals, learning platforms, admission applications and institutional websites.",
            icon: <GraduationCap size={26} />,
            link: "/industries/education",
            tag: "Student LMS & Admissions"
        },
        {
            title: "Construction",
            desc: "Design project dashboards, material request interfaces, vendor portals and progress tracking applications.",
            icon: <Building2 size={26} />,
            link: "/industries/construction",
            tag: "Site Reporting & Vendor UI"
        },
        {
            title: "Logistics & Transportation",
            desc: "Create interfaces for shipment tracking, dispatch management, delivery updates and transport administration systems.",
            icon: <Truck size={26} />,
            link: "/industries/logistics",
            tag: "Fleet Tracking & Driver UI"
        }
    ];

    // Section 06 — Process Steps
    const processSteps = [
        { num: "01", title: "Requirement & User Understanding", desc: "Understand your business goals, target users, application features and important user tasks." },
        { num: "02", title: "Information Architecture & User Flow Planning", desc: "Organize content, navigation, screen relationships and key interaction paths." },
        { num: "03", title: "Wireframing", desc: "Create initial layouts that define content placement, screen structure and functional priorities." },
        { num: "04", title: "Visual UI Design", desc: "Develop interface designs using suitable typography, colors, spacing and reusable visual components." },
        { num: "05", title: "Prototyping & Design Review", desc: "Prepare interactive prototypes where appropriate and review navigation, interactions and usability considerations." },
        { num: "06", title: "Design Handoff & Refinement", desc: "Prepare agreed design assets and specifications for development, with refinements based on feedback and implementation requirements." }
    ];

    // Section 08 — Why Choose FlyTowards
    const whyChoosePoints = [
        {
            num: "01",
            title: "User-Focused Design Planning",
            desc: "We begin by understanding intended users, their tasks and the challenges they may face."
        },
        {
            num: "02",
            title: "Business Workflow Understanding",
            desc: "We consider how interface design supports application functionality and operational processes."
        },
        {
            num: "03",
            title: "Consistent Interface Design",
            desc: "We plan layouts, visual components and interaction patterns that support a cohesive product experience."
        },
        {
            num: "04",
            title: "Development-Aware Design",
            desc: "We consider responsive behavior, technical requirements and design handoff needs during the design process."
        }
    ];

    // Section 09 — Challenges
    const challenges = [
        "Your website or application has confusing navigation.",
        "Users find it difficult to complete important tasks.",
        "Your software interface looks outdated or inconsistent.",
        "Mobile users experience layout or interaction problems.",
        "You are planning a new website, mobile app or web application.",
        "Your business software contains complicated screens and workflows.",
        "You need wireframes or prototypes before starting development."
    ];

    // Section 10 — FAQs
    const faqList = [
        {
            q: "What is UI/UX design?",
            a: "UI/UX design combines user interface design and user experience design to create digital products that are visually clear, easy to navigate and suited to user needs."
        },
        {
            q: "What is the difference between UI design and UX design?",
            a: "UI design focuses on visual and interactive elements such as layouts, buttons, colors and typography. UX design focuses on user journeys, information architecture, task flows and overall usability."
        },
        {
            q: "What do UI/UX design services include?",
            a: "UI/UX design services may include requirement analysis, user flow planning, information architecture, wireframing, visual interface design, prototyping and design handoff."
        },
        {
            q: "How much does UI/UX design cost in Tamil Nadu?",
            a: "Costs depend on the number of screens, application complexity, user flows, design requirements, prototypes and revision scope. A project assessment helps determine the design budget."
        },
        {
            q: "How long does a UI/UX design project take?",
            a: "Timelines depend on the number of pages or screens, interaction complexity, feedback cycles and required deliverables."
        },
        {
            q: "Can UI/UX design improve an existing website or application?",
            a: "Yes. Existing interfaces can be reviewed and redesigned to address navigation problems, inconsistent layouts, difficult workflows and other usability concerns."
        },
        {
            q: "Is UI/UX design required before software development?",
            a: "UI/UX planning is useful for many software projects because it helps clarify screens, user interactions and functional expectations before implementation. The required design depth depends on project complexity."
        }
    ];

    return (
        <main style={{ fontFamily: "'Outfit', sans-serif" }}>
            {/* Ambient background glow */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '8%', right: '5%', width: '560px', height: '560px', background: 'radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(30, 27, 75, 0.07) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

                /* ─── Base ─── */
                .uiux-page-wrapper { position: relative; z-index: 1; }
                .uiux-container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; box-sizing: border-box; }
                .uiux-section { padding: 80px 0; position: relative; }
                @media (max-width: 768px) { .uiux-section { padding: 55px 0; } }

                /* ─── Typography ─── */
                .uiux-heading-h2 {
                    font-family: 'Outfit', sans-serif;
                    font-size: clamp(2rem, 3.5vw, 2.85rem);
                    font-weight: 800;
                    line-height: 1.25;
                    color: #1e1b4b;
                    margin-bottom: 1.2rem;
                    letter-spacing: -0.03em;
                }
                .uiux-subtext { font-size: 1.1rem; color: #64748b; line-height: 1.75; margin-bottom: 2rem; }

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

                /* Interactive Design Studio Canvas Card */
                .design-studio-canvas {
                    background: #1e1b4b;
                    border-radius: 32px;
                    padding: 1.75rem;
                    box-shadow: 0 35px 70px rgba(30, 27, 75, 0.35), 0 0 0 1px rgba(250, 204, 21, 0.2);
                    position: relative;
                    overflow: hidden;
                    animation: floatCanvas 6s ease-in-out infinite;
                }
                @keyframes floatCanvas {
                    0%, 100% { transform: translateY(0px); }
                    50%      { transform: translateY(-8px); }
                }

                /* Figma-style toolbar top */
                .canvas-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: rgba(15, 23, 42, 0.85);
                    border-radius: 16px;
                    padding: 8px 14px;
                    margin-bottom: 1.25rem;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .toolbar-mode-switch {
                    display: flex;
                    gap: 6px;
                    background: rgba(255, 255, 255, 0.06);
                    padding: 4px;
                    border-radius: 10px;
                }
                .mode-switch-btn {
                    padding: 6px 12px;
                    border-radius: 8px;
                    border: none;
                    background: transparent;
                    color: #94a3b8;
                    font-size: 0.78rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-family: 'Outfit', sans-serif;
                }
                .mode-switch-btn.active {
                    background: #FACC15;
                    color: #1F2937;
                    box-shadow: 0 2px 8px rgba(250, 204, 21, 0.35);
                }

                /* Artboard display */
                .artboard-container {
                    background: #0f172a;
                    border-radius: 20px;
                    padding: 1.5rem;
                    min-height: 320px;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid rgba(250, 204, 21, 0.2);
                }

                /* Simulated Cursor pointer float */
                .simulated-cursor {
                    position: absolute;
                    pointer-events: none;
                    z-index: 15;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    animation: cursorRoam 8s ease-in-out infinite;
                }
                @keyframes cursorRoam {
                    0%, 100% { top: 25%; left: 30%; }
                    33%      { top: 60%; left: 65%; }
                    66%      { top: 75%; left: 20%; }
                }
                .cursor-tag {
                    background: #FACC15;
                    color: #1F2937;
                    font-size: 0.68rem;
                    font-weight: 800;
                    padding: 2px 8px;
                    border-radius: 4px;
                    margin-left: 12px;
                    margin-top: -6px;
                    display: inline-block;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                }

                /* Design token pills bottom dock */
                .design-token-dock {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 1.25rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    flex-wrap: wrap;
                }
                .token-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 10px;
                    border-radius: 50px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    background: rgba(255, 255, 255, 0.05);
                    color: #e2e8f0;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .token-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                }

                /* ─── SECTION 02: OVERVIEW ─── */
                .overview-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: start;
                }
                @media (max-width: 992px) { .overview-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

                .key-highlight-card-uiux {
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
                .key-highlight-card-uiux:hover {
                    transform: translateX(12px);
                    background: linear-gradient(90deg, #FEF9C3 0%, #FFFFFF 100%);
                    border-color: rgba(250, 204, 21, 0.8);
                    border-left-color: #EAB308;
                    box-shadow: 0 12px 32px rgba(250, 204, 21, 0.22);
                }
                .key-highlight-card-uiux:hover .uiux-icon-box {
                    background: #FACC15;
                    transform: scale(1.12) rotate(6deg);
                    box-shadow: 0 8px 20px rgba(250, 204, 21, 0.4);
                }
                .key-highlight-card-uiux:hover .uiux-chevron {
                    opacity: 1;
                    transform: translateX(0);
                    color: #EAB308;
                }
                .uiux-chevron {
                    opacity: 0;
                    transform: translateX(-8px);
                    transition: all 0.3s ease;
                    margin-left: auto;
                    display: flex;
                    align-items: center;
                }
                .uiux-icon-box {
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

                .service-card-uiux {
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
                .service-card-uiux::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #FACC15, #EAB308);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.38s ease;
                }
                .service-card-uiux:hover {
                    transform: translateY(-10px);
                    border-color: rgba(250, 204, 21, 0.4);
                    box-shadow: 0 24px 50px rgba(250, 204, 21, 0.18);
                }
                .service-card-uiux:hover::before { transform: scaleX(1); }
                .service-card-uiux:hover .svc-uiux-icon {
                    background: #FACC15;
                    transform: scale(1.12) rotate(8deg);
                    box-shadow: 0 10px 24px rgba(250, 204, 21, 0.45);
                }
                .svc-uiux-icon {
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
                    background: #1e1b4b;
                    border-radius: 36px;
                    padding: 5rem 3rem;
                    color: #ffffff;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(30, 27, 75, 0.18);
                }
                .cta-banner::before {
                    content: none;
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

                /* Mobile layout: avoid horizontal overflow in long labels and actions. */
                @media (max-width: 640px) {
                    .uiux-container { padding-inline: 1rem; }
                    .uiux-section { padding-block: 3.25rem; }
                    .hero-grid, .overview-grid, .benefits-grid, .location-split,
                    .why-grid, .challenges-grid, .faq-grid, .industry-active-view {
                        grid-template-columns: minmax(0, 1fr) !important;
                        gap: 1.5rem;
                    }
                    .hero-grid > *, .overview-grid > *, .benefits-grid > *,
                    .location-split > *, .why-grid > *, .challenges-grid > *,
                    .faq-grid > *, .industry-active-view > * { min-width: 0; max-width: 100%; }
                    .hero-grid h1 { font-size: clamp(2.15rem, 10vw, 3rem) !important; line-height: 1.08 !important; overflow-wrap: anywhere; }
                    .uiux-heading-h2 { font-size: clamp(1.8rem, 8vw, 2.35rem) !important; line-height: 1.15 !important; overflow-wrap: anywhere; }
                    .hero-grid p, .uiux-subtext { font-size: 1rem; line-height: 1.65; }
                    .home-btn-primary, .home-btn-outline {
                        width: 100%; max-width: 100%; min-width: 0; justify-content: center;
                        padding: 1rem 1.1rem !important; white-space: normal; text-align: center;
                    }
                    .industry-tabs-header { display: flex; flex-wrap: nowrap; overflow-x: auto; padding: 0 0 .5rem; margin-inline: -1rem; padding-inline: 1rem; -webkit-overflow-scrolling: touch; }
                    .industry-tab-btn { flex: 0 0 auto; white-space: nowrap; }
                    .industry-active-view { padding: 1.5rem 1rem !important; }
                    .industry-active-view .topic-pill { max-width: 100%; white-space: normal; overflow-wrap: anywhere; padding: .6rem 1rem !important; }
                    .industry-active-view h3 { font-size: 1.5rem !important; }
                    .process-steps-row { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
                    .process-steps-row::before { display: none; }
                    .cta-banner { padding: 2.5rem 1rem; border-radius: 24px; }
                    .cta-banner h2 { font-size: clamp(1.8rem, 8vw, 2.35rem); line-height: 1.12; overflow-wrap: anywhere; }
                    .cta-banner p { font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem; }
                    .cta-buttons-wrap { flex-direction: column; align-items: stretch; gap: .75rem; }
                    .cta-btn-primary-white, .cta-btn-secondary-glass {
                        width: 100%; min-width: 0; justify-content: center; text-align: center;
                        padding: 1rem .9rem; font-size: .95rem; white-space: normal;
                    }
                    .faq-accordion-header { padding: 1rem; gap: .75rem; }
                }
            `}</style>

            <div className="uiux-page-wrapper">

                {/* =========================================================================
                    SECTION 01 — HERO
                ========================================================================= */}
                <section className="uiux-section" style={{ paddingTop: '140px', paddingBottom: '80px', background: 'transparent' }}>
                    <div className="uiux-container">
                        <div className="hero-grid">

                            {/* Left: Copy */}
                            <div data-aos="fade-right">
                                <span className="hero-tagline-pill">
                                    <Palette size={16} color="#EAB308" />
                                    UI/UX Design
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
                                    UI/UX Design Services in <span className="gradient-text">Tamil Nadu</span>
                                </h1>

                                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e1b4b', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                                    Create Digital Experiences That Feel Simple and Work Better
                                </p>

                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '560px' }}>
                                    Confusing navigation, cluttered interfaces and complicated user journeys can make websites and applications difficult to use.
                                    <br /><br />
                                    FlyTowards provides UI/UX design services for businesses across Tamil Nadu, with a focus on South Tamil Nadu. We design user-focused interfaces for websites, mobile applications and business software, helping organizations present information clearly and simplify digital interactions.
                                    <br /><br />
                                    From new application designs to improvements in existing interfaces, we focus on practical design solutions aligned with user needs and business goals.
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <Link to="/contact" className="home-btn-primary">
                                        Discuss Your Design Project <ArrowRight size={18} />
                                    </Link>
                                    <Link to="/services" className="home-btn-outline">
                                        Explore Our Services
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Design Studio Canvas with Mode Switcher & Simulated Cursor */}
                            <div data-aos="fade-left">
                                <div className="design-studio-canvas">

                                    {/* Toolbar */}
                                    <div className="canvas-toolbar">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FACC15', boxShadow: '0 0 8px #FACC15' }}></div>
                                            <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem' }}>FlyTowards Design System</span>
                                        </div>

                                        <div className="toolbar-mode-switch">
                                            <button
                                                onClick={() => setCanvasMode('hifi')}
                                                className={`mode-switch-btn ${canvasMode === 'hifi' ? 'active' : ''}`}
                                            >
                                                <Palette size={13} /> Visual UI
                                            </button>
                                            <button
                                                onClick={() => setCanvasMode('wireframe')}
                                                className={`mode-switch-btn ${canvasMode === 'wireframe' ? 'active' : ''}`}
                                            >
                                                <Grid size={13} /> Wireframe
                                            </button>
                                        </div>
                                    </div>

                                    {/* Artboard Frame */}
                                    <div className="artboard-container">
                                        {/* Roaming simulated cursor */}
                                        <div className="simulated-cursor">
                                            <MousePointer size={16} color="#FACC15" fill="#FACC15" />
                                            <span className="cursor-tag">Alex (Product Designer)</span>
                                        </div>

                                        {canvasMode === 'hifi' ? (
                                            <div>
                                                {/* Hi-Fi App Header */}
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <Layout size={15} color="#1F2937" />
                                                        </div>
                                                        <span style={{ color: '#ffffff', fontSize: '0.84rem', fontWeight: 800 }}>Analytics Workspace</span>
                                                    </div>
                                                    <span style={{ background: 'rgba(250,204,21,0.15)', color: '#FACC15', padding: '3px 10px', borderRadius: '50px', fontSize: '0.72rem', fontWeight: 800 }}>
                                                        8px Auto-Layout
                                                    </span>
                                                </div>

                                                {/* Hi-Fi Content Cards */}
                                                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '10px', marginBottom: '12px' }}>
                                                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(250,204,21,0.2)' }}>
                                                        <span style={{ color: '#94a3b8', fontSize: '0.68rem', fontWeight: 600 }}>Active Users</span>
                                                        <p style={{ color: '#FACC15', fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 6px' }}>24,850</p>
                                                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '38px' }}>
                                                            {[45, 60, 40, 75, 55, 90, 85, 95].map((h, i) => (
                                                                <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 7 ? '#FACC15' : 'rgba(250,204,21,0.3)', borderRadius: '2px 2px 0 0' }}></div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                        <div>
                                                            <span style={{ color: '#94a3b8', fontSize: '0.68rem', fontWeight: 600 }}>Conversion</span>
                                                            <p style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 800, margin: '2px 0' }}>4.8%</p>
                                                        </div>
                                                        <span style={{ color: '#4ade80', fontSize: '0.7rem', fontWeight: 700 }}>+18% Usability</span>
                                                    </div>
                                                </div>

                                                {/* Interactive Action Row */}
                                                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div style={{ display: 'flex', gap: '6px' }}>
                                                        {['#1e1b4b', '#0369a1', '#FACC15', '#ffffff'].map((c, i) => (
                                                            <div key={i} style={{ width: '16px', height: '16px', borderRadius: '50%', background: c, border: '1.5px solid rgba(255,255,255,0.3)' }}></div>
                                                        ))}
                                                    </div>
                                                    <span style={{ color: '#FACC15', fontSize: '0.75rem', fontWeight: 800 }}>Primary CTA Variant</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                {/* Wireframe Mode */}
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px dashed rgba(255,255,255,0.15)', paddingBottom: '0.75rem' }}>
                                                    <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontFamily: 'monospace' }}>[Wireframe: User_Flow_v2]</span>
                                                    <span style={{ color: '#38bdf8', fontSize: '0.72rem', fontFamily: 'monospace' }}>Grid: 12-Col</span>
                                                </div>

                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                                                    <div style={{ border: '1.5px dashed rgba(255,255,255,0.25)', borderRadius: '10px', padding: '12px', minHeight: '90px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                        <div style={{ height: '10px', width: '60%', background: 'rgba(255,255,255,0.15)', borderRadius: '4px' }}></div>
                                                        <div style={{ height: '16px', width: '85%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                                                        <div style={{ height: '8px', width: '40%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                                                    </div>

                                                    <div style={{ border: '1.5px dashed rgba(255,255,255,0.25)', borderRadius: '10px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <div style={{ width: '42px', height: '42px', border: '1.5px dashed #FACC15', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FACC15', fontSize: '0.7rem' }}>
                                                            Hero
                                                        </div>
                                                    </div>
                                                </div>

                                                <div style={{ border: '1.5px dashed rgba(255,255,255,0.2)', borderRadius: '8px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span style={{ color: '#94a3b8', fontSize: '0.72rem', fontFamily: 'monospace' }}>&lt;Component: NavGroup /&gt;</span>
                                                    <span style={{ color: '#4ade80', fontSize: '0.72rem', fontFamily: 'monospace' }}>State: Validated</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Tokens Dock */}
                                    <div className="design-token-dock">
                                        <div className="token-chip">
                                            <span className="token-dot" style={{ background: '#FACC15' }}></span> WCAG AAA
                                        </div>
                                        <div className="token-chip">
                                            <span className="token-dot" style={{ background: '#38bdf8' }}></span> Responsive
                                        </div>
                                        <div className="token-chip">
                                            <span className="token-dot" style={{ background: '#4ade80' }}></span> Design System
                                        </div>
                                        <div className="token-chip">
                                            <span className="token-dot" style={{ background: '#c084fc' }}></span> Prototypes
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
                <section className="uiux-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="uiux-container">
                        <div className="overview-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Service Overview</span>
                                <h2 className="uiux-heading-h2">
                                    What Is <span className="gradient-text">UI/UX Design?</span>
                                </h2>
                                <p className="uiux-subtext">
                                    UI/UX design combines user interface design (UI) and user experience design (UX) to create digital products that are clear, usable and visually consistent.
                                </p>
                                <p className="uiux-subtext">
                                    UI design focuses on the appearance and interactive elements of a product, including layouts, typography, buttons, colors and visual components.
                                </p>
                                <p className="uiux-subtext" style={{ marginBottom: 0 }}>
                                    UX design focuses on how people navigate and interact with the product, including information structure, user journeys, task flows and usability. Together, user interface and user experience design help businesses create websites and applications that support users in completing their intended tasks.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: '#FEF9C3', border: '1px solid rgba(250, 204, 21, 0.6)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, color: '#1F2937', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
                                    <Sparkles size={13} color="#EAB308" /> Key Highlights
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {overviewHighlights.map((item, idx) => (
                                        <div key={idx} className="key-highlight-card-uiux">
                                            <div className="uiux-icon-box">{item.icon}</div>
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.25rem' }}>
                                                    {item.title}
                                                </h3>
                                                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className="uiux-chevron"><ChevronRight size={18} /></div>
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
                <section className="uiux-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="uiux-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Design Capabilities</span>
                            <h2 className="uiux-heading-h2">
                                Our UI/UX <span className="gradient-text">Design Services</span>
                            </h2>
                            <p className="uiux-subtext" style={{ marginBottom: 0 }}>
                                We design digital interfaces and user journeys based on application requirements, intended users and business workflows.
                            </p>
                        </div>

                        <div className="services-grid-3x2" data-aos="fade-up">
                            {serviceCards.map((card, idx) => (
                                <Link to={card.link} key={idx} className="service-card-uiux">
                                    <div className="svc-uiux-icon">{card.icon}</div>
                                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.65rem', lineHeight: 1.35 }}>
                                        {card.title}
                                    </h3>
                                    <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                                        {card.desc}
                                    </p>
                                    <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#EAB308', fontWeight: 800, fontSize: '0.88rem' }}>
                                        Explore service <ChevronRight size={16} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 04 — BUSINESS BENEFITS
                ========================================================================= */}
                <section className="uiux-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="uiux-container">
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
                                        <Palette size={44} color="#1F2937" />
                                    </div>

                                    <h3 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.75rem', zIndex: 1 }}>
                                        Benefits of Professional UI/UX Design
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '1rem', textAlign: 'center', lineHeight: 1.65, maxWidth: '320px', zIndex: 1 }}>
                                        Thoughtful UI and UX design can make digital products easier to understand, navigate and use.
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1 }}>
                                        {['Intuitive', 'Consistent', 'User-Tested'].map((t, i) => (
                                            <span key={i} style={{ padding: '6px 14px', background: 'rgba(250,204,21,0.12)', border: '1px solid rgba(250,204,21,0.25)', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 700, color: '#FEF9C3' }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Benefits List */}
                            <div data-aos="fade-left">
                                <span className="home-badge-tag">Measurable Value</span>
                                <h2 className="uiux-heading-h2">
                                    Benefits of Professional <span className="gradient-text">UI/UX Design</span>
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
                <section className="uiux-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="uiux-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Domain Expertise</span>
                            <h2 className="uiux-heading-h2">
                                UI/UX Design Solutions for <span className="gradient-text">Different Industries</span>
                            </h2>
                            <p className="uiux-subtext" style={{ marginBottom: 0 }}>
                                Different industries require interfaces that reflect their users, information needs and operational workflows.
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
                                <span className="topic-pill topic-pill--navy" style={{ fontSize: '0.85rem', fontWeight: 800, color: '#EAB308', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.65rem' }}>
                                    {industries[activeIndustry].tag}
                                </span>
                                <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '1.15rem' }}>
                                    {industries[activeIndustry].title}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '2.25rem' }}>
                                    {industries[activeIndustry].desc}
                                </p>
                                <Link to={industries[activeIndustry].link} className="home-btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}>
                                    Explore {industries[activeIndustry].title} Designs <ChevronRight size={18} />
                                </Link>
                            </div>

                            <div style={{ background: '#FEF9C3', borderRadius: '20px', padding: '2.5rem', border: '1px solid rgba(250, 204, 21, 0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)' }}>
                                    {React.cloneElement(industries[activeIndustry].icon, { size: 36, color: '#1F2937' })}
                                </div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                    UI/UX for {industries[activeIndustry].title}
                                </h4>
                                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                                    Role-specific layouts, accessibility compliance, low visual clutter, and ergonomic interaction models tailored to industry standards.
                                </p>
                            </div>
                        </div>

                        {/* Search bot fallback */}
                        <div style={{ display: 'none' }}>
                            {industries.map((ind, idx) => (
                                <div key={idx}><h3>{ind.title}</h3><p>{ind.desc}</p><Link to={ind.link}>{ind.title} ui ux design solutions</Link></div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 06 — DESIGN PROCESS
                ========================================================================= */}
                <section className="uiux-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="uiux-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Structured Methodology</span>
                            <h2 className="uiux-heading-h2">
                                Our UI/UX <span className="gradient-text">Design Process</span>
                            </h2>
                            <p className="uiux-subtext" style={{ marginBottom: 0 }}>
                                We follow a structured design approach to understand user needs, organize information and develop interfaces that support practical interactions.
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
                <section className="uiux-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="uiux-container">
                        <div className="location-split">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Tamil Nadu Focus</span>
                                <h2 className="uiux-heading-h2">
                                    UI/UX Design Services in <span className="gradient-text">Tamil Nadu</span>
                                </h2>
                                <p className="uiux-subtext">
                                    Businesses across Tamil Nadu use websites, mobile applications and internal software to serve customers, coordinate employees and manage daily activities.
                                </p>
                                <p className="uiux-subtext">
                                    In South Tamil Nadu, manufacturers, retailers, educational institutions, healthcare organizations and service providers may need digital interfaces that are easy for their intended users to navigate.
                                </p>
                                <p className="uiux-subtext" style={{ marginBottom: '1.5rem' }}>
                                    FlyTowards provides UI/UX design services for businesses across Tamil Nadu, focusing on clear layouts, practical workflows and consistent digital experiences.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ background: '#f8fafc', borderRadius: '28px', padding: '3rem 2.5rem', border: '1px solid rgba(226, 232, 240, 0.8)', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
                                    <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)' }}>
                                        <MapPin size={30} color="#1F2937" />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.75rem' }}>
                                        New Applications or Existing Interface Redesigns
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                                        Whether you are planning a new application or redesigning an existing interface, we focus on design decisions that reflect your users and business requirements.
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
                <section className="uiux-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="uiux-container">
                        <div className="why-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Proven Engineering</span>
                                <h2 className="uiux-heading-h2">
                                    Why Choose FlyTowards for <span className="gradient-text">UI/UX Design?</span>
                                </h2>
                                <p className="uiux-subtext">
                                    Choosing a UI/UX design partner involves more than reviewing visual styles. Effective design should consider how users interact with a product and how the interface supports business requirements.
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
                <section className="uiux-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="uiux-container">
                        <div className="challenges-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Operational Diagnostic</span>
                                <h2 className="uiux-heading-h2">
                                    When Does Your Business Need <span className="gradient-text">UI/UX Design Services?</span>
                                </h2>
                                <p className="uiux-subtext">
                                    UI/UX design may be valuable when users struggle with an existing digital product or when a new application needs a clear interface and interaction structure.
                                </p>
                                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    If these challenges affect your digital product, a UI/UX design assessment can help identify suitable improvements.
                                </p>
                                <Link to="/contact" className="home-btn-primary">
                                    Discuss Your UI/UX Requirements <ArrowRight size={18} />
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
                <section className="uiux-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="uiux-container">
                        <div className="faq-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Clear Answers</span>
                                <h2 className="uiux-heading-h2">
                                    Frequently Asked Questions About <span className="gradient-text">UI/UX Design</span>
                                </h2>
                                <p className="uiux-subtext">
                                    Key considerations around UI vs UX, design deliverables, development handoff, timelines and design costs in Tamil Nadu.
                                </p>
                                <div style={{ background: '#ffffff', borderRadius: '20px', padding: '1.75rem', border: '1px solid rgba(250, 204, 21, 0.3)', marginTop: '1.5rem' }}>
                                    <p style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                        Need a design critique or audit?
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1rem' }}>
                                        Our UI/UX specialists in Tamil Nadu are ready to evaluate your current interfaces and provide practical usability recommendations.
                                    </p>
                                    <Link to="/contact" style={{ color: '#EAB308', fontWeight: 800, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                                        Connect with our design team <ChevronRight size={18} />
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
                <section className="uiux-section" style={{ background: '#f8fafc', paddingBottom: '120px' }}>
                    <div className="uiux-container">
                        <div className="cta-banner" data-aos="zoom-in">
                            <div className="cta-banner-content">
                                <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#e0f2fe' }}>
                                    Transform Your Experience
                                </span>
                                <h2>Design a Digital Experience Your Users Can Navigate with Confidence</h2>
                                <p>
                                    Planning a new website, mobile app or business application? Need to improve an existing interface? FlyTowards helps businesses explore UI/UX design solutions focused on clear navigation, consistent interfaces and practical user workflows. Share your design requirements and take the next step toward a more user-friendly digital product.
                                </p>
                                <div className="cta-buttons-wrap">
                                    <Link to="/contact" className="cta-btn-primary-white">
                                        Discuss Your Design Project <ArrowRight size={18} />
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

export default UIUXDesign;
