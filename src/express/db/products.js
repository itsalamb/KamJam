const { client } = require("./index");

async function getAllProducts() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM prdoducts;
      `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getProductsByCategoryName(categoryName) {
    try {
      const { rows } = await client.query(`
        SELECT *
        FROM prdoducts;
        WHERE id=$1
        `,[category]);
  
      return rows;
    } catch (error) {
      throw error;
    }
}

module.exports = {
    getAllProducts,
    getProductsByCategoryName,
}
