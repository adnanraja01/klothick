const Section = ({ id, title, children }: any) => (
    <section id={id} className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h2>
        <div className="prose max-w-none text-sm sm:text-base">{children}</div>
    </section>
);

export default function PrivacyPolicy({ supportEmail = 'teamklothnick@gmail.com' }) {
    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 mx-auto">
            <header className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold">Privacy Policy</h1>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 ">
                <main className="col-span-2">
                    <Section id="intro" title="Klothnick — Privacy Policy">
                        <p>
                            <strong>Klothnick</strong> respects your privacy. This Privacy Policy explains how Klothnick
                            ("we", "us", "our") collects, uses, discloses, and protects personal information when you
                            use the Klothnick mobile application and related services (collectively, the "Apps"). By
                            using our Apps you agree to the terms of this Privacy Policy. If you do not agree, please do
                            not use the Apps.
                        </p>
                        <p className="mt-3">
                            This policy covers activities in India and other jurisdictions where our service providers
                            operate. By submitting personal information you consent to its transfer, processing, and
                            storage in those locations.
                        </p>
                    </Section>

                    <Section id="info-we-collect" title="1. Personal information we collect">
                        <p>
                            You can browse non-password-protected portions of the Apps without providing personal
                            information. When you create an account or use features we may collect information you
                            provide and technical data collected automatically.
                        </p>

                        <h4 className="mt-3 font-medium">Information you provide</h4>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Account details: name, phone, email, password, username</li>
                            <li>
                                Shipping & billing information: delivery address, billing address, payment method
                                (processed by third-party payment processors)
                            </li>
                            <li>Order & transaction data: items purchased, order dates, returns</li>
                            <li>Size & style preferences: measurements, favorite brands, saved items/wishlists</li>
                            <li>
                                Customer support messages, reviews, and uploaded photos (e.g., for tailoring requests)
                            </li>
                            <li>Marketing preferences</li>
                        </ul>

                        <h4 className="mt-3 font-medium">Information collected automatically</h4>
                        <ul className="list-disc ml-5 mt-2">
                            <li>
                                Device & usage data: device type, OS version, unique identifiers, crash reports,
                                analytics
                            </li>
                            <li>
                                Location (coarse or precise) only with permission, used for shipping and localized
                                offers
                            </li>
                            <li>Log data: IP address, app logs, screens viewed, referral sources</li>
                        </ul>

                        <p className="mt-3">
                            If you sign in via social providers (Google, Facebook), we may receive profile information
                            you permit. Our Apps are not intended for children under 13.
                        </p>
                    </Section>

                    <Section id="how-we-use" title="2. How we use and share your personal information">
                        <p>We use personal information to provide, maintain, and improve our services, including to:</p>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Process and fulfill orders, manage returns and refunds</li>
                            <li>Process payments and help prevent fraud</li>
                            <li>Provide customer support and communications</li>
                            <li>Personalize your shopping experience and product recommendations</li>
                            <li>
                                Send transactional messages (order confirmations, shipping updates) and marketing
                                communications where permitted
                            </li>
                            <li>Perform analytics and measure service performance</li>
                            <li>Comply with legal obligations and protect our rights</li>
                        </ul>

                        <p className="mt-3">
                            We may share information with service providers (payment processors, delivery partners,
                            cloud and analytics providers), law enforcement when required by law, or in connection with
                            a merger or sale. We do not sell personal information for monetary consideration.
                        </p>
                    </Section>

                    <Section id="cookies" title="3. Cookies and similar technologies">
                        <p>
                            We use cookies, mobile identifiers and similar technologies to maintain sessions, enable
                            functionality, personalize content, and measure usage. Most platforms allow you to reset
                            advertising identifiers or restrict tracking via device settings — note this may affect app
                            functionality.
                        </p>
                    </Section>

                    <Section id="links" title="4. Links to other websites and apps">
                        <p>
                            Our Apps may contain links to third-party sites and services. This Privacy Policy does not
                            cover those third parties — please review their privacy policies before sharing personal
                            information.
                        </p>
                    </Section>

                    <Section id="access" title="5. Access and correction of your personal information">
                        <p>
                            You can request access, correction, or deletion of the personal information we hold about
                            you. To make a verifiable request, contact our privacy team (see Contact section). We may
                            require additional information to verify your identity before processing such requests.
                        </p>
                    </Section>

                    <Section id="security" title="6. Security of your personal information">
                        <p>
                            We implement reasonable technical and organizational measures to protect personal
                            information. No transmission or storage mechanism is 100% secure — absolute security cannot
                            be guaranteed.
                        </p>
                    </Section>

                    <Section id="retention" title="7. Retention of your personal information">
                        <p>
                            We retain personal information only as long as necessary to provide services, comply with
                            legal obligations, resolve disputes, and enforce agreements. When no longer needed we will
                            securely delete or anonymize the data.
                        </p>
                    </Section>

                    <Section id="changes" title="8. Changes to this Privacy Policy">
                        <p>
                            We may update this Privacy Policy from time to time. When we make material changes we will
                            post the updated policy in the Apps and update the "last updated" date. Continued use after
                            changes means you accept the revised policy.
                        </p>
                    </Section>

                    <Section id="contact" title="9. How to contact us">
                        <p>If you have questions, privacy requests, or complaints, contact us at:</p>
                        <div className="mt-3 p-4 rounded-lg bg-gray-50 border border-gray-100">
                            <p className="text-sm">Klothnick</p>
                            <p className="text-sm">
                                Email:{' '}
                                <a className="font-medium hover:underline" href={`mailto:${supportEmail}`}>
                                    {supportEmail}
                                </a>
                            </p>
                        </div>

                        <p className="mt-3">We will attempt to respond to and resolve complaints promptly.</p>
                    </Section>
                </main>
            </div>
        </div>
    );
}
