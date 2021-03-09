const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  stock: Number,
  description: String,
  prise: String,
});

module.exports = mongoose.model("product", productSchema);
