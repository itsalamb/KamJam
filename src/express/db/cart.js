const { client } = require("./index");

async function addToCart({ userId, productId, quantity }) {
  const {
    rows: [cart],
  } = await client.query(
    `
    INSERT INTO cart("userId", "productId", quantity)
    VALUES($1, $2, $3)
    RETURNING *
    `,
    [userId, productId, quantity]
  );

  return cart;
}

async function removeFromCart(userId, productId) {
  const {
    rows: [cart],
  } = await client.query(
    `
    DELETE
    FROM cart
    WHERE cart.id=$1 and cart."productId"=$2
    RETURNING *;
    `,
    [userId, productId]
  );

  return cart;
}

async function updateQuantityInCart({ cartId, productId, quantity }) {
  const {
    rows: [cart],
  } = await client.query(
    `
        UPDATE cart
        SET quantity=$3
        WHERE cart.id=$2 and "productId"=$1
        RETURNING *
        `,
    [cartId, productId, quantity]
  );
}

async function getCartByUserId(userId) {
  const { rows: cart } = await client.query(
    `
      SELECT "productId", products.name, products.imageurl, products.price, quantity
      FROM cart
      JOIN products
      ON "productId" = products.id
      WHERE "userId"=$1
  `,
    [userId]
  );

  return cart;
}

module.exports = {
  addToCart,
  removeFromCart,
  updateQuantityInCart,
  getCartByUserId,
};
