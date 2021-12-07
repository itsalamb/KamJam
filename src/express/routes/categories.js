const express = require("express");
const categoriesRouter = express.Router();
const {
  getProductsByCategoryName,
} = require("../db/categories");

categoriesRouter.use((req, res, next) => {
  console.log("A request is being made to /categories");

  next();
});

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
  } catch (error) {
    next(error);
  }
});

module.exports = categoriesRouter