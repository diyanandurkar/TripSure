import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from  "cors";


import triproute from "../backend/route/trip.route.js";
import userRoute from "../backend/route/user.route.js";
import  tripregRoute  from "../backend/route/tripreg.route.js";
import { tripreg } from "./controller/tripreg.controller.js";


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4001;
const URI=process.env.mongodbURI;

//connect to database
try {
  mongoose.connect(URI);
  console.log("connected to  mongodb");
} catch (error) {
  console.log("error:",error);
}
app.get('/getUser',(res,req)=>{
  
})

//definding route
app.use("/trip",triproute);
app.use("/user",userRoute);
app.use("/tripreg",tripregRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})