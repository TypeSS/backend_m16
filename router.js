require("dotenv").config()
const express = require("express");
var router = express.Router();
const userController = require('./Controllers/usercontroller');
const produtosController = require('./Controllers/ProdutosController')
const loginController = require('./Controllers/LoginController')
const pdController = require('./Controllers/PdController')
const registerController = require('./Controllers/RegisterUController')


router.get('/teste',userController.getusers)

router.get('/produto', produtosController.getProdC)

router.post('/login', loginController.loginInfo)

router.get('/pratosdodia/:id', pdController.getPD)

router.post('/register', registerController.createUser)


module.exports = router;