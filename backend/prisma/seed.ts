import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const existingUsers = await prisma.user.count();
  if (existingUsers === 0) {
    await prisma.$transaction([
      prisma.user.create({
        data: {
          email: "admin@example.com",
          password: "admin123",
          role: "ADMIN",
        },
      }),
      prisma.user.create({
        data: {
          email: "user1@example.com",
          password: "user123",
          role: "USER",
        },
      }),
      prisma.user.create({
        data: {
          email: "user2@example.com",
          password: "user123",
          role: "USER",
        },
      }),
    ]);
  }

  const existingProducts = await prisma.product.count();
  if (existingProducts === 0) {
    await prisma.$transaction([
      prisma.product.create({
        data: {
          name: "Camiseta Clasica",
          description: "Camiseta de algodon 100%",
          price: 19.99,
        },
      }),
      prisma.product.create({
        data: {
          name: "Camiseta Premium",
          description: "Camiseta suave con corte moderno",
          price: 29.99,
        },
      }),
      prisma.product.create({
        data: {
          name: "Camiseta Grafica",
          description: "Diseño estampado de edicion limitada",
          price: 24.5,
        },
      }),
    ]);
  }

  const existingOrders = await prisma.order.count();
  if (existingOrders === 0) {
    const user = await prisma.user.findFirst({
      orderBy: { id: "asc" },
    });

    if (user) {
      await prisma.$transaction([
        prisma.order.create({
          data: {
            userId: user.id,
            total: 49.98,
          },
        }),
        prisma.order.create({
          data: {
            userId: user.id,
            total: 29.99,
          },
        }),
      ]);
    }
  }
}

main()
  .catch((error) => {
    console.error("Seed error:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
