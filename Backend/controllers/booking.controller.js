import { asyncHandler } from "../utils/asynhandler.js";
import { APIerror } from "../utils/Apierror.js";
import { APIresponse } from "../utils/ApiResponse.js";
import { Booking } from "../models/Booking.model.js";


const bookinglist = asyncHandler(async (req,res,next) => {
    const booking = await Booking.find()

    return res.status(200).json(
        new APIresponse(200,booking,"YOUR DATA!")
    )
})

export { bookinglist }