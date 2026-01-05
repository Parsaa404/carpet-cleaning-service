import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cleanpro.com";
const siteName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "CleanPro Services";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Professional Cleaning Services`,
    template: `%s | ${siteName}`,
  },
  description:
    "Professional carpet, sofa, and upholstery cleaning services. Expert technicians, eco-friendly products, and guaranteed satisfaction.",
  keywords: [
    "carpet cleaning",
    "sofa cleaning",
    "upholstery cleaning",
    "home cleaning",
    "professional cleaning",
    "deep cleaning",
    "furniture cleaning",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - Professional Cleaning Services`,
    description:
      "Professional carpet, sofa, and upholstery cleaning services. Expert technicians, eco-friendly products, and guaranteed satisfaction.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Professional Cleaning Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Professional Cleaning Services`,
    description:
      "Professional carpet, sofa, and upholstery cleaning services.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
  },
};

export const viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data for Local Business */}
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
