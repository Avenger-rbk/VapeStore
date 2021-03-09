const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/orders.controller.js")
// const verify = require("./verifyToken.js")
router.post('/order/:id', OrderController.createOrder)
router.get('/orders', OrderController.findAllOrders)
router.delete('/deleteOrder/:id', OrderController.deleteOrder)
router.post("/order", OrderController.cOrder)
module.exports = router;
