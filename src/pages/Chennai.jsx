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
    ClipboardList,
    Factory,
    HeartPulse,
    Truck,
    ShoppingBag,
    DollarSign,
    UserCircle2
} from 'lucide-react';
import './Chennai.css';

/* ─── Animation Variants ─────────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
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
        opacity: 1, scale: 1,
        transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' }
    })
};

/* ─── Animated Section Wrapper ───────────────────────────── */
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

/* ─── Counter Component ──────────────────────────────────── */
function CountUp({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = target / (1800 / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);
    return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════
   PAGE DATA
═══════════════════════════════════════════════════════════ */
const challenges = [
    { icon: Unlink,          title: 'Disconnected Business Systems',         desc: 'Separate applications for sales, finance, inventory and operations can make information sharing difficult.' },
    { icon: FileSpreadsheet, title: 'Manual & Repetitive Processes',          desc: 'Spreadsheet-based tracking, repeated data entry and manual approvals can increase administrative effort.' },
    { icon: Settings2,       title: 'Legacy Software Limitations',           desc: 'Older applications may be difficult to maintain, integrate or adapt to new business requirements.' },
    { icon: MessageSquareText, title: 'Complex Customer Workflows',          desc: 'Managing enquiries, service requests, customer information and communication across different channels can become challenging.' },
    { icon: Users,           title: 'Multi-Department Coordination',          desc: 'Businesses with several teams or locations may struggle to maintain consistent operational information.' },
    { icon: ShieldCheck,     title: 'Data Security & Integration Requirements', desc: 'Protecting business information and connecting software systems requires appropriate architecture, permissions and technical planning.' },
];

const solutions = [
    { icon: Code2,       title: 'Custom Software Development',    desc: 'Develop business applications for internal processes, information management, approvals and industry-specific workflows.' },
    { icon: Globe,       title: 'Web Application Development',    desc: 'Build browser-based platforms, administrative portals, customer dashboards and business management applications.' },
    { icon: Smartphone,  title: 'Mobile App Development',         desc: 'Create mobile applications for customers, employees, field teams and suitable business operations.' },
    { icon: Building2,   title: 'Enterprise Software Development', desc: 'Plan connected enterprise applications for departments, operational information and organizational workflows.' },
    { icon: Database,    title: 'ERP & CRM Development',          desc: 'Develop functionality for customer management, inventory, procurement, sales and other relevant business processes.' },
    { icon: Zap,         title: 'API Development & Business Automation', desc: 'Connect compatible applications and digitize selected workflows through supported integrations and automation.' },
];

const useCases = [
    { icon: Factory,         title: 'Manufacturing & Supply Chain Operations', desc: 'Manufacturing and automotive-related businesses may need applications for production planning, inventory visibility, procurement and supplier coordination.' },
    { icon: HeartPulse,      title: 'Healthcare Administration',               desc: 'Hospitals, clinics and healthcare service providers may require applications for appointments, patient administration, billing and authorized information access.' },
    { icon: Truck,           title: 'Logistics & Distribution Management',     desc: 'Logistics and distribution businesses may need systems for shipment records, dispatch coordination, inventory movements and operational reporting.' },
    { icon: ShoppingBag,     title: 'Retail & Customer Management',            desc: 'Retailers and service businesses may benefit from connected billing, stock management, customer records and sales workflows.' },
    { icon: DollarSign,      title: 'Finance & Administrative Processes',      desc: 'Organizations may need applications for budgets, expenses, approvals, financial reporting and departmental coordination.' },
    { icon: UserCircle2,     title: 'Employee & Business Service Portals',     desc: 'Businesses can use web and mobile portals to organize employee requests, internal services, customer interactions and authorized information access.' },
];

const benefits = [
    { title: 'Software Built Around Business Processes',   desc: 'Plan applications that reflect your organization\'s workflows, user responsibilities and information requirements.' },
    { title: 'Reduced Manual Administration',              desc: 'Digitize selected tasks, approvals and data entry processes to simplify everyday operations.' },
    { title: 'Better Information Accessibility',           desc: 'Provide authorized employees and managers with relevant information through structured applications.' },
    { title: 'Improved System Connectivity',               desc: 'Integrate compatible applications to support information sharing between departments and business functions.' },
    { title: 'Flexibility for Future Requirements',        desc: 'Plan software with maintainability, enhancements and future integration needs in mind.' },
];

const serviceLinks = [
    { icon: Code2,     title: 'Custom Software Development',    link: '/services/custom-software-development/' },
    { icon: Building2, title: 'Enterprise Software Development', link: '/services/enterprise-software-development/' },
    { icon: Globe,     title: 'Web Application Development',     link: '/services/web-application-development/' },
    { icon: Smartphone,title: 'Mobile App Development',          link: '/services/mobile-app-development/' },
    { icon: Link2,     title: 'API Development',                 link: '/services/api-development/' },
    { icon: Target,    title: 'Software Consulting',             link: '/services/software-consulting/' },
];

const steps = [
    { num: '01', title: 'Requirement Discovery',               desc: 'Understand your business challenges, users, existing workflows and project objectives.' },
    { num: '02', title: 'Business & Technical Assessment',     desc: 'Review existing applications, operational constraints, information requirements and potential integrations.' },
    { num: '03', title: 'Software Architecture & Planning',    desc: 'Define application modules, user roles, technical architecture, development priorities and project deliverables.' },
    { num: '04', title: 'UI/UX Design & Development',          desc: 'Design suitable interfaces and develop the agreed software functionality.' },
    { num: '05', title: 'Testing & Validation',                desc: 'Test application workflows, permissions, relevant integrations and agreed functional requirements.' },
    { num: '06', title: 'Deployment & Support Planning',       desc: 'Prepare the application for implementation, review data migration needs and define suitable maintenance arrangements.' },
];

const differentiators = [
    { num: '01', title: 'Requirements-Focused Development',    desc: 'We begin by identifying the business processes, users and information the application needs to support.' },
    { num: '02', title: 'Custom Software Planning',            desc: 'We consider project-specific requirements instead of assuming that every business needs the same application features.' },
    { num: '03', title: 'User Experience Considerations',      desc: 'We plan interfaces around relevant user roles, business activities and everyday application workflows.' },
    { num: '04', title: 'Integration & Implementation Planning', desc: 'We assess existing software environments, technical dependencies and deployment requirements as part of solution planning.' },
];

const areas = [
    { area: 'OMR & Sholinganallur',         desc: 'Businesses in and around Chennai\'s IT corridor may need enterprise applications, internal management platforms, customer portals and system integrations.' },
    { area: 'Guindy',                        desc: 'Commercial, technology and industrial businesses may require software for operational reporting, administration, inventory and customer management.' },
    { area: 'Ambattur',                      desc: 'Manufacturing and industrial businesses may need applications for production coordination, procurement, inventory tracking and operational workflows.' },
    { area: 'Sriperumbudur & Oragadam',      desc: 'Automotive, electronics and manufacturing-related businesses may require production information systems, supplier coordination tools and enterprise software integrations.' },
    { area: 'Central Chennai & Commercial Areas', desc: 'Professional services, healthcare organizations, retailers and other businesses may need customer management, appointment systems, billing and administrative applications.' },
];

const faqs = [
    { q: 'What services does a software company in Chennai provide?',               a: 'A software company in Chennai may provide custom software development, web and mobile application development, enterprise systems, software consulting, API integration, maintenance and business automation. Available services vary by provider.' },
    { q: 'How do I choose the right IT company in Chennai?',                        a: 'Define your business requirements and evaluate potential providers based on relevant technical capabilities, project planning, communication, security practices, pricing transparency, maintenance options and contractual terms.' },
    { q: 'Does FlyTowards provide custom software development for Chennai businesses?', a: 'FlyTowards offers custom software development solutions for businesses targeting Chennai and the wider Tamil Nadu market. Projects are assessed according to requirements, technical feasibility and agreed scope.' },
    { q: 'How much does software development cost in Chennai?',                     a: 'Costs depend on application complexity, required features, number of users, integrations, design requirements, security needs and maintenance arrangements. A requirements assessment helps establish an appropriate estimate.' },
    { q: 'What industries can benefit from software development in Chennai?',       a: 'Manufacturing, healthcare, logistics, retail, finance, education, hospitality and professional services are among the industries that may benefit from custom business applications and connected workflows.' },
    { q: 'Can a software company develop ERP and CRM applications?',                a: 'Yes. Software development providers may build or customize ERP and CRM functionality for customer records, inventory, procurement, sales, approvals and business reporting. The appropriate approach depends on organizational requirements.' },
    { q: 'Can existing software be integrated with a new application?',             a: 'Integration may be possible through compatible APIs, supported data exchange methods or authorized system connections. Feasibility depends on the existing software and technical requirements.' },
    { q: 'What should businesses prepare before starting a software development project?', a: 'Businesses should identify the problem they want to solve, the users involved, important workflows, existing applications, required integrations, expected outcomes and approximate budget. These details support more productive project discussions.' },
];

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
const Chennai = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Software Company in Chennai – Custom Software Development | FlyTowards';

        const setMeta = (name, content) => {
            let el = document.querySelector(`meta[name="${name}"]`);
            if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
            el.setAttribute('content', content);
        };

        setMeta('description', 'Looking for a software company in Chennai? FlyTowards Digital Innovation provides custom software development, web & mobile apps, enterprise systems and business automation for Chennai businesses.');
        setMeta('keywords', 'software company chennai, it companies chennai tamil nadu, software development chennai, software services chennai, it company chennai');
        setMeta('robots', 'index, follow');

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
        canonical.href = 'https://flytowardsdigitalinnovation.com/locations/chennai/';

        const schemaId = 'chennai-schema-script';
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
                    '@id': 'https://flytowardsdigitalinnovation.com/locations/chennai/#webpage',
                    name: 'Software Company in Chennai – Custom Software Development | FlyTowards',
                    url: 'https://flytowardsdigitalinnovation.com/locations/chennai/',
                    description: 'FlyTowards Digital Innovation provides custom software development and IT solutions for businesses in Chennai.',
                    inLanguage: 'en',
                    isPartOf: { '@id': 'https://flytowardsdigitalinnovation.com/#website' }
                },
                {
                    '@type': 'Service',
                    name: 'Software Development Services in Chennai',
                    provider: { '@type': 'Organization', name: 'FlyTowards Digital Innovation', url: 'https://flytowardsdigitalinnovation.com/' },
                    areaServed: [
                        { '@type': 'City', name: 'Chennai' },
                        { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }
                    ],
                    serviceType: 'Custom Software Development'
                },
                {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
                        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://flytowardsdigitalinnovation.com/locations/' },
                        { '@type': 'ListItem', position: 3, name: 'Chennai', item: 'https://flytowardsdigitalinnovation.com/locations/chennai/' }
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
        <main className="ch-page">

            {/* ══════════════════════════════════════
                SECTION 01 — HERO
            ══════════════════════════════════════ */}
            <section className="ch-hero" aria-label="Chennai Software Development Hero">
                <div className="ch-hero__particles" aria-hidden="true">
                    {[...Array(18)].map((_, i) => (
                        <span key={i} className={`ch-particle ch-particle--${i % 3}`} style={{ '--i': i }} />
                    ))}
                </div>

                <div className="ch-container ch-hero__inner">
                    {/* Left column */}
                    <div className="ch-hero__content">
                        <motion.span
                            className="ch-tag"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MapPin size={14} /> Chennai &nbsp;·&nbsp; Software Development
                        </motion.span>

                        <motion.h1
                            className="ch-hero__heading"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            Software Company in Chennai –&nbsp;
                            <span className="ch-highlight">Custom Software</span>
                            &nbsp;Development Solutions
                        </motion.h1>

                        <motion.p
                            className="ch-hero__sub"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Custom Applications, Enterprise Systems and Digital Solutions for Chennai Businesses
                        </motion.p>

                        <motion.p
                            className="ch-hero__desc"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Looking for a software company in Chennai to develop custom applications, modernize business processes or connect existing systems? The right software should address your operational requirements, not simply add more technology. FlyTowards Digital Innovation provides custom software development, web and mobile application solutions for businesses in Chennai and across Tamil Nadu.
                        </motion.p>

                        <motion.div
                            className="ch-hero__ctas"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link to="/contact" className="ch-btn ch-btn--primary">
                                Discuss Your Software Project <ArrowRight size={16} />
                            </Link>
                            <Link to="/services" className="ch-btn ch-btn--outline">
                                Explore Our Software Services
                            </Link>
                        </motion.div>

                    </div>

                    {/* Right column — dashboard visual */}
                    <motion.div
                        className="ch-hero__visual"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        aria-hidden="true"
                    >
                        <div className="ch-dashboard">
                            <div className="ch-dashboard__bar">
                                <span /><span /><span />
                            </div>
                            <div className="ch-dashboard__body">
                                {/* KPI row */}
                                <div className="ch-dashboard__kpis">
                                    {[
                                        { label: 'Custom Apps', val: '12+', color: '#FACC15' },
                                        { label: 'Integrations', val: '8+',  color: '#1e40af' },
                                        { label: 'Uptime',       val: '99%', color: '#10B981' },
                                    ].map((k, i) => (
                                        <motion.div
                                            key={i} className="ch-kpi"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + i * 0.15 }}
                                        >
                                            <span className="ch-kpi__val" style={{ color: k.color }}>{k.val}</span>
                                            <span className="ch-kpi__label">{k.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                {/* Animated chart */}
                                <div className="ch-dashboard__chart">
                                    {[55, 72, 60, 88, 65, 92, 78].map((h, i) => (
                                        <motion.div
                                            key={i} className="ch-bar"
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                                            style={{ height: `${h}%`, '--bar-color': i === 5 ? '#FACC15' : '#1e3a8a' }}
                                        />
                                    ))}
                                </div>
                                {/* Activity feed */}
                                <div className="ch-dashboard__feed">
                                    {['CRM Module live', 'API sync complete', 'Report generated'].map((t, i) => (
                                        <motion.div
                                            key={i} className="ch-feed-item"
                                            initial={{ opacity: 0, x: -15 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1 + i * 0.15 }}
                                        >
                                            <span className="ch-feed-dot" />
                                            <span>{t}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                {/* Module pills */}
                                <div className="ch-dashboard__modules">
                                    {['ERP', 'CRM', 'API', 'Mobile', 'Web'].map((m, i) => (
                                        <motion.span
                                            key={i} className="ch-module-pill"
                                            initial={{ opacity: 0, scale: 0.7 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.1 + i * 0.08 }}
                                        >{m}</motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="ch-hero__wave" aria-hidden="true">
                    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SECTION 02 — IT SERVICES OVERVIEW
            ══════════════════════════════════════ */}
            <section className="ch-section ch-services-overview" aria-labelledby="s02-heading">
                <div className="ch-container ch-services-overview__inner">
                    <AnimSection variant={fadeLeft} className="ch-services-overview__text">
                        <span className="ch-tag ch-tag--light">IT Services</span>
                        <h2 id="s02-heading" className="ch-section__heading">
                            IT Services & Software Solutions by FlyTowards in Chennai
                        </h2>
                        <p>FlyTowards Digital Innovation provides software development and IT solutions for businesses in Chennai, Tamil Nadu.</p>
                        <p>Our services focus on custom software development, web and mobile applications, enterprise software and system integration to help businesses streamline operations, improve workflows and support digital growth.</p>
                    </AnimSection>

                    <div className="ch-services-overview__icons">
                        {[
                            { icon: Code2,            title: 'Custom Software Development',  desc: 'Tailored software solutions for specific business needs.' },
                            { icon: MonitorSmartphone, title: 'Web & Mobile App Development', desc: 'Websites and applications for customers and business operations.' },
                            { icon: Building2,         title: 'Enterprise Software Solutions', desc: 'Software systems for managing business processes and data.' },
                            { icon: Link2,             title: 'Software Integration',          desc: 'Connecting compatible business applications for smoother workflows.' },
                        ].map((item, i) => (
                            <AnimSection key={i} delay={i} className="ch-icon-highlight">
                                <div className="ch-icon-highlight__icon"><item.icon size={26} strokeWidth={1.6} /></div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </AnimSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SECTION 03 — CHALLENGES
            ══════════════════════════════════════ */}
            <section className="ch-section ch-challenges" aria-labelledby="s03-heading">
                <div className="ch-container">
                    <AnimSection className="ch-section__header">
                        <span className="ch-tag ch-tag--light">Challenges</span>
                        <h2 id="s03-heading" className="ch-section__heading">
                            Common Software Challenges Faced by Chennai Businesses
                        </h2>
                        <p className="ch-section__sub">
                            Growing businesses often need technology that can support increasing operational complexity, multiple departments and changing customer expectations.
                        </p>
                    </AnimSection>

                    <div className="ch-challenges__grid">
                        {challenges.map((item, i) => (
                            <motion.div
                                key={i} className="ch-challenge-card"
                                variants={scaleIn} initial="hidden"
                                whileInView="visible" viewport={{ once: true, margin: '-60px' }}
                                custom={i} whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            >
                                <div className="ch-challenge-card__icon"><item.icon size={22} strokeWidth={1.7} /></div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SECTION 04 — SOLUTIONS
            ══════════════════════════════════════ */}
            <section className="ch-section ch-solutions" aria-labelledby="s04-heading">
                <div className="ch-container">
                    <AnimSection className="ch-section__header">
                        <span className="ch-tag ch-tag--yellow">Solutions</span>
                        <h2 id="s04-heading" className="ch-section__heading ch-section__heading--light">
                            Custom Software Development Services in Chennai
                        </h2>
                        <p className="ch-section__sub ch-section__sub--light">
                            FlyTowards provides software development solutions for organizations seeking applications tailored to their operational requirements.
                        </p>
                    </AnimSection>

                    <div className="ch-solutions__grid">
                        {solutions.map((item, i) => (
                            <motion.div
                                key={i} className="ch-solution-card"
                                variants={fadeUp} initial="hidden"
                                whileInView="visible" viewport={{ once: true, margin: '-60px' }}
                                custom={i} whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            >
                                <div className="ch-solution-card__icon"><item.icon size={28} strokeWidth={1.5} /></div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="ch-solution-card__line" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SECTION 05 — USE CASES (TABS)
            ══════════════════════════════════════ */}
            <section className="ch-section ch-usecases" aria-labelledby="s05-heading">
                <div className="ch-container">
                    <AnimSection className="ch-section__header">
                        <span className="ch-tag ch-tag--light">Use Cases</span>
                        <h2 id="s05-heading" className="ch-section__heading">
                            How Custom Software Supports Chennai Business Operations
                        </h2>
                        <p className="ch-section__sub">
                            Chennai businesses operate across diverse industries, making workflow-specific software planning important.
                        </p>
                    </AnimSection>

                    <div className="ch-tabs" role="tablist" aria-label="Business use cases">
                        {useCases.map((item, i) => (
                            <button
                                key={i} role="tab"
                                aria-selected={activeTab === i}
                                className={`ch-tab${activeTab === i ? ' ch-tab--active' : ''}`}
                                onClick={() => setActiveTab(i)}
                            >
                                <item.icon size={15} /> {item.title}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab} className="ch-usecase-panel" role="tabpanel"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}
                        >
                            {(() => {
                                const item = useCases[activeTab];
                                return (
                                    <>
                                        <div className="ch-usecase-panel__icon"><item.icon size={36} strokeWidth={1.4} /></div>
                                        <div><h3>{item.title}</h3><p>{item.desc}</p></div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </AnimatePresence>

                    {/* Workflow strip */}
                    <AnimSection delay={2} className="ch-workflow">
                        <p className="ch-workflow__label">Development Workflow</p>
                        <div className="ch-workflow__steps">
                            {['Business Requirement', 'Workflow Assessment', 'Software Planning', 'Development', 'Testing', 'Deployment', 'Support Planning'].map((s, i, arr) => (
                                <span key={i} className="ch-workflow__item">
                                    <span className="ch-workflow__step">{s}</span>
                                    {i < arr.length - 1 && <ArrowRight size={14} className="ch-workflow__arrow" />}
                                </span>
                            ))}
                        </div>
                        <p className="ch-workflow__note">The functionality, integrations and implementation approach depend on the agreed project requirements.</p>
                    </AnimSection>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SECTION 06 — BENEFITS
            ══════════════════════════════════════ */}
            <section className="ch-section ch-benefits" aria-labelledby="s06-heading">
                <div className="ch-container ch-benefits__inner">
                    <AnimSection variant={fadeLeft} className="ch-benefits__visual">
                        <div className="ch-benefits__visual-card">
                            <div className="ch-benefits__visual-icon"><Cpu size={48} strokeWidth={1.3} /></div>
                            <p className="ch-benefits__visual-label">Custom Software for Chennai Businesses</p>
                            <div className="ch-benefits__visual-dots">
                                {['Strategy', 'Design', 'Development', 'Support'].map((l, i) => (
                                    <motion.span
                                        key={i} className="ch-dot-pill"
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.12 }}
                                    >{l}</motion.span>
                                ))}
                            </div>
                            {/* Decorative metrics */}
                            <div className="ch-benefits__visual-metrics">
                                {[
                                    { label: 'Faster Workflows', val: '↑ 40%' },
                                    { label: 'Manual Tasks Reduced', val: '↓ 60%' },
                                ].map((m, i) => (
                                    <div key={i} className="ch-metric">
                                        <span className="ch-metric__val">{m.val}</span>
                                        <span className="ch-metric__label">{m.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimSection>

                    <div className="ch-benefits__list">
                        <AnimSection variant={fadeRight} className="ch-section__header ch-section__header--left">
                            <span className="ch-tag ch-tag--light">Benefits</span>
                            <h2 id="s06-heading" className="ch-section__heading">
                                Benefits of Custom Software Development for Chennai Businesses
                            </h2>
                            <p className="ch-section__sub">
                                Custom software can help organizations address specific operational requirements and reduce dependence on disconnected tools.
                            </p>
                        </AnimSection>

                        {benefits.map((b, i) => (
                            <motion.div
                                key={i} className="ch-benefit-row"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <CheckCircle2 size={20} className="ch-benefit-row__icon" />
                                <div><h3>{b.title}</h3><p>{b.desc}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SECTION 07 — SERVICE TILES
            ══════════════════════════════════════ */}
            <section className="ch-section ch-service-tiles" aria-labelledby="s07-heading">
                <div className="ch-container">
                    <AnimSection className="ch-section__header">
                        <span className="ch-tag ch-tag--light">Our Services</span>
                        <h2 id="s07-heading" className="ch-section__heading">
                            Explore FlyTowards Software Services for Chennai Businesses
                        </h2>
                    </AnimSection>

                    <div className="ch-service-tiles__grid">
                        {serviceLinks.map((item, i) => (
                            <motion.div
                                key={i} variants={scaleIn} initial="hidden"
                                whileInView="visible" viewport={{ once: true }}
                                custom={i} whileHover={{ y: -6 }}
                            >
                                <Link to={item.link} className="ch-service-tile">
                                    <div className="ch-service-tile__icon"><item.icon size={24} strokeWidth={1.6} /></div>
                                    <span>{item.title}</span>
                                    <ArrowRight size={15} className="ch-service-tile__arrow" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SECTION 08 — APPROACH / TIMELINE
            ══════════════════════════════════════ */}
            <section className="ch-section ch-approach" aria-labelledby="s08-heading">
                <div className="ch-container">
                    <AnimSection className="ch-section__header">
                        <span className="ch-tag ch-tag--yellow">Our Approach</span>
                        <h2 id="s08-heading" className="ch-section__heading ch-section__heading--light">
                            Our Software Development Process for Chennai Businesses
                        </h2>
                        <p className="ch-section__sub ch-section__sub--light">
                            A structured development process helps connect software decisions with business requirements.
                        </p>
                    </AnimSection>

                    <div className="ch-timeline">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i} className="ch-timeline__item"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                            >
                                <div className="ch-timeline__connector">
                                    <div className="ch-timeline__dot"><span>{step.num}</span></div>
                                    {i < steps.length - 1 && <div className="ch-timeline__line" />}
                                </div>
                                <div className="ch-timeline__content">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SECTION 09 — WHY FLYTOWARDS
            ══════════════════════════════════════ */}
            <section className="ch-section ch-why" aria-labelledby="s09-heading">
                <div className="ch-container ch-why__inner">
                    <AnimSection variant={fadeLeft} className="ch-why__text">
                        <span className="ch-tag ch-tag--light">Why FlyTowards</span>
                        <h2 id="s09-heading" className="ch-section__heading">
                            Why Consider FlyTowards When Choosing a Software Company in Chennai?
                        </h2>
                        <p>Choosing a software development provider involves more than comparing technology stacks or service lists.</p>
                        <p>Businesses need a development approach that considers operational requirements, usability, integration feasibility and clear project expectations.</p>
                        <p>FlyTowards focuses on understanding business workflows before defining software functionality.</p>
                        <Link to="/contact" className="ch-btn ch-btn--primary ch-btn--mt">
                            Discuss Your Software Requirements with FlyTowards <ArrowRight size={16} />
                        </Link>
                    </AnimSection>

                    <div className="ch-why__differentiators">
                        {differentiators.map((d, i) => (
                            <motion.div
                                key={i} className="ch-differentiator"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.5 }}
                            >
                                <span className="ch-differentiator__num">{d.num}</span>
                                <div><h3>{d.title}</h3><p>{d.desc}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SECTION 10 — CHENNAI BUSINESS AREAS
            ══════════════════════════════════════ */}
            <section className="ch-section ch-regional" aria-labelledby="s10-heading">
                <div className="ch-container">
                    <AnimSection className="ch-section__header">
                        <span className="ch-tag ch-tag--yellow">Chennai Areas</span>
                        <h2 id="s10-heading" className="ch-section__heading ch-section__heading--light">
                            Software Development Solutions for Chennai's Business Ecosystem
                        </h2>
                        <p className="ch-section__sub ch-section__sub--light">
                            Chennai's business environment includes established enterprises, growing companies, technology-driven organizations and businesses managing complex operational processes. Different parts of the Chennai metropolitan area have distinct commercial and industrial characteristics.
                        </p>
                    </AnimSection>

                    <div className="ch-regional__grid">
                        {areas.map((r, i) => (
                            <motion.div
                                key={i} className="ch-regional-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="ch-regional-card__header">
                                    <MapPin size={16} /><strong>{r.area}</strong>
                                </div>
                                <p>{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <AnimSection delay={3} className="ch-regional__footer">
                        <p>
                            FlyTowards provides software development solutions for Chennai businesses seeking custom applications, connected workflows and practical technology planning. Our wider service focus also includes organizations across Tamil Nadu, particularly{' '}
                            <Link to="/locations/tamilnadu/" className="ch-regional__link">South Tamil Nadu</Link>.
                        </p>
                        <p className="ch-regional__disclaimer">
                            These area references describe relevant business environments and potential software needs. They do not indicate FlyTowards office locations or completed projects.
                        </p>
                    </AnimSection>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SECTION 11 — FAQs
            ══════════════════════════════════════ */}
            <section className="ch-section ch-faqs" aria-labelledby="s11-heading">
                <div className="ch-container">
                    <AnimSection className="ch-section__header">
                        <span className="ch-tag ch-tag--light">FAQs</span>
                        <h2 id="s11-heading" className="ch-section__heading">
                            Frequently Asked Questions About Software Companies in Chennai
                        </h2>
                    </AnimSection>

                    <div className="ch-faqs__grid">
                        {faqs.map((faq, i) => (
                            <AnimSection key={i} delay={i * 0.05} className="ch-faq-item">
                                <button
                                    className={`ch-faq-item__btn${openFaq === i ? ' ch-faq-item__btn--open' : ''}`}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                    aria-controls={`ch-faq-answer-${i}`}
                                >
                                    <span>{faq.q}</span>
                                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            id={`ch-faq-answer-${i}`}
                                            className="ch-faq-item__answer"
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

            {/* ══════════════════════════════════════
                SECTION 12 — FINAL CTA
            ══════════════════════════════════════ */}
            <section className="ch-cta-banner" aria-labelledby="s12-heading">
                <div className="ch-cta-banner__particles" aria-hidden="true">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="ch-cta-particle" style={{ '--j': i }} />
                    ))}
                </div>
                <div className="ch-container ch-cta-banner__inner">
                    <AnimSection className="ch-cta-banner__content">
                        <h2 id="s12-heading" className="ch-cta-banner__heading">
                            Looking for a Software Development Partner for Your Chennai Business?
                        </h2>
                        <p>
                            Whether you need a custom business application, web platform, mobile app or connected enterprise system, a successful project begins with clear requirements and practical technical planning.
                        </p>
                        <p>
                            FlyTowards Digital Innovation helps businesses in Chennai and across Tamil Nadu explore software solutions aligned with their operational needs.
                        </p>
                        <div className="ch-cta-banner__btns">
                            <Link to="/contact" className="ch-btn ch-btn--yellow">
                                Discuss Your Software Project <ArrowRight size={16} />
                            </Link>
                            <Link to="/contact" className="ch-btn ch-btn--white-outline">
                                Request a Consultation
                            </Link>
                        </div>
                    </AnimSection>
                </div>
            </section>

        </main>
    );
};

export default Chennai;
