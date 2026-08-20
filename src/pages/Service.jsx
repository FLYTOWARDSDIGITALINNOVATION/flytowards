import React, { useEffect, useState } from 'react';
import { 
    Monitor, Smartphone, MessageCircle, BarChart, Globe, Palette, ArrowRight, Zap, 
    Lightbulb, Target, Rocket, CheckCircle2, ChevronRight, Cpu, Shield, TrendingUp, 
    Handshake, Code, ChevronDown, ChevronUp, Check, HelpCircle, Activity, Settings, 
    Database, Server, Workflow, FileText 
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

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

    // State for FAQ accordion
    const [faqOpenIndex, setFaqOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setFaqOpenIndex(faqOpenIndex === index ? null : index);
    };

    const coreServices = [
        {
            title: "Custom Software Development",
            desc: (
                <span>
                    Off-the-shelf software may not always fit the way a business works. Custom software can be designed around specific workflows, operational requirements and business processes. Our <RouterLink to="/services/custom-software-development/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>custom software development services</RouterLink> are suitable for organisations that need software tailored to their processes rather than having to redesign their operations around a generic product.
                </span>
            ),
            icon: <Code size={30} />,
            color: "0, 242, 255", // Cyan
            link: "/services/custom-software-development/",
            exploreLabel: "Explore: Custom Software Development",
            tags: [
                "Business-specific applications",
                "Workflow management",
                "Internal business systems",
                "Process automation",
                "Custom customer or employee portals",
                "Software integrations"
            ]
        },
        {
            title: "Enterprise Software Development",
            desc: (
                <span>
                    Growing organisations often need software capable of supporting complex operations, multiple teams and interconnected business processes. <RouterLink to="/services/enterprise-software-development/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>Enterprise software development</RouterLink> focuses on creating applications that address broader organisational requirements while supporting future expansion.
                </span>
            ),
            icon: <Server size={30} />,
            color: "157, 0, 255", // Purple
            link: "/services/enterprise-software-development/",
            exploreLabel: "Explore: Enterprise Software Development",
            tags: [
                "Enterprise applications",
                "Operational management systems",
                "Business process platforms",
                "Department-level applications",
                "Integrated business systems"
            ]
        },
        {
            title: "Web Application Development",
            desc: (
                <span>
                    Web applications can provide businesses with accessible software experiences through a browser while supporting internal teams, customers or partners. Our <RouterLink to="/services/web-application-development/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>web application development</RouterLink> service can be used for business portals, customer-facing applications, workflow systems and other browser-based applications.
                </span>
            ),
            icon: <Globe size={30} />,
            color: "255, 0, 122", // Pink/Red
            link: "/services/web-application-development/",
            exploreLabel: "Explore: Web Application Development",
            tags: [
                "Business portals",
                "Customer-facing web apps",
                "Workflow systems",
                "Browser-based tools"
            ]
        },
        {
            title: "Mobile App Development",
            desc: (
                <span>
                    Mobile applications can help businesses provide services, manage workflows or engage with customers through mobile devices. Depending on the requirement, a mobile application may support customer interaction, employee operations, service delivery or a specific business process. Explore our <RouterLink to="/services/mobile-app-development/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>mobile app development</RouterLink> options to expand your digital reach.
                </span>
            ),
            icon: <Smartphone size={30} />,
            color: "0, 242, 255", // Cyan
            link: "/services/mobile-app-development/",
            exploreLabel: "Explore: Mobile App Development",
            tags: [
                "Customer engagement apps",
                "Employee operation apps",
                "Service delivery",
                "Process-specific apps"
            ]
        },
        {
            title: "SaaS Development",
            desc: (
                <span>
                    Businesses building software products for multiple users need an approach that considers the product, users, workflows and ongoing operation of the application. <RouterLink to="/services/saas-development/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>SaaS development</RouterLink> can support organisations looking to create software products delivered as an online service.
                </span>
            ),
            icon: <Cpu size={30} />,
            color: "255, 0, 122", // Pink/Red
            link: "/services/saas-development/",
            exploreLabel: "Explore: SaaS Development",
            tags: [
                "Multi-tenant architectures",
                "User workflow engines",
                "Subscription systems",
                "Cloud delivery channels"
            ]
        },
        {
            title: "Software Maintenance and Support",
            desc: (
                <span>
                    Software development does not end when an application is launched. Applications may require updates, fixes, improvements and ongoing technical support as business requirements change. Our <RouterLink to="/services/software-maintenance-support/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>software maintenance and support</RouterLink> services can support ongoing application needs and help organisations manage software after initial development.
                </span>
            ),
            icon: <Settings size={30} />,
            color: "157, 0, 255", // Purple
            link: "/services/software-maintenance-support/",
            exploreLabel: "Explore: Software Maintenance & Support",
            tags: [
                "Application updates",
                "Bug fixing",
                "Software enhancements",
                "Ongoing technical support",
                "Performance improvements",
                "Compatibility updates"
            ]
        }
    ];

    const specializedServices = [
        {
            title: "CRM Development",
            desc: (
                <span>
                    Custom <RouterLink to="/services/crm-development/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>CRM development</RouterLink> can help businesses manage customer information, sales activities and related workflows through software designed around their processes.
                </span>
            ),
            icon: <UsersIcon />,
            link: "/services/crm-development/",
            exploreLabel: "Explore: CRM Development"
        },
        {
            title: "ERP Development",
            desc: (
                <span>
                    ERP-oriented software can bring multiple business processes into a connected application environment. Depending on the organisation's requirements, <RouterLink to="/services/erp-development/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>ERP development</RouterLink> may support areas such as operations, finance, inventory or other internal workflows.
                </span>
            ),
            icon: <Database size={24} />,
            link: "/services/erp-development/",
            exploreLabel: "Explore: ERP Development"
        },
        {
            title: "API Development",
            desc: (
                <span>
                    APIs can allow applications and systems to exchange information and work together. <RouterLink to="/services/api-development/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>API development</RouterLink> and integration can be useful when a business needs to connect existing applications, external platforms or newly developed software.
                </span>
            ),
            icon: <Workflow size={24} />,
            link: "/services/api-development/",
            exploreLabel: "Explore: API Development"
        },
        {
            title: "Cloud Application Development",
            desc: (
                <span>
                    Cloud-based applications can support accessible, scalable software environments for organisations with distributed users and evolving operational requirements. Learn more about <RouterLink to="/services/cloud-application-development/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>cloud application development</RouterLink> to scale your applications.
                </span>
            ),
            icon: <Globe size={24} />,
            link: "/services/cloud-application-development/",
            exploreLabel: "Explore: Cloud Application Development"
        },
        {
            title: "AI Software Development",
            desc: (
                <span>
                    AI adoption is creating new opportunities for businesses to improve software capabilities and automate selected processes. <RouterLink to="/services/ai-software-development/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>AI software development</RouterLink> can be considered where intelligent functionality has a clear business purpose and can be integrated into an appropriate software solution.
                </span>
            ),
            icon: <Cpu size={24} />,
            link: "/services/ai-software-development/",
            exploreLabel: "Explore: AI Software Development"
        },
        {
            title: "Business Process Automation",
            desc: (
                <span>
                    Manual and repetitive processes can consume employee time and create unnecessary operational work. <RouterLink to="/services/business-process-automation/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>Business process automation</RouterLink> focuses on converting suitable workflows into software-supported processes that reduce repetitive manual activity and improve process consistency.
                </span>
            ),
            icon: <Activity size={24} />,
            link: "/services/business-process-automation/",
            exploreLabel: "Explore: Business Process Automation"
        },
        {
            title: "Software Consulting",
            desc: (
                <span>
                    Before development begins, businesses may need help defining what should be built, how existing systems should be approached and what solution best matches the requirement. <RouterLink to="/services/software-consulting/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>Software consulting</RouterLink> can help clarify the project scope, technical direction and development requirements before implementation.
                </span>
            ),
            icon: <Lightbulb size={24} />,
            link: "/services/software-consulting/",
            exploreLabel: "Explore: Software Consulting"
        },
        {
            title: "Software Modernization",
            desc: (
                <span>
                    Older software can become difficult to maintain, integrate or adapt as business requirements change. <RouterLink to="/services/software-modernization/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>Software modernization</RouterLink> focuses on improving or transforming legacy applications so businesses can move toward a more suitable application environment.
                </span>
            ),
            icon: <Zap size={24} />,
            link: "/services/software-modernization/",
            exploreLabel: "Explore: Software Modernization"
        },
        {
            title: "UI/UX Design",
            desc: (
                <span>
                    Software needs to be understandable and usable as well as technically functional. <RouterLink to="/services/ui-ux-design/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>UI/UX design</RouterLink> focuses on the interface, user experience, navigation and interaction patterns that shape how users work with an application.
                </span>
            ),
            icon: <Palette size={24} />,
            link: "/services/ui-ux-design/",
            exploreLabel: "Explore: UI/UX Design"
        }
    ];

    const industrySolutions = [
        { name: "Healthcare Software", link: "/industries/healthcare/", color: "rgba(0, 242, 255, 0.05)" },
        { name: "Manufacturing Software", link: "/industries/manufacturing/", color: "rgba(157, 0, 255, 0.05)" },
        { name: "Retail Software", link: "/industries/retail/", color: "rgba(255, 0, 122, 0.05)" },
        { name: "Logistics Software", link: "/industries/logistics/", color: "rgba(0, 242, 255, 0.05)" },
        { name: "Education Software", link: "/industries/education/", color: "rgba(157, 0, 255, 0.05)" },
        { name: "Construction Software", link: "/industries/construction/", color: "rgba(255, 0, 122, 0.05)" },
        { name: "Finance Software", link: "/industries/finance/", color: "rgba(0, 242, 255, 0.05)" },
        { name: "Hospitality Software", link: "/industries/hospitality/", color: "rgba(157, 0, 255, 0.05)" }
    ];

    const approachSteps = [
        {
            step: "01",
            title: "Understand the Business Requirement",
            desc: "We first need to understand what the software is expected to accomplish. This includes identifying the business problem, users, workflows, existing systems and the outcomes the software needs to support.",
            icon: <Target size={28} />,
            color: "0, 242, 255"
        },
        {
            step: "02",
            title: "Define the Solution",
            desc: "Once the requirement is understood, the software scope and solution approach can be defined. This helps establish what needs to be developed and which functions are essential to the project.",
            icon: <Lightbulb size={28} />,
            color: "255, 0, 122"
        },
        {
            step: "03",
            title: "Design and Develop",
            desc: "The development stage turns the agreed requirements into the software product. Depending on the project, this can involve application development, integrations, user interfaces, databases and other components required by the solution.",
            icon: <Code size={28} />,
            color: "157, 0, 255"
        },
        {
            step: "04",
            title: "Test and Refine",
            desc: "Software needs to be evaluated before release. Testing helps identify issues and provides an opportunity to refine functionality and user experience before deployment.",
            icon: <Shield size={28} />,
            color: "0, 242, 255"
        },
        {
            step: "05",
            title: "Launch and Support",
            desc: "After deployment, software may continue to require maintenance, enhancements and technical support. This is why software maintenance services are an important part of the wider development lifecycle.",
            icon: <Rocket size={28} />,
            color: "255, 0, 122"
        }
    ];

    const faqs = [
        {
            question: "What are software development services?",
            answer: "Software development services cover the planning, design, development, testing, deployment and ongoing improvement of software applications. The appropriate service depends on the business requirement and type of software being developed."
        },
        {
            question: "When should a business consider custom software development?",
            answer: "Custom software can be considered when existing products do not adequately support a business's workflows, integrations or functional requirements. The decision should be based on a genuine business need rather than simply choosing custom development by default."
        },
        {
            question: "Do you provide software maintenance services after development?",
            answer: "Software maintenance is part of the service portfolio. Maintenance can include application updates, bug fixing, enhancements, technical support and other ongoing software requirements."
        },
        {
            question: "Can you develop software for different industries?",
            answer: "The project strategy identifies healthcare, manufacturing, retail, logistics, education, construction, finance and hospitality among the target industries. Industry-specific pages should explain the particular challenges and software requirements of each sector."
        },
        {
            question: "How do I choose the right software development service?",
            answer: "Start with the business problem, existing systems, users, required functionality and desired outcome. From there, the appropriate service—such as custom development, web application development, SaaS, mobile development, automation, modernization or maintenance—can be identified."
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

                .gradient-border-btn {
                    border: 2px solid transparent;
                    background-image: linear-gradient(white, white), linear-gradient(135deg, #00f2ff, #ff007a);
                    background-origin: border-box;
                    background-clip: padding-box, border-box;
                    transition: all 0.3s ease;
                }
                .gradient-border-btn:hover {
                    opacity: 0.9;
                    transform: translateY(-2px);
                }

                .interactive-card {
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .interactive-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.08) !important;
                    border-color: rgba(0, 242, 255, 0.3) !important;
                }

                .arrow-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-weight: 700;
                    color: #0f172a;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .arrow-link:hover {
                    color: #ff007a;
                }
                .arrow-link:hover .arrow-icon {
                    transform: translateX(4px);
                }

                .tag-pill {
                    background: #f1f5f9;
                    color: #475569;
                    padding: 0.4rem 0.9rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    display: inline-block;
                    margin: 0.25rem;
                }

                .step-card {
                    position: relative;
                    transition: all 0.3s ease;
                }
                .step-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
                }

                .faq-trigger {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: 1.5rem 2rem;
                    background: none;
                    border: none;
                    text-align: left;
                    font-weight: 700;
                    font-size: 1.15rem;
                    color: #1e1b4b;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .faq-trigger:hover {
                    color: #ff007a;
                }

                .industry-grid-item {
                    border: 1px solid #f1f5f9;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .industry-grid-item:hover {
                    transform: scale(1.03);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.05);
                    border-color: rgba(157, 0, 255, 0.3);
                }

                @media (max-width: 991px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                        text-align: center;
                    }
                    .hero-text-align {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-image-align {
                        max-height: 450px !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .section-padding {
                        padding: 80px 0 !important;
                    }
                    .custom-h1 {
                        font-size: 3rem !important;
                    }
                    .custom-h2 {
                        font-size: 2.2rem !important;
                    }
                    .core-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .specialized-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            {/* Ambient Lighting Decorations */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '5%', left: '5%', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '15%', right: '5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(255, 0, 122, 0.04) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            {/* Hero / Intro Section */}
            <section style={{ position: 'relative', zIndex: 1, paddingTop: '160px', paddingBottom: '100px' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', alignItems: 'center', gap: '5rem' }}>
                        
                        <div className="hero-text-align" data-aos="fade-right">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                                <div style={{ width: '40px', height: '2px', background: '#ff007a' }}></div>
                                <span style={{ color: '#ff007a', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em' }}>Tailored Solutions</span>
                            </div>
                            
                            <h1 className="custom-h1" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: '#0f172a', letterSpacing: '-0.03em' }}>
                                Software Development Services for Business Needs
                            </h1>
                            
                            <h2 className="custom-h2" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#475569', lineHeight: 1.3, marginBottom: '2.5rem' }}>
                                Software Development Services Built Around Your Business
                            </h2>
                            
                            <div style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.7, marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <p>
                                    Software requirements are rarely the same from one business to another. Some organisations need a new application to replace manual processes. Others need to connect existing systems, modernize an older application, launch a SaaS product or maintain software that has become important to daily operations.
                                </p>
                                <p>
                                    <strong>Fly Towards Digital Innovation</strong> provides software development services designed around these different business requirements. Our service portfolio covers custom software development, enterprise applications, SaaS, web and mobile applications, software maintenance and other specialised development needs.
                                </p>
                                <p>
                                    The focus is not simply on building software. It is on understanding the business problem, defining the right solution and developing software that can support the way your organisation operates.
                                </p>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <a href="#discuss" className="btn btn-primary" style={{ padding: '1.2rem 3rem', borderRadius: '50px', fontWeight: 800, fontSize: '1.1rem', boxShadow: '0 15px 35px rgba(255, 0, 122, 0.2)' }}>
                                    Discuss Your Requirement
                                </a>
                                <a href="#core-services" className="gradient-border-btn" style={{ padding: '1.2rem 3rem', borderRadius: '50px', fontWeight: 800, fontSize: '1.1rem', color: '#0f172a', textDecoration: 'none' }}>
                                    Explore Our Services
                                </a>
                            </div>
                        </div>
                        
                        <div data-aos="fade-left" style={{ position: 'relative' }}>
                            <div style={{ position: 'relative', borderRadius: '50px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(15, 23, 42, 0.1)' }}>
                                <img 
                                    className="hero-image-align"
                                    src="Web & app development.jpg.webp" 
                                    alt="Software Development Services" 
                                    style={{ width: '100%', height: '600px', objectFit: 'cover' }} 
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7), transparent 60%)' }}></div>
                                <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', padding: '2rem', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(20px)', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                                    <h4 style={{ color: 'white', margin: '0 0 0.25rem', fontSize: '1.25rem', fontWeight: 800 }}>Business Alignment</h4>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.85)', margin: 0, fontSize: '0.95rem' }}>Engineered to support how your organisation operates.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section id="core-services" className="section-padding" style={{ padding: '120px 0', background: '#f8fafc', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Our Portfolio</span>
                        <h2 className="custom-h2" style={{ fontSize: '3.2rem', fontWeight: 900, marginTop: '1rem', marginBottom: '1.5rem', color: '#1e1b4b' }}>
                            Our Software Development Services
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                            Our software development and services portfolio covers different stages of a software product's lifecycle, from initial development to ongoing maintenance and improvement.
                        </p>
                    </div>

                    <div className="core-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))', gap: '3rem' }}>
                        {coreServices.map((service, index) => (
                            <div 
                                key={index} 
                                data-aos="fade-up" 
                                className="interactive-card"
                                style={{
                                    background: 'white',
                                    borderRadius: '40px',
                                    padding: '3.5rem',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.01)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                        <div style={{ 
                                            width: '64px', 
                                            height: '64px', 
                                            borderRadius: '20px', 
                                            background: `rgba(${service.color}, 0.1)`, 
                                            color: `rgb(${service.color})`, 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center' 
                                        }}>
                                            {service.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e1b4b', margin: 0 }}>
                                            {service.title}
                                        </h3>
                                    </div>
                                    
                                    <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                                        {service.desc}
                                    </p>
                                    
                                    {service.tags && (
                                        <div style={{ marginBottom: '2.5rem' }}>
                                            <h5 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                {service.title === "Custom Software Development" ? "Useful for:" : 
                                                 service.title === "Enterprise Software Development" ? "Potential use cases include:" : 
                                                 "Maintenance may include:"}
                                            </h5>
                                            <div style={{ margin: '-0.25rem' }}>
                                                {service.tags.map((tag, tIndex) => (
                                                    <span key={tIndex} className="tag-pill">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '2rem', marginTop: '1.5rem' }}>
                                    <RouterLink to={service.link} className="arrow-link">
                                        <span>{service.exploreLabel}</span>
                                        <ChevronRight size={18} className="arrow-icon" />
                                    </RouterLink>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Specialized Services Section */}
            <section style={{ padding: '120px 0', background: '#ffffff', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: '#ff007a', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Targeted Operations</span>
                        <h2 className="custom-h2" style={{ fontSize: '3.2rem', fontWeight: 900, marginTop: '1rem', marginBottom: '1.5rem', color: '#1e1b4b' }}>
                            Specialized Software Development Services
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                            Different software requirements call for different approaches. Alongside our core development services, the portfolio includes specialised services for particular business and technical needs.
                        </p>
                    </div>

                    <div className="specialized-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem' }}>
                        {specializedServices.map((special, index) => (
                            <div 
                                key={index} 
                                data-aos="fade-up" 
                                className="interactive-card"
                                style={{
                                    background: '#f8fafc',
                                    borderRadius: '30px',
                                    padding: '3rem',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.75rem' }}>
                                        <div style={{ 
                                            width: '52px', 
                                            height: '52px', 
                                            borderRadius: '16px', 
                                            background: 'rgba(255, 0, 122, 0.08)', 
                                            color: '#ff007a', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center' 
                                        }}>
                                            {special.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1e1b4b', margin: 0 }}>
                                            {special.title}
                                        </h3>
                                    </div>
                                    
                                    <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                                        {special.desc}
                                    </p>
                                </div>
                                
                                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                                    <RouterLink to={special.link} className="arrow-link">
                                        <span>{special.exploreLabel}</span>
                                        <ChevronRight size={18} className="arrow-icon" />
                                    </RouterLink>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Industry Solutions Section */}
            <section style={{ padding: '120px 0', background: '#f8fafc', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem', alignItems: 'center' }}>
                        
                        <div data-aos="fade-right">
                            <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Vertical Strategy</span>
                            <h2 className="custom-h2" style={{ fontSize: '3rem', fontWeight: 900, marginTop: '1rem', marginBottom: '2rem', color: '#1e1b4b', lineHeight: 1.2 }}>
                                Software Solutions for Different Business Needs
                            </h2>
                            <div style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <p>
                                    Software requirements can vary significantly between industries and organisations.
                                </p>
                                <p>
                                    Fly Towards Digital Innovation's strategy identifies sectors including <RouterLink to="/industries/healthcare/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>healthcare</RouterLink>, <RouterLink to="/industries/manufacturing/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>manufacturing</RouterLink>, <RouterLink to="/industries/retail/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>retail</RouterLink>, <RouterLink to="/industries/education/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>education</RouterLink>, <RouterLink to="/industries/construction/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>construction</RouterLink>, <RouterLink to="/industries/finance/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>finance</RouterLink> and <RouterLink to="/industries/hospitality/" style={{ color: '#ff007a', textDecoration: 'underline', fontWeight: 600 }}>hospitality</RouterLink> as key industry areas.
                                </p>
                                <p>
                                    A software solution for a manufacturing organisation may focus on operational workflows, while a healthcare application may require a different set of business processes and user requirements.
                                </p>
                                <p>
                                    For this reason, the software development process should begin with understanding the organisation rather than starting with a fixed application template.
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-left" style={{ background: 'white', borderRadius: '40px', padding: '3.5rem', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '2rem' }}>
                                Explore solutions by industry:
                            </h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                {industrySolutions.map((industry, index) => (
                                    <RouterLink 
                                        key={index} 
                                        to={industry.link}
                                        className="industry-grid-item"
                                        style={{
                                            padding: '1.2rem',
                                            borderRadius: '16px',
                                            background: industry.color,
                                            fontWeight: 700,
                                            fontSize: '1rem'
                                        }}
                                    >
                                        <span>{industry.name}</span>
                                        <ChevronRight size={16} />
                                    </RouterLink>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Approach / Methodology Section */}
            <section style={{ padding: '120px 0', background: '#ffffff', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: '#ff007a', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Our Roadmap</span>
                        <h2 className="custom-h2" style={{ fontSize: '3.2rem', fontWeight: 900, marginTop: '1rem', marginBottom: '1.5rem', color: '#1e1b4b' }}>
                            How We Approach Software Development
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem', '@media (max-width: 1200px)': { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' } }} className="core-grid">
                        {approachSteps.map((step, index) => (
                            <div 
                                key={index} 
                                data-aos="fade-up" 
                                data-aos-delay={index * 100}
                                className="step-card"
                                style={{
                                    background: '#f8fafc',
                                    borderRadius: '25px',
                                    padding: '2.5rem 2rem',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ display: 'flex', justifycontent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                    <div style={{ 
                                        width: '56px', 
                                        height: '56px', 
                                        borderRadius: '16px', 
                                        background: `rgba(${step.color}, 0.1)`, 
                                        color: `rgb(${step.color})`, 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center' 
                                    }}>
                                        {step.icon}
                                    </div>
                                    <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'rgba(15, 23, 42, 0.08)' }}>
                                        {step.step}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '1rem', minHeight: '50px' }}>
                                    {step.title}
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Why Custom Software Approach Section */}
            <section style={{ padding: '100px 0', background: '#f8fafc', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ background: 'white', borderRadius: '40px', padding: '4.5rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.01)' }} data-aos="zoom-in">
                        
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Value Alignment</span>
                            <h2 className="custom-h2" style={{ fontSize: '2.8rem', fontWeight: 900, marginTop: '0.75rem', marginBottom: '1.25rem', color: '#1e1b4b' }}>
                                Why Businesses Choose a Custom Software Approach
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '850px', margin: '0 auto', lineHeight: 1.6 }}>
                                Businesses may consider custom software when existing products cannot adequately support their processes or when they need functionality designed around a particular business model.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem 3rem', marginBottom: '3.5rem' }}>
                            {[
                                "Address specific operational workflows",
                                "Connect business applications",
                                "Automate suitable manual processes",
                                "Support changing business requirements",
                                "Create software around defined user needs",
                                "Build a foundation for future enhancements"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 242, 255, 0.1)', color: '#00f2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#334155' }}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '2.5rem', textAlign: 'center' }}>
                            <p style={{ fontSize: '1.15rem', color: '#475569', fontStyle: 'italic', margin: 0 }}>
                                "The right approach depends on the business requirement. Custom development should be considered because it solves a genuine business problem, not simply because it is technically possible."
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Software Maintenance Services for Long-Term Reliability Section */}
            <section style={{ padding: '120px 0', background: '#ffffff', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                        
                        <div data-aos="fade-right" style={{ position: 'relative' }}>
                            <div style={{ 
                                background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', 
                                borderRadius: '40px', 
                                padding: '4.5rem', 
                                color: 'white', 
                                position: 'relative', 
                                overflow: 'hidden',
                                boxShadow: '0 40px 80px rgba(15, 23, 42, 0.2)'
                            }}>
                                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.15) 0%, transparent 60%)', filter: 'blur(50px)' }}></div>
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', display: 'block', marginBottom: '1.5rem' }}>Continuous Evolution</span>
                                    <h4 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.3 }}>
                                        Reliability from Day One to Year Ten
                                    </h4>
                                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 0 }}>
                                        Our maintenance infrastructure handles version controller transitions, operating system updates, API dependency changes, and security compliance parameters dynamically. We make sure that your custom environment matches user performance expectations post-launch.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left">
                            <span style={{ color: '#ff007a', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Product Lifecycle Support</span>
                            <h2 className="custom-h2" style={{ fontSize: '3rem', fontWeight: 900, marginTop: '1rem', marginBottom: '2rem', color: '#1e1b4b', lineHeight: 1.2 }}>
                                Software Maintenance Services for Long-Term Reliability
                            </h2>
                            <div style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <p>
                                    Once software becomes part of daily business operations, keeping it functional and relevant becomes important.
                                </p>
                                <p>
                                    Software maintenance services can help organisations address application issues, introduce enhancements and respond to changing requirements after launch.
                                </p>
                                <p>
                                    Maintenance requirements can differ depending on the application, its users, integrations and business importance.
                                </p>
                                <p>
                                    For organisations relying on custom applications, ongoing support can form part of a longer-term software strategy rather than treating development as a one-time project.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Service Selector Widget Section */}
            <section style={{ padding: '100px 0', background: '#f8fafc', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{ color: '#00f2ff', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Decision Matrix</span>
                        <h2 className="custom-h2" style={{ fontSize: '2.8rem', fontWeight: 900, marginTop: '0.75rem', marginBottom: '1.25rem', color: '#1e1b4b' }}>
                            Choose the Right Software Service for Your Requirement
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '850px', margin: '0 auto', lineHeight: 1.6 }}>
                            Not every software project needs the same development approach. Identify your operational goals to determine which approach fits best.
                        </p>
                    </div>

                    <div style={{ background: 'white', borderRadius: '35px', padding: '1rem', border: '1px solid #e2e8f0', overflow: 'hidden' }} data-aos="fade-up">
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                                        <th style={{ padding: '1.5rem 2rem', color: '#0f172a', fontWeight: 800, fontSize: '1.1rem' }}>If your business requirement matches:</th>
                                        <th style={{ padding: '1.5rem 2rem', color: '#0f172a', fontWeight: 800, fontSize: '1.1rem' }}>Then the recommended software service is:</th>
                                        <th style={{ padding: '1.5rem 2rem', color: '#0f172a', fontWeight: 800, fontSize: '1.1rem', textAlign: 'center' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { need: "If you need a business-specific application", service: "Custom software development may be appropriate.", action: "/services/custom-software-development/" },
                                        { need: "If you are building a software product", service: "SaaS development may be a better fit.", action: "/services/saas-development/" },
                                        { need: "If your existing systems are disconnected", service: "API development or integration may be required.", action: "/services/api-development/" },
                                        { need: "If an older application is becoming difficult to maintain", service: "Software modernization may be worth considering.", action: "/services/software-modernization/" },
                                        { need: "If your application is already operational", service: "Software maintenance and support may be the priority.", action: "/services/software-maintenance-support/" }
                                    ].map((row, idx) => (
                                        <tr key={idx} style={{ borderBottom: idx === 4 ? 'none' : '1px solid #f1f5f9', background: idx % 2 === 1 ? '#f8fafc' : 'white' }}>
                                            <td style={{ padding: '1.5rem 2rem', fontWeight: 600, color: '#334155', fontSize: '1.05rem' }}>{row.need}</td>
                                            <td style={{ padding: '1.5rem 2rem', color: '#64748b', fontSize: '1.05rem' }}>{row.service}</td>
                                            <td style={{ padding: '1.5rem 2rem', textAlign: 'center' }}>
                                                <RouterLink to={row.action} style={{ color: '#ff007a', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                                    Select <ChevronRight size={14} />
                                                </RouterLink>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <p style={{ fontSize: '1.15rem', color: '#475569', fontWeight: 600 }}>
                            The first step is understanding the business requirement and selecting the service that matches it.
                        </p>
                    </div>

                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section style={{ padding: '6rem 8%', background: '#ffffff', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    
                    <div style={{ marginBottom: '3rem' }} data-aos="fade-up">
                        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text-dark, #1e1b4b)', margin: 0 }}>
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div style={{ borderTop: '1px solid #e2e8f0' }} data-aos="fade-up">
                        {faqs.map((faq, index) => {
                            const isOpen = faqOpenIndex === index;
                            return (
                                <div key={index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <button 
                                        onClick={() => toggleFaq(index)}
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
                                            color: 'var(--text-dark, #0f172a)',
                                            outline: 'none',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        <span style={{ 
                                            fontSize: '1.4rem', 
                                            fontWeight: '400', 
                                            color: 'var(--text-dark, #0f172a)',
                                            minWidth: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            {isOpen ? '−' : '+'}
                                        </span>
                                        <span style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-dark, #1e1b4b)' }}>{faq.question}</span>
                                    </button>
                                    
                                    <div style={{ 
                                        maxHeight: isOpen ? '250px' : '0', 
                                        overflow: 'hidden', 
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        opacity: isOpen ? 1 : 0,
                                        paddingLeft: '36px',
                                        paddingBottom: isOpen ? '1.5rem' : '0'
                                    }}>
                                        <p style={{ color: 'var(--text-muted, #64748b)', margin: 0, lineHeight: 1.7, fontSize: '1.02rem' }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* Discuss Your Software Requirement (CTA Section) */}
            <section id="discuss" style={{ padding: '6rem 8%', position: 'relative', zIndex: 1 }} className="section-full">
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
                        background: 'url(https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=1800) center/cover no-repeat'
                    }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.9) 0%, rgba(10, 15, 25, 0.95) 100%)', zIndex: 1 }}></div>
                    
                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span className="section-tag" style={{ color: 'var(--primary, #00f2ff)', marginBottom: '1.5rem', letterSpacing: '4px' }}>
                            Begin Your Journey
                        </span>
                        
                        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', color: '#fff', lineHeight: 1.2 }}>
                            Discuss Your Software Requirement
                        </h2>
                        
                        <p style={{ fontSize: '1.15rem', margin: '1rem auto 3rem', maxWidth: '800px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                            Have a software requirement, an existing application that needs improvement, or a business process that could be better supported through software? Talk to Fly Towards Digital Innovation about your requirement. We can discuss the business problem, understand the software needs and determine which development service is most relevant to your project.
                        </p>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            <RouterLink 
                                to="/contact/" 
                                className="btn btn-primary" 
                                style={{ 
                                    padding: '1.2rem 3rem', 
                                    boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)'
                                }}
                            >
                                Discuss Your Software Requirement <ArrowRight size={20} style={{ marginLeft: '8px', display: 'inline-block', verticalAlign: 'middle' }} />
                            </RouterLink>
                            
                            <a 
                                href="#core-services" 
                                className="btn btn-outline" 
                                style={{ 
                                    padding: '1.2rem 3rem', 
                                    color: '#fff', 
                                    borderColor: 'rgba(255,255,255,0.3)', 
                                    background: 'rgba(255,255,255,0.05)'
                                }}
                            >
                                Explore Our Services
                            </a>
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

// Local component helper to keep CRM Users Icon clean
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

export default Service;
