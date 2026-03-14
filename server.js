import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import serviceRoutes from "./routes/servicesRoutes.js";
import subServiceRoutes from "./routes/subServicesRoutes.js";    
import pricingRoutes from "./routes/pricingRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();


app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/subservices", subServiceRoutes);
app.use("/api/pricing", pricingRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/testimonials", testimonialRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});