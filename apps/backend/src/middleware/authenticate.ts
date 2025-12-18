import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "development-secret";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const token = header.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { id: string; email: string };
    req.user = { id: payload.id, email: payload.email };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export { authenticate, JWT_SECRET };
