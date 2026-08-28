import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Server, ShieldCheck, Zap, ChevronRight } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Industries = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        document.title =
            "Industries We Serve | Fly Towards Digital Innovation";

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Fly Towards delivers industry-specific custom software, ERP, CRM platforms, billing systems, and WhatsApp integrations for Construction, Jewelry, Gold Loan, Education, Healthcare, Manufacturing, and Retail."
            );
        }

        const metaKeywords = document.querySelector(
            'meta[name="keywords"]'
        );

        if (metaKeywords) {
            metaKeywords.setAttribute(
                "content",
                "Construction ERP, Jewelry Shop Billing Software, Gold Loan Software, School Management System, Hospital CRM, Manufacturing ERP, Retail POS Software"
            );
        }

        const robots = document.querySelector('meta[name="robots"]');

        if (robots) {
            robots.setAttribute("content", "index, follow");
        }

        const canonical = document.querySelector(
            'link[rel="canonical"]'
        );

        if (canonical) {
            canonical.setAttribute(
                "href",
                "https://flytowardsdigitalinnovation.com/industries"
            );
        }
    }, []);

    const industriesList = [
        {
            title: "Construction",
            tagline: "Build with technical precision",
            desc: "Custom ERP and project management systems designed to control budgets, manage sites, track materials, and automate supplier transactions.",
            img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
            color: "249, 115, 22",
            icon: "🏗️",
            features: [
                "Real-time material & inventory tracking",
                "Contractor & workforce log automation",
                "Milestone billing & progress invoicing",
            ],
            detailedInfo:
                "Our construction management solutions help businesses track materials from procurement to site delivery. Contractor ledgers, subcontractor logs, purchase tracking, project budgets, workforce records, and milestone-based billing can all be managed from one centralized platform.",
            link: "/industries/construction",
        },

        {
            title: "Jewelry Shop",
            tagline: "Luster meets smart management",
            desc: "High-security jewelry inventory management with customer tracking, barcode support, gold scheme management, and digital catalogues.",
            img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=80",
            color: "13, 148, 136",
            icon: "💎",
            features: [
                "Barcode & inventory stock control",
                "Gold & silver savings scheme tracking",
                "Interactive digital product catalogue",
            ],
            detailedInfo:
                "Manage gold and silver inventory, customer records, savings schemes, barcode-based stock management, purchase and sales transactions, and digital product catalogues. The system can also support purity, weight, making charges, GST billing, and branch-level inventory tracking.",
            link: "/industries/jewelry",
        },

        {
            title: "Gold Loan",
            tagline: "Secure interest & pledge workflows",
            desc: "Digital gold loan systems built for pledge processing, interest calculation, customer ledgers, payment tracking, and reminders.",
            img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
            color: "202, 138, 4",
            icon: "🪙",
            features: [
                "Live gold rate & pledge management",
                "Flexible interest & repayment setup",
                "Automated SMS & WhatsApp payment alerts",
            ],
            detailedInfo:
                "The gold loan module manages customer pledges, gold weight and purity, loan amounts, interest calculations, repayment schedules, overdue accounts, and auction workflows. Customer payment reminders can be automated through SMS and WhatsApp integrations.",
            link: "/industries/gold-loan",
        },

        {
            title: "School / College",
            tagline: "Nurturing smart digital campuses",
            desc: "Next-generation education ERP systems supporting admissions, student management, fees, attendance, examinations, and parent communication.",
            img: "Student.webp",
            color: "29, 78, 216",
            icon: "🎓",
            features: [
                "Admissions & student lifecycle tracking",
                "Integrated online fee collections",
                "Automated report cards & gradebook",
            ],
            detailedInfo:
                "Manage the complete student lifecycle from admission and registration to attendance, fee collection, examination scheduling, marks, report cards, staff management, and parent communication. WhatsApp and SMS notifications can also be integrated for important updates.",
            link: "/industries/education",
        },

        {
            title: "Hospital & Clinic",
            tagline: "Prioritize seamless patient care",
            desc: "Healthcare management platforms for appointments, patient records, OPD queues, pharmacy billing, and doctor availability.",
            img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
            color: "5, 150, 105",
            icon: "🏥",
            features: [
                "Electronic health records management",
                "WhatsApp booking & OPD queue updates",
                "Pharmacy inventory & billing",
            ],
            detailedInfo:
                "Healthcare systems can manage patient registration, doctor schedules, appointments, OPD queues, medical records, pharmacy stock, prescriptions, billing, and follow-up reminders. WhatsApp notifications can be used for appointment confirmations and queue updates.",
            link: "/industries/healthcare",
        },

        {
            title: "Manufacturing",
            tagline: "Zero downtime product workflows",
            desc: "Manufacturing ERP systems covering production planning, material requirements, quality checks, workforce management, and logistics.",
            img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
            color: "79, 70, 229",
            icon: "⚙️",
            features: [
                "Production & shop floor management",
                "Automated supply chain notifications",
                "Preventive maintenance scheduling",
            ],
            detailedInfo:
                "Manufacturing workflows can include BOM management, production planning, material requisition, inventory consumption, worker shifts, machine records, quality checkpoints, purchase management, and logistics coordination. Dashboard reporting provides visibility into production and inventory.",
            link: "/industries/manufacturing",
        },

        {
            title: "Retail Shop",
            tagline: "Next-gen point-of-sale efficiency",
            desc: "Smart retail POS systems with fast billing, barcode scanning, inventory management, customer loyalty, and sales analytics.",
            img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
            color: "219, 39, 119",
            icon: "🛍️",
            features: [
                "High-speed POS with barcode scanning",
                "Omnichannel inventory management",
                "Customer database & loyalty points",
            ],
            detailedInfo:
                "Retail systems support barcode-enabled billing, purchase orders, vendor management, stock transfers, customer databases, loyalty programs, discounts, returns, and real-time sales dashboards. Multiple branches and counters can be managed from a centralized system.",
            link: "/industries/retail",
        },
    ];

    return (
        <main
            style={{
                background: "#ffffff",
                minHeight: "100vh",
                fontFamily: "'Outfit', sans-serif",
                color: "#0f172a",
                overflowX: "hidden",
            }}
        >
            {/* Google Fonts + Custom Styles */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

                * {
                    box-sizing: border-box;
                }

                html {
                    scroll-behavior: smooth;
                }

                .industry-card {
                    transition:
                        transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                        box-shadow 0.5s ease,
                        border 0.3s ease;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    position: relative;
                    z-index: 1;
                }

                .industry-card:hover {
                    transform: translateY(-12px);
                    box-shadow:
                        0 30px 60px rgba(15, 23, 42, 0.08) !important;
                }

                .industry-card:hover .industry-card-image-el {
                    transform: scale(1.08);
                }

                .industry-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 40px;
                    padding: 2px;
                    background:
                        linear-gradient(
                            135deg,
                            rgba(var(--color), 0.3) 0%,
                            rgba(var(--color), 0.02) 100%
                        );
                    -webkit-mask:
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                    transition: all 0.5s ease;
                }

                .industry-card:hover::before {
                    background:
                        linear-gradient(
                            135deg,
                            rgba(var(--color), 0.7) 0%,
                            rgba(var(--color), 0.2) 100%
                        );
                }

                .gradient-text-industry {
                    background:
                        linear-gradient(
                            135deg,
                            #00f2ff 0%,
                            #ff007a 100%
                        );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .floating-mesh {
                    animation: float-slow 12s ease-in-out infinite alternate;
                }

                @keyframes float-slow {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }

                    100% {
                        transform: translate(5%, 5%) scale(1.05);
                    }
                }

                .section-inner {
                    width: min(1400px, 92%);
                    margin: 0 auto;
                }

                .industry-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 30px;
                    background: rgba(var(--color), 0.08);
                }

                .stat-card {
                    transition:
                        transform 0.3s ease,
                        box-shadow 0.3s ease;
                }

                .stat-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.07);
                }

                .cta-button {
                    transition: all 0.3s ease;
                }

                .cta-button:hover {
                    transform: translateY(-3px);
                }

                @media (max-width: 968px) {
                    .industries-hero-container {
                        padding-top: 130px !important;
                        padding-bottom: 70px !important;
                    }

                    .industries-hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                        text-align: center;
                    }

                    .industries-hero-grid > div:first-child {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .industries-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2.5rem !important;
                    }

                    .feature-showcase-grid {
                        grid-template-columns: 1fr !important;
                    }
                }

                @media (max-width: 600px) {
                    .industry-card {
                        padding: 2rem !important;
                        border-radius: 30px !important;
                    }

                    .industry-card::before {
                        border-radius: 30px;
                    }

                    .hero-image {
                        height: 400px !important;
                    }

                    .cta-section {
                        border-radius: 35px !important;
                        padding: 70px 25px !important;
                    }

                    .stats-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            {/* Ambient Background Lights */}
            <div
                className="floating-mesh"
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "15%",
                        left: "-5%",
                        width: "700px",
                        height: "700px",
                        background:
                            "radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 68%)",
                        filter: "blur(120px)",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        bottom: "15%",
                        right: "-5%",
                        width: "850px",
                        height: "850px",
                        background:
                            "radial-gradient(circle, rgba(255, 0, 122, 0.04) 0%, transparent 70%)",
                        filter: "blur(130px)",
                    }}
                />
            </div>

            {/* ================= HERO ================= */}
            <section
                className="industries-hero-container"
                style={{
                    position: "relative",
                    zIndex: 1,
                    paddingTop: "190px",
                    paddingBottom: "110px",
                }}
            >
                <div
                    className="section-inner"
                    style={{ padding: "0 2rem" }}
                >
                    <div
                        className="industries-hero-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1.2fr 0.8fr",
                            alignItems: "center",
                            gap: "5rem",
                        }}
                    >
                        {/* Hero Content */}
                        <div data-aos="fade-right">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    marginBottom: "2rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: "40px",
                                        height: "2.5px",
                                        background: "var(--primary)",
                                    }}
                                />

                                <span
                                    style={{
                                        color: "var(--primary)",
                                        fontWeight: 800,
                                        fontSize: "0.85rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.35em",
                                    }}
                                >
                                    Tailored Business Solutions
                                </span>
                            </div>

                            <h1
                                style={{
                                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                                    fontWeight: 900,
                                    lineHeight: 1,
                                    marginBottom: "2.5rem",
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                Industries We{" "}
                                <span className="gradient-text-industry">
                                    Transform
                                </span>
                            </h1>

                            <p
                                style={{
                                    fontSize: "1.3rem",
                                    color: "#55657e",
                                    lineHeight: 1.7,
                                    marginBottom: "3.5rem",
                                    maxWidth: "650px",
                                }}
                            >
                                We craft premium, customized digital systems
                                designed to streamline workflows, secure data
                                assets, and drive conversions for specialized
                                business sectors.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "1.5rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                <a
                                    href="#explore-sectors"
                                    className="btn btn-primary"
                                    style={{
                                        padding: "1.3rem 3.5rem",
                                        borderRadius: "50px",
                                        fontWeight: 800,
                                        fontSize: "1.05rem",
                                        boxShadow:
                                            "0 15px 35px rgba(0, 242, 255, 0.2)",
                                        textDecoration: "none",
                                    }}
                                >
                                    Explore Industries{" "}
                                    <ArrowRight
                                        size={18}
                                        style={{
                                            marginLeft: "8px",
                                            verticalAlign: "middle",
                                        }}
                                    />
                                </a>

                                <RouterLink
                                    to="/contact"
                                    className="btn btn-outline"
                                    style={{
                                        padding: "1.3rem 3.5rem",
                                        borderRadius: "50px",
                                        fontWeight: 800,
                                        fontSize: "1.05rem",
                                        borderColor: "#e2e8f0",
                                        color: "#1e293b",
                                        textDecoration: "none",
                                    }}
                                >
                                    Discuss Your Need
                                </RouterLink>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div data-aos="fade-left">
                            <div
                                style={{
                                    position: "relative",
                                    borderRadius: "45px",
                                    overflow: "hidden",
                                    boxShadow:
                                        "0 50px 100px rgba(15, 23, 42, 0.08)",
                                    background: "#0a0b10",
                                    padding: "2px",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        padding: "2px",
                                        borderRadius: "45px",
                                        background:
                                            "linear-gradient(225deg, #00f2ff, #ff007a)",
                                        opacity: 0.8,
                                        zIndex: 0,
                                    }}
                                />

                                <div
                                    style={{
                                        position: "relative",
                                        zIndex: 1,
                                        background: "#0f1016",
                                        borderRadius: "43px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        className="hero-image"
                                        src="Web & app development.jpg.webp"
                                        alt="Industry Transformation Hub"
                                        style={{
                                            width: "100%",
                                            height: "520px",
                                            objectFit: "cover",
                                            opacity: 0.85,
                                            filter: "contrast(1.05) brightness(0.95)",
                                        }}
                                    />

                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(to top, rgba(15, 17, 26, 0.95), transparent 75%)",
                                        }}
                                    />

                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "30px",
                                            left: "30px",
                                            right: "30px",
                                            padding: "1.8rem",
                                            background:
                                                "rgba(255, 255, 255, 0.04)",
                                            backdropFilter: "blur(20px)",
                                            borderRadius: "30px",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "12px",
                                                alignItems: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: "8px",
                                                    height: "8px",
                                                    borderRadius: "50%",
                                                    background: "#00f2ff",
                                                }}
                                            />

                                            <span
                                                style={{
                                                    color: "#00f2ff",
                                                    fontWeight: 800,
                                                    fontSize: "0.75rem",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "2px",
                                                }}
                                            >
                                                Operational Excellence
                                            </span>
                                        </div>

                                        <h4
                                            style={{
                                                color: "white",
                                                margin: 0,
                                                fontSize: "1.2rem",
                                                fontWeight: 800,
                                            }}
                                        >
                                            Customized Suite For Every Sector
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= INDUSTRIES ================= */}
            <section
                id="explore-sectors"
                className="section-full"
                style={{
                    padding: "80px 0 140px",
                    background: "#f8fafc",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <div className="section-inner">
                    {/* Section Heading */}
                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "6rem",
                        }}
                        data-aos="fade-up"
                    >
                        <span
                            className="section-tag"
                            style={{
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            Industries We Power
                        </span>

                        <h2
                            style={{
                                fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                                fontWeight: 900,
                                marginTop: "1rem",
                                color: "#1e1b4b",
                            }}
                        >
                            Engineered for Your{" "}
                            <span className="gradient-text-industry">
                                Specialty
                            </span>
                        </h2>

                        <p
                            style={{
                                color: "#64748b",
                                fontSize: "1.15rem",
                                maxWidth: "650px",
                                margin: "1.5rem auto 0",
                                lineHeight: 1.6,
                            }}
                        >
                            Discover secure operational flows, smart
                            integrations, and customer management systems
                            built specifically for your sector.
                        </p>
                    </div>

                    {/* Industry Cards */}
                    <div
                        className="industries-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(360px, 1fr))",
                            gap: "3rem",
                        }}
                    >
                        {industriesList.map((industry, index) => {
                            const isExpanded =
                                expandedCard === index;

                            return (
                                <div
                                    key={industry.title}
                                    className="industry-card"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80}
                                    onClick={() =>
                                        setExpandedCard(
                                            isExpanded ? null : index
                                        )
                                    }
                                    style={{
                                        background: "white",
                                        borderRadius: "40px",
                                        padding: "3.5rem",
                                        border: isExpanded
                                            ? `2px solid rgb(${industry.color})`
                                            : "1px solid #f1f5f9",
                                        boxShadow: isExpanded
                                            ? `0 20px 45px rgba(${industry.color}, 0.12)`
                                            : "0 15px 30px rgba(0,0,0,0.015)",
                                        "--color": industry.color,
                                    }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "220px",
                                            borderRadius: "25px",
                                            overflow: "hidden",
                                            marginBottom: "2.5rem",
                                            position: "relative",
                                        }}
                                    >
                                        <img
                                            src={industry.img}
                                            alt={industry.title}
                                            className="industry-card-image-el"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                transition:
                                                    "transform 0.6s ease-in-out",
                                            }}
                                        />

                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                background:
                                                    "linear-gradient(to top, rgba(15, 23, 42, 0.4), transparent)",
                                            }}
                                        />

                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: "20px",
                                                right: "20px",
                                                fontSize: "0.8rem",
                                                fontWeight: 800,
                                                color: `rgb(${industry.color})`,
                                                background: "white",
                                                padding:
                                                    "0.4rem 1.2rem",
                                                borderRadius: "20px",
                                                textTransform:
                                                    "uppercase",
                                                letterSpacing: "1px",
                                                boxShadow:
                                                    "0 4px 12px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            Smart Tech
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className="industry-icon"
                                        style={{
                                            "--color": industry.color,
                                            marginBottom: "1.5rem",
                                        }}
                                    >
                                        {industry.icon}
                                    </div>

                                    {/* Title */}
                                    <h3
                                        style={{
                                            fontSize: "1.9rem",
                                            fontWeight: 800,
                                            color: "#1e1b4b",
                                            marginBottom: "0.4rem",
                                        }}
                                    >
                                        {industry.title}
                                    </h3>

                                    {/* Tagline */}
                                    <p
                                        style={{
                                            fontSize: "0.95rem",
                                            fontWeight: 700,
                                            color: `rgb(${industry.color})`,
                                            marginBottom: "1.5rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        {industry.tagline}
                                    </p>

                                    {/* Description */}
                                    <p
                                        style={{
                                            fontSize: "1.05rem",
                                            color: "#64748b",
                                            lineHeight: 1.7,
                                            marginBottom: "2.5rem",
                                            minHeight: "80px",
                                        }}
                                    >
                                        {industry.desc}
                                    </p>

                                    {/* Features */}
                                    <div
                                        style={{
                                            borderTop:
                                                "1px solid #f1f5f9",
                                            paddingTop: "2rem",
                                            marginTop: "auto",
                                        }}
                                    >
                                        <h5
                                            style={{
                                                fontSize: "0.85rem",
                                                fontWeight: 800,
                                                textTransform:
                                                    "uppercase",
                                                color: "#475569",
                                                letterSpacing: "1.5px",
                                                marginBottom:
                                                    "1.2rem",
                                            }}
                                        >
                                            Key Capabilities
                                        </h5>

                                        <ul
                                            style={{
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0,
                                                display: "flex",
                                                flexDirection:
                                                    "column",
                                                gap: "0.9rem",
                                            }}
                                        >
                                            {industry.features.map(
                                                (feature, featureIndex) => (
                                                    <li
                                                        key={
                                                            featureIndex
                                                        }
                                                        style={{
                                                            display:
                                                                "flex",
                                                            gap: "10px",
                                                            alignItems:
                                                                "flex-start",
                                                            fontSize:
                                                                "0.98rem",
                                                            color: "#334155",
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        <CheckCircle2
                                                            size={16}
                                                            color={`rgb(${industry.color})`}
                                                            style={{
                                                                flexShrink: 0,
                                                                marginTop:
                                                                    "4px",
                                                            }}
                                                        />

                                                        <span>
                                                            {feature}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    {/* Expandable Details */}
                                    <div
                                        style={{
                                            maxHeight: isExpanded
                                                ? "400px"
                                                : "0",
                                            opacity: isExpanded
                                                ? 1
                                                : 0,
                                            overflow: "hidden",
                                            transition:
                                                "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                                            marginTop: isExpanded
                                                ? "2rem"
                                                : "0",
                                            paddingTop: isExpanded
                                                ? "1.5rem"
                                                : "0",
                                            borderTop: isExpanded
                                                ? "1px dashed #e2e8f0"
                                                : "none",
                                        }}
                                    >
                                        <h5
                                            style={{
                                                fontSize: "0.85rem",
                                                fontWeight: 800,
                                                textTransform:
                                                    "uppercase",
                                                color: `rgb(${industry.color})`,
                                                letterSpacing: "1.5px",
                                                marginBottom:
                                                    "0.8rem",
                                            }}
                                        >
                                            Deep Dive Integration
                                        </h5>

                                        <p
                                            style={{
                                                fontSize: "0.98rem",
                                                color: "#475569",
                                                lineHeight: 1.7,
                                                margin: 0,
                                            }}
                                        >
                                            {
                                                industry.detailedInfo
                                            }
                                        </p>
                                    </div>

                                    {/* Expand Button */}
                                    <div
                                        style={{
                                            marginTop: "2.5rem",
                                            display: "flex",
                                            justifyContent:
                                                "center",
                                            borderTop:
                                                "1px solid #f8fafc",
                                            paddingTop: "1.5rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                background:
                                                    isExpanded
                                                        ? `rgb(${industry.color})`
                                                        : "rgba(0, 0, 0, 0.03)",
                                                color: isExpanded
                                                    ? "white"
                                                    : "#475569",
                                                padding:
                                                    "0.6rem 1.4rem",
                                                borderRadius: "50px",
                                                fontSize: "0.8rem",
                                                fontWeight: 800,
                                                display: "inline-flex",
                                                alignItems:
                                                    "center",
                                                gap: "6px",
                                                transition:
                                                    "all 0.3s",
                                            }}
                                        >
                                            {isExpanded
                                                ? "Hide Details"
                                                : "View Integration Details"}

                                            <ChevronRight
                                                size={14}
                                                style={{
                                                    transform:
                                                        isExpanded
                                                            ? "rotate(90deg)"
                                                            : "rotate(0deg)",
                                                    transition:
                                                        "transform 0.3s",
                                                }}
                                            />
                                        </span>
                                    </div>

                                    {/* Learn More */}
                                    {isExpanded && (
                                        <RouterLink
                                            to={industry.link}
                                            onClick={(e) =>
                                                e.stopPropagation()
                                            }
                                            style={{
                                                marginTop: "1rem",
                                                width: "100%",
                                                padding:
                                                    "0.9rem 1.5rem",
                                                borderRadius: "50px",
                                                background: `rgb(${industry.color})`,
                                                color: "#fff",
                                                textDecoration:
                                                    "none",
                                                display: "flex",
                                                justifyContent:
                                                    "center",
                                                alignItems:
                                                    "center",
                                                gap: "8px",
                                                fontWeight: 700,
                                            }}
                                        >
                                            Explore{" "}
                                            {industry.title}
                                            <ArrowRight size={16} />
                                        </RouterLink>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= VALUE PROPOSITION ================= */}
            <section
                className="section-full"
                style={{
                    padding: "140px 0",
                    background: "#ffffff",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <div className="section-inner">
                    <div
                        className="feature-showcase-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "6rem",
                            alignItems: "center",
                        }}
                    >
                        {/* Left */}
                        <div data-aos="fade-right">
                            <span className="section-tag">
                                Value Proposition
                            </span>

                            <h2
                                style={{
                                    fontSize:
                                        "clamp(2.5rem, 5vw, 3.5rem)",
                                    fontWeight: 900,
                                    color: "#1e1b4b",
                                    marginBottom: "2rem",
                                    lineHeight: 1.1,
                                }}
                            >
                                Unified Technology{" "}
                                <span className="gradient-text-industry">
                                    Ecosystem
                                </span>
                            </h2>

                            <p
                                style={{
                                    fontSize: "1.15rem",
                                    color: "#55657e",
                                    lineHeight: 1.7,
                                    marginBottom: "3rem",
                                }}
                            >
                                We don't just deliver generic features.
                                We establish a complete business system
                                containing customized permissions, API
                                integrations, automation, and notification
                                models suitable for modern business
                                operations.
                            </p>

                            {/* Feature 1 */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1.5rem",
                                    alignItems: "flex-start",
                                    marginBottom: "2rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "15px",
                                        background:
                                            "rgba(0, 242, 255, 0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#00aebe",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Server size={22} />
                                </div>

                                <div>
                                    <h4
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 800,
                                            color: "#1e1b4b",
                                            marginBottom: "0.3rem",
                                        }}
                                    >
                                        High-Availability Cloud
                                    </h4>

                                    <p
                                        style={{
                                            color: "#64748b",
                                            fontSize: "1rem",
                                            lineHeight: 1.5,
                                            margin: 0,
                                        }}
                                    >
                                        Your business data and transactions
                                        remain secure with structured
                                        backups and reliable cloud
                                        infrastructure.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1.5rem",
                                    alignItems: "flex-start",
                                    marginBottom: "2rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "15px",
                                        background:
                                            "rgba(255, 0, 122, 0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#ff007a",
                                        flexShrink: 0,
                                    }}
                                >
                                    <ShieldCheck size={22} />
                                </div>

                                <div>
                                    <h4
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 800,
                                            color: "#1e1b4b",
                                            marginBottom: "0.3rem",
                                        }}
                                    >
                                        Role-Based Privacy Controls
                                    </h4>

                                    <p
                                        style={{
                                            color: "#64748b",
                                            fontSize: "1rem",
                                            lineHeight: 1.5,
                                            margin: 0,
                                        }}
                                    >
                                        Configure branches, counters,
                                        managers, staff, and auditors with
                                        controlled access permissions.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1.5rem",
                                    alignItems: "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "15px",
                                        background:
                                            "rgba(157, 0, 255, 0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#9d00ff",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Zap size={22} />
                                </div>

                                <div>
                                    <h4
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 800,
                                            color: "#1e1b4b",
                                            marginBottom: "0.3rem",
                                        }}
                                    >
                                        WhatsApp & SMS Operations
                                    </h4>

                                    <p
                                        style={{
                                            color: "#64748b",
                                            fontSize: "1rem",
                                            lineHeight: 1.5,
                                            margin: 0,
                                        }}
                                    >
                                        Automate invoice notifications,
                                        payment reminders, booking
                                        confirmations, and customer
                                        updates.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            className="stats-grid"
                            data-aos="fade-left"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "2rem",
                            }}
                        >
                            <div
                                className="stat-card"
                                style={{
                                    background: "#f8fafc",
                                    padding: "3.5rem 2.5rem",
                                    borderRadius: "35px",
                                    textAlign: "center",
                                    border: "1px solid #f1f5f9",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: 900,
                                        color: "#1d4ed8",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    100+
                                </h3>

                                <p
                                    style={{
                                        color: "#475569",
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        fontSize: "0.8rem",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Global Clients
                                </p>
                            </div>

                            <div
                                className="stat-card"
                                style={{
                                    background: "#f8fafc",
                                    padding: "3.5rem 2.5rem",
                                    borderRadius: "35px",
                                    textAlign: "center",
                                    border: "1px solid #f1f5f9",
                                    marginTop: "2rem",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: 900,
                                        color: "#059669",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    99%
                                </h3>

                                <p
                                    style={{
                                        color: "#475569",
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        fontSize: "0.8rem",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Uptime SLA
                                </p>
                            </div>

                            <div
                                className="stat-card"
                                style={{
                                    background: "#f8fafc",
                                    padding: "3.5rem 2.5rem",
                                    borderRadius: "35px",
                                    textAlign: "center",
                                    border: "1px solid #f1f5f9",
                                    marginTop: "-2rem",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: 900,
                                        color: "#d97706",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    24/7
                                </h3>

                                <p
                                    style={{
                                        color: "#475569",
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        fontSize: "0.8rem",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Engineers Standby
                                </p>
                            </div>

                            <div
                                className="stat-card"
                                style={{
                                    background: "#f8fafc",
                                    padding: "3.5rem 2.5rem",
                                    borderRadius: "35px",
                                    textAlign: "center",
                                    border: "1px solid #f1f5f9",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: 900,
                                        color: "#db2777",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    2x
                                </h3>

                                <p
                                    style={{
                                        color: "#475569",
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        fontSize: "0.8rem",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Process Speed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section
                className="section-full"
                style={{
                    padding: "0 2rem 140px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <div className="section-inner">
                    <div
                        className="cta-section"
                        data-aos="zoom-in"
                        style={{
                            padding: "100px 50px",
                            borderRadius: "70px",
                            textAlign: "center",
                            background:
                                "linear-gradient(225deg, #090b10 0%, #1e1b4b 100%)",
                            position: "relative",
                            overflow: "hidden",
                            boxShadow:
                                "0 50px 100px rgba(15, 23, 42, 0.25)",
                        }}
                    >
                        {/* Background Glow */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-150px",
                                left: "-150px",
                                width: "400px",
                                height: "400px",
                                background:
                                    "radial-gradient(circle, rgba(0, 242, 255, 0.18), transparent 70%)",
                                filter: "blur(50px)",
                            }}
                        />

                        <div
                            style={{
                                position: "absolute",
                                bottom: "-150px",
                                right: "-100px",
                                width: "450px",
                                height: "450px",
                                background:
                                    "radial-gradient(circle, rgba(255, 0, 122, 0.16), transparent 70%)",
                                filter: "blur(60px)",
                            }}
                        />

                        <div
                            style={{
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            <span
                                className="section-tag"
                                style={{
                                    display: "inline-flex",
                                    marginBottom: "1.5rem",
                                    color: "#00f2ff",
                                }}
                            >
                                Get Started
                            </span>

                            <h2
                                style={{
                                    fontSize:
                                        "clamp(2.5rem, 6vw, 4.5rem)",
                                    fontWeight: 900,
                                    color: "white",
                                    marginBottom: "2.5rem",
                                    letterSpacing: "-0.04em",
                                    lineHeight: 1.1,
                                }}
                            >
                                Scale Your Industry Operations{" "}
                                <span className="gradient-text-industry">
                                    With Custom Software Solutions
                                </span>
                            </h2>

                            <p
                                style={{
                                    fontSize: "1.4rem",
                                    color: "#cbd5e1",
                                    maxWidth: "800px",
                                    margin: "0 auto 4.5rem",
                                    lineHeight: 1.6,
                                }}
                            >
                                Schedule a custom demo built with dummy
                                data for your specific industry workspace
                                and discover how technology can simplify
                                your business operations.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "2rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                <RouterLink
                                    to="/contact"
                                    className="btn btn-primary cta-button"
                                    style={{
                                        padding: "1.4rem 4rem",
                                        borderRadius: "50px",
                                        fontWeight: 900,
                                        fontSize: "1.15rem",
                                        textDecoration: "none",
                                    }}
                                >
                                    Request a Demo{" "}
                                    <ArrowRight
                                        size={20}
                                        style={{
                                            marginLeft: "8px",
                                            verticalAlign: "middle",
                                        }}
                                    />
                                </RouterLink>

                                <a
                                    href="https://wa.me/919080999823"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-whatsapp cta-button"
                                    style={{
                                        padding: "1.4rem 4rem",
                                        borderRadius: "50px",
                                        fontWeight: 900,
                                        fontSize: "1.15rem",
                                        textDecoration: "none",
                                    }}
                                >
                                    WhatsApp Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Industries;