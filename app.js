import express from "express";
import cors from "cors";
import path from "path";
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
   API ROUTES
======================= */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/savings", savingsRoutes);

/* =======================
   Serve React build
======================= */
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "build")));

// Catch all other routes and return React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* =======================
   HEALTH CHECK
======================= */
app.get("/health", (req, res) => {
  res.send("Savings Tracker API running");
});

export default app;
