import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoURL = process.env.MONGO_URL

if (!mongoURL) {
  throw new Error("Mongo URL not found");
}

const mongoConnect = async ()=>{
    mongoose.connect(mongoURL).then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log("Error connecting to MongoDB",err);
    })
}

export default mongoConnect;