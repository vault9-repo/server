import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import savingsRoutes from "./routes/savingsRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/savings", savingsRoutes);
app.use("/api/users", userRoutes);

export default app;
