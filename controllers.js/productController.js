import Product from "../models/Product.js";
import { createError } from "../utills/error.js";

export const createproduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {}
};
export const updateproduct = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateProduct);
    } catch (error) {
      console.log(error);
    }
  } else {
    return next(createError(403, "You can update only your product"));
  }
};
export const deleteProduct = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const deleteProduct = await Product.findByIdAndRemove(req.params.id);
      res.status(200).json("Product has been deleted");
    } catch (error) {
      next(error);
    }
  }
};
export const getProductAll = async (req, res, next) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {}
};
export const getProduct = async (req, res, next) => {
  try {
    const findProduct = await Product.findById(req.params.id);
    res.status(200).json(findProduct);
  } catch (error) {
    next(error);
  }
};

export const randomProduct = async (rea, res, next) => {
  try {
    const randomProduct = await Product.aggregate([{ $sample: { size: 8 } }]);
    res.status(200).json(randomProduct);
  } catch (error) {
    next(error);
  }
};
