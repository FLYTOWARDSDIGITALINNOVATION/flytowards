import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    GraduationCap,
    ArrowRight,
    Building2,
    Workflow,
    Database,
    Users,
    Globe,
    BarChart3,
    Zap,
    Link2,
    CheckCircle2,
    MessageSquareText,
    Sparkles,
    BookOpen,
    FileText,
    Calendar,
    Layers,
    CreditCard,
    Send,
    UserCheck,
    Award,
    ClipboardCheck,
    ClipboardList,
    Sliders,
    Wrench,
    Code,
    Smartphone,
    ShieldCheck,
    MapPin,
    AlertCircle,
    ChevronDown,
    ChevronUp,
    MonitorSmartphone
} from 'lucide-react';

const Education = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const solutionsRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Education Software Solutions in Tamil Nadu | FlyTowards';
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

    const toggleFaq = (index) => {
        setOpenFaq(prev => (prev === index ? null : index));
    };

    // SECTION 03: Challenges
    const challenges = [
        {
            icon: FileText,
            title: 'Fragmented Student Records',
            desc: 'Student profiles, academic information, attendance and administrative records may be maintained in different systems or files.'
        },
        {
            icon: Calendar,
            title: 'Manual Attendance Management',
            desc: 'Paper registers and separate spreadsheets can make attendance recording, consolidation and reporting time-consuming.'
        },
        {
            icon: Layers,
            title: 'Disconnected Learning Platforms',
            desc: 'Course materials, assignments, assessments and student information may be distributed across unrelated tools.'
        },
        {
            icon: CreditCard,
            title: 'Complicated Fee Administration',
            desc: 'Fee structures, payment records, outstanding balances and administrative reports may require repeated manual updates.'
        },
        {
            icon: BarChart3,
            title: 'Limited Academic Progress Visibility',
            desc: 'Teachers and administrators may find it difficult to review attendance, assignment completion and assessment information in one place.'
        },
        {
            icon: Send,
            title: 'Inefficient Institutional Communication',
            desc: 'Notices, schedules, academic updates and administrative messages may be shared through multiple disconnected channels.'
        }
    ];

    // SECTION 04: Software Solutions
    const solutions = [
        {
            icon: MonitorSmartphone,
            title: 'Learning Management Platforms',
            desc: 'Develop digital learning platforms for course organization, learning materials, assignments, assessments and learner progress tracking.',
            link: '/services/custom-software-development/'
        },
        {
            icon: UserCheck,
            title: 'Student Management Systems',
            desc: 'Build applications for maintaining student profiles, enrollment information, attendance records and relevant academic details.',
            link: '/services/web-application-development/'
        },
        {
            icon: Building2,
            title: 'School Management Software',
            desc: 'Create school administration applications that support admissions, class management, attendance, fee records and communication workflows.',
            link: '/services/enterprise-software-development/'
        },
        {
            icon: Award,
            title: 'College & Institution Management Software',
            desc: 'Develop applications for academic departments, course registration, student administration and institution-specific workflows.',
            link: '/services/custom-software-development/'
        },
        {
            icon: ClipboardCheck,
            title: 'Examination & Assessment Management Software',
            desc: 'Plan systems for examination scheduling, assessment records, marks management and authorized result reporting.',
            link: '/services/business-process-automation/'
        },
        {
            icon: BarChart3,
            title: 'Education Dashboards & Reporting',
            desc: 'Develop dashboards for reviewing selected attendance, enrollment, academic and administrative information.',
            link: '/services/saas-development/'
        }
    ];

    // SECTION 05: Workflows
    const workflows = [
        {
            icon: UserCheck,
            title: 'Student Admission & Enrollment',
            desc: 'Admission teams can manage applications, student registration details, enrollment status and relevant administrative records.'
        },
        {
            icon: BookOpen,
            title: 'Course & Learning Material Management',
            desc: 'Learning management platforms can help educators organize course content, learning resources, assignments and student access.'
        },
        {
            icon: Calendar,
            title: 'Attendance Tracking',
            desc: 'Authorized teachers and administrators can record attendance, review attendance histories and prepare relevant reports.'
        },
        {
            icon: ClipboardList,
            title: 'Assignment & Assessment Management',
            desc: 'Educators can distribute assignments, record submissions, manage assessment information and review learner progress.'
        },
        {
            icon: CreditCard,
            title: 'Fee & Administrative Management',
            desc: 'Institutional staff can maintain fee structures, payment records, outstanding balances and related administrative information.'
        },
        {
            icon: MessageSquareText,
            title: 'Student, Parent & Staff Communication',
            desc: 'Suitable portals can support notices, academic updates, schedules and role-based communication workflows.'
        }
    ];

    // SECTION 06: Benefits
    const benefits = [
        {
            icon: Users,
            title: 'Organize Student Information',
            desc: 'Maintain structured student records and provide appropriate access to authorized institutional users.'
        },
        {
            icon: Workflow,
            title: 'Simplify Academic Administration',
            desc: 'Support attendance, scheduling, enrollment and related administrative activities through defined workflows.'
        },
        {
            icon: Globe,
            title: 'Support Digital Learning',
            desc: 'Provide learners and educators with organized access to course materials, assignments and relevant academic resources.'
        },
        {
            icon: Layers,
            title: 'Improve Institutional Coordination',
            desc: 'Connect selected academic and administrative processes to reduce repeated information entry and manual consolidation.'
        },
        {
            icon: BarChart3,
            title: 'Support Academic Reporting',
            desc: 'Present relevant enrollment, attendance, assessment and administrative information through structured reports and dashboards.'
        }
    ];

    // SECTION 07: Services
    const services = [
        {
            icon: Code,
            title: 'Custom Software Development',
            desc: 'Build education applications around institution-specific academic and administrative requirements.',
            link: '/services/custom-software-development/'
        },
        {
            icon: Globe,
            title: 'Web Application Development',
            desc: 'Develop browser-based learning portals, student dashboards and institutional administration systems.',
            link: '/services/web-application-development/'
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            desc: 'Create mobile applications for suitable student, educator, parent and administrative workflows.',
            link: '/services/mobile-app-development/'
        },
        {
            icon: Sliders,
            title: 'UI/UX Design',
            desc: 'Plan clear interfaces for learning management platforms, student portals and school administration applications.',
            link: '/services/ui-ux-design/'
        },
        {
            icon: Link2,
            title: 'API Development',
            desc: 'Connect compatible learning management, student information, payment and institutional applications.',
            link: '/services/api-development/'
        },
        {
            icon: Wrench,
            title: 'Software Maintenance & Support',
            desc: 'Maintain agreed education software functionality, address identified issues and implement suitable application updates.',
            link: '/services/software-maintenance-support/'
        }
    ];

    // SECTION 08: Process
    const processSteps = [
        {
            step: '01',
            title: 'Academic & Administrative Workflow Discovery',
            desc: 'Understand admission processes, learning activities, student records, attendance and relevant institutional operations.'
        },
        {
            step: '02',
            title: 'Requirements & Existing System Assessment',
            desc: 'Identify user roles, academic requirements, existing applications, data needs and integration considerations.'
        },
        {
            step: '03',
            title: 'Solution Architecture & Module Planning',
            desc: 'Define application modules, information relationships, user permissions and development priorities.'
        },
        {
            step: '04',
            title: 'UI/UX Design & Software Development',
            desc: 'Design suitable interfaces and develop agreed education software functionality for relevant user groups.'
        },
        {
            step: '05',
            title: 'Testing & Workflow Validation',
            desc: 'Test student records, user permissions, attendance calculations, academic workflows, integrations and application usability.'
        },
        {
            step: '06',
            title: 'Deployment & Support Planning',
            desc: 'Prepare the application for implementation, review data migration and training needs, and define suitable maintenance requirements.'
        }
    ];

    // SECTION 09: Why FlyTowards
    const differentiators = [
        {
            num: '01',
            title: 'Education Workflow Understanding',
            desc: 'We focus on identifying student, educator and administrative workflows during project planning.'
        },
        {
            num: '02',
            title: 'Custom Institution Requirements',
            desc: 'We consider academic structures, user roles, reporting needs and institution-specific processes when planning application functionality.'
        },
        {
            num: '03',
            title: 'User-Focused Interface Planning',
            desc: 'We consider how students, teachers and administrators navigate the software and complete important tasks.'
        },
        {
            num: '04',
            title: 'Integration & Implementation Planning',
            desc: 'We assess existing application dependencies, suitable integrations and practical implementation requirements.'
        }
    ];

    // SECTION 11: FAQs
    const faqs = [
        {
            q: 'What is education software?',
            a: 'Education software includes digital applications used to support teaching, learning, student information management and academic administration. Examples include learning management systems, student management systems and school management software.'
        },
        {
            q: 'What are learning management platforms?',
            a: 'Learning management platforms are applications used to organize and deliver learning content, manage assignments and assessments, and track learner participation or progress.'
        },
        {
            q: 'What is the difference between an LMS and a student management system?',
            a: 'An LMS focuses on learning activities such as courses, materials, assignments and assessments. A student management system focuses on student information, enrollment, attendance and academic administration. The two systems may share information through integrations.'
        },
        {
            q: 'What features should school management software include?',
            a: 'Common features include student registration, attendance, class management, timetable information, fee records, communication tools and administrative reporting. The required features depend on the school\'s workflows.'
        },
        {
            q: 'Can LMS learning systems be customized for schools and colleges?',
            a: 'Yes. LMS learning systems can be developed or customized around course structures, user roles, learning materials, assessment workflows and institutional requirements.'
        },
        {
            q: 'Can education software integrate with existing institutional systems?',
            a: 'Integration may be possible through compatible APIs, supported data exchange methods or other available interfaces. Technical feasibility depends on the existing applications and access permissions.'
        },
        {
            q: 'How much does education software development cost in Tamil Nadu?',
            a: 'Costs depend on the number of modules, student and staff user roles, learning features, administrative workflows, integrations, security requirements and deployment scope. A requirements assessment helps establish an appropriate budget.'
        },
        {
            q: 'What data protection considerations apply to student management systems?',
            a: 'Student management systems should use appropriate access permissions, secure data handling and safeguards for personal information. Systems involving children\'s data require particular care and review against applicable Indian data protection requirements. The relevant obligations should be confirmed before deployment.'
        }
    ];

    // Existing Bottom Drawer Requirements
    const requirements = [
        {
            title: "Administrative applications",
            desc: "Custom campus management, staff allocation, fee processing, and institutional administration tools.",
            icon: Building2
        },
        {
            title: "Workflow management",
            desc: "Structured workflows for admissions, approvals, curriculum planning, and department handoffs.",
            icon: Workflow
        },
        {
            title: "Information management",
            desc: "Secure, compliant storage and retrieval of student records, grades, transcripts, and faculty data.",
            icon: Database
        },
        {
            title: "User-facing applications",
            desc: "Intuitive portals for students, parents, teachers, and alumni with role-based access.",
            icon: Users
        },
        {
            title: "Digital platforms",
            desc: "Connected LMS solutions, virtual classrooms, exam evaluation systems, and learning hubs.",
            icon: Globe
        },
        {
            title: "Reporting",
            desc: "Student performance analytics, attendance insights, accreditation logs, and audit reports.",
            icon: BarChart3
        },
        {
            title: "Process automation",
            desc: "Automated enrollment notifications, timetable generation, fee reminders, and grading workflows.",
            icon: Zap
        },
        {
            title: "Application integration",
            desc: "Interoperable connectors linking biometric systems, payment gateways, video tools, and cloud apps.",
            icon: Link2
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
        <main style={{ padding: '120px 6% 100px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', background: '#ffffff', fontFamily: "'Outfit', sans-serif" }}>
            <div className="mesh-bg"></div>

            {/* =========================================================================
                SECTION 01 — HERO
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left', maxWidth: '1050px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.18)', color: '#B45309', border: '1px solid rgba(250, 204, 21, 0.45)', fontSize: '0.875rem', fontWeight: 600, width: 'fit-content' }}
                    >
                        <GraduationCap size={16} color="#CA8A04" />
                        <span>Education &amp; EdTech Solutions</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="gradient-text"
                        style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)', fontWeight: 800, lineHeight: 1.15, margin: 0, letterSpacing: '-0.5px' }}
                    >
                        Education Software Solutions in Tamil Nadu
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', fontWeight: 700, color: '#1F2937', borderLeft: '4px solid #FACC15', paddingLeft: '1rem', lineHeight: 1.45 }}
                    >
                        Connect Learning, Student Management and Academic Operations
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: '#4B5563', fontSize: '1.02rem', lineHeight: 1.75 }}
                    >
                        <p style={{ margin: 0 }}>Educational institutions manage a wide range of activities, from student admissions and attendance to course delivery, examinations, communication and administration.</p>
                        <p style={{ margin: 0 }}>When these processes depend on disconnected spreadsheets, manual records or separate applications, coordinating academic and administrative information can become difficult.</p>
                        <p style={{ margin: 0 }}>FlyTowards provides education software development solutions for schools, colleges, training institutes and educational organizations across Tamil Nadu, with a focus on South Tamil Nadu.</p>
                        <p style={{ margin: 0 }}>We help institutions plan custom learning management platforms, student management systems, school management software and connected academic workflows.</p>
                        <p style={{ margin: 0, fontWeight: 500, color: '#1F2937' }}>Our approach focuses on practical application requirements, clear interfaces and the needs of students, educators and administrators.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}
                    >
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem', fontSize: '1.02rem', fontWeight: 700, borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 25px rgba(250, 204, 21, 0.4)' }}>
                                <span>Discuss Your Education Software Project</span>
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link to="/service" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1rem 1.8rem', fontSize: '1.02rem', fontWeight: 600, borderRadius: '50px', textDecoration: 'none' }}>
                                <span>Explore Our Software Services</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================================
                SECTION 02 — INDUSTRY OVERVIEW
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '3.5rem', alignItems: 'start' }}>
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'left' }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                            <GraduationCap size={16} color="#EAB308" />
                            Industry Overview
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.5rem', letterSpacing: '-0.4px', lineHeight: 1.25 }}>
                            What Is Education Software?
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4B5563', fontSize: '1.02rem', lineHeight: 1.75 }}>
                            <p style={{ margin: 0 }}>Education software refers to digital applications that support teaching, learning, student information management and educational administration.</p>
                            <p style={{ margin: 0 }}>Depending on the institution's requirements, education software may include learning management systems, student information systems, attendance applications, examination management tools and school administration platforms.</p>
                            <p style={{ margin: 0 }}>Learning management platforms primarily support course delivery, learning materials, assignments and learner progress. Student management systems focus on student records and academic administration.</p>
                            <p style={{ margin: 0 }}>These applications may operate independently or connect through a broader school or institutional management system.</p>
                        </div>
                    </motion.div>

                    {/* Right: 4 icon highlights */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {[
                            { icon: BookOpen, title: 'Digital Learning', desc: 'Organize courses, learning materials, assignments and learner activities.' },
                            { icon: Users, title: 'Student Information Management', desc: 'Maintain structured student profiles and academic records.' },
                            { icon: Building2, title: 'Academic Administration', desc: 'Support attendance, examinations, scheduling and institutional workflows.' },
                            { icon: MessageSquareText, title: 'Connected Communication', desc: 'Coordinate relevant information between authorized staff, students and parents.' }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(250, 204, 21, 0.18)', borderColor: '#FACC15' }}
                                    style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem', padding: '1.25rem 1.5rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'border-color 0.25s ease' }}
                                >
                                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(250, 204, 21, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Icon size={22} color="#CA8A04" />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1F2937', marginBottom: '0.25rem' }}>{item.title}</div>
                                        <div style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================================
                SECTION 03 — INDUSTRY CHALLENGES
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <AlertCircle size={16} color="#EAB308" />
                        Industry Challenges
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.4px' }}>
                        Common Software Challenges in Educational Institutions
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        Schools, colleges and training organizations need to coordinate information across students, teachers, academic departments and administration teams. Manual processes and disconnected applications can make this coordination more complicated.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
                    {challenges.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ y: -7, boxShadow: '0 16px 35px rgba(250, 204, 21, 0.2)', borderColor: '#FACC15' }}
                                style={{ background: '#FFFFFF', borderRadius: '18px', padding: '1.75rem', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'border-color 0.25s ease' }}
                            >
                                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(250, 204, 21, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <Icon size={24} color="#CA8A04" />
                                </div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.5rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================================
                SECTION 04 — SOLUTIONS
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <Sparkles size={16} color="#EAB308" />
                        Our Solutions
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.4px' }}>
                        Our Education Software Development Solutions
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        FlyTowards helps educational institutions plan and develop applications around learning activities, student information and academic administration.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
                    {solutions.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ y: -7, boxShadow: '0 16px 35px rgba(250, 204, 21, 0.2)', borderColor: '#FACC15' }}
                                style={{ background: '#FFFFFF', borderRadius: '18px', padding: '1.75rem', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '0.85rem', transition: 'border-color 0.25s ease' }}
                            >
                                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(250, 204, 21, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon size={26} color="#CA8A04" />
                                </div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1F2937', margin: 0 }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#6B7280', margin: 0, lineHeight: 1.65, flexGrow: 1 }}>{item.desc}</p>
                                <Link to={item.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 700, color: '#B45309', textDecoration: 'none', marginTop: 'auto' }}>
                                    <span>Learn More</span><ArrowRight size={15} />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================================
                SECTION 05 — WORKFLOWS & USE CASES
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <Workflow size={16} color="#EAB308" />
                        Workflows &amp; Use Cases
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.4px' }}>
                        How Education Software Supports Academic and Administrative Workflows
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        Education software becomes valuable when it helps institutions organize learning activities and manage student-related information through clear, connected processes.
                    </p>
                </motion.div>

                {/* Workflow Steps */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                    {workflows.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ x: 6, boxShadow: '0 8px 25px rgba(0,0,0,0.06)', borderColor: '#FACC15' }}
                                style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '1.5rem 2rem', background: '#FFFFFF', borderRadius: '18px', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'border-color 0.25s ease' }}
                            >
                                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(250, 204, 21, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon size={26} color="#CA8A04" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.35rem' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.97rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Workflow flow diagram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ background: '#F9FAFB', borderRadius: '20px', padding: '2rem', border: '1px solid #E5E7EB', textAlign: 'center' }}
                >
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem' }}>Illustrative Workflow</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#374151' }}>
                        {[
                            'Admission Application',
                            'Student Enrollment',
                            'Class or Course Allocation',
                            'Learning Activities',
                            'Attendance & Assessments',
                            'Academic Reporting',
                            'Student Progress Review'
                        ].map((step, i, arr) => (
                            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    style={{ background: '#FEF3C7', padding: '0.4rem 0.85rem', borderRadius: '50px', border: '1px solid #FDE68A', display: 'inline-block' }}
                                >
                                    {step}
                                </motion.span>
                                {i < arr.length - 1 && <ArrowRight size={14} color="#CA8A04" />}
                            </span>
                        ))}
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#9CA3AF', margin: '1.25rem 0 0', lineHeight: 1.6 }}>
                        This is an illustrative workflow. Actual admission, academic, assessment and reporting processes should reflect each institution's requirements.
                    </p>
                </motion.div>
            </section>

            {/* =========================================================================
                SECTION 06 — BUSINESS BENEFITS
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <CheckCircle2 size={16} color="#EAB308" />
                        Strategic Value
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '0.75rem', letterSpacing: '-0.4px', lineHeight: 1.25 }}>
                        Benefits of Education Software for Schools and Institutions
                    </h2>
                    <p style={{ fontSize: '1.02rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        Well-planned education software can help institutions organize academic information, coordinate administrative activities and support digital learning experiences.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.25rem' }}>
                    {benefits.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ y: -6, boxShadow: '0 14px 30px rgba(250, 204, 21, 0.18)', borderColor: '#FACC15' }}
                                style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem', background: '#FFFFFF', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'border-color 0.25s ease' }}
                            >
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(250, 204, 21, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon size={22} color="#CA8A04" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.25rem' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.93rem', color: '#6B7280', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================================
                SECTION 07 — RELEVANT SERVICES
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <Layers size={16} color="#EAB308" />
                        Integrated Capabilities
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.4px' }}>
                        FlyTowards Software Development Services for Educational Institutions
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        Education software projects may require custom applications, responsive interfaces, mobile access and integrations between existing institutional systems.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.25rem' }}>
                    {services.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ y: -6, boxShadow: '0 16px 35px rgba(250, 204, 21, 0.2)', borderColor: '#FACC15' }}
                                style={{ borderRadius: '16px' }}
                            >
                                <Link to={item.link} style={{ textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(250, 204, 21, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Icon size={22} color="#CA8A04" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.35rem' }}>{item.title}</h3>
                                        <p style={{ fontSize: '0.92rem', color: '#6B7280', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================================
                SECTION 08 — PROCESS / APPROACH
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
                        <Sparkles size={16} color="#EAB308" />
                        Structured Methodology
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.4px' }}>
                        Our Education Software Development Process
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                        We follow a structured approach to understand educational workflows and plan software functionality around institutional requirements.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -6, boxShadow: '0 16px 35px rgba(250, 204, 21, 0.2)', borderColor: '#FACC15' }}
                            style={{ background: '#FFFFFF', borderRadius: '20px', padding: '2rem', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', position: 'relative', transition: 'border-color 0.25s ease' }}
                        >
                            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(250, 204, 21, 0.35)', lineHeight: 1, marginBottom: '1rem' }}>
                                {step.step}
                            </div>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.5rem' }}>{step.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* =========================================================================
                SECTION 09 — WHY FLYTOWARDS
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '3.5rem', alignItems: 'center' }}>
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'left' }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                            <ShieldCheck size={16} color="#EAB308" />
                            Why FlyTowards
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.4px', lineHeight: 1.25 }}>
                            Why Choose FlyTowards for Education Software Solutions?
                        </h2>
                        <p style={{ fontSize: '1.02rem', color: '#4B5563', lineHeight: 1.75, marginBottom: '2rem' }}>
                            Education software should reflect how students, educators and administrators interact with institutional systems. A useful solution begins with understanding academic activities, administrative requirements and the different responsibilities of each user group.
                        </p>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem', fontSize: '1rem', fontWeight: 700, borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 25px rgba(250, 204, 21, 0.4)' }}>
                                <span>Discuss Your Education Software Requirements</span>
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right: Differentiators */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        {differentiators.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ x: 6 }}
                                style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem 0', borderBottom: i < differentiators.length - 1 ? '1px solid #E5E7EB' : 'none', textAlign: 'left', transition: 'transform 0.2s ease' }}
                            >
                                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FACC15', lineHeight: 1, flexShrink: 0, minWidth: '40px' }}>{item.num}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#1F2937', margin: '0 0 0.35rem' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================================
                SECTION 10 — TAMIL NADU RELEVANCE
            ========================================================================= */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}
            >
                <div style={{ background: 'linear-gradient(135deg, #F9FAFB 0%, #FEF9E7 100%)', borderRadius: '28px', padding: 'clamp(2.5rem, 5vw, 4rem)', border: '1px solid #E5E7EB' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.2)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700 }}>
                            <MapPin size={16} color="#EAB308" />
                            Tamil Nadu Focus
                        </div>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.5rem', letterSpacing: '-0.4px', textAlign: 'left', lineHeight: 1.25 }}>
                        Education Software Solutions in Tamil Nadu
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', color: '#4B5563', fontSize: '1.02rem', lineHeight: 1.75, textAlign: 'left' }}>
                        <p style={{ margin: 0 }}>Schools, colleges, training institutes and educational organizations across Tamil Nadu use digital applications to support teaching, learning and administration.</p>
                        <p style={{ margin: 0 }}>In South Tamil Nadu, educational institutions may have different requirements based on student enrollment, academic programs, institutional size, existing software and administrative processes.</p>
                        <p style={{ margin: 0 }}>Some institutions need to move from manual records to structured student management systems. Others may require learning management platforms, improved school management software or integrations between existing applications.</p>
                        <p style={{ margin: 0 }}>FlyTowards provides education software development solutions for institutions across Tamil Nadu, focusing on practical academic workflows, accessible interfaces and appropriate information management.</p>
                        <p style={{ margin: 0, fontWeight: 500, color: '#1F2937' }}>Whether you need a learning management system, student information platform or school administration application, we help evaluate software requirements around your institution's needs.</p>
                    </div>
                </div>
            </motion.section>

            {/* =========================================================================
                SECTION 11 — FAQs
            ========================================================================= */}
            <section style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '3.5rem', alignItems: 'start' }}>
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'left' }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.15)', color: '#B45309', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                            <MessageSquareText size={16} color="#EAB308" />
                            FAQs
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1rem', letterSpacing: '-0.4px', lineHeight: 1.25 }}>
                            Frequently Asked Questions About Education Software
                        </h2>
                        <p style={{ fontSize: '1.02rem', color: '#6B7280', lineHeight: 1.7, margin: '0 0 2rem' }}>
                            Common questions about learning management platforms, student management systems and school management software.
                        </p>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.9rem 1.8rem', fontSize: '0.98rem', fontWeight: 700, borderRadius: '50px', textDecoration: 'none' }}>
                                <span>Ask Us Anything</span>
                                <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right: Accordion */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                style={{ background: '#FFFFFF', borderRadius: '14px', border: '1px solid #E5E7EB', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}
                            >
                                <button
                                    onClick={() => toggleFaq(i)}
                                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
                                >
                                    <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1F2937', margin: 0, lineHeight: 1.4 }}>{faq.q}</h3>
                                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ display: 'inline-flex', flexShrink: 0 }}>
                                        <ChevronDown size={18} color={openFaq === i ? '#CA8A04' : '#6B7280'} />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.93rem', color: '#6B7280', lineHeight: 1.7 }}>
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================================
                SECTION 12 — FINAL CTA
            ========================================================================= */}
            <motion.section
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%', maxWidth: '1240px', margin: '0 auto 6rem', position: 'relative', zIndex: 2 }}
            >
                <div style={{ background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)', borderRadius: '32px', padding: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#FFFFFF', display: 'flex', flexDirection: 'column', mdDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2.5rem', boxShadow: '0 24px 60px rgba(0,0,0,0.2)', textAlign: 'left' }}>
                    <div style={{ maxWidth: '720px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(250, 204, 21, 0.2)', color: '#FACC15', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                            <Sparkles size={16} color="#FACC15" />
                            Get Started
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.25 }}>
                            Build Education Software Around Your Institution's Needs
                        </h2>
                        <p style={{ color: '#E5E7EB', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 1rem' }}>
                            Need to organize student records, simplify school administration or create a better digital learning experience?
                        </p>
                        <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                            FlyTowards helps educational institutions explore custom education software solutions aligned with their academic workflows, users and technical requirements. Share your education software requirements and take the next step toward a practical digital solution.
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1.1rem 2.2rem', fontSize: '1.02rem', fontWeight: 700, borderRadius: '50px', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 8px 25px rgba(250, 204, 21, 0.4)' }}>
                                <MessageSquareText size={18} />
                                <span>Discuss Your Education Software Project</span>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1.05rem 2.2rem', fontSize: '1rem', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', whiteSpace: 'nowrap', border: '1.5px solid rgba(255,255,255,0.25)', color: '#FFFFFF' }}>
                                <span>Request a Consultation</span>
                                <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* =========================================================================
                EXISTING EDUCATION SOFTWARE SECTION (Legacy expandable drawer)
            ========================================================================= */}
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto 3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', alignItems: 'center', gap: '3rem', textAlign: 'left', position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}
                >
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
                        <GraduationCap size={16} color="#EAB308" /> Education &amp; EdTech Solutions
                    </span>

                    <h2 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
                        Education Software
                    </h2>

                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted, #6B7280)', lineHeight: 1.8, margin: 0, maxWidth: '640px' }}>
                        Digital solutions supporting education-related operations, administration, workflows and user interactions.
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
                            alignSelf: 'flex-start',
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
                        <span>Explore Education Solutions</span>
                        <motion.span
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            style={{ display: 'inline-flex' }}
                        >
                            <ArrowRight size={18} />
                        </motion.span>
                    </motion.button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                >
                    <img src="/images (7).jpg" alt="Education software solutions" style={{ display: 'block', width: '100%', maxWidth: '480px', height: 'auto', borderRadius: '24px', objectFit: 'cover', boxShadow: '0 24px 60px rgba(30, 27, 75, 0.16)' }} />
                </motion.div>
            </div>

            {/* Education Software Solutions Section (Expands below button with animation) */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.section
                        ref={solutionsRef}
                        id="education-solutions"
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
                                Institutional &amp; EdTech Engineering
                            </div>

                            <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#1F2937', marginBottom: '1.25rem', letterSpacing: '-0.5px' }}>
                                Education Software Solutions
                            </h3>

                            <p style={{ fontSize: '1.15rem', color: '#374151', lineHeight: 1.8, marginBottom: '1rem', maxWidth: '950px' }}>
                                Educational organisations have their own administrative, operational and user-facing processes.
                            </p>

                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: 1.8, margin: 0, maxWidth: '950px' }}>
                                Software can help bring specific processes into digital applications designed around the needs of administrators, staff, learners or other users.
                            </p>
                        </motion.div>

                        {/* Requirements Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ marginBottom: '1.5rem', padding: '0 0.5rem' }}
                        >
                            <h4 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.45rem)', fontWeight: 700, color: '#1F2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <GraduationCap size={24} color="#EAB308" />
                                Education software requirements may include:
                            </h4>
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

                                        <h5 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1F2937', margin: 0, lineHeight: 1.35 }}>
                                            {req.title}
                                        </h5>

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
                                We approach each project based on the organisation&apos;s specific requirements rather than assuming that one solution fits every educational environment.
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
                                    Educational Systems &amp; Innovation
                                </span>
                                <h4 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', fontWeight: 800, margin: 0, color: '#FFFFFF', lineHeight: 1.3 }}>
                                    Ready to empower your educational institution with modern software?
                                </h4>
                                <p style={{ margin: '0.6rem 0 0', color: '#9CA3AF', fontSize: '0.98rem', lineHeight: 1.6 }}>
                                    Partner with us to create tailored platforms for educators, administrators, and students.
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
                                <span>Discuss an Education Software Requirement</span>
                            </Link>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Education;
