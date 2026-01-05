import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function AdminServicesPage() {
    const services = await prisma.service.findMany({
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { bookings: true } } },
    });

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Manage Services</h1>
                    <p className="text-gray-400">Add, edit, or remove cleaning services.</p>
                </div>
                <Link href="/admin/services/new" className="btn btn-primary">
                    Add Service
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="bg-gray-800 rounded-xl overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold">{service.name}</h3>
                                <span
                                    className={`badge ${service.isActive ? "badge-completed" : "badge-cancelled"
                                        }`}
                                >
                                    {service.isActive ? "Active" : "Inactive"}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                {service.shortDesc}
                            </p>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-primary-400 font-bold">
                                    ${Number(service.price).toFixed(2)} {service.priceUnit}
                                </span>
                                <span className="text-gray-500">{service._count.bookings} bookings</span>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 px-6 py-3 bg-gray-700/30 flex gap-4">
                            <Link
                                href={`/${service.slug}`}
                                className="text-gray-400 hover:text-white text-sm"
                                target="_blank"
                            >
                                View Page →
                            </Link>
                        </div>
                    </div>
                ))}
                {services.length === 0 && (
                    <div className="col-span-full bg-gray-800 rounded-xl p-12 text-center">
                        <p className="text-gray-400 mb-4">No services configured yet.</p>
                        <Link href="/admin/services/new" className="btn btn-primary">
                            Add Your First Service
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
