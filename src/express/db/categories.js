const { client } = require("./index");

async function getAllCategories() {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM categories;
        `);

    return { rows };
  } catch (error) {
    throw error;
  }
}

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
  try {
    const { rows: productIds } = await client.query(
      `
        SELECT products.id
        FROM products
        JOIN categories ON products."categoryName"=categories.name
        WHERE categories.name=$1;
        `,
      [categoryName]
    );

    return await Promise.all(
      productIds.map((product) => getProductById(productId))
    );
  } catch (error) {
    throw error;
  }
}

module.export = {
  getAllCategories,
  getCategoryByName,
  getProductsByCategoryName,
};
