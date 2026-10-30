import { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ minHeight: '60vh', padding: 'clamp(3rem, 8vw, 6rem) 1.5rem', background: '#FFFFFF' }}>
            <motion.article data-aos="fade-up"
                style={{ maxWidth: '1456px', margin: '0 auto', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}
            >
                <motion.header data-aos="fade-up" style={{ marginBottom: '2.5rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none', textAlign: 'center' }}>
                <motion.span data-aos="fade-up" style={{ display: 'inline-flex', marginBottom: '1.25rem', padding: 0, background: 'transparent', color: '#FACC15', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Fly Towards Digital Innovation</motion.span>
                <motion.h1 data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#1F2937', fontSize: 'clamp(2.7rem, 6vw, 4.5rem)', lineHeight: 1.08, fontWeight: 850, textAlign: 'center' }}>Privacy <span style={{ color: '#D6A900' }}>Policy</span></motion.h1>
                <motion.p data-aos="fade-up" style={{ marginBottom: '1.5rem', color: '#6B7280', textAlign: 'center' }}><strong>Last Updated:</strong> October 30, 2026</motion.p>

                <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                    At <strong>FlyTowards Digital Innovation</strong> (“FlyTowards,” “we,” “our,” or “us”), we recognize the importance of protecting your personal information and respecting your privacy.
                </motion.p>
                <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                    This Privacy Policy explains how we collect, use, store, share and protect personal information when you visit our website, submit an enquiry, communicate with us or engage with our software development and related technology services.
                </motion.p>
                <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                    We aim to handle personal information responsibly, transparently and in accordance with applicable data protection laws.
                </motion.p>
                <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                    By using our website or contacting us, you acknowledge that you have been provided with this Privacy Policy. Where consent is legally required, we will seek it separately as appropriate.
                </motion.p>
                </motion.header>

                <motion.section data-aos="fade-up" aria-labelledby="information-we-collect" style={{ marginTop: '3rem', padding: 'clamp(1.5rem, 3vw, 2.25rem)', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '24px', boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="information-we-collect" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Information We Collect
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.5rem', color: '#64748B', lineHeight: 1.8 }}>
                        We may collect personal information that you provide directly to us or that is generated when you interact with our website and services.
                    </motion.p>

                    <motion.h3 data-aos="fade-up" style={{ marginBottom: '0.75rem', color: '#1E1B4B', fontSize: '1.2rem', fontWeight: 750 }}>
                        Personal Information You Provide
                    </motion.h3>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '0.75rem', color: '#64748B', lineHeight: 1.8 }}>
                        When you contact FlyTowards through a website form, email, telephone or another communication channel, we may collect:
                    </motion.p>
                    <motion.ul data-aos="fade-up" style={{ margin: '0 0 1.25rem', paddingLeft: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', color: '#64748B', lineHeight: 1.9 }}>
                        <motion.li data-aos="fade-right" data-aos-delay="0" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Full name</motion.li>
                        <motion.li data-aos="zoom-in" data-aos-delay="70" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Email address</motion.li>
                        <motion.li data-aos="fade-left" data-aos-delay="140" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Phone number</motion.li>
                        <motion.li data-aos="flip-up" data-aos-delay="210" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Company or organization name</motion.li>
                        <motion.li data-aos="fade-right" data-aos-delay="0" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Job title or professional role</motion.li>
                        <motion.li data-aos="zoom-in" data-aos-delay="70" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Business location</motion.li>
                        <motion.li data-aos="fade-left" data-aos-delay="140" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Project requirements and service enquiries</motion.li>
                        <motion.li data-aos="flip-up" data-aos-delay="210" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Information included in messages or documents you submit</motion.li>
                    </motion.ul>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.5rem', color: '#64748B', lineHeight: 1.8 }}>
                        We request information relevant to responding to your enquiry, understanding your requirements or providing the requested services.
                    </motion.p>

                    <motion.h3 data-aos="fade-up" style={{ marginBottom: '0.75rem', color: '#1E1B4B', fontSize: '1.2rem', fontWeight: 750 }}>
                        Website Usage Information
                    </motion.h3>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '0.75rem', color: '#64748B', lineHeight: 1.8 }}>
                        When you visit our website, certain technical information may be collected automatically, depending on the technologies we use.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '0.5rem', color: '#64748B', lineHeight: 1.8 }}>
                        This may include:
                    </motion.p>
                    <motion.ul data-aos="fade-up" style={{ margin: '0 0 1.25rem', paddingLeft: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', color: '#64748B', lineHeight: 1.9 }}>
                        <motion.li data-aos="fade-right" data-aos-delay="0" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Internet Protocol (IP) address</motion.li>
                        <motion.li data-aos="zoom-in" data-aos-delay="70" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Browser type and version</motion.li>
                        <motion.li data-aos="fade-left" data-aos-delay="140" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Device type and operating system</motion.li>
                        <motion.li data-aos="flip-up" data-aos-delay="210" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Pages visited and navigation activity</motion.li>
                        <motion.li data-aos="fade-right" data-aos-delay="0" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Date and time of website access</motion.li>
                        <motion.li data-aos="zoom-in" data-aos-delay="70" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Referring website or traffic source</motion.li>
                        <motion.li data-aos="fade-left" data-aos-delay="140" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Technical error and performance information</motion.li>
                    </motion.ul>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.5rem', color: '#64748B', lineHeight: 1.8 }}>
                        Such information may be used to maintain website functionality, understand usage patterns and improve website performance.
                    </motion.p>

                    <motion.h3 data-aos="fade-up" style={{ marginBottom: '0.75rem', color: '#1E1B4B', fontSize: '1.2rem', fontWeight: 750 }}>
                        Business and Project Information
                    </motion.h3>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        When discussing or delivering software development services, we may receive information relating to your organization, business processes, project requirements, existing applications or technical systems. Where this information includes personal data, we handle it according to the applicable contractual arrangements, legal requirements and our role in processing that information.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="how-we-use-information" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="how-we-use-information" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        How We Use Your Information
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        We may use personal information for the following purposes:
                    </motion.p>

                    {[
                        {
                            title: 'Responding to Enquiries',
                            body: 'To respond to questions, service requests, consultation enquiries and other communications.',
                        },
                        {
                            title: 'Providing Our Services',
                            body: 'To understand project requirements, prepare proposals, coordinate development activities and deliver agreed services.',
                        },
                        {
                            title: 'Business Communication',
                            body: 'To communicate about project discussions, meetings, service updates and ongoing business relationships.',
                        },
                        {
                            title: 'Website Improvement',
                            body: 'To understand website performance, identify technical issues and improve the accessibility and usability of our website.',
                        },
                        {
                            title: 'Security and Fraud Prevention',
                            body: 'To monitor for suspicious activity, protect our website and systems, and reduce the risk of unauthorized access or misuse.',
                        },
                        {
                            title: 'Legal and Contractual Obligations',
                            body: 'To maintain appropriate business records, comply with applicable laws and respond to lawful requests from authorized authorities.',
                        },
                        {
                            title: 'Marketing Communications',
                            body: 'Where permitted by applicable law, and where any required consent has been obtained, we may send information about relevant services or business updates.',
                        },
                    ].map(({ title, body }) => (
                        <motion.div data-aos="fade-up" key={title} style={{ marginBottom: '1rem', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)' }}>
                            <motion.h3 data-aos="fade-up" style={{ marginBottom: '0.35rem', color: '#1E1B4B', fontSize: '1.15rem', fontWeight: 750 }}>
                                {title}
                            </motion.h3>
                            <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                                {body}
                            </motion.p>
                        </motion.div>
                    ))}

                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        You may request to stop receiving optional marketing communications at any time.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        We do not use personal information for purposes that are incompatible with the purposes for which it was collected unless permitted by law or supported by an appropriate legal basis.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="cookies-and-similar-technologies" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="cookies-and-similar-technologies" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Cookies and Similar Technologies
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Our website may use cookies or similar technologies to support website functionality, remember relevant preferences, maintain security or understand website usage.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Cookies are small files stored on your device by websites you visit.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '0.5rem', color: '#64748B', lineHeight: 1.8 }}>
                        Depending on the tools implemented, cookies may fall into the following categories:
                    </motion.p>
                    <motion.ul data-aos="fade-up" style={{ margin: '0 0 1.25rem', paddingLeft: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', color: '#64748B', lineHeight: 1.9 }}>
                        <motion.li data-aos="flip-up" data-aos-delay="210" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}><strong>Essential Cookies:</strong> Support core website functions, security and navigation.</motion.li>
                        <motion.li data-aos="fade-right" data-aos-delay="0" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}><strong>Analytics Cookies:</strong> Help us understand website traffic, page interactions and performance.</motion.li>
                        <motion.li data-aos="zoom-in" data-aos-delay="70" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}><strong>Preference Cookies:</strong> Remember selected website settings or preferences.</motion.li>
                        <motion.li data-aos="fade-left" data-aos-delay="140" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}><strong>Marketing Cookies:</strong> May be used to measure advertising activity or support relevant marketing, if such technologies are implemented.</motion.li>
                    </motion.ul>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Where legally required, we will obtain appropriate consent before placing non-essential cookies or using similar tracking technologies.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        You can manage cookies through your browser settings and, where available, the cookie preference controls on our website.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Disabling certain cookies may affect website functionality.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8, fontStyle: 'italic' }}>
                        Note: The cookie categories above describe possible uses. The final published policy should identify the categories and tools actually used by the FlyTowards website.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="how-we-share-personal-information" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="how-we-share-personal-information" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        How We Share Personal Information
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        FlyTowards does not sell personal information to third parties.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        We may share personal information when reasonably necessary for legitimate business operations or where required by law.
                    </motion.p>

                    {[
                        {
                            title: 'Service Providers',
                            body: 'Authorized providers supporting website hosting, business email, cloud infrastructure, technical maintenance or other business operations.',
                        },
                        {
                            title: 'Professional Advisers',
                            body: 'Accountants, legal advisers or other professional service providers where access is necessary for legitimate business or compliance purposes.',
                        },
                        {
                            title: 'Project Delivery Partners',
                            body: 'Authorized contractors or service providers involved in agreed project activities, subject to appropriate confidentiality and data protection arrangements.',
                        },
                        {
                            title: 'Legal or Regulatory Authorities',
                            body: 'Government agencies, regulators, courts or other authorized parties when disclosure is required or permitted by applicable law.',
                        },
                    ].map(({ title, body }) => (
                        <motion.div data-aos="fade-up" key={title} style={{ marginBottom: '1rem', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)' }}>
                            <motion.h3 data-aos="fade-up" style={{ marginBottom: '0.35rem', color: '#1E1B4B', fontSize: '1.15rem', fontWeight: 750 }}>
                                {title}
                            </motion.h3>
                            <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                                {body}
                            </motion.p>
                        </motion.div>
                    ))}

                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        We seek to limit disclosures to information reasonably necessary for the relevant purpose.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="data-security" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="data-security" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Data Security
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        We recognize the importance of protecting personal and business information against unauthorized access, alteration, disclosure or loss.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '0.5rem', color: '#64748B', lineHeight: 1.8 }}>
                        Depending on the systems and information involved, our security measures may include:
                    </motion.p>
                    <motion.ul data-aos="fade-up" style={{ margin: '0 0 1.25rem', paddingLeft: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', color: '#64748B', lineHeight: 1.9 }}>
                        <motion.li data-aos="flip-up" data-aos-delay="210" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Access controls and user authentication</motion.li>
                        <motion.li data-aos="fade-right" data-aos-delay="0" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Appropriate restrictions on information access</motion.li>
                        <motion.li data-aos="zoom-in" data-aos-delay="70" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Secure communication and data transfer methods</motion.li>
                        <motion.li data-aos="fade-left" data-aos-delay="140" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>System maintenance and security updates</motion.li>
                        <motion.li data-aos="flip-up" data-aos-delay="210" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Backup and recovery arrangements</motion.li>
                        <motion.li data-aos="fade-right" data-aos-delay="0" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Monitoring and incident response procedures</motion.li>
                        <motion.li data-aos="zoom-in" data-aos-delay="70" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Confidentiality requirements for authorized personnel</motion.li>
                    </motion.ul>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        No website, application or electronic storage system can guarantee absolute security.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        We work to apply safeguards appropriate to the nature of the information and the risks involved.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="data-retention" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="data-retention" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Data Retention
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected or to meet applicable legal, contractual and operational requirements.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Retention periods may vary depending on the type of information.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        For example, enquiry information may be retained while we respond to your request or maintain a relevant business relationship. Project records may be retained according to applicable agreements and business obligations.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        When information is no longer required, we take appropriate steps to delete, anonymize or otherwise securely manage it, subject to applicable retention requirements.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="your-privacy-rights" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="your-privacy-rights" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Your Privacy Rights
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Depending on the applicable law and the nature of our relationship with you, you may have rights relating to your personal information.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '0.5rem', color: '#64748B', lineHeight: 1.8 }}>
                        These may include the ability to:
                    </motion.p>
                    <motion.ul data-aos="fade-up" style={{ margin: '0 0 1.25rem', paddingLeft: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', color: '#64748B', lineHeight: 1.9 }}>
                        <motion.li data-aos="fade-left" data-aos-delay="140" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Request information about how your personal data is processed.</motion.li>
                        <motion.li data-aos="flip-up" data-aos-delay="210" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Request access to eligible personal information.</motion.li>
                        <motion.li data-aos="fade-right" data-aos-delay="0" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Request correction or updating of inaccurate information.</motion.li>
                        <motion.li data-aos="zoom-in" data-aos-delay="70" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Request erasure of personal information where applicable.</motion.li>
                        <motion.li data-aos="fade-left" data-aos-delay="140" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Withdraw consent for processing based on consent, subject to applicable limitations.</motion.li>
                        <motion.li data-aos="flip-up" data-aos-delay="210" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Raise a privacy-related complaint or grievance.</motion.li>
                        <motion.li data-aos="fade-right" data-aos-delay="0" style={{ display: 'flex', alignItems: 'center', minHeight: '96px', padding: '1.25rem 1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '24px', boxShadow: '0 8px 20px rgba(30, 27, 75, 0.04)', color: '#1E1B4B', listStyle: 'none' }}>Exercise other rights available under applicable data protection laws.</motion.li>
                    </motion.ul>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        To make a privacy-related request, contact us using the details in the <strong>Contact Us</strong> section.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        We may need to verify your identity or authority before processing certain requests.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        We will respond in accordance with the requirements and timelines of applicable law.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="third-party-websites-services" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="third-party-websites-services" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Third-Party Websites and Services
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Our website may contain links to third-party websites, platforms or services.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        These websites operate independently and may have their own privacy policies and information-handling practices.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        FlyTowards is not responsible for the privacy practices of third-party websites that we do not control.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        We encourage you to review the privacy policies of external websites before providing personal information.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="international-data-transfers" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="international-data-transfers" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        International Data Transfers
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Some website, communication, hosting or software service providers may process or store information outside India.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Where personal information is transferred internationally, we will take steps required by applicable law and relevant contractual arrangements.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        The locations of processing, applicable safeguards and transfer requirements depend on the services and providers actually used.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="childrens-privacy" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="childrens-privacy" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Children's Privacy
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Our website and business services are primarily intended for business users and professional audiences.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        We do not intentionally seek to collect personal information directly from children through our general business enquiry channels.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        If we become aware that children's personal information has been collected in circumstances requiring additional protections, we will take appropriate steps consistent with applicable law.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        If you believe a child has submitted personal information to us, please contact us so that we can review the matter.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="client-software-projects" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="client-software-projects" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Our Role in Client Software Projects
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        FlyTowards provides software development and related technology services.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        In certain projects, clients may determine the purposes and means of processing personal information within their own applications or business systems.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        In such circumstances, FlyTowards may process information on behalf of a client, depending on the agreed services and contractual arrangements.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        The client's privacy policy, contractual terms and applicable law may govern how information is collected and used within the client's application.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        This Privacy Policy primarily addresses FlyTowards' own website and business activities. It does not automatically replace the privacy policies or notices required for software applications operated by our clients.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="legal-compliance" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="legal-compliance" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Legal Compliance
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        FlyTowards intends to handle personal information in accordance with applicable Indian laws and other data protection requirements relevant to its operations.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        These may include applicable provisions of the Information Technology Act, 2000, relevant rules and the Digital Personal Data Protection Act, 2023, together with rules and provisions in force at the relevant time.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        The legal requirements applicable to a particular processing activity depend on the nature of the information, the individuals concerned, the business relationship and the laws currently in effect.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        Where additional legal requirements apply, we will assess and address them as appropriate.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="changes-to-privacy-policy" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="changes-to-privacy-policy" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Changes to This Privacy Policy
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        We may update this Privacy Policy to reflect changes in our business operations, website technologies, services or applicable legal requirements.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        When we make changes, we will update the <strong>Last Updated</strong> date at the beginning of this page.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        Where required by law, we will provide additional notice or obtain appropriate consent for relevant changes.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8 }}>
                        We encourage visitors to review this page periodically.
                    </motion.p>
                </motion.section>

                <motion.section data-aos="fade-up" aria-labelledby="contact-us-privacy" style={{ marginTop: '3rem', padding: 0, background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <motion.h2 data-aos="fade-up" id="contact-us-privacy" style={{ marginBottom: '1.25rem', color: '#1E1B4B', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 850, paddingBottom: '0.85rem', borderBottom: '2px solid #FACC15' }}>
                        Contact Us
                    </motion.h2>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '1.25rem', color: '#64748B', lineHeight: 1.8 }}>
                        If you have questions about this Privacy Policy, how we handle personal information or your privacy rights, please contact us.
                    </motion.p>
                    <motion.div data-aos="fade-up" style={{ marginBottom: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', color: '#64748B', lineHeight: 1.7 }}>
                        <p style={{ margin: 0, minHeight: '76px', display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '20px' }}><strong>Business Name:</strong> FlyTowards Digital Innovation</p>
                        <p style={{ margin: 0, minHeight: '76px', display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '20px' }}><strong>Email:</strong> [Insert official privacy or business contact email]</p>
                        <p style={{ margin: 0, minHeight: '76px', display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '20px' }}><strong>Phone:</strong> [Insert official contact number, if applicable]</p>
                        <p style={{ margin: 0, minHeight: '76px', display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '20px' }}><strong>Business Address:</strong> [Insert verified registered or business address]</p>
                        <p style={{ margin: 0, minHeight: '76px', display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '20px' }}><strong>Website:</strong> [Insert verified official website URL]</p>
                        <p style={{ margin: 0, minHeight: '76px', display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '4px solid #EAB308', borderRadius: '20px' }}><strong>Privacy / Grievance Contact:</strong> [Insert designated contact details, where applicable]</p>
                    </motion.div>
                    <motion.p data-aos="fade-up" style={{ marginBottom: '2rem', color: '#64748B', lineHeight: 1.8 }}>
                        Please include sufficient information about your request so that we can review and respond appropriately.
                    </motion.p>
                    <motion.p data-aos="fade-up" style={{ color: '#64748B', lineHeight: 1.8, fontWeight: 650, textAlign: 'center' }}>
                        FlyTowards Digital Innovation — Respecting Your Privacy and Protecting Your Information.
                    </motion.p>
                </motion.section>
            </motion.article>
        </main>
    );
};

export default PrivacyPolicy;
