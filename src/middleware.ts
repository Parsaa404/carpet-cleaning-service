import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const { pathname } = req.nextUrl;
    const isLoggedIn = !!req.auth;
    const userRole = req.auth?.user?.role;

    // Public routes - no authentication required
    const publicRoutes = [
        "/",
        "/login",
        "/register",
        "/carpet-cleaning",
        "/sofa-cleaning",
        "/upholstery-cleaning",
        "/contact",
        "/about",
    ];

    // Check if current path is public
    const isPublicRoute = publicRoutes.some(
        (route) => pathname === route || pathname.startsWith("/api/auth")
    );

    // Allow public routes
    if (isPublicRoute) {
        // Redirect logged-in users away from auth pages
        if (isLoggedIn && (pathname === "/login" || pathname === "/register")) {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
        return NextResponse.next();
    }

    // Protected: Dashboard routes
    if (pathname.startsWith("/dashboard")) {
        if (!isLoggedIn) {
            const loginUrl = new URL("/login", req.url);
            loginUrl.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }
        return NextResponse.next();
    }

    // Protected: Admin routes - require ADMIN role
    if (pathname.startsWith("/admin")) {
        if (!isLoggedIn) {
            const loginUrl = new URL("/login", req.url);
            loginUrl.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }

        if (userRole !== "ADMIN") {
            // User is logged in but not admin - redirect to dashboard
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }

        return NextResponse.next();
    }

    // Protected: API routes (except public ones)
    if (pathname.startsWith("/api")) {
        // Allow auth API routes
        if (pathname.startsWith("/api/auth")) {
            return NextResponse.next();
        }

        // Allow contact form API (public)
        if (pathname === "/api/contact") {
            return NextResponse.next();
        }

        // Check admin-only API routes
        if (
            pathname.startsWith("/api/admin") ||
            pathname.startsWith("/api/services") ||
            pathname.startsWith("/api/users")
        ) {
            if (!isLoggedIn || userRole !== "ADMIN") {
                return NextResponse.json(
                    { error: "Unauthorized" },
                    { status: 401 }
                );
            }
        }

        // Other API routes require authentication
        if (!isLoggedIn) {
            return NextResponse.json(
                { error: "Authentication required" },
                { status: 401 }
            );
        }
    }

    return NextResponse.next();
});

// Matcher configuration - which routes to run middleware on
export const config = {
    matcher: [
        /*
         * Match all request paths except for static files:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt
         * - Public images
         */
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)",
    ],
};
