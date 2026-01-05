import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Header() {
    const session = await auth();

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 font-sans tracking-tight">CleanPro</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {["Carpet Cleaning", "Sofa Cleaning", "Upholstery"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(" ", "-")}`}
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative group"
                        >
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-4">
                        {session?.user ? (
                            <>
                                <Link
                                    href={session.user.role === "ADMIN" ? "/admin" : "/dashboard"}
                                    className="px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Dashboard
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                                    Sign In
                                </Link>
                                <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5">
                                    Book Now
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}
