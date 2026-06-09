import { Router } from "express";
import { bookingUser } from "../controllers/index.controllers.js";
import { bookinglist } from "../controllers/booking.controller.js";
const router = Router()
router.route("/bookingUser").post(bookingUser)


router.route("/bookings").get(bookinglist)
export { router }