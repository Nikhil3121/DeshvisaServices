import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";


// REGISTER
export const registerUser = async (req,res) => {

  try {

    const {name,email,password,phone} = req.body

    const existingUser = await User.findOne({email})

    if(existingUser){
      return res.status(400).json({
        message:"User already exists"
      })
    }

    const user = await User.create({
      name,
      email,
      password,
      phone
    })


    res.status(201).json({
      message:"User registered",
      token: generateToken(user._id,user.role),
      user:{
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role
      }
    })


  } catch(error){

    res.status(500).json({
      message:error.message
    })

  }

}



// LOGIN
export const loginUser = async (req,res)=>{

  try {

    const {email,password} = req.body

    const user = await User.findOne({email}).select("+password")

    if(!user){
      return res.status(401).json({message:"Invalid credentials"})
    }

    const isMatch = await user.comparePassword(password)

    if(!isMatch){
      return res.status(401).json({message:"Invalid credentials"})
    }

    res.json({
      message:"Login successful",
      token: generateToken(user._id,user.role),
      user:{
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role
      }
    })

  }
  catch(error){

    res.status(500).json({
      message:error.message
    })

  }

}