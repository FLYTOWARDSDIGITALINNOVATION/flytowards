import { useEffect } from 'react';

const Internship = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Empty Internship Page - Only header & footer displayed */}
        </div>
    );
};

export default Internship;
