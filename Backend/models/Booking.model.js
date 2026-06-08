import mongoose from 'mongoose'

 const BookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    vehicle:{
        type:String,
        enum:["Car","Bus","Both"],
        required:true
    },
    vehiclenum:{
        type:Number,
        required:true,
        min:1,
        max:10
    }
 },{timestamps:true})

 export const Booking = mongoose.model("Booking",BookingSchema)