import express from "express";

import {
  createService,
  updateService,
  deleteService
} from "../controllers/serviceController.js";

import {
  createSubService,
  updateSubService,
  deleteSubService,
  getSubServicesByService
} from "../controllers/subServiceController.js";

import protect from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

/* ---------- SERVICES ---------- */

router.post("/service", protect, adminOnly, createService);

router.put("/service/:id", protect, adminOnly, updateService);

router.delete("/service/:id", protect, adminOnly, deleteService);

router.get("/subservices", protect, adminOnly, getSubServicesByService);



/* ---------- SUB SERVICES ---------- */

router.post("/subservice", protect, adminOnly, createSubService);

router.put("/subservice/:id", protect, adminOnly, updateSubService);

router.delete("/subservice/:id", protect, adminOnly, deleteSubService);

export default router;