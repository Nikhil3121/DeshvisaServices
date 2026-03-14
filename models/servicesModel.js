import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: String,
  icon: String,
  color: String,
  borderColor: String,
  hoverBorder: String,
  accentColor: String,
  description: String,
  imagePosition: String,

  stats: {
    clients: String,
    satisfaction: String,
    deployment: String
  },

  codeSnippet: String
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);