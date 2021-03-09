var mongoose = require("mongoose");
// const UserModel = require("../database/userModel.js");
// const ProductModel = require("../database/productModel.js");
const bcrypt = require("bcrypt");
// const { signupValidation, loginValidation } = require("../auth");
const jwt = require("jsonwebtoken");
// const OrderModel= require("../database/order.js")
const OrderModel= require("../models/orderModule.js")

module.exports.cOrder = async function (req, res) {
    console.log(req.body)
    try {
      const order = await OrderModel.create(req.body);
      res.send(order);
    } catch (err) {
      res.send(err);
    }
  };