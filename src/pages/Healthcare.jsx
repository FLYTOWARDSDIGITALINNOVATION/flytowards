import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Activity, ArrowRight, HeartPulse, Workflow, Layers, Database, Zap,
    Smartphone, BarChart3, Link2, Users, CheckCircle2, MessageSquareText,
    Sparkles, FileText, Calendar, ShieldCheck, AlertCircle, Building2,
    CreditCard, Lock, RefreshCw, UserCheck, Code, Globe,
    ChevronDown, MapPin, Stethoscope
} from 'lucide-react';

const Healthcare = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const solutionsRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Electronic Health Records Software in Tamil Nadu | FlyTowards';
    }, []);

    useEffect(() => {
        if (isExpanded && solutionsRef.current) {
            const timer = setTimeout(() => {
                const navOffset = 90;
                const elementPosition = solutionsRef.current.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }, 180);
            return () => clearTimeout(timer);
        }
    }, [isExpanded]);

    const toggleFaq = (index) => setOpenFaq(prev => prev === index ? null : index);

    const overviewHighlights = [
        { icon: FileText, color: '#CA8A04', bg: 'rgba(250,204,21,0.18)', title: 'Digital Patient Records', desc: 'Organize patient information and relevant clinical documentation.' },
        { icon: Workflow, color: '#0284C7', bg: 'rgba(2,132,199,0.15)', title: 'Clinical Workflow Support', desc: 'Structure consultation records and authorized healthcare activities.' },
        { icon: Lock, color: '#16A34A', bg: 'rgba(22,163,74,0.15)', title: 'Controlled Information Access', desc: 'Define user roles and permissions for sensitive patient data.' },
        { icon: Link2, color: '#D97706', bg: 'rgba(217,119,6,0.15)', title: 'Healthcare System Integration', desc: 'Connect compatible clinical and administrative applications.' },
    ];

    const challenges = [
        { icon: AlertCircle, title: 'Fragmented Patient Information', desc: 'Patient details, consultation notes and other records may be maintained across separate applications or physical files.' },
        { icon: Calendar, title: 'Manual Registration & Appointment Processes', desc: 'Paper-based or disconnected scheduling workflows can make patient registration and appointment coordination more difficult.' },
        { icon: Link2, title: 'Disconnected Clinical & Administrative Systems', desc: 'Clinical records, billing, laboratory information and hospital administration may be managed through applications that do not exchange information.' },
        { icon: CreditCard, title: 'Complicated Medical Billing Workflows', desc: 'Manual charge entry, invoice preparation and payment tracking can increase administrative effort and require repeated verification.' },
        { icon: Lock, title: 'Limited Access Controls & Audit Visibility', desc: 'Healthcare applications need appropriate permissions and records of sensitive information access or changes.' },
        { icon: RefreshCw, title: 'Outdated Healthcare Applications', desc: 'Existing systems may have usability limitations, integration challenges or difficulty supporting changing operational requirements.' },
    ];

    const solutions = [
        { icon: FileText, title: 'Electronic Health Records Software', desc: 'Develop applications for maintaining patient profiles, medical histories, clinical notes and relevant health information with defined access controls.' },
        { icon: Building2, title: 'Hospital Management Software', desc: 'Build applications for coordinating patient registration, appointments, admissions-related administration and hospital operational workflows.' },
        { icon: CreditCard, title: 'Medical Billing Software', desc: 'Develop billing functionality for service charges, invoices, payment records and relevant administrative reporting.' },
        { icon: FileText, title: 'Electronic Medical Record Programs', desc: 'Create digital record-management applications for clinical documentation and patient information within defined healthcare settings.' },
        { icon: Calendar, title: 'Appointment & Patient Management Software', desc: 'Organize appointment schedules, patient registration details, visit status and related communication workflows.' },
        { icon: BarChart3, title: 'Healthcare Dashboards & System Integration', desc: 'Develop administrative dashboards and integrations between compatible EHR, billing, laboratory and hospital applications.' },
    ];

    const workflows = [
        { icon: UserCheck, title: 'Patient Registration & Profile Management', desc: 'Registration teams can create patient profiles, maintain contact information and organize relevant administrative details.' },
        { icon: Calendar, title: 'Appointment Scheduling', desc: 'Healthcare staff can manage appointment requests, schedules, booking status and suitable notifications.' },
        { icon: FileText, title: 'Clinical Documentation', desc: 'Authorized clinicians can record consultation notes, medical histories and other clinical information within structured patient records.' },
        { icon: Database, title: 'Laboratory & Diagnostic Information', desc: 'Where supported integrations are available, relevant test requests and results can be associated with the appropriate patient record.' },
        { icon: CreditCard, title: 'Medical Billing & Payment Records', desc: 'Administrative teams can manage service charges, invoices, payment information and billing-related reports.' },
        { icon: BarChart3, title: 'Healthcare Administration & Reporting', desc: 'Authorized users can review selected operational information, such as appointment volumes, billing status and administrative workflow activity.' },
    ];

    const benefits = [
        { icon: FileText, title: 'Organize Patient Information', desc: 'Maintain structured digital records that authorized healthcare staff can access according to their responsibilities.' },
        { icon: HeartPulse, title: 'Support Clinical Documentation', desc: 'Provide consistent interfaces for recording relevant consultation information and maintaining patient histories.' },
        { icon: Zap, title: 'Simplify Administrative Workflows', desc: 'Connect selected registration, scheduling, billing and reporting activities through suitable software processes.' },
        { icon: Database, title: 'Improve Information Availability', desc: 'Help authorized users locate relevant records and workflow information without relying entirely on separate files or manual searches.' },
        { icon: ShieldCheck, title: 'Support Controlled Data Management', desc: 'Implement appropriate access permissions, audit logging and information-handling controls based on the application\'s requirements.' },
    ];

    const services = [
        { icon: Code, title: 'Custom Software Development', desc: 'Build healthcare applications around defined clinical and administrative workflows.' },
        { icon: Globe, title: 'Web Application Development', desc: 'Develop browser-based applications for authorized healthcare staff, patient administration and relevant portal functionality.' },
        { icon: Smartphone, title: 'Mobile App Development', desc: 'Create mobile applications for suitable appointment, patient communication or administrative use cases.' },
        { icon: Link2, title: 'API Development', desc: 'Connect compatible EHR, hospital administration, laboratory and billing applications through supported interfaces.' },
        { icon: Layers, title: 'UI/UX Design', desc: 'Plan accessible, clear interfaces for patient records, appointment workflows and healthcare administration.' },
        { icon: Zap, title: 'Software Maintenance & Support', desc: 'Maintain agreed healthcare application functionality, address identified issues and implement suitable updates.' },
    ];

    const processSteps = [
        { num: '01', title: 'Healthcare Workflow Discovery', desc: 'Understand patient registration, clinical documentation, scheduling, billing and relevant administrative workflows.' },
        { num: '02', title: 'Requirements & Data Assessment', desc: 'Identify user roles, information requirements, existing applications, privacy considerations and integration needs.' },
        { num: '03', title: 'Solution Architecture & Access Planning', desc: 'Define application modules, data relationships, user permissions, audit requirements and appropriate security controls.' },
        { num: '04', title: 'UI/UX Design & Software Development', desc: 'Design suitable interfaces and develop agreed healthcare application functionality.' },
        { num: '05', title: 'Testing & Workflow Validation', desc: 'Test relevant workflows, data handling, access permissions, integrations and security requirements using appropriate non-production test data.' },
        { num: '06', title: 'Deployment & Support Planning', desc: 'Prepare the application for implementation, review migration and backup requirements, and define suitable maintenance arrangements.' },
    ];

    const differentiators = [
        { num: '01', title: 'Healthcare Workflow Understanding', desc: 'We focus on identifying the relevant patient, clinical and administrative processes before planning software functionality.' },
        { num: '02', title: 'Custom Application Planning', desc: 'We consider user roles, required records, workflows and application modules based on the healthcare organization\'s needs.' },
        { num: '03', title: 'Security-Conscious Design Planning', desc: 'We consider access permissions, audit requirements, data protection and secure information handling as part of solution planning.' },
        { num: '04', title: 'Integration & Implementation Considerations', desc: 'We assess compatible system integrations, existing software dependencies and practical deployment requirements.' },
    ];

    const faqs = [
        { q: 'What is electronic health records software?', a: 'Electronic health records software is a digital application used to maintain and manage patient health information, such as medical histories, clinical notes, diagnoses, medications and relevant test results.' },
        { q: 'What is the difference between EHR and EMR software?', a: 'Electronic medical record (EMR) software generally manages digital clinical records within a particular healthcare practice or organization. Electronic health record (EHR) systems may support broader patient information management and authorized information exchange across care settings.' },
        { q: 'What is hospital management software?', a: 'Hospital management software supports hospital operations such as patient registration, appointments, admissions-related administration, billing and other management workflows. It may integrate with EHR software or include selected clinical record functions.' },
        { q: 'Can medical billing software integrate with electronic health records?', a: 'Yes. Compatible medical billing and EHR applications can exchange relevant information through supported integration methods. The scope depends on the systems involved and appropriate data-access permissions.' },
        { q: 'What features are important in electronic medical record programs?', a: 'Common features include patient profiles, clinical documentation, medical history records, user permissions, search functionality, audit logs and suitable backup arrangements. Required features depend on the healthcare setting.' },
        { q: 'How much does electronic health records software development cost in Tamil Nadu?', a: 'Costs depend on the number of modules, clinical workflows, user roles, integrations, security requirements, data migration and deployment scope. A detailed assessment is needed to estimate development costs.' },
        { q: 'Can electronic healthcare records software be customized for a clinic or hospital?', a: 'Yes. Custom EHR software can be planned around specific clinical documentation, scheduling, patient management and administrative requirements, subject to appropriate clinical validation and data protection controls.' },
        { q: 'What security and compliance considerations apply to healthcare software in India?', a: 'Healthcare software handling personal and health information should be assessed against applicable Indian data protection, confidentiality, recordkeeping and cybersecurity requirements. Legal, security and healthcare specialists should validate the applicable obligations before deployment.' },
    ];

    const legacyRequirements = [
        { title: 'EHR Systems', desc: 'Electronic health records for patient data and clinical documentation.', icon: FileText },
        { title: 'Patient Portal', desc: 'Patient-facing interfaces for appointments and health information access.', icon: Users },
        { title: 'Hospital Management', desc: 'Integrated systems for hospital operations, staff and resource management.', icon: Building2 },
        { title: 'Medical Billing', desc: 'Billing workflows, claim management and payment reconciliation systems.', icon: CreditCard },
        { title: 'Appointment Systems', desc: 'Scheduling applications for consultations, procedures and follow-ups.', icon: Calendar },
        { title: 'Clinical Analytics', desc: 'Reporting dashboards for clinical outcomes and operational performance.', icon: BarChart3 },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <main style={{ padding: '120px 6% 100px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', background: '#ffffff', fontFamily: "'Outfit', sans-serif" }}>
            <div className="mesh-bg"></div>

            {/* ════════════════════════════════════════════════════
                SECTION 01 — EHR HERO
            ════════════════════════════════════════════════════ */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))', gap: 'clamp(3rem,5vw,5rem)', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(250,204,21,0.18)', color: '#B45309', border: '1px solid rgba(250,204,21,0.45)', fontSize: '0.875rem', fontWeight: 600, width: 'fit-content' }}>
                            <HeartPulse size={16} color="#CA8A04" /><span>Healthcare &amp; HealthTech Solutions</span>
                        </motion.div>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="gradient-text" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
                            Electronic Health Records Software Solutions in Tamil Nadu
                        </motion.h2>
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ fontSize: 'clamp(1rem,1.6vw,1.2rem)', fontWeight: 700, color: '#1F2937', borderLeft: '4px solid #FACC15', paddingLeft: '1rem', lineHeight: 1.45 }}>
                            Connect Patient Records, Clinical Workflows and Healthcare Operations
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#4B5563', fontSize: '1rem', lineHeight: 1.75 }}>
                            <p style={{ margin: 0 }}>Healthcare organizations manage information across patient registration, consultations, appointments, clinical documentation, billing and administration.</p>
                            <p style={{ margin: 0 }}>When these activities depend on paper records or disconnected applications, accessing and coordinating information can become difficult.</p>
                            <p style={{ margin: 0 }}>FlyTowards provides healthcare software development solutions for hospitals, clinics and healthcare organizations across Tamil Nadu, with a focus on South Tamil Nadu.</p>
                            <p style={{ margin: 0 }}>We help healthcare businesses plan custom electronic health records software, hospital management applications, medical billing systems and connected administrative workflows.</p>
                            <p style={{ margin: 0, fontWeight: 500, color: '#1F2937' }}>Our approach focuses on practical software requirements, usability, controlled data access and the needs of healthcare teams.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.95rem 2rem', fontSize: '1rem', fontWeight: 700, borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 25px rgba(250,204,21,0.35)' }}>
                                <MessageSquareText size={18} /><span>Discuss Your Healthcare Software Project</span>
                            </Link>
                            <Link to="/service" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.95rem 2rem', fontSize: '1rem', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', border: '2px solid #E5E7EB', color: '#374151', background: '#fff', transition: 'all 0.2s ease' }}>
                                <span>Explore Our Software Services</span><ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                    {/* Right: Dashboard visual */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} style={{ background: 'linear-gradient(145deg,#F8FAFC,#F1F5F9)', borderRadius: '24px', padding: '2rem', border: '1px solid #E2E8F0', boxShadow: '0 20px 50px rgba(0,0,0,0.06)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ background: '#fff', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', border: '1px solid #F1F5F9' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(250,204,21,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FileText size={18} color="#CA8A04" /></div>
                                    <span style={{ fontWeight: 700, color: '#1F2937', fontSize: '0.9rem' }}>Patient Records</span>
                                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#16A34A', background: 'rgba(22,163,74,0.1)', padding: '2px 8px', borderRadius: '20px', fontWeight: 600 }}>Active</span>
                                </div>
                                {[['Ramesh Kumar', 'ID #10421', '#CA8A04'], ['Priya Lakshmi', 'ID #10422', '#0284C7'], ['Senthil Murugan', 'ID #10423', '#7C3AED']].map(([name, id, color]) => (
                                    <div key={id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
                                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color }}>{name[0]}</div>
                                        <div><div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1F2937' }}>{name}</div><div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{id}</div></div>
                                        <CheckCircle2 size={14} color="#16A34A" style={{ marginLeft: 'auto' }} />
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                {[{ icon: Calendar, label: 'Appointments', val: '24 Today', color: '#0284C7', bg: 'rgba(2,132,199,0.1)' }, { icon: CreditCard, label: 'Billing', val: '₹18,400', color: '#16A34A', bg: 'rgba(22,163,74,0.1)' }, { icon: HeartPulse, label: 'Clinical Notes', val: '12 Added', color: '#EF4444', bg: 'rgba(239,68,68,0.1)' }, { icon: ShieldCheck, label: 'Access Log', val: 'Secured', color: '#7C3AED', bg: 'rgba(124,58,237,0.1)' }].map(({ icon: Icon, label, val, color, bg }) => (
                                    <div key={label} style={{ background: '#fff', borderRadius: '12px', padding: '1rem', border: '1px solid #F1F5F9', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}><Icon size={16} color={color} /></div>
                                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF', marginBottom: '2px' }}>{label}</div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1F2937' }}>{val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 02 — INDUSTRY OVERVIEW
            ════════════════════════════════════════════════════ */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 'clamp(2.5rem,5vw,4rem)', alignItems: 'start' }}>
                    <div>
                        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250,204,21,0.15)', color: '#B45309', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                            <Database size={14} color="#EAB308" /> Industry Overview
                        </motion.div>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            What Is Electronic Health Records Software?
                        </motion.h2>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4B5563', fontSize: '1.02rem', lineHeight: 1.75 }}>
                            <p style={{ margin: 0 }}>Electronic health records software is a digital system used to create, organize, access and manage patient health information.</p>
                            <p style={{ margin: 0 }}>Depending on the application's scope, an EHR may include patient demographics, medical history, clinical notes, diagnoses, medications, test results and other relevant healthcare records.</p>
                            <p style={{ margin: 0 }}>Electronic healthcare records software can also support authorized information sharing and coordination across healthcare workflows when suitable interoperability features and permissions are implemented.</p>
                            <p style={{ margin: 0 }}>EHR software is related to electronic medical record programs, hospital management software and medical billing applications, but these systems serve different functions.</p>
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '0.5rem' }}>
                        {overviewHighlights.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={20} color={item.color} /></div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#1F2937', marginBottom: '4px', fontSize: '1rem' }}>{item.title}</div>
                                        <div style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.desc}</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 03 — CHALLENGES
            ════════════════════════════════════════════════════ */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(239,68,68,0.1)', color: '#DC2626', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                        <AlertCircle size={14} /> Common Challenges
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', lineHeight: 1.2 }}>
                        Common Software Challenges in Healthcare Operations
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ color: '#6B7280', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
                        Healthcare organizations need accurate information, coordinated workflows and appropriate controls for sensitive patient records. Disconnected systems and manual processes can create administrative complexity.
                    </motion.p>
                </div>
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: '1.5rem' }}>
                    {challenges.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div key={i} variants={itemVariants} whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }} style={{ background: '#fff', borderRadius: '20px', padding: '2rem', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(239,68,68,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}><Icon size={22} color="#DC2626" /></div>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1F2937', marginBottom: '0.6rem' }}>{item.title}</h3>
                                <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 04 — SOFTWARE SOLUTIONS
            ════════════════════════════════════════════════════ */}
            <section id="healthcare-solutions" style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2, scrollMarginTop: '120px' }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250,204,21,0.15)', color: '#B45309', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                        <Sparkles size={14} color="#EAB308" /> Our Solutions
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', lineHeight: 1.2 }}>
                        Our Electronic Health Records &amp; Healthcare Software Solutions
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ color: '#6B7280', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
                        FlyTowards helps healthcare organizations plan and develop software around patient information, clinical documentation and administrative workflows.
                    </motion.p>
                </div>
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: '1.5rem' }}>
                    {solutions.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div key={i} variants={itemVariants} whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(250,204,21,0.15)', borderColor: '#FACC15' }} style={{ background: '#fff', borderRadius: '20px', padding: '2rem', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', transition: 'border-color 0.25s ease' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(250,204,21,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}><Icon size={24} color="#CA8A04" /></div>
                                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#1F2937', marginBottom: '0.75rem' }}>{item.title}</h3>
                                <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 05 — WORKFLOWS & USE CASES
            ════════════════════════════════════════════════════ */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(2,132,199,0.1)', color: '#0284C7', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                        <Workflow size={14} /> Healthcare Workflows
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem' }}>
                        How Electronic Health Records Software Supports Healthcare Workflows
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ color: '#6B7280', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
                        Healthcare software becomes useful when it helps authorized teams manage information across patient care and administrative activities.
                    </motion.p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {workflows.map((item, i) => {
                        const Icon = item.icon;
                        const isEven = i % 2 === 0;
                        return (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 * i }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: '2rem', alignItems: 'center', padding: '2.5rem 0', borderBottom: i < workflows.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                                <div style={{ order: isEven ? 0 : 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(250,204,21,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon size={22} color="#CA8A04" /></div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1F2937', margin: 0 }}>{item.title}</h3>
                                    </div>
                                    <p style={{ color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                                </div>
                                <div style={{ order: isEven ? 1 : 0, background: 'linear-gradient(135deg,#FEFCE8,#FEF9C3)', borderRadius: '16px', padding: '1.5rem', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(250,204,21,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}><Icon size={28} color="#B45309" /></div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#92400E' }}>Step {i + 1} of {workflows.length}</div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#6B7280', lineHeight: 1.6 }}>
                        <strong style={{ color: '#374151' }}>Developer note:</strong> This is an illustrative workflow. Actual clinical processes, medical record requirements, staff responsibilities and approval controls must be defined with qualified healthcare stakeholders.
                    </p>
                </motion.div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 06 — BENEFITS
            ════════════════════════════════════════════════════ */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 'clamp(2.5rem,5vw,4rem)', alignItems: 'center' }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ background: 'linear-gradient(145deg,#F8FAFC,#F1F5F9)', borderRadius: '24px', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', justifyContent: 'center', minHeight: '360px' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'rgba(250,204,21,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><HeartPulse size={40} color="#CA8A04" /></div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1F2937', textAlign: 'center', margin: 0 }}>Benefits of Electronic Health Records Software</h3>
                        <p style={{ color: '#6B7280', textAlign: 'center', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>Well-designed healthcare applications can support more organized information management and clearer coordination between authorized clinical and administrative teams.</p>
                    </motion.div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800, color: '#1F2937', marginBottom: '2rem' }}>
                            Benefits of Electronic Health Records Software for Healthcare Organizations
                        </motion.h2>
                        {benefits.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 * i }} style={{ display: 'flex', gap: '1rem', padding: '1.25rem 0', borderBottom: i < benefits.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(22,163,74,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><CheckCircle2 size={20} color="#16A34A" /></div>
                                    <div>
                                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1F2937', marginBottom: '4px' }}>{item.title}</h3>
                                        <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 07 — SERVICES
            ════════════════════════════════════════════════════ */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250,204,21,0.15)', color: '#B45309', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                        <Layers size={14} color="#EAB308" /> Our Services
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem' }}>
                        FlyTowards Software Development Services for Healthcare Organizations
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ color: '#6B7280', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
                        Healthcare software projects may involve custom application development, user interface design, system integration and ongoing technical maintenance.
                    </motion.p>
                </div>
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: '1.25rem' }}>
                    {services.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div key={i} variants={itemVariants} whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(250,204,21,0.12)' }} style={{ background: '#fff', borderRadius: '18px', padding: '1.75rem', border: '1px solid #E5E7EB', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(250,204,21,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={20} color="#CA8A04" /></div>
                                <div>
                                    <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1F2937', marginBottom: '6px' }}>{item.title}</h3>
                                    <p style={{ color: '#6B7280', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 08 — DEVELOPMENT PROCESS
            ════════════════════════════════════════════════════ */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(124,58,237,0.1)', color: '#7C3AED', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                        <Zap size={14} /> Development Process
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem' }}>
                        Our Electronic Health Records Software Development Process
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ color: '#6B7280', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
                        We follow a structured approach to understand healthcare software requirements, plan appropriate controls and develop agreed application functionality.
                    </motion.p>
                </div>
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: '1.5rem' }}>
                    {processSteps.map((step, i) => (
                        <motion.div key={i} variants={itemVariants} style={{ background: '#fff', borderRadius: '20px', padding: '2rem', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'rgba(250,204,21,0.15)', position: 'absolute', top: '0.5rem', right: '1rem', lineHeight: 1 }}>{step.num}</div>
                            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(250,204,21,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                                <span style={{ fontSize: '1rem', fontWeight: 800, color: '#B45309' }}>{step.num}</span>
                            </div>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1F2937', marginBottom: '0.75rem' }}>{step.title}</h3>
                            <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 09 — WHY FLYTOWARDS
            ════════════════════════════════════════════════════ */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 'clamp(2.5rem,5vw,4rem)', alignItems: 'start' }}>
                    <div>
                        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250,204,21,0.15)', color: '#B45309', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                            <ShieldCheck size={14} color="#EAB308" /> Why Choose Us
                        </motion.div>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: 'clamp(1.8rem,3.2vw,2.5rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.25rem' }}>
                            Why Choose FlyTowards for Healthcare Software Solutions?
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ color: '#4B5563', lineHeight: 1.75, marginBottom: '1rem' }}>
                            Healthcare software requires careful planning because it supports workflows involving sensitive information and users with different responsibilities.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} style={{ color: '#4B5563', lineHeight: 1.75, marginBottom: '2rem' }}>
                            A suitable solution should be designed around the healthcare organization's operational requirements, with appropriate clinical input and technical controls.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.95rem 2rem', fontSize: '1rem', fontWeight: 700, borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 25px rgba(250,204,21,0.35)' }}>
                                <MessageSquareText size={18} /><span>Discuss Your Healthcare Software Requirements</span>
                            </Link>
                        </motion.div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {differentiators.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }} style={{ display: 'flex', gap: '1.25rem', padding: '1.75rem 0', borderBottom: i < differentiators.length - 1 ? '1px solid #F3F4F6' : 'none', alignItems: 'flex-start' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(250,204,21,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#B45309' }}>{item.num}</span>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1F2937', marginBottom: '6px' }}>{item.title}</h3>
                                    <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 10 — TAMIL NADU RELEVANCE
            ════════════════════════════════════════════════════ */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ background: 'linear-gradient(135deg,#FEFCE8,#FEF9C3,#FEF3C7)', borderRadius: '28px', padding: 'clamp(2.5rem,5vw,4rem)', border: '1px solid rgba(250,204,21,0.3)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250,204,21,0.3)', color: '#92400E', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                                <MapPin size={14} /> Tamil Nadu Focus
                            </div>
                            <h2 style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.5rem', lineHeight: 1.25 }}>
                                Electronic Health Records Software Solutions in Tamil Nadu
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', color: '#374151', fontSize: '1rem', lineHeight: 1.75 }}>
                                <p style={{ margin: 0 }}>Hospitals, clinics, diagnostic centers and other healthcare organizations across Tamil Nadu use software to manage patient information, appointments, clinical documentation and administration.</p>
                                <p style={{ margin: 0 }}>In South Tamil Nadu, healthcare providers may have different requirements depending on their size, specialties, patient volumes, existing applications and internal workflows.</p>
                                <p style={{ margin: 0 }}>Some organizations need to move from paper-based records to structured digital systems. Others may need to improve existing electronic medical record programs or connect clinical applications with hospital management and billing software.</p>
                                <p style={{ margin: 0 }}>FlyTowards provides healthcare software development solutions for organizations across Tamil Nadu, focusing on defined workflows, suitable application functionality and responsible handling of sensitive information.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[['Tirunelveli', 'South Tamil Nadu hub'], ['Madurai', 'Central Tamil Nadu'], ['Coimbatore', 'Western Tamil Nadu'], ['Chennai', 'Capital region']].map(([city, region]) => (
                                <div key={city} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', borderRadius: '14px', padding: '1rem 1.25rem', border: '1px solid rgba(250,204,21,0.3)', boxShadow: '0 4px 15px rgba(250,204,21,0.08)' }}>
                                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(250,204,21,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin size={18} color="#B45309" /></div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#1F2937', fontSize: '0.95rem' }}>{city}</div>
                                        <div style={{ fontSize: '0.78rem', color: '#92400E' }}>{region}</div>
                                    </div>
                                    <CheckCircle2 size={16} color="#16A34A" style={{ marginLeft: 'auto' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 11 — FAQ
            ════════════════════════════════════════════════════ */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: '3rem', alignItems: 'start' }}>
                    <div>
                        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250,204,21,0.15)', color: '#B45309', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                            <MessageSquareText size={14} color="#EAB308" /> FAQ
                        </motion.div>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: 'clamp(1.8rem,3.2vw,2.5rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.25rem' }}>
                            Frequently Asked Questions About Electronic Health Records Software
                        </motion.h2>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ color: '#6B7280', lineHeight: 1.7 }}>
                            Common questions about EHR software, hospital management systems and healthcare application development in Tamil Nadu.
                        </motion.p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {faqs.map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 * i }} style={{ borderBottom: '1px solid #F3F4F6' }}>
                                <button onClick={() => toggleFaq(i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
                                    <span style={{ fontWeight: 700, color: '#1F2937', fontSize: '0.98rem', lineHeight: 1.45 }}>{faq.q}</span>
                                    <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ display: 'inline-flex', flexShrink: 0 }}><ChevronDown size={18} color="#CA8A04" /></motion.span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }} style={{ overflow: 'hidden' }}>
                                            <p style={{ color: '#6B7280', lineHeight: 1.7, paddingBottom: '1.25rem', margin: 0, fontSize: '0.93rem' }}>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 12 — FINAL CTA
            ════════════════════════════════════════════════════ */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <div style={{ background: 'linear-gradient(135deg,#1F2937 0%,#111827 100%)', borderRadius: '28px', padding: 'clamp(3rem,6vw,4.5rem) clamp(2rem,4vw,3.5rem)', color: '#FFFFFF', textAlign: 'center', boxShadow: '0 25px 60px rgba(0,0,0,0.25)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.2px', color: '#FACC15', fontWeight: 700 }}>Take The Next Step in HealthTech Innovation</span>
                        <h2 style={{ fontSize: 'clamp(2rem,3.8vw,3.2rem)', fontWeight: 800, margin: 0, color: '#FFFFFF', lineHeight: 1.25 }}>
                            Build Healthcare Software Around Your Patient and Operational Workflows
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#D1D5DB', fontSize: '1.05rem', lineHeight: 1.75 }}>
                            <p style={{ margin: 0 }}>Need to organize electronic patient records, improve appointment management or connect healthcare administration with billing systems?</p>
                            <p style={{ margin: 0 }}>FlyTowards helps healthcare organizations explore custom software solutions aligned with their users, workflows and technical requirements.</p>
                            <p style={{ margin: 0, fontWeight: 600, color: '#FFFFFF' }}>Share your healthcare software requirements and take the next step toward a practical digital solution.</p>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center', marginTop: '1rem' }}>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                                <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1.05rem 2.2rem', fontSize: '1.05rem', fontWeight: 700, borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(250,204,21,0.45)' }}>
                                    <MessageSquareText size={18} /><span>Discuss Your Healthcare Software Project</span>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1.05rem 2.2rem', fontSize: '1.05rem', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', background: 'rgba(255,255,255,0.08)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.25)', transition: 'all 0.2s ease' }}>
                                    <span>Request a Consultation</span><ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>



            {/* Healthcare hero moved below the page content, immediately above the site footer. */}
            {/* ── TOP HERO ── */}
            <div className="healthcare-hero-grid" style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'left', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', alignItems: 'flex-start' }}>
                    <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', border: '1px solid rgba(250, 204, 21, 0.35)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                        <Activity size={16} color="#EAB308" /> Healthcare &amp; HealthTech
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
                        Healthcare Software
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ fontSize: '1.2rem', color: '#6B7280', lineHeight: 1.8, margin: 0, maxWidth: '540px' }}>
                        Software solutions designed around healthcare-related business processes, operational workflows and information requirements.
                    </motion.p>
                    <motion.button type="button" onClick={() => setIsExpanded(prev => !prev)} className="btn btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', alignSelf: 'flex-start', padding: '0.95rem 2.2rem', fontSize: '1.05rem', fontWeight: 600, borderRadius: '50px', cursor: 'pointer', border: 'none', outline: 'none', boxShadow: isExpanded ? '0 0 0 3px rgba(250,204,21,0.5), 0 12px 30px rgba(250,204,21,0.4)' : '0 8px 25px rgba(250,204,21,0.35)', transition: 'all 0.3s ease' }} aria-expanded={isExpanded}>
                        <span>Explore Healthcare Solutions</span>
                        <motion.span animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.3 }} style={{ display: 'inline-flex' }}>
                            <ArrowRight size={18} />
                        </motion.span>
                    </motion.button>
                </div>
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} whileHover={{ scale: 1.02 }} style={{ display: 'flex', justifyContent: 'center', width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB' }}>
                    <img src="/images (3).jpg" alt="Healthcare software solutions" style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }} />
                </motion.div>
            </div>

            {/* ── EXPANDABLE DRAWER ── */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.section ref={solutionsRef} initial={{ opacity: 0, height: 0, y: 35 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0, y: 25 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} style={{ width: '100%', maxWidth: '1100px', margin: '0 auto 4rem', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ background: '#FFFFFF', borderRadius: '24px', padding: 'clamp(2rem,4vw,3rem)', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(209,213,219,0.6)', marginBottom: '2rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250,204,21,0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                                <Sparkles size={16} color="#EAB308" /> Clinical &amp; Hospital Systems
                            </div>
                            <h3 style={{ fontSize: 'clamp(2rem,3.5vw,2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.25rem' }}>Healthcare Software Solutions</h3>
                            <p style={{ fontSize: '1.1rem', color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>Healthcare organizations operate across patient care, administrative administration, clinical recording and diagnostic processes.</p>
                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: 1.8, margin: 0 }}>Custom digital solutions provide organized record management, controlled authorization, and connected clinical workflows.</p>
                        </motion.div>
                        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                            {legacyRequirements.map((req, index) => {
                                const IconComponent = req.icon;
                                return (
                                    <motion.div key={index} variants={itemVariants} whileHover={{ y: -6, boxShadow: '0 16px 35px rgba(250,204,21,0.2)', borderColor: '#FACC15' }} transition={{ duration: 0.25 }} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '1.75rem', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'linear-gradient(135deg,rgba(250,204,21,0.2),rgba(253,224,71,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <IconComponent size={24} color="#CA8A04" />
                                        </div>
                                        <h5 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1F2937', margin: 0 }}>{req.title}</h5>
                                        <p style={{ fontSize: '0.95rem', color: '#6B7280', margin: 0, lineHeight: 1.6 }}>{req.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>


        </main>
    );
};

export default Healthcare;
