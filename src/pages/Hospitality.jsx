import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
    Hotel, CalendarDays, Users, BedDouble, ClipboardCheck, CreditCard,
    BarChart3, ArrowRight, KeyRound, Bell, Check, MapPin,
    LayoutDashboard, Smartphone, Wrench, Plug, ShieldCheck
} from 'lucide-react';
import './Hospitality.css';

const challenges = [
    ['Fragmented Reservation Information', 'Bookings received through direct enquiries and different reservation channels may be difficult to consolidate without a connected system.', CalendarDays],
    ['Limited Room Availability Visibility', 'Front desk teams may struggle to maintain accurate room allocation and occupancy information when updates are recorded manually.', BedDouble],
    ['Complicated Guest Check-In & Check-Out', 'Manual guest registration, room assignment and billing processes can add unnecessary steps to front desk operations.', Users],
    ['Disconnected Housekeeping Updates', 'Housekeeping staff and reception teams may rely on phone calls or manual messages to coordinate room readiness.', ClipboardCheck],
    ['Manual Billing & Payment Records', 'Guest charges, additional services, taxes and payment information may be maintained across separate records.', CreditCard],
    ['Time-Consuming Hospitality Reporting', 'Managers may need to combine reservation, occupancy, revenue and service information from different sources to review operations.', BarChart3]
];

const solutions = [
    ['Hotel Management Software', 'Develop applications for organizing reservations, guest records, room allocation, front desk activities and hotel administration.', LayoutDashboard],
    ['Hotel Reservation & Booking Software', 'Build systems for recording reservations, maintaining room availability, managing booking status and coordinating guest booking information.', CalendarDays],
    ['Hotel Property Management Systems', 'Plan property management functionality for room inventory, guest stays, check-in and check-out workflows, billing and relevant operational reporting.', Hotel],
    ['Guest & Hospitality CRM Software', 'Create applications for maintaining guest profiles, stay history, service requests, communication preferences and authorized guest interactions.', Users],
    ['Housekeeping & Property Operations Software', 'Develop systems for coordinating cleaning tasks, room readiness, maintenance requests and internal property updates.', ClipboardCheck],
    ['Hotel Billing & Management Dashboards', 'Build applications for organizing guest charges, payment-related records, occupancy information and selected financial or operational reports.', BarChart3]
];

const workflows = [
    ['Room Availability & Reservation Management', 'Reservation teams can review room information, record bookings, assign reservation status and manage relevant guest arrival details.'],
    ['Guest Registration & Check-In', 'Front desk staff can maintain guest registration information, verify required details and allocate rooms according to defined procedures.'],
    ['Housekeeping & Room Readiness', 'Housekeeping teams can receive room assignments, record cleaning status and communicate room readiness to authorized staff.'],
    ['Guest Services & Additional Charges', 'Hotel teams can maintain relevant service requests and record applicable guest charges for supported hotel services.'],
    ['Check-Out, Billing & Payment Recording', 'Front desk teams can review recorded charges, prepare bills, calculate configured taxes and record payment information.'],
    ['Occupancy & Hotel Operations Reporting', 'Managers can review selected reservation activity, occupancy information, room status and operational reports.']
];

const benefits = [
    ['Organize Reservations & Room Information', 'Maintain structured booking records, room allocation details and relevant availability information.', CalendarDays],
    ['Simplify Front Desk Workflows', 'Provide reception teams with defined processes for guest registration, check-in, check-out and billing.', KeyRound],
    ['Improve Housekeeping Coordination', 'Connect room status updates, cleaning assignments and maintenance-related tasks with authorized hotel staff.', ClipboardCheck],
    ['Support Guest Service Management', 'Maintain relevant guest requests, communication records and service information through structured workflows.', Users],
    ['Improve Hotel Reporting Visibility', 'Present selected reservation, occupancy, billing and operational information through management dashboards.', BarChart3]
];

const services = [
    ['Custom Software Development', 'Build hotel management and hospitality applications around property-specific workflows and business requirements.', '/services/custom-software-development/', Wrench],
    ['Web Application Development', 'Develop browser-based reservation systems, hotel administration portals and property management dashboards.', '/services/web-application-development/', LayoutDashboard],
    ['Mobile App Development', 'Create mobile applications for suitable housekeeping tasks, guest service requests and hotel management activities.', '/services/mobile-app-development/', Smartphone],
    ['CRM Development', 'Develop guest relationship management functionality for guest records, communication history and relevant service workflows.', '/services/crm-development/', Users],
    ['API Development', 'Connect compatible hotel booking platforms, payment applications, accounting systems and hospitality tools through supported interfaces.', '/services/api-development/', Plug],
    ['Software Maintenance & Support', 'Maintain agreed hotel software functionality, address identified issues and implement suitable application updates.', '/services/software-maintenance-support/', ShieldCheck]
];

const steps = [
    ['Hospitality Workflow Discovery', 'Understand reservations, front desk processes, room management, housekeeping, billing and guest service requirements.'],
    ['Requirements & Existing System Assessment', 'Identify property structures, room categories, user roles, booking channels, existing applications, device requirements and integration needs.'],
    ['Solution Architecture & Module Planning', 'Define reservation modules, room inventory rules, guest data structures, user permissions and development priorities.'],
    ['UI/UX Design & Software Development', 'Design suitable front desk and administration interfaces and develop agreed hotel management functionality.'],
    ['Testing & Hospitality Workflow Validation', 'Test booking rules, room allocation, check-in and check-out processes, billing calculations, permissions and supported integrations.'],
    ['Deployment & Support Planning', 'Prepare the application for implementation, review reservation and guest data migration needs, plan staff onboarding and define suitable maintenance arrangements.']
];

const differentiators = [
    ['Hospitality Workflow Understanding', 'We focus on identifying reservation, guest management and property operations requirements during project discovery.'],
    ['Custom Hotel Software Planning', 'We consider room structures, booking rules, billing workflows and reporting needs when defining application functionality.'],
    ['Staff-Friendly Interface Planning', 'We consider how reception teams, housekeeping staff, administrators and managers will use the software in their daily work.'],
    ['Integration & Implementation Planning', 'We assess existing hospitality applications, compatible booking services, supported integrations and deployment requirements.']
];

const faqs = [
    ['What is hotel computer software?', 'Hotel computer software refers to applications used to manage hotel operations, such as reservations, room information, guest records, front desk activities, billing and operational reporting.'],
    ['What is hotel management software?', 'Hotel management software is a system that helps accommodation businesses organize daily hotel activities. Depending on its features, it may support reservations, check-ins, room allocation, guest information, housekeeping, billing and reporting.'],
    ['What is the difference between hotel management software and a hospitality management system?', 'Hotel management software generally focuses on accommodation operations. A hospitality management system may cover a wider range of activities, including guest services, food and beverage operations, property management and multiple hospitality business units. Their features can overlap.'],
    ['What is a hotel property management system (PMS)?', 'A hotel property management system is software used to organize core hotel operations such as room inventory, reservations, guest stays, check-ins, check-outs and related front desk processes.'],
    ['Can hotel management software connect with online booking platforms?', 'Integration may be possible through compatible booking APIs, channel managers or approved connectivity providers. Live room availability synchronization and booking updates depend on the supported systems and commercial arrangements.'],
    ['Can hotel computer software support housekeeping and room status tracking?', 'Yes. Applications can be developed to maintain room status, assign housekeeping tasks, record cleaning updates and coordinate room readiness with authorized staff.'],
    ['How much does hotel management software development cost in Tamil Nadu?', 'Costs depend on the number of properties, room inventory requirements, reservation workflows, billing functionality, user roles, mobile features, integrations and deployment scope. A requirements assessment helps determine the project budget.'],
    ['Can hospitality management software integrate with POS, accounting and payment systems?', 'Integration may be possible through compatible APIs or supported data exchange methods. Feasibility depends on the existing systems, hardware, provider permissions and required information flows.']
];

function SectionHeading({ eyebrow, title, children, light = false }) {
    return <div className={`hotel-heading${light ? ' hotel-heading-light' : ''}`}>
        {eyebrow && <span className="hotel-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {children && <p>{children}</p>}
    </div>;
}

function FeatureGrid({ items, numbered = false }) {
    return <div className={`hotel-feature-grid${numbered ? ' hotel-number-grid' : ''}`}>
        {items.map((item, index) => {
            const Icon = item[2];
            return <motion.article className="hotel-card" key={item[0]} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <span className="hotel-card-icon">{numbered ? String(index + 1).padStart(2, '0') : <Icon size={22} />}</span>
                <h3>{item[0]}</h3><p>{item[1]}</p>
            </motion.article>;
        })}
    </div>;
}

export default function Hospitality() {
    const reduceMotion = useReducedMotion();
    const sectionMotion = {
        initial: reduceMotion ? false : 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.12 },
        variants: {
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] } }
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Hotel Computer Software in Tamil Nadu | FlyTowards';
        let description = document.querySelector('meta[name="description"]');
        if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
        description.content = 'Custom hotel computer software in Tamil Nadu. FlyTowards develops hotel management, reservation, guest, billing and hospitality operations applications.';
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
        canonical.href = 'https://flytowardsdigitalinnovation.com/industries/hospitality/';
    }, []);

    return <main className="hospitality-page">
        <div className="hotel-hero-wrap">
            <motion.section className="hotel-hero hotel-shell" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <div className="hotel-hero-copy">
                    <span className="hotel-pill"><Hotel size={16} /> Hotel & Hospitality Software</span>
                    <h1>Hotel Computer Software Solutions in Tamil Nadu</h1>
                    <h2>Connect Hotel Reservations, Guest Services and Daily Operations</h2>
                    <p>Hotels and hospitality businesses manage several connected activities, from room reservations and guest check-ins to housekeeping, billing and operational reporting.</p>
                    <p>When these activities depend on disconnected spreadsheets, paper registers or separate applications, hotel staff may find it difficult to maintain consistent information across departments.</p>
                    <p>FlyTowards provides hotel and hospitality software development solutions for accommodation businesses across Tamil Nadu, with a focus on South Tamil Nadu.</p>
                    <p>We help hotels, resorts, guesthouses and hospitality operators plan custom hotel computer software, hotel management systems, reservation applications and connected operational workflows.</p>
                    <p>Whether you operate a single property or manage multiple accommodation locations, we focus on software requirements that reflect your guest services and daily operations.</p>
                    <div className="hotel-actions"><Link className="hotel-button" to="/contact">Discuss Your Hotel Software Project <ArrowRight size={17} /></Link><a className="hotel-link" href="#hotel-solutions">Explore Our Software Services</a></div>
                </div>
                <motion.div className="hotel-dashboard" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} aria-label="Illustrative hotel management dashboard">
                    <div className="dashboard-top"><span><Hotel size={18} /> Staydesk</span><span className="dashboard-date">Today <ArrowRight size={14} /></span></div>
                    <div className="dashboard-welcome"><div><small>PROPERTY OVERVIEW</small><h3>Good morning, team</h3></div><span className="dashboard-avatar">FT</span></div>
                    <div className="dashboard-stats"><div><small>Occupancy</small><strong>78%</strong><span className="dashboard-positive">+6.4%</span></div><div><small>Arrivals</small><strong>12</strong><span>Today</span></div><div><small>Available</small><strong>08</strong><span>Rooms</span></div></div>
                    <div className="dashboard-subhead"><strong>Room status</strong><span>View all <ArrowRight size={13} /></span></div>
                    <div className="room-list"><div><span className="room-dot room-green"/><b>Deluxe · 204</b><small>Ready</small></div><div><span className="room-dot room-amber"/><b>Suite · 308</b><small>Cleaning</small></div><div><span className="room-dot room-blue"/><b>Standard · 112</b><small>Occupied</small></div></div>
                    <div className="dashboard-notice"><Bell size={15}/><span>3 housekeeping updates need review</span><ArrowRight size={14}/></div>
                    <span className="dashboard-float"><Check size={14}/> Reservation updated</span>
                </motion.div>
            </motion.section>
        </div>

        <motion.section {...sectionMotion} className="hotel-section hotel-shell hotel-overview">
            <div><SectionHeading eyebrow="A connected operation" title="What Is Hotel Computer Software?" />
                <p>Hotel computer software refers to digital applications used to organize and manage hotel operations, including reservations, guest records, room information, billing and administrative activities.</p>
                <p>Hotel management software commonly includes functionality for front desk operations, room allocation, check-ins, check-outs, guest information and operational reporting.</p>
                <p>A hospitality management system may cover broader workflows across accommodation, guest services, housekeeping, food and beverage operations and multiple properties, depending on the business model.</p>
                <p>A hotel property management system (PMS) is a core operational application used to manage reservations, room inventory, guest stays and related front desk processes.</p>
                <p>Hotel industry software may also connect with compatible booking platforms, payment systems, accounting applications and other hospitality technologies.</p>
            </div>
            <div className="hotel-highlights"><div><CalendarDays/><span><b>Reservation Management</b><small>Organize bookings, room allocations and reservation status.</small></span></div><div><Users/><span><b>Guest & Front Desk Operations</b><small>Maintain guest records, check-in information and stay-related activities.</small></span></div><div><ClipboardCheck/><span><b>Housekeeping Coordination</b><small>Track room readiness, cleaning assignments and maintenance-related updates.</small></span></div><div><CreditCard/><span><b>Billing & Reporting</b><small>Organize guest charges, payment records and selected hotel performance information.</small></span></div></div>
        </motion.section>

        <motion.section {...sectionMotion} className="hotel-section hotel-tint">
            <div className="hotel-shell"><SectionHeading eyebrow="Operational realities" title="Common Software Challenges in Hotel & Hospitality Operations">Hotels coordinate reservations, guest services, room preparation, payments and internal activities throughout the day. Disconnected systems and manual processes can make these responsibilities harder to manage.</SectionHeading><FeatureGrid items={challenges}/></div>
        </motion.section>

        <motion.section {...sectionMotion} id="hotel-solutions" className="hotel-section hotel-shell">
            <SectionHeading eyebrow="Software solutions" title="Our Hotel & Hospitality Management Software Solutions">FlyTowards helps hospitality businesses plan and develop applications around reservations, guest management, property operations and administrative requirements.</SectionHeading><FeatureGrid items={solutions}/>
        </motion.section>

        <motion.section {...sectionMotion} className="hotel-section hotel-tint">
            <div className="hotel-shell"><SectionHeading eyebrow="Daily operations" title="How Hotel Computer Software Supports Daily Hospitality Workflows">Hotel computer software becomes useful when it connects reservation information, front desk activities, guest services and property operations through structured processes.</SectionHeading>
                <div className="hotel-workflows">{workflows.map(([title, text], i) => <article key={title}><span className="workflow-index">0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
                <div className="workflow-strip"><div><small>HOTEL OPERATIONS WORKFLOW</small><p>Reservation Enquiry <i>→</i> Room Availability Check <i>→</i> Booking Confirmation <i>→</i> Guest Check-In <i>→</i> Room & Guest Service Updates <i>→</i> Billing Review <i>→</i> Guest Check-Out <i>→</i> Hotel Reporting</p></div><div><small>HOUSEKEEPING WORKFLOW</small><p>Guest Check-Out <i>→</i> Room Status Update <i>→</i> Cleaning Assignment <i>→</i> Housekeeping Completion <i>→</i> Supervisor Review <i>→</i> Room Available for Allocation</p></div></div>
                <p className="hotel-note">These are illustrative workflows. Actual room inventory rules, booking confirmations, guest verification, billing procedures, tax calculations and payment processes must reflect the hotel's operating policies and applicable requirements.</p>
            </div>
        </motion.section>

        <motion.section {...sectionMotion} className="hotel-section hotel-shell hotel-benefits">
            <div className="benefit-visual"><div className="benefit-window"><div className="benefit-window-head"><span>Operations snapshot</span><BarChart3 size={18}/></div><div className="benefit-chart"><span style={{height:'42%'}}/><span style={{height:'61%'}}/><span style={{height:'51%'}}/><span style={{height:'79%'}}/><span style={{height:'66%'}}/><span style={{height:'91%'}}/><span style={{height:'73%'}}/></div><div className="benefit-legend"><span><i/>Reservations</span><span><i/>Room readiness</span></div></div></div>
            <div><SectionHeading eyebrow="For hospitality teams" title="Benefits of Hotel Management Software for Hospitality Businesses">Well-planned hotel management software can help hospitality operators organize reservations, coordinate departments and maintain clearer operational information.</SectionHeading><div className="benefit-list">{benefits.map(([title,text,Icon])=><div key={title}><span><Icon size={19}/></span><section><h3>{title}</h3><p>{text}</p></section></div>)}</div></div>
        </motion.section>

        <motion.section {...sectionMotion} className="hotel-section hotel-tint">
            <div className="hotel-shell"><SectionHeading eyebrow="Related capabilities" title="FlyTowards Software Development Services for Hospitality Businesses">Hotel management projects may require custom applications, mobile functionality, guest-facing interfaces, integrations and ongoing technical support.</SectionHeading><div className="hotel-service-grid">{services.map(([title,text,url,Icon])=><Link to={url} className="hotel-service" key={title}><span><Icon size={21}/></span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="service-arrow" size={18}/></Link>)}</div></div>
        </motion.section>

        <motion.section {...sectionMotion} className="hotel-section hotel-shell">
            <SectionHeading eyebrow="A structured process" title="Our Hotel Management Software Development Process">We follow a structured approach to understand hotel workflows and plan software functionality around property operations, guest services and technical requirements.</SectionHeading><div className="hotel-timeline">{steps.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </motion.section>

        <motion.section {...sectionMotion} className="hotel-section hotel-why">
            <div className="hotel-shell hotel-why-layout"><div><SectionHeading eyebrow="A considered approach" title="Why Choose FlyTowards for Hotel Computer Software Development?">Hospitality software should reflect how reservations, front desk teams, housekeeping staff and hotel managers coordinate daily activities. A practical solution begins with understanding those workflows before defining software features and integrations.</SectionHeading><Link className="hotel-button" to="/contact">Discuss Your Hospitality Software Requirements <ArrowRight size={17}/></Link></div><div className="hotel-differentiators">{differentiators.map(([title,text],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
        </motion.section>

        <motion.section {...sectionMotion} className="hotel-section hotel-shell hotel-location">
            <div className="location-icon"><MapPin size={28}/></div><div><SectionHeading eyebrow="Tamil Nadu · South Tamil Nadu" title="Hotel Management Software Solutions in Tamil Nadu"/> <p>Hotels, resorts, guesthouses and accommodation businesses across Tamil Nadu serve different types of guests, including business travelers, families, tourists and visitors attending local events.</p><p>In South Tamil Nadu, hospitality businesses operate in destinations such as Madurai, Tirunelveli, Thoothukudi, Tenkasi, Kanyakumari and surrounding areas.</p><p>Accommodation operators in these locations may have different requirements depending on property size, room categories, seasonal booking patterns, guest services and existing technology.</p><p>Some properties may need a structured hotel management system to replace manual reservation records. Others may want to connect existing hotel software with booking channels, accounting applications or housekeeping workflows.</p><p>FlyTowards provides hospitality software development solutions for businesses across Tamil Nadu, focusing on hotel reservations, guest information, property operations and relevant administrative processes.</p><p>Whether you need a focused reservation application or a broader hospitality management system, we help evaluate the software requirements around your property's operations.</p></div>
        </motion.section>

        <motion.section {...sectionMotion} className="hotel-section hotel-tint">
            <div className="hotel-shell hotel-faq-layout"><div><SectionHeading eyebrow="Common questions" title="Frequently Asked Questions About Hotel Computer Software"/></div><div className="hotel-faqs">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div>
        </motion.section>

        <motion.section {...sectionMotion} className="hotel-final-cta"><div className="hotel-shell"><span className="hotel-eyebrow">Plan your next step</span><h2>Connect Your Hotel Reservations, Guest Services and Property Operations</h2><p>Need better reservation management, more organized front desk workflows or a connected hospitality management application?</p><p>FlyTowards helps hotels and accommodation businesses explore custom software solutions aligned with their property operations, guest services and technical requirements.</p><p>Share your hospitality software challenges and take the next step toward a practical digital solution.</p><div className="hotel-actions"><Link className="hotel-button" to="/contact">Discuss Your Hotel Software Project <ArrowRight size={17}/></Link><Link className="hotel-button hotel-button-outline" to="/contact">Request a Consultation</Link></div></div></motion.section>
    </main>;
}
