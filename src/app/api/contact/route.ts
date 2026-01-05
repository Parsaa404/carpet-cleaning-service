import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { contactSchema } from "@/lib/validations";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limit";

export async function POST(request: Request) {
    try {
        // Rate limiting for form submissions
        const rateLimitResponse = checkRateLimit(request, RATE_LIMITS.form);
        if (rateLimitResponse) {
            return rateLimitResponse;
        }

        const body = await request.json();

        // Validate input with Zod
        const validationResult = contactSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    error: "Validation failed",
                    details: validationResult.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const { name, email, phone, service, message } = validationResult.data;

        // Create contact request
        const contactRequest = await prisma.contactRequest.create({
            data: {
                name,
                email,
                phone,
                service,
                message,
            },
        });

        return NextResponse.json(
            {
                message: "Thank you! We will get back to you soon.",
                id: contactRequest.id,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "An error occurred. Please try again later." },
            { status: 500 }
        );
    }
}
