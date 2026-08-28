import { useEffect, useState } from 'react';
import {
    Users,
    Briefcase,
    Zap,
    ArrowRight,
    Globe,
    Search,
    Code,
    Brain,
    Layers,
    MessageSquare,
    TrendingUp,
    Star,
    ShieldCheck,
    Rocket,
    Cpu
} from 'lucide-react';

const Internship = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);

    // Scroll to top + page title
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Industrial Internships & Courses | Fly Towards';
    }, []);

    const handleFormSubmit = (e) => {
        const form = e.target;
        const requiredElements = form.querySelectorAll('input[required]');

        let hasErrors = false;

        requiredElements.forEach((el) => {
            if (!el.value.trim()) {
                el.style.border = '2px solid red';
                hasErrors = true;
            } else {
                el.style.border = '2px solid #f1f5f9';
            }
        });

        if (hasErrors) {
            e.preventDefault();
            alert('Please fill out all required fields properly.');
        }
    };

    const categories = [
        {
            name: 'Technical Hub',
            icon: <Cpu size={24} />,
            desc: 'Master the core technologies that power the modern web.',
            courses: [
                {
                    title: 'Full Stack Development',
                    desc: 'Build robust, scalable web applications from scratch.',
                    image:
                        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
                    icon: <Code size={20} />,
                    detail: 'MERN Stack'
                },
                {
                    title: 'AI & Machine Learning',
                    desc: 'Unlock the power of neural networks and data models.',
                    image:
                        'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
                    icon: <Brain size={20} />,
                    detail: 'Python & TensorFlow'
                },
                {
                    title: 'Blockchain Engineering',
                    desc: 'Explore the decentralized future of the internet.',
                    image:
                        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032&auto=format&fit=crop',
                    icon: <Layers size={20} />,
                    detail: 'Web3 & Solidity'
                },
                {
                    title: 'NLP Specialization',
                    desc: 'Teach machines to understand human language.',
                    image:
                        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
                    icon: <MessageSquare size={20} />,
                    detail: 'Linguistic AI'
                }
            ]
        },
        {
            name: 'Growth & Analysis',
            icon: <TrendingUp size={24} />,
            desc: 'Fuel business success through data and digital reach.',
            courses: [
                {
                    title: 'Digital Marketing',
                    desc: 'Dominate the digital landscape with proven strategies.',
                    image:
                        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
                    icon: <Globe size={20} />,
                    detail: 'Strategic Growth'
                },
                {
                    title: 'Data Mining & BI',
                    desc: 'Translate raw data into powerful business insights.',
                    image:
                        'https://images.unsplash.com/photo-1551288049-bebda436639a?q=80&w=800&auto=format&fit=crop',
                    icon: <Search size={20} />,
                    detail: 'Business Intelligence'
                },
                {
                    title: 'SEO Engineering',
                    desc: 'Master the art of search visibility and optimization.',
                    image:
                        'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop',
                    icon: <Zap size={20} />,
                    detail: 'Search Optimization'
                }
            ]
        },
        {
            name: 'Career Excellence',
            icon: <Star size={24} />,
            desc: 'Prepare yourself for the global job market.',
            courses: [
                {
                    title: 'Placement Training',
                    desc: 'Get industry-ready with intensive prep and mock calls.',
                    image:
                        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop',
                    icon: <Users size={20} />,
                    detail: 'Interview Prep'
                },
                {
                    title: 'Freelancing Blueprint',
                    desc: 'Launch and scale your own remote business.',
                    image:
                        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
                    icon: <Briefcase size={20} />,
                    detail: 'Personal Brand'
                }
            ]
        }
    ];

    const stats = [
        {
            label: 'Duration',
            value: '3-6 Months'
        },
        {
            label: 'Format',
            value: 'Online / Offline'
        }
    ];

    return (
        <main
            style={{
                background: '#ffffff',
                minHeight: '100vh',
                fontFamily: "'Outfit', sans-serif",
                '--primary': '#00f2ff'
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

                * {
                    box-sizing: border-box;
                }

                .max-w-1200 {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                /* =========================
                   HERO
                ========================= */

                .hero-visual {
                    position: relative;
                    padding: 220px 2rem 160px;
                    background: #020617;
                    color: white;
                    overflow: hidden;
                    text-align: center;
                }

                .hero-bg-img {
                    position: absolute;
                    inset: 0;
                    background-image: url('https://images.unsplash.com/photo-1517245318772-19816dc82548?q=80&w=2070&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                    opacity: 0.15;
                    filter: grayscale(100%);
                }

                .glass-overlay {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(
                        circle at center,
                        rgba(0, 242, 255, 0.1) 0%,
                        transparent 70%
                    );
                    pointer-events: none;
                }

                .gradient-text {
                    background: linear-gradient(
                        90deg,
                        #ffffff,
                        #00f2ff,
                        #ffffff
                    );
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradientMove 4s linear infinite;
                }

                @keyframes gradientMove {
                    to {
                        background-position: 200% center;
                    }
                }

                /* =========================
                   PROGRAM GRID
                ========================= */

                .program-grid {
                    display: grid;
                    grid-template-columns: repeat(
                        auto-fit,
                        minmax(320px, 1fr)
                    );
                    gap: 3rem;
                    padding: 40px 0;
                }

                .elegant-card {
                    background: white;
                    border-radius: 40px;
                    border: 1px solid #f1f5f9;
                    overflow: hidden;
                    transition:
                        transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                        box-shadow 0.5s ease,
                        border-color 0.5s ease;
                    position: relative;
                    height: 100%;
                }

                .elegant-card:hover {
                    transform: translateY(-15px);
                    box-shadow:
                        0 40px 80px rgba(0, 0, 0, 0.08);
                    border-color: rgba(0, 242, 255, 0.3);
                }

                .card-img-wrapper {
                    height: 240px;
                    overflow: hidden;
                    position: relative;
                }

                .card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 1s ease;
                }

                .elegant-card:hover .card-img {
                    transform: scale(1.1);
                }

                .category-tag {
                    padding: 8px 16px;
                    border-radius: 50px;
                    background: rgba(0, 242, 255, 0.1);
                    color: #0891b2;
                    font-weight: 800;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 1.5rem;
                }

                /* =========================
                   BUTTON
                ========================= */

                .btn-shine {
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    border: none;
                }

                .btn-shine::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        45deg,
                        transparent,
                        rgba(255,255,255,0.2),
                        transparent
                    );
                    transform: rotate(45deg);
                    transition: all 0.6s;
                    pointer-events: none;
                }

                .btn-shine:hover::after {
                    left: 100%;
                    top: 100%;
                }

                .btn-primary {
                    background: #020617;
                    color: white;
                    transition: all 0.3s ease;
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow:
                        0 15px 30px rgba(0, 242, 255, 0.25);
                }

                /* =========================
                   FORM
                ========================= */

                .form-card-ultra {
                    background: #ffffff;
                    padding: 6rem;
                    border-radius: 60px;
                    box-shadow:
                        0 50px 150px rgba(15, 23, 42, 0.1);
                    border: 1px solid #f1f5f9;
                    position: relative;
                }

                .form-input-lux {
                    width: 100%;
                    padding: 1.5rem 1.5rem 1.5rem 4rem;
                    border-radius: 24px;
                    border: 2px solid #f1f5f9;
                    background: #f8fafc;
                    font-size: 1.1rem;
                    font-family: inherit;
                    transition: all 0.3s;
                }

                .form-input-lux:focus {
                    border-color: #00cfe0;
                    background: white;
                    box-shadow:
                        0 15px 40px rgba(0, 242, 255, 0.1);
                    outline: none;
                }

                .form-input-lux::placeholder {
                    color: #94a3b8;
                }

                .back-btn {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #64748b;
                    cursor: pointer;
                    margin-bottom: 3rem;
                    font-weight: 700;
                    transition: color 0.3s;
                    width: fit-content;
                }

                .back-btn:hover {
                    color: #0891b2;
                }

                /* =========================
                   RESPONSIVE
                ========================= */

                @media (max-width: 968px) {
                    .program-grid {
                        grid-template-columns: 1fr;
                    }

                    .hero-visual {
                        padding: 160px 1.5rem 100px;
                    }

                    .form-card-ultra {
                        padding: 3rem 2rem;
                        border-radius: 40px;
                    }
                }

                @media (max-width: 768px) {
                    .hero-visual {
                        padding: 130px 1.2rem 80px;
                    }

                    .hero-visual h1 {
                        font-size: 3.2rem !important;
                    }

                    .hero-visual p {
                        font-size: 1.05rem !important;
                    }

                    .program-grid {
                        gap: 2rem;
                    }

                    .elegant-card {
                        border-radius: 28px;
                    }

                    .card-img-wrapper {
                        height: 210px;
                    }

                    .form-card-ultra {
                        padding: 2rem 1.2rem;
                        border-radius: 30px;
                    }

                    .form-card-ultra h2 {
                        font-size: 2.2rem !important;
                    }

                    .form-row {
                        grid-template-columns: 1fr !important;
                    }
                }

                @media (max-width: 480px) {
                    .hero-visual {
                        padding: 110px 1rem 70px;
                    }

                    .hero-visual h1 {
                        font-size: 2.6rem !important;
                    }

                    .program-grid {
                        grid-template-columns: 1fr;
                    }

                    .elegant-card > div:last-child {
                        padding: 2rem !important;
                    }

                    .form-input-lux {
                        padding-left: 3.5rem;
                    }
                }
            `}</style>

            {/* =========================
                HERO SECTION
            ========================= */}

            <section className="hero-visual">
                <div className="hero-bg-img"></div>
                <div className="glass-overlay"></div>

                <div
                    className="max-w-1200"
                    style={{
                        position: 'relative',
                        zIndex: 5
                    }}
                >
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'rgba(255,255,255,0.07)',
                            padding: '10px 25px',
                            borderRadius: '50px',
                            backdropFilter: 'blur(10px)',
                            marginBottom: '3rem',
                            border: '1px solid rgba(255,255,255,0.15)'
                        }}
                    >
                        <Rocket
                            size={18}
                            color="#00f2ff"
                        />

                        <span
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                letterSpacing: '0.12em'
                            }}
                        >
                            INDUSTRIAL INTERNSHIP ENROLLMENT OPEN
                        </span>
                    </div>

                    <h1
                        style={{
                            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                            fontWeight: 800,
                            lineHeight: 0.9,
                            letterSpacing: '-0.04em',
                            marginBottom: '2.5rem'
                        }}
                    >
                        Elevate Your
                        <br />

                        <span
                            className="gradient-text"
                            style={{
                                textShadow:
                                    '0 0 30px rgba(0, 242, 255, 0.3)',
                                display: 'inline-block'
                            }}
                        >
                            Future Self.
                        </span>
                    </h1>

                    <p
                        style={{
                            fontSize: '1.4rem',
                            color: '#94a3b8',
                            maxWidth: '650px',
                            margin: '0 auto 4rem',
                            lineHeight: 1.6
                        }}
                    >
                        A curated selection of industrial internships
                        designed to transform ambitious minds into
                        world-class engineers and strategists.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '2rem',
                            maxWidth: '600px',
                            margin: '0 auto',
                            flexWrap: 'wrap'
                        }}
                    >
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                style={{
                                    padding:
                                        '1.5rem 2.5rem',
                                    background:
                                        'rgba(255,255,255,0.05)',
                                    borderRadius: '24px',
                                    border:
                                        '1px solid rgba(255,255,255,0.1)',
                                    flex: '1',
                                    minWidth: '220px',
                                    textAlign: 'center'
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '0.8rem',
                                        color: '#64748b',
                                        textTransform:
                                            'uppercase',
                                        marginBottom:
                                            '0.5rem',
                                        fontWeight: 800
                                    }}
                                >
                                    {s.label}
                                </div>

                                <div
                                    style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 700
                                    }}
                                >
                                    {s.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================
                PROGRAMS / APPLICATION
            ========================= */}

            <section
                style={{
                    padding: '100px 2rem',
                    background: '#ffffff',
                    minHeight: '80vh'
                }}
            >
                <div className="max-w-1200">

                    {/* PROGRAM GRID */}

                    {!selectedProgram ? (
                        <div>
                            {categories.map((cat, ci) => (
                                <div
                                    key={ci}
                                    style={{
                                        marginBottom: '120px'
                                    }}
                                >
                                    {/* Category Header */}

                                    <div
                                        style={{
                                            marginBottom:
                                                '5rem',
                                            textAlign:
                                                'center'
                                        }}
                                    >
                                        <div
                                            className="category-tag"
                                            style={{
                                                marginBottom:
                                                    '1rem'
                                            }}
                                        >
                                            {cat.icon}
                                            {cat.name}
                                        </div>

                                        <h2
                                            style={{
                                                fontSize:
                                                    '3rem',
                                                fontWeight:
                                                    800,
                                                color:
                                                    '#0f172a',
                                                marginBottom:
                                                    '1rem'
                                            }}
                                        >
                                            {cat.name}
                                        </h2>

                                        <p
                                            style={{
                                                color:
                                                    '#64748b',
                                                fontSize:
                                                    '1.2rem'
                                            }}
                                        >
                                            {cat.desc}
                                        </p>
                                    </div>

                                    {/* Course Cards */}

                                    <div className="program-grid">
                                        {cat.courses.map(
                                            (
                                                course,
                                                idx
                                            ) => (
                                                <div
                                                    key={
                                                        idx
                                                    }
                                                    className="elegant-card"
                                                >
                                                    {/* Image */}

                                                    <div className="card-img-wrapper">
                                                        <img
                                                            src={
                                                                course.image
                                                            }
                                                            alt={
                                                                course.title
                                                            }
                                                            className="card-img"
                                                        />

                                                        <div
                                                            style={{
                                                                position:
                                                                    'absolute',
                                                                bottom:
                                                                    '20px',
                                                                left:
                                                                    '20px',
                                                                padding:
                                                                    '12px',
                                                                background:
                                                                    'white',
                                                                borderRadius:
                                                                    '15px',
                                                                boxShadow:
                                                                    '0 10px 20px rgba(0,0,0,0.1)'
                                                            }}
                                                        >
                                                            {
                                                                course.icon
                                                            }
                                                        </div>
                                                    </div>

                                                    {/* Content */}

                                                    <div
                                                        style={{
                                                            padding:
                                                                '3rem'
                                                        }}
                                                    >
                                                        <span className="category-tag">
                                                            Featured
                                                            Program
                                                        </span>

                                                        <h3
                                                            style={{
                                                                fontSize:
                                                                    '1.8rem',
                                                                fontWeight:
                                                                    800,
                                                                color:
                                                                    '#0f172a',
                                                                marginBottom:
                                                                    '1rem'
                                                            }}
                                                        >
                                                            {
                                                                course.title
                                                            }
                                                        </h3>

                                                        <p
                                                            style={{
                                                                color:
                                                                    '#64748b',
                                                                marginBottom:
                                                                    '2.5rem',
                                                                lineHeight:
                                                                    1.8,
                                                                fontSize:
                                                                    '1.05rem'
                                                            }}
                                                        >
                                                            {
                                                                course.desc
                                                            }
                                                        </p>

                                                        <div
                                                            style={{
                                                                padding:
                                                                    '1rem 0',
                                                                borderTop:
                                                                    '1px solid #f1f5f9',
                                                                marginBottom:
                                                                    '2rem',
                                                                display:
                                                                    'flex',
                                                                alignItems:
                                                                    'center',
                                                                justifyContent:
                                                                    'space-between'
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontSize:
                                                                        '0.85rem',
                                                                    fontWeight:
                                                                        700,
                                                                    color:
                                                                        '#94a3b8'
                                                                }}
                                                            >
                                                                {
                                                                    course.detail
                                                                }
                                                            </span>

                                                            <div
                                                                style={{
                                                                    width:
                                                                        '8px',
                                                                    height:
                                                                        '8px',
                                                                    borderRadius:
                                                                        '50%',
                                                                    background:
                                                                        '#00f2ff'
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setSelectedProgram(
                                                                    course.title
                                                                );

                                                                setTimeout(
                                                                    () => {
                                                                        window.scrollTo(
                                                                            {
                                                                                top: 400,
                                                                                behavior:
                                                                                    'smooth'
                                                                            }
                                                                        );
                                                                    },
                                                                    50
                                                                );
                                                            }}
                                                            className="btn-primary btn-shine"
                                                            style={{
                                                                width:
                                                                    '100%',
                                                                padding:
                                                                    '1.2rem',
                                                                borderRadius:
                                                                    '18px',
                                                                fontWeight:
                                                                    800,
                                                                fontSize:
                                                                    '1.1rem'
                                                            }}
                                                        >
                                                            Start
                                                            Application
                                                            <ArrowRight
                                                                size={
                                                                    20
                                                                }
                                                                style={{
                                                                    marginLeft:
                                                                        '8px',
                                                                    verticalAlign:
                                                                        'middle'
                                                                }}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* =========================
                           APPLICATION FORM
                        ========================= */

                        <div
                            style={{
                                maxWidth: '1000px',
                                margin: '0 auto'
                            }}
                        >
                            {/* Back Button */}

                            <div
                                className="back-btn"
                                onClick={() =>
                                    setSelectedProgram(null)
                                }
                            >
                                <Zap size={18} />
                                Back to Programs
                            </div>

                            {/* Form Card */}

                            <div className="form-card-ultra">
                                <div
                                    style={{
                                        textAlign: 'center',
                                        marginBottom:
                                            '5rem'
                                    }}
                                >
                                    <span className="category-tag">
                                        Enrolment Portal
                                    </span>

                                    <h2
                                        style={{
                                            fontSize:
                                                '3.5rem',
                                            fontWeight:
                                                900,
                                            color:
                                                '#0f172a',
                                            marginTop:
                                                '1.5rem'
                                        }}
                                    >
                                        Joining{' '}
                                        <span
                                            style={{
                                                color:
                                                    '#0891b2'
                                            }}
                                        >
                                            {
                                                selectedProgram
                                            }
                                        </span>
                                    </h2>

                                    <p
                                        style={{
                                            color:
                                                '#64748b',
                                            fontSize:
                                                '1.2rem',
                                            marginTop:
                                                '1rem'
                                        }}
                                    >
                                        Complete your
                                        industrial dossier
                                        to begin the
                                        selection process.
                                    </p>
                                </div>

                                <form
                                    action="https://formsubmit.co/info@flytowardsdigitalinnovation.com"
                                    method="POST"
                                    onSubmit={
                                        handleFormSubmit
                                    }
                                >
                                    {/* FormSubmit Configuration */}

                                    <input
                                        type="hidden"
                                        name="_subject"
                                        value={`New Internship Application: ${selectedProgram}`}
                                    />

                                    <input
                                        type="hidden"
                                        name="_captcha"
                                        value="false"
                                    />

                                    <input
                                        type="hidden"
                                        name="_template"
                                        value="table"
                                    />

                                    <input
                                        type="hidden"
                                        name="Program"
                                        value={
                                            selectedProgram
                                        }
                                    />

                                    {/* Name + Email */}

                                    <div
                                        className="form-row"
                                        style={{
                                            display:
                                                'grid',
                                            gridTemplateColumns:
                                                '1fr 1fr',
                                            gap: '2.5rem',
                                            marginBottom:
                                                '2.5rem'
                                        }}
                                    >
                                        {/* Name */}

                                        <div
                                            style={{
                                                position:
                                                    'relative'
                                            }}
                                        >
                                            <label
                                                style={{
                                                    display:
                                                        'block',
                                                    fontWeight:
                                                        800,
                                                    color:
                                                        '#64748b',
                                                    marginBottom:
                                                        '1rem',
                                                    fontSize:
                                                        '0.85rem',
                                                    textTransform:
                                                        'uppercase'
                                                }}
                                            >
                                                Identity
                                            </label>

                                            <input
                                                required
                                                type="text"
                                                name="Name"
                                                className="form-input-lux"
                                                placeholder="Full Name"
                                            />

                                            <Users
                                                size={22}
                                                style={{
                                                    position:
                                                        'absolute',
                                                    left:
                                                        '1.5rem',
                                                    bottom:
                                                        '1.6rem',
                                                    color:
                                                        '#94a3b8'
                                                }}
                                            />
                                        </div>

                                        {/* Email */}

                                        <div
                                            style={{
                                                position:
                                                    'relative'
                                            }}
                                        >
                                            <label
                                                style={{
                                                    display:
                                                        'block',
                                                    fontWeight:
                                                        800,
                                                    color:
                                                        '#64748b',
                                                    marginBottom:
                                                        '1rem',
                                                    fontSize:
                                                        '0.85rem',
                                                    textTransform:
                                                        'uppercase'
                                                }}
                                            >
                                                Digital
                                                Address
                                            </label>

                                            <input
                                                required
                                                type="email"
                                                name="Email"
                                                className="form-input-lux"
                                                placeholder="Email ID"
                                            />

                                            <Globe
                                                size={22}
                                                style={{
                                                    position:
                                                        'absolute',
                                                    left:
                                                        '1.5rem',
                                                    bottom:
                                                        '1.6rem',
                                                    color:
                                                        '#94a3b8'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* WhatsApp Contact */}

                                    <div
                                        style={{
                                            position:
                                                'relative',
                                            marginBottom:
                                                '2.5rem'
                                        }}
                                    >
                                        <label
                                            style={{
                                                display:
                                                    'block',
                                                fontWeight:
                                                    800,
                                                color:
                                                    '#64748b',
                                                marginBottom:
                                                    '1rem',
                                                fontSize:
                                                    '0.85rem',
                                                textTransform:
                                                    'uppercase'
                                            }}
                                        >
                                            Secure Contact
                                            (WhatsApp)
                                        </label>

                                        <input
                                            required
                                            type="tel"
                                            name="Contact"
                                            className="form-input-lux"
                                            placeholder="+91 XXX XXX XXXX"
                                        />

                                        <TrendingUp
                                            size={22}
                                            style={{
                                                position:
                                                    'absolute',
                                                left:
                                                    '1.5rem',
                                                bottom:
                                                    '1.6rem',
                                                color:
                                                    '#94a3b8'
                                            }}
                                        />
                                    </div>

                                    {/* Institution */}

                                    <div
                                        style={{
                                            position:
                                                'relative',
                                            marginBottom:
                                                '5rem'
                                        }}
                                    >
                                        <label
                                            style={{
                                                display:
                                                    'block',
                                                fontWeight:
                                                    800,
                                                color:
                                                    '#64748b',
                                                marginBottom:
                                                    '1rem',
                                                fontSize:
                                                    '0.85rem',
                                                textTransform:
                                                    'uppercase'
                                            }}
                                        >
                                            Current
                                            Institution /
                                            Work
                                        </label>

                                        <input
                                            required
                                            type="text"
                                            name="Profile"
                                            className="form-input-lux"
                                            placeholder="e.g. SRM University"
                                        />

                                        <ShieldCheck
                                            size={22}
                                            style={{
                                                position:
                                                    'absolute',
                                                left:
                                                    '1.5rem',
                                                bottom:
                                                    '1.6rem',
                                                color:
                                                    '#94a3b8'
                                            }}
                                        />
                                    </div>

                                    {/* Submit */}

                                    <button
                                        type="submit"
                                        className="btn-primary btn-shine"
                                        style={{
                                            width: '100%',
                                            padding: '2rem',
                                            borderRadius:
                                                '30px',
                                            fontSize:
                                                '1.4rem',
                                            fontWeight: 900,
                                            display: 'flex',
                                            alignItems:
                                                'center',
                                            justifyContent:
                                                'center',
                                            gap: '15px'
                                        }}
                                    >
                                        Submit Enrollment
                                        Request
                                        <ArrowRight
                                            size={28}
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Internship;