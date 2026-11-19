import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, CheckCircle2, Users, UserPlus, TrendingUp, ChevronDown,
    HelpCircle, ShieldCheck, AlertCircle, BarChart3, ClipboardList,
    Phone, Mail, Calendar, Target, Layers, Building2, GraduationCap,
    HeartPulse, Briefcase, Home, Store, Clock3, Database, Settings2,
    Eye, GitMerge, MessageSquare, PieChart
} from 'lucide-react';

/* ══ Static data ══════════════════════════════════════════════════════ */
const highlights = [
    'Lead and enquiry management',
    'Customer and contact records',
    'Sales pipeline and opportunity tracking',
    'Follow-up activities and sales reporting',
];

const overview = [
    [UserPlus,      'Lead Management',    'Organize enquiries, lead details and follow-up activities.'],
    [Users,         'Customer Records',   'Maintain customer profiles and interaction information.'],
    [GitMerge,      'Sales Pipeline',     'Track opportunities through defined sales stages.'],
    [BarChart3,     'Sales Reporting',    'Review sales activities, lead status and pipeline information.'],
];

const challenges = [
    ['Scattered Customer Information',   'Customer contact details, enquiries and communication histories may be maintained across spreadsheets, emails and messaging applications.'],
    ['Missed Sales Follow-Ups',          'Without structured reminders and assigned responsibilities, sales teams may overlook important follow-up activities.'],
    ['Limited Lead Visibility',          'Business owners may struggle to understand how many enquiries are active, qualified or progressing toward a sale.'],
    ['Unorganized Sales Pipelines',      'Tracking opportunities manually can make it difficult to identify current sales stages and pending actions.'],
    ['Inconsistent Team Coordination',   'When multiple employees handle customer enquiries, incomplete information sharing can lead to repeated communication or missed updates.'],
    ['Limited Sales Reporting',          'Without structured records, managers may find it difficult to review sales activities, conversion performance and pipeline progress.'],
];

const features = [
    ['Lead & Enquiry Management',   'Maintain incoming enquiries and potential customer information within a structured system.',                     'Lead profiles · Enquiry sources · Lead status · Assigned employees · Lead notes'],
    ['Customer & Contact Management','Organize customer details and relevant relationship information.',                                               'Customer profiles · Contact details · Business information · Customer categories · Interaction history'],
    ['Sales Pipeline Management',   'Track sales opportunities through defined stages according to the business\'s sales process.',                   'Opportunity records · Pipeline stages · Deal values · Expected closing dates · Opportunity status'],
    ['Follow-Up & Task Management', 'Organize sales activities and customer follow-up responsibilities.',                                             'Follow-up dates · Task assignments · Activity notes · Reminders · Task status'],
    ['Sales Team Management',       'Support coordination between sales employees, managers and other authorized users.',                             'Lead ownership · User roles · Team assignments · Activity visibility · Sales responsibilities'],
    ['CRM Reports & Dashboards',    'Review relevant customer and sales information through structured reporting.',                                    'Lead summaries · Pipeline reports · Opportunity status · Sales activity reports · Customer-wise info'],
];

const steps = [
    ['Record Customer Enquiries',   'Enter lead information from relevant customer enquiry channels into the CRM system.'],
    ['Assign Leads to Sales Teams', 'Allocate enquiries to authorized employees based on business responsibilities.'],
    ['Qualify Sales Opportunities', 'Review customer requirements, enquiry status and potential business opportunities.'],
    ['Manage Follow-Up Activities', 'Record customer communication, schedule follow-ups and maintain relevant activity information.'],
    ['Update Sales Pipeline Stages','Track opportunities through the organization\'s defined sales process.'],
    ['Review Sales Performance',    'Use available CRM reports to assess lead status, sales activities and pipeline progress.'],
];

const benefits = [
    [Database,      'Organize Customer Information',      'Maintain customer records, enquiry details and relevant interactions in a structured application.'],
    [Calendar,      'Improve Follow-Up Coordination',     'Use assigned tasks and follow-up workflows to help sales teams manage pending customer activities.'],
    [Eye,           'Increase Sales Process Visibility',  'Track opportunities across defined pipeline stages and identify actions requiring attention.'],
    [Users,         'Support Sales Team Collaboration',   'Provide authorized team members with relevant customer information and assigned responsibilities.'],
    [PieChart,      'Make Informed Sales Decisions',      'Use available reports and dashboards to review sales activities, lead progress and pipeline information.'],
];

const industries = [
    [Store,         'Retail & Wholesale Businesses',          'Maintain customer information, business enquiries, wholesale opportunities and relevant follow-up records.'],
    [Building2,     'Manufacturing Businesses',               'Organize B2B enquiries, distributor information, quotations and sales opportunity workflows.'],
    [Home,          'Real Estate & Property Services',        'Track property enquiries, prospective buyers, site visit information and customer follow-ups.'],
    [GraduationCap, 'Educational Institutions',               'Manage course enquiries, prospective student information, admission-related follow-ups and communication records.'],
    [HeartPulse,    'Healthcare & Service Providers',         'Organize non-clinical customer enquiries, service requests and administrative follow-ups.'],
    [Briefcase,     'Professional Service Companies',         'Track client enquiries, proposals, business opportunities and ongoing relationship activities.'],
];

const comparisons = [
    ['Lead records',       'Separate spreadsheets or registers',  'Structured lead profiles'],
    ['Customer details',   'Distributed across files',            'Organized customer records'],
    ['Follow-up tracking', 'Manual notes and reminders',          'Defined follow-up activities'],
    ['Sales pipeline',     'Independently maintained lists',      'Opportunity stages and status'],
    ['Team assignments',   'Informal communication',              'Recorded lead ownership'],
    ['Customer history',   'Emails, messages and notes',          'Linked interaction records'],
    ['Sales reports',      'Manual data consolidation',           'Structured pipeline and activity reports'],
];

const security = [
    ['Customer Data Security',           'Consider authentication, role-based access, secure data handling, backups and appropriate activity records.'],
    ['Lead & Customer Data Quality',     'Review existing customer information, duplicate records, missing details and data entry requirements.'],
    ['Integration with Existing Apps',   'Evaluate whether the CRM needs to exchange information with websites, email platforms, billing software, ERP or other business systems.'],
    ['Data Migration & Employee Training','Plan how existing customer records will be transferred, how sales stages will be configured and how employees will use the application.'],
];

const whyFly = [
    ['Business Requirement Assessment', 'Understand your customer enquiry channels, sales activities, team structure and existing customer management processes.'],
    ['Configurable CRM Planning',       'Identify relevant lead stages, customer information fields, opportunity workflows and reporting requirements.'],
    ['Practical User Experience',       'Plan interfaces around the needs of sales representatives, business owners, managers and authorized employees.'],
    ['Integration & Implementation',    'Review existing applications, customer data and technical dependencies before defining the proposed CRM implementation.'],
];

const faqs = [
    ['What is CRM software?',                                              'CRM software is a business application used to manage customer information, track leads, organize sales opportunities and maintain records of customer interactions. It helps businesses coordinate customer-facing activities.'],
    ['What is the best CRM software for a small business?',               'The best CRM software for a small business depends on lead volume, sales processes, team size, ease of use, reporting requirements, integrations and budget. Businesses should compare available solutions against their actual needs.'],
    ['Is CRM software suitable for small businesses?',                    'Yes. CRM software can help small businesses organize customer records, manage enquiries, track follow-ups and maintain visibility into sales activities. Required features depend on the organization\'s workflows.'],
    ['What is the difference between CRM and sales management software?', 'CRM software focuses on customer relationships, contact information and interactions. Sales management software emphasizes sales pipelines, opportunities, activities and team performance. Many CRM products include both capabilities.'],
    ['Can CRM software track customer enquiries and follow-ups?',         'Many CRM systems support lead records, assigned responsibilities, follow-up dates and activity tracking. Specific reminder and automation capabilities vary between products.'],
    ['Can CRM software integrate with websites and billing software?',    'Integration may be possible through compatible APIs, supported data exchange methods or authorized application connections. Feasibility depends on the CRM product and existing software systems.'],
    ['Can CRM software help manage multiple sales employees?',            'CRM applications may support lead assignment, user roles, sales activity records and pipeline visibility for teams. Available team management features depend on the product.'],
    ['How much does CRM software cost in Tamil Nadu?',                    'CRM software pricing varies based on the product, number of users, available features, deployment model, integrations, customization and support arrangements. Request a quotation based on your requirements.'],
];

/* ══ Scroll-reveal hook ═══════════════════════════════════════════════ */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('cr-visible'); obs.disconnect(); } },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

/* ══ Sub-components ═══════════════════════════════════════════════════ */
const Heading = ({ eyebrow, title, text }) => {
    const words = title.split(' ');
    const splitAt = Math.ceil(words.length / 2);

    return (
        <header className="cr-heading">
            <span className="cr-tag">{eyebrow}</span>
            <h2>
                <span className="cr-heading-navy">{words.slice(0, splitAt).join(' ')}</span>{' '}
                <span className="cr-heading-yellow">{words.slice(splitAt).join(' ')}</span>
            </h2>
            {text && <p>{text}</p>}
        </header>
    );
};

function RevealCard({ children, delay = 0, className = '' }) {
    const ref = useReveal();
    return (
        <article ref={ref} className={`cr-card cr-reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
            {children}
        </article>
    );
}

/* ══ Pipeline stage pill ═══════════════════════════════════════════════ */
const stages = [
    { label: 'New', color: '#3b82f6', count: 8 },
    { label: 'Qualified', color: '#8b5cf6', count: 5 },
    { label: 'Proposal', color: '#f59e0b', count: 4 },
    { label: 'Negotiation', color: '#ef4444', count: 2 },
    { label: 'Won', color: '#10b981', count: 3 },
];

/* ══ Main page ════════════════════════════════════════════════════════ */
export default function CRMSoftware() {
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'CRM Software for Small Businesses in Tamil Nadu | FlyTowards';
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Explore FlyTowards CRM Software for lead management, customer records, sales pipeline tracking and follow-up workflows. Planned for small businesses in Tamil Nadu.');
    }, []);

    return (
        <main className="cr-page">
            <style>{`
/* ══════════════════════════════════════════════════════════════
   CRM SOFTWARE PAGE  —  cr-* namespace
══════════════════════════════════════════════════════════════ */
.cr-page{
  --ink:#142B4A;--muted:#657185;--line:#e6eaf0;--gold:#facc15;
  --amber:#eab308;--dark:#142B4A;--soft:#f7f8fa;--blue:#142B4A;
  background:#fff;color:var(--ink);
  font-family:'Outfit',sans-serif;overflow-x:hidden
}
.cr-page *{box-sizing:border-box}
.cr-wrap{width:min(1180px,90%);margin:auto}
.cr-section{padding:80px 0}
.cr-soft{background:var(--soft)}

/* ── Tag & heading ── */
.cr-tag{
  display:inline-flex;align-items:center;gap:7px;
  border:1px solid #facc15;background:#fff7cc;color:#142B4A;
  border-radius:99px;padding:6px 14px;font-weight:800;
  font-size:.75rem;letter-spacing:.1em;text-transform:uppercase
}
.cr-heading{text-align:center;max-width:860px;margin:0 auto 36px}
.cr-heading h2{font-size:clamp(2rem,4vw,3rem);line-height:1.12;margin:14px 0;font-weight:900;letter-spacing:-.03em}
.cr-heading-navy{color:#142B4A}
.cr-heading-yellow{color:#d6a900}
.cr-heading p{color:var(--muted);line-height:1.75;margin:0}

/* ── Buttons ── */
.cr-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:9px;
  padding:14px 22px;border-radius:99px;text-decoration:none;font-weight:800;
  transition:transform .2s,box-shadow .2s;font-family:inherit;border:0;cursor:pointer
}
.cr-btn:hover{transform:translateY(-3px);box-shadow:0 10px 24px #17203324}
.cr-primary{background:var(--dark);color:#fff}
.cr-primary svg{color:var(--gold)}
.cr-secondary{border:1px solid #cbd2dc!important;background:#fff;color:#273449}

/* ── Hero ── */
.cr-hero{
  min-height:650px;padding:140px 0 80px;display:flex;align-items:center;
  background:
    radial-gradient(ellipse at 78% 25%,#fff4c4,transparent 36%),
  radial-gradient(ellipse at 5%  72%,#fff8dc,transparent 38%)
}
.cr-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}
.cr-page h1{font-size:clamp(2.6rem,5.5vw,4.6rem);line-height:1.04;letter-spacing:-.05em;margin:20px 0;font-weight:900;color:#142B4A}
.cr-page h1 em{display:block;color:var(--gold);font-style:normal}
.cr-lead{font-size:1.07rem;line-height:1.72;color:#586579}
.cr-actions{display:flex;gap:11px;flex-wrap:wrap;margin:24px 0}
.cr-hls{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.cr-hl{display:flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid var(--line);border-radius:12px;font-size:.84rem;font-weight:650;background:#ffffffcf}
.cr-hl svg{color:#9a7900;flex:none}
.cr-note{font-size:.78rem;color:#798397;line-height:1.5;margin-top:12px}

/* ── Animated CRM dashboard ── */
.cr-dashboard{
  position:relative;padding:18px;border-radius:26px;
  background:linear-gradient(145deg,#1e3a5f,#111827);
  box-shadow:0 28px 70px #11182738
}
.cr-dash-top{display:flex;justify-content:space-between;color:#fff;padding:4px 4px 14px;font-weight:750}
.cr-dash-body{background:#f8fafc;border-radius:18px;padding:16px}
/* pipeline stages row */
.cr-stages{display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap}
.cr-stage{
  flex:1;min-width:50px;border-radius:10px;padding:8px 6px;text-align:center;
  color:#fff;font-size:.7rem;font-weight:800
}
.cr-stage span{display:block;font-size:1.1rem;font-weight:900}
/* lead list */
.cr-leads{background:#fff;border-radius:12px;padding:12px}
.cr-lead-row{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid #eef0f3;font-size:.8rem}
.cr-lead-row:last-child{border:0}
.cr-lead-name{font-weight:700}
.cr-lead-badge{padding:3px 9px;border-radius:99px;font-size:.7rem;font-weight:800;color:#fff}
/* stat row */
.cr-statrow{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:12px}
.cr-stat{background:#fff;border:1px solid var(--line);border-radius:12px;padding:11px;font-size:.82rem}
.cr-stat strong{display:block;margin-top:4px;font-size:.95rem}
.cr-badge{position:absolute;right:-8px;bottom:22px;background:#fff;border-radius:12px;padding:11px 13px;box-shadow:0 10px 28px #11182724;font-size:.72rem;font-weight:750;display:flex;align-items:center;gap:6px}
/* animated progress bar */
.cr-progress-wrap{margin-top:12px;background:#fff;border-radius:12px;padding:12px}
.cr-progress-label{display:flex;justify-content:space-between;font-size:.74rem;margin-bottom:5px;font-weight:700}
.cr-progress-bar{height:7px;background:#f1f3f6;border-radius:99px;overflow:hidden;margin-bottom:9px}
.cr-progress-fill{height:100%;border-radius:99px;animation:crGrow 1.5s ease forwards;width:0}
@keyframes crGrow{to{width:var(--w)}}

/* ── Grid cards ── */
.cr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.cr-grid-2{grid-template-columns:repeat(2,1fr)}
.cr-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 5px 20px #17203309;transition:transform .25s,box-shadow .25s}
.cr-card:hover{transform:translateY(-5px);box-shadow:0 16px 32px #17203318}
.cr-card h3{font-size:1.05rem;margin:0 0 8px}
.cr-card p{color:var(--muted);font-size:.9rem;line-height:1.65;margin:0}
.cr-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:12px;background:#fff7cc;color:#142B4A;margin-bottom:14px}
.cr-num{font-size:.74rem;color:#967600;font-weight:900;letter-spacing:.1em;margin-bottom:9px}
.cr-chip{display:inline-block;background:#f1f3f6;color:#616d7f;border-radius:7px;padding:5px 7px;font-size:.7rem;margin:8px 3px 0 0}

/* ── Scroll-reveal ── */
.cr-reveal{opacity:0;transform:translateY(24px);transition:opacity .65s ease,transform .65s ease}
.cr-visible{opacity:1!important;transform:translateY(0)!important}

/* ── Steps ── */
.cr-steps{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
.cr-step{background:#fff;border:1px solid var(--line);border-radius:15px;padding:14px 12px}
.cr-step-num{display:grid;place-items:center;width:33px;height:33px;border-radius:50%;background:var(--dark);color:var(--gold);margin-bottom:11px;font-weight:900;font-size:.85rem}
.cr-step h3{font-size:.88rem;margin:0 0 6px}
.cr-step p{font-size:.78rem;color:var(--muted);line-height:1.5;margin:0}
.cr-flow{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:7px;margin-top:20px;font-size:.76rem;font-weight:750}
.cr-flow span{border:1px solid var(--line);padding:7px 12px;border-radius:99px;background:#fff}

/* ── Benefits ── */
.cr-benefits-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:40px;align-items:center}
.cr-visual{background:linear-gradient(145deg,#1e3a5f,#111827);border-radius:22px;padding:24px;color:#fff}
.cr-vrow{display:flex;justify-content:space-between;padding:13px 0;border-bottom:1px solid #ffffff22;color:#e5e7eb}
.cr-vrow b{color:#facc15}
.cr-benefit{display:grid;grid-template-columns:36px 1fr;gap:11px;padding:12px 0;border-bottom:1px solid var(--line)}
.cr-benefit:last-child{border:0}
.cr-benefit i{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:#fff7cc;color:#142B4A;font-style:normal}
.cr-benefit h3{font-size:.96rem;margin:0 0 4px}
.cr-benefit p{font-size:.86rem;line-height:1.5;color:var(--muted);margin:0}

/* ── Table ── */
.cr-table-wrap{overflow:auto;border:1px solid var(--line);border-radius:16px}
.cr-table{width:100%;min-width:620px;border-collapse:collapse}
.cr-table th,.cr-table td{text-align:left;padding:13px 15px;border-bottom:1px solid #edf0f3}
.cr-table th{background:var(--dark);color:#fff}
.cr-table td{font-size:.86rem;color:#566174}
.cr-table td:last-child{font-weight:700;color:#29364a}
.cr-table tr:last-child td{border:0}
.cr-callout{background:var(--dark);color:#fff;padding:22px;border-radius:17px;margin-top:18px}
.cr-callout p{color:#d4d9e2;line-height:1.65;margin:8px 0 0}

/* ── CRM vs Sales section ── */
.cr-vs-grid{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:28px}
.cr-vs-box{border:1px solid var(--line);border-radius:18px;padding:22px}
.cr-vs-box h3{font-size:1rem;margin:0 0 12px}
.cr-vs-box ul{padding-left:18px;color:var(--muted);font-size:.88rem;line-height:2}
.cr-pipeline-visual{background:linear-gradient(145deg,#1e3a5f,#111827);border-radius:18px;padding:20px;color:#fff}
.cr-pipeline-visual h4{color:var(--gold);font-size:.82rem;letter-spacing:.06em;text-transform:uppercase;margin:0 0 16px}
.cr-pipe-stage{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #ffffff15}
.cr-pipe-stage:last-child{border:0}
.cr-pipe-dot{width:10px;height:10px;border-radius:50%;flex:none}
.cr-pipe-info{flex:1}
.cr-pipe-info span{font-size:.8rem;color:#94a3b8}
.cr-pipe-info strong{display:block;font-size:.88rem}
.cr-pipe-count{font-size:.8rem;color:#facc15;font-weight:800}

/* ── Security blocks ── */
.cr-security{display:grid;grid-template-columns:1fr 1fr;gap:13px}
.cr-sec-item{display:grid;grid-template-columns:38px 1fr;gap:11px;border:1px solid var(--line);border-radius:15px;padding:18px}
.cr-sec-num{display:grid;place-items:center;width:36px;height:36px;border-radius:10px;background:#fff7cc;color:#142B4A;font-weight:900;font-style:normal}
.cr-sec-item h3{font-size:.94rem;margin:0 0 5px}
.cr-sec-item p{font-size:.84rem;color:var(--muted);line-height:1.5;margin:0}

/* ── Warning ── */
.cr-warning{display:flex;gap:9px;align-items:flex-start;padding:13px 15px;margin-top:18px;border:1px solid #f1df8d;border-radius:13px;background:#fffbea;color:#142B4A;font-size:.85rem;line-height:1.55}
.cr-warning svg{flex:none;color:#a98500}
.cr-warn-amber{border-color:#f1df8d;background:#fffbea;color:#675623}
.cr-warn-amber svg{color:#a98500}

/* ── FAQ ── */
.cr-faq{max-width:900px;margin:auto;display:grid;gap:9px}
.cr-faq-item{border:1px solid var(--line);border-radius:13px;overflow:hidden}
.cr-faq button{border:0;background:#fff;width:100%;padding:15px 18px;text-align:left;display:flex;justify-content:space-between;gap:10px;font:inherit;font-weight:750;color:#29364a;cursor:pointer}
.cr-faq button svg{flex:none;transition:transform .22s}
.cr-answer{padding:0 18px 16px;color:var(--muted);line-height:1.65;font-size:.9rem}

/* ── Final CTA ── */
.cr-final{padding:50px 28px;text-align:center;color:#fff;background:radial-gradient(ellipse at 90% 0,#1e3a5f,#111827 64%);border-radius:26px}
.cr-final h2{font-size:clamp(2rem,4vw,3rem);margin:16px auto;max-width:820px}
.cr-final p{max-width:790px;color:#d2d8e1;line-height:1.65;margin:0 auto}

/* ── Animations ── */
.cr-float{animation:crFloat 6s ease-in-out infinite}
@keyframes crFloat{50%{transform:translateY(-9px)}}
.cr-pulse{animation:crPulse 2.5s ease-in-out infinite}
@keyframes crPulse{0%,100%{opacity:1}50%{opacity:.65}}

/* ── Responsive ── */
@media(max-width:960px){
  .cr-hero-grid,.cr-benefits-grid,.cr-vs-grid{grid-template-columns:1fr}
  .cr-dashboard{max-width:580px;margin:auto}
  .cr-grid{grid-template-columns:repeat(2,1fr)}
  .cr-steps{grid-template-columns:repeat(3,1fr)}
  .cr-pipeline-visual{position:static}
}
@media(max-width:620px){
  .cr-section{padding:58px 0}
  .cr-wrap{width:calc(100% - 28px)}
  .cr-hero{padding:120px 0 56px}
  .cr-page h1{font-size:clamp(2.4rem,13vw,3.6rem)}
  .cr-grid,.cr-grid-2,.cr-hls,.cr-steps,.cr-security{grid-template-columns:1fr}
  .cr-actions .cr-btn{width:100%}
  .cr-badge{right:4px;bottom:4px}
}
@media(prefers-reduced-motion:reduce){
  .cr-reveal,.cr-float,.cr-pulse,.cr-progress-fill{animation:none!important;opacity:1!important;transform:none!important;width:var(--w)!important}
  .cr-card,.cr-btn{transition:none!important}
}
            `}</style>

            {/* ══ 01 — HERO ════════════════════════════════════════════════════ */}
            <section className="cr-hero">
                <div className="cr-wrap cr-hero-grid">
                    {/* Left */}
                    <div>
                        <span className="cr-tag"><Users size={15}/> CRM software · Tamil Nadu</span>
                        <h1>CRM Software for Small Businesses <em>in Tamil Nadu</em></h1>
                        <p className="cr-lead">Manage Customer Relationships, Track Leads and Organize Sales Activities</p>
                        <p className="cr-lead" style={{marginTop:10}}>
                            Managing customer enquiries, sales opportunities and follow-ups through spreadsheets, messaging apps or
                            disconnected tools can make it difficult to maintain consistent customer information. FlyTowards CRM
                            Software is a proposed customer relationship management solution for small and growing businesses across
                            Tamil Nadu, particularly South Tamil Nadu.
                        </p>
                        <div className="cr-actions">
                            <Link to="/contact" className="cr-btn cr-primary">Request a CRM Software Demo <ArrowRight size={17}/></Link>
                            <Link to="/contact" className="cr-btn cr-secondary">Discuss Your CRM Requirements</Link>
                        </div>
                        <div className="cr-hls">
                            {highlights.map(x => (
                                <div className="cr-hl" key={x}><CheckCircle2 size={16}/>{x}</div>
                            ))}
                        </div>
                        <p className="cr-note">Product capabilities and demo availability are subject to confirmation.</p>
                    </div>

                    {/* Right – animated CRM dashboard */}
                    <div className="cr-dashboard cr-float" aria-label="Illustrative CRM dashboard preview">
                        <div className="cr-dash-top">
                            <span>CRM overview</span>
                            <span style={{color:'#facc15'}}>Illustrative</span>
                        </div>
                        <div className="cr-dash-body">
                            {/* Pipeline stages */}
                            <div style={{fontSize:'.72rem',letterSpacing:'.05em',color:'#8898aa',marginBottom:8}}>SALES PIPELINE</div>
                            <div className="cr-stages">
                                {stages.map(s => (
                                    <div className="cr-stage" key={s.label} style={{background:s.color}}>
                                        <span>{s.count}</span>{s.label}
                                    </div>
                                ))}
                            </div>

                            {/* Lead list */}
                            <div className="cr-leads">
                                <div style={{fontSize:'.72rem',letterSpacing:'.05em',color:'#8898aa',marginBottom:4}}>RECENT LEADS</div>
                                {[
                                    ['Rajan Textiles',   'New',         '#3b82f6'],
                                    ['Priya Medical',    'Qualified',   '#8b5cf6'],
                                    ['Kumar Wholesale',  'Proposal',    '#f59e0b'],
                                    ['Meena Traders',    'Follow-up',   '#10b981'],
                                ].map(([name, status, color]) => (
                                    <div className="cr-lead-row" key={name}>
                                        <span className="cr-lead-name">{name}</span>
                                        <span className="cr-lead-badge" style={{background:color}}>{status}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Progress bars */}
                            <div className="cr-progress-wrap">
                                <div style={{fontSize:'.72rem',letterSpacing:'.05em',color:'#8898aa',marginBottom:8}}>CONVERSION PROGRESS</div>
                                {[['Leads qualified','68%','#8b5cf6'],['Follow-ups done','54%','#f59e0b'],['Deals won','32%','#10b981']].map(([label,pct,color])=>(
                                    <div key={label}>
                                        <div className="cr-progress-label"><span>{label}</span><span>{pct}</span></div>
                                        <div className="cr-progress-bar">
                                            <div className="cr-progress-fill" style={{'--w':pct,background:color}}/>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="cr-statrow">
                                <div className="cr-stat">Total Leads<strong>22 Active</strong></div>
                                <div className="cr-stat">Pipeline Value<strong>₹8.4 L est.</strong></div>
                            </div>
                        </div>
                        <div className="cr-badge"><Target size={13}/> Concept preview · not live product UI</div>
                    </div>
                </div>
            </section>

            {/* ══ 02 — PRODUCT OVERVIEW ════════════════════════════════════════ */}
            <section className="cr-section">
                <div className="cr-wrap">
                    <Heading eyebrow="Product overview" title="What Is CRM Software and How Does It Work?"/>
                    <p style={{textAlign:'center',maxWidth:860,margin:'-10px auto 30px',color:'var(--muted)',lineHeight:1.75}}>
                        CRM software is a business application used to organize customer information, track enquiries, manage sales
                        opportunities and maintain records of customer interactions. For small businesses, CRM software can support
                        enquiry handling, customer follow-ups, sales coordination and relationship management. FlyTowards CRM Software
                        is being positioned around practical customer and sales management requirements for organizations that need more
                        organized workflows.
                    </p>
                    <div className="cr-grid cr-grid-2">
                        {overview.map(([Icon,title,text],i) => (
                            <RevealCard key={title} delay={i*80}>
                                <div className="cr-icon"><Icon size={21}/></div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 03 — CHALLENGES ══════════════════════════════════════════════ */}
            <section className="cr-section cr-soft">
                <div className="cr-wrap">
                    <Heading eyebrow="Everyday operations" title="Common Customer Management Challenges Faced by Small Businesses"
                        text="Customer management becomes harder when enquiries, follow-ups and sales records are spread across different tools and teams."/>
                    <div className="cr-grid">
                        {challenges.map(([title,text],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="cr-num">CHALLENGE 0{i+1}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 04 — FEATURES ════════════════════════════════════════════════ */}
            <section className="cr-section">
                <div className="cr-wrap">
                    <Heading eyebrow="Proposed capabilities" title="Key Features Planned for FlyTowards CRM Software"
                        text="The following are proposed product capabilities. Their availability, configuration and implementation scope must be verified before publication."/>
                    <div className="cr-grid">
                        {features.map(([title,text,tags],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="cr-num">0{i+1} · PLANNED</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                                <div style={{marginTop:10}}>
                                    {tags.split(' · ').map(t => <span className="cr-chip" key={t}>{t}</span>)}
                                </div>
                            </RevealCard>
                        ))}
                    </div>
                    <div className="cr-warning cr-warn-amber"><HelpCircle size={18}/>Feature examples describe planning scope only. Confirm product support before relying on any capability.</div>
                </div>
            </section>

            {/* ══ 05 — HOW IT WORKS ════════════════════════════════════════════ */}
            <section className="cr-section cr-soft">
                <div className="cr-wrap">
                    <Heading eyebrow="Illustrative workflow" title="How Does CRM Software Simplify Lead and Customer Management?"
                        text="A CRM system helps organize the stages involved in handling enquiries, maintaining customer relationships and managing sales opportunities."/>
                    <div className="cr-steps">
                        {steps.map(([title,text],i) => (
                            <article className="cr-step" key={title}>
                                <div className="cr-step-num">{String(i+1).padStart(2,'0')}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                    <div className="cr-flow">
                        {['Customer Enquiry','Lead Assignment','Lead Qualification','Follow-Up','Sales Opportunity','CRM'].map((x,i,arr)=>(
                            <span key={x+i}>{x}{i<arr.length-1 ? <span style={{color:'#94a3b8'}}> → </span> : ''}</span>
                        ))}
                    </div>
                    <div className="cr-warning cr-warn-amber" style={{marginTop:20}}>
                        <HelpCircle size={18}/>These are illustrative CRM workflows. Automated lead capture, reminders, quotations and other functions depend on verified product capabilities.
                    </div>
                </div>
            </section>

            {/* ══ 06 — BENEFITS ════════════════════════════════════════════════ */}
            <section className="cr-section">
                <div className="cr-wrap">
                    <div className="cr-benefits-grid">
                        {/* Left illustration */}
                        <div className="cr-visual">
                            <span className="cr-tag">CRM dashboard</span>
                            <h3 style={{marginTop:14,color:'#fff'}}>Sales activity overview</h3>
                            {[
                                ['Active leads',       '22 enquiries'],
                                ['Follow-ups pending', '9 scheduled'],
                                ['Deals in pipeline',  '14 open'],
                                ['Leads won (month)',  '3 converted'],
                                ['Pipeline est. value','₹8.4 L'],
                            ].map(([k,v]) => (
                                <div className="cr-vrow" key={k}><span>{k}</span><b>{v}</b></div>
                            ))}
                            <p className="cr-note" style={{color:'#c5ccd7',marginTop:14}}>Illustrative figures · not live product data</p>
                        </div>

                        {/* Right benefits */}
                        <div>
                            <Heading eyebrow="Business benefits" title="Benefits of CRM Software for Small Businesses"
                                text="A structured CRM can simplify customer management and improve sales process visibility."/>
                            {benefits.map(([Icon,title,text]) => (
                                <div className="cr-benefit" key={title}>
                                    <i><Icon size={16}/></i>
                                    <div><h3>{title}</h3><p>{text}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 07 — INDUSTRIES ══════════════════════════════════════════════ */}
            <section className="cr-section cr-soft">
                <div className="cr-wrap">
                    <Heading eyebrow="Regional requirements" title="CRM Software for Businesses Across Tamil Nadu"
                        text="Customer management requirements vary according to industry, sales process and customer interaction methods."/>
                    <div className="cr-grid">
                        {industries.map(([Icon,title,text],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="cr-icon"><Icon size={21}/></div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                    <p className="cr-note" style={{textAlign:'center',marginTop:20}}>
                        <b>Regional focus:</b> Tirunelveli, Tenkasi, Sankarankovil, Madurai, Thoothukudi, Kanyakumari and other markets across Tamil Nadu.
                    </p>
                </div>
            </section>

            {/* ══ 08 — COMPARISON TABLE ════════════════════════════════════════ */}
            <section className="cr-section">
                <div className="cr-wrap">
                    <Heading eyebrow="Compare approaches" title="CRM Software vs Excel-Based Customer Management"
                        text="The appropriate choice depends on business size, sales complexity, budget and customer management requirements."/>
                    <div className="cr-table-wrap">
                        <table className="cr-table">
                            <thead><tr><th>Activity</th><th>Manual Customer Management</th><th>CRM Software</th></tr></thead>
                            <tbody>
                                {comparisons.map(([a,b,c]) => (
                                    <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cr-callout">
                        <h3>Is CRM Software Better Than Excel for Small Businesses?</h3>
                        <p>Excel may be sufficient for businesses with a small number of enquiries and simple customer tracking requirements. CRM software becomes more useful when enquiry volumes increase, multiple employees manage leads or the business needs consistent follow-up records and sales pipeline visibility.</p>
                    </div>
                </div>
            </section>

            {/* ══ 09 — CRM VS SALES MANAGEMENT ═════════════════════════════════ */}
            <section className="cr-section cr-soft">
                <div className="cr-wrap">
                    <Heading eyebrow="Understanding the difference" title="CRM Software vs Sales Management Software: What's the Difference?"
                        text="CRM software and sales management software often share similar features, but their primary purposes can differ."/>

                    <div className="cr-vs-grid">
                        {/* Left: two boxes + checklist */}
                        <div>
                            <div style={{display:'grid',gap:12,marginBottom:20}}>
                                <div className="cr-vs-box">
                                    <h3 style={{color:'#142B4A'}}>CRM Software</h3>
                                    <p style={{color:'var(--muted)',fontSize:'.88rem',lineHeight:1.65}}>Focuses on organizing customer information, managing interactions and supporting relationships throughout the customer lifecycle.</p>
                                </div>
                                <div className="cr-vs-box">
                                    <h3 style={{color:'#d6a900'}}>Sales Management Software</h3>
                                    <p style={{color:'var(--muted)',fontSize:'.88rem',lineHeight:1.65}}>Focuses more specifically on sales opportunities, sales activities, pipeline tracking and sales team performance.</p>
                                </div>
                            </div>
                            <h3 style={{marginBottom:12}}>When Should a Small Business Consider CRM Software?</h3>
                            <ul style={{padding:0,listStyle:'none',display:'grid',gap:8}}>
                                {[
                                    'Customer enquiries arrive through multiple channels.',
                                    'Sales employees need structured lead assignments.',
                                    'Follow-up activities are difficult to monitor.',
                                    'Customer information is maintained in separate applications.',
                                    'Managers need better visibility into sales opportunities.',
                                    'The business wants to organize customer relationships as operations grow.',
                                ].map(x => (
                                    <li key={x} style={{display:'flex',alignItems:'flex-start',gap:9,fontSize:'.88rem',color:'var(--muted)'}}>
                                        <CheckCircle2 size={16} style={{color:'#142B4A',flexShrink:0,marginTop:2}}/>{x}
                                    </li>
                                ))}
                            </ul>
                            <div className="cr-actions" style={{marginTop:20}}>
                                <Link to="/contact" className="cr-btn cr-primary">Discuss Your Customer & Sales Management Requirements <ArrowRight size={16}/></Link>
                            </div>
                        </div>

                        {/* Right: pipeline visual */}
                        <div className="cr-pipeline-visual">
                            <h4>Sales Pipeline Stages · Illustrative</h4>
                            {[
                                ['New Enquiry',   8, '#3b82f6', '₹—'],
                                ['Qualified',     5, '#8b5cf6', '₹2.1 L'],
                                ['Proposal Sent', 4, '#f59e0b', '₹3.5 L'],
                                ['Negotiation',   2, '#ef4444', '₹1.8 L'],
                                ['Won',           3, '#10b981', '₹1.0 L'],
                            ].map(([label,count,color,val]) => (
                                <div className="cr-pipe-stage" key={label}>
                                    <div className="cr-pipe-dot" style={{background:color}}/>
                                    <div className="cr-pipe-info">
                                        <strong>{label}</strong>
                                        <span>{count} leads</span>
                                    </div>
                                    <span className="cr-pipe-count">{val}</span>
                                </div>
                            ))}
                            <p style={{color:'#94a3b8',fontSize:'.72rem',marginTop:14,lineHeight:1.5}}>Illustrative pipeline · not live data. Specific sales management features in FlyTowards CRM must be confirmed before publication.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 10 — SECURITY & IMPLEMENTATION ══════════════════════════════ */}
            <section className="cr-section">
                <div className="cr-wrap">
                    <Heading eyebrow="Plan with care" title="Important Considerations When Choosing Customer Management Software"
                        text="Customer management software handles contact information, business enquiries and potentially sensitive customer-related records. Evaluate security, integration requirements and data management before implementation."/>
                    <div className="cr-security">
                        {security.map(([title,text],i) => (
                            <article className="cr-sec-item" key={title}>
                                <i className="cr-sec-num">0{i+1}</i>
                                <div><h3>{title}</h3><p>{text}</p></div>
                            </article>
                        ))}
                    </div>
                    <div className="cr-warning cr-warn-amber" style={{marginTop:16}}>
                        <AlertCircle size={18}/>Integration availability, data migration options, deployment methods and security capabilities depend on the verified product and agreed implementation scope.
                    </div>
                </div>
            </section>

            {/* ══ 11 — WHY FLYTOWARDS ══════════════════════════════════════════ */}
            <section className="cr-section cr-soft">
                <div className="cr-wrap">
                    <Heading eyebrow="Planning with FlyTowards" title="Why Consider FlyTowards for CRM Software in Tamil Nadu?"
                        text="FlyTowards approaches software planning through business requirements, practical workflows and implementation considerations — not just feature comparisons."/>
                    <div className="cr-grid cr-grid-2">
                        {whyFly.map(([title,text],i) => (
                            <RevealCard key={title} delay={i*80}>
                                <div className="cr-num">0{i+1}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                    <div className="cr-actions" style={{justifyContent:'center',marginTop:28}}>
                        <Link to="/contact" className="cr-btn cr-primary">Discuss Your CRM Software Requirements <ArrowRight size={16}/></Link>
                    </div>
                </div>
            </section>

            {/* ══ 12 — FAQ ═════════════════════════════════════════════════════ */}
            <section className="cr-section">
                <div className="cr-wrap">
                    <Heading eyebrow="FAQ" title="Frequently Asked Questions About CRM Software"/>
                    <div className="cr-faq">
                        {faqs.map(([q,a],i) => (
                            <div className="cr-faq-item" key={q}>
                                <button aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                                    <span>{q}</span>
                                    <ChevronDown size={18} style={{transform:openFaq===i?'rotate(180deg)':'none'}}/>
                                </button>
                                {openFaq===i && <div className="cr-answer">{a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 13 — FINAL CTA ═══════════════════════════════════════════════ */}
            <section id="contact" className="cr-section" style={{paddingTop:0}}>
                <div className="cr-wrap">
                    <div className="cr-final">
                        <span className="cr-tag">CRM software · Tamil Nadu</span>
                        <h2>Make Customer & Sales Management More Organized</h2>
                        <p>
                            Whether your business handles a few enquiries each week or manages a growing sales pipeline, structured
                            customer information and follow-up processes can support more consistent sales operations across Tamil Nadu.
                        </p>
                        <div className="cr-actions" style={{justifyContent:'center',marginTop:24}}>
                            <Link to="/contact" className="cr-btn cr-primary">Request a CRM Software Demo <ArrowRight size={17}/></Link>
                            <Link to="/contact" className="cr-btn cr-secondary">Get a CRM Software Consultation</Link>
                        </div>
                        <p className="cr-note" style={{color:'#c5ccd7',marginTop:14}}>
                            Confirm product availability, supported features and demo arrangements before publishing these calls to action.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
