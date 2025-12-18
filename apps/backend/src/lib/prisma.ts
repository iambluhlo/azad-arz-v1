import { PrismaClient } from "@prisma/client";

const DEFAULT_DATABASE_URL = "file:./prisma/dev.db";

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = DEFAULT_DATABASE_URL;
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export { prisma };
