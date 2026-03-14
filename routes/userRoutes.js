import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getUserProfile,
  updateUserProfile,
  changePassword,
  deleteAccount
} from "../controllers/userController.js";

const router = express.Router();


/* PROFILE */

router.get("/profile", protect, getUserProfile);


/* UPDATE PROFILE */

router.put("/profile", protect, updateUserProfile);


/* CHANGE PASSWORD */

router.put("/change-password", protect, changePassword);


/* DELETE ACCOUNT */

router.delete("/delete-account", protect, deleteAccount);


export default router;