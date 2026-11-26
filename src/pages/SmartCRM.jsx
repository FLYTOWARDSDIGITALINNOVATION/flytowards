import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, CheckCircle2, ChevronDown, AlertCircle,
    Users, TrendingUp, Bell, BarChart3, Target, Zap,
    Brain, GitMerge, Eye, Database, Building2, Store,
    GraduationCap, Factory, Briefcase, HardHat, Star,
    MessageSquare, Mail, Phone, PieChart, Layers, Shield,
    FileText, Settings2, Clock3, UserPlus, ChevronRight
} from 'lucide-react';

/* ═══════════ Static data ════════════════════════════════════════════ */
const highlights = [
    'AI-Assisted Lead Prioritization',
    'Intelligent Sales Pipeline Tracking',
    'Automated Follow-Up Workflows',
    'Customer Insights & Sales Analytics',
];

const overview = [
    [Brain,       'Smart Lead Management',       'Organize enquiries, lead ownership and potential sales opportunities.'],
    [Star,        'AI-Assisted Sales Insights',  'Explore intelligent lead prioritization and opportunity analysis.'],
    [Bell,        'Follow-Up Automation',        'Plan reminders, assigned tasks and structured customer follow-ups.'],
    [BarChart3,   'Sales Performance Visibility', 'Review pipeline progress, team activities and relevant sales information.'],
];

const challenges = [
    [Database,    'Unorganized Customer Enquiries',    'Leads received through websites, calls, emails and messaging applications can become difficult to track when information is maintained across separate systems.'],
    [Target,      'Difficulty Identifying High-Priority Leads', 'Sales employees may spend similar amounts of time on every enquiry without a consistent method for assessing customer interest, urgency or potential value.'],
    [Clock3,      'Missed Follow-Up Opportunities',    'Manual reminders and scattered task records can result in delayed customer communication and missed sales opportunities.'],
    [Eye,         'Limited Sales Pipeline Visibility', 'Business owners may struggle to understand which opportunities require attention and how leads are progressing through different sales stages.'],
    [Zap,         'Repetitive Sales Administration',   'Manual lead assignments, status updates and follow-up scheduling can consume valuable employee time.'],
    [BarChart3,   'Limited Customer & Sales Insights', 'Without consolidated customer records and structured reporting, businesses may find it difficult to recognize sales patterns or identify areas for improvement.'],
];

const features = [
    {
        num: '01',
        title: 'Intelligent Lead & Enquiry Management',
        desc: 'Organize customer enquiries in a centralized system and explore AI-assisted methods for identifying leads that may require faster attention.',
        fns: 'Lead profiles, enquiry source tracking, lead assignment, status updates, notes and potential AI-based lead categorization.',
    },
    {
        num: '02',
        title: 'AI-Assisted Lead Scoring & Prioritization',
        desc: 'AI lead scoring can analyze relevant lead characteristics and activity signals to help sales teams prioritize potential customers.',
        fns: 'Lead scoring criteria, customer interest indicators, priority recommendations and configurable qualification rules.',
        note: 'AI-generated scores should support sales decisions rather than replace employee judgment.',
    },
    {
        num: '03',
        title: 'Smart Follow-Up & Workflow Automation',
        desc: 'Support more consistent customer communication through structured follow-up activities and potential automation.',
        fns: 'Follow-up scheduling, task reminders, activity tracking, workflow triggers and AI-assisted next-action suggestions.',
    },
    {
        num: '04',
        title: 'Customer & Contact Intelligence',
        desc: 'Maintain customer information and interaction records to give authorized employees a clearer view of each relationship.',
        fns: 'Customer profiles, contact records, communication histories, customer segmentation and potential AI-generated interaction summaries.',
    },
    {
        num: '05',
        title: 'Intelligent Sales Pipeline Management',
        desc: 'Track opportunities across defined sales stages and explore intelligent methods for identifying stalled deals and pending actions.',
        fns: 'Pipeline stages, opportunity ownership, expected deal values, activity status and potential sales opportunity insights.',
    },
    {
        num: '06',
        title: 'Sales Analytics & AI-Assisted Reporting',
        desc: 'Help business owners and managers understand sales activities through structured dashboards and potential AI-supported analysis.',
        fns: 'Lead source reports, pipeline summaries, follow-up reports, conversion tracking and potential AI-generated sales insights.',
    },
];

const steps = [
    ['01', 'Capture & Organize Enquiries',     'Record potential customer details from relevant enquiry channels. Automated capture depends on supported integrations.'],
    ['02', 'Assign & Categorize Leads',         'Allocate enquiries to sales employees and classify leads according to business-defined criteria.'],
    ['03', 'Prioritize Opportunities',          'Use planned AI-assisted scoring or predefined qualification rules to identify leads requiring attention.'],
    ['04', 'Coordinate Follow-Up Activities',   'Schedule tasks, maintain communication notes and configure supported follow-up workflows.'],
    ['05', 'Monitor Sales Pipeline Progress',   'Update opportunity stages and review customer discussions, quotations and pending actions.'],
    ['06', 'Analyze Sales Performance',         'Review available reports and potential AI-generated insights to support sales planning.'],
];

const benefits = [
    [Target,      'Focus on Relevant Sales Opportunities', 'AI-assisted lead prioritization can help employees identify enquiries that may deserve earlier attention based on available customer information.'],
    [Zap,         'Reduce Repetitive Administrative Work', 'Configured workflows can reduce the need for manual task creation, follow-up tracking and routine sales coordination.'],
    [Bell,        'Improve Customer Follow-Up Consistency','Centralized activity records and reminders help teams maintain a more organized approach to customer communication.'],
    [Users,       'Strengthen Sales Team Coordination',    'Shared customer information, defined responsibilities and pipeline records help employees understand their assigned activities.'],
    [BarChart3,   'Support Data-Informed Sales Decisions', 'Structured reporting and AI-assisted analysis can help managers identify sales trends, review lead progress and plan future actions.'],
];

const industries = [
    [Building2,     'Real Estate & Property',          'Organize property enquiries, prospective buyer information, site visit follow-ups and sales opportunities. AI-assisted prioritization could help identify enquiries requiring timely engagement.'],
    [GraduationCap, 'Educational Institutions',        'Manage course enquiries, prospective student details, admission-related communication and scheduled follow-ups.'],
    [Store,         'Retail & Wholesale Businesses',   'Maintain customer enquiries, bulk purchase discussions, distributor relationships and repeat sales opportunities.'],
    [Factory,       'Manufacturing & Distribution',    'Track B2B enquiries, dealer relationships, quotation discussions and sales pipeline activities across longer sales cycles.'],
    [Briefcase,     'Professional Service Companies',  'Organize consultation requests, client discussions, proposal stages and ongoing business development activities.'],
    [HardHat,       'Construction & Engineering',      'Manage project enquiries, quotation follow-ups, prospective customer details and opportunity progression.'],
];

const compTable = [
    ['Lead organization',   'Separate spreadsheets',       'Centralized lead records'],
    ['Lead prioritization', 'Employee judgment',           'Potential AI-assisted scoring'],
    ['Follow-up management','Manual reminders',            'Configurable workflows and reminders'],
    ['Sales pipeline',      'Independently updated files', 'Structured opportunity stages'],
    ['Customer information','Scattered records',           'Connected customer profiles'],
    ['Sales insights',      'Manual report analysis',      'Potential AI-assisted analysis'],
    ['Team coordination',   'Calls and messages',          'Recorded ownership and activity updates'],
];

const aiCrmCaps = [
    [Brain,       'Intelligent Lead Prioritization', 'Evaluate relevant customer information to support lead qualification and sales prioritization.'],
    [Users,       'Customer Relationship Tracking',  'Maintain contact details, interaction records and sales opportunity information.'],
    [Zap,         'Sales Activity Recommendations',  'Explore AI-assisted suggestions for follow-up priorities and potential next actions.'],
];

const marketingCaps = [
    [Bell,        'Automated Lead Nurturing',   'Configure permitted communication sequences based on enquiry stages or customer interests.'],
    [Target,      'Campaign Lead Tracking',     'Associate relevant customer enquiries with marketing campaigns and acquisition sources.'],
    [Layers,      'Audience Segmentation',      'Group customer records using appropriate business criteria and consent-based data practices.'],
];

const integrations = [
    ['01', 'Sales & Inventory Integration',       'For product-based businesses, sales employees may need access to product availability, stock information, quotations and order status. Potential integration between Smart CRM and a sales inventory management system should be evaluated according to technical feasibility.'],
    ['02', 'Customer Data Security',              'Customer information should be handled through appropriate authentication, access permissions, secure storage, backup procedures and data governance practices. AI-enabled features also require careful consideration of how customer data is processed.'],
    ['03', 'Website & Business Application Integration', 'Organizations may need connections with website enquiry forms, ERP platforms, billing software, communication tools or existing customer databases. Integration scope depends on supported interfaces and implementation requirements.'],
    ['04', 'Data Migration & CRM Implementation', 'Businesses should review existing lead spreadsheets, customer records, pipeline stages, employee roles and training needs before adopting a CRM platform.'],
];

const differentiators = [
    ['01', 'Business-Focused CRM Planning',          'Assess how customer enquiries are received, assigned, qualified and followed up across the organization.'],
    ['02', 'AI-Assisted Workflow Opportunities',     'Identify sales activities where lead prioritization, intelligent recommendations or workflow automation could provide practical value.'],
    ['03', 'Sales Team Usability',                   'Consider the day-to-day needs of sales employees, managers and business owners when planning CRM interfaces and workflows.'],
    ['04', 'Integration & Implementation Assessment','Review existing customer information, business applications and technical dependencies before defining the implementation scope.'],
];

const faqs = [
    ['What is AI-powered CRM software?',
     'AI-powered CRM software combines customer relationship management with artificial intelligence to support activities such as lead scoring, sales analysis, customer insights and workflow recommendations. Available functions vary by product.'],
    ['What is AI-Optimized Smart CRM?',
     'AI-Optimized Smart CRM is a proposed intelligent lead management and customer relationship management solution by FlyTowards Digital Innovation. It is positioned around structured sales tracking, customer records, follow-up coordination and planned AI-assisted capabilities.'],
    ['How does AI improve lead management?',
     'AI can analyze relevant lead information and activity patterns to help sales teams prioritize enquiries, identify potential opportunities and recommend follow-up actions. Results depend on the quality of the available data and the system\'s capabilities.'],
    ['Is AI CRM software suitable for small businesses?',
     'Yes. AI-enabled CRM can be useful for small businesses that manage recurring enquiries, multiple sales employees or complex follow-up processes. However, businesses should evaluate cost, usability, data requirements and whether AI features solve a genuine operational problem.'],
    ['What is the difference between traditional CRM and AI CRM?',
     'Traditional CRM software focuses on organizing customer information, sales opportunities and communication activities. AI CRM extends these functions with capabilities such as intelligent scoring, automated analysis and suggested actions.'],
    ['Can AI CRM automate customer follow-ups?',
     'Some AI CRM platforms support follow-up reminders, automated task creation and communication workflows. AI-Optimized Smart CRM\'s specific automation features must be confirmed before implementation.'],
    ['Can AI Smart CRM integrate with inventory and billing software?',
     'Integration may be possible depending on supported APIs, system architecture, data exchange requirements and the third-party software involved. Each integration should be assessed individually.'],
    ['How much does AI CRM software cost in Tamil Nadu?',
     'Pricing depends on the number of users, product capabilities, AI functionality, automation requirements, integrations, customization and ongoing support. Businesses should request a quotation based on their specific needs.'],
];

/* ═══════════ Hooks ══════════════════════════════════════════════════ */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('sc-visible'); obs.disconnect(); } },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

function RevealCard({ children, className = '', delay = 0 }) {
    const ref = useReveal();
    return (
        <div ref={ref} className={`sc-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`sc-faq-item ${open ? 'sc-faq-open' : ''}`}>
            <button className="sc-faq-btn" onClick={() => setOpen(o => !o)} aria-expanded={open}>
                <span>{q}</span>
                <ChevronDown size={18} className="sc-faq-icon" />
            </button>
            <div className="sc-faq-body">{a}</div>
        </div>
    );
}

/* ═══════════ Dashboards ═════════════════════════════════════════════ */
function HeroDashboard() {
    const [activeLead, setActiveLead] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setActiveLead(r => (r + 1) % 4), 2200);
        return () => clearInterval(t);
    }, []);
    const leads = [
        { id: 'L-301', name: 'Suresh Constructions', score: 92, status: 'Hot',    stage: 'Proposal',   color: '#facc15' },
        { id: 'L-302', name: 'Meena Traders',         score: 67, status: 'Warm',   stage: 'Follow-up',  color: '#fbbf24' },
        { id: 'L-303', name: 'Rajan Real Estate',     score: 85, status: 'Hot',    stage: 'Discussion', color: '#facc15' },
        { id: 'L-304', name: 'Nila Services',         score: 41, status: 'Cold',   stage: 'New Lead',   color: '#78716c' },
    ];
    return (
        <div className="sc-dashboard">
            <div className="sc-dash-badge">Illustrative · AI Smart CRM</div>
            <div className="sc-dash-header">
                <span className="sc-dash-title">Smart CRM — Lead Pipeline</span>
                <span className="sc-dash-ai">🤖 AI Active</span>
            </div>
            <div className="sc-dash-stats">
                {[['Total Leads','48','↑ 6 new'],['AI Hot Leads','12','Prioritized'],['Follow-ups Due','7','Today']].map(([l,v,s],i)=>(
                    <div key={i} className="sc-stat">
                        <span className="sc-stat-label">{l}</span>
                        <span className="sc-stat-value">{v}</span>
                        <span className="sc-stat-sub">{s}</span>
                    </div>
                ))}
            </div>
            <div className="sc-lead-list">
                <div className="sc-lead-head">
                    <span>Lead</span><span>Name</span><span>AI Score</span><span>Stage</span>
                </div>
                {leads.map((l, i) => (
                    <div key={i} className={`sc-lead-row ${activeLead === i ? 'sc-lead-active' : ''}`}>
                        <span className="sc-lead-id">{l.id}</span>
                        <span className="sc-lead-name">{l.name}</span>
                        <span className="sc-lead-score">
                            <span className="sc-score-bar" style={{ width: `${l.score}%` }} />
                            <span className="sc-score-val" style={{ color: l.color }}>{l.score}</span>
                        </span>
                        <span className="sc-lead-stage" style={{ color: l.color }}>{l.stage}</span>
                    </div>
                ))}
            </div>
            <div className="sc-dash-footer">
                <span>⚡ FlyTowards Smart CRM</span>
                <span style={{color:'#facc15'}}>→ View Pipeline</span>
            </div>
        </div>
    );
}

function BenefitsDashboard() {
    return (
        <div className="sc-benefits-dash">
            <div className="sc-bd-title">AI Sales Insights</div>
            {[['Lead Conversion Rate','34%',68],['Follow-up Completion','88%',88],['AI Priority Accuracy','91%',91],['Pipeline Value','₹18.4L',74]].map(([l,v,p],i)=>(
                <div key={i} className="sc-bd-row">
                    <div className="sc-bd-meta"><span>{l}</span><strong>{v}</strong></div>
                    <div className="sc-bd-track">
                        <div className="sc-bd-bar" style={{'--w':`${p}%`, animationDelay:`${i*0.2}s`}}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

function IntegrationDash() {
    return (
        <div className="sc-int-dash">
            <div className="sc-bd-title">Connected Systems</div>
            {[['Smart CRM','Active','#facc15'],['Billing Software','Connected','#facc15'],['Website Enquiries','Live','#facc15'],['Inventory System','Planned','#78716c'],['Email / WhatsApp','In Review','#78716c']].map(([s,st,c],i)=>(
                <div key={i} className="sc-int-row">
                    <span className="sc-int-dot" style={{background:c}} />
                    <span className="sc-int-sys">{s}</span>
                    <span className="sc-int-status" style={{color:c}}>{st}</span>
                </div>
            ))}
        </div>
    );
}

/* ═══════════ Main Component ════════════════════════════════════════ */
export default function SmartCRM() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <style>{`
                /* ── Reset / Base ──────────────────────────────── */
                .sc-page { font-family: 'Inter', 'Segoe UI', sans-serif; color: #1a1a1a; background: #fff; overflow-x: hidden; }
                .sc-page *, .sc-page *::before, .sc-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
                .sc-wrap  { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
                .sc-section { padding: 80px 0; }
                .sc-section-dark { background: #1e1b4b; color: #fff; }
                .sc-section-soft { background: #f9f8f5; }
                .sc-section-yellow { background: #facc15; }

                /* ── Reveal animation ──────────────────────────── */
                .sc-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.6s ease, transform 0.6s ease; }
                .sc-visible { opacity: 1; transform: translateY(0); }

                /* ── Typography ────────────────────────────────── */
                .sc-eyebrow { display: inline-flex; width: fit-content; padding: 6px 14px; border: 1px solid rgba(250,204,21,.7); border-radius: 999px; background: #fff7cc; color: #1e40af; font-size: .8rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px; }
                .sc-page .sc-eyebrow { padding: 6px 14px !important; color: #1e1b4b !important; font-size: .75rem !important; letter-spacing: .1em !important; }
                .sc-h1 { font-size: clamp(1.9rem, 4vw, 3rem); font-weight: 900; line-height: 1.12; color: #1e1b4b; }
                .sc-h1 span { color: #facc15; }
                .sc-h2 { font-size: clamp(1.6rem, 3vw, 2.3rem); font-weight: 800; line-height: 1.2; }
                .sc-h2 span { color: #facc15; }
                .sc-h2-light { color: #fff; }
                .sc-h2-dark { color: #1e1b4b; }
                .sc-lead { font-size: 1.05rem; color: #555; line-height: 1.75; margin-top: 14px; }
                .sc-lead-dark { color: #aaa; }
                .sc-note { font-size: 0.8rem; color: #999; margin-top: 8px; }

                /* ── Buttons ───────────────────────────────────── */
                .sc-btn-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px; }
                .sc-btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #facc15; color: #0f0f0f; font-weight: 700; font-size: 0.95rem; padding: 14px 26px; border-radius: 50px; border: none; cursor: pointer; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
                .sc-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(250,204,21,0.45); }
                .sc-btn-outline { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #0f0f0f; font-weight: 600; font-size: 0.95rem; padding: 14px 26px; border-radius: 50px; border: 2px solid #0f0f0f; cursor: pointer; text-decoration: none; transition: all 0.2s; }
                .sc-btn-outline:hover { background: #0f0f0f; color: #facc15; }
                .sc-btn-outline-light { color: #facc15; border-color: #facc15; }
                .sc-btn-outline-light:hover { background: #facc15; color: #0f0f0f; }

                /* ── Highlights list ───────────────────────────── */
                .sc-hl-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
                .sc-hl-list li { display: flex; align-items: center; gap: 10px; font-size: 0.95rem; color: #444; }
                .sc-hl-list li svg { color: #facc15; flex-shrink: 0; }

                /* ── SECTION 01 — HERO ─────────────────────────── */
                .sc-hero { padding: 100px 0 80px; background: #fff; }
                .sc-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
                @media(max-width:900px){ .sc-hero-grid { grid-template-columns: 1fr; } }

                /* ── Dashboard widget ──────────────────────────── */
                .sc-dashboard {
                    background: #0f0f0f; border-radius: 20px; padding: 24px;
                    box-shadow: 0 24px 60px rgba(0,0,0,0.25);
                    animation: sc-float 5s ease-in-out infinite;
                }
                @keyframes sc-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
                .sc-dash-badge { display: inline-block; background: rgba(250,204,21,0.12); color: #facc15; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 20px; margin-bottom: 14px; }
                .sc-dash-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
                .sc-dash-title { color: #fff; font-weight: 700; font-size: 0.9rem; }
                .sc-dash-ai { font-size: 0.75rem; font-weight: 700; color: #facc15; }
                .sc-dash-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-bottom: 20px; }
                .sc-stat { background: #1a1a1a; border-radius: 10px; padding: 12px 10px; text-align: center; }
                .sc-stat-label { display: block; font-size: 0.65rem; color: #888; margin-bottom: 4px; }
                .sc-stat-value { display: block; font-size: 1.1rem; font-weight: 800; color: #facc15; }
                .sc-stat-sub { display: block; font-size: 0.65rem; color: #555; margin-top: 2px; }
                .sc-lead-list { display: flex; flex-direction: column; gap: 0; }
                .sc-lead-head { display: grid; grid-template-columns: 60px 1fr 90px 80px; font-size: 0.65rem; color: #555; text-transform: uppercase; letter-spacing: 1px; padding: 6px 8px 8px; border-bottom: 1px solid #222; }
                .sc-lead-row { display: grid; grid-template-columns: 60px 1fr 90px 80px; padding: 10px 8px; border-radius: 8px; transition: background 0.3s; align-items: center; }
                .sc-lead-active { background: #1a1a1a; }
                .sc-lead-id { font-size: 0.7rem; color: #facc15; font-weight: 700; }
                .sc-lead-name { font-size: 0.78rem; color: #ddd; }
                .sc-lead-score { display: flex; align-items: center; gap: 6px; }
                .sc-score-bar { display: block; height: 4px; background: #facc15; border-radius: 2px; transition: width 0.6s ease; }
                .sc-score-val { font-size: 0.75rem; font-weight: 700; min-width: 24px; }
                .sc-lead-stage { font-size: 0.72rem; font-weight: 700; }
                .sc-dash-footer { display: flex; justify-content: space-between; margin-top: 16px; padding-top: 12px; border-top: 1px solid #1a1a1a; font-size: 0.75rem; color: #555; }
                @media(max-width:580px){
                    .sc-dashboard { width: 100%; min-width: 0; padding: 14px; }
                    .sc-dash-header { gap: 8px; flex-wrap: wrap; }
                    .sc-dash-title { font-size: .82rem; }
                    .sc-dash-stats { gap: 6px; }
                    .sc-stat { min-width: 0; padding: 9px 5px; }
                    .sc-stat-label,.sc-stat-sub { font-size: .58rem; }
                    .sc-lead-head,.sc-lead-row { grid-template-columns: 46px minmax(0,1fr) 82px 62px; }
                    .sc-lead-head { padding: 6px 5px 8px; font-size: .55rem; letter-spacing: .04em; }
                    .sc-lead-row { padding: 10px 5px; column-gap: 3px; }
                    .sc-lead-id { font-size: .65rem; }
                    .sc-lead-name { min-width: 0; font-size: .72rem; overflow-wrap: anywhere; }
                    .sc-lead-score { min-width: 0; gap: 4px; }
                    .sc-score-bar { max-width: 44px; min-width: 8px; }
                    .sc-score-val { min-width: 20px; font-size: .7rem; }
                    .sc-lead-stage { min-width: 0; font-size: .64rem; line-height: 1.25; overflow-wrap: anywhere; }
                    .sc-dash-footer { gap: 8px; font-size: .65rem; }
                }

                /* ── SECTION 02 — OVERVIEW ─────────────────────── */
                .sc-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .sc-overview-grid { grid-template-columns: 1fr; } }
                .sc-ov-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .sc-ov-card { background: #0f0f0f; border-radius: 14px; padding: 22px 18px; border: 1.5px solid #1a1a1a; transition: border-color 0.3s; }
                .sc-ov-card:hover { border-color: #facc15; }
                .sc-ov-icon { width: 44px; height: 44px; background: rgba(250,204,21,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; color: #facc15; }
                .sc-ov-card h4 { color: #fff; font-size: 0.9rem; font-weight: 700; margin-bottom: 6px; }
                .sc-ov-card p  { color: #888; font-size: 0.8rem; line-height: 1.6; }

                /* ── SECTION 03 — CHALLENGES ───────────────────── */
                .sc-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
                @media(max-width:900px){ .sc-grid-3 { grid-template-columns: 1fr 1fr; } }
                @media(max-width:580px){ .sc-grid-3 { grid-template-columns: 1fr; } }
                .sc-ch-card { background: #fff; border: 1.5px solid #f0f0ec; border-radius: 14px; padding: 24px 20px; transition: box-shadow 0.3s, transform 0.3s; }
                .sc-ch-card:hover { box-shadow: 0 8px 28px rgba(250,204,21,0.15); transform: translateY(-4px); border-color: #facc15; }
                .sc-ch-icon { width: 44px; height: 44px; background: #fffde7; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: #d97706; }
                .sc-ch-card h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; color: #0f0f0f; }
                .sc-ch-card p  { font-size: 0.82rem; color: #666; line-height: 1.65; }

                /* ── SECTION 04 — FEATURES ─────────────────────── */
                .sc-feat-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
                @media(max-width:900px){ .sc-feat-grid { grid-template-columns: 1fr 1fr; } }
                @media(max-width:580px){ .sc-feat-grid { grid-template-columns: 1fr; } }
                .sc-feat-card { background: #1a1a1a; border-radius: 14px; padding: 24px 20px; border: 1.5px solid #2a2a2a; transition: border-color 0.3s, transform 0.3s; }
                .sc-feat-card:hover { border-color: #facc15; transform: translateY(-4px); }
                .sc-feat-num { font-size: 1.8rem; font-weight: 900; color: rgba(250,204,21,0.1); line-height: 1; margin-bottom: 10px; }
                .sc-feat-card h4 { color: #facc15; font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; }
                .sc-feat-card p  { color: #aaa; font-size: 0.8rem; line-height: 1.6; margin-bottom: 10px; }
                .sc-feat-label { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: #facc15; font-weight: 700; margin-bottom: 4px; }
                .sc-feat-fns { font-size: 0.75rem; color: #666; line-height: 1.6; padding-top: 10px; border-top: 1px solid #2a2a2a; }
                .sc-feat-note-ai { font-size: 0.72rem; color: #facc15; margin-top: 8px; padding: 6px 10px; background: rgba(250,204,21,0.08); border-radius: 6px; }

                /* ── SECTION 05 — HOW IT WORKS ─────────────────── */
                .sc-steps-wrap { position: relative; }
                .sc-steps-line { position: absolute; top: 28px; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,#facc15,#f59e0b,#facc15); }
                .sc-steps-grid { display: grid; grid-template-columns: repeat(6,1fr); gap: 16px; position: relative; }
                @media(max-width:1000px){ .sc-steps-grid { grid-template-columns: repeat(3,1fr); } .sc-steps-line { display: none; } }
                @media(max-width:580px){ .sc-steps-grid { grid-template-columns: 1fr; } }
                .sc-step { display: flex; flex-direction: column; align-items: center; text-align: center; }
                .sc-step-num { width: 56px; height: 56px; border-radius: 50%; background: #facc15; color: #0f0f0f; font-weight: 900; font-size: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; box-shadow: 0 4px 16px rgba(250,204,21,0.4); position: relative; z-index: 1; }
                .sc-step h4 { font-size: 0.82rem; font-weight: 700; margin-bottom: 6px; color: #fff; }
                .sc-step p  { font-size: 0.75rem; color: #888; line-height: 1.6; }
                .sc-workflow-bar { margin-top: 36px; background: #1a1a1a; border-radius: 12px; padding: 16px 20px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 6px; }
                .sc-wf-label { font-size: 0.78rem; font-weight: 600; color: #facc15; }
                .sc-wf-arrow { color: #444; }

                /* ── SECTION 06 — BENEFITS ─────────────────────── */
                .sc-benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .sc-benefits-grid { grid-template-columns: 1fr; } }
                .sc-benefit-item { display: flex; gap: 16px; padding: 20px; border-radius: 12px; transition: background 0.3s; }
                .sc-benefit-item:hover { background: #fffde7; }
                .sc-benefit-icon { width: 44px; height: 44px; background: rgba(250,204,21,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #d97706; }
                .sc-benefit-item h4 { font-weight: 700; font-size: 0.95rem; color: #0f0f0f; margin-bottom: 6px; }
                .sc-benefit-item p  { font-size: 0.82rem; color: #555; line-height: 1.6; }

                .sc-benefits-dash { background: #0f0f0f; border-radius: 20px; padding: 24px; animation: sc-float 6s ease-in-out infinite; }
                .sc-bd-title { color: #facc15; font-weight: 700; font-size: 0.85rem; margin-bottom: 18px; text-transform: uppercase; letter-spacing: 1.5px; }
                .sc-bd-row { margin-bottom: 16px; }
                .sc-bd-meta { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.8rem; color: #aaa; }
                .sc-bd-meta strong { color: #fff; }
                .sc-bd-track { height: 6px; background: #2a2a2a; border-radius: 3px; overflow: hidden; }
                .sc-bd-bar { height: 100%; width: var(--w); background: linear-gradient(90deg,#facc15,#f59e0b); border-radius: 3px; animation: sc-grow 1.4s ease forwards; }
                @keyframes sc-grow { from{width:0} to{width:var(--w)} }

                /* ── SECTION 07 — INDUSTRIES ───────────────────── */
                .sc-ind-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
                @media(max-width:900px){ .sc-ind-grid { grid-template-columns: 1fr 1fr; } }
                @media(max-width:580px){ .sc-ind-grid { grid-template-columns: 1fr; } }
                .sc-ind-card { background: #1a1a1a; border-radius: 14px; padding: 24px 20px; border: 1.5px solid #2a2a2a; transition: border-color 0.3s, transform 0.3s; }
                .sc-ind-card:hover { border-color: #facc15; transform: translateY(-4px); }
                .sc-ind-icon { width: 48px; height: 48px; background: rgba(250,204,21,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: #facc15; }
                .sc-ind-card h4 { color: #fff; font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; }
                .sc-ind-card p  { color: #888; font-size: 0.8rem; line-height: 1.6; }
                .sc-regional { margin-top: 32px; background: rgba(250,204,21,0.07); border: 1px solid rgba(250,204,21,0.2); border-radius: 10px; padding: 14px 20px; font-size: 0.82rem; color: #aaa; }
                .sc-regional strong { color: #facc15; }

                /* ── SECTION 08 — COMPARISON ───────────────────── */
                .sc-comp-scroll { display: block; width: 100%; max-width: 100%; min-width: 0; overflow-x: auto; overflow-y: hidden; -webkit-overflow-scrolling: touch; overscroll-behavior-x: contain; border-radius: 14px; }
                .sc-comp-table { width: 100%; min-width: 680px; table-layout: fixed; border-collapse: collapse; border-radius: 14px; overflow: hidden; }
                .sc-comp-scroll::-webkit-scrollbar { height: 7px; }
                .sc-comp-scroll::-webkit-scrollbar-track { background: #e5e5e5; border-radius: 99px; }
                .sc-comp-scroll::-webkit-scrollbar-thumb { background: #0f0f0f; border-radius: 99px; }
                .sc-comp-hint { display: none; }
                @media(max-width:640px) { .sc-comp-scroll { overflow-x: scroll; touch-action: pan-x pan-y; } .sc-comp-hint { display: block; margin-top: 8px; text-align: right; color: #6b7280; font-size: .72rem; } }
                .sc-comp-table thead th { background: #0f0f0f; color: #fff; padding: 14px 18px; font-size: 0.85rem; text-align: left; }
                .sc-comp-table thead th:nth-child(2) { background: #1a1a1a; }
                .sc-comp-table thead th:nth-child(3) { background: #facc15; color: #0f0f0f; }
                .sc-comp-table tbody tr:nth-child(even) { background: #f9f8f5; }
                .sc-comp-table tbody tr:nth-child(odd) { background: #fff; }
                .sc-comp-table td { padding: 12px 18px; font-size: 0.85rem; border-bottom: 1px solid #f0f0ec; }
                .sc-comp-table td:first-child { font-weight: 700; color: #0f0f0f; }
                .sc-comp-table td:nth-child(2) { color: #888; }
                .sc-comp-table td:nth-child(3) { color: #0f0f0f; font-weight: 600; }
                .sc-comp-note { margin-top: 28px; background: #fffde7; border: 1.5px solid #fde68a; border-radius: 12px; padding: 20px; font-size: 0.85rem; color: #555; line-height: 1.7; }

                /* ── SECTION 09 — AI + MARKETING ──────────────── */
                .sc-mktg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
                @media(max-width:900px){ .sc-mktg-grid { grid-template-columns: 1fr; } }
                .sc-cap-block { margin-top: 20px; }
                .sc-cap-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; color: #facc15; margin-bottom: 14px; }
                .sc-cap-item { display: flex; gap: 12px; margin-bottom: 14px; }
                .sc-cap-icon { width: 36px; height: 36px; background: rgba(250,204,21,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #facc15; }
                .sc-cap-item h5 { font-size: 0.85rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
                .sc-cap-item p  { font-size: 0.78rem; color: #888; line-height: 1.6; }
                .sc-mktg-note { margin-top: 20px; background: rgba(250,204,21,0.07); border: 1px solid rgba(250,204,21,0.2); border-radius: 10px; padding: 16px 18px; font-size: 0.82rem; color: #aaa; line-height: 1.65; }

                /* ── SECTION 10 — INTEGRATION ──────────────────── */
                .sc-int-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .sc-int-grid { grid-template-columns: 1fr; } }
                .sc-int-list { display: flex; flex-direction: column; gap: 20px; }
                .sc-int-item { display: flex; gap: 16px; }
                .sc-int-num { width: 36px; height: 36px; border-radius: 50%; background: #facc15; color: #0f0f0f; font-weight: 900; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .sc-int-item h4 { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
                .sc-int-item p  { font-size: 0.82rem; color: #475569; line-height: 1.65; }
                .sc-int-warn { margin-top: 24px; background: rgba(250,204,21,0.07); border: 1px solid rgba(250,204,21,0.2); border-radius: 10px; padding: 14px 18px; font-size: 0.82rem; color: #475569; line-height: 1.65; }

                .sc-int-dash { background: #0f0f0f; border-radius: 20px; padding: 24px; animation: sc-float 5.5s ease-in-out infinite 0.5s; border: 1px solid #1a1a1a; }
                .sc-int-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid #1a1a1a; }
                .sc-int-row:last-child { border-bottom: none; }
                .sc-int-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
                .sc-int-sys { font-size: 0.85rem; color: #ccc; flex: 1; }
                .sc-int-status { font-size: 0.75rem; font-weight: 700; }

                /* ── SECTION 11 — WHY FLYTOWARDS ──────────────── */
                .sc-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
                @media(max-width:900px){ .sc-why-grid { grid-template-columns: 1fr; } }
                .sc-diff-list { display: flex; flex-direction: column; gap: 18px; }
                .sc-diff-item { display: flex; gap: 14px; }
                .sc-diff-num { width: 32px; height: 32px; border-radius: 50%; background: rgba(250,204,21,0.12); border: 2px solid #facc15; color: #facc15; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .sc-diff-item h4 { font-size: 0.9rem; font-weight: 700; color: #0f0f0f; margin-bottom: 4px; }
                .sc-diff-item p  { font-size: 0.82rem; color: #666; line-height: 1.6; }

                /* ── SECTION 12 — FAQ ──────────────────────────── */
                .sc-faq-list { border: 1.5px solid #f0f0ec; border-radius: 14px; overflow: hidden; }
                .sc-faq-item { border-bottom: 1.5px solid #f0f0ec; }
                .sc-faq-item:last-child { border-bottom: none; }
                .sc-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; background: none; border: none; cursor: pointer; font-size: 0.9rem; font-weight: 600; color: #0f0f0f; text-align: left; gap: 12px; }
                .sc-faq-btn:hover { background: #f9f8f5; }
                .sc-faq-icon { transition: transform 0.3s; flex-shrink: 0; }
                .sc-faq-open .sc-faq-icon { transform: rotate(180deg); }
                .sc-faq-body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s; padding: 0 22px; font-size: 0.85rem; color: #555; line-height: 1.7; }
                .sc-faq-open .sc-faq-body { max-height: 300px; padding: 0 22px 18px; }

                /* ── SECTION 13 — FINAL CTA ────────────────────── */
                .sc-cta-banner { background: #0f0f0f; padding: 80px 0; text-align: center; }
                .sc-cta-banner h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900; color: #facc15; margin-bottom: 16px; }
                .sc-cta-banner p  { color: #aaa; font-size: 1rem; max-width: 640px; margin: 0 auto 32px; line-height: 1.75; }
                .sc-cta-row { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }
            `}</style>

            <div className="sc-page">

                {/* ── S01 HERO ───────────────────────────────────────── */}
                <section className="sc-hero">
                    <div className="sc-wrap">
                        <div className="sc-hero-grid">
                            <div>
                                <RevealCard>
                                    <p className="sc-eyebrow">FlyTowards Digital Innovation</p>
                                    <h1 className="sc-h1">
                                        AI-Optimized<br />
                                        <span>Smart CRM</span> –<br />
                                        Intelligent Lead Management
                                    </h1>
                                    <p className="sc-lead">Manage Leads Smarter. Streamline Follow-Ups. Build Stronger Customer Relationships.</p>
                                    <p className="sc-lead" style={{ marginTop: 10 }}>
                                        Managing customer enquiries, sales conversations and follow-up activities across multiple channels can make it difficult to identify opportunities and maintain consistent customer communication. AI-Optimized Smart CRM by FlyTowards Digital Innovation is a proposed intelligent customer relationship management solution designed for growing businesses in Tamil Nadu.
                                    </p>
                                    <ul className="sc-hl-list">
                                        {highlights.map((h, i) => (
                                            <li key={i}><CheckCircle2 size={16} /> {h}</li>
                                        ))}
                                    </ul>
                                    <p className="sc-note">AI capabilities and demo availability are subject to product verification.</p>
                                    <div className="sc-btn-row">
                                        <Link to="/contact" className="sc-btn-primary">Request a Smart CRM Demo <ArrowRight size={16} /></Link>
                                        <Link to="/contact" className="sc-btn-outline">Explore AI CRM Solutions</Link>
                                    </div>
                                </RevealCard>
                            </div>
                            <RevealCard delay={150}>
                                <HeroDashboard />
                            </RevealCard>
                        </div>
                    </div>
                </section>

                {/* ── S02 OVERVIEW ───────────────────────────────────── */}
                <section className="sc-section sc-section-soft">
                    <div className="sc-wrap">
                        <div className="sc-overview-grid">
                            <RevealCard>
                                <p className="sc-eyebrow">Product Overview</p>
                                <h2 className="sc-h2 sc-h2-dark">What Is <span>AI-Optimized Smart CRM</span> Software?</h2>
                                <p className="sc-lead">AI-powered CRM software combines customer relationship management with artificial intelligence capabilities to support lead analysis, sales activities and customer engagement.</p>
                                <p className="sc-lead">Traditional CRM systems organize customer records, sales opportunities and follow-up activities. AI-enabled CRM systems may extend these capabilities through intelligent lead prioritization, suggested next actions, automated workflows and data-driven sales insights.</p>
                                <p className="sc-lead">FlyTowards Smart CRM is being positioned to bring these capabilities into a practical platform for small and growing businesses. The objective is to help sales teams spend less time organizing scattered information and more time managing meaningful customer interactions.</p>
                            </RevealCard>
                            <div className="sc-ov-cards">
                                {overview.map(([Icon, title, desc], i) => (
                                    <RevealCard key={i} delay={i * 80}>
                                        <div className="sc-ov-card">
                                            <div className="sc-ov-icon"><Icon size={22} /></div>
                                            <h4>{title}</h4>
                                            <p>{desc}</p>
                                        </div>
                                    </RevealCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── S03 CHALLENGES ─────────────────────────────────── */}
                <section className="sc-section">
                    <div className="sc-wrap">
                        <RevealCard>
                            <p className="sc-eyebrow">Sales Challenges</p>
                            <h2 className="sc-h2 sc-h2-dark">Sales Challenges That <span>AI-Optimized CRM Software</span> Can Help Address</h2>
                        </RevealCard>
                        <div className="sc-grid-3" style={{ marginTop: 40 }}>
                            {challenges.map(([Icon, title, desc], i) => (
                                <RevealCard key={i} delay={i * 70}>
                                    <div className="sc-ch-card">
                                        <div className="sc-ch-icon"><Icon size={22} /></div>
                                        <h4>{title}</h4>
                                        <p>{desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── S04 FEATURES ───────────────────────────────────── */}
                <section className="sc-section sc-section-dark">
                    <div className="sc-wrap">
                        <RevealCard>
                            <p className="sc-eyebrow">AI CRM Features</p>
                            <h2 className="sc-h2 sc-h2-light">Key Features Planned for AI-Optimized Smart CRM Software</h2>
                            <p className="sc-lead sc-lead-dark" style={{ maxWidth: 640 }}>AI-Optimized Smart CRM is envisioned as a combination of essential CRM functionality and intelligent sales assistance. The following capabilities represent proposed features that require confirmation before being marketed as available.</p>
                        </RevealCard>
                        <div className="sc-feat-grid" style={{ marginTop: 40 }}>
                            {features.map((f, i) => (
                                <RevealCard key={i} delay={i * 70}>
                                    <div className="sc-feat-card">
                                        <div className="sc-feat-num">{f.num}</div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                        <div className="sc-feat-label">Planned Capabilities</div>
                                        <div className="sc-feat-fns">{f.fns}</div>
                                        {f.note && <div className="sc-feat-note-ai">⚡ {f.note}</div>}
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── S05 HOW IT WORKS ───────────────────────────────── */}
                <section className="sc-section sc-section-dark" style={{ paddingTop: 60 }}>
                    <div className="sc-wrap">
                        <RevealCard>
                            <p className="sc-eyebrow">How It Works</p>
                            <h2 className="sc-h2 sc-h2-light">How Does AI-Optimized Smart CRM Simplify Lead Management?</h2>
                            <p className="sc-lead sc-lead-dark" style={{ maxWidth: 640 }}>AI-enabled CRM software can combine structured sales processes with intelligent recommendations and workflow automation to support the customer journey.</p>
                        </RevealCard>
                        <div style={{ marginTop: 48 }}>
                            <RevealCard>
                                <div className="sc-steps-wrap">
                                    <div className="sc-steps-line" />
                                    <div className="sc-steps-grid">
                                        {steps.map(([num, title, desc], i) => (
                                            <div key={i} className="sc-step">
                                                <div className="sc-step-num">{num}</div>
                                                <h4>{title}</h4>
                                                <p>{desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </RevealCard>
                        </div>
                        <RevealCard delay={200}>
                            <div className="sc-workflow-bar">
                                {['Website Enquiry','Lead Assignment','AI Prioritization','Sales Discussion','Follow-Up','Opportunity Closure'].map((s, i, arr) => (
                                    <span key={i}>
                                        <span className="sc-wf-label">{s}</span>
                                        {i < arr.length - 1 && <span className="sc-wf-arrow"> → </span>}
                                    </span>
                                ))}
                            </div>
                        </RevealCard>
                        <RevealCard delay={280}>
                            <p className="sc-note" style={{ textAlign: 'center', marginTop: 14 }}>The precise workflow depends on the product's confirmed capabilities, configured integrations and business requirements.</p>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S06 BENEFITS ───────────────────────────────────── */}
                <section className="sc-section sc-section-soft">
                    <div className="sc-wrap">
                        <RevealCard>
                            <p className="sc-eyebrow">Business Benefits</p>
                            <h2 className="sc-h2 sc-h2-dark">Benefits of AI-Powered CRM Software for <span>Growing Businesses</span></h2>
                        </RevealCard>
                        <div className="sc-benefits-grid" style={{ marginTop: 40 }}>
                            <RevealCard delay={100}>
                                <BenefitsDashboard />
                            </RevealCard>
                            <div>
                                {benefits.map(([Icon, title, desc], i) => (
                                    <RevealCard key={i} delay={i * 80}>
                                        <div className="sc-benefit-item">
                                            <div className="sc-benefit-icon"><Icon size={22} /></div>
                                            <div>
                                                <h4>{title}</h4>
                                                <p>{desc}</p>
                                            </div>
                                        </div>
                                    </RevealCard>
                                ))}
                                <RevealCard delay={300}>
                                    <p className="sc-note" style={{ marginTop: 16, paddingLeft: 20 }}>These are potential business benefits, not guaranteed performance outcomes.</p>
                                </RevealCard>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── S07 INDUSTRIES ─────────────────────────────────── */}
                <section className="sc-section sc-section-dark">
                    <div className="sc-wrap">
                        <RevealCard>
                            <p className="sc-eyebrow">Industries Served</p>
                            <h2 className="sc-h2 sc-h2-light">AI-Optimized Smart CRM for Businesses Across Tamil Nadu</h2>
                            <p className="sc-lead sc-lead-dark" style={{ maxWidth: 600 }}>Different industries require different methods for handling customer enquiries, sales activities and follow-ups. Smart CRM can be evaluated against these workflows.</p>
                        </RevealCard>
                        <div className="sc-ind-grid" style={{ marginTop: 40 }}>
                            {industries.map(([Icon, title, desc], i) => (
                                <RevealCard key={i} delay={i * 70}>
                                    <div className="sc-ind-card">
                                        <div className="sc-ind-icon"><Icon size={24} /></div>
                                        <h4>{title}</h4>
                                        <p>{desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                        <RevealCard delay={200}>
                            <div className="sc-regional">
                                <strong>Regional Focus:</strong> Tirunelveli, Tenkasi, Sankarankovil, Madurai, Thoothukudi, Kanyakumari and other business markets across Tamil Nadu.
                            </div>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S08 COMPARISON ─────────────────────────────────── */}
                <section className="sc-section sc-section-soft">
                    <div className="sc-wrap">
                        <RevealCard>
                            <p className="sc-eyebrow">AI CRM vs Manual</p>
                            <h2 className="sc-h2 sc-h2-dark">AI-Powered CRM Software vs <span>Traditional Lead Tracking</span></h2>
                        </RevealCard>
                        <RevealCard delay={100}>
                            <div className="sc-comp-scroll" style={{ marginTop: 32 }} role="region" aria-label="CRM comparison table" tabIndex={0}>
                                <table className="sc-comp-table">
                                    <thead>
                                        <tr>
                                            <th>Sales Activity</th>
                                            <th>Manual Tracking</th>
                                            <th>AI-Enabled CRM Software</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {compTable.map(([act, manual, sw], i) => (
                                            <tr key={i}>
                                                <td>{act}</td>
                                                <td>{manual}</td>
                                                <td>{sw}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="sc-comp-hint">Swipe to see all columns →</p>
                        </RevealCard>
                        <RevealCard delay={150}>
                            <div className="sc-comp-note">
                                <strong>When Should a Business Upgrade from Excel to AI CRM Software?</strong><br /><br />
                                Excel may work well when a business manages a limited number of enquiries and has a simple sales process. A dedicated CRM becomes more useful when enquiry volumes increase, multiple employees manage sales activities or customer information needs to be shared consistently. AI-enabled CRM capabilities may provide additional value when businesses have sufficient reliable data and clear use cases for lead scoring, workflow recommendations or sales analysis.
                            </div>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S09 AI + MARKETING AUTOMATION ──────────────────── */}
                <section className="sc-section sc-section-dark">
                    <div className="sc-wrap">
                        <RevealCard>
                            <p className="sc-eyebrow">AI CRM & Marketing</p>
                            <h2 className="sc-h2 sc-h2-light">How Do AI CRM and Marketing Automation Work Together?</h2>
                            <p className="sc-lead sc-lead-dark" style={{ maxWidth: 640 }}>AI-powered CRM and marketing automation are complementary technologies that can help businesses coordinate customer information, sales activities and marketing communication.</p>
                        </RevealCard>
                        <div className="sc-mktg-grid" style={{ marginTop: 40 }}>
                            <RevealCard delay={80}>
                                <div>
                                    <div className="sc-cap-label">AI CRM Capabilities</div>
                                    <div className="sc-cap-block">
                                        {aiCrmCaps.map(([Icon, title, desc], i) => (
                                            <div key={i} className="sc-cap-item">
                                                <div className="sc-cap-icon"><Icon size={18} /></div>
                                                <div><h5>{title}</h5><p>{desc}</p></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </RevealCard>
                            <RevealCard delay={150}>
                                <div>
                                    <div className="sc-cap-label">Marketing Automation Capabilities</div>
                                    <div className="sc-cap-block">
                                        {marketingCaps.map(([Icon, title, desc], i) => (
                                            <div key={i} className="sc-cap-item">
                                                <div className="sc-cap-icon"><Icon size={18} /></div>
                                                <div><h5>{title}</h5><p>{desc}</p></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </RevealCard>
                        </div>
                        <div className="sc-mktg-note" style={{ marginTop: 24 }}>
                            <strong style={{color:'#facc15'}}>Can Smart CRM Automate Marketing Activities?</strong><br /><br />
                            Marketing automation may be considered as part of the Smart CRM implementation roadmap. Automated email campaigns, WhatsApp integrations, AI-generated communication, campaign workflows and related functionality require technical and commercial verification. Businesses should also assess applicable customer consent, privacy and messaging requirements.
                        </div>
                        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
                            <Link to="/contact" className="sc-btn-primary">Discuss Your AI CRM &amp; Marketing Requirements <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                </section>

                {/* ── S10 INTEGRATION & SECURITY ─────────────────────── */}
                <section className="sc-section">
                    <div className="sc-wrap">
                        <RevealCard>
                            <p className="sc-eyebrow">Integration & Security</p>
                            <h2 className="sc-h2 sc-h2-dark">Connecting AI CRM with <span>Sales, Inventory &amp; Business Systems</span></h2>
                            <p className="sc-lead" style={{ maxWidth: 640 }}>CRM software can become more useful when customer information is connected with relevant business operations. Depending on organizational requirements, businesses may need to evaluate connections between sales records, inventory availability, billing applications, websites and marketing platforms.</p>
                        </RevealCard>
                        <div className="sc-int-grid" style={{ marginTop: 40 }}>
                            <div>
                                <div className="sc-int-list">
                                    {integrations.map(([num, title, desc], i) => (
                                        <RevealCard key={i} delay={i * 80}>
                                            <div className="sc-int-item">
                                                <div className="sc-int-num">{num}</div>
                                                <div>
                                                    <h4>{title}</h4>
                                                    <p>{desc}</p>
                                                </div>
                                            </div>
                                        </RevealCard>
                                    ))}
                                </div>
                                <RevealCard delay={200}>
                                    <div className="sc-int-warn">
                                        ℹ <strong>Implementation Note:</strong> AI functions, inventory synchronization, billing connections, data migration and deployment arrangements depend on verified product capabilities and agreed project scope.
                                    </div>
                                </RevealCard>
                            </div>
                            <RevealCard delay={150}>
                                <IntegrationDash />
                            </RevealCard>
                        </div>
                    </div>
                </section>

                {/* ── S11 WHY FLYTOWARDS ─────────────────────────────── */}
                <section className="sc-section sc-section-soft">
                    <div className="sc-wrap">
                        <div className="sc-why-grid">
                            <RevealCard>
                                <p className="sc-eyebrow">Why FlyTowards</p>
                                <h2 className="sc-h2 sc-h2-dark">Why Consider <span>AI-Optimized Smart CRM</span> by FlyTowards Digital Innovation?</h2>
                                <p className="sc-lead">Choosing CRM software involves more than selecting a customer database or sales dashboard. Businesses need a solution aligned with their enquiry channels, customer relationships, sales responsibilities and reporting requirements.</p>
                                <p className="sc-lead">FlyTowards positions Smart CRM around practical sales workflows, structured customer management and the potential application of AI-assisted capabilities where they address meaningful business needs.</p>
                            </RevealCard>
                            <div>
                                <div className="sc-diff-list">
                                    {differentiators.map(([num, title, desc], i) => (
                                        <RevealCard key={i} delay={i * 80}>
                                            <div className="sc-diff-item">
                                                <div className="sc-diff-num">{num}</div>
                                                <div>
                                                    <h4>{title}</h4>
                                                    <p>{desc}</p>
                                                </div>
                                            </div>
                                        </RevealCard>
                                    ))}
                                </div>
                                <RevealCard delay={200}>
                                    <div style={{ marginTop: 28 }}>
                                        <Link to="/contact" className="sc-btn-primary">Discuss Your AI Smart CRM Requirements <ArrowRight size={16} /></Link>
                                    </div>
                                </RevealCard>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── S12 FAQ ────────────────────────────────────────── */}
                <section className="sc-section">
                    <div className="sc-wrap" style={{ maxWidth: 800 }}>
                        <RevealCard>
                            <p className="sc-eyebrow">FAQ</p>
                            <h2 className="sc-h2 sc-h2-dark">Frequently Asked Questions About <span>AI-Powered CRM Software</span></h2>
                        </RevealCard>
                        <RevealCard delay={100}>
                            <div className="sc-faq-list" style={{ marginTop: 32 }}>
                                {faqs.map(([q, a], i) => <FaqItem key={i} q={q} a={a} />)}
                            </div>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S13 FINAL CTA ──────────────────────────────────── */}
                <section className="sc-cta-banner">
                    <div className="sc-wrap">
                        <RevealCard>
                            <h2>Make Your Sales Process Smarter with AI-Optimized Smart CRM</h2>
                            <p>Your business needs more than a place to store customer contact information. It needs an organized approach to managing enquiries, coordinating follow-ups and understanding sales opportunities. Explore AI-Optimized Smart CRM by FlyTowards Digital Innovation — a proposed intelligent lead management solution for growing businesses across Tamil Nadu.</p>
                            <div className="sc-cta-row">
                                <Link to="/contact" className="sc-btn-primary">Request an AI Smart CRM Demo <ArrowRight size={16} /></Link>
                                <Link to="/contact" className="sc-btn-outline sc-btn-outline-light">Get a CRM Consultation</Link>
                            </div>
                        </RevealCard>
                    </div>
                </section>

            </div>
        </>
    );
}
