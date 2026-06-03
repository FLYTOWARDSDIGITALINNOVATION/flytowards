import { ArrowRight, CheckCircle2, Shield, Users, CreditCard, Utensils, MessageSquare, Briefcase, ChevronRight, CheckCircle, Database } from 'lucide-react';
import { useEffect } from 'react';

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Our Software Product";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content", "We Create the Best And Affordable Business Software like CRM, Payroll, Billing In Sankarankovil");
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute("content", "Digital marketing services, Payroll Software, CRM Software, website development");
    }, []);

    const products = [
        {
            title: "FlyPayroll",
            subtitle: "Payroll Management Software",
            description: "FlyPayroll is an advanced payroll management system that automates salary processing and employee management.",
            icon: <Users size={40} color="var(--secondary)" />,
            features: [
                "Payroll automation and salary calculation",
                "Attendance and leave management",
                "Payslip generation",
                "Statutory and compliance support",
                "Secure employee data handling"
            ],
            idealFor: "Startups, SMEs, and enterprises",
            link: "#", // Add target link here if any
            delay: "0.1s"
        },
        {
            title: "Fly Bill",
            subtitle: "Billing & Invoicing Software",
            description: "Fly Bill is a GST ready billing software designed to simplify invoicing and sales tracking.",
            icon: <CreditCard size={40} color="var(--primary)" />,
            features: [
                "GST-compliant invoice creation",
                "Sales and payment tracking",
                "Customer and product management",
                "Business reports and insights",
                "Easy-to-use dashboard"
            ],
            idealFor: "Retailers, service providers, GST businesses",
            link: "https://flytowardsdigitalinnovation.com/fly-bill/",
            delay: "0.2s"
        },
        {
            title: "Food Delivery App",
            subtitle: "Online Ordering Solution",
            description: "Our food delivery app solution helps restaurants and food businesses launch their own online ordering and delivery platform.",
            icon: <Utensils size={40} color="var(--accent)" />,
            features: [
                "Customer mobile app (Android & iOS)",
                "Restaurant admin panel",
                "Order, delivery & payment management",
                "Real-time order tracking",
                "Custom branding and scalable design"
            ],
            idealFor: "Restaurants, cloud kitchens, food startups",
            link: "#",
            delay: "0.3s"
        },
        {
            title: "Smart CRM",
            subtitle: "Customer Relationship Management",
            description: "Smart CRM helps businesses manage leads, customers, and sales activities efficiently.",
            icon: <Database size={40} color="var(--secondary)" />,
            features: [
                "Lead and customer data management",
                "Sales pipeline tracking",
                "Follow-up reminders & task management",
                "Customer communication history",
                "Performance and analytics reports"
            ],
            idealFor: "Sales teams, service businesses, growing companies",
            link: "#",
            delay: "0.4s"
        }
    ];

    const productCardThemes = [
        // 1) pink + blue
        {
            backgroundImage:
                'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.40) 100%), linear-gradient(135deg, #ff007a 0%, #0b3d91 100%)',
            textDark: '#ffffff',
            textMuted: 'rgba(255,255,255,0.84)',
            border: 'rgba(255,255,255,0.18)',
            barBg: 'rgba(255,255,255,0.10)'
        },
        // 2) blue + white
        {
            backgroundImage:
                'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 100%), linear-gradient(135deg, #007bff 0%, #ffffff 100%)',
            textDark: '#0f172a',
            textMuted: '#334155',
            border: 'rgba(15, 23, 42, 0.10)',
            barBg: 'rgba(255,255,255,0.65)'
        },
        // 3) purple + blue
        {
            backgroundImage:
                'linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.40) 100%), linear-gradient(135deg, #9d00ff 0%, #0b3d91 100%)',
            textDark: '#ffffff',
            textMuted: 'rgba(255,255,255,0.84)',
            border: 'rgba(255,255,255,0.18)',
            barBg: 'rgba(255,255,255,0.10)'
        },
        // 4) pink + black
        {
            backgroundImage:
                'linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.45) 100%), linear-gradient(135deg, #ff007a 0%, #0a0a0a 100%)',
            textDark: '#ffffff',
            textMuted: 'rgba(255,255,255,0.86)',
            border: 'rgba(255,255,255,0.18)',
            barBg: 'rgba(255,255,255,0.10)'
        }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh', paddingBottom: '40px' }}>
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }} data-aos="fade-up">
                    <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Our Ecosystem</span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>
                        Our Business Software Products
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                        Fly-Towards Digital Innovation builds smart, scalable software products designed to help businesses automate operations, improve customer experience, and grow faster.
                        Our product ecosystem covers payroll management, billing and invoicing, customer relationship management, and on-demand food delivery solutions for startups and enterprises.
                    </p>
                </div>
            </section>

            {/* Products Overview Grid */}
            <section id="products" style={{ paddingTop: '20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Software Solutions</span>
                    <h2 style={{ fontSize: '3rem' }}>Products <span className="gradient-text">Overview</span></h2>
                </div>

                <div className="grid">
                    {products.map((product, idx) => (
                        <div
                            key={idx}
                            className="card"
                            data-aos="fade-up"
                            style={{
                                transitionDelay: product.delay,
                                position: 'relative',
                                overflow: 'hidden',
                                paddingBottom: '6rem',
                                backgroundImage: (productCardThemes[idx] || productCardThemes[0]).backgroundImage,
                                color: 'var(--text-dark)',
                                '--text-dark': (productCardThemes[idx] || productCardThemes[0]).textDark,
                                '--text-muted': (productCardThemes[idx] || productCardThemes[0]).textMuted,
                                '--border': (productCardThemes[idx] || productCardThemes[0]).border,
                                '--product-bar-bg': (productCardThemes[idx] || productCardThemes[0]).barBg
                            }}
                        >
                            <div className="mb-4">{product.icon}</div>
                            <h3>{product.title}</h3>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontWeight: '700', fontSize: '1.1rem' }}>
                                {product.subtitle}
                            </h4>
                            <p className="mb-4" style={{ minHeight: '80px' }}>{product.description}</p>

                            <h5 style={{ fontWeight: '800', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
                                Key Features
                            </h5>
                            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                {product.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="mb-2" style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                        <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '5px' }} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div style={{
                                position: 'absolute',
                                bottom: '0', left: '0', width: '100%',
                                padding: '1.5rem 3rem',
                                background: 'var(--product-bar-bg)',
                                borderTop: '1px solid var(--border)'
                            }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: '600' }}>
                                    <span style={{ color: 'var(--secondary)' }}>Ideal for:</span> {product.idealFor}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" style={{ background: 'rgba(157, 0, 255, 0.01)' }}>
                <div className="cta-content" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    background: '#fff',
                    padding: '6rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <span className="section-tag">Grand Opening Launch</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
                        Enjoy Flat <span className="gradient-text">25% OFF</span> on all products
                    </h2>
                    <p style={{ fontSize: '1.3rem', margin: '2rem 0 3rem' }}>
                        Ready to automate and grow your business operations? Reach out to us today.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            WhatsApp Us <ArrowRight size={20} />
                        </a>
                        
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;
