import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Plane, Briefcase, CalendarDays, Receipt, CheckCircle2, Hotel } from 'lucide-react';
import TravelPageSections from './TravelPageSections';

const enter = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Travel() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Travel and Expense Management Software | FlyTowards';
        const description = 'Custom travel and expense management software in Tamil Nadu. FlyTowards develops travel booking, expense tracking and travel agency management applications.';
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
        meta.content = description;
    }, []);

    return <main className="travel-page">
        <div className="mesh-bg" />
        <section className="travel-hero">
            <motion.div className="travel-hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
                <motion.span className="travel-kicker" variants={enter} transition={{ duration: .55 }}><Plane size={16}/> Travel &amp; Expense Management</motion.span>
                <motion.h1 variants={enter} transition={{ duration: .65 }}>Travel and Expense Management <span>Software Solutions in Tamil Nadu</span></motion.h1>
                <motion.h2 variants={enter} transition={{ duration: .6 }}>Connect <span>Travel Planning, Bookings</span>, Expenses and Approvals</motion.h2>
                <motion.p variants={enter} transition={{ duration: .6 }}>Managing business travel involves more than arranging transportation and accommodation. Organizations also need to coordinate travel requests, booking information, employee expenses, approvals and reimbursements.</motion.p>
                <motion.p variants={enter} transition={{ duration: .6 }}>Travel agencies face related but different challenges, including customer enquiries, itinerary planning, supplier coordination and booking administration. When these processes depend on disconnected spreadsheets, emails or separate applications, maintaining accurate travel information can become difficult.</motion.p>
                <motion.p variants={enter} transition={{ duration: .6 }}>FlyTowards provides travel software development solutions for businesses, travel agencies and travel service providers across Tamil Nadu, with a focus on South Tamil Nadu. We help plan custom travel and expense management software, travel booking applications, expense approval systems and travel agency management platforms.</motion.p>
                <motion.p variants={enter} transition={{ duration: .6 }}>Our approach focuses on practical workflows, clear user interfaces and suitable integrations with existing business systems.</motion.p>
                <motion.div className="travel-hero-actions" variants={enter} transition={{ duration: .6 }}><Link to="/contact" className="travel-primary-cta">Discuss Your Travel Software Project <ArrowRight size={18}/></Link><Link to="/service" className="travel-secondary-cta">Explore Our Software Services</Link></motion.div>
            </motion.div>
            <motion.div className="travel-dashboard" initial={{ opacity: 0, x: 42, scale: .97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .8, delay: .25, ease: [.16, 1, .3, 1] }}>
                <div className="travel-dash-head"><span><Plane size={18}/> Travel overview</span><small>THIS MONTH⌄</small></div>
                <div className="travel-dash-summary"><div><small>Upcoming trips</small><b>12</b><span>Across 4 departments</span></div><div><small>Travel expenses</small><b>₹2.84L</b><span>Within policy range</span></div></div>
                <div className="travel-trip-card"><div className="travel-trip-card__title"><span><CalendarDays size={16}/> Upcoming itinerary</span><small>TRIP #FT-2048</small></div><div className="travel-route"><div><small>FROM</small><b>Chennai</b><span>MAA · 08:10 AM</span></div><i/><Plane size={17}/><i/><div><small>TO</small><b>Madurai</b><span>IXM · 09:25 AM</span></div></div><div className="travel-trip-meta"><span><Briefcase size={14}/> Project visit</span><span><Hotel size={14}/> Stay confirmed</span></div></div>
                <div className="travel-claims"><div><span><Receipt size={15}/> Expense claims</span><b>08</b><small>Pending review</small></div><div><span><CheckCircle2 size={15}/> Travel approvals</span><b>03</b><small>Need manager review</small></div></div>
                <div className="travel-dash-status"><CheckCircle2 size={15}/> Booking details updated <small>Today, 10:42 AM</small></div>
            </motion.div>
        </section>
        <TravelPageSections />
    </main>;
}
