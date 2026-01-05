"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Invalid email or password");
            } else {
                router.push(callbackUrl);
                router.refresh();
            }
        } catch {
            setError("An error occurred. Please try again.");
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
                    <p className="text-gray-600 mt-2">Welcome back! Sign in to your account.</p>
                </div>

                {/* Login Card */}
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            {/* Error Message */}
                            {error && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Email Field */}
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-input"
                                    placeholder="you@example.com"
                                    required
                                    autoComplete="email"
                                />
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-input"
                                    placeholder="••••••••"
                                    required
                                    autoComplete="current-password"
                                    minLength={8}
                                />
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
                                        Signing in...
                                    </>
                                ) : (
                                    "Sign In"
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Card Footer */}
                    <div className="card-footer text-center">
                        <p className="text-gray-600 text-sm">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/register"
                                className="text-primary-600 font-semibold hover:text-primary-700"
                            >
                                Create one
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
