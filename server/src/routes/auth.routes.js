
const express = require("express");
const router = express.Router();
const Authcontroller = require("../controllers/auth.controller.js")
// const verify = require("./verifyToken.js")

router.post('/create', Authcontroller.createOne);
router.post('/login', Authcontroller.findUser)
module.exports = router;
