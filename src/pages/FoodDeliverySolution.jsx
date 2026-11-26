import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, CheckCircle2, ChevronDown, HelpCircle, AlertCircle,
    ShoppingBag, UtensilsCrossed, Truck, Users, BarChart3, ClipboardList,
    Phone, MapPin, CreditCard, Star, Store, Coffee, Package,
    Building2, Rocket, Clock3, Eye, Layers, Settings2, FileText,
    BadgeCheck, Wifi, Bell, ChefHat, Receipt, Navigation
} from 'lucide-react';

/* ══ Static data ══════════════════════════════════════════════════════ */
const highlights = [
    'Online food ordering and menu management',
    'Restaurant order processing',
    'Delivery assignment and order status tracking',
    'Customer ordering and management workflows',
];

const overview = [
    [ShoppingBag,    'Online Food Ordering',      'Digital ordering workflows for restaurant customers.'],
    [UtensilsCrossed,'Restaurant Order Mgmt',     'Organize incoming orders and preparation status.'],
    [Truck,          'Delivery Coordination',      'Manage delivery assignments and order updates.'],
    [Users,          'Customer & Order Records',   'Maintain customer information and relevant order histories.'],
];

const challenges = [
    ['Manual Order Management',           'Receiving orders through phone calls and messaging applications can make order details difficult to organize during busy periods.'],
    ['Incorrect or Missing Order Info',    'Incomplete customer addresses, unclear menu selections and manual order entry can lead to fulfillment problems.'],
    ['Menu & Pricing Updates',            'Maintaining consistent item availability, pricing and menu information across different ordering channels can become challenging.'],
    ['Delivery Coordination Difficulties','Assigning orders to delivery personnel and communicating order status manually can increase administrative effort.'],
    ['Limited Order Visibility',          'Restaurant managers may struggle to monitor pending, preparing, ready and completed orders through disconnected systems.'],
    ['Customer Communication',            'Providing consistent order updates and maintaining customer information can become difficult without structured workflows.'],
];

const features = [
    ['Restaurant Menu Management',   'Maintain food items, categories, prices and relevant availability information.',                                           'Menu categories · Item descriptions · Prices · Food images · Availability settings · Item variations'],
    ['Online Food Ordering System',  'Allow customers to browse menu items and place food orders through a supported ordering interface.',                       'Menu browsing · Cart management · Order details · Delivery or pickup selection · Order confirmation'],
    ['Restaurant Order Management',  'Organize incoming orders and manage relevant preparation and fulfillment stages.',                                         'New order alerts · Order details · Acceptance status · Preparation status · Order history'],
    ['Delivery Partner Management',  'Coordinate delivery personnel and relevant order assignments.',                                                            'Delivery personnel profiles · Order assignments · Delivery status · Completed delivery records'],
    ['Customer & Payment Mgmt',      'Maintain customer information and relevant order payment records.',                                                        'Customer profiles · Delivery addresses · Order totals · Payment methods · Payment status · Transaction history'],
    ['Restaurant Reports & Dashboards','Review relevant order information and operational performance through structured reports.',                              'Daily order summaries · Order status reports · Sales information · Delivery records · Customer order history'],
];

const steps = [
    ['Customer Browses the Menu',  'Customers view available food items, descriptions, prices and relevant ordering options.'],
    ['Customer Places an Order',   'The customer selects items, provides required details and submits the order through the supported ordering interface.'],
    ['Restaurant Receives Order',  'The restaurant accesses incoming order details and confirms the order according to its operational workflow.'],
    ['Kitchen Prepares the Food',  'Restaurant staff update the preparation stage and organize the order for pickup or delivery.'],
    ['Delivery Is Assigned',       'For delivery orders, authorized staff or supported workflows assign the order to available delivery personnel.'],
    ['Order Is Completed',         'The order is delivered or collected, and relevant order and payment records are updated.'],
];

const benefits = [
    [ClipboardList, 'Organize Online Food Orders',       'Maintain incoming orders and relevant customer information through structured ordering workflows.'],
    [Phone,         'Reduce Manual Order Coordination',  'Digitize selected ordering and status updates to reduce dependence on phone calls and disconnected records.'],
    [Eye,           'Improve Order Visibility',          'Help restaurant staff review pending, preparing, ready and completed orders through suitable management interfaces.'],
    [Truck,         'Support Delivery Operations',       'Organize delivery assignments and order information for authorized restaurant and delivery personnel.'],
    [BarChart3,     'Maintain Business Order Records',   'Use structured reports and order histories to review relevant restaurant sales and fulfillment activities.'],
];

const industries = [
    [UtensilsCrossed, 'Restaurants',                   'Manage online food orders, menu details, kitchen preparation stages and delivery or pickup workflows.'],
    [ChefHat,         'Cloud Kitchens',                'Organize digital orders, preparation activities, customer information and delivery coordination without dine-in.'],
    [Package,         'Takeaway Outlets',              'Provide customers with a structured ordering process for food collection and relevant order updates.'],
    [Coffee,          'Cafés & Bakeries',              'Manage menu-based orders, pickup requests and suitable delivery workflows.'],
    [Building2,       'Multi-Branch Restaurants',      'Evaluate connected ordering, branch-specific menus, order routing and reporting requirements.'],
    [Rocket,          'Food Delivery Startups',        'Plan customer ordering applications, restaurant management interfaces and delivery partner workflows.'],
];

const comparisons = [
    ['Customer orders',      'Phone calls or messages',              'Structured digital order placement'],
    ['Menu information',     'Printed or manually shared menus',     'Maintained digital menu'],
    ['Order details',        'Handwritten or manually entered',      'Recorded order information'],
    ['Kitchen coordination', 'Verbal communication or paper tickets','Defined order preparation stages'],
    ['Delivery assignments', 'Phone calls and manual coordination',  'Structured delivery assignment records'],
    ['Order status',         'Manual customer enquiries',            'Recorded order status updates'],
    ['Sales information',    'Manual order consolidation',           'Structured order and sales reports'],
];

const ownVsThirdParty = [
    ['Customer ordering',    'Restaurant\'s own digital channel', 'Marketplace application'],
    ['Branding',             'Restaurant-controlled interface',   'Marketplace-led experience'],
    ['Customer acquisition', 'Restaurant manages promotion',      'Marketplace may provide discovery'],
    ['Commercial charges',   'Development, hosting & operating costs', 'Platform fees and applicable charges'],
    ['Delivery operations',  'Restaurant or contracted delivery', 'Depends on platform services'],
    ['Customer information', 'Subject to restaurant\'s system',  'Subject to marketplace data terms'],
];

const security = [
    ['Customer Data Security',           'Consider authentication, authorized user access, secure handling of customer information, data retention and relevant backup arrangements.'],
    ['Online Payment Integration',       'Evaluate payment gateway compatibility, supported payment methods, transaction status updates, refunds and payment reconciliation requirements.'],
    ['Delivery Tracking & Location',     'Determine whether the business requires manual delivery status updates, location-based assignment or live delivery tracking. Live location tracking requires suitable device permissions, mapping services and supported technical infrastructure.'],
    ['Restaurant Operations & Setup',    'Review menu setup, item availability, service areas, delivery charges, preparation workflows, staff training and existing software requirements.'],
];

const whyFly = [
    ['Restaurant Workflow Assessment',    'Understand how your business receives orders, prepares food, manages pickup and coordinates delivery.'],
    ['Ordering & Delivery Planning',      'Identify the required customer ordering interfaces, restaurant management features and delivery workflows.'],
    ['Practical User Experience',         'Plan suitable interfaces for customers, restaurant employees, kitchen staff and delivery personnel.'],
    ['Integration & Implementation',      'Review payment gateways, existing restaurant software, notification requirements and technical dependencies before defining the solution.'],
];

const faqs = [
    ['What is food delivery software?',                                        'Food delivery software is a digital solution used to manage online food orders, restaurant menus, order preparation, delivery coordination and related customer information. Available features depend on the platform.'],
    ['How does a restaurant online ordering system work?',                     'Customers browse a digital menu, select food items, provide order details and submit an order. The restaurant then manages preparation, pickup or delivery through the supported workflow.'],
    ['Is food delivery software suitable for small restaurants?',              'Yes. Food delivery software can be useful for small restaurants that want to organize online orders, reduce manual coordination and maintain structured order records. The right solution depends on order volume and budget.'],
    ['What is the difference between food delivery software and delivery apps?','Food delivery software refers to broader systems used to manage ordering, restaurant operations and delivery workflows. Food delivery apps are customer-facing or delivery-partner mobile applications that may form part of a larger software platform.'],
    ['Can restaurants use their own online ordering system?',                  'Yes. Restaurants can operate their own digital ordering channels through suitable web or mobile applications. They must also arrange relevant payment, fulfillment, customer support and delivery processes.'],
    ['Can food delivery software support multiple restaurant branches?',       'Some platforms support multiple branches, branch-specific menus, order routing and consolidated reporting. These capabilities must be confirmed for the specific product.'],
    ['Can food delivery software integrate with payment gateways and POS?',    'Integration may be possible through compatible APIs and authorized technical connections. Availability depends on the payment provider, POS software and supported integration methods.'],
    ['How much does food delivery software cost in Tamil Nadu?',               'Costs vary based on required applications, ordering features, delivery tracking, payment integrations, customization, hosting and support arrangements. A requirements assessment is needed for a meaningful quotation.'],
];

/* ══ Scroll-reveal hook ═══════════════════════════════════════════════ */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('fd-visible'); obs.disconnect(); } },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

const Heading = ({ eyebrow, title, text }) => (
    <header className="fd-heading">
        <span className="fd-tag">{eyebrow}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
    </header>
);

function RevealCard({ children, delay = 0, className = '' }) {
    const ref = useReveal();
    return (
        <article ref={ref} className={`fd-card fd-reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
            {children}
        </article>
    );
}

/* ══ Order status badge ═══════════════════════════════════════════════ */
const statusColors = { New:'#3b82f6', Preparing:'#f59e0b', Ready:'#8b5cf6', Delivered:'#10b981', Pickup:'#06b6d4' };

export default function FoodDeliverySolution() {
    const [openFaq, setOpenFaq] = useState(null);
    const [activeOrder, setActiveOrder] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Food Delivery Software for Restaurants in Tamil Nadu | FlyTowards';
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Explore FlyTowards Food Delivery Solution for online food ordering, restaurant order management and delivery coordination. Planned for restaurants and cloud kitchens in Tamil Nadu.');
        // cycle active order highlight
        const t = setInterval(() => setActiveOrder(p => p >= 4 ? 1 : p + 1), 2000);
        return () => clearInterval(t);
    }, []);

    const orders = [
        { id: 1, name: 'Rajan Kumar',  item: 'Biryani (2)',    status: 'Preparing', time: '12 min' },
        { id: 2, name: 'Priya S',      item: 'Dosa Set',       status: 'New',       time: 'Just now' },
        { id: 3, name: 'Meena T',      item: 'Parotta & Curry',status: 'Ready',     time: '2 min' },
        { id: 4, name: 'Kumar Raj',    item: 'Meals + Juice',  status: 'Delivered', time: '28 min ago' },
    ];

    return (
        <main className="fd-page">
            <style>{`
/* ══════════════════════════════════════════════════════════════
   FOOD DELIVERY SOLUTION PAGE  —  fd-* namespace
══════════════════════════════════════════════════════════════ */
.fd-page{
  --ink:#1e1b4b;--muted:#657185;--line:#e6eaf0;--gold:#facc15;
  --amber:#eab308;--dark:#1e1b4b;--soft:#f7f8fa;
  --orange:#facc15;--red:#ef4444;--green:#10b981;
  background:#fff;color:var(--ink);
  font-family:'Outfit',sans-serif;overflow-x:hidden
}
.fd-page *{box-sizing:border-box}
.fd-wrap{width:min(1180px,90%);margin:auto}
.fd-section{padding:80px 0}
.fd-soft{background:var(--soft)}

/* ── Tag & heading ── */
.fd-tag{
  display:inline-flex;align-items:center;gap:7px;
  border:1px solid #facc15;background:#fff7cc;color:#1e1b4b;
  border-radius:99px;padding:6px 14px;font-weight:800;
  font-size:.75rem;letter-spacing:.1em;text-transform:uppercase
}
.fd-heading{text-align:center;max-width:860px;margin:0 auto 36px}
.fd-heading h2{font-size:clamp(2rem,4vw,3rem);line-height:1.12;margin:14px 0;font-weight:900;letter-spacing:-.03em;color:#1e1b4b}
.fd-heading p{color:var(--muted);line-height:1.75;margin:0}

/* ── Buttons ── */
.fd-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:9px;
  padding:14px 22px;border-radius:99px;text-decoration:none;font-weight:800;
  transition:transform .2s,box-shadow .2s;font-family:inherit;border:0;cursor:pointer
}
.fd-btn:hover{transform:translateY(-3px);box-shadow:0 10px 24px #17203324}
.fd-primary{background:#1e1b4b;color:#facc15}
.fd-primary svg{color:#facc15}
.fd-secondary{border:1px solid #1e1b4b!important;background:#fff;color:#1e1b4b}

/* ── Hero ── */
.fd-hero{
  min-height:650px;padding:140px 0 80px;display:flex;align-items:center;
  background:#fff
}
.fd-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}
.fd-page h1{font-size:clamp(2.6rem,5.5vw,4.6rem);line-height:1.04;letter-spacing:-.05em;margin:20px 0;font-weight:900;color:#1e1b4b}
.fd-page h1 em{display:block;color:var(--orange);font-style:normal}
.fd-lead{font-size:1.07rem;line-height:1.72;color:#586579}
.fd-actions{display:flex;gap:11px;flex-wrap:wrap;margin:24px 0}
.fd-hls{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.fd-hl{display:flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid var(--line);border-radius:12px;font-size:.84rem;font-weight:650;background:#ffffffcf}
.fd-hl svg{color:#1e1b4b;flex:none}
.fd-note{font-size:.78rem;color:#798397;line-height:1.5;margin-top:12px}

/* ── Animated order dashboard ── */
.fd-dashboard{
  position:relative;padding:18px;border-radius:26px;
  background:linear-gradient(145deg,#29245f,#1e1b4b);
  box-shadow:0 28px 70px #1c191738
}
.fd-dash-top{display:flex;justify-content:space-between;color:#fff;padding:4px 4px 14px;font-weight:750}
.fd-dash-body{background:#fafaf9;border-radius:18px;padding:16px}
.fd-order-row{
  display:flex;justify-content:space-between;align-items:center;
  padding:11px 12px;border-radius:12px;margin-bottom:7px;
  border:2px solid transparent;transition:border-color .3s,background .3s;
  background:#fff;cursor:default
}
.fd-order-row.fd-active{border-color:var(--gold);background:#fffbe6}
.fd-order-row:last-child{margin-bottom:0}
.fd-order-name{font-weight:700;font-size:.88rem}
.fd-order-item{color:var(--muted);font-size:.78rem}
.fd-order-right{text-align:right}
.fd-status-badge{display:inline-block;padding:3px 10px;border-radius:99px;font-size:.7rem;font-weight:800;color:#fff;margin-bottom:3px}
.fd-order-time{font-size:.72rem;color:#94a3b8}
/* menu strip */
.fd-menu-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:12px}
.fd-menu-item{background:#fff;border:1px solid var(--line);border-radius:10px;padding:10px 8px;text-align:center;font-size:.75rem;font-weight:700}
.fd-menu-item span{display:block;font-size:1.3rem;margin-bottom:4px}
.fd-menu-price{color:var(--orange);font-weight:800;font-size:.8rem}
/* stat row */
.fd-statrow{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:12px}
.fd-stat{background:#fff;border:1px solid var(--line);border-radius:12px;padding:11px;font-size:.82rem}
.fd-stat strong{display:block;margin-top:4px;font-size:.95rem}
.fd-badge{position:absolute;right:-8px;bottom:22px;background:#fff;border-radius:12px;padding:11px 13px;box-shadow:0 10px 28px #1c191724;font-size:.72rem;font-weight:750;display:flex;align-items:center;gap:6px}

/* ── Grid cards ── */
.fd-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.fd-grid-2{grid-template-columns:repeat(2,1fr)}
.fd-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 5px 20px #17203309;transition:transform .25s,box-shadow .25s}
.fd-card:hover{transform:translateY(-5px);box-shadow:0 16px 32px #17203318}
.fd-card h3{font-size:1.05rem;margin:0 0 8px}
.fd-card p{color:var(--muted);font-size:.9rem;line-height:1.65;margin:0}
.fd-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:12px;background:#fff7cc;color:#1e1b4b;margin-bottom:14px}
.fd-num{font-size:.74rem;color:#1e1b4b;font-weight:900;letter-spacing:.1em;margin-bottom:9px}
.fd-challenge-num{color:#EAB308}
.fd-planned-num{color:#EAB308}
.fd-why-num{color:#EAB308}
.fd-chip{display:inline-block;background:#f1f3f6;color:#616d7f;border-radius:7px;padding:5px 7px;font-size:.7rem;margin:8px 3px 0 0}

/* ── Scroll-reveal ── */
.fd-reveal{opacity:0;transform:translateY(24px);transition:opacity .65s ease,transform .65s ease}
.fd-visible{opacity:1!important;transform:translateY(0)!important}

/* ── Steps ── */
.fd-steps{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
.fd-step{background:#fff;border:1px solid var(--line);border-radius:15px;padding:14px 12px}
.fd-step-num{display:grid;place-items:center;width:33px;height:33px;border-radius:50%;background:#1e1b4b;color:#facc15;margin-bottom:11px;font-weight:900;font-size:.85rem}
.fd-step h3{font-size:.88rem;margin:0 0 6px}
.fd-step p{font-size:.78rem;color:var(--muted);line-height:1.5;margin:0}
.fd-flow{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:7px;margin-top:20px;font-size:.76rem;font-weight:750}
.fd-flow span{border:1px solid var(--line);padding:7px 12px;border-radius:99px;background:#fff}

/* ── Benefits ── */
.fd-benefits-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:40px;align-items:center}
.fd-visual{background:linear-gradient(145deg,#29245f,#1e1b4b);border-radius:22px;padding:24px;color:#fff}
.fd-vrow{display:flex;justify-content:space-between;padding:13px 0;border-bottom:1px solid #ffffff22;color:#e5e7eb}
.fd-vrow b{color:#fbbf24}
.fd-benefit{display:grid;grid-template-columns:36px 1fr;gap:11px;padding:12px 0;border-bottom:1px solid var(--line)}
.fd-benefit:last-child{border:0}
.fd-benefit i{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:#fff7cc;color:#1e1b4b;font-style:normal}
.fd-benefit h3{font-size:.96rem;margin:0 0 4px}
.fd-benefit p{font-size:.86rem;line-height:1.5;color:var(--muted);margin:0}

/* ── Tables ── */
.fd-table-wrap{overflow:auto;border:1px solid var(--line);border-radius:16px}
.fd-table{width:100%;min-width:620px;border-collapse:collapse}
.fd-table th,.fd-table td{text-align:left;padding:13px 15px;border-bottom:1px solid #edf0f3}
.fd-table th{background:#1e1b4b;color:#facc15}
.fd-table td{font-size:.86rem;color:#566174}
.fd-table td:last-child{font-weight:700;color:#29364a}
.fd-table tr:last-child td{border:0}
.fd-callout{background:var(--dark);color:#fff;padding:22px;border-radius:17px;margin-top:18px}
.fd-callout p{color:#d4d9e2;line-height:1.65;margin:8px 0 0}

/* ── Own vs Third-party ── */
.fd-vs-grid{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:28px;align-items:start}
.fd-vs-box{border:1px solid var(--line);border-radius:18px;padding:22px}
.fd-vs-box h3{font-size:1rem;margin:0 0 10px}
.fd-vs-box p{font-size:.88rem;color:var(--muted);line-height:1.65;margin:0}
.fd-compare-table{margin-top:24px}
.fd-compare-table th{background:#1e1b4b;color:#facc15}

/* ── App mockup ── */
.fd-app-mock{background:linear-gradient(145deg,#29245f,#1e1b4b);border-radius:20px;padding:20px;color:#fff}
.fd-app-mock h4{color:#fbbf24;font-size:.82rem;letter-spacing:.06em;text-transform:uppercase;margin:0 0 14px}
.fd-app-row{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #ffffff15}
.fd-app-row:last-child{border:0}
.fd-app-icon{width:34px;height:34px;border-radius:9px;background:#ffffff18;display:grid;place-items:center;flex:none}
.fd-app-info{flex:1}
.fd-app-info span{font-size:.75rem;color:#94a3b8}
.fd-app-info strong{display:block;font-size:.88rem}
.fd-app-price{font-size:.88rem;color:#fbbf24;font-weight:800}

/* ── Security blocks ── */
.fd-security{display:grid;grid-template-columns:1fr 1fr;gap:13px}
.fd-sec-item{display:grid;grid-template-columns:38px 1fr;gap:11px;border:1px solid var(--line);border-radius:15px;padding:18px}
.fd-sec-num{display:grid;place-items:center;width:36px;height:36px;border-radius:10px;background:#fff7cc;color:#1e1b4b;font-weight:900;font-style:normal}
.fd-sec-item h3{font-size:.94rem;margin:0 0 5px}
.fd-sec-item p{font-size:.84rem;color:var(--muted);line-height:1.5;margin:0}

/* ── Warning ── */
.fd-warning{display:flex;gap:9px;align-items:flex-start;padding:13px 15px;margin-top:18px;border:1px solid #facc15;border-radius:13px;background:#fffbe6;color:#1e1b4b;font-size:.85rem;line-height:1.55}
.fd-warning svg{flex:none;color:#1e1b4b}

/* ── FAQ ── */
.fd-faq{max-width:900px;margin:auto;display:grid;gap:9px}
.fd-faq-item{border:1px solid var(--line);border-radius:13px;overflow:hidden}
.fd-faq button{border:0;background:#fff;width:100%;padding:15px 18px;text-align:left;display:flex;justify-content:space-between;gap:10px;font:inherit;font-weight:750;color:#1e1b4b;cursor:pointer}
.fd-faq button svg{flex:none;transition:transform .22s}
.fd-answer{padding:0 18px 16px;color:var(--muted);line-height:1.65;font-size:.9rem}

/* ── Final CTA ── */
.fd-final{padding:50px 28px;text-align:center;color:#fff;background:radial-gradient(ellipse at 90% 0,#29245f,#1e1b4b 64%);border-radius:26px}
.fd-final h2{font-size:clamp(2rem,4vw,3rem);margin:16px auto;max-width:820px}
.fd-final p{max-width:790px;color:#fcd9b6;line-height:1.65;margin:0 auto}

/* ── Animations ── */
.fd-float{animation:fdFloat 6s ease-in-out infinite}
@keyframes fdFloat{50%{transform:translateY(-9px)}}

/* ── Responsive ── */
@media(max-width:960px){
  .fd-hero-grid,.fd-benefits-grid,.fd-vs-grid{grid-template-columns:1fr}
  .fd-dashboard{max-width:580px;margin:auto}
  .fd-grid{grid-template-columns:repeat(2,1fr)}
  .fd-steps{grid-template-columns:repeat(3,1fr)}
  .fd-app-mock{position:static}
}
@media(max-width:620px){
  .fd-section{padding:58px 0}
  .fd-wrap{width:calc(100% - 28px)}
  .fd-hero{padding:120px 0 56px}
  .fd-page h1{font-size:clamp(2.4rem,13vw,3.6rem)}
  .fd-grid,.fd-grid-2,.fd-hls,.fd-steps,.fd-security{grid-template-columns:1fr}
  .fd-actions .fd-btn{width:100%}
  .fd-badge{right:4px;bottom:4px}
  .fd-menu-strip{grid-template-columns:repeat(2,1fr)}
}
@media(prefers-reduced-motion:reduce){
  .fd-reveal,.fd-float{animation:none!important;opacity:1!important;transform:none!important}
  .fd-card,.fd-btn,.fd-order-row{transition:none!important}
}
            `}</style>

            {/* ══ 01 — HERO ════════════════════════════════════════════════════ */}
            <section className="fd-hero">
                <div className="fd-wrap fd-hero-grid">
                    {/* Left */}
                    <div>
                        <span className="fd-tag"><UtensilsCrossed size={15}/> Food delivery software · Tamil Nadu</span>
                        <h1>Food Delivery Software for Restaurants <em>& Cloud Kitchens</em></h1>
                        <p className="fd-lead">Manage Online Food Orders, Restaurant Operations and Delivery Workflows</p>
                        <p className="fd-lead" style={{marginTop:10}}>
                            Managing customer orders, menu information, delivery assignments and order updates through phone calls,
                            messaging applications or disconnected systems can make restaurant operations difficult during busy hours.
                            FlyTowards Food Delivery Solution is a proposed food delivery software platform for restaurants, cloud
                            kitchens, takeaway outlets and food delivery businesses across Tamil Nadu.
                        </p>
                        <div className="fd-actions">
                            <Link to="/contact" className="fd-btn fd-primary">Request a Food Delivery Software Demo <ArrowRight size={17}/></Link>
                            <Link to="/contact" className="fd-btn fd-secondary">Discuss Your Food Delivery Requirements</Link>
                        </div>
                        <div className="fd-hls">
                            {highlights.map(x => (
                                <div className="fd-hl" key={x}><CheckCircle2 size={16}/>{x}</div>
                            ))}
                        </div>
                        <p className="fd-note">Product capabilities and demo availability are subject to confirmation.</p>
                    </div>

                    {/* Right – animated order dashboard */}
                    <div className="fd-dashboard fd-float" aria-label="Illustrative food delivery order dashboard">
                        <div className="fd-dash-top">
                            <span>Order dashboard</span>
                            <span style={{color:'#fbbf24'}}>Illustrative</span>
                        </div>
                        <div className="fd-dash-body">
                            <div style={{fontSize:'.72rem',letterSpacing:'.05em',color:'#8898aa',marginBottom:10}}>LIVE ORDERS</div>
                            {orders.map(o => (
                                <div key={o.id} className={`fd-order-row${activeOrder===o.id?' fd-active':''}`}>
                                    <div>
                                        <div className="fd-order-name">{o.name}</div>
                                        <div className="fd-order-item">{o.item}</div>
                                    </div>
                                    <div className="fd-order-right">
                                        <div className="fd-status-badge" style={{background:statusColors[o.status]}}>{o.status}</div>
                                        <div className="fd-order-time">{o.time}</div>
                                    </div>
                                </div>
                            ))}
                            {/* Menu strip */}
                            <div style={{fontSize:'.72rem',letterSpacing:'.05em',color:'#8898aa',margin:'14px 0 8px'}}>POPULAR ITEMS</div>
                            <div className="fd-menu-strip">
                                {[['🍛','Biryani','₹180'],['🥞','Dosa Set','₹80'],['🫓','Parotta','₹60']].map(([e,n,p])=>(
                                    <div className="fd-menu-item" key={n}><span>{e}</span>{n}<div className="fd-menu-price">{p}</div></div>
                                ))}
                            </div>
                            <div className="fd-statrow">
                                <div className="fd-stat">Today's Orders<strong>34 orders</strong></div>
                                <div className="fd-stat">Revenue<strong>₹12,480</strong></div>
                            </div>
                        </div>
                        <div className="fd-badge"><ShoppingBag size={13}/> Concept preview · not live product UI</div>
                    </div>
                </div>
            </section>

            {/* ══ 02 — PRODUCT OVERVIEW ════════════════════════════════════════ */}
            <section className="fd-section">
                <div className="fd-wrap">
                    <Heading eyebrow="Product overview" title="What Is Food Delivery Software and How Does It Work?"/>
                    <p style={{textAlign:'center',maxWidth:860,margin:'-10px auto 30px',color:'var(--muted)',lineHeight:1.75}}>
                        Food delivery software is a digital solution that helps restaurants and food delivery businesses manage online
                        orders, menu information, customer details, order preparation and delivery coordination. FlyTowards Food Delivery
                        Solution is being positioned around the practical needs of businesses seeking connected ordering and delivery
                        workflows.
                    </p>
                    <div className="fd-grid fd-grid-2">
                        {overview.map(([Icon,title,text],i) => (
                            <RevealCard key={title} delay={i*80}>
                                <div className="fd-icon"><Icon size={21}/></div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 03 — CHALLENGES ══════════════════════════════════════════════ */}
            <section className="fd-section fd-soft">
                <div className="fd-wrap">
                    <Heading eyebrow="Operational challenges" title="Common Food Ordering & Delivery Challenges for Restaurants"
                        text="Managing orders, menus and deliveries manually becomes harder as a restaurant's operations grow."/>
                    <div className="fd-grid">
                        {challenges.map(([title,text],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="fd-num fd-challenge-num">CHALLENGE 0{i+1}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 04 — FEATURES ════════════════════════════════════════════════ */}
            <section className="fd-section">
                <div className="fd-wrap">
                    <Heading eyebrow="Proposed capabilities" title="Key Features Planned for FlyTowards Food Delivery Software"
                        text="The following are proposed product capabilities. Their availability, configuration and implementation scope must be verified before publication."/>
                    <div className="fd-grid">
                        {features.map(([title,text,tags],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="fd-num fd-planned-num">0{i+1} · PLANNED</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                                <div style={{marginTop:10}}>
                                    {tags.split(' · ').map(t => <span className="fd-chip" key={t}>{t}</span>)}
                                </div>
                            </RevealCard>
                        ))}
                    </div>
                    <div className="fd-warning"><HelpCircle size={18}/>Feature examples describe planning scope only. Confirm product support before relying on any capability.</div>
                </div>
            </section>

            {/* ══ 05 — HOW IT WORKS ════════════════════════════════════════════ */}
            <section className="fd-section fd-soft">
                <div className="fd-wrap">
                    <Heading eyebrow="Illustrative workflow" title="How Does a Restaurant Online Ordering System Work?"
                        text="A restaurant online ordering system connects customer order placement with restaurant preparation and delivery workflows."/>
                    <div className="fd-steps">
                        {steps.map(([title,text],i) => (
                            <article className="fd-step" key={title}>
                                <div className="fd-step-num">{String(i+1).padStart(2,'0')}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                    <div className="fd-flow">
                        {['Customer Menu','Order Placement','Restaurant Confirmation','Food Preparation','Delivery Assignment','Order Completion'].map((x,i,arr)=>(
                            <span key={x+i}>{x}{i<arr.length-1?<span style={{color:'#94a3b8'}}> → </span>:''}</span>
                        ))}
                    </div>
                    <div className="fd-warning" style={{marginTop:20}}>
                        <HelpCircle size={18}/>These workflows are illustrative. Automated assignments, payment processing and live tracking depend on verified product capabilities.
                    </div>
                </div>
            </section>

            {/* ══ 06 — BENEFITS ════════════════════════════════════════════════ */}
            <section className="fd-section">
                <div className="fd-wrap">
                    <div className="fd-benefits-grid">
                        <div className="fd-visual">
                            <span className="fd-tag">Order dashboard</span>
                            <h3 style={{marginTop:14,color:'#fff'}}>Today's restaurant overview</h3>
                            {[
                                ['Orders received',  '34 orders'],
                                ['Preparing now',    '8 in kitchen'],
                                ['Ready for pickup', '3 waiting'],
                                ['Out for delivery', '5 assigned'],
                                ['Revenue today',    '₹12,480'],
                            ].map(([k,v]) => (
                                <div className="fd-vrow" key={k}><span>{k}</span><b>{v}</b></div>
                            ))}
                            <p className="fd-note" style={{color:'#fcd9b6',marginTop:14}}>Illustrative figures · not live product data</p>
                        </div>
                        <div>
                            <Heading eyebrow="Business benefits" title="Benefits of Food Delivery Software for Restaurants"
                                text="A structured ordering system can simplify operations and improve order visibility."/>
                            {benefits.map(([Icon,title,text]) => (
                                <div className="fd-benefit" key={title}>
                                    <i><Icon size={16}/></i>
                                    <div><h3>{title}</h3><p>{text}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 07 — INDUSTRIES ══════════════════════════════════════════════ */}
            <section className="fd-section fd-soft">
                <div className="fd-wrap">
                    <Heading eyebrow="Business types" title="Food Delivery Software for Food Businesses Across Tamil Nadu"
                        text="Different food businesses need ordering and delivery workflows suited to their service models."/>
                    <div className="fd-grid">
                        {industries.map(([Icon,title,text],i) => (
                            <RevealCard key={title} delay={i*70}>
                                <div className="fd-icon"><Icon size={21}/></div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                    <p className="fd-note" style={{textAlign:'center',marginTop:20}}>
                        <b>Regional focus:</b> Tirunelveli, Tenkasi, Sankarankovil, Madurai, Thoothukudi, Kanyakumari and other markets across Tamil Nadu.
                    </p>
                </div>
            </section>

            {/* ══ 08 — COMPARISON TABLE ════════════════════════════════════════ */}
            <section className="fd-section">
                <div className="fd-wrap">
                    <Heading eyebrow="Compare approaches" title="Food Delivery Software vs Manual Restaurant Order Management"
                        text="The appropriate approach depends on order volume, business model, customer expectations and budget."/>
                    <div className="fd-table-wrap">
                        <table className="fd-table">
                            <thead><tr><th>Restaurant Activity</th><th>Manual Management</th><th>Food Delivery Software</th></tr></thead>
                            <tbody>
                                {comparisons.map(([a,b,c]) => (
                                    <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="fd-callout">
                        <h3>Is Food Delivery Software Better Than Manual Ordering?</h3>
                        <p>Manual ordering may be sufficient for restaurants with limited order volumes and simple operations. Food delivery software becomes more useful when a restaurant receives orders through multiple channels, manages deliveries or needs consistent visibility into preparation and fulfillment activities.</p>
                    </div>
                </div>
            </section>

            {/* ══ 09 — OWN SYSTEM VS THIRD-PARTY ══════════════════════════════ */}
            <section className="fd-section fd-soft">
                <div className="fd-wrap">
                    <Heading eyebrow="Understanding the difference" title="Restaurant Online Ordering System vs Third-Party Food Delivery Apps"
                        text="Restaurants can accept digital orders through their own online ordering systems or participate in third-party food delivery marketplaces. Both approaches have different operational and commercial considerations."/>
                    <div className="fd-vs-grid">
                        {/* Left: descriptions + key differences table */}
                        <div>
                            <div style={{display:'grid',gap:12,marginBottom:22}}>
                                <div className="fd-vs-box">
                                    <h3 style={{color:'#1e1b4b'}}>Restaurant-Owned Ordering System</h3>
                                    <p>A restaurant-owned ordering platform can provide a direct digital ordering channel under the restaurant's own brand. Depending on the software, the restaurant may manage its own menu, customer ordering experience, payment arrangements and delivery workflows.</p>
                                </div>
                                <div className="fd-vs-box">
                                    <h3 style={{color:'#a88100'}}>Third-Party Food Delivery Apps</h3>
                                    <p>Third-party delivery apps connect restaurants with customers through an established marketplace. These platforms may provide customer discovery, ordering infrastructure, payment processing and delivery services, depending on their commercial arrangements.</p>
                                </div>
                            </div>
                            <h3 style={{marginBottom:12}}>Key Differences</h3>
                            <div className="fd-table-wrap fd-compare-table">
                                <table className="fd-table">
                                    <thead><tr><th>Factor</th><th>Own System</th><th>Third-Party Apps</th></tr></thead>
                                    <tbody>
                                        {ownVsThirdParty.map(([f,o,t]) => (
                                            <tr key={f}><td>{f}</td><td>{o}</td><td>{t}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="fd-warning" style={{marginTop:16}}>
                                <HelpCircle size={18}/>Any integration between FlyTowards Food Delivery Solution and external delivery marketplaces would require technical and commercial feasibility assessment.
                            </div>
                            <div className="fd-actions" style={{marginTop:20}}>
                                <Link to="/contact" className="fd-btn fd-primary">Discuss Your Restaurant Online Ordering Requirements <ArrowRight size={16}/></Link>
                            </div>
                        </div>

                        {/* Right: app mockup */}
                        <div className="fd-app-mock" style={{position:'sticky',top:100}}>
                            <h4>Customer Ordering Interface · Illustrative</h4>
                            {[
                                ['🍛','Chicken Biryani','Serves 1 · Spicy option available','₹180'],
                                ['🥘','Mutton Kuzhambu','With rice · Restaurant special','₹220'],
                                ['🥞','Ghee Dosa Set','With chutney & sambar','₹80'],
                                ['🍚','Full Meals',   'Unlimited rice · Tamil Nadu style','₹120'],
                                ['🧃','Fresh Juice',  'Seasonal fruits · 300ml','₹60'],
                            ].map(([e,n,d,p]) => (
                                <div className="fd-app-row" key={n}>
                                    <div className="fd-app-icon" style={{fontSize:'1.3rem'}}>{e}</div>
                                    <div className="fd-app-info">
                                        <strong>{n}</strong>
                                        <span>{d}</span>
                                    </div>
                                    <span className="fd-app-price">{p}</span>
                                </div>
                            ))}
                            <p style={{color:'#94a3b8',fontSize:'.72rem',marginTop:14,lineHeight:1.5}}>
                                Illustrative customer ordering interface. Actual UI and functionality depend on verified product capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 10 — SECURITY & IMPLEMENTATION ══════════════════════════════ */}
            <section className="fd-section">
                <div className="fd-wrap">
                    <Heading eyebrow="Plan with care" title="Important Considerations When Choosing Food Delivery Software"
                        text="A food delivery platform may handle customer contact information, delivery addresses, order details and payment-related records. Assess the following before implementation."/>
                    <div className="fd-security">
                        {security.map(([title,text],i) => (
                            <article className="fd-sec-item" key={title}>
                                <i className="fd-sec-num">0{i+1}</i>
                                <div><h3>{title}</h3><p>{text}</p></div>
                            </article>
                        ))}
                    </div>
                    <div className="fd-warning" style={{marginTop:16}}>
                        <AlertCircle size={18}/>Payment gateway integration, GPS tracking, notifications, multi-restaurant support and external integrations depend on the verified product capabilities and agreed implementation scope.
                    </div>
                </div>
            </section>

            {/* ══ 11 — WHY FLYTOWARDS ══════════════════════════════════════════ */}
            <section className="fd-section fd-soft">
                <div className="fd-wrap">
                    <Heading eyebrow="Planning with FlyTowards" title="Why Consider FlyTowards for Food Delivery Software in Tamil Nadu?"
                        text="Choosing food delivery software involves more than creating a customer ordering interface. FlyTowards approaches software planning through business requirements, operational workflows and implementation considerations."/>
                    <div className="fd-grid fd-grid-2">
                        {whyFly.map(([title,text],i) => (
                            <RevealCard key={title} delay={i*80}>
                                <div className="fd-num fd-why-num">0{i+1}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </RevealCard>
                        ))}
                    </div>
                    <div className="fd-actions" style={{justifyContent:'center',marginTop:28}}>
                        <Link to="/contact" className="fd-btn fd-primary">Discuss Your Food Delivery Software Requirements <ArrowRight size={16}/></Link>
                    </div>
                </div>
            </section>

            {/* ══ 12 — FAQ ═════════════════════════════════════════════════════ */}
            <section className="fd-section">
                <div className="fd-wrap">
                    <Heading eyebrow="FAQ" title="Frequently Asked Questions About Food Delivery Software"/>
                    <div className="fd-faq">
                        {faqs.map(([q,a],i) => (
                            <div className="fd-faq-item" key={q}>
                                <button aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                                    <span>{q}</span>
                                    <ChevronDown size={18} style={{transform:openFaq===i?'rotate(180deg)':'none'}}/>
                                </button>
                                {openFaq===i && <div className="fd-answer">{a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 13 — FINAL CTA ═══════════════════════════════════════════════ */}
            <section id="contact" className="fd-section" style={{paddingTop:0}}>
                <div className="fd-wrap">
                    <div className="fd-final">
                        <span className="fd-tag"><UtensilsCrossed size={14}/> Food delivery solution · Tamil Nadu</span>
                        <h2>Bring Your Restaurant Ordering & Delivery Workflows Together</h2>
                        <p>
                            Whether you operate a restaurant, cloud kitchen, takeaway outlet or food delivery business, a structured
                            digital ordering system can help organize customer orders, food preparation and delivery coordination
                            across Tamil Nadu.
                        </p>
                        <div className="fd-actions" style={{justifyContent:'center',marginTop:24}}>
                            <Link to="/contact" className="fd-btn fd-primary">Request a Food Delivery Software Demo <ArrowRight size={17}/></Link>
                            <Link to="/contact" className="fd-btn fd-secondary">Get a Food Delivery Software Consultation</Link>
                        </div>
                        <p className="fd-note" style={{color:'#fcd9b6',marginTop:14}}>
                            Confirm product availability, supported features and demo arrangements before publishing these calls to action.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
