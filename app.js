import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import savingsRoutes from "./routes/savingsRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Replace with your frontend URL deployed on Render
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/savings", savingsRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Savings Tracker API is running!");
});

export default app;
