import "dotenv/config";
import cors from "cors";
import express from "express";
import { authRouter } from "./routes/authRoutes";

const app = express();
const PORT = process.env.PORT || 4000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on port ${PORT}`);
});
