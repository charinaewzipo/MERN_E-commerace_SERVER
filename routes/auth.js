import express from "express";
import { signin, signout, signup } from "../controllers.js/authController.js";
const router = express.Router();
//REGISTER
router.post("/register", signup);
router.post("/login", signin);
router.get("/logout", signout);
export default router;
