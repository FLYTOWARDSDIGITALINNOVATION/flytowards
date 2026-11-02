import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  ChevronDown,
  ClipboardList,
  CreditCard,
  Factory,
  GraduationCap,
  HardHat,
  HeartPulse,
  Layers3,
  PackageCheck,
  RefreshCw,
  ShoppingBag,
  Truck,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import './ERPDev.css';

const heroTagline = 'Connect Every Department. Simplify Every Process.';

const highlights = [
  { title: 'Centralized Business Data', description: 'Manage information across departments.', icon: Layers3 },
  { title: 'Connected Workflows', description: 'Link purchasing, inventory, sales and operations.', icon: Workflow },
  { title: 'Process Automation', description: 'Reduce repetitive entries and manual approvals.', icon: Zap },
  { title: 'Operational Reporting', description: 'Access relevant information through dashboards and reports.', icon: BarChart3 },
];

const services = [
  {
    title: 'Custom ERP System Development',
    description: 'Build tailored ERP applications that connect essential business functions within a centralized platform.',
    icon: Boxes,
    link: '/services/custom-software-development/',
  },
  {
    title: 'Inventory & Warehouse Management',
    description: 'Manage stock records, material movements, purchase receipts, warehouse activities and inventory reporting.',
    icon: PackageCheck,
  },
  {
    title: 'Purchase & Sales Management',
    description: 'Organize supplier records, purchase orders, sales orders, quotations and related business workflows.',
    icon: ClipboardList,
  },
  {
    title: 'Finance & Business Reporting Modules',
    description: 'Develop modules for financial records, expense tracking, operational summaries and business reporting requirements.',
    icon: CreditCard,
  },
  {
    title: 'Production & Operations Management',
    description: 'Support production planning, work orders, material requirements and manufacturing-related workflows.',
    icon: Factory,
  },
  {
    title: 'ERP Integration & Modernization',
    description: 'Connect compatible business applications, improve existing ERP functionality and address changing operational requirements.',
    icon: RefreshCw,
    link: '/services/software-maintenance-support/',
  },
];

const benefits = [
  {
    title: 'Bring Departments Together',
    description: 'Connect important business functions so teams can work with relevant information through a shared system.',
    icon: Users,
  },
  {
    title: 'Reduce Duplicate Data Entry',
    description: 'Limit repeated manual updates by connecting compatible processes and records.',
    icon: RefreshCw,
  },
  {
    title: 'Improve Inventory & Resource Visibility',
    description: 'Access relevant information about stock, purchases, materials and operational activities.',
    icon: PackageCheck,
  },
  {
    title: 'Simplify Business Reporting',
    description: 'Consolidate information from different departments into useful reports and dashboards.',
    icon: BarChart3,
  },
  {
    title: 'Adapt ERP Modules to Your Operations',
    description: 'Develop functionality based on your workflows, team structure and future business requirements.',
    icon: Workflow,
  },
];

const industries = [
  {
    title: 'Manufacturing',
    description: 'ERP modules for production planning, raw materials, inventory, procurement, work orders and dispatch coordination.',
    icon: Factory,
  },
  {
    title: 'Retail & Wholesale',
    description: 'Integrated systems for purchasing, stock management, sales orders, supplier records and multi-branch operations.',
    icon: ShoppingBag,
  },
  {
    title: 'Healthcare',
    description: 'Administrative ERP modules for purchasing, inventory, billing-related records and departmental resource management.',
    icon: HeartPulse,
  },
  {
    title: 'Education',
    description: 'Enterprise applications for institutional administration, purchasing, finance-related workflows and resource management.',
    icon: GraduationCap,
  },
  {
    title: 'Construction',
    description: 'ERP systems for project expenses, material procurement, vendor management, workforce records and operational reporting.',
    icon: HardHat,
  },
  {
    title: 'Logistics & Transportation',
    description: 'Applications for transport administration, purchasing, resource allocation, expenses and operational records.',
    icon: Truck,
  },
];

const developmentSteps = [
  {
    title: 'Business Process Analysis',
    description: 'Understand your departments, existing software, operational challenges and ERP requirements.',
  },
  {
    title: 'ERP Module Planning & Architecture',
    description: 'Define required modules, user roles, data relationships, integrations and technical architecture.',
  },
  {
    title: 'ERP Application Development',
    description: 'Develop agreed modules, business workflows, dashboards and application functionality.',
  },
  {
    title: 'Testing & Quality Assurance',
    description: 'Review module functionality, user permissions, data handling and cross-department workflows.',
  },
  {
    title: 'Deployment & Implementation',
    description: 'Prepare the ERP application for deployment, configure agreed settings and support implementation activities.',
  },
  {
    title: 'Maintenance & Enhancements',
    description: 'Plan software updates, issue resolution and future module improvements based on business needs.',
  },
];

const differentiators = [
  {
    title: 'Business Process Understanding',
    description: 'We begin by understanding your operational workflows, departmental requirements and existing systems.',
  },
  {
    title: 'Custom ERP Modules',
    description: 'ERP functionality is planned around the modules and processes your organization needs.',
  },
  {
    title: 'Connected System Planning',
    description: 'We consider data relationships, compatible integrations and information flow between business functions.',
  },
  {
    title: 'Long-Term ERP Planning',
    description: 'We consider maintainability, additional modules and potential enhancements when defining ERP requirements.',
  },
];

const challenges = [
  'Inventory, purchasing, sales and finance use disconnected tools.',
  'Employees repeatedly enter the same data into different systems.',
  'Stock records and purchase information are difficult to reconcile.',
  'Departmental approvals depend heavily on manual processes.',
  'Managers lack centralized operational reports.',
  'Existing ERP software cannot support specialized workflows.',
  'Your business needs additional modules, integrations or branch-level visibility.',
];

const faqs = [
  {
    question: 'What is ERP software development?',
    answer: 'ERP software development involves designing and building applications that connect business functions such as inventory, purchasing, sales, finance and operations within a coordinated system.',
  },
  {
    question: 'What is an enterprise resource planning (ERP) system?',
    answer: 'An enterprise resource planning (ERP) system is software that helps organizations manage and connect important business processes through shared data, modules and workflows.',
  },
  {
    question: 'What is the difference between custom ERP and ready-made ERP software?',
    answer: 'Ready-made ERP software provides predefined modules and configuration options. Custom ERP software is developed around specific business workflows, although it generally requires more development effort and ongoing maintenance.',
  },
  {
    question: 'How much does ERP software development cost in Tamil Nadu?',
    answer: 'Costs depend on the number of ERP modules, user roles, integrations, data requirements, technical complexity and project scope. A requirements assessment helps determine the development budget.',
  },
  {
    question: 'How long does ERP system development take?',
    answer: 'Timelines depend on module complexity, departmental requirements, integrations, data migration needs and testing. Larger ERP projects typically require phased planning and implementation.',
  },
  {
    question: 'Can a custom ERP system integrate with existing software?',
    answer: 'Yes. ERP systems can often integrate with compatible CRM, accounting, inventory and other business applications through supported APIs or integration methods.',
  },
  {
    question: 'Can ERP software be developed in phases?',
    answer: 'Yes. ERP development can be planned in phases, starting with priority modules and introducing additional functionality as business requirements and project scope allow.',
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

function ErpDashboard({ interactive = false }) {
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

  const modules = [
    { name: 'Inventory', icon: PackageCheck },
    { name: 'Purchasing', icon: ClipboardList },
    { name: 'Sales', icon: ShoppingBag },
    { name: 'Finance', icon: CreditCard },
    { name: 'Reporting', icon: BarChart3 },
  ];

  const chartBars = [45, 70, 55, 90, 65, 80, 50];

  return (
    <div
      className={`erp-dashboard-wrap${interactive ? ' erp-dashboard-tilt' : ''}`}
      role="img"
      aria-label="Custom ERP software dashboard for inventory and business operations"
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseLeave={interactive ? resetTilt : undefined}
    >
      <div className="erp-dashboard-orbit erp-orbit-one" />
      <div className="erp-dashboard-orbit erp-orbit-two" />

      <div className="erp-dashboard">
        <div className="erp-dashboard-window-bar"><i /><i /><i /></div>
        <div className="erp-module-grid">
          {modules.map(({ name, icon: Icon }, index) => (
            <div className="erp-module" style={{ '--module': index }} key={name}>
              <Icon size={20} />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="erp-chart" aria-hidden="true">
          {chartBars.map((height, index) => (
            <span
              key={index}
              style={{ '--bar-height': `${height}%`, '--bar-index': index }}
            />
          ))}
        </div>
        <div className="erp-dashboard-rows" aria-hidden="true">
          <i /><i /><i />
        </div>
      </div>
    </div>
  );
}

function DepartmentHub() {
  const departments = [
    { name: 'Inventory', x: 230, y: 50 },
    { name: 'Purchasing', x: 400, y: 150 },
    { name: 'Sales', x: 340, y: 330 },
    { name: 'Finance', x: 120, y: 330 },
    { name: 'Reporting', x: 60, y: 150 },
  ];

  return (
    <svg
      className="erp-department-hub"
      viewBox="0 0 460 400"
      role="img"
      aria-label="Enterprise resource planning system connecting purchasing, sales, finance, inventory and reporting"
    >
      {departments.map((department) => (
        <g key={department.name}>
          <line x1="230" y1="200" x2={department.x} y2={department.y} />
          <circle r="4" className="erp-data-dot">
            <animateMotion
              dur="2.5s"
              repeatCount="indefinite"
              path={`M230,200 L${department.x},${department.y}`}
            />
          </circle>
          <circle className="erp-department-node" cx={department.x} cy={department.y} r="34" />
          <text x={department.x} y={department.y + 4}>{department.name}</text>
        </g>
      ))}
      <circle className="erp-hub-pulse" cx="230" cy="200" r="47" />
      <circle className="erp-center-node" cx="230" cy="200" r="46" />
      <text className="erp-center-label" x="230" y="207">ERP</text>
    </svg>
  );
}

function SectionHeading({ children }) {
  return <h2>{children}</h2>;
}

export default function ERPDev() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [typedTagline, setTypedTagline] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'ERP Software Development Services in Tamil Nadu | FlyTowards';

    updateMetaTag(
      'meta[name="description"]',
      'content',
      'ERP software development services in Tamil Nadu. FlyTowards builds custom ERP systems to connect inventory, finance, purchasing and business operations.',
      'meta',
      'description',
    );
    updateMetaTag(
      'meta[name="keywords"]',
      'content',
      'erp software development services, enterprise resource planning erp system, erp software development, erp development services, erp system development',
      'meta',
      'keywords',
    );
    updateMetaTag(
      'link[rel="canonical"]',
      'href',
      'https://flytowardsdigitalinnovation.com/services/erp-development/',
      'link',
    );

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'erp-development-schema';
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
          name: 'ERP Software Development Services',
          serviceType: 'ERP Software Development',
          url: 'https://flytowardsdigitalinnovation.com/services/erp-development/',
          areaServed: { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
          provider: { '@id': 'https://flytowardsdigitalinnovation.com/#organization' },
          description: 'ERP software development services in Tamil Nadu. FlyTowards builds custom ERP systems to connect inventory, finance, purchasing and business operations.',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://flytowardsdigitalinnovation.com/services/' },
            { '@type': 'ListItem', position: 3, name: 'ERP Development', item: 'https://flytowardsdigitalinnovation.com/services/erp-development/' },
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

          entry.target.classList.add('erp-visible');

          if (entry.target.classList.contains('erp-timeline')) {
            entry.target.classList.add('erp-timeline-active');
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -35px 0px' },
    );

    document.querySelectorAll('.erp-reveal, .erp-timeline').forEach((element) => {
      observer.observe(element);
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let typingDelay;
    let typingInterval;

    if (prefersReducedMotion) {
      setTypedTagline(heroTagline);
    } else {
      let characterIndex = 0;
      setTypedTagline('');

      typingDelay = window.setTimeout(() => {
        typingInterval = window.setInterval(() => {
          characterIndex += 1;
          setTypedTagline(heroTagline.slice(0, characterIndex));

          if (characterIndex === heroTagline.length) {
            window.clearInterval(typingInterval);
          }
        }, 38);
      }, 700);
    }

    return () => {
      observer.disconnect();
      window.clearTimeout(typingDelay);
      window.clearInterval(typingInterval);
    };
  }, []);

  const headlineWords = ['ERP', 'Software', 'Development', 'Services', 'in', 'Tamil', 'Nadu'];
  const selectedIndustry = industries[activeIndustry];
  const SelectedIndustryIcon = selectedIndustry.icon;

  return (
    <main className="erp-page">
      {/* Section 01: Hero */}
      <section className="erp-section erp-hero">
        <div className="erp-container erp-hero-grid">
          <div className="erp-hero-copy erp-reveal">
            <h1>
              {headlineWords.map((word, index) => (
                <span
                  className={`erp-word${index > 3 ? ' erp-gold' : ''}`}
                  style={{ '--word': index }}
                  key={word}
                >
                  {word}{index < headlineWords.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h1>
            <h2 aria-label={heroTagline}>
              <span className="erp-typing" aria-hidden="true">{typedTagline}</span>
            </h2>
            <p>Managing inventory, purchasing, finance and operations through disconnected systems can slow down business activities and make reporting difficult.</p>
            <p>FlyTowards provides ERP software development services for businesses across Tamil Nadu, with a focus on South Tamil Nadu. We develop custom enterprise resource planning solutions to help organizations connect departments, automate workflows and manage business information through a centralized system.</p>
            <div className="erp-actions">
              <a className="erp-btn erp-btn-primary" href="/contact">Discuss Your ERP Project <ArrowRight size={17} /></a>
              <a className="erp-btn erp-btn-secondary" href="/services">Explore Our Services <ArrowRight size={17} /></a>
            </div>
          </div>
          <div className="erp-reveal erp-delay"><ErpDashboard interactive /></div>
        </div>
      </section>

      {/* Section 02: Service overview */}
      <section className="erp-section">
        <div className="erp-container erp-overview-grid">
          <div className="erp-reveal">
            <SectionHeading>What Is ERP Software <span>Development?</span></SectionHeading>
            <p>ERP (Enterprise Resource Planning) software development involves designing and building applications that connect important business functions within a unified system.</p>
            <p>An enterprise resource planning (ERP) system can bring together processes such as inventory, purchasing, sales, finance, production and human resources, depending on the organization's requirements.</p>
            <p>Custom ERP system development allows businesses to define modules, workflows, user roles and reporting features around their existing operations.</p>
          </div>
          <div className="erp-highlight-list">
            {highlights.map(({ title, description, icon: Icon }, index) => (
              <article className="erp-highlight erp-reveal" style={{ '--item': index }} key={title}>
                <span className="erp-icon"><Icon size={21} /></span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowRight size={17} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Services */}
      <section className="erp-section erp-soft" id="services">
        <div className="erp-container">
          <div className="erp-heading erp-reveal">
            <SectionHeading>Our ERP Development <span>Services</span></SectionHeading>
            <p>We develop ERP applications and modules designed around business workflows, departmental requirements and operational challenges.</p>
          </div>
          <div className="erp-service-grid">
            {services.map(({ title, description, icon: Icon, link }, index) => (
              <article className="erp-service erp-reveal" style={{ '--item': index }} key={title}>
                <div className="erp-service-top">
                  <span className="erp-icon"><Icon size={22} /></span>
                  <small>0{index + 1}</small>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {link && (
                  <Link className="erp-service-link" to={link} aria-label={`Learn about ${title}`}>
                    <ArrowRight size={17} />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: Business benefits */}
      <section className="erp-section">
        <div className="erp-container erp-benefits-grid">
          <div className="erp-hub-wrap erp-reveal"><DepartmentHub /></div>
          <div className="erp-reveal">
            <SectionHeading>Benefits of Custom ERP Software <span>Development</span></SectionHeading>
            <p>A custom ERP system helps businesses organize information and manage connected operations through structured workflows.</p>
            <div className="erp-benefit-list">
              {benefits.map(({ title, description, icon: Icon }, index) => (
                <article className="erp-benefit" key={title}>
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <Icon size={19} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Industry solutions */}
      <section className="erp-section erp-soft">
        <div className="erp-container">
          <div className="erp-heading erp-reveal">
            <SectionHeading>ERP Software Solutions for <span>Different Industries</span></SectionHeading>
            <p>ERP requirements vary depending on how a business manages resources, transactions, teams and operational workflows.</p>
          </div>
          <div className="erp-industry-tabs erp-reveal">
            <div className="erp-industry-buttons" role="tablist" aria-label="ERP industry solutions">
              {industries.map(({ title, icon: Icon }, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeIndustry === index}
                  aria-controls="erp-industry-panel"
                  id={`erp-industry-tab-${index}`}
                  key={title}
                  onClick={() => setActiveIndustry(index)}
                  onMouseEnter={() => setActiveIndustry(index)}
                >
                  <Icon size={19} />
                  {title}
                </button>
              ))}
            </div>
            <article
              className="erp-industry-panel"
              role="tabpanel"
              id="erp-industry-panel"
              aria-labelledby={`erp-industry-tab-${activeIndustry}`}
              key={activeIndustry}
            >
              <span className="erp-industry-panel-icon"><SelectedIndustryIcon size={38} /></span>
              <div>
                <h3>{selectedIndustry.title}</h3>
                <p>{selectedIndustry.description}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 06: Development process */}
      <section className="erp-section">
        <div className="erp-container">
          <div className="erp-heading erp-reveal">
            <SectionHeading>Our ERP Software Development <span>Process</span></SectionHeading>
            <p>We follow a structured approach to plan and develop ERP applications around departmental workflows and business requirements.</p>
          </div>
          <div className="erp-timeline">
            {developmentSteps.map(({ title, description }, index) => (
              <article className="erp-step erp-reveal" style={{ '--item': index }} key={title}>
                <span className="erp-step-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 07: Location relevance */}
      <section className="erp-section erp-location">
        <div className="erp-container erp-location-grid">
          <div className="erp-reveal">
            <SectionHeading>ERP Software Development Services <span>in Tamil Nadu</span></SectionHeading>
            <p>Businesses across Tamil Nadu manage purchasing, inventory, finance, production and operational information through a range of systems and processes.</p>
            <p>In South Tamil Nadu, manufacturers, wholesalers, distributors, construction businesses and other growing organizations may require ERP applications to coordinate departments and manage operational records.</p>
            <p>FlyTowards provides ERP software development services for businesses across Tamil Nadu, focusing on solutions that reflect their workflows, reporting requirements and organizational needs.</p>
            <p>Whether you need a new ERP system or improvements to existing software, we focus on practical functionality that supports daily operations.</p>
          </div>
          <div className="erp-location-art erp-reveal erp-delay"><ErpDashboard /></div>
        </div>
      </section>

      {/* Section 08: Why choose FlyTowards */}
      <section className="erp-section">
        <div className="erp-container erp-why-grid">
          <div className="erp-reveal">
            <SectionHeading>Why Choose FlyTowards for ERP Software <span>Development?</span></SectionHeading>
            <p>Choosing an ERP development partner requires an understanding of how different departments, records and business processes work together.</p>
            <a className="erp-btn erp-btn-primary" href="/contact">Talk to Our Team <ArrowRight size={17} /></a>
          </div>
          <div className="erp-reason-list">
            {differentiators.map(({ title, description }, index) => (
              <article className="erp-reason erp-reveal" style={{ '--item': index }} key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowRight size={17} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 09: Business challenges */}
      <section className="erp-section erp-soft">
        <div className="erp-container erp-challenge-grid">
          <div className="erp-reveal">
            <SectionHeading>When Does Your Business Need <span>a Custom ERP System?</span></SectionHeading>
            <p>ERP development may be suitable when your organization needs to connect multiple departments and manage complex business workflows.</p>
            <a className="erp-btn erp-btn-primary" href="/contact">Discuss Your ERP Requirements <ArrowRight size={17} /></a>
          </div>
          <div className="erp-challenge-content erp-reveal">
            <ul>
              {challenges.map((challenge) => (
                <li key={challenge}><span><Check size={15} /></span>{challenge}</li>
              ))}
            </ul>
            <p>If these challenges affect your operations, custom ERP system development may provide a more suitable approach to managing business information.</p>
          </div>
        </div>
      </section>

      {/* Section 10: FAQs */}
      <section className="erp-section">
        <div className="erp-container erp-faq-grid">
          <div className="erp-reveal">
            <SectionHeading>Frequently Asked Questions About <span>ERP Software Development</span></SectionHeading>
          </div>
          <div className="erp-faq-list erp-reveal">
            {faqs.map(({ question, answer }, index) => (
              <article className={`erp-faq${openFaq === index ? ' is-open' : ''}`} key={question}>
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
                <div className="erp-faq-answer" hidden={openFaq !== index}>
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Final call to action */}
      <section className="erp-section erp-final-section">
        <div className="erp-container">
          <div className="erp-final erp-reveal">
            <div className="erp-final-copy">
              <SectionHeading>Bring Your Business Operations Together with <span>Custom ERP Software</span></SectionHeading>
              <p>Need a better way to manage inventory, purchasing, sales, production and departmental workflows?</p>
              <p>FlyTowards helps businesses explore ERP software development solutions designed around their operational requirements.</p>
              <p>Share your ERP project needs and take the next step toward a more connected business management system.</p>
              <div className="erp-actions">
                <a className="erp-btn erp-btn-primary" href="/contact">Discuss Your ERP Project <ArrowRight size={17} /></a>
                <a className="erp-btn erp-btn-light" href="/contact">Request a Consultation <ArrowRight size={17} /></a>
              </div>
            </div>
            <i className="erp-final-ring erp-final-ring-one" />
            <i className="erp-final-ring erp-final-ring-two" />
          </div>
        </div>
      </section>
    </main>
  );
}
