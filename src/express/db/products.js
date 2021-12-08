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

async function getProductById(id) {
  try {
    const { rows: product } = await client.query(`
      SELECT *
      FROM products
      WHERE id=$1;
    `, [id]);

    if (!product) {
      throw {
        name: "ProductNotFoundError",
        message: "Could not find a product with that productId"
      };
    }
    return product;
  } catch (error) {
    throw (error)
  }
}

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
  getProductById
};
