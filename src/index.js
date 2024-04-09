
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();

dotenv.config({
  path: "./env",
});

connectDB();

/*
(async () => {
  try{
    await Mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //listners:
    app.on("error",(error) => {
      console.log("App is not able to listen ERROR : ",error);
      throw error;
    })

    //listening to [PORT]
    app.listen(process.env.PORT,() => {
      console.log(`Server is running on PORT : ${process.env.PORT}`);
    })
    
  }catch(error){
    console.log("ERROR : ",error)
    throw error

  }
})()

*/

