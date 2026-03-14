import express from "express";

import {
  getAllPlans,
  createPlan,
  deletePlan
} from "../controllers/pricingController.js";

import protect from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();


router.get("/", getAllPlans)


router.post("/", protect, adminOnly, createPlan)


router.delete("/:id", protect, adminOnly, deletePlan)


export default router;