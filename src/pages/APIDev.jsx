import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const APIDev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ padding: '120px 8% 80px', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
            <div className="mesh-bg"></div>
            <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>API Development Page</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    Welcome to the API Development page of Fly Towards Digital Innovation. We are crafting custom solutions for your business.
                </p>
                <Link to="/services" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', alignSelf: 'center' }}>
                    <ArrowLeft size={20} /> Back to Services
                </Link>
            </div>
        </main>
    );
};

export default APIDev;
