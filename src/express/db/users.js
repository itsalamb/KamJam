const { client } = require("./index");

async function getAllUsers() {
  try {
    const { rows } = await client.query(`
      SELECT id, email, password, name
      FROM users;
      `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function createUser({ email, password, name }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users(email, password, name) 
        VALUES($1, $2, $3) 
        ON CONFLICT (email) DO NOTHING 
        RETURNING *;
      `,
      [email, password, name]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT id, email, name
      FROM users
      WHERE id=$1
      `,
      [userId]
    );

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE email=$1`,
      [email]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

// export
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  // db methods
};
