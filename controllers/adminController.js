import User from "../models/userModel.js";
import Service from "../models/servicesModel.js";
import SubService from "../models/subServiceModel.js";


/* GET ALL USERS */

export const getAllUsers = async (req,res)=>{

  try{

    const users = await User.find()

    res.json(users)

  }catch(error){

    res.status(500).json({message:error.message})

  }

}



/* GET ALL PROVIDERS */

export const getProviders = async (req,res)=>{

  try{

    const providers = await User.find({role:"provider"})

    res.json(providers)

  }catch(error){

    res.status(500).json({message:error.message})

  }

}



/* DELETE USER */

export const deleteUser = async (req,res)=>{

  try{

    const user = await User.findByIdAndDelete(req.params.id)

    if(!user){
      return res.status(404).json({message:"User not found"})
    }

    res.json({message:"User deleted successfully"})

  }catch(error){

    res.status(500).json({message:error.message})

  }

}



/* GET ALL SERVICES */

export const getAllServices = async (req,res)=>{

  try{

    const services = await Service.find()

    res.json(services)

  }catch(error){

    res.status(500).json({message:error.message})

  }

}



/* DELETE SERVICE */

export const deleteService = async (req,res)=>{

  try{

    const service = await Service.findByIdAndDelete(req.params.id)

    if(!service){
      return res.status(404).json({message:"Service not found"})
    }

    res.json({message:"Service deleted"})

  }catch(error){

    res.status(500).json({message:error.message})

  }

}



/* PLATFORM ANALYTICS */

export const getDashboardStats = async (req, res) => {
  res.json({ message: "Admin dashboard working" });
};