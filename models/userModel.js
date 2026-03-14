import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false
  },

  phone: {
    type: String
  },

  avatar: {
    type: String,
    default: ""
  },

  role: {
    type: String,
    enum: ["admin", "provider", "user"],
    default: "user"
  },

  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service"
    }
  ],

  companyName: {
    type: String
  },

  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String
  },

  isVerified: {
    type: Boolean,
    default: false
  },

  isActive: {
    type: Boolean,
    default: true
  },

  lastLogin: {
    type: Date
  }

},
{
  timestamps: true
}
);



// Hash password before saving
userSchema.pre("save", async function (next) {

  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();

});



// Compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


export default mongoose.model("User", userSchema);