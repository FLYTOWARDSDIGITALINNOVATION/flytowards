import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeftRight,
  ArrowRight,
  Braces,
  Boxes,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  HardHat,
  HeartPulse,
  LockKeyhole,
  RefreshCw,
  Settings2,
  ShoppingBag,
  Truck,
  Workflow,
  Zap,
} from 'lucide-react';
import './APIDev.css';

const heroTagline = 'Connect Your Applications. Simplify Your Business Workflows.';

const highlights = [
  {
    title: 'Application Connectivity',
    description: 'Enable communication between compatible software systems.',
    icon: Workflow,
  },
  {
    title: 'Data Exchange',
    description: 'Transfer information through defined API requests and responses.',
    icon: ArrowLeftRight,
  },
  {
    title: 'Workflow Automation',
    description: 'Reduce repetitive activities between connected applications.',
    icon: Zap,
  },
  {
    title: 'Controlled Access',
    description: 'Define authentication, authorization and access permissions.',
    icon: LockKeyhole,
  },
];

const services = [
  {
    title: 'Custom API Development',
    description: 'Build APIs tailored to your application functionality, data requirements and business processes.',
    icon: Braces,
    link: '/services/custom-software-development/',
  },
  {
    title: 'REST API Development',
    description: 'Develop REST-based interfaces for communication between web applications, mobile apps and backend services.',
    icon: Code2,
    link: '/services/web-application-development/',
  },
  {
    title: 'Third-Party API Integration',
    description: 'Connect compatible payment services, communication tools, business platforms and external applications.',
    icon: Boxes,
  },
  {
    title: 'ERP & CRM API Integration',
    description: 'Enable supported data exchange between enterprise applications, customer management systems and other business tools.',
    icon: Workflow,
    link: '/services/erp-development/',
  },
  {
    title: 'API Modernization & Optimization',
    description: 'Improve existing API functionality, request handling, documentation and integration workflows.',
    icon: RefreshCw,
  },
  {
    title: 'API Testing & Maintenance',
    description: 'Review API functionality, validate responses, address issues and support ongoing integration requirements.',
    icon: Settings2,
    link: '/services/software-maintenance-support/',
  },
];

const benefits = [
  {
    title: 'Connect Business Applications',
    description: 'Allow compatible software systems to communicate and share relevant information.',
    icon: Workflow,
  },
  {
    title: 'Reduce Manual Data Entry',
    description: 'Automate selected data transfers between applications and reduce repetitive administrative tasks.',
    icon: Zap,
  },
  {
    title: 'Improve Data Consistency',
    description: 'Support more reliable information exchange by defining how data is transferred and validated.',
    icon: Database,
  },
  {
    title: 'Extend Existing Software Functionality',
    description: 'Connect applications with supported external services without rebuilding every feature.',
    icon: Boxes,
  },
  {
    title: 'Support Future Integrations',
    description: 'Plan APIs that can accommodate additional applications and changing business requirements.',
    icon: ArrowRight,
  },
];

const industries = [
  {
    title: 'Manufacturing',
    description: 'Connect inventory, production, procurement and dispatch applications to support operational data exchange.',
    icon: Boxes,
  },
  {
    title: 'Healthcare',
    description: 'Integrate compatible appointment, billing and administrative applications, with appropriate privacy and access controls.',
    icon: HeartPulse,
  },
  {
    title: 'Retail & Wholesale',
    description: 'Connect online ordering, inventory, billing, customer management and payment-related systems.',
    icon: ShoppingBag,
  },
  {
    title: 'Education',
    description: 'Enable data exchange between student portals, admission applications, administrative systems and learning platforms.',
    icon: GraduationCap,
  },
  {
    title: 'Construction',
    description: 'Connect project management, procurement, vendor records and reporting applications.',
    icon: HardHat,
  },
  {
    title: 'Logistics & Transportation',
    description: 'Integrate shipment tracking, dispatch, delivery updates and transport management applications.',
    icon: Truck,
  },
];

const developmentSteps = [
  {
    title: 'Requirement & System Analysis',
    description: 'Understand your applications, required integrations, data flows and business objectives.',
  },
  {
    title: 'API Architecture & Planning',
    description: 'Define API endpoints, request and response formats, authentication requirements and integration methods.',
  },
  {
    title: 'API Development',
    description: 'Build the agreed API functionality, data handling processes and supporting backend logic.',
  },
  {
    title: 'Testing & Validation',
    description: 'Review endpoint functionality, data validation, error handling, access controls and integration workflows.',
  },
  {
    title: 'Integration & Deployment',
    description: 'Connect the API with supported applications and prepare it for the intended operating environment.',
  },
  {
    title: 'Maintenance & Enhancements',
    description: 'Plan updates, issue resolution, documentation improvements and future API functionality.',
  },
];

const reasons = [
  {
    title: 'Business-Focused Integration Planning',
    description: 'We begin by understanding your applications, operational challenges and required data exchange.',
  },
  {
    title: 'Custom API Solutions',
    description: 'API functionality is planned around your specific application requirements and business workflows.',
  },
  {
    title: 'Integration-Oriented Development',
    description: 'We consider existing system capabilities, supported interfaces and technical compatibility.',
  },
  {
    title: 'Maintainable API Planning',
    description: 'We consider documentation, error handling and future integration requirements during API planning.',
  },
];

const challenges = [
  'Your business uses multiple applications that do not communicate.',
  'Employees manually transfer information between software systems.',
  'Your website or mobile app needs backend data access.',
  'You need to connect an ERP, CRM or inventory application.',
  'Your business requires payment, messaging or other third-party integrations.',
  'Existing APIs cannot support your required functionality.',
  'You are building a digital platform that needs integrations with external services.',
];

const faqs = [
  {
    question: 'What is API development?',
    answer: 'API development is the process of creating interfaces that allow software applications to communicate, exchange data and access defined functionality.',
  },
  {
    question: 'What are API development services?',
    answer: 'API development services may include API design, custom endpoint development, third-party integration, testing, documentation, deployment and maintenance.',
  },
  {
    question: 'What is the difference between API development and API integration?',
    answer: 'API development involves creating an interface for software functionality or data. API integration involves connecting applications through existing or newly developed APIs.',
  },
  {
    question: 'How much does API development cost in Tamil Nadu?',
    answer: 'Costs depend on the number of endpoints, data complexity, authentication requirements, integrations, testing and project scope. A technical assessment helps determine the development budget.',
  },
  {
    question: 'How long does API development take?',
    answer: 'Timelines depend on API complexity, available documentation, system compatibility, authentication requirements and testing needs.',
  },
  {
    question: 'Can APIs connect existing ERP and CRM systems?',
    answer: 'Yes. APIs can often connect ERP, CRM and other business applications when supported interfaces and suitable access permissions are available.',
  },
  {
    question: 'How do I choose an API development company?',
    answer: "Evaluate the company's API design capabilities, integration experience, authentication practices, documentation, testing approach and maintenance options.",
  },
];

function updateMetaTag(selector, attribute, value, tagName, metaName) {
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement(tagName);

    if (metaName) {
      element.name = metaName;
    }

    if (tagName === 'link') {
      element.rel = 'canonical';
    }

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function IntegrationVisual({ interactive = false }) {
  function handleMouseMove(event) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!interactive || prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontalPosition = (event.clientX - bounds.left) / bounds.width - 0.5;
    const verticalPosition = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty('--tilt-x', `${-verticalPosition * 8}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${horizontalPosition * 10}deg`);
  }

  function resetTilt(event) {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  }

  return (
    <div
      className={`api-visual${interactive ? ' api-visual-tilt' : ''}`}
      role="img"
      aria-label="API integration connecting web, mobile, CRM and ERP applications"
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseLeave={interactive ? resetTilt : undefined}
    >
      <div className="api-visual-grid" />
      <div className="api-ring api-ring-a" />
      <div className="api-ring api-ring-b" />

      <svg className="api-flow-lines" viewBox="0 0 520 400" aria-hidden="true">
        <path d="M125 95 C185 95 182 173 235 183" />
        <path d="M390 95 C330 95 338 173 285 183" />
        <path d="M125 305 C185 305 182 227 235 217" />
        <path d="M390 305 C330 305 338 227 285 217" />
        <path className="api-flow-pulse" d="M125 95 C185 95 182 173 235 183" />
        <path className="api-flow-pulse delay" d="M390 305 C330 305 338 227 285 217" />
        <circle r="4" className="api-moving-dot">
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M125 95 C185 95 182 173 235 183" />
        </circle>
        <circle r="4" className="api-moving-dot">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M390 305 C330 305 338 227 285 217" />
        </circle>
      </svg>

      <div className="api-node api-node-web">
        <span><Cloud size={21} /></span>
        <b>Web app</b>
      </div>
      <div className="api-node api-node-crm">
        <span><Boxes size={21} /></span>
        <b>CRM</b>
      </div>
      <div className="api-node api-node-mobile">
        <span><Code2 size={21} /></span>
        <b>Mobile app</b>
      </div>
      <div className="api-node api-node-erp">
        <span><Database size={21} /></span>
        <b>ERP</b>
      </div>
      <div className="api-core">
        <div className="api-core-orbit" />
        <span><Braces size={30} /></span>
        <b>API</b>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2>
      {children}
    </h2>
  );
}

export default function APIDev() {
  const [openFaq, setOpenFaq] = useState(0);
  const [typedTagline, setTypedTagline] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'API Development Services in Tamil Nadu | FlyTowards';

    updateMetaTag(
      'meta[name="description"]',
      'content',
      'API development services in Tamil Nadu. FlyTowards builds custom APIs and system integrations to connect business applications and automate data exchange.',
      'meta',
      'description',
    );
    updateMetaTag(
      'meta[name="keywords"]',
      'content',
      'api development, api development companies, api development services',
      'meta',
      'keywords',
    );
    updateMetaTag(
      'link[rel="canonical"]',
      'href',
      'https://flytowardsdigitalinnovation.com/services/api-development/',
      'link',
    );

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'api-development-schema';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://flytowardsdigitalinnovation.com/#organization',
          name: 'FlyTowards Digital Innovation',
          url: 'https://flytowardsdigitalinnovation.com/',
        },
        {
          '@type': 'Service',
          name: 'API Development Services',
          serviceType: 'API Development and Integration',
          url: 'https://flytowardsdigitalinnovation.com/services/api-development/',
          areaServed: { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
          provider: { '@id': 'https://flytowardsdigitalinnovation.com/#organization' },
          description: 'API development services in Tamil Nadu. FlyTowards builds custom APIs and system integrations to connect business applications and automate data exchange.',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://flytowardsdigitalinnovation.com/services/' },
            { '@type': 'ListItem', position: 3, name: 'API Development', item: 'https://flytowardsdigitalinnovation.com/services/api-development/' },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        },
      ],
    });

    document.head.appendChild(schema);
    return () => schema.remove();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('api-visible');

          if (entry.target.classList.contains('api-timeline')) {
            entry.target.classList.add('api-flow-active');
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -35px 0px' },
    );

    document.querySelectorAll('.api-reveal, .api-timeline').forEach((element) => {
      observer.observe(element);
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let typingDelay;
    let typingInterval;

    if (prefersReducedMotion) {
      setTypedTagline(heroTagline);
    } else {
      setTypedTagline('');
      let characterIndex = 0;

      typingDelay = window.setTimeout(() => {
        typingInterval = window.setInterval(() => {
          characterIndex += 1;
          setTypedTagline(heroTagline.slice(0, characterIndex));

          if (characterIndex === heroTagline.length) {
            window.clearInterval(typingInterval);
          }
        }, 36);
      }, 550);
    }

    return () => {
      observer.disconnect();
      window.clearTimeout(typingDelay);
      window.clearInterval(typingInterval);
    };
  }, []);

  const headlineWords = ['API', 'Development', 'Services', 'in', 'Tamil', 'Nadu'];

  return (
    <main className="api-page">
      {/* Section 01: Hero */}
      <section className="api-section api-hero">
        <div className="api-container api-hero-grid">
          <div className="api-hero-copy api-reveal">
            <h1>
              {headlineWords.map((word, index) => (
                <span
                  className={`api-word${index > 2 ? ' api-gold' : ''}`}
                  style={{ '--word': index }}
                  key={word}
                >
                  {word}{index < headlineWords.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h1>
            <h2 aria-label={heroTagline}>
              <span className="api-typing" aria-hidden="true">{typedTagline}</span>
            </h2>
            <p>Disconnected software and repeated data entry can slow down business operations and make information difficult to manage.</p>
            <p>FlyTowards provides API development services for businesses across Tamil Nadu, with a focus on South Tamil Nadu. We develop custom APIs that help compatible applications communicate, exchange data and support connected business workflows.</p>
            <div className="api-actions">
              <a className="api-btn api-btn-primary" href="/contact">
                Discuss Your API Project <ArrowRight size={17} />
              </a>
              <a className="api-btn api-btn-secondary" href="/services">
                Explore Our Services <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <div className="api-reveal api-delay">
            <IntegrationVisual interactive />
          </div>
        </div>
      </section>

      {/* Section 02: Service overview */}
      <section className="api-section">
        <div className="api-container api-overview-grid">
          <div className="api-reveal">
            <SectionHeading>What Is API <span>Development?</span></SectionHeading>
            <p>API (Application Programming Interface) development involves creating interfaces that allow different software applications to communicate and exchange information through defined rules and requests.</p>
            <p>APIs help businesses connect websites, mobile applications, ERP systems, CRM platforms and other digital tools without requiring users to transfer information manually between every system.</p>
            <p>Custom API development allows organizations to define how their applications share data, access functionality and support business processes.</p>
          </div>
          <div className="api-highlight-list">
            {highlights.map(({ title, description, icon: Icon }, index) => (
              <article className="api-highlight api-reveal" style={{ '--i': index }} key={title}>
                <span className="api-icon"><Icon size={21} /></span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowRight size={17} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Services */}
      <section className="api-section api-soft" id="services">
        <div className="api-container">
          <div className="api-heading api-reveal">
            <SectionHeading>Our API Development <span>Services</span></SectionHeading>
            <p>We develop and integrate APIs to support business applications, digital platforms and connected software workflows.</p>
          </div>
          <div className="api-service-grid">
            {services.map(({ title, description, icon: Icon, link }, index) => (
              <article className="api-service api-reveal" style={{ '--i': index }} key={title}>
                <div className="api-card-top">
                  <span className="api-icon"><Icon size={22} /></span>
                  <small>0{index + 1}</small>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {link && (
                  <Link className="api-card-link" to={link} aria-label={`Learn about ${title}`}>
                    <ArrowRight size={17} />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: Business benefits */}
      <section className="api-section">
        <div className="api-container api-benefits-grid">
          <div className="api-flow-visual api-reveal"><IntegrationVisual /></div>
          <div className="api-reveal">
            <SectionHeading>Benefits of Custom API <span>Development</span></SectionHeading>
            <p>APIs help businesses connect digital systems and manage information exchange through structured interfaces.</p>
            <div className="api-benefit-list">
              {benefits.map(({ title, description, icon: Icon }) => (
                <article className="api-benefit" key={title}>
                  <Icon size={20} />
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Industry solutions */}
      <section className="api-section api-soft">
        <div className="api-container">
          <div className="api-heading api-reveal">
            <SectionHeading>API Integration Solutions for <span>Different Industries</span></SectionHeading>
            <p>Different industries use APIs to connect business systems, automate information exchange and support digital services.</p>
          </div>
          <div className="api-industry-list">
            {industries.map(({ title, description, icon: Icon }, index) => (
              <article className="api-industry api-reveal" style={{ '--i': index }} key={title}>
                <span className="api-icon"><Icon size={22} /></span>
                <small>0{index + 1}</small>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowRight size={17} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 06: Development process */}
      <section className="api-section">
        <div className="api-container">
          <div className="api-heading api-reveal">
            <SectionHeading>Our API Development <span>Process</span></SectionHeading>
            <p>We follow a structured approach to plan, develop and integrate APIs based on your application requirements.</p>
          </div>
          <div className="api-timeline">
            {developmentSteps.map(({ title, description }, index) => (
              <article className="api-step api-reveal" style={{ '--i': index }} key={title}>
                <span className="api-step-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 07: Location relevance */}
      <section className="api-section api-location">
        <div className="api-container api-location-grid">
          <div className="api-reveal">
            <SectionHeading>API Development Services <span>in Tamil Nadu</span></SectionHeading>
            <p>Businesses across Tamil Nadu use different software applications to manage sales, inventory, customer relationships, finance-related records and daily operations.</p>
            <p>In South Tamil Nadu, manufacturers, wholesalers, retailers, healthcare organizations and service providers may need APIs to connect existing software and reduce repeated data entry.</p>
            <p>FlyTowards provides API development services for businesses across Tamil Nadu, focusing on integrations aligned with their technical requirements and operational workflows.</p>
            <p>Whether you need to connect two business applications or develop APIs for a new digital platform, we focus on practical, maintainable integration solutions.</p>
          </div>
          <div className="api-location-visual api-reveal api-delay"><IntegrationVisual /></div>
        </div>
      </section>

      {/* Section 08: Why choose FlyTowards */}
      <section className="api-section">
        <div className="api-container api-why-grid">
          <div className="api-reveal">
            <SectionHeading>Why Choose FlyTowards for <span>API Development?</span></SectionHeading>
            <p>When comparing API development companies, businesses should consider technical compatibility, integration requirements, data handling and long-term maintenance.</p>
            <a className="api-btn api-btn-primary" href="/contact">
              Talk to Our Team <ArrowRight size={17} />
            </a>
          </div>
          <div className="api-reason-list">
            {reasons.map(({ title, description }, index) => (
              <article className="api-reason api-reveal" style={{ '--i': index }} key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowRight size={17} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 09: Business challenges */}
      <section className="api-section api-soft">
        <div className="api-container api-challenge-grid">
          <div className="api-reveal">
            <SectionHeading>When Does Your Business Need <span>API Development?</span></SectionHeading>
            <p>API development may be suitable when your applications need to exchange information or use functionality from other software systems.</p>
            <a className="api-btn api-btn-primary" href="/contact">
              Discuss Your API Integration Requirements <ArrowRight size={17} />
            </a>
          </div>
          <div className="api-challenge-content api-reveal">
            <ul>
              {challenges.map((challenge) => (
                <li key={challenge}><span><Check size={15} /></span>{challenge}</li>
              ))}
            </ul>
            <p>If these challenges affect your operations, custom API development may help connect your software environment.</p>
          </div>
        </div>
      </section>

      {/* Section 10: FAQs */}
      <section className="api-section">
        <div className="api-container api-faq-grid">
          <div className="api-reveal">
            <SectionHeading>Frequently Asked Questions About <span>API Development</span></SectionHeading>
          </div>
          <div className="api-faq-list api-reveal">
            {faqs.map(({ question, answer }, index) => (
              <article className={`api-faq${openFaq === index ? ' is-open' : ''}`} key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    {question}
                    <ChevronDown size={19} />
                  </button>
                </h3>
                <div className="api-faq-answer" hidden={openFaq !== index}>
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Final call to action */}
      <section className="api-section api-final-section">
        <div className="api-container">
          <div className="api-final api-reveal">
            <div className="api-final-copy">
              <SectionHeading>Connect Your Business Systems with Custom APIs</SectionHeading>
              <p>Need to integrate existing software, automate data exchange or develop APIs for a new application?</p>
              <p>FlyTowards helps businesses explore API development solutions designed around their systems, workflows and technical requirements.</p>
              <p>Share your integration needs and take the next step toward more connected business applications.</p>
              <div className="api-actions">
                <a className="api-btn api-btn-primary" href="/contact">
                  Discuss Your API Project <ArrowRight size={17} />
                </a>
                <a className="api-btn api-btn-light" href="/contact">
                  Request a Consultation <ArrowRight size={17} />
                </a>
              </div>
            </div>
            <div className="api-final-art"><IntegrationVisual /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
