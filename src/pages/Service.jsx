import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Monitor, 
    Smartphone, 
    MessageCircle, 
    BarChart, 
    Globe, 
    Palette, 
    ArrowRight, 
    Zap, 
    Lightbulb, 
    Target, 
    Rocket, 
    CheckCircle2,
    Code,
    Layers,
    Wrench,
    Users,
    Database,
    Cloud,
    Cpu,
    Settings,
    FileText,
    Activity,
    ShoppingBag,
    Truck,
    BookOpen,
    Building,
    DollarSign,
    Coffee,
    ChevronDown,
    Compass,
    Shield,
    Landmark
} from 'lucide-react';

const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Software Development Services | Fly Towards Digital Innovation";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content",
            "Fly Towards provides software development services designed around your business needs. Custom software, enterprise applications, SaaS, mobile/web apps, and maintenance.");

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content",
            "Software Development Services, Custom Software Development, Enterprise Software, Web App Development, SaaS Development");

        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "index, follow");

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href",
            "https://flytowardsdigitalinnovation.com/service");

    }, []);

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const coreServices = [
        {
            title: "Custom Software Development",
            desc: "Off-the-shelf software may not always fit the way a business works. Custom software can be designed around specific workflows, operational requirements and business processes.",
            extraDesc: "Our custom software development services are suitable for organisations that need software tailored to their processes rather than having to redesign their operations around a generic product.",
            bulletTitle: "Useful for:",
            bullets: [
                "Business-specific applications",
                "Workflow management",
                "Internal business systems",
                "Process automation",
                "Custom customer or employee portals",
                "Software integrations"
            ],
            link: "/services/custom-software-development/",
            icon: <Code size={40} color="var(--primary)" />,
            color: "0, 242, 255"
        },
        {
            title: "Enterprise Software Development",
            desc: "Growing organisations often need software capable of supporting complex operations, multiple teams and interconnected business processes.",
            extraDesc: "Enterprise software development focuses on creating applications that address broader organisational requirements while supporting future expansion.",
            bulletTitle: "Potential use cases include:",
            bullets: [
                "Enterprise applications",
                "Operational management systems",
                "Business process platforms",
                "Department-level applications",
                "Integrated business systems"
            ],
            link: "/services/enterprise-software-development/",
            icon: <Layers size={40} color="var(--secondary)" />,
            color: "255, 0, 122"
        },
        {
            title: "Web Application Development",
            desc: "Web applications can provide businesses with accessible software experiences through a browser while supporting internal teams, customers or partners.",
            extraDesc: "Our web application development service can be used for business portals, customer-facing applications, workflow systems and other browser-based applications.",
            link: "/services/web-application-development/",
            icon: <Globe size={40} color="var(--accent)" />,
            color: "157, 0, 255"
        },
        {
            title: "Mobile App Development",
            desc: "Mobile applications can help businesses provide services, manage workflows or engage with customers through mobile devices.",
            extraDesc: "Depending on the requirement, a mobile application may support customer interaction, employee operations, service delivery or a specific business process.",
            link: "/services/mobile-app-development/",
            icon: <Smartphone size={40} color="var(--primary)" />,
            color: "0, 242, 255"
        },
        {
            title: "SaaS Development",
            desc: "Businesses building software products for multiple users need an approach that considers the product, users, workflows and ongoing operation of the application.",
            extraDesc: "SaaS development can support organisations looking to create software products delivered as an online service.",
            link: "/services/saas-development/",
            icon: <Cloud size={40} color="var(--secondary)" />,
            color: "255, 0, 122"
        },
        {
            title: "Software Maintenance and Support",
            desc: "Software development does not end when an application is launched. Applications may require updates, fixes, improvements and ongoing technical support as business requirements change.",
            extraDesc: "Our software maintenance services can support ongoing application needs and help organisations manage software after initial development.",
            bulletTitle: "Maintenance may include:",
            bullets: [
                "Application updates",
                "Bug fixing",
                "Software enhancements",
                "Ongoing technical support",
                "Performance improvements",
                "Compatibility updates"
            ],
            link: "/services/software-maintenance-support/",
            icon: <Wrench size={40} color="var(--accent)" />,
            color: "157, 0, 255"
        }
    ];

    const specializedServices = [
        {
            title: "CRM Development",
            desc: "Custom CRM development can help businesses manage customer information, sales activities and related workflows through software designed around their processes.",
            link: "/services/crm-development/",
            icon: <Users size={32} color="var(--primary)" />,
            color: "0, 242, 255"
        },
        {
            title: "ERP Development",
            desc: "ERP-oriented software can bring multiple business processes into a connected application environment. Depending on the organisation's requirements, ERP development may support areas such as operations, finance, inventory or other internal workflows.",
            link: "/services/erp-development/",
            icon: <Database size={32} color="var(--secondary)" />,
            color: "255, 0, 122"
        },
        {
            title: "API Development",
            desc: "APIs can allow applications and systems to exchange information and work together. API development and integration can be useful when a business needs to connect existing applications, external platforms or newly developed software.",
            link: "/services/api-development/",
            icon: <Zap size={32} color="var(--accent)" />,
            color: "157, 0, 255"
        },
        {
            title: "Cloud Application Development",
            desc: "Cloud-based applications can support accessible, scalable software environments for organisations with distributed users and evolving operational requirements.",
            link: "/services/cloud-application-development/",
            icon: <Cloud size={32} color="var(--primary)" />,
            color: "0, 242, 255"
        },
        {
            title: "AI Software Development",
            desc: "AI adoption is creating new opportunities for businesses to improve software capabilities and automate selected processes. AI software development can be considered where intelligent functionality has a clear business purpose and can be integrated into an appropriate software solution.",
            link: "/services/ai-software-development/",
            icon: <Cpu size={32} color="var(--secondary)" />,
            color: "255, 0, 122"
        },
        {
            title: "Business Process Automation",
            desc: "Manual and repetitive processes can consume employee time and create unnecessary operational work. Business process automation focuses on converting suitable workflows into software-supported processes that reduce repetitive manual activity and improve process consistency.",
            link: "/services/business-process-automation/",
            icon: <Settings size={32} color="var(--accent)" />,
            color: "157, 0, 255"
        },
        {
            title: "Software Consulting",
            desc: "Before development begins, businesses may need help defining what should be built, how existing systems should be approached and what solution best matches the requirement. Software consulting can help clarify the project scope, technical direction and development requirements before implementation.",
            link: "/services/software-consulting/",
            icon: <FileText size={32} color="var(--primary)" />,
            color: "0, 242, 255"
        },
        {
            title: "Software Modernization",
            desc: "Older software can become difficult to maintain, integrate or adapt as business requirements change. Software modernization focuses on improving or transforming legacy applications so businesses can move toward a more suitable application environment.",
            link: "/services/software-modernization/",
            icon: <Rocket size={32} color="var(--secondary)" />,
            color: "255, 0, 122"
        },
        {
            title: "UI/UX Design",
            desc: "Software needs to be understandable and usable as well as technically functional. UI/UX design focuses on the interface, user experience, navigation and interaction patterns that shape how users work with an application.",
            link: "/services/ui-ux-design/",
            icon: <Palette size={32} color="var(--accent)" />,
            color: "157, 0, 255"
        }
    ];

    const industries = [
        { name: "Manufacturing Software", link: "/industries/manufacturing/", icon: <Settings size={24} /> },
        { name: "Healthcare Software", link: "/industries/healthcare/", icon: <Activity size={24} /> },
        { name: "Education Software", link: "/industries/education/", icon: <BookOpen size={24} /> },
        { name: "Construction Software", link: "/industries/construction/", icon: <Building size={24} /> },
        { name: "Retail Software", link: "/industries/retail/", icon: <ShoppingBag size={24} /> },
        { name: "Finance Software", link: "/industries/finance/", icon: <DollarSign size={24} /> },
        { name: "Travel Software", link: "/industries/travel/", icon: <Compass size={24} /> },
        { name: "Hospitality Software", link: "/industries/hospitality/", icon: <Coffee size={24} /> },
        { name: "Insurance Software", link: "/industries/insurance/", icon: <Shield size={24} /> },
        { name: "Government Software", link: "/industries/government/", icon: <Landmark size={24} /> }
    ];

    const processes = [
        {
            step: "01",
            title: "Understand the Business Requirement",
            desc: "We first need to understand what the software is expected to accomplish. This includes identifying the business problem, users, workflows, existing systems and the outcomes the software needs to support.",
            icon: <Target size={24} />
        },
        {
            step: "02",
            title: "Define the Solution",
            desc: "Once the requirement is understood, the software scope and solution approach can be defined. This helps establish what needs to be developed and which functions are essential to the project.",
            icon: <Lightbulb size={24} />
        },
        {
            step: "03",
            title: "Design and Develop",
            desc: "The development stage turns the agreed requirements into the software product. Depending on the project, this can involve application development, integrations, user interfaces, databases and other components required by the solution.",
            icon: <Code size={24} />
        },
        {
            step: "04",
            title: "Test and Refine",
            desc: "Software needs to be evaluated before release. Testing helps identify issues and provides an opportunity to refine functionality and user experience before deployment.",
            icon: <CheckCircle2 size={24} />
        },
        {
            step: "05",
            title: "Launch and Support",
            desc: "After deployment, software may continue to require maintenance, enhancements and technical support. This is why software maintenance services are an important part of the wider development lifecycle.",
            icon: <Rocket size={24} />
        }
    ];

    const faqs = [
        {
            q: "What are software development services?",
            a: "Software development services cover the planning, design, development, testing, deployment and ongoing improvement of software applications. The appropriate service depends on the business requirement and type of software being developed."
        },
        {
            q: "When should a business consider custom software development?",
            a: "Custom software can be considered when existing products do not adequately support a business's workflows, integrations or functional requirements. The decision should be based on a genuine business need rather than simply choosing custom development by default."
        },
        {
            q: "Do you provide software maintenance services after development?",
            a: "Software maintenance is part of the service portfolio. Maintenance can include application updates, bug fixing, enhancements, technical support and other ongoing software requirements."
        },
        {
            q: "Can you develop software for different industries?",
            a: "The project strategy identifies healthcare, manufacturing, retail, logistics, education, construction, finance and hospitality among the target industries. Industry-specific pages should explain the particular challenges and software requirements of each sector."
        },
        {
            q: "How do I choose the right software development service?",
            a: "Start with the business problem, existing systems, users, required functionality and desired outcome. From there, the appropriate service—such as custom development, web application development, SaaS, mobile development, automation, modernization or maintenance—can be identified."
        }
    ];

    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', fontFamily: "'Outfit', sans-serif", color: '#0f172a', overflowX: 'hidden' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&display=swap');
                
                .gradient-text {
                    background: linear-gradient(135deg, #00f2ff 0%, #ff007a 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
             `}</style>

             {/* Hero Section */}
            <section className="hero" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3rem', padding: '140px 8% 80px' }}>
                <div style={{ textAlign: 'center', width: '100%' }} data-aos="fade-up">
                    <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                        <Zap size={18} /> Our Services
                    </span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', marginBottom: '1.25rem', lineHeight: 1.1, textAlign: 'center' }}>
                        Software Development Services for <span className="gradient-text">Business Needs</span>
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, opacity: 0.9, lineHeight: 1.5, maxWidth: '800px', margin: '0 auto' }}>
                        Software Development Services Built Around Your Business
                    </h2>
                </div>

                <div className="grid-2" style={{ width: '100%', alignItems: 'center' }}>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '650px' }}>
                            Software requirements are rarely the same from one business to another. Some organisations need a new application to replace manual processes. Others need to connect existing systems, modernize an older application, launch a SaaS product or maintain software that has become important to daily operations.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#services-list" className="btn btn-primary">
                                Explore Services <ArrowRight size={20} />
                            </a>
                            <Link to="/contact/" className="btn btn-outline" style={{ border: '1px solid var(--border)' }}>Discuss Your Requirement</Link>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px' }}>
                            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60" alt="Software Development Services" className="floating-img" style={{ borderRadius: '30px', width: '100%', maxWidth: '650px' }} />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section style={{ padding: '80px 8% 40px', background: 'rgba(0, 242, 255, 0.02)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} data-aos="fade-up">
                    <p style={{ fontSize: '1.3rem', lineHeight: 1.8, color: 'var(--text-dark)', fontWeight: 500, marginBottom: '1.5rem' }}>
                        Fly Towards Digital Innovation provides software development services designed around these different business requirements. Our service portfolio covers custom software development, enterprise applications, SaaS, web and mobile applications, software maintenance and other specialised development needs.
                    </p>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                        The focus is not simply on building software. It is on understanding the business problem, defining the right solution and developing software that can support the way your organisation operates.
                    </p>
                </div>
            </section>

            {/* Services List Section */}
            <section id="services-list" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Core Offerings</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our Software <span className="gradient-text">Development Services</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Our software development and services portfolio covers different stages of a software product's lifecycle, from initial development to ongoing maintenance and improvement.
                    </p>
                </div>

                <div className="grid">
                    {coreServices.map((service, idx) => (
                        <div
                            key={idx}
                            className="card"
                            data-aos="fade-up"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: '0.4s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = `0 30px 60px rgba(${service.color}, 0.12)`;
                                e.currentTarget.style.borderColor = `rgba(${service.color}, 0.3)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                            }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                background: `linear-gradient(135deg, rgba(${service.color}, 0.1) 0%, transparent 100%)`,
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem',
                                border: `1px solid rgba(${service.color}, 0.2)`
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 800 }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{service.desc}</p>
                            {service.extraDesc && (
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                    {service.extraDesc}
                                </p>
                            )}
                            {service.bullets && (
                                <div style={{ marginBottom: '2rem' }}>
                                    <h5 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                                        {service.bulletTitle}
                                    </h5>
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {service.bullets.map((b, bIdx) => (
                                            <li key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                                <span style={{ color: `rgba(${service.color}, 1)`, fontWeight: 'bold' }}>✓</span> {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <Link to={service.link} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: `rgba(${service.color}, 1)`,
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '1rem',
                                marginTop: 'auto',
                                width: 'fit-content'
                            }}>
                                Explore {service.title} <ArrowRight size={18} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Specialized Services Sub-Section */}
                <div style={{ textAlign: 'center', marginBottom: '5rem', marginTop: '7rem' }} data-aos="fade-up">
                    <span className="section-tag">Specialized Expertise</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        Specialized <span className="gradient-text">Software Development Services</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Different software requirements call for different approaches. Alongside our core development services, our portfolio includes specialised services for particular business and technical needs.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {specializedServices.map((service, idx) => (
                        <div
                            key={idx}
                            className="card"
                            data-aos="fade-up"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '2.5rem 2rem',
                                borderRadius: '25px',
                                transition: '0.4s ease',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = `0 20px 40px rgba(${service.color}, 0.10)`;
                                e.currentTarget.style.borderColor = `rgba(${service.color}, 0.3)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                background: `linear-gradient(135deg, rgba(${service.color}, 0.1) 0%, transparent 100%)`,
                                borderRadius: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                border: `1px solid rgba(${service.color}, 0.2)`
                            }}>
                                {service.icon}
                            </div>
                            <h4 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                                {service.title}
                            </h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                {service.desc}
                            </p>
                            <Link to={service.link} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                color: `rgba(${service.color}, 1)`,
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                marginTop: 'auto',
                                width: 'fit-content'
                            }}>
                                Explore {service.title} <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Industry Solutions Section */}
            <section style={{ background: 'rgba(0, 242, 255, 0.02)', padding: '100px 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Industry Solutions</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        Software Solutions for <span className="gradient-text">Different Business Needs</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', marginBottom: '2.5rem' }}>
                        Software requirements can vary significantly between industries and organisations.
                        For this reason, the software development process should begin with understanding the organisation rather than starting with a fixed application template.
                    </p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '0 auto', marginBottom: '4rem' }} data-aos="fade-up">
                    <div style={{
                        background: 'white',
                        border: '1px solid var(--border)',
                        padding: '2.5rem',
                        borderRadius: '30px',
                        boxShadow: 'var(--shadow)',
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        color: 'var(--text-muted)'
                    }}>
                        <p style={{ marginBottom: '1rem' }}>
                            Fly Towards Digital Innovation's strategy identifies sectors including healthcare, manufacturing, retail, education, construction, finance and hospitality as key industry areas.
                        </p>
                        <p>
                            A software solution for a manufacturing organisation may focus on operational workflows, while a healthcare application may require a different set of business processes and user requirements.
                        </p>
                    </div>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }} data-aos="fade-up">
                    {industries.map((industry, idx) => (
                        <Link
                            key={idx}
                            to={industry.link}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.5rem',
                                background: 'white',
                                border: '1px solid var(--border)',
                                borderRadius: '20px',
                                textDecoration: 'none',
                                color: 'var(--text-dark)',
                                fontWeight: 700,
                                boxShadow: 'var(--shadow)',
                                transition: '0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--secondary)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 0, 122, 0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                            }}
                        >
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '12px',
                                background: 'rgba(255, 0, 122, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--secondary)',
                                flexShrink: 0
                            }}>
                                {industry.icon}
                            </div>
                            <span style={{ fontSize: '0.95rem' }}>{industry.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Our Process Section */}
            <section style={{ background: 'rgba(0, 242, 255, 0.01)', padding: '100px 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">How We Work</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        How We Approach <span className="gradient-text">Software Development</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        We follow a systematic, business-centric methodology to ensure that we deliver software that solves real problems.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    {processes.map((process, idx) => (
                        <div key={idx} className="process-card" style={{
                            padding: '3rem 2rem',
                            borderRadius: '30px',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow)',
                            position: 'relative',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <h4 style={{ 
                                position: 'absolute', top: '1rem', right: '1.5rem', 
                                fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-dark)', opacity: 0.05, 
                                fontFamily: 'Outfit' 
                            }}>
                                {process.step}
                            </h4>
                            <div style={{
                                width: '60px', height: '60px',
                                background: 'var(--gradient-primary)',
                                color: 'white',
                                borderRadius: '20px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.5rem',
                                flexShrink: 0
                            }}>
                                {process.icon}
                            </div>
                            <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', fontWeight: 800 }}>{process.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem', marginTop: 'auto' }}>{process.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Custom Software Section */}
            <section style={{ background: 'rgba(255, 0, 122, 0.01)', padding: '100px 8%' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag">Custom Advantage</span>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Why Businesses Choose a <span className="gradient-text">Custom Software Approach</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                            Businesses may consider custom software when existing products cannot adequately support their processes or when they need functionality designed around a particular business model.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                            The right approach depends on the business requirement. Custom development should be considered because it solves a genuine business problem, not simply because it is technically possible.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }} data-aos="fade-left">
                        {[
                            "Address specific operational workflows",
                            "Connect business applications",
                            "Automate suitable manual processes",
                            "Support changing business requirements",
                            "Create software around defined user needs",
                            "Build a foundation for future enhancements"
                        ].map((benefit, idx) => (
                            <div key={idx} style={{
                                padding: '1.5rem 2rem',
                                background: 'white',
                                border: '1px solid var(--border)',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                boxShadow: 'var(--shadow)',
                                transition: '0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                            >
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: 'var(--gradient-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    flexShrink: 0
                                }}>
                                    <CheckCircle2 size={18} />
                                </div>
                                <span style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-dark)' }}>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maintenance & Reliability Section */}
            <section style={{ background: 'rgba(157, 0, 255, 0.01)', padding: '100px 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Long-Term Growth</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        Software Maintenance for <span className="gradient-text">Long-Term Reliability</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        Keeping software functional and relevant is critical once it becomes central to your daily business operations.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))' }}>
                    <div className="card" data-aos="fade-right" style={{ padding: '3.5rem' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Settings color="var(--primary)" size={28} /> Ongoing Adaptability
                        </h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            Once software becomes part of daily business operations, keeping it functional and relevant becomes important. Software maintenance services can help organisations address application issues, introduce enhancements and respond to changing requirements after launch.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Maintenance requirements can differ depending on the application, its users, integrations and business importance.
                        </p>
                    </div>

                    <div className="card" data-aos="fade-left" style={{ padding: '3.5rem', background: 'var(--text-dark)', color: 'white' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Zap color="var(--secondary)" size={28} /> Longer-Term Strategy
                        </h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                            For organisations relying on custom applications, ongoing support can form part of a longer-term software strategy rather than treating development as a one-time project.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                            This ensures that system performance does not degrade, compatibility is maintained across platform updates, and new business capabilities can be built seamlessly on top of a healthy code foundation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <section style={{ padding: '80px 8%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Decision Guide</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        Choose the Right Software Service
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Not every software project needs the same development approach. Use this quick guide to find what matches your needs.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }} data-aos="fade-up">
                    {[
                        {
                            condition: "Need a business-specific application?",
                            recommendation: "Custom software development may be appropriate.",
                            link: "/services/custom-software-development/",
                            tag: "Custom Dev"
                        },
                        {
                            condition: "Building a multi-tenant software product?",
                            recommendation: "SaaS development may be a better fit.",
                            link: "/services/saas-development/",
                            tag: "SaaS Dev"
                        },
                        {
                            condition: "Existing systems are disconnected?",
                            recommendation: "API development or integration may be required.",
                            link: "/services/api-development/",
                            tag: "API & Integration"
                        },
                        {
                            condition: "Older application is difficult to maintain?",
                            recommendation: "Software modernization may be worth considering.",
                            link: "/services/software-modernization/",
                            tag: "Modernization"
                        },
                        {
                            condition: "Application is already operational?",
                            recommendation: "Software maintenance and support may be the priority.",
                            link: "/services/software-maintenance-support/",
                            tag: "Maintenance"
                        }
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            background: '#f8fafc',
                            border: '1px solid var(--border)',
                            padding: '2.5rem 2rem',
                            borderRadius: '25px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: '0.3s ease',
                            position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.borderColor = 'var(--primary)';
                            e.currentTarget.style.background = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.background = '#f8fafc';
                        }}
                        >
                            <div>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    background: 'var(--gradient-primary)',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '50px',
                                    textTransform: 'uppercase',
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '2rem'
                                }}>
                                    {item.tag}
                                </span>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '0.5rem', color: 'var(--text-dark)' }}>
                                    {item.condition}
                                </h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    {item.recommendation}
                                </p>
                            </div>
                            <Link to={item.link} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontWeight: 700,
                                color: 'var(--secondary)',
                                textDecoration: 'none',
                                fontSize: '0.95rem'
                            }}>
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '3.5rem' }} data-aos="fade-up">
                    <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                        💡 The first step is understanding the business requirement and selecting the service that matches it.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '80px 8%', background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Got Questions?</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
                    {faqs.map((faq, idx) => {
                        const isOpen = openFaq === idx;
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
                                        transition: 'color 0.3s ease'
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
                                        marginBottom: '0.5rem'
                                    }}>
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Bottom CTA */}
            <section style={{ padding: '80px 8% 120px' }}>
                <div className="cta-card" data-aos="zoom-in" style={{
                    background: 'var(--text-dark)', color: 'white',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                    padding: '6rem 3rem'
                }}>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 800, color: 'white' }}>
                        Discuss Your <span style={{ color: 'var(--primary)' }}>Software Requirement</span>
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '750px', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                        Have a software requirement, an existing application that needs improvement, or a business process that could be better supported through software?
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '700px', marginBottom: '3rem', lineHeight: 1.7 }}>
                        Talk to Fly Towards Digital Innovation about your requirement. We can discuss the business problem, understand the software needs and determine which development service is most relevant to your project.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link to="/contact/" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Discuss Your Software Requirement <ArrowRight size={20} />
                        </Link>
                        <a href="#services-list" className="btn btn-outline" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                            Explore Our Services
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Service;