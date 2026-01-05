"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
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
                    setErrors({ general: data.error || "Something went wrong" });
                }
                return;
            }

            setIsSubmitted(true);
            setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        } catch {
            setErrors({ general: "Network error. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <h2 className="text-xl font-bold text-gray-900">Send Us a Message</h2>
                <p className="text-gray-600 text-sm mt-1">
                    Fill out the form below and we&apos;ll get back to you shortly.
                </p>
            </div>
            <div className="card-body">
                {isSubmitted ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                        <p className="text-gray-600 mb-6">
                            We&apos;ve received your message and will get back to you within 24 hours.
                        </p>
                        <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary">
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {errors.general && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                                {errors.general}
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Your Name *</label>
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

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`form-input ${errors.email ? "error" : ""}`}
                                    placeholder="you@example.com"
                                    required
                                />
                                {errors.email && <p className="form-error">{errors.email}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="+1-555-123-4567"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="service" className="form-label">Service</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="form-select"
                            >
                                <option value="">Select a service</option>
                                <option value="carpet-cleaning">Carpet Cleaning</option>
                                <option value="sofa-cleaning">Sofa Cleaning</option>
                                <option value="upholstery-cleaning">Upholstery Cleaning</option>
                                <option value="bundle">Multiple Services</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`form-textarea ${errors.message ? "error" : ""}`}
                                placeholder="Tell us about your cleaning needs..."
                                rows={5}
                                required
                            />
                            {errors.message && <p className="form-error">{errors.message}</p>}
                        </div>

                        <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <span className="spinner" />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
