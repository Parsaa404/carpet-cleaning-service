import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { signOut } from "@/lib/auth";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    const navItems = [
        { label: "Dashboard", href: "/dashboard", icon: "home" },
        { label: "My Bookings", href: "/dashboard/bookings", icon: "calendar" },
        { label: "Profile", href: "/dashboard/profile", icon: "user" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Dashboard Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="container py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <span className="font-bold text-gray-900">CleanPro</span>
                        </Link>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-600 font-medium">Dashboard</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                            Welcome, <span className="font-semibold">{session.user.name}</span>
                        </span>
                        <form
                            action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/" });
                            }}
                        >
                            <button type="submit" className="btn btn-secondary btn-sm">
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
                        <nav className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
                            <ul className="space-y-1">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors font-medium"
                                        >
                                            {item.icon === "home" && (
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                            )}
                                            {item.icon === "calendar" && (
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            )}
                                            {item.icon === "user" && (
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            )}
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {session.user.role === "ADMIN" && (
                                <>
                                    <hr className="my-4 border-gray-200" />
                                    <Link
                                        href="/admin"
                                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors font-medium"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Admin Panel
                                    </Link>
                                </>
                            )}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}
