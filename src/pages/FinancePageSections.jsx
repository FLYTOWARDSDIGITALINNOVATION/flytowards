import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Landmark, WalletCards, ReceiptText, BarChart3, Database, FileSpreadsheet,
    TrendingUp, Workflow, Building2, ClipboardCheck, CheckCircle2, ShieldCheck, Wrench, Zap,
    Globe, Link2, MessageSquareText, MapPin, ChevronDown, ArrowRight, PieChart, FileText,
    Calculator, Layers
} from 'lucide-react';

const challenges = [
    [FileSpreadsheet, 'Spreadsheet-Based Budget Planning', 'Budgets maintained across multiple spreadsheets can be difficult to consolidate, update and review consistently.'],
    [WalletCards, 'Limited Expense Visibility', 'Managers may struggle to understand spending across departments, projects or business units when expense information is fragmented.'],
    [ClipboardCheck, 'Manual Expense Approvals', 'Expense claims, supporting documents and approval decisions may require repeated communication and manual tracking.'],
    [Database, 'Disconnected Accounting Information', 'Budget records and accounting transactions may be maintained in separate systems, requiring manual reconciliation.'],
    [FileText, 'Complicated Financial Reporting', 'Preparing financial summaries and management reports may involve collecting and validating information from multiple sources.'],
    [BarChart3, 'Limited Budget Performance Tracking', 'Without structured budget-versus-actual reporting, organizations may find it difficult to identify spending variances and review their causes.']
];
const solutions = [
    [Calculator, 'Custom Budgeting Software', 'Develop applications for creating budgets, managing allocations, tracking revisions and comparing planned spending with actual results.', '/services/custom-software-development/'],
    [ReceiptText, 'Expense Management Applications', 'Build systems for recording employee or business expenses, attaching supporting documents and managing approval workflows.', '/services/business-process-automation/'],
    [BarChart3, 'Financial Analysis Tools', 'Create dashboards and reporting applications for reviewing financial trends, budget variances and selected business performance indicators.', '/services/web-application-development/'],
    [FileText, 'Financial Statement Analysis Tools', 'Develop software functionality for organizing financial statement data and calculating relevant ratios, comparisons and reporting summaries.', '/services/custom-software-development/'],
    [WalletCards, 'Cash Flow & Money Management Applications', 'Plan applications for monitoring business cash inflows, outflows, payment schedules and cash flow projections based on available data.', '/services/web-application-development/'],
    [PieChart, 'Financial Dashboards & System Integration', 'Build reporting dashboards and integrations between compatible budgeting, accounting, ERP and expense management applications.', '/services/api-development/']
];
const workflows = [
    ['Annual & Departmental Budget Planning', 'Finance teams can prepare budgets for financial periods, departments, projects or cost centers using structured allocation records.', 'Departments · Allocations · Planning'],
    ['Budget Requests & Approvals', 'Department managers can submit budget requests, provide supporting information and route requests through defined approval workflows.', 'Request · Review · Approval'],
    ['Expense Submission & Verification', 'Authorized employees can submit expense claims with categories, amounts and supporting documents for review.', 'Claim · Documents · Verify'],
    ['Budget-versus-Actual Tracking', 'Finance teams can compare approved budgets with actual spending information imported or recorded from relevant sources.', 'Budget · Actuals · Variance'],
    ['Cash Flow Monitoring', 'Authorized users can review recorded inflows, outflows and upcoming payment information to support cash flow planning.', 'Inflows · Outflows · Review'],
    ['Financial Analysis & Management Reporting', 'Management teams can review selected financial ratios, expense categories, budget variances and reporting dashboards.', 'Analysis · Indicators · Reports']
];
const benefits = [
    [Calculator, 'Organize Budget Planning', 'Maintain financial plans, spending categories and departmental allocations through structured records.'],
    [WalletCards, 'Improve Expense Visibility', 'Provide authorized managers with clearer access to recorded expenses and their approval status.'],
    [CheckCircle2, 'Simplify Financial Approvals', 'Support defined workflows for budget requests, expense claims and relevant authorization processes.'],
    [Link2, 'Connect Financial Information', 'Bring selected budgeting, expense and accounting information together through compatible integrations.'],
    [TrendingUp, 'Support Financial Decision-Making', 'Present relevant budget variances, cash flow information and financial indicators through reports and dashboards.']
];
const services = [
    [Wrench, 'Custom Software Development', 'Build budgeting, expense management and financial reporting applications around specific business requirements.', '/services/custom-software-development/'],
    [Building2, 'ERP Development', 'Develop connected functionality for budgeting, expense administration and relevant financial business processes.', '/services/erp-development/'],
    [Zap, 'Business Process Automation', 'Automate suitable budget approvals, expense reviews, notifications and administrative workflows.', '/services/business-process-automation/'],
    [Globe, 'Web Application Development', 'Create browser-based budgeting dashboards, financial reporting portals and expense management applications.', '/services/web-application-development/'],
    [Link2, 'API Development', 'Connect compatible accounting, ERP, banking-related and financial applications through supported interfaces.', '/services/api-development/'],
    [MessageSquareText, 'Software Consulting', 'Assess existing financial workflows, define software requirements and plan implementation priorities.', '/services/software-consulting/']
];
const steps = [
    ['Financial Workflow Discovery', 'Understand budgeting processes, expense categories, approval requirements, financial reporting and relevant business activities.'],
    ['Requirements & Existing System Assessment', 'Identify user roles, accounting periods, data sources, existing applications, reporting rules and integration requirements.'],
    ['Solution Architecture & Module Planning', 'Define budgeting modules, expense workflows, financial data relationships, permissions and development priorities.'],
    ['UI/UX Design & Software Development', 'Design suitable finance dashboards and interfaces, then develop agreed budgeting and financial management functionality.'],
    ['Testing & Financial Data Validation', 'Test calculation rules, budget allocations, expense approvals, data access, financial reporting and supported integrations using representative scenarios.'],
    ['Deployment & Support Planning', 'Prepare the application for implementation, review data migration and user onboarding needs, and define suitable maintenance arrangements.']
];
const differentiators = [
    ['Financial Workflow Understanding', 'We focus on identifying budgeting, expense management and reporting requirements during project discovery.'],
    ['Custom Business Requirements', 'We consider financial periods, departmental structures, approval rules and reporting needs when planning application functionality.'],
    ['Data Accuracy & Access Planning', 'We consider calculation validation, user permissions, audit requirements and appropriate handling of financial information.'],
    ['Integration & Implementation Planning', 'We assess existing accounting systems, compatible integrations and practical implementation requirements.']
];
const faqs = [
    ['What is budgeting software?', 'Budgeting software is an application used to create, manage and monitor financial budgets. Business budgeting systems may include departmental allocations, expense tracking, approval workflows and budget-versus-actual reporting.'],
    ['What is an expense management application?', 'An expense management application helps businesses record, categorize, review and approve expenses. Depending on its functionality, it may also support receipt attachments, reimbursement records and accounting integrations.'],
    ['What is the difference between budgeting software and accounting software?', 'Budgeting software focuses on financial planning, allocations and spending comparisons. Accounting software focuses on recording and organizing financial transactions and preparing accounting information. The systems may be integrated.'],
    ['What does a financial analysis tool do?', 'A financial analysis tool helps users review financial information through calculations, comparisons, charts and reports. It may support budget analysis, expense trends, cash flow reviews and relevant financial indicators.'],
    ['What is a financial statement analysis tool?', 'A financial statement analysis tool helps organize and analyze information from financial statements, such as income statements, balance sheets and cash flow statements. It may calculate financial ratios and period comparisons using available data.'],
    ['Can money management applications be developed for business use?', 'Yes. Business-focused money management applications can be developed to organize cash flow records, payment schedules, spending categories and financial reporting. Consumer personal finance applications have different requirements and should be scoped separately.'],
    ['How much does budgeting software development cost in Tamil Nadu?', 'Costs depend on budgeting modules, approval workflows, reporting calculations, integrations, user roles, security requirements and deployment scope. A detailed requirements assessment helps establish the project budget.'],
    ['Can budgeting software integrate with existing accounting or ERP applications?', 'Integration may be possible through compatible APIs, supported data exchange methods or other available interfaces. Technical feasibility depends on the existing systems, data structures and access permissions.']
];

const sectionStyle = { width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' };
const headingStyle = { fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1F2937', margin: '0 0 1rem', lineHeight: 1.2, letterSpacing: '-.5px' };
const introStyle = { color: '#667085', fontSize: '1rem', lineHeight: 1.75, margin: 0 };
const viewport = { once: true, amount: .16 };
const fade = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const FadeSection = ({ children, className = '', style = sectionStyle, id }) => <motion.section id={id} style={style} className={className} initial="hidden" whileInView="visible" viewport={viewport} variants={fade} transition={{ duration: .65, ease: [.16, 1, .3, 1] }}>{children}</motion.section>;

export default function FinancePageSections() {
    const [openFaq, setOpenFaq] = useState(null);
    return <>
        <FadeSection className="construction-overview">
            <div className="construction-overview-copy"><span className="construction-kicker"><Landmark size={16}/> Financial Planning</span><h2 style={headingStyle}>What Is Budgeting Software?</h2>
                <p style={introStyle}>Budgeting software is a digital application used to create, organize, monitor and review financial budgets.</p>
                <p style={introStyle}>For businesses, budgeting software may support departmental budgets, spending categories, expense allocations, budget revisions and comparisons between planned and actual financial activity.</p>
                <p style={introStyle}>An expense management application focuses on recording and processing business expenses, while a financial analysis tool helps users review financial information through calculations, reports and visualizations.</p>
                <p style={introStyle}>A financial statement analysis tool may support examination of income statements, balance sheets and cash flow statements when reliable financial data is available. These applications can operate independently or connect with existing accounting, ERP and business management systems.</p>
            </div>
            <div className="construction-highlights">{[[Calculator,'Budget Planning','Organize financial budgets, allocations and planning periods.'],[ReceiptText,'Expense Management','Record business expenses and coordinate approval workflows.'],[BarChart3,'Financial Reporting','Review budget performance, spending patterns and relevant financial indicators.'],[Database,'Connected Financial Data','Exchange information with compatible accounting and business applications.']].map(([Icon,title,desc])=><motion.div className="construction-highlight" key={title} variants={fade} transition={{ duration: .55 }}><span><Icon size={22}/></span><div><h3>{title}</h3><p>{desc}</p></div></motion.div>)}</div>
        </FadeSection>

        <FadeSection><motion.header className="construction-section-heading" initial="hidden" whileInView="visible" viewport={viewport} variants={fade}><span className="construction-kicker"><BarChart3 size={16}/> Financial Operations</span><h2 style={headingStyle}>Common Financial Management Challenges for Businesses</h2><p style={introStyle}>Organizations need reliable financial information to monitor spending, manage budgets and prepare reports. When information is maintained through manual or disconnected processes, financial coordination can become more complicated.</p></motion.header>
            <div className="construction-challenge-grid">{challenges.map(([Icon,title,desc],i)=><motion.article className="construction-challenge" key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: .5, delay: (i%3)*.08 }}><span className="construction-icon"><Icon size={23}/></span><h3>{title}</h3><p>{desc}</p></motion.article>)}</div>
        </FadeSection>

        <FadeSection id="finance-solutions"><header className="construction-section-heading"><span className="construction-kicker"><Layers size={16}/> Purpose-Built Applications</span><h2 style={headingStyle}>Our Budgeting &amp; Financial Management Software Solutions</h2><p style={introStyle}>FlyTowards helps organizations plan and develop software applications around budgeting, expense management and financial reporting requirements.</p></header>
            <div className="construction-solution-grid">{solutions.map(([Icon,title,desc,href],i)=><motion.article className="construction-solution" key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: .5, delay: (i%3)*.07 }}><span className="construction-icon"><Icon size={24}/></span><h3>{title}</h3><p>{desc}</p><Link to={href}>Explore related service <ArrowRight size={15}/></Link></motion.article>)}</div>
        </FadeSection>

        <FadeSection><header className="construction-section-heading"><span className="construction-kicker"><Workflow size={16}/> Finance Workflows</span><h2 style={headingStyle}>How Budgeting Software Supports Financial Workflows</h2><p style={introStyle}>Budgeting software becomes useful when it connects financial planning, expense records, approvals and reporting through defined business processes.</p></header>
            <div className="construction-workflow-list">{workflows.map(([title,desc,labels],i)=><motion.article className={`construction-workflow ${i%2?'is-reversed':''}`} key={title} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={viewport} transition={{duration:.55}}><div className="construction-workflow-copy"><span>WORKFLOW 0{i+1}</span><h3>{title}</h3><p>{desc}</p></div><div className="construction-flow-visual"><div className="construction-flow-head"><ClipboardCheck size={17}/><b>{title}</b><small>FINANCE WORKFLOW</small></div><div className="construction-flow-track"><i/><i/><i/></div><div className="construction-flow-labels">{labels.split(' · ').map(label=><span key={label}>{label}</span>)}</div></div></motion.article>)}</div>
            <p className="construction-note"><CheckCircle2 size={18}/> Illustrative workflow only. Accounting treatments, approval limits, financial periods and reporting calculations must be defined and validated by qualified finance stakeholders.</p>
        </FadeSection>

        <FadeSection className="construction-benefits-section">
            <motion.div className="construction-benefits-visual" initial={{opacity:0,x:-25}} whileInView={{opacity:1,x:0}} viewport={viewport} transition={{duration:.65}}><div className="construction-dash-title"><Landmark size={18}/> Financial planning overview <span>FY 2026⌄</span></div><div className="construction-dash-kpis"><div><small>Approved budget</small><b>₹24.8L</b><i>12 departments</i></div><div><small>Recorded expenses</small><b>₹16.2L</b><i>Within planned allocation</i></div></div><div className="construction-progress-panel"><div><b>Budget utilization</b><span>Department view</span></div>{[['Operations',72],['Marketing',58],['Technology',83]].map(([n,v])=><div className="construction-progress-row" key={n}><span>{n}</span><b>{v}%</b><i><em style={{width:`${v}%`}}/></i></div>)}</div><div className="construction-safety-strip"><CheckCircle2 size={18}/><span><b>Expense approvals</b><small>6 requests awaiting review</small></span><ReceiptText size={16}/></div></motion.div>
            <div className="construction-benefit-copy"><span className="construction-kicker"><CheckCircle2 size={16}/> Practical Outcomes</span><h2 style={headingStyle}>Benefits of Budgeting Software for Business Financial Management</h2><p style={introStyle}>Well-planned budgeting and expense management applications can help organizations structure financial workflows and access relevant information more consistently.</p><div className="construction-benefit-list">{benefits.map(([Icon,title,desc])=><article className="construction-benefit" key={title}><span><Icon size={20}/></span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></div>
        </FadeSection>

        <FadeSection><header className="construction-section-heading"><span className="construction-kicker"><Wrench size={16}/> Connected Capabilities</span><h2 style={headingStyle}>FlyTowards Software Development Services for Finance Workflows</h2><p style={introStyle}>Budgeting and financial management projects may require custom applications, ERP functionality, automation, reporting interfaces and system integrations.</p></header>
            <div className="construction-service-grid">{services.map(([Icon,title,desc,href])=><Link className="construction-service" to={href} key={title}><span className="construction-icon"><Icon size={21}/></span><h3>{title}</h3><p>{desc}</p><b>View service <ArrowRight size={14}/></b></Link>)}</div>
        </FadeSection>

        <FadeSection><header className="construction-section-heading"><span className="construction-kicker"><Zap size={16}/> Implementation Methodology</span><h2 style={headingStyle}>Our Budgeting Software Development Process</h2><p style={introStyle}>We follow a structured approach to understand financial workflows and plan software functionality around the organization&apos;s reporting and management requirements.</p></header>
            <div className="construction-timeline">{steps.map(([title,desc],i)=><motion.article className="construction-step" key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={viewport} transition={{duration:.5,delay:(i%3)*.08}}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{desc}</p></motion.article>)}</div>
        </FadeSection>

        <FadeSection className="construction-why"><div className="construction-why-copy"><span className="construction-kicker"><ShieldCheck size={16}/> Finance Software Planning</span><h2 style={headingStyle}>Why Choose FlyTowards for Budgeting Software Development?</h2><p style={introStyle}>Financial software should reflect how an organization plans spending, authorizes expenses and reviews financial information.</p><p style={introStyle}>A practical solution starts with understanding those processes before defining software modules, reporting calculations and integrations.</p><Link className="construction-primary-link" to="/contact">Discuss Your Budgeting Software Requirements <ArrowRight size={17}/></Link></div><div className="construction-differentiators">{differentiators.map(([title,desc],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></FadeSection>

        <FadeSection className="construction-regional"><div className="construction-regional-copy"><span className="construction-kicker"><MapPin size={16}/> Tamil Nadu &amp; South Tamil Nadu</span><h2 style={headingStyle}>Budgeting Software Solutions in Tamil Nadu</h2><p style={introStyle}>Businesses and organizations across Tamil Nadu need structured financial processes to manage budgets, expenses and operational reporting.</p><p style={introStyle}>Manufacturing companies, trading businesses, service providers, educational institutions and other organizations may have different budgeting requirements depending on their departments, projects, purchasing activities and financial reporting practices.</p><p style={introStyle}>In South Tamil Nadu, some businesses may rely on spreadsheets for expense tracking and budget preparation, while others use accounting or ERP applications that require additional reporting or approval functionality.</p><p style={introStyle}>FlyTowards provides finance software development solutions for organizations across Tamil Nadu, focusing on business budgeting, expense management, financial analysis and connected operational workflows.</p><p style={introStyle}>Whether your organization needs a focused expense management application or a broader financial planning system, we help evaluate software requirements around your existing processes.</p></div><div className="construction-regional-art"><div className="regional-art-core"><BarChart3 size={28}/><b>Finance Hub</b><small>Budget · Expense · Report</small></div><span className="regional-node regional-one">Budget plans</span><span className="regional-node regional-two">Expenses</span><span className="regional-node regional-three">Cash flow</span><span className="regional-node regional-four">Reports</span><div className="regional-art-foot"><span><i/> Tamil Nadu businesses</span><span>Plan · Review · Report</span></div></div></FadeSection>

        <FadeSection className="construction-faq-section"><div className="construction-faq-intro"><span className="construction-kicker"><MessageSquareText size={16}/> Industry Guidance</span><h2 style={headingStyle}>Frequently Asked Questions About Budgeting Software</h2><p style={introStyle}>Answers to common questions about business budgeting, expense management, financial analysis and accounting integrations.</p></div><div className="construction-faq-list">{faqs.map(([q,a],i)=><div className={`construction-faq ${openFaq===i?'is-open':''}`} key={q}><button type="button" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button><AnimatePresence initial={false}>{openFaq===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} style={{overflow:'hidden'}}><p>{a}</p></motion.div>}</AnimatePresence></div>)}</div></FadeSection>

        <motion.section className="construction-final-cta" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={viewport} transition={{duration:.65}}><span>FINANCE SOFTWARE DEVELOPMENT</span><h2>Connect Your Budgets, Expenses and Financial Reporting</h2><div><p>Need better visibility into business spending, more organized expense approvals or a connected budgeting and reporting application?</p><p>FlyTowards helps organizations explore custom finance software solutions aligned with their financial workflows, reporting requirements and existing systems.</p><p><b>Share your budgeting and financial management challenges and take the next step toward a practical software solution.</b></p></div><nav><Link to="/contact">Discuss Your Finance Software Project <ArrowRight size={17}/></Link><Link to="/contact">Request a Consultation</Link></nav></motion.section>
    </>;
}
