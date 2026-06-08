import { Router } from "express";
import { bookingUser } from "../controllers/index.controllers.js";
const router = Router()
router.route("/bookingUser").post(bookingUser)

export { router }