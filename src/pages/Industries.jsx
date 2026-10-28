import React, { useEffect, useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    Server,
    ShieldCheck,
    Zap,
    ChevronRight,
    ChevronDown,
    ChevronUp,
    Briefcase,
    UserCheck,
    HeartHandshake,
    Database,
    Workflow,
    Link2,
    BarChart3,
    Sparkles,
    Layers,
    Cpu,
    Globe,
    Smartphone,
    Laptop,
    MessageSquareText,
    Sliders,
    Clock,
    Target,
    HelpCircle,
    TrendingUp,
    Check
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Industries = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

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
                    background: linear-gradient(135deg, #FACC15 0%, #EAB308 50%, #CA8A04 100%);
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
                            "radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, transparent 68%)",
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
                            "radial-gradient(circle, rgba(129, 140, 248, 0.08) 0%, transparent 70%)",
                        filter: "blur(130px)",
                    }}
                />
            </div>

                        {/* ================= INDUSTRY SPECIFIC SOFTWARE SOLUTIONS HERO ================= */}
            <section
                className="industry-solutions-hero"
                style={{
                    position: "relative",
                    zIndex: 2,
                    paddingTop: "170px",
                    paddingBottom: "70px",
                }}
            >
                <div
                    className="section-inner"
                    style={{ padding: "0 2rem", maxWidth: "1200px", margin: "0 auto" }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                            alignItems: "center",
                            gap: "3rem",
                        }}
                    >
                    <div data-aos="fade-up">
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "8px 18px",
                                borderRadius: "50px",
                                background: "rgba(250, 204, 21, 0.15)",
                                border: "1px solid rgba(250, 204, 21, 0.35)",
                                color: "#B45309",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                marginBottom: "1.75rem",
                            }}
                        >
                            <Sparkles size={16} color="#EAB308" />
                            Tailored Business Solutions
                        </div>

                        <h1
                            style={{
                                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                                fontWeight: 800,
                                lineHeight: 1.2,
                                color: "#1e1b4b",
                                letterSpacing: "-0.02em",
                                marginBottom: "1.75rem",
                                maxWidth: "1050px",
                            }}
                        >
                            Industry Specific Software Solutions for{" "}
                            <span className="gradient-text-industry">
                                Modern Businesses
                            </span>
                        </h1>

                    </div>
                    <div data-aos="fade-left" style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src="/images.jpg"
                            alt="Industry-specific software solutions"
                            style={{
                                display: "block",
                                width: "100%",
                                maxWidth: "480px",
                                height: "auto",
                                borderRadius: "24px",
                                objectFit: "cover",
                                boxShadow: "0 24px 60px rgba(30, 27, 75, 0.16)",
                            }}
                        />
                    </div>
                    </div>
                    <div data-aos="fade-up" style={{ marginTop: "2rem" }}>
                        <div
                            style={{
                                maxWidth: "900px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.25rem",
                                marginBottom: "2.75rem",
                            }}
                        >
                            <p style={{ fontSize: "1.25rem", color: "#374151", lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                                Every industry has its own workflows, operational challenges, users and business requirements.
                            </p>
                            <p style={{ fontSize: "1.15rem", color: "#4B5563", lineHeight: 1.8, margin: 0 }}>
                                Fly Towards Digital Innovation develops industry specific software solutions designed around the way businesses operate. From healthcare and manufacturing to retail, logistics, education, construction and hospitality, we help businesses explore software solutions that align with their processes and digital requirements.
                            </p>
                            <p style={{ fontSize: "1.1rem", color: "#55657e", lineHeight: 1.8, margin: 0 }}>
                                Whether you need to replace manual workflows, modernise an existing system, connect applications or build a new business application, our approach starts with understanding the industry and the business problem behind the software requirement.
                            </p>
                        </div>
                        <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
                            <RouterLink to="/contact" className="btn btn-primary" style={{ padding: "1.15rem 2.5rem", borderRadius: "50px", fontWeight: 700, fontSize: "1.05rem", display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", boxShadow: "0 10px 25px rgba(250, 204, 21, 0.35)" }}>
                                <span>Discuss Your Industry Requirement</span>
                                <ArrowRight size={18} />
                            </RouterLink>
                            <a href="#explore-sectors" className="btn btn-outline" style={{ padding: "1.15rem 2.5rem", borderRadius: "50px", fontWeight: 700, fontSize: "1.05rem", borderColor: "#1F2937", color: "#1F2937", display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                                <span>Explore Our Solutions</span>
                                <ChevronRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SOFTWARE BUILT AROUND HOW YOUR INDUSTRY WORKS ================= */}
            <section
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "80px 0 90px",
                    background: "linear-gradient(180deg, rgba(248, 250, 252, 0.75) 0%, rgba(255, 255, 255, 0.95) 100%)",
                    borderTop: "1px solid rgba(229, 231, 235, 0.8)",
                    borderBottom: "1px solid rgba(229, 231, 235, 0.8)",
                }}
            >
                <div
                    className="section-inner"
                    style={{ padding: "0 2rem", maxWidth: "1200px", margin: "0 auto" }}
                >
                    <div data-aos="fade-up" style={{ maxWidth: "850px", marginBottom: "3rem" }}>
                        <h2
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                                fontWeight: 800,
                                color: "#1e1b4b",
                                letterSpacing: "-0.02em",
                                marginBottom: "1rem",
                            }}
                        >
                            Software Built Around How Your Industry Works
                        </h2>
                        <p
                            style={{
                                fontSize: "1.2rem",
                                color: "#374151",
                                lineHeight: 1.7,
                                marginBottom: "0.75rem",
                            }}
                        >
                            A software application that works well for one business may not be suitable for another.
                        </p>
                        <p
                            style={{
                                fontSize: "1.05rem",
                                color: "#6B7280",
                                fontWeight: 600,
                                margin: 0,
                            }}
                        >
                            Industry workflows can differ significantly in areas such as:
                        </p>
                    </div>

                    {/* 9 Workflow Areas Grid */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.25rem",
                            marginBottom: "3rem",
                        }}
                    >
                        {[
                            { title: "Business processes", icon: Briefcase },
                            { title: "User roles", icon: UserCheck },
                            { title: "Customer interactions", icon: HeartHandshake },
                            { title: "Information management", icon: Database },
                            { title: "Operational workflows", icon: Workflow },
                            { title: "Approval processes", icon: CheckCircle2 },
                            { title: "Reporting requirements", icon: BarChart3 },
                            { title: "Application integrations", icon: Link2 },
                            { title: "Automation needs", icon: Zap },
                        ].map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "18px",
                                        padding: "1.5rem",
                                        border: "1px solid #E5E7EB",
                                        boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                        e.currentTarget.style.boxShadow = "0 12px 25px rgba(250, 204, 21, 0.18)";
                                        e.currentTarget.style.borderColor = "#FACC15";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 18px rgba(0, 0, 0, 0.03)";
                                        e.currentTarget.style.borderColor = "#E5E7EB";
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "12px",
                                            background: "rgba(250, 204, 21, 0.15)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#B45309",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <IconComponent size={22} color="#CA8A04" />
                                    </div>
                                    <span
                                        style={{
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            color: "#1e1b4b",
                                        }}
                                    >
                                        {item.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Requirement-led approach callout */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        style={{
                            background: "#FFFFFF",
                            borderRadius: "24px",
                            padding: "clamp(2rem, 3.5vw, 2.75rem)",
                            border: "1px solid #E5E7EB",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.25rem",
                            borderLeft: "6px solid #FACC15",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "1.35rem",
                                fontWeight: 800,
                                color: "#1e1b4b",
                                margin: 0,
                            }}
                        >
                            That is why we take a requirement-led approach to software development.
                        </h3>
                        <p
                            style={{
                                fontSize: "1.1rem",
                                color: "#4B5563",
                                lineHeight: 1.8,
                                margin: 0,
                            }}
                        >
                            Rather than beginning with a generic feature list, we look at what the business needs the software to accomplish and how users will interact with it.
                        </p>
                        <p
                            style={{
                                fontSize: "1.05rem",
                                color: "#55657e",
                                lineHeight: 1.8,
                                margin: 0,
                            }}
                        >
                            The result can be a more focused approach to developing software around the business environment in which it will operate.
                        </p>
                        <div style={{ marginTop: "0.5rem" }}>
                            <RouterLink
                                to="/contact"
                                className="btn btn-primary"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    padding: "1rem 2.2rem",
                                    borderRadius: "50px",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    boxShadow: "0 10px 25px rgba(250, 204, 21, 0.35)",
                                }}
                            >
                                <span>Tell Us About Your Business</span>
                                <ArrowRight size={18} />
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </section>

{/* ================= HERO ================= */}
            <section
                className="industries-hero-container"
                style={{
                    position: "relative",
                    zIndex: 1,
                    paddingTop: "80px",
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
                                        background: "#EAB308",
                                    }}
                                />

                                <span
                                    style={{
                                        color: "#CA8A04",
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
                                    fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                                    fontWeight: 800,
                                    lineHeight: 1.2,
                                    marginBottom: "1.5rem",
                                    letterSpacing: "-0.03em",
                                    color: "#1e1b4b"
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
                                        background: "#FACC15",
                                        color: "#1F2937",
                                        boxShadow:
                                            "0 15px 35px rgba(250, 204, 21, 0.3)",
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
                                        borderColor: "#1F2937",
                                        color: "#1F2937",
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
                                            "linear-gradient(225deg, #FACC15, #EAB308)",
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
                                                    background: "#EAB308",
                                                }}
                                            />

                                            <span
                                                style={{
                                                    color: "#EAB308",
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
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
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
                                            "#FEF9C3",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#CA8A04",
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
                                            "rgba(31, 41, 55, 0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#1e1b4b",
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
                                        color: "#EAB308",
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
                            padding: "80px 40px",
                            textAlign: "center",
                            background: "transparent",
                            position: "relative",
                        }}
                    >
                        {/* Background Subtle Accent Aura */}
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "600px",
                                height: "400px",
                                background:
                                    "radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, rgba(129, 140, 248, 0.06) 50%, transparent 70%)",
                                filter: "blur(60px)",
                                pointerEvents: "none",
                                zIndex: 0,
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
                                    background: "#FEF9C3",
                                    border: "1px solid rgba(250, 204, 21, 0.5)",
                                    color: "#1F2937",
                                    padding: "0.45rem 1.25rem",
                                    borderRadius: "99px",
                                    fontSize: "0.85rem",
                                    fontWeight: 800,
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Get Started
                            </span>

                            <h2
                                style={{
                                    fontSize:
                                        "clamp(2.5rem, 6vw, 4.2rem)",
                                    fontWeight: 900,
                                    color: "#1e1b4b",
                                    marginBottom: "2rem",
                                    letterSpacing: "-0.04em",
                                    lineHeight: 1.15,
                                }}
                            >
                                Scale Your Industry Operations{" "}
                                <span className="gradient-text-industry">
                                    With Custom Software Solutions
                                </span>
                            </h2>

                            <p
                                style={{
                                    fontSize: "1.25rem",
                                    color: "#64748b",
                                    maxWidth: "800px",
                                    margin: "0 auto 3.5rem",
                                    lineHeight: 1.7,
                                    fontWeight: 500,
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
                                    gap: "1.5rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                <RouterLink
                                    to="/contact"
                                    className="btn btn-primary cta-button"
                                    style={{
                                        padding: "1.25rem 3.5rem",
                                        borderRadius: "50px",
                                        fontWeight: 900,
                                        fontSize: "1.1rem",
                                        background: "#FACC15",
                                        color: "#1F2937",
                                        boxShadow: "0 15px 35px rgba(250, 204, 21, 0.35)",
                                        textDecoration: "none",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    Request a Demo{" "}
                                    <ArrowRight
                                        size={20}
                                        color="#1F2937"
                                    />
                                </RouterLink>

                                <a
                                    href="https://wa.me/919080999823"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-whatsapp cta-button"
                                    style={{
                                        padding: "1.25rem 3.5rem",
                                        borderRadius: "50px",
                                        fontWeight: 900,
                                        fontSize: "1.1rem",
                                        textDecoration: "none",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        borderColor: "#25D366",
                                        color: "#25D366",
                                    }}
                                >
                                    WhatsApp Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            {/* ================= 1. VERTICAL SOFTWARE DEVELOPMENT ================= */}
            <section
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "100px 0",
                    background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
                    borderTop: "1px solid #E2E8F0",
                }}
            >
                <div className="section-inner" style={{ padding: "0 2rem", maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", alignItems: "center", gap: "3rem", marginBottom: "2rem" }}>
                    <div data-aos="fade-up">
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "50px", background: "rgba(250, 204, 21, 0.15)", border: "1px solid rgba(250, 204, 21, 0.35)", color: "#B45309", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1.25rem" }}>
                            <Sparkles size={16} color="#EAB308" />
                            Industry-Focused Engineering
                        </div>
                        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#1e1b4b", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                            Vertical Software Development for{" "}
                            <span className="gradient-text-industry">Industry-Specific Requirements</span>
                        </h2>
                    </div>
                    <div data-aos="fade-left" style={{ display: "flex", justifyContent: "center" }}>
                        <img src="/images (1).jpg" alt="Vertical software development for industry-specific requirements" style={{ display: "block", width: "100%", maxWidth: "480px", height: "auto", borderRadius: "24px", objectFit: "cover", boxShadow: "0 24px 60px rgba(30, 27, 75, 0.16)" }} />
                    </div>
                    </div>
                    <div data-aos="fade-up" style={{ maxWidth: "900px", marginBottom: "3.5rem" }}>
                        <p style={{ fontSize: "1.2rem", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
                            Vertical software development focuses on creating software for the requirements of a particular industry or business domain.
                        </p>
                        <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: 1.8, margin: 0 }}>
                            Instead of treating every project as a generic software implementation, this approach considers the environment in which the application will be used.
                        </p>
                    </div>

                    <div style={{ marginBottom: "2rem" }}>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1e1b4b", display: "flex", alignItems: "center", gap: "10px" }}>
                            <Workflow size={22} color="#EAB308" />
                            That means looking at:
                        </h3>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "1.5rem",
                            marginBottom: "3rem",
                        }}
                    >
                        {[
                            { title: "Industry Workflow", desc: "How does work move through the organisation?", icon: Workflow },
                            { title: "Business Users", desc: "Who uses the software, and what does each user need to accomplish?", icon: UserCheck },
                            { title: "Operational Requirements", desc: "What processes need to be supported, simplified or automated?", icon: Sliders },
                            { title: "Existing Technology", desc: "Which applications or systems already form part of the workflow?", icon: Cpu },
                            { title: "Data Requirements", desc: "What information needs to be captured, managed, accessed or reported?", icon: Database },
                            { title: "Future Requirements", desc: "How might the software need to evolve as the organisation changes?", icon: TrendingUp },
                        ].map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "20px",
                                        padding: "1.75rem",
                                        border: "1px solid #E2E8F0",
                                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.85rem",
                                        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-5px)";
                                        e.currentTarget.style.boxShadow = "0 14px 30px rgba(250, 204, 21, 0.18)";
                                        e.currentTarget.style.borderColor = "#FACC15";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.04)";
                                        e.currentTarget.style.borderColor = "#E2E8F0";
                                    }}
                                >
                                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(250, 204, 21, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#B45309" }}>
                                        <IconComponent size={22} color="#CA8A04" />
                                    </div>
                                    <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1e1b4b", margin: 0 }}>
                                        {item.title}
                                    </h4>
                                    <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div style={{ background: "linear-gradient(135deg, rgba(254, 249, 195, 0.45) 0%, #FFFFFF 100%)", borderLeft: "5px solid #FACC15", borderRadius: "14px", padding: "1.5rem 2rem", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.03)" }}>
                        <p style={{ fontSize: "1.1rem", color: "#374151", margin: 0, fontWeight: 500, lineHeight: 1.7 }}>
                            This provides a foundation for developing software that is relevant to the business context rather than simply delivering a collection of standard features.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= 2. CUSTOM INDUSTRY SOFTWARE ================= */}
            <section
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "100px 0",
                    background: "#0F172A",
                    color: "#FFFFFF",
                }}
            >
                <div className="section-inner" style={{ padding: "0 2rem", maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", alignItems: "center", gap: "3rem", marginBottom: "2rem" }}>
                    <div data-aos="fade-up">
                        <span style={{ display: "inline-block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "#FACC15", fontWeight: 700, marginBottom: "1rem" }}>
                            Bespoke System Architecture
                        </span>
                        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                            Custom Industry Software for Businesses With{" "}
                            <span style={{ color: "#FACC15" }}>Unique Requirements</span>
                        </h2>
                    </div>
                    <div data-aos="fade-left" style={{ display: "flex", justifyContent: "center" }}>
                        <img src="/images (2).jpg" alt="Custom industry software for businesses with unique requirements" style={{ display: "block", width: "100%", maxWidth: "480px", height: "auto", borderRadius: "24px", objectFit: "cover", boxShadow: "0 24px 60px rgba(0, 0, 0, 0.3)" }} />
                    </div>
                    </div>
                    <div data-aos="fade-up" style={{ maxWidth: "900px", marginBottom: "3.5rem" }}>
                        <p style={{ fontSize: "1.2rem", color: "#94A3B8", lineHeight: 1.8, marginBottom: "1rem" }}>
                            Off-the-shelf software can be useful when its functionality closely matches the business requirement.
                        </p>
                        <p style={{ fontSize: "1.15rem", color: "#E2E8F0", lineHeight: 1.8, margin: 0 }}>
                            But some organisations have processes that are too specific for a standard product.
                        </p>
                    </div>

                    <div style={{ marginBottom: "2rem" }}>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#FACC15" }}>
                            Custom industry software can be considered when a business needs software designed around:
                        </h3>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.25rem",
                            marginBottom: "3.5rem",
                        }}
                    >
                        {[
                            "Specialised workflows",
                            "Industry-specific processes",
                            "Unique business rules",
                            "Multiple user roles",
                            "Existing applications",
                            "Specific data requirements",
                            "Business automation",
                            "Customer-facing experiences",
                            "Internal operational requirements",
                        ].map((point, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: "rgba(30, 41, 59, 0.7)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    borderRadius: "16px",
                                    padding: "1.25rem 1.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(250, 204, 21, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FACC15", flexShrink: 0 }}>
                                    <Check size={16} />
                                </div>
                                <span style={{ fontSize: "1.05rem", fontWeight: 600, color: "#F1F5F9" }}>
                                    {point}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            background: "linear-gradient(135deg, rgba(250, 204, 21, 0.15) 0%, rgba(253, 224, 71, 0.05) 100%)",
                            border: "1px solid rgba(250, 204, 21, 0.3)",
                            borderRadius: "20px",
                            padding: "2rem",
                            textAlign: "center",
                            maxWidth: "750px",
                            margin: "0 auto",
                        }}
                    >
                        <p style={{ fontSize: "1.35rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 0.5rem" }}>
                            The purpose is not to make software complex.
                        </p>
                        <p style={{ fontSize: "1.35rem", fontWeight: 800, color: "#FACC15", margin: 0 }}>
                            The purpose is to make the software relevant.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= 3. WHAT CAN WE BUILD FOR YOUR INDUSTRY ================= */}
            <section
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "100px 0",
                    background: "#FFFFFF",
                }}
            >
                <div className="section-inner" style={{ padding: "0 2rem", maxWidth: "1200px", margin: "0 auto" }}>
                    <div data-aos="fade-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "50px", background: "rgba(250, 204, 21, 0.15)", border: "1px solid rgba(250, 204, 21, 0.35)", color: "#B45309", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1.25rem" }}>
                            <Cpu size={16} color="#EAB308" />
                            Comprehensive Digital Capabilities
                        </div>
                        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#1e1b4b", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                            What Can We Build for Your Industry?
                        </h2>
                        <p style={{ fontSize: "1.2rem", color: "#64748b", margin: 0 }}>
                            Industry-specific software can take many forms depending on the business requirement.
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {[
                            { title: "Business Applications", desc: "Purpose-built applications for internal business processes and operations.", icon: Briefcase },
                            { title: "Enterprise Software", desc: "Applications supporting larger or more complex organisational workflows.", icon: Server },
                            { title: "SaaS Platforms", desc: "Digital software products designed for online users and SaaS business models.", icon: Globe },
                            { title: "Web Applications", desc: "Browser-based applications for customers, employees, partners or internal teams.", icon: Laptop },
                            { title: "Mobile Applications", desc: "Mobile experiences supporting specific business processes or user requirements.", icon: Smartphone },
                            { title: "Workflow Applications", desc: "Software designed to digitise and manage specific business workflows.", icon: Workflow },
                            { title: "Business Dashboards", desc: "Applications that bring relevant business information into more accessible interfaces.", icon: BarChart3 },
                            { title: "Integrated Software Systems", desc: "Solutions designed to help connect applications and information across business processes.", icon: Link2 },
                            { title: "Software Modernisation", desc: "Improvements to existing applications where the business needs to update or extend its software environment.", icon: Sparkles },
                        ].map((card, idx) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        background: "#F8FAFC",
                                        borderRadius: "20px",
                                        padding: "2rem",
                                        border: "1px solid #E2E8F0",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-6px)";
                                        e.currentTarget.style.background = "#FFFFFF";
                                        e.currentTarget.style.boxShadow = "0 16px 35px rgba(250, 204, 21, 0.2)";
                                        e.currentTarget.style.borderColor = "#FACC15";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.background = "#F8FAFC";
                                        e.currentTarget.style.boxShadow = "none";
                                        e.currentTarget.style.borderColor = "#E2E8F0";
                                    }}
                                >
                                    <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(250, 204, 21, 0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#B45309" }}>
                                        <IconComponent size={24} color="#CA8A04" />
                                    </div>
                                    <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1e1b4b", margin: 0 }}>
                                        {card.title}
                                    </h4>
                                    <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                                        {card.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= 4. FROM INDUSTRY CHALLENGE TO SOFTWARE SOLUTION ================= */}
            <section
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "100px 0",
                    background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
                    borderTop: "1px solid #E2E8F0",
                }}
            >
                <div className="section-inner" style={{ padding: "0 2rem", maxWidth: "1200px", margin: "0 auto" }}>
                    <div data-aos="fade-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "50px", background: "rgba(250, 204, 21, 0.15)", border: "1px solid rgba(250, 204, 21, 0.35)", color: "#B45309", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1.25rem" }}>
                            <Target size={16} color="#EAB308" />
                            Proven Delivery Framework
                        </div>
                        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#1e1b4b", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                            From Industry Challenge to Software Solution
                        </h2>
                        <p style={{ fontSize: "1.2rem", color: "#64748b", margin: 0 }}>
                            The development process begins with the business requirement.
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "1.75rem",
                            marginBottom: "3rem",
                        }}
                    >
                        {[
                            { num: "01", title: "Understand Your Industry Context", desc: "We look at the business environment, processes, users and current technology." },
                            { num: "02", title: "Identify the Software Requirement", desc: "We determine what the software needs to accomplish and where the current process creates challenges." },
                            { num: "03", title: "Define the Solution", desc: "The requirements are translated into a clearer software scope and solution direction." },
                            { num: "04", title: "Design the Experience", desc: "The application's structure and user experience are planned around the intended users and workflows." },
                            { num: "05", title: "Develop the Software", desc: "The solution is developed according to the agreed requirements and technical direction." },
                            { num: "06", title: "Improve as Requirements Evolve", desc: "Software can continue to be maintained, enhanced and extended as business requirements change." },
                        ].map((step, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: "#FFFFFF",
                                    borderRadius: "20px",
                                    padding: "2rem",
                                    border: "1px solid #E2E8F0",
                                    boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                <span style={{ fontSize: "2rem", fontWeight: 900, color: "#FACC15", lineHeight: 1 }}>
                                    {step.num}
                                </span>
                                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e1b4b", margin: 0 }}>
                                    {step.title}
                                </h4>
                                <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{ background: "#FFFFFF", borderLeft: "5px solid #FACC15", borderRadius: "14px", padding: "1.5rem 2rem", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.03)", border: "1px solid #E2E8F0", borderLeftWidth: "5px", borderLeftColor: "#FACC15" }}>
                        <p style={{ fontSize: "1.1rem", color: "#374151", margin: 0, fontWeight: 500, lineHeight: 1.7 }}>
                            This approach keeps the software connected to the industry and business problem it was designed to address.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= 5. WHY CHOOSE FLY TOWARDS ================= */}
            <section
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "100px 0",
                    background: "#0F172A",
                    color: "#FFFFFF",
                }}
            >
                <div className="section-inner" style={{ padding: "0 2rem", maxWidth: "1200px", margin: "0 auto" }}>
                    <div data-aos="fade-up" style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto 4rem" }}>
                        <span style={{ display: "inline-block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "#FACC15", fontWeight: 700, marginBottom: "1rem" }}>
                            Why Partner With Us
                        </span>
                        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                            Why Choose Fly Towards Digital Innovation?
                        </h2>
                        <p style={{ fontSize: "1.2rem", color: "#94A3B8", margin: "0 0 1rem" }}>
                            Industry-specific development requires an understanding of both technology and business requirements.
                        </p>
                        <p style={{ fontSize: "1.05rem", color: "#FACC15", fontWeight: 600, margin: 0 }}>
                            Fly Towards Digital Innovation&apos;s software development approach is built around:
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {[
                            { title: "Business-Focused Requirements", desc: "We begin by understanding what the software needs to accomplish for the business.", icon: Briefcase },
                            { title: "Technical Expertise", desc: "Software solutions are developed with attention to the technical requirements of the project.", icon: Cpu },
                            { title: "Experienced Developers", desc: "Our development capabilities support different software requirements and business use cases.", icon: UserCheck },
                            { title: "End-to-End Development", desc: "We support the software development journey from requirements through development and future improvements.", icon: Layers },
                            { title: "Flexible Engagement", desc: "Projects can require different levels of development support. Engagement can be considered according to the project's needs.", icon: Clock },
                        ].map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        background: "rgba(30, 41, 59, 0.7)",
                                        borderRadius: "20px",
                                        padding: "2rem",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                    }}
                                >
                                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(250, 204, 21, 0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FACC15" }}>
                                        <IconComponent size={22} />
                                    </div>
                                    <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                                        {item.title}
                                    </h4>
                                    <p style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= 6. NOT SURE WHICH SOLUTION YOU NEED ================= */}
            <section
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "100px 0",
                    background: "#FFFFFF",
                }}
            >
                <div className="section-inner" style={{ padding: "0 2rem", maxWidth: "1200px", margin: "0 auto" }}>
                    <div data-aos="fade-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "50px", background: "rgba(250, 204, 21, 0.15)", border: "1px solid rgba(250, 204, 21, 0.35)", color: "#B45309", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1.25rem" }}>
                            <HelpCircle size={16} color="#EAB308" />
                            Problem-Solving Consultation
                        </div>
                        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#1e1b4b", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                            Not Sure Which Industry Software Solution You Need?
                        </h2>
                        <p style={{ fontSize: "1.2rem", color: "#64748b", margin: 0 }}>
                            You may know the problem without knowing the technical solution.
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                            gap: "1.5rem",
                            marginBottom: "3.5rem",
                        }}
                    >
                        {[
                            { quote: "“Our team still relies on manual processes.”", answer: "We can explore whether a digital workflow or custom application could support the process." },
                            { quote: "“Our current software does not match our workflow.”", answer: "We can explore the requirements for a more tailored application." },
                            { quote: "“Our systems are disconnected.”", answer: "We can look at the requirement for connected workflows or application integration." },
                            { quote: "“We need an application for our customers.”", answer: "We can explore web or mobile application requirements." },
                            { quote: "“We have an existing application that needs improvement.”", answer: "Software maintenance, enhancement or modernisation may be appropriate depending on the system." },
                            { quote: "“We have an idea for a software product.”", answer: "The requirement can be explored as a custom application or SaaS development project." },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: "#F8FAFC",
                                    borderRadius: "20px",
                                    padding: "2rem",
                                    border: "1px solid #E2E8F0",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.85rem",
                                }}
                            >
                                <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1e1b4b", fontStyle: "italic" }}>
                                    {card.quote}
                                </span>
                                <p style={{ fontSize: "1rem", color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
                                    {card.answer}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            background: "linear-gradient(135deg, rgba(254, 249, 195, 0.5) 0%, #FFFFFF 100%)",
                            border: "1px solid rgba(250, 204, 21, 0.4)",
                            borderRadius: "24px",
                            padding: "clamp(2rem, 3.5vw, 3rem)",
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "1.5rem",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                        }}
                    >
                        <div style={{ maxWidth: "680px" }}>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1e1b4b", margin: "0 0 0.5rem" }}>
                                You do not need to define the entire technical solution before starting the conversation.
                            </h3>
                            <p style={{ fontSize: "1.05rem", color: "#4B5563", margin: 0 }}>
                                Share your everyday operational challenges with us, and we will help you map out the software path forward.
                            </p>
                        </div>
                        <RouterLink
                            to="/contact"
                            className="btn btn-primary"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "1.1rem 2.4rem",
                                borderRadius: "50px",
                                fontWeight: 700,
                                fontSize: "1.05rem",
                                textDecoration: "none",
                                boxShadow: "0 10px 25px rgba(250, 204, 21, 0.35)",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <span>Discuss Your Requirement</span>
                            <ArrowRight size={18} />
                        </RouterLink>
                    </div>
                </div>
            </section>

            {/* ================= 7. FREQUENTLY ASKED QUESTIONS ================= */}
            <section
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "100px 0",
                    background: "#F8FAFC",
                    borderTop: "1px solid #E2E8F0",
                }}
            >
                <div className="section-inner" style={{ padding: "0 2rem", maxWidth: "950px", margin: "0 auto" }}>
                    <div data-aos="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "50px", background: "rgba(250, 204, 21, 0.15)", border: "1px solid rgba(250, 204, 21, 0.35)", color: "#B45309", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1.25rem" }}>
                            <HelpCircle size={16} color="#EAB308" />
                            Knowledge Base
                        </div>
                        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#1e1b4b", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div data-aos="fade-up" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {[
                            {
                                q: "What are industry specific software solutions?",
                                a: "Industry specific software solutions are applications designed around the workflows, users, processes and requirements of a particular industry or business environment.",
                            },
                            {
                                q: "What is software solutions by industry?",
                                a: "Software solutions by industry means developing or selecting software based on the specific requirements of an industry rather than assuming that the same solution will work equally well across every business.",
                            },
                            {
                                q: "What is vertical software development?",
                                a: "Vertical software development focuses on software designed for a particular industry, business domain or specialised use case. It considers the processes and requirements associated with that specific environment.",
                            },
                            {
                                q: "What is custom industry software?",
                                a: "Custom industry software is software developed around specialised business or industry requirements. It can be used when standard software does not adequately support a company's workflows or operational needs.",
                            },
                            {
                                q: "Which industries do you provide software solutions for?",
                                a: "Our industry focus includes healthcare, manufacturing, retail, logistics, education, construction and hospitality.",
                            },
                            {
                                q: "Can you build software specifically for our industry?",
                                a: "Yes. Software projects can be developed around specific business and industry requirements. The appropriate solution depends on the processes, users, functionality and technical requirements involved.",
                            },
                            {
                                q: "Do industry-specific solutions have to be completely custom?",
                                a: "Not necessarily. The right approach depends on the requirement. A business may need custom development, integration, enhancement of an existing system, or another combination of software capabilities.",
                            },
                            {
                                q: "Can you modernise software we already use?",
                                a: "Existing applications can be considered for maintenance, enhancement or modernisation depending on their technical condition and the business requirements.",
                            },
                            {
                                q: "Can you integrate industry software with existing systems?",
                                a: "Application integration can be considered where the project requires existing systems or applications to work together. The appropriate approach depends on the technologies and systems involved.",
                            },
                            {
                                q: "How do I know which software solution is right for my business?",
                                a: "Start with the business problem rather than the technology. Explain your current process, the challenge you are facing, who uses the system and what you want to achieve. From there, the software requirements can be explored.",
                            },
                        ].map((faq, idx) => {
                            const isOpen = activeFaq === idx;
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "16px",
                                        border: isOpen ? "1px solid #FACC15" : "1px solid #E2E8F0",
                                        overflow: "hidden",
                                        boxShadow: isOpen ? "0 8px 25px rgba(250, 204, 21, 0.15)" : "0 2px 10px rgba(0, 0, 0, 0.02)",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <div
                                        onClick={() => toggleFaq(idx)}
                                        style={{
                                            padding: "1.4rem 1.8rem",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            cursor: "pointer",
                                            gap: "1rem",
                                        }}
                                    >
                                        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: isOpen ? "#1e1b4b" : "#334155", margin: 0 }}>
                                            {faq.q}
                                        </h3>
                                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: isOpen ? "#FACC15" : "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.3s ease" }}>
                                            {isOpen ? <ChevronUp size={18} color="#1e1b4b" /> : <ChevronDown size={18} color="#64748b" />}
                                        </div>
                                    </div>
                                    {isOpen && (
                                        <div style={{ padding: "0 1.8rem 1.5rem", borderTop: "1px solid #F1F5F9" }}>
                                            <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.7, margin: "1rem 0 0" }}>
                                                {faq.a}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= 8. BUILD SOFTWARE AROUND YOUR INDUSTRY (CLOSING CTA) ================= */}
            <section
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "110px 0",
                    background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)",
                    color: "#FFFFFF",
                }}
            >
                <div className="section-inner" style={{ padding: "0 2rem", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
                    <div data-aos="fade-up">
                        <span style={{ display: "inline-block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "#FACC15", fontWeight: 700, marginBottom: "1rem" }}>
                            Start Your Transformation
                        </span>
                        <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                            Build Software Around{" "}
                            <span style={{ color: "#FACC15" }}>Your Industry</span>
                        </h2>
                        <div style={{ maxWidth: "820px", margin: "0 auto 2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <p style={{ fontSize: "1.25rem", color: "#E2E8F0", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                                Your industry has its own processes, users and operational requirements.
                            </p>
                            <p style={{ fontSize: "1.15rem", color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>
                                Your software should be designed with those realities in mind.
                            </p>
                            <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.7, margin: 0 }}>
                                Whether you need a new business application, a customer-facing platform, a mobile application, an industry-specific workflow solution or improvements to an existing system, Fly Towards Digital Innovation can help you explore the appropriate software development approach.
                            </p>
                        </div>

                        <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FACC15", marginBottom: "2.5rem" }}>
                            Tell us what your business needs to solve, improve or build.
                        </p>

                        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                            <RouterLink
                                to="/contact"
                                className="btn btn-primary"
                                style={{
                                    padding: "1.2rem 3rem",
                                    borderRadius: "50px",
                                    fontWeight: 800,
                                    fontSize: "1.05rem",
                                    background: "#FACC15",
                                    color: "#1F2937",
                                    boxShadow: "0 15px 35px rgba(250, 204, 21, 0.4)",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                <span>Discuss Your Industry Requirement</span>
                                <ArrowRight size={18} />
                            </RouterLink>

                            <RouterLink
                                to="/contact"
                                className="btn btn-outline"
                                style={{
                                    padding: "1.2rem 3rem",
                                    borderRadius: "50px",
                                    fontWeight: 800,
                                    fontSize: "1.05rem",
                                    borderColor: "#FFFFFF",
                                    color: "#FFFFFF",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                <span>Contact Our Team</span>
                                <ChevronRight size={18} />
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </section>
</main>
    );
};

export default Industries;
