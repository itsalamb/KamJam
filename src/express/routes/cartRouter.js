const express = require("express");
const {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantityInCart,
  getCartByUserId,
} = require("../db/cart");
const { requireUser } = require("./utils");
const cartRouter = express.Router();

cartRouter.use((req, res, next) => {
  console.log("A request is being made to /cart");

  next();
});

cartRouter.get("/", requireUser, async (req, res, next) => {
  const { id } = req.user;
  console.log("USERRRRR:", id);

  try {
    const currentCart = await getCartByUserId(id);
    res.send(currentCart);
  } catch (error) {
    console.error(error);
    next({
      name: "GetCartByUserIdError",
      message: `Could not get your cart`,
    });
  }
});

cartRouter.post("/", requireUser, async (req, res, next) => {
  const { userId, productId, quantity } = req.body;
  const cartItem = { userId, productId, quantity };

  try {
    const cart = await addToCart(cartItem);

    res.send({ cart });
  } catch (error) {
    console.error(error);
    next({
      name: "AddToCartError",
      message: "Error adding item to cart",
    });
  }
});

// Delete item from cart

cartRouter.delete(
  "/product/:productId",
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

cartRouter.delete("/", requireUser, async (req, res, next) => {
  const { id } = req.user;

  try {
    const emptyCart = await clearCart(id);
    console.log("EMPTY CARTTTTTT:", emptyCart);
    if (emptyCart) {
      res.send(emptyCart);
    } else {
      next({ name: "NoCartError", message: "No cart found" });
    }
  } catch (error) {
    console.error(error);
    next({
      name: "DeleteCartItemError",
      message: "Could not clear the cart",
    });
  }
});

// Update quantity in cart

cartRouter.patch("/", async (req, res, next) => {
  try {
    const updatedQty = await updateQuantityInCart(req.body);
    res.send(updatedQty);
  } catch (error) {
    console.error(error);
    next({
      name: "UpdateQtyError",
      message: "Error updating the quantity in cart",
    });
  }
});

module.exports = cartRouter;
