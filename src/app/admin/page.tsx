import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function AdminDashboard() {
    // Fetch stats
    const [totalUsers, totalBookings, pendingBookings, totalRevenue, recentBookings] =
        await Promise.all([
            prisma.user.count({ where: { deletedAt: null } }),
            prisma.booking.count(),
            prisma.booking.count({ where: { status: "PENDING" } }),
            prisma.booking.aggregate({
                where: { status: "COMPLETED" },
                _sum: { totalPrice: true },
            }),
            prisma.booking.findMany({
                take: 5,
                orderBy: { createdAt: "desc" },
                include: {
                    user: { select: { name: true, email: true } },
                    service: { select: { name: true } },
                },
            }),
        ]);

    const stats = [
        { label: "Total Users", value: totalUsers, icon: "users", color: "primary" },
        { label: "Total Bookings", value: totalBookings, icon: "calendar", color: "green" },
        { label: "Pending Bookings", value: pendingBookings, icon: "clock", color: "amber" },
        {
            label: "Total Revenue",
            value: `$${totalRevenue._sum.totalPrice?.toNumber().toFixed(2) || "0.00"}`,
            icon: "money",
            color: "blue",
        },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-gray-400">Overview of your business metrics.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center gap-4">
                            <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color === "primary"
                                        ? "bg-primary-500/20 text-primary-400"
                                        : stat.color === "green"
                                            ? "bg-green-500/20 text-green-400"
                                            : stat.color === "amber"
                                                ? "bg-amber-500/20 text-amber-400"
                                                : "bg-blue-500/20 text-blue-400"
                                    }`}
                            >
                                {stat.icon === "users" && (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z" />
                                    </svg>
                                )}
                                {stat.icon === "calendar" && (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                )}
                                {stat.icon === "clock" && (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )}
                                {stat.icon === "money" && (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )}
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{stat.value}</p>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Bookings */}
            <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-gray-700 flex items-center justify-between">
                    <h2 className="text-lg font-bold">Recent Bookings</h2>
                    <Link href="/admin/bookings" className="text-primary-400 text-sm hover:underline">
                        View All →
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-700/50">
                            <tr>
                                <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">Customer</th>
                                <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">Service</th>
                                <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">Status</th>
                                <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {recentBookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-700/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-medium">{booking.user.name}</p>
                                        <p className="text-sm text-gray-400">{booking.user.email}</p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">{booking.service.name}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`badge ${booking.status === "COMPLETED"
                                                    ? "badge-completed"
                                                    : booking.status === "CONFIRMED"
                                                        ? "badge-confirmed"
                                                        : booking.status === "CANCELLED"
                                                            ? "badge-cancelled"
                                                            : "badge-pending"
                                                }`}
                                        >
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-400">
                                        {new Date(booking.scheduledDate).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                            {recentBookings.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-gray-400">
                                        No bookings yet
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
