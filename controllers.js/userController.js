import User from "../models/User.js";
import { createError } from "../utills/error.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      console.log(error);
    }
  } else {
    return next(createError(403, "You can update only your account"));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.params.id);
    res.status(200).json(findUser);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const deleteUser = await User.findByIdAndRemove(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (error) {
      next(error);
    }
  }
};
export const getUserAll = async (req, res, next) => {
  const query = req.query.count;
  try {
    const users = query
      ? await User.find().sort({ createdAt: -1 }).limit(query)
      : await User.find();
    res.status(200).json(users);
  } catch (error) {}
};
