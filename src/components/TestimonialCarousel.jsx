import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Fly Towards helped our business grow faster than we ever expected. Their digital strategy truly delivered.',
    author: 'Arun Kumar',
    role: 'Founder, Spark Innovations',
  },
  {
    quote: 'The team built our custom CRM quickly and efficiently. The results were modern, intuitive, and business-ready.',
    author: 'Priya Singh',
    role: 'Operations Head, BrightTech',
  },
  {
    quote: 'Their marketing campaigns generated high-quality leads and real conversions. We are very impressed with the support.',
    author: 'Ravi Sharma',
    role: 'CEO, NextWave Solutions',
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((current) => (current + 1) % testimonials.length);

  return (
    <section className="testimonial-section section-full" style={{ padding: '4rem 1rem', background: 'var(--bg-light)' }}>
      <div className="section-inner" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <span className="section-tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Testimonials</span>
        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}>What Our Clients Say</h2>
        <div className="testimonial-card" style={{ position: 'relative', padding: '3rem', borderRadius: '30px', background: 'white', boxShadow: 'var(--shadow)', minHeight: '260px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.35rem', marginBottom: '1.5rem' }}>
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={starIndex} size={20} color="var(--primary)" />
            ))}
          </div>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '2rem' }}>
            “{item.quote}”
          </p>
          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>{item.author}</div>
          <div style={{ color: 'var(--text-muted)', marginTop: '0.35rem' }}>{item.role}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <button type="button" onClick={prev} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <ArrowLeft size={16} /> Previous
            </button>
            <button type="button" onClick={next} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Next <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
