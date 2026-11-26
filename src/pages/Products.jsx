import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, CheckCircle2, ChevronDown, Users, CreditCard,
    Database, Layers, Settings2, TrendingUp, Zap, GitMerge,
    Building2, Factory, Store, GraduationCap, HardHat,
    HeartPulse, Coffee, Package, FileText, BarChart3,
    Briefcase, Code2, Smartphone, Globe, Wrench, Shield
} from 'lucide-react';

/* ═══════════ Hooks ══════════════════════════════════════════════════ */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('pp-visible'); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

function RevealCard({ children, className = '', delay = 0 }) {
    const ref = useReveal();
    return (
        <div ref={ref} className={`pp-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`pp-faq-item ${open ? 'pp-faq-open' : ''}`}>
            <button className="pp-faq-btn" onClick={() => setOpen(o => !o)} aria-expanded={open}>
                <span>{q}</span>
                <ChevronDown size={18} className="pp-faq-icon" />
            </button>
            <div className="pp-faq-body">{a}</div>
        </div>
    );
}

/* ═══════════ Illustrative Dashboard ════════════════════════════════ */
function HeroDashboard() {
    const [tick, setTick] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setTick(n => (n + 1) % 3), 2400);
        return () => clearInterval(t);
    }, []);
    const modules = [
        { label: 'CRM Software',     value: '48 leads',  pct: 72, icon: '👥' },
        { label: 'Billing Software', value: '₹1.2L billed', pct: 85, icon: '🧾' },
        { label: 'Flyroll',          value: '24 tasks',  pct: 60, icon: '⚙️' },
    ];
    return (
        <div className="pp-dashboard">
            <div className="pp-dash-badge">Illustrative · Product Suite</div>
            <div className="pp-dash-title">FlyTowards — Business Software</div>
            <div className="pp-dash-modules">
                {modules.map((m, i) => (
                    <div key={i} className={`pp-module ${tick === i ? 'pp-module-active' : ''}`}>
                        <div className="pp-module-top">
                            <span className="pp-module-icon">{m.icon}</span>
                            <span className="pp-module-label">{m.label}</span>
                            <span className="pp-module-val">{m.value}</span>
                        </div>
                        <div className="pp-module-track">
                            <div className="pp-module-bar" style={{ width: `${m.pct}%` }} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="pp-dash-row">
                <span className="pp-dash-row-label">📊 Operations Health</span>
                <span className="pp-dash-row-val" style={{ color: '#facc15' }}>Good</span>
            </div>
            <div className="pp-dash-row">
                <span className="pp-dash-row-label">🔄 Active Workflows</span>
                <span className="pp-dash-row-val">12 running</span>
            </div>
            <div className="pp-dash-row">
                <span className="pp-dash-row-label">📋 Pending Follow-ups</span>
                <span className="pp-dash-row-val" style={{ color: '#facc15' }}>7 today</span>
            </div>
            <div className="pp-dash-footer">⚡ FlyTowards Digital Innovation</div>
        </div>
    );
}

/* ═══════════ Static data ════════════════════════════════════════════ */
const crmBullets = [
    'Organise customer information',
    'Manage customer-related activities',
    'Improve visibility of customer records',
    'Reduce dependence on scattered information',
    'Bring customer-related workflows into a more structured system',
];

const billBullets = [
    'Organise billing activities',
    'Manage billing information',
    'Reduce repetitive manual work',
    'Improve visibility of billing processes',
    'Maintain a more structured approach to business billing',
];

const benefits = [
    [Database,    'Manage Business Information',  'Business information becomes easier to work with when it is organised within an appropriate software environment. A suitable application can help teams reduce fragmented information and create a more structured way of managing business activities.'],
    [Zap,         'Reduce Manual Work',           'Manual processes can consume employee time and increase the possibility of inconsistent information. Business software can help move suitable activities into a more structured digital workflow. The objective should not be to automate every process — instead, businesses should identify repetitive or time-consuming activities where software can provide practical value.'],
    [GitMerge,    'Connect Business Processes',   'Businesses often use multiple applications for different activities. When systems are disconnected, employees may need to enter or move information between different tools. Depending on the requirement, software products or integrations can help create a more connected operating environment.'],
    [TrendingUp,  'Support Business Growth',      'As a business grows, its software requirements can change. A system that works for a small operation may need to evolve as the number of users, customers, transactions or processes increases. Choosing software with the right fit for current requirements and future needs can help businesses avoid unnecessary disruption.'],
];

const considerations = [
    'What business problem needs to be addressed?',
    'Who will use the software?',
    'Which processes need to be managed?',
    'What information needs to be captured?',
    'Are existing systems involved?',
    'Does the software need to integrate with another application?',
    'What functionality is essential?',
    'Will the requirement change as the business grows?',
];

const productCriteria = [
    'What it does',
    'Who it is intended for',
    'Which business problem it addresses',
    'Key features',
    'Supported workflows',
    'Integrations, where confirmed',
    'Deployment model, where confirmed',
    'Support options, where confirmed',
    'How to request a demo or enquiry',
];

const customNeeds = [
    'A workflow designed around its own operations',
    'Integration between multiple existing systems',
    'A specialised business application',
    'Custom user roles and processes',
    'A unique customer or employee portal',
    'Functionality that is not available in an existing product',
];

const devServices = [
    [Code2,       'Custom Software Development',    '/services/custom-software-development'],
    [Building2,   'Enterprise Software Development','/services/enterprise-software-development'],
    [Globe,       'SaaS Development',               '/services/saas-development'],
    [Globe,       'Web Application Development',    '/services/web-application-development'],
    [Smartphone,  'Mobile App Development',         '/services/mobile-app-development'],
    [Wrench,      'Software Maintenance',           '/services/software-maintenance-support'],
];

const industries = [
    [HeartPulse,    'Healthcare',       '/industries/healthcare'],
    [Factory,       'Manufacturing',    '/industries/manufacturing'],
    [Store,         'Retail',           '/industries/retail'],
    [GraduationCap, 'Education',        '/industries/education'],
    [HardHat,       'Construction',     '/industries/construction'],
    [Coffee,        'Hospitality',      '/industries/hospitality'],
];

const faqs = [
    ['What are business software solutions?',
     'Business software solutions are applications designed to support specific business activities, workflows or operational requirements. Examples can include CRM, billing, accounting, ERP and other business management applications.'],
    ['What type of business software does Fly Towards Digital Innovation provide?',
     'The available project documentation confirms CRM and billing software as existing product content on the Products page. Additional product categories or features should be added only after confirmation.'],
    ['Is business software suitable for small businesses?',
     'Business software can be useful for small businesses when it addresses a genuine operational need. The suitability depends on the business size, processes, users, functionality and future requirements.'],
    ['What is the difference between business software and custom software?',
     'Business software can refer to applications designed to support common business activities, while custom software is developed around specific requirements. If an existing product does not adequately address a business\'s workflows, custom development may be considered.'],
    ['Can you build custom software if an existing product does not meet our requirements?',
     'Yes, custom software development is part of Fly Towards Digital Innovation\'s wider service portfolio. The specific scope and approach should be determined based on the business requirement.'],
];

const internalLinks = [
    ['Software Development Services',           '/services/'],
    ['Custom Software Development',             '/services/custom-software-development'],
    ['CRM Development',                         '/services/crm-development'],
    ['Enterprise Software Development',         '/services/enterprise-software-development'],
    ['SaaS Development',                        '/services/saas-development'],
    ['Web Application Development',             '/services/web-application-development'],
    ['Mobile App Development',                  '/services/mobile-app-development'],
    ['Business Process Automation',             '/services/business-process-automation'],
    ['Software Consulting',                     '/services/software-consulting'],
    ['Software Modernization',                  '/services/software-modernization'],
];

/* ═══════════ Main Component ════════════════════════════════════════ */
export default function Products() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <style>{`
                /* ── Reset / Base ──────────────────────────────── */
                .pp-page { font-family: 'Inter', 'Segoe UI', sans-serif; color: #1a1a1a; background: #fff; overflow-x: hidden; }
                .pp-page *, .pp-page *::before, .pp-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
                .pp-wrap  { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
                .pp-section { padding: 80px 0; }
                .pp-section-dark { background: #0f0f0f; color: #fff; }
                .pp-section-soft { background: #f9f8f5; }

                /* ── Reveal animation ──────────────────────────── */
                .pp-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
                .pp-visible { opacity: 1; transform: translateY(0); }

                /* ── Typography ────────────────────────────────── */
                .pp-eyebrow { display: inline-flex; width: fit-content; padding: 6px 14px; border: 1px solid rgba(250,204,21,.7); border-radius: 999px; background: #fff7cc; color: #1e40af; font-size: .8rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px; }
                .pp-page .pp-eyebrow { padding: 6px 14px !important; font-size: .75rem !important; letter-spacing: .1em !important; color: #1e1b4b !important; }
                .pp-h1 { font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 900; line-height: 1.12; color: #1e1b4b; }
                .pp-h1 span { color: #facc15; }
                .pp-h2 { font-size: clamp(1.5rem, 2.8vw, 2.2rem); font-weight: 800; line-height: 1.2; }
                .pp-h2-dark { color: #1e1b4b; }
                .pp-page .pp-h2-dark > span { color: #facc15; }
                .pp-h2-light { color: #facc15; }
                .pp-h2-yellow { color: #facc15; }
                .pp-h3 { font-size: 1.1rem; font-weight: 700; }
                .pp-lead { font-size: 1.05rem; color: #555; line-height: 1.75; margin-top: 14px; }
                .pp-lead-dark { color: #aaa; }
                .pp-note { font-size: 0.8rem; color: #999; margin-top: 10px; }
                .pp-center { text-align: center; }

                /* ── Buttons ───────────────────────────────────── */
                .pp-btn-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px; }
                .pp-btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #facc15; color: #0f0f0f; font-weight: 700; font-size: 0.95rem; padding: 14px 26px; border-radius: 50px; border: none; cursor: pointer; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
                .pp-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(250,204,21,0.45); }
                .pp-btn-outline { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #0f0f0f; font-weight: 600; font-size: 0.95rem; padding: 14px 26px; border-radius: 50px; border: 2px solid #0f0f0f; cursor: pointer; text-decoration: none; transition: all 0.2s; }
                .pp-btn-outline:hover { background: #0f0f0f; color: #facc15; }
                .pp-btn-outline-light { color: #facc15; border-color: #facc15; }
                .pp-btn-outline-light:hover { background: #facc15; color: #0f0f0f; }
                .pp-btn-sm { font-size: 0.85rem; padding: 10px 20px; }

                /* ── Bullet list ───────────────────────────────── */
                .pp-bullets { list-style: none; display: flex; flex-direction: column; gap: 9px; margin-top: 16px; }
                .pp-bullets li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #555; line-height: 1.6; }
                .pp-bullets li svg { color: #facc15; flex-shrink: 0; margin-top: 2px; }
                .pp-bullets-light li { color: #aaa; }
                .pp-bullets-light li svg { color: #facc15; }

                /* ── SECTION 01 — HERO ─────────────────────────── */
                .pp-hero { padding: 100px 0 80px; background: #fff; }
                .pp-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
                @media(max-width:900px){ .pp-hero-grid { grid-template-columns: 1fr; } }

                /* ── Dashboard ─────────────────────────────────── */
                .pp-dashboard {
                    background: #0f0f0f; border-radius: 20px; padding: 24px;
                    box-shadow: 0 24px 60px rgba(0,0,0,0.22);
                    animation: pp-float 5s ease-in-out infinite;
                }
                @keyframes pp-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
                .pp-dash-badge { display: inline-block; background: rgba(250,204,21,0.12); color: #facc15; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 20px; margin-bottom: 14px; }
                .pp-dash-title { color: #fff; font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; }
                .pp-dash-modules { display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; }
                .pp-module { background: #1a1a1a; border-radius: 10px; padding: 12px 14px; border: 1.5px solid #2a2a2a; transition: border-color 0.4s; }
                .pp-module-active { border-color: #facc15; }
                .pp-module-top { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
                .pp-module-icon { font-size: 1rem; }
                .pp-module-label { font-size: 0.8rem; color: #ccc; flex: 1; font-weight: 600; }
                .pp-module-val { font-size: 0.75rem; color: #facc15; font-weight: 700; }
                .pp-module-track { height: 4px; background: #2a2a2a; border-radius: 2px; overflow: hidden; }
                .pp-module-bar { height: 100%; background: linear-gradient(90deg,#facc15,#f59e0b); border-radius: 2px; transition: width 0.6s ease; }
                .pp-dash-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #1a1a1a; font-size: 0.8rem; }
                .pp-dash-row:last-of-type { border-bottom: none; }
                .pp-dash-row-label { color: #888; }
                .pp-dash-row-val { color: #ccc; font-weight: 600; }
                .pp-dash-footer { margin-top: 14px; font-size: 0.72rem; color: #555; text-align: center; }

                /* ── SECTION 02 — PRODUCTS OVERVIEW ───────────── */
                .pp-products-intro { max-width: 760px; }
                .pp-prod-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 48px; }
                @media(max-width:800px){ .pp-prod-grid { grid-template-columns: 1fr; } }
                .pp-prod-card { background: #0f0f0f; border-radius: 18px; padding: 32px 28px; border: 2px solid #1a1a1a; transition: border-color 0.3s, transform 0.3s; }
                .pp-prod-card:hover { border-color: #facc15; transform: translateY(-4px); }
                .pp-prod-icon { width: 54px; height: 54px; background: rgba(250,204,21,0.1); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; color: #facc15; }
                .pp-prod-card h3 { color: #fff; font-size: 1.15rem; font-weight: 800; margin-bottom: 10px; }
                .pp-prod-card p  { color: #888; font-size: 0.85rem; line-height: 1.65; margin-bottom: 14px; }
                .pp-prod-note { font-size: 0.75rem; color: #555; padding: 10px 12px; background: rgba(255,255,255,0.03); border-radius: 8px; margin: 14px 0; border-left: 2px solid #facc15; line-height: 1.6; }
                .pp-prod-cta { display: inline-flex; align-items: center; gap: 6px; color: #facc15; font-size: 0.85rem; font-weight: 700; text-decoration: none; margin-top: 6px; transition: gap 0.2s; }
                .pp-prod-cta:hover { gap: 10px; }

                /* ── SECTION 03 — HOW SOFTWARE HELPS ──────────── */
                .pp-benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 40px; }
                @media(max-width:800px){ .pp-benefits-grid { grid-template-columns: 1fr; } }
                .pp-benefit-card { background: #fff; border: 1.5px solid #f0f0ec; border-radius: 14px; padding: 26px 22px; transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s; }
                .pp-benefit-card:hover { box-shadow: 0 8px 28px rgba(250,204,21,0.12); border-color: #facc15; transform: translateY(-3px); }
                .pp-benefit-icon { width: 46px; height: 46px; background: #fffde7; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: #d97706; }
                .pp-benefit-card h3 { font-size: 0.95rem; font-weight: 700; color: #0f0f0f; margin-bottom: 8px; }
                .pp-benefit-card p  { font-size: 0.82rem; color: #666; line-height: 1.65; }

                /* ── SECTION 04 — CHOOSING SOFTWARE ───────────── */
                .pp-choosing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: stretch; }
                @media(max-width:800px){ .pp-choosing-grid { grid-template-columns: 1fr; } }
                .pp-checklist { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
                .pp-checklist-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: #555; line-height: 1.6; padding: 10px 14px; background: #f9f8f5; border-radius: 8px; border-left: 3px solid #facc15; transition: background 0.2s; }
                .pp-checklist-item:hover { background: #fffde7; }
                .pp-checklist-num { font-weight: 900; color: #facc15; font-size: 0.8rem; min-width: 20px; }
                .pp-choosing-grid > .pp-reveal:last-child { display: flex; }
                .pp-advice { display: flex; flex: 1; flex-direction: column; background: #0f0f0f; border-radius: 14px; padding: 28px; }
                .pp-advice h4 { color: #facc15; font-size: 1.75rem; font-weight: 700; line-height: 1.3; margin-bottom: 16px; }
                .pp-advice p  { color: #aaa; font-size: 1.12rem; line-height: 1.75; }
                .pp-advice p + p { margin-top: 14px !important; }
                .pp-advice .pp-btn { display: inline-flex; align-self: flex-start; margin-top: auto; padding: 16px 28px; font-size: 1.12rem; }

                /* ── SECTION 05 — DIFFERENT REQUIREMENTS ──────── */
                .pp-diff-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: stretch; }
                @media(max-width:800px){ .pp-diff-grid { grid-template-columns: 1fr; } }
                .pp-diff-grid > .pp-reveal:last-child { display: flex; flex-direction: column; }
                .pp-diff-grid > .pp-reveal:last-child > div:last-child { margin-top: auto !important; padding-top: 24px; }
                .pp-criteria-list { display: flex; flex-direction: column; gap: 8px; margin-top: 16px; }
                .pp-criteria-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.85rem; color: #fff; padding: 8px 12px; background: #1a1a1a; border-radius: 8px; }
                .pp-criteria-item svg { color: #facc15; flex-shrink: 0; margin-top: 1px; }
                .pp-ind-links { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
                .pp-ind-link { display: flex; min-height: 76px; align-items: center; gap: 10px; padding: 16px 18px; background: #1a1a1a; border-radius: 10px; color: #ccc; text-decoration: none; font-size: 0.95rem; font-weight: 600; border: 1px solid #2a2a2a; transition: border-color 0.2s, color 0.2s; }
                .pp-ind-link:hover { border-color: #facc15; color: #facc15; }
                .pp-ind-link svg { color: #facc15; flex-shrink: 0; }

                /* ── SECTION 06 — WHEN PRODUCT ISN'T ENOUGH ───── */
                .pp-custom-intro { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: start; }
                .pp-custom-intro-side { padding-top: 62px; color: #1e1b4b; font-size: clamp(1.35rem, 2vw, 1.65rem); font-weight: 800; line-height: 1.2; }
                @media(max-width:800px){ .pp-custom-intro { grid-template-columns: 1fr; gap: 18px; } .pp-custom-intro-side { padding-top: 0; } }
                .pp-custom-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:800px){ .pp-custom-grid { grid-template-columns: 1fr; } }
                .pp-custom-needs { display: flex; flex-direction: column; gap: 10px; margin-top: 0; }
                .pp-custom-need { display: flex; align-items: flex-start; gap: 10px; padding: 12px 16px; background: #fff; border: 1.5px solid #f0f0ec; border-radius: 10px; font-size: 0.85rem; color: #555; line-height: 1.6; transition: border-color 0.2s; }
                .pp-custom-need:hover { border-color: #facc15; }
                .pp-custom-need svg { color: #facc15; flex-shrink: 0; margin-top: 1px; }
                .pp-dev-services { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
                .pp-dev-link { display: flex; align-items: center; gap: 10px; padding: 12px 16px; background: #0f0f0f; border-radius: 10px; color: #ccc; text-decoration: none; font-size: 0.85rem; font-weight: 600; border: 1px solid #2a2a2a; transition: border-color 0.2s, color 0.2s; }
                .pp-dev-link:hover { border-color: #facc15; color: #facc15; }
                .pp-dev-link svg { color: #facc15; flex-shrink: 0; }
                .pp-dev-link span { flex: 1; }
                .pp-dev-link .pp-arr { opacity: 0.4; transition: opacity 0.2s, transform 0.2s; }
                .pp-dev-link:hover .pp-arr { opacity: 1; transform: translateX(4px); }

                /* ── SECTION 07 — INTERNAL LINKS ──────────────── */
                .pp-links-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-top: 32px; }
                @media(max-width:900px){ .pp-links-grid { grid-template-columns: repeat(2,1fr); } }
                @media(max-width:580px){ .pp-links-grid { grid-template-columns: 1fr 1fr; } }
                .pp-int-link { display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: #1a1a1a; border-radius: 10px; color: #ccc; text-decoration: none; font-size: 0.78rem; font-weight: 600; border: 1px solid #2a2a2a; transition: border-color 0.2s, color 0.2s; }
                .pp-int-link:hover { border-color: #facc15; color: #facc15; }
                .pp-int-link svg { color: #facc15; flex-shrink: 0; }

                /* ── FAQ ───────────────────────────────────────── */
                .pp-faq-list { border: 1.5px solid #f0f0ec; border-radius: 14px; overflow: hidden; }
                .pp-faq-item { border-bottom: 1.5px solid #f0f0ec; }
                .pp-faq-item:last-child { border-bottom: none; }
                .pp-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; background: none; border: none; cursor: pointer; font-size: 0.9rem; font-weight: 600; color: #0f0f0f; text-align: left; gap: 12px; }
                .pp-faq-btn:hover { background: #f9f8f5; }
                .pp-faq-icon { transition: transform 0.3s; flex-shrink: 0; }
                .pp-faq-open .pp-faq-icon { transform: rotate(180deg); }
                .pp-faq-body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s; padding: 0 22px; font-size: 0.85rem; color: #555; line-height: 1.7; }
                .pp-faq-open .pp-faq-body { max-height: 300px; padding: 0 22px 18px; }

                /* ── FINAL CTA ─────────────────────────────────── */
                .pp-cta-banner { background: #0f0f0f; padding: 80px 0; text-align: center; }
                .pp-cta-banner h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900; color: #facc15; margin-bottom: 16px; }
                .pp-cta-banner p  { color: #aaa; font-size: 1rem; max-width: 640px; margin: 0 auto 32px; line-height: 1.75; }
                .pp-cta-row { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }

                /* ── Divider ───────────────────────────────────── */
                .pp-divider { height: 1px; background: linear-gradient(90deg,transparent,#f0f0ec,transparent); margin: 0; }
            `}</style>

            <div className="pp-page">

                {/* ── HERO ───────────────────────────────────────────── */}
                <section className="pp-hero">
                    <div className="pp-wrap">
                        <div className="pp-hero-grid">
                            <div>
                                <RevealCard>
                                    <span className="pp-eyebrow">FlyTowards Digital Innovation</span>
                                    <h1 className="pp-h1">
                                        Business Software Solutions<br />
                                        for <span>Everyday Business Needs</span>
                                    </h1>
                                    <p className="pp-lead">
                                        Businesses need software that supports the way they actually work. Managing customer information, handling billing activities and coordinating everyday business processes can become increasingly difficult when teams rely on manual work or disconnected tools.
                                    </p>
                                    <p className="pp-lead">
                                        Fly Towards Digital Innovation provides business software solutions designed to support practical business requirements.
                                    </p>
                                    <div className="pp-btn-row">
                                        <a href="#products" className="pp-btn-primary">Explore Our Products <ArrowRight size={16} /></a>
                                        <Link to="/contact" className="pp-btn-outline">Discuss a Custom Requirement</Link>
                                    </div>
                                </RevealCard>
                            </div>
                            <RevealCard delay={150}>
                                <HeroDashboard />
                            </RevealCard>
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── PRODUCTS OVERVIEW ──────────────────────────────── */}
                <section className="pp-section" id="products">
                    <div className="pp-wrap">
                        <RevealCard>
                            <span className="pp-eyebrow">Product Portfolio</span>
                            <h2 className="pp-h2 pp-h2-dark">Software Products <span>Designed for Business Operations</span></h2>
                            <div className="pp-products-intro">
                                <p className="pp-lead">Our product portfolio currently includes CRM and billing software, while businesses with requirements that go beyond the available products can explore a custom software development approach.</p>
                            </div>
                        </RevealCard>

                        <div className="pp-prod-grid">
                            {/* CRM Card */}
                            <RevealCard delay={80}>
                                <div className="pp-prod-card">
                                    <div className="pp-prod-icon"><Users size={26} /></div>
                                    <h3>CRM Software</h3>
                                    <p>Customer information and related business activities can become difficult to manage when information is spread across different systems or maintained manually. A CRM product can provide a structured environment for managing customer-related information and business interactions.</p>
                                    <p style={{ color: '#888', fontSize: '0.82rem', marginTop: 10 }}>Suitable for businesses that need to:</p>
                                    <ul className="pp-bullets pp-bullets-light" style={{ marginTop: 10 }}>
                                        {crmBullets.map((b, i) => (
                                            <li key={i}><CheckCircle2 size={14} /> {b}</li>
                                        ))}
                                    </ul>
                                    <div className="pp-prod-note">
                                        Product-specific functionality, integrations, pricing and screenshots should be added after confirmation from the product team.
                                    </div>
                                    <Link to="/products/crm-software" className="pp-prod-cta">
                                        Explore CRM Software <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </RevealCard>

                            {/* Billing Card */}
                            <RevealCard delay={150}>
                                <div className="pp-prod-card">
                                    <div className="pp-prod-icon"><CreditCard size={26} /></div>
                                    <h3>Billing Software</h3>
                                    <p>Billing activities are an important part of everyday business operations. A dedicated billing product can help businesses manage billing-related activities through a structured software environment rather than relying entirely on manual processes.</p>
                                    <p style={{ color: '#888', fontSize: '0.82rem', marginTop: 10 }}>Suitable for businesses that need to:</p>
                                    <ul className="pp-bullets pp-bullets-light" style={{ marginTop: 10 }}>
                                        {billBullets.map((b, i) => (
                                            <li key={i}><CheckCircle2 size={14} /> {b}</li>
                                        ))}
                                    </ul>
                                    <div className="pp-prod-note">
                                        Do not publish specific billing, invoicing, tax, payment gateway or accounting features until the actual product capabilities are confirmed.
                                    </div>
                                    <Link to="/products/billing-software" className="pp-prod-cta">
                                        Explore Billing Software <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </RevealCard>
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── HOW SOFTWARE HELPS ─────────────────────────────── */}
                <section className="pp-section pp-section-soft">
                    <div className="pp-wrap">
                        <RevealCard>
                            <span className="pp-eyebrow">Why Business Software</span>
                            <h2 className="pp-h2 pp-h2-dark">How Business Software <span>Can Support Your Operations</span></h2>
                            <p className="pp-lead" style={{ maxWidth: 640 }}>The right business management software should address a real operational requirement. Rather than selecting software based only on the number of features, businesses should consider how the product fits their existing processes, users and business objectives.</p>
                        </RevealCard>
                        <div className="pp-benefits-grid">
                            {benefits.map(([Icon, title, desc], i) => (
                                <RevealCard key={i} delay={i * 70}>
                                    <div className="pp-benefit-card">
                                        <div className="pp-benefit-icon"><Icon size={22} /></div>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── CHOOSING SOFTWARE ──────────────────────────────── */}
                <section className="pp-section">
                    <div className="pp-wrap">
                        <RevealCard>
                            <span className="pp-eyebrow">Decision Guide</span>
                            <h2 className="pp-h2 pp-h2-dark">Choosing the Right <span>Business Management Software</span></h2>
                            <p className="pp-lead" style={{ maxWidth: 640 }}>Choosing business management software should begin with the business requirement rather than the software name.</p>
                        </RevealCard>
                        <div className="pp-choosing-grid" style={{ marginTop: 40 }}>
                            <RevealCard delay={80}>
                                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f0f0f', marginBottom: 4 }}>Before selecting a product, consider:</p>
                                <div className="pp-checklist">
                                    {considerations.map((c, i) => (
                                        <div key={i} className="pp-checklist-item">
                                            <span className="pp-checklist-num">{String(i + 1).padStart(2, '0')}</span>
                                            <span>{c}</span>
                                        </div>
                                    ))}
                                </div>
                            </RevealCard>
                            <RevealCard delay={160}>
                                <div className="pp-advice">
                                    <h4>Making a Good Product Decision</h4>
                                    <p>A good product decision should balance functionality, usability, business fit and long-term requirements.</p>
                                    <p style={{ marginTop: 14 }}>Each product on this page clearly explains what it does, who it is intended for, which business problem it addresses, key features and how to request a demo or enquiry.</p>
                                    <Link to="/contact" className="pp-btn-primary pp-btn-sm pp-btn">Discuss Your Software Requirement <ArrowRight size={14} /></Link>
                                </div>
                            </RevealCard>
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── DIFFERENT REQUIREMENTS ─────────────────────────── */}
                <section className="pp-section pp-section-dark">
                    <div className="pp-wrap">
                        <RevealCard>
                            <span className="pp-eyebrow">By Requirement</span>
                            <h2 className="pp-h2 pp-h2-light">Software for Different Business Requirements</h2>
                            <p className="pp-lead pp-lead-dark" style={{ maxWidth: 640 }}>Different businesses can have very different software requirements. Each product should clearly explain the following so you can make an informed decision.</p>
                        </RevealCard>
                        <div className="pp-diff-grid" style={{ marginTop: 40 }}>
                            <RevealCard delay={80}>
                                <div className="pp-criteria-list">
                                    {productCriteria.map((c, i) => (
                                        <div key={i} className="pp-criteria-item">
                                            <CheckCircle2 size={14} /> {c}
                                        </div>
                                    ))}
                                </div>
                            </RevealCard>
                            <RevealCard delay={150}>
                                <p style={{ color: '#aaa', fontSize: '0.88rem', marginBottom: 14 }}>Industry-specific software solutions:</p>
                                <div className="pp-ind-links">
                                    {industries.map(([Icon, label, path], i) => (
                                        <Link key={i} to={path} className="pp-ind-link">
                                            <Icon size={16} /> {label}
                                        </Link>
                                    ))}
                                </div>
                                <div style={{ marginTop: 24 }}>
                                    <Link to="/services/" className="pp-btn-primary pp-btn-sm">View Software Development Services <ArrowRight size={14} /></Link>
                                </div>
                            </RevealCard>
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── WHEN PRODUCT ISN'T ENOUGH ──────────────────────── */}
                <section className="pp-section pp-section-soft">
                    <div className="pp-wrap">
                        <RevealCard>
                            <div className="pp-custom-intro">
                                <div>
                                    <span className="pp-eyebrow">Beyond Standard Products</span>
                                    <h2 className="pp-h2 pp-h2-dark">When a Ready-Made Product <span>Is Not Enough</span></h2>
                                    <p className="pp-lead" style={{ maxWidth: 640 }}>Sometimes an existing product can address the requirement. In other situations, the business may have workflows, integrations or functionality that require a different approach. For example, an organisation may need:</p>
                                </div>
                                <div>
                                    <h2 className="pp-custom-intro-side">Bespoke Software Development for Specific Requirements</h2>
                                    <p className="pp-lead" style={{ marginTop: 12 }}>When a business needs software built around its own processes, a bespoke software development service may be more appropriate. Fly Towards Digital Innovation's wider software development portfolio includes:</p>
                                </div>
                            </div>
                        </RevealCard>
                        <div className="pp-custom-grid" style={{ marginTop: 20 }}>
                            <RevealCard delay={80}>
                                <div className="pp-custom-needs">
                                    {customNeeds.map((n, i) => (
                                        <div key={i} className="pp-custom-need">
                                            <CheckCircle2 size={15} /> {n}
                                        </div>
                                    ))}
                                </div>
                                <p className="pp-note" style={{ marginTop: 16 }}>In these situations, a standard product may not be the right solution.</p>
                            </RevealCard>
                            <RevealCard delay={150}>
                                <div className="pp-dev-services">
                                    {devServices.map(([Icon, label, path], i) => (
                                        <Link key={i} to={path} className="pp-dev-link">
                                            <Icon size={16} />
                                            <span>{label}</span>
                                            <ArrowRight size={14} className="pp-arr" />
                                        </Link>
                                    ))}
                                </div>
                            </RevealCard>
                        </div>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── INTERNAL LINKS ─────────────────────────────────── */}
                <section className="pp-section pp-section-dark">
                    <div className="pp-wrap">
                        <RevealCard>
                            <span className="pp-eyebrow">Explore More</span>
                            <h2 className="pp-h2 pp-h2-light">Business Software and IT Software Development</h2>
                            <p className="pp-lead pp-lead-dark" style={{ maxWidth: 640 }}>Business software sits at the intersection of business requirements and technical implementation. A useful solution needs to address both sides — what the software should accomplish, and how the technical implementation supports required functionality, users, data and integrations.</p>
                        </RevealCard>
                        <RevealCard delay={100}>
                            <div className="pp-links-grid">
                                {internalLinks.map(([label, path], i) => (
                                    <Link key={i} to={path} className="pp-int-link">
                                        <ArrowRight size={13} /> {label}
                                    </Link>
                                ))}
                            </div>
                        </RevealCard>
                    </div>
                </section>

                <div className="pp-divider" />

                {/* ── FAQ ────────────────────────────────────────────── */}
                <section className="pp-section">
                    <div className="pp-wrap" style={{ maxWidth: 800 }}>
                        <RevealCard>
                            <span className="pp-eyebrow">FAQ</span>
                            <h2 className="pp-h2 pp-h2-dark">Frequently Asked <span>Questions</span></h2>
                        </RevealCard>
                        <RevealCard delay={100}>
                            <div className="pp-faq-list" style={{ marginTop: 32 }}>
                                {faqs.map(([q, a], i) => <FaqItem key={i} q={q} a={a} />)}
                            </div>
                        </RevealCard>
                    </div>
                </section>

                {/* ── FINAL CTA ──────────────────────────────────────── */}
                <section className="pp-cta-banner">
                    <div className="pp-wrap">
                        <RevealCard>
                            <h2>Find the Right Software for Your Business</h2>
                            <p>Whether you are looking for business management software, evaluating a CRM or billing product, or have a requirement that needs a more tailored solution, the starting point should be the business problem you want to solve. Explore the available products to understand their purpose and capabilities. If your requirement does not fit an existing product, discuss it with the software development team.</p>
                            <div className="pp-cta-row">
                                <a href="#products" className="pp-btn-primary">Explore Our Products <ArrowRight size={16} /></a>
                                <Link to="/contact" className="pp-btn-outline pp-btn-outline-light">Discuss a Custom Software Requirement</Link>
                            </div>
                        </RevealCard>
                    </div>
                </section>

            </div>
        </>
    );
}
