const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  email: String,
  imageUrl: String,
  title: String,
  stock: Number,
  prise: String,
});

module.exports = mongoose.model("order", orderSchema );
