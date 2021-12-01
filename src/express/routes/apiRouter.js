const apiRouter = require("express").Router();

// GET /api

const express = require("express");
const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
  if (req.user) {
    console.log("User is set:", req.user);
  }

  next();
});

const usersRouter = require("../express/routes/users");
apiRouter.use("/users", usersRouter);

apiRouter.use((error, req, res, next) => {
  res.status(500).send(error);
});

module.exports = apiRouter;

// This is a sample route
apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

// use your sub-routers here

module.exports = apiRouter;
