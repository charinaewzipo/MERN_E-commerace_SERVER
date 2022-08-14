import express from "express";
import {
  deleteUser,
  getUser,
  getUserAll,
  update,
} from "../controllers.js/userController.js";
import { verifyToken } from "../utills/verifyToken.js";
const router = express.Router();

router.put("/:id", verifyToken, update);
router.get("/find/:id", getUser);
router.get("/getusers", getUserAll);
router.delete("/:id", verifyToken, deleteUser);
export default router;
