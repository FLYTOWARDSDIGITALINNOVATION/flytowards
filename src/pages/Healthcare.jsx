import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Activity,
    ArrowRight,
    HeartPulse,
    Workflow,
    Layers,
    Database,
    Zap,
    Smartphone,
    BarChart3,
    Link2,
    Users,
    CheckCircle2,
    MessageSquareText,
    Sparkles
} from 'lucide-react';

const Healthcare = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const solutionsRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (isExpanded && solutionsRef.current) {
            const timer = setTimeout(() => {
                const navOffset = 90;
                const elementPosition = solutionsRef.current.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 180);

            return () => clearTimeout(timer);
        }
    }, [isExpanded]);

    const requirements = [
        {
            title: "Business workflow management",
            desc: "Coordinate clinical, administrative, and organizational workflows smoothly across teams.",
            icon: Workflow
        },
        {
            title: "Internal applications",
            desc: "Custom operational software engineered for clinical staff, administrators, and healthcare professionals.",
            icon: Layers
        },
        {
            title: "Information management",
            desc: "Structured, compliant data architecture for secure health records and information handling.",
            icon: Database
        },
        {
            title: "Process automation",
            desc: "Automate routine clinical requests, patient intake, documentation, and administrative processes.",
            icon: Zap
        },
        {
            title: "Digital applications",
            desc: "Modern responsive web and mobile digital solutions tailored for healthcare ecosystems.",
            icon: Smartphone
        },
        {
            title: "Reporting and dashboards",
            desc: "Actionable performance metrics, healthcare operational intelligence, and live tracking.",
            icon: BarChart3
        },
        {
            title: "Application integration",
            desc: "Interoperable integration with healthcare APIs, EHR/EMR platforms, and existing digital tools.",
            icon: Link2
        },
        {
            title: "Customer or user-facing solutions",
            desc: "Intuitive patient portals, self-service applications, and user-centric interfaces.",
            icon: Users
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <main style={{ padding: '120px 8% 100px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto 3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', alignItems: 'center', gap: '3rem', textAlign: 'left', position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    borderRadius: '50px',
                    background: 'rgba(250, 204, 21, 0.15)',
                    color: '#B45309',
                    border: '1px solid rgba(250, 204, 21, 0.35)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px'
                }}>
                    <Activity size={16} color="#EAB308" /> Healthcare & HealthTech
                </span>

                <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
                    Healthcare Software
                </h1>

                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted, #6B7280)', lineHeight: 1.8, margin: 0, maxWidth: '640px' }}>
                    Software solutions designed around healthcare-related business processes, operational workflows and information requirements.
                </p>

                <motion.button
                    type="button"
                    onClick={() => setIsExpanded(prev => !prev)}
                    className="btn btn-primary"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        alignSelf: 'center',
                        padding: '0.95rem 2.2rem',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        borderRadius: '50px',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none',
                        boxShadow: isExpanded
                            ? '0 0 0 3px rgba(250, 204, 21, 0.5), 0 12px 30px rgba(250, 204, 21, 0.4)'
                            : '0 8px 25px rgba(250, 204, 21, 0.35)',
                        transition: 'all 0.3s ease'
                    }}
                    aria-expanded={isExpanded}
                >
                    <span>Explore Healthcare Solutions</span>
                    <motion.span
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ display: 'inline-flex' }}
                    >
                        <ArrowRight size={18} />
                    </motion.span>
                </motion.button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <img src="/images (3).jpg" alt="Healthcare software solutions" style={{ display: 'block', width: '100%', maxWidth: '480px', height: 'auto', borderRadius: '24px', objectFit: 'cover', boxShadow: '0 24px 60px rgba(30, 27, 75, 0.16)' }} />
            </div>
            </div>

            {/* Healthcare Software Solutions Section (Expands below button with animation) */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.section
                        ref={solutionsRef}
                        id="healthcare-solutions"
                        initial={{ opacity: 0, height: 0, y: 35 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 25 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            width: '100%',
                            maxWidth: '1100px',
                            margin: '3.5rem auto 0',
                            position: 'relative',
                            zIndex: 2,
                            textAlign: 'left',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '24px',
                                padding: 'clamp(2rem, 4vw, 3rem)',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
                                border: '1px solid rgba(209, 213, 219, 0.6)',
                                marginBottom: '2rem',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                                <Sparkles size={16} color="#EAB308" />
                                Healthcare Solutions Approach
                            </div>

                            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.25rem', letterSpacing: '-0.5px' }}>
                                Healthcare Software Solutions
                            </h2>

                            <p style={{ fontSize: '1.15rem', color: '#374151', lineHeight: 1.8, marginBottom: '1rem', maxWidth: '950px' }}>
                                Healthcare businesses operate within complex environments where people, processes and information need to work together effectively.
                            </p>

                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: 1.8, margin: 0, maxWidth: '950px' }}>
                                Software requirements may involve internal workflows, information management, operational processes and digital interactions.
                            </p>
                        </motion.div>

                        {/* Approach Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ marginBottom: '1.5rem', padding: '0 0.5rem' }}
                        >
                            <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.45rem)', fontWeight: 700, color: '#1F2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <HeartPulse size={24} color="#EAB308" />
                                Our healthcare software approach can support requirements such as:
                            </h3>
                        </motion.div>

                        {/* Requirements Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '2.5rem'
                            }}
                        >
                            {requirements.map((req, index) => {
                                const IconComponent = req.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ y: -6, boxShadow: '0 16px 35px rgba(250, 204, 21, 0.2)', borderColor: '#FACC15' }}
                                        transition={{ duration: 0.25 }}
                                        style={{
                                            background: '#FFFFFF',
                                            borderRadius: '20px',
                                            padding: '1.75rem',
                                            border: '1px solid #E5E7EB',
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1rem',
                                            cursor: 'default',
                                            transition: 'border-color 0.25s ease'
                                        }}
                                    >
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.2) 0%, rgba(253, 224, 71, 0.1) 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#B45309'
                                        }}>
                                            <IconComponent size={24} color="#CA8A04" />
                                        </div>

                                        <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1F2937', margin: 0, lineHeight: 1.35 }}>
                                            {req.title}
                                        </h4>

                                        <p style={{ fontSize: '0.95rem', color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
                                            {req.desc}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Project Definition Note */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(254, 249, 195, 0.45) 0%, #FFFFFF 100%)',
                                borderLeft: '4px solid #FACC15',
                                borderRadius: '14px',
                                padding: '1.25rem 1.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                                borderTop: '1px solid #FEF9C3',
                                borderRight: '1px solid #FEF9C3',
                                borderBottom: '1px solid #FEF9C3',
                                marginBottom: '2.5rem'
                            }}
                        >
                            <CheckCircle2 size={24} color="#CA8A04" style={{ flexShrink: 0 }} />
                            <p style={{ fontSize: '1.05rem', color: '#374151', margin: 0, fontWeight: 500, lineHeight: 1.6 }}>
                                Each project should be defined according to the organisation&apos;s specific processes and requirements.
                            </p>
                        </motion.div>

                        {/* CTA Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            style={{
                                background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
                                borderRadius: '24px',
                                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                                color: '#FFFFFF',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '1.5rem',
                                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15)'
                            }}
                        >
                            <div style={{ maxWidth: '600px' }}>
                                <span style={{
                                    display: 'inline-block',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    color: '#FACC15',
                                    fontWeight: 700,
                                    marginBottom: '0.5rem'
                                }}>
                                    Custom Healthcare Engineering
                                </span>
                                <h4 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', fontWeight: 800, margin: 0, color: '#FFFFFF', lineHeight: 1.3 }}>
                                    Ready to build software suited to your healthcare workflows?
                                </h4>
                                <p style={{ margin: '0.6rem 0 0', color: '#9CA3AF', fontSize: '0.98rem', lineHeight: 1.6 }}>
                                    Connect with our team to explore tailor-made solutions for your organisation.
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '1.05rem 2.2rem',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <MessageSquareText size={18} />
                                <span>Discuss a Healthcare Software Requirement</span>
                            </Link>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Healthcare;
