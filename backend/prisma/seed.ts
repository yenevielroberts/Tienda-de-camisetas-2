import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const existingUsers = await prisma.user.count();
  if (existingUsers === 0) {
    await prisma.user.createMany({
      data: [
        {
          email: "admin@example.com",
          password: "admin123",
          role: "ADMIN",
        },
        {
          email: "user1@example.com",
          password: "user123",
          role: "USER",
        },
        {
          email: "user2@example.com",
          password: "user123",
          role: "USER",
        },
      ],
    });
  }

  const existingProducts = await prisma.product.count();
  if (existingProducts === 0) {
    await prisma.product.createMany({
      data: [
        {
          name: "Camiseta Clasica",
          description: "Camiseta de algodon 100%",
          price: 19.99,
        },
        {
          name: "Camiseta Premium",
          description: "Camiseta suave con corte moderno",
          price: 29.99,
        },
        {
          name: "Camiseta Grafica",
          description: "Diseño estampado de edicion limitada",
          price: 24.5,
        },
      ],
    });
  }

  const existingOrders = await prisma.order.count();
  if (existingOrders === 0) {
    const user = await prisma.user.findFirst({
      orderBy: { id: "asc" },
    });

    if (user) {
      await prisma.order.createMany({
        data: [
          {
            userId: user.id,
            total: 49.98,
          },
          {
            userId: user.id,
            total: 29.99,
          },
        ],
      });
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
