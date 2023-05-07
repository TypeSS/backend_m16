require("dotenv").config()
const express = require("express");
var router = express.Router();
const userController = require('./Controllers/usercontroller');

router.get('/teste/:id',userController.getusers)


module.exports = router;