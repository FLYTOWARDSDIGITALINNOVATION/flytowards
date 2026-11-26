import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, CheckCircle2, ChevronDown, HelpCircle, AlertCircle,
    FolderKanban, Building2, HardHat, FileText, BarChart3, ClipboardList,
    Users, Settings2, Layers, Database, Eye, TrendingUp, Briefcase,
    Factory, Wrench, Store, GraduationCap, Shield, Clock3, Zap,
    FolderOpen, CheckSquare, MapPin, Calendar, PieChart
} from 'lucide-react';

/* ══ Static data ══════════════════════════════════════════════════════ */
const highlights = [
    'Project and task management',
    'Property and construction workflow planning',
    'Document and business record management',
    'Operational dashboards and reporting',
];

const overview = [
    [FolderKanban, 'Project Management',      'Organize project information, activities, assignments and progress.'],
    [Building2,    'Property Management',     'Maintain property-related information and administrative workflows.'],
    [HardHat,      'Construction Operations', 'Track construction activities, project updates and relevant operational records.'],
    [FileText,     'Document Management',     'Organize business files, project documents and related information.'],
];

const challenges = [
    ['Scattered Business Information',      'Project details, property records and important documents may be stored across different files and applications.'],
    ['Limited Project Visibility',           'Managers may struggle to understand project status, completed activities and pending tasks without consistent updates.'],
    ['Unorganized Task Assignments',         'When responsibilities are communicated informally, employees may have difficulty identifying assigned work and deadlines.'],
    ['Construction Coordination Difficulties','Managing site activities, material requirements, contractor updates and project records manually can complicate coordination.'],
    ['Document Tracking Problems',           'Important agreements, drawings, approvals and project documents may be difficult to locate or maintain in an organized manner.'],
    ['Inconsistent Operational Reporting',   'Preparing management reports from multiple spreadsheets can require repeated manual consolidation.'],
];

const features = [
    ['Project Management',          'Organize projects, activities, milestones and relevant operational information.',                                            'Project profiles · Project status · Milestones · Assigned employees · Activity records · Progress summaries'],
    ['Task & Workflow Management',  'Maintain task assignments, responsibilities and work progress across relevant business activities.',                         'Task creation · Priorities · Deadlines · Employee assignments · Status updates · Approval workflows'],
    ['Property Management',         'Organize property information and related administrative activities.',                                                       'Property profiles · Unit information · Ownership records · Maintenance requests · Property documents'],
    ['Construction Management',     'Maintain construction project information and coordinate selected site-related activities.',                                 'Site activity records · Work progress · Contractor details · Material requirements · Construction docs'],
    ['Document Management',         'Store, categorize and retrieve business documents according to supported access permissions.',                               'File uploads · Document categories · Project-linked records · Document status · Access controls · Version history'],
    ['Business Dashboards & Reports','Review relevant business activities and operational information through structured dashboards.',                            'Project summaries · Pending tasks · Activity reports · Property records · Document status'],
];

const steps = [
    ['Set Up Business Information',  'Configure relevant organizational information, users, departments and supported business modules.'],
    ['Create Projects or Records',   'Add projects, properties, construction activities or other operational records according to available modules.'],
    ['Assign Tasks & Responsibilities','Allocate work to authorized team members and define relevant priorities or deadlines.'],
    ['Update Work Progress',          'Record activity updates, project changes, completed tasks and relevant operational information.'],
    ['Manage Related Documents',      'Attach or organize supporting files, approvals and documents according to the supported workflow.'],
    ['Review Reports & Activities',   'Access available dashboards and reports to review progress, pending work and operational records.'],
];

const benefits = [
    [Database,      'Centralize Business Information', 'Maintain relevant projects, activities, records and documents within a structured application.'],
    [CheckSquare,   'Improve Task Coordination',       'Provide employees with clearer information about assigned work, responsibilities and pending activities.'],
    [Eye,           'Track Project Progress',          'Use recorded project updates and status information to support operational reviews.'],
    [FolderOpen,    'Organize Important Documents',    'Maintain relevant business files and project documents in an accessible, structured system with appropriate permissions.'],
    [PieChart,      'Support Operational Planning',    'Use available dashboards and reports to review business activities and identify areas requiring attention.'],
];

const industries = [
    [HardHat,    'Construction Companies',         'Manage construction project information, site activities, task assignments, progress records and related documentation.'],
    [Building2,  'Real Estate & Property',         'Organize property details, administrative activities, maintenance information and property-related records.'],
    [Wrench,     'Contractors & Engineering',      'Track project responsibilities, work assignments, milestones and supporting technical documents.'],
    [Factory,    'Manufacturing Businesses',       'Organize selected internal projects, operational tasks, departmental activities and business documentation.'],
    [Briefcase,  'Professional Service Companies','Maintain project records, team assignments, client-related activities and document workflows.'],
    [TrendingUp, 'Small & Growing Enterprises',   'Coordinate business activities, employee responsibilities, administrative information and operational reporting.'],
];

const comparisons = [
    ['Project records',       'Separate spreadsheets and folders', 'Structured project information'],
    ['Task assignments',      'Messages and manual lists',         'Recorded task ownership'],
    ['Progress tracking',     'Periodic manual updates',           'Organized activity status'],
    ['Property information',  'Individual registers and files',    'Centralized property records'],
    ['Construction documents','Separate physical or digital folders','Project-linked document records'],
    ['Operational reporting', 'Manual data consolidation',         'Structured dashboards and reports'],
    ['Team coordination',     'Informal communication',            'Defined workflows and responsibilities'],
];

const docBlocks = [
    ['Centralized Document Organization', 'A suitable document management system should support structured file categories and relationships between documents and relevant business records.'],
    ['User Access & Data Security',       'Businesses should evaluate authentication, role-based permissions, secure file handling, backups and activity records.'],
    ['Document History & Approvals',      'Some systems support version history, document status and approval workflows. These capabilities should be confirmed for the specific product.'],
    ['Data Migration & Implementation',   'Before adopting a new platform, businesses should assess existing spreadsheets, project records, property details, document folders and user responsibilities.'],
];

const whyFly = [
    ['Business Requirement Assessment', 'Understand your existing projects, operational processes, users and information management challenges.'],
    ['Module & Workflow Planning',      'Identify relevant project management, property management, construction and document management requirements.'],
    ['Practical User Experience',       'Plan suitable interfaces for business owners, project managers, administrative employees and authorized team members.'],
    ['Integration & Implementation',    'Review existing business applications, data records and technical dependencies before defining the proposed implementation.'],
];

const faqs = [
    ['What is business management software?',                                      'Business management software is an application used to organize business information, manage activities, track tasks and maintain operational records. Depending on the product, it may include project management, property administration, document management and reporting features.'],
    ['Is business management software suitable for small businesses?',             'Yes. Small businesses can use management software to organize tasks, projects, records and employee responsibilities. The appropriate solution depends on business complexity, required features and budget.'],
    ['What is the difference between business management and project management?', 'Business management software may cover multiple organizational processes, while project management software focuses on planning, assigning and tracking project-related work. Some business management platforms include project management functionality.'],
    ['Can business management software help construction companies?',              'Yes. Suitable software can help construction businesses organize project information, site activities, assigned tasks, progress records and supporting documents. Available construction-specific functionality varies by product.'],
    ['What is property management software used for?',                            'Property management software is used to maintain property information and support relevant administrative activities. Depending on the application, it may include unit records, maintenance requests, occupant information and property-related documents.'],
    ['Can business management software include document management?',             'Yes. Some platforms provide document storage, categorization, access permissions and links between files and business records. Advanced features such as version control and approval workflows depend on the product.'],
    ['Can FIX integrate with accounting, CRM or other business software?',        'Potential integrations depend on the verified FIX functionality, supported APIs, data exchange options and the technical capabilities of the existing applications. Integration feasibility should be assessed before implementation.'],
    ['How much does business management software cost in Tamil Nadu?',            'Pricing varies according to the product, number of users, required modules, customization, deployment, data migration, integrations and support arrangements. Businesses should request a quotation based on their actual requirements.'],
];

/* ══ Scroll-reveal hook ═══════════════════════════════════════════════ */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('fx-visible'); obs.disconnect(); } },
            { threshold: 0.11 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

const Heading = ({ eyebrow, title, text }) => (
    <header className="fx-heading">
        <span className="fx-tag">{eyebrow}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
    </header>
);

function RevealCard({ children, delay = 0, className = '' }) {
    const ref = useReveal();
    return (
        <article ref={ref} className={`fx-card fx-reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
            {children}
        </article>
    );
}

/* ══ Main page ════════════════════════════════════════════════════════ */
export default function FixProduct() {
    const [openFaq, setOpenFaq] = useState(null);
    const [tick, setTick] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'FIX – Business Management Software | FlyTowards';
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'FlyTowards FIX is a proposed business management software for project tracking, property management, construction operations and document management in Tamil Nadu.');
        const t = setInterval(() => setTick(p => p + 1), 1800);
        return () => clearInterval(t);
    }, []);

    /* Animated dashboard rows */
    const dashRows = [
        { label: 'Site A – Foundation', pct: 72, status: 'On Track' },
        { label: 'Block B – Framing',   pct: 45, status: 'In Progress' },
        { label: 'Unit 3 – Plumbing',   pct: 90, status: 'Near Complete' },
        { label: 'Block C – Approvals', pct: 20, status: 'Pending Docs' },
    ];
    const activeRow = tick % dashRows.length;

    return (
        <main className="fx-page">
            <style>{`
/* ══════════════════════════════════════════════════════════════
   FIX BUSINESS MANAGEMENT SOFTWARE  —  fx-* namespace
   COLOUR PALETTE: Yellow #facc15 / Black #0f0f0f / White #ffffff
   NO other hues used anywhere in this file
══════════════════════════════════════════════════════════════ */
.fx-page{
  --Y:#facc15;   /* yellow  */
  --B:#0f0f0f;   /* black   */
  --W:#ffffff;   /* white   */
  --G:#f5f5f5;   /* near-white soft bg */
  --M:#5a5a5a;   /* mid-grey muted text */
  --L:#e0e0e0;   /* light border */
  background:var(--W);color:var(--B);
  font-family:'Outfit',sans-serif;overflow-x:hidden
}
.fx-page *{box-sizing:border-box}
.fx-wrap{width:min(1180px,90%);margin:auto}
.fx-section{padding:80px 0}
.fx-dark{background:var(--B);color:var(--W)}
.fx-soft{background:var(--G)}

/* ── Tag ── */
.fx-tag{
  display:inline-flex;align-items:center;gap:7px;
  border:1px solid #facc15;background:#fff7cc;color:#1e1b4b;
  border-radius:99px;padding:6px 14px;font-weight:800;
  font-size:.75rem;letter-spacing:.1em;text-transform:uppercase
}
.fx-tag-light{
  display:inline-flex;align-items:center;gap:7px;
  border:1px solid #facc15;background:#fff7cc;color:#1e1b4b;
  border-radius:99px;padding:6px 14px;font-weight:800;
  font-size:.75rem;letter-spacing:.1em;text-transform:uppercase
}

/* ── Headings ── */
.fx-heading{text-align:center;max-width:860px;margin:0 auto 36px}
.fx-heading h2{font-size:clamp(2rem,4vw,3rem);line-height:1.12;margin:14px 0;font-weight:900;letter-spacing:-.03em;color:#1e1b4b}
.fx-heading h2 em{color:var(--Y);font-style:normal}
.fx-dark .fx-heading h2{color:var(--Y)}
.fx-heading p{color:var(--M);line-height:1.75;margin:0}
.fx-dark .fx-heading p{color:#aaa}

/* ── Buttons ── */
.fx-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:9px;
  padding:14px 24px;border-radius:99px;text-decoration:none;font-weight:900;
  transition:transform .2s,box-shadow .2s;font-family:inherit;border:0;cursor:pointer;
  font-size:1rem
}
.fx-btn:hover{transform:translateY(-3px);box-shadow:0 12px 28px #00000030}
.fx-primary{background:var(--Y);color:var(--B)}
.fx-outline{background:transparent;color:var(--B);border:2px solid var(--B)!important}
.fx-outline-dark{background:transparent;color:var(--B);border:2px solid var(--B)!important}

/* ══ HERO ════════════════════════════════════════════════════════════ */
.fx-hero{
  min-height:660px;padding:140px 0 80px;
  background:var(--W);
  position:relative;overflow:hidden
}
/* animated grid pattern */
.fx-hero::before{
  content:'';position:absolute;inset:0;
  background-image:
    linear-gradient(rgba(30,27,75,.035) 1px,transparent 1px),
    linear-gradient(90deg,rgba(30,27,75,.035) 1px,transparent 1px);
  background-size:50px 50px;
  animation:fxGridSlide 20s linear infinite
}
@keyframes fxGridSlide{to{background-position:50px 50px}}
/* glow orb */
.fx-hero::after{
  content:'';position:absolute;top:-20%;right:-10%;
  width:600px;height:600px;border-radius:50%;
  background:none;
  animation:none
}
@keyframes fxOrb{50%{transform:scale(1.15) translate(-30px,20px)}}

.fx-hero-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:36px;align-items:center;position:relative;z-index:2}
.fx-page h1{font-size:clamp(2.2rem,3vw,2.8rem);line-height:1.08;letter-spacing:-.05em;margin:20px 0;font-weight:900;color:#1e1b4b}
.fx-page h1 em{display:inline;color:var(--Y);font-style:normal}
.fx-lead{font-size:1.07rem;line-height:1.72;color:#5a5a5a}
.fx-actions{display:flex;gap:11px;flex-wrap:wrap;margin:24px 0}
.fx-hls{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.fx-hl{display:flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #e0e0e0;border-radius:12px;font-size:.84rem;font-weight:700;color:#1e1b4b;background:#fff}
.fx-hl svg{color:var(--Y);flex:none}
.fx-note{font-size:.78rem;color:#5a5a5a;line-height:1.5;margin-top:12px}

/* ── FIX Dashboard ── */
.fx-dashboard{
  border-radius:22px;padding:18px;
  background:#1a1a1a;border:1px solid #333;
  box-shadow:0 0 60px rgba(250,204,21,.12)
}
.fx-dash-top{display:flex;justify-content:space-between;padding:4px 4px 14px}
.fx-dash-title{color:var(--Y);font-weight:900;font-size:.95rem}
.fx-dash-label{color:#666;font-size:.78rem;font-weight:700}
.fx-dash-body{background:#111;border-radius:14px;padding:16px}
/* project rows */
.fx-proj-row{
  display:flex;flex-direction:column;gap:6px;
  padding:12px;border-radius:12px;margin-bottom:8px;
  border:1px solid #2a2a2a;transition:border-color .3s,background .3s
}
.fx-proj-row.fx-active{border-color:var(--Y);background:#1f1a00}
.fx-proj-row:last-child{margin-bottom:0}
.fx-proj-top{display:flex;justify-content:space-between;align-items:center}
.fx-proj-name{font-weight:800;font-size:.88rem;color:#fff}
.fx-proj-status{font-size:.7rem;font-weight:900;padding:3px 10px;border-radius:99px;background:var(--Y);color:var(--B)}
.fx-proj-bar-wrap{height:6px;background:#2a2a2a;border-radius:99px;overflow:hidden}
.fx-proj-bar{height:100%;background:var(--Y);border-radius:99px;transition:width .8s ease}
.fx-proj-pct{font-size:.72rem;color:#888;text-align:right;margin-top:3px}
/* stat row */
.fx-statrow{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:12px}
.fx-stat{background:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;padding:11px;text-align:center}
.fx-stat-val{display:block;font-size:1.3rem;font-weight:900;color:var(--Y)}
.fx-stat-lbl{font-size:.72rem;color:#888}
.fx-dash-badge{display:flex;align-items:center;gap:6px;padding:11px 13px;background:#1a1a1a;border:1px solid #333;border-radius:12px;font-size:.72rem;font-weight:800;color:var(--Y);margin-top:10px}

/* ── Float animation ── */
.fx-float{animation:fxFloat 6s ease-in-out infinite}
@keyframes fxFloat{50%{transform:translateY(-10px)}}

/* ── Grid cards ── */
.fx-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.fx-grid-2{grid-template-columns:repeat(2,1fr)}
.fx-card{
  background:var(--W);border:2px solid var(--L);border-radius:18px;padding:22px;
  transition:transform .25s,box-shadow .25s,border-color .25s
}
.fx-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(250,204,21,.18);border-color:var(--Y)}
.fx-card h3{font-size:1.05rem;margin:0 0 8px;color:var(--B)}
.fx-card p{color:var(--M);font-size:.9rem;line-height:1.65;margin:0}
.fx-dark .fx-card{background:#1a1a1a;border-color:#2a2a2a;color:var(--W)}
.fx-dark .fx-card h3{color:var(--W)}
.fx-dark .fx-card p{color:#aaa}
.fx-dark .fx-card:hover{border-color:var(--Y);box-shadow:0 16px 40px rgba(250,204,21,.2)}
.fx-icon{width:46px;height:46px;display:grid;place-items:center;border-radius:12px;background:var(--Y);color:var(--B);margin-bottom:14px}
.fx-num{font-size:.74rem;color:var(--Y);font-weight:900;letter-spacing:.1em;margin-bottom:9px}
.fx-chip{display:inline-block;background:#f0f0f0;color:#555;border-radius:7px;padding:5px 7px;font-size:.7rem;margin:8px 3px 0 0}
.fx-dark .fx-chip{background:#2a2a2a;color:#aaa}

/* ── Scroll-reveal ── */
.fx-reveal{opacity:0;transform:translateY(26px);transition:opacity .65s ease,transform .65s ease}
.fx-visible{opacity:1!important;transform:translateY(0)!important}

/* ── Steps ── */
.fx-steps{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
.fx-step{background:var(--B);border:1px solid #2a2a2a;border-radius:15px;padding:14px 12px;transition:border-color .25s}
.fx-step:hover{border-color:var(--Y)}
.fx-step-num{
  display:grid;place-items:center;width:34px;height:34px;
  border-radius:50%;background:var(--Y);color:var(--B);
  margin-bottom:11px;font-weight:900;font-size:.85rem
}
.fx-step h3{font-size:.88rem;margin:0 0 6px;color:var(--W)}
.fx-step p{font-size:.78rem;color:#888;line-height:1.5;margin:0}
.fx-flow{
  display:flex;align-items:center;justify-content:center;
  flex-wrap:wrap;gap:7px;margin-top:20px;font-size:.76rem;font-weight:800
}
.fx-flow span{border:1px solid #2a2a2a;padding:7px 12px;border-radius:99px;background:#1a1a1a;color:#ccc}
.fx-flow-arr{color:var(--Y)}

/* ── Benefits ── */
.fx-benefits-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:40px;align-items:center}
.fx-visual{background:var(--B);border:1px solid #2a2a2a;border-radius:22px;padding:24px;position:relative;overflow:hidden}
.fx-visual::before{
  content:'';position:absolute;inset:0;
  background-image:linear-gradient(rgba(250,204,21,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(250,204,21,.05) 1px,transparent 1px);
  background-size:30px 30px
}
.fx-visual > *{position:relative;z-index:1}
.fx-vrow{display:flex;justify-content:space-between;padding:13px 0;border-bottom:1px solid #1f1f1f;color:#ccc}
.fx-vrow b{color:var(--Y);font-weight:900}
.fx-benefit{display:grid;grid-template-columns:38px 1fr;gap:11px;padding:13px 0;border-bottom:1px solid var(--L)}
.fx-benefit:last-child{border:0}
.fx-benefit i{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--Y);color:var(--B);font-style:normal}
.fx-benefit h3{font-size:.96rem;margin:0 0 4px;color:var(--B)}
.fx-benefit p{font-size:.86rem;line-height:1.5;color:var(--M);margin:0}

/* ── Table ── */
.fx-table-wrap{display:block;width:100%;max-width:100%;min-width:0;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior-x:contain;border:2px solid var(--B);border-radius:16px}
.fx-table{width:100%;min-width:680px;border-collapse:collapse;table-layout:fixed}
.fx-table-wrap::-webkit-scrollbar{height:7px}
.fx-table-wrap::-webkit-scrollbar-track{background:#e5e5e5;border-radius:99px}
.fx-table-wrap::-webkit-scrollbar-thumb{background:var(--B);border-radius:99px}
.fx-table-wrap::-webkit-scrollbar-thumb:hover{background:#333}
.fx-table-hint{display:none}
@media(max-width:640px){.fx-table-wrap{overflow-x:scroll;touch-action:pan-x pan-y}.fx-table-hint{display:block;margin:8px 2px 0;text-align:right;font-size:.72rem;color:var(--M)}}
.fx-table th,.fx-table td{text-align:left;padding:13px 15px;border-bottom:1px solid var(--L)}
.fx-table th{background:var(--B);color:var(--Y)}
.fx-table td{font-size:.86rem;color:#444}
.fx-table td:last-child{font-weight:800;color:var(--B)}
.fx-table tr:last-child td{border:0}
.fx-callout{background:var(--B);color:var(--W);padding:22px;border-radius:17px;margin-top:18px;border:2px solid var(--Y)}
.fx-callout p{color:#ccc;line-height:1.65;margin:8px 0 0}

/* ── 3-col compare section ── */
.fx-three-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}
.fx-type-box{border:2px solid var(--L);border-radius:18px;padding:22px}
.fx-type-box h3{font-size:1rem;margin:0 0 10px;display:flex;align-items:center;gap:8px}
.fx-type-box h3 svg{color:var(--B)}
.fx-type-box p{font-size:.87rem;color:var(--M);line-height:1.65;margin:0 0 12px}
.fx-type-box ul{padding-left:16px;color:var(--M);font-size:.84rem;line-height:2;margin:0}
.fx-type-box.fx-active-box{border-color:var(--Y);background:#fffde7}

/* ── Doc blocks ── */
.fx-doc-grid{display:grid;grid-template-columns:1fr 1fr;gap:13px}
.fx-doc-item{display:grid;grid-template-columns:42px 1fr;gap:12px;border:2px solid var(--L);border-radius:15px;padding:18px;background:var(--W)}
.fx-doc-num{display:grid;place-items:center;width:40px;height:40px;border-radius:11px;background:var(--Y);color:var(--B);font-weight:900;font-size:1rem;font-style:normal}
.fx-doc-item h3{font-size:.95rem;margin:0 0 5px;color:var(--B)}
.fx-doc-item p{font-size:.84rem;color:var(--M);line-height:1.5;margin:0}

/* ── Warning ── */
.fx-warning{
  display:flex;gap:9px;align-items:flex-start;padding:13px 15px;
  margin-top:18px;border:2px solid var(--Y);border-radius:13px;
  background:#fffde7;color:#5a4b00;font-size:.85rem;line-height:1.55
}
.fx-warning svg{flex:none;color:#a07d00}
.fx-warn-dark{background:#1f1a00;color:#facc15;border-color:var(--Y)}
.fx-warn-dark svg{color:var(--Y)}

/* ── FAQ ── */
.fx-faq{max-width:900px;margin:auto;display:grid;gap:9px}
.fx-faq-item{border:2px solid var(--L);border-radius:13px;overflow:hidden;transition:border-color .2s}
.fx-faq-item:has(button[aria-expanded="true"]){border-color:var(--Y)}
.fx-faq button{border:0;background:var(--W);width:100%;padding:15px 18px;text-align:left;display:flex;justify-content:space-between;gap:10px;font:inherit;font-weight:800;color:var(--B);cursor:pointer}
.fx-faq button svg{flex:none;transition:transform .22s;color:var(--B)}
.fx-answer{padding:0 18px 16px;color:var(--M);line-height:1.65;font-size:.9rem}

/* ── Final CTA ── */
.fx-final{
  padding:60px 28px;text-align:center;
  background:var(--B);border-radius:26px;
  border:2px solid var(--Y);position:relative;overflow:hidden
}
.fx-final .fx-outline{
  color:var(--W);
  border-color:var(--Y)!important;
  background:transparent;
}
.fx-final .fx-outline:hover{
  color:var(--B);
  background:var(--Y);
}
.fx-final::before{
  content:'';position:absolute;inset:0;
  background-image:linear-gradient(rgba(250,204,21,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(250,204,21,.06) 1px,transparent 1px);
  background-size:40px 40px
}
.fx-final > *{position:relative;z-index:1}
.fx-final h2{font-size:clamp(2rem,4vw,3rem);margin:16px auto;max-width:820px;color:var(--W)}
.fx-final p{max-width:790px;color:#aaa;line-height:1.65;margin:0 auto}

/* ══ Responsive ══ */
@media(max-width:960px){
  .fx-hero-grid,.fx-benefits-grid{grid-template-columns:1fr}
  .fx-dashboard{max-width:580px;margin:auto}
  .fx-grid{grid-template-columns:repeat(2,1fr)}
  .fx-steps{grid-template-columns:repeat(3,1fr)}
  .fx-three-grid{grid-template-columns:1fr}
  .fx-doc-grid{grid-template-columns:1fr}
}
@media(max-width:620px){
  .fx-section{padding:58px 0}
  .fx-wrap{width:calc(100% - 28px)}
  .fx-hero{padding:120px 0 56px}
  .fx-page h1{font-size:clamp(2rem,8.5vw,2.8rem);line-height:1.1}
  .fx-grid,.fx-grid-2,.fx-hls,.fx-steps{grid-template-columns:1fr}
  .fx-actions .fx-btn{width:100%}
  .fx-statrow{grid-template-columns:1fr 1fr}
}
@media(prefers-reduced-motion:reduce){
  .fx-reveal,.fx-float,
  .fx-hero::before,.fx-hero::after{animation:none!important;opacity:1!important;transform:none!important}
  .fx-card,.fx-btn,.fx-proj-row,.fx-step,.fx-proj-bar{transition:none!important}
}
            `}</style>

            {/* ══ 01 — HERO ════════════════════════════════════════════════════ */}
            <section className="fx-hero">
                <div className="fx-wrap fx-hero-grid">
                    {/* Left */}
                    <div>
                        <span className="fx-tag"><Zap size={14}/> FIX · Business Management Software</span>
                        <h1>Business Management Software for<br/>Projects, Properties <em>&amp; Operations</em></h1>
                        <p className="fx-lead">Manage Business Activities, Track Projects and Organize Information in One System</p>
                        <p className="fx-lead" style={{marginTop:10}}>
                            Managing projects, property records, construction activities and business documents across multiple
                            spreadsheets and disconnected applications can make everyday operations difficult to coordinate.
                            FlyTowards FIX is a proposed business management software solution for small and growing organizations
                            across Tamil Nadu, particularly South Tamil Nadu.
                        </p>
                        <div className="fx-actions">
                            <Link to="/contact" className="fx-btn fx-primary">Request a FIX Software Demo <ArrowRight size={17}/></Link>
                            <Link to="/contact" className="fx-btn fx-outline">Discuss Your Business Requirements</Link>
                        </div>
                        <div className="fx-hls">
                            {highlights.map(x => (
                                <div className="fx-hl" key={x}><CheckCircle2 size={16}/>{x}</div>
                            ))}
                        </div>
                        <p className="fx-note">Product features and demo availability are subject to confirmation.</p>
                    </div>

                    {/* Right – animated FIX dashboard */}
                    <div className="fx-dashboard fx-float" aria-label="Illustrative FIX business management dashboard">
                        <div className="fx-dash-top">
                            <span className="fx-dash-title">⚡ FIX Dashboard</span>
                            <span className="fx-dash-label">Illustrative</span>
                        </div>
                        <div className="fx-dash-body">
                            <div style={{fontSize:'.72rem',letterSpacing:'.06em',color:'#666',marginBottom:10}}>ACTIVE PROJECTS</div>
                            {dashRows.map((r,i) => (
                                <div key={r.label} className={`fx-proj-row${activeRow===i?' fx-active':''}`}>
                                    <div className="fx-proj-top">
                                        <span className="fx-proj-name">{r.label}</span>
                                        <span className="fx-proj-status">{r.status}</span>
                                    </div>
                                    <div className="fx-proj-bar-wrap">
                                        <div className="fx-proj-bar" style={{width:`${r.pct}%`}}/>
                                    </div>
                                    <div className="fx-proj-pct">{r.pct}% complete</div>
                                </div>
                            ))}
                            <div className="fx-statrow">
                                <div className="fx-stat"><span className="fx-stat-val">12</span><span className="fx-stat-lbl">Projects</span></div>
                                <div className="fx-stat"><span className="fx-stat-val">48</span><span className="fx-stat-lbl">Tasks</span></div>
                                <div className="fx-stat"><span className="fx-stat-val">7</span><span className="fx-stat-lbl">Properties</span></div>
                            </div>
                            <div className="fx-dash-badge"><FolderOpen size={13}/>34 documents organized · 6 pending review</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 02 — PRODUCT OVERVIEW ════════════════════════════════════════ */}
            <section className="fx-section fx-soft">
                <div className="fx-wrap">
                    <Heading eyebrow="Product overview" title={<>What Is <em>Business Management Software</em> and How Does It Work?</>}/>
                    <p style={{textAlign:'center',maxWidth:860,margin:'-10px auto 30px',color:'var(--M)',lineHeight:1.75}}>
                        Business management software is an application used to organize operational information, manage tasks, track
                        business activities and maintain records across relevant departments or processes. FlyTowards FIX is being
                        positioned as a centralized platform that brings selected business management workflows into one structured application.
                    </p>
                    <div className="fx-grid fx-grid-2">
                        {overview.map(([Icon,title,text],i) => (
                            <RevealCard key={title} delay={i*80}>
                                <div className="fx-icon"><Icon size={22}/></div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 03 — CHALLENGES ══════════════════════════════════════════════ */}
            <section className="fx-section fx-dark">
                <div className="fx-wrap">
                    <Heading eyebrow="Operational challenges" title="Common Business Management Challenges for Growing Organizations"
                        text="Coordinating projects, records and teams becomes harder when information is scattered across different tools."/>
                    <div className="fx-grid">
                        {challenges.map(([title,text],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="fx-num">CHALLENGE 0{i+1}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 04 — FEATURES ════════════════════════════════════════════════ */}
            <section className="fx-section fx-soft">
                <div className="fx-wrap">
                    <Heading eyebrow="Proposed capabilities" title={<>Key Features Planned for FlyTowards <em>FIX Business Management Software</em></>}
                        text="The following capabilities are proposed for product positioning. Actual availability, configuration and implementation scope must be verified before publication."/>
                    <div className="fx-grid">
                        {features.map(([title,text,tags],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="fx-num">0{i+1} · PLANNED</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                                <div style={{marginTop:10}}>
                                    {tags.split(' · ').map(t => <span className="fx-chip" key={t}>{t}</span>)}
                                </div>
                            </RevealCard>
                        ))}
                    </div>
                    <div className="fx-warning"><HelpCircle size={18}/>Feature examples describe planning scope only. Confirm product support before relying on any capability.</div>
                </div>
            </section>

            {/* ══ 05 — HOW IT WORKS ════════════════════════════════════════════ */}
            <section className="fx-section fx-dark">
                <div className="fx-wrap">
                    <Heading eyebrow="Illustrative workflow" title="How Does Business Management Software Simplify Daily Operations?"
                        text="A business management platform helps organize the information and activities involved in planning, assigning, monitoring and reviewing work."/>
                    <div className="fx-steps">
                        {steps.map(([title,text],i) => (
                            <article className="fx-step" key={title}>
                                <div className="fx-step-num">{String(i+1).padStart(2,'0')}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                    <div className="fx-flow">
                        {['Business Setup','Project / Property Creation','Task Assignment','Progress Tracking','Document Management','Reporting'].map((x,i,arr)=>(
                            <span key={x+i}>{x}{i<arr.length-1?<span className="fx-flow-arr"> → </span>:''}</span>
                        ))}
                    </div>
                    <div className="fx-warning fx-warn-dark" style={{marginTop:20}}>
                        <HelpCircle size={18}/>These are illustrative workflows. Actual modules and automation depend on the verified FIX product.
                    </div>
                </div>
            </section>

            {/* ══ 06 — BENEFITS ════════════════════════════════════════════════ */}
            <section className="fx-section fx-soft">
                <div className="fx-wrap">
                    <div className="fx-benefits-grid">
                        {/* Left illustration */}
                        <div className="fx-visual">
                            <span className="fx-tag-light">Operations overview</span>
                            <h3 style={{marginTop:14,color:['var(--Y)'][0]}}>Today's business activity</h3>
                            {[
                                ['Active projects',   '12 running'],
                                ['Tasks pending',     '18 assigned'],
                                ['Documents stored',  '34 on record'],
                                ['Properties managed','7 active'],
                                ['Reports generated', '5 this week'],
                            ].map(([k,v]) => (
                                <div className="fx-vrow" key={k}><span>{k}</span><b>{v}</b></div>
                            ))}
                            <p className="fx-note" style={{color:'#666',marginTop:14}}>Illustrative figures · not live product data</p>
                        </div>
                        {/* Right benefits */}
                        <div>
                            <Heading eyebrow="Business benefits" title={<>Benefits of Business Management Software for Small & <em>Growing Businesses</em></>}
                                text="A structured management platform can simplify operations and improve team coordination."/>
                            {benefits.map(([Icon,title,text]) => (
                                <div className="fx-benefit" key={title}>
                                    <i><Icon size={17}/></i>
                                    <div><h3>{title}</h3><p>{text}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 07 — INDUSTRIES ══════════════════════════════════════════════ */}
            <section className="fx-section fx-dark">
                <div className="fx-wrap">
                    <Heading eyebrow="Regional requirements" title="Business Management Software for Organizations Across Tamil Nadu"
                        text="Business management requirements vary according to industry, project complexity, organizational structure and operational processes."/>
                    <div className="fx-grid">
                        {industries.map(([Icon,title,text],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="fx-icon"><Icon size={21}/></div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                    <p className="fx-note" style={{textAlign:'center',marginTop:20,color:'#666'}}>
                        <b style={{color:['var(--Y)'][0]}}>Regional focus:</b> Tirunelveli, Tenkasi, Sankarankovil, Madurai, Thoothukudi, Kanyakumari and other markets across Tamil Nadu.
                    </p>
                </div>
            </section>

            {/* ══ 08 — COMPARISON TABLE ════════════════════════════════════════ */}
            <section className="fx-section fx-soft">
                <div className="fx-wrap">
                    <Heading eyebrow="Compare approaches" title={<>Business Management Software vs <em>Excel-Based Business Management</em></>}
                        text="The right approach depends on organizational complexity, required features, implementation costs and user needs."/>
                    <div className="fx-table-wrap" role="region" aria-label="Business management comparison table" tabIndex={0}>
                        <table className="fx-table">
                            <thead><tr><th>Business Activity</th><th>Manual Management</th><th>Business Management Software</th></tr></thead>
                            <tbody>
                                {comparisons.map(([a,b,c]) => (
                                    <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="fx-table-hint">Swipe to see all columns →</p>
                    <div className="fx-callout">
                        <h3 style={{color:['var(--Y)'][0]}}>Is Business Management Software Better Than Excel?</h3>
                        <p>Spreadsheets can be sufficient for businesses with simple workflows and limited operational records. Business management software becomes more useful when multiple employees, projects, properties or departments need to share information and coordinate activities.</p>
                    </div>
                </div>
            </section>

            {/* ══ 09 — PROJECT, PROPERTY & CONSTRUCTION ═══════════════════════ */}
            <section className="fx-section">
                <div className="fx-wrap">
                    <Heading eyebrow="Understanding the modules" title={<>Project Management, Property Management & <em>Construction Management</em></>}/>
                    <p style={{textAlign:'center',maxWidth:860,margin:'-10px auto 28px',color:'var(--M)',lineHeight:1.75}}>
                        Different management applications focus on different business requirements. Understanding these differences helps
                        organizations identify the functions they actually need.
                    </p>
                    <div className="fx-three-grid">
                        {[
                            [FolderKanban, 'Project Management Software',     'Helps organizations plan work, assign responsibilities, track milestones and monitor progress. Relevant for businesses managing multiple activities, deadlines and project teams.',       'Project records · Task assignments · Milestones · Status updates · Progress reporting'],
                            [Building2,   'Property Management Software',     'Focuses on organizing information and workflows related to properties, units, occupants, maintenance and administration. Relevant for property managers and real estate organizations.', 'Property profiles · Unit information · Maintenance records · Related contacts · Admin documents'],
                            [HardHat,     'Construction Management Software', 'Helps organize construction project activities, site information, contractors, materials and project documentation. Relevant for construction companies and engineering businesses.',   'Site activities · Work progress · Contractor coordination · Material records · Project docs'],
                        ].map(([Icon,title,desc,tags],i) => (
                            <div className={`fx-type-box${i===0?' fx-active-box':''}`} key={title}>
                                <h3><Icon size={18}/> {title}</h3>
                                <p>{desc}</p>
                                <div>
                                    {tags.split(' · ').map(t => <span className="fx-chip" key={t}>{t}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="fx-callout" style={{marginTop:22}}>
                        <h3 style={{color:['var(--Y)'][0]}}>How Does FIX Fit These Requirements?</h3>
                        <p>FlyTowards FIX is proposed as a business management platform that may bring selected project, property and construction workflows together. The appropriate module combination depends on the organization's operational requirements and the functionality available in the actual product.</p>
                    </div>
                    <div className="fx-actions" style={{justifyContent:'center',marginTop:20}}>
                        <Link to="/contact" className="fx-btn fx-primary">Discuss Your Project & Construction Management Requirements <ArrowRight size={16}/></Link>
                    </div>
                </div>
            </section>

            {/* ══ 10 — DOCUMENT MANAGEMENT & SECURITY ═════════════════════════ */}
            <section className="fx-section fx-dark">
                <div className="fx-wrap">
                    <Heading eyebrow="Document & data management" title="Why Document Management Matters in Business Operations"
                        text="Document management software helps organizations organize, retrieve and control access to relevant business files. For construction and property-related businesses, this can include agreements, drawings, estimates, approvals and project reports."/>
                    <div className="fx-doc-grid">
                        {docBlocks.map(([title,text],i) => (
                            <article className="fx-doc-item" key={title}>
                                <i className="fx-doc-num">0{i+1}</i>
                                <div><h3>{title}</h3><p>{text}</p></div>
                            </article>
                        ))}
                    </div>
                    <div className="fx-warning fx-warn-dark" style={{marginTop:16}}>
                        <AlertCircle size={18}/>Document storage limits, supported file types, access permissions, version control, integration options and deployment arrangements depend on the verified product capabilities.
                    </div>
                </div>
            </section>

            {/* ══ 11 — WHY FLYTOWARDS ══════════════════════════════════════════ */}
            <section className="fx-section fx-soft">
                <div className="fx-wrap">
                    <Heading eyebrow="Planning with FlyTowards" title={<>Why Consider FlyTowards for Business Management Software in <em>Tamil Nadu?</em></>}
                        text="FlyTowards approaches software planning through business requirements, user workflows and implementation considerations."/>
                    <div className="fx-grid fx-grid-2">
                        {whyFly.map(([title,text],i) => (
                            <RevealCard key={title} delay={i*80}>
                                <div className="fx-num">0{i+1}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                    <div className="fx-actions" style={{justifyContent:'center',marginTop:28}}>
                        <Link to="/contact" className="fx-btn fx-primary">Discuss Your FIX Software Requirements <ArrowRight size={16}/></Link>
                    </div>
                </div>
            </section>

            {/* ══ 12 — FAQ ═════════════════════════════════════════════════════ */}
            <section className="fx-section">
                <div className="fx-wrap">
                    <Heading eyebrow="FAQ" title={<>Frequently Asked Questions About <em>Business Management Software</em></>}/>
                    <div className="fx-faq">
                        {faqs.map(([q,a],i) => (
                            <div className="fx-faq-item" key={q}>
                                <button aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                                    <span>{q}</span>
                                    <ChevronDown size={18} style={{transform:openFaq===i?'rotate(180deg)':'none'}}/>
                                </button>
                                {openFaq===i && <div className="fx-answer">{a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 13 — FINAL CTA ═══════════════════════════════════════════════ */}
            <section id="contact" className="fx-section" style={{paddingTop:0}}>
                <div className="fx-wrap">
                    <div className="fx-final">
                        <span className="fx-tag-light"><Zap size={14}/> FIX · Business Management · Tamil Nadu</span>
                        <h2>Bring Your Business Projects, Records & Workflows Together</h2>
                        <p>
                            Whether you manage construction projects, property-related operations, service activities or growing
                            business teams, organized information and structured workflows can make everyday management easier
                            across Tamil Nadu.
                        </p>
                        <div className="fx-actions" style={{justifyContent:'center',marginTop:28}}>
                            <Link to="/contact" className="fx-btn fx-primary">Request a FIX Software Demo <ArrowRight size={17}/></Link>
                            <Link to="/contact" className="fx-btn fx-outline">Get a Business Management Software Consultation</Link>
                        </div>
                        <p className="fx-note" style={{color:'#666',marginTop:14}}>
                            Confirm the official product name, availability, supported modules and demo arrangements before publishing these calls to action.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
