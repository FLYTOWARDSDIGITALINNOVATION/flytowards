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
        { name: "Healthcare", anchor: "healthcare software", link: "/industries/healthcare", desc: "Software for healthcare-related business processes and digital workflows.", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80", alt: "Healthcare software solutions for medical workflows" },
        { name: "Manufacturing", anchor: "manufacturing software", link: "/industries/manufacturing", desc: "Solutions supporting manufacturing-related operational and business requirements.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80", alt: "Manufacturing software solutions for plant operations" },
        { name: "Retail", anchor: "retail software", link: "/industries/retail", desc: "Applications supporting retail workflows, customer experiences and business operations.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80", alt: "Retail software applications for business operations" },
        { name: "Education", anchor: "education software", link: "/industries/education", desc: "Digital solutions for education-related processes and organisational requirements.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80", alt: "Education software digital solutions for institutions" },
        { name: "Construction", anchor: "construction software", link: "/industries/construction", desc: "Software designed around construction-related workflows and operational needs.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80", alt: "Construction software management for project workflows" },
        { name: "Finance", anchor: "finance software", link: "/industries/finance", desc: "Technology solutions for finance-related business processes and digital requirements.", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80", alt: "Finance technology software solutions for business" },
        { name: "Hospitality", anchor: "hospitality software", link: "/industries/hospitality", desc: "Applications supporting hospitality operations and customer-facing processes.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80", alt: "Hospitality operations software for hotel management" }
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
        <main style={{ 
            position: 'relative', 
            overflowX: 'hidden',
            background: '#E5E7EB',
            width: '100%',
            maxWidth: '100%',
            margin: 0,
            padding: 0
        }}>
            <style>{`
                body, html, #root, .app {
                    background-color: #E5E7EB !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    overflow-x: hidden !important;
                }
                .full-bleed-yellow {
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 !important;
                    background-color: #FACC15 !important;
                    box-sizing: border-box !important;
                }
                .full-bleed-dark {
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 !important;
                    background-color: #111827 !important;
                    box-sizing: border-box !important;
                }
            `}</style>
            <div style={{ position: 'relative', zIndex: 1, width: '100%', margin: 0, padding: 0 }}>
                {/* Hero Section - Soft Yellow top glow blending smoothly into Metallic Silver */}
            <section className="hero" style={{ width: '100%', minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '140px 0 80px', background: 'radial-gradient(ellipse at 50% 0%, rgba(250, 204, 21, 0.35) 0%, rgba(253, 224, 71, 0.15) 40%, rgba(229, 231, 235, 0.9) 65%, #E5E7EB 85%)' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%', width: '100%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem', width: '100%' }} data-aos="fade-up">
                        <span className="section-tag" style={{ display: 'inline-block', margin: '0 auto 1.5rem' }}>About Fly Towards Digital Innovation</span>
                        <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', lineHeight: 1.25, fontWeight: 800, maxWidth: '1200px', margin: '0 auto', letterSpacing: '-0.02em', color: '#1F2937' }}>
                            A Software Development Company Focused on <br />
                            <span style={{
                                color: '#FACC15',
                                WebkitTextStroke: '1.5px #1F2937',
                                display: 'inline-block',
                                marginTop: '0.25rem',
                                fontWeight: 900
                            }}>
                                Building for Real Business Needs
                            </span>
                        </h1>
                    </div>

                    <div className="grid-2" style={{ width: '100%', alignItems: 'center' }}>
                        <div data-aos="fade-up" style={{ transitionDelay: '0.1s' }}>
                            <p style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '1.5rem', lineHeight: 1.8, fontWeight: 500 }}>
                                Technology should make business easier to operate, not add another layer of complexity. Fly Towards Digital Innovation is a software development company focused on helping businesses turn their technology requirements into practical software solutions. We work with organisations that need software built around their processes, users, operational requirements and growth plans.
                            </p>
                            <p style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '1.5rem', lineHeight: 1.8, fontWeight: 500 }}>
                                From custom business applications and enterprise software to SaaS platforms, web applications, mobile apps and digital transformation initiatives, we approach every project with the business requirement at the centre.
                            </p>
                            <p style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '2.5rem', lineHeight: 1.8, fontWeight: 500 }}>
                                Our focus is simple: understand the problem, define the right solution and build software that supports the way your business needs to work.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn btn-primary">Talk to Our Team <ArrowRight size={20} /></Link>
                                <Link to="/contact" className="btn btn-outline">Discuss Your Project</Link>
                            </div>
                        </div>

                        <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.3s' }}>
                            <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px', width: '100%', background: '#ffffff' }}>
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
                </div>
            </section>

            {/* Clean Horizontal Divider Line */}
            <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

            {/* Who We Are - Metallic Silver background full 100% width */}
            <section id="who-we-are" style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }} data-aos="fade-up">
                        <div style={{ flex: '1 1 500px' }}>
                            <span className="section-tag">Who We Are</span>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: 1.2 }}>
                                Empowering Organizations Through <span className="gradient-text">Context-First Software</span>
                            </h2>
                            <p style={{ color: '#1E293B', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.15rem', fontWeight: 500 }}>
                                Fly Towards Digital Innovation works with businesses that need technology to solve real operational and business challenges.
                            </p>
                            <p style={{ color: '#1E293B', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.15rem', fontWeight: 500 }}>
                                We understand that every organisation works differently. Processes vary between industries, teams have different requirements, and existing technology environments can often include multiple applications, manual workflows or outdated systems.
                            </p>
                            <p style={{ color: '#1E293B', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.15rem', fontWeight: 500 }}>
                                That is why our approach is centred on understanding the business before defining the software. We help businesses explore, plan and develop software solutions for specific requirements rather than treating every project as a standard implementation.
                            </p>
                            <p style={{ color: '#1E293B', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.15rem', fontWeight: 500 }}>
                                Our work covers custom software development, enterprise software, SaaS development, web application development, mobile app development, software maintenance and digital transformation.
                            </p>
                        </div>
                        <div style={{ flex: '1 1 420px', padding: '1rem 0 0' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.75rem', fontWeight: 800, color: '#1F2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '8px', height: '24px', background: '#FACC15', borderRadius: '4px', display: 'inline-block' }}></span>
                                Our Capabilities Include:
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                {[
                                    { name: "Custom Software Development", path: "/services/custom-software-development" },
                                    { name: "Enterprise Software", path: "/services/enterprise-software-development" },
                                    { name: "SaaS Development", path: "/services/saas-development" },
                                    { name: "Web Application Development", path: "/services/web-development" },
                                    { name: "Mobile App Development", path: "/services/mobile-app-development" },
                                    { name: "Software Maintenance", path: "/services/software-maintenance-support" },
                                    { name: "Digital Transformation", path: "/services" }
                                ].map((item, idx) => (
                                    <Link key={idx} to={item.path} style={{ 
                                        display: 'flex', 
                                        justify: 'space-between', 
                                        alignItems: 'center', 
                                        padding: '0.95rem 1.4rem', 
                                        background: '#ffffff', 
                                        borderRadius: '16px', 
                                        border: '1px solid rgba(0, 0, 0, 0.07)', 
                                        textDecoration: 'none', 
                                        color: '#1F2937', 
                                        fontWeight: 700,
                                        fontSize: '1.05rem', 
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
                                    }}
                                        onMouseEnter={(e) => { 
                                            e.currentTarget.style.borderColor = '#FACC15'; 
                                            e.currentTarget.style.background = '#FFFBEB';
                                            e.currentTarget.style.transform = 'translateX(8px)';
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(250, 204, 21, 0.25)';
                                        }}
                                        onMouseLeave={(e) => { 
                                            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.07)'; 
                                            e.currentTarget.style.background = '#ffffff';
                                            e.currentTarget.style.transform = 'none';
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.03)';
                                        }}
                                    >
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FACC15' }}></span>
                                            {item.name}
                                        </span>
                                        <ArrowUpRight size={18} color="#D97706" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story / Purpose - Full 100% Screen Edge-to-Edge Solid Yellow Section */}
            <section id="purpose" className="full-bleed-yellow" style={{ padding: '6rem 5%' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>Our Purpose</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: '#1F2937', fontWeight: 900 }}>Make Technology More Useful to Business</h2>
                        <p style={{ fontSize: '1.2rem', color: '#374151', maxWidth: '800px', margin: '0 auto 1rem', lineHeight: 1.8, fontWeight: 500 }}>
                            Our purpose is to help businesses use software to address the challenges that matter to their operations. A software project should have a reason behind it.
                        </p>
                        <p style={{ fontSize: '1.15rem', color: '#1F2937', fontWeight: 700, margin: 0 }}>
                            It may be intended to:
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', maxWidth: '1100px', margin: '0 auto' }}>
                        {purposeItems.map((item, idx) => (
                            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 40} style={{ 
                                padding: '1.1rem 1.6rem', 
                                borderRadius: '50px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '1.25rem', 
                                background: '#111827', 
                                color: '#FFFFFF',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = '#FACC15';
                                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.25)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                            }}
                            >
                                <div style={{ width: '42px', height: '42px', minWidth: '42px', background: 'rgba(250, 204, 21, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(250, 204, 21, 0.3)' }}>
                                    {item.icon}
                                </div>
                                <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#F9FAFB', lineHeight: 1.4 }}>
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }} data-aos="fade-up">
                        <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1F2937' }}>
                            We start with that purpose and work backwards toward the technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do - Metallic Silver section */}
            <section id="capabilities" style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag">What We Do</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>Our Core Capabilities</h2>
                        <p style={{ fontSize: '1.2rem', color: '#1E293B', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, fontWeight: 500 }}>
                            As a custom software development company, we provide software capabilities across different business requirements and stages of digital development.
                        </p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {capabilities.map((cap, idx) => (
                            <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                padding: '1.75rem 1.5rem', 
                                borderRadius: '20px', 
                                position: 'relative', 
                                overflow: 'hidden', 
                                background: '#FFFFFF', 
                                border: '1px solid #E5E7EB', 
                                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05) translateY(-8px)';
                                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(250, 204, 21, 0.3)`;
                                    e.currentTarget.style.borderColor = `#FACC15`;
                                    e.currentTarget.style.zIndex = '10';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                                    e.currentTarget.style.borderColor = '#E5E7EB';
                                    e.currentTarget.style.zIndex = '1';
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ width: '44px', height: '44px', minWidth: '44px', background: '#FEF9C3', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #FDE047' }}>
                                        {cap.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#1F2937', lineHeight: 1.3 }}>{cap.title}</h3>
                                </div>
                                <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1, fontWeight: 500 }}>{cap.desc}</p>
                                
                                <Link to={cap.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1F2937', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', marginTop: 'auto' }}>
                                    Learn More <ArrowRight size={15} color="#EAB308" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link to="/services" className="btn btn-primary">Explore Our Services <ArrowRight size={20} /></Link>
                    </div>
                </div>
            </section>

            {/* Clean Horizontal Divider Line */}
            <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

            {/* Our Approach - Metallic Silver Background */}
            <section id="approach" style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag">01 — 05 Steps</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: '#1F2937' }}>Our Approach to Software Development</h2>
                        <p style={{ fontSize: '1.2rem', color: '#1E293B', maxWidth: '850px', margin: '0 auto 0.75rem', lineHeight: 1.8, fontWeight: 500 }}>
                            We believe good software development starts with understanding.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#334155', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7, fontWeight: 500 }}>
                            Before thinking about features or technology, we want to understand what the business is trying to achieve.
                        </p>
                    </div>

                    <div className="steps-single-row-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem', width: '100%' }}>
                        {approachSteps.map((step, idx) => (
                            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 80} style={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                                borderTop: '3px solid #FACC15',
                                paddingTop: '1.25rem',
                                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                cursor: 'pointer',
                                borderRadius: '0 0 16px 16px',
                                padding: '1.25rem 0.75rem 0.75rem'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.borderTopColor = '#EAB308';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                                e.currentTarget.style.boxShadow = '0 10px 25px rgba(250, 204, 21, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderTopColor = '#FACC15';
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            >
                                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FACC15', fontFamily: 'Outfit', lineHeight: 1, transition: 'transform 0.3s ease' }}>
                                    {step.step}
                                </div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1F2937', margin: 0, lineHeight: 1.3 }}>{step.title}</h3>
                                <p style={{ color: '#334155', fontSize: '0.88rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }} data-aos="fade-up">
                        <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1F2937' }}>
                            This approach keeps technology connected to business objectives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Businesses Work With Us - Full 100% Screen Edge-to-Edge Solid Yellow Section */}
            <section id="why-us" className="full-bleed-yellow" style={{ padding: '6rem 5%' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>Why Work With Us</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: '#1F2937', fontWeight: 900 }}>Why Businesses Work With Us</h2>
                        <p style={{ fontSize: '1.2rem', color: '#1F2937', maxWidth: '850px', margin: '0 auto', lineHeight: 1.8, fontWeight: 500 }}>
                            Choosing between software development firms is not only about comparing technical capabilities. It is also about finding a team that understands the requirement and can work with the business throughout the project.
                        </p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {whyWorkWithUs.map((item, idx) => (
                            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{ 
                                padding: '2.5rem 2rem', 
                                background: '#111827',
                                color: '#FFFFFF',
                                borderRadius: '28px',
                                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem',
                                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.35)';
                                e.currentTarget.style.borderColor = '#FACC15';
                                const line = e.currentTarget.querySelector('.why-bottom-glow');
                                if (line) line.style.width = '100%';
                                const iconBox = e.currentTarget.querySelector('.why-unique-icon');
                                if (iconBox) iconBox.style.transform = 'rotate(360deg) scale(1.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                const line = e.currentTarget.querySelector('.why-bottom-glow');
                                if (line) line.style.width = '40px';
                                const iconBox = e.currentTarget.querySelector('.why-unique-icon');
                                if (iconBox) iconBox.style.transform = 'rotate(0deg) scale(1)';
                            }}
                            >
                                {/* Big Watermark Step Number */}
                                <div style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '20px',
                                    fontSize: '5.5rem',
                                    fontWeight: 900,
                                    color: 'rgba(255, 255, 255, 0.05)',
                                    fontFamily: 'Outfit',
                                    userSelect: 'none',
                                    lineHeight: 1
                                }}>
                                    0{idx + 1}
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', position: 'relative', zIndex: 2 }}>
                                    <div className="why-unique-icon" style={{ 
                                        width: '52px', 
                                        height: '52px', 
                                        minWidth: '52px',
                                        background: 'rgba(250, 204, 21, 0.15)', 
                                        color: '#FACC15',
                                        borderRadius: '16px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        border: '1px solid rgba(250, 204, 21, 0.4)',
                                        boxShadow: '0 4px 15px rgba(250, 204, 21, 0.2)',
                                        transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FFFFFF', margin: 0, lineHeight: 1.3 }}>{item.title}</h3>
                                </div>
                                
                                <p style={{ color: '#D1D5DB', lineHeight: 1.7, fontSize: '0.98rem', margin: 0, fontWeight: 400, position: 'relative', zIndex: 2 }}>{item.desc}</p>
                                
                                {/* Bottom Glowing Line */}
                                <div className="why-bottom-glow" style={{
                                    height: '4px',
                                    width: '40px',
                                    background: 'linear-gradient(90deg, #FACC15 0%, #EAB308 100%)',
                                    borderRadius: '2px',
                                    marginTop: 'auto',
                                    boxShadow: '0 0 10px rgba(250, 204, 21, 0.5)',
                                    transition: 'width 0.4s ease'
                                }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Starts with the Problem - Metallic Silver section */}
            <section id="problem-first" style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                    <div className="grid-2">
                        <div data-aos="fade-up">
                            <span className="section-tag">Starts with the Problem</span>
                            <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem', lineHeight: 1.2, color: '#1F2937' }}>
                                A Custom Software Development Agency That <span className="gradient-text">Starts With the Problem</span>
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '1.5rem', lineHeight: 1.8, fontWeight: 500 }}>
                                Many software projects begin with a technology decision. We believe they should begin with a business problem.
                            </p>
                            <p style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '1.5rem', lineHeight: 1.8, fontWeight: 500 }}>
                                For example, a business may know that its teams spend too much time on manual work. Another organisation may have several disconnected applications. A growing company may need a system that can support new processes or users.
                            </p>
                            <p style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '1.5rem', lineHeight: 1.8, fontWeight: 500 }}>
                                The software requirement is different in each situation. As a custom software development agency, our role is to understand that context and help translate it into a practical software direction.
                            </p>
                            <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1F2937', marginTop: '2rem' }}>
                                The answers help shape a more meaningful development process.
                            </p>
                        </div>

                        <div data-aos="fade-left" style={{ padding: '0.5rem 0' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2rem', color: '#1F2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '8px', height: '24px', background: '#FACC15', borderRadius: '4px', display: 'inline-block' }}></span>
                                This means asking:
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {problemQuestions.map((q, idx) => (
                                    <div key={idx} style={{ 
                                        display: 'flex', 
                                        gap: '16px', 
                                        alignItems: 'center', 
                                        padding: '1.1rem 1.4rem',
                                        background: '#FFFFFF',
                                        borderRadius: '16px',
                                        border: '1px solid #D1D5DB',
                                        borderLeft: '5px solid #FACC15',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                                        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateX(10px) scale(1.01)';
                                        e.currentTarget.style.borderLeftColor = '#1F2937';
                                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(250, 204, 21, 0.25)';
                                        const checkBadge = e.currentTarget.querySelector('.q-check-badge');
                                        if (checkBadge) checkBadge.style.transform = 'scale(1.2) rotate(10deg)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateX(0) scale(1)';
                                        e.currentTarget.style.borderLeftColor = '#FACC15';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                                        const checkBadge = e.currentTarget.querySelector('.q-check-badge');
                                        if (checkBadge) checkBadge.style.transform = 'scale(1) rotate(0deg)';
                                    }}
                                    >
                                        <div className="q-check-badge" style={{
                                            width: '38px',
                                            height: '38px',
                                            minWidth: '38px',
                                            borderRadius: '12px',
                                            background: '#FEF9C3',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid #FDE047',
                                            boxShadow: '0 2px 8px rgba(250, 204, 21, 0.25)',
                                            transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                        }}>
                                            <CheckCircle2 size={20} color="#D97706" />
                                        </div>
                                        <span style={{ fontSize: '1.08rem', fontWeight: 700, color: '#1F2937', lineHeight: 1.4 }}>{q}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clean Horizontal Divider Line */}
            <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

            {/* Built for Different Industries - Metallic Silver section */}
            <section id="industries" style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag">Industries We Support</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: '#1F2937' }}>Built Around the Needs of Different Industries</h2>
                        <p style={{ fontSize: '1.2rem', color: '#1E293B', maxWidth: '850px', margin: '0 auto 0.75rem', lineHeight: 1.8, fontWeight: 500 }}>
                            Businesses in different industries operate differently. Their workflows, users, processes and technology requirements are not interchangeable.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#1F2937', fontWeight: 700, margin: 0 }}>
                            Our target industries include:
                        </p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
                        {industries.map((ind, idx) => (
                            <Link key={idx} to={ind.link} className="card" data-aos="fade-up" data-aos-delay={idx * 50} style={{ 
                                padding: '0', 
                                borderRadius: '24px', 
                                background: '#FFFFFF', 
                                border: '1px solid #D1D5DB', 
                                boxShadow: '0 4px 15px rgba(0,0,0,0.03)', 
                                overflow: 'hidden', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                textDecoration: 'none',
                                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = '#FACC15';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(250, 204, 21, 0.25)';
                                const img = e.currentTarget.querySelector('.ind-card-img');
                                if (img) img.style.transform = 'scale(1.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#D1D5DB';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                                const img = e.currentTarget.querySelector('.ind-card-img');
                                if (img) img.style.transform = 'scale(1)';
                            }}
                            >
                                <div style={{ height: '160px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                                    <img className="ind-card-img" src={ind.image} alt={ind.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease-out' }} />
                                </div>
                                <div style={{ padding: '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: '#1F2937' }}>{ind.name}</h3>
                                    <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                                        {ind.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }} data-aos="fade-up">
                        <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1F2937' }}>
                            The SEO strategy identifies these industries as key target markets for the business.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Believe Good Software Should Do - Connected Vertical Tree / Timeline Roadmap Layout */}
            <section id="beliefs" className="full-bleed-yellow" style={{ padding: '6rem 5%' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>What We Believe</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900 }}>What We Believe Good Software Should Do</h2>
                        <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '750px', margin: '0 auto', fontWeight: 600 }}>
                            Core principles that guide our development philosophy from start to scale.
                        </p>
                    </div>

                    {/* Vertical Tree Line Container */}
                    <div style={{ position: 'relative', padding: '1rem 0' }}>
                        {/* Central Trunk / Connecting Line */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            bottom: '20px',
                            left: '50%',
                            width: '4px',
                            background: 'linear-gradient(180deg, #1F2937 0%, rgba(31, 41, 55, 0.4) 100%)',
                            transform: 'translateX(-50%)',
                            borderRadius: '4px',
                            zIndex: 1
                        }} className="tree-central-line"></div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative', zIndex: 2 }}>
                            {beliefs.map((b, idx) => {
                                const isEven = idx % 2 === 0;
                                return (
                                    <div key={idx} data-aos={isEven ? "fade-right" : "fade-left"} data-aos-delay={idx * 80} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: isEven ? 'flex-start' : 'flex-end',
                                        position: 'relative',
                                        width: '100%'
                                    }}>
                                        {/* Center Node / Circle Badge on Line */}
                                        <div style={{
                                            position: 'absolute',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            background: '#1F2937',
                                            color: '#FACC15',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 900,
                                            fontSize: '1.1rem',
                                            border: '4px solid #FACC15',
                                            boxShadow: '0 0 20px rgba(31, 41, 55, 0.3)',
                                            zIndex: 3,
                                            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                        }} className="tree-node-circle">
                                            0{idx + 1}
                                        </div>

                                        {/* Branch Card */}
                                        <div style={{
                                            width: '44%',
                                            background: 'rgba(255, 255, 255, 0.95)',
                                            backdropFilter: 'blur(10px)',
                                            padding: '1.75rem 2rem',
                                            borderRadius: '24px',
                                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                                            border: '2px solid rgba(31, 41, 55, 0.1)',
                                            position: 'relative',
                                            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                            cursor: 'pointer',
                                            textAlign: isEven ? 'right' : 'left'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = isEven ? 'translateX(-10px) scale(1.02)' : 'translateX(10px) scale(1.02)';
                                            e.currentTarget.style.borderColor = '#1F2937';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.18)';
                                            e.currentTarget.style.background = '#FFFFFF';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'none';
                                            e.currentTarget.style.borderColor = 'rgba(31, 41, 55, 0.1)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                                        }}
                                        >
                                            <div style={{
                                                fontSize: '1.25rem',
                                                fontWeight: 900,
                                                color: '#1F2937',
                                                marginBottom: '0.6rem',
                                                lineHeight: 1.3
                                            }}>
                                                {b.title}
                                            </div>
                                            <p style={{
                                                color: '#4B5563',
                                                fontSize: '0.95rem',
                                                lineHeight: 1.6,
                                                margin: 0,
                                                fontWeight: 500
                                            }}>
                                                {b.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment to Clients - Non-Box Horizontal Interconnected Node Chain Concept */}
            <section id="commitments" style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag">Our Commitment</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', color: '#1F2937', fontWeight: 900 }}>Our Commitment to Clients</h2>
                        <p style={{ fontSize: '1.2rem', color: '#1E293B', maxWidth: '850px', margin: '0 auto 0.5rem', lineHeight: 1.8, fontWeight: 500 }}>
                            We aim to make software development easier to understand and more closely connected to business objectives.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#1F2937', fontWeight: 700, margin: 0 }}>
                            That means focusing on:
                        </p>
                    </div>

                    {/* Horizontal Interconnected Node Chain Container (No Traditional Boxes) */}
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        
                        {/* Connected Chain Grid - Single Horizontal Row Line */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, 1fr)',
                            gap: '1.25rem',
                            position: 'relative',
                            zIndex: 2,
                            width: '100%'
                        }} className="commitments-single-row">
                            {commitments.map((c, idx) => (
                                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 70} style={{
                                    background: 'linear-gradient(145deg, #1F2937 0%, #111827 100%)',
                                    borderRadius: '35px 12px 35px 12px',
                                    padding: '1.75rem 1.25rem',
                                    color: '#FFFFFF',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '230px',
                                    borderLeft: '4px solid #FACC15',
                                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)',
                                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px) rotate(-1deg)';
                                    e.currentTarget.style.borderLeftColor = '#38BDF8';
                                    e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.3), 0 0 20px rgba(250, 204, 21, 0.2)';
                                    const dot = e.currentTarget.querySelector('.commit-node-dot');
                                    if (dot) {
                                        dot.style.transform = 'scale(1.4) rotate(45deg)';
                                        dot.style.background = '#38BDF8';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.borderLeftColor = '#FACC15';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.12)';
                                    const dot = e.currentTarget.querySelector('.commit-node-dot');
                                    if (dot) {
                                        dot.style.transform = 'none';
                                        dot.style.background = '#FACC15';
                                    }
                                }}
                                >
                                    {/* Top Ring / Indicator */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>
                                            0{idx + 1}
                                        </span>
                                        <div className="commit-node-dot" style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '3px',
                                            background: '#FACC15',
                                            transition: 'all 0.4s ease'
                                        }}></div>
                                    </div>

                                    <div style={{ margin: '0.85rem 0' }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#FACC15', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                                            {c.title}
                                        </h3>
                                        <p style={{ color: '#D1D5DB', fontSize: '0.85rem', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                                            {c.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Connector Line Segment */}
                                    <div style={{
                                        width: '100%',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #FACC15 0%, transparent 100%)',
                                        marginTop: 'auto',
                                        opacity: 0.6
                                    }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Clean Horizontal Divider Line */}
            <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

            {/* Looking for the Best Software Development Company for Your Requirement? - Metallic Silver Seamless Section */}
            <section id="best-company" style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                    <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
                        {/* Left Column: Heading & Subtitle */}
                        <div data-aos="fade-right">
                            <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15', marginBottom: '1.25rem', display: 'inline-block' }}>Find The Right Partner</span>
                            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 2.8rem)', marginBottom: '1.5rem', color: '#1F2937', fontWeight: 900, lineHeight: 1.25 }}>
                                Looking for the Best Software Development Company for Your Requirement?
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.8, fontWeight: 500, marginBottom: '2rem' }}>
                                There is no single software development company that is the right choice for every business. The right partner depends on your requirements, business goals, existing systems, users, project scope and future plans.
                            </p>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem', fontWeight: 800, background: '#1F2937', color: '#FACC15', boxShadow: '0 10px 25px rgba(31, 41, 55, 0.25)' }}>
                                Discuss Your Software Requirement <ArrowRight size={20} color="#FACC15" />
                            </Link>
                        </div>

                        {/* Right Column: Stacked Interactive Focus Rows with Slide & Accent Line Animations */}
                        <div data-aos="fade-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                {
                                    num: "01",
                                    text: "Start with the problem you want to solve rather than simply comparing feature lists when evaluating custom software development firms."
                                },
                                {
                                    num: "02",
                                    text: "Fly Towards Digital Innovation can discuss your requirement and help determine whether a custom software approach is appropriate for your business."
                                },
                                {
                                    num: "03",
                                    text: "Whether planning a new application, replacing a legacy system, or automating processes, the conversation starts with understanding your requirement."
                                }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    gap: '1.25rem',
                                    alignItems: 'flex-start',
                                    padding: '1.5rem 1.75rem',
                                    background: '#FFFFFF',
                                    borderRadius: '20px',
                                    border: '1px solid #D1D5DB',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateX(12px)';
                                    e.currentTarget.style.borderColor = '#1F2937';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(31, 41, 55, 0.15)';
                                    const numBadge = e.currentTarget.querySelector('.partner-step-num');
                                    if (numBadge) {
                                        numBadge.style.transform = 'scale(1.15) rotate(-6deg)';
                                        numBadge.style.background = '#1F2937';
                                        numBadge.style.color = '#FACC15';
                                    }
                                    const bar = e.currentTarget.querySelector('.partner-accent-bar');
                                    if (bar) bar.style.height = '100%';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.borderColor = '#D1D5DB';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                                    const numBadge = e.currentTarget.querySelector('.partner-step-num');
                                    if (numBadge) {
                                        numBadge.style.transform = 'none';
                                        numBadge.style.background = '#FEF9C3';
                                        numBadge.style.color = '#D97706';
                                    }
                                    const bar = e.currentTarget.querySelector('.partner-accent-bar');
                                    if (bar) bar.style.height = '30px';
                                }}
                                >
                                    {/* Left Hover Accent Fill Line */}
                                    <div className="partner-accent-bar" style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        width: '5px',
                                        height: '30px',
                                        background: '#FACC15',
                                        borderRadius: '0 4px 4px 0',
                                        transition: 'all 0.4s ease'
                                    }}></div>

                                    <div className="partner-step-num" style={{
                                        width: '42px',
                                        height: '42px',
                                        minWidth: '42px',
                                        borderRadius: '12px',
                                        background: '#FEF9C3',
                                        color: '#D97706',
                                        fontWeight: 900,
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid #FDE047',
                                        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                    }}>
                                        {item.num}
                                    </div>

                                    <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Clean Horizontal Divider Line */}
            <div style={{ width: '90%', maxWidth: '1280px', height: '1px', background: '#D1D5DB', margin: '0 auto' }} />

            {/* FAQ Section - 2-Column Floating Card Grid with Dynamic Glow & Q-Badge Accents */}
            <section id="faq" style={{ width: '100%', padding: '6rem 0', background: '#E5E7EB' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15' }}>Got Questions?</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', color: '#1F2937', fontWeight: 900 }}>
                            Frequently Asked <span style={{ color: '#D97706' }}>Questions</span>
                        </h2>
                        <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '700px', margin: '0 auto', fontWeight: 500 }}>
                            Clear answers to common questions about custom software development and our process.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '1.5rem',
                        alignItems: 'start'
                    }} data-aos="fade-up">
                        {faqs.map((faq, idx) => {
                            const isOpen = activeFaq === idx;
                            return (
                                <div key={idx} style={{
                                    background: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
                                    borderRadius: '20px',
                                    padding: '1.5rem 1.75rem',
                                    border: isOpen ? '2px solid #1F2937' : '1px solid #D1D5DB',
                                    boxShadow: isOpen ? '0 12px 30px rgba(31, 41, 55, 0.15)' : '0 4px 15px rgba(0, 0, 0, 0.03)',
                                    cursor: 'pointer',
                                    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    position: 'relative'
                                }}
                                onClick={() => toggleFaq(idx)}
                                onMouseEnter={(e) => {
                                    if (!isOpen) {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.borderColor = '#9CA3AF';
                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.06)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isOpen) {
                                        e.currentTarget.style.transform = 'none';
                                        e.currentTarget.style.borderColor = '#D1D5DB';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
                                    }
                                }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        gap: '1rem'
                                    }}>
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <div style={{
                                                width: '32px',
                                                height: '32px',
                                                minWidth: '32px',
                                                borderRadius: '10px',
                                                background: isOpen ? '#1F2937' : '#FEF9C3',
                                                color: isOpen ? '#FACC15' : '#D97706',
                                                fontWeight: 900,
                                                fontSize: '0.85rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: isOpen ? 'none' : '1px solid #FDE047',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                Q{idx + 1}
                                            </div>
                                            <h3 style={{
                                                fontSize: '1.15rem',
                                                fontWeight: 800,
                                                margin: 0,
                                                color: '#1F2937',
                                                lineHeight: 1.4,
                                                textAlign: 'left'
                                            }}>
                                                {faq.q}
                                            </h3>
                                        </div>
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            minWidth: '32px',
                                            borderRadius: '50%',
                                            background: isOpen ? '#FACC15' : 'rgba(0,0,0,0.05)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'all 0.35s ease',
                                            color: '#1F2937'
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
                                        <div style={{
                                            borderTop: '1px solid rgba(0,0,0,0.08)',
                                            marginTop: '1.25rem',
                                            paddingTop: '1rem'
                                        }}>
                                            <p style={{
                                                color: '#4B5563',
                                                fontSize: '0.96rem',
                                                lineHeight: 1.65,
                                                margin: 0,
                                                textAlign: 'left',
                                                fontWeight: 500
                                            }}>
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Let's Build Software Around Your Business - 100% Full-Bleed Solid Yellow Section with Magnetic CTA */}
            <section id="cta" className="full-bleed-yellow" style={{ padding: '6rem 5%', background: '#FACC15', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }} data-aos="fade-up">
                    <span className="section-tag" style={{ background: '#1F2937', color: '#FACC15', marginBottom: '1.5rem', display: 'inline-block' }}>
                        Ready to Transform?
                    </span>
                    <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '1.5rem', color: '#1F2937', lineHeight: 1.25 }}>
                        Let's Build Software Around Your Business
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#374151', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.8, fontWeight: 500 }}>
                        Your software requirement starts with a business need. Tell us what you are trying to improve, automate, replace or build. Our team can discuss the requirement, understand the context and explore the right development approach.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Link to="/contact" style={{
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
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(31, 41, 55, 0.45)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.background = '#1F2937';
                            e.currentTarget.style.boxShadow = '0 12px 30px rgba(31, 41, 55, 0.3)';
                        }}
                        >
                            Talk to Our Team <ArrowRight size={22} color="#FACC15" />
                        </Link>

                        <Link to="/contact" style={{
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
                            Discuss Your Project
                        </Link>
                    </div>

                    <span style={{ display: 'block', marginTop: '3.5rem', fontSize: '0.95rem', fontWeight: 800, color: '#1F2937', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                        Fly Towards Digital Innovation — Custom Software Solutions
                    </span>
                </div>
            </section>
        </div>
    </main>
    );
};

export default About;
