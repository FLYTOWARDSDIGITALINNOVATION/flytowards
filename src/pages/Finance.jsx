import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Landmark, WalletCards, BarChart3, ReceiptText, DollarSign, CheckCircle2 } from 'lucide-react';
import FinancePageSections from './FinancePageSections';

const riseIn = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

export default function Finance() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Budgeting Software Solutions in Tamil Nadu | FlyTowards';
        const description = 'Custom budgeting software solutions in Tamil Nadu. FlyTowards develops expense management, financial reporting and budget planning applications for businesses.';
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }
        meta.content = description;
    }, []);

    return (
        <main className="finance-page">
            <div className="mesh-bg" />
            <section className="finance-hero">
                <motion.div className="finance-hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
                    <motion.span className="finance-kicker" variants={riseIn} transition={{ duration: .55 }}><Landmark size={16}/> Budgeting &amp; Financial Management</motion.span>
                    <motion.h1 variants={riseIn} transition={{ duration: .65 }}>Budgeting Software Solutions for Businesses in Tamil Nadu</motion.h1>
                    <motion.h2 variants={riseIn} transition={{ duration: .6 }}>Connect Business Budgets, Expenses and Financial Reporting</motion.h2>
                    <motion.p variants={riseIn} transition={{ duration: .6 }}>Businesses need organized financial information to plan budgets, monitor expenses, review cash flow and understand how actual spending compares with planned allocations.</motion.p>
                    <motion.p variants={riseIn} transition={{ duration: .6 }}>When these activities depend on disconnected spreadsheets, manual approvals or separate accounting applications, financial planning and reporting can become difficult.</motion.p>
                    <motion.p variants={riseIn} transition={{ duration: .6 }}>FlyTowards provides finance software development solutions for businesses and organizations across Tamil Nadu, with a focus on South Tamil Nadu. We help organizations plan custom budgeting software, expense management applications, financial analysis dashboards and connected financial management workflows.</motion.p>
                    <motion.p variants={riseIn} transition={{ duration: .6 }}>Whether you need departmental budget tracking, expense approvals or a broader financial reporting platform, we focus on software requirements that reflect your organization&apos;s processes.</motion.p>
                    <motion.div className="finance-hero-actions" variants={riseIn} transition={{ duration: .6 }}>
                        <Link to="/contact" className="finance-primary-cta">Discuss Your Finance Software Project <ArrowRight size={18}/></Link>
                        <Link to="/service" className="finance-secondary-cta">Explore Our Software Services</Link>
                    </motion.div>
                </motion.div>

                <motion.div className="finance-dashboard" initial={{ opacity: 0, x: 45, scale: .97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .8, delay: .25, ease: [.16, 1, .3, 1] }}>
                    <div className="finance-dash-head"><span><DollarSign size={19}/> Finance overview</span><small>FY 2026⌄</small></div>
                    <div className="finance-dash-kpis"><article><small>Total budget</small><b>₹24.8L</b><span>12 departments</span></article><article><small>Expenses to date</small><b>₹16.2L</b><span className="finance-positive"><CheckCircle2 size={12}/> Within plan</span></article></div>
                    <div className="finance-chart-panel"><div><b>Budget vs actual</b><span>Current period</span></div><div className="finance-chart"><div className="finance-chart-grid"><i/><i/><i/></div><div className="finance-chart-bars">{[['Operations',72,56],['Marketing',58,42],['Technology',83,67],['Admin',48,38]].map(([label,budget,actual])=><div className="finance-chart-group" key={label}><span className="finance-bar budget" style={{height:`${budget}%`}}/><span className="finance-bar actual" style={{height:`${actual}%`}}/><small>{label}</small></div>)}</div></div><div className="finance-chart-legend"><span><i/> Budget</span><span><i/> Actual</span></div></div>
                    <div className="finance-dash-bottom"><div><span><WalletCards size={16}/> Cash flow</span><b>₹8.6L</b><small>Available balance</small></div><div><span><ReceiptText size={16}/> Pending approvals</span><b>06</b><small>Expense requests</small></div></div>
                    <div className="finance-dashboard-note"><CheckCircle2 size={15}/> Budget request approved <small>Today, 10:42 AM</small></div>
                </motion.div>
            </section>
            <FinancePageSections />
        </main>
    );
}
