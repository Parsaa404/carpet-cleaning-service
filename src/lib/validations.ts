import { z } from "zod";

// ============================================
// AUTH VALIDATIONS
// ============================================

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address")
        .transform((v) => v.toLowerCase().trim()),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),
});

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(1, "Name is required")
            .min(2, "Name must be at least 2 characters")
            .max(100, "Name is too long")
            .transform((v) => v.trim()),
        email: z
            .string()
            .min(1, "Email is required")
            .email("Invalid email address")
            .transform((v) => v.toLowerCase().trim()),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must be at least 8 characters")
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                "Password must contain at least one uppercase letter, one lowercase letter, and one number"
            ),
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

// ============================================
// BOOKING VALIDATIONS
// ============================================

export const bookingSchema = z.object({
    serviceId: z.string().min(1, "Please select a service"),
    scheduledDate: z
        .string()
        .min(1, "Date is required")
        .refine((date) => {
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return selectedDate >= today;
        }, "Date must be today or in the future"),
    scheduledTime: z
        .string()
        .min(1, "Time is required")
        .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
    address: z
        .string()
        .min(1, "Address is required")
        .min(10, "Please provide a complete address")
        .max(500, "Address is too long")
        .transform((v) => v.trim()),
    notes: z
        .string()
        .max(1000, "Notes are too long")
        .optional()
        .transform((v) => v?.trim()),
});

// ============================================
// CONTACT FORM VALIDATIONS
// ============================================

export const contactSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name is too long")
        .transform((v) => v.trim()),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address")
        .transform((v) => v.toLowerCase().trim()),
    phone: z
        .string()
        .optional()
        .transform((v) => v?.trim())
        .refine(
            (v) => !v || /^[\d\s\-+()]+$/.test(v),
            "Invalid phone number format"
        ),
    service: z.string().optional(),
    message: z
        .string()
        .min(1, "Message is required")
        .min(10, "Please provide more details")
        .max(2000, "Message is too long")
        .transform((v) => v.trim()),
});

// ============================================
// SERVICE VALIDATIONS (Admin)
// ============================================

export const serviceSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(100, "Name is too long")
        .transform((v) => v.trim()),
    slug: z
        .string()
        .min(1, "Slug is required")
        .max(100, "Slug is too long")
        .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens")
        .transform((v) => v.toLowerCase().trim()),
    description: z
        .string()
        .min(1, "Description is required")
        .min(50, "Description should be at least 50 characters for SEO")
        .max(5000, "Description is too long")
        .transform((v) => v.trim()),
    shortDesc: z
        .string()
        .min(1, "Short description is required")
        .max(200, "Short description is too long")
        .transform((v) => v.trim()),
    price: z
        .number()
        .positive("Price must be positive")
        .max(100000, "Price is too high"),
    priceUnit: z.string().min(1, "Price unit is required").max(50),
    duration: z
        .number()
        .int("Duration must be a whole number")
        .positive("Duration must be positive")
        .max(1440, "Duration cannot exceed 24 hours"),
    image: z.string().url("Invalid image URL").optional().or(z.literal("")),
    isActive: z.boolean().default(true),
});

// ============================================
// PROFILE UPDATE VALIDATION
// ============================================

export const profileUpdateSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name is too long")
        .transform((v) => v.trim()),
    phone: z
        .string()
        .optional()
        .transform((v) => v?.trim())
        .refine(
            (v) => !v || /^[\d\s\-+()]+$/.test(v),
            "Invalid phone number format"
        ),
    address: z
        .string()
        .max(500, "Address is too long")
        .optional()
        .transform((v) => v?.trim()),
});

// ============================================
// TYPE EXPORTS
// ============================================

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type ServiceInput = z.infer<typeof serviceSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
