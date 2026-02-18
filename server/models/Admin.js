import mongoose from "mongoose";   

// Schema
const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
       default: "admin",
       enum:["admin"],
    },
  },
  { timestamps: true }
);

// Model
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
