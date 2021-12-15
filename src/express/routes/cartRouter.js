const express = require("express");
const {
  addToCart,
  getCartById,
  removeFromCart,
  updateQuantityInCart,
  getCartByUserId,
} = require("../db/cart");
const { requireUser } = require("./utils");
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

cartRouter.post("/", async (req, res, next) => {
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

cartRouter.delete(
  "/:userId/:productId",
  requireUser,
  async (req, res, next) => {
    const { userId, productId } = req.body;

    try {
      const deletedItem = await removeFromCart(userId, productId);
      if (deletedItem) {
        res.send(deletedItem);
      } else {
        next({ name: "NoItemError", message: "No item found" });
      }
    } catch (error) {
      console.error(error);
      next({
        name: "DeleteCartItemError",
        message: "Could not remove item from cart",
      });
    }
  }
);

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
