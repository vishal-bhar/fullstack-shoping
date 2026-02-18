import mongoose from "mongoose";   

// Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      unique: true
    },
    otp: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
       default: "user",
       enum:["user"],
    },
    purchasedProducts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
        }
    ],

  },
  { timestamps: true }
);

// Model
const User = mongoose.model("User", userSchema);

export default User;
