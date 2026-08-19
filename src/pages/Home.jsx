import { 
    ArrowRight, 
    CheckCircle2, 
    Globe, 
    Users, 
    Target, 
    Zap, 
    Server, 
    Code, 
    Smartphone, 
    TrendingUp, 
    Layers, 
    Settings, 
    Workflow, 
    Link, 
    Activity, 
    Factory, 
    ShoppingBag, 
    Truck, 
    GraduationCap, 
    HardHat, 
    Coffee, 
    Handshake, 
    MessageSquare,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add('home-page');
        document.documentElement.classList.add('home-snap');

        return () => {
            document.body.classList.remove('home-page');
            document.documentElement.classList.remove('home-snap');
        };
    }, []);

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Section 1 — Hero */}
            <section className="hero home-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                <video className="home-hero__video" autoPlay loop muted playsInline preload="metadata">
                    <source src="/Background.mp4" type="video/mp4" />
                </video>

                <div className="home-hero__overlay" aria-hidden="true"></div>

                <div className="home-hero__content">
                    <div className="home-hero__text" data-aos="fade-up">
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Custom Software Development <br />
                            <span className="gradient-text">Services for Growing Businesses</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '3rem', maxWidth: '800px', lineHeight: 1.7 }}>
                            Build software around your unique business processes, workflows, and goals with tailored software development services designed for your business.
                        </p>
                        <div className="home-hero__actions" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                            <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                                Discuss Your Software Requirement <ArrowRight size={20} />
                            </RouterLink>
                            <a href="#services" className="btn btn-outline" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                                Explore Our Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 — Business Problems */}
            <section id="problems" style={{ padding: '6rem 8% 4rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div data-aos="fade-up" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Business Challenges</span>
                        <h2 className="responsive-h2" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Software Built <span className="gradient-text">Around Your Business</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                            Generic software can be useful when your processes fit the product. But when your business has unique workflows, multiple teams, specialised requirements or existing systems, adapting your operations to someone else's software can create unnecessary complexity.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: 0, maxWidth: '800px', margin: '0 auto' }}>
                            Custom software gives your business the opportunity to build around the way you actually work.
                        </p>
                    </div>

                    <div data-aos="fade-up" style={{ marginBottom: '3.5rem' }}>
                        <div className="card" style={{ padding: '2.5rem', borderRadius: '24px', borderTop: '4px solid var(--primary)' }}>
                            <h3 style={{ fontSize: '1.35rem', marginBottom: '2rem', fontWeight: 800, lineHeight: 1.4 }}>
                                We help businesses turn operational requirements into software solutions that can support:
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                {[
                                    "Business process automation",
                                    "Centralised business operations",
                                    "Internal workflow management",
                                    "Data and application integration",
                                    "Customer-facing applications",
                                    "Business-specific dashboards",
                                    "Digital products and SaaS platforms",
                                    "Modernisation of outdated software systems"
                                ].map((item, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontWeight: 600, lineHeight: 1.4 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '2.5rem', fontStyle: 'italic', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginBottom: 0 }}>
                                The goal is not simply to build another application. It is to create software that has a clear purpose within your business.
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center' }} data-aos="fade-up">
                        <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Tell Us What You Need to Build <ArrowRight size={20} />
                        </RouterLink>
                    </div>
                </div>
            </section>

            {/* Section 3 — What We Build */}
            <section id="services" style={{ padding: '6rem 8%', background: '#f8fafc' }} className="section-full">
                <div className="section-inner">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Our Capabilities</span>
                        <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                            Software Development Services <br /><span className="gradient-text">for Different Business Needs</span>
                        </h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                            Every software project has a different purpose. Some businesses need an internal system to replace manual processes. Others need a customer-facing platform, a mobile application or a complete digital product. Our software development and services cover different stages and types of business requirements.
                        </p>
                    </div>

                    <div className="grid-matrix" style={{ marginBottom: '4rem' }}>
                        {[
                            { title: "Custom Software Development", desc: "Build software around your specific workflows, users, data and business requirements rather than forcing your processes into a generic product.", icon: <Code size={28} />, link: "/services/custom-software-development/" },
                            { title: "Enterprise Software Development", desc: "Develop business software designed to support larger operational requirements, multiple users, structured workflows and connected business functions.", icon: <Server size={28} />, link: "/services/enterprise-software-development/" },
                            { title: "SaaS Development", desc: "Turn a software idea into a SaaS product with the functionality and architecture required for a subscription-based digital business.", icon: <Layers size={28} />, link: "/services/saas-development/" },
                            { title: "Web Application Development", desc: "Develop browser-based applications for internal operations, customer interactions, business workflows and digital products.", icon: <Globe size={28} />, link: "/services/web-application-development/" },
                            { title: "Mobile App Development", desc: "Create mobile applications that support customer experiences, field operations, employee workflows or specific business use cases.", icon: <Smartphone size={28} />, link: "/services/mobile-app-development/" },
                            { title: "Software Maintenance", desc: "Maintain and improve existing software as requirements change, helping businesses continue using important applications while addressing new needs.", icon: <Settings size={28} />, link: "/services/software-maintenance-support/" },
                            { title: "Digital Transformation", desc: "Modernise manual or disconnected business processes through software, automation and better-connected digital systems.", icon: <Zap size={28} />, link: "/service" }
                        ].map((item, index) => (
                            <div key={index} className="grid-matrix-item" style={{ display: 'flex', flexDirection: 'column', height: '100%' }} data-aos="fade-up" data-aos-delay={index * 50}>
                                <div style={{
                                    background: 'rgba(0, 242, 255, 0.08)',
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    color: 'var(--nav-accent)',
                                    flexShrink: 0
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, minHeight: '2.6rem', display: 'flex', alignItems: 'center' }}>
                                    <RouterLink to={item.link} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                                        {item.title}
                                    </RouterLink>
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <RouterLink to="/service" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
                            View All Software Services <ArrowRight size={18} />
                        </RouterLink>
                    </div>
                </div>
            </section>

            {/* Section 4 — Why Custom Software */}
            <section id="why-custom" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Value Proposition</span>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                        Why Businesses <span className="gradient-text">Choose Custom Software</span>
                    </h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        Off-the-shelf software is not always the right fit. A business may have unique approval processes, specialised workflows, legacy applications, multiple departments or requirements that standard products cannot adequately address. Custom software can provide a more tailored approach.
                    </p>
                </div>

                <div className="grid-matrix">
                    {[
                        { title: "Designed Around Your Processes", desc: "Instead of changing your workflow to fit a software product, the solution can be structured around your actual business requirements.", icon: <Workflow size={28} /> },
                        { title: "Built for Specific Users", desc: "Different teams need different tools. Software can be designed around the people who will use it, from administrators and managers to operational teams and customers.", icon: <Users size={28} /> },
                        { title: "Better Connected Systems", desc: "Businesses often work with multiple applications that do not communicate effectively. Custom development can help create more connected workflows and applications.", icon: <Link size={28} /> },
                        { title: "Room to Scale", desc: "As business requirements change, software may need new functionality, integrations, workflows or users. A properly planned custom solution can be developed with future requirements in mind.", icon: <TrendingUp size={28} /> },
                        { title: "Focused on Business Problems", desc: "The starting point should be the business problem, not the technology. We focus on understanding what the software needs to accomplish before defining the solution.", icon: <Target size={28} /> }
                    ].map((item, index) => (
                        <div key={index} className="grid-matrix-item" style={{ display: 'flex', flexDirection: 'column', height: '100%' }} data-aos="fade-up" data-aos-delay={index * 50}>
                            <div style={{
                                background: 'rgba(255, 0, 122, 0.08)',
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: 'var(--secondary)',
                                flexShrink: 0
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, minHeight: '2.6rem', display: 'flex', alignItems: 'center' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 5 — Industries */}
            <section id="industries" style={{ padding: '6rem 8%', background: '#f8fafc' }} className="section-full">
                <div className="section-inner">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Target Industries</span>
                        <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                            Built for Industries With <span className="gradient-text">Real Operational Challenges</span>
                        </h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                            Different industries have different workflows, regulations, customer expectations and operational requirements. Our approach to custom software development can be adapted to the needs of different business environments.
                        </p>
                    </div>

                    <div className="grid-matrix" style={{ marginBottom: '4rem' }}>
                        {[
                            { title: "Healthcare Software", desc: "Software solutions for healthcare-related workflows, operational management and digital processes.", icon: <Activity size={28} />, link: "/industries/healthcare/" },
                            { title: "Manufacturing Software", desc: "Applications that can support production-related workflows, business operations, data management and process visibility.", icon: <Factory size={28} />, link: "/industries/manufacturing/" },
                            { title: "Retail Software", desc: "Software for retail operations, customer-facing experiences, business workflows and connected processes.", icon: <ShoppingBag size={28} />, link: "/industries/retail/" },
                            { title: "Logistics Software", desc: "Solutions designed around logistics workflows, operational coordination and information management.", icon: <Truck size={28} />, link: "/industries/logistics/" },
                            { title: "Education Software", desc: "Digital applications that support education-related processes, administration and user interactions.", icon: <GraduationCap size={28} />, link: "/industries/education/" },
                            { title: "Construction Software", desc: "Software solutions designed around construction-related workflows, project processes and operational requirements.", icon: <HardHat size={28} />, link: "/industries/construction/" },
                            { title: "Hospitality Software", desc: "Applications that can support hospitality operations, customer interactions and business processes.", icon: <Coffee size={28} />, link: "/industries/hospitality/" }
                        ].map((item, index) => (
                            <div key={index} className="grid-matrix-item" style={{ display: 'flex', flexDirection: 'column', height: '100%' }} data-aos="fade-up" data-aos-delay={index * 50}>
                                <div style={{
                                    background: 'rgba(157, 0, 255, 0.08)',
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    color: 'var(--accent)',
                                    flexShrink: 0
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, display: 'flex', alignItems: 'center' }}>
                                    <RouterLink to={item.link} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                                        {item.title}
                                    </RouterLink>
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <RouterLink to="/industries" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
                            Explore Industry Solutions <ArrowRight size={18} />
                        </RouterLink>
                    </div>
                </div>
            </section>

            {/* Section 6 — How We Approach Software Development */}
            <section id="approach" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Our Process</span>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                        From Business Requirement <span className="gradient-text">to Working Software</span>
                    </h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        A successful software project starts with understanding the business behind the requirement.
                    </p>
                </div>

                <div className="timeline-flow" style={{ marginBottom: '3rem' }}>
                    {[
                        { num: "01", step: "Understand", desc: "We begin by understanding the business problem, current process, users and desired outcome." },
                        { num: "02", step: "Define", desc: "The requirements are translated into a clearer software scope, functionality and solution direction." },
                        { num: "03", step: "Design", desc: "The user experience and application structure are planned around the people and processes that will use the system." },
                        { num: "04", step: "Develop", desc: "The software is developed according to the agreed requirements, functionality and technical direction." },
                        { num: "05", step: "Improve", desc: "Software can continue to evolve as the business adds new requirements, users, integrations or capabilities." }
                    ].map((step, index) => (
                        <div key={index} className="timeline-flow-item" style={{ display: 'flex', flexDirection: 'column', height: '100%' }} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="workflow-number" style={{ 
                                marginBottom: '1.5rem',
                                width: '40px',
                                height: '40px',
                                fontSize: '1.1rem',
                                background: 'var(--gradient-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                color: '#fff',
                                fontWeight: 'bold'
                            }}>
                                {step.num}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>{step.step}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '3rem auto 0',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    background: 'rgba(0, 242, 255, 0.03)',
                    border: '1px solid var(--border)'
                }} data-aos="fade-up">
                    <p style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-dark)', margin: 0 }}>
                        This approach keeps the development process connected to the business objective rather than treating software development as an isolated technical task.
                    </p>
                </div>
            </section>

            {/* Section 7 — Business Outcomes */}
            <section id="outcomes" style={{ padding: '6rem 8%', background: '#f8fafc' }} className="section-full">
                <div className="section-inner">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Business Impact</span>
                        <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                            Software That Supports <span className="gradient-text">Better Business Operations</span>
                        </h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                            The value of software is not simply the number of features it contains. A useful business application should help people work more effectively, make information easier to manage and reduce unnecessary operational complexity.
                        </p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {[
                            "Reduce dependence on manual processes",
                            "Bring business information into more centralised systems",
                            "Connect previously disconnected workflows",
                            "Support growing operational requirements",
                            "Improve access to business information",
                            "Create better digital experiences for customers and employees",
                            "Replace outdated or difficult-to-maintain applications",
                            "Establish a stronger foundation for future digital initiatives"
                        ].map((outcome, index) => (
                            <div key={index} className="card" style={{ padding: '2rem', borderRadius: '20px', display: 'flex', alignItems: 'flex-start', gap: '15px', height: '100%' }} data-aos="fade-up" data-aos-delay={index * 50}>
                                <div style={{
                                    background: 'rgba(0, 242, 255, 0.08)',
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)',
                                    flexShrink: 0
                                }}>
                                    <CheckCircle2 size={20} />
                                </div>
                                <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.4 }}>{outcome}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        padding: '2rem',
                        borderRadius: '24px',
                        background: '#fff',
                        borderLeft: '4px solid var(--secondary)',
                        boxShadow: 'var(--shadow)'
                    }} data-aos="fade-up">
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                            Specific outcomes will depend on the business, requirements and implementation scope. We do not promise the same result for every project because every software environment is different.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 8 — Why Fly Towards Digital Innovation */}
            <section id="why-work-with-us" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Why Choose Us</span>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                        Why Work With <span className="gradient-text">Fly Towards Digital Innovation?</span>
                    </h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        Choosing a custom software development company is about more than finding someone who can write code. You need a development partner that can understand the business requirement, translate it into software and support the project from development through future improvements.
                    </p>
                    <p style={{ maxWidth: '800px', margin: '1rem auto 0', fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                        Fly Towards Digital Innovation's stated strengths include technical expertise, experienced developers, end-to-end development and flexible engagement models. You can explore our <RouterLink to="/service" style={{ color: '#ff007a', fontWeight: 600, textDecoration: 'underline' }}>Case Studies</RouterLink> or visit our <RouterLink to="/blog" style={{ color: '#ff007a', fontWeight: 600, textDecoration: 'underline' }}>Software Development Blog</RouterLink> to learn more.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    {[
                        { title: "Technical Expertise", desc: "Software projects require both business understanding and technical execution. We approach development with attention to the requirements behind the application.", icon: <Code size={28} /> },
                        { title: "Experienced Development Team", desc: "Our development approach is supported by developers working across software development requirements.", icon: <Users size={28} /> },
                        { title: "End-to-End Development", desc: "From understanding requirements to developing the software, the focus is on providing an end-to-end development approach.", icon: <Zap size={28} /> },
                        { title: "Flexible Engagement", desc: "Different businesses have different project requirements and engagement needs. Our strategy includes flexible engagement models as a core strength.", icon: <Handshake size={28} /> }
                    ].map((strength, index) => (
                        <div key={index} className="card" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', height: '100%' }} data-aos="fade-up" data-aos-delay={index * 50}>
                            <div style={{
                                background: 'rgba(0, 242, 255, 0.08)',
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: 'var(--nav-accent)',
                                flexShrink: 0
                            }}>
                                {strength.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, minHeight: '2.6rem', display: 'flex', alignItems: 'center' }}>{strength.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{strength.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem' }}>
                        Talk About Your Software Project <ArrowRight size={18} />
                    </RouterLink>
                </div>
            </section>

            {/* Section 9 — Agency Discovery */}
            <section id="discovery" style={{ padding: '6rem 8%' }}>
                <div className="glass-container max-w-1200" data-aos="fade-up" style={{ 
                    margin: '0 auto', 
                    padding: '4rem 3rem',
                    background: 'rgba(255, 255, 255, 0.7)', 
                    border: '1px solid rgba(15,23,42,0.08)', 
                    borderRadius: '30px', 
                    boxShadow: 'var(--shadow)' 
                }}>
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <span className="section-tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Agency Discovery</span>
                            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                Looking for a <span className="gradient-text">Custom Software Development Agency?</span>
                            </h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                If your current software no longer fits the way your business operates, or if you are starting a new digital product or internal application, the first step is understanding what you actually need to build.
                            </p>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontWeight: 600, marginBottom: '2rem' }}>
                                You do not need to have every technical detail defined before starting the conversation.
                            </p>
                            <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem' }}>
                                Discuss Your Requirements <ArrowRight size={18} />
                            </RouterLink>
                        </div>
                        <div>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontWeight: 600, marginBottom: '1.5rem' }}>
                                You may already have a detailed specification. Or you may simply know that:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {[
                                    "A manual process needs to be automated.",
                                    "Several systems need to work together.",
                                    "An existing application needs to be modernised.",
                                    "Your business needs a software platform built around a specific workflow.",
                                    "A new SaaS or digital product needs to be developed.",
                                    "Your team needs a web or mobile application for a specific business requirement."
                                ].map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                        <span style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 10 — FAQs (Line-based format) */}
            <section id="faq" style={{ padding: '6rem 8%', background: '#ffffff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3rem' }} data-aos="fade-up">
                        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div style={{ borderTop: '1px solid #e2e8f0' }} data-aos="fade-up">
                        {[
                            {
                                q: "What does custom software development include?",
                                a: "Custom software development involves designing and building software around a business's specific requirements, workflows, users and operational needs. Depending on the project, this can include business applications, enterprise software, SaaS products, web applications, mobile applications and software improvements."
                            },
                            {
                                q: "When should a business consider custom software?",
                                a: "Custom software can be worth considering when existing products do not adequately support your workflows, when multiple systems need to be connected, when manual processes create operational challenges, or when a business needs a software product built for a specific purpose."
                            },
                            {
                                q: "Do you develop software for specific industries?",
                                a: "Yes. The company's SEO strategy identifies healthcare, manufacturing, retail, logistics, education, construction and hospitality as target industries. The exact software requirements are determined based on each business and project."
                            },
                            {
                                q: "Can you develop a new software product from an idea?",
                                a: "Yes, where the project requirements are suitable for custom development. The initial discussion should establish the business objective, users, required functionality, technical requirements and expected scope before development begins."
                            },
                            {
                                q: "Can you work with an existing software system?",
                                a: "Existing software can be considered as part of a project where the requirement involves maintenance, improvement, modernisation, integration or development of additional functionality. The appropriate approach depends on the existing application's condition and technical requirements."
                            }
                        ].map((faq, idx) => {
                            const isOpen = activeFaq === idx;
                            return (
                                <div key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '16px',
                                            padding: '1.5rem 0',
                                            background: 'none',
                                            border: 'none',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            color: 'var(--text-dark)',
                                            outline: 'none',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        <span style={{ 
                                            fontSize: '1.4rem', 
                                            fontWeight: '400', 
                                            color: 'var(--text-dark)',
                                            minWidth: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            {isOpen ? '−' : '+'}
                                        </span>
                                        <span style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-dark)' }}>{faq.q}</span>
                                    </button>
                                    <div style={{
                                        maxHeight: isOpen ? '250px' : '0',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        opacity: isOpen ? 1 : 0,
                                        paddingLeft: '36px',
                                        paddingBottom: isOpen ? '1.5rem' : '0'
                                    }}>
                                        <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.7, fontSize: '1.02rem' }}>{faq.a}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 10 — Final CTA */}
            <section id="launch" style={{ padding: '6rem 8%' }} className="section-full">
                <div className="cta-content" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    padding: '6rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'url(https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=1800) center/cover no-repeat'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.9) 0%, rgba(10, 15, 25, 0.95) 100%)', zIndex: 1 }}></div>

                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span className="section-tag" style={{ color: 'var(--primary)', marginBottom: '1.5rem', letterSpacing: '4px' }}>Let's Partner Up</span>
                        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', color: '#fff', lineHeight: 1.2 }}>
                            Let's Discuss What Your <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 0 30px rgba(255, 111, 0, 0.3)' }}>Business Needs to Build</span>
                        </h2>
                        <p style={{ fontSize: '1.15rem', margin: '1rem auto 3rem', maxWidth: '800px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                            The right software starts with the right understanding of the problem. Whether you need to automate an internal process, replace an outdated application, connect multiple systems, build a SaaS product or develop a business-specific web or mobile application, start by telling us what you are trying to achieve.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Discuss Your Software Requirement <ArrowRight size={20} />
                            </RouterLink>
                            <RouterLink to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}>
                                Contact Fly Towards Digital Innovation
                            </RouterLink>
                        </div>
                        
                        <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontStyle: 'italic' }}>
                            Let's explore the requirement, understand the business problem and determine what needs to be built.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
