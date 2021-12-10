const express = require("express");
const searchRouter = express.Router();
const {getSearchResults} = require("../db/searchResults")

searchRouter.use((req, res, next) => {
    console.log("A request is being made to /search");

    next();
})

searchRouter.get("/", async (req, res, next) => {
    try {
        const { term } = req.query
        const products = await getSearchResults(term)

        res.send({
            products,
        })
    } catch (error) {
        console.error(error)
        next({
            name: "searchResultError",
            message: "Could Not Get Search Results"
        })
    } 
});

module.exports = searchRouter