import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    ArrowRight, Code2, Globe, Smartphone, Database, Zap, Link2,
    CheckCircle2, ChevronDown, ChevronUp, BarChart3, ShieldCheck,
    FileSpreadsheet, Settings2, Users, MapPin, MonitorSmartphone,
    Building2, Target, PieChart, Cpu, PackageCheck, MessageSquareText,
    ClipboardList, Factory, HeartPulse, ShoppingBag, GraduationCap,
    Boxes, Receipt, TrendingUp, Layers, Truck, AlertCircle
} from 'lucide-react';
import './Tirunelveli.css';

/* ─── Variants ───────────────────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } })
};
const fadeLeft  = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } };
const fadeRight = { hidden: { opacity: 0, x: 50  }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } };
const scaleIn   = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' } })
};

function AnimSection({ children, className = '', delay = 0, variant = fadeUp }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <motion.div ref={ref} variants={variant} initial="hidden"
            animate={inView ? 'visible' : 'hidden'} custom={delay} className={className}>
            {children}
        </motion.div>
    );
}

function CountUp({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        let n = 0; const step = target / (1800 / 16);
        const t = setInterval(() => {
            n += step; if (n >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(n));
        }, 16);
        return () => clearInterval(t);
    }, [inView, target]);
    return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Data ───────────────────────────────────────────────── */
const challenges = [
    { icon: FileSpreadsheet,   title: 'Manual Business Processes',              desc: 'Paper records, spreadsheets and repeated data entry can increase administrative effort across departments.' },
    { icon: Layers,            title: 'Disconnected Business Applications',     desc: 'Separate systems for sales, inventory, finance and customer management can make information sharing difficult.' },
    { icon: Boxes,             title: 'Inventory & Procurement Challenges',     desc: 'Businesses may struggle to maintain consistent stock, purchase and supplier information.' },
    { icon: BarChart3,         title: 'Limited Operational Reporting',          desc: 'Managers may need clearer visibility into sales, expenses, inventory and departmental activities.' },
    { icon: MessageSquareText, title: 'Customer & Employee Coordination',       desc: 'Managing enquiries, service requests, employee tasks and approvals manually can complicate daily operations.' },
    { icon: Settings2,         title: 'Outdated Software & Integration Limits', desc: 'Existing applications may not support changing workflows, new functionality or integration with other business systems.' },
];

const solutions = [
    { icon: Code2,      title: 'Custom Business Software',              desc: 'Develop applications for business administration, information management, approvals and industry-specific workflows.' },
    { icon: Globe,      title: 'Web Application Development',           desc: 'Create browser-based business portals, management dashboards, customer platforms and administrative systems.' },
    { icon: Smartphone, title: 'Mobile App Development',                desc: 'Build mobile applications for customers, employees, field teams and suitable business activities.' },
    { icon: Database,   title: 'ERP & CRM Software Development',        desc: 'Plan connected applications for inventory, procurement, customer records, sales and organizational workflows.' },
    { icon: Receipt,    title: 'Billing & Inventory Management Software',desc: 'Develop applications for sales transactions, product records, purchase information, stock tracking and reporting.' },
    { icon: Zap,        title: 'API Integration & Business Automation',  desc: 'Connect compatible applications and digitize selected business processes through supported technical integrations.' },
];

const useCases = [
    { icon: Factory,       title: 'Manufacturing & Production Management',   desc: 'Manufacturing businesses can use software to organize material information, production activities, inventory movements and procurement workflows.' },
    { icon: ShoppingBag,   title: 'Retail Billing & Stock Management',       desc: 'Retailers and trading businesses can maintain product information, record sales, monitor inventory and organize purchase transactions.' },
    { icon: HeartPulse,    title: 'Healthcare & Clinic Administration',       desc: 'Hospitals and clinics may need applications for appointments, patient administration, billing and controlled access to healthcare information.' },
    { icon: GraduationCap, title: 'School & College Management',             desc: 'Educational institutions can use applications for student admissions, attendance, academic records, fee management and administration.' },
    { icon: Truck,         title: 'Logistics & Distribution Coordination',   desc: 'Distribution and transport-related businesses may need software for dispatch information, delivery tracking, inventory records and operational reporting.' },
    { icon: Users,         title: 'Customer Relationship & Service Management', desc: 'Service providers can organize customer enquiries, appointments, follow-ups, work assignments and service-related information.' },
];

const benefits = [
    { title: 'Simplify Daily Operations',              desc: 'Use structured applications for billing, inventory, administration and other business activities.' },
    { title: 'Reduce Repetitive Manual Work',          desc: 'Digitize selected approvals, data entry tasks and information updates.' },
    { title: 'Improve Business Information Visibility',desc: 'Provide authorized employees and managers with relevant operational information through dashboards and reports.' },
    { title: 'Connect Business Departments',           desc: 'Integrate compatible applications to support more consistent information sharing between teams.' },
    { title: 'Support Changing Business Requirements', desc: 'Plan software that can be maintained and enhanced as organizational processes evolve.' },
];

const serviceLinks = [
    { icon: Code2,      title: 'Custom Software Development', desc: 'Develop business applications around specific operational requirements and workflows.', link: '/services/custom-software-development/' },
    { icon: Globe,      title: 'Web Application Development', desc: 'Create browser-based management applications, business portals and customer platforms.', link: '/services/web-application-development/' },
    { icon: Smartphone, title: 'Mobile App Development',      desc: 'Develop mobile applications for business operations, employees and customer interactions.', link: '/services/mobile-app-development/' },
    { icon: Database,   title: 'ERP Development',             desc: 'Plan connected software functionality for inventory, procurement and organizational processes.', link: '/services/erp-development/' },
    { icon: Building2,  title: 'CRM Development',             desc: 'Build applications for managing customer records, enquiries, follow-ups and service workflows.', link: '/services/crm-development/' },
    { icon: Target,     title: 'Software Consulting',         desc: 'Assess business requirements, existing systems and suitable technical approaches before development.', link: '/services/software-consulting/' },
];

const steps = [
    { num: '01', title: 'Business Requirement Discovery',   desc: 'Understand your business activities, existing challenges, users and project objectives.' },
    { num: '02', title: 'Workflow & Technical Assessment',  desc: 'Review current processes, existing applications, information requirements and integration possibilities.' },
    { num: '03', title: 'Software Architecture & Planning', desc: 'Define application modules, user roles, technical architecture, development priorities and deliverables.' },
    { num: '04', title: 'UI/UX Design & Development',       desc: 'Design appropriate interfaces and develop the agreed software functionality.' },
    { num: '05', title: 'Testing & Validation',             desc: 'Test application workflows, calculations, permissions and supported integrations.' },
    { num: '06', title: 'Deployment & Support Planning',    desc: 'Prepare the application for implementation, review data migration requirements and establish suitable maintenance arrangements.' },
];

const differentiators = [
    { num: '01', title: 'Business-Focused Requirement Planning', desc: 'We begin by understanding the processes and information your organization needs to manage.' },
    { num: '02', title: 'Custom Software Functionality',          desc: 'We consider application features based on business requirements rather than relying on a one-size-fits-all approach.' },
    { num: '03', title: 'Practical User Experience',              desc: 'We plan interfaces around relevant user roles and everyday business activities.' },
    { num: '04', title: 'Integration & Implementation Planning',  desc: 'We assess existing applications, technical dependencies and suitable deployment requirements.' },
];

const regionalAreas = [
    { area: 'Palayamkottai',              desc: 'Educational institutions, healthcare providers and professional services may require applications for student records, appointments, administration and customer management.' },
    { area: 'Pettai',                     desc: 'Industrial and trading businesses may need software for inventory, procurement, production-related information and operational reporting.' },
    { area: 'Tirunelveli Town & Commercial Areas', desc: 'Retailers, wholesalers and service businesses may benefit from billing, stock management, customer records and business reporting applications.' },
    { area: 'Gangaikondan Industrial Area',desc: 'Manufacturing and industrial operations may require production information systems, material tracking, supplier coordination and enterprise software workflows.' },
    { area: 'Nearby South Tamil Nadu Markets', desc: 'Businesses in Ambasamudram, Valliyur, Nanguneri, Tenkasi and surrounding areas may have requirements for business administration, inventory, customer management and industry-specific applications.' },
];

const faqs = [
    { q: 'What services does an IT company in Tirunelveli provide?',           a: 'An IT company serving Tirunelveli may offer custom software development, web and mobile application development, enterprise systems, ERP and CRM applications, software consulting, technical integration and maintenance services. Actual offerings vary by provider.' },
    { q: 'How can I find a reliable software company in Tirunelveli?',         a: 'Start by identifying your software requirements. Evaluate providers based on relevant technical capabilities, project planning, communication, security practices, pricing transparency and maintenance arrangements.' },
    { q: 'Where can I find a Tirunelveli IT companies list?',                  a: 'You can explore business directories, official company websites, industry association resources and relevant technology-sector listings. Verify company details, service capabilities and current availability before making a shortlist.' },
    { q: 'How do I compare the top software companies in Tirunelveli?',        a: 'Compare companies using criteria such as relevant project experience, technical expertise, development processes, communication, contractual clarity and support options. Avoid relying solely on promotional rankings or unverified reviews.' },
    { q: 'Does FlyTowards provide software development services for Tirunelveli businesses?', a: 'FlyTowards offers custom software development solutions for businesses in Tirunelveli and South Tamil Nadu. Projects are evaluated based on operational requirements, technical feasibility and agreed scope.' },
    { q: 'How much does custom software development cost in Tirunelveli?',     a: 'Costs depend on application complexity, number of features, users, integrations, security requirements, design needs and maintenance arrangements. A requirements assessment helps determine an appropriate estimate.' },
    { q: 'Can FlyTowards develop billing, inventory and ERP software?',        a: 'FlyTowards can assess requirements for custom billing, inventory and ERP-related applications. Potential functionality includes sales records, stock management, procurement workflows and business reporting, subject to agreed project scope.' },
    { q: 'Can existing business applications be integrated with new software?', a: 'Integration may be possible through compatible APIs, supported data exchange methods or authorized system connections. Feasibility depends on the existing software and technical requirements.' },
];

/* ─── Component ─────────────────────────────────────────── */
const Tirunelveli = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'IT Company in Tirunelveli – Custom Software Development | FlyTowards';

        const setMeta = (name, content) => {
            let el = document.querySelector(`meta[name="${name}"]`);
            if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
            el.setAttribute('content', content);
        };
        setMeta('description', 'Looking for an IT company in Tirunelveli? FlyTowards Digital Innovation provides custom software, web & mobile apps, ERP, CRM and business automation for manufacturers, retailers, healthcare providers and businesses across Tirunelveli and South Tamil Nadu.');
        setMeta('keywords', 'it company tirunelveli, tirunelveli it companies list, software company tirunelveli, top software companies in tirunelveli, software development tirunelveli, it services tirunelveli');
        setMeta('robots', 'index, follow');

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
        canonical.href = 'https://flytowardsdigitalinnovation.com/locations/tirunelveli/';

        const schemaId = 'tvl-schema-script';
        let ss = document.getElementById(schemaId);
        if (!ss) { ss = document.createElement('script'); ss.id = schemaId; ss.type = 'application/ld+json'; document.head.appendChild(ss); }
        ss.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'WebPage',
                    '@id': 'https://flytowardsdigitalinnovation.com/locations/tirunelveli/#webpage',
                    name: 'IT Company in Tirunelveli – Custom Software Development | FlyTowards',
                    url: 'https://flytowardsdigitalinnovation.com/locations/tirunelveli/',
                    description: 'FlyTowards provides custom software development, web and mobile apps, ERP, CRM and business automation for businesses in Tirunelveli and South Tamil Nadu.',
                    inLanguage: 'en',
                },
                {
                    '@type': 'Service',
                    name: 'IT Services & Software Development in Tirunelveli',
                    provider: { '@type': 'Organization', name: 'FlyTowards Digital Innovation', url: 'https://flytowardsdigitalinnovation.com/' },
                    areaServed: [
                        { '@type': 'City', name: 'Tirunelveli' },
                        { '@type': 'AdministrativeArea', name: 'South Tamil Nadu' },
                        { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }
                    ],
                    serviceType: 'Custom Software Development'
                },
                {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
                        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://flytowardsdigitalinnovation.com/locations/' },
                        { '@type': 'ListItem', position: 3, name: 'Tirunelveli', item: 'https://flytowardsdigitalinnovation.com/locations/tirunelveli/' }
                    ]
                },
                {
                    '@type': 'FAQPage',
                    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
                }
            ]
        });
        return () => { const s = document.getElementById(schemaId); if (s) s.remove(); };
    }, []);

    return (
        <main className="tvl-page">

            {/* ══ SECTION 01 — HERO ═══════════════════════════════ */}
            <section className="tvl-hero" aria-label="Tirunelveli IT Company Hero">
                <div className="tvl-hero__particles" aria-hidden="true">
                    {[...Array(18)].map((_, i) => <span key={i} className={`tvl-particle tvl-particle--${i % 3}`} style={{ '--i': i }} />)}
                </div>

                <div className="tvl-container tvl-hero__inner">
                    <div className="tvl-hero__content">
                        <motion.span className="tvl-tag" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <MapPin size={14} /> Tirunelveli &nbsp;·&nbsp; South Tamil Nadu
                        </motion.span>

                        <motion.h1 className="tvl-hero__heading" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                            IT Company in Tirunelveli –&nbsp;
                            <span className="tvl-highlight">Custom Software</span>
                            &nbsp;Development Solutions
                        </motion.h1>

                        <motion.p className="tvl-hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            Practical Software, Web Applications and Digital Solutions for Growing Businesses
                        </motion.p>

                        <motion.p className="tvl-hero__desc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                            Looking for an IT company in Tirunelveli to develop custom software, simplify business operations or connect existing applications? FlyTowards Digital Innovation provides software development solutions for manufacturers, retailers, healthcare providers, educational institutions and growing businesses across Tirunelveli and South Tamil Nadu.
                        </motion.p>

                        <motion.div className="tvl-hero__ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <Link to="/contact" className="tvl-btn tvl-btn--primary">Discuss Your Software Project <ArrowRight size={16} /></Link>
                            <Link to="/services" className="tvl-btn tvl-btn--outline">Explore Our IT Services</Link>
                        </motion.div>

                    </div>

                    {/* Right — Business Dashboard */}
                    <motion.div className="tvl-hero__visual" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} aria-hidden="true">
                        <div className="tvl-dashboard">
                            <div className="tvl-dashboard__bar"><span /><span /><span /></div>
                            <div className="tvl-dashboard__body">
                                {/* KPI Row */}
                                <div className="tvl-db-label">Business Overview</div>
                                <div className="tvl-db-row">
                                    {[
                                        { label: 'Revenue',  val: '₹1.2L', color: '#FACC15' },
                                        { label: 'Orders',   val: '284',   color: '#10B981' },
                                        { label: 'Clients',  val: '56',    color: '#60a5fa' },
                                    ].map((k, i) => (
                                        <motion.div key={i} className="tvl-kpi"
                                            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + i * 0.15 }}>
                                            <span className="tvl-kpi__val" style={{ color: k.color }}>{k.val}</span>
                                            <span className="tvl-kpi__label">{k.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                {/* Chart */}
                                <div className="tvl-db-label" style={{ marginTop: '0.9rem' }}>Monthly Performance</div>
                                <div className="tvl-dashboard__chart">
                                    {[42, 60, 55, 72, 65, 88, 78, 92, 70, 85, 76, 95].map((h, i) => (
                                        <motion.div key={i} className="tvl-bar"
                                            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                                            transition={{ delay: 0.8 + i * 0.06, duration: 0.5 }}
                                            style={{ height: `${h}%`, '--bar-color': i === 11 ? '#FACC15' : '#1e3a8a' }} />
                                    ))}
                                </div>
                                {/* Department pills */}
                                <div className="tvl-db-label" style={{ marginTop: '0.9rem' }}>Departments</div>
                                <div className="tvl-dashboard__modules">
                                    {['Sales', 'Inventory', 'HR', 'Finance', 'CRM'].map((m, i) => (
                                        <motion.span key={i} className="tvl-module-pill"
                                            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.1 + i * 0.1 }}>{m}</motion.span>
                                    ))}
                                </div>
                                {/* Status row */}
                                <div className="tvl-db-status-row">
                                    {[
                                        { label: 'Uptime',   val: '99.8%', color: '#10B981' },
                                        { label: 'Reports',  val: '12 Active', color: '#60a5fa' },
                                    ].map((s, i) => (
                                        <motion.div key={i} className="tvl-status-item"
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                            transition={{ delay: 1.5 + i * 0.15 }}>
                                            <span className="tvl-status-dot" style={{ background: s.color }} />
                                            <span className="tvl-status-label">{s.label}</span>
                                            <span className="tvl-status-val" style={{ color: s.color }}>{s.val}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="tvl-hero__wave" aria-hidden="true">
                    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            {/* ══ SECTION 02 — SERVICES OVERVIEW ═════════════════ */}
            <section className="tvl-section tvl-services-overview" aria-labelledby="s02-heading">
                <div className="tvl-container tvl-services-overview__inner">
                    <AnimSection variant={fadeLeft} className="tvl-services-overview__text">
                        <span className="tvl-tag tvl-tag--light">IT Services</span>
                        <h2 id="s02-heading" className="tvl-section__heading">IT Services &amp; Software Solutions by FlyTowards in Tirunelveli</h2>
                        <p>FlyTowards Digital Innovation provides software development and IT solutions for businesses in Tirunelveli, Tamil Nadu.</p>
                        <p>Our services focus on custom software development, web and mobile applications, enterprise software solutions and business automation to help local businesses streamline operations, manage workflows and improve efficiency.</p>
                    </AnimSection>
                    <div className="tvl-services-overview__icons">
                        {[
                            { icon: Code2,            title: 'Custom Software Development',  desc: 'Tailored applications for specific business requirements.' },
                            { icon: MonitorSmartphone, title: 'Web & Mobile App Development', desc: 'Websites and applications for customers and business operations.' },
                            { icon: Database,         title: 'Enterprise Software Solutions', desc: 'Software systems for managing business processes and data.' },
                            { icon: Zap,              title: 'Business Process Automation',   desc: 'Digital solutions that simplify repetitive tasks and daily workflows.' },
                        ].map((item, i) => (
                            <AnimSection key={i} delay={i} className="tvl-icon-highlight">
                                <div className="tvl-icon-highlight__icon"><item.icon size={26} strokeWidth={1.6} /></div>
                                <div><h3>{item.title}</h3><p>{item.desc}</p></div>
                            </AnimSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 03 — CHALLENGES ═════════════════════════ */}
            <section className="tvl-section tvl-challenges" aria-labelledby="s03-heading">
                <div className="tvl-container">
                    <AnimSection className="tvl-section__header">
                        <span className="tvl-tag tvl-tag--light">Challenges</span>
                        <h2 id="s03-heading" className="tvl-section__heading">Common Software Challenges for Businesses in Tirunelveli</h2>
                        <p className="tvl-section__sub">Businesses often face operational difficulties when important information is maintained across manual records and disconnected applications.</p>
                    </AnimSection>
                    <div className="tvl-challenges__grid">
                        {challenges.map((item, i) => (
                            <motion.div key={i} className="tvl-challenge-card"
                                variants={scaleIn} initial="hidden" whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }} custom={i}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                                <div className="tvl-challenge-card__icon"><item.icon size={22} strokeWidth={1.7} /></div>
                                <h3>{item.title}</h3><p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 04 — SOLUTIONS ══════════════════════════ */}
            <section className="tvl-section tvl-solutions" aria-labelledby="s04-heading">
                <div className="tvl-container">
                    <AnimSection className="tvl-section__header">
                        <span className="tvl-tag tvl-tag--yellow">Solutions</span>
                        <h2 id="s04-heading" className="tvl-section__heading tvl-section__heading--light">Custom Software Development Services in Tirunelveli</h2>
                        <p className="tvl-section__sub tvl-section__sub--light">FlyTowards provides software development solutions for businesses seeking applications designed around their operational needs.</p>
                    </AnimSection>
                    <div className="tvl-solutions__grid">
                        {solutions.map((item, i) => (
                            <motion.div key={i} className="tvl-solution-card"
                                variants={fadeUp} initial="hidden" whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }} custom={i}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                                <div className="tvl-solution-card__icon"><item.icon size={28} strokeWidth={1.5} /></div>
                                <h3>{item.title}</h3><p>{item.desc}</p>
                                <div className="tvl-solution-card__line" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 05 — USE CASES (TABS) ═══════════════════ */}
            <section className="tvl-section tvl-usecases" aria-labelledby="s05-heading">
                <div className="tvl-container">
                    <AnimSection className="tvl-section__header">
                        <span className="tvl-tag tvl-tag--light">Use Cases</span>
                        <h2 id="s05-heading" className="tvl-section__heading">How Software Solutions Support Tirunelveli Businesses</h2>
                        <p className="tvl-section__sub">Different industries need different software applications. The right solution should reflect how information moves between employees, departments and business systems.</p>
                    </AnimSection>
                    <div className="tvl-tabs" role="tablist" aria-label="Business use cases">
                        {useCases.map((item, i) => (
                            <button key={i} role="tab" aria-selected={activeTab === i}
                                className={`tvl-tab${activeTab === i ? ' tvl-tab--active' : ''}`}
                                onClick={() => setActiveTab(i)}>
                                <item.icon size={15} /> {item.title}
                            </button>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div key={activeTab} className="tvl-usecase-panel" role="tabpanel"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                            {(() => { const item = useCases[activeTab]; return (
                                <><div className="tvl-usecase-panel__icon"><item.icon size={36} strokeWidth={1.4} /></div>
                                <div><h3>{item.title}</h3><p>{item.desc}</p></div></>
                            ); })()}
                        </motion.div>
                    </AnimatePresence>
                    {/* Workflow strips */}
                    <AnimSection delay={2} className="tvl-workflow">
                        <p className="tvl-workflow__label">Suggested Software Development Workflow</p>
                        <div className="tvl-workflow__steps">
                            {['Business Requirement', 'Process Assessment', 'Solution Planning', 'Software Development', 'Testing', 'Deployment', 'Support Planning'].map((s, i, arr) => (
                                <span key={i} className="tvl-workflow__item">
                                    <span className="tvl-workflow__step">{s}</span>
                                    {i < arr.length - 1 && <ArrowRight size={14} className="tvl-workflow__arrow" />}
                                </span>
                            ))}
                        </div>
                        <p className="tvl-workflow__label" style={{ marginTop: '1rem' }}>Example Inventory Workflow</p>
                        <div className="tvl-workflow__steps">
                            {['Purchase Request', 'Supplier Order', 'Stock Receipt', 'Inventory Update', 'Product Issue or Sale', 'Management Report'].map((s, i, arr) => (
                                <span key={i} className="tvl-workflow__item">
                                    <span className="tvl-workflow__step tvl-workflow__step--alt">{s}</span>
                                    {i < arr.length - 1 && <ArrowRight size={14} className="tvl-workflow__arrow" />}
                                </span>
                            ))}
                        </div>
                        <p className="tvl-workflow__note">These workflows are illustrative. Actual functionality, calculations and integrations depend on the agreed project requirements.</p>
                    </AnimSection>
                </div>
            </section>

            {/* ══ SECTION 06 — BENEFITS ═══════════════════════════ */}
            <section className="tvl-section tvl-benefits" aria-labelledby="s06-heading">
                <div className="tvl-container tvl-benefits__inner">
                    <AnimSection variant={fadeLeft} className="tvl-benefits__visual">
                        <div className="tvl-benefits__visual-card">
                            <div className="tvl-benefits__visual-icon"><BarChart3 size={48} strokeWidth={1.3} /></div>
                            <p className="tvl-benefits__visual-label">Business Management Software</p>
                            <div className="tvl-benefits__visual-dots">
                                {['ERP', 'CRM', 'Billing', 'Inventory', 'Reports'].map((l, i) => (
                                    <motion.span key={i} className="tvl-dot-pill"
                                        initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12 }}>{l}</motion.span>
                                ))}
                            </div>
                            <div className="tvl-benefits__visual-metrics">
                                {[
                                    { label: 'Process Efficiency', val: '↑ 65%' },
                                    { label: 'Manual Errors Down', val: '↓ 80%' },
                                ].map((m, i) => (
                                    <div key={i} className="tvl-metric">
                                        <span className="tvl-metric__val">{m.val}</span>
                                        <span className="tvl-metric__label">{m.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimSection>
                    <div className="tvl-benefits__list">
                        <AnimSection variant={fadeRight} className="tvl-section__header tvl-section__header--left">
                            <span className="tvl-tag tvl-tag--light">Benefits</span>
                            <h2 id="s06-heading" className="tvl-section__heading">Benefits of Custom Software for Tirunelveli Businesses</h2>
                            <p className="tvl-section__sub">Custom software can help organizations organize operational information, simplify workflows and improve access to business records.</p>
                        </AnimSection>
                        {benefits.map((b, i) => (
                            <motion.div key={i} className="tvl-benefit-row"
                                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                                <CheckCircle2 size={20} className="tvl-benefit-row__icon" />
                                <div><h3>{b.title}</h3><p>{b.desc}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 07 — SERVICE TILES ══════════════════════ */}
            <section className="tvl-section tvl-service-tiles" aria-labelledby="s07-heading">
                <div className="tvl-container">
                    <AnimSection className="tvl-section__header">
                        <span className="tvl-tag tvl-tag--light">Our Services</span>
                        <h2 id="s07-heading" className="tvl-section__heading">Explore FlyTowards IT Services in Tirunelveli</h2>
                    </AnimSection>
                    <div className="tvl-service-tiles__grid">
                        {serviceLinks.map((item, i) => (
                            <motion.div key={i} variants={scaleIn} initial="hidden" whileInView="visible"
                                viewport={{ once: true }} custom={i} whileHover={{ y: -6 }}>
                                <Link to={item.link} className="tvl-service-tile">
                                    <div className="tvl-service-tile__icon"><item.icon size={24} strokeWidth={1.6} /></div>
                                    <div className="tvl-service-tile__text">
                                        <span className="tvl-service-tile__title">{item.title}</span>
                                        <span className="tvl-service-tile__desc">{item.desc}</span>
                                    </div>
                                    <ArrowRight size={15} className="tvl-service-tile__arrow" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 08 — APPROACH / TIMELINE ═══════════════ */}
            <section className="tvl-section tvl-approach" aria-labelledby="s08-heading">
                <div className="tvl-container">
                    <AnimSection className="tvl-section__header">
                        <span className="tvl-tag tvl-tag--yellow">Our Approach</span>
                        <h2 id="s08-heading" className="tvl-section__heading tvl-section__heading--light">Our Software Development Process for Tirunelveli Businesses</h2>
                        <p className="tvl-section__sub tvl-section__sub--light">We follow a structured development approach to understand business needs and plan suitable software applications.</p>
                    </AnimSection>
                    <div className="tvl-timeline">
                        {steps.map((step, i) => (
                            <motion.div key={i} className="tvl-timeline__item"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}>
                                <div className="tvl-timeline__connector">
                                    <div className="tvl-timeline__dot"><span>{step.num}</span></div>
                                    {i < steps.length - 1 && <div className="tvl-timeline__line" />}
                                </div>
                                <div className="tvl-timeline__content"><h3>{step.title}</h3><p>{step.desc}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 09 — WHY FLYTOWARDS ════════════════════ */}
            <section className="tvl-section tvl-why" aria-labelledby="s09-heading">
                <div className="tvl-container tvl-why__inner">
                    <AnimSection variant={fadeLeft} className="tvl-why__text">
                        <span className="tvl-tag tvl-tag--light">Why FlyTowards</span>
                        <h2 id="s09-heading" className="tvl-section__heading">Why Consider FlyTowards When Choosing an IT Company in Tirunelveli?</h2>
                        <p>Choosing an IT company involves more than comparing software features or development technologies.</p>
                        <p>Businesses need a provider that can understand operational challenges, explain suitable technical approaches and establish clear project expectations.</p>
                        <p>FlyTowards focuses on planning software around business requirements, user workflows and implementation needs.</p>
                        <Link to="/contact" className="tvl-btn tvl-btn--primary tvl-btn--mt">
                            Discuss Your Software Requirements with FlyTowards <ArrowRight size={16} />
                        </Link>
                    </AnimSection>
                    <div className="tvl-why__differentiators">
                        {differentiators.map((d, i) => (
                            <motion.div key={i} className="tvl-differentiator"
                                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}>
                                <span className="tvl-differentiator__num">{d.num}</span>
                                <div><h3>{d.title}</h3><p>{d.desc}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 10 — LOCAL RELEVANCE ════════════════════ */}
            <section className="tvl-section tvl-regional" aria-labelledby="s10-heading">
                <div className="tvl-container">
                    <AnimSection className="tvl-section__header">
                        <span className="tvl-tag tvl-tag--yellow">South Tamil Nadu</span>
                        <h2 id="s10-heading" className="tvl-section__heading tvl-section__heading--light">Software Development Solutions for Tirunelveli and South Tamil Nadu</h2>
                        <p className="tvl-section__sub tvl-section__sub--light">
                            Tirunelveli serves a diverse business community that includes manufacturing enterprises, educational institutions, healthcare providers, retailers, trading businesses and service organizations. Technology requirements vary according to business size, industry, operating processes and existing systems.
                        </p>
                    </AnimSection>

                    <div className="tvl-regional__grid">
                        {regionalAreas.map((r, i) => (
                            <motion.div key={i} className={`tvl-regional-card${i === 4 ? ' tvl-regional-card--wide' : ''}`}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -4 }}>
                                <div className="tvl-regional-card__header"><TrendingUp size={16} /><strong>{r.area}</strong></div>
                                <p>{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <AnimSection delay={3} className="tvl-regional__footer">
                        <p>
                            FlyTowards provides software development solutions for organizations evaluating technology projects in Tirunelveli and the wider{' '}
                            <Link to="/locations/tamilnadu/" className="tvl-regional__link">South Tamil Nadu</Link>
                            {' '}region, including{' '}
                            <Link to="/locations/sankarankovil/" className="tvl-regional__link">Sankarankovil</Link>
                            {' '}and surrounding areas.
                        </p>
                        <p>Whether your business needs a focused management application or a connected enterprise system, we help evaluate software requirements around your operational processes.</p>
                        <p className="tvl-regional__disclaimer">These geographic references describe relevant business environments and potential software needs. They do not indicate FlyTowards office locations, customer relationships or completed projects.</p>
                    </AnimSection>
                </div>
            </section>

            {/* ══ SECTION 11 — FAQs ═══════════════════════════════ */}
            <section className="tvl-section tvl-faqs" aria-labelledby="s11-heading">
                <div className="tvl-container">
                    <AnimSection className="tvl-section__header">
                        <span className="tvl-tag tvl-tag--light">FAQs</span>
                        <h2 id="s11-heading" className="tvl-section__heading">Frequently Asked Questions About IT Companies in Tirunelveli</h2>
                    </AnimSection>
                    <div className="tvl-faqs__grid">
                        {faqs.map((faq, i) => (
                            <AnimSection key={i} delay={i * 0.05} className="tvl-faq-item">
                                <button className={`tvl-faq-item__btn${openFaq === i ? ' tvl-faq-item__btn--open' : ''}`}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i} aria-controls={`tvl-faq-answer-${i}`}>
                                    <span>{faq.q}</span>
                                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div id={`tvl-faq-answer-${i}`} className="tvl-faq-item__answer"
                                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                                            <p>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </AnimSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 12 — FINAL CTA ══════════════════════════ */}
            <section className="tvl-cta-banner" aria-labelledby="s12-heading">
                <div className="tvl-cta-banner__particles" aria-hidden="true">
                    {[...Array(10)].map((_, i) => <span key={i} className="tvl-cta-particle" style={{ '--j': i }} />)}
                </div>
                <div className="tvl-container tvl-cta-banner__inner">
                    <AnimSection className="tvl-cta-banner__content">
                        <h2 id="s12-heading" className="tvl-cta-banner__heading">
                            Looking for an IT &amp; Software Development Partner in Tirunelveli?
                        </h2>
                        <p>Whether you need billing and inventory software, a custom business application, web platform, mobile app or connected enterprise system, the right solution begins with understanding your requirements.</p>
                        <p>FlyTowards Digital Innovation helps businesses in Tirunelveli and across South Tamil Nadu explore practical software solutions aligned with their operational needs.</p>
                        <div className="tvl-cta-banner__btns">
                            <Link to="/contact" className="tvl-btn tvl-btn--yellow">Discuss Your Software Project <ArrowRight size={16} /></Link>
                            <Link to="/contact" className="tvl-btn tvl-btn--white-outline">Request a Consultation</Link>
                        </div>
                    </AnimSection>
                </div>
            </section>

        </main>
    );
};

export default Tirunelveli;
