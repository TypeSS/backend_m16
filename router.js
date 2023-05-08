require("dotenv").config()
const express = require("express");
var router = express.Router();
const userController = require('./Controllers/usercontroller');
const produtosController = require('./Controllers/ProdutosController')
const loginController = require('./Controllers/LoginController')
const pdController = require('./Controllers/PdController')

router.get('/teste/:id',userController.getusers)

router.get('/produto/:id', produtosController.getProdC)

router.post('/login', loginController.loginInfo)

router.get('/pratosdodia/:id', pdController.getPD)


module.exports = router;