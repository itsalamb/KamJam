// code to build and initialize DB goes here
const {
  client,
  // other db methods
} = require("./index");

async function rebuildDB() {
  try {
    await client.query(/*sql*/ `
      DROP TABLE IF EXISTS users;
    `);

    await client.query(/*sql*/ `
      CREATE TABLE users(
        id  SERIAL PRIMARY KEY, 
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL, 
        password VARCHAR(255) NOT NULL
      );
    `); // drop tables in correct order
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

    // create useful starting data
  } catch (error) {
    throw error;
  }
}

module.exports = {
  rebuildDB,
  seedData,
};
