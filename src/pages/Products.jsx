import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    ArrowRight,
    CheckCircle2,
    Database,
    CreditCard,
    Info,
    ShieldAlert,
    ChevronDown,
    Activity,
    Settings,
    ShoppingBag,
    BookOpen,
    Building,
    Coffee,
    Wrench,
    Globe,
    Smartphone,
    Cloud,
    HelpCircle,
    CheckCircle,
    Users,
    Compass,
    Shield,
    Landmark,
    Cpu,
    GitBranch,
    TrendingUp
} from 'lucide-react';

const Products = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        document.title =
            'Business Software Solutions for Everyday Business Needs | Fly Towards';

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );

        if (metaDescription) {
            metaDescription.setAttribute(
                'content',
                'Fly Towards Digital Innovation provides business software solutions designed to support practical business requirements, including CRM, Billing and Payroll software.'
            );
        }

        const metaKeywords = document.querySelector(
            'meta[name="keywords"]'
        );

        if (metaKeywords) {
            metaKeywords.setAttribute(
                'content',
                'Business Software, CRM Software, Billing Software, Payroll Software, Custom Software Development, Software Development Services'
            );
        }

        const robots = document.querySelector('meta[name="robots"]');

        if (robots) {
            robots.setAttribute('content', 'index, follow');
        }

        const canonical = document.querySelector(
            'link[rel="canonical"]'
        );

        if (canonical) {
            canonical.setAttribute(
                'href',
                'https://flytowardsdigitalinnovation.com/products'
            );
        }
    }, []);

    const toggleFaq = (idx) => {
        setActiveFaq(activeFaq === idx ? null : idx);
    };

    const crmNeeds = [
        'Organise customer information',
        'Manage customer-related activities',
        'Improve visibility of customer records',
        'Reduce dependence on scattered information',
        'Bring customer-related workflows into a more structured system'
    ];

    const billingNeeds = [
        'Organise billing activities',
        'Manage billing information',
        'Reduce repetitive manual work',
        'Improve visibility of billing processes',
        'Maintain a more structured approach to business billing'
    ];

    const payrollNeeds = [
        'Manage employee salary profiles',
        'Automate monthly payroll runs',
        'Track leaves, attendance, and deductions',
        'Generate detailed payslips',
        'Maintain compliance with salary and tax regulations'
    ];

    const selectionQuestions = [
        'What business problem needs to be addressed?',
        'Who will use the software?',
        'Which processes need to be managed?',
        'What information needs to be captured?',
        'Are existing systems involved?',
        'Does the software need to integrate with another application?',
        'What functionality is essential?',
        'Will the requirement change as the business grows?'
    ];

    const productExplains = [
        'What it does',
        'Who it is intended for',
        'Which business problem it addresses',
        'Key features',
        'Supported workflows',
        'Integrations, where confirmed',
        'Deployment model, where confirmed',
        'Support options, where confirmed',
        'How to request a demo or enquiry'
    ];

    const readyMadeNotEnough = [
        'A workflow designed around its own operations',
        'Integration between multiple existing systems',
        'A specialised business application',
        'Custom user roles and processes',
        'A unique customer or employee portal',
        'Functionality that is not available in an existing product'
    ];

    const faqs = [
        {
            q: 'What are business software solutions?',
            a: 'Business software solutions are applications designed to support specific business activities, workflows or operational requirements. Examples can include CRM, billing, accounting, ERP and other business management applications.'
        },
        {
            q: 'What type of business software does Fly Towards Digital Innovation provide?',
            a: 'Fly Towards Digital Innovation provides business software solutions including CRM, billing and payroll products. Additional product categories or features can be introduced based on confirmed product capabilities.'
        },
        {
            q: 'Is business software suitable for small businesses?',
            a: 'Business software can be useful for small businesses when it addresses a genuine operational need. The suitability depends on the business size, processes, users, functionality and future requirements.'
        },
        {
            q: 'What is the difference between business software and custom software?',
            a: 'Business software can refer to applications designed to support common business activities, while custom software is developed around specific requirements. If an existing product does not adequately address a business workflow, custom development may be considered.'
        },
        {
            q: 'Can you build custom software if an existing product does not meet our requirements?',
            a: 'Yes. Custom software development is part of Fly Towards Digital Innovation’s wider service portfolio. The specific scope and approach can be determined based on the business requirement.'
        }
    ];

    const industries = [
        {
            name: 'Manufacturing Software',
            path: '/industries/manufacturing/',
            icon: <Settings size={24} color="var(--secondary)" />
        },
        {
            name: 'Healthcare Software',
            path: '/industries/healthcare/',
            icon: <Activity size={24} color="var(--primary)" />
        },
        {
            name: 'Education Software',
            path: '/industries/education/',
            icon: <BookOpen size={24} color="var(--primary)" />
        },
        {
            name: 'Construction Software',
            path: '/industries/construction/',
            icon: <Building size={24} color="var(--secondary)" />
        },
        {
            name: 'Retail Software',
            path: '/industries/retail/',
            icon: <ShoppingBag size={24} color="var(--accent)" />
        },
        {
            name: 'Finance Software',
            path: '/industries/finance/',
            icon: <Database size={24} color="var(--primary)" />
        },
        {
            name: 'Travel Software',
            path: '/industries/travel/',
            icon: <Compass size={24} color="var(--secondary)" />
        },
        {
            name: 'Hospitality Software',
            path: '/industries/hospitality/',
            icon: <Coffee size={24} color="var(--accent)" />
        },
        {
            name: 'Insurance Software',
            path: '/industries/insurance/',
            icon: <Shield size={24} color="var(--primary)" />
        },
        {
            name: 'Government Software',
            path: '/industries/government/',
            icon: <Landmark size={24} color="var(--secondary)" />
        }
    ];

    return (
        <main
            style={{
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div className="mesh-bg"></div>

            {/* Ambient Background Glows */}

            <div
                style={{
                    position: 'absolute',
                    top: '5%',
                    right: '-10%',
                    width: '500px',
                    height: '500px',
                    background:
                        'radial-gradient(circle, rgba(0,242,255,0.06) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    zIndex: -1,
                    filter: 'blur(60px)'
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    top: '35%',
                    left: '-10%',
                    width: '600px',
                    height: '600px',
                    background:
                        'radial-gradient(circle, rgba(255,0,122,0.04) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    zIndex: -1,
                    filter: 'blur(70px)'
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    background:
                        'radial-gradient(circle, rgba(157,0,255,0.05) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    zIndex: -1,
                    filter: 'blur(50px)'
                }}
            />

            {/* ================= HERO ================= */}

            <section
                className="hero"
                style={{
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: '40px'
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            justifyContent: 'center',
                            display: 'flex',
                            margin: '0 auto 1.5rem'
                        }}
                    >
                        Ecosystem Products
                    </span>

                    <h1
                        className="hero-title"
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            marginBottom: '1.5rem',
                            lineHeight: 1.1
                        }}
                    >
                        Business Software Solutions{' '}
                        <span className="gradient-text">
                            for Everyday Business Needs
                        </span>
                    </h1>

                    <p
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.8,
                            marginBottom: '2rem'
                        }}
                    >
                        Empower your team and streamline your processes with
                        smart software products designed to fit your
                        operational workflows.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <a
                            href="#products"
                            className="btn btn-primary"
                            style={{
                                padding: '1.1rem 2.8rem'
                            }}
                        >
                            Explore Our Products
                            <ArrowRight size={18} />
                        </a>

                        <Link
                            to="/contact/"
                            className="btn btn-outline"
                            style={{
                                padding: '1.1rem 2.8rem',
                                borderColor: 'rgba(15, 23, 42, 0.2)'
                            }}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}

            <section
                style={{
                    padding: '4rem 8% 2rem'
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto 2rem'
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            display: 'inline-flex',
                            marginBottom: '1rem'
                        }}
                    >
                        Operational Design
                    </span>

                    <h2
                        style={{
                            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                            marginBottom: '1.5rem',
                            fontWeight: 800
                        }}
                    >
                        Software Products Designed{' '}
                        <span className="gradient-text">
                            for Business Operations
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: '1.15rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.8,
                            marginBottom: '1.5rem'
                        }}
                    >
                        Businesses need software that supports the way they
                        actually work. Managing customer information,
                        handling billing activities and coordinating everyday
                        business processes can become increasingly difficult
                        when teams rely on manual work or disconnected tools.
                    </p>

                    <p
                        style={{
                            fontSize: '1.15rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.8
                        }}
                    >
                        Fly Towards Digital Innovation provides{' '}
                        <Link
                            to="/services/"
                            style={{
                                color: 'var(--primary)',
                                fontWeight: '600',
                                textDecoration: 'none'
                            }}
                        >
                            Software Development Services
                        </Link>{' '}
                        and business software solutions designed to support
                        practical business requirements.
                    </p>
                </div>
            </section>

            {/* ================= PRODUCTS ================= */}

            <section
                id="products"
                style={{
                    padding: '4rem 8%'
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}
                    data-aos="fade-up"
                >
                    <span className="section-tag">
                        Explore Portfolio
                    </span>

                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 800
                        }}
                    >
                        Our Business{' '}
                        <span className="gradient-text">
                            Software Products
                        </span>
                    </h2>
                </div>

                {/* PRODUCT CARDS */}

                <div
                    className="grid"
                    style={{
                        gap: '3rem',
                        maxWidth: '1100px',
                        margin: '0 auto'
                    }}
                >
                    {/* Payroll */}

                    <div
                        className="card"
                        data-aos="fade-up"
                        style={{
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            borderRadius: '24px',
                            background: 'var(--bg-white)'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                marginBottom: '1.5rem'
                            }}
                        >
                            <div
                                style={{
                                    background:
                                        'rgba(157, 0, 255, 0.05)',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Users
                                    size={32}
                                    color="var(--accent)"
                                />
                            </div>

                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: '1.6rem',
                                    fontWeight: 800
                                }}
                            >
                                Payroll Software
                            </h3>
                        </div>

                        <p
                            style={{
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                fontSize: '1.05rem',
                                lineHeight: 1.7
                            }}
                        >
                            Process employee salaries, track deductions,
                            manage leaves, and generate payslips. Payroll
                            Software helps businesses automate salary runs and
                            maintain precise payroll records.
                        </p>

                        <h4
                            style={{
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                color: 'var(--text-dark)'
                            }}
                        >
                            Suitable for businesses that need to:
                        </h4>

                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '0 0 2rem 0'
                            }}
                        >
                            {payrollNeeds.map((need, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'flex-start',
                                        marginBottom: '0.75rem',
                                        color: 'var(--text-muted)',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    <CheckCircle2
                                        size={16}
                                        color="var(--accent)"
                                        style={{
                                            flexShrink: 0,
                                            marginTop: '3px'
                                        }}
                                    />
                                    <span>{need}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/products/payroll-software"
                            className="btn btn-primary"
                            style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                padding: '1rem 2rem',
                                marginTop: 'auto'
                            }}
                        >
                            Explore Payroll Software
                            <ArrowRight
                                size={18}
                                style={{
                                    marginLeft: '8px'
                                }}
                            />
                        </Link>
                    </div>

                    {/* Billing */}

                    <div
                        className="card"
                        data-aos="fade-up"
                        style={{
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            borderRadius: '24px',
                            background: 'var(--bg-white)'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                marginBottom: '1.5rem'
                            }}
                        >
                            <div
                                style={{
                                    background:
                                        'rgba(255, 0, 122, 0.05)',
                                    padding: '12px',
                                    borderRadius: '12px'
                                }}
                            >
                                <CreditCard
                                    size={32}
                                    color="var(--secondary)"
                                />
                            </div>

                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: '1.6rem',
                                    fontWeight: 800
                                }}
                            >
                                Billing Software
                            </h3>
                        </div>

                        <p
                            style={{
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                fontSize: '1.05rem',
                                lineHeight: 1.7
                            }}
                        >
                            Billing activities are an important part of
                            everyday business operations. Billing Software can
                            help businesses manage billing-related activities
                            through a structured software environment rather
                            than relying entirely on manual processes.
                        </p>

                        <h4
                            style={{
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                marginBottom: '1rem'
                            }}
                        >
                            Suitable for businesses that need to:
                        </h4>

                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '0 0 2rem 0'
                            }}
                        >
                            {billingNeeds.map((need, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'flex-start',
                                        marginBottom: '0.75rem',
                                        color: 'var(--text-muted)',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    <CheckCircle2
                                        size={16}
                                        color="var(--secondary)"
                                        style={{
                                            flexShrink: 0,
                                            marginTop: '3px'
                                        }}
                                    />
                                    <span>{need}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/products/billing-software"
                            className="btn btn-outline"
                            style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                padding: '1rem 2rem',
                                border: '1px solid var(--border)',
                                marginTop: 'auto'
                            }}
                        >
                            Explore Billing Software
                            <ArrowRight
                                size={18}
                                style={{
                                    marginLeft: '8px'
                                }}
                            />
                        </Link>
                    </div>

                    {/* CRM */}

                    <div
                        className="card"
                        data-aos="fade-up"
                        style={{
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            borderRadius: '24px',
                            background: 'var(--bg-white)'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                marginBottom: '1.5rem'
                            }}
                        >
                            <div
                                style={{
                                    background:
                                        'rgba(0, 242, 255, 0.05)',
                                    padding: '12px',
                                    borderRadius: '12px'
                                }}
                            >
                                <Database
                                    size={32}
                                    color="var(--primary)"
                                />
                            </div>

                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: '1.6rem',
                                    fontWeight: 800
                                }}
                            >
                                CRM Software
                            </h3>
                        </div>

                        <p
                            style={{
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                fontSize: '1.05rem',
                                lineHeight: 1.7
                            }}
                        >
                            Customer information and related business
                            activities can become difficult to manage when
                            information is spread across different systems or
                            maintained manually. CRM Software provides a
                            structured environment for managing
                            customer-related information and business
                            interactions.
                        </p>

                        <h4
                            style={{
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                marginBottom: '1rem'
                            }}
                        >
                            Suitable for businesses that need to:
                        </h4>

                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '0 0 2rem 0'
                            }}
                        >
                            {crmNeeds.map((need, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        gap: '10px',
                                        marginBottom: '0.75rem',
                                        color: 'var(--text-muted)',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    <CheckCircle2
                                        size={16}
                                        color="var(--primary)"
                                        style={{
                                            flexShrink: 0,
                                            marginTop: '3px'
                                        }}
                                    />

                                    <span>{need}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/products/crm-software"
                            className="btn btn-primary"
                            style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                padding: '1rem 2rem',
                                marginTop: 'auto'
                            }}
                        >
                            Explore CRM Software
                            <ArrowRight
                                size={18}
                                style={{
                                    marginLeft: '8px'
                                }}
                            />
                        </Link>
                    </div>

                    {/* Food Delivery */}

                    <div
                        className="card"
                        data-aos="fade-up"
                        style={{
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            borderRadius: '24px',
                            background: 'var(--bg-white)'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                marginBottom: '1.5rem'
                            }}
                        >
                            <div
                                style={{
                                    background:
                                        'rgba(157, 0, 255, 0.05)',
                                    padding: '12px',
                                    borderRadius: '12px'
                                }}
                            >
                                <ShoppingBag
                                    size={32}
                                    color="var(--accent)"
                                />
                            </div>

                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: '1.6rem',
                                    fontWeight: 800
                                }}
                            >
                                Food Delivery Solution
                            </h3>
                        </div>

                        <p
                            style={{
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                fontSize: '1.05rem',
                                lineHeight: 1.7
                            }}
                        >
                            On-demand food ordering and delivery system with
                            real-time tracking, custom menus, and order
                            management capabilities.
                        </p>

                        <Link
                            to="/products/food-delivery-solution"
                            className="btn btn-primary"
                            style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                padding: '1rem 2rem',
                                marginTop: 'auto'
                            }}
                        >
                            Explore Food Delivery
                            <ArrowRight
                                size={18}
                                style={{
                                    marginLeft: '8px'
                                }}
                            />
                        </Link>
                    </div>

                    {/* Fix Product */}

                    <div
                        className="card"
                        data-aos="fade-up"
                        style={{
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            borderRadius: '24px',
                            background: 'var(--bg-white)'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                marginBottom: '1.5rem'
                            }}
                        >
                            <div
                                style={{
                                    background:
                                        'rgba(0, 242, 255, 0.05)',
                                    padding: '12px',
                                    borderRadius: '12px'
                                }}
                            >
                                <Wrench
                                    size={32}
                                    color="var(--primary)"
                                />
                            </div>

                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: '1.6rem',
                                    fontWeight: 800
                                }}
                            >
                                Fix Product
                            </h3>
                        </div>

                        <p
                            style={{
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                fontSize: '1.05rem',
                                lineHeight: 1.7
                            }}
                        >
                            Troubleshoot and fix software systems, handle
                            platform optimization, and keep applications
                            performing at their best.
                        </p>

                        <Link
                            to="/products/fix"
                            className="btn btn-primary"
                            style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                padding: '1rem 2rem',
                                marginTop: 'auto'
                            }}
                        >
                            Explore Fix Product
                            <ArrowRight
                                size={18}
                                style={{
                                    marginLeft: '8px'
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= OPERATIONAL SUPPORT ================= */}

            <section
                style={{
                    padding: '6rem 8%',
                    background: 'rgba(157, 0, 255, 0.01)'
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto 4rem'
                    }}
                    data-aos="fade-up"
                >
                    <span className="section-tag">
                        Operational Support
                    </span>

                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                            fontWeight: 800
                        }}
                    >
                        How Business Software{' '}
                        <span className="gradient-text">
                            Can Support Your Operations
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: '1.15rem',
                            color: 'var(--text-muted)',
                            marginTop: '1rem',
                            lineHeight: 1.8
                        }}
                    >
                        The right business management software should address
                        a real operational requirement. Rather than selecting
                        software based only on the number of features,
                        businesses should consider how the product fits their
                        existing processes, users and business objectives.
                    </p>
                </div>

                <div className="grid-matrix">
                    {[
                        {
                            title: 'Manage Business Information',
                            text: 'Business information becomes easier to work with when it is organised within an appropriate software environment. A suitable application can help teams reduce fragmented information and create a more structured way of managing business activities.',
                            icon: (
                                <Shield
                                    size={24}
                                    color="var(--primary)"
                                />
                            )
                        },
                        {
                            title: 'Reduce Manual Work',
                            text: 'Manual processes can consume employee time and increase the possibility of inconsistent information. Business software can help move suitable activities into a more structured digital workflow. The objective should not be to automate every process. Instead, businesses should identify repetitive or time-consuming activities where software can provide practical value.',
                            icon: (
                                <Cpu
                                    size={24}
                                    color="var(--secondary)"
                                />
                            )
                        },
                        {
                            title: 'Connect Business Processes',
                            text: 'Businesses often use multiple applications for different activities. When systems are disconnected, employees may need to enter or move information between different tools. Depending on the requirement, software products or integrations can help create a more connected operating environment.',
                            icon: (
                                <GitBranch
                                    size={24}
                                    color="var(--accent)"
                                />
                            )
                        },
                        {
                            title: 'Support Business Growth',
                            text: 'As a business grows, its software requirements can change. A system that works for a small operation may need to evolve as the number of users, customers, transactions or processes increases. Choosing software with the right fit for current requirements and future needs can help businesses avoid unnecessary disruption.',
                            icon: (
                                <TrendingUp
                                    size={24}
                                    color="var(--primary)"
                                />
                            )
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="grid-matrix-item"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <div
                                style={{
                                    background:
                                        'rgba(15, 23, 42, 0.04)',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}
                            >
                                {item.icon}
                            </div>

                            <h3
                                style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 800,
                                    marginBottom: '1rem'
                                }}
                            >
                                {item.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: '0.98rem',
                                    lineHeight: 1.6,
                                    color: 'var(--text-muted)'
                                }}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CHOOSING SOFTWARE ================= */}

            <section
                style={{
                    padding: '6rem 8%'
                }}
            >
                <div
                    className="grid-2"
                    style={{
                        gap: '4rem',
                        alignItems: 'center'
                    }}
                >
                    <div data-aos="fade-up">
                        <span className="section-tag">
                            Evaluation Criteria
                        </span>

                        <h2
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                                fontWeight: 800,
                                marginBottom: '1.5rem'
                            }}
                        >
                            Choosing the Right
                            <br />
                            <span className="gradient-text">
                                Business Management Software
                            </span>
                        </h2>

                        <p
                            style={{
                                fontSize: '1.15rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.8,
                                marginBottom: '1.5rem'
                            }}
                        >
                            Choosing business management software should begin
                            with the business requirement rather than the
                            software name. A good product decision should
                            balance functionality, usability, business fit
                            and long-term requirements.
                        </p>

                        <p
                            style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.8
                            }}
                        >
                            Evaluating existing environments and future
                            expansion options via{' '}
                            <Link
                                to="/services/software-consulting/"
                                style={{
                                    color: 'var(--primary)',
                                    fontWeight: 600,
                                    textDecoration: 'none'
                                }}
                            >
                                Software Consulting
                            </Link>{' '}
                            can help organizations map requirements to viable
                            technical solutions.
                        </p>
                    </div>

                    <div
                        className="card"
                        data-aos="fade-up"
                        style={{
                            padding: '2.5rem',
                            borderRadius: '24px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-white)'
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 800,
                                marginBottom: '1.5rem'
                            }}
                        >
                            Before selecting a product, consider:
                        </h3>

                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0
                            }}
                        >
                            {selectionQuestions.map((q, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'flex-start',
                                        marginBottom: '1rem',
                                        color: 'var(--text-dark)',
                                        fontSize: '0.98rem'
                                    }}
                                >
                                    <HelpCircle
                                        size={18}
                                        color="var(--primary)"
                                        style={{
                                            flexShrink: 0,
                                            marginTop: '3px'
                                        }}
                                    />

                                    <span>{q}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= DIFFERENT REQUIREMENTS ================= */}

            <section
                style={{
                    padding: '6rem 8%',
                    background: 'rgba(0, 242, 255, 0.01)'
                }}
            >
                <div
                    className="grid-2"
                    style={{
                        gap: '4rem',
                        alignItems: 'center'
                    }}
                >
                    <div
                        className="card"
                        data-aos="fade-up"
                        style={{
                            padding: '2.5rem',
                            borderRadius: '24px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-white)'
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 800,
                                marginBottom: '1.5rem'
                            }}
                        >
                            Each product should clearly explain:
                        </h3>

                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1rem'
                            }}
                        >
                            {productExplains.map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        gap: '8px',
                                        alignItems: 'center',
                                        color: 'var(--text-muted)',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    <CheckCircle
                                        size={16}
                                        color="var(--accent)"
                                    />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div data-aos="fade-up">
                        <span className="section-tag">
                            Diverse Demands
                        </span>

                        <h2
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                                fontWeight: 800,
                                marginBottom: '1.5rem'
                            }}
                        >
                            Software for Different
                            <br />
                            <span className="gradient-text">
                                Business Requirements
                            </span>
                        </h2>

                        <p
                            style={{
                                fontSize: '1.15rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.8,
                                marginBottom: '1.5rem'
                            }}
                        >
                            Different businesses can have very different
                            software requirements. A business looking for
                            customer management capabilities may need a
                            dedicated{' '}
                            <Link
                                to="/services/crm-development/"
                                style={{
                                    color: 'var(--primary)',
                                    fontWeight: 600,
                                    textDecoration: 'none'
                                }}
                            >
                                CRM Development
                            </Link>{' '}
                            solution. A business focused on billing operations
                            may need billing software.
                        </p>

                        <p
                            style={{
                                fontSize: '1.15rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.8
                            }}
                        >
                            Another organisation may require software that
                            connects several departments or supports a
                            workflow that does not fit within an existing
                            product, pointing to the need for{' '}
                            <Link
                                to="/services/business-process-automation/"
                                style={{
                                    color: 'var(--primary)',
                                    fontWeight: 600,
                                    textDecoration: 'none'
                                }}
                            >
                                Business Process Automation
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= READY MADE PRODUCT ================= */}

            <section
                style={{
                    padding: '6rem 8%'
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto 4rem'
                    }}
                    data-aos="fade-up"
                >
                    <span className="section-tag">
                        Bespoke vs Out-of-the-box
                    </span>

                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                            fontWeight: 800
                        }}
                    >
                        When a Ready-Made{' '}
                        <span className="gradient-text">
                            Product Is Not Enough
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: '1.15rem',
                            color: 'var(--text-muted)',
                            marginTop: '1rem',
                            lineHeight: 1.8
                        }}
                    >
                        Sometimes an existing product can address the
                        requirement. In other situations, the business may
                        have workflows, integrations or functionality that
                        require a different approach.
                    </p>
                </div>

                <div
                    className="card"
                    data-aos="fade-up"
                    style={{
                        padding: '3rem',
                        borderRadius: '30px',
                        border: '1px solid var(--border)',
                        background:
                            'linear-gradient(to right, rgba(0,242,255,0.02), rgba(157,0,255,0.02))',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}
                >
                    <h3
                        style={{
                            fontSize: '1.3rem',
                            fontWeight: 800,
                            marginBottom: '2rem',
                            textAlign: 'center'
                        }}
                    >
                        For example, an organisation may need:
                    </h3>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {readyMadeNotEnough.map((need, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    gap: '12px',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <div
                                    style={{
                                        background:
                                            'rgba(0, 242, 255, 0.08)',
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        marginTop: '8px',
                                        flexShrink: 0
                                    }}
                                />

                                <p
                                    style={{
                                        margin: 0,
                                        color: 'var(--text-dark)',
                                        fontWeight: 500,
                                        fontSize: '1.05rem'
                                    }}
                                >
                                    {need}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p
                        style={{
                            marginTop: '2.5rem',
                            textAlign: 'center',
                            color: 'var(--text-muted)',
                            fontSize: '1.1rem',
                            fontWeight: 500
                        }}
                    >
                        In these situations, a product may not be the right
                        solution.
                    </p>
                </div>
            </section>

            {/* ================= CUSTOM DEVELOPMENT ================= */}

            <section
                style={{
                    padding: '6rem 8%',
                    background: 'rgba(157, 0, 255, 0.01)'
                }}
            >
                <div
                    className="grid-2"
                    style={{
                        gap: '4rem',
                        alignItems: 'center'
                    }}
                >
                    <div data-aos="fade-up">
                        <span className="section-tag">
                            Custom Services
                        </span>

                        <h2
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                                fontWeight: 800,
                                marginBottom: '1.5rem'
                            }}
                        >
                            Bespoke Software Development
                            <br />
                            <span className="gradient-text">
                                for Specific Requirements
                            </span>
                        </h2>

                        <p
                            style={{
                                fontSize: '1.15rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.8,
                                marginBottom: '1.5rem'
                            }}
                        >
                            When a business needs software built around its
                            own processes, a bespoke software development
                            service may be more appropriate. Fly Towards
                            Digital Innovation provides{' '}
                            <Link
                                to="/services/custom-software-development/"
                                style={{
                                    color: 'var(--primary)',
                                    fontWeight: 600
                                }}
                            >
                                Custom Software Development Services
                            </Link>
                            , Enterprise Software Development, SaaS
                            Development, Web Application Development and
                            Mobile App Development.
                        </p>

                        <p
                            style={{
                                fontSize: '1.15rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.8,
                                marginBottom: '2rem'
                            }}
                        >
                            Custom development can be considered when the
                            requirement involves functionality or workflows
                            that cannot be adequately addressed by an existing
                            product.
                        </p>

                        <Link
                            to="/services/custom-software-development/"
                            className="btn btn-outline"
                            style={{
                                display: 'inline-flex',
                                padding: '1rem 2.5rem',
                                border: '1px solid var(--border)'
                            }}
                        >
                            Explore Custom Software Development
                            <ArrowRight
                                size={18}
                                style={{
                                    marginLeft: '8px'
                                }}
                            />
                        </Link>
                    </div>

                    <div
                        className="card"
                        data-aos="fade-up"
                        style={{
                            padding: '2.5rem',
                            borderRadius: '24px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-white)'
                        }}
                    >
                        <span className="section-tag">
                            IT Development
                        </span>

                        <h3
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                marginBottom: '1.2rem'
                            }}
                        >
                            Business Software & IT Development
                        </h3>

                        <p
                            style={{
                                color: 'var(--text-muted)',
                                lineHeight: 1.7,
                                marginBottom: '1.2rem'
                            }}
                        >
                            Business software sits at the intersection of
                            business requirements and technical implementation.
                            A useful solution needs to address both sides.
                        </p>

                        <p
                            style={{
                                color: 'var(--text-muted)',
                                lineHeight: 1.7
                            }}
                        >
                            The business needs to understand what the software
                            should accomplish, while the technical
                            implementation needs to support the required
                            functionality, users, data and integrations.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= INDUSTRIES ================= */}

            <section
                style={{
                    padding: '6rem 8%'
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto 4rem'
                    }}
                    data-aos="fade-up"
                >
                    <span className="section-tag">
                        Industry Solutions
                    </span>

                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                            fontWeight: 800
                        }}
                    >
                        Industry-Specific{' '}
                        <span className="gradient-text">
                            Software Solutions
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: '1.15rem',
                            color: 'var(--text-muted)',
                            marginTop: '1rem',
                            lineHeight: 1.8
                        }}
                    >
                        We design and develop bespoke solutions tailored
                        specifically to the standards, compliances, and
                        workflows of various industry sectors.
                    </p>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}
                >
                    {industries.map((ind, idx) => (
                        <Link
                            to={ind.path}
                            key={idx}
                            className="card"
                            data-aos="fade-up"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                padding: '1.5rem 2rem',
                                borderRadius: '16px',
                                border: '1px solid var(--border)',
                                background: 'var(--bg-white)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div
                                style={{
                                    background:
                                        'rgba(0, 242, 255, 0.05)',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {ind.icon}
                            </div>

                            <span
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    color: 'var(--text-dark)'
                                }}
                            >
                                {ind.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ================= FAQ ================= */}

            <section
                id="faq"
                style={{
                    padding: '6rem 8%',
                    background: 'rgba(157, 0, 255, 0.01)'
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}
                    data-aos="fade-up"
                >
                    <span
                        className="section-tag"
                        style={{
                            margin: '0 auto 1.5rem'
                        }}
                    >
                        FAQ
                    </span>

                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)'
                        }}
                    >
                        Frequently Asked{' '}
                        <span className="gradient-text">
                            Questions
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: '1.15rem',
                            color: 'var(--text-muted)',
                            maxWidth: '700px',
                            margin: '1rem auto 0'
                        }}
                    >
                        Understand more about business software solutions and
                        our delivery models.
                    </p>
                </div>

                <div
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                    data-aos="fade-up"
                >
                    {faqs.map((faq, idx) => {
                        const isOpen = activeFaq === idx;

                        return (
                            <div
                                key={idx}
                                style={{
                                    borderBottom:
                                        '1px solid var(--border)',
                                    padding: '1.5rem 0',
                                    cursor: 'pointer'
                                }}
                                onClick={() => toggleFaq(idx)}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent:
                                            'space-between',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: '1.25rem',
                                            fontWeight: 700,
                                            margin: 0,
                                            color: isOpen
                                                ? 'var(--secondary)'
                                                : 'var(--text-dark)',
                                            transition:
                                                'color 0.3s ease',
                                            textAlign: 'left'
                                        }}
                                    >
                                        {faq.q}
                                    </h3>

                                    <div
                                        style={{
                                            transform: isOpen
                                                ? 'rotate(180deg)'
                                                : 'rotate(0deg)',
                                            transition:
                                                'transform 0.3s ease',
                                            color: isOpen
                                                ? 'var(--secondary)'
                                                : 'var(--text-muted)'
                                        }}
                                    >
                                        <ChevronDown size={24} />
                                    </div>
                                </div>

                                <div
                                    style={{
                                        maxHeight: isOpen
                                            ? '300px'
                                            : '0px',
                                        overflow: 'hidden',
                                        transition:
                                            'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        opacity: isOpen ? 1 : 0
                                    }}
                                >
                                    <p
                                        style={{
                                            color:
                                                'var(--text-muted)',
                                            fontSize: '1.05rem',
                                            lineHeight: 1.7,
                                            marginTop: '1rem',
                                            marginBottom: '0.5rem',
                                            textAlign: 'left'
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

            {/* ================= CTA ================= */}

            <section
                id="contact"
                style={{
                    padding: '6rem 1rem'
                }}
            >
                <div
                    className="cta-content"
                    data-aos="zoom-in"
                    style={{
                        textAlign: 'center',
                        padding: '6rem 3rem',
                        borderRadius: '40px',
                        border:
                            '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow:
                            '0 20px 50px rgba(0,0,0,0.15)',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        position: 'relative',
                        overflow: 'hidden',
                        background:
                            'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1800) center/cover no-repeat'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background:
                                'linear-gradient(135deg, rgba(16, 24, 40, 0.95) 0%, rgba(10, 15, 25, 0.98) 100%)',
                            zIndex: 1
                        }}
                    />

                    <div
                        style={{
                            position: 'relative',
                            zIndex: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <span
                            className="section-tag"
                            style={{
                                color: 'var(--primary)',
                                marginBottom: '1.5rem',
                                justifyContent: 'center',
                                marginInline: 'auto'
                            }}
                        >
                            Next Steps
                        </span>

                        <h2
                            style={{
                                fontSize:
                                    'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: 800,
                                color: '#fff',
                                marginBottom: '1rem'
                            }}
                        >
                            Find the Right Software{' '}
                            <span className="gradient-text">
                                for Your Business
                            </span>
                        </h2>

                        <p
                            style={{
                                fontSize: '1.25rem',
                                margin: '2rem auto 3rem',
                                maxWidth: '800px',
                                color: 'rgba(255,255,255,0.75)',
                                lineHeight: 1.8
                            }}
                        >
                            Whether you are looking for business management
                            software, evaluating a CRM or billing product, or
                            have a requirement that needs a more tailored
                            solution, the starting point should be the business
                            problem you want to solve.
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                gap: '1.5rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <a
                                href="#products"
                                className="btn btn-primary"
                                style={{
                                    padding: '1.2rem 3rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    boxShadow:
                                        '0 10px 30px rgba(0, 242, 255, 0.3)'
                                }}
                            >
                                Explore Our Products
                                <ArrowRight size={20} />
                            </a>

                            <Link
                                to="/contact/"
                                className="btn btn-outline"
                                style={{
                                    padding: '1.2rem 3rem',
                                    color: '#fff',
                                    borderColor:
                                        'rgba(255,255,255,0.3)',
                                    background:
                                        'rgba(255,255,255,0.05)'
                                }}
                            >
                                Discuss a Custom Software Requirement
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;