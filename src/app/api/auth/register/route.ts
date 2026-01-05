import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { registerSchema } from "@/lib/validations";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limit";

export async function POST(request: Request) {
    try {
        // Rate limiting for auth endpoints
        const rateLimitResponse = checkRateLimit(request, RATE_LIMITS.auth);
        if (rateLimitResponse) {
            return rateLimitResponse;
        }

        const body = await request.json();

        // Validate input with Zod
        const validationResult = registerSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    error: "Validation failed",
                    details: validationResult.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const { name, email, password } = validationResult.data;

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "An account with this email already exists" },
                { status: 409 }
            );
        }

        // Hash password with bcrypt (12 rounds for security)
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: "USER", // Default role
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
            },
        });

        return NextResponse.json(
            {
                message: "Account created successfully",
                user,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "An error occurred during registration" },
            { status: 500 }
        );
    }
}
