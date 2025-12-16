import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import savingsRoutes from "./routes/savingsRoutes.js";

const app = express();

/* =======================
   CORS — LOCAL + ONLINE
======================= */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5176",
      "https://savings-tracker-zqly.onrender.com",
    ],
    credentials: true,
  })
);

/* =======================
   MIDDLEWARE
======================= */
app.use(express.json());

/* =======================
   ROUTES
======================= */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/savings", savingsRoutes);

/* =======================
   HEALTH CHECK
======================= */
app.get("/", (req, res) => {
  res.send("Savings Tracker API running");
});

export default app;
