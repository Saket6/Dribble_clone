import mongoose from "mongoose";

export default async function connect()
{
    try{
        // console.log(process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    }
    catch(er){console.log(er);}
  
}