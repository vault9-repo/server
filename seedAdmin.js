import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

dotenv.config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existing = await User.findOne({ email: "admin@savings.com" });
    if (existing) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashed = await bcrypt.hash("admin123", 10);

    const admin = await User.create({
      name: "Admin",
      email: "admin@savings.com",
      password: hashed,
      role: "admin",
    });

    console.log("✅ Admin created:", admin.email);
    process.exit();
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
};

run();
