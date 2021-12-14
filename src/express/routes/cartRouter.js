const express = require("express");
const {
  addToCart,
  getCartById,
  removeFromCart,
  updateQuantityInCart,
  getCartByUserId,
} = require("../db/cart");
const cartRouter = express.Router();

cartRouter.use((req, res, next) => {
  console.log("A request is being made to /cart");

  next();
});

cartRouter.get("/cartid/:cartId", async (req, res) => {
  const cartId = req.params.cartId;
  const currentCart = await getCartById(cartId);
  res.send({
    currentCart,
  });
});

cartRouter.get("/userid/:userId", async (req, res) => {
  const userId = req.params.userId;
  const currentCart = await getCartByUserId(userId);
  res.send({
    currentCart,
  });
});

cartRouter.post("/userid/:userId", async (req, res, next) => {
  const { userId, productId, quantity } = req.body;
  const cartItem = { userId, productId, quantity };

  try {
    const cart = await addToCart(cartItem);

    res.send({ cart });
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

module.exports = cartRouter;
