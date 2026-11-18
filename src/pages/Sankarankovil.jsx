import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    ArrowRight, Code2, Globe, Smartphone, Database, Zap, Link2,
    CheckCircle2, ChevronDown, ChevronUp, BarChart3, ShieldCheck,
    FileSpreadsheet, Settings2, Users, MapPin, MonitorSmartphone,
    Building2, Target, PieChart, Cpu, PackageCheck, MessageSquareText,
    ClipboardList, Factory, HeartPulse, ShoppingBag, GraduationCap,
    Boxes, Receipt, TrendingUp, Layers, AlertCircle
} from 'lucide-react';
import './Sankarankovil.css';

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
    { icon: Receipt,       title: 'Manual Billing & Recordkeeping',       desc: 'Paper bills, handwritten registers and spreadsheets can make sales and transaction tracking difficult.' },
    { icon: Boxes,         title: 'Inventory & Purchase Coordination',     desc: 'Businesses may struggle to maintain consistent information about stock availability, purchases and supplier transactions.' },
    { icon: Layers,        title: 'Disconnected Business Information',     desc: 'Using separate tools for billing, customer records and operations can make information sharing difficult.' },
    { icon: BarChart3,     title: 'Limited Business Reporting',            desc: 'Owners and managers may need clearer information about sales, expenses, inventory and other operational activities.' },
    { icon: MessageSquareText, title: 'Customer & Service Management',    desc: 'Managing enquiries, customer follow-ups, appointments and service requests manually can increase administrative work.' },
    { icon: Settings2,     title: 'Outdated or Inflexible Software',       desc: 'Existing applications may not support new workflows, additional users or changing business requirements.' },
];

const solutions = [
    { icon: Code2,         title: 'Custom Business Software',             desc: 'Develop applications for business administration, recordkeeping, approvals and industry-specific operational workflows.' },
    { icon: Receipt,       title: 'Billing & Inventory Management Software', desc: 'Build systems for sales transactions, stock records, purchase information and relevant business reporting.' },
    { icon: Globe,         title: 'Web Application Development',          desc: 'Create browser-based applications, customer portals, management dashboards and business administration systems.' },
    { icon: Smartphone,    title: 'Mobile App Development',               desc: 'Develop mobile applications for customers, employees, field teams and relevant business activities.' },
    { icon: Database,      title: 'ERP & CRM Software Development',       desc: 'Plan connected systems for inventory, procurement, customer records, sales and organizational workflows.' },
    { icon: Zap,           title: 'API Integration & Business Automation', desc: 'Connect compatible applications and digitize selected business processes through supported technical integrations.' },
];

const useCases = [
    { icon: ShoppingBag,   title: 'Retail Billing & Inventory Tracking',   desc: 'Retail shops can use software to record sales, maintain product information, track stock movements and organize purchase details.' },
    { icon: Boxes,         title: 'Trading & Supplier Management',         desc: 'Trading businesses can maintain supplier records, purchase orders, inventory information and relevant transaction workflows.' },
    { icon: Factory,       title: 'Manufacturing & Production Coordination', desc: 'Small and growing manufacturing businesses may require applications for material tracking, production activities, inventory and operational reporting.' },
    { icon: GraduationCap, title: 'School & Educational Administration',   desc: 'Schools and training institutions may need applications for admissions, attendance, student information, fee records and academic administration.' },
    { icon: HeartPulse,    title: 'Healthcare & Appointment Management',   desc: 'Clinics and healthcare service providers may require applications for appointments, patient administration, billing and controlled access to relevant information.' },
    { icon: Users,         title: 'Customer & Business Service Management', desc: 'Service providers can organize customer enquiries, appointments, work assignments, service updates and billing activities.' },
];

const benefits = [
    { title: 'Simplify Daily Business Activities',    desc: 'Use structured applications for billing, records, approvals and other routine workflows.' },
    { title: 'Organize Business Information',         desc: 'Maintain relevant customer, product, supplier and operational records in suitable systems.' },
    { title: 'Reduce Repetitive Manual Work',         desc: 'Digitize selected information updates and administrative tasks to reduce repeated data entry.' },
    { title: 'Improve Business Reporting',            desc: 'Provide authorized users with useful sales, inventory and operational information through dashboards and reports.' },
    { title: 'Support Changing Business Requirements', desc: 'Plan applications that can be maintained and enhanced as business processes evolve.' },
];

const serviceLinks = [
    { icon: Code2,     title: 'Custom Software Development',  link: '/services/custom-software-development/' },
    { icon: Globe,     title: 'Web Application Development',  link: '/services/web-application-development/' },
    { icon: Smartphone,title: 'Mobile App Development',       link: '/services/mobile-app-development/' },
    { icon: Database,  title: 'ERP Development',              link: '/services/erp-development/' },
    { icon: Building2, title: 'CRM Development',              link: '/services/crm-development/' },
    { icon: Target,    title: 'Software Consulting',          link: '/services/software-consulting/' },
];

const steps = [
    { num: '01', title: 'Business Requirement Discovery',    desc: 'Understand your business activities, current challenges, users and project objectives.' },
    { num: '02', title: 'Workflow & System Assessment',      desc: 'Review existing processes, software tools, information requirements and potential integrations.' },
    { num: '03', title: 'Solution Planning',                 desc: 'Define application features, user roles, technical architecture, development priorities and agreed deliverables.' },
    { num: '04', title: 'UI/UX Design & Development',        desc: 'Design suitable interfaces and develop the agreed software functionality.' },
    { num: '05', title: 'Testing & Validation',              desc: 'Test relevant workflows, user permissions, calculations and agreed functional requirements.' },
    { num: '06', title: 'Deployment & Support Planning',     desc: 'Prepare the application for implementation, review data migration requirements and establish suitable maintenance arrangements.' },
];

const differentiators = [
    { num: '01', title: 'Business-Focused Requirement Planning', desc: 'We begin by understanding your current workflows and identifying the information the application needs to support.' },
    { num: '02', title: 'Custom Software Functionality',         desc: 'We consider the features relevant to your business instead of assuming every organization requires the same software.' },
    { num: '03', title: 'Practical User Experience',             desc: 'We plan application interfaces around the responsibilities and activities of the people using them.' },
    { num: '04', title: 'Implementation & Integration Planning', desc: 'We assess existing systems, technical dependencies and suitable deployment arrangements.' },
];

const localBusinessTypes = [
    { type: 'Retail & Trading Businesses',    desc: 'Billing applications, stock management, purchase records and customer information.' },
    { type: 'Agriculture-Related Businesses', desc: 'Procurement records, supplier coordination, inventory tracking and business reporting.' },
    { type: 'Manufacturing Businesses',       desc: 'Material management, production information, purchase workflows and operational dashboards.' },
    { type: 'Educational Institutions',       desc: 'Student records, attendance, admissions, fee management and administrative processes.' },
    { type: 'Healthcare Providers',           desc: 'Appointment management, patient administration, billing and controlled information access.' },
    { type: 'Local Service Businesses',       desc: 'Customer enquiries, work assignments, scheduling, invoicing and service tracking.' },
];

const faqs = [
    { q: 'What services does a software company in Sankarankovil provide?',              a: 'A software company serving Sankarankovil may offer custom business software, web and mobile application development, billing and inventory systems, ERP and CRM applications, software consulting and integration services. Actual services vary by provider.' },
    { q: 'Does FlyTowards provide software development services for Sankarankovil businesses?', a: 'FlyTowards offers software development solutions for businesses targeting Sankarankovil and surrounding South Tamil Nadu markets. Projects are evaluated based on requirements, technical feasibility and agreed scope.' },
    { q: 'Can FlyTowards develop billing and inventory software?',                       a: 'FlyTowards can assess requirements for custom billing and inventory applications, including sales records, product information, stock movements, purchase workflows and reporting. Specific features are confirmed during project planning.' },
    { q: 'How much does custom software development cost in Sankarankovil?',             a: 'Development costs depend on the number of features, application complexity, users, integrations, security requirements and maintenance needs. A requirements assessment helps establish a suitable estimate.' },
    { q: 'Can a local business use custom software instead of spreadsheets?',            a: 'Yes. A custom application can help organize selected records, calculations, approvals and reporting workflows that would otherwise require manual spreadsheet management. The appropriate approach depends on business needs and budget.' },
    { q: 'What types of businesses can benefit from software development in Sankarankovil?', a: 'Retail shops, trading businesses, manufacturers, educational institutions, healthcare providers and service organizations may benefit from software designed around their daily operations.' },
    { q: 'Can existing billing or accounting software be integrated with a new application?', a: 'Integration may be possible through compatible APIs, supported data exchange methods or authorized system connections. Feasibility depends on the existing application and technical requirements.' },
    { q: 'What information should I prepare before contacting an IT company in Sankarankovil?', a: 'Prepare a brief description of your business, current challenges, required features, expected users, existing software, preferred timeline and approximate budget. This information helps clarify project requirements.' },
];

/* ─── Component ─────────────────────────────────────────── */
const Sankarankovil = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Software Company in Sankarankovil – Custom Software Development | FlyTowards';

        const setMeta = (name, content) => {
            let el = document.querySelector(`meta[name="${name}"]`);
            if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
            el.setAttribute('content', content);
        };
        setMeta('description', 'Looking for a software company in Sankarankovil? FlyTowards Digital Innovation provides custom software, billing & inventory systems, web & mobile apps for businesses in Sankarankovil and South Tamil Nadu.');
        setMeta('keywords', 'software company sankarankovil, software development sankarankovil, it company sankarankovil, software services sankarankovil, billing software sankarankovil');
        setMeta('robots', 'index, follow');

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
        canonical.href = 'https://flytowardsdigitalinnovation.com/locations/sankarankovil/';

        const schemaId = 'skl-schema-script';
        let ss = document.getElementById(schemaId);
        if (!ss) { ss = document.createElement('script'); ss.id = schemaId; ss.type = 'application/ld+json'; document.head.appendChild(ss); }
        ss.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'WebPage',
                    '@id': 'https://flytowardsdigitalinnovation.com/locations/sankarankovil/#webpage',
                    name: 'Software Company in Sankarankovil – Custom Software Development | FlyTowards',
                    url: 'https://flytowardsdigitalinnovation.com/locations/sankarankovil/',
                    description: 'FlyTowards provides custom software development, billing and inventory systems, and business applications for businesses in Sankarankovil, Tenkasi district.',
                    inLanguage: 'en',
                },
                {
                    '@type': 'Service',
                    name: 'Software Development Services in Sankarankovil',
                    provider: { '@type': 'Organization', name: 'FlyTowards Digital Innovation', url: 'https://flytowardsdigitalinnovation.com/' },
                    areaServed: [
                        { '@type': 'City', name: 'Sankarankovil' },
                        { '@type': 'AdministrativeArea', name: 'Tenkasi District' },
                        { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }
                    ],
                    serviceType: 'Custom Software Development'
                },
                {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
                        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://flytowardsdigitalinnovation.com/locations/' },
                        { '@type': 'ListItem', position: 3, name: 'Sankarankovil', item: 'https://flytowardsdigitalinnovation.com/locations/sankarankovil/' }
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
        <main className="skl-page">

            {/* ══ SECTION 01 — HERO ═══════════════════════════════ */}
            <section className="skl-hero" aria-label="Sankarankovil Software Development Hero">
                <div className="skl-hero__particles" aria-hidden="true">
                    {[...Array(18)].map((_, i) => <span key={i} className={`skl-particle skl-particle--${i % 3}`} style={{ '--i': i }} />)}
                </div>

                <div className="skl-container skl-hero__inner">
                    <div className="skl-hero__content">
                        <motion.span className="skl-tag" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <MapPin size={14} /> Sankarankovil &nbsp;·&nbsp; Tenkasi District, Tamil Nadu
                        </motion.span>

                        <motion.h1 className="skl-hero__heading" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                            Software Company in Sankarankovil –&nbsp;
                            <span className="skl-highlight">Custom Software</span>
                            &nbsp;Development Solutions
                        </motion.h1>

                        <motion.p className="skl-hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            Practical Software, Web Applications and Digital Solutions for Local Businesses
                        </motion.p>

                        <motion.p className="skl-hero__desc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                            Looking for a software company in Sankarankovil to develop custom business applications, simplify daily operations or connect existing systems? FlyTowards Digital Innovation provides software development solutions for retailers, manufacturers, service providers and growing businesses in Sankarankovil and across South Tamil Nadu.
                        </motion.p>

                        <motion.div className="skl-hero__ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <Link to="/contact" className="skl-btn skl-btn--primary">Discuss Your Software Project <ArrowRight size={16} /></Link>
                            <Link to="/services" className="skl-btn skl-btn--outline">Explore Our Software Services</Link>
                        </motion.div>

                    </div>

                    {/* Right — Dashboard */}
                    <motion.div className="skl-hero__visual" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} aria-hidden="true">
                        <div className="skl-dashboard">
                            <div className="skl-dashboard__bar"><span /><span /><span /></div>
                            <div className="skl-dashboard__body">
                                {/* Sales summary */}
                                <div className="skl-db-label">Today's Summary</div>
                                <div className="skl-db-row">
                                    {[
                                        { label: 'Sales', val: '₹24,500', color: '#FACC15' },
                                        { label: 'Items', val: '138',     color: '#10B981' },
                                        { label: 'Bills', val: '32',      color: '#60a5fa' },
                                    ].map((k, i) => (
                                        <motion.div key={i} className="skl-kpi"
                                            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + i * 0.15 }}>
                                            <span className="skl-kpi__val" style={{ color: k.color }}>{k.val}</span>
                                            <span className="skl-kpi__label">{k.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                {/* Chart */}
                                <div className="skl-db-label" style={{ marginTop: '0.9rem' }}>Weekly Sales</div>
                                <div className="skl-dashboard__chart">
                                    {[48, 65, 55, 80, 70, 90, 75].map((h, i) => (
                                        <motion.div key={i} className="skl-bar"
                                            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                                            transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                                            style={{ height: `${h}%`, '--bar-color': i === 5 ? '#FACC15' : '#1e3a8a' }} />
                                    ))}
                                </div>
                                {/* Stock alerts */}
                                <div className="skl-db-label" style={{ marginTop: '0.9rem' }}>Stock Alerts</div>
                                <div className="skl-db-alerts">
                                    {[
                                        { item: 'Rice (25kg)',   status: 'Low',      color: '#ef4444' },
                                        { item: 'Sugar (10kg)', status: 'Moderate', color: '#FACC15' },
                                        { item: 'Dal (5kg)',    status: 'OK',        color: '#10B981' },
                                    ].map((a, i) => (
                                        <motion.div key={i} className="skl-alert-row"
                                            initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1 + i * 0.12 }}>
                                            <span>{a.item}</span>
                                            <span className="skl-alert-badge" style={{ background: `${a.color}22`, color: a.color }}>{a.status}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                {/* Module pills */}
                                <div className="skl-dashboard__modules">
                                    {['Billing', 'Inventory', 'CRM', 'Reports'].map((m, i) => (
                                        <motion.span key={i} className="skl-module-pill"
                                            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.2 + i * 0.1 }}>{m}</motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="skl-hero__wave" aria-hidden="true">
                    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            {/* ══ SECTION 02 — SERVICES OVERVIEW ═════════════════ */}
            <section className="skl-section skl-services-overview" aria-labelledby="s02-heading">
                <div className="skl-container skl-services-overview__inner">
                    <AnimSection variant={fadeLeft} className="skl-services-overview__text">
                        <span className="skl-tag skl-tag--light">IT Services</span>
                        <h2 id="s02-heading" className="skl-section__heading">IT Services & Software Solutions by FlyTowards in Sankarankovil</h2>
                        <p>FlyTowards Digital Innovation provides software development and IT solutions for businesses in Sankarankovil, Tenkasi district, Tamil Nadu.</p>
                        <p>Our services focus on custom business applications, billing and inventory software, web and mobile app development, and business automation to help local businesses simplify operations, manage daily workflows and improve efficiency.</p>
                    </AnimSection>
                    <div className="skl-services-overview__icons">
                        {[
                            { icon: Code2,            title: 'Custom Software Development',  desc: 'Tailored applications for local business requirements.' },
                            { icon: Receipt,          title: 'Billing & Inventory Solutions', desc: 'Software for managing sales, billing and stock records.' },
                            { icon: MonitorSmartphone, title: 'Web & Mobile App Development', desc: 'Websites and applications for customers and business operations.' },
                            { icon: Zap,              title: 'Business Process Automation',   desc: 'Digital solutions that simplify repetitive tasks and workflows.' },
                        ].map((item, i) => (
                            <AnimSection key={i} delay={i} className="skl-icon-highlight">
                                <div className="skl-icon-highlight__icon"><item.icon size={26} strokeWidth={1.6} /></div>
                                <div><h3>{item.title}</h3><p>{item.desc}</p></div>
                            </AnimSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 03 — CHALLENGES ═════════════════════════ */}
            <section className="skl-section skl-challenges" aria-labelledby="s03-heading">
                <div className="skl-container">
                    <AnimSection className="skl-section__header">
                        <span className="skl-tag skl-tag--light">Challenges</span>
                        <h2 id="s03-heading" className="skl-section__heading">Common Software Challenges for Businesses in Sankarankovil</h2>
                        <p className="skl-section__sub">Local businesses often need reliable ways to organize daily operations without adding unnecessary complexity.</p>
                    </AnimSection>
                    <div className="skl-challenges__grid">
                        {challenges.map((item, i) => (
                            <motion.div key={i} className="skl-challenge-card"
                                variants={scaleIn} initial="hidden" whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }} custom={i}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                                <div className="skl-challenge-card__icon"><item.icon size={22} strokeWidth={1.7} /></div>
                                <h3>{item.title}</h3><p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 04 — SOLUTIONS ══════════════════════════ */}
            <section className="skl-section skl-solutions" aria-labelledby="s04-heading">
                <div className="skl-container">
                    <AnimSection className="skl-section__header">
                        <span className="skl-tag skl-tag--yellow">Solutions</span>
                        <h2 id="s04-heading" className="skl-section__heading skl-section__heading--light">Custom Software Development Services in Sankarankovil</h2>
                        <p className="skl-section__sub skl-section__sub--light">FlyTowards provides software development solutions for businesses seeking applications aligned with their operational needs.</p>
                    </AnimSection>
                    <div className="skl-solutions__grid">
                        {solutions.map((item, i) => (
                            <motion.div key={i} className="skl-solution-card"
                                variants={fadeUp} initial="hidden" whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }} custom={i}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                                <div className="skl-solution-card__icon"><item.icon size={28} strokeWidth={1.5} /></div>
                                <h3>{item.title}</h3><p>{item.desc}</p>
                                <div className="skl-solution-card__line" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 05 — USE CASES (TABS) ═══════════════════ */}
            <section className="skl-section skl-usecases" aria-labelledby="s05-heading">
                <div className="skl-container">
                    <AnimSection className="skl-section__header">
                        <span className="skl-tag skl-tag--light">Use Cases</span>
                        <h2 id="s05-heading" className="skl-section__heading">How Custom Software Supports Sankarankovil Businesses</h2>
                        <p className="skl-section__sub">Software development becomes valuable when applications address everyday business requirements.</p>
                    </AnimSection>
                    <div className="skl-tabs" role="tablist" aria-label="Business use cases">
                        {useCases.map((item, i) => (
                            <button key={i} role="tab" aria-selected={activeTab === i}
                                className={`skl-tab${activeTab === i ? ' skl-tab--active' : ''}`}
                                onClick={() => setActiveTab(i)}>
                                <item.icon size={15} /> {item.title}
                            </button>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div key={activeTab} className="skl-usecase-panel" role="tabpanel"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                            {(() => { const item = useCases[activeTab]; return (
                                <><div className="skl-usecase-panel__icon"><item.icon size={36} strokeWidth={1.4} /></div>
                                <div><h3>{item.title}</h3><p>{item.desc}</p></div></>
                            ); })()}
                        </motion.div>
                    </AnimatePresence>
                    {/* Workflow strips */}
                    <AnimSection delay={2} className="skl-workflow">
                        <p className="skl-workflow__label">Development Workflow</p>
                        <div className="skl-workflow__steps">
                            {['Business Enquiry', 'Requirement Assessment', 'Software Planning', 'Development', 'Testing', 'Deployment', 'Support Planning'].map((s, i, arr) => (
                                <span key={i} className="skl-workflow__item">
                                    <span className="skl-workflow__step">{s}</span>
                                    {i < arr.length - 1 && <ArrowRight size={14} className="skl-workflow__arrow" />}
                                </span>
                            ))}
                        </div>
                        <p className="skl-workflow__label" style={{ marginTop: '1rem' }}>Example Retail Workflow</p>
                        <div className="skl-workflow__steps">
                            {['Purchase Entry', 'Stock Update', 'Product Sale', 'Billing', 'Inventory Adjustment', 'Sales Report'].map((s, i, arr) => (
                                <span key={i} className="skl-workflow__item">
                                    <span className="skl-workflow__step skl-workflow__step--retail">{s}</span>
                                    {i < arr.length - 1 && <ArrowRight size={14} className="skl-workflow__arrow" />}
                                </span>
                            ))}
                        </div>
                        <p className="skl-workflow__note">These workflows are illustrative. Actual functionality, tax calculations, integrations and reporting requirements depend on the agreed project scope.</p>
                    </AnimSection>
                </div>
            </section>

            {/* ══ SECTION 06 — BENEFITS ═══════════════════════════ */}
            <section className="skl-section skl-benefits" aria-labelledby="s06-heading">
                <div className="skl-container skl-benefits__inner">
                    <AnimSection variant={fadeLeft} className="skl-benefits__visual">
                        <div className="skl-benefits__visual-card">
                            <div className="skl-benefits__visual-icon"><Receipt size={48} strokeWidth={1.3} /></div>
                            <p className="skl-benefits__visual-label">Business Software for Sankarankovil</p>
                            <div className="skl-benefits__visual-dots">
                                {['Billing', 'Inventory', 'Reports', 'CRM'].map((l, i) => (
                                    <motion.span key={i} className="skl-dot-pill"
                                        initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12 }}>{l}</motion.span>
                                ))}
                            </div>
                            <div className="skl-benefits__visual-metrics">
                                {[
                                    { label: 'Billing Time Saved', val: '↑ 60%' },
                                    { label: 'Manual Errors Down', val: '↓ 80%' },
                                ].map((m, i) => (
                                    <div key={i} className="skl-metric">
                                        <span className="skl-metric__val">{m.val}</span>
                                        <span className="skl-metric__label">{m.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimSection>
                    <div className="skl-benefits__list">
                        <AnimSection variant={fadeRight} className="skl-section__header skl-section__header--left">
                            <span className="skl-tag skl-tag--light">Benefits</span>
                            <h2 id="s06-heading" className="skl-section__heading">Benefits of Custom Software for Businesses in Sankarankovil</h2>
                            <p className="skl-section__sub">Custom software can help businesses organize information, simplify selected tasks and improve visibility into everyday operations.</p>
                        </AnimSection>
                        {benefits.map((b, i) => (
                            <motion.div key={i} className="skl-benefit-row"
                                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                                <CheckCircle2 size={20} className="skl-benefit-row__icon" />
                                <div><h3>{b.title}</h3><p>{b.desc}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 07 — SERVICE TILES ══════════════════════ */}
            <section className="skl-section skl-service-tiles" aria-labelledby="s07-heading">
                <div className="skl-container">
                    <AnimSection className="skl-section__header">
                        <span className="skl-tag skl-tag--light">Our Services</span>
                        <h2 id="s07-heading" className="skl-section__heading">Explore FlyTowards Software Services in Sankarankovil</h2>
                    </AnimSection>
                    <div className="skl-service-tiles__grid">
                        {serviceLinks.map((item, i) => (
                            <motion.div key={i} variants={scaleIn} initial="hidden" whileInView="visible"
                                viewport={{ once: true }} custom={i} whileHover={{ y: -6 }}>
                                <Link to={item.link} className="skl-service-tile">
                                    <div className="skl-service-tile__icon"><item.icon size={24} strokeWidth={1.6} /></div>
                                    <span>{item.title}</span>
                                    <ArrowRight size={15} className="skl-service-tile__arrow" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 08 — APPROACH / TIMELINE ═══════════════ */}
            <section className="skl-section skl-approach" aria-labelledby="s08-heading">
                <div className="skl-container">
                    <AnimSection className="skl-section__header">
                        <span className="skl-tag skl-tag--yellow">Our Approach</span>
                        <h2 id="s08-heading" className="skl-section__heading skl-section__heading--light">Our Software Development Process for Sankarankovil Businesses</h2>
                        <p className="skl-section__sub skl-section__sub--light">We follow a structured approach to understand business requirements and plan suitable applications.</p>
                    </AnimSection>
                    <div className="skl-timeline">
                        {steps.map((step, i) => (
                            <motion.div key={i} className="skl-timeline__item"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}>
                                <div className="skl-timeline__connector">
                                    <div className="skl-timeline__dot"><span>{step.num}</span></div>
                                    {i < steps.length - 1 && <div className="skl-timeline__line" />}
                                </div>
                                <div className="skl-timeline__content"><h3>{step.title}</h3><p>{step.desc}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 09 — WHY FLYTOWARDS ════════════════════ */}
            <section className="skl-section skl-why" aria-labelledby="s09-heading">
                <div className="skl-container skl-why__inner">
                    <AnimSection variant={fadeLeft} className="skl-why__text">
                        <span className="skl-tag skl-tag--light">Why FlyTowards</span>
                        <h2 id="s09-heading" className="skl-section__heading">Why Consider FlyTowards When Choosing a Software Company in Sankarankovil?</h2>
                        <p>Choosing a software development provider involves understanding how the proposed application will support daily business activities.</p>
                        <p>A suitable solution should consider operational requirements, employee usability, technical feasibility and future maintenance needs.</p>
                        <p>FlyTowards focuses on planning software around the processes businesses need to manage.</p>
                        <Link to="/contact" className="skl-btn skl-btn--primary skl-btn--mt">
                            Discuss Your Business Software Requirements <ArrowRight size={16} />
                        </Link>
                    </AnimSection>
                    <div className="skl-why__differentiators">
                        {differentiators.map((d, i) => (
                            <motion.div key={i} className="skl-differentiator"
                                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}>
                                <span className="skl-differentiator__num">{d.num}</span>
                                <div><h3>{d.title}</h3><p>{d.desc}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 10 — LOCAL RELEVANCE ════════════════════ */}
            <section className="skl-section skl-regional" aria-labelledby="s10-heading">
                <div className="skl-container">
                    <AnimSection className="skl-section__header">
                        <span className="skl-tag skl-tag--yellow">South Tamil Nadu</span>
                        <h2 id="s10-heading" className="skl-section__heading skl-section__heading--light">Software Development Solutions for Sankarankovil and Surrounding Areas</h2>
                        <p className="skl-section__sub skl-section__sub--light">
                            Sankarankovil is part of Tenkasi district in South Tamil Nadu and serves businesses, educational organizations, healthcare providers and other service establishments. Organizations in and around Sankarankovil may require software for billing, inventory, customer management, administration and operational reporting.
                        </p>
                    </AnimSection>

                    <div className="skl-regional__grid">
                        {localBusinessTypes.map((r, i) => (
                            <motion.div key={i} className="skl-regional-card"
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -4 }}>
                                <div className="skl-regional-card__header"><TrendingUp size={16} /><strong>{r.type}</strong></div>
                                <p>{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <AnimSection delay={3} className="skl-regional__footer">
                        <p>
                            FlyTowards provides software development solutions for businesses evaluating technology projects in Sankarankovil and the wider{' '}
                            <Link to="/locations/tamilnadu/" className="skl-regional__link">South Tamil Nadu</Link>
                            {' '}region, including nearby markets such as Rajapalayam, Puliyangudi, Tenkasi and Tirunelveli.
                        </p>
                        <p>Whether your organization needs a focused business application or a connected management system, the development approach should reflect your actual operations and technical requirements.</p>
                        <p className="skl-regional__disclaimer">These location references describe target markets and potential business use cases. They do not indicate verified FlyTowards office locations or existing customers.</p>
                    </AnimSection>
                </div>
            </section>

            {/* ══ SECTION 11 — FAQs ═══════════════════════════════ */}
            <section className="skl-section skl-faqs" aria-labelledby="s11-heading">
                <div className="skl-container">
                    <AnimSection className="skl-section__header">
                        <span className="skl-tag skl-tag--light">FAQs</span>
                        <h2 id="s11-heading" className="skl-section__heading">Frequently Asked Questions About Software Companies in Sankarankovil</h2>
                    </AnimSection>
                    <div className="skl-faqs__grid">
                        {faqs.map((faq, i) => (
                            <AnimSection key={i} delay={i * 0.05} className="skl-faq-item">
                                <button className={`skl-faq-item__btn${openFaq === i ? ' skl-faq-item__btn--open' : ''}`}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i} aria-controls={`skl-faq-answer-${i}`}>
                                    <span>{faq.q}</span>
                                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div id={`skl-faq-answer-${i}`} className="skl-faq-item__answer"
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
            <section className="skl-cta-banner" aria-labelledby="s12-heading">
                <div className="skl-cta-banner__particles" aria-hidden="true">
                    {[...Array(10)].map((_, i) => <span key={i} className="skl-cta-particle" style={{ '--j': i }} />)}
                </div>
                <div className="skl-container skl-cta-banner__inner">
                    <AnimSection className="skl-cta-banner__content">
                        <h2 id="s12-heading" className="skl-cta-banner__heading">
                            Looking for a Software Development Partner for Your Sankarankovil Business?
                        </h2>
                        <p>Whether you need billing and inventory software, a business management application, a website-based platform or a mobile app, the right solution begins with understanding your requirements.</p>
                        <p>FlyTowards Digital Innovation helps businesses in Sankarankovil and across South Tamil Nadu explore practical software solutions aligned with their daily operations.</p>
                        <div className="skl-cta-banner__btns">
                            <Link to="/contact" className="skl-btn skl-btn--yellow">Discuss Your Software Project <ArrowRight size={16} /></Link>
                            <Link to="/contact" className="skl-btn skl-btn--white-outline">Request a Consultation</Link>
                        </div>
                    </AnimSection>
                </div>
            </section>

        </main>
    );
};

export default Sankarankovil;
