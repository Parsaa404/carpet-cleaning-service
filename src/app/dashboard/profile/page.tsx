import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import ProfileForm from "./ProfileForm";

export default async function ProfilePage() {
    const session = await auth();

    const user = await prisma.user.findUnique({
        where: { id: session?.user.id },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            address: true,
            createdAt: true,
        },
    });

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile Settings</h1>
                <p className="text-gray-600">Manage your account information.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Profile Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900">Personal Information</h2>
                        </div>
                        <div className="p-6">
                            <ProfileForm user={user} />
                        </div>
                    </div>
                </div>

                {/* Account Info Sidebar */}
                <div>
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Account Details</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="text-gray-900 font-medium">{user.email}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Member Since</p>
                                <p className="text-gray-900 font-medium">
                                    {new Date(user.createdAt).toLocaleDateString("en-US", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-6 mt-6">
                        <h3 className="text-amber-800 font-semibold mb-2">Need to change your email?</h3>
                        <p className="text-amber-700 text-sm">
                            Please contact support to update your email address for security purposes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
