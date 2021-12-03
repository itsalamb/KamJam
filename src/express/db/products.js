const { client } = require("./index");

async function getAllProducts() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM products;
      `);

    return rows;
  } catch (error) {
    throw error;
  }
}

// async function getProductsById(productId) {
//   try {
//     const { rows: [product] } = await client.query(`
//       SELECT *
//       FROM products
//       WHERE id=$1;
//     `, [productId]);

//     if (!product) {
//       throw {
//         name: "ProductNotFoundError",
//         message: "Could not find a post with that postId"
//       };
//     }
//     return post;
//   } catch (error) {
//     throw (error)
//   }
// }

// async function getProductsByCategoryName(categoryName) {
//   //   try {
//   //     const { rows } = await client.query(`
//   //         SELECT *
//   //         FROM prdoducts;
//   //         WHERE id=$1
//   //         `, [category]);

//   //     return rows;
//   //   } catch (error) {
//   //     throw error;
//   //   }
//   // }

module.exports = {
  getAllProducts,
  // getProductsByCategoryName,
};
