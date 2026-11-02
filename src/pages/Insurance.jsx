import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Check,
    ChevronDown,
    ChevronRight,
    Shield,
    ShieldCheck,
    FileText,
    FileCheck2,
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
    RefreshCw,
    Building2,
    Activity,
    BellRing,
    Layers,
    Workflow,
    FolderLock,
    PhoneCall,
    Award,
    AlertTriangle,
    Calendar,
    Briefcase,
    Sliders,
    Filter,
    CheckSquare
} from 'lucide-react';

const Insurance = () => {
    // Interactive States for standout UI animations
    const [openFaq, setOpenFaq] = useState(0);
    const [activeWorkflowTab, setActiveWorkflowTab] = useState(0);
    const [activeDashboardView, setActiveDashboardView] = useState('portfolio'); // 'portfolio' | 'renewals' | 'claims' | 'clients'
    const [activeWorkflowMode, setActiveWorkflowMode] = useState('policy'); // 'policy' | 'claims'
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [isAutoPlayingWorkflow, setIsAutoPlayingWorkflow] = useState(false);
    const [activeRegionHub, setActiveRegionHub] = useState('south-tn');
    const [faqSearchQuery, setFaqSearchQuery] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);

        // SEO Title
        document.title = "Insurance Software Solutions in Tamil Nadu | FlyTowards";

        // Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute(
            "content",
            "Custom insurance software solutions in Tamil Nadu. FlyTowards develops policy management, insurance CRM, claims workflows and client management applications."
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
            "insurance software, insurance technology, insurance management systems, insurance crm software, insurance client management software, insurance software development, custom insurance software, insurance policy management software, insurance agency management software, insurance broker management software, insurance claims management software, policy renewal management, insurance customer relationship management, insurance workflow automation, insurance document management, insurance reporting software, InsurTech solutions"
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
            "https://flytowardsdigitalinnovation.com/industries/insurance/"
        );

        // Structured Data Schema.org (Service, Organization, BreadcrumbList, FAQPage)
        const schemaId = 'insurance-software-schema-script';
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
                    "@id": "https://flytowardsdigitalinnovation.com/industries/insurance/#service",
                    "name": "Insurance Software Solutions",
                    "serviceType": "Insurance Software Development, Insurance CRM & Policy Management Systems",
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
                        { "@type": "City", "name": "Nagercoil" },
                        { "@type": "City", "name": "Coimbatore" },
                        { "@type": "City", "name": "Chennai" }
                    ],
                    "description": "Custom insurance software solutions in Tamil Nadu. FlyTowards develops policy management, insurance CRM, claims workflows and client management applications.",
                    "url": "https://flytowardsdigitalinnovation.com/industries/insurance/"
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://flytowardsdigitalinnovation.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://flytowardsdigitalinnovation.com/industries/" },
                        { "@type": "ListItem", "position": 3, "name": "Insurance", "item": "https://flytowardsdigitalinnovation.com/industries/insurance/" }
                    ]
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is insurance software?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Insurance software includes digital applications used to manage insurance-related information and workflows, such as customer records, policy details, renewals, claims coordination and business administration. Features vary according to the organization's role." }
                        },
                        {
                            "@type": "Question",
                            "name": "What are insurance management systems?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Insurance management systems are applications that organize insurance business activities, including relevant policy information, customer records, documents, servicing tasks and reporting. Some systems may include broader policy administration or claims functionality for authorized organizations." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is insurance CRM software?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Insurance CRM software is a customer relationship management application designed around insurance business workflows. It may support enquiries, leads, customer profiles, communication history, follow-ups and policy servicing tasks." }
                        },
                        {
                            "@type": "Question",
                            "name": "What is the difference between insurance CRM software and insurance client management software?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Insurance CRM software generally focuses on customer relationships, enquiries and engagement activities. Insurance client management software may place greater emphasis on maintaining client profiles, associated policies, documents and ongoing servicing records. Their functionality can overlap." }
                        },
                        {
                            "@type": "Question",
                            "name": "Can insurance software track policy renewals and customer follow-ups?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Software can be developed to record renewal dates, assign follow-up tasks, generate configured reminders and maintain renewal status. Actual policy renewal depends on the insurer's processes, customer authorization and applicable requirements." }
                        },
                        {
                            "@type": "Question",
                            "name": "Can insurance management software support claims workflows?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Applications can support claims-related recordkeeping, document collection, communication and task tracking. Underwriting, claims decisions and settlement functions must remain within the authority of appropriately authorized organizations and personnel." }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does insurance software development cost in Tamil Nadu?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Costs depend on the required modules, user roles, policy and client data structures, integrations, document management, security requirements and deployment scope. A detailed requirements assessment helps establish the project budget." }
                        },
                        {
                            "@type": "Question",
                            "name": "What security and compliance requirements apply to insurance software in India?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Requirements depend on the organization's role, the information processed and the software's functions. Relevant considerations may include applicable Indian data protection laws, cybersecurity obligations and Insurance Regulatory and Development Authority of India (IRDAI) requirements. Qualified legal, compliance and security professionals should confirm the applicable obligations before deployment." }
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

    // Workflow Auto-advance timer when active
    useEffect(() => {
        let timer;
        if (isAutoPlayingWorkflow) {
            timer = setInterval(() => {
                setActiveStepIndex((prev) => {
                    const currentMax = activeWorkflowMode === 'policy' ? policyWorkflowSteps.length - 1 : claimsWorkflowSteps.length - 1;
                    return prev >= currentMax ? 0 : prev + 1;
                });
            }, 3000);
        }
        return () => clearInterval(timer);
    }, [isAutoPlayingWorkflow, activeWorkflowMode]);

    // Section 02 — Key Highlights (Icon List without cards)
    const overviewHighlights = [
        {
            title: "Policy Information Management",
            desc: "Organize policy details, documentation and relevant status information across lifecycle stages.",
            icon: <FileCheck2 size={24} color="#EAB308" />
        },
        {
            title: "Client Relationship Management",
            desc: "Maintain customer profiles, enquiries, family portings and multi-channel communication records.",
            icon: <Users size={24} color="#EAB308" />
        },
        {
            title: "Renewal & Task Coordination",
            desc: "Track important dates, automated reminders, follow-ups and assigned servicing activities.",
            icon: <Clock size={24} color="#EAB308" />
        },
        {
            title: "Insurance Workflow Reporting",
            desc: "Review selected policy, customer and administrative information with role-based operational oversight.",
            icon: <BarChart3 size={24} color="#EAB308" />
        }
    ];

    // Section 03 — Industry Challenges (6 Blocks in responsive grid)
    const challenges = [
        {
            id: "ch-1",
            icon: <Database size={24} color="#EAB308" />,
            title: "Fragmented Customer Information",
            desc: "Client contact details, policy information and communication history may be maintained across different files or applications.",
            impact: "High Service Lag",
            badgeColor: "rgba(234, 179, 8, 0.15)"
        },
        {
            id: "ch-2",
            icon: <FileClock size={24} color="#EAB308" />,
            title: "Manual Policy Renewal Tracking",
            desc: "Renewal dates and follow-up activities may depend on spreadsheets, calendars or individual staff reminders.",
            impact: "Lapse Risk",
            badgeColor: "rgba(245, 158, 11, 0.15)"
        },
        {
            id: "ch-3",
            icon: <FolderLock size={24} color="#EAB308" />,
            title: "Disconnected Policy Documentation",
            desc: "Policy schedules, supporting documents and relevant customer records may be stored in separate locations.",
            impact: "Audit Vulnerability",
            badgeColor: "rgba(234, 179, 8, 0.15)"
        },
        {
            id: "ch-4",
            icon: <Workflow size={24} color="#EAB308" />,
            title: "Complicated Claims Coordination",
            desc: "Claims-related communication, document collection and status updates may require repeated manual follow-ups.",
            impact: "Client Dissatisfaction",
            badgeColor: "rgba(245, 158, 11, 0.15)"
        },
        {
            id: "ch-5",
            icon: <Eye size={24} color="#EAB308" />,
            title: "Limited Sales & Service Visibility",
            desc: "Managers may find it difficult to review enquiries, assigned follow-ups, policy servicing tasks and customer interactions in one place.",
            impact: "Lost Leads",
            badgeColor: "rgba(245, 158, 11, 0.15)"
        },
        {
            id: "ch-6",
            icon: <FileSpreadsheet size={24} color="#EAB308" />,
            title: "Time-Consuming Administrative Reporting",
            desc: "Preparing reports on policies, renewals, customer activity and workflow status may require consolidating information from several sources.",
            impact: "Productivity Drain",
            badgeColor: "rgba(59, 130, 246, 0.15)"
        }
    ];

    // Section 04 — Industry Software Solutions (6 Cards in 3x2 grid)
    const solutions = [
        {
            icon: <Building2 size={26} color="#EAB308" />,
            tag: "Core Management",
            title: "Insurance Management Systems",
            desc: "Develop applications for organizing policy records, customer information, administrative tasks, documentation and relevant business workflows.",
            link: "/services/custom-software-development/",
            ctaText: "Explore Custom Software"
        },
        {
            icon: <Users size={26} color="#EAB308" />,
            tag: "Lead & Servicing",
            title: "Insurance CRM Software",
            desc: "Build customer relationship management applications for enquiries, leads, follow-ups, communication history and customer service activities.",
            link: "/services/crm-development/",
            ctaText: "Explore CRM Development"
        },
        {
            icon: <UserCheck size={26} color="#EAB308" />,
            tag: "360° Client Profile",
            title: "Insurance Client Management Software",
            desc: "Create systems for maintaining client profiles, associated policies, contact information, servicing requests and relevant documents.",
            link: "/services/enterprise-software-development/",
            ctaText: "Explore Enterprise Solutions"
        },
        {
            icon: <RefreshCw size={26} color="#EAB308" />,
            tag: "Retention Engine",
            title: "Policy & Renewal Management Software",
            desc: "Develop functionality for recording policy information, tracking renewal dates, assigning follow-ups and maintaining renewal status.",
            link: "/services/business-process-automation/",
            ctaText: "Explore Automation"
        },
        {
            icon: <GitBranch size={26} color="#EAB308" />,
            tag: "Coordination Portal",
            title: "Insurance Claims Workflow Software",
            desc: "Plan applications for organizing claims-related records, document submissions, task assignments and status tracking, according to the organization's responsibilities.",
            link: "/services/web-application-development/",
            ctaText: "Explore Web Apps"
        },
        {
            icon: <BarChart3 size={26} color="#EAB308" />,
            tag: "BI & Analytics",
            title: "Insurance Dashboards & Reporting",
            desc: "Build dashboards for reviewing selected customer enquiries, policy records, renewal activities, claims-related tasks and operational information.",
            link: "/services/custom-software-development/",
            ctaText: "Explore Dashboards"
        }
    ];

    // Section 05 — Workflows (Both Workflows Interactive!)
    const policyWorkflowSteps = [
        {
            stepNum: "01",
            title: "Customer Enquiry",
            actor: "Prospect / Sales Desk",
            description: "Insurance teams record prospective customer queries from WhatsApp, calls or walk-ins with initial interest profiling.",
            tag: "Lead Intake"
        },
        {
            stepNum: "02",
            title: "Client Registration",
            actor: "Operations Team",
            description: "Authorized staff verify KYC details, contact preferences and create a central client record in the insurance software.",
            tag: "KYC & Profile"
        },
        {
            stepNum: "03",
            title: "Policy Information Recording",
            actor: "Underwriting Coordinator",
            description: "Teams log policy numbers, insurer details, sum insured, premium schedules and coverage validity dates.",
            tag: "Policy Master"
        },
        {
            stepNum: "04",
            title: "Document Management",
            actor: "Doc Archive Engine",
            description: "Policy schedules, vehicle RC, medical records and endorsements are securely filed with role-based access control.",
            tag: "Secure Vault"
        },
        {
            stepNum: "05",
            title: "Policy Servicing",
            actor: "Support Desk",
            description: "Track customer endorsements, nominee adjustments, address changes and policy schedule download requests.",
            tag: "Active Servicing"
        },
        {
            stepNum: "06",
            title: "Renewal Reminder",
            actor: "Automated Dispatcher",
            description: "System identifies upcoming renewal windows (60/30/15/7 days) and generates automated alerts for staff and clients.",
            tag: "Proactive Alert"
        },
        {
            stepNum: "07",
            title: "Customer Follow-Up",
            actor: "Relationship Executive",
            description: "Staff track call outcomes, renewal quotes, customer confirmation and premium payment acknowledgment.",
            tag: "Retention Cycle"
        },
        {
            stepNum: "08",
            title: "Operational Reporting",
            actor: "Branch / Agency Manager",
            description: "Consolidated reports highlight renewal persistency ratio, active portfolio valuation and overdue follow-ups.",
            tag: "Executive BI"
        }
    ];

    const claimsWorkflowSteps = [
        {
            stepNum: "01",
            title: "Claim Notification",
            actor: "Customer / Nominee",
            description: "Initial intimation logged with incident date, policy reference, hospital/garage details and basic claim synopsis.",
            tag: "First Notice of Loss"
        },
        {
            stepNum: "02",
            title: "Claim Record Creation",
            actor: "Claims Coordinator",
            description: "System assigns a unique claim reference dossier and matches active coverage status against the master policy record.",
            tag: "File Generation"
        },
        {
            stepNum: "03",
            title: "Document Collection",
            actor: "Field / Back-Office Staff",
            description: "Organize medical discharge summaries, bills, repair estimates, FIR copies and verified identification papers.",
            tag: "Dossier Checklist"
        },
        {
            stepNum: "04",
            title: "Authorized Review or Referral",
            actor: "TPA / Insurer Channel",
            description: "Structured package transmitted to the authorized insurer or TPA desk for assessment under regulatory guidelines.",
            tag: "External Verification"
        },
        {
            stepNum: "05",
            title: "Status Update",
            actor: "System Sync",
            description: "Record intermediate status queries, surveyor remarks, query letters or approval advisories received from the insurer.",
            tag: "Stage Tracking"
        },
        {
            stepNum: "06",
            title: "Customer Communication",
            actor: "Customer Helpdesk",
            description: "Timely proactive notifications sent to the insured party regarding claims progress, query resolution and approvals.",
            tag: "Transparent Updates"
        },
        {
            stepNum: "07",
            title: "Record Closure",
            actor: "Audit & Compliance",
            description: "Complete dossier archived with payment reference numbers, satisfaction notes, and full historical audit trails.",
            tag: "Audited Archive"
        }
    ];

    // Section 05 - Tabbed Detailed Use Cases
    const detailedUseCases = [
        {
            title: "Customer Enquiry & Lead Management",
            icon: <Users size={22} color="#EAB308" />,
            badge: "Inbound Pipeline",
            desc: "Insurance teams can record customer enquiries, assign follow-up responsibilities and maintain communication histories across motor, health, life and commercial lines.",
            features: [
                "Multi-channel enquiry capture (WhatsApp, Web, Direct Walk-in)",
                "Automated agent assignment based on policy class or location",
                "Complete conversation history and follow-up timeline",
                "Lead status tagging (New, Quoted, Comparing, Converted)"
            ]
        },
        {
            title: "Client Registration & Profile Management",
            icon: <UserCheck size={22} color="#EAB308" />,
            badge: "Unified Portfolio",
            desc: "Authorized staff can organize customer details, relevant contact information and associated insurance records across entire family or business accounts.",
            features: [
                "Unified 360° client dashboard with multiple associated policies",
                "Family portfolio grouping and corporate employee mapping",
                "KYC document repository with expiration tracking",
                "Customer preferred communication language and timings"
            ]
        },
        {
            title: "Policy Information & Document Management",
            icon: <FileText size={22} color="#EAB308" />,
            badge: "Digital Records",
            desc: "Teams can maintain policy references, coverage-related information, document records and relevant policy status details in one searchable platform.",
            features: [
                "Comprehensive policy master: Insurer, Sum Insured, Deductibles",
                "Version-controlled endorsements and schedule attachments",
                "Role-based view and download permissions for sensitive docs",
                "Instant search by policy number, vehicle reg, or insured name"
            ]
        },
        {
            title: "Policy Renewal Follow-Ups",
            icon: <Clock size={22} color="#EAB308" />,
            badge: "Persistency Guard",
            desc: "Software can help track upcoming renewal dates, assign servicing tasks and record communication or renewal status updates to safeguard persistency rates.",
            features: [
                "Automated renewal calendar with 60, 30, 15 and 7-day triggers",
                "Configurable WhatsApp and SMS reminder dispatch rules",
                "Renewed vs. lapsed tracking with reason categorization",
                "Staff accountability metrics for overdue renewal follow-ups"
            ]
        },
        {
            title: "Claims Documentation & Coordination",
            icon: <Workflow size={22} color="#EAB308" />,
            badge: "Claim Tracker",
            desc: "Authorized users can organize claims-related information, supporting documents, task updates and communication records. Claims decisions and settlement authority remain with the appropriately authorized insurer or responsible party.",
            features: [
                "Digital document checklist tailored to claim category",
                "Real-time coordination timeline with assigned surveyor notes",
                "Proactive client notification of insurer stage transitions",
                "Full historical audit logging from first notice to file closure"
            ],
            regulatoryNote: "Claims decisions and settlement authority remain with the appropriately authorized insurer or responsible party."
        },
        {
            title: "Insurance Business Reporting",
            icon: <BarChart3 size={22} color="#EAB308" />,
            badge: "Executive Insights",
            desc: "Managers can review selected customer activity, renewal follow-ups, policy information and administrative task status through comprehensive visual reports.",
            features: [
                "Branch-wise and executive-wise renewal conversion analysis",
                "Portfolio distribution across life, general and health categories",
                "Average servicing and document turnaround metrics",
                "Exportable summaries for internal audits and team reviews"
            ]
        }
    ];

    // Section 06 — Business Benefits (5 Stacked Benefits)
    const benefitsList = [
        {
            num: "01",
            icon: <FolderLock size={22} color="#EAB308" />,
            title: "Organize Customer & Policy Information",
            desc: "Maintain structured records for clients, associated policies and relevant supporting documents in a single, secure environment."
        },
        {
            num: "02",
            icon: <Clock size={22} color="#EAB308" />,
            title: "Improve Renewal Visibility",
            desc: "Provide authorized teams with clearer access to upcoming renewal dates, assigned follow-ups and recorded renewal status to protect persistency."
        },
        {
            num: "03",
            icon: <Sliders size={22} color="#EAB308" />,
            title: "Simplify Insurance Administration",
            desc: "Support defined workflows for enquiries, policy servicing, document management and administrative reviews without manual chaos."
        },
        {
            num: "04",
            icon: <PhoneCall size={22} color="#EAB308" />,
            title: "Improve Client Communication Coordination",
            desc: "Maintain relevant interaction histories and task records to support consistent customer follow-ups and personalized service."
        },
        {
            num: "05",
            icon: <TrendingUp size={22} color="#EAB308" />,
            title: "Support Operational Reporting",
            desc: "Present selected customer, policy, renewal and workflow information through intuitive dashboards and actionable reports."
        }
    ];

    // Section 07 — Relevant FlyTowards Services (6 Linked Tiles)
    const relevantServices = [
        {
            icon: <Building2 size={24} color="#EAB308" />,
            title: "Custom Software Development",
            desc: "Build insurance applications around client management, policy administration and business-specific workflows.",
            link: "/services/custom-software-development/"
        },
        {
            icon: <Users size={24} color="#EAB308" />,
            title: "CRM Development",
            desc: "Develop customer relationship management functionality for insurance enquiries, follow-ups, communication records and service coordination.",
            link: "/services/crm-development/"
        },
        {
            icon: <Zap size={24} color="#EAB308" />,
            title: "Business Process Automation",
            desc: "Automate suitable renewal reminders, task assignments, document routing and administrative approval workflows.",
            link: "/services/business-process-automation/"
        },
        {
            icon: <Globe size={24} color="#EAB308" />,
            title: "Web Application Development",
            desc: "Create browser-based insurance management portals, client dashboards and administrative applications accessible from any branch.",
            link: "/services/web-application-development/"
        },
        {
            icon: <GitBranch size={24} color="#EAB308" />,
            title: "API Development",
            desc: "Connect compatible insurance, CRM, document management and business applications through supported interfaces.",
            link: "/services/api-development/"
        },
        {
            icon: <ShieldCheck size={24} color="#EAB308" />,
            title: "Software Maintenance & Support",
            desc: "Maintain agreed insurance application functionality, address identified issues and implement suitable software updates.",
            link: "/services/software-maintenance-support/"
        }
    ];

    // Section 08 — Development Approach (6-Step Timeline)
    const developmentSteps = [
        {
            step: "01",
            title: "Insurance Workflow Discovery",
            desc: "Understand customer enquiries, policy servicing, renewal activities, claims coordination and relevant administrative processes."
        },
        {
            step: "02",
            title: "Requirements & Existing System Assessment",
            desc: "Identify user roles, document requirements, existing applications, data handling needs, regulatory considerations and integration requirements."
        },
        {
            step: "03",
            title: "Solution Architecture & Access Planning",
            desc: "Define software modules, information relationships, user permissions, audit requirements and development priorities."
        },
        {
            step: "04",
            title: "UI/UX Design & Software Development",
            desc: "Design suitable interfaces and develop agreed insurance management and customer relationship functionality."
        },
        {
            step: "05",
            title: "Testing & Workflow Validation",
            desc: "Test policy records, renewal calculations or date rules, permissions, document handling, workflow status and supported integrations using representative scenarios."
        },
        {
            step: "06",
            title: "Deployment & Support Planning",
            desc: "Prepare the application for implementation, review data migration and staff onboarding needs, and define suitable maintenance arrangements."
        }
    ];

    // Section 09 — Why Choose FlyTowards (4 Numbered Differentiators)
    const whyChoosePoints = [
        {
            num: "01",
            title: "Insurance Workflow Understanding",
            desc: "We focus on identifying client management, policy servicing and administrative requirements during project discovery."
        },
        {
            num: "02",
            title: "Custom Application Planning",
            desc: "We consider customer records, policy information, user roles, document workflows and reporting needs when defining functionality."
        },
        {
            num: "03",
            title: "Data Security & Access Planning",
            desc: "We consider appropriate permissions, audit requirements and secure handling of sensitive customer information."
        },
        {
            num: "04",
            title: "Integration & Implementation Planning",
            desc: "We assess existing insurance applications, CRM dependencies, supported integrations and practical deployment requirements."
        }
    ];

    // Section 11 — Industry FAQs (8 Questions)
    const faqData = [
        {
            q: "What is insurance software?",
            a: "Insurance software includes digital applications used to manage insurance-related information and workflows, such as customer records, policy details, renewals, claims coordination and business administration. Features vary according to the organization's role."
        },
        {
            q: "What are insurance management systems?",
            a: "Insurance management systems are applications that organize insurance business activities, including relevant policy information, customer records, documents, servicing tasks and reporting. Some systems may include broader policy administration or claims functionality for authorized organizations."
        },
        {
            q: "What is insurance CRM software?",
            a: "Insurance CRM software is a customer relationship management application designed around insurance business workflows. It may support enquiries, leads, customer profiles, communication history, follow-ups and policy servicing tasks."
        },
        {
            q: "What is the difference between insurance CRM software and insurance client management software?",
            a: "Insurance CRM software generally focuses on customer relationships, enquiries and engagement activities. Insurance client management software may place greater emphasis on maintaining client profiles, associated policies, documents and ongoing servicing records. Their functionality can overlap."
        },
        {
            q: "Can insurance software track policy renewals and customer follow-ups?",
            a: "Yes. Software can be developed to record renewal dates, assign follow-up tasks, generate configured reminders and maintain renewal status. Actual policy renewal depends on the insurer's processes, customer authorization and applicable requirements."
        },
        {
            q: "Can insurance management software support claims workflows?",
            a: "Yes. Applications can support claims-related recordkeeping, document collection, communication and task tracking. Underwriting, claims decisions and settlement functions must remain within the authority of appropriately authorized organizations and personnel."
        },
        {
            q: "How much does insurance software development cost in Tamil Nadu?",
            a: "Costs depend on the required modules, user roles, policy and client data structures, integrations, document management, security requirements and deployment scope. A detailed requirements assessment helps establish the project budget."
        },
        {
            q: "What security and compliance requirements apply to insurance software in India?",
            a: "Requirements depend on the organization's role, the information processed and the software's functions. Relevant considerations may include applicable Indian data protection laws, cybersecurity obligations and Insurance Regulatory and Development Authority of India (IRDAI) requirements. Qualified legal, compliance and security professionals should confirm the applicable obligations before deployment."
        }
    ];

    const filteredFaqs = faqData.filter(item =>
        item.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(faqSearchQuery.toLowerCase())
    );

    return (
        <main className="ins-page-wrapper">
            {/* Inline Scoped Styles with Standout Dynamic Animations */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

                .ins-page-wrapper {
                    font-family: 'Outfit', sans-serif;
                    color: var(--text-primary, #1F2937);
                    position: relative;
                    z-index: 1;
                    background: transparent;
                }

                .ins-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    width: 100%;
                    box-sizing: border-box;
                }

                .ins-section {
                    padding: 90px 0;
                    position: relative;
                }

                /* Section Header */
                .ins-section-header {
                    margin-bottom: 3.5rem;
                }
                .ins-section-header.text-center {
                    text-align: center;
                    max-width: 820px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .ins-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 14px;
                    border-radius: 9999px;
                    font-size: 0.82rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    background: rgba(250, 204, 21, 0.18);
                    color: #854D0E;
                    border: 1px solid rgba(234, 179, 8, 0.35);
                    margin-bottom: 1rem;
                    backdrop-filter: blur(8px);
                }
                .ins-section-title {
                    font-size: clamp(2rem, 3.8vw, 2.75rem);
                    font-weight: 800;
                    line-height: 1.22;
                    color: #111827;
                    margin-bottom: 1.1rem;
                    letter-spacing: -0.02em;
                }
                .ins-section-desc {
                    font-size: 1.05rem;
                    line-height: 1.75;
                    color: #4B5563;
                    max-width: 760px;
                }
                .ins-section-header.text-center .ins-section-desc {
                    margin: 0 auto;
                }

                /* Buttons */
                .ins-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: #FACC15;
                    color: #1F2937;
                    padding: 14px 28px;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.96rem;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 4px 18px rgba(250, 204, 21, 0.38);
                    border: 1px solid rgba(234, 179, 8, 0.5);
                    cursor: pointer;
                }
                .ins-btn-primary:hover {
                    background: #EAB308;
                    color: #111827;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 26px rgba(234, 179, 8, 0.45);
                }
                .ins-btn-outline {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: #FFFFFF;
                    color: #1F2937;
                    padding: 14px 28px;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.96rem;
                    text-decoration: none;
                    border: 1.5px solid #D1D5DB;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .ins-btn-outline:hover {
                    background: #F3F4F6;
                    border-color: #9CA3AF;
                    transform: translateY(-2px);
                }

                /* SECTION 01 — HERO */
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 0.95fr;
                    gap: 3.5rem;
                    align-items: center;
                }
                .hero-tagline-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    padding: 7px 16px;
                    border-radius: 9999px;
                    font-size: 0.88rem;
                    font-weight: 700;
                    background: #FEF9C3;
                    color: #854D0E;
                    border: 1px solid #FDE047;
                    margin-bottom: 1.25rem;
                    box-shadow: 0 2px 8px rgba(234, 179, 8, 0.15);
                }
                .hero-h1 {
                    font-size: clamp(2.35rem, 4.4vw, 3.5rem);
                    font-weight: 900;
                    line-height: 1.16;
                    color: #0F172A;
                    margin-bottom: 1.2rem;
                    letter-spacing: -0.03em;
                }
                .hero-intro-text p {
                    font-size: 1.02rem;
                    line-height: 1.72;
                    color: #4B5563;
                    margin-bottom: 0.9rem;
                }
                .hero-cta-group {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-top: 2rem;
                    align-items: center;
                }
                .hero-trust-strip {
                    display: flex;
                    align-items: center;
                    gap: 1.75rem;
                    margin-top: 2.25rem;
                    padding-top: 1.75rem;
                    border-top: 1px dashed #D1D5DB;
                    flex-wrap: wrap;
                }
                .hero-trust-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.84rem;
                    font-weight: 600;
                    color: #4B5563;
                }

                /* HERO LIVE CONSOLE DASHBOARD (Interactive Standout Animation) */
                .hero-dashboard-card {
                    background: #111827;
                    border-radius: 20px;
                    border: 1px solid #374151;
                    box-shadow: 0 24px 60px -15px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                    position: relative;
                    color: #F9FAFB;
                    transition: transform 0.3s ease;
                }
                .hero-dashboard-header {
                    padding: 1rem 1.25rem;
                    background: #1F2937;
                    border-bottom: 1px solid #374151;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .hero-window-dots {
                    display: flex;
                    gap: 6px;
                }
                .hero-window-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }
                .dot-red { background: #4B5563; }
                .dot-yellow { background: #F59E0B; }
                .dot-green { background: #10B981; }

                .hero-tab-switcher {
                    display: flex;
                    gap: 4px;
                    background: #111827;
                    padding: 3px;
                    border-radius: 8px;
                    border: 1px solid #374151;
                }
                .hero-tab-btn {
                    background: transparent;
                    border: none;
                    color: #9CA3AF;
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .hero-tab-btn.active {
                    background: #FACC15;
                    color: #111827;
                }

                .hero-console-body {
                    padding: 1.25rem;
                }
                .hero-kpi-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 0.75rem;
                    margin-bottom: 1.25rem;
                }
                .hero-kpi-box {
                    background: #1F2937;
                    border: 1px solid #374151;
                    padding: 0.75rem;
                    border-radius: 10px;
                    text-align: left;
                    position: relative;
                    overflow: hidden;
                }
                .hero-kpi-box::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #FACC15;
                }
                .hero-kpi-label {
                    font-size: 0.72rem;
                    color: #9CA3AF;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 3px;
                }
                .hero-kpi-val {
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: #FACC15;
                }
                .hero-kpi-trend {
                    font-size: 0.68rem;
                    color: #34D399;
                    display: flex;
                    align-items: center;
                    gap: 3px;
                    margin-top: 2px;
                }

                .hero-screen-panel {
                    background: #1F2937;
                    border-radius: 12px;
                    border: 1px solid #374151;
                    padding: 1rem;
                }
                .hero-list-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.65rem 0.5rem;
                    border-bottom: 1px solid #2D3748;
                    font-size: 0.82rem;
                    transition: background 0.2s ease;
                }
                .hero-list-item:last-child {
                    border-bottom: none;
                }
                .hero-list-item:hover {
                    background: rgba(250, 204, 21, 0.06);
                    border-radius: 6px;
                }
                .hero-badge-tag {
                    font-size: 0.7rem;
                    font-weight: 700;
                    padding: 3px 8px;
                    border-radius: 9999px;
                    display: inline-block;
                }
                .badge-due { background: rgba(245, 158, 11, 0.2); color: #FBBF24; border: 1px solid rgba(245, 158, 11, 0.4); }
                .badge-active { background: rgba(16, 185, 129, 0.2); color: #34D399; border: 1px solid rgba(16, 185, 129, 0.4); }
                .badge-review { background: rgba(59, 130, 246, 0.2); color: #60A5FA; border: 1px solid rgba(59, 130, 246, 0.4); }

                /* Pulsing Alert Banner in Hero Console */
                .hero-live-feed {
                    margin-top: 1rem;
                    padding: 0.75rem;
                    background: rgba(250, 204, 21, 0.08);
                    border: 1px solid rgba(234, 179, 8, 0.3);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.78rem;
                }
                .pulse-beacon {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #FACC15;
                    box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.7);
                    animation: pulseRing 1.8s infinite;
                    flex-shrink: 0;
                }
                @keyframes pulseRing {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(250, 204, 21, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(250, 204, 21, 0); }
                }

                /* SECTION 02 — OVERVIEW */
                .overview-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 0.85fr;
                    gap: 3.5rem;
                    align-items: center;
                }
                .overview-highlight-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .overview-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1.15rem;
                    padding: 1.25rem;
                    border-radius: 14px;
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .overview-item:hover {
                    transform: translateX(6px);
                    border-color: #FACC15;
                    box-shadow: 0 8px 24px rgba(234, 179, 8, 0.12);
                }
                .overview-icon-wrapper {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: #FEF9C3;
                    border: 1px solid #FDE047;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: 0 4px 12px rgba(234, 179, 8, 0.15);
                }
                .overview-item h4 {
                    font-size: 1.08rem;
                    font-weight: 700;
                    color: #111827;
                    margin-bottom: 0.25rem;
                }
                .overview-item p {
                    font-size: 0.92rem;
                    color: #4B5563;
                    line-height: 1.55;
                    margin: 0;
                }

                /* SECTION 03 — CHALLENGES (6 Grid Blocks) */
                .challenges-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.75rem;
                }
                .challenge-card {
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 16px;
                    padding: 2rem 1.75rem;
                    position: relative;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .challenge-card:hover {
                    transform: translateY(-6px);
                    border-color: #FACC15;
                    box-shadow: 0 16px 36px rgba(234, 179, 8, 0.14);
                }
                .challenge-card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1.25rem;
                }
                .challenge-icon-box {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    background: #FEF9C3;
                    border: 1px solid #FDE047;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(234, 179, 8, 0.12);
                }
                .challenge-impact-pill {
                    font-size: 0.72rem;
                    font-weight: 700;
                    padding: 3px 10px;
                    border-radius: 9999px;
                    color: #854D0E;
                    background: #FEF9C3;
                    border: 1px solid #FDE047;
                }
                .challenge-card h3 {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #111827;
                    margin-bottom: 0.75rem;
                    line-height: 1.35;
                }
                .challenge-card p {
                    font-size: 0.94rem;
                    color: #4B5563;
                    line-height: 1.65;
                    margin: 0;
                }

                /* SECTION 04 — SOLUTIONS (3x2 Grid) */
                .solutions-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.75rem;
                }
                .solution-card {
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 18px;
                    padding: 2.25rem 1.85rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .solution-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: #FACC15;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .solution-card:hover {
                    transform: translateY(-8px);
                    border-color: #FACC15;
                    box-shadow: 0 20px 42px rgba(234, 179, 8, 0.16);
                }
                .solution-card:hover::before {
                    opacity: 1;
                }
                .solution-tag-pill {
                    font-size: 0.74rem;
                    font-weight: 700;
                    color: #854D0E;
                    background: #FEF9C3;
                    border: 1px solid #FDE047;
                    padding: 4px 10px;
                    border-radius: 6px;
                    display: inline-block;
                    margin-bottom: 1rem;
                }
                .solution-card h3 {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #111827;
                    margin-bottom: 0.85rem;
                    line-height: 1.3;
                }
                .solution-card p {
                    font-size: 0.94rem;
                    color: #4B5563;
                    line-height: 1.68;
                    margin-bottom: 1.5rem;
                }
                .solution-link-action {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: #111827;
                    font-size: 0.88rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: gap 0.2s ease, color 0.2s ease;
                    margin-top: auto;
                }
                .solution-link-action:hover {
                    color: #D97706;
                    gap: 10px;
                }

                /* SECTION 05 — WORKFLOWS & USE CASES (Interactive Dual Stepper & Tabs) */
                .workflow-control-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 2.5rem;
                    flex-wrap: wrap;
                    gap: 1.25rem;
                    padding: 1.25rem 1.75rem;
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 16px;
                    box-shadow: 0 4px 14px rgba(0,0,0,0.03);
                }
                .workflow-mode-switch {
                    display: flex;
                    gap: 8px;
                    background: #F3F4F6;
                    padding: 4px;
                    border-radius: 10px;
                    border: 1px solid #E5E7EB;
                }
                .workflow-mode-btn {
                    padding: 8px 18px;
                    border-radius: 8px;
                    font-size: 0.88rem;
                    font-weight: 700;
                    border: none;
                    background: transparent;
                    color: #4B5563;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.25s ease;
                }
                .workflow-mode-btn.active {
                    background: #FACC15;
                    color: #111827;
                    box-shadow: 0 2px 8px rgba(250, 204, 21, 0.35);
                }

                .workflow-playback-toggle {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #111827;
                    color: #F9FAFB;
                    font-size: 0.82rem;
                    font-weight: 600;
                    padding: 8px 16px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .workflow-playback-toggle:hover {
                    background: #1F2937;
                }

                /* Horizontal Stepper Timeline Visualizer */
                .workflow-stepper-rail {
                    display: flex;
                    align-items: stretch;
                    gap: 1rem;
                    overflow-x: auto;
                    padding-bottom: 1.25rem;
                    margin-bottom: 2rem;
                    scrollbar-width: thin;
                }
                .workflow-step-node {
                    flex: 1;
                    min-width: 140px;
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 12px;
                    padding: 1rem;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    position: relative;
                }
                .workflow-step-node:hover {
                    border-color: #FACC15;
                    transform: translateY(-2px);
                }
                .workflow-step-node.active-step {
                    background: #111827;
                    border-color: #FACC15;
                    color: #FFFFFF;
                    box-shadow: 0 8px 22px rgba(17, 24, 39, 0.25);
                }
                .workflow-step-node.active-step .step-badge-num {
                    background: #FACC15;
                    color: #111827;
                }
                .workflow-step-node.active-step .step-node-sub {
                    color: #D1D5DB;
                }
                .step-badge-num {
                    font-size: 0.72rem;
                    font-weight: 800;
                    padding: 2px 7px;
                    border-radius: 9999px;
                    background: #FEF9C3;
                    color: #854D0E;
                    display: inline-block;
                    margin-bottom: 0.4rem;
                }
                .step-node-name {
                    font-size: 0.88rem;
                    font-weight: 700;
                    line-height: 1.3;
                    margin-bottom: 0.25rem;
                }
                .step-node-sub {
                    font-size: 0.75rem;
                    color: #6B7280;
                }

                /* Active Step Showcase Card */
                .active-step-spotlight {
                    background: #FFFFFF;
                    border: 2px solid #FACC15;
                    border-radius: 18px;
                    padding: 2.25rem;
                    margin-bottom: 3rem;
                    box-shadow: 0 12px 36px rgba(234, 179, 8, 0.12);
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 2.5rem;
                    align-items: center;
                }
                .spotlight-left h3 {
                    font-size: 1.45rem;
                    font-weight: 800;
                    color: #111827;
                    margin-bottom: 0.75rem;
                }
                .spotlight-left p {
                    font-size: 1.02rem;
                    color: #4B5563;
                    line-height: 1.7;
                    margin-bottom: 1.25rem;
                }
                .spotlight-actor-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.82rem;
                    font-weight: 700;
                    padding: 5px 12px;
                    border-radius: 6px;
                    background: #FEF9C3;
                    color: #854D0E;
                    border: 1px solid #FDE047;
                }
                .spotlight-preview-box {
                    background: #111827;
                    border-radius: 14px;
                    padding: 1.5rem;
                    color: #F9FAFB;
                    border: 1px solid #374151;
                }
                .spotlight-code-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 0.75rem;
                    margin-bottom: 0.75rem;
                    border-bottom: 1px solid #374151;
                    font-size: 0.75rem;
                    color: #9CA3AF;
                }
                .spotlight-mock-field {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.82rem;
                    padding: 0.4rem 0;
                    border-bottom: 1px dashed #2D3748;
                }
                .spotlight-mock-field:last-child {
                    border-bottom: none;
                }

                /* Detailed 6 Tabs Grid */
                .usecases-tab-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.75rem;
                }
                .usecase-box {
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 16px;
                    padding: 2rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 3px 12px rgba(0,0,0,0.03);
                }
                .usecase-box:hover {
                    border-color: #FACC15;
                    transform: translateY(-4px);
                    box-shadow: 0 14px 30px rgba(234, 179, 8, 0.12);
                }
                .usecase-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1rem;
                }
                .usecase-title {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #111827;
                    margin-bottom: 0.65rem;
                }
                .usecase-desc {
                    font-size: 0.94rem;
                    color: #4B5563;
                    line-height: 1.65;
                    margin-bottom: 1.25rem;
                }
                .usecase-feature-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .usecase-feature-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.88rem;
                    color: #374151;
                    font-weight: 500;
                }

                .compliance-alert-strip {
                    background: #FFFBEB;
                    border: 1px solid #FDE68A;
                    border-radius: 14px;
                    padding: 1.25rem 1.75rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    margin-top: 2.5rem;
                }
                .compliance-alert-strip p {
                    font-size: 0.92rem;
                    color: #92400E;
                    line-height: 1.6;
                    margin: 0;
                }

                /* SECTION 06 — BUSINESS BENEFITS */
                .benefits-grid {
                    display: grid;
                    grid-template-columns: 0.9fr 1.1fr;
                    gap: 3.5rem;
                    align-items: center;
                }
                .benefit-dashboard-graphic {
                    background: #111827;
                    border-radius: 20px;
                    padding: 1.75rem;
                    border: 1px solid #374151;
                    box-shadow: 0 20px 50px rgba(17, 24, 39, 0.3);
                    color: #F9FAFB;
                    position: relative;
                }
                .graphic-metric-card {
                    background: #1F2937;
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 1rem 1.25rem;
                    margin-bottom: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .graphic-metric-card:last-child {
                    margin-bottom: 0;
                }
                .graphic-metric-val {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: #FACC15;
                }

                .stacked-benefits-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }
                .stacked-benefit-item {
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 16px;
                    padding: 1.45rem 1.75rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 1.25rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
                }
                .stacked-benefit-item:hover {
                    transform: translateX(6px);
                    border-color: #FACC15;
                    box-shadow: 0 10px 24px rgba(234, 179, 8, 0.12);
                }
                .benefit-num-circle {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background: #FEF9C3;
                    border: 1px solid #FDE047;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 800;
                    color: #854D0E;
                    font-size: 0.92rem;
                    flex-shrink: 0;
                }
                .stacked-benefit-item h3 {
                    font-size: 1.12rem;
                    font-weight: 700;
                    color: #111827;
                    margin-bottom: 0.35rem;
                }
                .stacked-benefit-item p {
                    font-size: 0.92rem;
                    color: #4B5563;
                    line-height: 1.6;
                    margin: 0;
                }

                /* SECTION 07 — SERVICES (3-Column Responsive Grid) */
                .services-tiles-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.75rem;
                }
                .service-tile-card {
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 16px;
                    padding: 2rem 1.75rem;
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    transition: all 0.3s ease;
                    box-shadow: 0 3px 12px rgba(0,0,0,0.03);
                }
                .service-tile-card:hover {
                    border-color: #FACC15;
                    transform: translateY(-6px);
                    box-shadow: 0 16px 36px rgba(234, 179, 8, 0.14);
                }
                .service-tile-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    background: #FEF9C3;
                    border: 1px solid #FDE047;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.25rem;
                }
                .service-tile-card h3 {
                    font-size: 1.18rem;
                    font-weight: 800;
                    color: #111827;
                    margin-bottom: 0.65rem;
                }
                .service-tile-card p {
                    font-size: 0.92rem;
                    color: #4B5563;
                    line-height: 1.6;
                    margin-bottom: 1.25rem;
                }
                .service-tile-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.86rem;
                    font-weight: 700;
                    color: #854D0E;
                    margin-top: auto;
                }

                /* SECTION 08 — DEVELOPMENT APPROACH (Numbered Timeline) */
                .timeline-horizontal-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 1.25rem;
                    position: relative;
                }
                .timeline-step-card {
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 16px;
                    padding: 1.75rem 1.25rem;
                    position: relative;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                .timeline-step-card:hover {
                    border-color: #FACC15;
                    transform: translateY(-5px);
                    box-shadow: 0 12px 28px rgba(234, 179, 8, 0.12);
                }
                .timeline-num-badge {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    background: #111827;
                    color: #FACC15;
                    font-weight: 800;
                    font-size: 0.88rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.15rem;
                    box-shadow: 0 4px 10px rgba(17, 24, 39, 0.2);
                }
                .timeline-step-card h3 {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #111827;
                    margin-bottom: 0.6rem;
                    line-height: 1.35;
                }
                .timeline-step-card p {
                    font-size: 0.85rem;
                    color: #4B5563;
                    line-height: 1.6;
                    margin: 0;
                }

                /* SECTION 09 — WHY CHOOSE FLYTOWARDS */
                .why-choose-grid {
                    display: grid;
                    grid-template-columns: 0.9fr 1.1fr;
                    gap: 3.5rem;
                    align-items: center;
                }
                .why-choose-card-group {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }
                .differentiator-item {
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 16px;
                    padding: 1.75rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 1.25rem;
                    transition: all 0.3s ease;
                }
                .differentiator-item:hover {
                    border-color: #FACC15;
                    transform: translateX(6px);
                    box-shadow: 0 10px 24px rgba(234, 179, 8, 0.12);
                }
                .diff-num {
                    font-size: 1.35rem;
                    font-weight: 900;
                    color: #D97706;
                    font-family: monospace;
                    line-height: 1;
                    padding-top: 2px;
                }
                .differentiator-item h3 {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #111827;
                    margin-bottom: 0.35rem;
                }
                .differentiator-item p {
                    font-size: 0.92rem;
                    color: #4B5563;
                    line-height: 1.6;
                    margin: 0;
                }

                /* SECTION 10 — TAMIL NADU RELEVANCE */
                .editorial-tn-wrapper {
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 24px;
                    padding: 3.5rem 3rem;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.03);
                    position: relative;
                    overflow: hidden;
                }
                .editorial-tn-grid {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 3.5rem;
                    align-items: center;
                }
                .editorial-text-col p {
                    font-size: 1.02rem;
                    line-height: 1.76;
                    color: #374151;
                    margin-bottom: 1.15rem;
                }
                .tn-regional-console {
                    background: #111827;
                    border-radius: 18px;
                    padding: 1.75rem;
                    color: #F9FAFB;
                    border: 1px solid #374151;
                }
                .region-hub-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 1.25rem;
                }
                .region-hub-btn {
                    background: #1F2937;
                    border: 1px solid #374151;
                    color: #D1D5DB;
                    font-size: 0.78rem;
                    font-weight: 600;
                    padding: 6px 12px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .region-hub-btn.active, .region-hub-btn:hover {
                    background: #FACC15;
                    color: #111827;
                    border-color: #FACC15;
                }

                /* SECTION 11 — FAQS (Two-column layout + accordion) */
                .faq-section-grid {
                    display: grid;
                    grid-template-columns: 0.85fr 1.15fr;
                    gap: 3.5rem;
                    align-items: flex-start;
                }
                .faq-search-box {
                    position: relative;
                    margin-top: 1.5rem;
                }
                .faq-search-input {
                    width: 100%;
                    padding: 12px 14px 12px 42px;
                    border-radius: 12px;
                    border: 1.5px solid #D1D5DB;
                    background: #FFFFFF;
                    font-size: 0.92rem;
                    color: #1F2937;
                    outline: none;
                    transition: border-color 0.2s ease;
                    box-sizing: border-box;
                }
                .faq-search-input:focus {
                    border-color: #EAB308;
                    box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.2);
                }
                .faq-search-icon {
                    position: absolute;
                    left: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #9CA3AF;
                }
                .faq-accordion-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .faq-card {
                    background: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 14px;
                    overflow: hidden;
                    transition: all 0.25s ease;
                }
                .faq-card.open {
                    border-color: #FACC15;
                    box-shadow: 0 6px 20px rgba(234, 179, 8, 0.1);
                }
                .faq-trigger {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.25rem 1.5rem;
                    background: none;
                    border: none;
                    text-align: left;
                    cursor: pointer;
                    gap: 1rem;
                }
                .faq-trigger h3 {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #111827;
                    margin: 0;
                    line-height: 1.4;
                }
                .faq-chevron-icon {
                    color: #6B7280;
                    transition: transform 0.3s ease;
                    flex-shrink: 0;
                }
                .faq-card.open .faq-chevron-icon {
                    transform: rotate(180deg);
                    color: #D97706;
                }
                .faq-answer-drawer {
                    padding: 0 1.5rem 1.35rem;
                    color: #4B5563;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    border-top: 1px solid #F3F4F6;
                    padding-top: 1rem;
                }

                /* SECTION 12 — FINAL CTA BANNER */
                .final-cta-banner {
                    background: linear-gradient(135deg, #111827 0%, #1F2937 100%);
                    border-radius: 24px;
                    padding: 4.5rem 3rem;
                    text-align: center;
                    color: #FFFFFF;
                    box-shadow: 0 24px 60px -10px rgba(15, 23, 42, 0.3);
                    position: relative;
                    overflow: hidden;
                    border: 1px solid #374151;
                }
                .final-cta-banner::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 600px;
                    height: 300px;
                    background: radial-gradient(circle, rgba(250, 204, 21, 0.22) 0%, rgba(0,0,0,0) 70%);
                    pointer-events: none;
                }
                .cta-h2 {
                    font-size: clamp(2rem, 3.8vw, 3rem);
                    font-weight: 900;
                    margin-bottom: 1.25rem;
                    letter-spacing: -0.02em;
                    color: #F9FAFB;
                }
                .cta-desc {
                    font-size: 1.05rem;
                    line-height: 1.75;
                    color: #D1D5DB;
                    max-width: 780px;
                    margin: 0 auto 2.25rem;
                }
                .cta-actions {
                    display: flex;
                    justify-content: center;
                    gap: 1.25rem;
                    flex-wrap: wrap;
                }

                /* Responsive Breakpoints */
                @media (max-width: 1024px) {
                    .hero-grid,
                    .overview-grid,
                    .benefits-grid,
                    .why-choose-grid,
                    .editorial-tn-grid,
                    .faq-section-grid,
                    .active-step-spotlight {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                    .timeline-horizontal-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .solutions-grid,
                    .challenges-grid,
                    .services-tiles-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .ins-section {
                        padding: 60px 0;
                    }
                    .solutions-grid,
                    .challenges-grid,
                    .services-tiles-grid,
                    .usecases-tab-grid,
                    .timeline-horizontal-grid {
                        grid-template-columns: 1fr;
                    }
                    .hero-kpi-row {
                        grid-template-columns: 1fr;
                    }
                    .final-cta-banner {
                        padding: 3rem 1.5rem;
                    }
                    .editorial-tn-wrapper {
                        padding: 2.25rem 1.5rem;
                    }
                }
            `}</style>

            {/* SECTION 01 — HERO */}
            <section className="ins-section" style={{ paddingTop: '130px', paddingBottom: '70px' }}>
                <div className="ins-container">
                    <div className="hero-grid">
                        {/* Hero Left Column */}
                        <div>
                            <div className="hero-tagline-pill">
                                <ShieldCheck size={18} color="#D97706" />
                                <span>Connect Insurance Clients, Policies, Renewals and Business Operations</span>
                            </div>

                            <h1 className="hero-h1">
                                Insurance Software Solutions for Businesses in{' '}
                                <span style={{
                                    background: 'linear-gradient(135deg, #B45309 0%, #D97706 50%, #F59E0B 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Tamil Nadu
                                </span>
                            </h1>

                            <div className="hero-intro-text">
                                <p>
                                    Insurance businesses manage information across customer enquiries, policy records, renewals, documentation, claims coordination and administrative reporting.
                                </p>
                                <p>
                                    When these activities depend on disconnected spreadsheets, emails or separate applications, maintaining consistent information and tracking ongoing work can become difficult.
                                </p>
                                <p>
                                    <strong>FlyTowards</strong> provides insurance software development solutions for insurance agencies, brokers, intermediaries and insurance-focused organizations across Tamil Nadu, with a focus on South Tamil Nadu.
                                </p>
                                <p>
                                    We help businesses plan custom insurance management systems, insurance CRM software, client management applications and connected insurance workflows.
                                </p>
                                <p>
                                    Whether you need a focused insurance client management system or a broader operational platform, we work around your business requirements, user roles and existing software environment.
                                </p>
                            </div>

                            <div className="hero-cta-group">
                                <Link to="/contact" className="ins-btn-primary">
                                    Discuss Your Insurance Software Project
                                    <ArrowRight size={18} />
                                </Link>
                                <Link to="/services" className="ins-btn-outline">
                                    Explore Our Software Services
                                </Link>
                            </div>

                            <div className="hero-trust-strip">
                                <div className="hero-trust-item">
                                    <CheckCircle2 size={16} color="#10B981" />
                                    <span>IRDAI-Aware Process Design</span>
                                </div>
                                <div className="hero-trust-item">
                                    <CheckCircle2 size={16} color="#10B981" />
                                    <span>Role-Based Access Security</span>
                                </div>
                                <div className="hero-trust-item">
                                    <CheckCircle2 size={16} color="#10B981" />
                                    <span>Multi-Branch Policy Sync</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Right Column: Modern Insurance Management Dashboard Simulator */}
                        <div>
                            <div className="hero-dashboard-card">
                                <div className="hero-dashboard-header">
                                    <div className="hero-window-dots">
                                        <span className="hero-window-dot dot-red"></span>
                                        <span className="hero-window-dot dot-yellow"></span>
                                        <span className="hero-window-dot dot-green"></span>
                                    </div>
                                    <div className="hero-tab-switcher">
                                        <button
                                            className={`hero-tab-btn ${activeDashboardView === 'portfolio' ? 'active' : ''}`}
                                            onClick={() => setActiveDashboardView('portfolio')}
                                        >
                                            Policies
                                        </button>
                                        <button
                                            className={`hero-tab-btn ${activeDashboardView === 'renewals' ? 'active' : ''}`}
                                            onClick={() => setActiveDashboardView('renewals')}
                                        >
                                            Renewals
                                        </button>
                                        <button
                                            className={`hero-tab-btn ${activeDashboardView === 'claims' ? 'active' : ''}`}
                                            onClick={() => setActiveDashboardView('claims')}
                                        >
                                            Claims
                                        </button>
                                        <button
                                            className={`hero-tab-btn ${activeDashboardView === 'clients' ? 'active' : ''}`}
                                            onClick={() => setActiveDashboardView('clients')}
                                        >
                                            CRM
                                        </button>
                                    </div>
                                </div>

                                <div className="hero-console-body">
                                    <div className="hero-kpi-row">
                                        <div className="hero-kpi-box">
                                            <div className="hero-kpi-label">Active Policies</div>
                                            <div className="hero-kpi-val">2,845</div>
                                            <div className="hero-kpi-trend">
                                                <TrendingUp size={12} /> +14.2% YoY
                                            </div>
                                        </div>
                                        <div className="hero-kpi-box">
                                            <div className="hero-kpi-label">Renewal Due</div>
                                            <div className="hero-kpi-val" style={{ color: '#FBBF24' }}>148</div>
                                            <div className="hero-kpi-trend" style={{ color: '#FBBF24' }}>
                                                Next 15 Days
                                            </div>
                                        </div>
                                        <div className="hero-kpi-box">
                                            <div className="hero-kpi-label">Claims Active</div>
                                            <div className="hero-kpi-val" style={{ color: '#60A5FA' }}>24</div>
                                            <div className="hero-kpi-trend" style={{ color: '#9CA3AF' }}>
                                                Under Review
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dynamic Interactive Panel */}
                                    <div className="hero-screen-panel">
                                        {activeDashboardView === 'portfolio' && (
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', fontSize: '0.78rem', color: '#9CA3AF' }}>
                                                    <span>RECENT POLICY DOSSIERS</span>
                                                    <span>STATUS</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>POL-MOT-2026-9041</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>Commercial Fleet (Madurai Logistics)</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-active">Active</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>POL-HLT-2026-4412</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>Family Floater (Tirunelveli)</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-active">Verified</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>POL-FIR-2026-1189</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>Industrial Fire & Special Perils</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-due">Endorsement</span>
                                                </div>
                                            </div>
                                        )}

                                        {activeDashboardView === 'renewals' && (
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', fontSize: '0.78rem', color: '#9CA3AF' }}>
                                                    <span>UPCOMING RENEWAL FOLLOW-UPS</span>
                                                    <span>DEADLINE</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>Sundaram Textiles — Motor Fleet</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#FBBF24' }}>Follow-up Task Assigned: S. Karthik</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-due">Due in 3 Days</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>Dr. R. Meenakshi — Term Life</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>WhatsApp Reminder Dispatched</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-due">Due in 7 Days</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>Tuticorin Marine Logistics</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#34D399' }}>Renewal Premium Acknowledged</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-active">Renewed</span>
                                                </div>
                                            </div>
                                        )}

                                        {activeDashboardView === 'claims' && (
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', fontSize: '0.78rem', color: '#9CA3AF' }}>
                                                    <span>CLAIMS COORDINATION DOSSIER</span>
                                                    <span>STAGE</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>CLM-2026-8831 (Accidental Damage)</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>Surveyor Inspection Report Uploaded</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-review">Survey Done</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>CLM-2026-7740 (Cashless Hospitalization)</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>TPA Pre-Auth Query Clarified</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-active">Pre-Auth OK</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>CLM-2026-6691 (Warehouse Water Ingress)</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>Awaiting Insurer Final Settlement</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-due">Insurer Review</span>
                                                </div>
                                            </div>
                                        )}

                                        {activeDashboardView === 'clients' && (
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', fontSize: '0.78rem', color: '#9CA3AF' }}>
                                                    <span>CLIENT CRM & ENQUIRIES</span>
                                                    <span>INTENT</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>M/s Pandian Logistics (Tenkasi)</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>Enquiry: 12 Commercial Goods Carriers</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-active">Quote Sent</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>V. Senthil Kumar (Nagercoil)</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>Enquiry: Critical Illness + Top-Up Plan</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-review">Callback Req</span>
                                                </div>
                                                <div className="hero-list-item">
                                                    <div>
                                                        <div style={{ fontWeight: 700, color: '#F9FAFB' }}>Kavitha & Sons Traders (Coimbatore)</div>
                                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>Enquiry: Shopkeeper Package Policy</div>
                                                    </div>
                                                    <span className="hero-badge-tag badge-due">New Lead</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Live Pulse Activity Notification */}
                                    <div className="hero-live-feed">
                                        <div className="pulse-beacon"></div>
                                        <span style={{ color: '#D1D5DB' }}>
                                            <strong>Live Stream:</strong> Automated renewal SMS & WhatsApp advisory queued for 18 policyholders in Madurai & Tirunelveli.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 02 — INDUSTRY OVERVIEW */}
            <section className="ins-section" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
                <div className="ins-container">
                    <div className="overview-grid">
                        {/* Overview Left: Text Explanation */}
                        <div>
                            <div className="ins-pill">
                                <Activity size={16} color="#D97706" />
                                <span>Industry Overview</span>
                            </div>
                            <h2 className="ins-section-title">What Is Insurance Software?</h2>
                            <div className="ins-section-desc" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4B5563', fontSize: '1.02rem', lineHeight: '1.75' }}>
                                <p>
                                    Insurance software refers to digital applications used to manage information and workflows related to insurance customers, policies, claims, renewals and business administration.
                                </p>
                                <p>
                                    Depending on the organization's role and requirements, insurance software may support customer enquiries, policy documentation, renewal tracking, claims-related records, task assignments and operational reporting.
                                </p>
                                <p>
                                    Insurance management systems typically organize broader insurance operations, while insurance CRM software focuses on customer relationships, enquiries, follow-ups and communication history.
                                </p>
                                <p>
                                    Insurance technology, often called InsurTech, includes digital solutions that support or improve insurance-related processes through software, integrations and automation.
                                </p>
                                <p>
                                    The exact features required depend on whether the business operates as an insurer, insurance broker, agent, intermediary or service provider.
                                </p>
                            </div>
                        </div>

                        {/* Overview Right: 4 Icon Highlights without cards */}
                        <div>
                            <div className="overview-highlight-list">
                                {overviewHighlights.map((hl, i) => (
                                    <div key={i} className="overview-item">
                                        <div className="overview-icon-wrapper">
                                            {hl.icon}
                                        </div>
                                        <div>
                                            <h4>{hl.title}</h4>
                                            <p>{hl.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 03 — INDUSTRY CHALLENGES */}
            <section className="ins-section">
                <div className="ins-container">
                    <div className="ins-section-header text-center">
                        <div className="ins-pill">
                            <AlertTriangle size={16} color="#D97706" />
                            <span>Operational Bottlenecks</span>
                        </div>
                        <h2 className="ins-section-title">Common Software Challenges in Insurance Operations</h2>
                        <p className="ins-section-desc">
                            Insurance businesses often coordinate information between customers, internal teams, insurers and other authorized stakeholders.
                            Manual processes and disconnected applications can make these activities more difficult to manage.
                        </p>
                    </div>

                    <div className="challenges-grid">
                        {challenges.map((ch, idx) => (
                            <div key={idx} className="challenge-card">
                                <div>
                                    <div className="challenge-card-top">
                                        <div className="challenge-icon-box">
                                            {ch.icon}
                                        </div>
                                        <span className="challenge-impact-pill">
                                            {ch.impact}
                                        </span>
                                    </div>
                                    <h3>{ch.title}</h3>
                                    <p>{ch.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 04 — INDUSTRY SOFTWARE SOLUTIONS */}
            <section className="ins-section" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
                <div className="ins-container">
                    <div className="ins-section-header text-center">
                        <div className="ins-pill">
                            <Sparkles size={16} color="#D97706" />
                            <span>Software Solutions</span>
                        </div>
                        <h2 className="ins-section-title">Our Insurance Software Development Solutions</h2>
                        <p className="ins-section-desc">
                            FlyTowards helps insurance businesses plan and develop applications around customer management, policy administration and insurance-related operational workflows.
                        </p>
                    </div>

                    <div className="solutions-grid">
                        {solutions.map((sol, index) => (
                            <div key={index} className="solution-card">
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="challenge-icon-box" style={{ marginBottom: '1.25rem' }}>
                                            {sol.icon}
                                        </div>
                                        <span className="solution-tag-pill">{sol.tag}</span>
                                    </div>
                                    <h3>{sol.title}</h3>
                                    <p>{sol.desc}</p>
                                </div>

                                <Link to={sol.link} className="solution-link-action">
                                    <span>{sol.ctaText}</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 05 — INDUSTRY WORKFLOWS & USE CASES */}
            <section className="ins-section">
                <div className="ins-container">
                    <div className="ins-section-header text-center">
                        <div className="ins-pill">
                            <Workflow size={16} color="#D97706" />
                            <span>Interactive Workflows</span>
                        </div>
                        <h2 className="ins-section-title">How Insurance Software Supports Daily Business Workflows</h2>
                        <p className="ins-section-desc">
                            Insurance software becomes useful when it connects customer information, policy servicing activities and administrative follow-ups through structured processes.
                        </p>
                    </div>

                    {/* Workflow Control Bar */}
                    <div className="workflow-control-bar">
                        <div className="workflow-mode-switch">
                            <button
                                className={`workflow-mode-btn ${activeWorkflowMode === 'policy' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveWorkflowMode('policy');
                                    setActiveStepIndex(0);
                                }}
                            >
                                <FileCheck2 size={16} />
                                <span>Policy Lifecycle Workflow (8 Steps)</span>
                            </button>
                            <button
                                className={`workflow-mode-btn ${activeWorkflowMode === 'claims' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveWorkflowMode('claims');
                                    setActiveStepIndex(0);
                                }}
                            >
                                <GitBranch size={16} />
                                <span>Claims Coordination Workflow (7 Steps)</span>
                            </button>
                        </div>

                        <button
                            className="workflow-playback-toggle"
                            onClick={() => setIsAutoPlayingWorkflow(!isAutoPlayingWorkflow)}
                        >
                            <RefreshCw size={14} className={isAutoPlayingWorkflow ? 'pulse-beacon' : ''} />
                            <span>{isAutoPlayingWorkflow ? 'Pause Animation' : 'Auto-Play Pipeline'}</span>
                        </button>
                    </div>

                    {/* Horizontal Interactive Stepper Timeline */}
                    <div className="workflow-stepper-rail">
                        {(activeWorkflowMode === 'policy' ? policyWorkflowSteps : claimsWorkflowSteps).map((step, idx) => (
                            <div
                                key={idx}
                                className={`workflow-step-node ${activeStepIndex === idx ? 'active-step' : ''}`}
                                onClick={() => {
                                    setActiveStepIndex(idx);
                                    setIsAutoPlayingWorkflow(false);
                                }}
                            >
                                <span className="step-badge-num">Step {step.stepNum}</span>
                                <div className="step-node-name">{step.title}</div>
                                <div className="step-node-sub">{step.tag}</div>
                            </div>
                        ))}
                    </div>

                    {/* Active Step Spotlight Card */}
                    {(() => {
                        const currentList = activeWorkflowMode === 'policy' ? policyWorkflowSteps : claimsWorkflowSteps;
                        const currentStep = currentList[activeStepIndex] || currentList[0];
                        return (
                            <div className="active-step-spotlight">
                                <div className="spotlight-left">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                                        <span className="step-badge-num" style={{ fontSize: '0.82rem', padding: '4px 10px' }}>
                                            Active Stage {currentStep.stepNum} of {currentList.length}
                                        </span>
                                        <span className="spotlight-actor-tag">
                                            <Users size={14} /> Actor: {currentStep.actor}
                                        </span>
                                    </div>
                                    <h3>{currentStep.title}</h3>
                                    <p>{currentStep.description}</p>

                                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        <button
                                            className="ins-btn-outline"
                                            style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                                            onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : currentList.length - 1))}
                                        >
                                            Previous Stage
                                        </button>
                                        <button
                                            className="ins-btn-primary"
                                            style={{ padding: '8px 18px', fontSize: '0.84rem' }}
                                            onClick={() => setActiveStepIndex((prev) => (prev < currentList.length - 1 ? prev + 1 : 0))}
                                        >
                                            Next Stage <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>

                                <div className="spotlight-preview-box">
                                    <div className="spotlight-code-header">
                                        <span>FLY-INSURANCE-PIPELINE</span>
                                        <span style={{ color: '#10B981' }}>NODE ACTIVE</span>
                                    </div>
                                    <div className="spotlight-mock-field">
                                        <span style={{ color: '#9CA3AF' }}>Workflow Route:</span>
                                        <span style={{ color: '#FACC15' }}>{activeWorkflowMode === 'policy' ? 'End-to-End Lifecycle' : 'Claims Triage'}</span>
                                    </div>
                                    <div className="spotlight-mock-field">
                                        <span style={{ color: '#9CA3AF' }}>Stage Name:</span>
                                        <span style={{ fontWeight: 600 }}>{currentStep.title}</span>
                                    </div>
                                    <div className="spotlight-mock-field">
                                        <span style={{ color: '#9CA3AF' }}>Responsible Desk:</span>
                                        <span>{currentStep.actor}</span>
                                    </div>
                                    <div className="spotlight-mock-field">
                                        <span style={{ color: '#9CA3AF' }}>Data Validation:</span>
                                        <span style={{ color: '#34D399' }}>Encrypted & Audited</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}

                    {/* Detailed Use Cases Grid */}
                    <div className="usecases-tab-grid">
                        {detailedUseCases.map((uc, i) => (
                            <div key={i} className="usecase-box">
                                <div className="usecase-header">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div className="overview-icon-wrapper" style={{ width: '40px', height: '40px' }}>
                                            {uc.icon}
                                        </div>
                                        <span className="solution-tag-pill" style={{ margin: 0 }}>{uc.badge}</span>
                                    </div>
                                </div>
                                <h3 className="usecase-title">{uc.title}</h3>
                                <p className="usecase-desc">{uc.desc}</p>
                                <ul className="usecase-feature-list">
                                    {uc.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="usecase-feature-item">
                                            <CheckCircle2 size={16} color="#10B981" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                {uc.regulatoryNote && (
                                    <div style={{ marginTop: '1rem', padding: '0.65rem 0.85rem', background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '8px', fontSize: '0.78rem', color: '#92400E' }}>
                                        <strong>Compliance Notice:</strong> {uc.regulatoryNote}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mandatory Developer Compliance Notice */}
                    <div className="compliance-alert-strip">
                        <Scale size={26} color="#B45309" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <p>
                            <strong>Developer note:</strong> These are illustrative workflows. Policy issuance, underwriting, claims adjudication, premium handling and settlement processes must reflect the business's actual authorization, contractual responsibilities and applicable regulatory requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 06 — BUSINESS BENEFITS */}
            <section className="ins-section" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
                <div className="ins-container">
                    <div className="benefits-grid">
                        {/* Benefits Left: Graphic Dashboard Illustration */}
                        <div>
                            <div className="benefit-dashboard-graphic">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid #374151', paddingBottom: '0.85rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <BarChart3 size={18} color="#FACC15" />
                                        <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Insurance Operational Metrics</span>
                                    </div>
                                    <span style={{ fontSize: '0.72rem', background: '#374151', padding: '3px 8px', borderRadius: '6px', color: '#9CA3AF' }}>
                                        Live Performance
                                    </span>
                                </div>

                                <div className="graphic-metric-card">
                                    <div>
                                        <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Policy Renewal Persistency</div>
                                        <div style={{ fontSize: '0.85rem', color: '#D1D5DB' }}>Automated timely follow-ups</div>
                                    </div>
                                    <div className="graphic-metric-val">94.8%</div>
                                </div>

                                <div className="graphic-metric-card">
                                    <div>
                                        <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Documentation Search Latency</div>
                                        <div style={{ fontSize: '0.85rem', color: '#D1D5DB' }}>Centralized digital archive</div>
                                    </div>
                                    <div className="graphic-metric-val">&lt; 3 Sec</div>
                                </div>

                                <div className="graphic-metric-card">
                                    <div>
                                        <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Claims Document Handover</div>
                                        <div style={{ fontSize: '0.85rem', color: '#D1D5DB' }}>Standardized checklist triage</div>
                                    </div>
                                    <div className="graphic-metric-val">-40% Lag</div>
                                </div>

                                <div style={{ marginTop: '1.25rem', padding: '1rem', background: '#1F2937', borderRadius: '10px', fontSize: '0.78rem', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <ShieldCheck size={16} color="#10B981" />
                                    <span>Single Source of Truth for Policy Records & Client Interactions</span>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Right: 5 Stacked Benefits with Icons and H3s */}
                        <div>
                            <div className="ins-pill">
                                <TrendingUp size={16} color="#D97706" />
                                <span>Measurable Value</span>
                            </div>
                            <h2 className="ins-section-title">Benefits of Insurance Management Software</h2>
                            <p className="ins-section-desc" style={{ marginBottom: '2rem' }}>
                                Well-planned insurance software can help businesses organize client information, maintain workflow records and coordinate ongoing policy servicing activities.
                            </p>

                            <div className="stacked-benefits-list">
                                {benefitsList.map((ben, bIdx) => (
                                    <div key={bIdx} className="stacked-benefit-item">
                                        <div className="benefit-num-circle">
                                            {ben.num}
                                        </div>
                                        <div>
                                            <h3>{ben.title}</h3>
                                            <p>{ben.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 07 — RELEVANT FLYTOWARDS SERVICES */}
            <section className="ins-section">
                <div className="ins-container">
                    <div className="ins-section-header text-center">
                        <div className="ins-pill">
                            <Layers size={16} color="#D97706" />
                            <span>Engineering Capabilities</span>
                        </div>
                        <h2 className="ins-section-title">FlyTowards Software Development Services for Insurance Businesses</h2>
                        <p className="ins-section-desc">
                            Insurance software projects may require custom application development, CRM functionality, workflow automation, integrations and ongoing technical maintenance.
                        </p>
                    </div>

                    <div className="services-tiles-grid">
                        {relevantServices.map((srv, sIdx) => (
                            <Link key={sIdx} to={srv.link} className="service-tile-card">
                                <div>
                                    <div className="service-tile-icon">
                                        {srv.icon}
                                    </div>
                                    <h3>{srv.title}</h3>
                                    <p>{srv.desc}</p>
                                </div>
                                <div className="service-tile-cta">
                                    <span>Explore Service</span>
                                    <ArrowRight size={14} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 08 — OUR DEVELOPMENT APPROACH */}
            <section className="ins-section" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
                <div className="ins-container">
                    <div className="ins-section-header text-center">
                        <div className="ins-pill">
                            <GitBranch size={16} color="#D97706" />
                            <span>Structured Methodology</span>
                        </div>
                        <h2 className="ins-section-title">Our Insurance Software Development Process</h2>
                        <p className="ins-section-desc">
                            We follow a structured approach to understand insurance business workflows and plan software functionality around operational, security and integration requirements.
                        </p>
                    </div>

                    <div className="timeline-horizontal-grid">
                        {developmentSteps.map((st, i) => (
                            <div key={i} className="timeline-step-card">
                                <div className="timeline-num-badge">
                                    {st.step}
                                </div>
                                <h3>{st.title}</h3>
                                <p>{st.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 09 — WHY CHOOSE FLYTOWARDS */}
            <section className="ins-section">
                <div className="ins-container">
                    <div className="why-choose-grid">
                        {/* Left Column: Heading, intro, and CTA */}
                        <div>
                            <div className="ins-pill">
                                <Award size={16} color="#D97706" />
                                <span>Why FlyTowards</span>
                            </div>
                            <h2 className="ins-section-title">Why Choose FlyTowards for Insurance Software Development?</h2>
                            <p className="ins-section-desc" style={{ marginBottom: '1.25rem' }}>
                                Insurance software should reflect how customer enquiries, policy information and servicing activities move between users and systems.
                            </p>
                            <p className="ins-section-desc" style={{ marginBottom: '2.25rem' }}>
                                A practical solution starts with understanding the organization's responsibilities, operational workflows and information requirements.
                            </p>
                            <Link to="/contact" className="ins-btn-primary">
                                Discuss Your Insurance Software Requirements
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        {/* Right Column: 4 Numbered Differentiators with dividers */}
                        <div>
                            <div className="why-choose-card-group">
                                {whyChoosePoints.map((dp, dIdx) => (
                                    <div key={dIdx} className="differentiator-item">
                                        <span className="diff-num">{dp.num}</span>
                                        <div>
                                            <h3>{dp.title}</h3>
                                            <p>{dp.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10 — TAMIL NADU & SOUTH TAMIL NADU RELEVANCE */}
            <section className="ins-section" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
                <div className="ins-container">
                    <div className="editorial-tn-wrapper">
                        <div className="editorial-tn-grid">
                            <div className="editorial-text-col">
                                <div className="ins-pill">
                                    <MapPin size={16} color="#D97706" />
                                    <span>Regional Relevance</span>
                                </div>
                                <h2 className="ins-section-title" style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.45rem)' }}>
                                    Insurance Software Solutions in Tamil Nadu
                                </h2>

                                <p>
                                    Insurance agencies, brokers, intermediaries and insurance-focused service organizations across Tamil Nadu manage customer information, policy records and ongoing servicing activities.
                                </p>
                                <p>
                                    In South Tamil Nadu, insurance businesses may have different requirements depending on their customer base, policy categories, team structure, existing software and relationships with insurance providers.
                                </p>
                                <p>
                                    Some businesses rely on spreadsheets and manual reminders to track client follow-ups and policy renewals. Others may use CRM or insurer-provided systems that require additional reporting, workflow organization or permitted integrations.
                                </p>
                                <p>
                                    FlyTowards provides insurance software development solutions for businesses across Tamil Nadu, focusing on customer management, policy information, renewal coordination and relevant administrative workflows.
                                </p>
                                <p>
                                    Whether you need insurance CRM software, a client management application or a broader insurance management platform, we help evaluate the software requirements around your business operations.
                                </p>
                            </div>

                            {/* Regional Hub Interaction Preview */}
                            <div>
                                <div className="tn-regional-console">
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #374151', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <MapPin size={18} color="#FACC15" />
                                            <span style={{ fontWeight: 700, fontSize: '0.92rem' }}>Tamil Nadu Regional Coverage</span>
                                        </div>
                                        <span style={{ fontSize: '0.72rem', background: '#374151', color: '#FACC15', padding: '3px 8px', borderRadius: '6px' }}>
                                            Multi-District Support
                                        </span>
                                    </div>

                                    <div style={{ fontSize: '0.82rem', color: '#9CA3AF', marginBottom: '0.75rem' }}>
                                        Select an operational hub to view localized insurance workflow considerations:
                                    </div>

                                    <div className="region-hub-tags">
                                        {[
                                            { id: 'south-tn', label: 'Tirunelveli & Tuticorin' },
                                            { id: 'madurai', label: 'Madurai & Virudhunagar' },
                                            { id: 'west', label: 'Coimbatore & Erode' },
                                            { id: 'chennai', label: 'Chennai Metro' }
                                        ].map((hub) => (
                                            <button
                                                key={hub.id}
                                                className={`region-hub-btn ${activeRegionHub === hub.id ? 'active' : ''}`}
                                                onClick={() => setActiveRegionHub(hub.id)}
                                            >
                                                {hub.label}
                                            </button>
                                        ))}
                                    </div>

                                    <div style={{ marginTop: '1.25rem', padding: '1.25rem', background: '#1F2937', borderRadius: '12px', border: '1px solid #374151' }}>
                                        {activeRegionHub === 'south-tn' && (
                                            <div>
                                                <div style={{ fontWeight: 700, color: '#FACC15', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                                                    South Tamil Nadu (Tirunelveli, Tuticorin, Tenkasi)
                                                </div>
                                                <p style={{ fontSize: '0.8rem', color: '#D1D5DB', lineHeight: 1.6, margin: 0 }}>
                                                    High density of independent agency brokers and port logistics transport fleets. Requires robust motor fleet renewal schedules, WhatsApp bilingual policy intimation, and offline-resilient client data synchronization.
                                                </p>
                                            </div>
                                        )}
                                        {activeRegionHub === 'madurai' && (
                                            <div>
                                                <div style={{ fontWeight: 700, color: '#FACC15', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                                                    Madurai & Southern Commercial Corridor
                                                </div>
                                                <p style={{ fontSize: '0.8rem', color: '#D1D5DB', lineHeight: 1.6, margin: 0 }}>
                                                    Prominent trade merchants, retail outlets, and manufacturing units requiring SME package policy organization, multi-partner commissions tracking, and structured employee group mediclaim records.
                                                </p>
                                            </div>
                                        )}
                                        {activeRegionHub === 'west' && (
                                            <div>
                                                <div style={{ fontWeight: 700, color: '#FACC15', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                                                    Western Industrial Belt (Coimbatore, Erode, Tirupur)
                                                </div>
                                                <p style={{ fontSize: '0.8rem', color: '#D1D5DB', lineHeight: 1.6, margin: 0 }}>
                                                    Export textile mills and engineering foundries with complex fire, marine transit, and machinery breakdown insurance documentation needing multi-tier internal approval workflows.
                                                </p>
                                            </div>
                                        )}
                                        {activeRegionHub === 'chennai' && (
                                            <div>
                                                <div style={{ fontWeight: 700, color: '#FACC15', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                                                    Chennai Corporate & Enterprise Sector
                                                </div>
                                                <p style={{ fontSize: '0.8rem', color: '#D1D5DB', lineHeight: 1.6, margin: 0 }}>
                                                    Enterprise brokerage houses and corporate agencies requiring high-throughput API integrations, role-based employee access controls, and extensive IRDAI compliance audit logs.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 11 — INDUSTRY FAQS */}
            <section className="ins-section">
                <div className="ins-container">
                    <div className="faq-section-grid">
                        {/* FAQ Left Column */}
                        <div>
                            <div className="ins-pill">
                                <HelpCircle size={16} color="#D97706" />
                                <span>Got Questions?</span>
                            </div>
                            <h2 className="ins-section-title">Frequently Asked Questions About Insurance Software</h2>
                            <p className="ins-section-desc">
                                Find answers to common questions regarding custom insurance software development, CRM capabilities, policy renewal automation, and compliance requirements in India.
                            </p>

                            <div className="faq-search-box">
                                <Search size={18} className="faq-search-icon" />
                                <input
                                    type="text"
                                    className="faq-search-input"
                                    placeholder="Search FAQs (e.g. CRM, renewals, cost, IRDAI)..."
                                    value={faqSearchQuery}
                                    onChange={(e) => setFaqSearchQuery(e.target.value)}
                                />
                            </div>

                            <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px' }}>
                                <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.92rem', marginBottom: '0.35rem' }}>
                                    Need Specific Technical Guidance?
                                </div>
                                <p style={{ fontSize: '0.85rem', color: '#4B5563', lineHeight: 1.55, margin: '0 0 1rem' }}>
                                    Our engineering team can evaluate your current software stack and data migration requirements.
                                </p>
                                <Link to="/contact" style={{ fontSize: '0.84rem', fontWeight: 700, color: '#D97706', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Request Consultation <ChevronRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* FAQ Right Column: Accordion */}
                        <div>
                            <div className="faq-accordion-list">
                                {filteredFaqs.length > 0 ? (
                                    filteredFaqs.map((faq, index) => {
                                        const isOpen = openFaq === index;
                                        return (
                                            <div key={index} className={`faq-card ${isOpen ? 'open' : ''}`}>
                                                <button
                                                    className="faq-trigger"
                                                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                                                    aria-expanded={isOpen}
                                                >
                                                    <h3>{faq.q}</h3>
                                                    <ChevronDown size={18} className="faq-chevron-icon" />
                                                </button>
                                                {isOpen && (
                                                    <div className="faq-answer-drawer">
                                                        <p style={{ margin: 0 }}>{faq.a}</p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div style={{ padding: '2rem', textAlign: 'center', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E5E7EB', color: '#6B7280' }}>
                                        No questions matched your query "{faqSearchQuery}". Try another keyword or clear the search.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 12 — FINAL CTA */}
            <section className="ins-section" style={{ paddingTop: '40px', paddingBottom: '90px' }}>
                <div className="ins-container">
                    <div className="final-cta-banner">
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div className="ins-pill" style={{ background: 'rgba(250, 204, 21, 0.15)', color: '#FDE047', border: '1px solid rgba(250, 204, 21, 0.3)' }}>
                                <Sparkles size={16} />
                                <span>Get Started Today</span>
                            </div>

                            <h2 className="cta-h2">
                                Connect Your Insurance Clients, Policies and Business Workflows
                            </h2>

                            <p className="cta-desc">
                                Need better customer information management, more organized renewal follow-ups or a connected insurance administration application?
                                <br /><br />
                                FlyTowards helps insurance businesses explore custom software solutions aligned with their client servicing processes, operational requirements and existing systems.
                                Share your insurance software challenges and take the next step toward a practical digital solution.
                            </p>

                            <div className="cta-actions">
                                <Link to="/contact" className="ins-btn-primary" style={{ padding: '16px 36px', fontSize: '1.02rem' }}>
                                    Discuss Your Insurance Software Project
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="ins-btn-outline"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderColor: '#4B5563',
                                        color: '#FFFFFF',
                                        padding: '16px 32px'
                                    }}
                                >
                                    Request a Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Insurance;
