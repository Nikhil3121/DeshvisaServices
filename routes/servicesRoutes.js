import express from "express";
const router = express.Router();

import { createService, deleteService, getFullServices, getServices, updateService } from "../controllers/serviceController.js";


router.post("/", createService);
router.get("/", getServices);
router.put("/:id", updateService);
router.delete("/:id", deleteService);
router.get("/full", getFullServices);

export default router;
