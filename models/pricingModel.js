import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  text: String,
  icon: String
});

const pricingSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  price: {
    type: String,
    required: true
  },

  period: String,

  description: String,

  icon: String,

  color: String,
  borderColor: String,
  hoverBorder: String,
  accentColor: String,
  badgeColor: String,
  buttonStyle: String,

  mostPopular: {
    type: Boolean,
    default: false
  },

  badge: String,

  features: [featureSchema],

  cta: String

},{timestamps:true});

export default mongoose.model("Pricing", pricingSchema);