"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProfileFormProps {
    user: {
        id: string;
        name: string | null;
        email: string;
        phone: string | null;
        address: string | null;
    };
}

export default function ProfileForm({ user }: ProfileFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
        setSuccess(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setIsLoading(true);

        try {
            const response = await fetch("/api/profile", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.details) {
                    const fieldErrors: Record<string, string> = {};
                    for (const [key, value] of Object.entries(data.details)) {
                        fieldErrors[key] = (value as string[])[0];
                    }
                    setErrors(fieldErrors);
                } else {
                    setErrors({ general: data.error || "Update failed" });
                }
                return;
            }

            setSuccess(true);
            router.refresh();
        } catch {
            setErrors({ general: "Network error. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {errors.general && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    {errors.general}
                </div>
            )}

            {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                    Profile updated successfully!
                </div>
            )}

            <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? "error" : ""}`}
                    placeholder="John Doe"
                    required
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? "error" : ""}`}
                    placeholder="+1-555-123-4567"
                />
                {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="123 Main Street, City, State 12345"
                    rows={3}
                />
                {errors.address && <p className="form-error">{errors.address}</p>}
            </div>

            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading ? (
                    <>
                        <span className="spinner" />
                        Saving...
                    </>
                ) : (
                    "Save Changes"
                )}
            </button>
        </form>
    );
}
