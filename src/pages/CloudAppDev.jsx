import { useEffect, useState } from 'react';
import {
  ArrowRight, Boxes, Check, ChevronDown, Cloud, CloudCog, Code2, Database,
  GraduationCap, HardHat, HeartPulse, Layers3, Link2, Monitor, RefreshCw,
  Server, ShoppingBag, Truck, Users, Workflow,
} from 'lucide-react';
import './CloudAppDev.css';

const heroTagline = 'Build Flexible Cloud Applications for Your Business';

const highlights = [
  { title: 'Online Accessibility', description: 'Access applications through supported internet-connected devices.', icon: Monitor },
  { title: 'Centralized Information', description: 'Manage relevant business data through connected systems.', icon: Database },
  { title: 'Flexible Infrastructure', description: 'Adjust computing resources based on application requirements.', icon: CloudCog },
  { title: 'Application Integration', description: 'Connect compatible cloud services and business software.', icon: Link2 },
];

const services = [
  { title: 'Custom Cloud Application Development', description: 'Build cloud-hosted business applications designed around your workflows, users and operational requirements.', icon: Cloud },
  { title: 'Cloud-Native Application Development', description: 'Develop applications using suitable cloud-oriented architecture and managed services based on project needs.', icon: Layers3 },
  { title: 'Cloud-Based Web Application Development', description: 'Create browser-based business platforms, customer portals, dashboards and internal management applications.', icon: Monitor },
  { title: 'Cloud Application Integration', description: 'Connect compatible cloud services, APIs, databases and existing business applications.', icon: Workflow },
  { title: 'Cloud Application Modernization', description: 'Assess existing software and plan suitable improvements for cloud-based operation or integration.', icon: RefreshCw },
  { title: 'Cloud Application Maintenance & Enhancement', description: 'Update cloud applications, address issues and introduce functionality as business requirements evolve.', icon: CloudCog },
];

const benefits = [
  { title: 'Access Applications Across Locations', description: 'Enable authorized users to access supported application features from different locations through an internet connection.', icon: Users },
  { title: 'Centralize Business Workflows', description: 'Bring important records, activities and application functions into a connected digital environment.', icon: Workflow },
  { title: 'Adjust Resources as Requirements Change', description: 'Use suitable cloud infrastructure options to accommodate changes in application demand.', icon: Server },
  { title: 'Simplify Application Updates', description: 'Manage application improvements through centralized deployment processes where supported by the architecture.', icon: RefreshCw },
  { title: 'Connect Business Systems', description: 'Integrate compatible cloud services, APIs and existing applications to improve information flow.', icon: Link2 },
];

const industries = [
  { title: 'Manufacturing', description: 'Cloud-based dashboards for production information, inventory tracking, procurement and operational reporting.', icon: Boxes },
  { title: 'Healthcare', description: 'Applications for appointment management, administrative workflows and authorized information access, with appropriate privacy safeguards.', icon: HeartPulse },
  { title: 'Retail & Wholesale', description: 'Cloud platforms for inventory, order management, sales reporting and coordination across business locations.', icon: ShoppingBag },
  { title: 'Education', description: 'Online applications for student administration, learning resources, attendance information and institutional workflows.', icon: GraduationCap },
  { title: 'Construction', description: 'Cloud-based project tracking, material requests, vendor coordination and operational reporting.', icon: HardHat },
  { title: 'Logistics & Transportation', description: 'Applications for shipment visibility, dispatch coordination, delivery records and transport administration.', icon: Truck },
];

const developmentSteps = [
  { title: 'Requirement & Infrastructure Analysis', description: 'Understand your business goals, application users, existing systems and infrastructure requirements.' },
  { title: 'Cloud Architecture & UI/UX Planning', description: 'Define application features, user workflows, data requirements and an appropriate cloud architecture.' },
  { title: 'Cloud Application Development', description: 'Develop the agreed application functionality, backend services, interfaces and required integrations.' },
  { title: 'Testing & Quality Assurance', description: 'Review functionality, access controls, application workflows and relevant performance requirements.' },
  { title: 'Cloud Deployment & Configuration', description: 'Prepare the hosting environment, configure application services and complete deployment activities.' },
  { title: 'Maintenance & Optimization', description: 'Plan updates, issue resolution, resource reviews and future application enhancements.' },
];

const differentiators = [
  { title: 'Business-Focused Planning', description: 'We begin by understanding your operational challenges, target users and required application functionality.' },
  { title: 'Tailored Cloud Applications', description: 'Cloud application features are planned around your business requirements rather than a fixed set of generic functions.' },
  { title: 'Architecture & Integration Planning', description: 'We consider cloud infrastructure options, compatible services and existing application dependencies.' },
  { title: 'Long-Term Application Thinking', description: 'We consider maintainability, resource requirements and potential enhancements during application planning.' },
];

const challenges = [
  'Employees need access to business applications from different locations.',
  'Existing software depends heavily on local installations or infrastructure.',
  'Teams use disconnected tools to manage operational information.',
  'Your business needs a cloud-hosted customer or employee portal.',
  'Application usage or infrastructure requirements may change over time.',
  'You need integrations with cloud services or existing business systems.',
  'You are planning a new online software product or business platform.',
];

const faqs = [
  { question: 'What is cloud application development?', answer: 'Cloud application development is the process of designing, building and deploying software that uses cloud infrastructure or cloud-hosted services to deliver application functionality.' },
  { question: 'What is cloud-native development?', answer: 'Cloud-native development is an approach to building applications that takes advantage of cloud-oriented technologies and practices, such as managed services, automated deployment and independently deployable components where appropriate.' },
  { question: 'What is a cloud app development platform?', answer: 'A cloud app development platform provides tools, infrastructure or managed services for developing, deploying and operating applications in a cloud environment. The appropriate platform depends on technical and business requirements.' },
  { question: 'How much does cloud application development cost in Tamil Nadu?', answer: 'Costs depend on application features, infrastructure choices, integrations, technical complexity and development scope. Cloud hosting and ongoing usage charges may also apply.' },
  { question: 'How long does cloud application development take?', answer: 'Timelines depend on application complexity, architecture, integrations, testing and deployment requirements.' },
  { question: 'What is the difference between cloud applications and traditional applications?', answer: 'Cloud applications use cloud-hosted infrastructure or services, while traditional applications may run on locally managed infrastructure or individual devices. Both approaches can support different business requirements.' },
  { question: 'Can existing business software be moved to the cloud?', answer: 'Some applications can be migrated, rehosted or modernized for cloud environments. Feasibility depends on their architecture, dependencies, data requirements and technical compatibility.' },
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

function CloudDashboard({ interactive = false }) {
  function handleMouseMove(event) {
    if (!interactive || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(hover: hover)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty('--tilt-x', `${-y * 8}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${x * 10}deg`);
  }

  function resetTilt(event) {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  }

  const applications = [
    { name: 'Web App', icon: Monitor }, { name: 'Cloud API', icon: Code2 },
    { name: 'Database', icon: Database }, { name: 'Users', icon: Users },
  ];
  const chartBars = [42, 67, 52, 89, 61, 77, 55];

  return (
    <div className={`cloud-dashboard-wrap${interactive ? ' cloud-dashboard-tilt' : ''}`} role="img" aria-label="Cloud application dashboard connecting users, applications and cloud infrastructure" onMouseMove={interactive ? handleMouseMove : undefined} onMouseLeave={interactive ? resetTilt : undefined}>
      <div className="cloud-dashboard-orbit cloud-orbit-one" /><div className="cloud-dashboard-orbit cloud-orbit-two" />
      <div className="cloud-dashboard">
        <div className="cloud-dashboard-window-bar"><i /><i /><i /></div>
        <div className="cloud-app-grid">
          {applications.map(({ name, icon: Icon }, index) => <div className="cloud-app-module" style={{ '--module': index }} key={name}><Icon size={20} /><span>{name}</span></div>)}
        </div>
        <div className="cloud-chart" aria-hidden="true">{chartBars.map((height, index) => <span key={index} style={{ '--bar-height': `${height}%`, '--bar-index': index }} />)}</div>
        <div className="cloud-dashboard-rows" aria-hidden="true"><i /><i /><i /></div>
      </div>
    </div>
  );
}

function CloudNetwork() {
  const nodes = [
    { name: 'Web Apps', x: 230, y: 50 }, { name: 'Cloud APIs', x: 400, y: 150 },
    { name: 'Data', x: 340, y: 330 }, { name: 'Users', x: 120, y: 330 },
    { name: 'Services', x: 60, y: 150 },
  ];

  return (
    <svg className="cloud-department-hub" viewBox="0 0 460 400" role="img" aria-label="Cloud application architecture connecting users, applications and business systems">
      {nodes.map((node) => <g key={node.name}><line x1="230" y1="200" x2={node.x} y2={node.y} /><circle r="4" className="cloud-data-dot"><animateMotion dur="2.5s" repeatCount="indefinite" path={`M230,200 L${node.x},${node.y}`} /></circle><circle className="cloud-department-node" cx={node.x} cy={node.y} r="34" /><text x={node.x} y={node.y + 4}>{node.name}</text></g>)}
      <circle className="cloud-hub-pulse" cx="230" cy="200" r="47" /><circle className="cloud-center-node" cx="230" cy="200" r="46" /><text className="cloud-center-label" x="230" y="207">CLOUD</text>
    </svg>
  );
}

function SectionHeading({ children }) { return <h2>{children}</h2>; }

export default function CloudAppDev() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [typedTagline, setTypedTagline] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Cloud Application Development in Tamil Nadu | FlyTowards';
    updateMetaTag('meta[name="description"]', 'content', 'Cloud application development services in Tamil Nadu. FlyTowards builds custom cloud apps, modernizes business software and supports scalable digital platforms.', 'meta', 'description');
    updateMetaTag('meta[name="keywords"]', 'content', 'cloud application development, cloud native development, cloud app developers, cloud app development platform, cloud application development services', 'meta', 'keywords');
    updateMetaTag('link[rel="canonical"]', 'href', 'https://flytowardsdigitalinnovation.com/services/cloud-application-development/', 'link');

    const schema = document.createElement('script');
    schema.type = 'application/ld+json'; schema.id = 'cloud-application-development-schema';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', '@id': 'https://flytowardsdigitalinnovation.com/#organization', name: 'FlyTowards Digital Innovation', url: 'https://flytowardsdigitalinnovation.com/' },
        { '@type': 'Service', name: 'Cloud Application Development Services', serviceType: 'Cloud Application Development', url: 'https://flytowardsdigitalinnovation.com/services/cloud-application-development/', areaServed: { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }, provider: { '@id': 'https://flytowardsdigitalinnovation.com/#organization' }, description: 'Cloud application development services in Tamil Nadu. FlyTowards builds custom cloud apps, modernizes business software and supports scalable digital platforms.' },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://flytowardsdigitalinnovation.com/services/' },
          { '@type': 'ListItem', position: 3, name: 'Cloud Application Development', item: 'https://flytowardsdigitalinnovation.com/services/cloud-application-development/' },
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
      entry.target.classList.add('cloud-visible');
      if (entry.target.classList.contains('cloud-timeline')) entry.target.classList.add('cloud-timeline-active');
      observer.unobserve(entry.target);
    }), { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.cloud-reveal, .cloud-timeline').forEach((element) => observer.observe(element));

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

  const headlineWords = ['Cloud', 'Application', 'Development', 'Services', 'in', 'Tamil', 'Nadu'];
  const selectedIndustry = industries[activeIndustry];
  const SelectedIndustryIcon = selectedIndustry.icon;

  return (
    <main className="cloud-page">
      {/* Section 01: Hero */}
      <section className="cloud-section cloud-hero">
        <div className="cloud-container cloud-hero-grid">
          <div className="cloud-hero-copy cloud-reveal">
            <h1>{headlineWords.map((word, index) => <span className={`cloud-word${index > 3 ? ' cloud-gold' : ''}`} style={{ '--word': index }} key={word}>{word}{index < headlineWords.length - 1 ? ' ' : ''}</span>)}</h1>
            <h2 aria-label={heroTagline}><span className="cloud-typing" aria-hidden="true">{typedTagline}</span></h2>
            <p>Outdated software, disconnected systems and limited access to business information can make daily operations difficult to manage.</p>
            <p>FlyTowards provides cloud application development services for businesses across Tamil Nadu, with a focus on South Tamil Nadu. We develop cloud-based applications that help organizations manage workflows, connect users and support changing business requirements.</p>
            <p>From internal business platforms to customer-facing applications, we focus on software designed around your operational needs.</p>
            <div className="cloud-actions"><a className="cloud-btn cloud-btn-primary" href="/contact">Discuss Your Cloud Project <ArrowRight size={17} /></a><a className="cloud-btn cloud-btn-secondary" href="/services">Explore Our Services <ArrowRight size={17} /></a></div>
          </div>
          <div className="cloud-reveal cloud-delay"><CloudDashboard interactive /></div>
        </div>
      </section>

      {/* Section 02: Service overview */}
      <section className="cloud-section"><div className="cloud-container cloud-overview-grid">
        <div className="cloud-reveal"><SectionHeading>What Is <span>Cloud Application Development?</span></SectionHeading>
          <p>Cloud application development involves designing, building and deploying software that uses cloud-hosted infrastructure, services or computing resources.</p>
          <p>Cloud applications can help businesses provide online access to software, manage centralized information and deliver digital functionality without depending entirely on locally installed systems.</p>
          <p>Depending on project requirements, cloud native development approaches may use independently deployable services, managed infrastructure and automated deployment processes.</p>
        </div>
        <div className="cloud-highlight-list">{highlights.map(({ title, description, icon: Icon }, index) => <article className="cloud-highlight cloud-reveal" style={{ '--item': index }} key={title}><span className="cloud-icon"><Icon size={21} /></span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={17} /></article>)}</div>
      </div></section>

      {/* Section 03: Services */}
      <section className="cloud-section cloud-soft" id="services"><div className="cloud-container">
        <div className="cloud-heading cloud-reveal"><SectionHeading>Our <span>Cloud Application Development Services</span></SectionHeading><p>We develop cloud-based applications and supporting functionality tailored to business workflows, users and technical requirements.</p></div>
        <div className="cloud-service-grid">{services.map(({ title, description, icon: Icon }, index) => <article className="cloud-service cloud-reveal" style={{ '--item': index }} key={title}><div className="cloud-service-top"><span className="cloud-icon"><Icon size={22} /></span><small>0{index + 1}</small></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      {/* Section 04: Business benefits */}
      <section className="cloud-section"><div className="cloud-container cloud-benefits-grid">
        <div className="cloud-hub-wrap cloud-reveal"><CloudNetwork /></div>
        <div className="cloud-reveal"><SectionHeading>Benefits of <span>Cloud Application Development</span></SectionHeading><p>Cloud applications can help businesses deliver software through flexible infrastructure while improving access to digital services.</p>
          <div className="cloud-benefit-list">{benefits.map(({ title, description, icon: Icon }, index) => <article className="cloud-benefit" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><Icon size={19} /></article>)}</div>
        </div>
      </div></section>

      {/* Section 05: Industry solutions */}
      <section className="cloud-section cloud-soft"><div className="cloud-container">
        <div className="cloud-heading cloud-reveal"><SectionHeading>Cloud Application Solutions <span>for Different Industries</span></SectionHeading><p>Cloud applications can support industry-specific operations, information management and digital services.</p></div>
        <div className="cloud-industry-tabs cloud-reveal">
          <div className="cloud-industry-buttons" role="tablist" aria-label="Cloud application industry solutions">{industries.map(({ title, icon: Icon }, index) => <button type="button" role="tab" aria-selected={activeIndustry === index} aria-controls="cloud-industry-panel" id={`cloud-industry-tab-${index}`} key={title} onClick={() => setActiveIndustry(index)} onMouseEnter={() => setActiveIndustry(index)}><Icon size={19} />{title}</button>)}</div>
          <article className="cloud-industry-panel" role="tabpanel" id="cloud-industry-panel" aria-labelledby={`cloud-industry-tab-${activeIndustry}`} key={activeIndustry}><span className="cloud-industry-panel-icon"><SelectedIndustryIcon size={38} /></span><div><h3>{selectedIndustry.title}</h3><p>{selectedIndustry.description}</p></div></article>
        </div>
      </div></section>

      {/* Section 06: Development process */}
      <section className="cloud-section"><div className="cloud-container">
        <div className="cloud-heading cloud-reveal"><SectionHeading>Our <span>Cloud Application Development Process</span></SectionHeading><p>We follow a structured approach to plan and develop cloud applications around business requirements and technical considerations.</p></div>
        <div className="cloud-timeline">{developmentSteps.map(({ title, description }, index) => <article className="cloud-step cloud-reveal" style={{ '--item': index }} key={title}><span className="cloud-step-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      {/* Section 07: Location relevance */}
      <section className="cloud-section cloud-location"><div className="cloud-container cloud-location-grid">
        <div className="cloud-reveal"><SectionHeading>Cloud Application Development Services <span>in Tamil Nadu</span></SectionHeading>
          <p>Businesses across Tamil Nadu use digital applications to coordinate teams, manage information and deliver services across different locations.</p>
          <p>In South Tamil Nadu, manufacturers, distributors, healthcare organizations, educational institutions and service providers may require cloud-based software for centralized reporting, online access and connected workflows.</p>
          <p>FlyTowards provides cloud application development services for businesses across Tamil Nadu, focusing on applications aligned with their operational needs and technical requirements.</p>
          <p>Whether you need a new cloud-based business application or improvements to existing software, we focus on practical functionality and suitable architecture.</p>
        </div>
        <div className="cloud-location-art cloud-reveal cloud-delay"><CloudDashboard /></div>
      </div></section>

      {/* Section 08: Why choose FlyTowards */}
      <section className="cloud-section"><div className="cloud-container cloud-why-grid">
        <div className="cloud-reveal"><SectionHeading>Why Choose FlyTowards for <span>Cloud Application Development?</span></SectionHeading><p>Choosing the right cloud app developers involves evaluating application requirements, architecture decisions, integrations and long-term maintenance needs.</p><a className="cloud-btn cloud-btn-primary" href="/contact">Talk to Our Team <ArrowRight size={17} /></a></div>
        <div className="cloud-reason-list">{differentiators.map(({ title, description }, index) => <article className="cloud-reason cloud-reveal" style={{ '--item': index }} key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={17} /></article>)}</div>
      </div></section>

      {/* Section 09: Business challenges */}
      <section className="cloud-section cloud-soft"><div className="cloud-container cloud-challenge-grid">
        <div className="cloud-reveal"><SectionHeading>When Does Your Business Need <span>Cloud Application Development?</span></SectionHeading><p>Cloud application development may be suitable when your business requires accessible, connected software supported by cloud infrastructure.</p><a className="cloud-btn cloud-btn-primary" href="/contact">Discuss Your Cloud Application Requirements <ArrowRight size={17} /></a></div>
        <div className="cloud-challenge-content cloud-reveal"><ul>{challenges.map((challenge) => <li key={challenge}><span><Check size={15} /></span>{challenge}</li>)}</ul><p>If these requirements match your business needs, cloud application development may provide a suitable technical approach.</p></div>
      </div></section>

      {/* Section 10: FAQs */}
      <section className="cloud-section"><div className="cloud-container cloud-faq-grid">
        <div className="cloud-reveal"><SectionHeading>Frequently Asked Questions About <span>Cloud Application Development</span></SectionHeading></div>
        <div className="cloud-faq-list cloud-reveal">{faqs.map(({ question, answer }, index) => <article className={`cloud-faq${openFaq === index ? ' is-open' : ''}`} key={question}><h3><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{question}<ChevronDown size={19} /></button></h3><div className="cloud-faq-answer" hidden={openFaq !== index}><p>{answer}</p></div></article>)}</div>
      </div></section>

      {/* Section 11: Final call to action */}
      <section className="cloud-section cloud-final-section"><div className="cloud-container"><div className="cloud-final cloud-reveal">
        <div className="cloud-final-copy"><SectionHeading>Build a Cloud Application <span>That Supports Your Business</span></SectionHeading><p>Need a cloud-based business platform, connected web application or modernization of existing software?</p><p>FlyTowards helps businesses explore cloud application development solutions designed around their users, workflows and technical requirements.</p><p>Share your project needs and take the next step toward a practical cloud application.</p>
          <div className="cloud-actions"><a className="cloud-btn cloud-btn-primary" href="/contact">Discuss Your Cloud Project <ArrowRight size={17} /></a><a className="cloud-btn cloud-btn-light" href="/contact">Request a Consultation <ArrowRight size={17} /></a></div>
        </div><i className="cloud-final-ring cloud-final-ring-one" /><i className="cloud-final-ring cloud-final-ring-two" />
      </div></div></section>
    </main>
  );
}
