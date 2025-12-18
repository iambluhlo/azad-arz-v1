import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";

const SALT_ROUNDS = 10;

const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};

const createUser = async (email: string, password: string) => {
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  return prisma.user.create({ data: { email, passwordHash } });
};

const verifyPassword = async (password: string, passwordHash: string) =>
  bcrypt.compare(password, passwordHash);

const toSafeUser = (user: { id: string; email: string }) => ({
  id: user.id,
  email: user.email,
});

export { createUser, findUserByEmail, toSafeUser, verifyPassword };
