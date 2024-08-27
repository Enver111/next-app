import { categories, manufacturer, product, states, user } from "./constants";
import { prisma } from "./prisma-client";

const randomDecimalNamber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

async function up() {
  await prisma.user.createMany({
    data: user,
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.productState.createMany({
    data: states,
  });

  await prisma.manufacturer.createMany({
    data: manufacturer,
  });
  await prisma.product.createMany({
    data: product,
  });
  const sparePart1 = await prisma.product.create({
    data: {
      name: "Двигатель TSI",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUbHZBMS-plDq40MbcmZYf2v9VQCcMJ000A&s",
      categoryId: 1,
      stateId: 1,
      manufacturer: {
        connect: manufacturer.slice(0, 5),
      },
    },
  });
  const sparePart2 = await prisma.product.create({
    data: {
      name: "Двигатель TFSI",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUbHZBMS-plDq40MbcmZYf2v9VQCcMJ000A&s",
      categoryId: 1,
      stateId: 1,
      manufacturer: {
        connect: manufacturer.slice(5, 10),
      },
    },
  });
  const sparePart3 = await prisma.product.create({
    data: {
      name: "Двигатель Disel",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUbHZBMS-plDq40MbcmZYf2v9VQCcMJ000A&s",
      categoryId: 1,
      stateId: 1,
      manufacturer: {
        connect: manufacturer.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: sparePart1.id,
        price: randomDecimalNamber(190, 600),
        state: "Новый",
        manufacturer: "Brembo",
      },
      {
        productId: sparePart1.id,
        price: randomDecimalNamber(190, 600),
        state: "Б/У",
        manufacturer: "Brembo",
      },
      {
        productId: sparePart2.id,
        price: randomDecimalNamber(190, 600),
        state: "Новый",
        manufacturer: "Brembo",
      },
      {
        productId: sparePart2.id,
        price: randomDecimalNamber(190, 600),
        state: "Б/У",
        manufacturer: "Brembo",
      },
      {
        productId: sparePart3.id,
        price: randomDecimalNamber(190, 600),
        state: "Новый",
        manufacturer: "Brembo",
      },
      {
        productId: sparePart3.id,
        price: randomDecimalNamber(190, 600),
        state: "Б/У",
        manufacturer: "Brembo",
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      { userId: 1, totalAmount: 0, token: "11111" },
      { userId: 2, totalAmount: 0, token: "22222" },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
    },
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Manufacturer" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductState" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
