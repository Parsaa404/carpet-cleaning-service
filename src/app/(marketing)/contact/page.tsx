import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact Us - Get a Free Quote",
    description:
        "Contact CleanPro for professional cleaning services. Get a free quote for carpet, sofa, and upholstery cleaning. We respond within 24 hours.",
    openGraph: {
        title: "Contact CleanPro - Get a Free Quote",
        description: "Get in touch for professional cleaning services.",
        url: "/contact",
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-gradient-hero py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                            Contact <span className="text-gradient">Us</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Ready to book a cleaning or have questions? Get in touch with us
                            and we&apos;ll respond within 24 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Whether you need a quote, have questions about our services, or
                                want to schedule an appointment, we&apos;re here to help.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">+1-555-123-4567</p>
                                        <p className="text-sm text-gray-500">Mon-Sat, 8am-6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Email</h3>
                                        <p className="text-gray-600">contact@cleanpro.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Location</h3>
                                        <p className="text-gray-600">123 Main Street, City, State 12345</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
                                <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Monday - Friday</span>
                                        <span className="text-gray-900 font-medium">8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Saturday</span>
                                        <span className="text-gray-900 font-medium">9:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Sunday</span>
                                        <span className="text-gray-900 font-medium">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
}
