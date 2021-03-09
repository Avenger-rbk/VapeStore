var mongoose = require("mongoose");
// const UserModel = require("../database/userModel.js");
// const ProductModel = require("../database/productModel.js");
const ProductModel = require("../models/productModel.js");

const bcrypt = require("bcrypt");
// const { signupValidation, loginValidation } = require("../auth");
const jwt = require("jsonwebtoken");
// const OrderModel= require("../database/order.js")
module.exports.findAll = async function (req, res) {
    try {
      const products = await ProductModel.find({});
      res.send(products);
    } catch (error) {
      res.send(error);
    }
  };