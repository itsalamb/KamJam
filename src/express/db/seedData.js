// code to build and initialize DB goes here
const {
  client,
  // other db methods
} = require("./index")

async function rebuildDB() {
  try {
    await client.query(/*sql*/`
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS products;
    `);

    await client.query(/*sql*/`
      CREATE TABLE users(
        id  SERIAL PRIMARY KEY, 
        username VARCHAR(255) UNIQUE NOT NULL, 
        password VARCHAR(255) NOT NULL
      );

      CREATE TABLE products(
        id  SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        imageurl TEXT,
        "categoriesId" VARCHAR(255) NOT NULL,
        condition ENUM(New, Used),
        inventory INTEGER,
        price DECIMAL
      );
    `)    
    // drop tables in correct order
    // build tables in correct order
  } catch (error) {
    throw error
  }
}

async function seedData() {
  try {

  const users = [
    { username: "testuser", password: "testuser999" }
  ];

  for(const user of users) {
    await client.query(/*sql*/`
      INSERT INTO users
      (username, password)
      VALUES ($1, $2);
    `,[user.username, user.password]);
  }

  const products = [
    { username: "testuser", password: "testuser999" }
  ];

  for(const product of products) {
    await client.query(/*sql*/`
      INSERT INTO products
      (name, description, imageurl, categoriesId, condition, inventory, price)
      VALUES ($1, $2, $3, $4, $5, $6, $7);
      `, [products.name, products.description, products.imgaeurl, products.catagoriesId, products.condition, products.inventory, products.price ]);
  }

  // create useful starting data
  } catch (error) {
    throw error
  }
}

module.exports = {
  rebuildDB,
  seedData,
}
