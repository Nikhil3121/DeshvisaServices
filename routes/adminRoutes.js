import express from "express";

import protect from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

import {
  getAllUsers,
  deleteUser,
  getProviders,
  getAllServices,
  deleteService,
  getDashboardStats
} from "../controllers/adminController.js";

const router = express.Router();


/* DASHBOARD */

router.get("/dashboard", protect, adminOnly, getDashboardStats);


/* USERS */

router.get("/users", protect, adminOnly, getAllUsers);

router.delete("/users/:id", protect, adminOnly, deleteUser);


/* PROVIDERS */

router.get("/providers", protect, adminOnly, getProviders);

router.get("/dashboard", (req,res,next)=>{
  console.log("route reached");
  next();
}, protect, adminOnly, getDashboardStats);


/* SERVICES */

router.get("/services", protect, adminOnly, getAllServices);

router.delete("/services/:id", protect, adminOnly, deleteService);


export default router;