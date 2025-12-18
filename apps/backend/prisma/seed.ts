import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma";

const DEMO_USER_EMAIL = "demo@example.com";
const DEMO_USER_PASSWORD = "password123";
const SALT_ROUNDS = 10;

async function main() {
  const existingUser = await prisma.user.findUnique({ where: { email: DEMO_USER_EMAIL } });

  if (existingUser) {
    console.log("Demo user already exists; skipping seed.");
    return;
  }

  const passwordHash = await bcrypt.hash(DEMO_USER_PASSWORD, SALT_ROUNDS);

  await prisma.user.create({
    data: {
      email: DEMO_USER_EMAIL,
      passwordHash,
    },
  });

  console.log("Seeded demo user:", DEMO_USER_EMAIL);
}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
