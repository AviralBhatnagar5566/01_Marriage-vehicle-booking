import { Router } from "express";
import { bookingUser } from "../controllers/index.controllers.js";
import { Bookingbyid, bookinglist } from "../controllers/booking.controller.js";
import { deleteBooking } from "../controllers/bookingdelete.controller.js";
import { updatebooking } from "../controllers/updatebooking.controller.js";
const router = Router()
router.route("/bookingUser").post(bookingUser)


router.route("/bookings").get(bookinglist)
router.route("/bookingbyid/:id").get(Bookingbyid)

router.route("/booking/:id").delete(deleteBooking)
router.route("/update/:id").patch(updatebooking)
export { router }