import {
    ArrowRight, CheckCircle2, Globe, Shield, Users, Star, Quote, ChevronRight,
    Target, Zap, Server, Code, Smartphone, MonitorSmartphone, BarChart,
    TrendingUp, Settings, Wrench, Layers, Network, Database, Search,
    FileText, Palette, Activity, ShoppingBag, Truck, GraduationCap,
    HardHat, Hotel, HelpCircle, ChevronDown, ChevronUp,
    Workflow, Factory, Coffee, Handshake, Link as LinkIcon, ShieldAlert, Send
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
            link: "/services/custom-software-development",
            icon: <Code size={32} color="var(--primary)" />,
            image: "/custom-software-dev.jpg"
        },
        {
            title: "Enterprise Software Development",
            desc: "Develop business software designed to support larger operational requirements, multiple users, structured workflows and connected business functions.",
            link: "/services/enterprise-software-development",
            icon: <Server size={32} color="var(--secondary)" />,
            image: "/enterprise-software-dev.jpg"
        },
        {
            title: "SaaS Development",
            desc: "Turn a software idea into a SaaS product with the functionality and architecture required for a subscription-based digital business.",
            link: "/services/saas-development",
            icon: <Zap size={32} color="var(--accent)" />,
            image: "/saas-dev.jpg"
        },
        {
            title: "Web Application Development",
            desc: "Develop browser-based applications for internal operations, customer interactions, business workflows and digital products.",
            link: "/services/web-application-development",
            icon: <MonitorSmartphone size={32} color="var(--primary)" />,
            image: "/web-app-dev.jpg"
        },
        {
            title: "Mobile App Development",
            desc: "Create mobile applications that support customer experiences, field operations, employee workflows or specific business use cases.",
            link: "/services/mobile-app-development",
            icon: <Smartphone size={32} color="var(--secondary)" />,
            image: "/mobile-app-dev.jpg"
        },
        {
            title: "Software Maintenance",
            desc: "Maintain and improve existing software as requirements change, helping businesses continue using important applications while addressing new needs.",
            link: "/services/software-maintenance-support",
            icon: <Wrench size={32} color="var(--accent)" />,
            image: "/software-maintenance.jpg"
        },
        {
            title: "Digital Transformation",
            desc: "Modernise manual or disconnected business processes through software, automation and better-connected digital systems.",
            link: "/services",
            icon: <TrendingUp size={32} color="var(--primary)" />,
            image: "/digital-transformation.jpg"
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
        <main style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-bg"></div>

            {/* Ambient Background Lights (Same as About page) */}
            <div style={{ position: 'absolute', top: '5%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(250,204,21,0.12) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(50px)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', top: '35%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(253,224,71,0.10) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', top: '65%', left: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(234,179,8,0.10) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1, filter: 'blur(60px)', pointerEvents: 'none' }}></div>

            {/* Section 1 — Hero */}
            <section style={{
                padding: '9rem 5% 6rem',
                background: 'url(/hero-laptop-yellow-bg.png) center center / cover no-repeat',
                width: '100%',
                maxWidth: '100%',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="max-w-1200" style={{ margin: '0 auto', width: '100%' }}>
                    <div data-aos="fade-up" className="hero-text-card-wrapper" style={{ maxWidth: '620px', textAlign: 'left' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span className="section-tag-featured">
                                <Zap size={15} color="#EAB308" style={{ fill: '#EAB308' }} /> Fly Towards Digital Innovation
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                            fontWeight: 800,
                            lineHeight: 1.2,
                            color: 'var(--text-dark)',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em'
                        }}>
                            <RouterLink to="/services/custom-software-development" style={{ color: 'inherit', textDecoration: 'none' }}>Custom Software Development</RouterLink>{' '}
                            <span style={{
                                color: '#FACC15',
                                textShadow: '-1px 1px 0 #1F2937, 1px 1px 0 #1F2937, 1px -1px 0 #1F2937, -1px -1px 0 #1F2937, 0 4px 15px rgba(250, 204, 21, 0.4)',
                                fontWeight: 900
                            }}>
                                Services for Growing Businesses
                            </span>
                        </h1>

                        <p style={{
                            fontSize: '1.18rem',
                            lineHeight: 1.75,
                            color: '#1F2937',
                            marginBottom: '2.5rem',
                            fontWeight: 600
                        }}>
                            Build software around your unique business processes, workflows, and goals with tailored software development services designed for your business.
                        </p>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '1.2rem',
                            width: '100%'
                        }}>
                            <RouterLink to="/contact" className="hero-btn-primary" style={{
                                padding: '1.05rem 2.2rem',
                                borderRadius: '50px',
                                fontSize: '1rem'
                            }}>
                                Discuss Your Software Requirement <ArrowRight size={18} />
                            </RouterLink>

                            <a href="#services" className="btn btn-outline" style={{
                                padding: '1.05rem 2.2rem',
                                borderRadius: '50px',
                                fontWeight: 700,
                                fontSize: '1rem'
                            }}>
                                Explore Our Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections Wrapper with Clean 3D Silver-Yellow Stage Background & Glass Effect */}
            <div style={{
                position: 'relative',
                background: 'url(/body-silver-yellow-bg.png) center center / cover no-repeat fixed',
                width: '100%',
                overflow: 'hidden'
            }}>
                {/* Subtle Frosted Glass Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Section 2 — Business Problems */}
                    <section id="problems" style={{ padding: '5rem 5% 4rem', width: '100%', maxWidth: '100%' }}>
                <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 3.5rem' }} data-aos="fade-up">
                    <span className="section-tag-featured" style={{ marginBottom: '1.25rem' }}>
                        Software Built Around Your Business
                    </span>

                    <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', lineHeight: 1.25, fontWeight: 800, color: 'var(--text-dark)' }}>
                        Why businesses outgrow spreadsheets,<br className="desktop-only-br" /> disconnected tools and outdated systems
                    </h2>
                </div>

                <div className="max-w-1200" style={{ margin: '0 auto' }}>
                    <div data-aos="fade-up" style={{
                        padding: '1rem 0'
                    }}>
                        <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                                    Generic software forces you to adapt. <span style={{ color: '#EAB308' }}>Custom software adapts to you.</span>
                                </h3>

                                <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                                    Generic software can be useful when your processes fit the product. But when your business has unique workflows, multiple teams, specialised requirements or existing systems, adapting your operations to someone else's software can create unnecessary complexity.
                                </p>

                                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-dark)', fontWeight: 700, marginBottom: '1.5rem' }}>
                                    Custom software gives your business the opportunity to build around the way you actually work.
                                </p>

                                <div style={{
                                    padding: '1.2rem 1.5rem',
                                    background: '#FEF9C3',
                                    borderLeft: '4px solid #FACC15',
                                    borderRadius: '0 14px 14px 0',
                                    marginBottom: '2rem'
                                }}>
                                    <p style={{ fontSize: '1.02rem', color: '#1F2937', margin: 0, fontStyle: 'italic', fontWeight: 500 }}>
                                        "The goal is not simply to build another application. It is to create software that has a clear purpose within your business."
                                    </p>
                                </div>

                                <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.05rem 2.2rem', boxShadow: '0 8px 25px rgba(250, 204, 21, 0.35)' }}>
                                    Tell Us What You Need to Build <ArrowRight size={18} />
                                </RouterLink>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                                    We help businesses turn operational requirements into software solutions that support:
                                </h3>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.1rem'
                                }}>
                                    {capabilities.map((cap, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '14px',
                                            padding: '4px 0'
                                        }}>
                                            <div style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                background: '#FEF9C3',
                                                color: '#1F2937',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <CheckCircle2 size={18} color="#EAB308" />
                                            </div>

                                            <span style={{
                                                fontSize: '1.05rem',
                                                fontWeight: 600,
                                                color: '#2D3748',
                                                lineHeight: 1.4
                                            }}>
                                                {cap.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 — Software Development Services (Eye-Comfort Off-White) */}
            <section id="services" style={{ padding: '5rem 5%', width: '100%', maxWidth: '100%' }}>
                <div className="max-w-1200" style={{ margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ margin: '0 auto 1.25rem' }}>
                            Software Services
                        </span>

                        <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', lineHeight: 1.25, fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
                            Software Development Services for Different Business Needs
                        </h2>

                        <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                            Every software project has a different purpose. Some businesses need an internal system to replace manual processes. Others need a customer-facing platform, a mobile application or a complete digital product. Our software development and services cover different stages and types of business requirements.
                        </p>
                    </div>

                    <div className="grid" style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '1.25rem',
                        alignItems: 'stretch'
                    }}>
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="service-card-item"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                style={{
                                    borderRadius: '20px',
                                    border: '1px solid rgba(226, 232, 240, 0.8)',
                                    padding: '1.25rem',
                                    background: '#ffffff',
                                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                                    overflow: 'hidden'
                                }}
                            >
                                {item.image && (
                                    <div style={{
                                        width: '100%',
                                        height: '125px',
                                        borderRadius: '14px',
                                        overflow: 'hidden',
                                        marginBottom: '1rem',
                                        background: '#f8fafc'
                                    }}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block',
                                                transition: 'transform 0.4s ease'
                                            }}
                                        />
                                    </div>
                                )}

                                <h3 className="service-card-title" style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                                    <RouterLink to={item.link}>
                                        {item.title}
                                    </RouterLink>
                                </h3>

                                <p className="service-card-desc" style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 400, lineHeight: 1.55, marginBottom: '1rem' }}>
                                    {item.desc}
                                </p>

                                <RouterLink
                                    to={item.link}
                                    className="service-card-link"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px',
                                        width: '100%',
                                        padding: '0.6rem 1.25rem',
                                        borderRadius: '50px',
                                        background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 60%, #CBD5E1 100%)',
                                        border: '1px solid #94A3B8',
                                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 3px 8px rgba(0, 0, 0, 0.12)',
                                        color: '#1F2937',
                                        fontSize: '0.9rem',
                                        fontWeight: 800,
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        marginTop: 'auto'
                                    }}
                                >
                                    Learn More <ArrowRight size={15} color="#1F2937" />
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

                <div className="bento-feature-grid max-w-1200">
                    <div className="bento-card bento-card-large" data-aos="fade-up">
                        <div className="bento-card-badge">
                            <Workflow size={24} />
                            <span>01</span>
                        </div>
                        <h3 className="bento-title">Designed Around Your Processes</h3>
                        <p className="bento-desc">
                            Instead of changing your workflow to fit a software product, the solution can be structured around your actual business requirements.
                        </p>
                        <div className="bento-feature-pills">
                            <span>Tailored Workflows</span>
                            <span>No Unnecessary Bloat</span>
                            <span>Custom Approvals</span>
                        </div>
                    </div>

                    <div className="bento-card bento-card-medium" data-aos="fade-up" data-aos-delay="100">
                        <div className="bento-card-badge accent-purple">
                            <Users size={24} />
                            <span>02</span>
                        </div>
                        <h3 className="bento-title">Built for Specific Users</h3>
                        <p className="bento-desc">
                            Different teams need different tools. Software can be designed around the people who will use it, from administrators and managers to operational teams and customers.
                        </p>
                    </div>

                    <div className="bento-card bento-card-medium" data-aos="fade-up" data-aos-delay="200">
                        <div className="bento-card-badge accent-blue">
                            <LinkIcon size={24} />
                            <span>03</span>
                        </div>
                        <h3 className="bento-title">Better Connected Systems</h3>
                        <p className="bento-desc">
                            Businesses often work with multiple applications that do not communicate effectively. Custom development can help create more connected workflows and applications.
                        </p>
                    </div>

                    <div className="bento-card bento-card-wide" data-aos="fade-up" data-aos-delay="150">
                        <div className="bento-card-badge accent-green">
                            <TrendingUp size={24} />
                            <span>04</span>
                        </div>
                        <div className="bento-wide-content">
                            <h3 className="bento-title">Room to Scale</h3>
                            <p className="bento-desc">
                                As business requirements change, software may need new functionality, integrations, users or workflows. A properly planned custom solution can be developed with future requirements in mind.
                            </p>
                        </div>
                    </div>

                    <div className="bento-card bento-card-highlight" data-aos="fade-up" data-aos-delay="250">
                        <div className="bento-card-badge accent-pink">
                            <Target size={24} />
                            <span>05</span>
                        </div>
                        <h3 className="bento-title">Focused on Business Problems</h3>
                        <p className="bento-desc">
                            The starting point should be the business problem, not the technology. We focus on understanding what the software needs to accomplish before defining the solution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 5 — Industries */}
            <section id="industries" style={{ padding: '6rem 5%', width: '100%', maxWidth: '100%' }} className="section-full">
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

                    <div className="borderless-industry-grid" style={{ marginBottom: '4rem' }}>
                        {[
                            {
                                title: "Healthcare Software",
                                desc: "Software solutions for healthcare-related workflows, operational management and digital processes.",
                                icon: <Activity size={26} />,
                                link: "/industries/healthcare/"
                            },
                            {
                                title: "Manufacturing Software",
                                desc: "Applications that can support production-related workflows, business operations, data management and process visibility.",
                                icon: <Factory size={26} />,
                                link: "/industries/manufacturing/"
                            },
                            {
                                title: "Retail Software",
                                desc: "Software for retail operations, customer-facing experiences, business workflows and connected processes.",
                                icon: <ShoppingBag size={26} />,
                                link: "/industries/retail/"
                            },
                            {
                                title: "Logistics Software",
                                desc: "Solutions designed around logistics workflows, operational coordination and information management.",
                                icon: <Truck size={26} />,
                                link: "/industries/logistics/"
                            },
                            {
                                title: "Education Software",
                                desc: "Digital applications that support education-related processes, administration and user interactions.",
                                icon: <GraduationCap size={26} />,
                                link: "/industries/education/"
                            },
                            {
                                title: "Construction Software",
                                desc: "Software solutions designed around construction-related workflows, project processes and operational requirements.",
                                icon: <HardHat size={26} />,
                                link: "/industries/construction/"
                            },
                            {
                                title: "Hospitality Software",
                                desc: "Applications that can support hospitality operations, customer interactions and business processes.",
                                icon: <Coffee size={26} />,
                                link: "/industries/hospitality/"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="borderless-industry-item"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className="borderless-industry-header" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '0.85rem' }}>
                                    <div className="borderless-industry-icon">
                                        {item.icon}
                                    </div>

                                    <h3 className="borderless-industry-title">
                                        <RouterLink to={item.link}>
                                            {item.title} <ArrowRight size={16} className="title-arrow" />
                                        </RouterLink>
                                    </h3>
                                </div>

                                <p className="borderless-industry-desc">
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

                <div className="process-pipeline-wrapper">
                    <div className="pipeline-connector-line"></div>
                    <div className="process-pipeline-grid">
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
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="pipeline-step-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="pipeline-badge-node">
                                    <span>{item.num}</span>
                                </div>

                                <div className="pipeline-card-content">
                                    <h3 className="pipeline-step-title">{item.step}</h3>
                                    <p className="pipeline-step-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="process-footer-note"
                    data-aos="fade-up"
                    style={{
                        maxWidth: '850px',
                        margin: '3.5rem auto 0',
                        padding: '1.5rem 2.2rem',
                        borderRadius: '20px',
                        background: '#FEF9C3',
                        borderLeft: '5px solid #FACC15',
                        borderTop: '1px solid rgba(250, 204, 21, 0.4)',
                        borderRight: '1px solid rgba(250, 204, 21, 0.4)',
                        borderBottom: '1px solid rgba(250, 204, 21, 0.4)',
                        boxShadow: '0 8px 25px rgba(250, 204, 21, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '18px'
                    }}
                >
                    <Target size={30} color="#EAB308" style={{ flexShrink: 0 }} />
                    <p style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--text-dark)',
                        margin: 0,
                        lineHeight: 1.6,
                        textAlign: 'left'
                    }}>
                        This approach keeps the development process connected to the business objective rather than treating software development as an isolated technical task.
                    </p>
                </div>
            </section>

            {/* Section 7 — Business Outcomes */}
            <section id="outcomes" style={{ padding: '6rem 5%', width: '100%', maxWidth: '100%' }} className="section-full">
                <div className="section-inner">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Business Impact</span>

                        <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                            Software That Supports <span className="gradient-text">Better Business Operations</span>
                        </h2>

                        <p style={{ maxWidth: '800px', margin: '0 auto 1.25rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                            The value of software is not simply the number of features it contains. A useful business application should help people work more effectively, make information easier to manage and reduce unnecessary operational complexity.
                        </p>

                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                            Depending on the project, custom software can help businesses:
                        </p>
                    </div>

                    <div className="impact-borderless-list" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                        gap: '1.5rem 3rem',
                        maxWidth: '1200px',
                        margin: '0 auto 4rem'
                    }}>
                        {[
                            { title: "Reduce dependence on manual processes", tag: "Efficiency", num: "01" },
                            { title: "Bring business information into more centralised systems", tag: "Centralisation", num: "02" },
                            { title: "Connect previously disconnected workflows", tag: "Integration", num: "03" },
                            { title: "Support growing operational requirements", tag: "Scalability", num: "04" },
                            { title: "Improve access to business information", tag: "Accessibility", num: "05" },
                            { title: "Create better digital experiences for customers and employees", tag: "UX & CX", num: "06" },
                            { title: "Replace outdated or difficult-to-maintain applications", tag: "Modernisation", num: "07" },
                            { title: "Establish a stronger foundation for future digital initiatives", tag: "Growth", num: "08" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="impact-row-item"
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={Math.floor(index / 2) * 100}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.25rem',
                                    padding: '1.2rem 1.5rem',
                                    borderRadius: '16px',
                                    background: '#FFFFFF',
                                    border: '1px solid rgba(209, 213, 219, 0.6)',
                                    borderBottom: '2px solid rgba(250, 204, 21, 0.4)',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '12px',
                                    background: '#FEF9C3',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#EAB308',
                                    fontWeight: 800,
                                    fontSize: '0.9rem',
                                    flexShrink: 0
                                }}>
                                    <CheckCircle2 size={22} color="#EAB308" />
                                </div>

                                <div style={{ flexGrow: 1 }}>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        letterSpacing: '1px',
                                        textTransform: 'uppercase',
                                        color: '#374151',
                                        display: 'block',
                                        marginBottom: '0.2rem'
                                    }}>
                                        {item.tag}
                                    </span>
                                    <p style={{
                                        fontSize: '1.05rem',
                                        fontWeight: 600,
                                        color: 'var(--text-dark)',
                                        margin: 0,
                                        lineHeight: 1.4
                                    }}>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            padding: '1.5rem 2rem',
                            borderRadius: '20px',
                            background: '#FFFFFF',
                            borderLeft: '5px solid #9CA3AF',
                            borderTop: '1px solid rgba(209, 213, 219, 0.6)',
                            borderRight: '1px solid rgba(209, 213, 219, 0.6)',
                            borderBottom: '1px solid rgba(209, 213, 219, 0.6)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        }}
                        data-aos="fade-up"
                    >
                        <ShieldAlert size={28} color="#4B5563" style={{ flexShrink: 0 }} />
                        <p style={{
                            fontSize: '1.05rem',
                            color: 'var(--text-dark)',
                            lineHeight: 1.6,
                            margin: 0,
                            fontWeight: 600,
                            fontStyle: 'normal'
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
                        fontSize: '1.05rem',
                        color: 'var(--text-dark)',
                        fontWeight: 600
                    }}>
                        Fly Towards Digital Innovation's stated strengths include technical expertise, experienced developers, end-to-end development and flexible engagement models.
                    </p>
                </div>

                <div className="why-us-floating-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem'
                }}>
                    {[
                        {
                            num: "01",
                            title: "Technical Expertise",
                            desc: "Software projects require both business understanding and technical execution. We approach development with attention to the requirements behind the application.",
                            icon: <Code size={24} />
                        },
                        {
                            num: "02",
                            title: "Experienced Development Team",
                            desc: "Our development approach is supported by developers working across software development requirements.",
                            icon: <Users size={24} />
                        },
                        {
                            num: "03",
                            title: "End-to-End Development",
                            desc: "From understanding requirements to developing the software, the focus is on providing an end-to-end development approach.",
                            icon: <Zap size={24} />
                        },
                        {
                            num: "04",
                            title: "Flexible Engagement",
                            desc: "Different businesses have different project requirements and engagement needs. Our strategy includes flexible engagement models as a core strength.",
                            icon: <Handshake size={24} />
                        }
                    ].map((strength, index) => (
                        <div
                            key={index}
                            className="why-us-floating-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '24px',
                                padding: '2.2rem 1.8rem',
                                border: '1px solid rgba(209, 213, 219, 0.7)',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.35s ease'
                            }}
                        >
                            <div className="why-us-card-header" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '1.5rem'
                            }}>
                                <div className="why-us-icon-wrapper" style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '16px',
                                    background: '#FEF9C3',
                                    border: '1px solid rgba(250, 204, 21, 0.5)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#1F2937',
                                    fontWeight: 700
                                }}>
                                    {strength.icon}
                                </div>
                                <span className="why-us-card-num" style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 900,
                                    color: '#D1D5DB',
                                    letterSpacing: '1px'
                                }}>{strength.num}</span>
                            </div>

                            <h3 className="why-us-card-title" style={{
                                fontSize: '1.3rem',
                                fontWeight: 800,
                                color: '#1F2937',
                                marginBottom: '1rem',
                                lineHeight: 1.3
                            }}>
                                {strength.title}
                            </h3>

                            <p className="why-us-card-desc" style={{
                                fontSize: '0.95rem',
                                color: '#6B7280',
                                lineHeight: 1.6,
                                margin: 0
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
            <section id="discovery" style={{ padding: '6rem 5%', width: '100%', maxWidth: '100%', position: 'relative', overflow: 'hidden' }}>
                {/* Background Subtle Radial Glow */}
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    right: '5%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(0, 136, 255, 0.06) 0%, rgba(255, 255, 255, 0) 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div className="max-w-1200" style={{ margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div className="grid-2" style={{ alignItems: 'flex-start', gap: '4.5rem' }}>
                        {/* Left Side: Headline & Intro */}
                        <div data-aos="fade-right">
                            <span className="section-tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
                                Agency Discovery
                            </span>

                            <h2 style={{
                                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                                marginBottom: '1.5rem',
                                lineHeight: 1.25,
                                fontWeight: 800,
                                color: 'var(--text-dark)'
                            }}>
                                Looking for a <span className="gradient-text">Custom Software Development Agency?</span>
                            </h2>

                            <p style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-muted)',
                                marginBottom: '1.75rem',
                                lineHeight: 1.75
                            }}>
                                If your current software no longer fits the way your business operates, or if you are starting a new digital product or internal application, the first step is understanding what you actually need to build.
                            </p>

                            <div style={{
                                padding: '1.25rem 1.5rem',
                                background: '#FEF9C3',
                                borderLeft: '4px solid #FACC15',
                                borderRadius: '0 16px 16px 0',
                                marginBottom: '2.5rem'
                            }}>
                                <p style={{
                                    fontSize: '1.05rem',
                                    color: 'var(--text-dark)',
                                    fontWeight: 600,
                                    margin: 0,
                                    lineHeight: 1.5
                                }}>
                                    You do not need to have every technical detail defined before starting the conversation.
                                </p>
                            </div>

                            <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', borderRadius: '50px' }}>
                                Discuss Your Requirements <ArrowRight size={18} />
                            </RouterLink>
                        </div>

                        {/* Right Side: Specifications & Checklist */}
                        <div data-aos="fade-left">
                            <div style={{ marginBottom: '1.75rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: 'var(--text-dark)',
                                    marginBottom: '0.4rem'
                                }}>
                                    You may already have a detailed specification.
                                </h3>
                                <p style={{
                                    fontSize: '1.05rem',
                                    color: '#EAB308',
                                    fontWeight: 600,
                                    margin: 0
                                }}>
                                    Or you may simply know that:
                                </p>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '1rem'
                            }}>
                                {[
                                    "A manual process needs to be automated.",
                                    "Several systems need to work together.",
                                    "An existing application needs to be modernised.",
                                    "Your business needs a software platform built around a specific workflow.",
                                    "A new SaaS or digital product needs to be developed.",
                                    "Your team needs a web or mobile application for a specific business requirement."
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '14px',
                                            padding: '1.1rem 1.4rem',
                                            background: '#ffffff',
                                            border: '1px solid rgba(15, 23, 42, 0.08)',
                                            borderRadius: '16px',
                                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        className="discovery-item-card"
                                    >
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            background: '#FEF9C3',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <CheckCircle2
                                                size={18}
                                                color="#EAB308"
                                            />
                                        </div>

                                        <span style={{
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            color: 'var(--text-dark)',
                                            lineHeight: 1.4
                                        }}>
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9.5 — Resources & Case Studies Internal Hub */}
            <section id="resources-hub" style={{ padding: '5rem 5%', background: 'transparent' }}>
                <div className="max-w-1200" style={{ margin: '0 auto', textAlign: 'center' }}>
                    <span className="section-tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>Resources & Case Studies</span>
                    <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        Explore Our <RouterLink to="/blog" style={{ color: '#EAB308', textDecoration: 'none' }}>Case Studies</RouterLink> & Insights
                    </h3>
                    <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                        Learn how we help organizations solve complex technical challenges. Read our latest <RouterLink to="/blog" style={{ color: '#EAB308', fontWeight: 700, textDecoration: 'none' }}>Case Studies</RouterLink> and explore expert articles on our <RouterLink to="/blog" style={{ color: '#EAB308', fontWeight: 700, textDecoration: 'none' }}>Software Development Blog</RouterLink>. Ready to discuss your business requirements? Get in touch with our team via <RouterLink to="/contact" style={{ color: '#EAB308', fontWeight: 700, textDecoration: 'none' }}>Contact</RouterLink>.
                    </p>
                    <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <RouterLink to="/blog" className="btn btn-outline" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem', fontWeight: 700 }}>
                            Case Studies <ArrowRight size={16} />
                        </RouterLink>
                        <RouterLink to="/blog" className="btn btn-outline" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem', fontWeight: 700 }}>
                            Software Development Blog <ArrowRight size={16} />
                        </RouterLink>
                        <RouterLink to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem', fontWeight: 700 }}>
                            Contact <ArrowRight size={16} />
                        </RouterLink>
                    </div>
                </div>
            </section>

            {/* Section 10 — FAQs */}
            <section id="faq" style={{ padding: '6rem 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
                    {faqs.map((faq, idx) => {
                        const isOpen = activeFaq === idx;

                        return (
                            <div
                                key={idx}
                                style={{
                                    borderBottom: '1px solid var(--border)',
                                    padding: '1.5rem 0',
                                    cursor: 'pointer',
                                    opacity: 1,
                                    visibility: 'visible'
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
                                        fontWeight: 800,
                                        margin: 0,
                                        color: isOpen ? '#B45309' : '#1F2937',
                                        transition: 'color 0.3s ease',
                                        textAlign: 'left'
                                    }}>
                                        {faq.q}
                                    </h3>

                                    <div style={{
                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease',
                                        color: isOpen ? '#B45309' : '#6B7280'
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

            {/* Section 11 — Final CTA Modern Redesign */}
            <section id="contact-cta" style={{ padding: '6rem 8%', position: 'relative', overflow: 'hidden' }}>
                <div
                    className="max-w-1200"
                    data-aos="fade-up"
                    style={{
                        margin: '0 auto',
                        textAlign: 'center',
                        position: 'relative'
                    }}
                >
                    {/* Glowing background accent aura */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '60%',
                        height: '70%',
                        background: 'radial-gradient(circle, rgba(0, 136, 255, 0.08) 0%, rgba(255, 0, 122, 0.04) 50%, transparent 80%)',
                        filter: 'blur(50px)',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span
                            className="section-tag"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                padding: '0.45rem 1.25rem',
                                borderRadius: '99px',
                                background: '#FEF9C3',
                                border: '1px solid rgba(250, 204, 21, 0.5)',
                                color: '#1F2937',
                                fontSize: '0.85rem',
                                fontWeight: 800,
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase'
                            }}
                        >
                            <Send size={15} color="#EAB308" style={{ transform: 'rotate(-20deg)', transformOrigin: 'center' }} /> CONTACT US
                        </span>

                        <h2 style={{
                            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                            fontWeight: 800,
                            color: 'var(--text-dark)',
                            marginBottom: '1.75rem',
                            lineHeight: 1.2
                        }}>
                            Let's Discuss What Your Business <span className="gradient-text">Needs to Build</span>
                        </h2>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem',
                            marginBottom: '3.2rem',
                            maxWidth: '850px',
                            marginInline: 'auto'
                        }}>
                            <p style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: 'var(--text-dark)',
                                margin: 0,
                                lineHeight: 1.5
                            }}>
                                The right software starts with the right understanding of the problem.
                            </p>

                            <p style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-muted)',
                                margin: 0,
                                lineHeight: 1.8
                            }}>
                                Whether you need to automate an internal process, replace an outdated application, connect multiple systems, build a SaaS product or develop a business-specific web or mobile application, start by telling us what you are trying to achieve.
                            </p>

                            <p style={{
                                fontSize: '1.08rem',
                                color: '#EAB308',
                                margin: 0,
                                lineHeight: 1.7,
                                fontWeight: 600
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
                                    padding: '1.15rem 2.8rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontSize: '1.05rem',
                                    boxShadow: '0 10px 30px rgba(0, 136, 255, 0.3)'
                                }}
                            >
                                Discuss Your Software Requirement <ArrowRight size={20} />
                            </RouterLink>

                            <RouterLink
                                to="/contact"
                                className="btn btn-outline"
                                style={{
                                    padding: '1.15rem 2.5rem',
                                    fontSize: '1.05rem',
                                    borderColor: '#cbd5e1',
                                    color: 'var(--text-dark)'
                                }}
                            >
                                Contact Fly Towards Digital Innovation
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </section>
                </div>
            </div>
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