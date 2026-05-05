import mongoose from 'mongoose'

 const BookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        // unique:true,
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    vehicle:{
        type:String,
        enum:["car","bus","both"],
        required:true
    },
    vehicleCount:{
        type:Number,
        required:true,
        min:1,
        max:10
    }
 },{timestamps:true})

 export const Booking = mongoose.model("Booking",BookingSchema)