import { useEffect, useState } from 'react';
import {
  ArrowRight, Boxes, Check, ChevronDown, ClipboardList, Compass, Factory,
  GraduationCap, HardHat, HeartPulse, Layers3, Map, PackageCheck, RefreshCw,
  Settings2, ShoppingBag, Target, Truck, Workflow,
} from 'lucide-react';
import './SoftwareConsulting.css';

const heroTagline = 'Make Better Software Decisions for Your Business';

const highlights = [
  { title: 'Software Requirement Analysis', description: 'Identify business needs, users and essential features.', icon: ClipboardList },
  { title: 'Technology Evaluation', description: 'Compare suitable software approaches and technical options.', icon: Compass },
  { title: 'System Assessment', description: 'Review existing applications, limitations and integration needs.', icon: Settings2 },
  { title: 'Project Planning', description: 'Define priorities, scope and a practical implementation roadmap.', icon: Map },
];

const services = [
  { title: 'Software Strategy & Planning', description: 'Assess business objectives and develop a practical direction for software adoption, development or improvement.', icon: Compass },
  { title: 'Software Requirement Consulting', description: 'Identify user needs, essential features, workflows and technical requirements before development begins.', icon: ClipboardList },
  { title: 'Technology Stack Consulting', description: 'Evaluate suitable programming technologies, application architectures and infrastructure options for a proposed solution.', icon: Layers3 },
  { title: 'Existing Software Assessment', description: 'Review current applications to identify workflow limitations, integration challenges and potential improvement opportunities.', icon: Settings2 },
  { title: 'Software Integration Consulting', description: 'Assess how compatible ERP, CRM, web applications and other business systems can exchange information.', icon: Workflow },
  { title: 'Software Modernization & Project Roadmapping', description: 'Plan application enhancements, modernization priorities and phased development or implementation activities.', icon: Map },
];

const benefits = [
  { title: 'Clarify Your Software Requirements', description: 'Identify the business problems, user needs and essential functionality that a software solution should address.', icon: Target },
  { title: 'Avoid Unnecessary Development', description: 'Evaluate whether an existing application, software integration or targeted enhancement could meet your needs before building something new.', icon: RefreshCw },
  { title: 'Plan Technology Investments More Effectively', description: 'Understand project scope, dependencies and implementation considerations before committing resources.', icon: PackageCheck },
  { title: 'Improve Existing Software Decisions', description: 'Identify opportunities to enhance applications, connect systems or simplify inefficient workflows.', icon: Workflow },
  { title: 'Prepare for Future Business Needs', description: 'Consider maintainability, integration requirements and potential expansion when planning software solutions.', icon: Map },
];

const industries = [
  { title: 'Manufacturing', description: 'Evaluate software requirements for production planning, inventory management, procurement, reporting and connected factory operations.', icon: Factory },
  { title: 'Healthcare', description: 'Assess administrative software, appointment workflows, information management and system integration needs, with appropriate privacy considerations.', icon: HeartPulse },
  { title: 'Retail & Wholesale', description: 'Plan software solutions for inventory, billing, order management, customer records and coordination across business locations.', icon: ShoppingBag },
  { title: 'Education', description: 'Evaluate applications for admissions, student administration, learning platforms, communication and institutional workflows.', icon: GraduationCap },
  { title: 'Construction', description: 'Assess project management tools, procurement workflows, material tracking, vendor records and reporting requirements.', icon: HardHat },
  { title: 'Logistics & Transportation', description: 'Plan digital solutions for dispatch coordination, shipment tracking, operational reporting and transport administration.', icon: Truck },
];

const developmentSteps = [
  { title: 'Business Discovery', description: 'Understand your business objectives, current workflows, operational challenges and expectations.' },
  { title: 'Existing System & Requirement Assessment', description: 'Review available information about your current software, users, processes and technical requirements.' },
  { title: 'Solution & Technology Evaluation', description: 'Assess suitable software approaches, integration possibilities and relevant technical considerations.' },
  { title: 'Scope & Feasibility Planning', description: 'Identify essential features, project dependencies, implementation constraints and areas requiring further validation.' },
  { title: 'Software Roadmap & Recommendations', description: 'Outline recommended next steps, development priorities and a suitable implementation approach.' },
  { title: 'Implementation Guidance', description: 'Discuss development planning, technical decisions and potential adjustments as the proposed solution moves forward.' },
];

const differentiators = [
  { title: 'Business-First Assessment', description: 'We begin by understanding the business challenge before recommending a software approach.' },
  { title: 'Practical Technology Planning', description: 'We consider functionality, technical compatibility, implementation complexity and business priorities.' },
  { title: 'Custom Software Perspective', description: 'We evaluate where custom development, existing software or targeted enhancements may be appropriate.' },
  { title: 'Clear Development Direction', description: 'We focus on defining requirements, priorities and next steps that can guide software implementation.' },
];

const challenges = [
  'You are unsure whether to build custom software or buy an existing product.',
  'Your current software no longer supports important business workflows.',
  'Different departments rely on disconnected applications.',
  'You need help defining features for a new software project.',
  'Your business wants to modernize an outdated application.',
  'You are evaluating ERP, CRM, cloud or automation solutions.',
  'You need a clearer software roadmap before investing in development.',
];

const faqs = [
  { question: 'What is software consulting?', answer: 'Software consulting helps businesses assess their technology requirements, evaluate software options, review existing systems and plan suitable digital solutions.' },
  { question: 'What do software consulting services include?', answer: 'Software consulting services may include requirement analysis, technology evaluation, software architecture planning, system assessment, integration consulting and implementation roadmapping.' },
  { question: 'What is the difference between software consulting and software development?', answer: 'Software consulting focuses on evaluating business needs and recommending suitable technology approaches. Software development focuses on designing, building, testing and implementing applications. Some projects involve both services.' },
  { question: 'How much does software consulting cost in Tamil Nadu?', answer: 'Costs depend on the scope of assessment, number of systems involved, technical complexity, required documentation and consulting duration. A discussion of your requirements helps determine the appropriate engagement scope.' },
  { question: 'Can software consulting help improve existing applications?', answer: 'Yes. Consulting can help identify limitations in existing applications, assess integration requirements and recommend suitable enhancements or modernization options.' },
  { question: 'Can software consulting help us choose between custom software and ready-made software?', answer: 'Yes. A consulting assessment can compare custom development and existing software based on business requirements, flexibility, implementation effort, maintenance and total costs.' },
  { question: 'What is the difference between software consulting and consultation software?', answer: "Software consulting is a professional advisory service. Consultation software generally refers to applications used to manage consultations, appointments or client interactions. Similarly, consulting company software refers to tools used by consulting businesses. FlyTowards' software consulting service focuses on technology assessment and planning, while software for consulting firms would be a separate application development requirement." },
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

function PlanningBoard() {
  const planStages = [
    { title: 'Business Discovery', icon: Target },
    { title: 'System Assessment', icon: Settings2 },
    { title: 'Technology Evaluation', icon: Compass },
    { title: 'Software Roadmap', icon: Map },
  ];

  return (
    <div className="consult-board-wrap" role="img" aria-label="Software planning roadmap from business discovery through assessment and technology evaluation to recommendations">
      <div className="consult-board-orbit consult-board-orbit-one" />
      <div className="consult-board-orbit consult-board-orbit-two" />
      <div className="consult-planning-board">
        <div className="consult-board-top"><span /><span /><span /><strong>Software planning</strong></div>
        <div className="consult-board-path" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="consult-board-stages">
          {planStages.map(({ title, icon: Icon }, index) => (
            <div className="consult-board-stage" style={{ '--stage': index }} key={title}>
              <span className="consult-stage-icon"><Icon size={20} /></span>
              <strong>{title}</strong>
              <small>0{index + 1}</small>
            </div>
          ))}
        </div>
        <div className="consult-board-note"><span className="consult-note-mark"><ClipboardList size={17} /></span><div><strong>Project priorities</strong><i /><i /></div></div>
      </div>
    </div>
  );
}

function RoadmapVisual() {
  const milestones = [
    { title: 'Assess', x: 70, y: 175 },
    { title: 'Evaluate', x: 220, y: 95 },
    { title: 'Prioritize', x: 375, y: 175 },
    { title: 'Guide', x: 525, y: 95 },
  ];

  return (
    <svg className="consult-roadmap-visual" viewBox="0 0 600 270" role="img" aria-label="Software consulting roadmap showing assessment, evaluation, priorities and implementation guidance">
      <path className="consult-roadmap-track" d="M70 175 C145 175 145 95 220 95 S300 175 375 175 S450 95 525 95" />
      {milestones.map((step, index) => (
        <g key={step.title} style={{ '--milestone': index }}>
          <circle className="consult-roadmap-halo" cx={step.x} cy={step.y} r="24" />
          <circle className="consult-roadmap-node" cx={step.x} cy={step.y} r="16" />
          <text x={step.x} y={step.y + 48}>{step.title}</text>
        </g>
      ))}
    </svg>
  );
}

function SectionHeading({ children }) { return <h2>{children}</h2>; }

export default function SoftwareConsulting() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [typedTagline, setTypedTagline] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Software Consulting Services in Tamil Nadu | FlyTowards';
    updateMetaTag('meta[name="description"]', 'content', 'Software consulting services in Tamil Nadu. FlyTowards helps businesses evaluate software, plan digital solutions and make informed technology decisions.', 'meta', 'description');
    updateMetaTag('meta[name="keywords"]', 'content', 'software consulting, software consulting companies, software consulting services, consultation software, consulting company software', 'meta', 'keywords');
    updateMetaTag('link[rel="canonical"]', 'href', 'https://flytowardsdigitalinnovation.com/services/software-consulting/', 'link');

    const schema = document.createElement('script');
    schema.type = 'application/ld+json'; schema.id = 'software-consulting-schema';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', '@id': 'https://flytowardsdigitalinnovation.com/#organization', name: 'FlyTowards Digital Innovation', url: 'https://flytowardsdigitalinnovation.com/' },
        { '@type': 'Service', name: 'Software Consulting Services', serviceType: 'Software Consulting', url: 'https://flytowardsdigitalinnovation.com/services/software-consulting/', areaServed: { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }, provider: { '@id': 'https://flytowardsdigitalinnovation.com/#organization' }, description: 'Software consulting services in Tamil Nadu. FlyTowards helps businesses evaluate software, plan digital solutions and make informed technology decisions.' },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://flytowardsdigitalinnovation.com/services/' },
          { '@type': 'ListItem', position: 3, name: 'Software Consulting', item: 'https://flytowardsdigitalinnovation.com/services/software-consulting/' },
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
      entry.target.classList.add('consult-visible');
      if (entry.target.classList.contains('consult-timeline')) entry.target.classList.add('consult-timeline-active');
      observer.unobserve(entry.target);
    }), { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.consult-reveal, .consult-timeline').forEach((element) => observer.observe(element));

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

  const headlineWords = ['Software', 'Consulting', 'Services', 'in', 'Tamil', 'Nadu'];
  const selectedIndustry = industries[activeIndustry];
  const SelectedIndustryIcon = selectedIndustry.icon;

  return (
    <main className="consult-page">
      {/* Section 01: Hero */}
      <section className="consult-section consult-hero">
        <div className="consult-container consult-hero-grid">
          <div className="consult-hero-copy consult-reveal">
            <h1>{headlineWords.map((word, index) => <span className={`consult-word${index > 3 ? ' consult-gold' : ''}`} style={{ '--word': index }} key={word}>{word}{index < headlineWords.length - 1 ? ' ' : ''}</span>)}</h1>
            <h2 aria-label={heroTagline}><span className="consult-typing" aria-hidden="true">{typedTagline}</span></h2>
            <p>Choosing the wrong software, relying on disconnected applications or starting development without a clear plan can create unnecessary costs and operational challenges.</p>
            <p>FlyTowards provides software consulting services for businesses across Tamil Nadu, with a focus on South Tamil Nadu. We help organizations assess their software requirements, evaluate technology options and plan solutions that align with their business processes.</p>
            <p>Whether you are planning a new application, improving existing software or exploring business automation, we focus on helping you make informed technology decisions.</p>
            <div className="consult-actions"><a className="consult-btn consult-btn-primary" href="/contact">Discuss Your Software Requirements <ArrowRight size={17} /></a><a className="consult-btn consult-btn-secondary" href="/services">Explore Our Services <ArrowRight size={17} /></a></div>
          </div>
          <div className="consult-reveal consult-delay"><PlanningBoard /></div>
        </div>
      </section>

      {/* Section 02: Service overview */}
      <section className="consult-section"><div className="consult-container consult-overview-grid">
        <div className="consult-reveal"><SectionHeading>What Is <span>Software Consulting?</span></SectionHeading>
          <p>Software consulting is a professional service that helps businesses evaluate software needs, identify technology challenges and plan suitable digital solutions.</p>
          <p>It may involve reviewing existing applications, defining requirements, comparing software options, assessing integrations and recommending an appropriate development or implementation approach.</p>
          <p>Unlike software development, which focuses on building applications, software consulting primarily helps organizations decide what to build, improve, integrate or adopt—and why.</p>
        </div>
        <div className="consult-highlight-list">{highlights.map(({ title, description, icon: Icon }, index) => <article className="consult-highlight consult-reveal" style={{ '--item': index }} key={title}><span className="consult-icon"><Icon size={21} /></span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={17} /></article>)}</div>
      </div></section>

      {/* Section 03: Services */}
      <section className="consult-section consult-soft" id="services"><div className="consult-container">
        <div className="consult-heading consult-reveal"><SectionHeading>Our <span>Software Consulting Services</span></SectionHeading><p>We help businesses evaluate software challenges and plan technology solutions around their operations, budgets and long-term requirements.</p></div>
        <div className="consult-service-grid">{services.map(({ title, description, icon: Icon }, index) => <article className="consult-service consult-reveal" style={{ '--item': index }} key={title}><div className="consult-service-top"><span className="consult-icon"><Icon size={22} /></span><small>0{index + 1}</small></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      {/* Section 04: Business benefits */}
      <section className="consult-section"><div className="consult-container consult-benefits-grid">
        <div className="consult-hub-wrap consult-reveal"><RoadmapVisual /></div>
        <div className="consult-reveal"><SectionHeading>Benefits of <span>Professional Software Consulting</span></SectionHeading><p>Software consulting helps businesses approach technology investments with clearer requirements, realistic priorities and a better understanding of available options.</p>
          <div className="consult-benefit-list">{benefits.map(({ title, description, icon: Icon }, index) => <article className="consult-benefit" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><Icon size={19} /></article>)}</div>
        </div>
      </div></section>

      {/* Section 05: Industry solutions */}
      <section className="consult-section consult-soft"><div className="consult-container">
        <div className="consult-heading consult-reveal"><SectionHeading>Software Consulting <span>for Different Industries</span></SectionHeading><p>Software requirements vary across industries. Effective consulting begins with understanding the workflows, records and operational challenges specific to each business.</p></div>
        <div className="consult-industry-tabs consult-reveal">
          <div className="consult-industry-buttons" role="tablist" aria-label="Software consulting industry solutions">{industries.map(({ title, icon: Icon }, index) => <button type="button" role="tab" aria-selected={activeIndustry === index} aria-controls="consult-industry-panel" id={`consult-industry-tab-${index}`} key={title} onClick={() => setActiveIndustry(index)} onMouseEnter={() => setActiveIndustry(index)}><Icon size={19} />{title}</button>)}</div>
          <article className="consult-industry-panel" role="tabpanel" id="consult-industry-panel" aria-labelledby={`consult-industry-tab-${activeIndustry}`} key={activeIndustry}><span className="consult-industry-panel-icon"><SelectedIndustryIcon size={38} /></span><div><h3>{selectedIndustry.title}</h3><p>{selectedIndustry.description}</p></div></article>
        </div>
      </div></section>

      {/* Section 06: Development process */}
      <section className="consult-section"><div className="consult-container">
        <div className="consult-heading consult-reveal"><SectionHeading>Our <span>Software Consulting Process</span></SectionHeading><p>We follow a structured approach to understand business challenges, evaluate technology options and recommend suitable next steps.</p></div>
        <div className="consult-timeline">{developmentSteps.map(({ title, description }, index) => <article className="consult-step consult-reveal" style={{ '--item': index }} key={title}><span className="consult-step-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      {/* Section 07: Location relevance */}
      <section className="consult-section consult-location"><div className="consult-container consult-location-grid">
        <div className="consult-reveal"><SectionHeading>Software Consulting Services <span>in Tamil Nadu</span></SectionHeading>
          <p>Businesses across Tamil Nadu use software to manage customers, inventory, finance-related records, production, administration and daily operations.</p>
          <p>In South Tamil Nadu, manufacturers, wholesalers, retailers, educational institutions and service providers may need guidance when selecting business software, replacing manual workflows or planning custom applications.</p>
          <p>FlyTowards provides software consulting services for businesses across Tamil Nadu, focusing on practical requirements, suitable technology choices and business-aligned software planning.</p>
          <p>Whether your organization is considering its first custom application or evaluating improvements to an existing system, a clear software strategy can help guide the next decision.</p>
        </div>
        <div className="consult-location-art consult-reveal consult-delay"><PlanningBoard /></div>
      </div></section>

      {/* Section 08: Why choose FlyTowards */}
      <section className="consult-section"><div className="consult-container consult-why-grid">
        <div className="consult-reveal"><SectionHeading>Why Choose FlyTowards for <span>Software Consulting?</span></SectionHeading><p>When comparing software consulting companies, businesses should look for an approach that connects technology recommendations with actual operational needs.</p><a className="consult-btn consult-btn-primary" href="/contact">Talk to Our Team <ArrowRight size={17} /></a></div>
        <div className="consult-reason-list">{differentiators.map(({ title, description }, index) => <article className="consult-reason consult-reveal" style={{ '--item': index }} key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={17} /></article>)}</div>
      </div></section>

      {/* Section 09: Business challenges */}
      <section className="consult-section consult-soft"><div className="consult-container consult-challenge-grid">
        <div className="consult-reveal"><SectionHeading>When Does Your Business Need <span>Software Consulting?</span></SectionHeading><p>Software consulting may be useful when your business has identified a technology problem but needs guidance on the most suitable solution.</p><a className="consult-btn consult-btn-primary" href="/contact">Discuss Your Software Challenges <ArrowRight size={17} /></a></div>
        <div className="consult-challenge-content consult-reveal"><ul>{challenges.map((challenge) => <li key={challenge}><span><Check size={15} /></span>{challenge}</li>)}</ul><p>If these situations match your business needs, software consulting can help you evaluate options and establish practical next steps.</p></div>
      </div></section>

      {/* Section 10: FAQs */}
      <section className="consult-section"><div className="consult-container consult-faq-grid">
        <div className="consult-reveal"><SectionHeading>Frequently Asked Questions About <span>Software Consulting</span></SectionHeading></div>
        <div className="consult-faq-list consult-reveal">{faqs.map(({ question, answer }, index) => <article className={`consult-faq${openFaq === index ? ' is-open' : ''}`} key={question}><h3><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{question}<ChevronDown size={19} /></button></h3><div className="consult-faq-answer" hidden={openFaq !== index}><p>{answer}</p></div></article>)}</div>
      </div></section>

      {/* Section 11: Final call to action */}
      <section className="consult-section consult-final-section"><div className="consult-container"><div className="consult-final consult-reveal">
        <div className="consult-final-copy"><SectionHeading>Make Your Next Software Decision <span>with Greater Clarity</span></SectionHeading><p>Planning a new application, evaluating existing software or unsure which technology approach fits your business?</p><p>FlyTowards helps businesses explore software consulting solutions focused on practical requirements, suitable technologies and informed development planning.</p><p>Share your software challenges and take the next step toward a clearer technology roadmap.</p>
          <div className="consult-actions"><a className="consult-btn consult-btn-primary" href="/contact">Discuss Your Software Requirements <ArrowRight size={17} /></a><a className="consult-btn consult-btn-light" href="/contact">Request a Consultation <ArrowRight size={17} /></a></div>
        </div><i className="consult-final-ring consult-final-ring-one" /><i className="consult-final-ring consult-final-ring-two" />
      </div></div></section>
    </main>
  );
}




