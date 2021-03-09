

var mongoose = require("mongoose");
const UserModel = require("../models/userModel.js");
const ProductModel = require("../models/productModel.js");
// const bcrypt = require("bcrypt");
// const { signupValidation, loginValidation } = require("../auth");
// const jwt = require("jsonwebtoken");
const OrderModel= require("../models/orderModule.js")
module.exports.findAll = async function (req, res) {
    try {
      const products = await ProductModel.find({});
      res.send(products);
    } catch (error) {
      res.send(error);
    }
  };
  
  module.exports.addprod = async function (req, res) {
    console.log(req.body)
    try {
      const product = await ProductModel.create(req.body);
      res.send(product);
    } catch (err) {
      res.send(err);
    }
  };
  
  module.exports.deleteOne = async function (req, res) {
    console.log(req.params._id);
    try {
      const product = await ProductModel.findByIdAndDelete({
        _id: req.params.id,
      });
      res.send(product);
    } catch (err) {
      res.send(err);
    }
  };
  module.exports.updateprod = async function (req, res) {
    const prod = {
      imageUrl: req.body.imageUrl,
      title: req.body.title,
      stock: req.body.stock,
      description: req.body.description,
    };
    try {
      let product = await ProductModel.findOne({ _id: req.params.id })
      let update = await product.update(prod) 
      res.send(update);
    } catch (err) {
      res.send(err);
    }
  };
  module.exports.findAllusers = async function (req, res) {
    try {
      const products = await UserModel.find({});
      res.send(products);
    } catch (error) {
      res.send(error);
    }
  };
  module.exports.deleteUser = async function (req, res) {
    console.log(req.params._id);
    try {
      const product = await UserModel.findByIdAndDelete({
        _id: req.params.id,
      });
      res.send(product);
    } catch (err) {
      res.send(err);
    }
  };
  module.exports.findAllOrders = async function (req, res) {
    try {
      const order = await OrderModel.find({});
      res.send(order);
    } catch (error) {
      res.send(error);
    }
  };