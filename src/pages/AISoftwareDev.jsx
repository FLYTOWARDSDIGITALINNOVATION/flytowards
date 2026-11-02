import { useEffect, useState } from 'react';
import {
  ArrowRight, Bot, Boxes, BrainCircuit, Check, ChevronDown,
  FileSearch, FileText, GraduationCap, HardHat, HeartPulse, Layers3, MessageCircle,
  PackageCheck, RefreshCw, Search, ShoppingBag, Sparkles, Truck, Users, Workflow, Zap,
} from 'lucide-react';
import './AISoftwareDev.css';

const heroTagline = 'Build Smarter Software for Real Business Challenges';

const highlights = [
  { title: 'Intelligent Automation', description: 'Automate selected repetitive and information-based tasks.', icon: Workflow },
  { title: 'AI-Powered Applications', description: 'Add intelligent functionality to business software.', icon: BrainCircuit },
  { title: 'Information Processing', description: 'Extract, classify and organize relevant business data.', icon: FileSearch },
  { title: 'AI Integration', description: 'Connect suitable AI services with existing applications and workflows.', icon: Workflow },
];

const services = [
  { title: 'Custom AI Software Development', description: 'Develop AI-powered business applications designed for specific workflows, users and operational requirements.', icon: BrainCircuit },
  { title: 'Generative AI Application Development', description: 'Build applications that use suitable generative AI models for content assistance, information retrieval and task-oriented workflows.', icon: Sparkles },
  { title: 'AI Chatbot & Virtual Assistant Development', description: 'Create AI assistants for customer enquiries, internal knowledge access and guided business interactions.', icon: Bot },
  { title: 'AI Workflow Automation', description: 'Integrate AI capabilities into selected processes such as document handling, information classification and task routing.', icon: Workflow },
  { title: 'AI Integration with Business Software', description: 'Connect suitable AI services with compatible CRM, ERP, web applications and internal business systems.', icon: Layers3 },
  { title: 'AI Application Enhancement & Maintenance', description: 'Improve AI-enabled functionality, review model outputs and adapt applications to changing business requirements.', icon: RefreshCw },
];

const benefits = [
  { title: 'Reduce Repetitive Manual Work', description: 'Automate suitable tasks such as document classification, information extraction and routine processing.', icon: Zap },
  { title: 'Make Business Information Easier to Access', description: 'Help authorized users find and summarize relevant information from supported data sources.', icon: Search },
  { title: 'Support Faster Customer Responses', description: 'Use AI-assisted tools to prepare answers, organize enquiries and support customer-facing teams.', icon: MessageCircle },
  { title: 'Add Intelligent Features to Existing Software', description: 'Extend compatible business applications with AI-powered search, assistance and automation.', icon: BrainCircuit },
  { title: 'Support Better Operational Decisions', description: 'Present relevant information and AI-generated insights for human review and decision-making.', icon: PackageCheck },
];

const industries = [
  { title: 'Manufacturing', description: 'AI-assisted production reporting, document processing, maintenance record analysis and internal knowledge search.', icon: Boxes },
  { title: 'Healthcare', description: 'Administrative AI applications for document organization, appointment-related assistance and information retrieval, with appropriate privacy controls and human oversight.', icon: HeartPulse },
  { title: 'Retail & Wholesale', description: 'AI-assisted product information management, customer enquiry handling, sales reporting and inventory-related analysis.', icon: ShoppingBag },
  { title: 'Education', description: 'AI-powered learning assistance, institutional knowledge search, administrative document processing and student support tools.', icon: GraduationCap },
  { title: 'Construction', description: 'AI-assisted project document search, quotation information extraction, reporting and administrative workflow support.', icon: HardHat },
  { title: 'Logistics & Transportation', description: 'AI applications for shipment enquiry assistance, document processing, operational summaries and transport record analysis.', icon: Truck },
];

const developmentSteps = [
  { title: 'Business Requirement & AI Use Case Analysis', description: 'Understand your operational challenges, intended users, available data and expected application outcomes.' },
  { title: 'AI Feasibility & Solution Planning', description: 'Assess suitable AI approaches, model options, data requirements, integration needs and important limitations.' },
  { title: 'AI Application Development', description: 'Develop the agreed application features, AI integrations, interfaces and supporting business logic.' },
  { title: 'Testing & Output Evaluation', description: 'Review application functionality, AI output quality, error handling, access controls and representative use cases.' },
  { title: 'Deployment & Workflow Integration', description: 'Prepare the application for deployment and connect it with supported business workflows and systems.' },
  { title: 'Monitoring & Continuous Improvement', description: 'Review application behavior, address issues and plan improvements as data, models and business needs change.' },
];

const differentiators = [
  { title: 'Business-First AI Planning', description: 'We begin by identifying the business problem and assessing where AI functionality may be useful.' },
  { title: 'Custom AI Application Design', description: 'Application features are planned around your users, workflows and technical requirements.' },
  { title: 'AI & Software Integration', description: 'We consider how AI capabilities can work with compatible applications, APIs and existing business systems.' },
  { title: 'Practical Evaluation & Improvement', description: 'We consider output quality, limitations, human oversight and future enhancements during AI application planning.' },
];

const challenges = [
  'Employees spend significant time reviewing or organizing documents.',
  'Teams repeatedly search through large amounts of business information.',
  'Customer enquiries require frequent, similar responses.',
  'Existing software needs intelligent search or assistance features.',
  'Your business wants to automate selected text-based workflows.',
  'You are exploring generative AI development for an internal or customer-facing application.',
  'You need to evaluate whether AI can improve a specific business process.',
];

const faqs = [
  { question: 'What is AI software development?', answer: 'AI software development is the process of building applications that use artificial intelligence technologies to interpret information, generate outputs, recognize patterns or automate selected tasks.' },
  { question: 'How can businesses develop AI software for their needs?', answer: 'Businesses can begin by identifying a specific problem, reviewing available data, assessing suitable AI technologies and developing an application that integrates with their workflows.' },
  { question: 'What is the difference between AI software development and traditional software development?', answer: 'Traditional software primarily follows explicitly defined logic and rules. AI-enabled software can also use trained models to process information or generate outputs, which may require additional evaluation, monitoring and human oversight.' },
  { question: 'What is generative AI development?', answer: 'Generative AI development involves building applications that use generative models to produce content such as text, summaries, responses or other outputs based on user inputs and available context.' },
  { question: 'How much does AI software development cost in Tamil Nadu?', answer: 'Costs depend on application features, model selection, data preparation, integrations, testing and deployment requirements. Ongoing AI model usage, hosting and maintenance costs may also apply.' },
  { question: 'How long does it take to develop AI software?', answer: 'Timelines depend on the use case, data availability, application complexity, integrations and evaluation requirements. A focused prototype may require less work than a production application with multiple workflows.' },
  { question: 'Can AI be integrated into existing ERP, CRM or web applications?', answer: 'Yes. Suitable AI capabilities can often be integrated into compatible ERP, CRM and web applications through APIs or supported integration methods. Feasibility depends on system access, data requirements and technical compatibility.' },
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

function AiDashboard() {
  return (
    <div className="ai-dashboard-wrap" role="img" aria-label="AI-powered business application dashboard with intelligent document processing, workflow automation, AI assistant and data insights">
      <div className="ai-dashboard-orbit ai-orbit-one" /><div className="ai-dashboard-orbit ai-orbit-two" />
      <div className="ai-dashboard">
        <div className="ai-dashboard-window-bar"><i /><i /><i /></div>
        <div className="ai-assistant-head"><span className="ai-assistant-icon"><BrainCircuit size={21} /></span><div><strong>AI Assistant</strong><small>Business information</small></div><i className="ai-status-dot" /></div>
        <div className="ai-assistant-message"><Sparkles size={16} /><span>Intelligent document processing</span></div>
        <div className="ai-insight-grid">
          <div className="ai-insight-tile"><FileText size={19} /><strong>Information Processing</strong><span>AI-powered</span></div>
          <div className="ai-insight-tile"><Workflow size={19} /><strong>AI Workflow Automation</strong><span>Task routing</span></div>
        </div>
        <div className="ai-insight-chart"><div><strong>Operational decisions</strong><small>Human review</small></div><div className="ai-signal-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div></div>
        <div className="ai-dashboard-input"><Search size={15} /><span>Information retrieval</span><Sparkles size={15} /></div>
      </div>
    </div>
  );
}

function NeuralNetwork() {
  const nodes = [
    { name: 'Models', x: 230, y: 50 }, { name: 'Documents', x: 400, y: 150 },
    { name: 'Workflows', x: 340, y: 330 }, { name: 'Business Data', x: 120, y: 330 },
    { name: 'AI Assistant', x: 60, y: 150 },
  ];

  return (
    <svg className="ai-department-hub" viewBox="0 0 460 400" role="img" aria-label="AI application network connecting models, business data, documents, workflows and an AI assistant">
      {nodes.map((node) => <g key={node.name}><line x1="230" y1="200" x2={node.x} y2={node.y} /><circle r="4" className="ai-data-dot"><animateMotion dur="2.5s" repeatCount="indefinite" path={`M230,200 L${node.x},${node.y}`} /></circle><circle className="ai-department-node" cx={node.x} cy={node.y} r="34" /><text x={node.x} y={node.y + 4}>{node.name}</text></g>)}
      <circle className="ai-hub-pulse" cx="230" cy="200" r="47" /><circle className="ai-center-node" cx="230" cy="200" r="46" /><text className="ai-center-label" x="230" y="207">AI</text>
    </svg>
  );
}

function SectionHeading({ children }) { return <h2>{children}</h2>; }

export default function AISoftwareDev() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [typedTagline, setTypedTagline] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'AI Software Development Services in Tamil Nadu | FlyTowards';
    updateMetaTag('meta[name="description"]', 'content', 'AI software development services in Tamil Nadu. FlyTowards builds custom AI applications, intelligent automation and generative AI solutions for businesses.', 'meta', 'description');
    updateMetaTag('meta[name="keywords"]', 'content', 'ai software development, develop ai software, artificial intelligence software development, ai and software development, generative ai development', 'meta', 'keywords');
    updateMetaTag('link[rel="canonical"]', 'href', 'https://flytowardsdigitalinnovation.com/services/ai-software-development/', 'link');

    const schema = document.createElement('script');
    schema.type = 'application/ld+json'; schema.id = 'ai-software-development-schema';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', '@id': 'https://flytowardsdigitalinnovation.com/#organization', name: 'FlyTowards Digital Innovation', url: 'https://flytowardsdigitalinnovation.com/' },
        { '@type': 'Service', name: 'AI Software Development Services', serviceType: 'AI Software Development', url: 'https://flytowardsdigitalinnovation.com/services/ai-software-development/', areaServed: { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }, provider: { '@id': 'https://flytowardsdigitalinnovation.com/#organization' }, description: 'AI software development services in Tamil Nadu. FlyTowards builds custom AI applications, intelligent automation and generative AI solutions for businesses.' },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://flytowardsdigitalinnovation.com/services/' },
          { '@type': 'ListItem', position: 3, name: 'AI Software Development', item: 'https://flytowardsdigitalinnovation.com/services/ai-software-development/' },
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
      entry.target.classList.add('ai-visible');
      if (entry.target.classList.contains('ai-timeline')) entry.target.classList.add('ai-timeline-active');
      observer.unobserve(entry.target);
    }), { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.ai-reveal, .ai-timeline').forEach((element) => observer.observe(element));

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

  const headlineWords = ['AI', 'Software', 'Development', 'Services', 'in', 'Tamil', 'Nadu'];
  const selectedIndustry = industries[activeIndustry];
  const SelectedIndustryIcon = selectedIndustry.icon;

  return (
    <main className="ai-page">
      {/* Section 01: Hero */}
      <section className="ai-section ai-hero">
        <div className="ai-container ai-hero-grid">
          <div className="ai-hero-copy ai-reveal">
            <h1>{headlineWords.map((word, index) => <span className={`ai-word${index > 3 ? ' ai-gold' : ''}`} style={{ '--word': index }} key={word}>{word}{index < headlineWords.length - 1 ? ' ' : ''}</span>)}</h1>
            <h2 aria-label={heroTagline}><span className="ai-typing" aria-hidden="true">{typedTagline}</span></h2>
            <p>Repetitive processes, growing business data and disconnected workflows can make daily operations difficult to manage.</p>
            <p>FlyTowards provides AI software development services for businesses across Tamil Nadu, with a focus on South Tamil Nadu. We develop AI-powered applications that help organizations automate selected tasks, process information and introduce intelligent features into business software.</p>
            <p>From AI-enabled internal tools to generative AI applications, we focus on practical solutions aligned with your business requirements.</p>
            <div className="ai-actions"><a className="ai-btn ai-btn-primary" href="/contact">Discuss Your AI Project <ArrowRight size={17} /></a><a className="ai-btn ai-btn-secondary" href="/services">Explore Our Services <ArrowRight size={17} /></a></div>
          </div>
          <div className="ai-reveal ai-delay"><AiDashboard /></div>
        </div>
      </section>

      {/* Section 02: Service overview */}
      <section className="ai-section"><div className="ai-container ai-overview-grid">
        <div className="ai-reveal"><SectionHeading>What Is <span>AI Software Development?</span></SectionHeading>
          <p>AI software development involves designing and building applications that use artificial intelligence technologies to perform tasks such as interpreting information, recognizing patterns, generating content and supporting decisions.</p>
          <p>Artificial intelligence software development can combine traditional application features with machine learning models, language models, data processing and workflow automation.</p>
          <p>Businesses can develop AI software for specific operational needs, including document processing, customer support assistance, information retrieval and business process automation.</p>
        </div>
        <div className="ai-highlight-list">{highlights.map(({ title, description, icon: Icon }, index) => <article className="ai-highlight ai-reveal" style={{ '--item': index }} key={title}><span className="ai-icon"><Icon size={21} /></span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={17} /></article>)}</div>
      </div></section>

      {/* Section 03: Services */}
      <section className="ai-section ai-soft" id="services"><div className="ai-container">
        <div className="ai-heading ai-reveal"><SectionHeading>Our <span>AI Software Development Services</span></SectionHeading><p>We plan and develop AI-enabled applications around specific business problems, available data and technical requirements.</p></div>
        <div className="ai-service-grid">{services.map(({ title, description, icon: Icon }, index) => <article className="ai-service ai-reveal" style={{ '--item': index }} key={title}><div className="ai-service-top"><span className="ai-icon"><Icon size={22} /></span><small>0{index + 1}</small></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      {/* Section 04: Business benefits */}
      <section className="ai-section"><div className="ai-container ai-benefits-grid">
        <div className="ai-hub-wrap ai-reveal"><NeuralNetwork /></div>
        <div className="ai-reveal"><SectionHeading>Benefits of <span>AI Software Development for Businesses</span></SectionHeading><p>AI-enabled applications can help organizations handle selected information-heavy activities and support employees with more efficient digital workflows.</p>
          <div className="ai-benefit-list">{benefits.map(({ title, description, icon: Icon }, index) => <article className="ai-benefit" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><Icon size={19} /></article>)}</div>
        </div>
      </div></section>

      {/* Section 05: Industry solutions */}
      <section className="ai-section ai-soft"><div className="ai-container">
        <div className="ai-heading ai-reveal"><SectionHeading>AI Software Solutions <span>for Different Industries</span></SectionHeading><p>AI use cases vary according to business workflows, available data, operational challenges and the level of human oversight required.</p></div>
        <div className="ai-industry-tabs ai-reveal">
          <div className="ai-industry-buttons" role="tablist" aria-label="AI application industry solutions">{industries.map(({ title, icon: Icon }, index) => <button type="button" role="tab" aria-selected={activeIndustry === index} aria-controls="ai-industry-panel" id={`ai-industry-tab-${index}`} key={title} onClick={() => setActiveIndustry(index)} onMouseEnter={() => setActiveIndustry(index)}><Icon size={19} />{title}</button>)}</div>
          <article className="ai-industry-panel" role="tabpanel" id="ai-industry-panel" aria-labelledby={`ai-industry-tab-${activeIndustry}`} key={activeIndustry}><span className="ai-industry-panel-icon"><SelectedIndustryIcon size={38} /></span><div><h3>{selectedIndustry.title}</h3><p>{selectedIndustry.description}</p></div></article>
        </div>
      </div></section>

      {/* Section 06: Development process */}
      <section className="ai-section"><div className="ai-container">
        <div className="ai-heading ai-reveal"><SectionHeading>Our <span>AI Software Development Process</span></SectionHeading><p>We follow a structured approach to evaluate AI use cases, develop applications and assess their suitability for business workflows.</p></div>
        <div className="ai-timeline">{developmentSteps.map(({ title, description }, index) => <article className="ai-step ai-reveal" style={{ '--item': index }} key={title}><span className="ai-step-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      {/* Section 07: Location relevance */}
      <section className="ai-section ai-location"><div className="ai-container ai-location-grid">
        <div className="ai-reveal"><SectionHeading>AI Software Development Services <span>in Tamil Nadu</span></SectionHeading>
          <p>Businesses across Tamil Nadu are exploring digital solutions to manage growing information, improve internal processes and support customer-facing activities.</p>
          <p>In South Tamil Nadu, manufacturers, wholesalers, educational institutions, healthcare organizations and service providers may benefit from AI applications designed for specific operational tasks.</p>
          <p>FlyTowards provides AI software development services for businesses across Tamil Nadu, focusing on practical use cases, application integration and responsible implementation.</p>
          <p>Whether you want to introduce AI into existing business software or explore a new AI-powered application, the starting point is understanding the problem, available data and expected business value.</p>
        </div>
        <div className="ai-location-art ai-reveal ai-delay"><AiDashboard /></div>
      </div></section>

      {/* Section 08: Why choose FlyTowards */}
      <section className="ai-section"><div className="ai-container ai-why-grid">
        <div className="ai-reveal"><SectionHeading>Why Choose FlyTowards for <span>AI Software Development?</span></SectionHeading><p>Choosing an AI software development partner involves evaluating more than the AI model itself. The application must fit your workflows, handle data appropriately and produce outputs that can be evaluated.</p><a className="ai-btn ai-btn-primary" href="/contact">Talk to Our Team <ArrowRight size={17} /></a></div>
        <div className="ai-reason-list">{differentiators.map(({ title, description }, index) => <article className="ai-reason ai-reveal" style={{ '--item': index }} key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={17} /></article>)}</div>
      </div></section>

      {/* Section 09: Business challenges */}
      <section className="ai-section ai-soft"><div className="ai-container ai-challenge-grid">
        <div className="ai-reveal"><SectionHeading>When Does Your Business Need <span>AI Software Development?</span></SectionHeading><p>AI software development may be suitable when your organization handles repetitive information-based tasks or needs intelligent features within business applications.</p><a className="ai-btn ai-btn-primary" href="/contact">Discuss Your AI Requirements <ArrowRight size={17} /></a></div>
        <div className="ai-challenge-content ai-reveal"><ul>{challenges.map((challenge) => <li key={challenge}><span><Check size={15} /></span>{challenge}</li>)}</ul><p>Not every problem requires AI. A suitable solution depends on the task, data quality, accuracy requirements, costs and available alternatives.</p></div>
      </div></section>

      {/* Section 10: FAQs */}
      <section className="ai-section"><div className="ai-container ai-faq-grid">
        <div className="ai-reveal"><SectionHeading>Frequently Asked Questions About <span>AI Software Development</span></SectionHeading></div>
        <div className="ai-faq-list ai-reveal">{faqs.map(({ question, answer }, index) => <article className={`ai-faq${openFaq === index ? ' is-open' : ''}`} key={question}><h3><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{question}<ChevronDown size={19} /></button></h3><div className="ai-faq-answer" hidden={openFaq !== index}><p>{answer}</p></div></article>)}</div>
      </div></section>

      {/* Section 11: Final call to action */}
      <section className="ai-section ai-final-section"><div className="ai-container"><div className="ai-final ai-reveal">
        <div className="ai-final-copy"><SectionHeading>Turn Your AI Idea into a <span>Practical Business Application</span></SectionHeading><p>Looking to automate repetitive tasks, build an AI assistant or introduce intelligent features into existing software?</p><p>FlyTowards helps businesses explore AI software development solutions aligned with their workflows, users and technical requirements.</p><p>Share your AI project idea and take the next step toward evaluating a suitable solution.</p>
          <div className="ai-actions"><a className="ai-btn ai-btn-primary" href="/contact">Discuss Your AI Project <ArrowRight size={17} /></a><a className="ai-btn ai-btn-light" href="/contact">Request a Consultation <ArrowRight size={17} /></a></div>
        </div><i className="ai-final-ring ai-final-ring-one" /><i className="ai-final-ring ai-final-ring-two" />
      </div></div></section>
    </main>
  );
}


