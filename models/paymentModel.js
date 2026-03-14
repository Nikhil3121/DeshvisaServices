import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  plan:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"PricingPlan"
  },

  amount:Number,

  paymentMethod:String,

  paymentId:String,

  status:{
    type:String,
    enum:["pending","success","failed"]
  }

},{timestamps:true});

export default mongoose.model("Payment", paymentSchema);