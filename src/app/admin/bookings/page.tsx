import { prisma } from "@/lib/db";

export default async function AdminBookingsPage() {
    const bookings = await prisma.booking.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            user: { select: { id: true, name: true, email: true } },
            service: { select: { name: true } },
        },
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
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Manage Bookings</h1>
                <p className="text-gray-400">View and manage all customer bookings.</p>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-700/50">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Customer</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Service</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Date & Time</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Address</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Status</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {bookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-700/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-medium">{booking.user.name}</p>
                                        <p className="text-sm text-gray-400">{booking.user.email}</p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">{booking.service.name}</td>
                                    <td className="px-6 py-4">
                                        <p className="text-gray-300">
                                            {new Date(booking.scheduledDate).toLocaleDateString()}
                                        </p>
                                        <p className="text-sm text-gray-400">{booking.scheduledTime}</p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-400 max-w-[200px] truncate">
                                        {booking.address}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`badge ${statusColors[booking.status]}`}>
                                            {booking.status.replace("_", " ")}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium">
                                        ${Number(booking.totalPrice).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                            {bookings.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                                        No bookings found
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
