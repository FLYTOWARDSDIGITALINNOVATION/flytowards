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
    Workflow,
    GitBranch,
    FileCheck2,
    Clock,
    Cpu,
    Bell,
    CheckCircle2,
    Database,
    ShieldCheck,
    Zap,
    Users,
    Activity,
    Sliders,
    RefreshCw
} from 'lucide-react';

const BusinessProcessAutomation = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [activeIndustry, setActiveIndustry] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        // SEO Title
        document.title = "Business Process Automation in Tamil Nadu | FlyTowards";

        // Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute(
            "content",
            "Business process automation services in Tamil Nadu. FlyTowards helps automate workflows, approvals, data processing and repetitive business tasks."
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
            "business process automation, business process and workflow management, business process workflow management, automated data processing, workflow automation"
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
            "https://flytowardsdigitalinnovation.com/services/business-process-automation/"
        );

        // Inject Structured Data (Schema.org: Service, Organization, BreadcrumbList, FAQPage)
        const schemaId = 'bpa-schema-script';
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
                    "@id": "https://flytowardsdigitalinnovation.com/services/business-process-automation/#service",
                    "name": "Business Process Automation Services",
                    "serviceType": "Workflow Automation & Automated Data Processing",
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
                    "description": "Business process automation services in Tamil Nadu. FlyTowards helps automate workflows, approvals, data processing and repetitive business tasks.",
                    "url": "https://flytowardsdigitalinnovation.com/services/business-process-automation/"
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://flytowardsdigitalinnovation.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://flytowardsdigitalinnovation.com/services/" },
                        { "@type": "ListItem", "position": 3, "name": "Business Process Automation", "item": "https://flytowardsdigitalinnovation.com/services/business-process-automation/" }
                    ]
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is business process automation?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Business process automation uses software to perform repeatable tasks and coordinate business activities according to predefined rules, conditions and workflows." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is the difference between business process automation and workflow automation?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Workflow automation focuses on automating steps within a defined sequence of work. Business process automation can cover broader processes involving multiple workflows, departments and software applications." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is business process workflow management?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Business process workflow management involves designing, organizing, monitoring and improving how tasks and information move through a business process. Automation can support selected steps within those workflows." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is automated data processing?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Automated data processing uses software to handle tasks such as validating, transforming, organizing and transferring information according to defined rules, reducing the need for manual intervention." }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does business process automation cost in Tamil Nadu?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Costs depend on workflow complexity, business rules, integrations, user roles, data requirements and the number of processes involved. A requirements assessment helps determine the project budget." }
                        },
                        {
                            "@type": "Question",
                            "name": "Can business process automation integrate with ERP and CRM software?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Automation can often connect compatible ERP, CRM and other business applications through supported APIs or integration methods. Feasibility depends on the systems involved." }
                        },
                        {
                            "@type": "Question",
                            "name": "Does business process automation require replacing existing software?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Not always. Many workflows can be automated by connecting or extending existing applications. Some processes may require new functionality or changes to current systems." }
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
            title: "Workflow Automation",
            desc: "Move tasks through predefined stages and conditions automatically.",
            icon: <Workflow size={22} color="#EAB308" />
        },
        {
            title: "Automated Data Processing",
            desc: "Validate, transfer and update information between supported systems without manual entry.",
            icon: <Database size={22} color="#EAB308" />
        },
        {
            title: "Approval Management",
            desc: "Route requests to the appropriate people with real-time status and notifications.",
            icon: <FileCheck2 size={22} color="#EAB308" />
        },
        {
            title: "System Connectivity",
            desc: "Coordinate activities and data synchronization across compatible business applications.",
            icon: <GitBranch size={22} color="#EAB308" />
        }
    ];

    // Section 03 — Services Cards
    const serviceCards = [
        {
            icon: <Workflow size={28} color="#EAB308" />,
            title: "Custom Workflow Automation",
            desc: "Automate repetitive tasks, status changes, task assignments and workflow transitions based on defined business rules.",
            link: "/services/custom-software-development/"
        },
        {
            icon: <FileCheck2 size={28} color="#EAB308" />,
            title: "Approval Workflow Development",
            desc: "Build structured approval processes for purchase requests, expenses, internal requests and other business activities.",
            link: "/services/enterprise-software-development/"
        },
        {
            icon: <Database size={28} color="#EAB308" />,
            title: "Automated Data Processing",
            desc: "Develop solutions to validate, organize, transform and transfer business information between compatible systems.",
            link: "/services/api-development/"
        },
        {
            icon: <Activity size={28} color="#EAB308" />,
            title: "Document & Form Workflow Automation",
            desc: "Simplify form submissions, document routing, status tracking and related administrative activities.",
            link: "/services/custom-software-development/"
        },
        {
            icon: <GitBranch size={28} color="#EAB308" />,
            title: "ERP & CRM Process Automation",
            desc: "Connect supported ERP, CRM and other business applications to coordinate records, tasks and operational workflows.",
            link: "/services/erp-development/"
        },
        {
            icon: <RefreshCw size={28} color="#EAB308" />,
            title: "Business Process Integration & Enhancement",
            desc: "Improve existing automated workflows, integrate compatible applications and adapt processes as business requirements change.",
            link: "/services/ai-software-development/"
        }
    ];

    // Section 04 — Business Benefits
    const businessBenefits = [
        {
            title: "Reduce Repetitive Manual Tasks",
            desc: "Automate suitable activities such as notifications, record updates and routine task assignments.",
            icon: <Zap size={22} color="#EAB308" />
        },
        {
            title: "Speed Up Internal Approvals",
            desc: "Route requests to designated reviewers and provide visibility into approval status.",
            icon: <Clock size={22} color="#EAB308" />
        },
        {
            title: "Improve Process Consistency",
            desc: "Apply defined business rules to repeatable workflows and reduce variation in routine steps.",
            icon: <ShieldCheck size={22} color="#EAB308" />
        },
        {
            title: "Keep Teams Informed",
            desc: "Use status updates, reminders and task notifications to support coordination between departments.",
            icon: <Bell size={22} color="#EAB308" />
        },
        {
            title: "Improve Workflow Visibility",
            desc: "Track pending tasks, completed activities and process stages through relevant dashboards and records.",
            icon: <BarChart3 size={22} color="#EAB308" />
        }
    ];

    // Section 05 — Industries
    const industries = [
        {
            title: "Manufacturing",
            desc: "Automate purchase request routing, material requisition approvals, production-related notifications and operational record updates.",
            icon: <HardHat size={26} />,
            link: "/industries/manufacturing",
            tag: "Production & Approvals"
        },
        {
            title: "Healthcare",
            desc: "Support administrative approval workflows, appointment-related notifications, document routing and non-clinical data processing, with appropriate privacy controls.",
            icon: <Stethoscope size={26} />,
            link: "/industries/healthcare",
            tag: "Admin & Notifications"
        },
        {
            title: "Retail & Wholesale",
            desc: "Automate order notifications, stock-related updates, purchase approvals and selected customer or supplier workflows.",
            icon: <ShoppingBag size={26} />,
            link: "/industries/retail",
            tag: "Orders & Stock Sync"
        },
        {
            title: "Education",
            desc: "Streamline admission-related administration, internal requests, document verification workflows and institutional approvals.",
            icon: <GraduationCap size={26} />,
            link: "/industries/education",
            tag: "Admissions & Documents"
        },
        {
            title: "Construction",
            desc: "Automate material request approvals, vendor document routing, project status notifications and expense-related workflows.",
            icon: <Building2 size={26} />,
            link: "/industries/construction",
            tag: "Requisitions & Site Logs"
        },
        {
            title: "Logistics & Transportation",
            desc: "Coordinate dispatch notifications, delivery status updates, document handling and transport-related administrative processes.",
            icon: <Truck size={26} />,
            link: "/industries/logistics",
            tag: "Dispatch & Consignments"
        }
    ];

    // Section 06 — Process Steps
    const processSteps = [
        { num: "01", title: "Business Process Analysis", desc: "Review how tasks move between employees, departments and software applications, including existing delays and manual activities." },
        { num: "02", title: "Workflow Mapping & Automation Planning", desc: "Define workflow stages, business rules, exceptions, approval requirements and suitable automation opportunities." },
        { num: "03", title: "Automation Solution Development", desc: "Develop agreed workflows, task routing, notifications, data processing logic and supporting application features." },
        { num: "04", title: "Testing & Workflow Validation", desc: "Test business rules, user permissions, exception handling, data accuracy and end-to-end workflow behavior." },
        { num: "05", title: "Deployment & Process Implementation", desc: "Configure the automation solution, connect supported systems and prepare the agreed workflows for use." },
        { num: "06", title: "Monitoring & Process Improvement", desc: "Review workflow performance, resolve issues and plan refinements as operational requirements change." }
    ];

    // Section 08 — Why Choose FlyTowards
    const whyChoosePoints = [
        {
            num: "01",
            title: "Process-First Planning",
            desc: "We begin by understanding your current workflows, manual tasks, approval requirements and operational challenges."
        },
        {
            num: "02",
            title: "Custom Automation Workflows",
            desc: "Automation logic is planned around your business rules, team responsibilities and required process stages."
        },
        {
            num: "03",
            title: "Connected Application Planning",
            desc: "We consider how automation can work with compatible ERP, CRM, web applications and other business tools."
        },
        {
            num: "04",
            title: "Practical Control & Improvement",
            desc: "We consider exception handling, human approvals, workflow visibility and future process changes during solution planning."
        }
    ];

    // Section 09 — Challenges
    const challenges = [
        "Employees repeatedly enter the same information into different systems.",
        "Internal approvals take longer because requests move manually.",
        "Teams rely on messages or spreadsheets to track task status.",
        "Important follow-ups and notifications are frequently missed.",
        "Documents must pass through several employees for review.",
        "Business processes involve multiple disconnected applications.",
        "Managers need clearer visibility into pending and completed workflows."
    ];

    // Section 10 — FAQs
    const faqList = [
        {
            q: "What is business process automation?",
            a: "Business process automation uses software to perform repeatable tasks and coordinate business activities according to predefined rules, conditions and workflows."
        },
        {
            q: "What is the difference between business process automation and workflow automation?",
            a: "Workflow automation focuses on automating steps within a defined sequence of work. Business process automation can cover broader processes involving multiple workflows, departments and software applications."
        },
        {
            q: "What is business process workflow management?",
            a: "Business process workflow management involves designing, organizing, monitoring and improving how tasks and information move through a business process. Automation can support selected steps within those workflows."
        },
        {
            q: "What is automated data processing?",
            a: "Automated data processing uses software to handle tasks such as validating, transforming, organizing and transferring information according to defined rules, reducing the need for manual intervention."
        },
        {
            q: "How much does business process automation cost in Tamil Nadu?",
            a: "Costs depend on workflow complexity, business rules, integrations, user roles, data requirements and the number of processes involved. A requirements assessment helps determine the project budget."
        },
        {
            q: "Can business process automation integrate with ERP and CRM software?",
            a: "Yes. Automation can often connect compatible ERP, CRM and other business applications through supported APIs or integration methods. Feasibility depends on the systems involved."
        },
        {
            q: "Does business process automation require replacing existing software?",
            a: "Not always. Many workflows can be automated by connecting or extending existing applications. Some processes may require new functionality or changes to current systems."
        }
    ];

    // Hero interactive workflow stages
    const workflowStages = [
        { name: "Request", status: "Completed", icon: <FileCheck2 size={15} color="#1F2937" />, time: "0.2s" },
        { name: "Approval", status: "Active", icon: <CheckCircle2 size={15} color="#1F2937" />, time: "Auto-Routed" },
        { name: "Data Processing", status: "Processing", icon: <Database size={15} color="#1F2937" />, time: "Verified" },
        { name: "Notification", status: "Queued", icon: <Bell size={15} color="#1F2937" />, time: "Instant" },
        { name: "Completion", status: "Ready", icon: <Zap size={15} color="#1F2937" />, time: "100%" }
    ];

    return (
        <main style={{ fontFamily: "'Outfit', sans-serif" }}>
            {/* Ambient glow background */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '10%', right: '8%', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(30, 27, 75, 0.06) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

                /* ─── Base ─── */
                .bpa-page-wrapper { position: relative; z-index: 1; }
                .bpa-container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; box-sizing: border-box; }
                .bpa-section { padding: 80px 0; position: relative; }
                @media (max-width: 768px) { .bpa-section { padding: 55px 0; } }

                /* ─── Typography ─── */
                .bpa-heading-h2 {
                    font-family: 'Outfit', sans-serif;
                    font-size: clamp(2rem, 3.5vw, 2.85rem);
                    font-weight: 800;
                    line-height: 1.25;
                    color: #1e1b4b;
                    margin-bottom: 1.2rem;
                    letter-spacing: -0.03em;
                }
                .bpa-subtext { font-size: 1.1rem; color: #64748b; line-height: 1.75; margin-bottom: 2rem; }

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

                /* Workflow Pipeline Visual */
                .workflow-pipeline-card {
                    background: #1e1b4b;
                    border-radius: 32px;
                    padding: 2.25rem 2rem;
                    box-shadow: 0 35px 70px rgba(30, 27, 75, 0.3), 0 0 0 1px rgba(250, 204, 21, 0.2);
                    position: relative;
                    overflow: hidden;
                    animation: floatPipeline 6s ease-in-out infinite;
                }
                @keyframes floatPipeline {
                    0%, 100% { transform: translateY(0px); }
                    50%      { transform: translateY(-8px); }
                }

                .pipeline-track {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    z-index: 2;
                }
                .pipeline-node-row {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 12px 16px;
                    transition: all 0.3s ease;
                }
                .pipeline-node-row:hover {
                    background: rgba(250, 204, 21, 0.08);
                    border-color: rgba(250, 204, 21, 0.4);
                    transform: translateX(6px);
                }
                .pipeline-node-badge {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    background: #FACC15;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: 0 4px 12px rgba(250, 204, 21, 0.35);
                }
                .node-status-chip {
                    margin-left: auto;
                    padding: 3px 10px;
                    border-radius: 50px;
                    font-size: 0.72rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .chip-completed { background: rgba(34, 197, 94, 0.2); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); }
                .chip-active    { background: rgba(250, 204, 21, 0.25); color: #FACC15; border: 1px solid rgba(250, 204, 21, 0.5); animation: pulseActive 2s infinite; }
                .chip-processing{ background: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); }
                .chip-queued    { background: rgba(148, 163, 184, 0.15); color: #94a3b8; }
                .chip-ready     { background: rgba(168, 85, 247, 0.2); color: #c084fc; }

                @keyframes pulseActive {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.4); }
                    50%      { box-shadow: 0 0 0 6px rgba(250, 204, 21, 0); }
                }

                .pipeline-connecting-line {
                    width: 2px;
                    height: 12px;
                    background: linear-gradient(180deg, #FACC15, transparent);
                    margin: -6px 0 -6px 33px;
                    z-index: 1;
                }

                /* ─── SECTION 02: OVERVIEW ─── */
                .overview-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: start;
                }
                @media (max-width: 992px) { .overview-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

                .key-highlight-card-bpa {
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
                .key-highlight-card-bpa:hover {
                    transform: translateX(12px);
                    background: linear-gradient(90deg, #FEF9C3 0%, #FFFFFF 100%);
                    border-color: rgba(250, 204, 21, 0.8);
                    border-left-color: #EAB308;
                    box-shadow: 0 12px 32px rgba(250, 204, 21, 0.22);
                }
                .key-highlight-card-bpa:hover .bpa-icon-box {
                    background: #FACC15;
                    transform: scale(1.12) rotate(6deg);
                    box-shadow: 0 8px 20px rgba(250, 204, 21, 0.4);
                }
                .key-highlight-card-bpa:hover .bpa-chevron {
                    opacity: 1;
                    transform: translateX(0);
                    color: #EAB308;
                }
                .bpa-chevron {
                    opacity: 0;
                    transform: translateX(-8px);
                    transition: all 0.3s ease;
                    margin-left: auto;
                    display: flex;
                    align-items: center;
                }
                .bpa-icon-box {
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

                .service-card-bpa {
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
                .service-card-bpa::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #FACC15, #EAB308);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.38s ease;
                }
                .service-card-bpa:hover {
                    transform: translateY(-10px);
                    border-color: rgba(250, 204, 21, 0.4);
                    box-shadow: 0 24px 50px rgba(250, 204, 21, 0.18);
                }
                .service-card-bpa:hover::before { transform: scaleX(1); }
                .service-card-bpa:hover .svc-bpa-icon {
                    background: #FACC15;
                    transform: scale(1.12) rotate(8deg);
                    box-shadow: 0 10px 24px rgba(250, 204, 21, 0.45);
                }
                .svc-bpa-icon {
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

            <div className="bpa-page-wrapper">

                {/* =========================================================================
                    SECTION 01 — HERO
                ========================================================================= */}
                <section className="bpa-section" style={{ paddingTop: '140px', paddingBottom: '80px', background: 'transparent' }}>
                    <div className="bpa-container">
                        <div className="hero-grid">

                            {/* Left: Copy */}
                            <div data-aos="fade-right">
                                <span className="hero-tagline-pill">
                                    <Workflow size={16} color="#EAB308" />
                                    Business Process Automation
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
                                    Business Process Automation Services in <span className="gradient-text">Tamil Nadu</span>
                                </h1>

                                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e1b4b', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                                    Reduce Manual Work. Keep Business Processes Moving.
                                </p>

                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '560px' }}>
                                    Repeated data entry, delayed approvals and manual follow-ups can slow down daily operations and create unnecessary work for your team.
                                    <br /><br />
                                    FlyTowards provides business process automation services for businesses across Tamil Nadu, with a focus on South Tamil Nadu. We develop software solutions that automate repetitive tasks, connect business applications and help teams manage workflows more efficiently.
                                    <br /><br />
                                    From approval systems to automated data processing, we focus on practical automation aligned with your business requirements.
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <Link to="/contact" className="home-btn-primary">
                                        Discuss Your Automation Project <ArrowRight size={18} />
                                    </Link>
                                    <Link to="/services" className="home-btn-outline">
                                        Explore Our Services
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Workflow Pipeline Visual */}
                            <div data-aos="fade-left">
                                <div className="workflow-pipeline-card">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(250,204,21,0.15)', paddingBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FACC15', boxShadow: '0 0 10px #FACC15' }}></div>
                                            <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.92rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                                Live Workflow Pipeline
                                            </span>
                                        </div>
                                        <span style={{ color: '#FACC15', fontSize: '0.8rem', fontWeight: 700, background: 'rgba(250,204,21,0.12)', padding: '4px 10px', borderRadius: '50px' }}>
                                            Automated
                                        </span>
                                    </div>

                                    <div className="pipeline-track">
                                        {workflowStages.map((st, i) => (
                                            <React.Fragment key={i}>
                                                <div className="pipeline-node-row">
                                                    <div className="pipeline-node-badge">
                                                        {st.icon}
                                                    </div>
                                                    <div>
                                                        <p style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.92rem', margin: 0 }}>
                                                            {st.name}
                                                        </p>
                                                        <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: '2px 0 0' }}>
                                                            {st.time}
                                                        </p>
                                                    </div>
                                                    <span className={`node-status-chip chip-${st.status.toLowerCase()}`}>
                                                        {st.status}
                                                    </span>
                                                </div>
                                                {i < workflowStages.length - 1 && (
                                                    <div className="pipeline-connecting-line"></div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>

                                    <div style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '14px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <CheckCircle2 size={16} color="#4ade80" />
                                            <span style={{ color: '#cbd5e1', fontSize: '0.8rem', fontWeight: 600 }}>Zero Data Redundancy</span>
                                        </div>
                                        <span style={{ color: '#FACC15', fontSize: '0.8rem', fontWeight: 800 }}>Audit Trail Active</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 02 — SERVICE OVERVIEW
                ========================================================================= */}
                <section className="bpa-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="bpa-container">
                        <div className="overview-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Service Overview</span>
                                <h2 className="bpa-heading-h2">
                                    What Is <span className="gradient-text">Business Process Automation?</span>
                                </h2>
                                <p className="bpa-subtext">
                                    Business process automation (BPA) uses software to execute repeatable business tasks and coordinate activities according to defined rules, conditions and workflows.
                                </p>
                                <p className="bpa-subtext">
                                    It can support processes such as approval routing, record updates, notifications, data transfers and document handling.
                                </p>
                                <p className="bpa-subtext" style={{ marginBottom: 0 }}>
                                    Business process and workflow management involves understanding how work moves between people, departments and applications. Automation builds on that understanding by reducing selected manual steps while keeping appropriate human review and approvals in place.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: '#FEF9C3', border: '1px solid rgba(250, 204, 21, 0.6)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, color: '#1F2937', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
                                    <Sparkles size={13} color="#EAB308" /> Key Highlights
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {overviewHighlights.map((item, idx) => (
                                        <div key={idx} className="key-highlight-card-bpa">
                                            <div className="bpa-icon-box">{item.icon}</div>
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.25rem' }}>
                                                    {item.title}
                                                </h3>
                                                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className="bpa-chevron"><ChevronRight size={18} /></div>
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
                <section className="bpa-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="bpa-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">What We Build</span>
                            <h2 className="bpa-heading-h2">
                                Our Business Process <span className="gradient-text">Automation Services</span>
                            </h2>
                            <p className="bpa-subtext" style={{ marginBottom: 0 }}>
                                We plan and develop automation solutions around your existing workflows, business rules and software environment.
                            </p>
                        </div>

                        <div className="services-grid-3x2" data-aos="fade-up">
                            {serviceCards.map((card, idx) => (
                                <Link to={card.link} key={idx} className="service-card-bpa">
                                    <div className="svc-bpa-icon">{card.icon}</div>
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
                <section className="bpa-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="bpa-container">
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
                                        <Workflow size={44} color="#1F2937" />
                                    </div>

                                    <h3 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.75rem', zIndex: 1 }}>
                                        Benefits of Business Process Automation
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '1rem', textAlign: 'center', lineHeight: 1.65, maxWidth: '320px', zIndex: 1 }}>
                                        Business process automation can help organizations manage repetitive activities through more consistent, trackable workflows.
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1 }}>
                                        {['Consistent Rules', 'Real-Time Routing', 'Audit Ready'].map((t, i) => (
                                            <span key={i} style={{ padding: '6px 14px', background: 'rgba(250,204,21,0.12)', border: '1px solid rgba(250,204,21,0.25)', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 700, color: '#FEF9C3' }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Benefits List */}
                            <div data-aos="fade-left">
                                <span className="home-badge-tag">Operational Advantages</span>
                                <h2 className="bpa-heading-h2">
                                    Benefits of Business <span className="gradient-text">Process Automation</span>
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
                <section className="bpa-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="bpa-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Domain Expertise</span>
                            <h2 className="bpa-heading-h2">
                                Business Process Automation for <span className="gradient-text">Different Industries</span>
                            </h2>
                            <p className="bpa-subtext" style={{ marginBottom: 0 }}>
                                Automation requirements vary depending on how organizations manage requests, records, approvals and departmental activities.
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
                                <span className="topic-pill" style={{ fontSize: '0.85rem', fontWeight: 800, color: '#EAB308', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.65rem' }}>
                                    {industries[activeIndustry].tag}
                                </span>
                                <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '1.15rem' }}>
                                    {industries[activeIndustry].title}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '2.25rem' }}>
                                    {industries[activeIndustry].desc}
                                </p>
                                <Link to={industries[activeIndustry].link} className="home-btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}>
                                    Explore {industries[activeIndustry].title} Automation <ChevronRight size={18} />
                                </Link>
                            </div>

                            <div style={{ background: '#FEF9C3', borderRadius: '20px', padding: '2.5rem', border: '1px solid rgba(250, 204, 21, 0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)' }}>
                                    {React.cloneElement(industries[activeIndustry].icon, { size: 36, color: '#1F2937' })}
                                </div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                    BPA for {industries[activeIndustry].title}
                                </h4>
                                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                                    Multi-department routing, approval stages, automated validation and real-time status tracking tailored to industry needs.
                                </p>
                            </div>
                        </div>

                        {/* Search bot fallback */}
                        <div style={{ display: 'none' }}>
                            {industries.map((ind, idx) => (
                                <div key={idx}><h3>{ind.title}</h3><p>{ind.desc}</p><Link to={ind.link}>{ind.title} business process automation</Link></div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 06 — DEVELOPMENT PROCESS
                ========================================================================= */}
                <section className="bpa-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="bpa-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Structured Delivery</span>
                            <h2 className="bpa-heading-h2">
                                Our Business Process Automation <span className="gradient-text">Development Process</span>
                            </h2>
                            <p className="bpa-subtext" style={{ marginBottom: 0 }}>
                                We follow a structured approach to understand existing workflows, identify suitable automation opportunities and implement agreed functionality.
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
                <section className="bpa-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="bpa-container">
                        <div className="location-split">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Tamil Nadu Focus</span>
                                <h2 className="bpa-heading-h2">
                                    Business Process Automation Services in <span className="gradient-text">Tamil Nadu</span>
                                </h2>
                                <p className="bpa-subtext">
                                    Businesses across Tamil Nadu manage daily activities through approvals, spreadsheets, emails, messaging applications and specialized business software.
                                </p>
                                <p className="bpa-subtext">
                                    In South Tamil Nadu, manufacturers, wholesalers, educational institutions, construction companies and service providers may face delays when information and tasks move manually between teams.
                                </p>
                                <p className="bpa-subtext" style={{ marginBottom: '1.5rem' }}>
                                    FlyTowards provides business process automation services for businesses across Tamil Nadu, focusing on workflow requirements, system compatibility and practical operational improvements.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ background: '#f8fafc', borderRadius: '28px', padding: '3rem 2.5rem', border: '1px solid rgba(226, 232, 240, 0.8)', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
                                    <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)' }}>
                                        <MapPin size={30} color="#1F2937" />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.75rem' }}>
                                        Automate a Single Approval or Coordinate Enterprise Workflows
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                                        Whether you want to automate a single approval process or coordinate activities across multiple departments, we focus on solutions suited to your business environment.
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
                <section className="bpa-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="bpa-container">
                        <div className="why-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Proven Engineering</span>
                                <h2 className="bpa-heading-h2">
                                    Why Choose FlyTowards for <span className="gradient-text">Business Process Automation?</span>
                                </h2>
                                <p className="bpa-subtext">
                                    Effective automation starts with understanding how work actually happens. Automating an unclear process without reviewing its rules and exceptions can introduce new operational problems.
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
                <section className="bpa-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="bpa-container">
                        <div className="challenges-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Operational Diagnostic</span>
                                <h2 className="bpa-heading-h2">
                                    When Does Your Business Need <span className="gradient-text">Workflow Automation?</span>
                                </h2>
                                <p className="bpa-subtext">
                                    Workflow automation may be suitable when routine activities depend on repeated manual steps or unclear handoffs between teams.
                                </p>
                                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    If these challenges affect daily operations, business process automation may help establish a more consistent way to manage work.
                                </p>
                                <Link to="/contact" className="home-btn-primary">
                                    Discuss Your Workflow Requirements <ArrowRight size={18} />
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
                <section className="bpa-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="bpa-container">
                        <div className="faq-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Clear Answers</span>
                                <h2 className="bpa-heading-h2">
                                    Frequently Asked Questions About <span className="gradient-text">Business Process Automation</span>
                                </h2>
                                <p className="bpa-subtext">
                                    Key considerations around workflow management, data processing, ERP/CRM integration and deployment in Tamil Nadu.
                                </p>
                                <div style={{ background: '#ffffff', borderRadius: '20px', padding: '1.75rem', border: '1px solid rgba(250, 204, 21, 0.3)', marginTop: '1.5rem' }}>
                                    <p style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                        Need a process audit?
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1rem' }}>
                                        Our process automation architects in Tamil Nadu can evaluate your current workflows and recommend practical automation steps.
                                    </p>
                                    <Link to="/contact" style={{ color: '#EAB308', fontWeight: 800, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                                        Connect with our workflow experts <ChevronRight size={18} />
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
                <section className="bpa-section" style={{ background: '#f8fafc', paddingBottom: '120px' }}>
                    <div className="bpa-container">
                        <div className="cta-banner" data-aos="zoom-in">
                            <div className="cta-banner-content">
                                <span className="home-badge-tag" style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#e0f2fe' }}>
                                    Streamline Operations
                                </span>
                                <h2>Spend Less Time on Repetitive Work. Focus on What Matters.</h2>
                                <p>
                                    Need to automate approvals, reduce manual data entry or connect business workflows across departments? FlyTowards helps businesses explore process automation solutions designed around their operations, applications and requirements. Share your workflow challenges and take the next step toward a more organized business process.
                                </p>
                                <div className="cta-buttons-wrap">
                                    <Link to="/contact" className="cta-btn-primary-white">
                                        Discuss Your Automation Project <ArrowRight size={18} />
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

export default BusinessProcessAutomation;
