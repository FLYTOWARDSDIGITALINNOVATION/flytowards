import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CaseStudies.css';

const CaseStudies = () => (
    <motion.main
        className="case-studies-page"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
        <div className="case-studies-container">
            <motion.section
                className="case-studies-hero"
                aria-labelledby="case-studies-title"
            >
                <div className="case-studies-copy">
                    <span className="case-studies-eyebrow">Fly Towards Digital Innovation</span>
                    <h1 id="case-studies-title">Software Development <span>Case Studies</span></h1>
                    <p className="case-studies-lead">
                        Explore how we turn business challenges into practical software solutions.
                    </p>
                    <p>
                        At Fly Towards Digital Innovation, we work with businesses to understand their requirements, solve operational challenges and develop software that supports their goals. Our software development case studies showcase the projects, challenges and solutions that demonstrate our approach to custom software development, business applications and digital transformation.
                    </p>
                    <p>
                        From custom applications to industry-focused digital solutions, each project starts with a specific business requirement and follows an approach designed around the client’s needs.
                    </p>
                    <div className="case-studies-actions">
                        <Link className="case-studies-primary" to="/contact">
                            Discuss Your Software Project <ArrowRight size={17} />
                        </Link>
                        <Link className="case-studies-secondary" to="/services">
                            Explore Our Services <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>

                <motion.div
                    className="case-studies-image-wrap"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.12 }}
                >
                    <img src="/image%20review.jpeg" alt="Business and technology team discussing a software project" />
                    <span className="case-studies-image-accent" aria-hidden="true" />
                </motion.div>
            </motion.section>

            <motion.section
                className="case-study-approach"
                aria-labelledby="business-challenges-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="case-study-approach-copy">
                    <motion.h2
                        id="business-challenges-heading"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Turning Business Challenges Into Software Solutions
                    </motion.h2>
                    <p className="case-study-approach-lead">Every software project begins with a reason.</p>
                    <p>
                        A business may need to replace an outdated application, automate a manual process, connect multiple systems, improve an existing platform or create a completely new digital product.
                    </p>
                    <p>Our case studies provide insight into how these challenges can be approached through software.</p>
                    <p className="case-study-highlights-label">Each project can highlight:</p>
                </div>

                <motion.ul
                    className="case-study-highlights"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.18 }}
                    variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
                >
                    {[
                        'The business challenge',
                        'Existing processes and requirements',
                        'The software solution',
                        'Development approach',
                        'Key functionality',
                        'Business outcomes'
                    ].map((item, index) => (
                        <motion.li
                            key={item}
                            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.p
                    className="case-study-approach-close"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    The objective is to show not only what was developed, but also why the solution was developed and how it addressed the underlying business requirement.
                </motion.p>
            </motion.section>

            <motion.section
                className="case-study-portfolio"
                aria-labelledby="case-study-portfolio-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="case-study-portfolio-heading">
                    <h2 id="case-study-portfolio-heading">Our Software Project Portfolio</h2>
                    <p>Explore our software project portfolio to see different types of applications, industries and business requirements.</p>
                </div>

                <motion.div
                    className="case-study-portfolio-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    {[
                        {
                            title: 'Custom Software Development',
                            description: 'Purpose-built software designed around specific business workflows, users and operational requirements.',
                            link: '/services/custom-software-development'
                        },
                        {
                            title: 'Enterprise Software',
                            description: 'Solutions designed to support complex business processes, multiple users and connected operations.',
                            link: '/services/enterprise-software-development'
                        },
                        {
                            title: 'SaaS Development',
                            description: 'Digital software products developed around specific product, user and business requirements.',
                            link: '/services/saas-development'
                        },
                        {
                            title: 'Web Applications',
                            description: 'Browser-based applications designed for internal teams, customers, partners or specific business processes.',
                            link: '/services/web-application-development'
                        },
                        {
                            title: 'Mobile Applications',
                            description: 'Mobile solutions designed around customer experiences, employee workflows and business requirements.',
                            link: '/services/mobile-app-development'
                        },
                        {
                            title: 'Digital Transformation',
                            description: 'Software projects focused on modernising processes, improving digital workflows and addressing existing technology challenges.',
                            link: '/services/software-modernization'
                        }
                    ].map((project) => (
                        <motion.article
                            className="case-study-portfolio-card"
                            key={project.title}
                            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            whileHover={{ y: -5, boxShadow: '0 18px 36px rgba(31, 41, 55, 0.1)' }}
                        >
                            <span className="case-study-card-accent" aria-hidden="true" />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <Link to={project.link} className="case-study-card-link">
                                View Case Study <ArrowRight size={16} />
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </motion.section>

            <motion.section
                className="featured-custom-case-study"
                aria-labelledby="featured-case-studies-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="featured-custom-case-study-intro">
                    <div>
                        <span className="case-studies-eyebrow">Featured Case Study</span>
                        <h2 id="featured-case-studies-heading">Featured Software Development Case Studies</h2>
                        <h3>Custom Software Built Around a Business Requirement</h3>
                        <p className="featured-case-study-lead">
                            When standard software cannot adequately support a business process, a custom solution can provide a more tailored approach.
                        </p>
                        <p>
                            Our custom software case study projects demonstrate how specific requirements can be translated into software designed around the business, its users and its workflows.
                        </p>
                    </div>
                    <motion.img
                        className="featured-case-study-image"
                        src="/images%20(17).jpg"
                        alt="Featured custom software development case study"
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.12 }}
                    />
                </div>

                <motion.div
                    className="featured-case-study-steps"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    {[
                        { title: 'The Challenge', description: 'Understand the business problem, current process and limitations of the existing approach.' },
                        { title: 'The Requirement', description: 'Define what the software needs to accomplish and who needs to use it.' },
                        { title: 'The Solution', description: 'Develop an application based on the identified business and technical requirements.' },
                        { title: 'The Outcome', description: 'Evaluate how the completed solution supports the intended business process and objectives.' }
                    ].map((step, index) => (
                        <motion.article
                            key={step.title}
                            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                        >
                            <span aria-hidden="true">0{index + 1}</span>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    className="featured-case-study-cta-wrap"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.25 }}
                >
                    <Link className="case-studies-primary" to="/services/custom-software-development">
                        Read the Full Custom Software Case Study <ArrowRight size={17} />
                    </Link>
                </motion.div>
            </motion.section>

            <motion.section
                className="digital-transformation-case-study"
                aria-labelledby="digital-transformation-case-study-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="digital-transformation-case-study-intro">
                    <span className="case-studies-eyebrow">Digital Transformation</span>
                    <h2 id="digital-transformation-case-study-heading">Digital Transformation Case Studies</h2>
                    <h3>Modernising Business Processes Through Technology</h3>
                    <p className="digital-transformation-lead">Digital transformation is about more than introducing new technology.</p>
                    <p>
                        It can involve changing how teams work, improving existing processes, connecting systems and creating more effective digital workflows.
                    </p>
                    <p>
                        Our digital transformation case studies explore projects where software has been used to address specific operational or technology requirements.
                    </p>
                </div>

                <h4 className="digital-transformation-topics-heading">Depending on the project, the transformation may involve:</h4>
                <motion.ul
                    className="digital-transformation-topics"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
                >
                    {[
                        'Replacing manual processes',
                        'Modernising existing applications',
                        'Connecting disconnected systems',
                        'Improving information flow',
                        'Automating workflows',
                        'Developing new digital platforms',
                        'Improving customer or employee experiences'
                    ].map((topic) => (
                        <motion.li
                            key={topic}
                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <span aria-hidden="true" />
                            {topic}
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.div
                    className="digital-transformation-case-study-cta"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                >
                    <Link className="case-studies-secondary" to="/services/software-modernization">
                        Explore Digital Transformation Case Studies <ArrowRight size={17} />
                    </Link>
                </motion.div>
            </motion.section>

            <motion.section
                className="industry-case-studies"
                aria-labelledby="industry-case-studies-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="industry-case-studies-intro">
                    <h2 id="industry-case-studies-heading">Software Solutions Across Industries</h2>
                    <p>Different industries have different processes, users and operational requirements.</p>
                    <p>Our portfolio can be organised around the industries and business environments represented by our projects.</p>
                </div>

                <motion.div
                    className="industry-case-studies-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                >
                    {[
                        { title: 'Healthcare', description: 'Explore software projects supporting healthcare-related workflows, information management and digital processes.', link: '/industries/healthcare' },
                        { title: 'Manufacturing', description: 'Discover software solutions designed around manufacturing workflows, operational processes and business requirements.', link: '/industries/manufacturing' },
                        { title: 'Retail', description: 'Explore digital solutions supporting retail operations, customer experiences and business workflows.', link: '/industries/retail' },
                        { title: 'Logistics', description: 'Discover software projects designed around logistics workflows, operational coordination and information management.', link: '/industries/logistics' },
                        { title: 'Education', description: 'Explore digital applications supporting education-related processes, administration and user interactions.', link: '/industries/education' },
                        { title: 'Construction', description: 'Discover software solutions designed around construction-related workflows and operational requirements.', link: '/industries/construction' },
                        { title: 'Hospitality', description: 'Explore digital solutions supporting hospitality operations, customer interactions and business processes.', link: '/industries/hospitality' }
                    ].map((industry) => (
                        <motion.article
                            className="industry-case-study-card"
                            key={industry.title}
                            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(31, 41, 55, 0.09)' }}
                        >
                            <span aria-hidden="true" />
                            <h3>{industry.title}</h3>
                            <p>{industry.description}</p>
                            <Link to={industry.link}>
                                Explore {industry.title} Case Studies <ArrowRight size={15} />
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </motion.section>

            <motion.section
                className="case-study-principles"
                aria-labelledby="case-study-principles-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="case-study-principles-heading">
                    <h2 id="case-study-principles-heading">What Our Case Studies Show</h2>
                </div>
                <motion.div
                    className="case-study-principles-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    {[
                        {
                            title: 'Understanding the Problem Before Building the Solution',
                            description: 'Good software development begins with understanding the business problem. A case study should show how the initial requirement was understood and translated into a practical software direction.'
                        },
                        {
                            title: 'Designing Around Real Users',
                            description: 'Software needs to work for the people who use it. Understanding user roles, workflows and daily requirements helps shape a more relevant application experience.'
                        },
                        {
                            title: 'Solving Specific Business Requirements',
                            description: 'Every project has its own objectives. The software solution should address the requirements that matter to the organisation rather than simply adding unnecessary features.'
                        },
                        {
                            title: 'Working With Existing Technology',
                            description: 'Some businesses already have applications, systems and processes in place. Software projects may involve improving, integrating, maintaining or modernising those existing systems.'
                        },
                        {
                            title: 'Building for Future Requirements',
                            description: 'Business requirements can change after a project is completed. A software solution may need to support future functionality, users, integrations and operational requirements.'
                        }
                    ].map((principle, index) => (
                        <motion.article
                            className="case-study-principle-card"
                            key={principle.title}
                            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(31, 41, 55, 0.09)' }}
                        >
                            <span aria-hidden="true">0{index + 1}</span>
                            <h3>{principle.title}</h3>
                            <p>{principle.description}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </motion.section>

            <motion.section
                className="solution-type-projects"
                aria-labelledby="solution-type-projects-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="solution-type-projects-heading">
                    <h2 id="solution-type-projects-heading">Explore Our Projects by Solution Type</h2>
                    <p>Looking for a particular type of software project?</p>
                </div>
                <motion.div
                    className="solution-type-projects-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
                >
                    {[
                        { title: 'Custom Software', description: 'Purpose-built applications designed around specific business requirements.', linkText: 'Explore Custom Software Projects', link: '/services/custom-software-development' },
                        { title: 'Enterprise Software', description: 'Software supporting complex business operations and organisational workflows.', linkText: 'Explore Enterprise Projects', link: '/services/enterprise-software-development' },
                        { title: 'SaaS Products', description: 'Software platforms designed around specific product and user requirements.', linkText: 'Explore SaaS Projects', link: '/services/saas-development' },
                        { title: 'Web Applications', description: 'Browser-based applications for businesses, customers and internal teams.', linkText: 'Explore Web Application Projects', link: '/services/web-application-development' },
                        { title: 'Mobile Applications', description: 'Mobile solutions designed for specific user and business requirements.', linkText: 'Explore Mobile App Projects', link: '/services/mobile-app-development' },
                        { title: 'Digital Transformation', description: 'Projects focused on modernising business processes and technology environments.', linkText: 'Explore Digital Transformation Projects', link: '/services/software-modernization' }
                    ].map((solution) => (
                        <motion.article
                            className="solution-type-project-card"
                            key={solution.title}
                            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.42, ease: 'easeOut' }}
                            whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(31, 41, 55, 0.09)' }}
                        >
                            <span aria-hidden="true" />
                            <h3>{solution.title}</h3>
                            <p>{solution.description}</p>
                            <Link to={solution.link}>{solution.linkText} <ArrowRight size={15} /></Link>
                        </motion.article>
                    ))}
                </motion.div>
            </motion.section>

            <motion.section
                className="case-study-process"
                aria-labelledby="case-study-process-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="case-study-process-heading">
                    <h2 id="case-study-process-heading">How We Approach Software Projects</h2>
                    <p>From Business Requirement to Working Software</p>
                    <p>Every project is different, but a clear development approach helps connect the business objective with the software solution.</p>
                </div>
                <motion.ol
                    className="case-study-process-steps"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    {[
                        { number: '01', title: 'Understand', description: 'We begin by understanding the business problem, current workflow, users and project requirements.' },
                        { number: '02', title: 'Define', description: 'The requirements are translated into a clearer project scope, functionality and direction.' },
                        { number: '03', title: 'Plan', description: 'The appropriate software approach is considered based on the business and technical requirements.' },
                        { number: '04', title: 'Develop', description: 'The software is developed according to the agreed scope and project requirements.' },
                        { number: '05', title: 'Refine', description: 'The solution is reviewed and refined to align with the defined requirements.' },
                        { number: '06', title: 'Evolve', description: 'Software can continue to be maintained, enhanced and improved as business requirements change.' }
                    ].map((step) => (
                        <motion.li
                            key={step.number}
                            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                        >
                            <span>{step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </motion.li>
                    ))}
                </motion.ol>
            </motion.section>

            <motion.section
                className="case-study-value"
                aria-labelledby="case-study-value-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="case-study-value-copy">
                    <h2 id="case-study-value-heading">More Than a Software Project Portfolio</h2>
                    <p>A software project portfolio should demonstrate more than the ability to build applications.</p>
                    <p>It should show how technology can be connected to a business requirement.</p>
                    <h3>Our case studies are designed to provide insight into:</h3>
                </div>
                <motion.ul
                    className="case-study-value-list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                >
                    {[
                        'The problem that needed to be solved',
                        'The business context behind the project',
                        'The software requirements',
                        'The solution that was developed',
                        'The development approach',
                        'The functionality delivered',
                        'The resulting business impact, where documented'
                    ].map((item) => (
                        <motion.li
                            key={item}
                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                            transition={{ duration: 0.38, ease: 'easeOut' }}
                        >
                            <span aria-hidden="true" />
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.p
                    className="case-study-value-close"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.25 }}
                >
                    This gives potential clients a clearer understanding of how a software development project can move from an initial idea or challenge to a working solution.
                </motion.p>
            </motion.section>

            <motion.section
                className="custom-case-study-guide"
                aria-labelledby="custom-case-study-guide-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="custom-case-study-guide-copy">
                    <h2 id="custom-case-study-guide-heading">Looking for a Custom Software Case Study?</h2>
                    <p>If you are considering custom software, it can be useful to look at projects with similar requirements.</p>
                    <h3>You may be dealing with:</h3>
                </div>
                <motion.ul
                    className="custom-case-study-guide-list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                >
                    {[
                        'Manual processes',
                        'Outdated software',
                        'Disconnected systems',
                        'Complex workflows',
                        'Growing operational requirements',
                        'A new digital product idea',
                        'A need for a customer-facing application',
                        'An existing application that needs improvement'
                    ].map((item) => (
                        <motion.li
                            key={item}
                            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.38, ease: 'easeOut' }}
                        >
                            <span aria-hidden="true" />
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
                <p className="custom-case-study-guide-close">Explore the relevant case studies to understand how similar challenges can be approached.</p>
                <motion.div
                    className="custom-case-study-guide-cta"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                >
                    <Link className="case-studies-primary" to="/services/custom-software-development">
                        Explore Custom Software Case Studies <ArrowRight size={17} />
                    </Link>
                </motion.div>
            </motion.section>

            <motion.section
                className="case-studies-faq"
                aria-labelledby="case-studies-faq-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <h2 id="case-studies-faq-heading">Frequently Asked Questions</h2>
                <motion.div
                    className="case-studies-faq-list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ visible: { transition: { staggerChildren: 0.075 } } }}
                >
                    {[
                        {
                            question: 'What are software development case studies?',
                            answer: 'Software development case studies describe real software projects and explain the business challenge, requirements, solution, development approach and documented outcomes.'
                        },
                        {
                            question: 'What is included in a software case study?',
                            answer: 'A detailed case study can include the business challenge, project objectives, users, requirements, solution, functionality, development approach and business outcomes where those outcomes can be documented.'
                        },
                        {
                            question: 'Do you have custom software case studies?',
                            answer: 'Our case-study portfolio can include projects involving custom software development. Individual case studies should provide the verified project details, requirements and outcomes.'
                        },
                        {
                            question: 'Do you have digital transformation case studies?',
                            answer: 'Yes, where documented digital transformation projects are available, they can be presented as individual case studies showing the business challenge, transformation requirement and solution.'
                        },
                        {
                            question: 'Do you have a digital transformation retail case study?',
                            answer: 'Retail digital transformation projects can be featured when there is a verified project that meets this description. The individual case study should explain the retail business challenge, transformation requirements, solution and documented outcome.'
                        },
                        {
                            question: 'Can I find case studies by industry?',
                            answer: 'Yes. Where sufficient projects are available, case studies can be organised by industries such as healthcare, manufacturing, retail, logistics, education, construction and hospitality.'
                        },
                        {
                            question: 'Can I find projects by software type?',
                            answer: 'Yes. The portfolio can be organised around custom software, enterprise software, SaaS, web applications, mobile applications and digital transformation projects.'
                        },
                        {
                            question: 'Can you build something similar to a project in your portfolio?',
                            answer: 'Potentially. Each new project is assessed according to its business requirements, users, existing systems, functionality and technical needs.'
                        },
                        {
                            question: "What if I don't know exactly what software I need?",
                            answer: 'You do not need to have the complete technical solution defined before starting a conversation. You can explain the business problem, current process and desired outcome, and the software requirement can then be explored.'
                        }
                    ].map((faq) => (
                        <motion.article
                            className="case-studies-faq-item"
                            key={faq.question}
                            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <h3><span aria-hidden="true">?</span>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </motion.section>

            <motion.section
                className="case-studies-final-cta"
                aria-labelledby="case-studies-final-cta-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
                <motion.span
                    className="case-studies-final-cta-glow"
                    aria-hidden="true"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="case-studies-final-cta-content">
                    <h2 id="case-studies-final-cta-heading">Have a Software Project in Mind?</h2>
                    <p className="case-studies-final-cta-lead">The right software solution starts with understanding the problem you are trying to solve.</p>
                    <p>
                        Whether you need custom software, an enterprise application, a SaaS product, a web or mobile application, software modernisation or digital transformation, our team can help explore the requirements.
                    </p>
                    <p className="case-studies-final-cta-prompt">Tell us what you are trying to build, improve or change.</p>
                    <div className="case-studies-final-cta-actions">
                        <Link className="case-studies-primary" to="/contact">
                            Discuss Your Software Project <ArrowRight size={17} />
                        </Link>
                        <Link className="case-studies-secondary" to="/services">
                            Explore Our Services <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    </motion.main>
);

export default CaseStudies;
