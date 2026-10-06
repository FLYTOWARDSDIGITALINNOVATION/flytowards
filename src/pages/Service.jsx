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
            bulletTitle: "Key Capabilities:",
            bullets: [
                "Business-specific applications",
                "Workflow management & automation",
                "Internal business systems",
                "Custom customer & employee portals",
                "Seamless software integrations"
            ],
            link: "/services/custom-software-development/",
            icon: <Code size={40} color="var(--primary)" />,
            color: "0, 242, 255"
        },
        {
            title: "Enterprise Software Development",
            desc: "Growing organisations often need software capable of supporting complex operations, multiple teams and interconnected business processes.",
            extraDesc: "Enterprise software development focuses on creating applications that address broader organisational requirements while supporting future expansion.",
            bulletTitle: "Potential Use Cases:",
            bullets: [
                "Enterprise application platforms",
                "Operational management systems",
                "Business process architecture",
                "Departmental workflow portals",
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
            bulletTitle: "Key Features & Solutions:",
            bullets: [
                "Responsive web applications",
                "Interactive customer portals",
                "Cloud-enabled web systems",
                "Browser-based operational tools",
                "Progressive web apps (PWA)"
            ],
            link: "/services/web-application-development/",
            icon: <Globe size={40} color="var(--accent)" />,
            color: "157, 0, 255"
        },
        {
            title: "Mobile App Development",
            desc: "Mobile applications can help businesses provide services, manage workflows or engage with customers through mobile devices effectively.",
            extraDesc: "Depending on the requirement, a mobile application may support customer interaction, employee operations, service delivery or a specific business process.",
            bulletTitle: "Key Mobile Solutions:",
            bullets: [
                "iOS & Android mobile apps",
                "Cross-platform applications",
                "Field team & operational apps",
                "Customer engagement platforms",
                "Real-time mobile dashboards"
            ],
            link: "/services/mobile-app-development/",
            icon: <Smartphone size={40} color="var(--primary)" />,
            color: "0, 242, 255"
        },
        {
            title: "SaaS Development",
            desc: "Businesses building software products for multiple users need an approach that considers the product, users, workflows and ongoing operations.",
            extraDesc: "SaaS development can support organisations looking to create software products delivered as an online service.",
            bulletTitle: "SaaS Focus Areas:",
            bullets: [
                "Multi-tenant SaaS architecture",
                "Subscription & billing systems",
                "Cloud-native product design",
                "Scalable user management",
                "API-first SaaS development"
            ],
            link: "/services/saas-development/",
            icon: <Cloud size={40} color="var(--secondary)" />,
            color: "255, 0, 122"
        },
        {
            title: "Software Maintenance and Support",
            desc: "Applications require updates, fixes, security improvements and ongoing technical support as business requirements evolve over time.",
            extraDesc: "Our software maintenance services can support ongoing application needs and help organisations manage software after initial development.",
            bulletTitle: "Maintenance Includes:",
            bullets: [
                "Regular application updates",
                "Bug fixes & issue resolution",
                "Feature enhancements",
                "Performance optimizations",
                "Security & compatibility patches"
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
        <main style={{ 
            position: 'relative', 
            overflowX: 'hidden', 
            background: '#E5E7EB', 
            minHeight: '100vh', 
            fontFamily: "'Outfit', sans-serif", 
            color: '#1F2937', 
            width: '100%', 
            maxWidth: '100%',
            margin: 0,
            padding: 0
        }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&display=swap');
                
                .svc-yellow-glow {
                    box-shadow: 0 10px 30px rgba(250, 204, 21, 0.25);
                }
                .full-bleed-yellow {
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 !important;
                    background-color: #FACC15 !important;
                    box-sizing: border-box !important;
                }
             `}</style>

             {/* Hero Section - Solid Yellow Full Bleed Banner */}
            <section className="full-bleed-yellow" style={{ width: '100%', padding: '140px 5% 80px', background: '#FACC15' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                    <div style={{ textAlign: 'center', width: '100%', marginBottom: '3rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15', display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                            <Zap size={18} color="#FACC15" /> Our Services
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', marginBottom: '1.25rem', lineHeight: 1.15, textAlign: 'center', color: '#1F2937', fontWeight: 900 }}>
                            Software Development Services for Business Needs
                        </h1>
                    </div>

                    <div className="grid-2" style={{ width: '100%', alignItems: 'center', gap: '3rem' }}>
                        <div data-aos="fade-right">
                            <p style={{ color: '#374151', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '650px', fontWeight: 500 }}>
                                Software requirements are rarely the same from one business to another. Some organisations need a new application to replace manual processes. Others need to connect existing systems, modernize an older application, launch a SaaS product or maintain software that has become important to daily operations.
                            </p>
                            
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <a href="#services-list" className="btn btn-primary" style={{ background: '#1F2937', color: '#FACC15', fontWeight: 800, padding: '1.1rem 2.25rem' }}>
                                    Explore Services <ArrowRight size={20} color="#FACC15" />
                                </a>
                                <Link to="/contact/" className="btn btn-outline" style={{ border: '2px solid #1F2937', color: '#1F2937', fontWeight: 800, padding: '1.1rem 2.25rem', background: 'rgba(31, 41, 55, 0.05)' }}>
                                    Discuss Your Requirement
                                </Link>
                            </div>
                        </div>

                        <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                            <div style={{ padding: '0.75rem', border: '2px solid #1F2937', borderRadius: '32px', background: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60" alt="Software Development Services" style={{ borderRadius: '24px', width: '100%', maxWidth: '650px', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section - Clean Open 2-Column Split Feature Statement */}
            <section style={{ padding: '80px 8%', background: '#E5E7EB', borderBottom: '1px solid #D1D5DB' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }} data-aos="fade-up">
                    <div style={{ borderLeft: '4px solid #1F2937', paddingLeft: '2rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', color: '#1F2937', display: 'inline-block', marginBottom: '0.75rem', background: '#FACC15', padding: '4px 12px', borderRadius: '20px' }}>
                            Our Strategic Focus
                        </span>
                        <h3 style={{ fontSize: '2rem', color: '#1F2937', fontWeight: 900, lineHeight: 1.3, margin: 0 }}>
                            Tailored Software Development Built Around Your Business Needs
                        </h3>
                    </div>
                    <div>
                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#1F2937', fontWeight: 700, marginBottom: '1rem' }}>
                            Fly Towards Digital Innovation provides software development services designed around these different business requirements. Our service portfolio covers custom software development, enterprise applications, SaaS, web and mobile applications, software maintenance and other specialised development needs.
                        </p>
                        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#4B5563', margin: 0, fontWeight: 500 }}>
                            The focus is not simply on building software. It is on understanding the business problem, defining the right solution and developing software that can support the way your organisation operates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section id="services-list" style={{ padding: '6rem 8%', background: '#E5E7EB' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Core Offerings</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900 }}>Our Software Development Services</h2>
                    <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '750px', margin: '0 auto', fontWeight: 500 }}>
                        Our software development and services portfolio covers different stages of a software product's lifecycle, from initial development to ongoing maintenance and improvement.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {coreServices.map((service, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '2rem 1.5rem',
                                borderLeft: '3px solid #1F2937',
                                background: 'transparent',
                                position: 'relative',
                                transition: 'all 0.3s ease-in-out',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(10px)';
                                e.currentTarget.style.borderLeftColor = '#FACC15';
                                const iconBox = e.currentTarget.querySelector('.svc-core-icon');
                                if (iconBox) {
                                    iconBox.style.transform = 'scale(1.15) rotate(6deg)';
                                    iconBox.style.background = '#1F2937';
                                    iconBox.style.color = '#FACC15';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.borderLeftColor = '#1F2937';
                                const iconBox = e.currentTarget.querySelector('.svc-core-icon');
                                if (iconBox) {
                                    iconBox.style.transform = 'none';
                                    iconBox.style.background = '#FEF9C3';
                                    iconBox.style.color = '#D97706';
                                }
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                                <div className="svc-core-icon" style={{
                                    width: '52px',
                                    height: '52px',
                                    background: '#FEF9C3',
                                    borderRadius: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #FDE047',
                                    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}>
                                    {service.icon}
                                </div>
                                <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#1F2937', letterSpacing: '1px' }}>
                                    // 0{idx + 1}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', fontWeight: 900, color: '#1F2937', lineHeight: 1.3 }}>{service.title}</h3>
                            <p style={{ color: '#4B5563', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.25rem', fontWeight: 500 }}>{service.desc}</p>
                            
                            {service.bullets && (
                                <div style={{ marginBottom: '1.5rem', borderLeft: '2px solid #FACC15', paddingLeft: '1rem' }}>
                                    <h5 style={{ fontWeight: 800, fontSize: '0.88rem', marginBottom: '0.5rem', color: '#1F2937', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        {service.bulletTitle}
                                    </h5>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        {service.bullets.map((b, bIdx) => (
                                            <li key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#374151', fontWeight: 600 }}>
                                                <span style={{ color: '#D97706', fontWeight: 900 }}>•</span> {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <Link to={service.link} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#1F2937',
                                textDecoration: 'none',
                                fontWeight: 800,
                                fontSize: '0.95rem',
                                marginTop: 'auto'
                            }}>
                                Explore Service <ArrowRight size={16} color="#D97706" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Clean Horizontal Divider Line */}
                <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '4rem auto 0' }} />

                {/* Specialized Services Sub-Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>Specialized Expertise</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900 }}>
                        Specialized Software Development Services
                    </h2>
                    <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '750px', margin: '0 auto', fontWeight: 500 }}>
                        Different software requirements call for different approaches. Alongside our core development services, our portfolio includes specialised services for particular business and technical needs.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {specializedServices.map((service, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '1.5rem 2rem',
                                borderRadius: '16px',
                                background: '#FFFFFF',
                                border: '1px solid #D1D5DB',
                                borderLeft: '5px solid #1F2937',
                                transition: 'all 0.35s ease-in-out',
                                cursor: 'pointer',
                                gap: '2rem',
                                flexWrap: 'wrap'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.015) translateX(6px)';
                                e.currentTarget.style.borderLeftColor = '#FACC15';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
                                const iconBox = e.currentTarget.querySelector('.svc-spec-icon');
                                if (iconBox) {
                                    iconBox.style.background = '#1F2937';
                                    iconBox.style.color = '#FACC15';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.borderLeftColor = '#1F2937';
                                e.currentTarget.style.boxShadow = 'none';
                                const iconBox = e.currentTarget.querySelector('.svc-spec-icon');
                                if (iconBox) {
                                    iconBox.style.background = '#FEF9C3';
                                    iconBox.style.color = '#1F2937';
                                }
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: '1 1 300px' }}>
                                <div className="svc-spec-icon" style={{
                                    width: '50px',
                                    height: '50px',
                                    background: '#FEF9C3',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.3s ease'
                                }}>
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1F2937', margin: '0 0 0.35rem 0' }}>
                                        {service.title}
                                    </h4>
                                    <p style={{ color: '#4B5563', fontSize: '0.94rem', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                                        {service.desc}
                                    </p>
                                </div>
                            </div>

                            <Link to={service.link} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: '#1F2937',
                                color: '#FACC15',
                                textDecoration: 'none',
                                fontWeight: 800,
                                fontSize: '0.88rem',
                                padding: '0.6rem 1.2rem',
                                borderRadius: '20px',
                                flexShrink: 0,
                                transition: 'all 0.3s ease'
                            }}>
                                Explore <ArrowRight size={15} color="#FACC15" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Clean Horizontal Divider Line */}
            <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

            {/* Industry Solutions Section */}
            <section style={{ padding: '6rem 8%', background: '#E5E7EB' }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>Industry Solutions</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900 }}>
                        Software Solutions for Different Business Needs
                    </h2>
                    <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '800px', margin: '0 auto', fontWeight: 500 }}>
                        Software requirements can vary significantly between industries and organisations.
                        For this reason, the software development process should begin with understanding the organisation rather than starting with a fixed application template.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    justifyContent: 'center',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }} data-aos="fade-up">
                    {industries.map((industry, idx) => (
                        <Link
                            key={idx}
                            to={industry.link}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.85rem',
                                padding: '0.9rem 1.6rem',
                                background: '#1F2937',
                                border: '1px solid rgba(250, 204, 21, 0.25)',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                color: '#FFFFFF',
                                fontWeight: 800,
                                fontSize: '0.98rem',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px) scale(1.04)';
                                e.currentTarget.style.background = '#111827';
                                e.currentTarget.style.borderColor = '#FACC15';
                                e.currentTarget.style.color = '#FACC15';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(250, 204, 21, 0.25)';
                                const iconBox = e.currentTarget.querySelector('.ind-chip-icon');
                                if (iconBox) {
                                    iconBox.style.transform = 'rotate(15deg) scale(1.2)';
                                    iconBox.style.color = '#FACC15';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.background = '#1F2937';
                                e.currentTarget.style.borderColor = 'rgba(250, 204, 21, 0.25)';
                                e.currentTarget.style.color = '#FFFFFF';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                                const iconBox = e.currentTarget.querySelector('.ind-chip-icon');
                                if (iconBox) {
                                    iconBox.style.transform = 'none';
                                    iconBox.style.color = '#FACC15';
                                }
                            }}
                        >
                            <span className="ind-chip-icon" style={{
                                color: '#FACC15',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'all 0.3s ease'
                            }}>
                                {industry.icon}
                            </span>
                            <span>{industry.name}</span>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FACC15', marginLeft: '4px' }}></span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Clean Horizontal Divider Line */}
            <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

            {/* Our Process Section - Clean Borderless Stepper Flow on Metallic Silver */}
            <section style={{ padding: '6rem 8%', background: '#E5E7EB' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>How We Work</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900 }}>
                        How We Approach Software Development
                    </h2>
                    <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '750px', margin: '0 auto', fontWeight: 500 }}>
                        We follow a systematic, business-centric methodology to ensure that we deliver software that solves real problems.
                    </p>
                </div>

                <div style={{ maxWidth: '1100px', margin: '0 auto' }} data-aos="fade-up">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2.5rem 1.75rem'
                    }}>
                        {processes.map((process, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    paddingLeft: '1rem',
                                    borderLeft: '2px dashed #9CA3AF',
                                    transition: 'all 0.3s ease-in-out',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.borderLeft = '2px solid #1F2937';
                                    const circle = e.currentTarget.querySelector('.proc-step-circle');
                                    if (circle) {
                                        circle.style.background = '#1F2937';
                                        circle.style.color = '#FACC15';
                                        circle.style.transform = 'scale(1.15)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.borderLeft = '2px dashed #9CA3AF';
                                    const circle = e.currentTarget.querySelector('.proc-step-circle');
                                    if (circle) {
                                        circle.style.background = '#FACC15';
                                        circle.style.color = '#1F2937';
                                        circle.style.transform = 'none';
                                    }
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <div className="proc-step-circle" style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: '#FACC15',
                                        color: '#1F2937',
                                        fontWeight: 900,
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        0{idx + 1}
                                    </div>
                                    <span style={{ color: '#D97706', display: 'flex' }}>
                                        {process.icon}
                                    </span>
                                </div>

                                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1F2937', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                                    {process.title}
                                </h3>

                                <p style={{ color: '#4B5563', lineHeight: 1.65, fontSize: '0.92rem', margin: 0, fontWeight: 500 }}>
                                    {process.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clean Horizontal Divider Line */}
            <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

            {/* Decision Guide Section */}
            <section style={{ padding: '6rem 8%', background: '#E5E7EB' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>Decision Guide</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900 }}>
                        Choose the Right Software Service
                    </h2>
                    <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '750px', margin: '0 auto', fontWeight: 500 }}>
                        Not every software project needs the same development approach. Use this quick guide to find what matches your needs.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }} data-aos="fade-up">
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
                            tag: "API Integration"
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
                            background: '#FFFFFF',
                            border: '1px solid #D1D5DB',
                            padding: '2rem 1.75rem',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: 'all 0.35s ease',
                            position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.borderColor = '#1F2937';
                            e.currentTarget.style.boxShadow = '0 12px 25px rgba(250, 204, 21, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.borderColor = '#D1D5DB';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        >
                            <div>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 900,
                                    background: '#1F2937',
                                    color: '#FACC15',
                                    padding: '4px 12px',
                                    borderRadius: '50px',
                                    textTransform: 'uppercase',
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '1.75rem'
                                }}>
                                    {item.tag}
                                </span>
                                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.75rem', marginTop: '0.5rem', color: '#1F2937' }}>
                                    {item.condition}
                                </h4>
                                <p style={{ color: '#4B5563', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 500 }}>
                                    {item.recommendation}
                                </p>
                            </div>
                            <Link to={item.link} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontWeight: 800,
                                color: '#1F2937',
                                textDecoration: 'none',
                                fontSize: '0.9rem'
                            }}>
                                Learn More <ArrowRight size={16} color="#D97706" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Clean Horizontal Divider Line */}
            <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

            {/* FAQ Section - 2-Column Card Grid */}
            <section style={{ padding: '6rem 8%', background: '#E5E7EB' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>Got Questions?</span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900 }}>
                        Frequently Asked Questions
                    </h2>
                </div>

                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }} data-aos="fade-up">
                    {faqs.map((faq, idx) => {
                        const isOpen = openFaq === idx;
                        return (
                            <div key={idx} style={{
                                padding: '1.25rem 0',
                                borderBottom: '1px solid #D1D5DB',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => toggleFaq(idx)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            background: isOpen ? '#1F2937' : '#FEF9C3',
                                            color: isOpen ? '#FACC15' : '#D97706',
                                            fontWeight: 900,
                                            fontSize: '0.85rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            transition: 'all 0.3s ease'
                                        }}>
                                            Q{idx + 1}
                                        </div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: '#1F2937', lineHeight: 1.4 }}>
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: isOpen ? '#1F2937' : 'rgba(31, 41, 55, 0.06)',
                                        color: isOpen ? '#FACC15' : '#1F2937',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'all 0.3s ease',
                                        flexShrink: 0
                                    }}>
                                        <ChevronDown size={18} />
                                    </div>
                                </div>
                                <div style={{
                                    maxHeight: isOpen ? '300px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    opacity: isOpen ? 1 : 0
                                }}>
                                    <div style={{ marginTop: '1rem', paddingLeft: '3.25rem' }}>
                                        <p style={{ color: '#4B5563', fontSize: '0.98rem', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Bottom CTA Section - 100% Solid Yellow Hero Band */}
            <section className="full-bleed-yellow" style={{ padding: '6rem 5%', background: '#FACC15', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }} data-aos="fade-up">
                    <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15', marginBottom: '1.5rem', display: 'inline-block' }}>
                        Discuss Your Project
                    </span>
                    <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '1.5rem', color: '#1F2937', lineHeight: 1.25 }}>
                        Discuss Your Software Requirement
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#374151', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.8, fontWeight: 500 }}>
                        Have a software requirement, an existing application that needs improvement, or a business process that could be better supported through software? Talk to Fly Towards Digital Innovation about your requirement.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Link to="/contact/" style={{
                            padding: '1.25rem 2.75rem',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            background: '#1F2937',
                            color: '#FACC15',
                            fontWeight: 900,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 12px 30px rgba(31, 41, 55, 0.3)',
                            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
                            e.currentTarget.style.background = '#111827';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.background = '#1F2937';
                        }}
                        >
                            Discuss Your Software Requirement <ArrowRight size={22} color="#FACC15" />
                        </Link>

                        <a href="#services-list" style={{
                            padding: '1.25rem 2.75rem',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            background: 'rgba(31, 41, 55, 0.1)',
                            color: '#1F2937',
                            fontWeight: 800,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            border: '2px solid #1F2937',
                            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.background = '#1F2937';
                            e.currentTarget.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.background = 'rgba(31, 41, 55, 0.1)';
                            e.currentTarget.style.color = '#1F2937';
                        }}
                        >
                            Explore Our Services
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Service;