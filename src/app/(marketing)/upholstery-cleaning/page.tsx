import Link from "next/link";
import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Professional Upholstery & Home Cleaning Services",
    description:
        "Complete upholstery cleaning for chairs, ottomans, cushions, curtains, and more. Eco-friendly products safe for your family. Book your upholstery cleaning today!",
    keywords: [
        "upholstery cleaning",
        "furniture cleaning",
        "chair cleaning",
        "curtain cleaning",
        "fabric cleaning",
        "home cleaning",
    ],
    openGraph: {
        title: "Professional Upholstery Cleaning Services | CleanPro",
        description: "Complete upholstery cleaning for all your home furnishings.",
        url: "/upholstery-cleaning",
        type: "website",
    },
};

const services = [
    { name: "Dining Chairs", price: "From $25/chair" },
    { name: "Armchairs", price: "From $49" },
    { name: "Ottomans", price: "From $35" },
    { name: "Cushions", price: "From $15/cushion" },
    { name: "Curtains", price: "From $5/sqft" },
    { name: "Mattress", price: "From $79" },
];

const features = [
    {
        title: "All Furniture Types",
        description: "From chairs to curtains, we clean all upholstered items in your home.",
    },
    {
        title: "Safe Cleaning Solutions",
        description: "Non-toxic products that are safe for children, pets, and sensitive individuals.",
    },
    {
        title: "On-Site Service",
        description: "We come to you with all equipment needed for a thorough cleaning.",
    },
    {
        title: "Same-Day Service",
        description: "Last-minute cleaning? We offer same-day appointments when available.",
    },
];

export default function UpholsteryCleaningPage() {
    return (
        <>
            <ServiceJsonLd
                name="Upholstery Cleaning Service"
                description="Professional upholstery cleaning for chairs, ottomans, cushions, curtains, and all home furnishings."
                price="25"
                url="/upholstery-cleaning"
            />

            {/* Hero */}
            <section className="relative bg-gradient-hero py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-100 rounded-full opacity-50 blur-3xl" />
                </div>
                <div className="container relative">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                            🪑 Complete Home Care
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                            <span className="text-gradient">Upholstery</span> & Home Cleaning
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            From dining chairs to curtains, we provide comprehensive cleaning
                            for all upholstered items in your home. Refresh your entire living
                            space with our expert service.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Get Free Quote
                            </Link>
                            <a href="tel:+15551234567" className="btn btn-secondary btn-lg">
                                Call: +1-555-123-4567
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <p className="section-subtitle">What We Clean</p>
                        <h2 className="section-title">Upholstery Services</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {services.map((service) => (
                            <div key={service.name} className="card text-center p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-primary-600 font-semibold">{service.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section bg-gradient-light">
                <div className="container">
                    <div className="section-header">
                        <p className="section-subtitle">Why Choose Us</p>
                        <h2 className="section-title">Expert Upholstery Care</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Book Upholstery Cleaning
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-primary text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Refresh Your Entire Home</h2>
                    <p className="text-xl text-primary-100 mb-8">Bundle services and save up to 20%!</p>
                    <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 btn-lg">
                        Get Bundle Quote
                    </Link>
                </div>
            </section>
        </>
    );
}
