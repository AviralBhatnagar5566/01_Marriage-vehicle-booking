import { Booking } from "../models/Booking.model.js";
import { asyncHandler } from "../utils/asynhandler.js";
import { APIerror } from "../utils/Apierror.js";
import { APIresponse } from "../utils/ApiResponse.js";

const deleteBooking = asyncHandler(async (req,res,next) =>{
    const { id } = req.params;

    const booking = await Booking.findByIdAndDelete(id);

    if(!booking){
        throw new APIerror(400,"something went wrong")
    }
    return res.status(200).json(
        new APIresponse(200,booking,"IT IS DELETED")
    )
})

export { deleteBooking }