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

async function getCart({ cartId, productId, quantity }) {
  try {
    const {
      rows: [cart],
    } = await client.query(`
  SELECT *
  FROM cart
  `);

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { addToCart, removeFromCart, updateQuantityInCart, getCart };
