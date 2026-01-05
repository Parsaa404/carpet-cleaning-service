import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Starting seed...");

    // Create admin user
    const adminPassword = await bcrypt.hash("Admin123!", 12);
    const admin = await prisma.user.upsert({
        where: { email: "admin@cleanpro.com" },
        update: {},
        create: {
            name: "Admin User",
            email: "admin@cleanpro.com",
            password: adminPassword,
            role: "ADMIN",
        },
    });
    console.log("✅ Admin user created:", admin.email);

    // Create test user
    const userPassword = await bcrypt.hash("User1234!", 12);
    const user = await prisma.user.upsert({
        where: { email: "user@example.com" },
        update: {},
        create: {
            name: "Test User",
            email: "user@example.com",
            password: userPassword,
            role: "USER",
            phone: "+1-555-555-5555",
            address: "456 Oak Avenue, City, State 12345",
        },
    });
    console.log("✅ Test user created:", user.email);

    // Create services
    const services = [
        {
            name: "Carpet Cleaning",
            slug: "carpet-cleaning",
            description:
                "Our professional carpet cleaning service uses state-of-the-art hot water extraction technology to deep clean your carpets. We remove embedded dirt, allergens, dust mites, and stubborn stains while extending the life of your carpet. Our eco-friendly cleaning solutions are safe for children and pets.",
            shortDesc: "Deep cleaning that removes dirt, stains, and allergens from your carpets.",
            price: 99.0,
            priceUnit: "per room",
            duration: 60,
            isActive: true,
        },
        {
            name: "Sofa Cleaning",
            slug: "sofa-cleaning",
            description:
                "Restore your sofas and couches to their original beauty with our professional upholstery cleaning. We handle all fabric types including leather, microfiber, cotton, and velvet. Our specialized treatments remove stains, odors, and allergens while being gentle on your furniture.",
            shortDesc: "Restore your sofas to their original beauty with our deep cleaning service.",
            price: 79.0,
            priceUnit: "per seat",
            duration: 45,
            isActive: true,
        },
        {
            name: "Upholstery Cleaning",
            slug: "upholstery-cleaning",
            description:
                "Complete upholstery and furniture cleaning service for dining chairs, armchairs, ottomans, cushions, curtains, and more. We use safe, non-toxic cleaning products that effectively remove dirt and stains while being gentle on all fabric types.",
            shortDesc: "Complete cleaning for all your upholstered furniture and fabrics.",
            price: 49.0,
            priceUnit: "per item",
            duration: 30,
            isActive: true,
        },
    ];

    for (const service of services) {
        await prisma.service.upsert({
            where: { slug: service.slug },
            update: service,
            create: service,
        });
        console.log("✅ Service created:", service.name);
    }

    // Create sample booking
    const carpetService = await prisma.service.findUnique({
        where: { slug: "carpet-cleaning" },
    });

    if (carpetService) {
        await prisma.booking.create({
            data: {
                userId: user.id,
                serviceId: carpetService.id,
                scheduledDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
                scheduledTime: "10:00",
                address: "456 Oak Avenue, City, State 12345",
                notes: "Please call when you arrive",
                totalPrice: 99.0,
                status: "CONFIRMED",
            },
        });
        console.log("✅ Sample booking created");
    }

    console.log("🌱 Seed completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
