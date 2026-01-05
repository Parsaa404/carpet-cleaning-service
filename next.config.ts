import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Output standalone for Docker
  output: "standalone",

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Environment variables available on client
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_BUSINESS_NAME: process.env.NEXT_PUBLIC_BUSINESS_NAME,
    NEXT_PUBLIC_BUSINESS_PHONE: process.env.NEXT_PUBLIC_BUSINESS_PHONE,
    NEXT_PUBLIC_BUSINESS_EMAIL: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
    NEXT_PUBLIC_BUSINESS_ADDRESS: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS,
  },
};

export default nextConfig;
