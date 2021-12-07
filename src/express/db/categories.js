const { client } = require("./index");
const getProductById = require("./products")

// async function getAllCategories() {
//   try {
//     const { rows } = await client.query(`
//         SELECT *
//         FROM categories;
//         `);

//     return { rows };
//   } catch (error) {
//     throw error;
//   }
// }

async function getCategoryByName(categoryName) {
  try {
    const {
      rows: [category],
    } = await client.query(
      `
        SELECT *
        FROM categories
        WHERE name=$1;
        `,
      [categoryName]
    );

    return category;
  } catch (error) {
    throw error;
  }
}

async function getProductsByCategoryName(categoryName) {
  
    const { rows: products } = await client.query(
      `
        SELECT *
        FROM products
        WHERE "categoryName"=$1;
        `,
      [categoryName]
    );

    return products
}

module.exports = {
  getCategoryByName,
  getProductsByCategoryName,
};
