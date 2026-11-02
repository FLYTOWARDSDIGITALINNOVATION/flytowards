import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Check,
    ChevronDown,
    Cloud,
    CreditCard,
    Factory,
    GraduationCap,
    HardHat,
    HeartPulse,
    Layers3,
    LockKeyhole,
    MapPin,
    PackageCheck,
    RefreshCw,
    Settings2,
    ShoppingBag,
    Sparkles,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react';
import './SaaSDev.css';

const highlights = [
    { title: 'Online Accessibility', description: 'Access software through an internet-connected device.', icon: <Cloud /> },
    { title: 'Subscription Management', description: 'Manage plans, billing and customer access.', icon: <CreditCard /> },
    { title: 'User Management', description: 'Organize accounts, roles and permissions.', icon: <Users /> },
    { title: 'Scalable Architecture', description: 'Plan the application to support changing usage requirements.', icon: <Layers3 /> }
];

const services = [
    { title: 'Custom SaaS Product Development', description: 'Build software products tailored to your target audience, business model and required functionality.', icon: <Cloud />, link: '/services/custom-software-development' },
    { title: 'SaaS MVP Development', description: 'Develop an initial product with essential features to test usability, gather feedback and validate assumptions.', icon: <Zap /> },
    { title: 'Multi-Tenant SaaS Development', description: 'Plan applications that serve multiple customer organizations with appropriate account and data separation.', icon: <Layers3 /> },
    { title: 'Subscription & Billing Integration', description: 'Integrate compatible payment services, subscription plans, billing workflows and account access controls.', icon: <CreditCard /> },
    { title: 'SaaS Dashboard & Admin Panel Development', description: 'Create dashboards for managing users, subscriptions, product settings and operational information.', icon: <Settings2 />, link: '/services/web-application-development' },
    { title: 'SaaS Maintenance & Product Enhancement', description: 'Improve existing SaaS applications, address issues and introduce functionality based on product requirements.', icon: <RefreshCw />, link: '/services/software-maintenance-support' }
];

const benefits = [
    { title: 'Build a Recurring-Revenue Product', description: 'Offer subscription-based access to software features through suitable pricing and billing models.', icon: <TrendingUp /> },
    { title: 'Deliver Software Online', description: 'Allow customers to access application features without installing traditional desktop software.', icon: <Cloud /> },
    { title: 'Manage Users and Subscriptions', description: 'Centralize customer accounts, access permissions, subscription plans and administrative activities.', icon: <Users /> },
    { title: 'Release Product Updates Centrally', description: 'Make application improvements available through the hosted platform without distributing separate software installations.', icon: <RefreshCw /> },
    { title: 'Plan for Product Growth', description: 'Design the application to accommodate future features, customer requirements and changing usage levels.', icon: <TrendingUp /> }
];

const industries = [
    { title: 'Manufacturing', description: 'Cloud-based applications for inventory management, production reporting, procurement and operational tracking.', icon: <Factory /> },
    { title: 'Healthcare', description: 'SaaS platforms for appointment scheduling, clinic administration, billing and service management.', icon: <HeartPulse /> },
    { title: 'Retail & Wholesale', description: 'Subscription-based software for inventory, sales, order management and customer records.', icon: <ShoppingBag /> },
    { title: 'Education', description: 'Online platforms for student administration, learning management, attendance and institutional workflows.', icon: <GraduationCap /> },
    { title: 'Construction', description: 'SaaS applications for project tracking, vendor coordination, material management and reporting.', icon: <HardHat /> },
    { title: 'Logistics & Transportation', description: 'Cloud-based platforms for shipment management, dispatch coordination, delivery records and operational visibility.', icon: <PackageCheck /> }
];

const process = [
    { title: 'Product Discovery & Requirement Analysis', description: 'Understand your target users, product goals, business model and essential features.' },
    { title: 'SaaS Architecture & UI/UX Planning', description: 'Define application workflows, user roles, subscription requirements, technical architecture and interfaces.' },
    { title: 'SaaS Application Development', description: 'Build product features, user management, backend functionality and required integrations.' },
    { title: 'Testing & Quality Assurance', description: 'Review application functionality, user access, subscription workflows and important product interactions.' },
    { title: 'Deployment & Product Launch', description: 'Prepare the hosting environment, configure the application and complete launch activities.' },
    { title: 'Maintenance & Product Evolution', description: 'Plan updates, issue resolution, performance improvements and future feature development.' }
];

const differentiators = [
    { title: 'Product-Focused Planning', description: 'We begin by understanding your target audience, software idea, business model and required functionality.' },
    { title: 'Custom SaaS Development', description: 'Applications are planned around your product requirements rather than a fixed set of generic features.' },
    { title: 'User-Centered Application Design', description: 'We consider navigation, account management and usability when planning SaaS interfaces.' },
    { title: 'Long-Term Product Thinking', description: 'We consider maintainability, integrations and potential enhancements during product planning.' }
];

const challenges = [
    'You have a software product idea for a specific industry or audience.',
    'You want to offer software through monthly or annual subscriptions.',
    'Customers need online access to your application.',
    'You require separate customer accounts and access permissions.',
    'You want to validate a product idea through an MVP.',
    'Existing software cannot support your intended product model.',
    'You need to improve or expand an existing SaaS application.'
];

const faqs = [
    { question: 'What is SaaS development?', answer: 'SaaS development is the process of creating software applications delivered over the internet, usually through subscription-based access or another recurring service model.' },
    { question: 'What is the difference between SaaS and traditional software?', answer: 'SaaS applications are generally hosted centrally and accessed online, while traditional software may require installation and maintenance on individual devices or customer-managed infrastructure.' },
    { question: 'How much does SaaS development cost in Tamil Nadu?', answer: 'Costs depend on product features, user roles, subscription requirements, integrations, technical architecture and development scope. A requirements assessment helps determine a suitable budget.' },
    { question: 'How long does SaaS product development take?', answer: 'Development timelines vary depending on product complexity, MVP scope, integrations, user management, billing functionality and testing requirements.' },
    { question: 'What is a SaaS MVP?', answer: 'A SaaS MVP (Minimum Viable Product) is an initial version of a software product containing essential features needed to test assumptions and gather feedback from target users.' },
    { question: 'What is multi-tenant SaaS development?', answer: 'Multi-tenant SaaS development involves designing an application to serve multiple customer organizations through shared infrastructure while maintaining appropriate separation of customer data and access.' },
    { question: 'Can SaaS applications integrate with payment gateways and other software?', answer: 'Yes. SaaS applications can often integrate with compatible payment gateways, CRM systems, communication tools and other services through supported APIs or integration methods.' }
];

const SaaSDev = () => {
    const [openFaq, setOpenFaq] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'SaaS Development Services in Tamil Nadu | FlyTowards';

        const description = 'SaaS development services in Tamil Nadu. FlyTowards builds custom SaaS applications, subscription platforms and cloud-based software products.';
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute(
            'content',
            'saas development, saas developers, saas development company, saas product development, saas application development'
        );

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://flytowardsdigitalinnovation.com/services/saas-development/';

        const schemaId = 'saas-development-schema';
        let schemaScript = document.getElementById(schemaId);
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = schemaId;
            schemaScript.type = 'application/ld+json';
            document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'Organization',
                    '@id': 'https://flytowardsdigitalinnovation.com/#organization',
                    name: 'FlyTowards Digital Innovation',
                    url: 'https://flytowardsdigitalinnovation.com/'
                },
                {
                    '@type': 'Service',
                    '@id': 'https://flytowardsdigitalinnovation.com/services/saas-development/#service',
                    name: 'SaaS Development Services',
                    serviceType: 'SaaS Product Development',
                    description,
                    provider: { '@id': 'https://flytowardsdigitalinnovation.com/#organization' },
                    areaServed: { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
                    url: 'https://flytowardsdigitalinnovation.com/services/saas-development/'
                },
                {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flytowardsdigitalinnovation.com/' },
                        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://flytowardsdigitalinnovation.com/services/' },
                        { '@type': 'ListItem', position: 3, name: 'SaaS Development', item: 'https://flytowardsdigitalinnovation.com/services/saas-development/' }
                    ]
                },
                {
                    '@type': 'FAQPage',
                    mainEntity: faqs.map(({ question, answer }) => ({
                        '@type': 'Question',
                        name: question,
                        acceptedAnswer: { '@type': 'Answer', text: answer }
                    }))
                }
            ]
        });

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('saas-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
        document.querySelectorAll('.saas-page [data-aos]').forEach((element) => revealObserver.observe(element));

        return () => {
            schemaScript.remove();
            revealObserver.disconnect();
        };
    }, []);

    return (
        <main className="saas-page">
            <section className="saas-section saas-hero">
                <div className="saas-container saas-hero-grid">
                    <div className="saas-hero-copy" data-aos="fade-right">
                        <span className="saas-eyebrow"><Cloud size={17} /> SaaS Development</span>
                        <h1>SaaS Development Services in Tamil Nadu</h1>
                        <h2>Turn Your Software Idea into a <span className="saas-heading-accent">Scalable SaaS Product</span></h2>
                        <p>Build a software product that customers can access online, without traditional installation or manual distribution.</p>
                        <p>FlyTowards provides SaaS development services for startups and businesses across Tamil Nadu, with a focus on South Tamil Nadu. From product planning to application development, we help transform software ideas into functional subscription-based and cloud-hosted applications.</p>
                        <div className="saas-actions">
                            <Link className="saas-button saas-button-primary" to="/contact">Discuss Your SaaS Idea <ArrowRight size={18} /></Link>
                            <Link className="saas-button saas-button-outline" to="/services">Explore Our Services</Link>
                        </div>
                    </div>
                    <div className="saas-hero-art" data-aos="fade-left" role="img" aria-label="SaaS application dashboard with user and subscription management">
                        <div className="saas-orbit saas-orbit-one" />
                        <div className="saas-orbit saas-orbit-two" />
                        <div className="saas-dashboard">
                            <div className="saas-dashboard-sidebar">
                                <span className="saas-sidebar-logo"><Cloud size={17} /></span>
                                <i className="active" /><i /><i /><i /><i />
                                <span className="saas-sidebar-bottom"><Settings2 size={15} /></span>
                            </div>
                            <div className="saas-dashboard-main">
                                <div className="saas-dashboard-top"><span className="saas-skeleton saas-skeleton-title" /><span className="saas-avatar"><Users size={15} /></span></div>
                                <div className="saas-dashboard-welcome"><b>Overview</b><span>Product workspace</span></div>
                                <div className="saas-stat-grid">
                                    <div className="saas-stat"><span>Users</span><b>2,840</b><small><TrendingUp size={12} /> 12.8%</small></div>
                                    <div className="saas-stat"><span>Subscriptions</span><b>1,264</b><small><TrendingUp size={12} /> 8.4%</small></div>
                                </div>
                                <div className="saas-dashboard-chart">
                                    <div className="saas-chart-label"><b>Product activity</b><span>Last 7 days</span></div>
                                    <div className="saas-chart-bars">{[42, 63, 49, 76, 57, 91, 70].map((height, index) => <i key={index} style={{ '--bar-height': `${height}%`, '--bar-delay': `${index * 80}ms` }} />)}</div>
                                    <div className="saas-chart-days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
                                </div>
                                <div className="saas-activity"><span className="saas-activity-icon"><CreditCard size={13} /></span><span className="saas-skeleton saas-skeleton-row" /><span className="saas-activity-status" /></div>
                            </div>
                        </div>
                        <div className="saas-floating saas-floating-users"><Users size={18} /><span>Active users</span><b>2.8k</b></div>
                        <div className="saas-floating saas-floating-cloud"><Cloud size={19} /><span>Cloud hosted</span><i /></div>
                        <div className="saas-spark saas-spark-one"><Sparkles size={21} /></div>
                        <div className="saas-spark saas-spark-two"><Zap size={17} /></div>
                    </div>
                </div>
            </section>

            <section className="saas-section">
                <div className="saas-container saas-overview-grid">
                    <div data-aos="fade-up">
                        <span className="saas-eyebrow">Software as a Service</span>
                        <h2>What Is <span className="saas-heading-accent">SaaS Development?</span></h2>
                        <p>SaaS (Software as a Service) development involves creating software applications that users access over the internet, typically through a subscription or recurring payment model.</p>
                        <p>Unlike traditional installed software, SaaS applications are generally hosted and maintained centrally, allowing customers to access features through a web browser or compatible application.</p>
                        <p>Custom SaaS application development helps businesses build software products with user accounts, subscription management, administrative controls and functionality tailored to their target market.</p>
                    </div>
                    <div className="saas-highlights">
                        {highlights.map((item, index) => (
                            <div className="saas-highlight" key={item.title} data-aos="fade-up" data-aos-delay={index * 70}>
                                <span className="saas-icon">{item.icon}</span>
                                <div><h3>{item.title}</h3><p>{item.description}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="saas-section saas-section-soft">
                <div className="saas-container">
                    <div className="saas-section-heading" data-aos="fade-up">
                        <span className="saas-eyebrow">What We Build</span>
                        <h2>Our <span className="saas-heading-accent">SaaS Development Services</span></h2>
                        <p>We develop SaaS applications designed around product requirements, user workflows and business models.</p>
                    </div>
                    <div className="saas-service-grid">
                        {services.map((item, index) => (
                            <article className="saas-service" key={item.title} data-aos="fade-up" data-aos-delay={(index % 3) * 70}>
                                <span className="saas-icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                {item.link && <Link to={item.link} aria-label={`Learn about ${item.title}`}><ArrowRight size={17} /></Link>}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="saas-section">
                <div className="saas-container saas-benefits-grid">
                    <div className="saas-benefit-visual" data-aos="fade-right" aria-hidden="true">
                        <div className="saas-benefit-orbit"><div className="saas-benefit-cloud"><Cloud size={70} strokeWidth={1.2} /></div><span className="saas-benefit-node saas-node-one"><Users size={17} /></span><span className="saas-benefit-node saas-node-two"><CreditCard size={17} /></span><span className="saas-benefit-node saas-node-three"><LockKeyhole size={17} /></span></div>
                    </div>
                    <div data-aos="fade-left">
                        <span className="saas-eyebrow">SaaS Product Benefits</span>
                        <h2>Benefits of <span className="saas-heading-accent">SaaS Application Development</span></h2>
                        <p className="saas-intro">SaaS development enables businesses to deliver software as an accessible online service while managing product functionality centrally.</p>
                        <div className="saas-benefit-list">
                            {benefits.map((item, index) => (
                                <article className="saas-benefit" key={item.title}>
                                    <span className="saas-benefit-number">0{index + 1}</span>
                                    <div><h3>{item.title}</h3><p>{item.description}</p></div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="saas-section saas-section-soft">
                <div className="saas-container">
                    <div className="saas-section-heading" data-aos="fade-up">
                        <span className="saas-eyebrow">Industry Solutions</span>
                        <h2>SaaS Solutions for <span className="saas-heading-accent">Different Industries</span></h2>
                        <p>SaaS products can address recurring software needs across industries through subscription-based digital platforms.</p>
                    </div>
                    <div className="saas-industry-list">
                        {industries.map((item, index) => (
                            <article className="saas-industry" key={item.title} data-aos="fade-up" data-aos-delay={(index % 3) * 60}>
                                <span className="saas-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="saas-section">
                <div className="saas-container">
                    <div className="saas-section-heading" data-aos="fade-up">
                        <span className="saas-eyebrow">From Idea to Launch</span>
                        <h2>Our <span className="saas-heading-accent">SaaS Product Development Process</span></h2>
                        <p>We follow a structured approach to move from a SaaS product idea to a functional application.</p>
                    </div>
                    <div className="saas-process">
                        {process.map((item, index) => (
                            <article className="saas-process-step" key={item.title} data-aos="fade-up" data-aos-delay={(index % 3) * 65}>
                                <span className="saas-process-number">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="saas-section saas-section-soft">
                <div className="saas-container saas-location-grid">
                    <div data-aos="fade-right">
                        <span className="saas-eyebrow"><MapPin size={16} /> Tamil Nadu Focus</span>
                        <h2>SaaS Development Services in <span className="saas-heading-accent">Tamil Nadu</span></h2>
                        <p>Startups, entrepreneurs and established businesses across Tamil Nadu can use SaaS products to deliver software services to customers through online platforms.</p>
                        <p>In South Tamil Nadu, businesses serving manufacturing, retail, healthcare, education and other sectors may identify opportunities for subscription-based software that addresses recurring operational challenges.</p>
                        <p>FlyTowards provides SaaS development services for businesses across Tamil Nadu, focusing on applications aligned with product requirements, user needs and business goals.</p>
                        <p>Whether you are planning a new SaaS product or improving an existing application, we focus on practical functionality and a clear development scope.</p>
                    </div>
                    <div className="saas-location-visual" data-aos="fade-left" aria-hidden="true"><div className="saas-location-glow" /><Cloud size={112} strokeWidth={1} /><span><MapPin size={25} /></span></div>
                </div>
            </section>

            <section className="saas-section">
                <div className="saas-container saas-why-grid">
                    <div data-aos="fade-right">
                        <span className="saas-eyebrow">Why FlyTowards</span>
                        <h2>Why Choose FlyTowards as Your <span className="saas-heading-accent">SaaS Development Company?</span></h2>
                        <p>Choosing the right SaaS developers involves evaluating product understanding, technical planning, user experience and long-term application requirements.</p>
                        <Link className="saas-button saas-button-primary" to="/contact">Talk to Our Team <ArrowRight size={18} /></Link>
                    </div>
                    <div className="saas-differentiators">
                        {differentiators.map((item, index) => (
                            <article className="saas-differentiator" key={item.title} data-aos="fade-left" data-aos-delay={index * 65}>
                                <span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.description}</p></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="saas-section saas-section-soft">
                <div className="saas-container saas-challenge-grid">
                    <div data-aos="fade-right">
                        <span className="saas-eyebrow">Is SaaS Right for You?</span>
                        <h2>When Does Your Business Need <span className="saas-heading-accent">SaaS Development?</span></h2>
                        <p>SaaS development may be suitable when you want to deliver software as an online product or service to multiple customers.</p>
                        <Link className="saas-button saas-button-primary" to="/contact">Discuss Your SaaS Product Requirements <ArrowRight size={18} /></Link>
                    </div>
                    <ul className="saas-check-list" data-aos="fade-left">
                        {challenges.map((item) => <li key={item}><Check size={18} />{item}</li>)}
                        <li className="saas-challenge-note">If these requirements match your product goals, custom SaaS development may provide a suitable approach.</li>
                    </ul>
                </div>
            </section>

            <section className="saas-section">
                <div className="saas-container saas-faq-grid">
                    <div data-aos="fade-right">
                        <span className="saas-eyebrow">FAQs</span>
                        <h2>Frequently Asked Questions About <span className="saas-heading-accent">SaaS Development</span></h2>
                    </div>
                    <div className="saas-faq-list" data-aos="fade-left">
                        {faqs.map((item, index) => (
                            <article className={`saas-faq-item${openFaq === index ? ' is-open' : ''}`} key={item.question}>
                                <h3><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{item.question}<ChevronDown size={20} /></button></h3>
                                <div className="saas-faq-answer" hidden={openFaq !== index}><p>{item.answer}</p></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="saas-section saas-final-section">
                <div className="saas-container">
                    <div className="saas-final-cta" data-aos="zoom-in">
                        <span className="saas-eyebrow">Build Your SaaS Product</span>
                        <h2>Ready to Build Your <span className="saas-heading-accent">SaaS Product?</span></h2>
                        <p>Have an idea for a subscription-based application, business SaaS platform or industry-specific software product?</p>
                        <p>FlyTowards helps businesses explore SaaS development solutions designed around their target users, required functionality and product goals.</p>
                        <p>Share your idea and take the next step toward developing your SaaS application.</p>
                        <div className="saas-actions"><Link className="saas-button saas-button-primary" to="/contact">Discuss Your SaaS Idea <ArrowRight size={18} /></Link><Link className="saas-button saas-button-outline" to="/contact">Request a Consultation</Link></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SaaSDev;
