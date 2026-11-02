import { useEffect, useState } from 'react';
import {
  Activity, AlertCircle, ArrowRight, Boxes, Check, ChevronDown, Clock3, Factory,
  Gauge, GraduationCap, HardHat, Headphones, HeartPulse, Monitor, PanelsTopLeft,
  RefreshCw, ShieldCheck, ShoppingBag, SlidersHorizontal, Truck, Wrench,
} from 'lucide-react';
import './SoftwareMaintenanceSupport.css';

const heroTagline = 'Keep Your Business Software Reliable, Updated and Ready for Change';

const highlights = [
  { title: 'Bug Fixing', description: 'Identify and resolve software defects affecting application functionality.', icon: Wrench },
  { title: 'Software Updates', description: 'Update agreed application features, components and dependencies.', icon: RefreshCw },
  { title: 'Performance Improvements', description: 'Investigate and address identified application performance issues.', icon: Gauge },
  { title: 'Ongoing Support', description: 'Assist with technical problems and changing application requirements.', icon: Headphones },
];

const services = [
  { title: 'Application Bug Fixing & Troubleshooting', description: 'Investigate software errors, identify causes and implement suitable fixes for agreed application issues.', icon: Wrench },
  { title: 'Software Updates & Enhancements', description: 'Update application features, improve existing functionality and adapt software to changing operational requirements.', icon: RefreshCw },
  { title: 'Software Performance Optimization', description: 'Review identified performance problems and improve relevant application components where technically feasible.', icon: Gauge },
  { title: 'Security & Dependency Maintenance', description: 'Review relevant application dependencies, address identified vulnerabilities and implement suitable software updates.', icon: ShieldCheck },
  { title: 'ERP, CRM & Business Application Support', description: 'Maintain supported business applications, including custom ERP, CRM, inventory and internal management systems.', icon: PanelsTopLeft },
  { title: 'Application Monitoring & Technical Support', description: 'Support issue investigation, application health reviews and ongoing technical maintenance according to the agreed service scope.', icon: Monitor },
];

const benefits = [
  { title: 'Reduce Disruption from Software Issues', description: 'Identify and resolve application problems that affect employees, customers or business workflows.', icon: AlertCircle },
  { title: 'Keep Applications Compatible', description: 'Update suitable software components when operating environments, integrations or dependencies change.', icon: RefreshCw },
  { title: 'Improve Existing Functionality', description: 'Make targeted enhancements to support evolving user needs and business processes.', icon: SlidersHorizontal },
  { title: 'Address Technical Risks', description: 'Review outdated components and identified security or maintenance concerns before they create additional complications.', icon: ShieldCheck },
  { title: 'Extend the Useful Life of Software', description: 'Maintain and improve valuable applications instead of replacing them solely because they require updates.', icon: Clock3 },
];

const industries = [
  { title: 'Manufacturing', description: 'Maintenance support for production management applications, inventory systems, procurement software and operational dashboards.', icon: Factory },
  { title: 'Healthcare', description: 'Application maintenance for administrative systems, appointment workflows and internal software, with appropriate privacy and data protection considerations.', icon: HeartPulse },
  { title: 'Retail & Wholesale', description: 'Support for inventory applications, order management software, billing-related systems and customer management tools.', icon: ShoppingBag },
  { title: 'Education', description: 'Maintenance for student administration systems, institutional portals, admission applications and learning-related software.', icon: GraduationCap },
  { title: 'Construction', description: 'Support for project tracking applications, procurement systems, material management software and reporting tools.', icon: HardHat },
  { title: 'Logistics & Transportation', description: 'Maintenance for dispatch applications, shipment tracking systems, transport administration tools and operational dashboards.', icon: Truck },
];

const developmentSteps = [
  { title: 'Application Assessment', description: 'Review the existing application\'s functionality, technology, dependencies and reported issues.' },
  { title: 'Issue Analysis & Prioritization', description: 'Identify maintenance requirements and prioritize issues based on their operational impact and technical complexity.' },
  { title: 'Maintenance Planning', description: 'Define proposed fixes, updates, enhancements, testing requirements and deployment considerations.' },
  { title: 'Bug Fixing & Software Updates', description: 'Implement agreed changes to address defects, improve functionality or update relevant application components.' },
  { title: 'Testing & Deployment', description: 'Validate changes, review affected workflows and deploy approved updates using suitable release procedures.' },
  { title: 'Ongoing Support & Improvement', description: 'Review new issues, monitor agreed maintenance needs and plan future updates as requirements evolve.' },
];

const differentiators = [
  { title: 'Application-Focused Assessment', description: 'We begin by understanding the existing software, reported issues and affected business workflows.' },
  { title: 'Practical Issue Resolution', description: 'We focus on identifying the causes of application problems and planning suitable corrective actions.' },
  { title: 'Business Workflow Consideration', description: 'We consider how proposed software changes may affect users, integrations and daily operations.' },
  { title: 'Long-Term Maintenance Planning', description: 'We consider software updates, technical dependencies and future enhancement requirements during maintenance planning.' },
];

const challenges = [
  'Your business application experiences recurring bugs or errors.',
  'Employees encounter slow or unreliable software functionality.',
  'Existing software depends on outdated components.',
  'Application updates create compatibility problems.',
  'Important business workflows require feature improvements.',
  'Your software needs ongoing technical support after deployment.',
  'You want to maintain an existing application rather than replace it completely.',
];

const faqs = [
  { question: 'What is software maintenance?', answer: 'Software maintenance is the process of fixing defects, updating components, improving functionality and adapting software applications after deployment.' },
  { question: 'What are the four types of software maintenance?', answer: 'The four commonly recognized types are corrective maintenance, which fixes defects; adaptive maintenance, which addresses environmental changes; perfective maintenance, which improves functionality; and preventive maintenance, which reduces future technical risks.' },
  { question: 'What is the difference between software maintenance and software modernization?', answer: 'Software maintenance focuses on keeping an application functional, supported and updated. Software modernization generally involves broader improvements to outdated technology, architecture, interfaces or application capabilities.' },
  { question: 'How much does software maintenance cost in Tamil Nadu?', answer: 'Costs depend on application complexity, technology stack, existing issues, update requirements and support scope. Maintenance may be priced by project, agreed support hours or another service arrangement.' },
  { question: 'Can you maintain software developed by another company?', answer: 'Existing software may be maintainable by another development team if source code, documentation, access permissions and relevant technical dependencies are available. An initial assessment is needed to determine feasibility.' },
  { question: 'What is a computerized maintenance management system (CMMS)?', answer: 'A computerized maintenance management system (CMMS) is software used to manage physical asset maintenance, equipment records, preventive maintenance schedules and maintenance work orders. It is different from software application maintenance, which focuses on maintaining the software itself.' },
  { question: 'Is a CMMS maintenance management system the same as software maintenance support?', answer: 'No. A maintenance management system or CMMS helps organizations manage equipment and facility maintenance activities. Software maintenance support involves fixing, updating and supporting applications, including a CMMS application if that software is within the agreed support scope.' },
];
function updateMetaTag(selector, attribute, value, tagName, metaName) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement(tagName);
    if (metaName) element.name = metaName;
    if (tagName === 'link') element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function MaintenanceDashboard() {
  return (
    <div className="maint-dashboard-wrap" role="img" aria-label="Application monitoring dashboard showing software health, issue tracking, updates and support activities">
      <div className="maint-dashboard-orbit" />
      <div className="maint-health-dashboard">
        <div className="maint-dashboard-top"><span /><span /><span /><strong>Application Health</strong></div>
        <div className="maint-health-summary">
          <div className="maint-health-ring"><span><Activity size={22} /></span></div>
          <div><strong>Software health</strong><small>Monitoring application systems</small><span className="maint-health-status"><i />Support active</span></div>
        </div>
        <div className="maint-status-grid">
          <div className="maint-status-item"><Wrench size={18} /><strong>Issues</strong><small>Under review</small></div>
          <div className="maint-status-item"><RefreshCw size={18} /><strong>Updates</strong><small>Planned</small></div>
          <div className="maint-status-item"><Gauge size={18} /><strong>Performance</strong><small>Being checked</small></div>
        </div>
        <div className="maint-support-activity"><strong>Support activity</strong><div><i /><span /><small>Issue review</small></div><div><i /><span /><small>Application update</small></div><div><i /><span /><small>Workflow check</small></div></div>
      </div>
    </div>
  );
}

function MaintenanceFlow() {
  const statuses = [
    { title: 'Application', icon: PanelsTopLeft },
    { title: 'Issues', icon: AlertCircle },
    { title: 'Updates', icon: RefreshCw },
    { title: 'Support', icon: Headphones },
  ];

  return (
    <div className="maint-system-flow" role="img" aria-label="Software maintenance flow for application review, issue troubleshooting, software updates and ongoing support">
      <div className="maint-flow-scan" />
      {statuses.map(({ title, icon: Icon }, index) => (
        <div className="maint-flow-step" style={{ '--step': index }} key={title}>
          <span><Icon size={22} /></span>
          <strong>{title}</strong>
        </div>
      ))}
    </div>
  );
}

function SectionHeading({ children }) { return <h2>{children}</h2>; }

export default function SoftwareMaintenanceSupport() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [typedTagline, setTypedTagline] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Software Maintenance & Support in Tamil Nadu | FlyTowards';
    updateMetaTag('meta[name="description"]', 'content', 'Software maintenance and support services in Tamil Nadu. FlyTowards helps businesses fix application issues, update software and maintain existing systems.', 'meta', 'description');
    updateMetaTag('meta[name="keywords"]', 'content', 'software maintenance, computerized maintenance management system, maintenance management system, cmms maintenance management system, software maintenance services, software support services, application maintenance and support, software bug fixing, application updates, software performance optimization, ongoing software support', 'meta', 'keywords');
    updateMetaTag('link[rel="canonical"]', 'href', 'https://flytowardsdigitalinnovation.com/services/software-maintenance-support/', 'link');

    const schema = document.createElement('script');
    schema.type = 'application/ld+json'; schema.id = 'software-maintenance-support-schema';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', '@id': 'https://flytowardsdigitalinnovation.com/#organization', name: 'FlyTowards Digital Innovation', url: 'https://flytowardsdigitalinnovation.com/' },
        { '@type': 'Service', name: 'Software Maintenance & Support Services', serviceType: 'Software Maintenance & Support', url: 'https://flytowardsdigitalinnovation.com/services/software-maintenance-support/', areaServed: { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }, provider: { '@id': 'https://flytowardsdigitalinnovation.com/#organization' }, description: 'Software maintenance and support services in Tamil Nadu. FlyTowards helps businesses fix application issues, update software and maintain existing systems.' },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://flytowardsdigitalinnovation.com/services/' },
          { '@type': 'ListItem', position: 3, name: 'Software Maintenance & Support', item: 'https://flytowardsdigitalinnovation.com/services/software-maintenance-support/' },
        ] },
        { '@type': 'FAQPage', mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
      ],
    });
    document.head.appendChild(schema);
    return () => schema.remove();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('maint-visible');
      if (entry.target.classList.contains('maint-timeline')) entry.target.classList.add('maint-timeline-active');
      observer.unobserve(entry.target);
    }), { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.maint-reveal, .maint-timeline').forEach((element) => observer.observe(element));

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let typingDelay; let typingInterval;
    if (reducedMotion) setTypedTagline(heroTagline);
    else {
      let characterIndex = 0;
      typingDelay = window.setTimeout(() => {
        typingInterval = window.setInterval(() => {
          characterIndex += 1; setTypedTagline(heroTagline.slice(0, characterIndex));
          if (characterIndex === heroTagline.length) window.clearInterval(typingInterval);
        }, 38);
      }, 700);
    }
    return () => { observer.disconnect(); window.clearTimeout(typingDelay); window.clearInterval(typingInterval); };
  }, []);

  const headlineWords = ['Software', 'Maintenance', '&', 'Support', 'Services', 'in', 'Tamil', 'Nadu'];
  const selectedIndustry = industries[activeIndustry];
  const SelectedIndustryIcon = selectedIndustry.icon;

  return (
    <main className="maint-page">
      {/* Section 01: Hero */}
      <section className="maint-section maint-hero">
        <div className="maint-container maint-hero-grid">
          <div className="maint-hero-copy maint-reveal">
            <h1>{headlineWords.map((word, index) => <span className={`maint-word${index > 3 ? ' maint-gold' : ''}`} style={{ '--word': index }} key={word}>{word}{index < headlineWords.length - 1 ? ' ' : ''}</span>)}</h1>
            <h2 aria-label={heroTagline}><span className="maint-typing" aria-hidden="true">{typedTagline}</span></h2>
            <p>Software issues, outdated components and unresolved bugs can interrupt daily operations and make business applications difficult to use.</p>
            <p>FlyTowards provides software maintenance and support services for businesses across Tamil Nadu, with a focus on South Tamil Nadu. We help organizations maintain existing applications, resolve technical issues, implement updates and improve software functionality based on changing requirements.</p>
            <p>Whether you need support for a custom business application or enhancements to an established system, we focus on practical maintenance aligned with your operational needs.</p>
            <div className="maint-actions"><a className="maint-btn maint-btn-primary" href="/contact">Discuss Your Software Support Needs <ArrowRight size={17} /></a><a className="maint-btn maint-btn-secondary" href="/services">Explore Our Services <ArrowRight size={17} /></a></div>
          </div>
          <div className="maint-reveal maint-delay"><MaintenanceDashboard /></div>
        </div>
      </section>

      {/* Section 02: Service overview */}
      <section className="maint-section"><div className="maint-container maint-overview-grid">
        <div className="maint-reveal"><SectionHeading>What Is <span>Software Maintenance?</span></SectionHeading>
          <p>Software maintenance is the process of modifying, updating and supporting an application after its initial development and deployment.</p>
          <p>It includes correcting software defects, addressing compatibility issues, improving existing functionality and adapting applications to changing business or technical requirements.</p>
          <p>Software maintenance can involve corrective, adaptive, perfective and preventive activities. The appropriate maintenance approach depends on the application's condition, importance and ongoing usage.</p>
        </div>
        <div className="maint-highlight-list">{highlights.map(({ title, description, icon: Icon }, index) => <article className="maint-highlight maint-reveal" style={{ '--item': index }} key={title}><span className="maint-icon"><Icon size={21} /></span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={17} /></article>)}</div>
      </div></section>

      {/* Section 03: Services */}
      <section className="maint-section maint-soft" id="services"><div className="maint-container">
        <div className="maint-heading maint-reveal"><SectionHeading>Our <span>Software Maintenance & Support Services</span></SectionHeading><p>We provide application maintenance solutions based on existing software architecture, business requirements and identified technical issues.</p></div>
        <div className="maint-service-grid">{services.map(({ title, description, icon: Icon }, index) => <article className="maint-service maint-reveal" style={{ '--item': index }} key={title}><div className="maint-service-top"><span className="maint-icon"><Icon size={22} /></span><small>0{index + 1}</small></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      {/* Section 04: Business benefits */}
      <section className="maint-section"><div className="maint-container maint-benefits-grid">
        <div className="maint-hub-wrap maint-reveal"><MaintenanceFlow /></div>
        <div className="maint-reveal"><SectionHeading>Benefits of <span>Professional Software Maintenance</span></SectionHeading><p>Regular software maintenance helps businesses address technical issues, improve application usability and adapt existing systems to operational changes.</p>
          <div className="maint-benefit-list">{benefits.map(({ title, description, icon: Icon }, index) => <article className="maint-benefit" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><Icon size={19} /></article>)}</div>
        </div>
      </div></section>

      {/* Section 05: Industry solutions */}
      <section className="maint-section maint-soft"><div className="maint-container">
        <div className="maint-heading maint-reveal"><SectionHeading>Software Maintenance <span>for Different Industries</span></SectionHeading><p>Business applications support different operational processes across industries. Maintenance priorities depend on how those applications are used and the impact of technical issues.</p></div>
        <div className="maint-industry-tabs maint-reveal">
          <div className="maint-industry-buttons" role="tablist" aria-label="Software maintenance industry solutions">{industries.map(({ title, icon: Icon }, index) => <button type="button" role="tab" aria-selected={activeIndustry === index} aria-controls="maint-industry-panel" id={`maint-industry-tab-${index}`} key={title} onClick={() => setActiveIndustry(index)} onMouseEnter={() => setActiveIndustry(index)}><Icon size={19} />{title}</button>)}</div>
          <article className="maint-industry-panel" role="tabpanel" id="maint-industry-panel" aria-labelledby={`maint-industry-tab-${activeIndustry}`} key={activeIndustry}><span className="maint-industry-panel-icon"><SelectedIndustryIcon size={38} /></span><div><h3>{selectedIndustry.title}</h3><p>{selectedIndustry.description}</p></div></article>
        </div>
      </div></section>

      {/* Section 06: Development process */}
      <section className="maint-section"><div className="maint-container">
        <div className="maint-heading maint-reveal"><SectionHeading>Our <span>Software Maintenance & Support Process</span></SectionHeading><p>We follow a structured approach to assess software issues, plan changes and implement maintenance activities based on the agreed scope.</p></div>
        <div className="maint-timeline">{developmentSteps.map(({ title, description }, index) => <article className="maint-step maint-reveal" style={{ '--item': index }} key={title}><span className="maint-step-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      {/* Section 07: Location relevance */}
      <section className="maint-section maint-location"><div className="maint-container maint-location-grid">
        <div className="maint-reveal"><SectionHeading>Software Maintenance & Support Services <span>in Tamil Nadu</span></SectionHeading>
          <p>Businesses across Tamil Nadu depend on software applications for customer management, inventory, sales, administration, production and other essential activities.</p>
          <p>In South Tamil Nadu, manufacturers, wholesalers, retailers, educational institutions and service providers may rely on custom or existing business applications that require regular updates and technical support.</p>
          <p>FlyTowards provides software maintenance and support services for businesses across Tamil Nadu, focusing on application functionality, technical issues and changing operational requirements.</p>
          <p>Whether you need help resolving recurring bugs or planning improvements to an existing system, we focus on maintenance activities that support continued software use.</p>
        </div>
        <div className="maint-location-art maint-reveal maint-delay"><MaintenanceDashboard /></div>
      </div></section>

      {/* Section 08: Why choose FlyTowards */}
      <section className="maint-section"><div className="maint-container maint-why-grid">
        <div className="maint-reveal"><SectionHeading>Why Choose FlyTowards for <span>Software Maintenance & Support?</span></SectionHeading><p>Choosing a software maintenance partner involves understanding the application's technical condition, operational importance and ongoing support requirements.</p><a className="maint-btn maint-btn-primary" href="/contact">Talk to Our Team <ArrowRight size={17} /></a></div>
        <div className="maint-reason-list">{differentiators.map(({ title, description }, index) => <article className="maint-reason maint-reveal" style={{ '--item': index }} key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={17} /></article>)}</div>
      </div></section>

      {/* Section 09: Business challenges */}
      <section className="maint-section maint-soft"><div className="maint-container maint-challenge-grid">
        <div className="maint-reveal"><SectionHeading>When Does Your Business Need <span>Software Maintenance?</span></SectionHeading><p>Software maintenance may be necessary when an existing application develops technical issues, becomes difficult to update or no longer supports current requirements effectively.</p><a className="maint-btn maint-btn-primary" href="/contact">Discuss Your Software Issues <ArrowRight size={17} /></a></div>
        <div className="maint-challenge-content maint-reveal"><ul>{challenges.map((challenge) => <li key={challenge}><span><Check size={15} /></span>{challenge}</li>)}</ul><p>If these challenges affect your operations, a software maintenance assessment can help identify suitable next steps.</p></div>
      </div></section>

      {/* Section 10: FAQs */}
      <section className="maint-section"><div className="maint-container maint-faq-grid">
        <div className="maint-reveal"><SectionHeading>Frequently Asked Questions About <span>Software Maintenance</span></SectionHeading></div>
        <div className="maint-faq-list maint-reveal">{faqs.map(({ question, answer }, index) => <article className={`maint-faq${openFaq === index ? ' is-open' : ''}`} key={question}><h3><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{question}<ChevronDown size={19} /></button></h3><div className="maint-faq-answer" hidden={openFaq !== index}><p>{answer}</p></div></article>)}</div>
      </div></section>

      {/* Section 11: Final call to action */}
      <section className="maint-section maint-final-section"><div className="maint-container"><div className="maint-final maint-reveal">
        <div className="maint-final-copy"><SectionHeading>Keep Your Business <span>Software Working for You</span></SectionHeading><p>Facing recurring software issues, outdated components or application functionality that needs improvement?</p><p>FlyTowards helps businesses explore software maintenance and support solutions aligned with their applications, workflows and technical requirements.</p><p>Share your software challenges and take the next step toward a practical maintenance plan.</p>
          <div className="maint-actions"><a className="maint-btn maint-btn-primary" href="/contact">Discuss Your Software Support Needs <ArrowRight size={17} /></a><a className="maint-btn maint-btn-light" href="/contact">Request a Consultation <ArrowRight size={17} /></a></div>
        </div><i className="maint-final-ring maint-final-ring-one" /><i className="maint-final-ring maint-final-ring-two" />
      </div></div></section>
    </main>
  );
}






