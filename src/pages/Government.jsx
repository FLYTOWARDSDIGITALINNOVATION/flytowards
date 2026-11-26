import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Check,
    ChevronDown,
    ChevronRight,
    Layers,
    Building2,
    FileText,
    FileCheck2,
    Landmark,
    ShieldCheck,
    Users,
    Clock,
    BarChart3,
    Sparkles,
    MapPin,
    TrendingUp,
    Send,
    Database,
    Zap,
    GitBranch,
    Search,
    AlertCircle,
    CheckCircle2,
    FileClock,
    UserCheck,
    Receipt,
    HelpCircle,
    Scale,
    FileSpreadsheet,
    Lock,
    Eye,
    Globe,
    RefreshCw
} from 'lucide-react';

const Government = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [activeWorkflowTab, setActiveWorkflowTab] = useState(0);
    const [heroFlowView, setHeroFlowView] = useState('admin'); // 'admin' | 'citizen'

    useEffect(() => {
        window.scrollTo(0, 0);

        // SEO Title
        document.title = "Government Management Software in Tamil Nadu | FlyTowards";

        // Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute(
            "content",
            "Government management software solutions in Tamil Nadu. FlyTowards develops applications for public records, accounting workflows and government administration."
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
            "government management software, government accounting software, records management software for government, government relations software, government software development, public sector software solutions, e-governance software"
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
            "https://flytowardsdigitalinnovation.com/industries/government/"
        );

        // Inject Structured Data (Schema.org: Service, Organization, BreadcrumbList, FAQPage)
        const schemaId = 'government-software-schema-script';
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
                    "@id": "https://flytowardsdigitalinnovation.com/industries/government/#service",
                    "name": "Government Management Software Solutions",
                    "serviceType": "Public Sector Software & E-Governance Solutions",
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
                    "description": "Government management software solutions in Tamil Nadu. FlyTowards develops applications for public records, accounting workflows and government administration.",
                    "url": "https://flytowardsdigitalinnovation.com/industries/government/"
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://flytowardsdigitalinnovation.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://flytowardsdigitalinnovation.com/industries/" },
                        { "@type": "ListItem", "position": 3, "name": "Government", "item": "https://flytowardsdigitalinnovation.com/industries/government/" }
                    ]
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is government management software?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Government management software refers to applications used to organize public-sector administrative activities, records, departmental workflows, service requests and relevant reporting information. Required features depend on the government organization's responsibilities." }
                        },
                        {
                            "@type": "Question",
                            "name": "What features should government management software include?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Potential features include document management, file tracking, user permissions, approval workflows, task assignments, citizen request records, reporting and audit logs. The final scope depends on the organization's authorized processes." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is government accounting software?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Government accounting software supports public-sector financial recording and reporting processes. It must be designed around the applicable accounting classifications, fund structures, approval procedures and reporting requirements rather than assuming ordinary commercial accounting rules are sufficient." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is records management software for government?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Records management software for government helps organize official records, document metadata, access permissions, retrieval processes and approved retention or disposal workflows. It should reflect applicable records management requirements." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is government relations software?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Government relations software generally helps organizations manage communications, contacts, meetings, correspondence and engagement with government stakeholders. It differs from internal government administration software, which focuses on departmental operations and public service workflows." }
                        },
                        {
                            "@type": "Question",
                            "name": "Can government management software integrate with existing e-governance systems?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Integration may be possible when the relevant system provides authorized APIs, approved data exchange mechanisms and necessary permissions. Government systems should not be assumed to offer unrestricted third-party access." }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does government management software development cost in Tamil Nadu?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Costs depend on application modules, user roles, records volume, workflow complexity, accessibility, security, integrations, deployment requirements and support scope. Public-sector procurement rules and tender specifications may also affect the project." }
                        },
                        {
                            "@type": "Question",
                            "name": "What security and compliance requirements apply to government software in India?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Requirements depend on the government organization, data classification, deployment environment and application functions. Relevant considerations may include applicable Indian cybersecurity and data protection requirements, government security policies, accessibility standards and approved hosting or audit conditions. The responsible authority and qualified professionals should confirm the requirements for each project." }
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

    // Section 02 — Key Highlights (Icon List without cards)
    const overviewHighlights = [
        {
            title: "Administrative Workflow Management",
            desc: "Organize tasks, approvals and departmental processes with role-based governance.",
            icon: <FileCheck2 size={22} color="#EAB308" />
        },
        {
            title: "Government Records Management",
            desc: "Maintain structured records, document access and retrieval workflows with audit trails.",
            icon: <Database size={22} color="#EAB308" />
        },
        {
            title: "Public-Sector Financial Processes",
            desc: "Support relevant accounting, expenditure and financial reporting activities under statutory rules.",
            icon: <Receipt size={22} color="#EAB308" />
        },
        {
            title: "Citizen & Stakeholder Coordination",
            desc: "Organize service requests, communication and follow-up records with transparency.",
            icon: <Users size={22} color="#EAB308" />
        }
    ];

    // Section 03 — Industry Challenges (6 Blocks)
    const challenges = [
        {
            icon: <FileClock size={24} color="#EAB308" />,
            title: "Paper-Based File Movement",
            desc: "Administrative files may move between offices or departments through manual procedures, making their current status difficult to identify."
        },
        {
            icon: <Database size={24} color="#EAB308" />,
            title: "Fragmented Government Records",
            desc: "Official documents and records may be stored across different systems or physical locations, complicating authorized retrieval."
        },
        {
            icon: <Scale size={24} color="#EAB308" />,
            title: "Complex Administrative Approvals",
            desc: "Applications, internal requests and departmental decisions may require several review and authorization stages."
        },
        {
            icon: <FileSpreadsheet size={24} color="#EAB308" />,
            title: "Disconnected Financial Information",
            desc: "Budget allocations, expenditure records and accounting reports may need to be coordinated across different administrative processes."
        },
        {
            icon: <AlertCircle size={24} color="#EAB308" />,
            title: "Limited Citizen Request Visibility",
            desc: "Public service requests and complaints may be recorded through separate channels without a consistent method for tracking their status."
        },
        {
            icon: <BarChart3 size={24} color="#EAB308" />,
            title: "Time-Consuming Departmental Reporting",
            desc: "Preparing administrative summaries may require collecting and validating information from multiple offices or systems."
        }
    ];

    // Section 04 — Industry Software Solutions (6 Cards)
    const solutions = [
        {
            icon: <Landmark size={28} color="#EAB308" />,
            title: "Government Administration Management Software",
            desc: "Develop applications for managing departmental tasks, administrative requests, approval workflows and relevant operational records.",
            link: "/services/enterprise-software-development/"
        },
        {
            icon: <Receipt size={28} color="#EAB308" />,
            title: "Government Accounting Software",
            desc: "Plan software functionality for approved public-sector financial workflows, expenditure records, budget-related information and reporting requirements.",
            link: "/services/custom-software-development/"
        },
        {
            icon: <Database size={28} color="#EAB308" />,
            title: "Records Management Software for Government",
            desc: "Build systems for organizing official documents, metadata, access permissions, record histories and approved retention workflows.",
            link: "/services/enterprise-software-development/"
        },
        {
            icon: <Users size={28} color="#EAB308" />,
            title: "Citizen Service Request Management Software",
            desc: "Create applications for registering public service requests, assigning responsibilities, recording updates and tracking resolution status.",
            link: "/services/web-application-development/"
        },
        {
            icon: <GitBranch size={28} color="#EAB308" />,
            title: "Government Relations & Stakeholder Management Software",
            desc: "Develop systems for managing authorized stakeholder contacts, official correspondence, meeting records and government engagement activities.",
            link: "/services/custom-software-development/"
        },
        {
            icon: <BarChart3 size={28} color="#EAB308" />,
            title: "Government Reporting & Workflow Dashboards",
            desc: "Create dashboards for reviewing selected administrative tasks, service requests, departmental activities and operational indicators.",
            link: "/services/business-process-automation/"
        }
    ];

    // Section 05 — Workflows & Use Cases (Interactive Tabs)
    const workflowTabs = [
        {
            title: "Administrative File Registration & Movement",
            tag: "Interdepartmental File Transit",
            desc: "Authorized staff can register files, record references, assign responsible departments and track file movement according to approved procedures.",
            icon: <FileText size={26} color="#1F2937" />,
            steps: [
                "File Registration & Barcoding",
                "Department Assignment & Dispatch",
                "Inward Verification at Desk",
                "Note File & Officer Remarks",
                "Final Dispatch or Archive"
            ]
        },
        {
            title: "Official Document & Records Management",
            tag: "Digital Archives & Access Control",
            desc: "Departments can maintain document metadata, version histories, access permissions and records associated with administrative activities.",
            icon: <Database size={26} color="#1F2937" />,
            steps: [
                "Metadata Indexing",
                "Access Clearance Validation",
                "Version-Controlled Edits",
                "Tamper-Proof Audit Logging",
                "Statutory Retention Storage"
            ]
        },
        {
            title: "Departmental Request & Approval Processing",
            tag: "Multi-Tier Sanctioning",
            desc: "Internal requests can be routed through configured review stages with assigned responsibilities and recorded decisions.",
            icon: <CheckCircle2 size={26} color="#1F2937" />,
            steps: [
                "Initiation by Section Clerk",
                "Superintendent Verification",
                "Under Secretary Review",
                "Competent Authority Approval",
                "Digital Sanction Order Issued"
            ]
        },
        {
            title: "Budget & Expenditure Administration",
            tag: "Public Sector Fund Management",
            desc: "Authorized finance teams can maintain relevant budget allocations, expenditure records and approval information according to applicable rules.",
            icon: <Receipt size={26} color="#1F2937" />,
            steps: [
                "Head of Account Allotment",
                "Bill Submission & Scrutiny",
                "Treasury / Bank Authorization",
                "Voucher Generation",
                "Financial Ledger Reconciliation"
            ]
        },
        {
            title: "Citizen Request & Grievance Tracking",
            tag: "Public Service Delivery",
            desc: "Public-facing service teams can register eligible requests, assign them to appropriate departments and record progress or resolution information.",
            icon: <Users size={26} color="#1F2937" />,
            steps: [
                "Citizen Inward Registration",
                "Automatic Ward / Dept Routing",
                "Field Officer Inspection & Notes",
                "Action Taken Report (ATR)",
                "Citizen SMS Notification & Closure"
            ]
        },
        {
            title: "Departmental Reporting & Review",
            tag: "Administrative Analytics",
            desc: "Management teams can review selected administrative activity, pending tasks, service request status and relevant operational reports.",
            icon: <BarChart3 size={26} color="#1F2937" />,
            steps: [
                "Real-Time Data Aggregation",
                "Disposal Rate Tracking",
                "Pending Files Flagging (>7 Days)",
                "District Review Summaries",
                "Executive KPI Export"
            ]
        }
    ];

    // Section 06 — Business Benefits (5 Stacked Benefits)
    const businessBenefits = [
        {
            title: "Organize Administrative Records",
            desc: "Maintain structured information for files, requests, documents and departmental activities.",
            icon: <Database size={22} color="#EAB308" />
        },
        {
            title: "Improve Workflow Visibility",
            desc: "Provide authorized personnel with clearer access to task assignments, approval stages and recorded status updates.",
            icon: <Eye size={22} color="#EAB308" />
        },
        {
            title: "Support Records Retrieval",
            desc: "Help staff locate permitted records using defined metadata, classifications and search functionality.",
            icon: <Search size={22} color="#EAB308" />
        },
        {
            title: "Coordinate Departmental Activities",
            desc: "Connect selected requests, approvals and administrative tasks across relevant teams and offices.",
            icon: <GitBranch size={22} color="#EAB308" />
        },
        {
            title: "Support Public-Sector Reporting",
            desc: "Present relevant operational and financial information through configured dashboards and reports.",
            icon: <BarChart3 size={22} color="#EAB308" />
        }
    ];

    // Section 07 — Relevant FlyTowards Services (6 Linked Tiles)
    const relevantServices = [
        {
            icon: <Building2 size={24} color="#EAB308" />,
            title: "Custom Software Development",
            desc: "Develop applications around government administrative processes, official records and organization-specific requirements.",
            link: "/services/custom-software-development/"
        },
        {
            icon: <Landmark size={24} color="#EAB308" />,
            title: "Enterprise Software Development",
            desc: "Plan applications for departmental workflows, user roles, structured information and larger organizational requirements.",
            link: "/services/enterprise-software-development/"
        },
        {
            icon: <FileCheck2 size={24} color="#EAB308" />,
            title: "Business Process Automation",
            desc: "Automate suitable document routing, task assignments, notifications and authorized administrative approval workflows.",
            link: "/services/business-process-automation/"
        },
        {
            icon: <Globe size={24} color="#EAB308" />,
            title: "Web Application Development",
            desc: "Create browser-based administration portals, records management interfaces and service request applications.",
            link: "/services/web-application-development/"
        },
        {
            icon: <GitBranch size={24} color="#EAB308" />,
            title: "API Development",
            desc: "Connect compatible government applications, document systems and authorized business platforms through supported interfaces.",
            link: "/services/api-development/"
        },
        {
            icon: <RefreshCw size={24} color="#EAB308" />,
            title: "Software Modernization",
            desc: "Assess existing applications and plan suitable improvements, migrations or integration enhancements.",
            link: "/services/software-modernization/"
        }
    ];

    // Section 08 — Development Approach Steps (6 Steps)
    const developmentSteps = [
        { num: "01", title: "Government Workflow Discovery", desc: "Understand departmental processes, records handling, approval procedures, citizen service activities and administrative reporting needs." },
        { num: "02", title: "Requirements & Existing System Assessment", desc: "Identify authorized user roles, document classifications, existing applications, data handling requirements, applicable standards and integration dependencies." },
        { num: "03", title: "Solution Architecture & Access Planning", desc: "Define software modules, information structures, user permissions, audit requirements and implementation priorities." },
        { num: "04", title: "UI/UX Design & Software Development", desc: "Design suitable administrative interfaces and develop agreed government management software functionality." },
        { num: "05", title: "Testing, Security & Workflow Validation", desc: "Test permissions, document handling, approval processes, reporting calculations, accessibility requirements and supported integrations." },
        { num: "06", title: "Deployment & Support Planning", desc: "Review authorized hosting environments, data migration, user onboarding, operational documentation and suitable maintenance arrangements." }
    ];

    // Section 09 — Why Choose FlyTowards Differentiators
    const whyChoosePoints = [
        {
            num: "01",
            title: "Administrative Workflow Discovery",
            desc: "We focus on understanding departmental tasks, approval stages, records handling and reporting requirements during project planning."
        },
        {
            num: "02",
            title: "Custom Software Requirements",
            desc: "We consider organizational structures, user roles, document processes and service delivery requirements when defining functionality."
        },
        {
            num: "03",
            title: "Security & Accessibility Planning",
            desc: "We consider access permissions, audit requirements, information handling and applicable accessibility needs."
        },
        {
            num: "04",
            title: "Integration & Implementation Planning",
            desc: "We assess existing applications, authorized data exchange requirements and practical deployment dependencies."
        }
    ];

    // Section 11 — FAQs
    const faqList = [
        {
            q: "What is government management software?",
            a: "Government management software refers to applications used to organize public-sector administrative activities, records, departmental workflows, service requests and relevant reporting information. Required features depend on the government organization's responsibilities."
        },
        {
            q: "What features should government management software include?",
            a: "Potential features include document management, file tracking, user permissions, approval workflows, task assignments, citizen request records, reporting and audit logs. The final scope depends on the organization's authorized processes."
        },
        {
            q: "What is government accounting software?",
            a: "Government accounting software supports public-sector financial recording and reporting processes. It must be designed around the applicable accounting classifications, fund structures, approval procedures and reporting requirements rather than assuming ordinary commercial accounting rules are sufficient."
        },
        {
            q: "What is records management software for government?",
            a: "Records management software for government helps organize official records, document metadata, access permissions, retrieval processes and approved retention or disposal workflows. It should reflect applicable records management requirements."
        },
        {
            q: "What is government relations software?",
            a: "Government relations software generally helps organizations manage communications, contacts, meetings, correspondence and engagement with government stakeholders. It differs from internal government administration software, which focuses on departmental operations and public service workflows."
        },
        {
            q: "Can government management software integrate with existing e-governance systems?",
            a: "Integration may be possible when the relevant system provides authorized APIs, approved data exchange mechanisms and necessary permissions. Government systems should not be assumed to offer unrestricted third-party access."
        },
        {
            q: "How much does government management software development cost in Tamil Nadu?",
            a: "Costs depend on application modules, user roles, records volume, workflow complexity, accessibility, security, integrations, deployment requirements and support scope. Public-sector procurement rules and tender specifications may also affect the project."
        },
        {
            q: "What security and compliance requirements apply to government software in India?",
            a: "Requirements depend on the government organization, data classification, deployment environment and application functions. Relevant considerations may include applicable Indian cybersecurity and data protection requirements, government security policies, accessibility standards and approved hosting or audit conditions. The responsible authority and qualified professionals should confirm the requirements for each project."
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
                .gov-page-wrapper { position: relative; z-index: 1; }
                .gov-container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; box-sizing: border-box; }
                .gov-section { padding: 80px 0; position: relative; }
                @media (max-width: 768px) { .gov-section { padding: 55px 0; } }

                /* ─── Typography ─── */
                .gov-heading-h2 {
                    font-family: 'Outfit', sans-serif;
                    font-size: clamp(2rem, 3.5vw, 2.85rem);
                    font-weight: 800;
                    line-height: 1.25;
                    color: #1e1b4b;
                    margin-bottom: 1.2rem;
                    letter-spacing: -0.03em;
                }
                .gov-subtext { font-size: 1.1rem; color: #64748b; line-height: 1.75; margin-bottom: 2rem; }

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

                /* E-Governance Command Center Visual Card */
                .gov-command-card {
                    background: #1e1b4b;
                    border-radius: 32px;
                    padding: 2rem;
                    box-shadow: 0 35px 70px rgba(30, 27, 75, 0.35), 0 0 0 1px rgba(250, 204, 21, 0.2);
                    position: relative;
                    overflow: hidden;
                    animation: floatGovCard 6s ease-in-out infinite;
                }
                @keyframes floatGovCard {
                    0%, 100% { transform: translateY(0px); }
                    50%      { transform: translateY(-8px); }
                }

                .gov-pulse-seal {
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    width: 140px;
                    height: 140px;
                    background: radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }

                .flow-switch-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: rgba(15, 23, 42, 0.85);
                    border-radius: 16px;
                    padding: 6px;
                    margin-bottom: 1.25rem;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .flow-toggle-btn {
                    flex: 1;
                    padding: 8px 12px;
                    border-radius: 10px;
                    border: none;
                    background: transparent;
                    color: #94a3b8;
                    font-weight: 700;
                    font-size: 0.78rem;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    font-family: 'Outfit', sans-serif;
                }
                .flow-toggle-btn.active {
                    background: #FACC15;
                    color: #1F2937;
                    box-shadow: 0 2px 8px rgba(250, 204, 21, 0.35);
                }

                /* Live file tracking track */
                .gov-track-screen {
                    background: #0f172a;
                    border-radius: 20px;
                    padding: 1.5rem;
                    border: 1px solid rgba(250, 204, 21, 0.2);
                }
                .gov-file-badge {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    padding-bottom: 0.75rem;
                    margin-bottom: 1rem;
                }
                .gov-live-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #22c55e;
                    box-shadow: 0 0 8px #22c55e;
                    animation: pulseDot 2s infinite;
                }
                @keyframes pulseDot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%      { opacity: 0.5; transform: scale(1.4); }
                }

                .workflow-step-strip {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .step-node-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 12px;
                    padding: 10px 14px;
                    transition: all 0.3s ease;
                }
                .step-node-item.node-active {
                    background: rgba(250, 204, 21, 0.08);
                    border-color: rgba(250, 204, 21, 0.4);
                }
                .step-node-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    background: #FEF9C3;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                /* ─── SECTION 02: OVERVIEW ─── */
                .overview-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: start;
                }
                @media (max-width: 992px) { .overview-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

                .overview-highlight-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1.25rem;
                    padding: 1.25rem 0;
                    border-bottom: 1px solid #f1f5f9;
                    transition: all 0.3s ease;
                }
                .overview-highlight-item:last-child { border-bottom: none; }
                .overview-highlight-item:hover {
                    padding-left: 0.8rem;
                }
                .overview-highlight-item:hover .gov-icon-box {
                    background: #FACC15;
                    transform: scale(1.12) rotate(6deg);
                    box-shadow: 0 8px 20px rgba(250, 204, 21, 0.4);
                }
                .gov-icon-box {
                    width: 48px; height: 48px; min-width: 48px;
                    border-radius: 14px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.5);
                    display: flex; align-items: center; justify-content: center;
                    box-shadow: 0 4px 12px rgba(250, 204, 21, 0.15);
                    transition: all 0.35s ease;
                }

                /* ─── SECTION 03: CHALLENGES ─── */
                .challenges-grid-6 {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 1024px) { .challenges-grid-6 { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 640px)  { .challenges-grid-6 { grid-template-columns: 1fr; } }

                .gov-challenge-card {
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 2rem 1.75rem;
                    border: 1.5px solid rgba(226, 232, 240, 0.8);
                    box-shadow: 0 4px 18px rgba(15, 23, 42, 0.03);
                    transition: all 0.35s ease;
                }
                .gov-challenge-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(250, 204, 21, 0.5);
                    box-shadow: 0 16px 36px rgba(250, 204, 21, 0.12);
                }
                .challenge-icon-box {
                    width: 52px; height: 52px;
                    border-radius: 14px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.4);
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 1.25rem;
                    transition: all 0.35s ease;
                }
                .gov-challenge-card:hover .challenge-icon-box {
                    background: #FACC15;
                    transform: scale(1.1);
                }

                /* ─── SECTION 04: SOLUTIONS ─── */
                .solutions-grid-3x2 {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 1024px) { .solutions-grid-3x2 { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 640px)  { .solutions-grid-3x2 { grid-template-columns: 1fr; } }

                .gov-solution-card {
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
                .gov-solution-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #FACC15, #EAB308);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.38s ease;
                }
                .gov-solution-card:hover {
                    transform: translateY(-10px);
                    border-color: rgba(250, 204, 21, 0.4);
                    box-shadow: 0 24px 50px rgba(250, 204, 21, 0.18);
                }
                .gov-solution-card:hover::before { transform: scaleX(1); }
                .gov-solution-card:hover .svc-gov-icon {
                    background: #FACC15;
                    transform: scale(1.12) rotate(8deg);
                    box-shadow: 0 10px 24px rgba(250, 204, 21, 0.45);
                }
                .svc-gov-icon {
                    width: 58px; height: 58px;
                    border-radius: 18px;
                    background: #FEF9C3;
                    border: 1px solid rgba(250, 204, 21, 0.4);
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 1.25rem;
                    transition: all 0.38s ease;
                }

                /* ─── SECTION 05: WORKFLOWS TABS ─── */
                .workflow-tabs-header {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.65rem;
                    margin-bottom: 2.5rem;
                }
                .workflow-tab-btn {
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
                .workflow-tab-btn:hover {
                    border-color: #FACC15;
                    color: #1e1b4b;
                    transform: translateY(-2px);
                }
                .workflow-tab-btn.active {
                    background: #FACC15;
                    border-color: #FACC15;
                    color: #1F2937;
                    box-shadow: 0 6px 20px rgba(250, 204, 21, 0.3);
                    transform: translateY(-2px);
                }
                .workflow-active-view {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 3.5rem;
                    align-items: center;
                    background: #f8fafc;
                    border-radius: 28px;
                    padding: 3rem;
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    min-height: 280px;
                }
                @media (max-width: 992px) {
                    .workflow-active-view { grid-template-columns: 1fr; gap: 2rem; padding: 2rem 1.5rem; }
                }

                .step-progress-strip {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .step-progress-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 12px;
                    border-radius: 10px;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    font-size: 0.88rem;
                    color: #1e1b4b;
                    font-weight: 600;
                }

                /* ─── SECTION 06: BENEFITS ─── */
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

                /* ─── SECTION 07: RELEVANT SERVICES ─── */
                .services-tiles-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.25rem;
                }
                @media (max-width: 992px) { .services-tiles-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 640px)  { .services-tiles-grid { grid-template-columns: 1fr; } }

                .service-compact-tile {
                    background: #ffffff;
                    border-radius: 18px;
                    padding: 1.75rem 1.5rem;
                    border: 1.5px solid #e2e8f0;
                    text-decoration: none;
                    display: block;
                    transition: all 0.3s ease;
                }
                .service-compact-tile:hover {
                    transform: translateY(-5px);
                    border-color: #FACC15;
                    box-shadow: 0 12px 28px rgba(250, 204, 21, 0.15);
                }

                /* ─── SECTION 08: DEVELOPMENT STEPS ─── */
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

                /* ─── SECTION 09: WHY CHOOSE ─── */
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

                /* ─── SECTION 10: LOCATION ─── */
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

                /* ─── SECTION 11: FAQ ─── */
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

                /* ─── SECTION 12: CTA BANNER ─── */
                .cta-banner {
                    background: #1e1b4b;
                    border-radius: 36px;
                    padding: 5rem 3rem;
                    color: #ffffff;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(30, 27, 75, 0.2);
                }
                .cta-banner::before {
                    display: none;
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

            <div className="gov-page-wrapper">

                {/* =========================================================================
                    SECTION 01 — HERO
                ========================================================================= */}
                <section className="gov-section" style={{ paddingTop: '140px', paddingBottom: '80px', background: 'transparent' }}>
                    <div className="gov-container">
                        <div className="hero-grid">

                            {/* Left: Copy */}
                            <div data-aos="fade-right">
                                <span className="hero-tagline-pill">
                                    <Landmark size={16} color="#EAB308" />
                                    Public Sector &amp; E-Governance Solutions
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
                                    Government Management Software Solutions in <span className="gradient-text">Tamil Nadu</span>
                                </h1>

                                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e1b4b', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                                    Connect Government Records, Departments and Administrative Workflows
                                </p>

                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '560px' }}>
                                    Government departments and public-sector organizations manage information across administrative files, official records, financial processes, citizen requests and interdepartmental activities.
                                    <br /><br />
                                    When these processes depend on disconnected applications, paper files or repeated manual data entry, accessing information and coordinating administrative work can become difficult.
                                    <br /><br />
                                    FlyTowards provides custom software development solutions for government and public-sector use cases across Tamil Nadu, with a focus on South Tamil Nadu. We help organizations evaluate and plan government management software, digital records management systems, government accounting workflows and administrative applications.
                                    <br /><br />
                                    Our approach focuses on understanding operational requirements, defining appropriate access controls and planning software that supports established administrative procedures.
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <Link to="/contact" className="home-btn-primary">
                                        Discuss Your Government Software Project <ArrowRight size={18} />
                                    </Link>
                                    <Link to="/services" className="home-btn-outline">
                                        Explore Our Software Services
                                    </Link>
                                </div>
                            </div>

                            {/* Right: E-Governance Command Center Visual Card */}
                            <div data-aos="fade-left">
                                <div className="gov-command-card">
                                    <div className="gov-pulse-seal"></div>

                                    {/* Flow Switcher Toggle */}
                                    <div className="flow-switch-header">
                                        <button
                                            onClick={() => setHeroFlowView('admin')}
                                            className={`flow-toggle-btn ${heroFlowView === 'admin' ? 'active' : ''}`}
                                        >
                                            <FileText size={13} /> Administrative File Dispatch
                                        </button>
                                        <button
                                            onClick={() => setHeroFlowView('citizen')}
                                            className={`flow-toggle-btn ${heroFlowView === 'citizen' ? 'active' : ''}`}
                                        >
                                            <Users size={13} /> Citizen Service Request
                                        </button>
                                    </div>

                                    {/* Command Screen Display */}
                                    <div className="gov-track-screen">
                                        {heroFlowView === 'admin' ? (
                                            <div>
                                                <div className="gov-file-badge">
                                                    <div>
                                                        <span style={{ color: '#94a3b8', fontSize: '0.68rem', fontWeight: 600 }}>OFFICIAL DISPATCH REF:</span>
                                                        <p style={{ color: '#FACC15', fontWeight: 800, fontSize: '0.88rem', margin: '2px 0 0' }}>
                                                            #TN-REV-2026-9042
                                                        </p>
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                        <span className="gov-live-dot"></span>
                                                        <span style={{ color: '#4ade80', fontSize: '0.72rem', fontWeight: 700 }}>Under Review</span>
                                                    </div>
                                                </div>

                                                <div className="workflow-step-strip">
                                                    <div className="step-node-item">
                                                        <div className="step-node-icon">
                                                            <FileText size={16} color="#1F2937" />
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <p style={{ color: '#ffffff', fontSize: '0.78rem', fontWeight: 700, margin: 0 }}>Section Officer Inward</p>
                                                            <p style={{ color: '#94a3b8', fontSize: '0.68rem', margin: 0 }}>Timestamp: 10:14 AM — Verified</p>
                                                        </div>
                                                        <Check size={14} color="#4ade80" />
                                                    </div>

                                                    <div className="step-node-item node-active">
                                                        <div className="step-node-icon" style={{ background: '#FACC15' }}>
                                                            <Scale size={16} color="#1F2937" />
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <p style={{ color: '#FACC15', fontSize: '0.78rem', fontWeight: 800, margin: 0 }}>Revenue Div. Officer (RDO)</p>
                                                            <p style={{ color: '#e2e8f0', fontSize: '0.68rem', margin: 0 }}>Multi-Tier Review &amp; Note-Sheet</p>
                                                        </div>
                                                        <span style={{ color: '#FACC15', fontSize: '0.68rem', fontWeight: 800 }}>Active</span>
                                                    </div>

                                                    <div className="step-node-item">
                                                        <div className="step-node-icon">
                                                            <CheckCircle2 size={16} color="#1F2937" />
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <p style={{ color: '#94a3b8', fontSize: '0.78rem', fontWeight: 600, margin: 0 }}>District Collectorate Sanction</p>
                                                            <p style={{ color: '#64748b', fontSize: '0.68rem', margin: 0 }}>Digital Clearance Ready</p>
                                                        </div>
                                                        <Lock size={12} color="#64748b" />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="gov-file-badge">
                                                    <div>
                                                        <span style={{ color: '#94a3b8', fontSize: '0.68rem', fontWeight: 600 }}>GRIEVANCE REGISTRATION ID:</span>
                                                        <p style={{ color: '#38bdf8', fontWeight: 800, fontSize: '0.88rem', margin: '2px 0 0' }}>
                                                            #TN-GRV-2026-1184
                                                        </p>
                                                    </div>
                                                    <span style={{ background: 'rgba(56,189,248,0.15)', color: '#38bdf8', fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '50px' }}>
                                                        Assigned
                                                    </span>
                                                </div>

                                                <div className="workflow-step-strip">
                                                    <div className="step-node-item">
                                                        <div className="step-node-icon">
                                                            <Users size={16} color="#1F2937" />
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <p style={{ color: '#ffffff', fontSize: '0.78rem', fontWeight: 700, margin: 0 }}>Citizen Portal Registration</p>
                                                            <p style={{ color: '#94a3b8', fontSize: '0.68rem', margin: 0 }}>Ward 14, Tirunelveli Division</p>
                                                        </div>
                                                        <Check size={14} color="#4ade80" />
                                                    </div>

                                                    <div className="step-node-item node-active">
                                                        <div className="step-node-icon" style={{ background: '#38bdf8' }}>
                                                            <Building2 size={16} color="#1F2937" />
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <p style={{ color: '#38bdf8', fontSize: '0.78rem', fontWeight: 800, margin: 0 }}>Municipal Works Officer</p>
                                                            <p style={{ color: '#e2e8f0', fontSize: '0.68rem', margin: 0 }}>Field Verification &amp; ATR Generated</p>
                                                        </div>
                                                        <span style={{ color: '#38bdf8', fontSize: '0.68rem', fontWeight: 800 }}>In Progress</span>
                                                    </div>

                                                    <div className="step-node-item">
                                                        <div className="step-node-icon">
                                                            <Send size={16} color="#1F2937" />
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <p style={{ color: '#94a3b8', fontSize: '0.78rem', fontWeight: 600, margin: 0 }}>SMS Notification &amp; Redressal</p>
                                                            <p style={{ color: '#64748b', fontSize: '0.68rem', margin: 0 }}>Automated Status Update</p>
                                                        </div>
                                                        <CheckCircle2 size={14} color="#64748b" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <ShieldCheck size={14} color="#FACC15" />
                                                <span style={{ color: '#cbd5e1', fontSize: '0.72rem' }}>Role-Based Access Control</span>
                                            </div>
                                            <span style={{ color: '#FACC15', fontSize: '0.72rem', fontWeight: 800 }}>Tamper-Proof Audit Trail</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 02 — INDUSTRY OVERVIEW
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="gov-container">
                        <div className="overview-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Industry Overview</span>
                                <h2 className="gov-heading-h2">
                                    What Is <span className="gradient-text">Government Management Software?</span>
                                </h2>
                                <p className="gov-subtext">
                                    Government management software refers to digital applications used to organize administrative information, departmental activities, official records and public-sector workflows.
                                </p>
                                <p className="gov-subtext">
                                    Depending on the organization and its responsibilities, government management software may support document processing, file movement, service requests, approvals, financial records and management reporting.
                                </p>
                                <p className="gov-subtext">
                                    <strong>Records management software for government</strong> focuses on organizing official records, maintaining document histories, controlling access and supporting approved retention and retrieval processes.
                                </p>
                                <p className="gov-subtext">
                                    <strong>Government accounting software</strong> supports public-sector financial activities according to the applicable accounting classifications, reporting rules and approval procedures.
                                </p>
                                <p className="gov-subtext" style={{ marginBottom: 0 }}>
                                    <strong>Government relations software</strong> serves a different purpose. It generally helps organizations manage interactions, correspondence and engagement with government stakeholders rather than operating internal government departments.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: '#FEF9C3', border: '1px solid rgba(250, 204, 21, 0.6)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, color: '#1F2937', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
                                    <Sparkles size={13} color="#EAB308" /> Key Highlights
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {overviewHighlights.map((item, idx) => (
                                        <div key={idx} className="overview-highlight-item">
                                            <div className="gov-icon-box">{item.icon}</div>
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.25rem' }}>
                                                    {item.title}
                                                </h3>
                                                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
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
                    SECTION 03 — INDUSTRY CHALLENGES
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="gov-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Administrative Complexity</span>
                            <h2 className="gov-heading-h2">
                                Common Software Challenges in <span className="gradient-text">Government Administration</span>
                            </h2>
                            <p className="gov-subtext" style={{ marginBottom: 0 }}>
                                Government offices and public-sector organizations may coordinate large volumes of documents, administrative tasks and information across multiple departments. Disconnected processes can make routine activities more difficult to monitor and manage.
                            </p>
                        </div>

                        <div className="challenges-grid-6" data-aos="fade-up">
                            {challenges.map((item, idx) => (
                                <div key={idx} className="gov-challenge-card">
                                    <div className="challenge-icon-box">
                                        {item.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.65rem' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 04 — INDUSTRY SOFTWARE SOLUTIONS
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="gov-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Modular Applications</span>
                            <h2 className="gov-heading-h2">
                                Our Government Management <span className="gradient-text">Software Solutions</span>
                            </h2>
                            <p className="gov-subtext" style={{ marginBottom: 0 }}>
                                FlyTowards helps public-sector organizations plan and develop software applications around administrative workflows, records management and operational reporting requirements.
                            </p>
                        </div>

                        <div className="solutions-grid-3x2" data-aos="fade-up">
                            {solutions.map((item, idx) => (
                                <Link to={item.link} key={idx} className="gov-solution-card">
                                    <div className="svc-gov-icon">{item.icon}</div>
                                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.65rem', lineHeight: 1.35 }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                                        {item.desc}
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
                    SECTION 05 — INDUSTRY WORKFLOWS & USE CASES
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="gov-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Operational Workflows</span>
                            <h2 className="gov-heading-h2">
                                How Government Management Software Supports <span className="gradient-text">Administrative Workflows</span>
                            </h2>
                            <p className="gov-subtext" style={{ marginBottom: 0 }}>
                                Government management software can help organize official information and coordinate administrative activities through defined workflows.
                            </p>
                        </div>

                        {/* Interactive Workflow Tabs */}
                        <div className="workflow-tabs-header" data-aos="fade-up">
                            {workflowTabs.map((tab, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveWorkflowTab(idx)}
                                    className={`workflow-tab-btn ${activeWorkflowTab === idx ? 'active' : ''}`}
                                    role="tab"
                                    aria-selected={activeWorkflowTab === idx}
                                >
                                    <span>{tab.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Active Workflow Showcase View */}
                        <div className="workflow-active-view" data-aos="fade-up">
                            <div>
                                <span className="topic-pill" style={{ fontSize: '0.85rem', fontWeight: 800, color: '#EAB308', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.65rem' }}>
                                    {workflowTabs[activeWorkflowTab].tag}
                                </span>
                                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '1.15rem' }}>
                                    {workflowTabs[activeWorkflowTab].title}
                                </h3>
                                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    {workflowTabs[activeWorkflowTab].desc}
                                </p>
                                <Link to="/contact" className="home-btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}>
                                    Consult On This Workflow <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(250, 204, 21, 0.4)', boxShadow: '0 8px 24px rgba(250, 204, 21, 0.1)' }}>
                                <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#EAB308', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                                    Configured Administrative Stages:
                                </p>
                                <div className="step-progress-strip">
                                    {workflowTabs[activeWorkflowTab].steps.map((st, i) => (
                                        <div key={i} className="step-progress-row">
                                            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FEF9C3', color: '#1F2937', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                                                {i + 1}
                                            </span>
                                            <span>{st}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Illustrative Workflows Visual Strip */}
                        <div style={{ marginTop: '3.5rem', background: '#fafafa', borderRadius: '24px', padding: '2.5rem', border: '1px solid #e2e8f0' }} data-aos="fade-up">
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '1.25rem' }}>
                                Standard Illustrative Lifecycle Sequences
                            </h3>

                            {/* Workflow 1 */}
                            <div style={{ marginBottom: '1.75rem' }}>
                                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#EAB308', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                                    Workflow 01: Government Administration &amp; File Movement
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                                    {[
                                        "Request / File Registration",
                                        "Department Assignment",
                                        "Document Verification",
                                        "Authorized Review",
                                        "Approval / Decision",
                                        "Status Update",
                                        "Record Archiving",
                                        "Administrative Reporting"
                                    ].map((step, i, arr) => (
                                        <React.Fragment key={i}>
                                            <span style={{ padding: '6px 12px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, color: '#1e1b4b' }}>
                                                {step}
                                            </span>
                                            {i < arr.length - 1 && <ChevronRight size={14} color="#94a3b8" />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Workflow 2 */}
                            <div>
                                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#EAB308', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                                    Workflow 02: Citizen Service Request &amp; Grievance Redressal
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                                    {[
                                        "Citizen Request",
                                        "Registration",
                                        "Department Routing",
                                        "Officer Review",
                                        "Required Action",
                                        "Status Communication",
                                        "Request Closure"
                                    ].map((step, i, arr) => (
                                        <React.Fragment key={i}>
                                            <span style={{ padding: '6px 12px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, color: '#1e1b4b' }}>
                                                {step}
                                            </span>
                                            {i < arr.length - 1 && <ChevronRight size={14} color="#94a3b8" />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '1.25rem', marginBottom: 0, fontStyle: 'italic' }}>
                                Note: These are illustrative workflows. Actual file handling, public service delivery, financial approvals, record retention and statutory procedures must follow the relevant government organization's authorized processes and applicable requirements.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 06 — BUSINESS BENEFITS
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                    <div className="gov-container">
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
                                        <Landmark size={44} color="#1F2937" />
                                    </div>

                                    <h3 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.75rem', zIndex: 1 }}>
                                        Public-Sector Operational Benefits
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '1rem', textAlign: 'center', lineHeight: 1.65, maxWidth: '320px', zIndex: 1 }}>
                                        Well-planned government software can help public-sector organizations structure administrative information and coordinate authorized workflows.
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1 }}>
                                        {['Accountability', 'Audit-Ready', 'Transparency'].map((t, i) => (
                                            <span key={i} style={{ padding: '6px 14px', background: 'rgba(250,204,21,0.12)', border: '1px solid rgba(250,204,21,0.25)', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 700, color: '#FEF9C3' }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Benefits List */}
                            <div data-aos="fade-left">
                                <span className="home-badge-tag">Operational Advantages</span>
                                <h2 className="gov-heading-h2">
                                    Benefits of Government Management Software for <span className="gradient-text">Public-Sector Operations</span>
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
                    SECTION 07 — RELEVANT FLYTOWARDS SERVICES
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="gov-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Engineering Scope</span>
                            <h2 className="gov-heading-h2">
                                FlyTowards Software Development Services for <span className="gradient-text">Government Organizations</span>
                            </h2>
                            <p className="gov-subtext" style={{ marginBottom: 0 }}>
                                Government software projects may require custom applications, enterprise architecture, workflow automation, system integrations and modernization of existing software.
                            </p>
                        </div>

                        <div className="services-tiles-grid" data-aos="fade-up">
                            {relevantServices.map((svc, idx) => (
                                <Link to={svc.link} key={idx} className="service-compact-tile">
                                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: '#FEF9C3', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                        {svc.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.45rem' }}>
                                        {svc.title}
                                    </h3>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                                        {svc.desc}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================================
                    SECTION 08 — OUR DEVELOPMENT APPROACH
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="gov-container">
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }} data-aos="fade-up">
                            <span className="home-badge-tag">Rigorous Methodology</span>
                            <h2 className="gov-heading-h2">
                                Our Government Management Software <span className="gradient-text">Development Process</span>
                            </h2>
                            <p className="gov-subtext" style={{ marginBottom: 0 }}>
                                We follow a structured approach to understand public-sector workflows and plan software functionality around administrative, security and implementation requirements.
                            </p>
                        </div>

                        <div data-aos="fade-up">
                            <div className="process-steps-row">
                                {developmentSteps.map((step, idx) => (
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
                    SECTION 09 — WHY CHOOSE FLYTOWARDS
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="gov-container">
                        <div className="why-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Public-Sector Focus</span>
                                <h2 className="gov-heading-h2">
                                    Why Consider FlyTowards for <span className="gradient-text">Government Software Development?</span>
                                </h2>
                                <p className="gov-subtext">
                                    Government software should reflect authorized administrative procedures, information responsibilities and the needs of different users.
                                </p>
                                <p className="gov-subtext">
                                    A practical solution begins with understanding these requirements before defining modules, integrations and deployment arrangements.
                                </p>
                                <Link to="/contact" className="home-btn-primary">
                                    Discuss Your Government Software Requirements <ArrowRight size={18} />
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
                    SECTION 10 — TAMIL NADU & SOUTH TAMIL NADU RELEVANCE
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                    <div className="gov-container">
                        <div className="location-split">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Tamil Nadu Context</span>
                                <h2 className="gov-heading-h2">
                                    Government Management Software Solutions in <span className="gradient-text">Tamil Nadu</span>
                                </h2>
                                <p className="gov-subtext">
                                    Government departments, local bodies and public-sector organizations across Tamil Nadu manage administrative records, public service activities, financial processes and interdepartmental coordination.
                                </p>
                                <p className="gov-subtext">
                                    Municipal corporations, municipalities, town panchayats, village panchayats and other public institutions may have different software requirements depending on their statutory responsibilities and existing systems.
                                </p>
                                <p className="gov-subtext">
                                    In South Tamil Nadu, organizations may need to coordinate information between administrative offices, field personnel and service delivery teams. Some processes may already operate through state or central government platforms. In these situations, new software should be assessed for compatibility with existing systems and permitted integration methods rather than unnecessarily duplicating established services.
                                </p>
                                <p className="gov-subtext" style={{ marginBottom: '1.5rem' }}>
                                    FlyTowards provides software development services for public-sector use cases across Tamil Nadu, focusing on administrative workflow planning, records management, authorized information access and operational reporting.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <div style={{ background: '#ffffff', borderRadius: '28px', padding: '3rem 2.5rem', border: '1px solid rgba(226, 232, 240, 0.8)', position: 'relative', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                                    <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
                                    <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)' }}>
                                        <Landmark size={30} color="#1F2937" />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.75rem' }}>
                                        Focused Records Management or Broad Administration Software
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                                        Whether your organization needs a focused records management application or broader government management software, we help evaluate requirements within the applicable technical, administrative and procurement framework.
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
                    SECTION 11 — INDUSTRY FAQs
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                    <div className="gov-container">
                        <div className="faq-grid">
                            <div data-aos="fade-right">
                                <span className="home-badge-tag">Regulatory &amp; Technical Insights</span>
                                <h2 className="gov-heading-h2">
                                    Frequently Asked Questions About <span className="gradient-text">Government Management Software</span>
                                </h2>
                                <p className="gov-subtext">
                                    Key considerations around e-governance workflows, compliance, accounting rules, security and deployment for public-sector bodies in Tamil Nadu.
                                </p>
                                <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '1.75rem', border: '1px solid rgba(250, 204, 21, 0.3)', marginTop: '1.5rem' }}>
                                    <p style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                                        Public Sector Architecture Evaluation
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1rem' }}>
                                        Our software architects can review your departmental file movement, records structure and security parameters within your organization's authorized guidelines.
                                    </p>
                                    <Link to="/contact" style={{ color: '#EAB308', fontWeight: 800, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                                        Connect with our public-sector desk <ChevronRight size={18} />
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
                    SECTION 12 — FINAL CTA
                ========================================================================= */}
                <section className="gov-section" style={{ background: '#f8fafc', paddingBottom: '120px' }}>
                    <div className="gov-container">
                        <div className="cta-banner" data-aos="zoom-in">
                            <div className="cta-banner-content">
                                <span className="gov-cta-eyebrow" style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#e0f2fe' }}>
                                    Modernize Public Records &amp; Governance
                                </span>
                                <h2>Connect Government Records, Workflows and Administrative Information</h2>
                                <p>
                                    Need a more organized records management system, clearer departmental workflows or a connected public-sector administration application? FlyTowards helps organizations explore custom government management software solutions aligned with authorized processes, technical requirements and existing systems. Share your government software requirements to begin a discussion about an appropriate development approach.
                                </p>
                                <div className="cta-buttons-wrap">
                                    <Link to="/contact" className="cta-btn-primary-white">
                                        Discuss Your Government Software Project <ArrowRight size={18} />
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

export default Government;
