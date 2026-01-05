import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { profileUpdateSchema } from "@/lib/validations";
import { auth } from "@/lib/auth";

export async function PATCH(request: Request) {
    try {
        const session = await auth();

        if (!session?.user) {
            return NextResponse.json(
                { error: "Authentication required" },
                { status: 401 }
            );
        }

        const body = await request.json();

        const validationResult = profileUpdateSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    error: "Validation failed",
                    details: validationResult.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const { name, phone, address } = validationResult.data;

        const updatedUser = await prisma.user.update({
            where: { id: session.user.id },
            data: { name, phone, address },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                address: true,
            },
        });

        return NextResponse.json({
            message: "Profile updated successfully",
            user: updatedUser,
        });
    } catch (error) {
        console.error("Profile update error:", error);
        return NextResponse.json(
            { error: "Failed to update profile" },
            { status: 500 }
        );
    }
}
