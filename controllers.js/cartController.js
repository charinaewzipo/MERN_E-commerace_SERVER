// import Cart from "../models/cart.js";

// import { createError } from "../utills/error.js";

// export const createCart = async (req, res, next) => {
//   const newCart = new Cart(req.body);
//   try {
//     const saveCart = await newCart.save();
//     res.status(200).json(saveCart);
//   } catch (error) {}
// };
// export const updateCart = async (req, res, next) => {
//   if (req.params.id === req.user.id) {
//     try {
//       const updateCart = await Cart.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         {
//           new: true,
//         }
//       );
//       res.status(200).json(updateCart);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     return next(createError(403, "You can update only your product"));
//   }
// };
// export const deleteCart = async (req, res, next) => {
//   if (req.params.id === req.user.id) {
//     try {
//       const deleteCart = await Cart.findByIdAndRemove(req.params.id);
//       res.status(200).json("Cart has been deleted");
//     } catch (error) {
//       next(error);
//     }
//   }
// };
// export const getCartAll = async (req, res, next) => {
//   try {
//     const carts = await Cart.find();
//     res.status(200).json(carts);
//   } catch (error) {}
// };
// export const getCart = async (req, res, next) => {
//   try {
//     const findCart = await Cart.findById({ userId: req.params.userId });
//     res.status(200).json(findCart);
//   } catch (error) {
//     next(error);
//   }
// };
