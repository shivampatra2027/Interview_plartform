import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: True,
  },
  email: {
    type: String,
    required: True,
  },
  password: {
    type: String,
    required: True,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  avatarUrl: {
    type: String,
    default: "",
  },
},{timestamps:true});
export const User = mongoose.model("User", userSchema);