const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users.controller.js")
const AdminController = require("../controllers/admin.contollers.js")
const Authcontroller = require("../controllers/auth.controller.js")
const OrderController = require("../controllers/orders.controller.js")
const ProductController = require("../controllers/products.controller.js")

// const verify = require("./verifyToken.js")
router.get("/users", AdminController.findAllusers);
// router.post('/create', Controller.createOne);
// router.post('/login', Controller.findUser)
//ADMIN
router.get("/products", AdminController.findAll);
router.post('/add', AdminController.addprod)
router.delete('/delete/:id', AdminController.deleteOne)
router.put('/update/:id', AdminController.updateprod)
router.delete('/remove/:id', AdminController.deleteUser)
module.exports = router;
