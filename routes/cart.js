import express from "express";
import {
  createCart,
  deleteCart,
  getCart,
  getCartAll,
  updateCart,
} from "../controllers.js/cartController.js";
import { verifyToken } from "../utills/verifyToken.js";
const router = express.Router();

router.post("/add", createCart);
router.put("/:id", verifyToken, updateCart);
router.delete("/:id", deleteCart);
router.get("/getcarts", getCartAll);
router.get("/find/:userId", getCart);
export default router;
