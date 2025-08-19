import "dotenv/config";
import express, { Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 5000;

// health check route
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

// example root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express! v3");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
