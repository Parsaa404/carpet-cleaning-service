import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cleanpro.com";

    // Static pages
    const staticPages = [
        "",
        "/carpet-cleaning",
        "/sofa-cleaning",
        "/upholstery-cleaning",
        "/contact",
        "/about",
        "/login",
        "/register",
    ];

    return staticPages.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path.includes("cleaning") ? 0.9 : 0.7,
    }));
}
