import { useEffect, useState } from 'react';
import {
  ArrowRight, BarChart3, Bell, Building2, Check, ChevronDown, CircleDollarSign,
  ClipboardList, Database, GraduationCap, HardHat, HeartPulse, Layers3, Mail,
  MapPin, Menu, MessageCircle, RefreshCw, ShoppingBag, Sparkles, Target,
  TrendingUp, Truck, Users, Workflow, Zap
} from 'lucide-react';
import './CRMDev.css';

const services = [
  ['Custom CRM Software Development', 'Build CRM applications tailored to your sales processes, customer records and business requirements.', Layers3],
  ['Lead & Sales Pipeline Management', 'Organize enquiries, assign leads, track opportunities and monitor sales stages.', TrendingUp],
  ['Customer Database Management', 'Centralize customer profiles, contact information, interaction history and related business records.', Database],
  ['CRM Workflow Automation', 'Automate follow-up reminders, task assignments, notifications and selected sales activities.', Zap],
  ['CRM Integration & Data Management', 'Connect compatible CRM, email, billing and other business applications to improve information flow.', Workflow],
  ['CRM Modernization & Enhancement', 'Improve existing CRM applications, update features and adapt workflows to changing business requirements.', RefreshCw],
];
const industries = [
  ['Manufacturing', 'Manage dealer enquiries, distributor relationships, sales opportunities, quotations and customer follow-ups.', Building2],
  ['Healthcare', 'Organize service enquiries, appointment-related communication and administrative customer interactions, with appropriate privacy controls.', HeartPulse],
  ['Retail & Wholesale', 'Track customer accounts, repeat orders, sales enquiries, distributor relationships and follow-up activities.', ShoppingBag],
  ['Education', 'Manage admission enquiries, prospective student follow-ups, communication records and enrollment-related workflows.', GraduationCap],
  ['Construction & Real Estate', 'Track project enquiries, prospective clients, site visit schedules, quotations and sales follow-ups.', HardHat],
  ['Logistics & Transportation', 'Manage business enquiries, client accounts, service quotations, customer communication and ongoing relationships.', Truck],
];
const process = [
  ['CRM Requirement Analysis', 'Understand your customer management process, sales team structure, challenges and required features.'],
  ['Workflow Planning & UI/UX Design', 'Define lead stages, customer records, user roles, dashboards and application interfaces.'],
  ['CRM Application Development', 'Develop customer management modules, sales workflows, reporting features and required functionality.'],
  ['Testing & Quality Assurance', 'Review CRM functionality, user permissions, data handling and important sales workflows.'],
  ['Deployment & Implementation', 'Prepare the CRM application for use and configure agreed workflows and access settings.'],
  ['Maintenance & Enhancements', 'Plan software updates, issue resolution and future improvements based on business requirements.'],
];
const faqs = [
  ['What is CRM development?', 'CRM development is the process of creating software to manage customer information, sales leads, communication records, sales pipelines and customer-related workflows.'],
  ['What is a custom CRM system?', "A custom CRM system is customer relationship management software designed around an organization's specific sales processes, users, reporting needs and business requirements."],
  ['What is the difference between custom CRM and ready-made CRM software?', 'Ready-made CRM software provides predefined features and configuration options. Custom CRM software is developed for specific business workflows, although it usually requires more development effort and ongoing maintenance.'],
  ['How much does CRM development cost in Tamil Nadu?', 'Costs depend on CRM modules, user roles, automation requirements, integrations, data migration and project complexity. A requirements assessment helps determine the development budget.'],
  ['How long does custom CRM development take?', 'Development timelines vary based on features, workflow complexity, integrations, data requirements and testing scope.'],
  ['Can a custom CRM integrate with existing business software?', 'Yes. A custom CRM can often connect with compatible ERP, accounting, email and other business applications through supported APIs or integration methods.'],
  ['How do I choose a CRM development company?', "Evaluate the company's understanding of sales workflows, relevant technical capabilities, user experience approach, integration planning, testing practices and maintenance options."],
];

function Dashboard() {
  return <div className="crm-dash-wrap" aria-label="Illustration of a CRM dashboard showing leads, sales pipeline and follow-up activities">
    <div className="crm-orbit crm-orbit-one"/><div className="crm-orbit crm-orbit-two"/>
    <div className="crm-dash">
      <div className="crm-dash-top"><div className="crm-dash-brand"><span className="crm-brand-mark"><Target size={17}/></span> flowdesk</div><div className="crm-dash-top-actions"><span>⌕</span><span className="crm-avatar">AS</span></div></div>
      <div className="crm-dash-body"><aside className="crm-dash-side"><span className="active"><BarChart3 size={16}/></span><span><Users size={16}/></span><span><ClipboardList size={16}/></span><span><MessageCircle size={16}/></span><span><SettingsIcon/></span></aside>
        <div className="crm-dash-main"><div className="crm-dash-heading"><div><small>MONDAY, OCTOBER 12</small><h3>Sales overview</h3></div><span className="crm-period">This month⌄</span></div>
          <div className="crm-stats"><div><small>Total leads</small><b>2,486</b><em>↑ 12.8%</em></div><div><small>Won deals</small><b>184</b><em>↑ 8.2%</em></div><div><small>Pipeline value</small><b>₹48.6L</b><em>↑ 16.4%</em></div></div>
          <div className="crm-dash-grid"><div className="crm-chart"><div className="crm-card-head"><b>Pipeline activity</b><small>Last 7 days</small></div><div className="crm-chart-area"><div className="crm-ylabels"><i>80</i><i>60</i><i>40</i><i>20</i></div><div className="crm-bars">{[36,55,44,75,54,91,67].map((h,i)=><span key={i} style={{'--bar':`${h}%`}}><i/></span>)}</div></div><div className="crm-xlabels"><i>Mon</i><i>Tue</i><i>Wed</i><i>Thu</i><i>Fri</i><i>Sat</i><i>Sun</i></div></div>
            <div className="crm-activity"><div className="crm-card-head"><b>Today&apos;s follow-ups</b><small>View all</small></div>{[['RK','Ravi Kumar','Proposal review','10:30 AM'],['PM','Priya Mehta','Product demo','11:45 AM'],['AJ','Arun Joseph','Discovery call','02:00 PM']].map(([i,n,t,tm])=><div className="crm-follow" key={n}><span>{i}</span><div><b>{n}</b><small>{t}</small></div><time>{tm}</time></div>)}</div>
          </div>
        </div>
      </div>
    </div><div className="crm-float-note"><span><Bell size={15}/></span><div><b>Follow-up reminder</b><small>Lead: Greenfield Traders</small></div><i/></div>
    <div className="crm-float-value"><span><CircleDollarSign size={17}/></span><div><small>Deal closed</small><b>₹2,40,000</b></div></div>
  </div>;
}
function SettingsIcon(){ return <Menu size={16}/>; }

export default function CRMDev() {
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'CRM Development Services in Tamil Nadu | FlyTowards';
    const setMeta = (selector, attr, value, create) => {
      let el = document.querySelector(selector);
      if (!el) { el = document.createElement(create); if(create==='meta') el.name = selector.includes('description') ? 'description' : 'keywords'; if(create==='link') el.rel='canonical'; document.head.appendChild(el); }
      el.setAttribute(attr,value); return el;
    };
    setMeta('meta[name="description"]','content','CRM development services in Tamil Nadu. FlyTowards builds custom CRM systems to manage leads, automate sales workflows and improve customer relationships.','meta');
    setMeta('meta[name="keywords"]','content','crm development, custom crm development, crm developers, custom crm system, crm development company','meta');
    setMeta('link[rel="canonical"]','href','https://flytowardsdigitalinnovation.com/services/crm-development/','link');
    const schemaId='crm-development-schema';
    const schema=document.createElement('script'); schema.id=schemaId; schema.type='application/ld+json';
    schema.textContent=JSON.stringify({'@context':'https://schema.org','@graph':[
      {'@type':'Service','name':'CRM Development Services','serviceType':'Custom CRM Development','url':'https://flytowardsdigitalinnovation.com/services/crm-development/','areaServed':{'@type':'AdministrativeArea','name':'Tamil Nadu'},'provider':{'@type':'Organization','name':'FlyTowards Digital Innovation','url':'https://flytowardsdigitalinnovation.com/'},'description':'CRM development services in Tamil Nadu. FlyTowards builds custom CRM systems to manage leads, automate sales workflows and improve customer relationships.'},
      {'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Home','item':'https://flytowardsdigitalinnovation.com/'},{'@type':'ListItem','position':2,'name':'Services','item':'https://flytowardsdigitalinnovation.com/services'},{'@type':'ListItem','position':3,'name':'CRM Development','item':'https://flytowardsdigitalinnovation.com/services/crm-development/'}]},
      {'@type':'FAQPage','mainEntity':faqs.map(([name,answer])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text:answer}}))}
    ]}); document.head.appendChild(schema);
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.crm-reveal').forEach((element) => revealObserver.observe(element));
    return ()=>{ schema.remove(); revealObserver.disconnect(); };
  },[]);
  return <main className="crm-page">
    <section className="crm-section crm-hero"><div className="crm-container crm-hero-grid"><div className="crm-hero-copy crm-reveal"><span className="crm-eyebrow"><span/> CRM DEVELOPMENT · TAMIL NADU</span><h1>CRM Development Services <span>in Tamil Nadu</span></h1><h2>Manage Leads, Sales and Customer Relationships in One Place</h2><p>Scattered customer records, missed follow-ups and disconnected sales activities can make customer management difficult.</p><p>FlyTowards provides CRM development services for businesses across Tamil Nadu, with a focus on South Tamil Nadu. We develop custom CRM systems to help teams organize leads, track sales opportunities, manage customer information and simplify daily workflows.</p><div className="crm-actions"><a className="crm-btn crm-btn-primary" href="/contact">Discuss Your CRM Project <ArrowRight size={17}/></a><a className="crm-btn crm-btn-secondary" href="#services">Explore Our Services <ArrowRight size={17}/></a></div><div className="crm-trust"><span><Check size={15}/> Built around your workflow</span><span><Check size={15}/> Designed to grow with you</span></div></div><div className="crm-reveal crm-delay"><Dashboard/></div></div><div className="crm-hero-bottom"/></section>

    <section className="crm-section crm-overview"><div className="crm-container crm-overview-grid"><div className="crm-reveal"><span className="crm-kicker">A CLEARER VIEW OF EVERY CUSTOMER</span><h2>What Is CRM <span>Development?</span></h2><p>CRM (Customer Relationship Management) development involves designing and building software to manage customer information, sales activities, business interactions and follow-up processes.</p><p>A custom CRM system is developed around an organization's specific workflows rather than requiring every team to follow the structure of ready-made software.</p><p>Custom CRM development helps businesses organize customer records, improve sales coordination and manage customer-related activities through a centralized application.</p></div><div className="crm-highlights">{[['Lead Management','Organize enquiries, prospects and lead information.',Users],['Sales Pipeline Tracking','Monitor opportunities through different sales stages.',TrendingUp],['Follow-Up Automation','Manage reminders, tasks and recurring activities.',Bell],['Customer Data Management','Maintain organized customer records and interaction history.',Database]].map(([t,d,I],i)=><div className="crm-highlight crm-reveal" style={{'--i':i}} key={t}><span className="crm-icon"><I size={21}/></span><div><h3>{t}</h3><p>{d}</p></div><ArrowRight size={17}/></div>)}</div></div></section>

    <section id="services" className="crm-section crm-services"><div className="crm-container"><div className="crm-section-head crm-reveal"><span className="crm-kicker">WHAT WE BUILD</span><h2>Our Custom CRM <span>Development Services</span></h2><p>We develop CRM applications designed to support sales teams, customer-facing employees and business management workflows.</p></div><div className="crm-service-grid">{services.map(([t,d,I],i)=><article className="crm-service-card crm-reveal" style={{'--i':i}} key={t}><div className="crm-service-top"><span className="crm-icon"><I size={22}/></span><small>0{i+1}</small></div><h3>{t}</h3><p>{d}</p><span className="crm-card-arrow"><ArrowRight size={17}/></span></article>)}</div></div></section>

    <section className="crm-section crm-benefits"><div className="crm-container crm-benefit-grid"><div className="crm-benefit-visual crm-reveal"><div className="crm-benefit-visual-inner"><div className="crm-bv-top"><span className="crm-icon"><BarChart3 size={20}/></span><span>Sales performance</span><small>•••</small></div><div className="crm-bv-number"><b>₹32.8L</b><span>↑ 14.6% this month</span></div><div className="crm-bv-chart">{[25,39,32,53,47,66,50,77,61,88,71,96].map((h,i)=><i key={i} style={{'--bar':`${h}%`}}/>)}</div><div className="crm-bv-legend"><span><i/>Qualified leads</span><span>Last 30 days</span></div></div><div className="crm-bv-note"><span><Sparkles size={16}/></span>Every opportunity, in view</div></div><div className="crm-reveal"><span className="crm-kicker">BUSINESS BENEFITS</span><h2>Benefits of Custom CRM <span>Development</span></h2><p>A custom CRM helps businesses manage customer relationships through organized records and structured sales workflows.</p><div className="crm-benefits-list">{[['Keep Customer Information Organized','Maintain leads, customer details and interaction records in a centralized system.',Database],['Improve Sales Follow-Ups','Track upcoming activities, assign responsibilities and reduce missed follow-up opportunities.',Bell],['Simplify Team Coordination','Help sales and customer-facing teams work with relevant information and shared processes.',Users],['Monitor Sales Performance','Review lead status, pipeline progress and sales activities through relevant dashboards and reports.',BarChart3],['Adapt CRM Workflows to Your Business','Design customer management processes around your sales model, team structure and operational requirements.',Workflow]].map(([t,d,I])=><div className="crm-benefit-item" key={t}><I size={20}/><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></div></section>

    <section className="crm-section crm-industries"><div className="crm-container"><div className="crm-section-head crm-reveal"><span className="crm-kicker">BUILT AROUND YOUR CUSTOMERS</span><h2>CRM Solutions for <span>Different Industries</span></h2><p>Customer relationships and sales processes vary across industries. A custom CRM can reflect the way each business manages enquiries, customers and follow-ups.</p></div><div className="crm-industry-list">{industries.map(([t,d,I],i)=><article className="crm-industry-row crm-reveal" style={{'--i':i}} key={t}><span className="crm-industry-icon"><I size={23}/></span><span className="crm-industry-num">0{i+1}</span><h3>{t}</h3><p>{d}</p><ArrowRight size={18}/></article>)}</div></div></section>

    <section className="crm-section crm-process"><div className="crm-container"><div className="crm-section-head crm-reveal"><span className="crm-kicker">FROM REQUIREMENTS TO ROLLOUT</span><h2>Our CRM Development <span>Process</span></h2><p>We follow a structured approach to develop CRM software around your sales activities, customer workflows and business requirements.</p></div><div className="crm-process-grid">{process.map(([t,d],i)=><article className="crm-process-step crm-reveal" style={{'--i':i}} key={t}><span className="crm-process-num">0{i+1}</span><span className="crm-process-dot"/><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="crm-section crm-location"><div className="crm-container crm-location-grid"><div className="crm-location-copy crm-reveal"><span className="crm-kicker">LOCAL UNDERSTANDING, PRACTICAL SOFTWARE</span><h2>CRM Development Services <span>in Tamil Nadu</span></h2><p>Businesses across Tamil Nadu manage customer enquiries, sales opportunities and ongoing relationships through different communication channels and internal processes.</p><p>In South Tamil Nadu, manufacturers, distributors, retailers, educational institutions and service providers may need CRM systems to organize enquiries, manage follow-ups and improve sales coordination.</p><p>FlyTowards provides CRM development services for businesses across Tamil Nadu, focusing on customer management solutions aligned with their operational requirements.</p><p>Whether you need a new custom CRM system or improvements to an existing application, we focus on practical features that support your customer-facing teams.</p></div><div className="crm-location-art crm-reveal crm-delay"><div className="crm-map-card"><div className="crm-map-lines"/><div className="crm-map-pin"><MapPin size={21}/></div><div className="crm-map-label"><span>FLYTOWARDS</span><b>Serving businesses<br/>across Tamil Nadu</b><small>South Tamil Nadu · Tamil Nadu</small></div><div className="crm-map-stats"><span><Users size={17}/><b>Customer-first</b></span><span><Workflow size={17}/><b>Workflow-led</b></span></div></div></div></div></section>

    <section className="crm-section crm-why"><div className="crm-container crm-why-grid"><div className="crm-why-intro crm-reveal"><span className="crm-kicker">A THOUGHTFUL DEVELOPMENT PARTNER</span><h2>Why Choose FlyTowards as Your CRM Development Company?</h2><p>Choosing the right CRM developers involves more than comparing software features. The CRM should fit how your team manages leads, communicates with customers and tracks sales activities.</p><a className="crm-btn crm-btn-primary" href="/contact">Talk to Our Team <ArrowRight size={17}/></a></div><div className="crm-why-list">{[['Sales Workflow Understanding','We begin by understanding your lead management process, sales stages and customer interactions.'],['Tailored CRM Functionality','CRM features are planned around your business requirements instead of a fixed set of generic workflows.'],['Practical User Experience','We consider how sales teams and other authorized users will navigate the CRM and manage everyday tasks.'],['Integration & Future Planning','We consider compatible system integrations, maintainability and potential enhancements during CRM planning.']].map(([t,d],i)=><article className="crm-why-row crm-reveal" style={{'--i':i}} key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowRight size={17}/></article>)}</div></div></section>

    <section className="crm-section crm-challenges"><div className="crm-container crm-challenges-grid"><div className="crm-challenge-intro crm-reveal"><span className="crm-kicker">IS IT TIME FOR A CUSTOM CRM?</span><h2>When Does Your Business Need a Custom CRM System?</h2><p>A custom CRM may be suitable when customer information and sales activities are difficult to manage through your existing tools.</p><a className="crm-btn crm-btn-primary" href="/contact">Discuss Your CRM Requirements <ArrowRight size={17}/></a></div><div className="crm-challenge-content crm-reveal"><ul className="crm-check-list">{['Customer details are scattered across spreadsheets, messages and different applications.','Your team struggles to track enquiries and follow-ups.','Sales opportunities are difficult to monitor across different stages.','Employees repeatedly enter customer information into multiple systems.','Existing CRM software does not match your sales workflow.','Managers need clearer visibility into sales activities.','Your business requires specialized CRM features or integrations.'].map(x=><li key={x}><span><Check size={15}/></span>{x}</li>)}</ul><p className="crm-challenge-outro">If these challenges affect your sales operations, custom CRM development may provide a more suitable way to manage customer relationships.</p></div></div></section>

    <section className="crm-section crm-faq"><div className="crm-container crm-faq-grid"><div className="crm-faq-intro crm-reveal"><span className="crm-kicker">GOOD QUESTIONS, CLEAR ANSWERS</span><h2>Frequently Asked Questions About CRM Development</h2><p>Learn more about custom CRM systems, development timelines, integrations and choosing the right development partner.</p><div className="crm-faq-help"><span><MessageCircle size={19}/></span><p>Still have questions?<br/><a href="/contact">Talk with our team <ArrowRight size={14}/></a></p></div></div><div className="crm-faq-list">{faqs.map(([q,a],i)=><article className={`crm-faq-item ${openFaq===i?'is-open':''}`} key={q}><button aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{q}</span><ChevronDown size={19}/></button><div className="crm-faq-answer"><p>{a}</p></div></article>)}</div></div></section>

    <section className="crm-section crm-final"><div className="crm-container"><div className="crm-final-panel crm-reveal"><div className="crm-final-orb crm-final-orb-one"/><div className="crm-final-orb crm-final-orb-two"/><div className="crm-final-content"><span className="crm-final-kicker"><Sparkles size={15}/> LET'S BUILD A BETTER WAY TO WORK</span><h2>Build a CRM That Works Around Your Sales Process</h2><p>Need a better way to manage leads, track sales opportunities and organize customer relationships?</p><p>FlyTowards helps businesses explore custom CRM development solutions designed around their teams, workflows and operational requirements.</p><p>Share your CRM requirements and take the next step toward a more organized customer management system.</p><div className="crm-actions"><a className="crm-btn crm-btn-primary" href="/contact">Discuss Your CRM Project <ArrowRight size={17}/></a><a className="crm-btn crm-btn-light" href="/contact">Request a Consultation <ArrowRight size={17}/></a></div></div><div className="crm-final-art"><Dashboard/></div></div></div></section>
  </main>;
}
