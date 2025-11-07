import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import authRoutes from "./src/routes/authRoutes.js";
import { protect } from "./src/middleware/auth.js";
import { notFound, errorHandler } from "./src/middleware/errorHandler.js";

dotenv.config();
const app = express();

// Trust proxy for Render
app.set("trust proxy", 1);

// Security & Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ignore favicon requests
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Rate Limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === "production" ? 20 : 100,
  message: "Too many requests, please try again later.",
});
app.use("/api/v1/auth", authLimiter);

// Base Route
app.get("/", (req, res) =>
  res.json({ success: true, message: "MindBridge API is running successfully" })
);

// API Routes
app.use("/api/v1/auth", authRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

export default app;
