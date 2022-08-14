import express from "express";
import { signin, signup } from "../controllers.js/authController.js";
const router = express.Router();
//REGISTER
router.post("/register", signup);
router.post("/login", signin);
export default router;
