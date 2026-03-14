import User from "../models/userModel.js";
import bcrypt from "bcryptjs";


/* GET USER PROFILE */

export const getUserProfile = async (req, res) => {

  try {

    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



/* UPDATE USER PROFILE */

export const updateUserProfile = async (req, res) => {

  try {

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.name = req.body.name || user.name;
    user.phone = req.body.phone || user.phone;
    user.avatar = req.body.avatar || user.avatar;

    const updatedUser = await user.save();

    res.json({
      message: "Profile updated",
      user: updatedUser
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



/* CHANGE PASSWORD */

export const changePassword = async (req, res) => {

  try {

    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id).select("+password");

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Current password incorrect"
      });
    }

    user.password = newPassword;

    await user.save();

    res.json({
      message: "Password changed successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



/* DELETE USER ACCOUNT */

export const deleteAccount = async (req, res) => {

  try {

    await User.findByIdAndDelete(req.user._id);

    res.json({
      message: "Account deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};