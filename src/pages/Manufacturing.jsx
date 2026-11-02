import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Factory,
    ArrowRight,
    Workflow,
    Layers,
    Eye,
    Database,
    Building2,
    BarChart3,
    Link2,
    Zap,
    CheckCircle2,
    MessageSquareText,
    Sparkles,
    Calendar,
    Boxes,
    PackageCheck,
    AlertCircle,
    CalendarX,
    Unlink,
    EyeOff,
    PieChart,
    ChevronDown,
    ChevronUp,
    TrendingUp,
    Target,
    ArrowLeftRight,
    Settings2,
    ShieldCheck,
    Cpu,
    MapPin,
    FileSpreadsheet
} from 'lucide-react';

const Manufacturing = () => {
    // Accordion state for FAQs
    const [openFaq, setOpenFaq] = useState(null);
    // State for existing expandable solutions section
    const [isExpanded, setIsExpanded] = useState(false);
    const solutionsRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Manufacturing Resource Planning Software Solutions in Tamil Nadu | FlyTowards";
    }, []);

    useEffect(() => {
        if (isExpanded && solutionsRef.current) {
            const timer = setTimeout(() => {
                const navOffset = 90;
                const elementPosition = solutionsRef.current.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 180);

            return () => clearTimeout(timer);
        }
    }, [isExpanded]);

    const toggleFaq = (index) => {
        setOpenFaq(prev => (prev === index ? null : index));
    };

    // SECTION 03: Challenges Data
    const challenges = [
        {
            icon: AlertCircle,
            title: "Unclear Material Requirements",
            desc: "Without structured planning, teams may struggle to determine which raw materials are required for upcoming production orders."
        },
        {
            icon: Database,
            title: "Inaccurate Inventory Information",
            desc: "Delayed stock updates and inconsistent records can make it difficult to assess material availability."
        },
        {
            icon: CalendarX,
            title: "Production Scheduling Difficulties",
            desc: "Changes in customer orders, material availability or production capacity may require repeated manual schedule adjustments."
        },
        {
            icon: Unlink,
            title: "Disconnected Procurement Workflows",
            desc: "Purchase requests, supplier records and purchasing approvals may be managed separately from production planning."
        },
        {
            icon: EyeOff,
            title: "Limited Shop Floor Visibility",
            desc: "Managers may have difficulty comparing planned production activities with actual progress when updates are recorded manually."
        },
        {
            icon: PieChart,
            title: "Fragmented Business Reporting",
            desc: "Production, inventory, purchasing and administrative data may need to be consolidated from several systems before decisions can be made."
        }
    ];

    // SECTION 04: Solutions Data
    const solutions = [
        {
            icon: Factory,
            title: "Manufacturing Resource Planning Software",
            desc: "Develop applications to organize manufacturing orders, production plans, material requirements and related planning records.",
            linkText: "Explore Custom Software",
            linkUrl: "/services/custom-software-development/"
        },
        {
            icon: Building2,
            title: "Manufacturing ERP Software",
            desc: "Build integrated functionality that connects manufacturing operations with inventory, procurement, sales-related records and other relevant business processes.",
            linkText: "Explore ERP Development",
            linkUrl: "/services/erp-development/"
        },
        {
            icon: Calendar,
            title: "Production Planning & Scheduling Software",
            desc: "Create systems for managing production orders, planned schedules, work stages and resource-related information.",
            linkText: "Explore Production Planning",
            linkUrl: "/service"
        },
        {
            icon: Boxes,
            title: "Inventory & Material Management Software",
            desc: "Develop applications for raw material tracking, stock movements, warehouse records and material availability.",
            linkText: "Explore Inventory Solutions",
            linkUrl: "/products"
        },
        {
            icon: Cpu,
            title: "Manufacturing Execution Software",
            desc: "Plan software functionality for recording shop floor activities, tracking production progress and connecting execution data with production plans.",
            linkText: "Explore Enterprise Solutions",
            linkUrl: "/services/enterprise-software-development/"
        },
        {
            icon: Zap,
            title: "Procurement & Supplier Management Software",
            desc: "Organize purchase requisitions, supplier information, purchase orders and procurement approval workflows.",
            linkText: "Explore Process Automation",
            linkUrl: "/services/business-process-automation/"
        }
    ];

    // SECTION 05: Workflows Data (Strictly following the specification text)
    const workflowRows = [
        {
            step: "01",
            icon: Layers,
            title: "Bill of Materials Management",
            desc1: "A bill of materials (BOM) identifies the components and quantities required to manufacture a product.",
            desc2: "Software can help maintain BOM records and use them as an input for material planning."
        },
        {
            step: "02",
            icon: Database,
            title: "Material Requirements Planning",
            desc1: "Production plans, BOM information, inventory balances and purchasing records can be used to determine material requirements.",
            desc2: "The calculations and planning rules depend on the manufacturing process and system design."
        },
        {
            step: "03",
            icon: Calendar,
            title: "Production Order Planning",
            desc1: "Manufacturing teams can organize production orders, planned quantities, schedules and related work stages through structured workflows.",
            desc2: ""
        },
        {
            step: "04",
            icon: Zap,
            title: "Purchase Requisition & Procurement",
            desc1: "When planned production requires additional materials, software can support purchase requisitions, approval workflows and purchase order records.",
            desc2: ""
        },
        {
            step: "05",
            icon: Factory,
            title: "Shop Floor Production Tracking",
            desc1: "Manufacturing execution software can support the recording of production progress, work completion, material consumption and relevant shop floor information.",
            desc2: ""
        },
        {
            step: "06",
            icon: BarChart3,
            title: "Production & Inventory Reporting",
            desc1: "Dashboards can combine selected production, material and purchasing information to support operational reviews.",
            desc2: ""
        }
    ];

    // SECTION 06: Benefits Data
    const benefits = [
        {
            icon: Target,
            title: "Improve Material Planning",
            desc: "Use production requirements and available stock information to plan material needs more systematically."
        },
        {
            icon: Calendar,
            title: "Organize Production Schedules",
            desc: "Maintain structured production orders, planned activities and schedule-related information."
        },
        {
            icon: Eye,
            title: "Improve Inventory Visibility",
            desc: "Provide authorized teams with clearer access to raw material and finished goods records."
        },
        {
            icon: ArrowLeftRight,
            title: "Connect Production and Procurement",
            desc: "Coordinate material requirements with purchase requests, supplier records and purchasing workflows."
        },
        {
            icon: TrendingUp,
            title: "Support Operational Decision-Making",
            desc: "Present relevant production, inventory and procurement information through dashboards and reports."
        }
    ];

    // SECTION 07: Services Data
    const servicesList = [
        {
            icon: Building2,
            title: "ERP Development",
            desc: "Develop connected manufacturing, inventory, procurement and administrative software modules.",
            link: "/services/erp-development/"
        },
        {
            icon: Factory,
            title: "Custom Software Development",
            desc: "Build manufacturing applications around specific planning rules, workflows and business requirements.",
            link: "/services/custom-software-development/"
        },
        {
            icon: Zap,
            title: "Business Process Automation",
            desc: "Automate suitable purchase approvals, task notifications and operational workflow steps.",
            link: "/services/business-process-automation/"
        },
        {
            icon: Link2,
            title: "API Development",
            desc: "Connect compatible manufacturing, inventory and business applications through structured interfaces.",
            link: "/services/api-development/"
        },
        {
            icon: Settings2,
            title: "Software Consulting",
            desc: "Evaluate existing manufacturing applications, define requirements and plan software implementation priorities.",
            link: "/services/software-consulting/"
        },
        {
            icon: ShieldCheck,
            title: "Software Modernization",
            desc: "Improve outdated manufacturing software, interfaces and application integrations where technically feasible.",
            link: "/services/software-modernization/"
        }
    ];

    // SECTION 08: Steps Data
    const steps = [
        {
            num: "01",
            title: "Manufacturing Process Discovery",
            desc: "Review production methods, material flows, inventory practices, procurement activities and planning challenges."
        },
        {
            num: "02",
            title: "Requirements & Existing System Assessment",
            desc: "Identify user roles, planning rules, BOM requirements, current applications and integration needs."
        },
        {
            num: "03",
            title: "Solution Architecture & Module Planning",
            desc: "Define the required software modules, data relationships, workflows and implementation priorities."
        },
        {
            num: "04",
            title: "UI/UX Design & Software Development",
            desc: "Design application interfaces and develop agreed manufacturing planning and management functionality."
        },
        {
            num: "05",
            title: "Testing & Planning Validation",
            desc: "Validate relevant calculations, BOM structures, inventory movements, user permissions and supported integrations using representative scenarios."
        },
        {
            num: "06",
            title: "Deployment & Support Planning",
            desc: "Prepare the application for implementation, review data migration needs and define suitable maintenance requirements."
        }
    ];

    // SECTION 09: Differentiators Data
    const differentiators = [
        {
            num: "01",
            title: "Manufacturing Workflow Understanding",
            desc: "We focus on identifying production planning, inventory, procurement and reporting requirements during project discovery."
        },
        {
            num: "02",
            title: "Custom Planning Requirements",
            desc: "We consider the manufacturing rules, material structures and operational workflows relevant to your business."
        },
        {
            num: "03",
            title: "Integration-Focused Planning",
            desc: "We assess how compatible manufacturing applications, inventory systems and business software may exchange information."
        },
        {
            num: "04",
            title: "Practical Implementation Roadmaps",
            desc: "We focus on defining essential functionality, development priorities and suitable implementation stages."
        }
    ];

    // SECTION 11: FAQs Data
    const faqs = [
        {
            q: "What is manufacturing resource planning?",
            a: "Manufacturing resource planning, commonly associated with MRP II, is an approach to coordinating materials, production schedules, capacity and other resources required for manufacturing operations."
        },
        {
            q: "What is the difference between MRP, MRP II and ERP?",
            a: "Material Requirements Planning (MRP) focuses on calculating material needs. Manufacturing Resource Planning (MRP II) extends planning to additional manufacturing resources and capacity considerations. ERP connects manufacturing with broader business functions such as procurement, inventory, finance and sales."
        },
        {
            q: "What is manufacturing execution software?",
            a: "Manufacturing execution software, often called a manufacturing execution system (MES), supports the management and tracking of activities on the shop floor. It typically focuses on production execution, while MRP focuses on planning materials and resources."
        },
        {
            q: "How is ERP software used in the manufacturing industry?",
            a: "ERP software in the manufacturing industry can connect production planning, procurement, inventory, sales-related processes and other business records within an integrated system."
        },
        {
            q: "What is a manufacturing enterprise resource planning system?",
            a: "A manufacturing enterprise resource planning system is ERP software configured or developed to support manufacturing-specific requirements, such as bills of materials, production orders, inventory and purchasing workflows."
        },
        {
            q: "Can manufacturing resource planning software be customized?",
            a: "Yes. Custom manufacturing planning software can be designed around specific BOM structures, production processes, user roles, approval workflows and reporting requirements."
        },
        {
            q: "How much does manufacturing resource planning software development cost in Tamil Nadu?",
            a: "Costs depend on the required modules, planning calculations, production complexity, integrations, data migration and user requirements. A detailed requirements assessment helps establish the project budget."
        },
        {
            q: "Can MRP software integrate with existing ERP and inventory applications?",
            a: "Integration may be possible through compatible APIs, database interfaces or supported data exchange methods. Feasibility depends on the systems, data quality and access available."
        }
    ];

    // Original requirements list for the expandable section below
    const requirements = [
        {
            title: "Workflow management",
            desc: "Coordinate multi-stage production cycles, scheduling, and shop-floor handoffs effectively.",
            icon: Workflow
        },
        {
            title: "Operational applications",
            desc: "Custom factory-floor and operational apps engineered for technicians, plant managers, and teams.",
            icon: Layers
        },
        {
            title: "Process visibility",
            desc: "Clear, transparent oversight across machine status, inventory movement, and assembly stages.",
            icon: Eye
        },
        {
            title: "Data management",
            desc: "Structured architectures for managing batch history, quality control logs, and production metrics.",
            icon: Database
        },
        {
            title: "Internal business systems",
            desc: "Unified internal platforms connecting inventory, procurement, maintenance, and logistics.",
            icon: Building2
        },
        {
            title: "Reporting",
            desc: "Shift summaries, downtime analysis, operational KPIs, and executive performance dashboards.",
            icon: BarChart3
        },
        {
            title: "Application integration",
            desc: "Interoperable connectors between ERPs, legacy machinery, IoT sensors, and modern cloud tools.",
            icon: Link2
        },
        {
            title: "Process automation",
            desc: "Automate repetitive production triggers, alerts, compliance tracking, and administrative pipelines.",
            icon: Zap
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <main style={{ padding: '120px 6% 100px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div className="mesh-bg"></div>

            {/* =========================================================================
                SECTION 01 — HERO (Clean Full-Width Hero)
            ========================================================================= */}
            <section className="manufacturing-page-hero" style={{ width: '100%', maxWidth: '1500px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div className="manufacturing-page-hero__copy" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.18)', color: '#B45309', border: '1px solid rgba(250, 204, 21, 0.45)', fontSize: '0.875rem', fontWeight: 600, width: 'fit-content' }}
                    >
                        <Factory size={16} color="#CA8A04" />
                        <span>Manufacturing Resource Planning Software</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="gradient-text"
                        style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)', fontWeight: 800, lineHeight: 1.15, margin: 0, letterSpacing: '-0.5px' }}
                    >
                        Manufacturing Resource Planning Software Solutions in Tamil Nadu
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
                            fontWeight: 700,
                            color: '#1F2937',
                            borderLeft: '4px solid #FACC15',
                            paddingLeft: '1rem',
                            lineHeight: 1.45
                        }}
                    >
                        Plan Production, Manage Materials and Connect Manufacturing Operations
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.75 }}
                    >
                        <p style={{ margin: 0 }}>
                            Manufacturing businesses need accurate information about material availability, production schedules, inventory and purchasing to keep operations organized.
                        </p>
                        <p style={{ margin: 0 }}>
                            When these activities depend on disconnected spreadsheets, manual records or separate applications, production planning and coordination can become difficult.
                        </p>
                        <p style={{ margin: 0 }}>
                            FlyTowards provides software development solutions for manufacturing businesses across Tamil Nadu, with a focus on South Tamil Nadu. We help manufacturers plan custom applications for manufacturing resource planning, inventory management, procurement, production tracking and connected business workflows.
                        </p>
                        <p style={{ margin: 0, fontWeight: 500, color: '#1F2937' }}>
                            Whether you need a focused planning application or an integrated manufacturing management system, we work around your operational requirements.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.75rem' }}
                    >
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                to="/contact"
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '1rem 2rem',
                                    fontSize: '1.02rem',
                                    fontWeight: 700,
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    boxShadow: '0 8px 25px rgba(250, 204, 21, 0.4)'
                                }}
                            >
                                <span>Discuss Your Manufacturing Software Project</span>
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                to="/service"
                                className="btn btn-outline"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '1rem 1.8rem',
                                    fontSize: '1.02rem',
                                    fontWeight: 600,
                                    borderRadius: '50px',
                                    textDecoration: 'none'
                                }}
                            >
                                <span>Explore Our Software Services</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="manufacturing-dashboard"
                    aria-label="Manufacturing resource planning dashboard preview"
                >
                    <div className="manufacturing-dashboard__topbar">
                        <div className="manufacturing-dashboard__brand"><span className="manufacturing-dashboard__brand-icon"><Factory size={17} /></span><span>PlantOps <small>MANUFACTURING ERP</small></span></div>
                        <div className="manufacturing-dashboard__topbar-right"><span className="manufacturing-dashboard__live"><i /> Live data</span><span className="manufacturing-dashboard__avatar">FT</span></div>
                    </div>
                    <div className="manufacturing-dashboard__body">
                        <div className="manufacturing-dashboard__heading"><div><span className="manufacturing-dashboard__eyebrow">MONDAY, OCTOBER 26</span><h3>Production overview</h3><p>Here’s what’s happening across your plant today.</p></div><span className="manufacturing-dashboard__period">This week⌄</span></div>
                        <div className="manufacturing-dashboard__metrics">
                            <div className="manufacturing-dashboard__metric"><span>Production orders</span><strong>128 <small>↗ 12%</small></strong><div className="manufacturing-dashboard__spark manufacturing-dashboard__spark--yellow"><i/><i/><i/><i/><i/><i/><i/></div></div>
                            <div className="manufacturing-dashboard__metric"><span>Materials available</span><strong>94.2<small>%</small></strong><div className="manufacturing-dashboard__meter"><i style={{width:'82%'}} /></div><small className="manufacturing-dashboard__metric-note">On track for this week</small></div>
                            <div className="manufacturing-dashboard__metric"><span>Inventory status</span><strong>1,846 <small>items</small></strong><div className="manufacturing-dashboard__inventory"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div>
                        </div>
                        <div className="manufacturing-dashboard__lower">
                            <div className="manufacturing-dashboard__panel manufacturing-dashboard__schedule"><div className="manufacturing-dashboard__panel-head"><strong>Production schedule</strong><span>View schedule&nbsp; →</span></div><div className="manufacturing-dashboard__schedule-row manufacturing-dashboard__schedule-row--head"><span>ORDER</span><span>PRODUCT</span><span>PROGRESS</span><span>STATUS</span></div><div className="manufacturing-dashboard__schedule-row"><b>WO-2048</b><span>Assembly unit A</span><div className="manufacturing-dashboard__progress"><i style={{width:'76%'}}/></div><em className="is-running">In progress</em></div><div className="manufacturing-dashboard__schedule-row"><b>WO-2049</b><span>Precision parts</span><div className="manufacturing-dashboard__progress"><i style={{width:'48%'}}/></div><em className="is-planned">Scheduled</em></div><div className="manufacturing-dashboard__schedule-row"><b>WO-2050</b><span>Valve series 5</span><div className="manufacturing-dashboard__progress"><i style={{width:'100%'}}/></div><em className="is-done">Completed</em></div></div>
                            <div className="manufacturing-dashboard__panel manufacturing-dashboard__orders"><div className="manufacturing-dashboard__panel-head"><strong>Purchase orders</strong><span>•••</span></div><div className="manufacturing-dashboard__order"><span className="manufacturing-dashboard__order-icon">↗</span><div><b>PO-00842</b><small>Steel Components Ltd.</small></div><strong>₹84,500</strong></div><div className="manufacturing-dashboard__order"><span className="manufacturing-dashboard__order-icon order-icon--muted">↗</span><div><b>PO-00841</b><small>Precision Supply Co.</small></div><strong>₹32,800</strong></div><div className="manufacturing-dashboard__stock"><span>Material requirements</span><b><i/> 8 items need reorder</b></div></div>
                        </div>
                        <div className="manufacturing-dashboard__footer"><span><i/> All systems operational</span><span>Updated just now</span></div>
                    </div>
                    <div className="manufacturing-dashboard__float"><span>✓</span><div><b>Production on track</b><small>All lines operating normally</small></div></div>
                </motion.div>
            </section>

            {/* =========================================================================
                SECTION 02 — INDUSTRY OVERVIEW (Two-Column Section)
            ========================================================================= */}
            <section className="manufacturing-overview" style={{ width: '100%', maxWidth: '1360px', margin: '0 auto 6rem', position: 'relative', zIndex: 2 }}>
                <div style={{
                    padding: '0 clamp(0rem, 2vw, 1.5rem)',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
                    gap: 'clamp(3rem, 7vw, 7rem)',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    {/* Left: Heading and Explanation */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                            <Sparkles size={16} color="#EAB308" />
                            Industry Overview &amp; Foundation
                        </div>

                        <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.5rem', lineHeight: 1.25, letterSpacing: '-0.5px' }}>
                            What Is Manufacturing Resource Planning?
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            <p style={{ margin: 0 }}>
                                Manufacturing resource planning is an approach to coordinating the resources needed for manufacturing operations, including materials, production capacity, schedules and related business activities.
                            </p>
                            <p style={{ margin: 0 }}>
                                Manufacturing Resource Planning II (MRP II) extends traditional Material Requirements Planning (MRP), which focuses on determining what materials are needed, how much is required and when they should be available.
                            </p>
                            <p style={{ margin: 0 }}>
                                Manufacturing resource planning software can help businesses organize production plans, material requirements, inventory information and purchasing activities.
                            </p>
                            <p style={{ margin: 0, fontWeight: 600, color: '#1F2937' }}>
                                For manufacturers with broader operational needs, these functions may be connected through a manufacturing enterprise resource planning system.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Four Icon Highlights Without Cards */}
                    <div className="manufacturing-overview__highlights" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            {
                                icon: Calendar,
                                title: 'Production Planning',
                                desc: 'Organize manufacturing orders, schedules and production requirements.',
                                bg: 'rgba(250, 204, 21, 0.18)',
                                color: '#CA8A04'
                            },
                            {
                                icon: Layers,
                                title: 'Material Requirements',
                                desc: 'Calculate material needs using relevant production plans, inventory records and bills of materials.',
                                bg: 'rgba(59, 130, 246, 0.12)',
                                color: '#2563EB'
                            },
                            {
                                icon: PackageCheck,
                                title: 'Inventory Coordination',
                                desc: 'Track raw materials, work-in-progress and finished goods.',
                                bg: 'rgba(16, 185, 129, 0.12)',
                                color: '#059669'
                            },
                            {
                                icon: Workflow,
                                title: 'Connected Operations',
                                desc: 'Coordinate planning information with procurement, production and reporting workflows.',
                                bg: 'rgba(139, 92, 246, 0.12)',
                                color: '#7C3AED'
                            }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ x: 6 }}
                                    style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', transition: 'transform 0.2s ease' }}
                                >
                                    <div style={{
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '16px',
                                        background: item.bg,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Icon size={26} color={item.color} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.35rem' }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ fontSize: '1rem', color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================================
                SECTION 03 — INDUSTRY CHALLENGES (Six Challenge Blocks in Responsive Grid)
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(239, 68, 68, 0.12)', color: '#DC2626', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <AlertCircle size={16} color="#DC2626" />
                        Operational Roadblocks
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
                        Common Manufacturing Planning Challenges
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        Manufacturing resource planning becomes more complicated when production requirements, material availability and purchasing activities are managed through disconnected processes.
                    </p>
                </motion.div>

                <div className="manufacturing-challenges-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: '1.75rem'
                }}>
                    {challenges.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                whileHover={{ y: -6, borderColor: '#FACC15', boxShadow: '0 16px 35px rgba(250, 204, 21, 0.18)' }}
                                className="manufacturing-challenge-block"
                                style={{
                                    background: '#FFFFFF',
                                    borderRadius: '20px',
                                    padding: '2rem',
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    transition: 'border-color 0.25s ease'
                                }}
                            >
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '14px',
                                    background: 'rgba(250, 204, 21, 0.18)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#B45309'
                                }}>
                                    <Icon size={24} color="#CA8A04" />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1F2937', margin: 0, lineHeight: 1.35 }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '0.98rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================================
                SECTION 04 — INDUSTRY SOFTWARE SOLUTIONS (Six Solution Cards in 3x2 Grid)
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <Sparkles size={16} color="#EAB308" />
                        Targeted Software Engineering
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
                        Our Manufacturing Resource Planning Software Solutions
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        FlyTowards helps manufacturing businesses plan and develop software solutions around production requirements, material planning and connected operational workflows.
                    </p>
                </motion.div>

                <div className="manufacturing-solutions-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: '2rem'
                }}>
                    {solutions.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                whileHover={{ y: -6, borderColor: '#FACC15', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)' }}
                                className="manufacturing-solution-card"
                                style={{
                                    background: '#FFFFFF',
                                    borderRadius: '24px',
                                    padding: '2.25rem',
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0 6px 25px rgba(0, 0, 0, 0.04)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: '1.5rem',
                                    position: 'relative'
                                }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '16px',
                                        background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.25) 0%, rgba(253, 224, 71, 0.1) 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Icon size={26} color="#CA8A04" />
                                    </div>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1F2937', margin: 0, lineHeight: 1.3 }}>
                                        {card.title}
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: '#6B7280', margin: 0, lineHeight: 1.7 }}>
                                        {card.desc}
                                    </p>
                                </div>

                                <Link
                                    to={card.linkUrl}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: '#B45309',
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        textDecoration: 'none',
                                        borderTop: '1px solid #F3F4F6',
                                        paddingTop: '1.25rem',
                                        transition: 'gap 0.2s ease'
                                    }}
                                >
                                    <span>{card.linkText}</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================================
                SECTION 05 — INDUSTRY WORKFLOWS & USE CASES (Clean Alternating Rows, No Fake Simulator Box)
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <Workflow size={16} color="#EAB308" />
                        Daily Operations & Execution
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
                        How Manufacturing Resource Planning Software Supports Daily Operations
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        Manufacturing resource planning software connects production requirements with the materials, schedules and operational information needed to support manufacturing activities.
                    </p>
                </motion.div>

                {/* Alternating workflow rows with process illustrations */}
                <div className="manufacturing-workflow-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    {workflowRows.map((wf, idx) => {
                        const Icon = wf.icon;
                        const isEven = idx % 2 === 1;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55 }}
                                whileHover={{ y: -4, borderColor: '#FACC15', boxShadow: '0 12px 35px rgba(0, 0, 0, 0.04)' }}
                                className={`manufacturing-workflow-row${isEven ? ' is-reversed' : ''}`}
                            >
                                <div className="manufacturing-workflow-copy">
                                    <div className="manufacturing-workflow-icon"><Icon size={25} color="#CA8A04" /></div>
                                    <span className="manufacturing-workflow-step">WORKFLOW {wf.step}</span>
                                    <h3>{wf.title}</h3>
                                    <p>{wf.desc1}</p>
                                    {wf.desc2 && <p>{wf.desc2}</p>}
                                </div>

                                <div className={`manufacturing-workflow-visual workflow-visual-${idx + 1}`} aria-hidden="true">
                                    {idx === 0 && <><div className="workflow-visual-heading">BILL OF MATERIALS <span>PRODUCT A-104</span></div><div className="workflow-bom-row bom-head"><b>COMPONENT</b><b>QTY</b><b>UNIT</b></div>{[['Steel housing','1','pcs'],['Bearing set','2','pcs'],['Fasteners','8','pcs']].map(row => <div className="workflow-bom-row" key={row[0]}><span><i />{row[0]}</span><b>{row[1]}</b><small>{row[2]}</small></div>)}<div className="workflow-visual-foot">3 components <span>Revision 04 · Active</span></div></>}
                                    {idx === 1 && <><div className="workflow-visual-heading">MATERIAL REQUIREMENTS <span>ORDER #2048</span></div>{[['Steel sheets','Available',82],['Bearing set','Reorder',38],['Fasteners','Available',68]].map(row => <div className="workflow-material" key={row[0]}><div><b>{row[0]}</b><span className={row[1] === 'Reorder' ? 'material-low' : ''}>{row[1]}</span></div><div className="workflow-material-track"><i style={{width:`${row[2]}%`}} /></div></div>)}<div className="workflow-visual-foot">Based on BOM + current stock</div></>}
                                    {idx === 2 && <><div className="workflow-visual-heading">PRODUCTION SCHEDULE <span>WEEK 42</span></div><div className="workflow-timeline"><div className="workflow-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div><div className="workflow-timeline-row"><b>Assembly A</b><i className="timeline-bar bar-one" /></div><div className="workflow-timeline-row"><b>Machine line 2</b><i className="timeline-bar bar-two" /></div><div className="workflow-timeline-row"><b>Finishing</b><i className="timeline-bar bar-three" /></div></div><div className="workflow-visual-foot">3 active work orders <span>Updated today</span></div></>}
                                    {idx === 3 && <><div className="workflow-visual-heading">PURCHASE REQUISITION <span>PR-00842</span></div><div className="workflow-procurement"><div className="procurement-node is-complete"><i>✓</i><b>Request raised</b><small>Raw material shortage</small></div><div className="procurement-connector"/><div className="procurement-node is-complete"><i>✓</i><b>Manager approval</b><small>Approved · 10:42 AM</small></div><div className="procurement-connector"/><div className="procurement-node is-current"><i>3</i><b>Purchase order</b><small>Ready to create</small></div></div></>}
                                    {idx === 4 && <><div className="workflow-visual-heading">SHOP FLOOR STATUS <span>LINE 02</span></div><div className="workflow-floor"><div className="floor-machine"><Factory size={24}/><b>Assembly line</b><small>Running normally</small><div><i/></div></div><div className="floor-stats"><span>Completed<strong>76%</strong></span><span>Units today<strong>248</strong></span><span>Shift<strong>A · Active</strong></span></div></div><div className="workflow-visual-foot">Last update · 2 minutes ago</div></>}
                                    {idx === 5 && <><div className="workflow-visual-heading">OPERATIONS SNAPSHOT <span>THIS MONTH</span></div><div className="workflow-report"><div className="report-stat"><span>Orders completed</span><b>1,284 <small>↑ 8.4%</small></b></div><div className="report-bars">{[32,48,40,66,54,78,61,88,70,96,76,100].map((height, bar) => <i key={bar} style={{height:`${height}%`}} />)}</div><div className="report-legend"><span><i/>Production output</span><span>12 month view</span></div></div><div className="workflow-visual-foot">Production · Inventory · Procurement</div></>}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================================
                SECTION 06 — BUSINESS BENEFITS
            ========================================================================= */}
            <section className="manufacturing-benefits" style={{ width: '100%', maxWidth: '1360px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="manufacturing-benefits__illustration"
                    aria-label="Illustration of manufacturing planning dashboard"
                >
                    <div className="benefits-dash-top"><span><Factory size={17}/> Plant overview</span><small>THIS WEEK⌄</small></div>
                    <div className="benefits-dash-kpis"><div><span>Production output</span><b>82.4%</b><i><em style={{width:'82%'}}/></i></div><div><span>Material readiness</span><b>94%</b><i><em style={{width:'94%'}}/></i></div></div>
                    <div className="benefits-dash-chart"><div className="benefits-dash-chart__head"><span>Production performance</span><b>↗ 8.4%</b></div><div className="benefits-chart-bars">{[38,55,46,68,58,77,63,91,71,84,67,100].map((height, i) => <i key={i} style={{height:`${height}%`}} />)}</div><div className="benefits-chart-labels"><span>W1</span><span>W2</span><span>W3</span><span>W4</span></div></div>
                    <div className="benefits-dash-bottom"><div className="benefits-dash-stock"><span className="benefits-mini-icon">▦</span><div><small>Inventory health</small><b>Materials available</b></div><strong>On track</strong></div><div className="benefits-dash-stock"><span className="benefits-mini-icon mini-green">✓</span><div><small>Production schedule</small><b>12 orders active</b></div><strong>View</strong></div></div>
                    <div className="benefits-dash-caption"><span><i/> Connected planning overview</span><span>Production · Inventory · Procurement</span></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="manufacturing-benefits__content"
                >
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                            <CheckCircle2 size={16} color="#EAB308" />
                            Strategic Value
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '0.75rem', letterSpacing: '-0.5px', lineHeight: 1.25 }}>
                            Benefits of Manufacturing Resource Planning Software
                        </h2>
                        <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.7, margin: 0, maxWidth: '850px' }}>
                            A structured manufacturing resource planning system can help businesses coordinate production requirements, inventory information and purchasing activities.
                        </p>
                    </div>

                    <div className="manufacturing-benefits__list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 6 }}
                                    className="manufacturing-benefit-item"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        padding: '1rem 0',
                                        borderBottom: '1px solid #E9EDF2',
                                        transition: 'transform 0.2s ease'
                                    }}
                                >
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'rgba(250, 204, 21, 0.18)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Icon size={22} color="#CA8A04" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.35rem' }}>
                                            {benefit.title}
                                        </h3>
                                        <p style={{ fontSize: '0.96rem', color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* =========================================================================
                SECTION 07 — RELEVANT FLYTOWARDS SERVICES (Six Linked Service Tiles)
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <Layers size={16} color="#EAB308" />
                        Integrated Capabilities
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
                        FlyTowards Software Development Services for Manufacturers
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        Manufacturing resource planning projects may require custom software development, ERP functionality, integrations and workflow automation.
                    </p>
                </motion.div>

                <div className="manufacturing-services-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: '1.75rem'
                }}>
                    {servicesList.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={idx}
                                to={service.link}
                                style={{ textDecoration: 'none' }}
                            >
                                <motion.div
                                    className="manufacturing-service-tile"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                    whileHover={{ y: -6, borderColor: '#FACC15', boxShadow: '0 16px 35px rgba(250, 204, 21, 0.2)' }}
                                    style={{
                                        background: '#FFFFFF',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        border: '1px solid #E5E7EB',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem',
                                        height: '100%',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '14px',
                                        background: 'rgba(250, 204, 21, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Icon size={24} color="#CA8A04" />
                                    </div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1F2937', margin: 0 }}>
                                        {service.title}
                                    </h3>
                                    <p style={{ fontSize: '0.96rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>
                                        {service.desc}
                                    </p>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        color: '#B45309',
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        marginTop: 'auto',
                                        paddingTop: '0.5rem'
                                    }}>
                                        <span>View Service Details</span>
                                        <ArrowRight size={14} />
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================================
                SECTION 08 — OUR DEVELOPMENT APPROACH (Six-Step Numbered Timeline)
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <Zap size={16} color="#EAB308" />
                        Implementation Methodology
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
                        Our Manufacturing Resource Planning Software Development Process
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        We follow a structured approach to understand manufacturing requirements and plan software functionality around production, materials and operational workflows.
                    </p>
                </motion.div>

                <div className="manufacturing-process-timeline" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
                    gap: '2rem'
                }}>
                    {steps.map((st, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            whileHover={{ y: -6, borderColor: '#FACC15', boxShadow: '0 16px 35px rgba(250, 204, 21, 0.18)' }}
                            className="manufacturing-process-step"
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '22px',
                                padding: '2rem',
                                border: '1px solid #E5E7EB',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: '#1F2937',
                                color: '#FACC15',
                                fontWeight: 800,
                                fontSize: '1.1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 6px 15px rgba(31, 41, 55, 0.2)'
                            }}>
                                {st.num}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1F2937', margin: 0, lineHeight: 1.35 }}>
                                {st.title}
                            </h3>
                            <p style={{ fontSize: '0.96rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>
                                {st.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* =========================================================================
                SECTION 09 — WHY CHOOSE FLYTOWARDS (Two-Column Section)
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="manufacturing-why-grid"
                    style={{
                        background: '#FFFFFF',
                        borderRadius: '28px',
                        padding: 'clamp(2.5rem, 5vw, 4rem)',
                        border: '1px solid #E5E7EB',
                        boxShadow: '0 12px 45px rgba(0, 0, 0, 0.05)',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, .95fr) minmax(0, 1.05fr)',
                        gap: '4rem',
                        alignItems: 'center'
                    }}
                >
                    {/* Left: Heading, Intro, CTA */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, width: 'fit-content' }}>
                            <ShieldCheck size={16} color="#EAB308" />
                            Engineering Excellence
                        </div>

                        <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', margin: 0, lineHeight: 1.25, letterSpacing: '-0.5px' }}>
                            Why Choose FlyTowards for Manufacturing Resource Planning Software?
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            <p style={{ margin: 0 }}>
                                Manufacturing software should reflect how production requirements, material availability and purchasing activities interact within a business.
                            </p>
                            <p style={{ margin: 0, fontWeight: 500, color: '#1F2937' }}>
                                A useful solution starts with understanding those relationships before deciding which modules or features are required.
                            </p>
                        </div>

                        <div>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                                <Link
                                    to="/contact"
                                    className="btn btn-primary"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '1rem 2.2rem',
                                        fontSize: '1.02rem',
                                        fontWeight: 700,
                                        borderRadius: '50px',
                                        textDecoration: 'none',
                                        boxShadow: '0 8px 25px rgba(250, 204, 21, 0.35)'
                                    }}
                                >
                                    <span>Discuss Your Manufacturing Software Requirements</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Four Numbered Differentiators with Dividers */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                        {differentiators.map((diff, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 6 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '1.25rem',
                                    borderBottom: idx !== differentiators.length - 1 ? '1px solid #E5E7EB' : 'none',
                                    paddingBottom: idx !== differentiators.length - 1 ? '1.75rem' : '0',
                                    transition: 'transform 0.2s ease'
                                }}
                            >
                                <span style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 800,
                                    color: '#CA8A04',
                                    background: 'rgba(250, 204, 21, 0.15)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    {diff.num}
                                </span>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.4rem' }}>
                                        {diff.title}
                                    </h3>
                                    <p style={{ fontSize: '0.98rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>
                                        {diff.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* =========================================================================
                SECTION 10 — TAMIL NADU & SOUTH TAMIL NADU RELEVANCE (Clean Editorial Section without fake box)
            ========================================================================= */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="manufacturing-region"
                style={{ width: '100%', maxWidth: '1360px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' }}
            >
                <div className="manufacturing-region__inner">
                    <div className="manufacturing-region__copy">
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: '#FFFFFF', color: '#B45309', border: '1px solid #FDE047', fontSize: '0.85rem', fontWeight: 700, width: 'fit-content' }}>
                        <MapPin size={16} color="#CA8A04" />
                        Regional Manufacturing Focus
                    </div>

                    <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', margin: 0, lineHeight: 1.25, letterSpacing: '-0.5px' }}>
                        Manufacturing Resource Planning Software in Tamil Nadu
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#4B5563', fontSize: '1.08rem', lineHeight: 1.85 }}>
                        <p style={{ margin: 0 }}>
                            Tamil Nadu has manufacturing activity across sectors such as textiles, engineering, food processing, automotive components and industrial products.
                        </p>
                        <p style={{ margin: 0 }}>
                            Manufacturers in South Tamil Nadu may have different production processes, material requirements, supplier arrangements and inventory management practices.
                        </p>
                        <p style={{ margin: 0 }}>
                            Some businesses rely on spreadsheets and manual planning records, while others use ERP applications that need additional manufacturing functionality or integration.
                        </p>
                        <p style={{ margin: 0 }}>
                            FlyTowards provides software development solutions for manufacturing businesses across Tamil Nadu, focusing on production planning, material management and business-specific operational requirements.
                        </p>
                        <p style={{ margin: 0, fontWeight: 600, color: '#1F2937' }}>
                            Whether your company needs a focused material planning application or broader manufacturing ERP functionality, we help evaluate software requirements around your existing processes.
                        </p>
                    </div>
                    </div>

                    <div className="manufacturing-region-illustration" aria-label="Illustration of connected manufacturing planning workflows in Tamil Nadu">
                        <div className="region-illustration-head"><span><MapPin size={16}/> REGIONAL OPERATIONS</span><b>TAMIL NADU</b></div>
                        <div className="region-map-graphic"><div className="region-map-orbit orbit-one"/><div className="region-map-orbit orbit-two"/><div className="region-map-core"><Factory size={28}/><b>Manufacturing</b><small>Planning hub</small></div><span className="region-node node-textile">Textiles</span><span className="region-node node-engineering">Engineering</span><span className="region-node node-food">Food processing</span><span className="region-node node-auto">Auto components</span><i className="region-dot dot-one"/><i className="region-dot dot-two"/><i className="region-dot dot-three"/><i className="region-dot dot-four"/></div>
                        <div className="region-workflow-strip"><div><span className="region-workflow-icon">01</span><b>Production</b><small>Schedules & orders</small></div><i>→</i><div><span className="region-workflow-icon">02</span><b>Materials</b><small>Stock & requirements</small></div><i>→</i><div><span className="region-workflow-icon">03</span><b>Procurement</b><small>Suppliers & purchase</small></div></div>
                        <div className="region-illustration-foot"><span><i/> Connected workflows</span><span>Built around your operations</span></div>
                    </div>
                </div>
            </motion.section>

            {/* =========================================================================
                SECTION 11 — INDUSTRY FAQs (Clean Two-Column Section, Removed Extra Paragraph and Button)
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                    gap: '3.5rem',
                    alignItems: 'flex-start'
                }}>
                    {/* Left: Heading and short introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                            <Sparkles size={16} color="#EAB308" />
                            Industry Guidance
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', margin: 0, letterSpacing: '-0.5px', lineHeight: 1.25 }}>
                            Frequently Asked Questions About Manufacturing Resource Planning Software
                        </h2>
                        <p style={{ margin: '1rem 0 0', maxWidth: '440px', color: '#667085', fontSize: '1.05rem', lineHeight: 1.75 }}>
                            Explore common questions about MRP, manufacturing ERP, production planning, software customization and system integrations.
                        </p>
                    </motion.div>

                    {/* Right: Accordion Questions and Answers */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.45, delay: idx * 0.05 }}
                                    style={{
                                        background: '#FFFFFF',
                                        borderRadius: '16px',
                                        border: isOpen ? '1px solid #FACC15' : '1px solid #E5E7EB',
                                        boxShadow: isOpen ? '0 8px 25px rgba(250, 204, 21, 0.15)' : '0 2px 10px rgba(0, 0, 0, 0.02)',
                                        overflow: 'hidden',
                                        transition: 'all 0.25s ease'
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(idx)}
                                        style={{
                                            width: '100%',
                                            padding: '1.25rem 1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: '1rem',
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            color: '#1F2937',
                                            fontWeight: 700,
                                            fontSize: '1.05rem',
                                            outline: 'none'
                                        }}
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.q}</span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                background: isOpen ? '#1F2937' : '#F3F4F6',
                                                color: isOpen ? '#FACC15' : '#4B5563',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}
                                        >
                                            <ChevronDown size={18} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div style={{
                                                    padding: '0 1.5rem 1.5rem',
                                                    color: '#4B5563',
                                                    fontSize: '0.98rem',
                                                    lineHeight: 1.7,
                                                    borderTop: '1px solid #F3F4F6',
                                                    paddingTop: '1rem'
                                                }}>
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================================
                SECTION 12 — FINAL CTA (Full-Width Banner with Contrasting Background)
            ========================================================================= */}
            <motion.section
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2 }}
            >
                <div style={{
                    background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
                    borderRadius: '28px',
                    padding: 'clamp(3rem, 6vw, 4.5rem) clamp(2rem, 4vw, 3.5rem)',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        <span style={{
                            display: 'inline-block',
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1.2px',
                            color: '#FACC15',
                            fontWeight: 700
                        }}>
                            Take The Next Step in Industrial Digitization
                        </span>

                        <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', fontWeight: 800, margin: 0, color: '#FFFFFF', lineHeight: 1.25, letterSpacing: '-0.5px' }}>
                            Bring Production Planning, Materials and Manufacturing Operations Together
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#D1D5DB', fontSize: '1.1rem', lineHeight: 1.75 }}>
                            <p style={{ margin: 0 }}>
                                Need better visibility into material requirements, production schedules or inventory information?
                            </p>
                            <p style={{ margin: 0 }}>
                                FlyTowards helps manufacturing businesses explore custom software solutions for manufacturing resource planning, ERP integration and connected operational workflows.
                            </p>
                            <p style={{ margin: 0, fontWeight: 600, color: '#FFFFFF' }}>
                                Share your manufacturing requirements and take the next step toward a practical software solution.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center', marginTop: '1rem' }}>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                                <Link
                                    to="/contact"
                                    className="btn btn-primary"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '1.05rem 2.2rem',
                                        fontSize: '1.05rem',
                                        fontWeight: 700,
                                        borderRadius: '50px',
                                        textDecoration: 'none',
                                        boxShadow: '0 8px 30px rgba(250, 204, 21, 0.45)'
                                    }}
                                >
                                    <MessageSquareText size={18} />
                                    <span>Discuss Your Manufacturing Software Project</span>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                                <Link
                                    to="/contact"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '1.05rem 2.2rem',
                                        fontSize: '1.05rem',
                                        fontWeight: 700,
                                        borderRadius: '50px',
                                        textDecoration: 'none',
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        color: '#FFFFFF',
                                        border: '1px solid rgba(255, 255, 255, 0.25)',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <span>Request a Consultation</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* =========================================================================
                EXISTING MANUFACTURING SOFTWARE SECTION (Preserved Directly Below Section 12)
            ========================================================================= */}
            <section className="manufacturing-software-hero" style={{ width: '100%', maxWidth: '1500px', margin: '0 auto 3rem', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(320px, 0.9fr)', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center', textAlign: 'left', position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', alignItems: 'flex-start' }}
                >
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    borderRadius: '50px',
                    background: 'rgba(250, 204, 21, 0.15)',
                    color: '#B45309',
                    border: '1px solid rgba(250, 204, 21, 0.35)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px'
                }}>
                    <Factory size={16} color="#EAB308" /> Manufacturing & Industry 4.0
                </span>

                <h2 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
                    Manufacturing Software
                </h2>

                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted, #6B7280)', lineHeight: 1.8, margin: 0, maxWidth: '750px' }}>
                    Digital solutions supporting manufacturing-related workflows, business operations, process management and information visibility.
                </p>

                <motion.button
                    type="button"
                    onClick={() => setIsExpanded(prev => !prev)}
                    className="btn btn-primary"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        alignSelf: 'flex-start',
                        padding: '0.95rem 2.2rem',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        borderRadius: '50px',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none',
                        boxShadow: isExpanded
                            ? '0 0 0 3px rgba(250, 204, 21, 0.5), 0 12px 30px rgba(250, 204, 21, 0.4)'
                            : '0 8px 25px rgba(250, 204, 21, 0.35)',
                        transition: 'all 0.3s ease'
                    }}
                    aria-expanded={isExpanded}
                >
                    <span>Explore Manufacturing Solutions</span>
                    <motion.span
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ display: 'inline-flex' }}
                    >
                        <ArrowRight size={18} />
                    </motion.span>
                </motion.button>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="manufacturing-software-hero__image-wrap"
                >
                    <img
                        src="/images (4).jpg"
                        alt="Modern manufacturing production line"
                        className="manufacturing-software-hero__image"
                    />
                </motion.div>
            </section>

            {/* Manufacturing Software Solutions Expandable Drawer */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.section
                        ref={solutionsRef}
                        id="manufacturing-solutions"
                        initial={{ opacity: 0, height: 0, y: 35 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 25 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            width: '100%',
                            maxWidth: '1100px',
                            margin: '1.5rem auto 3rem',
                            position: 'relative',
                            zIndex: 2,
                            textAlign: 'left',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '24px',
                                padding: 'clamp(2rem, 4vw, 3rem)',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
                                border: '1px solid rgba(209, 213, 219, 0.6)',
                                marginBottom: '2rem',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                                <Sparkles size={16} color="#EAB308" />
                                Industrial & Manufacturing Systems
                            </div>

                            <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.25rem', letterSpacing: '-0.5px' }}>
                                Manufacturing Software Solutions
                            </h3>

                            <p style={{ fontSize: '1.15rem', color: '#374151', lineHeight: 1.8, marginBottom: '1rem', maxWidth: '950px' }}>
                                Manufacturing businesses can involve multiple processes, teams, systems and operational workflows.
                            </p>

                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: 1.8, margin: 0, maxWidth: '950px' }}>
                                Software can help bring specific business processes into more structured digital environments.
                            </p>
                        </motion.div>

                        {/* Requirements Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ marginBottom: '1.5rem', padding: '0 0.5rem' }}
                        >
                            <h4 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.45rem)', fontWeight: 700, color: '#1F2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Factory size={24} color="#EAB308" />
                                Manufacturing software requirements may include:
                            </h4>
                        </motion.div>

                        {/* Requirements Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '2.5rem'
                            }}
                        >
                            {requirements.map((req, index) => {
                                const IconComponent = req.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ y: -6, boxShadow: '0 16px 35px rgba(250, 204, 21, 0.2)', borderColor: '#FACC15' }}
                                        transition={{ duration: 0.25 }}
                                        style={{
                                            background: '#FFFFFF',
                                            borderRadius: '20px',
                                            padding: '1.75rem',
                                            border: '1px solid #E5E7EB',
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1rem',
                                            cursor: 'default',
                                            transition: 'border-color 0.25s ease'
                                        }}
                                    >
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.2) 0%, rgba(253, 224, 71, 0.1) 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#B45309'
                                        }}>
                                            <IconComponent size={24} color="#CA8A04" />
                                        </div>

                                        <h5 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1F2937', margin: 0, lineHeight: 1.35 }}>
                                            {req.title}
                                        </h5>

                                        <p style={{ fontSize: '0.95rem', color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
                                            {req.desc}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Project Definition Note */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(254, 249, 195, 0.45) 0%, #FFFFFF 100%)',
                                borderLeft: '4px solid #FACC15',
                                borderRadius: '14px',
                                padding: '1.25rem 1.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                                borderTop: '1px solid #FEF9C3',
                                borderRight: '1px solid #FEF9C3',
                                borderBottom: '1px solid #FEF9C3',
                                marginBottom: '2.5rem'
                            }}
                        >
                            <CheckCircle2 size={24} color="#CA8A04" style={{ flexShrink: 0 }} />
                            <p style={{ fontSize: '1.05rem', color: '#374151', margin: 0, fontWeight: 500, lineHeight: 1.6 }}>
                                We focus on understanding the existing workflow before determining what the software needs to do.
                            </p>
                        </motion.div>

                        {/* CTA Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            style={{
                                background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
                                borderRadius: '24px',
                                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                                color: '#FFFFFF',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '1.5rem',
                                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15)'
                            }}
                        >
                            <div style={{ maxWidth: '600px' }}>
                                <span style={{
                                    display: 'inline-block',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    color: '#FACC15',
                                    fontWeight: 700,
                                    marginBottom: '0.5rem'
                                }}>
                                    Industrial Digital Innovation
                                </span>
                                <h4 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', fontWeight: 800, margin: 0, color: '#FFFFFF', lineHeight: 1.3 }}>
                                    Ready to structure and automate your manufacturing operations?
                                </h4>
                                <p style={{ margin: '0.6rem 0 0', color: '#9CA3AF', fontSize: '0.98rem', lineHeight: 1.6 }}>
                                    Collaborate with our engineers to build resilient software tailored to your production workflows.
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '1.05rem 2.2rem',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <MessageSquareText size={18} />
                                <span>Discuss a Manufacturing Software Requirement</span>
                            </Link>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Manufacturing;
