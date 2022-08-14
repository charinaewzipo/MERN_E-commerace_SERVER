import express from "express";
import {
  createproduct,
  deleteProduct,
  getProduct,
  getProductAll,
  randomProduct,
  updateproduct,
} from "../controllers.js/productController.js";
import { verifyToken } from "../utills/verifyToken.js";
const router = express.Router();

router.post("/add", createproduct);
router.put("/:id", verifyToken, updateproduct);
router.delete("/:id", deleteProduct);
// router.get("/", getProductAll);
router.get("/random", randomProduct);
router.get("/find/:id", getProduct);
export default router;
