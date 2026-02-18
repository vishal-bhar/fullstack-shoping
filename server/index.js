import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs, { readdirSync } from "fs";
import connectDB from "./db/connection.js";



//initialize express
const app = express();
dotenv.config();

//port number
const port = process.env.PORT || 5000;

//handling connection errors
app.use(cors({
    origin: process.env.CLIENT_URL,
    // credentials: true
  }));
  app.use(express.json())

// this is a connection of db
  connectDB()

//get ,post ,put ,delete
app.get("/", (req, res) => {
  res.send(`Server running on port  :${port}`);
});

//dynamicaly include routes
readdirSync("./routes").map(async (route) => {
  const module = await import(`./routes/${route}`);
  app.use("/api", module.default);
});


//listen to port
app.listen(port,()=>{
    console.log(`server is listning in port ${port} `)
})




