import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { prisma } from "./db";
import type { Role } from "@prisma/client";

// Extend the built-in session types
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            name?: string | null;
            role: Role;
            image?: string | null;
        };
    }

    interface User {
        role: Role;
    }
}

declare module "next-auth" {
    interface JWT {
        id: string;
        role: Role;
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adapter: PrismaAdapter(prisma) as any,
    session: {
        strategy: "jwt", // Use JWT for stateless sessions
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                const email = credentials.email as string;
                const password = credentials.password as string;

                // Find user by email
                const user = await prisma.user.findUnique({
                    where: { email: email.toLowerCase() },
                });

                if (!user || !user.password) {
                    throw new Error("Invalid email or password");
                }

                // Check if user is soft-deleted
                if (user.deletedAt) {
                    throw new Error("Account has been deactivated");
                }

                // Verify password
                const isValidPassword = await bcrypt.compare(password, user.password);

                if (!isValidPassword) {
                    throw new Error("Invalid email or password");
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    image: user.image,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.role = token.role as Role;
            }
            return session;
        },
        async authorized({ auth, request }) {
            const { pathname } = request.nextUrl;

            // Protected routes
            if (pathname.startsWith("/dashboard") || pathname.startsWith("/admin")) {
                return !!auth;
            }

            return true;
        },
    },
    // Security settings
    trustHost: true,
    debug: process.env.NODE_ENV === "development",
});

// Helper function to check if user is admin
export function isAdmin(role?: Role): boolean {
    return role === "ADMIN";
}

// Helper function to get auth session on server
export async function getServerSession() {
    return await auth();
}
