import Link from "next/link";
import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Professional Sofa & Couch Cleaning Services",
    description:
        "Expert sofa cleaning that restores your furniture to its original beauty. We remove stains, odors, and allergens from all fabric types. Book your sofa cleaning today!",
    keywords: [
        "sofa cleaning",
        "couch cleaning",
        "furniture cleaning",
        "upholstery cleaning",
        "fabric cleaning",
        "professional sofa cleaning",
    ],
    openGraph: {
        title: "Professional Sofa Cleaning Services | CleanPro",
        description: "Expert sofa cleaning that restores your furniture to its original beauty.",
        url: "/sofa-cleaning",
        type: "website",
    },
};

const features = [
    {
        title: "All Fabric Types",
        description: "Expert care for cotton, linen, velvet, leather, microfiber, and synthetic fabrics.",
    },
    {
        title: "Deep Stain Removal",
        description: "Specialized treatments for food spills, pet stains, ink, and other tough marks.",
    },
    {
        title: "Odor Neutralization",
        description: "Eliminate pet odors, smoke, and musty smells from your upholstery.",
    },
    {
        title: "Allergen Removal",
        description: "Remove dust mites, pet dander, and allergens for healthier indoor air.",
    },
    {
        title: "Color Restoration",
        description: "Bring back the vibrant colors of your sofas and cushions.",
    },
    {
        title: "Protective Treatment",
        description: "Optional fabric protector to guard against future stains and spills.",
    },
];

const pricing = [
    { type: "2-Seater Sofa", price: "$79" },
    { type: "3-Seater Sofa", price: "$99" },
    { type: "Sectional", price: "$149" },
    { type: "Armchair", price: "$49" },
];

export default function SofaCleaningPage() {
    return (
        <>
            <ServiceJsonLd
                name="Sofa Cleaning Service"
                description="Professional sofa and couch cleaning that removes stains, odors, and allergens. Safe for all fabric types."
                price="79"
                url="/sofa-cleaning"
            />

            {/* Hero */}
            <section className="relative bg-gradient-hero py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-200 rounded-full opacity-50 blur-3xl" />
                </div>
                <div className="container relative">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                            🛋️ Furniture Cleaning
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                            Professional <span className="text-gradient">Sofa Cleaning</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Restore your sofas and couches to their original beauty. Our expert
                            technicians handle all fabric types with care, removing stains and
                            extending furniture life.
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

            {/* Features */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <p className="section-subtitle">Our Expertise</p>
                        <h2 className="section-title">Complete Sofa Care</h2>
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

            {/* Pricing */}
            <section className="section bg-gradient-light">
                <div className="container">
                    <div className="section-header">
                        <p className="section-subtitle">Pricing</p>
                        <h2 className="section-title">Sofa Cleaning Prices</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {pricing.map((item) => (
                            <div key={item.type} className="card text-center p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.type}</h3>
                                <p className="text-3xl font-extrabold text-gradient">{item.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Book Sofa Cleaning
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-primary text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Love Your Sofa Again</h2>
                    <p className="text-xl text-primary-100 mb-8">Professional cleaning that brings furniture back to life!</p>
                    <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 btn-lg">
                        Schedule Now
                    </Link>
                </div>
            </section>
        </>
    );
}
