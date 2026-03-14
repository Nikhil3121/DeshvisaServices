import Pricing from "../models/pricingModel.js";


export const getAllPlans = async (req,res)=>{

  try{

    const plans = await Pricing.find()

    res.json(plans)

  }catch(error){

    res.status(500).json({
      message:error.message
    })

  }

}


export const createPlan = async (req,res)=>{

  try{

    const plan = await Pricing.create(req.body)

    res.status(201).json(plan)

  }catch(error){

    res.status(500).json({
      message:error.message
    })

  }

}


export const deletePlan = async (req,res)=>{

  try{

    await Pricing.findByIdAndDelete(req.params.id)

    res.json({
      message:"Plan deleted"
    })

  }catch(error){

    res.status(500).json({
      message:error.message
    })

  }

}