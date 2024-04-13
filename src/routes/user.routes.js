import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
// Creating an instance of the express router
const router = Router();

router.route("/register").post(
  // using middleware , which acts as before passing the request to the controller , check for the upload fields
  upload.fields([
    {
      name:"avatar",
      maxCount:1
    },
    {
      name:"coverImage",
      maxCount:1
    }
  ]),
  registerUser
)

export default router; 
