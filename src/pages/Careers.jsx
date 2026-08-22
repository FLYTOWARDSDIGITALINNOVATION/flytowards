import { useEffect } from 'react';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Empty Careers Page - Only header & footer displayed */}
        </div>
    );
};

export default Careers;
