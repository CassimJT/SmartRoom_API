import mongoose, { model, Mongoose } from "mongoose";
const temperature = new mongoose.Schema({
    temp :{
        type: Number,
        required: true
    }
},{timestamps:true})
temperature.index({createdAt: 1},{expireAfterSeconds: 3600})
export const Temp = mongoose.model("Temp",temperature)