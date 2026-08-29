import {
    ArrowRight, CheckCircle2, Globe, Shield, Users, Star, Quote, ChevronRight,
    Target, Zap, Server, Code, Smartphone, MonitorSmartphone, BarChart,
    TrendingUp, Settings, Wrench, Layers, Network, Database, Search,
    FileText, Palette, Activity, ShoppingBag, Truck, GraduationCap,
    HardHat, Hotel, HelpCircle, ChevronDown, ChevronUp,
    Workflow, Factory, Coffee, Handshake, Link as LinkIcon
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

    const capabilities = [
        { title: "Business process automation", icon: <CpuIcon size={24} color="var(--primary)" /> },
        { title: "Centralised business operations", icon: <Database size={24} color="var(--secondary)" /> },
        { title: "Internal workflow management", icon: <Layers size={24} color="var(--accent)" /> },
        { title: "Data and application integration", icon: <Network size={24} color="var(--primary)" /> },
        { title: "Customer-facing applications", icon: <Users size={24} color="var(--secondary)" /> },
        { title: "Business-specific dashboards", icon: <BarChart size={24} color="var(--accent)" /> },
        { title: "Digital products and SaaS platforms", icon: <Globe size={24} color="var(--primary)" /> },
        { title: "Modernisation of outdated software systems", icon: <Wrench size={24} color="var(--secondary)" /> }
    ];

    const services = [
        {
            title: "Custom Software Development",
            desc: "Build software around your specific workflows, users, data and business requirements rather than forcing your processes into a generic product.",
            link: "/service",
            icon: <Code size={32} color="var(--primary)" />
        },
        {
            title: "Enterprise Software Development",
            desc: "Develop business software designed to support larger operational requirements, multiple users, structured workflows and connected business functions.",
            link: "/services/enterprise-software-development",
            icon: <Server size={32} color="var(--secondary)" />
        },
        {
            title: "SaaS Development",
            desc: "Turn a software idea into a SaaS product with the functionality and architecture required for a subscription-based digital business.",
            link: "/products",
            icon: <Zap size={32} color="var(--accent)" />
        },
        {
            title: "Web Application Development",
            desc: "Develop browser-based applications for internal operations, customer interactions, business workflows and digital products.",
            link: "/services/web-development",
            icon: <MonitorSmartphone size={32} color="var(--primary)" />
        },
        {
            title: "Mobile App Development",
            desc: "Create mobile applications that support customer experiences, field operations, employee workflows or specific business use cases.",
            link: "/services/mobile-app-development",
            icon: <Smartphone size={32} color="var(--secondary)" />
        },
        {
            title: "Software Maintenance",
            desc: "Maintain and improve existing software as requirements change, helping businesses continue using important applications while addressing new needs.",
            link: "/services/software-maintenance-support",
            icon: <Wrench size={32} color="var(--accent)" />
        },
        {
            title: "Digital Transformation",
            desc: "Modernise manual or disconnected business processes through software, automation and better-connected digital systems.",
            link: "/services",
            icon: <TrendingUp size={32} color="var(--primary)" />
        }
    ];

    const whyCustomSoftware = [
        {
            title: "Designed Around Your Processes",
            desc: "Instead of changing your workflow to fit a software product, the solution can be structured around your actual business requirements.",
            icon: <Settings size={28} color="var(--primary)" />
        },
        {
            title: "Built for Specific Users",
            desc: "Different teams need different tools. Software can be designed around the people who will use it, from administrators and managers to operational teams and customers.",
            icon: <Users size={28} color="var(--secondary)" />
        },
        {
            title: "Better Connected Systems",
            desc: "Businesses often work with multiple applications that do not communicate effectively. Custom development can help create more connected workflows and applications.",
            icon: <Network size={28} color="var(--accent)" />
        },
        {
            title: "Room to Scale",
            desc: "As business requirements change, software may need new functionality, integrations, users or workflows. A properly planned custom solution can be developed with future requirements in mind.",
            icon: <TrendingUp size={28} color="var(--primary)" />
        },
        {
            title: "Focused on Business Problems",
            desc: "The starting point should be the business problem, not the technology. We focus on understanding what the software needs to accomplish before defining the solution.",
            icon: <Target size={28} color="var(--secondary)" />
        }
    ];

    const industries = [
        { name: "Healthcare", desc: "Software solutions for healthcare-related workflows, operational management and digital processes.", icon: <Activity size={32} color="var(--primary)" /> },
        { name: "Manufacturing", desc: "Applications that can support production-related workflows, business operations, data management and process visibility.", icon: <Settings size={32} color="var(--secondary)" /> },
        { name: "Retail", desc: "Software for retail operations, customer-facing experiences, business workflows and connected processes.", icon: <ShoppingBag size={32} color="var(--accent)" /> },
        { name: "Logistics", desc: "Solutions designed around logistics workflows, operational coordination and information management.", icon: <Truck size={32} color="var(--primary)" /> },
        { name: "Education", desc: "Digital applications that support education-related processes, administration and user interactions.", icon: <GraduationCap size={32} color="var(--secondary)" /> },
        { name: "Construction", desc: "Software solutions designed around construction-related workflows, project processes and operational requirements.", icon: <HardHat size={32} color="var(--accent)" /> },
        { name: "Hospitality", desc: "Applications that can support hospitality operations, customer interactions and business processes.", icon: <Hotel size={32} color="var(--primary)" /> }
    ];

    const processSteps = [
        { step: "01", title: "Understand", desc: "We begin by understanding the business problem, current process, users and desired outcome.", icon: <Search size={24} /> },
        { step: "02", title: "Define", desc: "The requirements are translated into a clearer software scope, functionality and solution direction.", icon: <FileText size={24} /> },
        { step: "03", title: "Design", desc: "The user experience and application structure are planned around the people and processes that will use the system.", icon: <Palette size={24} /> },
        { step: "04", title: "Develop", desc: "The software is developed according to the agreed requirements, functionality and technical direction.", icon: <Code size={24} /> },
        { step: "05", title: "Improve", desc: "Software can continue to evolve as the business adds new requirements, users, integrations or capabilities.", icon: <TrendingUp size={24} /> }
    ];

    const businessOutcomes = [
        "Reduce dependence on manual processes",
        "Bring business information into more centralised systems",
        "Connect previously disconnected workflows",
        "Support growing operational requirements",
        "Improve access to business information",
        "Create better digital experiences for customers and employees",
        "Replace outdated or difficult-to-maintain applications",
        "Establish a stronger foundation for future digital initiatives"
    ];

    const strengths = [
        {
            title: "Technical Expertise",
            desc: "Software projects require both business understanding and technical execution. We approach development with attention to the requirements behind the application.",
            icon: <Shield size={32} color="var(--primary)" />
        },
        {
            title: "Experienced Development Team",
            desc: "Our development approach is supported by developers working across software development requirements.",
            icon: <Users size={32} color="var(--secondary)" />
        },
        {
            title: "End-to-End Development",
            desc: "From understanding requirements to developing the software, the focus is on providing an end-to-end development approach.",
            icon: <Layers size={32} color="var(--accent)" />
        },
        {
            title: "Flexible Engagement",
            desc: "Different businesses have different project requirements and engagement needs. Our strategy includes flexible engagement models as a core strength.",
            icon: <Globe size={32} color="var(--primary)" />
        }
    ];

    const faqs = [
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
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Section 1 — Hero */}
            <section className="hero-cover-section">
                <div className="hero-cover-video-wrap" aria-hidden="true">
                    <video autoPlay muted loop playsInline preload="auto" className="hero-cover-video">
                        <source src="/Background.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-cover-overlay"></div>
                </div>

                <div className="hero-cover-content" data-aos="fade-up">
                    <div className="hero-cover-badge">
                        <Zap size={16} /> Fly Towards Digital Innovation
                    </div>

                    <h1 className="hero-cover-title">
                        Custom Software Development
                        <span className="title-highlight">Services for Growing Businesses</span>
                    </h1>

                    <p className="hero-cover-description">
                        Build software around your unique business processes, workflows, and goals with tailored software development services designed for your business.
                    </p>

                    <div className="hero-cover-buttons">
                        <RouterLink to="/contact" className="hero-btn-primary">
                            Discuss Your Software Requirement <ArrowRight size={20} />
                        </RouterLink>

                        <a href="#services" className="hero-btn-secondary">
                            Explore Our Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Section 2 — Business Problems */}
            <section id="problems" style={{ padding: '6rem 8% 4rem' }}>
                <div className="grid-2 max-w-1200" style={{ margin: '0 auto 4rem', gap: '4rem', alignItems: 'flex-start' }}>
                    <div data-aos="fade-right">
                        <span className="section-tag">Software Built Around Your Business</span>

                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Why businesses outgrow spreadsheets, disconnected tools and outdated systems
                        </h2>

                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Generic software can be useful when your processes fit the product. But when your business has unique workflows, multiple teams, specialised requirements or existing systems, adapting your operations to someone else's software can create unnecessary complexity.
                        </p>

                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 600 }}>
                            Custom software gives your business the opportunity to build around the way you actually work.
                        </p>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '2rem', fontStyle: 'italic' }}>
                            The goal is not simply to build another application. It is to create software that has a clear purpose within your business.
                        </p>

                        <RouterLink to="/contact" className="btn btn-primary">
                            Tell Us What You Need to Build <ArrowRight size={18} />
                        </RouterLink>
                    </div>

                    <div data-aos="fade-left">
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            We help businesses turn operational requirements into software solutions that can support:
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                            {capabilities.map((cap, idx) => (
                                <div key={idx} className="capability-item">
                                    <div style={{
                                        padding: '8px',
                                        background: 'rgba(0, 242, 255, 0.05)',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {cap.icon}
                                    </div>

                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: '1.05rem',
                                        color: 'var(--text-dark)'
                                    }}>
                                        {cap.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Software Services Cards in Full-Width Rows and Columns */}
                <div className="max-w-1200" style={{ margin: '0 auto' }}>
                    <div className="grid" style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                        alignItems: 'stretch'
                    }}>
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="card"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                style={{
                                    padding: '2.5rem 2rem',
                                    borderRadius: '24px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    background: 'var(--bg-white)'
                                }}
                            >
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: 'rgba(0, 242, 255, 0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    flexShrink: 0
                                }}>
                                    {item.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 800,
                                    marginBottom: '1rem',
                                    lineHeight: 1.3
                                }}>
                                    <RouterLink
                                        to={item.link}
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                                    >
                                        {item.title}
                                    </RouterLink>
                                </h3>

                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.65,
                                    marginBottom: '1.5rem',
                                    flexGrow: 1
                                }}>
                                    {item.desc}
                                </p>

                                <RouterLink
                                    to={item.link}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: 'var(--primary)',
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        marginTop: 'auto'
                                    }}
                                >
                                    Learn More <ArrowRight size={16} />
                                </RouterLink>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }} data-aos="fade-up">
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
                        {
                            title: "Designed Around Your Processes",
                            desc: "Instead of changing your workflow to fit a software product, the solution can be structured around your actual business requirements.",
                            icon: <Workflow size={28} />
                        },
                        {
                            title: "Built for Specific Users",
                            desc: "Different teams need different tools. Software can be designed around the people who will use it, from administrators and managers to operational teams and customers.",
                            icon: <Users size={28} />
                        },
                        {
                            title: "Better Connected Systems",
                            desc: "Businesses often work with multiple applications that do not communicate effectively. Custom development can help create more connected workflows and applications.",
                            icon: <LinkIcon size={28} />
                        },
                        {
                            title: "Room to Scale",
                            desc: "As business requirements change, software may need new functionality, integrations, workflows or users. A properly planned custom solution can be developed with future requirements in mind.",
                            icon: <TrendingUp size={28} />
                        },
                        {
                            title: "Focused on Business Problems",
                            desc: "The starting point should be the business problem, not the technology. We focus on understanding what the software needs to accomplish before defining the solution.",
                            icon: <Target size={28} />
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="grid-matrix-item"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
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

                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 800,
                                marginBottom: '1rem',
                                lineHeight: 1.3,
                                minHeight: '2.6rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {item.title}
                            </h3>

                            <p style={{
                                fontSize: '0.95rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.6,
                                margin: 0,
                                flexGrow: 1
                            }}>
                                {item.desc}
                            </p>
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
                            {
                                title: "Healthcare Software",
                                desc: "Software solutions for healthcare-related workflows, operational management and digital processes.",
                                icon: <Activity size={28} />,
                                link: "/industries/healthcare/"
                            },
                            {
                                title: "Manufacturing Software",
                                desc: "Applications that can support production-related workflows, business operations, data management and process visibility.",
                                icon: <Factory size={28} />,
                                link: "/industries/manufacturing/"
                            },
                            {
                                title: "Retail Software",
                                desc: "Software for retail operations, customer-facing experiences, business workflows and connected processes.",
                                icon: <ShoppingBag size={28} />,
                                link: "/industries/retail/"
                            },
                            {
                                title: "Logistics Software",
                                desc: "Solutions designed around logistics workflows, operational coordination and information management.",
                                icon: <Truck size={28} />,
                                link: "/industries/logistics/"
                            },
                            {
                                title: "Education Software",
                                desc: "Digital applications that support education-related processes, administration and user interactions.",
                                icon: <GraduationCap size={28} />,
                                link: "/industries/education/"
                            },
                            {
                                title: "Construction Software",
                                desc: "Software solutions designed around construction-related workflows, project processes and operational requirements.",
                                icon: <HardHat size={28} />,
                                link: "/industries/construction/"
                            },
                            {
                                title: "Hospitality Software",
                                desc: "Applications that can support hospitality operations, customer interactions and business processes.",
                                icon: <Coffee size={28} />,
                                link: "/industries/hospitality/"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="grid-matrix-item"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
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

                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 800,
                                    marginBottom: '1rem',
                                    lineHeight: 1.3,
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <RouterLink
                                        to={item.link}
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                                    >
                                        {item.title}
                                    </RouterLink>
                                </h3>

                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.6,
                                    margin: 0,
                                    flexGrow: 1
                                }}>
                                    {item.desc}
                                </p>
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
                        {
                            num: "01",
                            step: "Understand",
                            desc: "We begin by understanding the business problem, current process, users and desired outcome."
                        },
                        {
                            num: "02",
                            step: "Define",
                            desc: "The requirements are translated into a clearer software scope, functionality and solution direction."
                        },
                        {
                            num: "03",
                            step: "Design",
                            desc: "The user experience and application structure are planned around the people and processes that will use the system."
                        },
                        {
                            num: "04",
                            step: "Develop",
                            desc: "The software is developed according to the agreed requirements, functionality and technical direction."
                        },
                        {
                            num: "05",
                            step: "Improve",
                            desc: "Software can continue to evolve as the business adds new requirements, users, integrations or capabilities."
                        }
                    ].map((step, index) => (
                        <div
                            key={index}
                            className="timeline-flow-item"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div
                                className="workflow-number"
                                style={{
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
                                }}
                            >
                                {step.num}
                            </div>

                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 800,
                                marginBottom: '0.75rem'
                            }}>
                                {step.step}
                            </h3>

                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.5,
                                margin: 0,
                                flexGrow: 1
                            }}>
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '3rem auto 0',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        background: 'rgba(0, 242, 255, 0.03)',
                        border: '1px solid var(--border)'
                    }}
                    data-aos="fade-up"
                >
                    <p style={{
                        fontSize: '1.05rem',
                        fontWeight: 500,
                        color: 'var(--text-dark)',
                        margin: 0
                    }}>
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

                    <div
                        className="grid"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem',
                            marginBottom: '4rem'
                        }}
                    >
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
                            <div
                                key={index}
                                className="card"
                                style={{
                                    padding: '2rem',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '15px',
                                    height: '100%'
                                }}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
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

                                <span style={{
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: 'var(--text-dark)',
                                    lineHeight: 1.4
                                }}>
                                    {outcome}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            padding: '2rem',
                            borderRadius: '24px',
                            background: '#fff',
                            borderLeft: '4px solid var(--secondary)',
                            boxShadow: 'var(--shadow)'
                        }}
                        data-aos="fade-up"
                    >
                        <p style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.6,
                            margin: 0,
                            fontStyle: 'italic'
                        }}>
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

                    <p style={{
                        maxWidth: '800px',
                        margin: '1rem auto 0',
                        fontSize: '1rem',
                        color: 'var(--text-muted)',
                        fontWeight: 500
                    }}>
                        Fly Towards Digital Innovation's stated strengths include technical expertise, experienced developers, end-to-end development and flexible engagement models. You can explore our <RouterLink to="/service" style={{ color: '#ff007a', fontWeight: 600, textDecoration: 'underline' }}>Case Studies</RouterLink> or visit our <RouterLink to="/blog" style={{ color: '#ff007a', fontWeight: 600, textDecoration: 'underline' }}>Software Development Blog</RouterLink> to learn more.
                    </p>
                </div>

                <div
                    className="grid"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '2rem',
                        marginBottom: '4rem'
                    }}
                >
                    {[
                        {
                            title: "Technical Expertise",
                            desc: "Software projects require both business understanding and technical execution. We approach development with attention to the requirements behind the application.",
                            icon: <Code size={28} />
                        },
                        {
                            title: "Experienced Development Team",
                            desc: "Our development approach is supported by developers working across software development requirements.",
                            icon: <Users size={28} />
                        },
                        {
                            title: "End-to-End Development",
                            desc: "From understanding requirements to developing the software, the focus is on providing an end-to-end development approach.",
                            icon: <Zap size={28} />
                        },
                        {
                            title: "Flexible Engagement",
                            desc: "Different businesses have different project requirements and engagement needs. Our strategy includes flexible engagement models as a core strength.",
                            icon: <Handshake size={28} />
                        }
                    ].map((strength, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                padding: '2.5rem',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
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

                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 800,
                                marginBottom: '1rem',
                                lineHeight: 1.3,
                                minHeight: '2.6rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {strength.title}
                            </h3>

                            <p style={{
                                fontSize: '0.95rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.6,
                                margin: 0,
                                flexGrow: 1
                            }}>
                                {strength.desc}
                            </p>
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
                <div
                    className="glass-container max-w-1200"
                    data-aos="fade-up"
                    style={{
                        margin: '0 auto',
                        padding: '4rem 3rem',
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(15,23,42,0.08)',
                        borderRadius: '30px',
                        boxShadow: 'var(--shadow)'
                    }}
                >
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <span className="section-tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
                                Agency Discovery
                            </span>

                            <h2 style={{
                                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                                marginBottom: '1.5rem',
                                lineHeight: 1.2
                            }}>
                                Looking for a <span className="gradient-text">Custom Software Development Agency?</span>
                            </h2>

                            <p style={{
                                fontSize: '1.05rem',
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                lineHeight: 1.7
                            }}>
                                If your current software no longer fits the way your business operates, or if you are starting a new digital product or internal application, the first step is understanding what you actually need to build.
                            </p>

                            <p style={{
                                fontSize: '1.05rem',
                                color: 'var(--text-dark)',
                                fontWeight: 600,
                                marginBottom: '2rem'
                            }}>
                                You do not need to have every technical detail defined before starting the conversation.
                            </p>

                            <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem' }}>
                                Discuss Your Requirements <ArrowRight size={18} />
                            </RouterLink>
                        </div>

                        <div>
                            <p style={{
                                fontSize: '1.05rem',
                                color: 'var(--text-dark)',
                                fontWeight: 600,
                                marginBottom: '1.5rem'
                            }}>
                                You may already have a detailed specification. Or you may simply know that:
                            </p>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.8rem'
                            }}>
                                {[
                                    "A manual process needs to be automated.",
                                    "Several systems need to work together.",
                                    "An existing application needs to be modernised.",
                                    "Your business needs a software platform built around a specific workflow.",
                                    "A new SaaS or digital product needs to be developed.",
                                    "Your team needs a web or mobile application for a specific business requirement."
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px'
                                        }}
                                    >
                                        <CheckCircle2
                                            size={18}
                                            color="var(--primary)"
                                            style={{
                                                flexShrink: 0,
                                                marginTop: '3px'
                                            }}
                                        />

                                        <span style={{
                                            fontSize: '1rem',
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.4
                                        }}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 — What We Build */}
            <section id="services" style={{ padding: '6rem 8%', background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Software Services</span>

                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Software Development Services for Different Business Needs
                    </h2>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        maxWidth: '850px',
                        margin: '1.5rem auto 0',
                        lineHeight: 1.7
                    }}>
                        Every software project has a different purpose. Some businesses need an internal system to replace manual processes. Others need a customer-facing platform, a mobile application or a complete digital product. Our software development and services cover different stages and types of business requirements.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: '0 auto',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {services.map((svc, idx) => (
                        <div
                            key={idx}
                            className="card"
                            data-aos="fade-up"
                            data-aos-delay={idx * 50}
                            style={{
                                padding: '2.5rem',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'space-between',
                                background: 'var(--bg-white)'
                            }}
                        >
                            <div>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '15px',
                                    background: 'rgba(0, 242, 255, 0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    {svc.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 800,
                                    marginBottom: '1rem',
                                    color: 'var(--text-dark)'
                                }}>
                                    {svc.title}
                                </h3>

                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.6,
                                    marginBottom: '2rem'
                                }}>
                                    {svc.desc}
                                </p>
                            </div>

                            <RouterLink
                                to={svc.link}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: 'var(--text-dark)',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    marginTop: 'auto'
                                }}
                            >
                                Learn More <ArrowRight size={16} />
                            </RouterLink>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }} data-aos="fade-up">
                    <RouterLink to="/service" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
                        View All Software Services <ArrowRight size={18} />
                    </RouterLink>
                </div>
            </section>

            {/* Section 4 — Why Custom Software */}
            <section id="why-custom" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Pillars of Custom Solutions</span>

                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Why Businesses Choose Custom Software
                    </h2>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        maxWidth: '850px',
                        margin: '1.5rem auto 0',
                        lineHeight: 1.7
                    }}>
                        Off-the-shelf software is not always the right fit. A business may have unique approval processes, specialised workflows, legacy applications, multiple departments or requirements that standard products cannot adequately address. Custom software can provide a more tailored approach.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: '0 auto',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {whyCustomSoftware.map((pillar, idx) => (
                        <div
                            key={idx}
                            className="card card--hover-secondary"
                            data-aos="fade-up"
                            data-aos-delay={idx * 50}
                            style={{
                                padding: '2rem',
                                borderRadius: '20px',
                                background: 'var(--bg-white)'
                            }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: 'rgba(255, 0, 122, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.25rem'
                            }}>
                                {pillar.icon}
                            </div>

                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 800,
                                marginBottom: '0.75rem',
                                color: 'var(--text-dark)'
                            }}>
                                {pillar.title}
                            </h3>

                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                margin: 0
                            }}>
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 5 — Industries */}
            <section id="industries" style={{ padding: '6rem 8%', background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Industry Coverage</span>

                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Built for Industries With Real Operational Challenges
                    </h2>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        maxWidth: '850px',
                        margin: '1.5rem auto 0',
                        lineHeight: 1.7
                    }}>
                        Different industries have different workflows, regulations, customer expectations and operational requirements. Our approach to custom software development can be adapted to the needs of different business environments.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: '0 auto',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {industries.map((ind, idx) => (
                        <div
                            key={idx}
                            className="card card--hover-accent"
                            data-aos="fade-up"
                            data-aos-delay={idx * 50}
                            style={{
                                padding: '2rem',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'space-between',
                                background: 'var(--bg-white)'
                            }}
                        >
                            <div>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'rgba(157, 0, 255, 0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.25rem'
                                }}>
                                    {ind.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 800,
                                    marginBottom: '0.75rem',
                                    color: 'var(--text-dark)'
                                }}>
                                    {ind.name}
                                </h3>

                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                    marginBottom: '1.5rem'
                                }}>
                                    {ind.desc}
                                </p>
                            </div>

                            <RouterLink
                                to={ind.link}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: 'var(--text-dark)',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    marginTop: 'auto'
                                }}
                            >
                                Explore {ind.name} Software <ArrowRight size={14} />
                            </RouterLink>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }} data-aos="fade-up">
                    <RouterLink to="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
                        Explore Industry Solutions <ArrowRight size={18} />
                    </RouterLink>
                </div>
            </section>

            {/* Section 6 — How We Approach Software Development */}
            <section id="process" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Development Methodology</span>

                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        From Business Requirement to Working Software
                    </h2>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        maxWidth: '800px',
                        margin: '1.5rem auto 0',
                        lineHeight: 1.7
                    }}>
                        A successful software project starts with understanding the business behind the requirement.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: '0 auto',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {processSteps.map((step, idx) => (
                        <div
                            key={idx}
                            className="process-card"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            style={{
                                padding: '2.5rem 2rem',
                                borderRadius: '24px',
                                border: '1px solid var(--border)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <span style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1.5rem',
                                fontSize: '3rem',
                                fontWeight: 900,
                                color: 'var(--text-dark)',
                                opacity: 0.05,
                                fontFamily: 'Outfit'
                            }}>
                                {step.step}
                            </span>

                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: 'var(--gradient-primary)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {step.icon}
                            </div>

                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 800,
                                marginBottom: '0.75rem',
                                color: 'var(--text-dark)'
                            }}>
                                {step.step}. {step.title}
                            </h3>

                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                margin: 0
                            }}>
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '4rem',
                        maxWidth: '800px',
                        marginInline: 'auto'
                    }}
                    data-aos="fade-up"
                >
                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-dark)',
                        fontWeight: 500,
                        fontStyle: 'italic',
                        lineHeight: 1.7
                    }}>
                        This approach keeps the development process connected to the business objective rather than treating software development as an isolated technical task.
                    </p>
                </div>
            </section>

            {/* Section 7 — Business Outcomes */}
            <section id="outcomes" style={{ padding: '6rem 8%', background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Business Value</span>

                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Software That Supports Better Business Operations
                    </h2>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        maxWidth: '850px',
                        margin: '1.5rem auto 0',
                        lineHeight: 1.7
                    }}>
                        The value of software is not simply the number of features it contains. A useful business application should help people work more effectively, make information easier to manage and reduce unnecessary operational complexity.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: '0 auto',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '3rem'
                    }}
                >
                    {businessOutcomes.map((outcome, idx) => (
                        <div
                            key={idx}
                            className="card"
                            data-aos="fade-up"
                            data-aos-delay={idx * 50}
                            style={{
                                padding: '1.5rem',
                                borderRadius: '16px',
                                border: '1px solid var(--border)',
                                background: 'var(--bg-white)',
                                display: 'flex',
                                gap: '15px',
                                alignItems: 'flex-start',
                                boxShadow: 'none'
                            }}
                        >
                            <CheckCircle2
                                size={20}
                                color="var(--primary)"
                                style={{
                                    flexShrink: 0,
                                    marginTop: '2px'
                                }}
                            />

                            <span style={{
                                fontWeight: 600,
                                color: 'var(--text-dark)',
                                fontSize: '1rem',
                                lineHeight: 1.4
                            }}>
                                {outcome}
                            </span>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        marginInline: 'auto'
                    }}
                    data-aos="fade-up"
                >
                    <p style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6
                    }}>
                        * Specific outcomes will depend on the business, requirements and implementation scope. We do not promise the same result for every project because every software environment is different.
                    </p>
                </div>
            </section>

            {/* Section 8 — Why Fly Towards Digital Innovation */}
            <section id="why-us" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Stated Strengths</span>

                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Why Work With Fly Towards Digital Innovation?
                    </h2>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        maxWidth: '850px',
                        margin: '1.5rem auto 0',
                        lineHeight: 1.7
                    }}>
                        Choosing a custom software development company is about more than finding someone who can write code. You need a development partner that can understand the business requirement, translate it into software and support the project from development through future improvements. Fly Towards Digital Innovation's stated strengths include technical expertise, experienced developers, end-to-end development and flexible engagement models.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: '0 auto',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {strengths.map((item, idx) => (
                        <div
                            key={idx}
                            className="card"
                            data-aos="fade-up"
                            data-aos-delay={idx * 50}
                            style={{
                                padding: '2.5rem 2rem',
                                borderRadius: '24px',
                                background: 'var(--bg-white)'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '15px',
                                background: 'rgba(0, 242, 255, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {item.icon}
                            </div>

                            <h3 style={{
                                fontSize: '1.35rem',
                                fontWeight: 800,
                                marginBottom: '1rem',
                                color: 'var(--text-dark)'
                            }}>
                                {item.title}
                            </h3>

                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '1.05rem',
                                lineHeight: 1.6,
                                margin: 0
                            }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }} data-aos="fade-up">
                    <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.1rem 2.8rem' }}>
                        Talk About Your Software Project <ArrowRight size={18} />
                    </RouterLink>
                </div>
            </section>

            {/* Section 9 — Agency Discussion */}
            <section id="agency-discussion" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Project Discussion</span>

                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Looking for a Custom Software Development Agency?
                    </h2>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        maxWidth: '850px',
                        margin: '1.5rem auto 0',
                        lineHeight: 1.7
                    }}>
                        If your current software no longer fits the way your business operates, or if you are starting a new digital product or internal application, the first step is understanding what you actually need to build. You do not need to have every technical detail defined before starting the conversation.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: '0 auto',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}
                    data-aos="fade-up"
                >
                    <div
                        className="card"
                        style={{
                            padding: '3rem 2.5rem',
                            borderRadius: '24px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-white)',
                            boxShadow: 'var(--shadow)'
                        }}
                    >
                        <h4 style={{
                            color: 'var(--text-dark)',
                            fontSize: '1.35rem',
                            marginBottom: '1.25rem',
                            fontWeight: 800
                        }}>
                            Requirement Scenarios
                        </h4>

                        <ul style={{
                            paddingLeft: '1.2rem',
                            margin: 0,
                            color: 'var(--text-muted)',
                            fontSize: '1.05rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            lineHeight: 1.7
                        }}>
                            <li style={{ listStyleType: 'disc' }}>A manual process needs to be automated.</li>
                            <li style={{ listStyleType: 'disc' }}>Several systems need to work together.</li>
                            <li style={{ listStyleType: 'disc' }}>An existing application needs to be modernised.</li>
                        </ul>
                    </div>

                    <div
                        className="card"
                        style={{
                            padding: '3rem 2.5rem',
                            borderRadius: '24px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-white)',
                            boxShadow: 'var(--shadow)'
                        }}
                    >
                        <h4 style={{
                            color: 'var(--text-dark)',
                            fontSize: '1.35rem',
                            marginBottom: '1.25rem',
                            fontWeight: 800
                        }}>
                            Product Needs
                        </h4>

                        <ul style={{
                            paddingLeft: '1.2rem',
                            margin: 0,
                            color: 'var(--text-muted)',
                            fontSize: '1.05rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            lineHeight: 1.7
                        }}>
                            <li style={{ listStyleType: 'disc' }}>Your business needs a software platform built around a specific workflow.</li>
                            <li style={{ listStyleType: 'disc' }}>A new SaaS or digital product needs to be developed.</li>
                            <li style={{ listStyleType: 'disc' }}>Your team needs a web or mobile application for a specific business requirement.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 10 — FAQs */}
            <section id="faq" style={{ padding: '6rem 8%', background: 'rgba(157, 0, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>FAQ</span>

                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        maxWidth: '700px',
                        margin: '1rem auto 0'
                    }}>
                        Common questions from buyers looking for custom software solutions.
                    </p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
                    {faqs.map((faq, idx) => {
                        const isOpen = activeFaq === idx;

                        return (
                            <div
                                key={idx}
                                style={{
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

            {/* Section 11 — Final CTA */}
            <section id="contact-cta" style={{ padding: '6rem 1rem' }}>
                <div
                    className="cta-content"
                    data-aos="zoom-in"
                    style={{
                        textAlign: 'center',
                        padding: '6rem 3rem',
                        borderRadius: '40px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1800) center/cover no-repeat'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.95) 0%, rgba(10, 15, 25, 0.98) 100%)',
                        zIndex: 1
                    }}></div>

                    <div style={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <span
                            className="section-tag"
                            style={{
                                color: 'var(--primary)',
                                marginBottom: '1.5rem',
                                justifyContent: 'center',
                                marginInline: 'auto'
                            }}
                        >
                            Get Started
                        </span>

                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 800,
                            color: '#fff',
                            marginBottom: '1.5rem',
                            lineHeight: 1.2
                        }}>
                            Let's Discuss What Your Business <span className="gradient-text">Needs to Build</span>
                        </h2>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            marginBottom: '3rem',
                            maxWidth: '850px'
                        }}>
                            <p style={{
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                color: '#fff',
                                margin: 0,
                                lineHeight: 1.6
                            }}>
                                The right software starts with the right understanding of the problem.
                            </p>

                            <p style={{
                                fontSize: '1.15rem',
                                color: 'rgba(255,255,255,0.75)',
                                margin: 0,
                                lineHeight: 1.8
                            }}>
                                Whether you need to automate an internal process, replace an outdated application, connect multiple systems, build a SaaS product or develop a business-specific web or mobile application, start by telling us what you are trying to achieve.
                            </p>

                            <p style={{
                                fontSize: '1.15rem',
                                color: 'rgba(255,255,255,0.75)',
                                margin: 0,
                                lineHeight: 1.8,
                                fontWeight: 500
                            }}>
                                Let's explore the requirement, understand the business problem and determine what needs to be built.
                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <RouterLink
                                to="/contact"
                                className="btn btn-primary"
                                style={{
                                    padding: '1.2rem 3rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)'
                                }}
                            >
                                Discuss Your Software Requirement <ArrowRight size={20} />
                            </RouterLink>

                            <RouterLink
                                to="/contact"
                                className="btn btn-outline"
                                style={{
                                    padding: '1.2rem 3rem',
                                    color: '#fff',
                                    borderColor: 'rgba(255,255,255,0.3)',
                                    background: 'rgba(255,255,255,0.05)'
                                }}
                            >
                                Contact Fly Towards Digital Innovation
                            </RouterLink>
                        </div>

                        <p style={{
                            fontSize: '1rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            margin: 0,
                            fontStyle: 'italic'
                        }}>
                            Let's explore the requirement, understand the business problem and determine what needs to be built.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

// Simple custom component inline helper for CPU/Process icon
const CpuIcon = ({ size, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="15" x2="23" y2="15" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
    );
};

export default Home;