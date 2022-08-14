import Order from "../models/Order.js";

import { createError } from "../utills/error.js";

export const createOrder = async (req, res, next) => {
  const newOrder = new Order(req.body);
  try {
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (error) {
    next(error);
  }
};
export const updateOrder = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateOrder);
    } catch (error) {
      console.log(error);
    }
  } else {
    return next(createError(403, "You can update only your product"));
  }
};
export const deleteOrder = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const deleteOrder = await Order.findByIdAndRemove(req.params.id);
      res.status(200).json("Order has been deleted");
    } catch (error) {
      next(error);
    }
  }
};
export const getOrderAll = async (req, res, next) => {
  try {
    const Orders = await Order.find();
    res.status(200).json(Orders);
  } catch (error) {}
};
export const getOrder = async (req, res, next) => {
  try {
    const findOrder = await Order.find({ userId: req.params.userId });
    res.status(200).json(findOrder);
  } catch (error) {
    next(error);
  }
};
