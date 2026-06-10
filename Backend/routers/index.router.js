import { Router } from "express";
import { bookingUser } from "../controllers/index.controllers.js";
import { bookinglist } from "../controllers/booking.controller.js";
import { deleteBooking } from "../controllers/bookingdelete.controller.js";
const router = Router()
router.route("/bookingUser").post(bookingUser)


router.route("/bookings").get(bookinglist)

router.route("/booking/:id").delete(deleteBooking)
export { router }