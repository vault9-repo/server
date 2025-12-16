import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import savingsRoutes from "./routes/savingsRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use(express.static(path.join(__dirname, "build")));

// Catch-all route to serve React for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

export default app;
