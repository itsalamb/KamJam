const apiRouter = require("express").Router();
const usersRouter = require("./users");
const productsRouter = require("./products")
const categoriesRouter = require("./categories")

// GET /api

apiRouter.use((req, res, next) => {
  if (req.user) {
    console.log("User is set:", req.user);
  }

  next();
});

apiRouter.use("/users", usersRouter);
apiRouter.use("/products", productsRouter)
apiRouter.use("/categories", categoriesRouter)

// This is a sample route
apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send({
    name: error.name,
    message: error.message,
  });
});

// use your sub-routers here

module.exports = apiRouter;
