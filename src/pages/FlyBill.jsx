import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, CheckCircle2, ChevronDown, HelpCircle, AlertCircle,
    FileText, Users, CreditCard, BarChart3, Package, Settings2,
    Building2, Store, Briefcase, Factory, GraduationCap, Layers,
    Receipt, Clock3, Database, ShieldCheck, TrendingUp, Eye,
    BadgeCheck, Phone, Mail, MapPin, Star, BookOpen, PieChart, DollarSign
} from 'lucide-react';

/* ═══════════ Static data ════════════════════════════════════════════ */
const highlights = [
    'Invoice creation and management',
    'Customer and product records',
    'Payment and outstanding balance tracking',
    'Sales summaries and billing reports',
];

const overview = [
    [FileText,    'Invoice Creation',    'Prepare invoices using customer, product and transaction information.'],
    [Users,       'Customer Management', 'Organize customer billing details and relevant transaction histories.'],
    [CreditCard,  'Payment Tracking',    'Maintain payment entries and outstanding invoice information.'],
    [BarChart3,   'Billing Reports',     'Review sales summaries and invoice-related business records.'],
];

const challenges = [
    [Clock3,      'Time-Consuming Invoice Preparation',   'Preparing invoices manually can involve repeated data entry, calculations and document formatting.'],
    [AlertCircle, 'Incorrect Billing Calculations',       'Manual entry of quantities, rates, discounts and taxes can lead to inconsistencies in invoice amounts.'],
    [Database,    'Scattered Customer Information',       'Customer details, previous invoices and payment records may be maintained in separate files or registers.'],
    [Eye,         'Difficulty Tracking Outstanding Payments', 'Businesses may struggle to identify unpaid invoices, partial payments and customer balances without organized records.'],
    [FileText,    'Inconsistent Invoice Formats',         'Using different templates or manual documents can make invoice preparation and record management less consistent.'],
    [BarChart3,   'Limited Sales Reporting',              'Business owners may find it difficult to review sales totals, customer transactions and pending payments when information is spread across multiple spreadsheets.'],
];

const features = [
    {
        num: '01',
        title: 'Invoice Creation & Management',
        desc: 'Prepare and maintain invoices using relevant customer and transaction details.',
        fns: 'Invoice numbering, invoice dates, item descriptions, quantities, pricing, discounts, totals and printable invoice formats.',
    },
    {
        num: '02',
        title: 'Customer Management',
        desc: 'Maintain customer profiles and relevant billing information within a structured system.',
        fns: 'Customer names, contact details, billing addresses, GSTIN fields where applicable, invoice history and balances.',
    },
    {
        num: '03',
        title: 'Product & Service Management',
        desc: 'Organize information about products and services used in business transactions.',
        fns: 'Product names, service descriptions, item codes, prices, units of measurement and applicable tax settings.',
    },
    {
        num: '04',
        title: 'Payment & Outstanding Management',
        desc: 'Record customer payments and maintain relevant invoice balance information.',
        fns: 'Payment entries, payment methods, partial payments, outstanding amounts and invoice payment status.',
    },
    {
        num: '05',
        title: 'Invoice Records & Tracking',
        desc: 'Organize invoices according to their dates, customers and transaction status.',
        fns: 'Invoice registers, invoice search, transaction histories, document status and relevant billing records.',
    },
    {
        num: '06',
        title: 'Sales Reports & Business Dashboards',
        desc: 'Review billing activity through structured summaries and available reports.',
        fns: 'Daily sales summaries, invoice totals, customer-wise sales, outstanding payment reports and transaction records.',
    },
];

const steps = [
    ['01', 'Configure Business Details',  'Maintain relevant business information, invoice preferences and supported billing settings.'],
    ['02', 'Add Customers & Products',    'Enter customer details, product or service information, pricing and applicable transaction settings.'],
    ['03', 'Create an Invoice',           'Select the customer, add relevant items and enter quantities or service charges.'],
    ['04', 'Calculate Invoice Amounts',   'Apply configured pricing, discounts and applicable taxes to determine invoice totals.'],
    ['05', 'Record Customer Payments',    'Maintain payment entries and update outstanding invoice information according to supported workflows.'],
    ['06', 'Review Billing Reports',      'Access available invoice records, sales summaries and payment information for business review.'],
];

const benefits = [
    [TrendingUp,  'Simplify Daily Invoice Preparation',  'Structured billing workflows can reduce repeated administrative tasks involved in preparing customer invoices.'],
    [BadgeCheck,  'Improve Billing Consistency',         'Configured pricing and calculation rules can help businesses maintain more consistent invoice information when correctly set up.'],
    [Database,    'Organize Customer Records',           'Maintain customer details, invoice histories and relevant billing information within a structured application.'],
    [Eye,         'Improve Payment Visibility',          'Track recorded payments and outstanding invoice balances to support customer payment follow-ups.'],
    [Layers,      'Support Growing Business Requirements','A suitable billing platform can help businesses organize increasing transaction volumes, customer records and reporting needs.'],
];

const industries = [
    [Store,       'Retail Shops',              'Prepare invoices for customer purchases and maintain relevant sales and transaction records.'],
    [Package,     'Wholesale & Trading',       'Organize customer invoices, bulk transaction details, payment records and outstanding balances.'],
    [Briefcase,   'Service Providers',         'Create invoices for completed services, maintain customer information and track payment status.'],
    [Factory,     'Manufacturing Businesses',  'Prepare product sales invoices and maintain relevant customer billing and transaction information.'],
    [GraduationCap,'Professional Service Firms','Manage invoices for consulting, technical services, design work and other professional activities.'],
    [Building2,   'Small & Growing Enterprises','Organize invoice preparation, customer records and billing information as business activity increases.'],
];

const compTable = [
    ['Invoice creation',       'Repeated manual entry',           'Structured invoice preparation'],
    ['Customer information',   'Separate files or registers',     'Organized customer profiles'],
    ['Product pricing',        'Manually entered values',         'Maintained product and pricing records'],
    ['Invoice calculations',   'Manual formulas',                 'Configured calculation rules'],
    ['Payment records',        'Separate payment registers',      'Linked payment information'],
    ['Invoice history',        'Multiple documents and folders',  'Organized invoice records'],
    ['Sales reporting',        'Manual consolidation',            'Structured sales summaries'],
];

const criteria = [
    ['01', 'Ease of Invoice Creation',      'Choose software that makes it practical to enter customer information, products or services and transaction details.'],
    ['02', 'Customer & Product Records',    'Evaluate whether the application can maintain the information needed for recurring billing activities.'],
    ['03', 'Payment Management',            'Check whether the system supports the required payment recording and outstanding balance workflows.'],
    ['04', 'Invoice Customization',         'Review invoice numbering, business details, tax fields, layout requirements and supported output formats.'],
    ['05', 'Reporting Requirements',        'Identify the sales summaries, customer reports and payment information needed by the business.'],
    ['06', 'Pricing, Support & Scalability','Compare software costs, deployment arrangements, support availability and the ability to accommodate changing business requirements.'],
];

const considerations = [
    ['01', 'GST Invoice Requirements',           'GST-registered businesses may need invoices containing relevant supplier and customer information, GSTIN details, HSN/SAC information and applicable tax calculations. Fly Bill\'s GST functionality must be verified before advertising it as GST billing software.'],
    ['02', 'Business Data Security',             'Consider authentication, authorized user permissions, secure information handling, backups and relevant activity records.'],
    ['03', 'Accounting & Inventory Integration', 'Evaluate whether the billing application needs to exchange information with accounting software, inventory systems or other business applications. Integration feasibility depends on supported technical interfaces and product capabilities.'],
    ['04', 'Data Migration & User Training',     'Review existing customer information, product lists, invoices, payment records and employee responsibilities before implementation.'],
];

const differentiators = [
    ['01', 'Business-Focused Billing Requirements', 'Understand your transaction types, customer information, invoice formats and existing billing processes.'],
    ['02', 'Practical Invoice Management',           'Identify the invoice creation, payment recording and reporting workflows required for your business.'],
    ['03', 'User-Friendly Workflow Planning',        'Consider how business owners, billing staff, accountants and authorized employees will use the application.'],
    ['04', 'Implementation & Integration Assessment','Review existing systems, data migration requirements and relevant technical dependencies before implementation.'],
];

const faqs = [
    ['What is Fly Bill billing software?',
     'Fly Bill is the proposed name of a billing and invoicing software product by FlyTowards Digital Innovation. It is being positioned around invoice creation, customer billing records, payment tracking and sales information management. Actual product capabilities must be confirmed.'],
    ['What is billing and invoicing software?',
     'Billing and invoicing software is an application that helps businesses prepare invoices, calculate transaction amounts, maintain customer billing information, record payments and organize sales records.'],
    ['Is invoicing software suitable for small businesses?',
     'Yes. Invoicing software can help small businesses organize customer invoices, maintain transaction records and manage payment information. The required functionality depends on the business\'s size and billing processes.'],
    ['How do I choose the best invoicing software for small business?',
     'Compare ease of use, invoice creation, payment tracking, tax requirements, customer management, reporting, pricing and support. The best choice is the product that meets your operational needs and budget.'],
    ['What is an invoice management system?',
     'An invoice management system is software used to create, organize, track and maintain invoice-related records. Depending on the application, it may include customer information, payment status and reporting features.'],
    ['Can Fly Bill support GST invoicing?',
     'Fly Bill\'s GST-related functionality has not yet been verified. Businesses should confirm supported invoice fields, tax calculations and relevant compliance features before selecting the product.'],
    ['Can Fly Bill integrate with accounting or inventory software?',
     'Potential integration depends on Fly Bill\'s verified technical capabilities, available APIs, supported data formats and the existing applications involved.'],
    ['How much does Fly Bill billing software cost?',
     'Fly Bill pricing has not been confirmed. Businesses should request product pricing and implementation details, including applicable charges for users, features, integrations, hosting and support.'],
];

/* ═══════════ Hooks ══════════════════════════════════════════════════ */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('fb-visible'); obs.disconnect(); } },
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
        <div ref={ref} className={`fb-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}

/* ═══════════ Sub-components ════════════════════════════════════════ */
function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`fb-faq-item ${open ? 'fb-faq-open' : ''}`}>
            <button className="fb-faq-btn" onClick={() => setOpen(o => !o)} aria-expanded={open}>
                <span>{q}</span>
                <ChevronDown size={18} className="fb-faq-icon" />
            </button>
            <div className="fb-faq-body">{a}</div>
        </div>
    );
}

/* ═══════════ Illustrative Dashboard ════════════════════════════════ */
function HeroDashboard() {
    const [activeRow, setActiveRow] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setActiveRow(r => (r + 1) % 4), 2000);
        return () => clearInterval(t);
    }, []);
    const invoices = [
        { id: 'INV-1041', customer: 'Rajan Traders', amount: '₹18,500', status: 'Paid',     color: '#22c55e' },
        { id: 'INV-1042', customer: 'Meena Stores',  amount: '₹9,200',  status: 'Pending',  color: '#facc15' },
        { id: 'INV-1043', customer: 'Karthik Pvt',   amount: '₹34,000', status: 'Paid',     color: '#22c55e' },
        { id: 'INV-1044', customer: 'Nila Traders',  amount: '₹12,750', status: 'Overdue',  color: '#f87171' },
    ];
    return (
        <div className="fb-dashboard">
            <div className="fb-dash-badge">Illustrative</div>
            <div className="fb-dash-header">
                <span className="fb-dash-title">Fly Bill — Invoice Overview</span>
                <span className="fb-dash-live">● Live</span>
            </div>
            <div className="fb-dash-stats">
                {[['Total Invoices','₹74,450','↑ 12%'],['Outstanding','₹21,950','3 pending'],['Paid This Month','₹52,500','8 invoices']].map(([l,v,s],i)=>(
                    <div key={i} className="fb-stat">
                        <span className="fb-stat-label">{l}</span>
                        <span className="fb-stat-value">{v}</span>
                        <span className="fb-stat-sub">{s}</span>
                    </div>
                ))}
            </div>
            <div className="fb-dash-table">
                <div className="fb-table-head">
                    <span>Invoice</span><span>Customer</span><span>Amount</span><span>Status</span>
                </div>
                {invoices.map((inv, i) => (
                    <div key={i} className={`fb-table-row ${activeRow === i ? 'fb-row-active' : ''}`}>
                        <span className="fb-inv-id">{inv.id}</span>
                        <span>{inv.customer}</span>
                        <span className="fb-inv-amt">{inv.amount}</span>
                        <span className="fb-inv-status" style={{ color: inv.color }}>{inv.status}</span>
                    </div>
                ))}
            </div>
            <div className="fb-dash-footer">
                <span>🏪 FlyTowards Billing Software</span>
                <span style={{color:'#facc15'}}>→ View All</span>
            </div>
        </div>
    );
}

function BenefitsDashboard() {
    return (
        <div className="fb-benefits-dash">
            <div className="fb-bd-title">Invoice Summary</div>
            {[['Total Revenue','₹2,45,800',82],['Payments Received','₹1,98,300',78],['Outstanding','₹47,500',32],['Invoices Created','148',95]].map(([l,v,p],i)=>(
                <div key={i} className="fb-bd-row">
                    <div className="fb-bd-meta">
                        <span>{l}</span><strong>{v}</strong>
                    </div>
                    <div className="fb-bd-bar-track">
                        <div className="fb-bd-bar" style={{'--w':`${p}%`, animationDelay:`${i*0.2}s`}}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

function BuyerDashboard() {
    return (
        <div className="fb-buyer-dash">
            <div className="fb-bd-title">Billing Checklist</div>
            {['Invoice creation workflow','Customer & product records','Payment recording','Outstanding tracking','Sales reporting','GST invoice fields'].map((item,i)=>(
                <div key={i} className="fb-check-row" style={{animationDelay:`${i*0.15}s`}}>
                    <CheckCircle2 size={16} color="#facc15" />
                    <span>{item}</span>
                </div>
            ))}
        </div>
    );
}

function ConsiderationsDash() {
    return (
        <div className="fb-cons-dash">
            <div className="fb-bd-title">Invoice Preview</div>
            <div className="fb-inv-preview">
                <div className="fb-inv-row fb-inv-head">
                    <span>Fly Bill Invoice</span><span>#INV-1044</span>
                </div>
                <div className="fb-inv-row"><span>Customer</span><span>Nila Traders</span></div>
                <div className="fb-inv-row"><span>GSTIN</span><span>33XXXXX1234Z5</span></div>
                <div className="fb-inv-row"><span>HSN/SAC</span><span>998314</span></div>
                <div className="fb-inv-row"><span>Taxable Amt</span><span>₹10,805</span></div>
                <div className="fb-inv-row"><span>CGST 9%</span><span>₹972</span></div>
                <div className="fb-inv-row"><span>SGST 9%</span><span>₹972</span></div>
                <div className="fb-inv-row fb-inv-total"><span>Total</span><span>₹12,750</span></div>
            </div>
        </div>
    );
}

/* ═══════════ Main Component ════════════════════════════════════════ */
export default function FlyBill() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <style>{`
                /* ── Reset / Base ──────────────────────────────── */
                .fb-page { font-family: 'Inter', 'Segoe UI', sans-serif; color: #1a1a1a; background: #fff; overflow-x: hidden; }
                .fb-page *, .fb-page *::before, .fb-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
                .fb-wrap  { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
                .fb-section { padding: 80px 0; }
                .fb-section-dark { background: #0f0f0f; color: #fff; }
                .fb-section-soft { background: #f9f9f7; }
                .fb-section-yellow { background: #facc15; }

                /* ── Reveal animation ──────────────────────────── */
                .fb-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.6s ease, transform 0.6s ease; }
                .fb-visible { opacity: 1; transform: translateY(0); }

                /* ── Typography ────────────────────────────────── */
                .fb-eyebrow { display: inline-flex; width: fit-content; padding: 6px 14px; border: 1px solid rgba(250,204,21,.7); border-radius: 999px; background: #fff7cc; color: #1e40af; font-size: .8rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px; }
                .fb-page .fb-eyebrow { padding: 6px 14px !important; color: #1e1b4b !important; font-size: .75rem !important; letter-spacing: .1em !important; }
                .fb-h1 { font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800; line-height: 1.15; color: #1e1b4b; }
                .fb-h1 span { color: #facc15; }
                .fb-h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; line-height: 1.2; color: #1e1b4b; }
                .fb-h2 span { color: #facc15; }
                .fb-h2-light { color: #fff; }
                .fb-lead { font-size: 1.05rem; color: #555; line-height: 1.75; margin-top: 16px; }
                .fb-lead-dark { color: #aaa; }
                .fb-note { font-size: 0.8rem; color: #999; margin-top: 8px; }

                /* ── Buttons ───────────────────────────────────── */
                .fb-btn-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px; }
                .fb-btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #facc15; color: #0f0f0f; font-weight: 700; font-size: 0.95rem; padding: 14px 26px; border-radius: 50px; border: none; cursor: pointer; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
                .fb-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(250,204,21,0.4); }
                .fb-btn-outline { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #0f0f0f; font-weight: 600; font-size: 0.95rem; padding: 14px 26px; border-radius: 50px; border: 2px solid #0f0f0f; cursor: pointer; text-decoration: none; transition: all 0.2s; }
                .fb-btn-outline:hover { background: #0f0f0f; color: #facc15; }
                .fb-btn-outline-light { color: #fff; border-color: rgba(255,255,255,0.4); }
                .fb-btn-outline-light:hover { background: #fff; color: #0f0f0f; }
                .fb-btn-dark { background: #0f0f0f; color: #facc15; }
                .fb-btn-dark:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.3); }

                /* ── Highlights list ───────────────────────────── */
                .fb-hl-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
                .fb-hl-list li { display: flex; align-items: center; gap: 10px; font-size: 0.95rem; color: #444; }
                .fb-hl-list li svg { color: #facc15; flex-shrink: 0; }

                /* ── SECTION 01 — HERO ─────────────────────────── */
                .fb-hero { padding: 100px 0 80px; background: #fff; }
                .fb-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
                @media(max-width:900px){ .fb-hero-grid { grid-template-columns: 1fr; } }

                /* ── Dashboard widget ──────────────────────────── */
                .fb-dashboard {
                    background: #0f0f0f; border-radius: 20px; padding: 24px;
                    box-shadow: 0 24px 60px rgba(0,0,0,0.18);
                    animation: fb-float 5s ease-in-out infinite;
                }
                @keyframes fb-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
                .fb-dash-badge { display: inline-block; background: rgba(250,204,21,0.15); color: #facc15; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 20px; margin-bottom: 14px; }
                .fb-dash-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
                .fb-dash-title { color: #fff; font-weight: 700; font-size: 0.95rem; }
                .fb-dash-live { color: #22c55e; font-size: 0.75rem; font-weight: 600; }
                .fb-dash-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-bottom: 20px; }
                .fb-stat { background: #1a1a1a; border-radius: 10px; padding: 12px 10px; text-align: center; }
                .fb-stat-label { display: block; font-size: 0.65rem; color: #888; margin-bottom: 4px; }
                .fb-stat-value { display: block; font-size: 1rem; font-weight: 800; color: #facc15; }
                .fb-stat-sub { display: block; font-size: 0.65rem; color: #666; margin-top: 2px; }
                .fb-dash-table { display: flex; flex-direction: column; gap: 6px; }
                .fb-table-head { display: grid; grid-template-columns: 1fr 1.4fr 1fr 0.8fr; font-size: 0.65rem; color: #666; text-transform: uppercase; letter-spacing: 1px; padding: 0 8px 6px; border-bottom: 1px solid #222; }
                .fb-table-row { display: grid; grid-template-columns: 1fr 1.4fr 1fr 0.8fr; padding: 10px 8px; border-radius: 8px; transition: background 0.3s; font-size: 0.8rem; color: #ccc; }
                .fb-row-active { background: #1e1e1e; }
                .fb-inv-id { color: #facc15; font-weight: 700; }
                .fb-inv-amt { font-weight: 700; color: #fff; }
                .fb-inv-status { font-weight: 600; font-size: 0.75rem; }
                .fb-dash-footer { display: flex; justify-content: space-between; margin-top: 16px; padding-top: 12px; border-top: 1px solid #222; font-size: 0.75rem; color: #666; }

                /* ── SECTION 02 — OVERVIEW ─────────────────────── */
                .fb-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .fb-overview-grid { grid-template-columns: 1fr; } }
                .fb-ov-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .fb-ov-card { background: #0f0f0f; border-radius: 14px; padding: 22px 18px; }
                .fb-ov-icon { width: 44px; height: 44px; background: rgba(250,204,21,0.12); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; color: #facc15; }
                .fb-ov-card h4 { color: #fff; font-size: 0.9rem; font-weight: 700; margin-bottom: 6px; }
                .fb-ov-card p  { color: #888; font-size: 0.8rem; line-height: 1.6; }

                /* ── SECTION 03 — CHALLENGES ───────────────────── */
                .fb-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
                @media(max-width:900px){ .fb-grid-3 { grid-template-columns: 1fr 1fr; } }
                @media(max-width:580px){ .fb-grid-3 { grid-template-columns: 1fr; } }
                .fb-challenge-card { background: #fff; border: 1.5px solid #f0f0f0; border-radius: 14px; padding: 24px 20px; transition: box-shadow 0.3s, transform 0.3s; }
                .fb-challenge-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.08); transform: translateY(-4px); }
                .fb-ch-icon { width: 44px; height: 44px; background: #fffde7; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: #d97706; }
                .fb-challenge-card h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; color: #0f0f0f; }
                .fb-challenge-card p  { font-size: 0.82rem; color: #666; line-height: 1.65; }

                /* ── SECTION 04 — FEATURES ─────────────────────── */
                .fb-feat-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
                @media(max-width:900px){ .fb-feat-grid { grid-template-columns: 1fr 1fr; } }
                @media(max-width:580px){ .fb-feat-grid { grid-template-columns: 1fr; } }
                .fb-feat-card { background: #1a1a1a; border-radius: 14px; padding: 24px 20px; border: 1.5px solid #2a2a2a; transition: border-color 0.3s, transform 0.3s; }
                .fb-feat-card:hover { border-color: #facc15; transform: translateY(-4px); }
                .fb-feat-num { font-size: 1.8rem; font-weight: 900; color: rgba(250,204,21,0.15); line-height: 1; margin-bottom: 10px; }
                .fb-feat-card h4 { color: #facc15; font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; }
                .fb-feat-card p  { color: #aaa; font-size: 0.8rem; line-height: 1.6; margin-bottom: 10px; }
                .fb-feat-fns { font-size: 0.75rem; color: #666; line-height: 1.6; padding-top: 10px; border-top: 1px solid #2a2a2a; }
                .fb-feat-label { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: #facc15; font-weight: 700; margin-bottom: 4px; }
                .fb-feat-note { font-size: 0.75rem; color: #888; margin-top: 28px; }

                /* ── SECTION 05 — HOW IT WORKS ─────────────────── */
                .fb-steps-wrap { position: relative; }
                .fb-steps-line { position: absolute; top: 28px; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #facc15, #f59e0b, #facc15); border-radius: 2px; }
                .fb-steps-grid { display: grid; grid-template-columns: repeat(6,1fr); gap: 16px; position: relative; }
                @media(max-width:1000px){ .fb-steps-grid { grid-template-columns: repeat(3,1fr); } .fb-steps-line { display: none; } }
                @media(max-width:580px){ .fb-steps-grid { grid-template-columns: 1fr; } }
                .fb-step { display: flex; flex-direction: column; align-items: center; text-align: center; }
                .fb-step-num { width: 56px; height: 56px; border-radius: 50%; background: #facc15; color: #0f0f0f; font-weight: 900; font-size: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; box-shadow: 0 4px 16px rgba(250,204,21,0.4); position: relative; z-index: 1; }
                .fb-step h4 { font-size: 0.82rem; font-weight: 700; margin-bottom: 6px; color: #0f0f0f; }
                .fb-step p  { font-size: 0.75rem; color: #666; line-height: 1.6; }
                .fb-workflow-bar { margin-top: 36px; background: #0f0f0f; border-radius: 12px; padding: 16px 20px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px; }
                .fb-wf-step { font-size: 0.8rem; font-weight: 600; color: #facc15; }
                .fb-wf-arrow { color: #555; font-size: 1rem; }

                /* ── SECTION 06 — BENEFITS ─────────────────────── */
                .fb-benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .fb-benefits-grid { grid-template-columns: 1fr; } }
                .fb-benefit-item { display: flex; gap: 16px; padding: 20px; border-radius: 12px; transition: background 0.3s; }
                .fb-benefit-item:hover { background: #fff; }
                .fb-benefit-icon { width: 44px; height: 44px; background: rgba(250,204,21,0.12); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #d97706; }
                .fb-benefit-item h4 { font-weight: 700; font-size: 0.95rem; color: #0f0f0f; margin-bottom: 6px; }
                .fb-benefit-item p  { font-size: 0.82rem; color: #555; line-height: 1.6; }

                /* Benefits Dashboard ─────────────────────────── */
                .fb-benefits-dash { background: #0f0f0f; border-radius: 20px; padding: 24px; animation: fb-float 6s ease-in-out infinite; }
                .fb-bd-title { color: #facc15; font-weight: 700; font-size: 0.85rem; margin-bottom: 18px; text-transform: uppercase; letter-spacing: 1.5px; }
                .fb-bd-row { margin-bottom: 16px; }
                .fb-bd-meta { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.8rem; color: #ccc; }
                .fb-bd-meta strong { color: #fff; }
                .fb-bd-bar-track { height: 6px; background: #2a2a2a; border-radius: 3px; overflow: hidden; }
                .fb-bd-bar { height: 100%; width: var(--w); background: linear-gradient(90deg,#facc15,#f59e0b); border-radius: 3px; animation: fb-grow 1.4s ease forwards; }
                @keyframes fb-grow { from { width: 0 } to { width: var(--w) } }

                /* ── SECTION 07 — INDUSTRIES ───────────────────── */
                .fb-ind-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
                @media(max-width:900px){ .fb-ind-grid { grid-template-columns: 1fr 1fr; } }
                @media(max-width:580px){ .fb-ind-grid { grid-template-columns: 1fr; } }
                .fb-ind-card { background: #1a1a1a; border-radius: 14px; padding: 24px 20px; border: 1.5px solid #2a2a2a; transition: border-color 0.3s, transform 0.3s; }
                .fb-ind-card:hover { border-color: #facc15; transform: translateY(-4px); }
                .fb-ind-icon { width: 48px; height: 48px; background: rgba(250,204,21,0.12); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: #facc15; }
                .fb-ind-card h4 { color: #fff; font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; }
                .fb-ind-card p  { color: #888; font-size: 0.8rem; line-height: 1.6; }
                .fb-ind-regional { margin-top: 32px; background: rgba(250,204,21,0.08); border: 1px solid rgba(250,204,21,0.2); border-radius: 10px; padding: 14px 20px; font-size: 0.82rem; color: #ccc; }
                .fb-ind-regional strong { color: #facc15; }

                /* ── SECTION 08 — COMPARISON ───────────────────── */
                .fb-comp-table { width: 100%; border-collapse: collapse; border-radius: 14px; overflow: hidden; }
                .fb-comp-table thead th { background: #0f0f0f; color: #fff; padding: 14px 18px; font-size: 0.85rem; text-align: left; }
                .fb-comp-table thead th:first-child { background: #0f0f0f; }
                .fb-comp-table thead th:nth-child(2) { background: #1a1a1a; }
                .fb-comp-table thead th:nth-child(3) { background: #facc15; color: #0f0f0f; }
                .fb-comp-table tbody tr:nth-child(even) { background: #f9f9f7; }
                .fb-comp-table tbody tr:nth-child(odd) { background: #fff; }
                .fb-comp-table td { padding: 12px 18px; font-size: 0.85rem; border-bottom: 1px solid #f0f0f0; }
                .fb-comp-table td:first-child { font-weight: 700; color: #0f0f0f; }
                .fb-comp-table td:nth-child(2) { color: #888; }
                .fb-comp-table td:nth-child(3) { color: #0f0f0f; font-weight: 600; }
                .fb-comp-note { margin-top: 28px; background: #fffde7; border: 1.5px solid #fde68a; border-radius: 12px; padding: 20px; font-size: 0.85rem; color: #555; line-height: 1.7; }

                /* ── SECTION 09 — BUYER GUIDE ──────────────────── */
                .fb-buyer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .fb-buyer-grid { grid-template-columns: 1fr; } }
                .fb-criteria-list { display: flex; flex-direction: column; gap: 16px; }
                .fb-crit-item { display: flex; gap: 14px; align-items: flex-start; }
                .fb-crit-num { width: 32px; height: 32px; background: #facc15; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.75rem; color: #0f0f0f; flex-shrink: 0; }
                .fb-crit-item h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 4px; color: #0f0f0f; }
                .fb-crit-item p  { font-size: 0.82rem; color: #666; line-height: 1.6; }
                .fb-suitability { margin-top: 28px; background: #0f0f0f; border-radius: 14px; padding: 24px; }
                .fb-suitability h4 { color: #facc15; font-weight: 700; margin-bottom: 10px; }
                .fb-suitability p  { color: #aaa; font-size: 0.85rem; line-height: 1.65; margin-bottom: 16px; }

                /* Buyer dashboard ─────────────────────────── */
                .fb-buyer-dash { background: #0f0f0f; border-radius: 20px; padding: 24px; animation: fb-float 5.5s ease-in-out infinite 0.5s; }
                .fb-check-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid #1e1e1e; font-size: 0.85rem; color: #ccc; animation: fb-slide-in 0.5s ease both; }
                @keyframes fb-slide-in { from { opacity:0; transform:translateX(-12px) } to { opacity:1; transform:translateX(0) } }

                /* ── SECTION 10 — CONSIDERATIONS ──────────────── */
                .fb-cons-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                @media(max-width:900px){ .fb-cons-grid { grid-template-columns: 1fr; } }
                .fb-cons-list { display: flex; flex-direction: column; gap: 20px; }
                .fb-cons-item { display: flex; gap: 16px; }
                .fb-cons-num { width: 36px; height: 36px; border-radius: 50%; background: #facc15; color: #0f0f0f; font-weight: 900; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .fb-cons-item h4 { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
                .fb-cons-item p  { font-size: 0.82rem; color: #aaa; line-height: 1.65; }
                .fb-cons-warn { margin-top: 24px; background: rgba(250,204,21,0.08); border: 1.5px solid rgba(250,204,21,0.4); border-radius: 10px; padding: 14px 18px; font-size: 0.82rem; color: #FDE68A; line-height: 1.65; }
                .fb-inv-preview { display: flex; flex-direction: column; gap: 0; margin-top: 16px; border-radius: 10px; overflow: hidden; }
                .fb-inv-row { display: flex; justify-content: space-between; padding: 10px 14px; font-size: 0.82rem; border-bottom: 1px solid #2a2a2a; color: #ccc; }
                .fb-inv-head { background: #1a1a1a; color: #facc15; font-weight: 700; }
                .fb-inv-total { background: rgba(250,204,21,0.1); color: #facc15; font-weight: 700; }
                .fb-cons-dash { background: #0f0f0f; border-radius: 20px; padding: 24px; animation: fb-float 5s ease-in-out infinite 1s; }

                /* ── SECTION 11 — WHY FLYTOWARDS ──────────────── */
                .fb-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
                @media(max-width:900px){ .fb-why-grid { grid-template-columns: 1fr; } }
                .fb-diff-list { display: flex; flex-direction: column; gap: 18px; }
                .fb-diff-item { display: flex; gap: 14px; }
                .fb-diff-num { width: 32px; height: 32px; border-radius: 50%; background: rgba(250,204,21,0.15); border: 2px solid #facc15; color: #facc15; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .fb-diff-item h4 { font-size: 0.9rem; font-weight: 700; color: #1e1b4b; margin-bottom: 4px; }
                .fb-diff-item p  { font-size: 0.82rem; color: #4b5563; line-height: 1.6; }
                .fb-why-cta { margin-top: 32px; }

                /* ── SECTION 12 — FAQ ──────────────────────────── */
                .fb-faq-list { display: flex; flex-direction: column; gap: 0; border: 1.5px solid #f0f0f0; border-radius: 14px; overflow: hidden; }
                .fb-faq-item { border-bottom: 1.5px solid #f0f0f0; }
                .fb-faq-item:last-child { border-bottom: none; }
                .fb-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; background: none; border: none; cursor: pointer; font-size: 0.9rem; font-weight: 600; color: #0f0f0f; text-align: left; gap: 12px; }
                .fb-faq-btn:hover { background: #f9f9f7; }
                .fb-faq-icon { transition: transform 0.3s; flex-shrink: 0; }
                .fb-faq-open .fb-faq-icon { transform: rotate(180deg); }
                .fb-faq-body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s; padding: 0 22px; font-size: 0.85rem; color: #555; line-height: 1.7; }
                .fb-faq-open .fb-faq-body { max-height: 300px; padding: 0 22px 18px; }

                /* ── SECTION 13 — FINAL CTA ────────────────────── */
                .fb-cta-banner { background: #0f0f0f; padding: 80px 0; text-align: center; }
                .fb-cta-banner h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900; color: #fff; margin-bottom: 16px; }
                .fb-cta-banner p  { color: #aaa; font-size: 1rem; max-width: 640px; margin: 0 auto 32px; line-height: 1.75; }
                .fb-cta-row { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }
            `}</style>

            <div className="fb-page">

                {/* ── S01 HERO ───────────────────────────────────────── */}
                <section className="fb-hero">
                    <div className="fb-wrap">
                        <div className="fb-hero-grid">
                            <div>
                                <RevealCard>
                                    <p className="fb-eyebrow">FlyTowards Digital Innovation</p>
                                    <h1 className="fb-h1">
                                        Fly Bill –<br />
                                        <span>Billing Software</span><br />
                                        for Small Businesses
                                    </h1>
                                    <p className="fb-lead">
                                        Simplify Invoicing, Manage Customer Payments and Organize Business Billing
                                    </p>
                                    <p className="fb-lead" style={{ marginTop: 10 }}>
                                        Creating invoices, tracking customer payments and maintaining sales records through spreadsheets or manual registers can become difficult as your business grows. Fly Bill by FlyTowards Digital Innovation is a proposed billing software solution for small businesses, retailers, wholesalers, traders and service providers across Tamil Nadu, particularly South Tamil Nadu.
                                    </p>
                                    <ul className="fb-hl-list">
                                        {highlights.map((h, i) => (
                                            <li key={i}><CheckCircle2 size={16} /> {h}</li>
                                        ))}
                                    </ul>
                                    <p className="fb-note">Product capabilities and demo availability are subject to confirmation.</p>
                                    <div className="fb-btn-row">
                                        <Link to="/contact" className="fb-btn-primary">Request a Fly Bill Demo <ArrowRight size={16} /></Link>
                                        <Link to="/contact" className="fb-btn-outline">Discuss Your Billing Requirements</Link>
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
                <section className="fb-section fb-section-soft">
                    <div className="fb-wrap">
                        <div className="fb-overview-grid">
                            <RevealCard>
                                <p className="fb-eyebrow">Product Overview</p>
                                <h2 className="fb-h2">What Is <span>Fly Bill Billing &amp; Invoicing Software?</span></h2>
                                <p className="fb-lead">Billing and invoicing software is a business application used to create invoices, record sales transactions, maintain customer information and track payment-related records.</p>
                                <p className="fb-lead">For small businesses, preparing invoices often involves entering customer details, selecting products or services, calculating totals, applying relevant taxes and recording payments.</p>
                                <p className="fb-lead">An invoice management system helps organize these activities through structured workflows, making billing records easier to maintain and review.</p>
                                <p className="fb-lead">Fly Bill is being positioned as an invoicing software solution for small business operations that need a more organized approach to daily billing and customer transactions.</p>
                            </RevealCard>
                            <div className="fb-ov-cards">
                                {overview.map(([Icon, title, desc], i) => (
                                    <RevealCard key={i} delay={i * 80}>
                                        <div className="fb-ov-card">
                                            <div className="fb-ov-icon"><Icon size={22} /></div>
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
                <section className="fb-section">
                    <div className="fb-wrap">
                        <RevealCard>
                            <p className="fb-eyebrow">Billing Challenges</p>
                            <h2 className="fb-h2">Common <span>Billing Challenges</span> Faced by Small Businesses</h2>
                        </RevealCard>
                        <div className="fb-grid-3" style={{ marginTop: 40 }}>
                            {challenges.map(([Icon, title, desc], i) => (
                                <RevealCard key={i} delay={i * 70}>
                                    <div className="fb-challenge-card">
                                        <div className="fb-ch-icon"><Icon size={22} /></div>
                                        <h4>{title}</h4>
                                        <p>{desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── S04 FEATURES ───────────────────────────────────── */}
                <section className="fb-section fb-section-dark">
                    <div className="fb-wrap">
                        <RevealCard>
                            <p className="fb-eyebrow">Software Features</p>
                            <h2 className="fb-h2 fb-h2-light">Key Features Planned for Fly Bill Billing Software</h2>
                            <p className="fb-lead fb-lead-dark" style={{ maxWidth: 600 }}>The following capabilities are proposed for Fly Bill. Actual functionality, configuration and availability must be verified before publication.</p>
                        </RevealCard>
                        <div className="fb-feat-grid" style={{ marginTop: 40 }}>
                            {features.map((f, i) => (
                                <RevealCard key={i} delay={i * 70}>
                                    <div className="fb-feat-card">
                                        <div className="fb-feat-num">{f.num}</div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                        <div className="fb-feat-label">Potential Functions</div>
                                        <div className="fb-feat-fns">{f.fns}</div>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── S05 HOW IT WORKS ───────────────────────────────── */}
                <section className="fb-section fb-section-soft">
                    <div className="fb-wrap">
                        <RevealCard>
                            <p className="fb-eyebrow">How It Works</p>
                            <h2 className="fb-h2">How Does Fly Bill <span>Simplify Invoice Management?</span></h2>
                            <p className="fb-lead" style={{ maxWidth: 640 }}>An organized invoice management system helps businesses manage the steps involved in preparing invoices, recording payments and reviewing billing information.</p>
                        </RevealCard>
                        <div style={{ marginTop: 48 }}>
                            <RevealCard>
                                <div className="fb-steps-wrap">
                                    <div className="fb-steps-line" />
                                    <div className="fb-steps-grid">
                                        {steps.map(([num, title, desc], i) => (
                                            <div key={i} className="fb-step" style={{ transitionDelay: `${i * 80}ms` }}>
                                                <div className="fb-step-num">{num}</div>
                                                <h4>{title}</h4>
                                                <p>{desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </RevealCard>
                        </div>
                        <RevealCard delay={200}>
                            <div className="fb-workflow-bar">
                                {['Business Setup','Customer Selection','Product / Service Entry','Invoice Generation','Payment Recording','Sales Reporting'].map((s, i, arr) => (
                                    <span key={i}>
                                        <span className="fb-wf-step">{s}</span>
                                        {i < arr.length - 1 && <span className="fb-wf-arrow"> → </span>}
                                    </span>
                                ))}
                            </div>
                        </RevealCard>
                        <RevealCard delay={300}>
                            <p className="fb-note" style={{ textAlign: 'center', marginTop: 20 }}>These are illustrative workflows and do not confirm that every function is currently available in Fly Bill.</p>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S06 BENEFITS ───────────────────────────────────── */}
                <section className="fb-section">
                    <div className="fb-wrap">
                        <RevealCard>
                            <p className="fb-eyebrow">Business Benefits</p>
                            <h2 className="fb-h2">Benefits of Fly Bill Billing Software for <span>Small Businesses</span></h2>
                        </RevealCard>
                        <div className="fb-benefits-grid" style={{ marginTop: 40 }}>
                            <RevealCard delay={100}>
                                <BenefitsDashboard />
                            </RevealCard>
                            <div>
                                {benefits.map(([Icon, title, desc], i) => (
                                    <RevealCard key={i} delay={i * 80}>
                                        <div className="fb-benefit-item">
                                            <div className="fb-benefit-icon"><Icon size={22} /></div>
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
                <section className="fb-section fb-section-dark">
                    <div className="fb-wrap">
                        <RevealCard>
                            <p className="fb-eyebrow">Industries Served</p>
                            <h2 className="fb-h2 fb-h2-light">Billing &amp; Invoicing Software for Businesses Across Tamil Nadu</h2>
                            <p className="fb-lead fb-lead-dark" style={{ maxWidth: 600 }}>Different industries need invoicing workflows that reflect their products, services, customers and payment arrangements.</p>
                        </RevealCard>
                        <div className="fb-ind-grid" style={{ marginTop: 40 }}>
                            {industries.map(([Icon, title, desc], i) => (
                                <RevealCard key={i} delay={i * 70}>
                                    <div className="fb-ind-card">
                                        <div className="fb-ind-icon"><Icon size={24} /></div>
                                        <h4>{title}</h4>
                                        <p>{desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                        <RevealCard delay={200}>
                            <div className="fb-ind-regional">
                                <strong>Regional Focus:</strong> Tirunelveli, Tenkasi, Sankarankovil, Madurai, Thoothukudi, Kanyakumari and other markets across Tamil Nadu.
                            </div>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S08 COMPARISON ─────────────────────────────────── */}
                <section className="fb-section fb-section-soft">
                    <div className="fb-wrap">
                        <RevealCard>
                            <p className="fb-eyebrow">Software vs Manual</p>
                            <h2 className="fb-h2">Billing Software vs <span>Excel-Based Invoice Management</span></h2>
                        </RevealCard>
                        <RevealCard delay={100}>
                            <div style={{ marginTop: 32, overflowX: 'auto' }}>
                                <table className="fb-comp-table">
                                    <thead>
                                        <tr>
                                            <th>Billing Activity</th>
                                            <th>Manual Invoicing</th>
                                            <th>Billing Software</th>
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
                            <div className="fb-comp-note">
                                <strong>When Should a Small Business Move from Excel to Billing Software?</strong><br /><br />
                                Excel can be suitable for businesses with a small number of transactions and straightforward invoicing requirements. Dedicated billing software becomes more useful when businesses need to prepare invoices regularly, manage many customers, track outstanding payments or maintain consistent transaction records. The decision should reflect transaction volume, available budget, business processes and reporting requirements.
                            </div>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S09 BUYER GUIDE ────────────────────────────────── */}
                <section className="fb-section">
                    <div className="fb-wrap">
                        <RevealCard>
                            <p className="fb-eyebrow">Buyer Guide</p>
                            <h2 className="fb-h2">How to Choose the <span>Best Invoicing Software</span> for Small Business</h2>
                            <p className="fb-lead" style={{ maxWidth: 640 }}>The best invoicing software for small business operations is the solution that fits the organization's billing processes, transaction volume, budget and reporting requirements.</p>
                        </RevealCard>
                        <div className="fb-buyer-grid" style={{ marginTop: 40 }}>
                            <div>
                                <div className="fb-criteria-list">
                                    {criteria.map(([num, title, desc], i) => (
                                        <RevealCard key={i} delay={i * 60}>
                                            <div className="fb-crit-item">
                                                <div className="fb-crit-num">{num}</div>
                                                <div>
                                                    <h4>{title}</h4>
                                                    <p>{desc}</p>
                                                </div>
                                            </div>
                                        </RevealCard>
                                    ))}
                                </div>
                                <RevealCard delay={200}>
                                    <div className="fb-suitability">
                                        <h4>Is Fly Bill Suitable for Your Business?</h4>
                                        <p>Fly Bill is being positioned for small businesses seeking structured invoicing and billing management. Its suitability should be assessed against your required features, transaction volume, existing software and the actual capabilities of the product.</p>
                                        <Link to="/contact" className="fb-btn-primary" style={{ fontSize: '0.85rem', padding: '11px 20px' }}>Discuss Whether Fly Bill Fits Your Business <ArrowRight size={14} /></Link>
                                    </div>
                                </RevealCard>
                            </div>
                            <RevealCard delay={150}>
                                <BuyerDashboard />
                            </RevealCard>
                        </div>
                    </div>
                </section>

                {/* ── S10 CONSIDERATIONS ─────────────────────────────── */}
                <section className="fb-section fb-section-dark">
                    <div className="fb-wrap">
                        <RevealCard>
                            <p className="fb-eyebrow">Important Considerations</p>
                            <h2 className="fb-h2 fb-h2-light">Important Considerations When Choosing an Invoice Management System</h2>
                            <p className="fb-lead fb-lead-dark" style={{ maxWidth: 640 }}>Billing software may handle customer contact details, transaction records, payment information and tax-related invoice fields. Businesses should evaluate accuracy, data protection and implementation requirements before selecting a solution.</p>
                        </RevealCard>
                        <div className="fb-cons-grid" style={{ marginTop: 40 }}>
                            <div>
                                <div className="fb-cons-list">
                                    {considerations.map(([num, title, desc], i) => (
                                        <RevealCard key={i} delay={i * 80}>
                                            <div className="fb-cons-item">
                                                <div className="fb-cons-num">{num}</div>
                                                <div>
                                                    <h4>{title}</h4>
                                                    <p>{desc}</p>
                                                </div>
                                            </div>
                                        </RevealCard>
                                    ))}
                                </div>
                                <RevealCard delay={200}>
                                    <div className="fb-cons-warn">
                                        ⚠ Billing software does not automatically guarantee GST compliance. Businesses should verify applicable tax rules and invoice requirements with a qualified tax professional.
                                    </div>
                                </RevealCard>
                            </div>
                            <RevealCard delay={150}>
                                <ConsiderationsDash />
                            </RevealCard>
                        </div>
                    </div>
                </section>

                {/* ── S11 WHY FLYTOWARDS ─────────────────────────────── */}
                <section className="fb-section fb-section-soft">
                    <div className="fb-wrap">
                        <div className="fb-why-grid">
                            <RevealCard>
                                <p className="fb-eyebrow">Why FlyTowards</p>
                                <h2 className="fb-h2">Why Consider Fly Bill by <span>FlyTowards Digital Innovation?</span></h2>
                                <p className="fb-lead">Choosing billing and invoicing software involves more than comparing invoice templates. Businesses should evaluate their daily billing activities, customer information, payment processes, reporting needs and software usability.</p>
                                <p className="fb-lead">FlyTowards approaches software planning through business requirements, practical workflows and implementation considerations.</p>
                            </RevealCard>
                            <div>
                                <div className="fb-diff-list">
                                    {differentiators.map(([num, title, desc], i) => (
                                        <RevealCard key={i} delay={i * 80}>
                                            <div className="fb-diff-item">
                                                <div className="fb-diff-num">{num}</div>
                                                <div>
                                                    <h4>{title}</h4>
                                                    <p>{desc}</p>
                                                </div>
                                            </div>
                                        </RevealCard>
                                    ))}
                                </div>
                                <RevealCard delay={200}>
                                    <div className="fb-why-cta">
                                        <Link to="/contact" className="fb-btn-primary">Discuss Your Fly Bill Software Requirements <ArrowRight size={16} /></Link>
                                    </div>
                                </RevealCard>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── S12 FAQ ────────────────────────────────────────── */}
                <section className="fb-section">
                    <div className="fb-wrap" style={{ maxWidth: 800 }}>
                        <RevealCard>
                            <p className="fb-eyebrow">FAQ</p>
                            <h2 className="fb-h2">Frequently Asked Questions About <span>Fly Bill Billing Software</span></h2>
                        </RevealCard>
                        <RevealCard delay={100}>
                            <div className="fb-faq-list" style={{ marginTop: 32 }}>
                                {faqs.map(([q, a], i) => <FaqItem key={i} q={q} a={a} />)}
                            </div>
                        </RevealCard>
                    </div>
                </section>

                {/* ── S13 FINAL CTA ──────────────────────────────────── */}
                <section className="fb-cta-banner">
                    <div className="fb-wrap">
                        <RevealCard>
                            <h2>Make Business Billing Simpler with Fly Bill</h2>
                            <p>Whether you run a retail shop, wholesale business, service company or growing enterprise, organized invoice preparation and payment records can help simplify daily billing activities. Explore Fly Bill by FlyTowards Digital Innovation for small business invoicing, customer billing management and sales record requirements across Tamil Nadu.</p>
                            <div className="fb-cta-row">
                                <Link to="/contact" className="fb-btn-primary fb-btn-dark">Request a Fly Bill Demo <ArrowRight size={16} /></Link>
                                <Link to="/contact" className="fb-btn-outline fb-btn-outline-light">Get a Fly Bill Consultation</Link>
                            </div>
                            <p style={{ marginTop: 20, fontSize: '0.78rem', color: '#555' }}>Confirm product availability, supported features and demo arrangements before publishing these calls to action.</p>
                        </RevealCard>
                    </div>
                </section>

            </div>
        </>
    );
}
