const Section = ({ id, title, children }: any) => (
    <section id={id} className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h2>
        <div className="prose max-w-none text-sm sm:text-base">{children}</div>
    </section>
);

export default function TermsPage() {
    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            <div className=" mx-auto p-6 sm:p-10">
                <header className="mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold">Terms of Use</h1>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <main className="col-span-2">
                        <Section id="intro" title="Klothnick — Terms of Use">
                            <p>
                                Welcome to <strong>Klothnick</strong>. By accessing or using the Klothnick mobile app or
                                related services ("App"), you agree to be bound by these Terms of Use. If you do not
                                agree, you must immediately stop using the App.
                            </p>
                            <p className="mt-3">
                                These Terms govern your use of our clothing shopping platform, including browsing
                                products, placing orders, making payments, managing your account, and interacting with
                                support.
                            </p>
                        </Section>

                        <Section id="user-info" title="1. Collection of User Information">
                            <p>
                                Information collected through Klothnick is governed by our Privacy Policy. To access
                                certain features like placing orders, saving favorites, or managing your profile, you
                                may need to create an account and provide accurate information.
                            </p>
                        </Section>

                        <Section id="ip" title="2. Copyright & Intellectual Property">
                            <p>
                                All content, product images, branding, UI designs, text, and technology on the Klothnick
                                App are owned or licensed by Klothnick and protected by Indian and international IP
                                laws. You may not copy, reproduce, modify, or distribute any content without written
                                permission.
                            </p>
                        </Section>

                        <Section id="trademarks" title="3. Trademarks">
                            <p>
                                The Klothnick name, logo, and associated marks are trademarks of Klothnick. Nothing in
                                the App grants you rights to use these trademarks without explicit written permission.
                            </p>
                        </Section>

                        <Section id="warranty" title="4. Disclaimer of Warranties">
                            <p>
                                The App and all content, products, and services are provided on an "as is" and "as
                                available" basis. Klothnick does not guarantee uninterrupted access, error‑free
                                operation, or accuracy of product listings. You use the App at your own risk.
                            </p>
                        </Section>

                        <Section id="liability" title="5. Limitation of Liability">
                            <p>
                                To the maximum extent permitted by law, Klothnick is not liable for indirect,
                                incidental, punitive, or consequential damages arising from your use of the App or
                                purchase of any product.
                            </p>
                        </Section>

                        <Section id="conduct" title="6. Prohibited Activities & User Obligations">
                            <p>When using Klothnick, you agree not to:</p>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Violate laws or regulations</li>
                                <li>Post harmful, illegal, or abusive content</li>
                                <li>Use bots, scrapers, or automated tools</li>
                                <li>Interfere with App functionality or security</li>
                                <li>Submit false orders or payment information</li>
                                <li>Misrepresent your identity</li>
                            </ul>
                        </Section>

                        <Section id="payments" title="7. Payments & Orders">
                            <p>
                                By placing an order, you authorize Klothnick and its payment partners to process
                                payments using your selected payment method. You confirm that you are authorized to use
                                that payment method.
                            </p>
                        </Section>

                        <Section id="accounts" title="8. User Accounts">
                            <p>
                                You must provide accurate information during registration and maintain the
                                confidentiality of your login credentials. You are responsible for all activity
                                occurring under your account.
                            </p>
                        </Section>

                        <Section id="links" title="9. Links to Third‑Party Sites">
                            <p>
                                Klothnick may link to third‑party websites or services. We are not responsible for the
                                content or policies of these external sites. Access them at your own risk.
                            </p>
                        </Section>

                        <Section id="termination" title="10. Termination">
                            <p>
                                Klothnick may suspend or terminate your access to the App at any time, especially for
                                violations of these Terms. Upon termination, you must stop all use of the App.
                            </p>
                        </Section>

                        <Section id="changes" title="11. Changes to Terms">
                            <p>
                                Klothnick may update these Terms at any time. New terms become effective once posted.
                                Continued use of the App indicates acceptance of the updated Terms.
                            </p>
                        </Section>

                        <Section id="law" title="12. Governing Law">
                            <p>
                                These Terms are governed by the laws of India, and disputes will be handled in courts
                                under the jurisdiction of Klothnick's registered location.
                            </p>
                        </Section>

                        <Section id="indemnity" title="13. Indemnification">
                            <p>
                                You agree to indemnify and hold harmless Klothnick, its employees, and partners from any
                                claims arising from your use of the App or violation of these Terms.
                            </p>
                        </Section>
                    </main>
                </div>
            </div>
        </div>
    );
}
