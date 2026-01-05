"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [generalError, setGeneralError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear field error on change
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setGeneralError("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.details) {
                    // Validation errors from Zod
                    const fieldErrors: Record<string, string> = {};
                    for (const [key, value] of Object.entries(data.details)) {
                        fieldErrors[key] = (value as string[])[0];
                    }
                    setErrors(fieldErrors);
                } else {
                    setGeneralError(data.error || "Registration failed");
                }
                return;
            }

            // Success - redirect to login
            router.push("/login?registered=true");
        } catch {
            setGeneralError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block">
                        <h1 className="text-3xl font-bold text-gradient">CleanPro</h1>
                    </Link>
                    <p className="text-gray-600 mt-2">Create your account to get started.</p>
                </div>

                {/* Register Card */}
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            {/* General Error Message */}
                            {generalError && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                                    {generalError}
                                </div>
                            )}

                            {/* Name Field */}
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`form-input ${errors.name ? "error" : ""}`}
                                    placeholder="John Doe"
                                    required
                                    autoComplete="name"
                                />
                                {errors.name && <p className="form-error">{errors.name}</p>}
                            </div>

                            {/* Email Field */}
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`form-input ${errors.email ? "error" : ""}`}
                                    placeholder="you@example.com"
                                    required
                                    autoComplete="email"
                                />
                                {errors.email && <p className="form-error">{errors.email}</p>}
                            </div>

                            {/* Password Field */}
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`form-input ${errors.password ? "error" : ""}`}
                                    placeholder="••••••••"
                                    required
                                    autoComplete="new-password"
                                    minLength={8}
                                />
                                {errors.password && (
                                    <p className="form-error">{errors.password}</p>
                                )}
                                <p className="text-xs text-gray-500 mt-1">
                                    Must be 8+ characters with uppercase, lowercase, and number
                                </p>
                            </div>

                            {/* Confirm Password Field */}
                            <div className="form-group">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`form-input ${errors.confirmPassword ? "error" : ""}`}
                                    placeholder="••••••••"
                                    required
                                    autoComplete="new-password"
                                />
                                {errors.confirmPassword && (
                                    <p className="form-error">{errors.confirmPassword}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="spinner" />
                                        Creating Account...
                                    </>
                                ) : (
                                    "Create Account"
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Card Footer */}
                    <div className="card-footer text-center">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-primary-600 font-semibold hover:text-primary-700"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Back to Home */}
                <p className="text-center mt-6">
                    <Link
                        href="/"
                        className="text-gray-500 text-sm hover:text-gray-700 inline-flex items-center gap-1"
                    >
                        ← Back to Home
                    </Link>
                </p>
            </div>
        </div>
    );
}
