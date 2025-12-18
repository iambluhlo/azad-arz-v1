import { Router } from "express";
import jwt from "jsonwebtoken";
import {
  authenticate,
  AuthenticatedRequest,
  JWT_SECRET,
} from "../middleware/authenticate";
import {
  createUser,
  findUserByEmail,
  toSafeUser,
  verifyPassword,
} from "../models/userModel";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const user = await createUser(email, password);

    return res.status(201).json({ user: toSafeUser(user) });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to register user" });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isValidPassword = await verifyPassword(password, user.passwordHash);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token, user: toSafeUser(user) });
  } catch (error) {
    return res.status(500).json({ message: "Unable to process login" });
  }
});

authRouter.get("/me", authenticate, (req: AuthenticatedRequest, res) => {
  return res.json({ user: req.user });
});

export { authRouter };
