import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [4, "Name should more than Character"],
    maxLength: [30, "Name should not exceed more than 30 Charcter"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validator: [validator.isEmail, "please provide a valid a Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    next();
  }
  this.password =await bcrypt.hash(this.password,10)
});

// JWT
userSchema.methods.getJWTToken = function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRE,
  })
}

//compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
