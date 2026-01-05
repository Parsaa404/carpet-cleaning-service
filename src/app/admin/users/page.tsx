import { prisma } from "@/lib/db";

export default async function AdminUsersPage() {
    const users = await prisma.user.findMany({
        where: { deletedAt: null },
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            createdAt: true,
            _count: { select: { bookings: true } },
        },
    });

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Manage Users</h1>
                <p className="text-gray-400">View and manage user accounts.</p>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-700/50">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">User</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Role</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Phone</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Bookings</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Joined</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-700/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-medium">{user.name || "No name"}</p>
                                        <p className="text-sm text-gray-400">{user.email}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`badge ${user.role === "ADMIN" ? "bg-primary-500/20 text-primary-400" : "bg-gray-600 text-gray-300"
                                                }`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-400">{user.phone || "-"}</td>
                                    <td className="px-6 py-4 text-gray-300">{user._count.bookings}</td>
                                    <td className="px-6 py-4 text-gray-400">
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
