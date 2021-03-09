const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/products.controller.js")
// const verify = require("./verifyToken.js")
router.get("/products", ProductController.findAll);
module.exports = router;
