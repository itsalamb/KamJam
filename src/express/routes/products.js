const express = require("express");
const {getAllProducts} = require("../db/products")
const productsRouter = express.Router();

productsRouter.use((req, res, next) => {
  console.log("A request is being made to /products");

  next();
});

productsRouter.get("/", async (req, res) => {
  const products = await getAllProducts();

  res.send({
    products,
  });
});

// productsRouter.get("/:productId", async (req, res) => {
//   const products = await getProductsById();

//   res.send({
//     products,
//   });
// });



// productsRouter.get("/category", async (req, res) => {
//     const products = await getProductsByCategoryName();
  
//     res.send({
//       products,
//     });
//   });

module.exports = productsRouter;