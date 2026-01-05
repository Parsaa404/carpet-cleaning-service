import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function BookingsPage() {
    const session = await auth();

    const bookings = await prisma.booking.findMany({
        where: { userId: session?.user.id },
        include: {
            service: { select: { name: true, slug: true, shortDesc: true } },
        },
        orderBy: { scheduledDate: "desc" },
    });

    const statusColors: Record<string, string> = {
        PENDING: "badge-pending",
        CONFIRMED: "badge-confirmed",
        IN_PROGRESS: "badge-confirmed",
        COMPLETED: "badge-completed",
        CANCELLED: "badge-cancelled",
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">My Bookings</h1>
                    <p className="text-gray-600">View and manage your cleaning appointments.</p>
                </div>
                <Link href="/contact" className="btn btn-primary">
                    Book New Cleaning
                </Link>
            </div>

            {bookings.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">No Bookings Yet</h2>
                    <p className="text-gray-600 mb-6">
                        You haven&apos;t made any bookings yet. Start by scheduling your first cleaning!
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Book Your First Cleaning
                    </Link>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Service</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date & Time</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Address</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-semibold text-gray-900">{booking.service.name}</p>
                                                <p className="text-sm text-gray-500 truncate max-w-[200px]">
                                                    {booking.service.shortDesc}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-gray-900">
                                                {new Date(booking.scheduledDate).toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </p>
                                            <p className="text-sm text-gray-500">{booking.scheduledTime}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-gray-900 truncate max-w-[200px]">{booking.address}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`badge ${statusColors[booking.status]}`}>
                                                {booking.status.replace("_", " ")}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-semibold text-gray-900">
                                                ${Number(booking.totalPrice).toFixed(2)}
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
