import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { signOut } from "@/lib/auth";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    // Double-check admin role
    if (!session || session.user.role !== "ADMIN") {
        redirect("/dashboard");
    }

    const navItems = [
        { label: "Overview", href: "/admin", icon: "chart" },
        { label: "Services", href: "/admin/services", icon: "services" },
        { label: "Bookings", href: "/admin/bookings", icon: "calendar" },
        { label: "Users", href: "/admin/users", icon: "users" },
    ];

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Admin Header */}
            <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
                <div className="container py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <span className="font-bold text-white">CleanPro</span>
                        </Link>
                        <span className="text-gray-500">|</span>
                        <span className="text-primary-400 font-semibold">Admin Panel</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="text-gray-300 hover:text-white text-sm">
                            User Dashboard →
                        </Link>
                        <form
                            action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/" });
                            }}
                        >
                            <button type="submit" className="btn btn-sm bg-gray-700 text-white hover:bg-gray-600">
                                Sign Out
                            </button>
                        </form>
                    </div>
                </div>
            </header>

            <div className="container py-8">
                <div className="grid lg:grid-cols-[240px_1fr] gap-8">
                    {/* Sidebar Navigation */}
                    <aside>
                        <nav className="bg-gray-800 rounded-xl p-4 sticky top-24">
                            <ul className="space-y-1">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors font-medium"
                                        >
                                            {item.icon === "chart" && (
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            )}
                                            {item.icon === "services" && (
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            )}
                                            {item.icon === "calendar" && (
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            )}
                                            {item.icon === "users" && (
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                                </svg>
                                            )}
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="text-white">{children}</main>
                </div>
            </div>
        </div>
    );
}
