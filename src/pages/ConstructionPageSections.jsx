import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
    HardHat, ClipboardList, Building2, Database, Layers, BarChart3, Sliders, Zap, Link2,
    CheckCircle2, Users, PackageCheck, ShieldCheck, Eye, Clock3, Truck, MapPin,
    ChevronDown, ArrowRight, FileCheck2, CalendarDays, Boxes, Workflow, Wrench, MessageSquareText, Sparkles
} from 'lucide-react';

const challenges = [
    [Users, 'Disconnected Contractor Information', 'Contractor profiles, agreements, assignments and supporting documents may be stored across separate files or applications.'],
    [Eye, 'Limited Project Progress Visibility', 'Project managers may depend on manual updates from different sites to understand current work status.'],
    [Workflow, 'Complicated Subcontractor Coordination', 'Managing subcontractor responsibilities, assigned work and progress records can require repeated communication.'],
    [PackageCheck, 'Manual Material Request Processes', 'Material requisitions, approvals and delivery records may be difficult to coordinate across project sites and purchasing teams.'],
    [ShieldCheck, 'Fragmented Safety Documentation', 'Site inspection checklists, training records and incident reports may be maintained through inconsistent documentation processes.'],
    [BarChart3, 'Delayed Construction Reporting', 'Management teams may need to consolidate project schedules, work updates and contractor information from several sources.']
];

const solutions = [
    [HardHat, 'Contractor Management Software', 'Develop applications to maintain contractor profiles, project assignments, document records and approval workflows.', '/services/custom-software-development/'],
    [ClipboardList, 'Building Project Management Software', 'Build systems for managing project activities, milestones, task assignments, schedules and progress reporting.', '/services/web-application-development/'],
    [Building2, 'Construction Company Management Software', 'Create integrated applications for selected construction administration, project coordination, procurement and business management processes.', '/services/erp-development/'],
    [Users, 'Subcontractor & Workforce Management Software', 'Organize subcontractor records, work allocations, attendance-related information and relevant site coordination workflows.', '/services/mobile-app-development/'],
    [ShieldCheck, 'Construction Safety Management Systems', 'Develop software functionality for safety checklists, inspection records, incident reporting and related documentation workflows.', '/services/business-process-automation/'],
    [Boxes, 'Construction Materials & Site Reporting Software', 'Create applications for material requisitions, stock-related records, site updates and operational dashboards.', '/services/api-development/']
];

const workflows = [
    ['Contractor Registration & Documentation', 'Administrative teams can maintain contractor profiles, contact details, relevant agreements and required documentation records.', 'Profiles · Agreements · Documents'],
    ['Project & Work Assignment', 'Project managers can associate contractors or subcontractors with specific projects, tasks and work packages.', 'Projects · Tasks · Work packages'],
    ['Construction Progress Tracking', 'Site teams can record work updates, milestone status and relevant observations for management review.', 'Site updates · Milestones · Review'],
    ['Material Requisition & Approval', 'Site personnel can submit material requests, route them for approval and maintain related procurement or delivery information.', 'Request · Approval · Delivery'],
    ['Safety Inspection & Incident Records', 'Authorized site personnel can record safety inspections, checklist observations, incident details and corrective-action tracking information.', 'Checklist · Incident · Follow-up'],
    ['Contractor Billing & Administrative Review', 'Where required, applications can help organize work completion records, contractor invoices, approval status and payment-related documentation.', 'Work completion · Invoice · Approval']
];

const benefits = [
    [Users, 'Organize Contractor Information', 'Maintain contractor profiles, assignments and relevant documentation in a structured system.'],
    [Eye, 'Improve Project Visibility', 'Provide authorized teams with clearer access to project activities, milestone information and recorded progress updates.'],
    [Workflow, 'Simplify Site Coordination', 'Connect selected contractor assignments, material requests and approval workflows across project teams.'],
    [ShieldCheck, 'Support Safety Documentation', 'Organize safety checklists, inspection records and follow-up actions to support established site safety procedures.'],
    [BarChart3, 'Improve Construction Reporting', 'Present relevant project, contractor and site information through dashboards and management reports.']
];

const services = [
    [Wrench, 'Custom Software Development', 'Build construction applications around contractor management, project workflows and company-specific requirements.', '/services/custom-software-development/'],
    [Layers, 'Web Application Development', 'Develop browser-based project dashboards, contractor portals and construction administration applications.', '/services/web-application-development/'],
    [ClipboardList, 'Mobile App Development', 'Create mobile applications for suitable site reporting, task updates, material requests and inspection workflows.', '/services/mobile-app-development/'],
    [Zap, 'Business Process Automation', 'Automate suitable contractor approvals, material requisitions, notifications and administrative workflows.', '/services/business-process-automation/'],
    [Building2, 'ERP Development', 'Develop connected functionality for relevant construction procurement, project administration and business management processes.', '/services/erp-development/'],
    [Link2, 'API Development', 'Connect compatible construction applications, accounting systems, procurement tools and project management software.', '/services/api-development/']
];

const steps = [
    ['Construction Workflow Discovery', 'Understand contractor coordination, project activities, site reporting, material processes and administrative requirements.'],
    ['Requirements & Existing System Assessment', 'Identify user roles, project structures, document requirements, existing applications and integration needs.'],
    ['Solution Architecture & Module Planning', 'Define contractor management modules, project workflows, information relationships and development priorities.'],
    ['UI/UX Design & Software Development', 'Design suitable interfaces and develop agreed construction management software functionality.'],
    ['Testing & Workflow Validation', 'Test contractor records, permissions, approval workflows, project updates, document handling and supported integrations.'],
    ['Deployment & Support Planning', 'Prepare the application for implementation, review data migration and user onboarding needs, and define suitable maintenance arrangements.']
];

const differentiators = [
    ['Construction Workflow Understanding', 'We focus on identifying contractor, project and site management requirements during software planning.'],
    ['Custom Application Requirements', 'We consider project structures, contractor roles, approval processes and reporting needs when defining functionality.'],
    ['Site-Friendly Interface Planning', 'We consider how project managers, administrators and authorized site personnel will use the application across suitable devices.'],
    ['Integration & Implementation Planning', 'We assess existing software dependencies, compatible integrations and practical deployment requirements.']
];

const faqs = [
    ['What is contractor management software?', 'Contractor management software is an application used to organize contractor information, work assignments, documentation, approval workflows and related operational records.'],
    ['What is the difference between contractor management software and building project management software?', 'Contractor management software focuses on contractors, subcontractors, assignments and related documentation. Building project management software covers broader project activities, schedules, milestones, tasks and progress reporting. The two may be integrated.'],
    ['What features should construction company management software include?', 'Common features include project records, contractor management, work assignments, material requests, document management, approvals and reporting. Required modules depend on the construction company\'s operations.'],
    ['How do construction safety management systems work?', 'Construction safety management systems help organize safety-related records, inspections, checklists, incident reports and follow-up actions. They support established safety processes but do not replace qualified safety personnel, on-site controls or legal compliance responsibilities.'],
    ['Can contractor management software track subcontractor work and payments?', 'Yes. Depending on the requirements, software can maintain subcontractor assignments, work completion records, invoice information and payment approval status. Actual payment processing requires suitable financial workflows and integrations.'],
    ['Can construction management software be used on mobile devices at project sites?', 'Yes. Suitable web or mobile applications can support site reporting, task updates, inspection forms and document access. Offline functionality, if required, must be specifically designed and tested.'],
    ['How much does contractor management software development cost in Tamil Nadu?', 'Costs depend on the number of modules, contractor and project workflows, user roles, mobile requirements, integrations, document handling and deployment scope. A requirements assessment helps determine the project budget.'],
    ['Can contractor management software integrate with accounting or ERP systems?', 'Integration may be possible through compatible APIs, supported data exchange methods or other available interfaces. Technical feasibility depends on the existing systems and required information flows.']
];

const sectionStyle = { width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2, textAlign: 'left' };
const headingStyle = { fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#1e1b4b', margin: '0 0 1rem', lineHeight: 1.2, letterSpacing: '-.5px' };
const introStyle = { color: '#667085', fontSize: '1.08rem', lineHeight: 1.75, margin: 0 };

export default function ConstructionPageSections() {
    const [openFaq, setOpenFaq] = useState(null);
    const [showConstructionSolutions, setShowConstructionSolutions] = useState(false);
    return <>
        <section style={sectionStyle} className="construction-overview">
            <div className="construction-overview-copy">
                <span className="construction-kicker"><HardHat size={16}/> Construction Operations</span>
                <h2 style={headingStyle}>What Is <span style={{color:'#facc15'}}>Contractor Management Software?</span></h2>
                <p style={introStyle}>Contractor management software is a digital application used to organize and manage information related to contractors, subcontractors, work assignments, documentation and operational coordination.</p>
                <p style={introStyle}>Depending on business requirements, it may support contractor registration, project allocation, work progress updates, document tracking, approval workflows and performance-related records.</p>
                <p style={introStyle}>For construction companies, these capabilities may connect with broader building project management software covering schedules, site activities, material requirements and reporting.</p>
                <p style={introStyle}>Construction safety management systems can also support checklists, incident reporting and document tracking, subject to appropriate safety procedures and professional oversight.</p>
            </div>
            <div className="construction-highlights">{[
                [Users,'Contractor Coordination','Organize contractor profiles, assignments and project-related information.'],
                [Eye,'Project Visibility','Track construction activities, milestones and progress updates.'],
                [Workflow,'Site Workflow Management','Structure material requests, work approvals and site reporting.'],
                [FileCheck2,'Documentation & Safety Records','Maintain relevant contractor documents, inspection records and safety-related information.']
            ].map(([Icon,title,desc]) => <div className="construction-highlight" key={title}><span><Icon size={22}/></span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div>
        </section>

        <section style={sectionStyle}>
            <header className="construction-section-heading"><span className="construction-kicker"><Sliders size={16}/> Operational Roadblocks</span><h2 style={headingStyle}>Common Software Challenges in <span style={{color:'#facc15'}}>Construction Operations</span></h2><p style={introStyle}>Construction companies often manage several teams, contractors, suppliers and project locations at the same time. When information is maintained across disconnected tools, everyday coordination can become more complicated.</p></header>
            <div className="construction-challenge-grid">{challenges.map(([Icon,title,desc]) => <article className="construction-challenge" key={title}><span className="construction-icon"><Icon size={23}/></span><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </section>

        <section id="construction-solutions" style={sectionStyle} className="construction-solutions-section">
            <header className="construction-section-heading"><span className="construction-kicker"><Layers size={16}/> Purpose-Built Applications</span><h2 style={headingStyle}>Our Contractor &amp; Construction Management <span style={{color:'#facc15'}}>Software Solutions</span></h2><p style={introStyle}>FlyTowards helps construction businesses plan and develop applications around contractor coordination, project activities and site administration.</p></header>
            <div className="construction-solution-grid">{solutions.map(([Icon,title,desc,link]) => <article className="construction-solution" key={title}><span className="construction-icon"><Icon size={24}/></span><h3>{title}</h3><p>{desc}</p><Link to={link}>Explore related service <ArrowRight size={15}/></Link></article>)}</div>
        </section>

        <section style={sectionStyle}>
            <header className="construction-section-heading"><span className="construction-kicker"><Workflow size={16}/> Project &amp; Jobsite Workflows</span><h2 style={headingStyle}>How Contractor Management Software <span style={{color:'#facc15'}}>Supports Construction Workflows</span></h2><p style={introStyle}>Contractor management software becomes useful when it helps construction teams organize responsibilities, documentation and information across project activities.</p></header>
            <div className="construction-workflow-list">{workflows.map(([title,desc,labels],i) => <article className={`construction-workflow ${i%2 ? 'is-reversed' : ''}`} key={title}><div className="construction-workflow-copy"><span>WORKFLOW 0{i+1}</span><h3>{title}</h3><p>{desc}</p></div><div className="construction-flow-visual"><div className="construction-flow-head"><ClipboardList size={17}/><b>{title}</b><small>PROJECT WORKFLOW</small></div><div className="construction-flow-track"><i/><i/><i/></div><div className="construction-flow-labels">{labels.split(' · ').map(label=><span key={label}>{label}</span>)}</div></div></article>)}</div>
            <p className="construction-note"><CheckCircle2 size={18}/> Illustrative workflow only. Actual construction processes, contractual requirements, safety approvals and payment rules should reflect the company’s operations and applicable obligations.</p>
        </section>

        <section style={sectionStyle} className="construction-benefits-section">
            <div className="construction-benefits-visual"><div className="construction-dash-title"><HardHat size={18}/> Site operations overview <span>THIS WEEK⌄</span></div><div className="construction-dash-kpis"><div><small>Active projects</small><b>08</b><i>Across 4 locations</i></div><div><small>Contractors assigned</small><b>124</b><i>12 teams on site</i></div></div><div className="construction-progress-panel"><div><b>Project progress</b><span>Updated today</span></div>{[['Residential Block A',76],['Warehouse Phase 2',54],['Roadworks Section C',88]].map(([n,v])=><div className="construction-progress-row" key={n}><span>{n}</span><b>{v}%</b><i><em style={{width:`${v}%`}}/></i></div>)}</div><div className="construction-safety-strip"><ShieldCheck size={18}/><span><b>Site checklist</b><small>Inspection record up to date</small></span><CheckCircle2 size={16}/></div></div>
            <div className="construction-benefit-copy"><span className="construction-kicker"><CheckCircle2 size={16}/> Practical Outcomes</span><h2 style={headingStyle}>Benefits of Contractor Management Software for <span style={{color:'#facc15'}}>Construction Companies</span></h2><p style={introStyle}>Well-planned construction software can help organizations coordinate contractors, project activities and operational information through structured digital workflows.</p><div className="construction-benefit-list">{benefits.map(([Icon,title,desc])=><article className="construction-benefit" key={title}><span><Icon size={20}/></span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></div>
        </section>

        <section style={sectionStyle}>
            <header className="construction-section-heading"><span className="construction-kicker"><Wrench size={16}/> Connected Capabilities</span><h2 style={headingStyle}>FlyTowards Software Development Services for <span style={{color:'#facc15'}}>Construction Businesses</span></h2><p style={introStyle}>Construction management software projects may require custom applications, mobile access, workflow automation and integrations between existing business systems.</p></header>
            <div className="construction-service-grid">{services.map(([Icon,title,desc,link])=><Link className="construction-service" to={link} key={title}><span className="construction-icon"><Icon size={21}/></span><h3>{title}</h3><p>{desc}</p><b>View service <ArrowRight size={14}/></b></Link>)}</div>
        </section>

        <section style={sectionStyle}>
            <header className="construction-section-heading"><span className="construction-kicker"><Zap size={16}/> Implementation Methodology</span><h2 style={headingStyle}>Our Contractor Management Software <span style={{color:'#facc15'}}>Development Process</span></h2><p style={introStyle}>We follow a structured approach to understand construction workflows and plan software functionality around project and contractor management requirements.</p></header>
            <div className="construction-timeline">{steps.map(([title,desc],i)=><article className="construction-step" key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </section>

        <section style={sectionStyle} className="construction-why">
            <div className="construction-why-copy"><span className="construction-kicker"><ShieldCheck size={16}/> Engineering Excellence</span><h2 style={headingStyle}>Why Choose FlyTowards for <span style={{color:'#facc15'}}>Contractor Management Software?</span></h2><p style={introStyle}>Construction software should reflect how contractors, site teams and project managers exchange information and coordinate responsibilities.</p><p style={introStyle}>A practical solution begins with understanding those workflows before defining the application’s features.</p><Link className="construction-primary-link" to="/contact">Discuss Your Construction Software Requirements <ArrowRight size={17}/></Link></div>
            <div className="construction-differentiators">{differentiators.map(([title,desc],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div>
        </section>

        <section style={sectionStyle} className="construction-regional"><div className="construction-regional-copy"><span className="construction-kicker"><MapPin size={16}/> Tamil Nadu &amp; South Tamil Nadu</span><h2 style={headingStyle}>Contractor Management Software Solutions in <span style={{color:"#facc15"}}>Tamil Nadu</span></h2><p style={introStyle}>Construction businesses across Tamil Nadu manage residential, commercial, industrial and infrastructure-related projects with different contractor arrangements and operational requirements.</p><p style={introStyle}>In South Tamil Nadu, builders, contractors and construction companies may coordinate multiple project locations, subcontractors, material suppliers and site teams.</p><p style={introStyle}>Some businesses rely on manual work updates and spreadsheet-based contractor records. Others may use separate project management, accounting and procurement applications that require better coordination.</p><p style={introStyle}>FlyTowards provides construction software development solutions for businesses across Tamil Nadu, focusing on contractor management, project information, site workflows and administrative requirements.</p><p style={introStyle}>Whether your organization needs a dedicated contractor management system or broader construction company management software, we help evaluate the functionality required for your operations.</p></div><div className="construction-regional-art"><div className="regional-art-core"><HardHat size={28}/><b>Project Hub</b><small>Connected site operations</small></div><span className="regional-node regional-one">Contractors</span><span className="regional-node regional-two">Project sites</span><span className="regional-node regional-three">Materials</span><span className="regional-node regional-four">Safety records</span><div className="regional-art-foot"><span><i/> Tamil Nadu operations</span><span>Plan · Coordinate · Review</span></div></div></section>

        <section style={sectionStyle} className="construction-faq-section"><div className="construction-faq-intro"><span className="construction-kicker"><MessageSquareText size={16}/> Industry Guidance</span><h2 style={headingStyle}>Frequently Asked Questions About <span style={{color:"#facc15"}}>Contractor Management Software</span></h2><p style={introStyle}>Answers to common questions about contractor coordination, construction project workflows, safety records and software integrations.</p></div><div className="construction-faq-list">{faqs.map(([q,a],i)=><div className={`construction-faq ${openFaq===i?'is-open':''}`} key={q}><button type="button" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button><AnimatePresence initial={false}>{openFaq===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} style={{overflow:'hidden'}}><p>{a}</p></motion.div>}</AnimatePresence></div>)}</div></section>

        <section className="construction-final-cta"><span className="home-badge-tag">CONSTRUCTION SOFTWARE DEVELOPMENT</span><h2>Connect Your Contractors, Projects and Construction Operations</h2><div><p>Need better contractor coordination, clearer project updates or more organized site administration?</p><p>FlyTowards helps construction businesses explore custom contractor management software and connected project management solutions aligned with their operational requirements.</p><p><b>Share your construction software challenges and take the next step toward a practical digital solution.</b></p></div><nav><Link to="/contact">Discuss Your Construction Software Project <ArrowRight size={17}/></Link><Link to="/contact">Request a Consultation</Link></nav></section>

        <section className="construction-bottom-hero" aria-label="Construction Software">
            <div className="construction-bottom-hero__copy">
                <span className="home-badge-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><HardHat size={18} color="#EAB308"/> CONSTRUCTION &amp; INFRASTRUCTURE TECH</span>
                <h2>Construction Software</h2>
                <p>Software designed around construction-related workflows, project processes, operational requirements and business information.</p>
                <button type="button" className="construction-bottom-hero__button" onClick={() => setShowConstructionSolutions(value => !value)} aria-expanded={showConstructionSolutions} aria-controls="construction-solutions-drawer">
                    Explore Construction Solutions <ArrowRight className={showConstructionSolutions ? 'is-rotated' : ''} size={20}/>
                </button>
            </div>
            <img src="/images (8).jpg" alt="Construction team coordinating a project around digital plans" />
        </section>

        <AnimatePresence initial={false}>
            {showConstructionSolutions && <motion.section id="construction-solutions-drawer" className="construction-solutions-drawer" initial={{height:0,opacity:0,y:18}} animate={{height:'auto',opacity:1,y:0}} exit={{height:0,opacity:0,y:12}} transition={{duration:.45,ease:[.16,1,.3,1]}}>
                <div className="construction-solutions-drawer__intro">
                    <span className="construction-kicker"><Sparkles size={16}/> Project &amp; Jobsite Engineering</span>
                    <h2>Construction Software Solutions</h2>
                    <p>Construction businesses often manage multiple workflows, people, projects and operational requirements.</p>
                    <p>Custom software can provide digital support for specific processes where standard applications do not adequately fit the business requirement.</p>
                    <h3>Construction software may address:</h3>
                </div>
                <div className="construction-requirements-grid">{[
                    [ClipboardList,'Project-related workflows'],[Building2,'Business operations'],[Database,'Information management'],[Layers,'Internal applications'],[BarChart3,'Reporting'],[Sliders,'Process management'],[Zap,'Workflow automation'],[Link2,'System integration']
                ].map(([Icon,title])=><div className="construction-requirement" key={title}><Icon size={19}/><span>{title}</span></div>)}</div>
                <p className="construction-scope-note"><CheckCircle2 size={19}/> The software scope is defined around the organisation&apos;s processes, users and objectives.</p>
                <div className="construction-drawer-cta"><span>Have a construction workflow to improve?</span><Link to="/contact">Discuss a Construction Software Requirement <ArrowRight size={17}/></Link></div>
            </motion.section>}
        </AnimatePresence>

    </>;
}
