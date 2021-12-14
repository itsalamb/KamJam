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

async function removeFromCart({ cartId, productId }) {
  const { rows } = await client.query(
    `
    DELETE FROM cart
    WHERE cart.id=$1 and cart."productId"=$2
    RETURNING *
    `,
    [cartId, productId]
  );

  return rows[0];
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

async function getCartById(cartId) {
  try {
    const { rows: cart } = await client.query(
      `
      SELECT products.name, products.description, products.imageurl, products.price
      FROM cart
      JOIN products
      ON "productId" = products.id
      WHERE cart.id=$1
  `,
      [cartId]
    );

    return cart;
  } catch (error) {
    throw error;
  }
}

async function getCartByUserId(userId) {
  try {
    const { rows: cart } = await client.query(
      `
      SELECT products.name, products.imageurl, products.price, quantity
      FROM cart
      JOIN products
      ON "productId" = products.id
      WHERE "userId"=$1
  `,
      [userId]
    );

    return cart;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addToCart,
  removeFromCart,
  updateQuantityInCart,
  getCartById,
  getCartByUserId,
};
