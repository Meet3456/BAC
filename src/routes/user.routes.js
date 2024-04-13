import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

// Creating an instance of the express router
const router = Router();

// Defining the route for the registerUser controller(jaise hi app se route call hoga to control iske pass ayyega aur yeh function run hoga if the route is /register)
router.route("/register").post(registerUser);

export default router;
