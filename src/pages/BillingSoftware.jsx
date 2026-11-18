import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, CheckCircle2, FileText, Users, Receipt,
    TrendingUp, AlertCircle, ChevronDown, HelpCircle, ShieldCheck,
    Store, Truck, Wrench, Factory, Briefcase, Building2,
    Clock3, Database, ClipboardList, BarChart3, Settings2,
    BadgePercent, CreditCard, BookOpen, FileMinus, Layers, Package
} from 'lucide-react';

/* ─── Static data ─────────────────────────────────────────────────── */
const highlights = [
    'Invoice creation and billing records',
    'Customer and product information management',
    'Payment tracking and sales reporting',
    'Configurable GST billing requirements',
];

const overview = [
    [FileText,   'Invoice Management',         'Create and maintain customer invoices and billing records.'],
    [Users,      'Customer & Product Records',  'Organize customer information, products, services and pricing details.'],
    [CreditCard, 'Payment Tracking',            'Record payments, balances and invoice payment status.'],
    [BarChart3,  'Sales Reporting',             'Review transaction summaries and relevant billing information.'],
];

const challenges = [
    ['Manual Invoice Preparation',   'Preparing invoices manually can require repeated data entry and make billing slower during busy business hours.'],
    ['Incorrect Calculations',        'Manual entry of quantities, prices, discounts and taxes can lead to billing discrepancies.'],
    ['Disorganized Customer Records', 'Customer contact details, purchase histories and payment information may be spread across multiple files.'],
    ['Difficulty Tracking Payments',  'Businesses may struggle to identify unpaid invoices, partial payments and outstanding balances.'],
    ['GST Billing Requirements',      'Businesses registered under GST need appropriate invoice details, tax treatment and records based on applicable requirements.'],
    ['Limited Sales Visibility',      'Without structured reporting, business owners may find it difficult to review daily sales, invoice totals and pending payments.'],
];

const features = [
    ['Invoice Creation & Management',   'Create invoices using customer information, product or service details, quantities, pricing and applicable charges.',           'Invoice numbering · Invoice dates · Line items · Discounts · Totals · Invoice templates · Printable invoices'],
    ['Customer Management',             'Maintain customer profiles and billing-related information in a structured system.',                                             'Contact details · Billing addresses · GSTIN fields · Invoice history · Outstanding balances'],
    ['Product & Service Management',    'Organize products and services used in billing transactions.',                                                                  'Product names · Service descriptions · Item codes · Prices · Units of measurement · Tax settings'],
    ['GST Billing Configuration',       'Prepare invoices using configured tax details and applicable GST treatment.',                                                   'GSTIN information · HSN/SAC fields · CGST · SGST · IGST · Invoice-level tax calculations'],
    ['Payment & Outstanding Tracking',  'Record customer payments and review invoice balances.',                                                                         'Payment entries · Payment methods · Partial payments · Outstanding amounts · Payment status'],
    ['Sales Reports & Billing Records', 'Maintain transaction information for business review and authorized administrative use.',                                        'Daily sales summaries · Invoice registers · Customer-wise sales · Payment reports · Tax-related summaries'],
];

const steps = [
    ['Maintain Business Information', 'Configure relevant business details, invoice preferences and supported billing settings.'],
    ['Add Customers & Products',      'Maintain customer records, product or service information, prices and applicable tax details.'],
    ['Create an Invoice',             'Select the customer, add products or services, enter quantities and apply relevant pricing adjustments.'],
    ['Calculate Invoice Totals',      'Calculate line-item amounts, discounts and applicable taxes according to configured rules.'],
    ['Record Customer Payments',      'Update payment information and maintain invoice balances according to supported workflows.'],
    ['Review Sales Reports',          'Access invoice records, sales summaries and outstanding payment information.'],
];

const benefits = [
    [Clock3,        'Simplify Everyday Billing',         'A structured invoicing system can make invoice preparation more consistent and reduce repeated administrative work.'],
    [CheckCircle2,  'Reduce Manual Calculation Errors',  'Configured pricing, discounts and tax rules can help reduce calculation inconsistencies when correctly maintained.'],
    [Database,      'Organize Customer Billing Info',    'Maintain relevant customer details, invoices and payment records within an organized application.'],
    [ClipboardList, 'Improve Payment Visibility',        'Track recorded payments, invoice balances and outstanding amounts to support customer follow-ups.'],
    [TrendingUp,    'Support Business Growth',           'A suitable billing application can be planned to accommodate additional customers, products, users and changing operational requirements.'],
];

const industries = [
    [Store,     'Retail Shops & Supermarkets',    'Manage product billing, sales records, discounts and customer transactions.'],
    [Truck,     'Wholesale & Trading Businesses', 'Prepare invoices for bulk orders, maintain customer billing information and organize outstanding payment records.'],
    [Wrench,    'Service Providers',              'Create service invoices, manage customer details and track payments for completed work.'],
    [Factory,   'Manufacturing Businesses',       'Maintain product sales invoices, customer transactions and relevant business billing records.'],
    [Briefcase, 'Professional Services',          'Prepare invoices for consulting, design, technical services and other professional activities.'],
    [Building2, 'Small & Growing Enterprises',   'Organize billing across employees, customers and business operations as transaction volumes increase.'],
];

const comparisons = [
    ['Invoice preparation',  'Manual document entry',              'Structured invoice creation'],
    ['Customer details',     'Re-entered or copied between files', 'Stored customer profiles'],
    ['Product pricing',      'Manual price entry',                 'Maintained product or service records'],
    ['Tax calculations',     'Formulas or manual calculations',    'Configured calculation rules'],
    ['Payment tracking',     'Separate registers or spreadsheets', 'Linked payment and invoice records'],
    ['Sales reports',        'Manual consolidation',               'Structured sales summaries'],
    ['Invoice history',      'Multiple files and folders',         'Organized invoice records'],
];

const gstItems = [
    [BadgePercent,  'GSTIN & Business Details',  'Maintain relevant supplier and customer GST information where required.'],
    [Layers,        'HSN & SAC Classification',   'Record applicable goods or services classification information.'],
    [Receipt,       'CGST, SGST & IGST',          'Apply the relevant tax components based on transaction-specific GST rules.'],
    [BookOpen,      'Invoice Numbering & Records', 'Maintain appropriate invoice identifiers, dates and transaction details.'],
    [FileMinus,     'Credit & Debit Notes',        'Evaluate whether the business requires supported credit note and debit note workflows.'],
    [ClipboardList, 'E-Invoicing & E-Way Bill',    'Assess applicability and supported integrations separately where required by law.'],
];

const security = [
    ['Business Data Security',           'Consider user authentication, role-based permissions, secure data handling, backups and relevant activity records.'],
    ['Invoice Accuracy & Configuration', 'Validate product pricing, discounts, tax settings, rounding rules and invoice calculations against approved business requirements.'],
    ['Existing Accounting & Inventory',  'Review whether the billing application needs to exchange data with accounting software, inventory systems or other business applications.'],
    ['Data Migration & User Training',   'Assess existing customer records, product lists, invoice histories, user responsibilities and training needs before adopting a new system.'],
];

const whyFly = [
    ['Business Requirement Assessment', 'Understand your billing processes, customer types, transaction volumes and existing systems.'],
    ['Configurable Billing Planning',   'Identify relevant invoice formats, product information, pricing rules, payment workflows and reporting requirements.'],
    ['Practical User Experience',       'Plan billing interfaces around the needs of shop staff, accountants, administrators and business owners.'],
    ['Integration & Implementation',    'Review accounting, inventory and other existing software before defining technical integration requirements.'],
];

const faqs = [
    ['What is billing software?',                                              'Billing software is an application used to create invoices, calculate transaction amounts, maintain customer billing information, record payments and organize sales records. Features vary between products.'],
    ['What is the best billing software for small business?',                  'The best billing software depends on transaction volume, GST requirements, ease of use, invoice customization, payment tracking, reporting, integration needs and budget. Compare products against your actual workflows.'],
    ['Is billing software suitable for small retail shops?',                   "Yes. Billing software can help retail shops prepare invoices, organize product information, record sales and maintain transaction histories. Required features depend on the shop's operations."],
    ['What is the difference between billing and invoicing software?',          'Billing software focuses on creating bills, calculating transaction amounts and recording sales. Invoicing software emphasizes preparing and managing customer invoices and payment requests. Many applications combine both.'],
    ['Can GST billing software calculate CGST, SGST and IGST?',                'Some GST billing systems calculate CGST, SGST and IGST using configured tax rules. Correct treatment depends on transaction details, applicable law and maintained tax settings.'],
    ['Can billing software track customer payments and outstanding balances?',  'Many billing applications provide payment recording and outstanding invoice tracking. Exact functionality, including partial payments and customer statements, depends on the product.'],
    ['Can billing software integrate with inventory or accounting systems?',    'Integration may be possible through compatible APIs, supported data exchange methods or authorized system connections. Feasibility depends on the applications involved and available technical interfaces.'],
    ['How much does billing software cost in Tamil Nadu?',                      'Billing software pricing depends on the product, number of users, features, deployment model, customization, integrations and support requirements. Request a quotation based on your operational needs.'],
];

/* ─── Scroll-reveal hook ─────────────────────────────────────────── */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('bs-visible'); obs.disconnect(); } },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

/* ─── Sub-components ─────────────────────────────────────────────── */
const Heading = ({ eyebrow, title, text }) => (
    <header className="bs-heading">
        <span className="bs-tag">{eyebrow}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
    </header>
);

function RevealCard({ children, delay = 0, className = '' }) {
    const ref = useReveal();
    return (
        <article ref={ref} className={`bs-card bs-reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
            {children}
        </article>
    );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function BillingSoftware() {
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Billing Software for Small Businesses in Tamil Nadu | FlyTowards';
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Explore FlyTowards Billing Software for invoice creation, customer management, GST billing, payment tracking and sales reporting. Planned for small businesses across Tamil Nadu.');
    }, []);

    return (
        <main className="bs-page">
            <style>{`
/* ══════════════════════════════════════════════════════════
   BILLING SOFTWARE PAGE  —  bs-* namespace (no conflicts)
══════════════════════════════════════════════════════════ */
.bs-page{
  --ink:#182235;--muted:#657185;--line:#e6eaf0;--gold:#facc15;
  --amber:#eab308;--dark:#1c2638;--soft:#f7f8fa;
  background:#fff;color:var(--ink);
  font-family:'Outfit',sans-serif;overflow-x:hidden
}
.bs-page *{box-sizing:border-box}
.bs-wrap{width:min(1180px,90%);margin:auto}
.bs-section{padding:80px 0}
.bs-soft{background:var(--soft)}

/* ── Tag & heading ── */
.bs-tag{
  display:inline-flex;align-items:center;gap:7px;
  border:1px solid #facc15;background:#fff7cc;color:#1e1b4b;
  border-radius:99px;padding:6px 14px;font-weight:800;
  font-size:.75rem;letter-spacing:.1em;text-transform:uppercase
}
.bs-heading{text-align:center;max-width:860px;margin:0 auto 36px}
.bs-heading h2{font-size:clamp(2rem,4vw,3rem);line-height:1.12;margin:14px 0;font-weight:900;letter-spacing:-.03em;color:#1e1b4b}
.bs-heading h2 span{color:#facc15}
.bs-heading p{color:var(--muted);line-height:1.75;margin:0}

/* ── Buttons ── */
.bs-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:9px;
  padding:14px 22px;border-radius:99px;text-decoration:none;font-weight:800;
  transition:transform .2s,box-shadow .2s;font-family:inherit;border:0;cursor:pointer
}
.bs-btn:hover{transform:translateY(-3px);box-shadow:0 10px 24px #17203324}
.bs-primary{background:var(--dark);color:#fff}
.bs-primary svg{color:var(--gold)}
.bs-secondary{border:1px solid #cbd2dc!important;background:#fff;color:#273449}

/* ── Hero ── */
.bs-hero{
  min-height:650px;padding:140px 0 80px;display:flex;align-items:center;
  background:
    radial-gradient(ellipse at 80% 28%,#fff4c4,transparent 36%),
    radial-gradient(ellipse at 4%  75%,#e9fbfc,transparent 36%)
}
.bs-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}
.bs-page h1{font-size:clamp(2.6rem,5.5vw,4.6rem);line-height:1.04;letter-spacing:-.05em;margin:20px 0;font-weight:900;color:#1e1b4b}
.bs-page h1 em{display:block;color:#facc15;font-style:normal}
.bs-lead{font-size:1.07rem;line-height:1.72;color:#586579}
.bs-actions{display:flex;gap:11px;flex-wrap:wrap;margin:24px 0}
.bs-hls{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.bs-hl{display:flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid var(--line);border-radius:12px;font-size:.84rem;font-weight:650;background:#ffffffcf}
.bs-hl svg{color:#9a7900;flex:none}
.bs-note{font-size:.78rem;color:#798397;line-height:1.5;margin-top:12px}

/* ── Animated billing dashboard ── */
.bs-dashboard{
  position:relative;padding:18px;border-radius:26px;
  background:linear-gradient(145deg,#243148,#111827);
  box-shadow:0 28px 70px #11182738
}
.bs-dash-top{display:flex;justify-content:space-between;color:#fff;padding:4px 4px 14px;font-weight:750}
.bs-dash-body{background:#f8fafc;border-radius:18px;padding:18px}
.bs-statrow{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:12px}
.bs-stat{background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px;font-size:.82rem}
.bs-stat strong{display:block;margin-top:4px;font-size:.95rem}
.bs-dash-list{margin-top:12px;background:#fff;padding:12px;border-radius:12px}
.bs-row{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid #eef0f3;font-size:.8rem}
.bs-row:last-child{border:0}
.bs-row b{color:#1a7f56;font-weight:800}
.bs-badge{position:absolute;right:-8px;bottom:22px;background:#fff;border-radius:12px;padding:11px 13px;box-shadow:0 10px 28px #11182724;font-size:.72rem;font-weight:750;display:flex;align-items:center;gap:6px}
/* animated invoice underline */
.bs-inv-line{height:3px;background:linear-gradient(90deg,#facc15,#f59e0b);border-radius:4px;width:0;animation:bsLineGrow 1.8s ease 1s forwards}
@keyframes bsLineGrow{to{width:100%}}

/* ── Cards / grid ── */
.bs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.bs-grid-2{grid-template-columns:repeat(2,1fr)}
.bs-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 5px 20px #17203309;transition:transform .25s,box-shadow .25s}
.bs-card:hover{transform:translateY(-5px);box-shadow:0 16px 32px #17203318}
.bs-card h3{font-size:1.05rem;margin:0 0 8px}
.bs-card p{color:var(--muted);font-size:.9rem;line-height:1.65;margin:0}
.bs-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:12px;background:#fff5be;color:#927000;margin-bottom:14px}
.bs-num{font-size:.74rem;color:#967600;font-weight:900;letter-spacing:.1em;margin-bottom:9px}
.bs-chip{display:inline-block;background:#f1f3f6;color:#616d7f;border-radius:7px;padding:5px 7px;font-size:.7rem;margin:8px 3px 0 0}

/* ── Scroll-reveal ── */
.bs-reveal{opacity:0;transform:translateY(24px);transition:opacity .65s ease,transform .65s ease}
.bs-visible{opacity:1!important;transform:translateY(0)!important}

/* ── Steps ── */
.bs-steps{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
.bs-step{background:#fff;border:1px solid var(--line);border-radius:15px;padding:14px 12px}
.bs-step-num{display:grid;place-items:center;width:33px;height:33px;border-radius:50%;background:var(--dark);color:var(--gold);margin-bottom:11px;font-weight:900;font-size:.85rem}
.bs-step h3{font-size:.88rem;margin:0 0 6px}
.bs-step p{font-size:.78rem;color:var(--muted);line-height:1.5;margin:0}
.bs-flow{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:7px;margin-top:20px;font-size:.76rem;font-weight:750}
.bs-flow span{border:1px solid var(--line);padding:7px 12px;border-radius:99px;background:#fff}
.bs-flow-arr{color:#94a3b8}

/* ── Benefits ── */
.bs-benefits-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:40px;align-items:center}
.bs-visual{background:linear-gradient(145deg,#243148,#111827);border-radius:22px;padding:24px;color:#fff}
.bs-vrow{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid #ffffff22;color:#e5e7eb}
.bs-vrow b{color:#facc15}
.bs-benefit{display:grid;grid-template-columns:36px 1fr;gap:11px;padding:12px 0;border-bottom:1px solid var(--line)}
.bs-benefit:last-child{border:0}
.bs-benefit i{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:#fff5be;color:#927000;font-style:normal}
.bs-benefit h3{font-size:.96rem;margin:0 0 4px}
.bs-benefit p{font-size:.86rem;line-height:1.5;color:var(--muted);margin:0}

/* ── Table ── */
.bs-table-wrap{overflow:auto;border:1px solid var(--line);border-radius:16px}
.bs-table{width:100%;min-width:620px;border-collapse:collapse}
.bs-table th,.bs-table td{text-align:left;padding:13px 15px;border-bottom:1px solid #edf0f3}
.bs-table th{background:var(--dark);color:#fff}
.bs-table td{font-size:.86rem;color:#566174}
.bs-table td:last-child{font-weight:700;color:#29364a}
.bs-table tr:last-child td{border:0}
.bs-callout{background:var(--dark);color:#fff;padding:22px;border-radius:17px;margin-top:18px}
.bs-callout p{color:#d4d9e2;line-height:1.65;margin:8px 0 0}

/* ── GST ── */
.bs-gst-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:44px;align-items:start}
.bs-gst-items{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-top:20px}
.bs-gst-card{display:flex;gap:11px;align-items:flex-start;padding:14px;border:1px solid var(--line);border-radius:14px;background:#fff}
.bs-gst-card svg{flex:none;color:#9a7900;margin-top:2px}
.bs-gst-card h4{font-size:.9rem;margin:0 0 4px}
.bs-gst-card p{font-size:.82rem;color:var(--muted);line-height:1.5;margin:0}
.bs-inv-preview{background:var(--dark);border-radius:20px;padding:20px;color:#fff;position:sticky;top:100px}
.bs-inv-preview h4{color:var(--gold);font-size:.82rem;letter-spacing:.06em;text-transform:uppercase;margin:0 0 14px}
.bs-inv-row{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid #ffffff18;font-size:.82rem}
.bs-inv-row:last-child{border:0}
.bs-inv-label{color:#94a3b8}
.bs-inv-val{color:#fff;font-weight:700}
.bs-inv-total{background:#facc15;color:#1c2638;border-radius:10px;padding:12px;margin-top:14px;display:flex;justify-content:space-between;font-weight:900}

/* ── Security ── */
.bs-security{display:grid;grid-template-columns:1fr 1fr;gap:13px}
.bs-sec-item{display:grid;grid-template-columns:38px 1fr;gap:11px;border:1px solid var(--line);border-radius:15px;padding:18px}
.bs-sec-num{display:grid;place-items:center;width:36px;height:36px;border-radius:10px;background:#fff5be;color:#806600;font-weight:900;font-style:normal}
.bs-sec-item h3{font-size:.94rem;margin:0 0 5px}
.bs-sec-item p{font-size:.84rem;color:var(--muted);line-height:1.5;margin:0}

/* ── Warning ── */
.bs-warning{display:flex;gap:9px;align-items:flex-start;padding:13px 15px;margin-top:18px;border:1px solid #f1df8d;border-radius:13px;background:#fffbea;color:#675623;font-size:.85rem;line-height:1.55}
.bs-warning svg{flex:none;color:#a98500}

/* ── FAQ ── */
.bs-faq{max-width:900px;margin:auto;display:grid;gap:9px}
.bs-faq-item{border:1px solid var(--line);border-radius:13px;overflow:hidden}
.bs-faq button{border:0;background:#fff;width:100%;padding:15px 18px;text-align:left;display:flex;justify-content:space-between;gap:10px;font:inherit;font-weight:750;color:#29364a;cursor:pointer}
.bs-faq button svg{flex:none;transition:transform .22s}
.bs-answer{padding:0 18px 16px;color:var(--muted);line-height:1.65;font-size:.9rem}

/* ── Final CTA ── */
.bs-final{padding:50px 28px;text-align:center;color:#fff;background:radial-gradient(ellipse at 90% 0,#3c4657,#111827 64%);border-radius:26px}
.bs-final h2{font-size:clamp(2rem,4vw,3rem);margin:16px auto;max-width:820px;color:#facc15}
.bs-final p{max-width:790px;color:#d2d8e1;line-height:1.65;margin:0 auto}

/* ── Animations ── */
.bs-float{animation:bsFloat 6s ease-in-out infinite}
@keyframes bsFloat{50%{transform:translateY(-9px)}}

/* ── Responsive ── */
@media(max-width:960px){
  .bs-hero-grid,.bs-benefits-grid,.bs-gst-grid{grid-template-columns:1fr}
  .bs-dashboard{max-width:580px;margin:auto}
  .bs-grid{grid-template-columns:repeat(2,1fr)}
  .bs-steps{grid-template-columns:repeat(3,1fr)}
  .bs-gst-items{grid-template-columns:1fr}
  .bs-inv-preview{position:static}
}
@media(max-width:620px){
  .bs-section{padding:58px 0}
  .bs-wrap{width:calc(100% - 28px)}
  .bs-hero{padding:120px 0 56px}
  .bs-page h1{font-size:clamp(2.4rem,13vw,3.6rem)}
  .bs-grid,.bs-grid-2,.bs-hls,.bs-steps,.bs-security,.bs-gst-items{grid-template-columns:1fr}
  .bs-actions .bs-btn{width:100%}
  .bs-badge{right:4px;bottom:4px}
}
@media(prefers-reduced-motion:reduce){
  .bs-reveal,.bs-float,.bs-inv-line{animation:none!important;opacity:1!important;transform:none!important}
  .bs-card,.bs-btn{transition:none!important}
}
            `}</style>

            {/* ══ 01 — HERO ══════════════════════════════════════════════════ */}
            <section className="bs-hero">
                <div className="bs-wrap bs-hero-grid">
                    {/* Left */}
                    <div>
                        <span className="bs-tag"><FileText size={15}/> Billing software · Tamil Nadu</span>
                        <h1>Billing Software for Small Businesses <em>in Tamil Nadu</em></h1>
                        <p className="bs-lead">Simplify Invoicing, Sales Records, Payment Tracking and Business Billing</p>
                        <p className="bs-lead" style={{marginTop:10}}>
                            Managing invoices, customer details, payment records and daily sales through spreadsheets or manual
                            registers can make billing difficult as business transactions increase. FlyTowards Billing Software is a
                            proposed billing and invoicing solution for small and growing businesses across Tamil Nadu, particularly
                            South Tamil Nadu.
                        </p>
                        <div className="bs-actions">
                            <Link to="/contact" className="bs-btn bs-primary">Request a Billing Software Demo <ArrowRight size={17}/></Link>
                            <Link to="/contact" className="bs-btn bs-secondary">Discuss Your Billing Requirements</Link>
                        </div>
                        <div className="bs-hls">
                            {highlights.map(x => (
                                <div className="bs-hl" key={x}><CheckCircle2 size={16}/>{x}</div>
                            ))}
                        </div>
                        <p className="bs-note">Product capabilities and demo availability are subject to confirmation.</p>
                    </div>

                    {/* Right – animated billing dashboard */}
                    <div className="bs-dashboard bs-float" aria-label="Illustrative billing dashboard preview">
                        <div className="bs-dash-top">
                            <span>Billing overview</span>
                            <span style={{color:'#facc15'}}>Illustrative</span>
                        </div>
                        <div className="bs-dash-body">
                            <small style={{fontSize:'.72rem',letterSpacing:'.05em',color:'#8898aa'}}>INVOICE SUMMARY</small>
                            <h2 style={{margin:'6px 0 0',fontSize:'1.35rem'}}>Invoice Creation</h2>
                            <div className="bs-inv-line" style={{marginTop:10}}/>
                            <div className="bs-statrow">
                                <div className="bs-stat">Customer<strong>Rajan Stores</strong></div>
                                <div className="bs-stat">Status<strong style={{color:'#1a7f56'}}>Paid</strong></div>
                                <div className="bs-stat">Invoice No<strong>#INV-0042</strong></div>
                                <div className="bs-stat">Total<strong>₹14,560</strong></div>
                            </div>
                            <div className="bs-dash-list" style={{marginTop:12}}>
                                <div style={{fontSize:'.72rem',letterSpacing:'.05em',color:'#8898aa',marginBottom:4}}>LINE ITEMS</div>
                                {[['Rice (50 kg)','₹3,500'],['Cooking Oil (10L)','₹2,200'],['GST @ 5%','₹288'],['Total Amount','₹14,560']].map(([k,v])=>(
                                    <div className="bs-row" key={k}><span>{k}</span><b>{v}</b></div>
                                ))}
                            </div>
                        </div>
                        <div className="bs-badge"><Receipt size={13}/> Concept preview · not live product UI</div>
                    </div>
                </div>
            </section>

            {/* ══ 02 — PRODUCT OVERVIEW ══════════════════════════════════════ */}
            <section className="bs-section">
                <div className="bs-wrap">
                    <Heading eyebrow="Product overview" title={<>What Is Billing Software and How <span>Does It Work?</span></>}/>
                    <p style={{textAlign:'center',maxWidth:860,margin:'-10px auto 30px',color:'var(--muted)',lineHeight:1.75}}>
                        Billing software is a business application used to create invoices, record sales transactions, calculate applicable
                        charges and taxes, manage customer billing information and maintain payment records. FlyTowards Billing Software is
                        being positioned around the practical requirements of businesses that need organized billing, invoice management and
                        sales information.
                    </p>
                    <div className="bs-grid bs-grid-2">
                        {overview.map(([Icon,title,text],i) => (
                            <RevealCard key={title} delay={i*80}>
                                <div className="bs-icon"><Icon size={21}/></div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 03 — CHALLENGES ════════════════════════════════════════════ */}
            <section className="bs-section bs-soft">
                <div className="bs-wrap">
                    <Heading eyebrow="Everyday operations" title="Common Billing Challenges Faced by Small Businesses"
                        text="Billing tasks become harder when records, calculations and payment details are spread across different places."/>
                    <div className="bs-grid">
                        {challenges.map(([title,text],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="bs-num">CHALLENGE 0{i+1}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 04 — FEATURES ══════════════════════════════════════════════ */}
            <section className="bs-section">
                <div className="bs-wrap">
                    <Heading eyebrow="Proposed capabilities" title="Key Features Planned for FlyTowards Billing Software"
                        text="The following are proposed capabilities. Availability and configuration must be verified before publication."/>
                    <div className="bs-grid">
                        {features.map(([title,text,tags],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="bs-num">0{i+1} · PLANNED</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                                <div style={{marginTop:10}}>
                                    {tags.split(' · ').map(t => <span className="bs-chip" key={t}>{t}</span>)}
                                </div>
                            </RevealCard>
                        ))}
                    </div>
                    <div className="bs-warning"><HelpCircle size={18}/>Feature examples describe planning scope only. Confirm product support before relying on any capability.</div>
                </div>
            </section>

            {/* ══ 05 — HOW IT WORKS ══════════════════════════════════════════ */}
            <section className="bs-section bs-soft">
                <div className="bs-wrap">
                    <Heading eyebrow="Illustrative workflow" title={<>How Does Billing Software Simplify <span>Invoice Processing?</span></>}
                        text="Billing software helps organize the steps involved in creating invoices, calculating amounts and maintaining transaction records."/>
                    <div className="bs-steps">
                        {steps.map(([title,text],i) => (
                            <article className="bs-step" key={title}>
                                <div className="bs-step-num">{String(i+1).padStart(2,'0')}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                    <div className="bs-flow">
                        {['Customer Selection','Product / Service Entry','Invoice Calculation','Invoice Generation','Payment Update','Sales Report'].map((x,i,arr) => (
                            <span key={x + i}>{x}{i < arr.length-1 ? <span className="bs-flow-arr"> → </span> : ''}</span>
                        ))}
                    </div>
                    <div className="bs-warning" style={{marginTop:20}}><HelpCircle size={18}/>Actual workflows depend on the product's verified functionality and business configuration.</div>
                </div>
            </section>

            {/* ══ 06 — BENEFITS ══════════════════════════════════════════════ */}
            <section className="bs-section">
                <div className="bs-wrap">
                    <div className="bs-benefits-grid">
                        {/* Left illustration */}
                        <div className="bs-visual">
                            <span className="bs-tag">Billing dashboard</span>
                            <h3 style={{marginTop:14,color:'#fff'}}>Daily billing overview</h3>
                            {[
                                ['Invoices today',      '12 created'],
                                ['Payments received',   '₹48,200'],
                                ['Outstanding balance', '₹9,750'],
                                ['GST collected',       '₹2,410'],
                                ['Customer records',    '384 total'],
                            ].map(([k,v]) => (
                                <div className="bs-vrow" key={k}><span>{k}</span><b>{v}</b></div>
                            ))}
                            <p className="bs-note" style={{color:'#c5ccd7',marginTop:14}}>Illustrative figures · not live product data</p>
                        </div>

                        {/* Right benefits list */}
                        <div>
                            <Heading eyebrow="Business benefits" title="Benefits of Billing Software for Small Businesses"
                                text="A structured invoicing system can simplify administration and make billing information easier to review."/>
                            {benefits.map(([Icon,title,text]) => (
                                <div className="bs-benefit" key={title}>
                                    <i><Icon size={16}/></i>
                                    <div><h3>{title}</h3><p>{text}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 07 — INDUSTRIES ════════════════════════════════════════════ */}
            <section className="bs-section bs-soft">
                <div className="bs-wrap">
                    <Heading eyebrow="Regional requirements" title={<>Billing Software for Businesses Across <span>Tamil Nadu</span></>}
                        text="Different businesses need billing applications that reflect their transaction types, customer requirements and reporting needs."/>
                    <div className="bs-grid">
                        {industries.map(([Icon,title,text],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="bs-icon"><Icon size={21}/></div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                    <p className="bs-note" style={{textAlign:'center',marginTop:20}}>
                        <b>Regional focus:</b> Tirunelveli, Tenkasi, Sankarankovil, Madurai, Thoothukudi, Kanyakumari and other markets across Tamil Nadu.
                    </p>
                </div>
            </section>

            {/* ══ 08 — COMPARISON TABLE ══════════════════════════════════════ */}
            <section className="bs-section">
                <div className="bs-wrap">
                    <Heading eyebrow="Compare approaches" title={<>Billing Software vs Excel-Based <span>Invoice Management</span></>}
                        text="The right approach depends on transaction volume, tax requirements, budget and the number of people managing billing."/>
                    <div className="bs-table-wrap">
                        <table className="bs-table">
                            <thead><tr><th>Billing Activity</th><th>Manual Billing</th><th>Billing Software</th></tr></thead>
                            <tbody>
                                {comparisons.map(([a,b,c]) => (
                                    <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bs-callout">
                        <h3>Is Billing Software Better Than Excel for Small Businesses?</h3>
                        <p>Excel may be sufficient for businesses with very few transactions and simple invoicing requirements. Billing software becomes more useful when transaction volumes increase, customer payment tracking becomes complex or businesses need consistent invoice formats and organized reporting.</p>
                    </div>
                </div>
            </section>

            {/* ══ 09 — GST BILLING ═══════════════════════════════════════════ */}
            <section className="bs-section bs-soft">
                <div className="bs-wrap">
                    <Heading eyebrow="Tax & compliance" title={<>GST Billing Software for Small <span>Businesses in India</span></>}
                        text="GST billing software helps businesses prepare invoices using configured Goods and Services Tax details and applicable tax treatment."/>
                    <div className="bs-gst-grid">
                        {/* Left */}
                        <div>
                            <p style={{color:'var(--muted)',lineHeight:1.75,marginBottom:18}}>
                                For GST-registered businesses, invoice requirements can depend on the nature of the transaction, customer type,
                                place of supply, applicable tax rate and other statutory conditions. A suitable GST billing application should
                                be evaluated against the business's actual tax and invoicing requirements.
                            </p>
                            <h3 style={{marginBottom:14}}>Important GST Billing Considerations</h3>
                            <div className="bs-gst-items">
                                {gstItems.map(([Icon,title,text]) => (
                                    <div className="bs-gst-card" key={title}>
                                        <Icon size={18}/>
                                        <div><h4>{title}</h4><p>{text}</p></div>
                                    </div>
                                ))}
                            </div>
                            <div className="bs-warning" style={{marginTop:16}}>
                                <ShieldCheck size={18}/>Billing software does not automatically guarantee GST compliance. Tax settings, statutory applicability and regulatory changes should be reviewed with a qualified tax professional.
                            </div>
                            <div className="bs-actions" style={{marginTop:20}}>
                                <Link to="/contact" className="bs-btn bs-primary">Discuss Your GST Billing Requirements <ArrowRight size={16}/></Link>
                            </div>
                        </div>

                        {/* Right – GST invoice preview */}
                        <div className="bs-inv-preview">
                            <h4>Sample GST Invoice Structure · Illustrative</h4>
                            {[
                                ['Invoice No',       '#INV-2026-0051'],
                                ['Date',             '16 Nov 2026'],
                                ['Supplier GSTIN',   '33XXXXX1234Z'],
                                ['Customer',         'ABC Trading Co.'],
                                ['Place of Supply',  'Tamil Nadu'],
                                ['HSN Code',         '1006 (Rice)'],
                                ['Taxable Value',    '₹10,000'],
                                ['CGST @ 2.5%',      '₹250'],
                                ['SGST @ 2.5%',      '₹250'],
                                ['IGST',             'N/A (Intra-state)'],
                            ].map(([k,v]) => (
                                <div className="bs-inv-row" key={k}>
                                    <span className="bs-inv-label">{k}</span>
                                    <span className="bs-inv-val">{v}</span>
                                </div>
                            ))}
                            <div className="bs-inv-total"><span>Total Invoice Amount</span><span>₹10,500</span></div>
                            <p style={{color:'#94a3b8',fontSize:'.72rem',marginTop:12,lineHeight:1.5}}>
                                Illustrative structure only. Actual GST treatment depends on transaction-specific rules and applicable law.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 10 — SECURITY & IMPLEMENTATION ════════════════════════════ */}
            <section className="bs-section">
                <div className="bs-wrap">
                    <Heading eyebrow="Plan with care" title={<>Important Considerations When <span>Choosing Business Invoice Software</span></>}
                        text="Billing applications manage customer information, transaction records and business financial data. Evaluate the following before implementation."/>
                    <div className="bs-security">
                        {security.map(([title,text],i) => (
                            <article className="bs-sec-item" key={title}>
                                <i className="bs-sec-num">0{i+1}</i>
                                <div><h3>{title}</h3><p>{text}</p></div>
                            </article>
                        ))}
                    </div>
                    <div className="bs-warning" style={{marginTop:16}}>
                        <AlertCircle size={18}/>Integration availability, deployment options, backup arrangements and data migration support depend on the verified product and agreed project scope.
                    </div>
                </div>
            </section>

            {/* ══ 11 — WHY FLYTOWARDS ════════════════════════════════════════ */}
            <section className="bs-section bs-soft">
                <div className="bs-wrap">
                    <Heading eyebrow="Planning with FlyTowards" title={<>Why Consider FlyTowards for Billing <span>Software in Tamil Nadu?</span></>}
                        text="FlyTowards approaches software planning through business requirements, user workflows and practical implementation considerations."/>
                    <div className="bs-grid bs-grid-2">
                        {whyFly.map(([title,text],i) => (
                            <RevealCard key={title} delay={i*80}>
                                <div className="bs-num">0{i+1}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                    <div className="bs-actions" style={{justifyContent:'center',marginTop:28}}>
                        <Link to="/contact" className="bs-btn bs-primary">Discuss Your Billing Software Requirements <ArrowRight size={16}/></Link>
                    </div>
                </div>
            </section>

            {/* ══ 12 — FAQ ═══════════════════════════════════════════════════ */}
            <section className="bs-section">
                <div className="bs-wrap">
                    <Heading eyebrow="FAQ" title={<>Frequently Asked Questions About <span>Billing Software</span></>}/>
                    <div className="bs-faq">
                        {faqs.map(([q,a],i) => (
                            <div className="bs-faq-item" key={q}>
                                <button aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                                    <span>{q}</span>
                                    <ChevronDown size={18} style={{transform:openFaq===i?'rotate(180deg)':'none'}}/>
                                </button>
                                {openFaq===i && <div className="bs-answer">{a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 13 — FINAL CTA ═════════════════════════════════════════════ */}
            <section id="contact" className="bs-section" style={{paddingTop:0}}>
                <div className="bs-wrap">
                    <div className="bs-final">
                        <span className="bs-tag">Billing software · Tamil Nadu</span>
                        <h2>Make Business Billing More Organized</h2>
                        <p>
                            Whether you run a retail shop, wholesale business, service company or growing enterprise, a structured billing
                            system can help simplify invoice preparation, customer records and payment tracking across Tamil Nadu.
                        </p>
                        <div className="bs-actions" style={{justifyContent:'center',marginTop:24}}>
                            <Link to="/contact" className="bs-btn bs-primary">Request a Billing Software Demo <ArrowRight size={17}/></Link>
                            <Link to="/contact" className="bs-btn bs-secondary">Get a Billing Software Consultation</Link>
                        </div>
                        <p className="bs-note" style={{color:'#c5ccd7',marginTop:14}}>
                            Confirm product availability, supported features and demo arrangements before publishing these calls to action.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
