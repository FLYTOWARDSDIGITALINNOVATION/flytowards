import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, CheckCircle2, ChevronDown, AlertCircle,
    Layers, ClipboardList, BarChart3, FileText, Users,
    Building2, Factory, Briefcase, Home, Store, Settings2,
    Clock3, Database, Eye, TrendingUp, BadgeCheck, ShieldCheck,
    GitMerge, Bell, Workflow, CheckSquare, FolderOpen, PieChart,
    HardHat, Wrench, Zap, Target, Activity
} from 'lucide-react';

/* ═══════════ Static data ════════════════════════════════════════════ */
const highlights = [
    'Business workflow management',
    'Task assignments and activity tracking',
    'Project coordination and progress monitoring',
    'Digital records and operational reporting',
];

const overview = [
    [Layers,       'Workflow Management', 'Organize business processes into defined stages and activities.'],
    [ClipboardList,'Task Coordination',   'Maintain task assignments, responsibilities and work progress.'],
    [Eye,          'Project Visibility',  'Track relevant project activities and operational updates.'],
    [Database,     'Digital Records',     'Organize business information and supporting documents.'],
];

const challenges = [
    [Clock3,      'Repetitive Manual Tasks',           'Employees may spend time repeatedly entering information, updating spreadsheets and communicating routine task status.'],
    [GitMerge,    'Disconnected Business Workflows',   'Activities managed through separate applications can make it difficult to maintain consistent operational information.'],
    [Bell,        'Delayed Task Updates',              'Without structured workflows, managers may struggle to identify pending work, completed activities and overdue responsibilities.'],
    [Eye,         'Limited Project Visibility',        'Project progress may be difficult to monitor when updates are shared through calls, messages or independent reports.'],
    [FolderOpen,  'Unorganized Approvals & Documents', 'Manual approval processes and scattered business documents can create administrative delays and information gaps.'],
    [BarChart3,   'Inconsistent Operational Reporting','Preparing business reports from multiple sources can require repeated data collection and manual consolidation.'],
];

const features = [
    {
        num: '01',
        title: 'Business Workflow Management',
        desc: 'Organize recurring business processes into defined stages, activities and responsibilities.',
        fns: 'Workflow creation, process stages, status updates, assigned responsibilities and workflow records.',
    },
    {
        num: '02',
        title: 'Task & Activity Management',
        desc: 'Maintain task information and coordinate activities between authorized employees.',
        fns: 'Task creation, priorities, deadlines, assignments, progress updates and completion status.',
    },
    {
        num: '03',
        title: 'Project Coordination',
        desc: 'Organize project-related activities and track relevant work progress.',
        fns: 'Project records, milestones, assigned teams, activity updates and project summaries.',
    },
    {
        num: '04',
        title: 'Approval Workflow Management',
        desc: 'Support structured review and approval processes for relevant business activities.',
        fns: 'Approval requests, assigned approvers, approval status, comments and process history.',
    },
    {
        num: '05',
        title: 'Digital Records & Document Management',
        desc: 'Maintain business information and supporting documents within organized workflows.',
        fns: 'File attachments, document categories, record references, access permissions and document status.',
    },
    {
        num: '06',
        title: 'Operational Dashboards & Reports',
        desc: 'Review relevant workflow and activity information through structured dashboards.',
        fns: 'Pending task summaries, workflow status, project updates, activity reports and operational records.',
    },
];

const steps = [
    ['01', 'Identify Business Processes',  'Review recurring activities, responsibilities, approval requirements and information flow.'],
    ['02', 'Configure Digital Workflows',  'Define relevant workflow stages, task information and supported process rules.'],
    ['03', 'Assign Tasks & Responsibilities', 'Allocate work to authorized employees or teams according to the defined workflow.'],
    ['04', 'Track Activity Progress',      'Record work updates, completed tasks and pending activities through the system.'],
    ['05', 'Manage Reviews & Approvals',   'Route relevant activities through supported review or approval processes.'],
    ['06', 'Monitor Operational Reports',  'Use available dashboards to review workflow status, project activities and pending work.'],
];

const benefits = [
    [Zap,         'Reduce Repetitive Administrative Work', 'Suitable workflow automation can reduce the need for repeated manual updates and routine coordination activities.'],
    [BadgeCheck,  'Improve Task Accountability',           'Defined task assignments and activity records can help employees understand responsibilities and pending work.'],
    [Eye,         'Increase Operational Visibility',       'Structured workflow information allows managers to review relevant activities and identify processes requiring attention.'],
    [Users,       'Support Team Coordination',             'Shared task records and defined workflows can help departments and employees work with more consistent information.'],
    [Database,    'Organize Business Information',         'Maintain relevant operational records, documents and activity histories within a structured digital system.'],
];

const industries = [
    [HardHat,    'Construction Companies',         'Organize project activities, site-related tasks, supervisor reviews and relevant operational updates.'],
    [Wrench,     'Contractors & Engineering Firms','Coordinate work assignments, project milestones, technical records and internal approval workflows.'],
    [Factory,    'Manufacturing Businesses',       'Maintain selected operational tasks, departmental responsibilities and process-related information.'],
    [Home,       'Real Estate & Property',         'Organize property-related activities, administrative tasks, service requests and internal approvals.'],
    [Briefcase,  'Professional Service Companies', 'Manage client-related work, team responsibilities, document reviews and recurring business processes.'],
    [Building2,  'Small & Growing Enterprises',    'Digitize selected administrative workflows, task assignments, approvals and operational reporting.'],
];

const compTable = [
    ['Task assignments',     'Calls, messages or spreadsheets',   'Structured task allocation'],
    ['Workflow status',      'Manual progress updates',           'Recorded workflow stages'],
    ['Approvals',            'Emails or paper-based requests',    'Defined digital approval workflows'],
    ['Project updates',      'Separate progress reports',         'Organized project activity records'],
    ['Document handling',    'Independent files and folders',     'Linked digital records'],
    ['Operational reporting','Manual data consolidation',         'Structured dashboards and reports'],
    ['Team coordination',    'Informal communication',            'Defined process responsibilities'],
];

const constructionUses = [
    [Target,      'Project Activity Planning',  'Organize relevant work activities, milestones and assigned responsibilities.'],
    [ClipboardList,'Site Task Coordination',   'Maintain task records and progress updates for authorized site personnel.'],
    [CheckSquare, 'Supervisor Reviews',         'Define review stages for selected project activities and operational requests.'],
    [FolderOpen,  'Document Organization',      'Maintain relevant project documents, drawings, reports and approval records.'],
    [Activity,    'Progress Visibility',         'Review available project updates, pending activities and workflow status.'],
];

const considerations = [
    ['01', 'Digital Process Planning',         'Identify which activities should be digitized, which steps require approval and where automation can provide practical value.'],
    ['02', 'User Access & Data Security',      'Evaluate authentication, role-based permissions, secure data handling, backups and relevant activity records.'],
    ['03', 'Existing Software Integration',    'Review whether Flyroll needs to exchange information with accounting software, CRM applications, ERP systems or other business tools.'],
    ['04', 'Data Migration & Employee Training','Assess existing records, spreadsheets, documents, user responsibilities and training requirements before implementation.'],
];

const differentiators = [
    ['01', 'Business Process Assessment',          'Understand your existing workflows, recurring tasks, approval stages and operational challenges.'],
    ['02', 'Workflow & Automation Planning',       'Identify suitable process stages, task responsibilities and automation requirements.'],
    ['03', 'Practical User Experience',            'Plan interfaces around the needs of business owners, project managers, supervisors and authorized employees.'],
    ['04', 'Integration & Implementation Assessment','Review existing systems, operational data and technical dependencies before defining the proposed implementation.'],
];

const faqs = [
    ['What is business automation software?',
     'Business automation software is an application used to streamline recurring processes, manage workflows and reduce selected manual activities. Depending on the product, it may support task assignments, approvals, notifications, operational records and reporting.'],
    ['What is Flyroll business automation software?',
     'Flyroll is the proposed name of a business automation software product by FlyTowards Digital Innovation. It is being positioned around digital workflows, task coordination, project activities and operational management. Actual features must be confirmed.'],
    ['Is business automation software suitable for small businesses?',
     'Yes. Small businesses can use automation software to organize recurring tasks, coordinate employee responsibilities and maintain workflow records. The right solution depends on process complexity, budget and implementation requirements.'],
    ['What is the difference between business management software and business automation software?',
     'Business management software focuses on organizing business information and activities. Business automation software emphasizes reducing manual process steps through configured workflows, rules and system actions. Some applications combine both capabilities.'],
    ['Can business automation software help construction companies?',
     'Yes. Suitable software can support construction-related task coordination, project activity tracking, review processes and operational records. Construction-specific functionality depends on the application.'],
    ['What is a digital management system?',
     'A digital management system is an application used to organize information, records, activities and workflows electronically. It can help businesses replace selected paper-based or disconnected manual processes with structured digital operations.'],
    ['Can Flyroll integrate with accounting, CRM or project management software?',
     'Potential integration depends on Flyroll\'s verified technical capabilities, supported APIs, data exchange methods and the existing applications involved. Integration feasibility should be assessed before implementation.'],
    ['How much does business automation software cost in Tamil Nadu?',
     'Pricing varies according to the product, number of users, automation requirements, available modules, customization, integrations, deployment and support arrangements. Businesses should request a quotation based on their needs.'],
];

/* ═══════════ Hooks ══════════════════════════════════════════════════ */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('fr-visible'); obs.disconnect(); } },
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
        <div ref={ref} className={`fr-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}

/* ═══════════ Sub-components ════════════════════════════════════════ */
function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`fr-faq-item ${open ? 'fr-faq-open' : ''}`}>
            <button className="fr-faq-btn" onClick={() => setOpen(o => !o)} aria-expanded={open}>
                <span>{q}</span>
                <ChevronDown size={18} className="fr-faq-icon" />
            </button>
            <div className="fr-faq-body">{a}</div>
        </div>
    );
}

/* ═══════════ Illustrative Dashboards ═══════════════════════════════ */
function HeroDashboard() {
    const [activeTask, setActiveTask] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setActiveTask(r => (r + 1) % 4), 2200);
        return () => clearInterval(t);
    }, []);
    const tasks = [
        { id: 'WF-201', name: 'Site Inspection',    team: 'Site Team',    status: 'In Progress', pct: 60,  color: '#facc15' },
        { id: 'WF-202', name: 'Invoice Approval',   team: 'Accounts',     status: 'Pending',     pct: 30,  color: '#facc15' },
        { id: 'WF-203', name: 'Material Request',   team: 'Procurement',  status: 'Completed',   pct: 100, color: '#22c55e' },
        { id: 'WF-204', name: 'Safety Audit',       team: 'Compliance',   status: 'Overdue',     pct: 20,  color: '#f87171' },
    ];
    return (
        <div className="fr-dashboard">
            <div className="fr-dash-badge">Illustrative</div>
            <div className="fr-dash-header">
                <span className="fr-dash-title">Flyroll — Workflow Overview</span>
                <span className="fr-dash-live">● Active</span>
            </div>
            <div className="fr-dash-stats">
                {[['Total Workflows','24','↑ 3 new'],['Tasks Pending','7','2 overdue'],['Completed Today','11','↑ 85%']].map(([l,v,s],i)=>(
                    <div key={i} className="fr-stat">
                        <span className="fr-stat-label">{l}</span>
                        <span className="fr-stat-value">{v}</span>
                        <span className="fr-stat-sub">{s}</span>
                    </div>
                ))}
            </div>
            <div className="fr-task-list">
                {tasks.map((t, i) => (
                    <div key={i} className={`fr-task-row ${activeTask === i ? 'fr-task-active' : ''}`}>
                        <div className="fr-task-top">
                            <span className="fr-task-id">{t.id}</span>
                            <span className="fr-task-name">{t.name}</span>
                            <span className="fr-task-status" style={{ color: t.color }}>{t.status}</span>
                        </div>
                        <div className="fr-task-bar-track">
                            <div className="fr-task-bar" style={{ width: `${t.pct}%`, background: t.color }} />
                        </div>
                        <span className="fr-task-team">{t.team} · {t.pct}%</span>
                    </div>
                ))}
            </div>
            <div className="fr-dash-footer">
                <span>🚀 FlyTowards Flyroll</span>
                <span style={{color:'#facc15'}}>→ View All</span>
            </div>
        </div>
    );
}

function BenefitsDashboard() {
    return (
        <div className="fr-benefits-dash">
            <div className="fr-bd-title">Operations Summary</div>
            {[['Workflows Active','18/24',75],['Tasks Completed','148',88],['Approvals Processed','34',70],['On-Time Delivery','92%',92]].map(([l,v,p],i)=>(
                <div key={i} className="fr-bd-row">
                    <div className="fr-bd-meta"><span>{l}</span><strong>{v}</strong></div>
                    <div className="fr-bd-track">
                        <div className="fr-bd-bar" style={{'--w':`${p}%`, animationDelay:`${i*0.2}s`}}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

function DigitalDashboard() {
    return (
        <div className="fr-digital-dash">
            <div className="fr-bd-title">Digital Workflow</div>
            {['Process Setup','Task Assignment','Work In Progress','Review Stage','Approval','Completed'].map((s,i)=>(
                <div key={i} className="fr-wf-stage" style={{animationDelay:`${i*0.15}s`}}>
                    <div className="fr-wf-dot" style={{background: i < 4 ? '#facc15' : i === 4 ? '#facc15' : '#22c55e'}} />
                    <span className="fr-wf-label">{s}</span>
                    {i < 5 && <div className="fr-wf-line"/>}
                </div>
            ))}
        </div>
    );
}

/* ═══════════ Main Component ════════════════════════════════════════ */
export default function FlyrollProduct() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <style>{`
                /* ── Reset / Base ──────────────────────────────── */
                .fr-page { font-family: 'Inter', 'Segoe UI', sans-serif; color: #1a1a1a; background: #fff; overflow-x: hidden; }
                .fr-page *, .fr-page *::before, .fr-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
                .fr-wrap  { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
                .fr-section { padding: 80px 0; }
                .fr-section-dark { background: #1e1b4b; color: #fff; }
                .fr-section-soft { background: #f8fafc; }
                .fr-section-blue { background: #1e1b4b; }

                /* ── Reveal animation ──────────────────────────── */
                .fr-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.6s ease, transform 0.6s ease; }
                .fr-visible { opacity: 1; transform: translateY(0); }

                /* ── Typography ────────────────────────────────── */
                .fr-eyebrow { display: inline-flex; width: fit-content; padding: 6px 14px; border: 1px solid rgba(250,204,21,.7); border-radius: 999px; background: #fff7cc; color: #1e1b4b; font-size: .8rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px; }
                .fr-page .fr-eyebrow { padding: 6px 14px !important; color: #1e1b4b !important; font-size: .75rem !important; letter-spacing: .1em !important; }
                .fr-eyebrow-y { color: #1e1b4b; }
                .fr-h1 { font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800; line-height: 1.15; color: #1e1b4b; }
                .fr-h1 span { color: #facc15; }
                .fr-h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; line-height: 1.2; color: #1e1b4b; }
                .fr-h2 span { color: #facc15; }
                .fr-h2-light { color: #fff; }
                .fr-lead { font-size: 1.05rem; color: #555; line-height: 1.75; margin-top: 16px; }
                .fr-lead-dark { color: #aaa; }
                .fr-note { font-size: 0.8rem; color: #999; margin-top: 8px; }

                /* ── Buttons ───────────────────────────────────── */
                .fr-btn-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px; }
                .fr-btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #1e1b4b; color: #facc15; font-weight: 700; font-size: 0.95rem; padding: 14px 26px; border-radius: 50px; border: none; cursor: pointer; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
                .fr-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(30,27,75,0.25); }
                .fr-btn-outline { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #1e1b4b; font-weight: 600; font-size: 0.95rem; padding: 14px 26px; border-radius: 50px; border: 2px solid #1e1b4b; cursor: pointer; text-decoration: none; transition: all 0.2s; }
                .fr-btn-outline:hover { background: #1e1b4b; color: #fff; }
                .fr-btn-outline-light { color: #fff; border-color: rgba(255,255,255,0.4); }
                .fr-btn-outline-light:hover { background: #fff; color: #1e1b4b; }
                .fr-btn-yellow { background: #facc15; color: #1e1b4b; }
                .fr-btn-yellow:hover { box-shadow: 0 8px 24px rgba(250,204,21,0.4); }

                /* ── Highlights list ───────────────────────────── */
                .fr-hl-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
                .fr-hl-list li { display: flex; align-items: center; gap: 10px; font-size: 0.95rem; color: #444; }
                .fr-hl-list li svg { color: #eab308; flex-shrink: 0; }

                /* ── SECTION 01 — HERO ─────────────────────────── */
                .fr-hero { padding: 100px 0 80px; background: linear-gradient(135deg, #fff 55%, #fffbe6); }
                .fr-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
                @media(max-width:900px){ .fr-hero-grid { grid-template-columns: 1fr; } }

                /* ── Dashboard ─────────────────────────────────── */
                .fr-dashboard {
                    background: #1e1b4b; border-radius: 20px; padding: 24px;
                    box-shadow: 0 24px 60px rgba(10,15,30,0.3);
                    animation: fr-float 5s ease-in-out infinite;
                }
                @keyframes fr-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
                .fr-dash-badge { display: inline-block; background: rgba(250,204,21,0.15); color: #facc15; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 20px; margin-bottom: 14px; }
                .fr-dash-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
                .fr-dash-title { color: #fff; font-weight: 700; font-size: 0.9rem; }
                .fr-dash-live { color: #22c55e; font-size: 0.75rem; font-weight: 600; }
                .fr-dash-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-bottom: 20px; }
                .fr-stat { background: #111827; border-radius: 10px; padding: 12px 10px; text-align: center; }
                .fr-stat-label { display: block; font-size: 0.65rem; color: #6b7280; margin-bottom: 4px; }
                .fr-stat-value { display: block; font-size: 1.1rem; font-weight: 800; color: #facc15; }
                .fr-stat-sub { display: block; font-size: 0.65rem; color: #374151; margin-top: 2px; }
                .fr-task-list { display: flex; flex-direction: column; gap: 8px; }
                .fr-task-row { background: #111827; border-radius: 10px; padding: 10px 12px; border: 1px solid transparent; transition: border-color 0.3s; }
                .fr-task-active { border-color: #facc15; }
                .fr-task-top { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
                .fr-task-id { font-size: 0.7rem; color: #facc15; font-weight: 700; min-width: 48px; }
                .fr-task-name { font-size: 0.8rem; color: #e5e7eb; flex: 1; font-weight: 600; }
                .fr-task-status { font-size: 0.7rem; font-weight: 700; }
                .fr-task-bar-track { height: 4px; background: #1f2937; border-radius: 2px; overflow: hidden; margin-bottom: 4px; }
                .fr-task-bar { height: 100%; border-radius: 2px; transition: width 0.6s ease; }
                .fr-task-team { font-size: 0.65rem; color: #6b7280; }
                .fr-dash-footer { display: flex; justify-content: space-between; margin-top: 16px; padding-top: 12px; border-top: 1px solid #1f2937; font-size: 0.75rem; color: #4b5563; }

                /* ── SECTION 02 — OVERVIEW ─────────────────────── */
                .fr-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .fr-overview-grid { grid-template-columns: 1fr; } }
                .fr-ov-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .fr-ov-card { background: #1e1b4b; border-radius: 14px; padding: 22px 18px; }
                .fr-ov-icon { width: 44px; height: 44px; background: rgba(250,204,21,0.12); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; color: #facc15; }
                .fr-ov-card h4 { color: #fff; font-size: 0.9rem; font-weight: 700; margin-bottom: 6px; }
                .fr-ov-card p  { color: #6b7280; font-size: 0.8rem; line-height: 1.6; }

                /* ── SECTION 03 — CHALLENGES ───────────────────── */
                .fr-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
                @media(max-width:900px){ .fr-grid-3 { grid-template-columns: 1fr 1fr; } }
                @media(max-width:580px){ .fr-grid-3 { grid-template-columns: 1fr; } }
                .fr-ch-card { background: #fff; border: 1.5px solid #e8edf5; border-radius: 14px; padding: 24px 20px; transition: box-shadow 0.3s, transform 0.3s; }
                .fr-ch-card:hover { box-shadow: 0 8px 28px rgba(250,204,21,0.1); transform: translateY(-4px); }
                .fr-ch-icon { width: 44px; height: 44px; background: #fffbe6; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: #facc15; }
                .fr-ch-card h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; color: #1e1b4b; }
                .fr-ch-card p  { font-size: 0.82rem; color: #666; line-height: 1.65; }

                /* ── SECTION 04 — FEATURES ─────────────────────── */
                .fr-feat-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
                @media(max-width:900px){ .fr-feat-grid { grid-template-columns: 1fr 1fr; } }
                @media(max-width:580px){ .fr-feat-grid { grid-template-columns: 1fr; } }
                .fr-feat-card { background: #111827; border-radius: 14px; padding: 24px 20px; border: 1.5px solid #1f2937; transition: border-color 0.3s, transform 0.3s; }
                .fr-feat-card:hover { border-color: #facc15; transform: translateY(-4px); }
                .fr-feat-num { font-size: 1.8rem; font-weight: 900; color: rgba(250,204,21,0.15); line-height: 1; margin-bottom: 10px; }
                .fr-feat-card h4 { color: #facc15; font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; }
                .fr-feat-card p  { color: #9ca3af; font-size: 0.8rem; line-height: 1.6; margin-bottom: 10px; }
                .fr-feat-fns { font-size: 0.75rem; color: #4b5563; line-height: 1.6; padding-top: 10px; border-top: 1px solid #1f2937; }
                .fr-feat-label { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: #facc15; font-weight: 700; margin-bottom: 4px; }

                /* ── SECTION 05 — HOW IT WORKS ─────────────────── */
                .fr-steps-wrap { position: relative; }
                .fr-steps-line { position: absolute; top: 28px; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #facc15, #eab308, #facc15); border-radius: 2px; }
                .fr-steps-grid { display: grid; grid-template-columns: repeat(6,1fr); gap: 16px; position: relative; }
                @media(max-width:1000px){ .fr-steps-grid { grid-template-columns: repeat(3,1fr); } .fr-steps-line { display: none; } }
                @media(max-width:580px){ .fr-steps-grid { grid-template-columns: 1fr; } }
                .fr-step { display: flex; flex-direction: column; align-items: center; text-align: center; }
                .fr-step-num { width: 56px; height: 56px; border-radius: 50%; background: #1e1b4b; color: #facc15; font-weight: 900; font-size: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; box-shadow: 0 4px 16px rgba(30,27,75,0.25); position: relative; z-index: 1; }
                .fr-step h4 { font-size: 0.82rem; font-weight: 700; margin-bottom: 6px; color: #1e1b4b; }
                .fr-step p  { font-size: 0.75rem; color: #666; line-height: 1.6; }
                .fr-workflow-bar { margin-top: 36px; background: #1e1b4b; border-radius: 12px; padding: 16px 20px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 6px; }
                .fr-wf-step-label { font-size: 0.78rem; font-weight: 600; color: #facc15; }
                .fr-wf-arrow { color: #374151; font-size: 0.9rem; }
                .fr-example-bar { margin-top: 12px; background: #111827; border-radius: 10px; padding: 12px 20px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 6px; }
                .fr-ex-step { font-size: 0.75rem; color: #9ca3af; }

                /* ── SECTION 06 — BENEFITS ─────────────────────── */
                .fr-benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .fr-benefits-grid { grid-template-columns: 1fr; } }
                .fr-benefit-item { display: flex; gap: 16px; padding: 20px; border-radius: 12px; transition: background 0.3s; }
                .fr-benefit-item:hover { background: #fffbe6; }
                .fr-benefit-icon { width: 44px; height: 44px; background: rgba(250,204,21,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #facc15; }
                .fr-benefit-item h4 { font-weight: 700; font-size: 0.95rem; color: #1e1b4b; margin-bottom: 6px; }
                .fr-benefit-item p  { font-size: 0.82rem; color: #555; line-height: 1.6; }

                /* Benefits Dashboard ─────────────────────────── */
                .fr-benefits-dash { background: #1e1b4b; border-radius: 20px; padding: 24px; animation: fr-float 6s ease-in-out infinite; }
                .fr-bd-title { color: #facc15; font-weight: 700; font-size: 0.85rem; margin-bottom: 18px; text-transform: uppercase; letter-spacing: 1.5px; }
                .fr-bd-row { margin-bottom: 16px; }
                .fr-bd-meta { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.8rem; color: #9ca3af; }
                .fr-bd-meta strong { color: #fff; }
                .fr-bd-track { height: 6px; background: #1f2937; border-radius: 3px; overflow: hidden; }
                .fr-bd-bar { height: 100%; width: var(--w); background: linear-gradient(90deg,#facc15,#facc15); border-radius: 3px; animation: fr-grow 1.4s ease forwards; }
                @keyframes fr-grow { from { width: 0 } to { width: var(--w) } }

                /* ── SECTION 07 — INDUSTRIES ───────────────────── */
                .fr-ind-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
                @media(max-width:900px){ .fr-ind-grid { grid-template-columns: 1fr 1fr; } }
                @media(max-width:580px){ .fr-ind-grid { grid-template-columns: 1fr; } }
                .fr-ind-card { background: #111827; border-radius: 14px; padding: 24px 20px; border: 1.5px solid #1f2937; transition: border-color 0.3s, transform 0.3s; }
                .fr-ind-card:hover { border-color: #facc15; transform: translateY(-4px); }
                .fr-ind-icon { width: 48px; height: 48px; background: rgba(250,204,21,0.12); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: #facc15; }
                .fr-ind-card h4 { color: #fff; font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; }
                .fr-ind-card p  { color: #6b7280; font-size: 0.8rem; line-height: 1.6; }
                .fr-regional { margin-top: 32px; background: rgba(250,204,21,0.08); border: 1px solid rgba(250,204,21,0.2); border-radius: 10px; padding: 14px 20px; font-size: 0.82rem; color: #9ca3af; }
                .fr-regional strong { color: #facc15; }

                /* ── SECTION 08 — COMPARISON ───────────────────── */
                .fr-comp-table { width: 100%; border-collapse: collapse; border-radius: 14px; overflow: hidden; }
                .fr-comp-table thead th { background: #1e1b4b; color: #fff; padding: 14px 18px; font-size: 0.85rem; text-align: left; }
                .fr-comp-table thead th:nth-child(2) { background: #111827; }
                .fr-comp-table thead th:nth-child(3) { background: #facc15; color: #1e1b4b; }
                .fr-comp-table tbody tr:nth-child(even) { background: #f8fafc; }
                .fr-comp-table tbody tr:nth-child(odd) { background: #fff; }
                .fr-comp-table td { padding: 12px 18px; font-size: 0.85rem; border-bottom: 1px solid #e8edf5; }
                .fr-comp-table td:first-child { font-weight: 700; color: #1e1b4b; }
                .fr-comp-table td:nth-child(2) { color: #888; }
                .fr-comp-table td:nth-child(3) { color: #1e1b4b; font-weight: 600; }
                .fr-comp-note { margin-top: 28px; background: #fffbe6; border: 1.5px solid #fde68a; border-radius: 12px; padding: 20px; font-size: 0.85rem; color: #374151; line-height: 1.7; }

                /* ── SECTION 09 — CONSTRUCTION ─────────────────── */
                .fr-const-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .fr-const-grid { grid-template-columns: 1fr; } }
                .fr-const-uses { display: flex; flex-direction: column; gap: 14px; margin-top: 24px; }
                .fr-const-item { display: flex; gap: 14px; padding: 16px; background: #111827; border-radius: 12px; }
                .fr-const-icon { width: 38px; height: 38px; background: rgba(250,204,21,0.15); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #facc15; }
                .fr-const-item h4 { color: #fff; font-size: 0.85rem; font-weight: 700; margin-bottom: 4px; }
                .fr-const-item p  { color: #6b7280; font-size: 0.78rem; line-height: 1.6; }
                .fr-const-note { margin-top: 24px; background: rgba(250,204,21,0.08); border: 1px solid rgba(250,204,21,0.2); border-radius: 10px; padding: 16px 18px; font-size: 0.82rem; color: #9ca3af; line-height: 1.65; }

                /* Digital Dashboard ─────────────────────────── */
                .fr-digital-dash { background: #1e1b4b; border-radius: 20px; padding: 24px; animation: fr-float 5.5s ease-in-out infinite 0.5s; }
                .fr-wf-stage { display: flex; align-items: center; gap: 10px; padding: 8px 0; animation: fr-slide-r 0.5s ease both; }
                @keyframes fr-slide-r { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
                .fr-wf-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
                .fr-wf-label { font-size: 0.82rem; color: #d1d5db; }
                .fr-wf-line { flex: 1; height: 1px; background: #1f2937; margin-left: auto; }

                /* ── SECTION 10 — CONSIDERATIONS ──────────────── */
                .fr-cons-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .fr-cons-grid { grid-template-columns: 1fr; } }
                .fr-cons-list { display: flex; flex-direction: column; gap: 20px; }
                .fr-cons-item { display: flex; gap: 16px; }
                .fr-cons-num { width: 36px; height: 36px; border-radius: 50%; background: #facc15; color: #fff; font-weight: 900; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .fr-cons-item h4 { font-size: 0.9rem; font-weight: 700; color: #1e1b4b; margin-bottom: 6px; }
                .fr-cons-item p  { font-size: 0.82rem; color: #555; line-height: 1.65; }
                .fr-cons-note { margin-top: 24px; background: #fffbe6; border: 1.5px solid #fde68a; border-radius: 10px; padding: 14px 18px; font-size: 0.82rem; color: #374151; line-height: 1.65; }

                /* ── SECTION 11 — WHY FLYTOWARDS ──────────────── */
                .fr-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
                @media(max-width:900px){ .fr-why-grid { grid-template-columns: 1fr; } }
                .fr-diff-list { display: flex; flex-direction: column; gap: 18px; }
                .fr-diff-item { display: flex; gap: 14px; }
                .fr-diff-num { width: 32px; height: 32px; border-radius: 50%; background: rgba(250,204,21,0.15); border: 2px solid #facc15; color: #facc15; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .fr-diff-item h4 { font-size: 0.9rem; font-weight: 700; color: #1e1b4b; margin-bottom: 4px; }
                .fr-diff-item p  { font-size: 0.82rem; color: #555; line-height: 1.6; }

                /* ── SECTION 12 — FAQ ──────────────────────────── */
                .fr-faq-list { display: flex; flex-direction: column; gap: 0; border: 1.5px solid #e8edf5; border-radius: 14px; overflow: hidden; }
                .fr-faq-item { border-bottom: 1.5px solid #e8edf5; }
                .fr-faq-item:last-child { border-bottom: none; }
                .fr-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; background: none; border: none; cursor: pointer; font-size: 0.9rem; font-weight: 600; color: #1e1b4b; text-align: left; gap: 12px; }
                .fr-faq-btn:hover { background: #f8fafc; }
                .fr-faq-icon { transition: transform 0.3s; flex-shrink: 0; }
                .fr-faq-open .fr-faq-icon { transform: rotate(180deg); }
                .fr-faq-body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s; padding: 0 22px; font-size: 0.85rem; color: #555; line-height: 1.7; }
                .fr-faq-open .fr-faq-body { max-height: 300px; padding: 0 22px 18px; }

                /* ── SECTION 13 — FINAL CTA ────────────────────── */
                .fr-cta-banner { background: linear-gradient(135deg, #1e1b4b 0%, #29245f 100%); padding: 80px 0; text-align: center; }
                .fr-cta-banner h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900; color: #fff; margin-bottom: 16px; }
                .fr-cta-banner p  { color: #9ca3af; font-size: 1rem; max-width: 640px; margin: 0 auto 32px; line-height: 1.75; }
                .fr-cta-row { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }
            `}</style>

            <div className="fr-page">

                {/* ── S01 HERO ───────────────────────────────────────── */}
                <section className="fr-hero">
                    <div className="fr-wrap">
                        <div className="fr-hero-grid">
                            <div>
                                <RevealCard>
                                    <p className="fr-eyebrow">FlyTowards Digital Innovation</p>
                                    <h1 className="fr-h1">
                                        Flyroll –<br />
                                        <span>Business Automation</span><br />
                                        Software
                                    </h1>
                                    <p className="fr-lead">Simplify Daily Operations, Automate Workflows and Manage Business Activities Digitally</p>
                                    <p className="fr-lead" style={{ marginTop: 10 }}>
                                        Managing daily tasks, project updates, approvals and business records through spreadsheets, phone calls and disconnected applications can make operations difficult to coordinate. Flyroll by FlyTowards Digital Innovation is a proposed business automation software solution for small and growing businesses across Tamil Nadu, particularly South Tamil Nadu.
                                    </p>
                                    <ul className="fr-hl-list">
                                        {highlights.map((h, i) => (
                                            <li key={i}><CheckCircle2 size={16} /> {h}</li>
                                        ))}
                                    </ul>
                                    <p className="fr-note">Product features, automation capabilities and demo availability are subject to confirmation.</p>
                                    <div className="fr-btn-row">
                                        <Link to="/contact" className="fr-btn-primary">Request a Flyroll Demo <ArrowRight size={16} /></Link>
                                        <Link to="/contact" className="fr-btn-outline">Discuss Your Automation Requirements</Link>
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
                <section className="fr-section fr-section-soft">
                    <div className="fr-wrap">
                        <div className="fr-overview-grid">
                            <RevealCard>
                                <p className="fr-eyebrow">Product Overview</p>
                            <h2 className="fr-h2">What Is Flyroll <span>Business Automation Software?</span></h2>
                                <p className="fr-lead">Business automation software is a digital application used to streamline recurring business processes, organize workflows and reduce selected manual activities through predefined rules and structured systems.</p>
                                <p className="fr-lead">Depending on the product, automation may involve task assignments, status updates, notifications, approvals, record management and reporting.</p>
                                <p className="fr-lead">For growing businesses, maintaining information across separate applications can make it difficult to coordinate responsibilities and track operational progress.</p>
                                <p className="fr-lead">Flyroll is being positioned as a digital management system that brings selected business processes, tasks and operational information into a structured platform.</p>
                            </RevealCard>
                            <div className="fr-ov-cards">
                                {overview.map(([Icon, title, desc], i) => (
                                    <RevealCard key={i} delay={i * 80}>
                                        <div className="fr-ov-card">
                                            <div className="fr-ov-icon"><Icon size={22} /></div>
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
                <section className="fr-section">
                    <div className="fr-wrap">
                        <RevealCard>
                            <p className="fr-eyebrow">Operational Challenges</p>
                            <h2 className="fr-h2">Common <span>Operational Challenges</span> Faced by Growing Businesses</h2>
                        </RevealCard>
                        <div className="fr-grid-3" style={{ marginTop: 40 }}>
                            {challenges.map(([Icon, title, desc], i) => (
                                <RevealCard key={i} delay={i * 70}>
                                    <div className="fr-ch-card">
                                        <div className="fr-ch-icon"><Icon size={22} /></div>
                                        <h4>{title}</h4>
                                        <p>{desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── S04 FEATURES ───────────────────────────────────── */}
                <section className="fr-section fr-section-dark">
                    <div className="fr-wrap">
                        <RevealCard>
                            <p className="fr-eyebrow fr-eyebrow-y">Software Features</p>
                            <h2 className="fr-h2 fr-h2-light">Key Features Planned for Flyroll Business Automation Software</h2>
                            <p className="fr-lead fr-lead-dark" style={{ maxWidth: 640 }}>The following are proposed capabilities for Flyroll. Actual functionality, automation rules, configuration options and availability must be verified before publication.</p>
                        </RevealCard>
                        <div className="fr-feat-grid" style={{ marginTop: 40 }}>
                            {features.map((f, i) => (
                                <RevealCard key={i} delay={i * 70}>
                                    <div className="fr-feat-card">
                                        <div className="fr-feat-num">{f.num}</div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                        <div className="fr-feat-label">Potential Functions</div>
                                        <div className="fr-feat-fns">{f.fns}</div>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── S05 HOW IT WORKS ───────────────────────────────── */}
                <section className="fr-section fr-section-soft">
                    <div className="fr-wrap">
                        <RevealCard>
                            <p className="fr-eyebrow">How It Works</p>
                            <h2 className="fr-h2">How Does Business Automation Software <span>Simplify Daily Operations?</span></h2>
                            <p className="fr-lead" style={{ maxWidth: 640 }}>Business automation software helps organizations define how work moves between employees, departments and process stages.</p>
                        </RevealCard>
                        <div style={{ marginTop: 48 }}>
                            <RevealCard>
                                <div className="fr-steps-wrap">
                                    <div className="fr-steps-line" />
                                    <div className="fr-steps-grid">
                                        {steps.map(([num, title, desc], i) => (
                                            <div key={i} className="fr-step">
                                                <div className="fr-step-num">{num}</div>
                                                <h4>{title}</h4>
                                                <p>{desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </RevealCard>
                        </div>
                        <RevealCard delay={200}>
                            <div className="fr-workflow-bar">
                                {['Process Setup','Workflow Configuration','Task Assignment','Activity Tracking','Approval','Operational Reporting'].map((s, i, arr) => (
                                    <span key={i}>
                                        <span className="fr-wf-step-label">{s}</span>
                                        {i < arr.length - 1 && <span className="fr-wf-arrow"> → </span>}
                                    </span>
                                ))}
                            </div>
                        </RevealCard>
                        <RevealCard delay={280}>
                            <div className="fr-example-bar">
                                {['Project Activity Request','Site Team Assignment','Work Status Update','Supervisor Review','Approval','Progress Report'].map((s, i, arr) => (
                                    <span key={i}>
                                        <span className="fr-ex-step">{s}</span>
                                        {i < arr.length - 1 && <span className="fr-wf-arrow"> → </span>}
                                    </span>
                                ))}
                            </div>
                        </RevealCard>
                        <RevealCard delay={340}>
                            <p className="fr-note" style={{ textAlign: 'center', marginTop: 16 }}>Automated routing, reminders, approvals and notifications depend on verified product capabilities.</p>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S06 BENEFITS ───────────────────────────────────── */}
                <section className="fr-section">
                    <div className="fr-wrap">
                        <RevealCard>
                            <p className="fr-eyebrow">Business Benefits</p>
                            <h2 className="fr-h2">Benefits of Business Automation Software for <span>Small &amp; Growing Businesses</span></h2>
                        </RevealCard>
                        <div className="fr-benefits-grid" style={{ marginTop: 40 }}>
                            <RevealCard delay={100}>
                                <BenefitsDashboard />
                            </RevealCard>
                            <div>
                                {benefits.map(([Icon, title, desc], i) => (
                                    <RevealCard key={i} delay={i * 80}>
                                        <div className="fr-benefit-item">
                                            <div className="fr-benefit-icon"><Icon size={22} /></div>
                                            <div>
                                                <h4>{title}</h4>
                                                <p>{desc}</p>
                                            </div>
                                        </div>
                                    </RevealCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── S07 INDUSTRIES ─────────────────────────────────── */}
                <section className="fr-section fr-section-dark">
                    <div className="fr-wrap">
                        <RevealCard>
                            <p className="fr-eyebrow fr-eyebrow-y">Industries Served</p>
                            <h2 className="fr-h2 fr-h2-light">Business Automation Software for Organizations Across Tamil Nadu</h2>
                            <p className="fr-lead fr-lead-dark" style={{ maxWidth: 600 }}>Different industries have different operational processes, task responsibilities and approval requirements.</p>
                        </RevealCard>
                        <div className="fr-ind-grid" style={{ marginTop: 40 }}>
                            {industries.map(([Icon, title, desc], i) => (
                                <RevealCard key={i} delay={i * 70}>
                                    <div className="fr-ind-card">
                                        <div className="fr-ind-icon"><Icon size={24} /></div>
                                        <h4>{title}</h4>
                                        <p>{desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                        <RevealCard delay={200}>
                            <div className="fr-regional">
                                <strong>Regional Focus:</strong> Tirunelveli, Tenkasi, Sankarankovil, Madurai, Thoothukudi, Kanyakumari and other markets across Tamil Nadu.
                            </div>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S08 COMPARISON ─────────────────────────────────── */}
                <section className="fr-section fr-section-soft">
                    <div className="fr-wrap">
                        <RevealCard>
                            <p className="fr-eyebrow">Software vs Manual</p>
                            <h2 className="fr-h2">Business Automation Software vs <span>Manual Business Processes</span></h2>
                        </RevealCard>
                        <RevealCard delay={100}>
                            <div style={{ marginTop: 32, overflowX: 'auto' }}>
                                <table className="fr-comp-table">
                                    <thead>
                                        <tr>
                                            <th>Business Activity</th>
                                            <th>Manual Process</th>
                                            <th>Business Automation Software</th>
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
                        </RevealCard>
                        <RevealCard delay={150}>
                            <div className="fr-comp-note">
                                <strong>When Should a Business Move from Manual Workflows to Automation Software?</strong><br /><br />
                                Manual workflows may be sufficient for businesses with simple processes, limited staff and a small number of recurring activities. Business automation software becomes more useful when multiple employees or departments manage connected tasks, approvals and operational information. The decision should depend on process complexity, expected benefits, implementation effort and the organization's ability to maintain accurate digital records.
                            </div>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S09 CONSTRUCTION ───────────────────────────────── */}
                <section className="fr-section fr-section-blue">
                    <div className="fr-wrap">
                        <RevealCard>
                            <p className="fr-eyebrow fr-eyebrow-y">Construction Workflows</p>
                            <h2 className="fr-h2 fr-h2-light">Business Automation &amp; Project Management Software for Construction</h2>
                            <p className="fr-lead fr-lead-dark" style={{ maxWidth: 640 }}>Construction projects often involve multiple teams, work stages, site activities, approvals and supporting documents. Project management software for construction helps organize project information, work responsibilities, progress updates and relevant operational records.</p>
                        </RevealCard>
                        <div className="fr-const-grid" style={{ marginTop: 40 }}>
                            <div>
                                <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: 16 }}>Construction Workflow Requirements</p>
                                <div className="fr-const-uses">
                                    {constructionUses.map(([Icon, title, desc], i) => (
                                        <RevealCard key={i} delay={i * 70}>
                                            <div className="fr-const-item">
                                                <div className="fr-const-icon"><Icon size={18} /></div>
                                                <div>
                                                    <h4>{title}</h4>
                                                    <p>{desc}</p>
                                                </div>
                                            </div>
                                        </RevealCard>
                                    ))}
                                </div>
                                <RevealCard delay={200}>
                                    <div className="fr-const-note">
                                        <strong style={{ color: '#facc15' }}>Can Flyroll Support Construction Project Management?</strong><br /><br />
                                        Flyroll is being positioned around workflow automation and project coordination requirements that may be relevant to construction businesses. Specific construction modules, site reporting, material tracking, cost management, contractor management and mobile functionality must be verified before being advertised.
                                    </div>
                                </RevealCard>
                                <RevealCard delay={260}>
                                    <div style={{ marginTop: 20 }}>
                                        <Link to="/contact" className="fr-btn-primary">Discuss Your Construction Workflow Requirements <ArrowRight size={16} /></Link>
                                    </div>
                                </RevealCard>
                            </div>
                            <RevealCard delay={150}>
                                <DigitalDashboard />
                            </RevealCard>
                        </div>
                    </div>
                </section>

                {/* ── S10 CONSIDERATIONS ─────────────────────────────── */}
                <section className="fr-section">
                    <div className="fr-wrap">
                        <RevealCard>
                            <p className="fr-eyebrow">Implementation Considerations</p>
                            <h2 className="fr-h2">Why a Digital Management System Matters for <span>Business Operations</span></h2>
                            <p className="fr-lead" style={{ maxWidth: 640 }}>A digital management system helps organizations maintain operational information, track activities and coordinate selected business processes through electronic records and structured workflows. For businesses moving away from manual processes, successful implementation depends on accurate data, suitable user permissions and clear responsibilities.</p>
                        </RevealCard>
                        <div className="fr-cons-grid" style={{ marginTop: 40 }}>
                            <div>
                                <div className="fr-cons-list">
                                    {considerations.map(([num, title, desc], i) => (
                                        <RevealCard key={i} delay={i * 80}>
                                            <div className="fr-cons-item">
                                                <div className="fr-cons-num">{num}</div>
                                                <div>
                                                    <h4>{title}</h4>
                                                    <p>{desc}</p>
                                                </div>
                                            </div>
                                        </RevealCard>
                                    ))}
                                </div>
                                <RevealCard delay={200}>
                                    <div className="fr-cons-note">
                                        ℹ <strong>Implementation Note:</strong> Automated notifications, integrations, access controls, mobile applications and deployment options depend on verified Flyroll capabilities and the agreed implementation scope.
                                    </div>
                                </RevealCard>
                            </div>
                            <RevealCard delay={150}>
                                <div className="fr-benefits-dash">
                                    <div className="fr-bd-title">System Readiness</div>
                                    {[['Process Documentation','Ready',90],['User Access Setup','In Review',55],['Data Migration','Planned',30],['Team Training','Scheduled',20]].map(([l,v,p],i)=>(
                                        <div key={i} className="fr-bd-row">
                                            <div className="fr-bd-meta"><span>{l}</span><strong style={{color:'#facc15'}}>{v}</strong></div>
                                            <div className="fr-bd-track">
                                                <div className="fr-bd-bar" style={{'--w':`${p}%`, animationDelay:`${i*0.2}s`}}/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </RevealCard>
                        </div>
                    </div>
                </section>

                {/* ── S11 WHY FLYTOWARDS ─────────────────────────────── */}
                <section className="fr-section fr-section-soft">
                    <div className="fr-wrap">
                        <div className="fr-why-grid">
                            <RevealCard>
                                <p className="fr-eyebrow">Why FlyTowards</p>
                                <h2 className="fr-h2">Why Consider Flyroll by FlyTowards Digital Innovation?</h2>
                                <p className="fr-lead">Choosing business automation software involves more than replacing spreadsheets with digital forms. Organizations should evaluate their actual business processes, task responsibilities, approval requirements and information management needs.</p>
                                <p className="fr-lead">FlyTowards approaches software planning through business requirements, practical workflows and implementation considerations.</p>
                            </RevealCard>
                            <div>
                                <div className="fr-diff-list">
                                    {differentiators.map(([num, title, desc], i) => (
                                        <RevealCard key={i} delay={i * 80}>
                                            <div className="fr-diff-item">
                                                <div className="fr-diff-num">{num}</div>
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
                                        <Link to="/contact" className="fr-btn-primary">Discuss Your Flyroll Automation Requirements <ArrowRight size={16} /></Link>
                                    </div>
                                </RevealCard>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── S12 FAQ ────────────────────────────────────────── */}
                <section className="fr-section">
                    <div className="fr-wrap" style={{ maxWidth: 800 }}>
                        <RevealCard>
                            <p className="fr-eyebrow">FAQ</p>
                            <h2 className="fr-h2">Frequently Asked Questions About <span>Business Automation Software</span></h2>
                        </RevealCard>
                        <RevealCard delay={100}>
                            <div className="fr-faq-list" style={{ marginTop: 32 }}>
                                {faqs.map(([q, a], i) => <FaqItem key={i} q={q} a={a} />)}
                            </div>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S13 FINAL CTA ──────────────────────────────────── */}
                <section className="fr-cta-banner">
                    <div className="fr-wrap">
                        <RevealCard>
                            <h2>Make Your Business Workflows More Organized with Flyroll</h2>
                            <p>Whether you manage construction projects, service operations, internal approvals or growing business teams, structured digital workflows can help organize tasks, responsibilities and operational information. Explore Flyroll by FlyTowards Digital Innovation for business automation, project coordination and digital management requirements across Tamil Nadu.</p>
                            <div className="fr-cta-row">
                                <Link to="/contact" className="fr-btn-primary fr-btn-yellow">Request a Flyroll Demo <ArrowRight size={16} /></Link>
                                <Link to="/contact" className="fr-btn-outline fr-btn-outline-light">Get a Business Automation Consultation</Link>
                            </div>
                            <p style={{ marginTop: 20, fontSize: '0.78rem', color: '#374151' }}>Confirm the official product positioning, supported automation features and demo availability before publishing these calls to action.</p>
                        </RevealCard>
                    </div>
                </section>

            </div>
        </>
    );
}
