const { client } = require("./index");

async function getSearchResults(searchTerm) {
    const { rows } = await client.query(`
        SELECT *
        FROM products
        WHERE description ILIKE $1 OR name ILIKE $1`
        ,[`%${searchTerm}%`]);

    return rows;
}

module.exports = { getSearchResults };
