// code to build and initialize DB goes here
const {
  client,
  // other db methods
} = require("./index");

async function rebuildDB() {
  try {
    await client.query(/*sql*/ `
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS products;
      DROP TYPE IF EXISTS condition_enum;
    `);

    await client.query(/*sql*/ `
      DROP TABLE IF EXISTS cart;
    `);

    await client.query(/*sql*/`
      CREATE TABLE cart(
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "productId" INTEGER REFERENCES products(id),
        quantity INTEGER NOT NULL
      );
      CREATE TABLE users(
        id  SERIAL PRIMARY KEY, 
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL, 
        password VARCHAR(255) NOT NULL
      );

      CREATE TYPE condition_enum as ENUM('New', 'Used');

      CREATE TABLE products(
        id  SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        imageurl TEXT,
        condition condition_enum,
        inventory INTEGER,
        price DECIMAL
      );
    `)    
    // drop tables in correct order
    // build tables in correct order
  } catch (error) {
    throw error;
  }
}

async function seedData() {
  try {
    const users = [
      {
        email: "kamjamtest@gmail.com",
        password: "kamjampassword000",
        name: "KamJam Test",
      },
      {
        email: "kyletest@gmail.com",
        password: "kyletestpassword123",
        name: "Kyle Test",
      },
      {
        email: "austintest@gmail.com",
        password: "austintestpassword456",
        name: "Austin Test",
      },
      {
        email: "marktest@gmail.com",
        password: "marktestpassword789",
        name: "Mark Test",
      },
    ];

    for (const user of users) {
      await client.query(
        /*sql*/ `
      INSERT INTO users
      (email, password, name)
      VALUES ($1, $2, $3);
    `,
        [user.email, user.password, user.name]
      );
    }

  const products = [
    { name: "Gibson Les Paul",
      description: "The legendary class guitar",
      imageurl: 'https://static.gibson.com/product-images/USA/USAI9Q269/Heritage%20Cherry%20Sunburst/front-300_600.png',
      condition: "New",
      inventory: 1,
      price: 1000
  }
  ];

  for(const product of products) {
    await client.query(/*sql*/`
      INSERT INTO products
      (name, description, imageurl, condition, inventory, price)
      VALUES ($1, $2, $3, $4, $5, $6);
      `, [product.name, product.description, product.imageurl, product.condition, product.inventory, product.price ]);
  }

  const carts = [
    {userId: 1, productId: 1, quantity: 2}
  ];

  for (const cart of carts) {
    await client.query(/*sql*/`
      INSERT INTO cart
      ("userId", "productId", quantity)
      VALUES ($1, $2, $3);
    `,[cart.userId, cart.productId, cart.quantity]);
  }

  // create useful starting data
  } catch (error) {
    throw error;
  }
}

module.exports = {
  rebuildDB,
  seedData,
};
