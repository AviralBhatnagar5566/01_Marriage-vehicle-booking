import { asyncHandler } from "../utils/asynhandler.js";
import { Booking } from "../models/Booking.model.js";
import { APIresponse } from "../utils/ApiResponse.js";
import { APIerror } from "../utils/Apierror.js";

const updatebooking = asyncHandler(async (req,res,next) =>{
    const { id } = req.params
    console.log(req.body);
    
    const { name,date,vehicle,vehiclenum } = req.body
    console.log(name);
     console.log(date);
    console.log(vehicle);
    console.log(vehiclenum);
    const booking = await Booking.findByIdAndUpdate(id,
        { name, date,vehicle, vehiclenum }, 
        { new: true, runValidators: true }
    )
  
    

    if(!booking){
        throw new APIerror(404,"booking not found")
    }
    return res.status(200).json(
        new APIresponse(200,booking,"Booking is Successfully updated")
    )

})

export { updatebooking }