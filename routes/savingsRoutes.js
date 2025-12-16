import express from "express";
import { getSavings, addSavings } from "../controllers/savingsController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getSavings);
router.post("/", protect, adminOnly, addSavings);

export default router;
