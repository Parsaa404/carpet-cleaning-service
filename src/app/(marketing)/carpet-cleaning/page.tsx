import Link from "next/link";
import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Professional Carpet Cleaning Services",
    description:
        "Deep carpet cleaning that removes dirt, stains, allergens & odors. Our certified technicians use eco-friendly products for a healthier home. Book your carpet cleaning today!",
    keywords: [
        "carpet cleaning",
        "deep carpet cleaning",
        "carpet stain removal",
        "carpet shampoo",
        "professional carpet cleaning",
        "steam carpet cleaning",
    ],
    openGraph: {
        title: "Professional Carpet Cleaning Services | CleanPro",
        description:
            "Deep carpet cleaning that removes dirt, stains, allergens & odors.",
        url: "/carpet-cleaning",
        type: "website",
    },
};

const features = [
    {
        title: "Deep Extraction Cleaning",
        description: "Our hot water extraction method removes embedded dirt and allergens from deep within carpet fibers.",
    },
    {
        title: "Stain Removal",
        description: "Specialized treatments for tough stains including wine, coffee, pet accidents, and more.",
    },
    {
        title: "Odor Elimination",
        description: "Advanced deodorizing treatments that neutralize odors at the source, not just mask them.",
    },
    {
        title: "Fast Dry Time",
        description: "Our powerful extraction leaves carpets clean and dry within 4-6 hours.",
    },
    {
        title: "Safe for All Carpet Types",
        description: "Expert care for wool, synthetic, berber, plush, and all carpet varieties.",
    },
    {
        title: "Eco-Friendly Products",
        description: "Non-toxic, biodegradable cleaning solutions safe for children and pets.",
    },
];

const process = [
    { step: 1, title: "Inspection", description: "We assess your carpets and identify problem areas." },
    { step: 2, title: "Pre-Treatment", description: "Stains and high-traffic areas receive special treatment." },
    { step: 3, title: "Deep Cleaning", description: "Hot water extraction removes dirt and allergens." },
    { step: 4, title: "Final Inspection", description: "We walk through to ensure your satisfaction." },
];

const pricing = [
    { rooms: "1 Room", price: "$99", description: "Up to 200 sq ft" },
    { rooms: "2 Rooms", price: "$149", description: "Up to 400 sq ft" },
    { rooms: "3 Rooms", price: "$199", description: "Up to 600 sq ft" },
    { rooms: "Whole House", price: "Custom", description: "Contact for quote" },
];

export default function CarpetCleaningPage() {
    return (
        <>
            {/* JSON-LD for this service */}
            <ServiceJsonLd
                name="Carpet Cleaning Service"
                description="Professional deep carpet cleaning that removes dirt, stains, allergens and odors. Eco-friendly products safe for families and pets."
                price="99"
                url="/carpet-cleaning"
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-hero py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full opacity-50 blur-3xl" />
                </div>
                <div className="container relative">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                            🏠 Home Cleaning Services
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                            Professional <span className="text-gradient">Carpet Cleaning</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Restore your carpets to like-new condition with our deep cleaning
                            service. We remove embedded dirt, stubborn stains, and allergens
                            using eco-friendly products.
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

            {/* Features Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <p className="section-subtitle">What We Offer</p>
                        <h2 className="section-title">Complete Carpet Care</h2>
                        <p className="section-description">
                            Our comprehensive carpet cleaning service addresses all your needs.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="p-6 border border-gray-100 rounded-2xl hover:border-primary-200 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section bg-gradient-light">
                <div className="container">
                    <div className="section-header">
                        <p className="section-subtitle">Our Process</p>
                        <h2 className="section-title">How It Works</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <p className="section-subtitle">Transparent Pricing</p>
                        <h2 className="section-title">Simple, Honest Pricing</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {pricing.map((item) => (
                            <div key={item.rooms} className="card text-center p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.rooms}</h3>
                                <p className="text-3xl font-extrabold text-gradient mb-2">{item.price}</p>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Book Your Cleaning
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-primary text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready for Cleaner Carpets?</h2>
                    <p className="text-xl text-primary-100 mb-8">Book today and get 10% off your first service!</p>
                    <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 btn-lg">
                        Schedule Now
                    </Link>
                </div>
            </section>
        </>
    );
}
