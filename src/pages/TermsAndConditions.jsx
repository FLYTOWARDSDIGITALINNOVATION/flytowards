import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const refreshFrame = window.requestAnimationFrame(() => AOS.refreshHard());

        return () => window.cancelAnimationFrame(refreshFrame);
    }, []);

    const terms = [
        {
            animation: 'fade-right',
            text: 'Welcome to FlyTowards Digital Innovation (“FlyTowards,” “we,” “our,” or “us”).',
        },
        {
            animation: 'zoom-in',
            text: 'These Terms and Conditions govern your access to and use of the FlyTowards website, including its pages, content, information and available website features.',
        },
        {
            animation: 'fade-left',
            text: 'FlyTowards provides software development and related digital technology services for businesses and organizations.',
        },
        {
            animation: 'flip-up',
            text: 'By accessing or using our website, you agree to comply with these Terms and Conditions. If you do not agree, please discontinue using the website.',
        },
        {
            animation: 'fade-up',
            text: 'Separate agreements may apply when you engage FlyTowards for software development, consulting, maintenance or other professional services.',
        },
    ];

    const sections = [
        {
            title: 'About FlyTowards Digital Innovation',
            paragraphs: [
                'FlyTowards Digital Innovation is a technology services business focused on software development and related digital solutions.',
                'Our website provides information about our services, industry-focused software solutions, technical capabilities and business enquiry opportunities.',
                'The information published on this website is intended to help visitors understand our proposed services and contact us regarding their requirements.',
                'Descriptions of software capabilities, integrations, industry applications and development approaches are general information unless confirmed in a specific project agreement.',
            ],
        },
        {
            title: 'Acceptance of Terms',
            paragraphs: [
                'By accessing or using this website, you acknowledge that you have read and agree to these Terms and Conditions.',
                'You agree to use the website in accordance with applicable laws and these terms.',
                'If you use the website on behalf of a business or organization, you are responsible for ensuring that your use is appropriately authorized.',
                'These website terms do not automatically create a software development contract, partnership, employment relationship or other professional engagement between you and FlyTowards.',
            ],
        },
    ];

    const renderListCards = (items, keyPrefix, animationOffset = 0) => (
        <motion.ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '0.75rem', padding: 0, margin: 0, listStyle: 'none' }}>
            {items.map((item, index) => (
                <motion.li
                    key={`${keyPrefix}-${item}`}
                    data-aos={['fade-right', 'zoom-in', 'fade-left', 'flip-up'][(index + animationOffset) % 4]}
                    data-aos-delay={(index % 4) * 70}
                    style={{ padding: '0.9rem 1rem', color: '#1E1B4B', lineHeight: 1.65, background: '#FFFFFF', border: '1px solid #E5E7EB', borderLeft: '4px solid #FACC15', borderRadius: '12px', listStyle: 'none' }}
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    );

    const additionalSections = [
        {
            title: 'Project Scope and Changes',
            blocks: [
                { type: 'paragraph', text: 'Software development projects may involve evolving requirements, technical discoveries and changes in business priorities.' },
                { type: 'paragraph', text: 'The agreed project scope should be documented in the relevant proposal or service agreement.' },
                { type: 'paragraph', text: 'Requests for additional features, integrations, design changes or revised workflows may affect development effort, timelines and costs.' },
                { type: 'paragraph', text: 'Such changes should be reviewed and approved through the change management process established for the project.' },
                { type: 'paragraph', text: 'FlyTowards is not automatically obligated to deliver functionality outside an agreed project scope.' },
            ],
        },
        {
            title: 'Fees, Payments and Billing',
            blocks: [
                { type: 'paragraph', text: 'Fees for software development and related services are determined through the applicable quotation, proposal or service agreement.' },
                { type: 'paragraph', text: 'Depending on the project, payment arrangements may include advance payments, milestone-based payments, recurring service fees or other agreed structures.' },
                { type: 'paragraph', text: 'The relevant agreement should specify:' },
                { type: 'list', items: ['Project or service fees', 'Applicable taxes', 'Payment due dates', 'Invoicing arrangements', 'Third-party costs', 'Refund or cancellation conditions', 'Consequences of delayed payment'] },
                { type: 'paragraph', text: 'Unless separately agreed, information displayed on the website does not constitute a binding price quotation.' },
                { type: 'paragraph', text: 'Any refunds, credits, cancellations or payment disputes will be handled according to the applicable agreement and mandatory legal requirements.' },
            ],
        },
        {
            title: 'Client Responsibilities',
            blocks: [
                { type: 'paragraph', text: 'Clients engaging FlyTowards for professional services may be required to provide information, access and approvals necessary for project delivery.' },
                { type: 'paragraph', text: 'Depending on the project, client responsibilities may include:' },
                { type: 'list', items: ['Providing accurate project requirements.', 'Appointing authorized representatives.', 'Reviewing and approving agreed deliverables.', 'Providing necessary content, data and documentation.', 'Obtaining appropriate permissions for third-party systems.', 'Ensuring lawful collection and use of data supplied for a project.', 'Providing timely feedback and decisions.', 'Meeting agreed payment obligations.'] },
                { type: 'paragraph', text: 'Delays in providing required information, approvals or access may affect project schedules.' },
                { type: 'paragraph', text: 'Specific responsibilities should be documented in the applicable service agreement.' },
            ],
        },
        {
            title: 'Intellectual Property Rights',
            blocks: [
                { type: 'subheading', text: 'Website Content' },
                { type: 'paragraph', text: 'Unless otherwise indicated, the FlyTowards website and its original content, including text, graphics, branding, layout elements and other protected materials, are owned by FlyTowards or used under appropriate authorization.' },
                { type: 'paragraph', text: 'These materials may be protected by applicable intellectual property laws.' },
                { type: 'paragraph', text: 'You may view website content for personal or internal business information purposes.' },
                { type: 'paragraph', text: 'You must not reproduce, modify, distribute, publish or commercially exploit protected materials without permission, except where allowed by applicable law.' },
                { type: 'subheading', text: 'Software Project Intellectual Property' },
                { type: 'paragraph', text: 'Ownership and licensing of software developed for clients will be governed by the applicable project agreement.' },
                { type: 'paragraph', text: 'Such arrangements may address:' },
                { type: 'list', items: ['Custom source code', 'Application designs', 'Technical documentation', 'Reusable development components', 'Pre-existing software', 'Third-party libraries', 'Open-source software', 'Client-provided materials'] },
                { type: 'paragraph', text: 'No transfer of software intellectual property rights should be assumed solely from website content or an initial project enquiry.' },
            ],
        },
        {
            title: 'Confidentiality',
            blocks: [
                { type: 'paragraph', text: 'FlyTowards recognizes that software development discussions may involve confidential business, operational or technical information.' },
                { type: 'paragraph', text: 'Where appropriate, confidentiality obligations may be established through a nondisclosure agreement, service agreement or other written arrangement.' },
                { type: 'paragraph', text: 'Visitors should avoid submitting passwords, production credentials, highly sensitive personal information or confidential business records through general website enquiry forms.' },
                { type: 'paragraph', text: 'Where a project requires the exchange of confidential information, the parties should agree on suitable communication, access and information-handling procedures.' },
                { type: 'paragraph', text: 'Specific confidentiality obligations will be governed by applicable agreements and legal requirements.' },
            ],
        },
        {
            title: 'Privacy and Data Protection',
            blocks: [
                { type: 'paragraph', text: 'Your use of our website may involve the collection and processing of personal information.' },
                { type: 'paragraph', text: 'Our Privacy Policy explains how we may collect, use, share, retain and protect personal information.' },
                { type: 'paragraph', text: 'Please review our Privacy Policy for additional information.' },
                { type: 'link', text: 'Privacy Policy: /privacy-policy/', to: '/privacy-policy' },
                { type: 'paragraph', text: 'For software development projects involving personal information, additional contractual and data protection arrangements may be necessary.' },
                { type: 'paragraph', text: 'Clients and FlyTowards should identify their respective responsibilities for data processing, access, security and compliance.' },
            ],
        },
        {
            title: 'Third-Party Services and Integrations',
            blocks: [
                { type: 'paragraph', text: 'Our website or software services may refer to third-party platforms, tools, APIs, hosting services, payment providers or other technologies.' },
                { type: 'paragraph', text: 'Third-party products and services are subject to their own terms, licensing conditions, availability and technical requirements.' },
                { type: 'paragraph', text: 'FlyTowards does not control the policies, functionality or availability of independent third-party services.' },
                { type: 'paragraph', text: 'Integration with an external system may depend on:' },
                { type: 'list', items: ['Technical compatibility', 'API availability', 'Provider permissions', 'Licensing requirements', 'Commercial arrangements', 'Security and compliance conditions'] },
                { type: 'paragraph', text: 'References to third-party services on our website do not guarantee that an integration is available or included in a particular project.' },
            ],
        },
        {
            title: 'Website Availability and Maintenance',
            blocks: [
                { type: 'paragraph', text: 'We aim to maintain a functional and accessible website.' },
                { type: 'paragraph', text: 'However, the website may occasionally be unavailable due to maintenance, technical issues, hosting interruptions, security events or circumstances outside our reasonable control.' },
                { type: 'paragraph', text: 'We do not guarantee uninterrupted or error-free website access.' },
                { type: 'paragraph', text: 'We may update, modify, suspend or discontinue website features where reasonably necessary, subject to applicable law.' },
            ],
        },
        {
            title: 'Disclaimer of Warranties',
            blocks: [
                { type: 'paragraph', text: 'The website and its publicly available content are provided on an “as available” basis.' },
                { type: 'paragraph', text: 'To the extent permitted by applicable law, FlyTowards does not make warranties regarding the completeness, uninterrupted availability or suitability of general website information for a particular purpose.' },
                { type: 'paragraph', text: 'Website examples, service descriptions and industry use cases should not be interpreted as guarantees of specific business outcomes.' },
                { type: 'paragraph', text: 'Any warranties or service commitments relating to a software development project will be governed by the applicable written agreement.' },
                { type: 'paragraph', text: 'Nothing in these Terms and Conditions excludes warranties or rights that cannot lawfully be excluded.' },
            ],
        },
        {
            title: 'Limitation of Liability',
            blocks: [
                { type: 'paragraph', text: 'To the extent permitted by applicable law, FlyTowards will not be responsible for indirect or consequential losses arising solely from the use of, or inability to use, the public website.' },
                { type: 'paragraph', text: 'This may include losses arising from reliance on general website information, interruptions in website availability or issues involving third-party websites beyond our control.' },
                { type: 'paragraph', text: 'Liability relating to paid software development, consulting, maintenance or other professional services will be governed by the applicable service agreement and mandatory legal requirements.' },
                { type: 'paragraph', text: 'Nothing in these Terms and Conditions limits or excludes liability where doing so would be unlawful.' },
            ],
        },
        {
            title: 'External Links',
            blocks: [
                { type: 'paragraph', text: 'Our website may contain links to external websites or resources.' },
                { type: 'paragraph', text: 'These links may be provided for convenience or additional information.' },
                { type: 'paragraph', text: 'FlyTowards does not necessarily endorse or control the content, security or practices of third-party websites.' },
                { type: 'paragraph', text: 'Visitors access external websites at their own discretion and should review the relevant terms and privacy policies.' },
            ],
        },
        {
            title: 'Termination or Restriction of Website Access',
            blocks: [
                { type: 'paragraph', text: 'We may take reasonable action to restrict access to the website where necessary to address security threats, misuse, unlawful activity or material violations of these Terms and Conditions.' },
                { type: 'paragraph', text: 'Such measures will be subject to applicable law.' },
                { type: 'paragraph', text: 'Termination of a professional service engagement will be governed by the relevant project agreement rather than these general website access provisions.' },
            ],
        },
        {
            title: 'Governing Law and Dispute Resolution',
            blocks: [
                { type: 'paragraph', text: 'These Terms and Conditions are intended to be governed by the laws of India, subject to applicable mandatory legal requirements.' },
                { type: 'paragraph', text: 'Any dispute relating to website usage should initially be communicated to FlyTowards using the contact information below so that the matter can be reviewed.' },
                { type: 'paragraph', text: 'Where a dispute cannot be resolved through communication, the appropriate legal process and jurisdiction will be determined in accordance with applicable law.' },
                { type: 'paragraph', text: 'Jurisdiction: [Insert verified jurisdiction, if a specific court jurisdiction clause is to be included following legal review.]' },
                { type: 'paragraph', text: 'Disputes arising from a separately signed software development or service agreement will be governed by the dispute resolution provisions of that agreement.' },
            ],
        },
        {
            title: 'Changes to These Terms and Conditions',
            blocks: [
                { type: 'paragraph', text: 'FlyTowards may update these Terms and Conditions to reflect changes in website operations, business practices, services or applicable legal requirements.' },
                { type: 'paragraph', text: 'The revised version will be published on this page with an updated Last Updated date.' },
                { type: 'paragraph', text: 'Where required by law or contract, we will provide appropriate notice of relevant changes.' },
                { type: 'paragraph', text: 'Continued website use after updated terms become effective may be subject to those revised terms, to the extent permitted by law.' },
            ],
        },
        {
            title: 'Contact Us',
            blocks: [
                { type: 'paragraph', text: 'If you have questions about these Terms and Conditions or require clarification regarding our website or services, please contact us.' },
                { type: 'list', items: ['Business Name: FlyTowards Digital Innovation', 'Email: [Insert official business email address]', 'Phone: [Insert official contact number, if applicable]', 'Business Address: [Insert verified registered or business address]', 'Website: [Insert verified official website URL]'] },
                { type: 'paragraph', text: 'For questions relating to an existing software development project, please refer to the contact arrangements in the applicable project agreement.' },
            ],
        },
    ];

    return (
        <main style={{ minHeight: '60vh', padding: 'clamp(3rem, 8vw, 6rem) 1.5rem', background: '#FFFFFF' }}>
            <motion.article data-aos="fade-up" style={{ maxWidth: '1456px', margin: '0 auto' }}>
                <motion.header data-aos="fade-up" style={{ marginBottom: '2.5rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, textAlign: 'center' }}>
                    <motion.span data-aos="fade-up" style={{ display: 'block', marginBottom: '1.25rem', color: '#FACC15', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Fly Towards Digital Innovation
                    </motion.span>
                    <motion.h1 data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#1F2937', fontSize: 'clamp(2.7rem, 6vw, 4.5rem)', lineHeight: 1.08, fontWeight: 850 }}>
                        Terms and <span style={{ color: '#D6A900' }}>Conditions</span>
                    </motion.h1>
                    <motion.p data-aos="zoom-in" style={{ marginBottom: 0, color: '#6B7280', fontWeight: 650 }}>
                        <strong>Last Updated:</strong> October 30, 2026
                    </motion.p>
                </motion.header>

                <motion.section aria-label="Terms and Conditions introduction" style={{ display: 'grid', gap: '1.25rem', padding: 0, textAlign: 'center' }}>
                    {terms.map((term, index) => (
                        <motion.p
                            key={term.text}
                            data-aos={term.animation}
                            data-aos-delay={(index % 3) * 80}
                            style={{ margin: 0, padding: 0, color: '#64748B', lineHeight: 1.8, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}
                        >
                            {term.text}
                        </motion.p>
                    ))}
                </motion.section>

                {sections.map((section, sectionIndex) => (
                    <motion.section
                        key={section.title}
                        aria-labelledby={`terms-section-${sectionIndex + 1}`}
                        data-aos={sectionIndex % 2 === 0 ? 'fade-right' : 'fade-left'}
                        style={{ marginTop: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)', background: sectionIndex % 2 === 0 ? '#FEFCE8' : '#F8FAFC', border: '1px solid #E5E7EB', borderRadius: '22px', boxShadow: '0 12px 28px rgba(30, 27, 75, 0.06)' }}
                    >
                        <motion.h2 id={`terms-section-${sectionIndex + 1}`} data-aos="zoom-in" style={{ margin: '0 0 1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, borderBottom: '3px solid #FACC15', paddingBottom: '0.5rem', display: 'inline-block' }}>
                            {section.title}
                        </motion.h2>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            {section.paragraphs.map((paragraph, paragraphIndex) => (
                                <motion.p
                                    key={paragraph}
                                    data-aos={['fade-right', 'zoom-in', 'fade-left', 'flip-up'][paragraphIndex]}
                                    data-aos-delay={paragraphIndex * 70}
                                    style={{ margin: 0, padding: '1rem 1.15rem', color: '#6B7280', lineHeight: 1.8, background: '#FFFFFF', border: '1px solid #E5E7EB', borderLeft: '4px solid #FACC15', borderRadius: '14px' }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>
                    </motion.section>
                ))}

                <motion.section aria-labelledby="permitted-use" data-aos="fade-right" style={{ marginTop: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)', background: '#FEFCE8', border: '1px solid #E5E7EB', borderRadius: '22px', boxShadow: '0 12px 28px rgba(30, 27, 75, 0.06)' }}>
                    <motion.h2 id="permitted-use" data-aos="zoom-in" style={{ margin: '0 0 1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, borderBottom: '3px solid #FACC15', paddingBottom: '0.5rem', display: 'inline-block' }}>Permitted Use of the Website</motion.h2>
                    <motion.p data-aos="fade-up" style={{ margin: '0 0 1rem', color: '#6B7280', lineHeight: 1.8 }}>You may access and use our website for lawful purposes, including:</motion.p>
                    {renderListCards([
                        'Learning about FlyTowards and its services.',
                        'Reviewing information about software development solutions.',
                        'Submitting genuine business enquiries.',
                        'Requesting consultations or project discussions.',
                        'Accessing publicly available website content.',
                    ], 'permitted-use', 0)}
                    <motion.p data-aos="fade-left" style={{ margin: '1.25rem 0', padding: '1rem 1.15rem', color: '#6B7280', lineHeight: 1.8, background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px' }}>
                        You agree not to use the website in a manner that violates applicable law, infringes another party's rights or interferes with the website's operation.
                    </motion.p>
                    <motion.h3 data-aos="fade-up" style={{ margin: '1.5rem 0 0.75rem', color: '#1E1B4B', fontSize: '1.2rem', fontWeight: 750 }}>Prohibited Activities</motion.h3>
                    <motion.p data-aos="zoom-in" style={{ margin: '0 0 1rem', color: '#6B7280', lineHeight: 1.8 }}>You must not:</motion.p>
                    {renderListCards([
                        'Attempt to gain unauthorized access to the website, servers or connected systems.',
                        'Introduce malicious software, harmful code or disruptive technologies.',
                        'Use the website for fraudulent, deceptive or unlawful activities.',
                        'Submit false, misleading or unauthorized information.',
                        'Attempt to interfere with website security or availability.',
                        'Copy or redistribute protected website materials without appropriate permission, except where permitted by law.',
                        'Use automated tools to access the website in ways that compromise its security or performance.',
                    ], 'prohibited-activity', 1)}
                    <motion.p data-aos="flip-up" style={{ margin: '1.25rem 0 0', color: '#6B7280', lineHeight: 1.8 }}>We may take reasonable measures to protect the website and its users from misuse.</motion.p>
                </motion.section>

                <motion.section aria-labelledby="website-content" data-aos="fade-left" style={{ marginTop: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)', background: '#F8FAFC', border: '1px solid #E5E7EB', borderRadius: '22px', boxShadow: '0 12px 28px rgba(30, 27, 75, 0.06)' }}>
                    <motion.h2 id="website-content" data-aos="zoom-in" style={{ margin: '0 0 1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, borderBottom: '3px solid #FACC15', paddingBottom: '0.5rem', display: 'inline-block' }}>Website Content and Information</motion.h2>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {[
                            'We aim to provide useful and accurate information about our services and software development approaches.',
                            'However, website content is provided for general informational purposes.',
                            'Information about services, technologies, software functionality, industry solutions, integrations and project approaches may change over time.',
                            'We do not guarantee that every service description, example or proposed feature will be suitable for every organization.',
                            'Software requirements, development methods, timelines, integrations and deliverables depend on individual project circumstances.',
                            'Visitors should contact FlyTowards to discuss specific requirements before relying on website information for business decisions.',
                        ].map((paragraph, index) => (
                            <motion.p key={paragraph} data-aos={['fade-right', 'zoom-in', 'fade-left', 'flip-up'][index % 4]} data-aos-delay={(index % 4) * 70} style={{ margin: 0, padding: '1rem 1.15rem', color: '#6B7280', lineHeight: 1.8, background: '#FFFFFF', border: '1px solid #E5E7EB', borderLeft: '4px solid #FACC15', borderRadius: '14px' }}>{paragraph}</motion.p>
                        ))}
                    </div>
                </motion.section>

                <motion.section aria-labelledby="software-services" data-aos="fade-right" style={{ marginTop: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)', background: '#FEFCE8', border: '1px solid #E5E7EB', borderRadius: '22px', boxShadow: '0 12px 28px rgba(30, 27, 75, 0.06)' }}>
                    <motion.h2 id="software-services" data-aos="zoom-in" style={{ margin: '0 0 1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, borderBottom: '3px solid #FACC15', paddingBottom: '0.5rem', display: 'inline-block' }}>Software Development and Professional Services</motion.h2>
                    <motion.p data-aos="fade-up" style={{ margin: '0 0 1rem', color: '#6B7280', lineHeight: 1.8 }}>FlyTowards may provide services such as:</motion.p>
                    {renderListCards([
                        'Custom software development',
                        'Web application development',
                        'Mobile application development',
                        'Enterprise software development',
                        'Software consulting',
                        'API development and integration',
                        'Business process automation',
                        'Software modernization',
                        'Software maintenance and support',
                        'Other agreed digital technology services',
                    ], 'software-service', 2)}
                    <motion.p data-aos="fade-left" style={{ margin: '1.25rem 0', padding: '1rem 1.15rem', color: '#6B7280', lineHeight: 1.8, background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px' }}>
                        The availability, scope and delivery of any service are subject to discussion, feasibility assessment and mutually agreed arrangements.
                    </motion.p>
                    <motion.h3 data-aos="fade-up" style={{ margin: '1.5rem 0 0.75rem', color: '#1E1B4B', fontSize: '1.2rem', fontWeight: 750 }}>Separate Project Agreements</motion.h3>
                    <motion.p data-aos="zoom-in" style={{ margin: '0 0 1rem', color: '#6B7280', lineHeight: 1.8 }}>Any professional engagement may require a separate written proposal, statement of work, service agreement or other contractual document. Such documents may specify:</motion.p>
                    {renderListCards([
                        'Project scope and deliverables',
                        'Functional and technical requirements',
                        'Development milestones',
                        'Client and provider responsibilities',
                        'Project fees and payment schedules',
                        'Testing and acceptance criteria',
                        'Change request procedures',
                        'Intellectual property arrangements',
                        'Confidentiality and data protection requirements',
                        'Support and maintenance obligations',
                        'Project termination provisions',
                    ], 'project-agreement', 3)}
                    <motion.p data-aos="flip-up" style={{ margin: '1.25rem 0 0', padding: '1rem 1.15rem', color: '#6B7280', lineHeight: 1.8, background: '#FFFFFF', border: '1px solid #E5E7EB', borderLeft: '4px solid #FACC15', borderRadius: '14px' }}>
                        Where a separately signed agreement governs a service engagement, that agreement will take precedence over these website Terms and Conditions for the matters it addresses.
                    </motion.p>
                </motion.section>

                <motion.section aria-labelledby="service-enquiries" data-aos="fade-left" style={{ marginTop: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)', background: '#F8FAFC', border: '1px solid #E5E7EB', borderRadius: '22px', boxShadow: '0 12px 28px rgba(30, 27, 75, 0.06)' }}>
                    <motion.h2 id="service-enquiries" data-aos="zoom-in" style={{ margin: '0 0 1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, borderBottom: '3px solid #FACC15', paddingBottom: '0.5rem', display: 'inline-block' }}>Service Enquiries and Quotations</motion.h2>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {[
                            'Submitting an enquiry through our website does not guarantee acceptance of a project or the provision of services.',
                            'We may review enquiries based on project requirements, technical feasibility, resource availability and other relevant considerations.',
                            'Any initial discussion, general estimate or preliminary information is not a binding commitment unless expressly stated in an authorized written agreement.',
                            'Formal quotations and proposals may include assumptions, exclusions, validity periods and other project-specific conditions.',
                            'FlyTowards and the prospective client must agree to the relevant commercial and technical terms before a binding service engagement is established.',
                        ].map((paragraph, index) => (
                            <motion.p key={paragraph} data-aos={['fade-right', 'zoom-in', 'fade-left', 'flip-up'][index % 4]} data-aos-delay={(index % 4) * 70} style={{ margin: 0, padding: '1rem 1.15rem', color: '#6B7280', lineHeight: 1.8, background: '#FFFFFF', border: '1px solid #E5E7EB', borderLeft: '4px solid #FACC15', borderRadius: '14px' }}>{paragraph}</motion.p>
                        ))}
                    </div>
                </motion.section>

                {additionalSections.map((section, sectionIndex) => (
                    <motion.section
                        key={section.title}
                        aria-labelledby={`additional-terms-${sectionIndex}`}
                        data-aos={['fade-right', 'fade-left', 'zoom-in', 'flip-up'][sectionIndex % 4]}
                        style={{ marginTop: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)', background: sectionIndex % 2 === 0 ? '#FEFCE8' : '#F8FAFC', border: '1px solid #E5E7EB', borderRadius: '22px', boxShadow: '0 12px 28px rgba(30, 27, 75, 0.06)' }}
                    >
                        <motion.h2 id={`additional-terms-${sectionIndex}`} data-aos="zoom-in" style={{ margin: '0 0 1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, borderBottom: '3px solid #FACC15', paddingBottom: '0.5rem', display: 'inline-block' }}>
                            {section.title}
                        </motion.h2>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            {section.blocks.map((block, blockIndex) => {
                                if (block.type === 'list') {
                                    return renderListCards(block.items, `terms-${sectionIndex}-${blockIndex}`, sectionIndex + blockIndex);
                                }

                                if (block.type === 'link') {
                                    return (
                                        <motion.p key={block.text} data-aos="zoom-in" style={{ margin: 0, padding: '1rem 1.15rem', color: '#6B7280', lineHeight: 1.8, background: '#FFFFFF', border: '1px solid #E5E7EB', borderLeft: '4px solid #FACC15', borderRadius: '14px' }}>
                                            <Link to={block.to} style={{ color: '#1E1B4B', fontWeight: 750, textDecoration: 'none' }}>{block.text}</Link>
                                        </motion.p>
                                    );
                                }

                                if (block.type === 'subheading') {
                                    return (
                                        <motion.h3 key={block.text} data-aos="fade-up" style={{ margin: '0.5rem 0 0.25rem', color: '#1E1B4B', fontSize: '1.2rem', fontWeight: 750 }}>
                                            {block.text}
                                        </motion.h3>
                                    );
                                }

                                return (
                                    <motion.p key={block.text} data-aos={['fade-right', 'zoom-in', 'fade-left', 'flip-up'][(sectionIndex + blockIndex) % 4]} data-aos-delay={(blockIndex % 4) * 70} style={{ margin: 0, padding: '1rem 1.15rem', color: '#6B7280', lineHeight: 1.8, background: '#FFFFFF', border: '1px solid #E5E7EB', borderLeft: '4px solid #FACC15', borderRadius: '14px' }}>
                                        {block.text}
                                    </motion.p>
                                );
                            })}
                        </div>
                    </motion.section>
                ))}

                <motion.p data-aos="zoom-in" style={{ margin: '1.5rem 0 0', padding: '1.25rem', color: '#1E1B4B', lineHeight: 1.8, fontWeight: 750, textAlign: 'center', background: '#FEFCE8', border: '1px solid #FDE68A', borderRadius: '16px' }}>
                    FlyTowards Digital Innovation — Building Technology Solutions Through Clear Communication and Responsible Business Practices.
                </motion.p>
            </motion.article>
        </main>
    );
};

export default TermsAndConditions;
