import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔐 HARD-CODED ADMIN LOGIN
    if (email === "admin@savings.com" && password === "admin123") {
      return res.json({
        message: "Admin login successful",
        user: {
          name: "Admin",
          email,
          role: "admin",
        },
      });
    }

    // 👤 NORMAL USER LOGIN
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
