import Subscription from "../models/subscriptionModel.js";
import PricingPlan from "../models/pricingModel.js";

export const createSubscription = async (req,res)=>{

  try{

    const {planId} = req.body;

    const plan = await PricingPlan.findById(planId);

    if(!plan){
      return res.status(404).json({
        message:"Plan not found"
      })
    }

    const subscription = await Subscription.create({
      user:req.user._id,
      plan:planId
    })

    res.status(201).json(subscription)

  }
  catch(error){

    res.status(500).json({
      message:error.message
    })

  }

}