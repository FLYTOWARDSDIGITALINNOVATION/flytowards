import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

export default function Home() {
  const [heroRef, heroVisible] = useReveal();
  const [prob2Ref, prob2Visible] = useReveal();
  const [servRef, servVisible] = useReveal();
  const [whyRef, whyVisible] = useReveal();
  const [indRef, indVisible] = useReveal();
  const [procRef, procVisible] = useReveal();
  const [outRef, outVisible] = useReveal();
  const [ftdRef, ftdVisible] = useReveal();
  const [faqRef, faqVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  const [openFaq, setOpenFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveService(p => (p + 1) % 7), 2800);
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      q: 'What does custom software development include?',
      a: 'Custom software development involves designing and building software around a business\'s specific requirements, workflows, users and operational needs. Depending on the project, this can include business applications, enterprise software, SaaS products, web applications, mobile applications and software improvements.'
    },
    {
      q: 'When should a business consider custom software?',
      a: 'Custom software can be worth considering when existing products do not adequately support your workflows, when multiple systems need to be connected, when manual processes create operational challenges, or when a business needs a software product built for a specific purpose.'
    },
    {
      q: 'Do you develop software for specific industries?',
      a: 'Yes. We work with healthcare, manufacturing, retail, logistics, education, construction and hospitality businesses. The exact software requirements are determined based on each business and project.'
    },
    {
      q: 'Can you develop a new software product from an idea?',
      a: 'Yes, where the project requirements are suitable for custom development. The initial discussion should establish the business objective, users, required functionality, technical requirements and expected scope before development begins.'
    },
    {
      q: 'Can you work with an existing software system?',
      a: 'Existing software can be considered as part of a project where the requirement involves maintenance, improvement, modernisation, integration or development of additional functionality. The appropriate approach depends on the existing application\'s condition and technical requirements.'
    }
  ];

  const services = [
    { title: 'Custom Software Development', desc: 'Build software around your specific workflows, users, data and business requirements rather than forcing your processes into a generic product.', link: '/services/custom-software-development', icon: '⚙️' },
    { title: 'Enterprise Software Development', desc: 'Develop business software designed to support larger operational requirements, multiple users, structured workflows and connected business functions.', link: '/services/enterprise-software-development', icon: '🏢' },
    { title: 'SaaS Development', desc: 'Turn a software idea into a SaaS product with the functionality and architecture required for a subscription-based digital business.', link: '/services/saas-development', icon: '☁️' },
    { title: 'Web Application Development', desc: 'Develop browser-based applications for internal operations, customer interactions, business workflows and digital products.', link: '/services/web-application-development', icon: '🌐' },
    { title: 'Mobile App Development', desc: 'Create mobile applications that support customer experiences, field operations, employee workflows or specific business use cases.', link: '/services/mobile-app-development', icon: '📱' },
    { title: 'Software Maintenance', desc: 'Maintain and improve existing software as requirements change, helping businesses continue using important applications while addressing new needs.', link: '/services/software-maintenance-support', icon: '🔧' },
    { title: 'Digital Transformation', desc: 'Modernise manual or disconnected business processes through software, automation and better-connected digital systems.', link: '/services/business-process-automation', icon: '🚀' },
  ];

  const industries = [
    { name: 'Healthcare', desc: 'Software solutions for healthcare-related workflows, operational management and digital processes.', link: '/industries/healthcare', icon: '🏥' },
    { name: 'Manufacturing', desc: 'Applications that can support production-related workflows, business operations, data management and process visibility.', link: '/industries/manufacturing', icon: '🏭' },
    { name: 'Retail', desc: 'Software for retail operations, customer-facing experiences, business workflows and connected processes.', link: '/industries/retail', icon: '🛒' },
    { name: 'Logistics', desc: 'Solutions designed around logistics workflows, operational coordination and information management.', link: '/industries/', icon: '🚚' },
    { name: 'Education', desc: 'Digital applications that support education-related processes, administration and user interactions.', link: '/industries/education', icon: '🎓' },
    { name: 'Construction', desc: 'Software solutions designed around construction-related workflows, project processes and operational requirements.', link: '/industries/construction', icon: '🏗️' },
    { name: 'Hospitality', desc: 'Applications that can support hospitality operations, customer interactions and business processes.', link: '/industries/hospitality', icon: '🏨' },
  ];

  const whyCards = [
    { title: 'Designed Around Your Processes', desc: 'Instead of changing your workflow to fit a software product, the solution can be structured around your actual business requirements.', icon: '🎯' },
    { title: 'Built for Specific Users', desc: 'Different teams need different tools. Software can be designed around the people who will use it, from administrators and managers to operational teams and customers.', icon: '👥' },
    { title: 'Better Connected Systems', desc: 'Businesses often work with multiple applications that do not communicate effectively. Custom development can help create more connected workflows and applications.', icon: '🔗' },
    { title: 'Room to Scale', desc: 'As business requirements change, software may need new functionality, integrations, users or workflows. A properly planned custom solution can be developed with future requirements in mind.', icon: '📈' },
    { title: 'Focused on Business Problems', desc: 'The starting point should be the business problem, not the technology. We focus on understanding what the software needs to accomplish before defining the solution.', icon: '💡' },
  ];

  const ftdCards = [
    { title: 'Technical Expertise', desc: 'Software projects require both business understanding and technical execution. We approach development with attention to the requirements behind the application.', icon: '💻' },
    { title: 'Experienced Development Team', desc: 'Our development approach is supported by developers working across software development requirements.', icon: '👨‍💻' },
    { title: 'End-to-End Development', desc: 'From understanding requirements to developing the software, the focus is on providing an end-to-end development approach.', icon: '🔄' },
    { title: 'Flexible Engagement', desc: 'Different businesses have different project requirements and engagement needs. Our strategy includes flexible engagement models as a core strength.', icon: '🤝' },
  ];

  const outcomes = [
    'Reduce dependence on manual processes',
    'Bring business information into more centralised systems',
    'Connect previously disconnected workflows',
    'Support growing operational requirements',
    'Improve access to business information',
    'Create better digital experiences for customers and employees',
    'Replace outdated or difficult-to-maintain applications',
    'Establish a stronger foundation for future digital initiatives',
  ];

  const problems = [
    'Business process automation',
    'Centralised business operations',
    'Internal workflow management',
    'Data and application integration',
    'Customer-facing applications',
    'Business-specific dashboards',
    'Digital products and SaaS platforms',
    'Modernisation of outdated software systems',
  ];

  const steps = [
    { num: '01', title: 'Understand', desc: 'We begin by understanding the business problem, current process, users and desired outcome.' },
    { num: '02', title: 'Define', desc: 'The requirements are translated into a clearer software scope, functionality and solution direction.' },
    { num: '03', title: 'Design', desc: 'The user experience and application structure are planned around the people and processes that will use the system.' },
    { num: '04', title: 'Develop', desc: 'The software is developed according to the agreed requirements, functionality and technical direction.' },
    { num: '05', title: 'Improve', desc: 'Software can continue to evolve as the business adds new requirements, users, integrations or capabilities.' },
  ];

  return (
    <>
      <style>{`
        /* ===== HOME PAGE - hm-* namespace ===== */
        .hm-page { font-family: 'Inter', 'Segoe UI', sans-serif; color: #0f0f0f; background: #fff !important; overflow-x: hidden; }

        /* ===== ANIMATIONS ===== */
        @keyframes hm-float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
        @keyframes hm-float2 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }
        @keyframes hm-pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
        @keyframes hm-grow { from{width:0} to{width:100%} }
        @keyframes hm-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes hm-slideUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes hm-slideLeft { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
        @keyframes hm-slideRight { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
        @keyframes hm-fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes hm-scaleIn { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
        @keyframes hm-dash { 0%{stroke-dashoffset:300} 100%{stroke-dashoffset:0} }
        @keyframes hm-blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes hm-progress { from{width:0%} to{width:var(--w)} }
        @keyframes hm-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }

        /* ===== SECTION BASE ===== */
        .hm-section { padding: 90px 0; }
        .hm-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .hm-label { display: inline-flex; align-items: center; gap: 8px; background: #facc15; color: #0f0f0f; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; padding: 8px 18px; border-radius: 50px; margin-bottom: 24px; }
        .hm-label-outline { background: transparent; border: 2px solid #facc15; color: #0f0f0f; }
        .hm-page .hm-label,
        .hm-page .hm-hero-badge {
          background: #fff7cc !important;
          border: 1px solid #facc15 !important;
          color: #1e1b4b !important;
        }
        .hm-page .hm-hero-badge {
          padding: 6px 14px !important;
          font-size: 0.75rem !important;
          letter-spacing: 0.1em !important;
        }
        .hm-h1 { font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.1; color: #0f0f0f; margin-bottom: 24px; }
        .hm-h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; color: #0f0f0f; margin-bottom: 16px; }
        .hm-h3 { font-size: 1.15rem; font-weight: 700; color: #0f0f0f; margin-bottom: 10px; }
        .hm-accent { color: #facc15; }
        .hm-lead { font-size: 1.1rem; color: #444; line-height: 1.75; margin-bottom: 24px; }
        .hm-sub { font-size: 1rem; color: #555; line-height: 1.7; }
        .hm-btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #facc15; color: #0f0f0f; font-weight: 800; font-size: 0.95rem; padding: 14px 28px; border-radius: 50px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; border: none; cursor: pointer; }
        .hm-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(250,204,21,0.4); }
        .hm-btn-outline { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #0f0f0f; font-weight: 700; font-size: 0.95rem; padding: 13px 28px; border-radius: 50px; border: 2px solid #0f0f0f; text-decoration: none; transition: all 0.2s; }
        .hm-btn-outline:hover { background: #0f0f0f; color: #facc15; }
        .hm-btn-outline-y { border-color: #facc15; color: #facc15; }
        .hm-btn-outline-y:hover { background: #facc15; color: #0f0f0f; }
        .hm-cta-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; margin-top: 32px; }

        /* ===== REVEAL ===== */
        .hm-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .hm-reveal.hm-visible { opacity: 1; transform: none; }
        .hm-reveal-left { opacity: 0; transform: translateX(-32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .hm-reveal-left.hm-visible { opacity: 1; transform: none; }
        .hm-reveal-right { opacity: 0; transform: translateX(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .hm-reveal-right.hm-visible { opacity: 1; transform: none; }
        .hm-reveal-scale { opacity: 0; transform: scale(0.9); transition: opacity 0.6s ease, transform 0.6s ease; }
        .hm-reveal-scale.hm-visible { opacity: 1; transform: scale(1); }

        /* ===== SECTION 1 — HERO ===== */
        .hm-hero { background: #fff !important; padding: 100px 0 90px; min-height: 90vh; display: flex; align-items: center; }
        .hm-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .hm-hero-badge { display: inline-flex; align-items: center; gap: 8px; background: #fff7cc; border: 1px solid #facc15; color: #1e1b4b; font-size: 0.85rem; font-weight: 900; letter-spacing: 0.12em; text-transform: uppercase; padding: 8px 18px; border-radius: 50px; margin-bottom: 28px; }
        .hm-hero h1 { color: #1e1b4b; font-size: clamp(2.4rem, 4.5vw, 3.6rem); font-weight: 900; line-height: 1.1; margin-bottom: 24px; }
        .hm-hero p { color: #4b5563; font-size: 1.1rem; line-height: 1.75; margin-bottom: 36px; }
        .hm-hero .hm-btn-outline { color: #111827; border-color: rgba(17,24,39,0.35); }
        .hm-hero .hm-btn-outline:hover { background: #111827; color: #fff; }

        /* Hero Dashboard */
        .hm-hero-dash { position: relative; }
        .hm-dash-main { background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 20px; padding: 24px; animation: hm-float 5s ease-in-out infinite; }
        .hm-dash-title { color: #888; font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
        .hm-dash-title::before { content:''; width:8px; height:8px; background:#facc15; border-radius:50%; animation:hm-pulse 2s infinite; }
        .hm-dash-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
        .hm-dash-metric { background: #242424; border-radius: 12px; padding: 16px; }
        .hm-dash-metric-label { color: #666; font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 6px; }
        .hm-dash-metric-val { color: #facc15; font-size: 1.5rem; font-weight: 800; }
        .hm-dash-metric-change { color: #4ade80; font-size: 11px; font-weight: 600; margin-top: 4px; }
        .hm-dash-bars { }
        .hm-dash-bar-row { margin-bottom: 12px; }
        .hm-dash-bar-label { display: flex; justify-content: space-between; color: #888; font-size: 11px; margin-bottom: 5px; }
        .hm-dash-bar-track { background: #2a2a2a; border-radius: 4px; height: 6px; overflow: hidden; }
        .hm-dash-bar-fill { height: 100%; background: linear-gradient(90deg,#facc15,#f59e0b); border-radius: 4px; }
        .hm-dash-mini { position: absolute; top: -20px; right: -20px; z-index: 2; background: #facc15; border-radius: 14px; padding: 14px 18px; animation: hm-float2 4s ease-in-out infinite 1s; box-shadow: 0 8px 24px rgba(250,204,21,0.4); }
        .hm-dash-mini-val { color: #0f0f0f; font-size: 1.3rem; font-weight: 900; }
        .hm-dash-mini-label { color: #333; font-size: 10px; font-weight: 700; }
        .hm-dash-mini2 { position: absolute; bottom: -16px; left: -16px; background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 14px; padding: 14px 18px; animation: hm-float2 4.5s ease-in-out infinite 0.5s; }
        .hm-dash-mini2-val { color: #4ade80; font-size: 1.1rem; font-weight: 800; }
        .hm-dash-mini2-label { color: #666; font-size: 10px; font-weight: 600; }

        /* ===== SECTION 2 — BUSINESS PROBLEMS ===== */
        .hm-prob { background: #fff; }
        .hm-prob-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; }
        .hm-prob-list { list-style: none; padding: 0; margin: 24px 0 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .hm-prob-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #333; line-height: 1.5; }
        .hm-prob-list li::before { content: '→'; color: #facc15; font-weight: 900; font-size: 1rem; flex-shrink: 0; margin-top: 1px; }
        .hm-prob-visual { background: #1f2937; border-radius: 24px; padding: 32px; animation: hm-float 6s ease-in-out infinite; }
        .hm-prob-node-wrap { display: flex; flex-direction: column; gap: 16px; }
        .hm-prob-node { background: #29265a; border-radius: 12px; padding: 16px 20px; border-left: 3px solid #facc15; }
        .hm-prob-node-title { color: #facc15; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .hm-prob-node-status { color: #888; font-size: 11px; margin-top: 4px; display: flex; align-items: center; gap: 6px; }
        .hm-prob-node-status::before { content:''; width:6px; height:6px; border-radius:50%; background:#4ade80; display:inline-block; animation:hm-pulse 2s infinite; }
        .hm-prob-connector { width: 2px; height: 20px; background: linear-gradient(to bottom,#facc15,transparent); margin: 0 auto; }

        /* ===== SECTION 3 — SERVICES ===== */
        .hm-serv { background: #f9f9f9; }
        .hm-serv-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 24px; margin-top: 48px; }
        .hm-serv-card { background: #fff; border-radius: 18px; padding: 32px; border: 2px solid transparent; transition: all 0.3s; cursor: pointer; text-decoration: none; color: inherit; display: block; }
        .hm-serv-card:hover, .hm-serv-card.hm-active { border-color: #facc15; transform: translateY(-4px); box-shadow: 0 12px 32px rgba(250,204,21,0.15); }
        .hm-serv-icon { font-size: 2rem; margin-bottom: 16px; display: inline-flex; width: 56px; height: 56px; align-items: center; justify-content: center; background: #facc15; border-radius: 14px; }
        .hm-serv-card h3 { font-size: 1.1rem; font-weight: 800; color: #0f0f0f; margin-bottom: 10px; }
        .hm-serv-card p { font-size: 0.9rem; color: #555; line-height: 1.65; }
        .hm-serv-arrow { display: inline-flex; align-items: center; gap: 6px; color: #facc15; font-weight: 700; font-size: 0.85rem; margin-top: 16px; }
        .hm-serv-header { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px; }

        /* ===== SECTION 4 — WHY CUSTOM ===== */
        .hm-why { background: #1f2937; }
        .hm-why .hm-h2 { color: #fff; }
        .hm-why .hm-lead { color: #bbb; }
        .hm-why .hm-sub { color: #888; }
        .hm-why-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; margin-top: 48px; }
        .hm-why-card { background: #1f2937; border-radius: 18px; padding: 32px; border: 1px solid #39465a; transition: all 0.3s; }
        .hm-why-card:hover { border-color: #facc15; transform: translateY(-4px); }
        .hm-why-card-icon { font-size: 1.8rem; margin-bottom: 18px; width: 52px; height: 52px; display: flex; align-items: center; justify-content: center; background: rgba(250,204,21,0.15); border-radius: 12px; }
        .hm-why-card h3 { color: #fff; font-size: 1.1rem; font-weight: 800; margin-bottom: 12px; }
        .hm-why-card p { color: #888; font-size: 0.9rem; line-height: 1.65; }

        /* ===== SECTION 5 — INDUSTRIES ===== */
        .hm-ind { background: #fff; }
        .hm-ind-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; margin-top: 48px; }
        .hm-ind-card { background: #f9f9f9; border-radius: 18px; padding: 28px; border: 2px solid transparent; transition: all 0.3s; text-decoration: none; display: block; }
        .hm-ind-card:hover { border-color: #facc15; background: #fff; transform: translateY(-4px); box-shadow: 0 10px 28px rgba(0,0,0,0.08); }
        .hm-ind-icon { font-size: 2rem; margin-bottom: 14px; }
        .hm-ind-card h3 { font-size: 1.1rem; font-weight: 800; color: #0f0f0f; margin-bottom: 8px; }
        .hm-ind-card p { font-size: 0.88rem; color: #555; line-height: 1.6; }
        .hm-ind-link { display: inline-flex; align-items: center; gap: 5px; color: #facc15; font-weight: 700; font-size: 0.85rem; margin-top: 14px; }

        /* ===== SECTION 6 — PROCESS ===== */
        .hm-proc { background: #f9f9f9; }
        .hm-proc-steps { display: flex; gap: 0; margin-top: 56px; position: relative; }
        .hm-proc-steps::before { content:''; position:absolute; top: 36px; left:0; right:0; height: 2px; background: linear-gradient(90deg,#facc15,#0f0f0f); z-index:0; }
        .hm-proc-step { flex: 1; text-align: center; padding: 0 16px; position: relative; z-index: 1; }
        .hm-proc-num { width: 72px; height: 72px; border-radius: 50%; background: #facc15; color: #0f0f0f; font-size: 1.1rem; font-weight: 900; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; border: 4px solid #fff; box-shadow: 0 4px 16px rgba(250,204,21,0.3); transition: transform 0.3s; }
        .hm-proc-step:hover .hm-proc-num { transform: scale(1.1); }
        .hm-proc-step h3 { font-size: 1rem; font-weight: 800; color: #0f0f0f; margin-bottom: 10px; }
        .hm-proc-step p { font-size: 0.85rem; color: #555; line-height: 1.6; }
        .hm-proc-note { text-align: center; margin-top: 48px; font-size: 0.95rem; color: #555; font-style: italic; max-width: 680px; margin-left: auto; margin-right: auto; }

        /* ===== SECTION 7 — OUTCOMES ===== */
        .hm-out { background: #1f2937; }
        .hm-out .hm-h2 { color: #fff; }
        .hm-out .hm-lead { color: #bbb; }
        .hm-out-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-top: 48px; }
        .hm-out-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 16px; }
        .hm-out-list li { display: flex; align-items: center; gap: 14px; color: #ccc; font-size: 1rem; line-height: 1.5; }
        .hm-out-check { width: 28px; height: 28px; background: rgba(250,204,21,0.15); border: 2px solid #facc15; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #facc15; font-size: 14px; flex-shrink: 0; }
        .hm-out-visual { background: #29265a; border-radius: 24px; padding: 32px; animation: hm-float 5.5s ease-in-out infinite; }
        .hm-out-dash-title { color: #666; font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 24px; display: flex; align-items: center; gap: 8px; }
        .hm-out-dash-title::before { content:''; width:8px; height:8px; background:#4ade80; border-radius:50%; animation:hm-pulse 2s infinite; }
        .hm-out-bars { display: flex; flex-direction: column; gap: 16px; }
        .hm-out-bar-row { }
        .hm-out-bar-label { display: flex; justify-content: space-between; color: #888; font-size: 11px; margin-bottom: 6px; }
        .hm-out-bar-track { background: #2a2a2a; border-radius: 4px; height: 8px; overflow: hidden; }
        .hm-out-bar-fill { height: 100%; border-radius: 4px; }
        .hm-out-note { color: #666; font-size: 0.85rem; margin-top: 32px; line-height: 1.6; font-style: italic; }

        /* ===== SECTION 8 — WHY FTD ===== */
        .hm-ftd { background: #fff; }
        .hm-ftd-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; margin-top: 48px; }
        .hm-ftd-card { background: #f9f9f9; border-radius: 18px; padding: 32px; border: 2px solid transparent; transition: all 0.3s; text-align: center; }
        .hm-ftd-card:hover { border-color: #facc15; transform: translateY(-4px); box-shadow: 0 10px 28px rgba(250,204,21,0.1); }
        .hm-ftd-icon { font-size: 2rem; width: 64px; height: 64px; background: #1f2937; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
        .hm-ftd-card h3 { font-size: 1.05rem; font-weight: 800; color: #0f0f0f; margin-bottom: 12px; }
        .hm-ftd-card p { font-size: 0.9rem; color: #555; line-height: 1.65; }
        .hm-ftd-cta { text-align: center; margin-top: 56px; }

        /* ===== SECTION 9 — FAQs ===== */
        .hm-faq { background: #f9f9f9; }
        .hm-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .hm-faq-list { margin-top: 16px; }
        .hm-faq-item { border-bottom: 1px solid #e5e5e5; }
        .hm-faq-q { width: 100%; background: none; border: none; text-align: left; padding: 20px 0; font-size: 1rem; font-weight: 700; color: #0f0f0f; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px; transition: color 0.2s; }
        .hm-faq-q:hover { color: #1e1b4b; }
        .hm-faq-q.hm-open { color: #0f0f0f; }
        .hm-faq-icon { width: 24px; height: 24px; background: #facc15; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 900; flex-shrink: 0; color: #0f0f0f; transition: transform 0.3s; }
        .hm-faq-q.hm-open .hm-faq-icon { transform: rotate(45deg); }
        .hm-faq-a { font-size: 0.95rem; color: #555; line-height: 1.7; padding-bottom: 20px; display: none; }
        .hm-faq-a.hm-open { display: block; animation: hm-slideUp 0.3s ease; }
        .hm-faq-visual { background: #1f2937; border-radius: 24px; padding: 36px; position: sticky; top: 100px; }
        .hm-faq-visual-title { color: #facc15; font-size: 1.2rem; font-weight: 800; margin-bottom: 24px; }
        .hm-faq-visual-items { display: flex; flex-direction: column; gap: 16px; }
        .hm-faq-visual-item { background: #29265a; border-radius: 12px; padding: 16px 20px; border-left: 3px solid #facc15; }
        .hm-faq-visual-item h4 { color: #fff; font-size: 0.9rem; font-weight: 700; margin-bottom: 4px; }
        .hm-faq-visual-item p { color: #888; font-size: 0.82rem; }

        /* ===== SECTION 10 — FINAL CTA ===== */
        .hm-final { background: #1f2937; padding: 100px 0; text-align: center; }
        .hm-final h2 { color: #fff; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 900; margin-bottom: 24px; max-width: 700px; margin-left: auto; margin-right: auto; }
        .hm-final p { color: #bbb; font-size: 1.05rem; max-width: 600px; margin: 0 auto 36px; line-height: 1.75; }
        .hm-final-list { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 32px; max-width: 600px; margin: 0 auto 48px; text-align: left; }
        .hm-final-list li { display: flex; align-items: center; gap: 10px; color: #ccc; font-size: 0.95rem; }
        .hm-final-list li::before { content:'✦'; color: #facc15; font-size: 10px; }
        .hm-final-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .hm-final-note { color: #555; font-size: 0.88rem; margin-top: 32px; }

        /* ===== SECTION HEADER CENTER ===== */
        .hm-center { text-align: center; max-width: 720px; margin: 0 auto 16px; }

        /* Split homepage topics between navy and yellow, like the reference. */
        .hm-page :is(h1, h2, h3, h4, h5, h6) {
          color: #1e1b4b !important;
          -webkit-text-fill-color: #1e1b4b !important;
          background-image: none !important;
        }
        .hm-page :is(h1, h2, h3, h4, h5, h6) .hm-accent {
          color: #facc15 !important;
          -webkit-text-fill-color: #facc15 !important;
        }
        .hm-page :is(.hm-why, .hm-out, .hm-final) :is(h1, h2, h3, h4, h5, h6),
        .hm-page :is(.hm-why, .hm-out, .hm-final) :is(h1, h2, h3, h4, h5, h6) * {
          color: #facc15 !important;
          -webkit-text-fill-color: #facc15 !important;
        }
        .hm-page .hm-hero h1 .hm-hero-title-primary,
        .hm-page .hm-hero h1 .hm-accent {
          display: block;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .hm-hero-grid { grid-template-columns: 1fr; }
          .hm-hero-dash { display: none; }
          .hm-prob-grid { grid-template-columns: 1fr; }
          .hm-prob-visual { display: none; }
          .hm-out-grid { grid-template-columns: 1fr; }
          .hm-out-visual { display: none; }
          .hm-faq-grid { grid-template-columns: 1fr; }
          .hm-faq-visual { display: none; }
          .hm-proc-steps { flex-direction: column; gap: 32px; }
          .hm-proc-steps::before { display: none; }
          .hm-final-list { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .hm-page,
          .hm-hero,
          .hm-hero .hm-container,
          .hm-hero-grid,
          .hm-hero-grid > div:first-child {
            background: #fff !important;
            background-color: #fff !important;
            background-image: none !important;
            box-shadow: none !important;
            filter: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
          .hm-hero::before,
          .hm-hero::after,
          .hm-hero-grid::before,
          .hm-hero-grid::after,
          .hm-hero .hm-container::before,
          .hm-hero .hm-container::after,
          .hm-hero-grid > div:first-child::before,
          .hm-hero-grid > div:first-child::after {
            content: none !important;
            display: none !important;
          }
          .hm-hero h1 { font-size: 2rem; }
          .hm-cta-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          .hm-cta-row a {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
          .hm-h2 { font-size: 1.7rem; }
          .hm-prob-list { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="hm-page">

        {/* ===== SECTION 1 — HERO ===== */}
        <section className="hm-hero">
          <div className="hm-container">
            <div className="hm-hero-grid">
              <div ref={heroRef} className={`hm-reveal-left ${heroVisible ? 'hm-visible' : ''}`}>
                <div className="hm-hero-badge">
                  <span>⚡</span> Fly Towards Digital Innovation
                </div>
                <h1>
                  <span className="hm-hero-title-primary">Custom Software Development</span>
                  <span className="hm-accent">Services for Growing Businesses</span>
                </h1>
                <p>
                  Build software around your unique business processes, workflows, and goals
                  with tailored software development services designed for your business.
                </p>
                <div className="hm-cta-row">
                  <Link to="/contact" className="hm-btn-primary">
                    Discuss Your Software Requirement →
                  </Link>
                  <Link to="/services/" className="hm-btn-outline">
                    Explore Our Services
                  </Link>
                </div>
              </div>

              {/* Animated Dashboard */}
              <div className={`hm-hero-dash hm-reveal-right ${heroVisible ? 'hm-visible' : ''}`}>
                <div className="hm-dash-mini">
                  <div className="hm-dash-mini-val">98%</div>
                  <div className="hm-dash-mini-label">Client Satisfaction</div>
                </div>
                <div className="hm-dash-main">
                  <div className="hm-dash-title">Project Dashboard</div>
                  <div className="hm-dash-metrics">
                    <div className="hm-dash-metric">
                      <div className="hm-dash-metric-label">Active Projects</div>
                      <div className="hm-dash-metric-val">24</div>
                      <div className="hm-dash-metric-change">↑ On Schedule</div>
                    </div>
                    <div className="hm-dash-metric">
                      <div className="hm-dash-metric-label">Delivered</div>
                      <div className="hm-dash-metric-val">150+</div>
                      <div className="hm-dash-metric-change">↑ All Industries</div>
                    </div>
                  </div>
                  <div className="hm-dash-bars">
                    {[
                      { label: 'Web Applications', pct: '88%' },
                      { label: 'Mobile Apps', pct: '74%' },
                      { label: 'Enterprise Systems', pct: '65%' },
                      { label: 'SaaS Platforms', pct: '55%' },
                    ].map((b, i) => (
                      <div className="hm-dash-bar-row" key={i}>
                        <div className="hm-dash-bar-label"><span>{b.label}</span><span style={{color:'#facc15'}}>{b.pct}</span></div>
                        <div className="hm-dash-bar-track">
                          <div className="hm-dash-bar-fill" style={{ width: b.pct, transition: `width ${1 + i * 0.2}s ease ${0.5 + i * 0.15}s` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hm-dash-mini2">
                  <div className="hm-dash-mini2-val">✓ Build Complete</div>
                  <div className="hm-dash-mini2-label">Latest Deployment</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2 — BUSINESS PROBLEMS ===== */}
        <section className="hm-section hm-prob">
          <div className="hm-container">
            <div className="hm-prob-grid">
              <div ref={prob2Ref} className={`hm-reveal-left ${prob2Visible ? 'hm-visible' : ''}`}>
                <div className="hm-label">Software Built Around Your Business</div>
                <h2 className="hm-h2">Generic Software <span className="hm-accent">Wasn't Built for Your Business</span></h2>
                <p className="hm-lead">
                  Generic software can be useful when your processes fit the product. But when your business has unique workflows,
                  multiple teams, specialised requirements or existing systems, adapting your operations to someone else's software
                  can create unnecessary complexity.
                </p>
                <p className="hm-sub">
                  Custom software gives your business the opportunity to build around the way you actually work.
                  We help businesses turn operational requirements into software solutions that can support:
                </p>
                <ul className="hm-prob-list">
                  {problems.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
                <p className="hm-sub" style={{ marginBottom: 24, fontStyle: 'italic', color: '#333' }}>
                  The goal is not simply to build another application. It is to create software that has a clear purpose within your business.
                </p>
                <Link to="/contact" className="hm-btn-primary">Tell Us What You Need to Build →</Link>
              </div>

              {/* Animated Visual */}
              <div className={`hm-reveal-right ${prob2Visible ? 'hm-visible' : ''}`}>
                <div className="hm-prob-visual">
                  <div className="hm-prob-node-wrap">
                    {[
                      { title: 'Business Requirements', status: 'Captured & Defined' },
                      { title: 'Software Architecture', status: 'Designed for Scale' },
                      { title: 'Development Sprint', status: 'In Progress' },
                      { title: 'Quality Assurance', status: 'Testing Phase' },
                      { title: 'Live Deployment', status: 'Delivered Successfully' },
                    ].map((n, i) => (
                      <div key={i}>
                        <div className="hm-prob-node" style={{ animationDelay: `${i * 0.1}s`, borderLeftColor: i % 2 === 0 ? '#facc15' : '#4ade80' }}>
                          <div className="hm-prob-node-title">{n.title}</div>
                          <div className="hm-prob-node-status">{n.status}</div>
                        </div>
                        {i < 4 && <div className="hm-prob-connector" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3 — SERVICES ===== */}
        <section className="hm-section hm-serv">
          <div className="hm-container">
            <div ref={servRef} className={`hm-reveal ${servVisible ? 'hm-visible' : ''}`}>
              <div className="hm-serv-header">
                <div>
                  <div className="hm-label">What We Build</div>
                  <h2 className="hm-h2">Software Development Services for <span className="hm-accent">Different Business Needs</span></h2>
                  <p className="hm-lead" style={{ maxWidth: 640 }}>
                    Every software project has a different purpose. Some businesses need an internal system to replace manual processes.
                    Others need a customer-facing platform, a mobile application or a complete digital product.
                  </p>
                </div>
              </div>
              <div className="hm-serv-grid">
                {services.map((s, i) => (
                  <Link
                    to={s.link}
                    key={i}
                    className={`hm-serv-card ${activeService === i ? 'hm-active' : ''}`}
                    style={{ transitionDelay: `${i * 0.07}s` }}
                  >
                    <div className="hm-serv-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <div className="hm-serv-arrow">Learn More →</div>
                  </Link>
                ))}
              </div>
              <div className="hm-cta-row" style={{ marginTop: 48, justifyContent: 'center' }}>
                <Link to="/services/" className="hm-btn-primary">View All Software Services →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4 — WHY CUSTOM ===== */}
        <section className="hm-section hm-why">
          <div className="hm-container">
            <div ref={whyRef} className={`hm-reveal ${whyVisible ? 'hm-visible' : ''}`}>
              <div className="hm-center">
                <div className="hm-label">Why Custom Software</div>
                <h2 className="hm-h2" style={{ color: '#fff' }}>Why Businesses Choose <span className="hm-accent">Custom Software</span></h2>
                <p className="hm-lead">
                  Off-the-shelf software is not always the right fit. A business may have unique approval processes,
                  specialised workflows, legacy applications, multiple departments or requirements that standard products
                  cannot adequately address.
                </p>
              </div>
              <div className="hm-why-grid">
                {whyCards.map((c, i) => (
                  <div key={i} className="hm-why-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="hm-why-card-icon">{c.icon}</div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5 — INDUSTRIES ===== */}
        <section className="hm-section hm-ind">
          <div className="hm-container">
            <div ref={indRef} className={`hm-reveal ${indVisible ? 'hm-visible' : ''}`}>
              <div className="hm-center">
                <div className="hm-label">Industries We Serve</div>
                <h2 className="hm-h2">Built for Industries With <span className="hm-accent">Real Operational Challenges</span></h2>
                <p className="hm-lead">
                  Different industries have different workflows, regulations, customer expectations and operational requirements.
                  Our approach to custom software development can be adapted to the needs of different business environments.
                </p>
              </div>
              <div className="hm-ind-grid">
                {industries.map((ind, i) => (
                  <Link to={ind.link} key={i} className="hm-ind-card" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div className="hm-ind-icon">{ind.icon}</div>
                    <h3>{ind.name}</h3>
                    <p>{ind.desc}</p>
                    <div className="hm-ind-link">Explore {ind.name} Software →</div>
                  </Link>
                ))}
              </div>
              <div className="hm-cta-row" style={{ marginTop: 48, justifyContent: 'center' }}>
                <Link to="/industries/" className="hm-btn-primary">Explore Industry Solutions →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6 — PROCESS ===== */}
        <section className="hm-section hm-proc">
          <div className="hm-container">
            <div ref={procRef} className={`hm-reveal ${procVisible ? 'hm-visible' : ''}`}>
              <div className="hm-center">
                <div className="hm-label">Our Process</div>
                <h2 className="hm-h2">From Business Requirement to <span className="hm-accent">Working Software</span></h2>
                <p className="hm-lead">
                  A successful software project starts with understanding the business behind the requirement.
                </p>
              </div>
              <div className="hm-proc-steps">
                {steps.map((s, i) => (
                  <div key={i} className="hm-proc-step" style={{ transitionDelay: `${i * 0.12}s` }}>
                    <div className="hm-proc-num">{s.num}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
              <p className="hm-proc-note">
                This approach keeps the development process connected to the business objective rather than
                treating software development as an isolated technical task.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7 — OUTCOMES ===== */}
        <section className="hm-section hm-out">
          <div className="hm-container">
            <div ref={outRef} className={`hm-reveal ${outVisible ? 'hm-visible' : ''}`}>
              <div className="hm-center">
                <div className="hm-label" style={{ background: 'rgba(250,204,21,0.15)', border: '1px solid rgba(250,204,21,0.3)', color: '#facc15' }}>Business Outcomes</div>
                <h2 className="hm-h2" style={{ color: '#fff' }}>Software That Supports Better <span className="hm-accent">Business Operations</span></h2>
                <p className="hm-lead">
                  The value of software is not simply the number of features it contains. A useful business application
                  should help people work more effectively, make information easier to manage and reduce unnecessary operational complexity.
                </p>
              </div>
              <div className="hm-out-grid">
                <ul className="hm-out-list">
                  {outcomes.map((o, i) => (
                    <li key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                      <div className="hm-out-check">✓</div>
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="hm-out-visual">
                  <div className="hm-out-dash-title">Operational Impact</div>
                  <div className="hm-out-bars">
                    {[
                      { label: 'Process Efficiency', val: 85, color: '#facc15' },
                      { label: 'Data Centralisation', val: 78, color: '#4ade80' },
                      { label: 'Team Productivity', val: 72, color: '#60a5fa' },
                      { label: 'System Connectivity', val: 68, color: '#f472b6' },
                      { label: 'Operational Visibility', val: 90, color: '#facc15' },
                    ].map((b, i) => (
                      <div className="hm-out-bar-row" key={i}>
                        <div className="hm-out-bar-label"><span>{b.label}</span><span style={{ color: b.color }}>{b.val}%</span></div>
                        <div className="hm-out-bar-track">
                          <div className="hm-out-bar-fill" style={{ width: outVisible ? `${b.val}%` : '0%', background: b.color, transition: `width ${0.8 + i * 0.15}s ease ${0.3 + i * 0.1}s` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="hm-out-note">
                    Specific outcomes will depend on the business, requirements and implementation scope.
                    Every software environment is different.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 8 — WHY FLY TOWARDS ===== */}
        <section className="hm-section hm-ftd">
          <div className="hm-container">
            <div ref={ftdRef} className={`hm-reveal ${ftdVisible ? 'hm-visible' : ''}`}>
              <div className="hm-center">
                <div className="hm-label">Why Choose Us</div>
                <h2 className="hm-h2">Why Work With <span className="hm-accent">Fly Towards Digital Innovation?</span></h2>
                <p className="hm-lead">
                  Choosing a custom software development company is about more than finding someone who can write code.
                  You need a development partner that can understand the business requirement, translate it into software
                  and support the project from development through future improvements.
                </p>
              </div>
              <div className="hm-ftd-grid">
                {ftdCards.map((c, i) => (
                  <div key={i} className="hm-ftd-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="hm-ftd-icon">{c.icon}</div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
              <div className="hm-ftd-cta">
                <Link to="/contact" className="hm-btn-primary">Talk About Your Software Project →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 9 — FAQs ===== */}
        <section className="hm-section hm-faq">
          <div className="hm-container">
            <div ref={faqRef} className={`hm-reveal ${faqVisible ? 'hm-visible' : ''}`}>
              <div className="hm-faq-grid">
                <div>
                  <div className="hm-label">FAQs</div>
                  <h2 className="hm-h2">Frequently Asked <span className="hm-accent">Questions</span></h2>
                  <p className="hm-sub" style={{ marginBottom: 32 }}>
                    If your current software no longer fits the way your business operates, or if you are starting a new
                    digital product or internal application, the first step is understanding what you actually need to build.
                  </p>
                  <div className="hm-faq-list">
                    {faqs.map((f, i) => (
                      <div key={i} className="hm-faq-item">
                        <button
                          className={`hm-faq-q ${openFaq === i ? 'hm-open' : ''}`}
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                          <span>{f.q}</span>
                          <span className="hm-faq-icon">{openFaq === i ? '−' : '+'}</span>
                        </button>
                        <div className={`hm-faq-a ${openFaq === i ? 'hm-open' : ''}`}>{f.a}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hm-faq-visual">
                  <div className="hm-faq-visual-title">You may already know that you need to:</div>
                  <div className="hm-faq-visual-items">
                    {[
                      { h: 'Automate a manual process', p: 'Reduce repetitive work through software.' },
                      { h: 'Connect multiple systems', p: 'Create a more integrated digital environment.' },
                      { h: 'Modernise an old application', p: 'Upgrade existing software that no longer fits.' },
                      { h: 'Build a workflow platform', p: 'Create a system built around your operations.' },
                      { h: 'Launch a SaaS product', p: 'Develop a subscription-based digital business.' },
                      { h: 'Build a web or mobile app', p: 'A specific business or customer-facing requirement.' },
                    ].map((item, i) => (
                      <div key={i} className="hm-faq-visual-item" style={{ borderLeftColor: i % 3 === 0 ? '#facc15' : i % 3 === 1 ? '#4ade80' : '#60a5fa' }}>
                        <h4>{item.h}</h4>
                        <p>{item.p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 10 — FINAL CTA ===== */}
        <section className="hm-final" ref={ctaRef}>
          <div className="hm-container">
            <div className={`hm-reveal ${ctaVisible ? 'hm-visible' : ''}`}>
              <h2>Let's Discuss What Your Business <span className="hm-accent">Needs to Build</span></h2>
              <p>
                The right software starts with the right understanding of the problem.
                Whether you need to automate an internal process, replace an outdated application, connect multiple systems,
                build a SaaS product or develop a business-specific web or mobile application, start by telling us what
                you are trying to achieve.
              </p>
              <ul className="hm-final-list">
                <li>Automate an internal process</li>
                <li>Replace an outdated application</li>
                <li>Connect multiple systems</li>
                <li>Build a SaaS product</li>
                <li>Develop a business-specific web app</li>
                <li>Build a customer-facing mobile app</li>
              </ul>
              <div className="hm-final-ctas">
                <Link to="/contact" className="hm-btn-primary">Discuss Your Software Requirement →</Link>
                <Link to="/contact" className="hm-btn-outline hm-btn-outline-y">Contact Fly Towards Digital Innovation</Link>
              </div>
              <p className="hm-final-note">
                Let's explore the requirement, understand the business problem and determine what needs to be built.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
