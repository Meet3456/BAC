import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
// cross origin resource sharing(cors)
const app = express();

// dotenv can be configured to read from a file , we cant use import for this , it requires require statement(commonJS)
dotenv.config({
  path: "./.env",
});

connectDB()
  // after a successful connection to the database:Code for running the app on a desired PORT:
  // as the connectDB() returns a promise we can use .then() and .catch() to handle the promise
  .then(() => {
    //listening to [PORT]
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on PORT : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("ERROR : ", error);
  });

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
