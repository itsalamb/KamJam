const express = require("express");
const cartRouter = express.Router();
const {
  addToCart,
  removeFromCart,
  updateQuantityInCart,
} = require("../db/cart");

// Add new item to cart

cartRouter.post("/", async (req, res, next) => {
  try {
    const cart = await addToCart(req.body);

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// Delete item from cart

cartRouter.delete("/:cartId/:productId", async (req, res, next) => {
  try {
    const deletedItem = await removeFromCart({
      cartId: req.params.cartId,
      productId: req.params.productId,
    });

    res.send(deletedItem);
  } catch (error) {
    next(error);
  }
});

// Update quantity in cart

cartRouter.patch("/", async (req, res, next) => {
  try {
    const updatedQty = await updateQuantityInCart(req.body);
    res.send(updatedQty);
  } catch (error) {
    next(error);
  }
});

module.exports = cartRouter