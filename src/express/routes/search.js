const express = require("express");
const searchRouter = express.Router();

searchRouter.use((req, res, next) => {
    console.log("A request is being made to /search");

    next();   
})

searchRouter.get("/", async (req, res, next) => {
    const { term } = req.query

    console.log('term:', term)

    res.send({
        term,
    })
  });

  module.exports = searchRouter