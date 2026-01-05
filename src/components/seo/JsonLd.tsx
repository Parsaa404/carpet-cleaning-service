interface JsonLdProps {
    type: "LocalBusiness" | "Service" | "WebPage";
    data: Record<string, unknown>;
}

export default function JsonLd({ type, data }: JsonLdProps) {
    const baseData = {
        "@context": "https://schema.org",
        "@type": type,
        ...data,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(baseData) }}
        />
    );
}

// Pre-configured JSON-LD for Local Business (used site-wide)
export function LocalBusinessJsonLd() {
    const businessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": process.env.NEXT_PUBLIC_SITE_URL,
        name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "CleanPro Services",
        description:
            "Professional carpet, sofa, and upholstery cleaning services for your home and business.",
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://cleanpro.com",
        telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+1-555-123-4567",
        email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "contact@cleanpro.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "123 Main Street",
            addressLocality: "City",
            addressRegion: "State",
            postalCode: "12345",
            addressCountry: "US",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: "40.7128",
            longitude: "-74.0060",
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "16:00",
            },
        ],
        priceRange: "$$",
        image: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/images/cleanpro-logo.png`,
        sameAs: [
            "https://facebook.com/cleanpro",
            "https://instagram.com/cleanpro",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Cleaning Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Carpet Cleaning",
                        description: "Professional deep carpet cleaning service",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Sofa Cleaning",
                        description: "Expert sofa and couch cleaning service",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Upholstery Cleaning",
                        description: "Complete upholstery and furniture cleaning",
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
        />
    );
}

// Service page JSON-LD
export function ServiceJsonLd({
    name,
    description,
    price,
    image,
    url,
}: {
    name: string;
    description: string;
    price?: string;
    image?: string;
    url: string;
}) {
    const serviceData = {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
            "@type": "LocalBusiness",
            name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "CleanPro Services",
            url: process.env.NEXT_PUBLIC_SITE_URL,
        },
        areaServed: {
            "@type": "City",
            name: "City, State",
        },
        ...(price && {
            offers: {
                "@type": "Offer",
                price,
                priceCurrency: "USD",
            },
        }),
        ...(image && { image }),
        url,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
        />
    );
}
