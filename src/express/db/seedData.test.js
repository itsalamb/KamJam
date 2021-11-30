const { client } = require("./index");
const { rebuildDB, seedData } = require("./seedData");

describe("rebuildDB", () => {
  beforeAll(async () => {
    await client.connect();
  });

  afterAll(async () => {
    await client.end();
  });

  it("should create the users table", async () => {
    await rebuildDB();
    const { rows } = await client.query(/*sql*/ `
      SELECT * FROM users;
    `);
    expect(rows).toBeTruthy();
  });

  it("should create the default test user", async () => {
    await rebuildDB();
    await seedData();
    const { rows } = await client.query(
      /*sql*/ `
      SELECT * from users
      WHERE email = $1
    `,
      ["kamjamtest@gmail.com"]
    );
    expect(rows.length).toBe(1);
  })
  
  it("should create the products table", async () => {
    await rebuildDB();
    const { rows } = await client.query(/*sql */`
      SELECT * FROM products;
    `);
    expect(rows).toBeTruthy();
  });
}); 
