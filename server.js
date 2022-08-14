import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import cors from "cors";
const app = express();

dotenv.config();

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("DBConnect successfully"))
  .catch((err) => console.log(err));
app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auths", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 8800, () => {
  console.log("Server is running port 8800");
});
