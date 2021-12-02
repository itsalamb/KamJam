const express = require("express");
const categoriesRouter = express.Router();
const {
  getAllCategories,
  getProductsByCategoryName,
} = require("../db/categories");

categoriesRouter.get("/", async (req, res) => {
  const categories = await getAllCategories();

  res.send({
    categories,
  });
});

categoriesRouter.get("/:categoryName/products", async (req, res, next) => {
  const categoryName = req.params.categoryName;
  try {
    const matchingProducts = await getProductsByCategoryName(categoryName);
    res.send(matchingProducts);
  } catch ({ name, description, condition, price }) {
    next({ name, description, condition, price });
  }
});
