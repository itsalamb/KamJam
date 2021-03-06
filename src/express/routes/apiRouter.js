const express = require("express");
const apiRouter = require("express").Router();

const jwt = require("jsonwebtoken");
const { getUserById } = require("../db/users.js");
const { JWT_SECRET } = process.env;

apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");
  console.log("AUTH:", auth);

  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const { id } = jwt.verify(token, JWT_SECRET);

      if (id) {
        req.user = await getUserById(id);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

apiRouter.use((req, res, next) => {
  if (req.user) {
    console.log("User is set:", req.user);
  }

  next();
});

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const productsRouter = require("./products");
apiRouter.use("/products", productsRouter);

const categoriesRouter = require("./categories");
apiRouter.use("/categories", categoriesRouter);

const cartRouter = require("./cartRouter.js");
apiRouter.use("/cart", cartRouter);

const searchRouter = require("./search");
apiRouter.use("/search", searchRouter);

apiRouter.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send({
    name: error.name,
    message: error.message,
  });
});

module.exports = apiRouter;
