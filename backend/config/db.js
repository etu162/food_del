import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://greatstack:01816748170@cluster0.eswmkxu.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}