import { asyncHandler } from "../utils/asynhandler.js"
import { APIerror } from "../utils/Apierror.js"
import { Booking } from "../models/Booking.model.js"
import { APIresponse } from "../utils/ApiResponse.js"

const bookingUser = asyncHandler(async (req,res,next) =>{
    const {name,email,date,vehicle,vehiclenum} = req.body
    if(!name.trim()){
        throw new APIerror(400,"Name is missing")
    }
    if(!email.trim()){
        throw new APIerror(400,"Email is missing")
    }
    if(!date){
        throw new APIerror(400,"date is missing")
    }
    if(!vehicle){
        throw new APIerror(400,"vehicle is missing")
    }
    const num = Number(vehiclenum);
    if (isNaN(num) || num < 1 || num > 10) {
        throw new APIerror(400, "vehicle number must be between 1 and 10")
    }
    if(!email.endsWith("@gmail.com")){
        throw new APIerror(400,"needs valid email")
    }

    const ExistedUser = await Booking.findOne({
        email 
    })
    if(ExistedUser){
        throw new APIerror(402,"User already existed")
    }

    const user = await Booking.create({
        name: name.toLowerCase(),
        email,
        date,
        vehicle,
        vehiclenum
    })
    const createdUser = await Booking.findById(user._id)
     if(!createdUser){
        throw new APIerror(500,"Something Went Wrong")
    }
    return res.status(201).json(
        new APIresponse(200,createdUser,"user register succesfully")
    )
})

export { bookingUser }