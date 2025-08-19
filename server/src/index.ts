import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins =
  process.env.ALLOWED_ORIGINS?.split(",")
    ?.map((origin) => origin.trim())
    ?.filter((origin) => origin.length > 0) || [];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

// health check route
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

app.get("/version", (req: Request, res: Response) => {
  res.status(200).json({ version: "v4" });
});

// example root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express! v4");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
