import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, 
    CheckCircle2, 
    Target, 
    Cpu, 
    Monitor, 
    Zap, 
    MessageSquare, 
    ChevronDown, 
    ChevronUp, 
    Layers, 
    Activity, 
    Building, 
    ShoppingBag, 
    BookOpen, 
    Wrench, 
    DollarSign, 
    Coffee, 
    HelpCircle, 
    RefreshCw, 
    UserCheck, 
    Smile, 
    Compass, 
    ShieldCheck,
    ArrowUpRight
} from 'lucide-react';

const About = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleFaq = (idx) => {
        setActiveFaq(activeFaq === idx ? null : idx);
    };

    const purposeItems = [
        { text: "Automate a manual business process", icon: <Zap size={22} color="var(--primary)" /> },
        { text: "Replace an outdated system", icon: <RefreshCw size={22} color="var(--secondary)" /> },
        { text: "Connect disconnected applications", icon: <Layers size={22} color="var(--accent)" /> },
        { text: "Improve operational workflows", icon: <Activity size={22} color="var(--primary)" /> },
        { text: "Support a new digital product", icon: <Compass size={22} color="var(--secondary)" /> },
        { text: "Create a customer-facing application", icon: <UserCheck size={22} color="var(--accent)" /> },
        { text: "Give teams better access to business information", icon: <ShieldCheck size={22} color="var(--primary)" /> },
        { text: "Prepare an organisation for future growth", icon: <Smile size={22} color="var(--secondary)" /> }
    ];

    const capabilities = [
        {
            title: "Custom Software Development",
            desc: "We develop software around specific business processes, users, workflows and requirements.",
            link: "/service",
            icon: <Cpu size={32} color="var(--primary)" />,
            color: "0, 242, 255"
        },
        {
            title: "Enterprise Software",
            desc: "We build software solutions designed to support structured business operations, teams, workflows and organisational requirements.",
            link: "/service",
            icon: <Building size={32} color="var(--secondary)" />,
            color: "255, 0, 122"
        },
        {
            title: "SaaS Development",
            desc: "We help businesses develop SaaS products around defined product requirements, users and business models.",
            link: "/service",
            icon: <Layers size={32} color="var(--accent)" />,
            color: "157, 0, 255"
        },
        {
            title: "Web Application Development",
            desc: "We develop web-based applications for internal operations, customer experiences, business workflows and digital products.",
            link: "/services/web-development",
            icon: <Monitor size={32} color="var(--primary)" />,
            color: "0, 242, 255"
        },
        {
            title: "Mobile App Development",
            desc: "We create mobile applications designed around specific business use cases, customer requirements and operational needs.",
            link: "/service",
            icon: <UserCheck size={32} color="var(--secondary)" />,
            color: "255, 0, 122"
        },
        {
            title: "Software Maintenance",
            desc: "We support existing software requirements through maintenance, improvements and ongoing development where appropriate.",
            link: "/service",
            icon: <Wrench size={32} color="var(--accent)" />,
            color: "157, 0, 255"
        },
        {
            title: "Digital Transformation",
            desc: "We help businesses move from manual, outdated or disconnected processes toward more connected digital workflows and software systems.",
            link: "/service",
            icon: <RefreshCw size={32} color="var(--primary)" />,
            color: "0, 242, 255"
        }
    ];

    const approachSteps = [
        {
            step: "01",
            title: "Understand the Business",
            desc: "We look at the existing process, business challenge, users and desired outcome."
        },
        {
            step: "02",
            title: "Define the Requirement",
            desc: "The business requirement is translated into a clearer software scope and solution direction."
        },
        {
            step: "03",
            title: "Plan the Solution",
            desc: "We consider the application's functionality, user requirements and technical direction before development."
        },
        {
            step: "04",
            title: "Build the Software",
            desc: "The development process turns the agreed requirements into working software."
        },
        {
            step: "05",
            title: "Evolve With the Business",
            desc: "Software requirements can change as organisations grow. Future functionality, improvements and maintenance can therefore become part of the software's lifecycle."
        }
    ];

    const whyWorkWithUs = [
        {
            title: "Technical Expertise",
            desc: "Our strategy identifies technical expertise as one of Fly Towards Digital Innovation's core strengths. We apply that technical focus to projects where businesses need software designed around specific requirements.",
            icon: <Cpu size={26} color="var(--primary)" />
        },
        {
            title: "Experienced Developers",
            desc: "Software needs to work in the real world, not only in a specification document. Our development approach is supported by experienced developers working across different software requirements.",
            icon: <UserCheck size={26} color="var(--secondary)" />
        },
        {
            title: "End-to-End Development",
            desc: "We provide an end-to-end development approach, from understanding the requirement through software development and future improvement.",
            icon: <Layers size={26} color="var(--accent)" />
        },
        {
            title: "Flexible Engagement Models",
            desc: "Different businesses have different project requirements. Our strategy identifies flexible engagement models as one of our strengths, allowing projects to be approached according to their individual needs.",
            icon: <Wrench size={26} color="var(--primary)" />
        }
    ];

    const problemQuestions = [
        "What problem are we solving?",
        "Who will use the software?",
        "What process needs to change?",
        "What systems already exist?",
        "What functionality is actually required?",
        "What could the business need in the future?"
    ];

    const industries = [
        { name: "Healthcare", anchor: "healthcare software", desc: "Software for healthcare-related business processes and digital workflows.", icon: <Activity size={24} /> },
        { name: "Manufacturing", anchor: "manufacturing software", desc: "Solutions supporting manufacturing-related operational and business requirements.", icon: <Building size={24} /> },
        { name: "Retail", anchor: "retail software", desc: "Applications supporting retail workflows, customer experiences and business operations.", icon: <ShoppingBag size={24} /> },
        { name: "Education", anchor: "education software", desc: "Digital solutions for education-related processes and organisational requirements.", icon: <BookOpen size={24} /> },
        { name: "Construction", anchor: "construction software", desc: "Software designed around construction-related workflows and operational needs.", icon: <Wrench size={24} /> },
        { name: "Finance", anchor: "finance software", desc: "Technology solutions for finance-related business processes and digital requirements.", icon: <DollarSign size={24} /> },
        { name: "Hospitality", anchor: "hospitality software", desc: "Applications supporting hospitality operations and customer-facing processes.", icon: <Coffee size={24} /> }
    ];

    const beliefs = [
        { title: "Solve a Clear Problem", desc: "Software should have a defined business purpose." },
        { title: "Be Useful to Its Users", desc: "The people using the application should be considered throughout the development process." },
        { title: "Fit the Business", desc: "The solution should reflect the organisation's workflows and requirements." },
        { title: "Support Change", desc: "Businesses evolve, and their software may need to evolve with them." },
        { title: "Create a Foundation for Growth", desc: "Software should be considered as part of the broader technology direction of the organisation rather than as an isolated project." }
    ];

    const commitments = [
        { title: "Clear Requirements", desc: "Understanding what needs to be built before development begins." },
        { title: "Practical Solutions", desc: "Keeping the software connected to the actual business problem." },
        { title: "Technical Capability", desc: "Applying appropriate development expertise to the project." },
        { title: "Long-Term Thinking", desc: "Considering how software requirements may evolve as the business changes." },
        { title: "Open Collaboration", desc: "Working with stakeholders to understand users, workflows and desired outcomes." }
    ];

    const faqs = [
        {
            q: "What does Fly Towards Digital Innovation do?",
            a: "Fly Towards Digital Innovation provides software development and digital technology services, including custom software development, enterprise software, SaaS development, web application development, mobile app development, software maintenance and digital transformation."
        },
        {
            q: "Is Fly Towards Digital Innovation a custom software development company?",
            a: "Yes. Custom software development is one of the company's core services. The focus is on developing software around specific business requirements, workflows and users."
        },
        {
            q: "What makes a custom software development agency different from an off-the-shelf software provider?",
            a: "A custom software development agency develops solutions around specific requirements rather than providing one standard product for every customer. This can be useful when a business has specialised workflows, integration requirements or processes that do not fit standard software."
        },
        {
            q: "What industries do you serve?",
            a: "The target industries identified for Fly Towards Digital Innovation include healthcare, manufacturing, retail, education, construction, finance and hospitality."
        },
        {
            q: "Do you work with businesses in Tamil Nadu?",
            a: "Tamil Nadu is the company's target location according to the SEO strategy. Projects and requirements should be evaluated based on the specific business and engagement needs."
        },
        {
            q: "Can you work with an existing software application?",
            a: "Existing software can be considered for maintenance, improvement, modernisation or related development work, depending on its technical condition and the project's requirements."
        },
        {
            q: "How do I start a software development project?",
            a: "Start by explaining the business problem, current process, users and what you want the software to achieve. A detailed technical specification is helpful when available, but the initial conversation can begin with the business requirement."
        }
    ];

    return (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-bg"></div>

            {/* Ambient Background Lights */}
            <div style={{ position: 'absolute', top: '5%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(50px)' }}></div>
            <div style={{ position: 'absolute', top: '35%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(255,0,122,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>
            <div style={{ position: 'absolute', top: '65%', left: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(157,0,255,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)' }}></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '140px 8% 80px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem', width: '100%' }} data-aos="fade-up">
                    <span className="section-tag" style={{ display: 'inline-block', margin: '0 auto 1.5rem' }}>About Fly Towards Digital Innovation</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.2, fontWeight: 900, maxWidth: '1100px', margin: '0 auto' }}>
                        A Software Development Company Focused on <br />
                        <span className="gradient-text">Building for Real Business Needs</span>
                    </h1>
                </div>

                <div className="grid-2" style={{ width: '100%', alignItems: 'center' }}>
                    <div data-aos="fade-up" style={{ transitionDelay: '0.1s' }}>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            Technology should make business easier to operate, not add another layer of complexity. Fly Towards Digital Innovation is a software development company focused on helping businesses turn their technology requirements into practical software solutions. We work with organisations that need software built around their processes, users, operational requirements and growth plans.
                        </p>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            From custom business applications and enterprise software to SaaS platforms, web applications, mobile apps and digital transformation initiatives, we approach every project with the business requirement at the centre.
                        </p>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            Our focus is simple: understand the problem, define the right solution and build software that supports the way your business needs to work.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary">Talk to Our Team <ArrowRight size={20} /></Link>
                            <Link to="/contact" className="btn btn-outline">Discuss Your Project</Link>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.3s' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px', width: '100%' }}>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Fly Towards Digital Innovation Team"
                                className="floating-img"
                                style={{ borderRadius: '30px', width: '100%' }}
                            />
                            <div className="glow-aura"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section id="who-we-are" style={{ padding: '6rem 8%', background: 'rgba(0, 242, 255, 0.01)' }}>
                <div className="card" data-aos="fade-up" style={{ padding: '4rem', borderRadius: '40px', background: 'var(--bg-white)', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <span className="section-tag">Who We Are</span>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: 1.2 }}>
                                Empowering Organizations Through <span className="gradient-text">Context-First Software</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.15rem' }}>
                                Fly Towards Digital Innovation works with businesses that need technology to solve real operational and business challenges.
                            </p>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.15rem' }}>
                                We understand that every organisation works differently. Processes vary between industries, teams have different requirements, and existing technology environments can often include multiple applications, manual workflows or outdated systems.
                            </p>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.15rem' }}>
                                That is why our approach is centred on understanding the business before defining the software. We help businesses explore, plan and develop software solutions for specific requirements rather than treating every project as a standard implementation.
                            </p>
                        </div>
                        <div style={{ flex: '1 1 400px', background: 'rgba(157,0,255,0.02)', padding: '2.5rem', borderRadius: '30px', border: '1px solid var(--border)' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', fontWeight: 800 }}>Our Capabilities Include:</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { name: "Custom Software Development", path: "/services/custom-software-development" },
                                    { name: "Enterprise Software", path: "/services/enterprise-software-development" },
                                    { name: "SaaS Development", path: "/services/saas-development" },
                                    { name: "Web Application Development", path: "/services/web-development" },
                                    { name: "Mobile App Development", path: "/services/mobile-app-development" },
                                    { name: "Software Maintenance", path: "/services/software-maintenance-support" },
                                    { name: "Digital Transformation", path: "/services" }
                                ].map((item, idx) => (
                                    <Link key={idx} to={item.path} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', background: '#fff', borderRadius: '15px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600, transition: 'all 0.3s' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
                                    >
                                        <span>{item.name}</span>
                                        <ArrowUpRight size={18} color="var(--text-muted)" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story / Purpose */}
            <section id="purpose" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Our Purpose</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>Make Technology More Useful to Business</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                        Our purpose is to help businesses use software to address the challenges that matter to their operations. A software project should have a reason behind it.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                    {purposeItems.map((item, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 50} style={{ padding: '2.5rem 2rem', borderRadius: '25px', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#fff' }}>
                            <div style={{ width: '48px', height: '48px', background: 'rgba(0, 242, 255, 0.05)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.5, margin: 0 }}>
                                {item.text}
                            </h3>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3.5rem' }} data-aos="fade-up">
                    <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                        We start with that purpose and work backwards toward the technology.
                    </p>
                </div>
            </section>

            {/* What We Do */}
            <section id="capabilities" style={{ padding: '6rem 8%', background: 'rgba(157, 0, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">What We Do</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>Our Core Capabilities</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                        As a custom software development company, we provide software capabilities across different business requirements and stages of digital development.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {capabilities.map((cap, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ display: 'flex', flexDirection: 'column', padding: '3rem 2.5rem', borderRadius: '30px', position: 'relative', overflow: 'hidden' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = `0 30px 60px rgba(${cap.color}, 0.12)`;
                                e.currentTarget.style.borderColor = `rgba(${cap.color}, 0.25)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                            }}
                        >
                            <div style={{ width: '64px', height: '64px', background: `linear-gradient(135deg, rgba(${cap.color}, 0.1) 0%, transparent 100%)`, borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: `1px solid rgba(${cap.color}, 0.15)` }}>
                                {cap.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-dark)' }}>{cap.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1 }}>{cap.desc}</p>
                            
                            <Link to={cap.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: `rgba(${cap.color}, 1)`, textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', marginTop: 'auto' }}>
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link to="/service" className="btn btn-primary">Explore Our Services <ArrowRight size={20} /></Link>
                </div>
            </section>

            {/* Our Approach */}
            <section id="approach" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">01 — 05 Steps</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>Our Approach to Software Development</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                        We believe good software development starts with understanding. Before thinking about features or technology, we want to understand what the business is trying to achieve. This approach keeps technology connected to business objectives.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                    {approachSteps.map((step, idx) => (
                        <div key={idx} className="process-card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ padding: '3rem 2rem', borderRadius: '30px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', position: 'relative' }}>
                            <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '3rem', fontWeight: 900, color: 'var(--text-dark)', opacity: 0.05, fontFamily: 'Outfit' }}>
                                {step.step}
                            </span>
                            <div style={{ width: '48px', height: '48px', background: 'var(--gradient-primary)', color: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Outfit' }}>
                                {step.step}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1.4 }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Businesses Work With Us */}
            <section id="why-us" style={{ padding: '6rem 8%', background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Why Work With Us</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>Why Businesses Work With Us</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                        Choosing between software development firms is not only about comparing technical capabilities. It is also about finding a team that understands the requirement and can work with the business throughout the project.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                    {whyWorkWithUs.map((item, idx) => (
                        <div key={idx} className="card card--hover-secondary" data-aos="fade-up" data-aos-delay={idx * 100} style={{ padding: '3rem 2.5rem', borderRadius: '30px', background: '#fff' }}>
                            <div style={{ width: '56px', height: '56px', background: 'rgba(255, 0, 122, 0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', fontWeight: 800, color: 'var(--text-dark)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Starts with the Problem */}
            <section id="problem-first" style={{ padding: '6rem 8%' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag">Starts with the Problem</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem', lineHeight: 1.2 }}>
                            A Custom Software Development Agency That <span className="gradient-text">Starts With the Problem</span>
                        </h2>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            Many software projects begin with a technology decision. We believe they should begin with a business problem.
                        </p>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            For example, a business may know that its teams spend too much time on manual work. Another organisation may have several disconnected applications. A growing company may need a system that can support new processes or users.
                        </p>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            The software requirement is different in each situation. As a custom software development agency, our role is to understand that context and help translate it into a practical software direction.
                        </p>
                        <p style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-dark)', marginTop: '2rem' }}>
                            The answers help shape a more meaningful development process.
                        </p>
                    </div>

                    <div data-aos="fade-left" style={{ background: 'rgba(0, 242, 255, 0.02)', padding: '3rem', borderRadius: '40px', border: '1px solid var(--border)' }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-dark)' }}>This means asking:</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }}>
                            {problemQuestions.map((q, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '1rem 1.25rem', background: '#fff', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                                    <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-dark)' }}>{q}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Built for Different Industries */}
            <section id="industries" style={{ padding: '6rem 8%', background: 'rgba(157, 0, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Industries We Support</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>Built Around the Needs of Different Industries</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                        Businesses in different industries operate differently. Their workflows, users, processes and technology requirements are not interchangeable.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {industries.map((ind, idx) => (
                        <div key={idx} className="card card--hover-accent" data-aos="fade-up" data-aos-delay={idx * 50} style={{ padding: '2.5rem 2rem', borderRadius: '25px', background: '#fff' }}>
                            <div style={{ width: '48px', height: '48px', background: 'rgba(157, 0, 255, 0.05)', color: 'var(--accent)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                {ind.icon}
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-dark)' }}>{ind.name}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                Software for <Link to="/service" className="industry-link" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>{ind.anchor}</Link> related business processes and digital workflows.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Beliefs */}
            <section id="beliefs" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">What We Believe</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>What We Believe Good Software Should Do</h2>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    {beliefs.map((belief, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ padding: '2.5rem 2rem', borderRadius: '25px', background: '#fff', border: '1px solid var(--border)', borderTop: '4px solid var(--primary)', boxShadow: 'var(--shadow)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-dark)' }}>{belief.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{belief.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Commitments */}
            <section id="commitments" style={{ padding: '6rem 8%', background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Our Commitment</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>Our Commitment to Clients</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                        We aim to make software development easier to understand and more closely connected to business objectives. That means focusing on:
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                    {commitments.map((com, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ padding: '2.5rem 2rem', borderRadius: '25px', background: '#fff', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--gradient-primary)' }}></div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-dark)' }}>{com.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{com.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Looking for Best Company */}
            <section id="looking-for-company" style={{ padding: '6rem 8% 3rem' }}>
                <div className="card" data-aos="fade-up" style={{ padding: '4rem', borderRadius: '40px', background: 'rgba(157, 0, 255, 0.02)', border: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            Looking for the Best Software Development Company for Your Requirement?
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            There is no single software development company that is the right choice for every business. The right development partner depends on your requirements, business goals, existing systems, users, project scope and future plans.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            If you are comparing custom software development firms, we recommend starting with the problem you want to solve rather than simply comparing feature lists.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                            Fly Towards Digital Innovation can discuss your requirement and help determine whether a custom software approach is appropriate for your business. Whether you are planning a new application, replacing an existing system, automating a process or developing a digital product, the conversation starts with understanding your requirement.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', fontWeight: 600, marginTop: '2rem' }}>
                            To understand our capability, feel free to explore our previous work and <Link to="/gallery" style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: 700 }}>case studies</Link> or read our <Link to="/blog" style={{ color: 'var(--secondary)', textDecoration: 'underline', fontWeight: 700 }}>software development insights</Link>.
                        </p>
                    </div>
                    <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Discuss Your Software Requirement <ArrowRight size={20} /></Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" style={{ padding: '6rem 8%', background: 'rgba(157, 0, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">FAQ</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                </div>

                <div style={{ maxWidth: '850px', margin: '0 auto' }} data-aos="fade-up">
                    {faqs.map((faq, idx) => {
                        const isOpen = activeFaq === idx;
                        return (
                            <div key={idx} style={{
                                borderBottom: '1px solid var(--border)',
                                padding: '1.5rem 0',
                                cursor: 'pointer'
                            }}
                            onClick={() => toggleFaq(idx)}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        margin: 0,
                                        color: isOpen ? 'var(--secondary)' : 'var(--text-dark)',
                                        transition: 'color 0.3s ease',
                                        textAlign: 'left'
                                    }}>
                                        {faq.q}
                                    </h3>
                                    <div style={{
                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease',
                                        color: isOpen ? 'var(--secondary)' : 'var(--text-muted)'
                                    }}>
                                        <ChevronDown size={24} />
                                    </div>
                                </div>
                                <div style={{
                                    maxHeight: isOpen ? '300px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    opacity: isOpen ? 1 : 0
                                }}>
                                    <p style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.7,
                                        marginTop: '1rem',
                                        marginBottom: '0.5rem',
                                        textAlign: 'left'
                                    }}>
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Let's Build Box (Final CTA) */}
            <section id="cta" style={{ padding: '3rem 8% 6rem' }}>
                <div className="cta-content" data-aos="zoom-in" style={{
                    background: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1800) center/cover no-repeat',
                    padding: '5rem 3rem',
                    borderRadius: '40px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.95) 0%, rgba(10, 15, 25, 0.98) 100%)', zIndex: 1 }}></div>

                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <span className="section-tag" style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'inline-block' }}>Let's Build Software Around Your Business</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1.5rem', color: '#fff', marginTop: '1rem' }}>
                            Let's Build Software Around Your Business
                        </h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '750px', marginInline: 'auto', lineHeight: 1.8 }}>
                            Your software requirement starts with a business need. Tell us what you are trying to improve, automate, replace or build. Our team can discuss the requirement, understand the context and explore the right development approach.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.05rem', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)' }}>
                                Talk to Our Team <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.05rem', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}>
                                Discuss Your Project
                            </Link>
                        </div>
                        <span style={{ display: 'block', marginTop: '3rem', fontSize: '0.95rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Fly Towards Digital Innovation — Software Development for Business Requirements
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
