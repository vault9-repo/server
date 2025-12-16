import mongoose from "mongoose";

const savingsSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  amount: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Savings", savingsSchema);
