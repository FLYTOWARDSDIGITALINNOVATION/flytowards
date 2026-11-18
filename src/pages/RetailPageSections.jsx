import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ShoppingBag, Receipt, Boxes, PackageCheck, BarChart3, Users, Store, Tags, Truck, Workflow,
    ClipboardList, RotateCcw, ArrowRight, CheckCircle2, Zap, Wrench, Globe, Smartphone,
    Building2, Link2, ShieldCheck, MapPin, MessageSquareText, ChevronDown, Sparkles, CreditCard
} from 'lucide-react';

const challenges = [
    [Receipt, 'Slow or Complicated Billing', 'Manual billing and difficult POS interfaces can create unnecessary steps during checkout.'],
    [Boxes, 'Inconsistent Inventory Records', 'When sales and stock updates are not connected, recorded quantities may differ from actual stock.'],
    [Truck, 'Disconnected Purchasing Information', 'Supplier purchases, goods receipts and stock updates may be managed through separate records.'],
    [Store, 'Limited Multi-Store Visibility', 'Businesses operating several retail locations may struggle to consolidate sales and inventory information.'],
    [Tags, 'Complicated Product & Price Management', 'Managing product variants, prices, discounts and category information across different records can require repeated manual updates.'],
    [BarChart3, 'Fragmented Retail Reporting', 'Store managers may need to combine billing, inventory and purchasing data manually to review business activity.']
];
const solutions = [
    [Receipt, 'Retail Point of Sale Software', 'Develop POS applications for recording transactions, managing checkout workflows, calculating bills and maintaining sales records.', '/services/custom-software-development/'],
    [ShoppingBag, 'Retail Shop POS Systems', 'Build shop-focused billing applications with product selection, pricing, discounts, receipts and relevant stock updates.', '/services/web-application-development/'],
    [Boxes, 'Retail Inventory Management Software', 'Create systems for managing stock receipts, sales-related stock movements, adjustments and inventory information.', '/services/erp-development/'],
    [Store, 'Retail Management Software', 'Develop integrated functionality for product catalogs, sales records, purchasing, suppliers and store administration.', '/services/custom-software-development/'],
    [Building2, 'Multi-Store Retail Management Systems', 'Plan applications for managing authorized store-level information and consolidated reporting across multiple retail locations.', '/services/web-application-development/'],
    [BarChart3, 'Retail Sales Dashboards & Reporting', 'Develop dashboards that present selected sales, inventory, purchasing and product performance information.', '/services/api-development/']
];
const workflows = [
    ['Product Catalog & Pricing Management', 'Store teams can maintain product descriptions, categories, selling prices, variants and relevant barcode identifiers.', 'Products · Prices · Barcodes'],
    ['Billing & Checkout', 'Cashiers can select products, apply configured pricing rules, calculate transaction totals and record payment information.', 'Select · Calculate · Record payment'],
    ['Inventory Updates After Sales', 'Completed sales can update inventory records according to the system’s stock management rules.', 'Sale · Stock update · Review'],
    ['Supplier Purchasing & Stock Receipt', 'Retail staff can maintain supplier records, purchase orders and goods receipt information to support stock replenishment.', 'Supplier · Purchase · Receive'],
    ['Sales Returns & Adjustments', 'Authorized users can record returns, refunds and stock adjustments according to defined business policies.', 'Return · Refund · Adjust stock'],
    ['Store Performance Reporting', 'Managers can review selected sales totals, transaction information, product movement and inventory reports.', 'Sales · Product movement · Reports']
];
const benefits = [
    [Receipt, 'Simplify Retail Checkout', 'Provide cashiers with structured billing workflows and clear transaction interfaces.'],
    [Boxes, 'Improve Inventory Visibility', 'Connect suitable sales and stock processes to maintain more consistent inventory records.'],
    [Tags, 'Organize Product Information', 'Maintain product catalogs, pricing details and category information through defined management workflows.'],
    [Store, 'Support Multi-Store Coordination', 'Provide authorized managers with access to relevant sales and inventory information across supported locations.'],
    [BarChart3, 'Improve Retail Reporting', 'Present selected transaction, stock and purchasing information through dashboards and structured reports.']
];
const services = [
    [Wrench, 'Custom Software Development', 'Build retail billing and management applications around store-specific workflows and operational requirements.', '/services/custom-software-development/'],
    [Building2, 'ERP Development', 'Develop connected functionality for retail inventory, procurement, sales administration and other relevant business processes.', '/services/erp-development/'],
    [Globe, 'Web Application Development', 'Create browser-based retail administration dashboards, product management portals and reporting applications.', '/services/web-application-development/'],
    [Smartphone, 'Mobile App Development', 'Develop mobile applications for suitable stock checks, inventory updates and retail management workflows.', '/services/mobile-app-development/'],
    [Link2, 'API Development', 'Connect compatible POS, inventory, accounting, payment and online sales applications through supported interfaces.', '/services/api-development/'],
    [Wrench, 'Software Maintenance & Support', 'Maintain agreed retail software functionality, address identified issues and implement suitable application updates.', '/services/software-maintenance-support/']
];
const steps = [
    ['Retail Workflow Discovery', 'Understand checkout activities, product management, purchasing, inventory and store administration processes.'],
    ['Requirements & Existing System Assessment', 'Identify user roles, product structures, billing rules, existing applications, device requirements and integration needs.'],
    ['Solution Architecture & Module Planning', 'Define POS functionality, inventory workflows, data relationships, user permissions and development priorities.'],
    ['UI/UX Design & Software Development', 'Design suitable checkout and administration interfaces and develop agreed retail software functionality.'],
    ['Testing & Transaction Validation', 'Test billing calculations, configured tax rules, discounts, returns, inventory updates, permissions and supported integrations.'],
    ['Deployment & Support Planning', 'Prepare the application for implementation, review product data migration and staff onboarding needs, and define suitable maintenance arrangements.']
];
const differentiators = [
    ['Retail Workflow Understanding', 'We focus on identifying billing, inventory, purchasing and store management requirements during project planning.'],
    ['Custom Retail Software Planning', 'We consider product structures, pricing rules, transaction workflows and reporting needs when defining application functionality.'],
    ['Checkout & Interface Usability', 'We consider how cashiers and store administrators interact with POS screens and complete important tasks.'],
    ['Integration & Implementation Planning', 'We assess compatible devices, existing applications, supported integrations and practical deployment requirements.']
];
const faqs = [
    ['What are point of sale systems for retail?', 'Point of sale systems for retail are software applications used to record sales transactions, calculate bills, manage payment-related information and maintain transaction records. Depending on features, they may also support inventory updates, product management and reporting.'],
    ['What features should a retail shop POS system include?', 'Common features include product catalogs, barcode support, billing, discounts, tax calculations, receipt generation, returns, inventory updates and sales reporting. Required features depend on store operations.'],
    ['What is the difference between retail POS software and retail management software?', 'Retail POS software primarily focuses on sales transactions and checkout workflows. Retail management software covers broader activities such as inventory, purchasing, supplier management, product administration and reporting. These functions may be integrated.'],
    ['Can a retail POS system manage inventory automatically?', 'A POS system can update inventory records when sales or returns are recorded, provided the inventory module and stock rules are configured correctly. Physical stock counts and reconciliation may still be necessary.'],
    ['Can retail POS systems work across multiple stores?', 'Multi-store POS applications can be designed to manage store-specific transactions, inventory and consolidated reporting. Synchronization and access requirements depend on the system architecture.'],
    ['Can a retail POS system support barcode scanners and receipt printers?', 'Hardware compatibility depends on the POS application, device interfaces, operating environment and supported integration methods. Required devices should be confirmed during project planning.'],
    ['How much does retail POS software development cost in Tamil Nadu?', 'Costs depend on billing features, inventory complexity, user roles, store locations, hardware integrations, payment requirements and deployment scope. A requirements assessment helps determine the project budget.'],
    ['Can retail management software integrate with accounting or e-commerce systems?', 'Integration may be possible through compatible APIs, supported data exchange methods or other available interfaces. Feasibility depends on existing applications and required information flows.']
];
const sectionStyle = { width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' };
const headingStyle = { margin: '0 0 1rem', color: '#1e1b4b', fontSize: 'clamp(2rem,3.2vw,2.75rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-.5px' };
const paragraphStyle = { margin: 0, color: '#667085', fontSize: '1rem', lineHeight: 1.75 };

export default function RetailPageSections() {
    const [openFaq, setOpenFaq] = useState(null);
    const [showRetailScope, setShowRetailScope] = useState(false);
    const retailScopeRef = useRef(null);
    const toggleRetailScope = () => {
        const willOpen = !showRetailScope;
        setShowRetailScope(willOpen);
        if (willOpen) {
            window.setTimeout(() => retailScopeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
    };
    return <>
        <section className="retail-two-col retail-overview" style={sectionStyle}>
            <div className="retail-copy-stack"><span className="retail-kicker"><ShoppingBag size={16}/> Retail Operations</span><h2 style={headingStyle}>What Are <span>Point of Sale Systems</span> for Retail?</h2>
                <p style={paragraphStyle}>A retail point of sale (POS) system is software used to record sales transactions, calculate bills, manage payment-related information and maintain relevant sales records.</p>
                <p style={paragraphStyle}>Depending on its features, a retail shop POS system may also support product catalogs, barcode scanning, discounts, tax calculations, receipt generation and inventory updates.</p>
                <p style={paragraphStyle}>Broader retail management software can connect POS transactions with stock management, purchasing, supplier information, customer records and business reporting.</p>
                <p style={paragraphStyle}>A retail POS system may be designed for a single shop, a chain of stores or a business with both physical and online sales channels.</p>
            </div>
            <div className="retail-icon-highlights">{[[Receipt,'Retail Billing','Record sales, calculate totals and generate transaction records.'],[Boxes,'Inventory Coordination','Update and review stock information associated with retail sales and purchases.'],[Tags,'Product Management','Organize product details, prices, categories and relevant barcode information.'],[BarChart3,'Sales Reporting','Review transactions, product sales and selected store performance information.']].map(([Icon,title,desc])=><article className="retail-highlight" key={title}><span><Icon size={21}/></span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div>
        </section>

        <section style={sectionStyle}>
            <header className="retail-section-heading"><span className="retail-kicker"><Workflow size={16}/> Store Operations</span><h2 style={headingStyle}>Common Software Challenges in <span>Retail Operations</span></h2><p style={paragraphStyle}>Retail businesses handle frequent transactions and stock movements while coordinating purchasing, pricing and store administration. Disconnected applications and manual records can make these activities harder to manage.</p></header>
            <div className="retail-card-grid">{challenges.map(([Icon,title,desc])=><article className="retail-card retail-challenge" key={title}><span className="retail-icon"><Icon size={22}/></span><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </section>

        <section id="retail-solutions" style={sectionStyle}>
            <header className="retail-section-heading"><span className="retail-kicker"><Sparkles size={16}/> Retail Software Engineering</span><h2 style={headingStyle}>Our <span>Retail POS &amp; Management Software Solutions</span></h2><p style={paragraphStyle}>FlyTowards helps retail businesses plan and develop software applications around billing, inventory, purchasing and store management requirements.</p></header>
            <div className="retail-card-grid">{solutions.map(([Icon,title,desc,href])=><article className="retail-card retail-solution" key={title}><span className="retail-icon"><Icon size={23}/></span><h3>{title}</h3><p>{desc}</p><Link to={href}>Explore related service <ArrowRight size={15}/></Link></article>)}</div>
        </section>

        <section style={sectionStyle}>
            <header className="retail-section-heading"><span className="retail-kicker"><Workflow size={16}/> Daily Store Operations</span><h2 style={headingStyle}>How <span>Retail POS Software</span> Supports Daily Store Operations</h2><p style={paragraphStyle}>Retail POS software becomes useful when it connects checkout activities with product, inventory and management information.</p></header>
            <div className="retail-workflow-list">{workflows.map(([title,desc,labels],i)=><article className={`retail-workflow ${i%2?'is-reversed':''}`} key={title}><div className="retail-workflow-copy"><span>WORKFLOW 0{i+1}</span><h3>{title}</h3><p>{desc}</p></div><div className="retail-flow-visual"><div className="retail-flow-head"><ClipboardList size={18}/><b>{title}</b><small>STORE WORKFLOW</small></div><div className="retail-flow-track"><i/><i/><i/></div><div className="retail-flow-labels">{labels.split(' · ').map(label=><span key={label}>{label}</span>)}</div></div></article>)}</div>
            <p className="retail-note"><CheckCircle2 size={18}/> Illustrative workflow only. Actual billing, taxation, returns, inventory valuation and payment processes should be defined according to retailer requirements.</p>
        </section>

        <section style={sectionStyle} className="retail-two-col retail-benefits-section">
            <div className="retail-dashboard"><div className="retail-dash-head"><span><ShoppingBag size={17}/> Store sales overview</span><small>TODAY⌄</small></div><div className="retail-dash-metrics"><div><small>Net sales</small><b>₹48,620</b><span>↑ 8.2% this week</span></div><div><small>Transactions</small><b>186</b><span>12 items low in stock</span></div></div><div className="retail-dash-chart"><div><b>Sales summary</b><span>Last 7 days</span></div><div className="retail-bars">{[38,56,47,73,62,86,100].map((height,i)=><i key={i} style={{height:`${height}%`}}/>)}</div><div className="retail-days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div><div className="retail-dash-stock"><PackageCheck size={18}/><span><b>Inventory status</b><small>Stock synchronized with sales</small></span><strong>On track</strong></div></div>
            <div className="retail-benefits-copy"><span className="retail-kicker"><CheckCircle2 size={16}/> Practical Outcomes</span><h2 style={headingStyle}>Benefits of <span>Point of Sale Systems</span> for Retail Businesses</h2><p style={paragraphStyle}>Well-planned POS and retail management software can help businesses organize sales transactions and maintain clearer operational information.</p><div className="retail-benefit-list">{benefits.map(([Icon,title,desc])=><article className="retail-benefit" key={title}><span><Icon size={20}/></span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></div>
        </section>

        <section style={sectionStyle}>
            <header className="retail-section-heading"><span className="retail-kicker"><Wrench size={16}/> Connected Capabilities</span><h2 style={headingStyle}>FlyTowards <span>Software Development Services</span> for Retail Businesses</h2><p style={paragraphStyle}>Retail POS projects may involve custom application development, business system integrations, mobile functionality and ongoing software maintenance.</p></header>
            <div className="retail-card-grid">{services.map(([Icon,title,desc,href])=><Link className="retail-card retail-service" to={href} key={title}><span className="retail-icon"><Icon size={21}/></span><h3>{title}</h3><p>{desc}</p><b>View service <ArrowRight size={14}/></b></Link>)}</div>
        </section>

        <section style={sectionStyle}>
            <header className="retail-section-heading"><span className="retail-kicker"><Zap size={16}/> Implementation Methodology</span><h2 style={headingStyle}>Our Retail POS Software <span>Development Process</span></h2><p style={paragraphStyle}>We follow a structured approach to understand retail workflows and plan software functionality around store operations and business requirements.</p></header>
            <div className="retail-timeline">{steps.map(([title,desc],i)=><article className="retail-step" key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </section>

        <section style={sectionStyle} className="retail-two-col retail-why"><div className="retail-why-copy"><span className="retail-kicker"><ShieldCheck size={16}/> Engineering Excellence</span><h2 style={headingStyle}>Why Choose FlyTowards for <span>Retail POS Software?</span></h2><p style={paragraphStyle}>Retail software should reflect how products, transactions and inventory information move through a business.</p><p style={paragraphStyle}>A useful POS solution begins with understanding checkout requirements, stock processes and the needs of store staff and managers.</p><Link className="retail-primary-link" to="/contact">Discuss Your Retail Software Requirements <ArrowRight size={17}/></Link></div><div className="retail-differentiators">{differentiators.map(([title,desc],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></section>

        <section style={sectionStyle} className="retail-regional"><div className="retail-regional-copy"><span className="retail-kicker"><MapPin size={16}/> Tamil Nadu &amp; South Tamil Nadu</span><h2 style={headingStyle}><span>Retail POS Software Solutions</span> in Tamil Nadu</h2><p style={paragraphStyle}>Retail businesses across Tamil Nadu operate in different formats, including grocery stores, supermarkets, clothing shops, electronics retailers, specialty stores and multi-location retail businesses.</p><p style={paragraphStyle}>In South Tamil Nadu, retail operators may have different requirements depending on product categories, transaction volumes, supplier arrangements and number of store locations.</p><p style={paragraphStyle}>Some businesses need to move from manual billing to structured retail shop POS systems. Others may want to connect existing POS applications with inventory management, purchasing, accounting or online sales systems.</p><p style={paragraphStyle}>FlyTowards provides retail software development solutions across Tamil Nadu, focusing on billing workflows, product management, inventory coordination and relevant business reporting.</p><p style={paragraphStyle}>Whether you need a dedicated POS application or broader retail management software, we help evaluate the features required for your operations.</p></div><div className="retail-regional-art"><div className="retail-region-core"><Store size={27}/><b>Retail Store</b><small>Connected operations</small></div><span className="retail-region-node region-pos">POS billing</span><span className="retail-region-node region-stock">Inventory</span><span className="retail-region-node region-sales">Sales reports</span><span className="retail-region-node region-purchase">Purchasing</span><div className="retail-region-foot"><span><i/> Tamil Nadu retail</span><span>Products · Stores · Sales</span></div></div></section>

        <section style={sectionStyle} className="retail-two-col retail-faq-section"><div className="retail-faq-intro"><span className="retail-kicker"><MessageSquareText size={16}/> Industry Guidance</span><h2 style={headingStyle}>Frequently Asked Questions About <span>Retail POS Systems</span></h2><p style={paragraphStyle}>Answers to common questions about retail billing, inventory, multi-store POS and system integrations.</p></div><div className="retail-faq-list">{faqs.map(([q,a],i)=><div className={`retail-faq ${openFaq===i?'is-open':''}`} key={q}><button type="button" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button><AnimatePresence initial={false}>{openFaq===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} style={{overflow:'hidden'}}><p>{a}</p></motion.div>}</AnimatePresence></div>)}</div></section>

        <section className="retail-final-cta"><span className="home-badge-tag">RETAIL SOFTWARE DEVELOPMENT</span><h2>Connect <span>Retail Billing, Inventory</span> and Store Management</h2><div><p>Need a better billing workflow, more organized inventory records or a connected retail management application?</p><p>FlyTowards helps retail businesses explore custom POS and management software solutions aligned with their products, store operations and technical requirements.</p><p><b>Share your retail software challenges and take the next step toward a practical digital solution.</b></p></div><nav><Link to="/contact">Discuss Your Retail POS Project <ArrowRight size={17}/></Link><Link to="/contact">Request a Consultation</Link></nav></section>

        <section className="retail-bottom-hero">
            <div className="retail-bottom-hero__copy">
                <span className="retail-kicker"><ShoppingBag size={16}/> Retail &amp; Omnichannel Commerce</span>
                <h2>Retail <span>Software</span></h2>
                <p>Software solutions for retail businesses looking to improve business workflows, customer experiences and operational processes.</p>
                <button className="retail-bottom-hero__button" type="button" onClick={toggleRetailScope} aria-expanded={showRetailScope} aria-controls="retail-software-solutions">Explore Retail Solutions <ArrowRight className={showRetailScope ? 'is-rotated' : ''} size={20}/></button>
            </div>
            <img src="/images (5).jpg" alt="Retail inventory management software used in a store" />
        </section>
        <AnimatePresence>
            {showRetailScope && <motion.section ref={retailScopeRef} id="retail-software-solutions" className="retail-solutions-drawer" initial={{ opacity: 0, height: 0, y: 25 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0, y: 20 }} transition={{ duration: .45, ease: [0.16, 1, 0.3, 1] }}>
                <div className="retail-solutions-drawer__intro">
                    <span className="retail-kicker"><ShoppingBag size={16}/> Retail Applications</span>
                    <h2>Retail <span>Software Solutions</span></h2>
                    <p>Retail businesses need to manage operational processes while also delivering effective experiences for customers and internal teams.</p>
                    <p>Custom software can be developed around specific retail workflows rather than requiring every process to follow a standard software model.</p>
                </div>
                <div className="retail-solutions-drawer__scope">
                    <h3>Retail software requirements may include:</h3>
                    <ul>
                        <li>Business process management</li>
                        <li>Customer-facing applications</li>
                        <li>Internal applications</li>
                        <li>Digital platforms</li>
                        <li>Reporting dashboards</li>
                        <li>Workflow automation</li>
                        <li>System integration</li>
                        <li>Business information management</li>
                    </ul>
                    <p className="retail-solutions-drawer__note"><CheckCircle2 size={18}/> The appropriate solution depends on the retailer&apos;s processes, users and business objectives.</p>
                    <Link className="retail-primary-link" to="/contact">Discuss a Retail Software Requirement <ArrowRight size={17}/></Link>
                </div>
            </motion.section>}
        </AnimatePresence>

    </>;
}
