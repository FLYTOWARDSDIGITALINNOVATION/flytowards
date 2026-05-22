import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    id="loading"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: '#ffffff',
                        zIndex: 10000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <motion.img
                            src="/logo.png"
                            alt="Fly Towards Logo"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                height: '180px',
                                width: 'auto',
                                marginBottom: '1.5rem'
                            }}
                        />
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 0.6 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                letterSpacing: '5px',
                                color: '#64748b',
                                fontSize: '0.7rem',
                                marginTop: '10px',
                            }}
                        >
                            PREMIUM EXPERIENCE
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
