import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    ArrowRight,
    Code2,
    Globe,
    Smartphone,
    Database,
    Zap,
    Link2,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Layers,
    BarChart3,
    ShieldCheck,
    Eye,
    AlertCircle,
    Unlink,
    FileSpreadsheet,
    Settings2,
    Users,
    MapPin,
    TrendingUp,
    Workflow,
    MonitorSmartphone,
    Building2,
    Send,
    Target,
    PieChart,
    Cpu,
    PackageCheck,
    MessageSquareText,
    ClipboardList
} from 'lucide-react';
import './TamilNadu.css';

/* ─── Animation Variants ─────────────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' }
    })
};
const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};
const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};
const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' }
    })
};

/* ─── Animated Section Wrapper ───────────────────────────────── */
function AnimSection({ children, className = '', delay = 0, variant = fadeUp }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <motion.div
            ref={ref}
            variants={variant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={delay}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ─── Counter Component ──────────────────────────────────────── */
function CountUp({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1800;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════════
   PAGE DATA
═══════════════════════════════════════════════════════════════ */
const challenges = [
    { icon: Unlink,         title: 'Disconnected Business Applications',   desc: 'Using separate tools for sales, inventory, finance and operations can make information sharing difficult.' },
    { icon: FileSpreadsheet,title: 'Manual Data Entry & Repetitive Work',   desc: 'Spreadsheets, paper records and repeated data entry can increase administrative effort.' },
    { icon: Eye,            title: 'Limited Operational Visibility',        desc: 'Managers may struggle to access consistent information across departments, teams or business locations.' },
    { icon: Settings2,      title: 'Outdated Software Systems',             desc: 'Existing applications may not support changing workflows, new integrations or evolving operational requirements.' },
    { icon: Users,          title: 'Complex Customer & Employee Processes',  desc: 'Unstructured enquiries, approvals, service requests and internal communication can create coordination difficulties.' },
    { icon: ShieldCheck,    title: 'Integration & Data Security Requirements', desc: 'Connecting applications and controlling access to sensitive information requires appropriate technical planning.' },
];

const solutions = [
    { icon: Code2,          title: 'Custom Software Development',    desc: 'Build applications around business-specific requirements, approval processes, information management and operational workflows.' },
    { icon: Globe,          title: 'Web Application Development',    desc: 'Develop browser-based business portals, management dashboards, customer platforms and administrative applications.' },
    { icon: Smartphone,     title: 'Mobile App Development',         desc: 'Create mobile applications for employees, customers, field teams and suitable business workflows.' },
    { icon: Database,       title: 'ERP & CRM Software Development', desc: 'Plan enterprise resource planning and customer relationship management functionality for connected business processes.' },
    { icon: Link2,          title: 'API Development & System Integration', desc: 'Connect compatible applications and services through supported APIs and structured data exchange.' },
    { icon: Zap,            title: 'Business Process Automation',    desc: 'Develop digital workflows for repetitive tasks, approvals, notifications and business information processing.' },
];

const useCases = [
    { icon: MessageSquareText, title: 'Sales & Customer Enquiry Management', desc: 'Organize enquiries, customer records, follow-ups and relevant sales activities through a structured CRM workflow.' },
    { icon: PackageCheck,       title: 'Inventory & Procurement Management',  desc: 'Maintain stock information, purchase requests, supplier details and relevant inventory movements.' },
    { icon: ClipboardList,      title: 'Employee & Administrative Workflows', desc: 'Digitize selected attendance, leave, task assignment and approval processes.' },
    { icon: PieChart,           title: 'Finance & Expense Management',        desc: 'Organize budgets, expense submissions, approvals and financial information for internal reporting.' },
    { icon: Globe,              title: 'Customer Portals & Service Requests', desc: 'Develop web or mobile interfaces for customers to submit requests, access authorized information and track service activity.' },
    { icon: BarChart3,          title: 'Management Dashboards & Reporting',   desc: 'Connect relevant business information to dashboards that help teams review operations and make informed decisions.' },
];

const benefits = [
    { title: 'Software Aligned with Business Workflows',    desc: 'Develop applications around the processes, responsibilities and information your organization needs to manage.' },
    { title: 'Reduced Manual Coordination',                  desc: 'Use structured workflows to simplify selected approvals, information updates and repetitive administrative activities.' },
    { title: 'Better Access to Business Information',        desc: 'Provide authorized users with relevant operational data through suitable applications and dashboards.' },
    { title: 'Connected Business Systems',                   desc: 'Integrate compatible applications to support more consistent information sharing between teams.' },
    { title: 'Flexibility for Changing Requirements',        desc: 'Plan software architecture and functionality with future maintenance, enhancements and integrations in mind.' },
];

const serviceLinks = [
    { icon: Code2,          title: 'Custom Software Development',     link: '/services/custom-software-development/' },
    { icon: Building2,      title: 'Enterprise Software Development',  link: '/services/enterprise-software-development/' },
    { icon: Globe,          title: 'Web Application Development',      link: '/services/web-application-development/' },
    { icon: Smartphone,     title: 'Mobile App Development',           link: '/services/mobile-app-development/' },
    { icon: Link2,          title: 'API Development',                  link: '/services/api-development/' },
    { icon: Target,         title: 'Software Consulting',              link: '/services/software-consulting/' },
];

const steps = [
    { num: '01', title: 'Business Requirement Discovery',   desc: 'Understand your organization\'s challenges, current workflows, users and project objectives.' },
    { num: '02', title: 'Process & Technical Assessment',   desc: 'Review existing systems, information requirements, integration possibilities and operational constraints.' },
    { num: '03', title: 'Solution Planning',                desc: 'Define application modules, user roles, technical architecture, project priorities and relevant deliverables.' },
    { num: '04', title: 'UI/UX Design & Development',       desc: 'Design appropriate user interfaces and develop the agreed software functionality.' },
    { num: '05', title: 'Testing & Validation',             desc: 'Evaluate application behavior, relevant business workflows, user permissions and supported integrations.' },
    { num: '06', title: 'Deployment & Support Planning',    desc: 'Prepare for implementation, review data migration requirements and establish suitable support arrangements.' },
];

const differentiators = [
    { num: '01', title: 'Business-Focused Software Planning',    desc: 'We begin by understanding the processes and information your business needs to manage.' },
    { num: '02', title: 'Custom Application Requirements',       desc: 'We consider business-specific functionality rather than assuming every organization needs the same software features.' },
    { num: '03', title: 'Usability & Workflow Considerations',   desc: 'We focus on planning interfaces and workflows suitable for the people who will use the applications.' },
    { num: '04', title: 'Integration & Implementation Planning', desc: 'We assess relevant technical dependencies, existing applications and deployment requirements before defining the proposed solution.' },
];

const regions = [
    { city: 'Madurai',      desc: 'Healthcare providers, educational institutions, retailers, hospitality businesses and professional services may require applications for records, appointments, admissions, customer management and administration.' },
    { city: 'Tirunelveli',  desc: 'Manufacturing businesses, educational organizations, retailers and service providers may need software for inventory, production coordination, customer information and reporting.' },
    { city: 'Thoothukudi',  desc: 'Logistics, trading, manufacturing and related businesses may benefit from applications supporting shipment information, inventory records, procurement and operational coordination.' },
    { city: 'Tenkasi',      desc: 'Retailers, accommodation businesses, educational institutions and other local organizations may require practical software for billing, reservations, student administration and internal processes.' },
    { city: 'Kanyakumari',  desc: 'Hospitality operators, educational institutions, retailers and service businesses may need systems for guest management, customer records, bookings and daily administration.' },
];

const faqs = [
    { q: 'What services do IT companies in Tamil Nadu provide?',                  a: 'IT companies in Tamil Nadu may provide custom software development, web and mobile application development, enterprise systems, software consulting, cloud-related services, technical support and system integration. Services vary between providers.' },
    { q: 'How can I choose the right software company in Tamil Nadu?',            a: 'Start by defining your project requirements. Evaluate a company\'s relevant technical capabilities, development approach, communication, project scope, data security practices, maintenance options and commercial terms.' },
    { q: 'Where can I find a Tamil Nadu IT company list?',                        a: 'A Tamil Nadu IT company list may be available through business directories, industry associations, technology park resources and official company information. Verify each provider\'s services, business details and suitability before shortlisting.' },
    { q: 'Does FlyTowards provide custom software development for Tamil Nadu businesses?', a: 'FlyTowards offers custom software development solutions for businesses across Tamil Nadu, including applications for operational workflows, management systems, web platforms and mobile applications. Project scope and feasibility are discussed according to individual requirements.' },
    { q: 'Can IT companies in Tamil Nadu develop ERP and CRM software?',          a: 'Yes. Some IT companies develop or customize ERP and CRM applications for inventory, procurement, customer management, sales and administrative workflows. The appropriate solution depends on business requirements and existing systems.' },
    { q: 'How much does custom software development cost in Tamil Nadu?',         a: 'Software development costs depend on application complexity, number of users, modules, integrations, design requirements, security needs and maintenance scope. A requirements assessment is needed to prepare a meaningful estimate.' },
    { q: 'Does FlyTowards provide software solutions for South Tamil Nadu?',      a: 'FlyTowards targets businesses across Tamil Nadu, with a particular focus on South Tamil Nadu. Relevant requirements may include inventory management, customer portals, operational dashboards, business automation and industry-specific applications.' },
    { q: 'Can existing business software be integrated with a new application?',  a: 'Integration may be possible when existing systems provide compatible APIs, supported data exchange methods or other authorized integration options. Feasibility depends on technical access, security requirements and the agreed project scope.' },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
const TamilNadu = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'IT Companies in Tamil Nadu – Custom Software Development | FlyTowards';

        const setMeta = (name, content) => {
            let el = document.querySelector(`meta[name="${name}"]`);
            if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
            el.setAttribute('content', content);
        };

        setMeta('description', 'Looking for IT companies in Tamil Nadu? FlyTowards Digital Innovation provides custom software development, web & mobile apps, ERP/CRM and business automation for businesses across Tamil Nadu.');
        setMeta('keywords', 'it companies in tamil nadu, tamil nadu it company list, tamilnadu it companies, list of it companies in tamil nadu, software company tamil nadu');
        setMeta('robots', 'index, follow');

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
        canonical.href = 'https://flytowardsdigitalinnovation.com/locations/tamilnadu/';

        const schemaId = 'tamilnadu-schema-script';
        let schemaScript = document.getElementById(schemaId);
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = schemaId;
            schemaScript.type = 'application/ld+json';
            document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'WebPage',
                    '@id': 'https://flytowardsdigitalinnovation.com/locations/tamilnadu/#webpage',
                    name: 'IT Companies in Tamil Nadu – Custom Software Development | FlyTowards',
                    url: 'https://flytowardsdigitalinnovation.com/locations/tamilnadu/',
                    description: 'FlyTowards Digital Innovation provides software development and IT solutions for businesses across Tamil Nadu.',
                    inLanguage: 'en',
                    isPartOf: { '@id': 'https://flytowardsdigitalinnovation.com/#website' }
                },
                {
                    '@type': 'Service',
                    name: 'IT Services & Software Development in Tamil Nadu',
                    provider: { '@type': 'Organization', name: 'FlyTowards Digital Innovation', url: 'https://flytowardsdigitalinnovation.com/' },
                    areaServed: [
                        { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
                        { '@type': 'City', name: 'Tirunelveli' },
                        { '@type': 'City', name: 'Madurai' },
                        { '@type': 'City', name: 'Tenkasi' },
                        { '@type': 'City', name: 'Thoothukudi' },
                        { '@type': 'City', name: 'Kanyakumari' }
                    ],
                    serviceType: 'Custom Software Development'
                },
                {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
                        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://flytowardsdigitalinnovation.com/locations/' },
                        { '@type': 'ListItem', position: 3, name: 'Tamil Nadu', item: 'https://flytowardsdigitalinnovation.com/locations/tamilnadu/' }
                    ]
                },
                {
                    '@type': 'FAQPage',
                    mainEntity: faqs.map(f => ({
                        '@type': 'Question',
                        name: f.q,
                        acceptedAnswer: { '@type': 'Answer', text: f.a }
                    }))
                }
            ]
        });

        return () => { const s = document.getElementById(schemaId); if (s) s.remove(); };
    }, []);

    return (
        <main className="tn-page">

            {/* ══════════════════════════════════════════
                SECTION 01 — HERO
            ══════════════════════════════════════════ */}
            <section className="tn-hero" aria-label="Tamil Nadu IT Services Hero">
                {/* Animated background particles */}
                <div className="tn-hero__particles" aria-hidden="true">
                    {[...Array(18)].map((_, i) => (
                        <span key={i} className={`tn-particle tn-particle--${i % 3}`} style={{ '--i': i }} />
                    ))}
                </div>

                <div className="tn-container tn-hero__inner">
                    {/* Left column */}
                    <div className="tn-hero__content">
                        <motion.span
                            className="tn-tag"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MapPin size={14} /> Tamil Nadu &nbsp;·&nbsp; IT & Software Development
                        </motion.span>

                        <motion.h1
                            className="tn-hero__heading"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            IT Companies in Tamil Nadu –&nbsp;
                            <span className="tn-highlight">Custom Software</span>
                            &nbsp;Development Solutions
                        </motion.h1>

                        <motion.p
                            className="tn-hero__sub"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Supporting Businesses Across Tamil Nadu with Practical Software and IT Solutions
                        </motion.p>

                        <motion.p
                            className="tn-hero__desc"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Looking for IT companies in Tamil Nadu to develop custom software, web applications or digital business solutions? Choosing the right technology partner starts with understanding your business requirements. FlyTowards Digital Innovation provides software development solutions for startups, SMEs and businesses across Tamil Nadu, with a particular focus on South Tamil Nadu.
                        </motion.p>

                        <motion.div
                            className="tn-hero__ctas"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link to="/contact" className="tn-btn tn-btn--primary">
                                Discuss Your Software Project <ArrowRight size={16} />
                            </Link>
                            <Link to="/services" className="tn-btn tn-btn--outline">
                                Explore Our IT Services
                            </Link>
                        </motion.div>

                    </div>

                    {/* Right column — dashboard illustration */}
                    <motion.div
                        className="tn-hero__visual"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        aria-hidden="true"
                    >
                        <div className="tn-dashboard">
                            <div className="tn-dashboard__bar">
                                <span /><span /><span />
                            </div>
                            <div className="tn-dashboard__body">
                                <div className="tn-dashboard__kpis">
                                    {[
                                        { label: 'Custom Apps', val: '12+', color: '#FACC15' },
                                        { label: 'Integrations', val: '8+',  color: '#1e40af' },
                                        { label: 'Uptime',       val: '99%', color: '#10B981' },
                                    ].map((k, i) => (
                                        <motion.div
                                            key={i}
                                            className="tn-kpi"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + i * 0.15 }}
                                        >
                                            <span className="tn-kpi__val" style={{ color: k.color }}>{k.val}</span>
                                            <span className="tn-kpi__label">{k.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="tn-dashboard__chart">
                                    {[65, 80, 55, 90, 70, 85, 75].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="tn-bar"
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                                            style={{ height: `${h}%`, '--bar-color': i === 3 ? '#FACC15' : '#1e3a8a' }}
                                        />
                                    ))}
                                </div>
                                <div className="tn-dashboard__modules">
                                    {['CRM', 'ERP', 'API', 'Mobile'].map((m, i) => (
                                        <motion.span
                                            key={i}
                                            className="tn-module-pill"
                                            initial={{ opacity: 0, scale: 0.7 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1 + i * 0.1 }}
                                        >
                                            {m}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Wave divider */}
                <div className="tn-hero__wave" aria-hidden="true">
                    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 02 — IT SERVICES OVERVIEW
            ══════════════════════════════════════════ */}
            <section className="tn-section tn-services-overview" aria-labelledby="s02-heading">
                <div className="tn-container tn-services-overview__inner">
                    <AnimSection variant={fadeLeft} className="tn-services-overview__text">
                        <span className="tn-tag tn-tag--light">IT Services</span>
                        <h2 id="s02-heading" className="tn-section__heading">
                            IT Services & <span className="tn-heading-highlight">Software Solutions</span> by FlyTowards in Tamil Nadu
                        </h2>
                        <p>
                            FlyTowards Digital Innovation provides software development and IT solutions for businesses across Tamil Nadu, including Tirunelveli, Tenkasi, Sankarankovil, Madurai and surrounding regions.
                        </p>
                        <p>
                            Our services focus on custom software development, web and mobile applications, enterprise software solutions and business automation to help organizations streamline operations, manage workflows and support digital growth.
                        </p>
                    </AnimSection>

                    <div className="tn-services-overview__icons">
                        {[
                            { icon: Code2,       title: 'Custom Software Development',   desc: 'Tailored applications for specific business requirements.' },
                            { icon: MonitorSmartphone, title: 'Web & Mobile App Development', desc: 'Business websites and applications for customers and employees.' },
                            { icon: Building2,   title: 'Enterprise Software Solutions', desc: 'Software systems for managing business operations and data.' },
                            { icon: Workflow,    title: 'Business Process Automation',   desc: 'Digital workflows that simplify repetitive business tasks.' },
                        ].map((item, i) => (
                            <AnimSection key={i} delay={i} className="tn-icon-highlight">
                                <div className="tn-icon-highlight__icon">
                                    <item.icon size={26} strokeWidth={1.6} />
                                </div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </AnimSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 03 — BUSINESS CHALLENGES
            ══════════════════════════════════════════ */}
            <section className="tn-section tn-challenges" aria-labelledby="s03-heading">
                <div className="tn-container">
                    <AnimSection className="tn-section__header">
                        <span className="tn-tag tn-tag--light">Challenges</span>
                        <h2 id="s03-heading" className="tn-section__heading">
                            Common Technology <span className="tn-heading-highlight">Challenges</span> for Businesses in Tamil Nadu
                        </h2>
                        <p className="tn-section__sub">
                            Businesses across Tamil Nadu operate in different industries, but many face similar challenges when managing information, processes and software systems.
                        </p>
                    </AnimSection>

                    <div className="tn-challenges__grid">
                        {challenges.map((item, i) => (
                            <motion.div
                                key={i}
                                className="tn-challenge-card"
                                variants={scaleIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                custom={i}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            >
                                <div className="tn-challenge-card__icon">
                                    <item.icon size={22} strokeWidth={1.7} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 04 — SOFTWARE SOLUTIONS
            ══════════════════════════════════════════ */}
            <section className="tn-section tn-solutions" aria-labelledby="s04-heading">
                <div className="tn-container">
                    <AnimSection className="tn-section__header">
                        <span className="tn-tag tn-tag--yellow">Solutions</span>
                        <h2 id="s04-heading" className="tn-section__heading tn-section__heading--light">
                            Software Development Services for Businesses in Tamil Nadu
                        </h2>
                        <p className="tn-section__sub tn-section__sub--light">
                            FlyTowards helps organizations evaluate and develop software solutions for business operations, customer experiences and internal management.
                        </p>
                    </AnimSection>

                    <div className="tn-solutions__grid">
                        {solutions.map((item, i) => (
                            <motion.div
                                key={i}
                                className="tn-solution-card"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                custom={i}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            >
                                <div className="tn-solution-card__icon">
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="tn-solution-card__line" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 05 — BUSINESS USE CASES (TABS)
            ══════════════════════════════════════════ */}
            <section className="tn-section tn-usecases" aria-labelledby="s05-heading">
                <div className="tn-container">
                    <AnimSection className="tn-section__header">
                        <span className="tn-tag tn-tag--light">Use Cases</span>
                        <h2 id="s05-heading" className="tn-section__heading">
                            How Our <span className="tn-heading-highlight">Software Solutions</span> Support Tamil Nadu Businesses
                        </h2>
                        <p className="tn-section__sub">
                            Different businesses need different applications. A suitable software solution should address specific operational requirements rather than introduce unnecessary features.
                        </p>
                    </AnimSection>

                    {/* Tab Navigation */}
                    <div className="tn-tabs" role="tablist" aria-label="Business use cases">
                        {useCases.map((item, i) => (
                            <button
                                key={i}
                                role="tab"
                                aria-selected={activeTab === i}
                                className={`tn-tab${activeTab === i ? ' tn-tab--active' : ''}`}
                                onClick={() => setActiveTab(i)}
                            >
                                <item.icon size={16} />
                                {item.title}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className="tn-usecase-panel"
                            role="tabpanel"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                        >
                            {(() => {
                                const item = useCases[activeTab];
                                return (
                                    <>
                                        <div className="tn-usecase-panel__icon">
                                            <item.icon size={36} strokeWidth={1.4} />
                                        </div>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </AnimatePresence>

                    {/* Workflow strip */}
                    <AnimSection delay={2} className="tn-workflow">
                        <p className="tn-workflow__label">Development Workflow</p>
                        <div className="tn-workflow__steps">
                            {['Business Requirement', 'Process Assessment', 'Software Planning', 'Development', 'Testing', 'Deployment', 'Support Planning'].map((s, i, arr) => (
                                <span key={i} className="tn-workflow__item">
                                    <span className="tn-workflow__step">{s}</span>
                                    {i < arr.length - 1 && <ArrowRight size={14} className="tn-workflow__arrow" />}
                                </span>
                            ))}
                        </div>
                        <p className="tn-workflow__note">Workflow details, integrations and available functionality depend on the agreed project scope.</p>
                    </AnimSection>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 06 — BENEFITS
            ══════════════════════════════════════════ */}
            <section className="tn-section tn-benefits" aria-labelledby="s06-heading">
                <div className="tn-container tn-benefits__inner">
                    {/* Left — image */}
                    <AnimSection variant={fadeLeft} className="tn-benefits__visual">
                        <div className="tn-benefits__visual-card">
                            <div className="tn-benefits__visual-icon"><Cpu size={48} strokeWidth={1.3} /></div>
                            <p className="tn-benefits__visual-label">Custom Software for Tamil Nadu Businesses</p>
                            <div className="tn-benefits__visual-dots">
                                {['Strategy', 'Design', 'Development', 'Support'].map((l, i) => (
                                    <motion.span
                                        key={i}
                                        className="tn-dot-pill"
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.12 }}
                                    >{l}</motion.span>
                                ))}
                            </div>
                        </div>
                    </AnimSection>

                    {/* Right — benefits list */}
                    <div className="tn-benefits__list">
                        <AnimSection variant={fadeRight} className="tn-section__header tn-section__header--left">
                            <span className="tn-tag tn-tag--light">Benefits</span>
                            <h2 id="s06-heading" className="tn-section__heading">
                                Benefits of Choosing <span className="tn-heading-highlight">Custom Software Development</span> in Tamil Nadu
                            </h2>
                            <p className="tn-section__sub">
                                Businesses often evaluate IT companies based on whether their solutions can support current operations and accommodate future requirements.
                            </p>
                        </AnimSection>

                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                className="tn-benefit-row"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <CheckCircle2 size={20} className="tn-benefit-row__icon" />
                                <div>
                                    <h3>{b.title}</h3>
                                    <p>{b.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 07 — RELEVANT SERVICES
            ══════════════════════════════════════════ */}
            <section className="tn-section tn-service-tiles" aria-labelledby="s07-heading">
                <div className="tn-container">
                    <AnimSection className="tn-section__header">
                        <span className="tn-tag tn-tag--light">Our Services</span>
                        <h2 id="s07-heading" className="tn-section__heading">
                            Explore FlyTowards <span className="tn-heading-highlight">IT Services</span> in Tamil Nadu
                        </h2>
                    </AnimSection>

                    <div className="tn-service-tiles__grid">
                        {serviceLinks.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={scaleIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                whileHover={{ y: -6 }}
                            >
                                <Link to={item.link} className="tn-service-tile">
                                    <div className="tn-service-tile__icon"><item.icon size={24} strokeWidth={1.6} /></div>
                                    <span>{item.title}</span>
                                    <ArrowRight size={15} className="tn-service-tile__arrow" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 08 — DEVELOPMENT APPROACH
            ══════════════════════════════════════════ */}
            <section className="tn-section tn-approach" aria-labelledby="s08-heading">
                <div className="tn-container">
                    <AnimSection className="tn-section__header">
                        <span className="tn-tag tn-tag--yellow">Our Approach</span>
                        <h2 id="s08-heading" className="tn-section__heading tn-section__heading--light">
                            Our Approach to Software Development Projects in Tamil Nadu
                        </h2>
                        <p className="tn-section__sub tn-section__sub--light">
                            A structured development process helps align technical decisions with business needs.
                        </p>
                    </AnimSection>

                    <div className="tn-timeline">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="tn-timeline__item"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                            >
                                <div className="tn-timeline__connector">
                                    <div className="tn-timeline__dot">
                                        <span>{step.num}</span>
                                    </div>
                                    {i < steps.length - 1 && <div className="tn-timeline__line" />}
                                </div>
                                <div className="tn-timeline__content">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 09 — WHY FLYTOWARDS
            ══════════════════════════════════════════ */}
            <section className="tn-section tn-why" aria-labelledby="s09-heading">
                <div className="tn-container tn-why__inner">
                    <AnimSection variant={fadeLeft} className="tn-why__text">
                        <span className="tn-tag tn-tag--light">Why FlyTowards</span>
                        <h2 id="s09-heading" className="tn-section__heading">
                            Why Consider FlyTowards Among <span className="tn-heading-highlight">IT Companies</span> in Tamil Nadu?
                        </h2>
                        <p>
                            Choosing an IT company requires more than comparing service lists. Businesses need a provider that can discuss their operational challenges, explain technical options and establish clear project expectations.
                        </p>
                        <p>
                            FlyTowards approaches software projects through requirements-focused planning and practical application design.
                        </p>
                        <Link to="/contact" className="tn-btn tn-btn--primary tn-btn--mt">
                            Talk to FlyTowards About Your Software Requirements <ArrowRight size={16} />
                        </Link>
                    </AnimSection>

                    <div className="tn-why__differentiators">
                        {differentiators.map((d, i) => (
                            <motion.div
                                key={i}
                                className="tn-differentiator"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.5 }}
                            >
                                <span className="tn-differentiator__num">{d.num}</span>
                                <div>
                                    <h3>{d.title}</h3>
                                    <p>{d.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 10 — REGIONAL RELEVANCE
            ══════════════════════════════════════════ */}
            <section className="tn-section tn-regional" aria-labelledby="s10-heading">
                <div className="tn-container">
                    <AnimSection className="tn-section__header">
                        <span className="tn-tag tn-tag--yellow">South Tamil Nadu</span>
                        <h2 id="s10-heading" className="tn-section__heading tn-section__heading--light">
                            Software Development Solutions Across Tamil Nadu, with a Focus on South Tamil Nadu
                        </h2>
                        <p className="tn-section__sub tn-section__sub--light">
                            Tamil Nadu includes major industrial, commercial, educational, healthcare and service-sector markets. Businesses across these sectors use software for different operational requirements. Technology requirements can also vary between large enterprises, growing SMEs, local service providers and organizations managing multiple locations.
                        </p>
                    </AnimSection>

                    <div className="tn-regional__grid">
                        {regions.map((r, i) => (
                            <motion.div
                                key={i}
                                className="tn-regional-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="tn-regional-card__header">
                                    <MapPin size={16} />
                                    <strong>{r.city}</strong>
                                </div>
                                <p>{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <AnimSection delay={3} className="tn-regional__footer">
                        <p>
                            FlyTowards provides software development solutions for businesses evaluating technology projects across these markets and the wider Tamil Nadu region. Our approach is to understand the organization's actual requirements, regardless of whether it needs a focused application or a broader business management platform.
                        </p>
                    </AnimSection>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 11 — FAQs
            ══════════════════════════════════════════ */}
            <section className="tn-section tn-faqs" aria-labelledby="s11-heading">
                <div className="tn-container">
                    <AnimSection className="tn-section__header">
                        <span className="tn-tag tn-tag--light">FAQs</span>
                        <h2 id="s11-heading" className="tn-section__heading">
                            <span className="tn-heading-highlight">Frequently Asked Questions</span> About IT Companies in Tamil Nadu
                        </h2>
                    </AnimSection>

                    <div className="tn-faqs__grid">
                        {faqs.map((faq, i) => (
                            <AnimSection key={i} delay={i * 0.05} className="tn-faq-item">
                                <button
                                    className={`tn-faq-item__btn${openFaq === i ? ' tn-faq-item__btn--open' : ''}`}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                    aria-controls={`faq-answer-${i}`}
                                >
                                    <span>{faq.q}</span>
                                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            id={`faq-answer-${i}`}
                                            className="tn-faq-item__answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </AnimSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 12 — FINAL CTA
            ══════════════════════════════════════════ */}
            <section className="tn-cta-banner" aria-labelledby="s12-heading">
                <div className="tn-cta-banner__particles" aria-hidden="true">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="tn-cta-particle" style={{ '--j': i }} />
                    ))}
                </div>
                <div className="tn-container tn-cta-banner__inner">
                    <AnimSection className="tn-cta-banner__content">
                        <h2 id="s12-heading" className="tn-cta-banner__heading">
                            Looking for an IT Company in Tamil Nadu for Your Next Software Project?
                        </h2>
                        <p>
                            Whether you need a custom business application, web platform, mobile app or connected management system, the right solution begins with understanding your requirements.
                        </p>
                        <p>
                            FlyTowards Digital Innovation helps businesses across Tamil Nadu explore practical software development solutions, with particular attention to the needs of South Tamil Nadu organizations.
                        </p>
                        <div className="tn-cta-banner__btns">
                            <Link to="/contact" className="tn-btn tn-btn--yellow">
                                Discuss Your Software Project <ArrowRight size={16} />
                            </Link>
                            <Link to="/contact" className="tn-btn tn-btn--white-outline">
                                Request a Consultation
                            </Link>
                        </div>
                    </AnimSection>
                </div>
            </section>

        </main>
    );
};

export default TamilNadu;
