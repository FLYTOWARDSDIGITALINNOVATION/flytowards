import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HardHat, ArrowRight, MessageSquareText } from 'lucide-react';
import ConstructionPageSections from './ConstructionPageSections';

const Construction = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Contractor Management Software in Tamil Nadu | FlyTowards';
    }, []);

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
                    <HardHat size={16} color="#EAB308" /> Construction & Infrastructure Tech
                </span>

                <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
                    Contractor Management Software Solutions in Tamil Nadu
                </h1>

                <h2 style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)', fontWeight: 700, color: '#1F2937', borderLeft: '4px solid #FACC15', paddingLeft: '1rem', lineHeight: 1.45, margin: 0 }}>
                    Connect Contractors, Construction Projects and Site Operations
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-muted, #6B7280)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '660px' }}>
                    <p style={{ margin: 0 }}>Construction businesses coordinate activities across project planning, contractors, subcontractors, site teams, materials, schedules and safety requirements.</p>
                    <p style={{ margin: 0 }}>When these processes depend on spreadsheets, paper records or disconnected applications, maintaining visibility across projects and work locations can become difficult.</p>
                    <p style={{ margin: 0 }}>FlyTowards provides construction software development solutions across Tamil Nadu, helping businesses plan contractor management software, building project management applications and digital workflows for site operations.</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <Link to="/contact" className="btn btn-primary" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '0.95rem 2.2rem',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        borderRadius: '50px',
                        textDecoration: 'none',
                        boxShadow: '0 8px 25px rgba(250, 204, 21, 0.35)'
                    }}><MessageSquareText size={18}/><span>Discuss Your Construction Software Project</span></Link>
                    <Link to="/service" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.95rem 2rem', fontSize: '1.02rem', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', border: '2px solid #E5E7EB', color: '#374151', background: '#fff' }}><span>Explore Our Software Services</span><ArrowRight size={18}/></Link>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <img src="/images (8).jpg" alt="Contractor management software dashboard showing project activity and site operations" style={{ display: 'block', width: '100%', maxWidth: '620px', height: 'auto', borderRadius: '24px', objectFit: 'cover', boxShadow: '0 24px 60px rgba(30, 27, 75, 0.16)' }} />
            </div>
            </div>

            <ConstructionPageSections />
        </main>
    );
};

export default Construction;
