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
    `);
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
// list of products - could be moved to its own file
    const products = [
      //guitars
      {
        name: "Gibson Les Paul Classic",
        description: "The Gibson Les Paul™ Classic combines the early 60's style Les Paul model with some functional and time-tested modifications. As expected, the LP Classic is crafted with a mahogany back and maple top coupled with a slim taper mahogany neck and bound, rosewood fingerboard. BurstBucker™ 61R & 61T zebra, open-coil pickups provide classic Gibson tones from the era with a bit of extra punch thanks to the open coils. The control assembly features 4 push-pull pots which provide choices of coil tapping, phase switching, and pure bypassing for functional and versatile sonic variety.",
        imageurl: "https://static.gibson.com/product-images/USA/USAI9Q269/Translucent%20Cherry/front-banner-1600_900.png",
        condition: "New",
        inventory: 1,
        price: 2299
      },
      {
        name: "Gibson 50s J-45 Original",
        description: "The new 50s J-45 Original model flaunts vintage-inspired detailing from the golden era of Gibson. Classic “Workhorse” materials include a Sitka Spruce top and Select Mahogany back and sides. The multi-ply top and single-ply back binding are subtly antiqued making each instrument look just like a seasoned Gibson acoustic. Appointed with cream button tuners, a 50s-era tortoise pick guard, and upgraded with an LR Baggs® VTC pickup for the best and most natural-sounding tone when amplified. ",
        imageurl: "https://static.gibson.com/product-images/Acoustic/ACCSRX331/Ebony/front-banner-1600_900.png",
        condition: "Used",
        inventory: 1,
        price: 2199,
      },
      {
        name: "Fender Jason Isbell Custom Telecaster",
        description: "The Jason Isbell Custom Telecaster is visually striking – the Chocolate Sunburst pops against the cream double-binding of the ‘59-style Telecaster Custom body while Fender’s Road Worn® aging process gives it the look and feel of a well-used instrument. The vintage-inspired mid-’60s “C”-shaped maple neck and 21-fret rosewood fingerboard combines with the sparkling, fiery tones of the custom Jason Isbell Telecaster Pickups and the chicken-pickin’ playability of the modified bridge to create a guitar that sounds and plays as a good as it looks.",
        imageurl:
          "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0140320364_fen_ins_frt_1_rr.jpg",
        condition: "New",
        inventory: 1,
        price: 1545,
      },
      //drums
      {
        name: "Gretsch Catalina Maple Silver sparkle 6-Piece Shell Pack",
        description: "From its sleek, innovative hardware designs and legendary Gretsch-formula shell, Catalina Maple is a favorite among players that want a terrific sounding Gretsch drum set with ergonomically satisfying playing experience and a fresh, contemporary look.",
        imageurl:
          "https://images.reverb.com/image/upload/s--DDLjauuB--/f_auto,t_large/v1537388722/dev0hoowwuzlunbgfgrf.jpg",
        condition: "New",
        inventory: 1,
        price: 1119,
      },
      {
        name: "Gretsch Custom USA Round Badge Caribbean Twilight 5-piece Shell Pack",
        description: "Heritage Build authentically recaptures the classic look and vibe from the revered Gretsch days of the Big Band and Jazz era. The classic G5472 double-ended lug, fitted with our extra-long tension rods, enriches the look of any Nitron, Satin or Gloss finish on your custom Gretsch drum kit. ",
        imageurl:
          "https://www.gretschdrums.com/sites/default/files/styles/portfolio_portrait_full/public/drums/usa-custom-gallery/USACustomCaribbeanTwilight.png?itok=QpWiOXTx",
        condition: "Used",
        inventory: 1,
        price: 3400,
      },
      {
        name: "Ludwig Classic Maple Pro Beat 5-piece Shell Pack",
        description: "Classic Maple series drums have been the professional choice for over 20 years. Its full tonality, rich sustain, and exceptional versatility has made these drums the premier choice for any performance application.",
        imageurl:
          "https://www.ludwig-drums.com/application/files/cache/0d7bb2496318bfb8fbbb2a421c4fbaa0.jpg",
        condition: "New",
        inventory: 1,
        price: 1011,
      },
      // Band / Orchestra
      {
        name: "Bach 18037 Professional Bb Trumpet",
        description: "The Bach 180 series trumpets are the number one selling professional trumpets in the world. The 18037 features a #37 one-piece hand-hammered professional bell that produces a warm sound with great projection allowing this instrument to work well in multiple musical settings—from jazz to concert or solo playing.",
        imageurl:
          "https://www.conn-selmer.com/application/files/8815/0722/9036/18037.png",
        condition: "New",
        inventory: 1,
        price: 3019,
      },
    ];
    
    for (const product of products) {
      await client.query(
        /*sql*/ `
      INSERT INTO products
      (name, description, imageurl, condition, inventory, price)
      VALUES ($1, $2, $3, $4, $5, $6);
      `,
        [
          product.name,
          product.description,
          product.imageurl,
          product.condition,
          product.inventory,
          product.price,
        ]
      );
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
