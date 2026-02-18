import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Mongoose connection inside the function
    await mongoose.connect(process.env.MONGO_URI);

    // Check the connection state
    const state = mongoose.connection.readyState;
    if (state === 1) {
      console.log("Connected to MongoDB hai vishal you did it");
    } else if (state === 2) {
      console.log("Connecting to MongoDB...");
    } else if (state === 0) {
      console.log("Disconnected from MongoDB");
    }

  } catch (error) {
    console.error("Error connecting to the database, Vishal:", error);
  }
};

export default connectDB;





