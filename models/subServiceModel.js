import mongoose from "mongoose";

const subServiceSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service"
  },

  name: String,
  price: String,
  icon: String,
  users: String,
  rating: Number,

  features: [String]

}, { timestamps: true });

export default mongoose.model("SubService", subServiceSchema);