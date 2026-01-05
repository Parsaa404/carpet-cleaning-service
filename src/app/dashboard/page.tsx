import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function DashboardPage() {
    const session = await auth();

    // Fetch user's upcoming bookings
    const upcomingBookings = await prisma.booking.findMany({
        where: {
            userId: session?.user.id,
            scheduledDate: { gte: new Date() },
            status: { in: ["PENDING", "CONFIRMED"] },
        },
        include: {
            service: { select: { name: true, slug: true } },
        },
        orderBy: { scheduledDate: "asc" },
        take: 3,
    });

    // Get booking stats
    const totalBookings = await prisma.booking.count({
        where: { userId: session?.user.id },
    });

    const completedBookings = await prisma.booking.count({
        where: { userId: session?.user.id, status: "COMPLETED" },
    });

    return (
        <div>
            {/* Welcome Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Welcome back, {session?.user.name?.split(" ")[0]}!
                </h1>
                <p className="text-gray-600">
                    Here&apos;s an overview of your cleaning services.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{totalBookings}</p>
                            <p className="text-gray-500 text-sm">Total Bookings</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{completedBookings}</p>
                            <p className="text-gray-500 text-sm">Completed</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{upcomingBookings.length}</p>
                            <p className="text-gray-500 text-sm">Upcoming</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">Upcoming Bookings</h2>
                    <Link href="/dashboard/bookings" className="text-primary-600 text-sm font-medium hover:underline">
                        View All →
                    </Link>
                </div>
                <div className="p-6">
                    {upcomingBookings.length === 0 ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-gray-600 mb-4">No upcoming bookings</p>
                            <Link href="/contact" className="btn btn-primary">
                                Book a Cleaning
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {upcomingBookings.map((booking) => (
                                <div
                                    key={booking.id}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{booking.service.name}</p>
                                            <p className="text-sm text-gray-500">
                                                {new Date(booking.scheduledDate).toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                    month: "short",
                                                    day: "numeric",
                                                })}{" "}
                                                at {booking.scheduledTime}
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        className={`badge ${booking.status === "CONFIRMED"
                                                ? "badge-confirmed"
                                                : "badge-pending"
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <Link
                    href="/contact"
                    className="bg-gradient-primary text-white rounded-xl p-6 hover:opacity-90 transition-opacity"
                >
                    <h3 className="text-lg font-bold mb-2">Book a New Cleaning</h3>
                    <p className="text-primary-100 text-sm">
                        Schedule your next professional cleaning service.
                    </p>
                </Link>
                <Link
                    href="/dashboard/profile"
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors"
                >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Update Profile</h3>
                    <p className="text-gray-600 text-sm">
                        Keep your contact information up to date.
                    </p>
                </Link>
            </div>
        </div>
    );
}
