import mongoose from "mongoose";   

// Schema
const pincodeSchema = new mongoose.Schema(
  {
    pincode: {
      type: String,
      required: true,
      unique:true
    },
  },
  { timestamps: true }
);

// Model
const Pincode = mongoose.model("Pincode", pincodeSchema);

export default Pincode;
