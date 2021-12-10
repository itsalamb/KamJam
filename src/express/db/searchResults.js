const { client } = require("./index");

async function getSearchResults(searchTerm) {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM products
        WHERE description LIKE '%${searchTerm}'`);

    return rows;
  } catch (error) {
    console.error(error);
  }
}

module.export = { getSearchResults };
