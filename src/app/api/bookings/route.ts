import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { bookingSchema } from "@/lib/validations";
import { auth } from "@/lib/auth";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limit";

// GET - Fetch user's bookings
export async function GET() {
    try {
        const session = await auth();

        if (!session?.user) {
            return NextResponse.json(
                { error: "Authentication required" },
                { status: 401 }
            );
        }

        const bookings = await prisma.booking.findMany({
            where: { userId: session.user.id },
            include: {
                service: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        shortDesc: true,
                        image: true,
                    },
                },
            },
            orderBy: { scheduledDate: "desc" },
        });

        return NextResponse.json({ bookings });
    } catch (error) {
        console.error("Fetch bookings error:", error);
        return NextResponse.json(
            { error: "Failed to fetch bookings" },
            { status: 500 }
        );
    }
}

// POST - Create a new booking
export async function POST(request: Request) {
    try {
        // Rate limiting
        const rateLimitResponse = checkRateLimit(request, RATE_LIMITS.form);
        if (rateLimitResponse) {
            return rateLimitResponse;
        }

        const session = await auth();

        if (!session?.user) {
            return NextResponse.json(
                { error: "Authentication required" },
                { status: 401 }
            );
        }

        const body = await request.json();

        // Validate input
        const validationResult = bookingSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    error: "Validation failed",
                    details: validationResult.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const { serviceId, scheduledDate, scheduledTime, address, notes } =
            validationResult.data;

        // Verify service exists and is active
        const service = await prisma.service.findFirst({
            where: { id: serviceId, isActive: true },
        });

        if (!service) {
            return NextResponse.json(
                { error: "Selected service is not available" },
                { status: 400 }
            );
        }

        // Create booking
        const booking = await prisma.booking.create({
            data: {
                userId: session.user.id,
                serviceId,
                scheduledDate: new Date(scheduledDate),
                scheduledTime,
                address,
                notes,
                totalPrice: service.price,
                status: "PENDING",
            },
            include: {
                service: {
                    select: {
                        name: true,
                        shortDesc: true,
                    },
                },
            },
        });

        return NextResponse.json(
            {
                message: "Booking created successfully",
                booking,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Create booking error:", error);
        return NextResponse.json(
            { error: "Failed to create booking" },
            { status: 500 }
        );
    }
}
