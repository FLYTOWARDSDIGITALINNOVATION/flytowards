import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const DEFAULT_TESTIMONIALS = [
    {
        name: 'Etosm Technology',
        initials: 'ET',
        serviceCategory: 'Web Development',
        rating: 5,
        text: 'Fly Towards Digital Innovation created a fast and user-friendly website for our business. Our customers can now easily contact us and enquire through the site.',
        badge: 'CLIENT',
    },
    {
        name: 'JCL Siddha Academy',
        initials: 'JS',
        serviceCategory: 'Web Development',
        rating: 4,
        text: 'The website design was clean, attractive, and perfectly matched our brand identity. Their development team was responsive and completed the project on time.',
        badge: 'CLIENT',
    },
    {
        name: 'High Grip Socks',
        initials: 'HG',
        serviceCategory: 'Web Development',
        rating: 5,
        text: 'Our new website looks modern, professional, and works perfectly on mobile devices. The team delivered exactly what we expected with excellent support.',
        badge: 'CLIENT',
    },
    {
        name: 'Eves Era',
        initials: 'EE',
        serviceCategory: 'Digital Marketing',
        rating: 4,
        text: 'Our social media reach and customer enquiries increased after working with their marketing team. Professional service, creative ideas, and excellent campaign management!',
        badge: 'CLIENT',
    },
    {
        name: 'Mathan Furniture',
        initials: 'MF',
        serviceCategory: 'Software Development',
        rating: 5,
        text: 'A complete smart business solution with billing and CRM features together. It saved our time, improved accuracy, and enhanced customer relationship management.',
        badge: 'CLIENT',
    },
    {
        name: 'Nanban Call Taxi',
        initials: 'NT',
        serviceCategory: 'Software Development',
        rating: 5,
        text: 'Highly satisfied with the taxi booking software and support service. It improved our business efficiency and provided a seamless experience for our customers.',
        badge: 'CLIENT',
    },
];

const AVATAR_GRADIENTS = [
    'linear-gradient(135deg, #00f2ff 0%, #ff007a 100%)',
    'linear-gradient(135deg, #3b82f6 0%, #ec4899 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #d946ef 100%)',
    'linear-gradient(135deg, #2563eb 0%, #db2777 100%)',
    'linear-gradient(135deg, #0ea5e9 0%, #f43f5e 100%)',
    'linear-gradient(135deg, #60a5fa 0%, #f472b6 100%)',
];

const styles = {
    section: {
        position: 'relative',
        width: '100%',
        maxWidth: 'none',
        margin: 0,
        overflow: 'hidden',
        padding: 'clamp(4rem, 7vw, 6.5rem) 0',
        background: 'linear-gradient(160deg, #e0f7ff, #fff0f5, #e6f0fa)',
    },
    inner: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 4vw, 2rem)',
    },
    header: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 'clamp(1rem, 2.5vw, 2rem)',
        flexWrap: 'wrap',
        marginBottom: 'clamp(1.25rem, 3vw, 2.25rem)',
    },
    headingBlock: {
        maxWidth: '760px',
        minWidth: 0,
    },
    eyebrow: {
        display: 'block',
        marginBottom: '0.85rem',
        color: '#ff007a',
        fontSize: 'clamp(0.72rem, 1.15vw, 0.9rem)',
        fontWeight: 900,
        letterSpacing: '0.34em',
        textTransform: 'uppercase',
    },
    title: {
        margin: 0,
        color: '#1f1434',
        fontSize: 'clamp(2.1rem, 4.7vw, 4rem)',
        lineHeight: 1.08,
        letterSpacing: '-0.04em',
    },
    titleAccent: {
        background: 'linear-gradient(135deg, #00f2ff 0%, #ff007a 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    stage: {
        display: 'grid',
        gridTemplateColumns: 'clamp(2.6rem, 5vw, 3.5rem) minmax(0, 1fr) clamp(2.6rem, 5vw, 3.5rem)',
        gap: 'clamp(0.45rem, 1.5vw, 1.1rem)',
        alignItems: 'center',
    },
    arrow: {
        width: 'clamp(2.6rem, 5vw, 3.5rem)',
        height: 'clamp(2.6rem, 5vw, 3.5rem)',
        borderRadius: '999px',
        border: '1px solid rgba(0, 242, 255, 0.25)',
        background: 'rgba(255, 255, 255, 0.94)',
        color: '#ff007a',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 14px 28px rgba(0, 242, 255, 0.10)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        WebkitTapHighlightColor: 'transparent',
    },
    viewport: {
        minWidth: 0,
        overflow: 'hidden',
    },
    card: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 'clamp(1rem, 2vw, 1.4rem)',
        minHeight: 'clamp(22rem, 34vw, 28rem)',
        padding: 'clamp(1.3rem, 3vw, 2.4rem)',
        borderRadius: '24px',
        background: '#ffffff',
        border: '1px solid rgba(0, 242, 255, 0.18)',
        boxShadow: '0 24px 60px rgba(0, 242, 255, 0.10)',
        overflow: 'hidden',
    },
    quoteMark: {
        position: 'absolute',
        top: 'clamp(0.65rem, 1.4vw, 1rem)',
        right: 'clamp(0.85rem, 1.8vw, 1.2rem)',
        fontSize: 'clamp(4rem, 8vw, 6.5rem)',
        lineHeight: 1,
        color: 'rgba(0, 242, 255, 0.18)',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 0,
    },
    cardContent: {
        position: 'relative',
        zIndex: 1,
    },
    starsRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        flexWrap: 'wrap',
        marginBottom: 'clamp(0.9rem, 1.8vw, 1.25rem)',
    },
    starsTrack: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
    },
    ratingValue: {
        fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)',
        fontWeight: 800,
        color: '#6b5b8b',
        whiteSpace: 'nowrap',
        fontVariantNumeric: 'tabular-nums',
    },
    review: {
        margin: 0,
        maxWidth: '64ch',
        fontSize: 'clamp(1rem, 2vw, 1.18rem)',
        lineHeight: 1.85,
        fontStyle: 'italic',
        color: '#241638',
        wordBreak: 'break-word',
    },
    divider: {
        width: '100%',
        height: '1px',
        borderRadius: '999px',
        background: 'linear-gradient(90deg, rgba(0, 242, 255, 0) 0%, rgba(0, 242, 255, 0.35) 20%, rgba(255, 0, 122, 0.9) 50%, rgba(0, 242, 255, 0.35) 80%, rgba(0, 242, 255, 0) 100%)',
    },
    authorRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 1,
    },
    authorGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        minWidth: 0,
        flex: '1 1 280px',
    },
    avatar: {
        width: 'clamp(3rem, 5vw, 4rem)',
        height: 'clamp(3rem, 5vw, 4rem)',
        borderRadius: '999px',
        display: 'grid',
        placeItems: 'center',
        color: '#ffffff',
        fontSize: 'clamp(0.95rem, 1.75vw, 1.1rem)',
        fontWeight: 900,
        letterSpacing: '0.04em',
        boxShadow: '0 16px 30px rgba(0, 242, 255, 0.22)',
        flexShrink: 0,
    },
    nameBlock: {
        minWidth: 0,
    },
    name: {
        margin: 0,
        color: '#241638',
        fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
        lineHeight: 1.2,
        fontWeight: 900,
    },
    role: {
        margin: '0.25rem 0 0',
        color: '#6c5b8b',
        fontSize: 'clamp(0.82rem, 1.3vw, 0.96rem)',
        fontWeight: 600,
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.72rem 1rem',
        borderRadius: '999px',
        background: 'linear-gradient(135deg, #00f2ff, #ff007a)',
        color: '#ffffff',
        fontSize: 'clamp(0.72rem, 1.3vw, 0.88rem)',
        fontWeight: 900,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        flex: '0 0 auto',
        boxShadow: '0 16px 28px rgba(0, 242, 255, 0.22)',
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
        marginTop: 'clamp(1rem, 2vw, 1.5rem)',
    },
    counter: {
        color: '#7a6a99',
        fontSize: 'clamp(0.8rem, 1.4vw, 0.96rem)',
        fontWeight: 800,
        letterSpacing: '0.24em',
        whiteSpace: 'nowrap',
        fontVariantNumeric: 'tabular-nums',
    },
    dots: {
        flex: '1 1 260px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(0.45rem, 1vw, 0.7rem)',
        flexWrap: 'wrap',
    },
    dot: {
        width: '10px',
        height: '10px',
        border: 'none',
        borderRadius: '999px',
        background: 'rgba(0, 242, 255, 0.24)',
        padding: 0,
        cursor: 'pointer',
        transition: 'width 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
        WebkitTapHighlightColor: 'transparent',
    },
    dotActive: {
        width: '28px',
        background: 'linear-gradient(135deg, #00f2ff, #ff007a)',
        boxShadow: '0 8px 20px rgba(0, 242, 255, 0.26)',
    },
};

function fallbackInitials(name) {
    const value = String(name || '').trim();

    if (!value) {
        return 'FT';
    }

    const parts = value.split(/\s+/).filter(Boolean);

    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
    }

    const first = parts[0]?.[0] || '';
    const last = parts[parts.length - 1]?.[0] || '';
    return `${first}${last}`.toUpperCase();
}

function normalizeTestimonials(items) {
    const source = Array.isArray(items) && items.length > 0 ? items : DEFAULT_TESTIMONIALS;

    return source.map((item, index) => ({
        name: item?.name || item?.author || `Client ${index + 1}`,
        initials: item?.initials || fallbackInitials(item?.name || item?.author),
        serviceCategory: item?.serviceCategory || item?.role || item?.title || 'Service',
        rating: Math.max(1, Math.min(5, Math.round(Number(item?.rating) || 5))),
        text: item?.text || item?.quote || '',
        badge: item?.badge || item?.location || 'CLIENT',
    }));
}

function StarRating({ rating }) {
    const safeRating = Math.max(1, Math.min(5, Math.round(Number(rating) || 5)));

    return (
        <div className="ft-testimonial-carousel__stars" aria-label={`Rating ${safeRating} out of 5`}>
            <div className="ft-testimonial-carousel__starsTrack" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => {
                    const filled = index < safeRating;

                    return (
                        <Star
                            key={`star-${index}`}
                            className="ft-testimonial-carousel__star"
                            size={18}
                            strokeWidth={2}
                            color={filled ? '#f59e0b' : '#d1d5db'}
                            fill={filled ? '#f59e0b' : 'none'}
                        />
                    );
                })}
            </div>

            <span className="ft-testimonial-carousel__ratingValue">{safeRating} / 5</span>
        </div>
    );
}

export default function TestimonialCarousel({ testimonials = DEFAULT_TESTIMONIALS }) {
    const slides = normalizeTestimonials(testimonials);
    const total = slides.length;
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    useEffect(() => {
        if (total <= 1) {
            return undefined;
        }

        const timer = window.setInterval(() => {
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % total);
        }, 4000);

        return () => window.clearInterval(timer);
    }, [total]);

    const currentIndex = total > 0 ? ((activeIndex % total) + total) % total : 0;
    const current = slides[currentIndex] || slides[0];
    const currentLabel = String(currentIndex + 1).padStart(2, '0');
    const totalLabel = String(total).padStart(2, '0');

    const goToNext = () => {
        if (total <= 1) return;
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % total);
    };

    const goToPrev = () => {
        if (total <= 1) return;
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + total) % total);
    };

    const goToIndex = (targetIndex) => {
        if (targetIndex === currentIndex || total <= 1) {
            return;
        }

        const forwardDistance = (targetIndex - currentIndex + total) % total;
        const backwardDistance = (currentIndex - targetIndex + total) % total;

        setDirection(forwardDistance <= backwardDistance ? 1 : -1);
        setActiveIndex(targetIndex);
    };

    return (
        <section className="ft-testimonial-carousel" aria-label="Client testimonials">
            <style>{`
.ft-testimonial-carousel__titleAccent {
    background: linear-gradient(135deg, #00f2ff 0%, #ff007a 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.ft-testimonial-carousel__arrow:hover {
    transform: translateY(-2px);
}

.ft-testimonial-carousel__arrow:focus-visible,
.ft-testimonial-carousel__dot:focus-visible {
    outline: 3px solid rgba(0, 242, 255, 0.3);
    outline-offset: 4px;
}

.ft-testimonial-carousel__card--next {
    animation: ftSlideFromRight 560ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
}

.ft-testimonial-carousel__card--prev {
    animation: ftSlideFromLeft 560ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
}

@keyframes ftSlideFromRight {
    from {
        opacity: 0;
        transform: translate3d(42px, 0, 0) scale(0.985);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1);
    }
}

@keyframes ftSlideFromLeft {
    from {
        opacity: 0;
        transform: translate3d(-42px, 0, 0) scale(0.985);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1);
    }
}

@media (prefers-reduced-motion: reduce) {
    .ft-testimonial-carousel__card,
    .ft-testimonial-carousel__arrow,
    .ft-testimonial-carousel__dot {
        animation: none;
        transition: none;
    }
}
            `}</style>

            <div style={styles.inner}>
                <div style={{ ...styles.header, justifyContent: 'flex-start' }}>
                    <div style={styles.headingBlock}>
                        <span style={styles.eyebrow}>CLIENT FEEDBACK</span>
                        <h2 style={styles.title}>
                            What Our <span className="ft-testimonial-carousel__titleAccent">Clients Say</span>
                        </h2>
                    </div>
                </div>

                <div style={styles.stage}>
                    <button
                        type="button"
                        className="ft-testimonial-carousel__arrow"
                        style={styles.arrow}
                        onClick={goToPrev}
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <div style={styles.viewport}>
                        <article
                            key={`${currentIndex}-${direction}`}
                            className={`ft-testimonial-carousel__card ${direction > 0 ? 'ft-testimonial-carousel__card--next' : 'ft-testimonial-carousel__card--prev'}`}
                            style={styles.card}
                            aria-label={`Testimonial ${currentLabel} of ${totalLabel}`}
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            <span style={styles.quoteMark} aria-hidden="true">
                                "
                            </span>

                            <div style={styles.cardContent}>
                                <StarRating rating={current.rating} />
                                <p style={styles.review}>{current.text}</p>
                            </div>

                            <div style={styles.divider} aria-hidden="true" />

                            <div style={styles.authorRow}>
                                <div style={styles.authorGroup}>
                                    <div
                                        aria-hidden="true"
                                        style={{
                                            ...styles.avatar,
                                            background: AVATAR_GRADIENTS[currentIndex % AVATAR_GRADIENTS.length],
                                        }}
                                    >
                                        {current.initials}
                                    </div>

                                    <div style={styles.nameBlock}>
                                        <h3 style={styles.name}>{current.name}</h3>
                                        <p style={styles.role}>{current.serviceCategory}</p>
                                    </div>
                                </div>

                                <div style={styles.badge}>{current.badge}</div>
                            </div>
                        </article>
                    </div>

                    <button
                        type="button"
                        className="ft-testimonial-carousel__arrow"
                        style={styles.arrow}
                        onClick={goToNext}
                        aria-label="Next testimonial"
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>

                <div style={styles.footer} aria-label="Testimonial pagination">
                    <div style={styles.counter}>
                        {currentLabel} / {totalLabel}
                    </div>

                    <div style={styles.dots}>
                        {slides.map((item, index) => {
                            const isActive = index === currentIndex;

                            return (
                                <button
                                    key={`${item.name}-${index}`}
                                    type="button"
                                    className={`ft-testimonial-carousel__dot ${isActive ? 'is-active' : ''}`}
                                    style={{
                                        ...styles.dot,
                                        ...(isActive ? styles.dotActive : null),
                                    }}
                                    aria-label={`Go to testimonial ${String(index + 1).padStart(2, '0')}`}
                                    aria-current={isActive ? 'true' : 'false'}
                                    onClick={() => goToIndex(index)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
