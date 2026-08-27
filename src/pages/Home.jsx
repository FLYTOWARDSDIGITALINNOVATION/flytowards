import {
    ArrowRight,
    CheckCircle2,
    Globe,
    Shield,
    Users,
    Target,
    Zap,
    Server,
    Code,
    Smartphone,
    MonitorSmartphone,
    BarChart,
    TrendingUp,
    Settings,
    Wrench,
    Layers,
    Network,
    Database,
    Search,
    FileText,
    Palette,
    Activity,
    ShoppingBag,
    Truck,
    GraduationCap,
    HardHat,
    Hotel,
    ChevronDown,
    Workflow,
    Factory,
    Coffee,
    Handshake,
    Link2
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        document.body.classList.add("home-page");
        document.documentElement.classList.add("home-snap");

        return () => {
            document.body.classList.remove("home-page");
            document.documentElement.classList.remove("home-snap");
        };
    }, []);

    const toggleFaq = (index) => {
        setActiveFaq((current) => (current === index ? null : index));
    };

    /* =========================================================
       DATA
    ========================================================= */

    const capabilities = [
        {
            title: "Business process automation",
            icon: <CpuIcon size={24} color="var(--primary)" />
        },
        {
            title: "Centralised business operations",
            icon: <Database size={24} color="var(--secondary)" />
        },
        {
            title: "Internal workflow management",
            icon: <Layers size={24} color="var(--accent)" />
        },
        {
            title: "Data and application integration",
            icon: <Network size={24} color="var(--primary)" />
        },
        {
            title: "Customer-facing applications",
            icon: <Users size={24} color="var(--secondary)" />
        },
        {
            title: "Business-specific dashboards",
            icon: <BarChart size={24} color="var(--accent)" />
        },
        {
            title: "Digital products and SaaS platforms",
            icon: <Globe size={24} color="var(--primary)" />
        },
        {
            title: "Modernisation of outdated software systems",
            icon: <Wrench size={24} color="var(--secondary)" />
        }
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
            icon: <Link2 size={28} color="var(--accent)" />
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
        {
            name: "Healthcare",
            desc: "Software solutions for healthcare-related workflows, operational management and digital processes.",
            icon: <Activity size={32} color="var(--primary)" />,
            link: "/industries/healthcare"
        },
        {
            name: "Manufacturing",
            desc: "Applications that can support production-related workflows, business operations, data management and process visibility.",
            icon: <Factory size={32} color="var(--secondary)" />,
            link: "/industries/manufacturing"
        },
        {
            name: "Retail",
            desc: "Software for retail operations, customer-facing experiences, business workflows and connected processes.",
            icon: <ShoppingBag size={32} color="var(--accent)" />,
            link: "/industries/retail"
        },
        {
            name: "Logistics",
            desc: "Solutions designed around logistics workflows, operational coordination and information management.",
            icon: <Truck size={32} color="var(--primary)" />,
            link: "/industries/logistics"
        },
        {
            name: "Education",
            desc: "Digital applications that support education-related processes, administration and user interactions.",
            icon: <GraduationCap size={32} color="var(--secondary)" />,
            link: "/industries/education"
        },
        {
            name: "Construction",
            desc: "Software solutions designed around construction-related workflows, project processes and operational requirements.",
            icon: <HardHat size={32} color="var(--accent)" />,
            link: "/industries/construction"
        },
        {
            name: "Hospitality",
            desc: "Applications that can support hospitality operations, customer interactions and business processes.",
            icon: <Hotel size={32} color="var(--primary)" />,
            link: "/industries/hospitality"
        }
    ];

    const processSteps = [
        {
            num: "01",
            title: "Understand",
            desc: "We begin by understanding the business problem, current process, users and desired outcome.",
            icon: <Search size={24} />
        },
        {
            num: "02",
            title: "Define",
            desc: "The requirements are translated into a clearer software scope, functionality and solution direction.",
            icon: <FileText size={24} />
        },
        {
            num: "03",
            title: "Design",
            desc: "The user experience and application structure are planned around the people and processes that will use the system.",
            icon: <Palette size={24} />
        },
        {
            num: "04",
            title: "Develop",
            desc: "The software is developed according to the agreed requirements, functionality and technical direction.",
            icon: <Code size={24} />
        },
        {
            num: "05",
            title: "Improve",
            desc: "Software can continue to evolve as the business adds new requirements, users, integrations or capabilities.",
            icon: <TrendingUp size={24} />
        }
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
            a: "Yes. We work with different industries including healthcare, manufacturing, retail, logistics, education, construction and hospitality. Exact software requirements are determined based on each business and project."
        },
        {
            q: "Can you develop a new software product from an idea?",
            a: "Yes. The initial discussion should establish the business objective, users, required functionality, technical requirements and expected scope before development begins."
        },
        {
            q: "Can you work with an existing software system?",
            a: "Yes. Existing software can be considered as part of a project involving maintenance, improvement, modernisation, integration or additional functionality. The appropriate approach depends on the existing application's condition and technical requirements."
        }
    ];

    /* =========================================================
       RETURN
    ========================================================= */

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* =====================================================
                SECTION 1 - HERO
            ===================================================== */}
            <section
                className="hero hero--video"
                style={{ minHeight: "85vh" }}
            >
                <div className="hero-video" aria-hidden="true">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source
                            src="/Background.mp4"
                            type="video/mp4"
                        />
                    </video>

                    <div className="hero-video-overlay"></div>
                </div>

                <div
                    className="hero-content"
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "#fff",
                            justifyContent: "center",
                            margin: "0 auto 1.5rem"
                        }}
                    >
                        <Zap size={16} />
                        Fly Towards Digital Innovation
                    </span>

                    <h1
                        className="hero-title"
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                            marginBottom: "1.5rem",
                            lineHeight: 1.2
                        }}
                    >
                        Custom Software Development
                        <br />

                        <span
                            className="gradient-text"
                            style={{
                                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                                display: "block",
                                marginTop: "0.5rem"
                            }}
                        >
                            Services for Growing Businesses
                        </span>
                    </h1>

                    <p
                        style={{
                            fontSize: "1.2rem",
                            color: "rgba(255,255,255,0.85)",
                            marginBottom: "3rem",
                            maxWidth: "800px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            lineHeight: 1.8
                        }}
                    >
                        Build software around your unique business
                        processes, workflows, and goals with tailored
                        software development services designed for your
                        business.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "1.5rem",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}
                    >
                        <Link
                            to="/contact"
                            className="btn btn-primary"
                            style={{
                                padding: "1.2rem 2.5rem",
                                fontSize: "1.1rem"
                            }}
                        >
                            Discuss Your Software Requirement
                            <ArrowRight size={20} />
                        </Link>

                        <a
                            href="#services"
                            className="btn btn-outline btn-outline-on-video"
                            style={{
                                padding: "1.2rem 2.5rem",
                                fontSize: "1.1rem"
                            }}
                        >
                            Explore Our Services
                        </a>
                    </div>
                </div>
            </section>

            {/* =====================================================
                SECTION 2 - BUSINESS PROBLEMS
            ===================================================== */}
            <section
                id="problems"
                style={{
                    padding: "6rem 8% 4rem"
                }}
            >
                <div
                    className="grid-2 max-w-1200"
                    style={{
                        margin: "0 auto",
                        gap: "4rem",
                        alignItems: "flex-start"
                    }}
                >
                    <div data-aos="fade-right">
                        <span className="section-tag">
                            Software Built Around Your Business
                        </span>

                        <h2
                            style={{
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                marginBottom: "1.5rem",
                                lineHeight: 1.2
                            }}
                        >
                            Why businesses outgrow spreadsheets,
                            disconnected tools and outdated systems
                        </h2>

                        <p
                            style={{
                                fontSize: "1.15rem",
                                lineHeight: 1.8,
                                color: "var(--text-muted)",
                                marginBottom: "1.5rem"
                            }}
                        >
                            Generic software can be useful when your
                            processes fit the product. But when your
                            business has unique workflows, multiple
                            teams, specialised requirements or existing
                            systems, adapting your operations to someone
                            else's software can create unnecessary
                            complexity.
                        </p>

                        <p
                            style={{
                                fontSize: "1.15rem",
                                lineHeight: 1.8,
                                color: "var(--text-muted)",
                                marginBottom: "2rem",
                                fontWeight: 600
                            }}
                        >
                            Custom software gives your business the
                            opportunity to build around the way you
                            actually work.
                        </p>

                        <p
                            style={{
                                fontSize: "1.1rem",
                                color: "var(--text-dark)",
                                marginBottom: "2rem",
                                fontStyle: "italic"
                            }}
                        >
                            The goal is not simply to build another
                            application. It is to create software that
                            has a clear purpose within your business.
                        </p>

                        <Link
                            to="/contact"
                            className="btn btn-primary"
                        >
                            Tell Us What You Need to Build
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div data-aos="fade-left">
                        <h3
                            style={{
                                fontSize: "1.4rem",
                                fontWeight: 700,
                                marginBottom: "1.5rem",
                                color: "var(--text-dark)"
                            }}
                        >
                            We help businesses turn operational
                            requirements into software solutions that
                            can support:
                        </h3>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gap: "1rem"
                            }}
                        >
                            {capabilities.map((capability, index) => (
                                <div
                                    key={index}
                                    className="capability-item"
                                >
                                    <div
                                        style={{
                                            padding: "8px",
                                            background:
                                                "rgba(0, 242, 255, 0.05)",
                                            borderRadius: "10px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        {capability.icon}
                                    </div>

                                    <span
                                        style={{
                                            fontWeight: 600,
                                            fontSize: "1.05rem",
                                            color: "var(--text-dark)"
                                        }}
                                    >
                                        {capability.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                SECTION 3 - SERVICES
            ===================================================== */}
            <section
                id="services"
                style={{
                    padding: "6rem 8%",
                    background: "rgba(0, 242, 255, 0.01)"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            margin: "0 auto 1.5rem"
                        }}
                    >
                        Software Services
                    </span>

                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)"
                        }}
                    >
                        Software Development Services for Different
                        Business Needs
                    </h2>

                    <p
                        style={{
                            fontSize: "1.15rem",
                            color: "var(--text-muted)",
                            maxWidth: "850px",
                            margin: "1.5rem auto 0",
                            lineHeight: 1.7
                        }}
                    >
                        Every software project has a different purpose.
                        Some businesses need an internal system to
                        replace manual processes. Others need a
                        customer-facing platform, a mobile application
                        or a complete digital product. Our software
                        development services cover different stages and
                        types of business requirements.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: "0 auto",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            style={{
                                padding: "2.5rem",
                                borderRadius: "24px",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                justifyContent: "space-between",
                                background: "var(--bg-white)"
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "15px",
                                        background:
                                            "rgba(0, 242, 255, 0.05)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.5rem"
                                    }}
                                >
                                    {service.icon}
                                </div>

                                <h3
                                    style={{
                                        fontSize: "1.4rem",
                                        fontWeight: 800,
                                        marginBottom: "1rem",
                                        color: "var(--text-dark)"
                                    }}
                                >
                                    {service.title}
                                </h3>

                                <p
                                    style={{
                                        color: "var(--text-muted)",
                                        fontSize: "1.05rem",
                                        lineHeight: 1.6,
                                        marginBottom: "2rem"
                                    }}
                                >
                                    {service.desc}
                                </p>
                            </div>

                            <Link
                                to={service.link}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    color: "var(--text-dark)",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    marginTop: "auto"
                                }}
                            >
                                Learn More
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <Link
                        to="/service"
                        className="btn btn-outline"
                        style={{
                            padding: "1rem 2.5rem"
                        }}
                    >
                        View All Software Services
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* =====================================================
                SECTION 4 - WHY CUSTOM SOFTWARE
            ===================================================== */}
            <section
                id="why-custom"
                style={{
                    padding: "6rem 8%"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            margin: "0 auto 1.5rem"
                        }}
                    >
                        Why Custom Software
                    </span>

                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)"
                        }}
                    >
                        Why Businesses Choose{" "}
                        <span className="gradient-text">
                            Custom Software
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: "1.15rem",
                            color: "var(--text-muted)",
                            maxWidth: "850px",
                            margin: "1.5rem auto 0",
                            lineHeight: 1.7
                        }}
                    >
                        Off-the-shelf software is not always the right
                        fit. A business may have unique approval
                        processes, specialised workflows, legacy
                        applications, multiple departments or
                        requirements that standard products cannot
                        adequately address.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: "0 auto",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "2rem"
                    }}
                >
                    {whyCustomSoftware.map((pillar, index) => (
                        <div
                            key={index}
                            className="card card--hover-secondary"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            style={{
                                padding: "2rem",
                                borderRadius: "20px",
                                background: "var(--bg-white)"
                            }}
                        >
                            <div
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "12px",
                                    background:
                                        "rgba(255, 0, 122, 0.05)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "1.25rem"
                                }}
                            >
                                {pillar.icon}
                            </div>

                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 800,
                                    marginBottom: "0.75rem",
                                    color: "var(--text-dark)"
                                }}
                            >
                                {pillar.title}
                            </h3>

                            <p
                                style={{
                                    color: "var(--text-muted)",
                                    fontSize: "1rem",
                                    lineHeight: 1.6,
                                    margin: 0
                                }}
                            >
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =====================================================
                SECTION 5 - INDUSTRIES
            ===================================================== */}
            <section
                id="industries"
                style={{
                    padding: "6rem 8%",
                    background: "rgba(255, 0, 122, 0.01)"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            margin: "0 auto 1.5rem"
                        }}
                    >
                        Industry Coverage
                    </span>

                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)"
                        }}
                    >
                        Built for Industries With{" "}
                        <span className="gradient-text">
                            Real Operational Challenges
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: "1.15rem",
                            color: "var(--text-muted)",
                            maxWidth: "850px",
                            margin: "1.5rem auto 0",
                            lineHeight: 1.7
                        }}
                    >
                        Different industries have different workflows,
                        regulations, customer expectations and
                        operational requirements. Our approach to
                        custom software development can be adapted to
                        different business environments.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: "0 auto",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "2rem"
                    }}
                >
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="card card--hover-accent"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            style={{
                                padding: "2rem",
                                borderRadius: "20px",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                justifyContent: "space-between",
                                background: "var(--bg-white)"
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "12px",
                                        background:
                                            "rgba(157, 0, 255, 0.05)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.25rem"
                                    }}
                                >
                                    {industry.icon}
                                </div>

                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: 800,
                                        marginBottom: "0.75rem",
                                        color: "var(--text-dark)"
                                    }}
                                >
                                    {industry.name}
                                </h3>

                                <p
                                    style={{
                                        color: "var(--text-muted)",
                                        fontSize: "1rem",
                                        lineHeight: 1.6,
                                        marginBottom: "1.5rem"
                                    }}
                                >
                                    {industry.desc}
                                </p>
                            </div>

                            <Link
                                to={industry.link}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    color: "var(--text-dark)",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    fontSize: "0.95rem",
                                    marginTop: "auto"
                                }}
                            >
                                Explore {industry.name} Software
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <Link
                        to="/industries"
                        className="btn btn-outline"
                        style={{
                            padding: "1rem 2.5rem"
                        }}
                    >
                        Explore Industry Solutions
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* =====================================================
                SECTION 6 - PROCESS
            ===================================================== */}
            <section
                id="process"
                style={{
                    padding: "6rem 8%"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            margin: "0 auto 1.5rem"
                        }}
                    >
                        Development Methodology
                    </span>

                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)"
                        }}
                    >
                        From Business Requirement to{" "}
                        <span className="gradient-text">
                            Working Software
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: "1.15rem",
                            color: "var(--text-muted)",
                            maxWidth: "800px",
                            margin: "1.5rem auto 0",
                            lineHeight: 1.7
                        }}
                    >
                        A successful software project starts with
                        understanding the business behind the
                        requirement.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: "0 auto",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "2rem"
                    }}
                >
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="process-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={{
                                padding: "2.5rem 2rem",
                                borderRadius: "24px",
                                border: "1px solid var(--border)",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1.5rem",
                                    fontSize: "3rem",
                                    fontWeight: 900,
                                    color: "var(--text-dark)",
                                    opacity: 0.05,
                                    fontFamily: "Outfit"
                                }}
                            >
                                {step.num}
                            </span>

                            <div
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "12px",
                                    background:
                                        "var(--gradient-primary)",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "1.5rem"
                                }}
                            >
                                {step.icon}
                            </div>

                            <h3
                                style={{
                                    fontSize: "1.3rem",
                                    fontWeight: 800,
                                    marginBottom: "0.75rem",
                                    color: "var(--text-dark)"
                                }}
                            >
                                {step.num}. {step.title}
                            </h3>

                            <p
                                style={{
                                    color: "var(--text-muted)",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.6,
                                    margin: 0
                                }}
                            >
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "4rem",
                        maxWidth: "800px",
                        marginInline: "auto"
                    }}
                    data-aos="fade-up"
                >
                    <p
                        style={{
                            fontSize: "1.15rem",
                            color: "var(--text-dark)",
                            fontWeight: 500,
                            fontStyle: "italic",
                            lineHeight: 1.7
                        }}
                    >
                        This approach keeps the development process
                        connected to the business objective rather than
                        treating software development as an isolated
                        technical task.
                    </p>
                </div>
            </section>

            {/* =====================================================
                SECTION 7 - BUSINESS OUTCOMES
            ===================================================== */}
            <section
                id="outcomes"
                style={{
                    padding: "6rem 8%",
                    background: "rgba(0, 242, 255, 0.01)"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            margin: "0 auto 1.5rem"
                        }}
                    >
                        Business Value
                    </span>

                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)"
                        }}
                    >
                        Software That Supports{" "}
                        <span className="gradient-text">
                            Better Business Operations
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: "1.15rem",
                            color: "var(--text-muted)",
                            maxWidth: "850px",
                            margin: "1.5rem auto 0",
                            lineHeight: 1.7
                        }}
                    >
                        The value of software is not simply the number
                        of features it contains. A useful business
                        application should help people work more
                        effectively, make information easier to manage
                        and reduce unnecessary operational complexity.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: "0 auto",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.5rem",
                        marginBottom: "3rem"
                    }}
                >
                    {businessOutcomes.map((outcome, index) => (
                        <div
                            key={index}
                            className="card"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            style={{
                                padding: "1.5rem",
                                borderRadius: "16px",
                                border: "1px solid var(--border)",
                                background: "var(--bg-white)",
                                display: "flex",
                                gap: "15px",
                                alignItems: "flex-start",
                                boxShadow: "none"
                            }}
                        >
                            <CheckCircle2
                                size={20}
                                color="var(--primary)"
                                style={{
                                    flexShrink: 0,
                                    marginTop: "2px"
                                }}
                            />

                            <span
                                style={{
                                    fontWeight: 600,
                                    color: "var(--text-dark)",
                                    fontSize: "1rem",
                                    lineHeight: 1.4
                                }}
                            >
                                {outcome}
                            </span>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        textAlign: "center",
                        maxWidth: "800px",
                        marginInline: "auto"
                    }}
                    data-aos="fade-up"
                >
                    <p
                        style={{
                            fontSize: "0.95rem",
                            color: "var(--text-muted)",
                            lineHeight: 1.6
                        }}
                    >
                        * Specific outcomes will depend on the
                        business, requirements and implementation
                        scope. We do not promise the same result for
                        every project because every software environment
                        is different.
                    </p>
                </div>
            </section>

            {/* =====================================================
                SECTION 8 - WHY US
            ===================================================== */}
            <section
                id="why-us"
                style={{
                    padding: "6rem 8%"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            margin: "0 auto 1.5rem"
                        }}
                    >
                        Why Choose Us
                    </span>

                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)"
                        }}
                    >
                        Why Work With{" "}
                        <span className="gradient-text">
                            Fly Towards Digital Innovation?
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: "1.15rem",
                            color: "var(--text-muted)",
                            maxWidth: "850px",
                            margin: "1.5rem auto 0",
                            lineHeight: 1.7
                        }}
                    >
                        Choosing a custom software development company
                        is about more than finding someone who can write
                        code. You need a development partner that can
                        understand the business requirement, translate
                        it into software and support the project from
                        development through future improvements.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: "0 auto",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "2rem"
                    }}
                >
                    {strengths.map((strength, index) => (
                        <div
                            key={index}
                            className="card"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            style={{
                                padding: "2.5rem 2rem",
                                borderRadius: "24px",
                                background: "var(--bg-white)"
                            }}
                        >
                            <div
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "15px",
                                    background:
                                        "rgba(0, 242, 255, 0.05)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "1.5rem"
                                }}
                            >
                                {strength.icon}
                            </div>

                            <h3
                                style={{
                                    fontSize: "1.35rem",
                                    fontWeight: 800,
                                    marginBottom: "1rem",
                                    color: "var(--text-dark)"
                                }}
                            >
                                {strength.title}
                            </h3>

                            <p
                                style={{
                                    color: "var(--text-muted)",
                                    fontSize: "1.05rem",
                                    lineHeight: 1.6,
                                    margin: 0
                                }}
                            >
                                {strength.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <Link
                        to="/contact"
                        className="btn btn-primary"
                        style={{
                            padding: "1.1rem 2.8rem"
                        }}
                    >
                        Talk About Your Software Project
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* =====================================================
                SECTION 9 - AGENCY DISCUSSION
            ===================================================== */}
            <section
                id="agency-discussion"
                style={{
                    padding: "6rem 8%"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            margin: "0 auto 1.5rem"
                        }}
                    >
                        Project Discussion
                    </span>

                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)"
                        }}
                    >
                        Looking for a Custom Software Development
                        Agency?
                    </h2>

                    <p
                        style={{
                            fontSize: "1.15rem",
                            color: "var(--text-muted)",
                            maxWidth: "850px",
                            margin: "1.5rem auto 0",
                            lineHeight: 1.7
                        }}
                    >
                        If your current software no longer fits the way
                        your business operates, or if you are starting
                        a new digital product or internal application,
                        the first step is understanding what you
                        actually need to build.
                    </p>
                </div>

                <div
                    className="grid max-w-1200"
                    style={{
                        margin: "0 auto",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2.5rem"
                    }}
                    data-aos="fade-up"
                >
                    <div
                        className="card"
                        style={{
                            padding: "3rem 2.5rem",
                            borderRadius: "24px",
                            border: "1px solid var(--border)",
                            background: "var(--bg-white)",
                            boxShadow: "var(--shadow)"
                        }}
                    >
                        <h4
                            style={{
                                color: "var(--text-dark)",
                                fontSize: "1.35rem",
                                marginBottom: "1.25rem",
                                fontWeight: 800
                            }}
                        >
                            Requirement Scenarios
                        </h4>

                        <ul
                            style={{
                                paddingLeft: "1.2rem",
                                margin: 0,
                                color: "var(--text-muted)",
                                fontSize: "1.05rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                lineHeight: 1.7
                            }}
                        >
                            <li>A manual process needs to be automated.</li>
                            <li>
                                Several systems need to work together.
                            </li>
                            <li>
                                An existing application needs to be
                                modernised.
                            </li>
                        </ul>
                    </div>

                    <div
                        className="card"
                        style={{
                            padding: "3rem 2.5rem",
                            borderRadius: "24px",
                            border: "1px solid var(--border)",
                            background: "var(--bg-white)",
                            boxShadow: "var(--shadow)"
                        }}
                    >
                        <h4
                            style={{
                                color: "var(--text-dark)",
                                fontSize: "1.35rem",
                                marginBottom: "1.25rem",
                                fontWeight: 800
                            }}
                        >
                            Product Needs
                        </h4>

                        <ul
                            style={{
                                paddingLeft: "1.2rem",
                                margin: 0,
                                color: "var(--text-muted)",
                                fontSize: "1.05rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                lineHeight: 1.7
                            }}
                        >
                            <li>
                                Your business needs a software platform
                                built around a specific workflow.
                            </li>

                            <li>
                                A new SaaS or digital product needs to
                                be developed.
                            </li>

                            <li>
                                Your team needs a web or mobile
                                application for a specific business
                                requirement.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* =====================================================
                SECTION 10 - FAQ
            ===================================================== */}
            <section
                id="faq"
                style={{
                    padding: "6rem 8%",
                    background: "rgba(157, 0, 255, 0.01)"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "4rem"
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            margin: "0 auto 1.5rem"
                        }}
                    >
                        FAQ
                    </span>

                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)"
                        }}
                    >
                        Frequently Asked{" "}
                        <span className="gradient-text">
                            Questions
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: "1.15rem",
                            color: "var(--text-muted)",
                            maxWidth: "700px",
                            margin: "1rem auto 0"
                        }}
                    >
                        Common questions from buyers looking for custom
                        software solutions.
                    </p>
                </div>

                <div
                    style={{
                        maxWidth: "800px",
                        margin: "0 auto"
                    }}
                    data-aos="fade-up"
                >
                    {faqs.map((faq, index) => {
                        const isOpen = activeFaq === index;

                        return (
                            <div
                                key={index}
                                style={{
                                    borderBottom:
                                        "1px solid var(--border)",
                                    padding: "1.5rem 0",
                                    cursor: "pointer"
                                }}
                                onClick={() => toggleFaq(index)}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent:
                                            "space-between",
                                        alignItems: "center",
                                        gap: "1rem"
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 700,
                                            margin: 0,
                                            color: isOpen
                                                ? "var(--secondary)"
                                                : "var(--text-dark)",
                                            transition:
                                                "color 0.3s ease",
                                            textAlign: "left"
                                        }}
                                    >
                                        {faq.q}
                                    </h3>

                                    <div
                                        style={{
                                            transform: isOpen
                                                ? "rotate(180deg)"
                                                : "rotate(0deg)",
                                            transition:
                                                "transform 0.3s ease",
                                            color: isOpen
                                                ? "var(--secondary)"
                                                : "var(--text-muted)"
                                        }}
                                    >
                                        <ChevronDown size={24} />
                                    </div>
                                </div>

                                <div
                                    style={{
                                        maxHeight: isOpen
                                            ? "300px"
                                            : "0px",
                                        overflow: "hidden",
                                        transition:
                                            "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                        opacity: isOpen ? 1 : 0
                                    }}
                                >
                                    <p
                                        style={{
                                            color: "var(--text-muted)",
                                            fontSize: "1.05rem",
                                            lineHeight: 1.7,
                                            marginTop: "1rem",
                                            marginBottom: "0.5rem",
                                            textAlign: "left"
                                        }}
                                    >
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* =====================================================
                SECTION 11 - FINAL CTA
            ===================================================== */}
            <section
                id="contact-cta"
                style={{
                    padding: "6rem 1rem"
                }}
            >
                <div
                    className="cta-content"
                    data-aos="zoom-in"
                    style={{
                        textAlign: "center",
                        padding: "6rem 3rem",
                        borderRadius: "40px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow:
                            "0 20px 50px rgba(0,0,0,0.15)",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        position: "relative",
                        overflow: "hidden",
                        background:
                            "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1800) center/cover no-repeat"
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background:
                                "linear-gradient(135deg, rgba(16, 24, 40, 0.95) 0%, rgba(10, 15, 25, 0.98) 100%)",
                            zIndex: 1
                        }}
                    ></div>

                    <div
                        style={{
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <span
                            className="section-tag"
                            style={{
                                color: "var(--primary)",
                                marginBottom: "1.5rem",
                                justifyContent: "center",
                                marginInline: "auto"
                            }}
                        >
                            Get Started
                        </span>

                        <h2
                            style={{
                                fontSize:
                                    "clamp(2.5rem, 5vw, 4rem)",
                                fontWeight: 800,
                                color: "#fff",
                                marginBottom: "1.5rem",
                                lineHeight: 1.2
                            }}
                        >
                            Let's Discuss What Your Business{" "}
                            <span className="gradient-text">
                                Needs to Build
                            </span>
                        </h2>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                marginBottom: "3rem",
                                maxWidth: "850px"
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    color: "#fff",
                                    margin: 0,
                                    lineHeight: 1.6
                                }}
                            >
                                The right software starts with the right
                                understanding of the problem.
                            </p>

                            <p
                                style={{
                                    fontSize: "1.15rem",
                                    color: "rgba(255,255,255,0.75)",
                                    margin: 0,
                                    lineHeight: 1.8
                                }}
                            >
                                Whether you need to automate an
                                internal process, replace an outdated
                                application, connect multiple systems,
                                build a SaaS product or develop a
                                business-specific web or mobile
                                application, start by telling us what
                                you are trying to achieve.
                            </p>

                            <p
                                style={{
                                    fontSize: "1.15rem",
                                    color: "rgba(255,255,255,0.75)",
                                    margin: 0,
                                    lineHeight: 1.8,
                                    fontWeight: 500
                                }}
                            >
                                Let's explore the requirement,
                                understand the business problem and
                                determine what needs to be built.
                            </p>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                gap: "1.5rem",
                                justifyContent: "center",
                                flexWrap: "wrap"
                            }}
                        >
                            <Link
                                to="/contact"
                                className="btn btn-primary"
                                style={{
                                    padding: "1.2rem 3rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    boxShadow:
                                        "0 10px 30px rgba(0, 242, 255, 0.3)"
                                }}
                            >
                                Discuss Your Software Requirement
                                <ArrowRight size={20} />
                            </Link>

                            <Link
                                to="/contact"
                                className="btn btn-outline"
                                style={{
                                    padding: "1.2rem 3rem",
                                    color: "#fff",
                                    borderColor:
                                        "rgba(255,255,255,0.3)",
                                    background:
                                        "rgba(255,255,255,0.05)"
                                }}
                            >
                                Contact Fly Towards Digital
                                Innovation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

/* =========================================================
   CUSTOM CPU ICON
========================================================= */

const CpuIcon = ({ size = 24, color = "currentColor" }) => {
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
            <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
            />

            <rect
                x="9"
                y="9"
                width="6"
                height="6"
            />

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