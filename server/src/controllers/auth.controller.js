var mongoose = require("mongoose");
// const UserModel = require("../database/userModel.js");
const UserModel = require("../models/userModel.js");

// const ProductModel = require("../database/productModel.js");
const bcrypt = require("bcrypt");
const { signupValidation, loginValidation } = require("../../auth.js");
const jwt = require("jsonwebtoken");
// const OrderModel= require("../database/order.js")
module.exports.createOne = async (req, res) => {
    //VALIDATE THE DATA
    const { error } = signupValidation(req.body);
    if (error) return res.send(error.details[0].message);
  
    //CHECK IF THE USER IS ALREADY IN THE DATABASE
    const emailExist = await UserModel.findOne({ email: req.body.email });
    if (emailExist) return res.send("Email already exists");
  
    //CRATE A NEW USER
    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const saveUser = await newUser.save();
      res.json(saveUser);
    } catch (error) {
      res.json(error);
    }
  };
  module.exports.findUser = async (req, res) => {
    // VALIDATE THE DATA
    if (req.body.email === "admin" && req.body.password === "admin") {
      res.send("admin");
      const token = jwt.sign({ _id: 00 }, "fghfghrtfjyuuikyufiy");
      res.header("auth-token", token);
      res.send({ mesaage: "admin", token: token });
    } else {
      const { error } = loginValidation(req.body);
      if (error) return res.send(error.details[0].message);
  
      try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
          console.log("user not found");
        }
        if (await bcrypt.compare(req.body.password, user.password)) {
          // create and assign a token
          const token = jwt.sign({ _id: user._id }, "fghfghrtfjyuuikyufiy");
          res.header("auth-token", token);
          res.send({ message: "success", token: token });
        } else {
          res.send("Email or password incorrect");
        }
      } catch (err) {
        res.send(err);
      }
    }
  };