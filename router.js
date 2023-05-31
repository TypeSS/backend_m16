require("dotenv").config()
const express = require("express");
var router = express.Router();
const userController = require('./Controllers/usercontroller');
const produtosController = require('./Controllers/ProdutosController')
const loginController = require('./Controllers/LoginController')
const pdController = require('./Controllers/PdController')
const registerController = require('./Controllers/RegisterUController')
const reservaController = require('./Controllers/ReservasController')
const restauranteController = require('./Controllers/RestauranteController')

//#region Restaurante
router.get('/reserva', reservaController.criarRes)
router.get('/restaurantes', restauranteController.getrestaurante)
//#endregion

//#region Users
router.get('/teste',userController.getusers)
router.get('/usercount',userController.usercount)
router.post('/updateuser',userController.userupdate)
router.post('/register', registerController.createUser)
router.post('/login', loginController.loginInfo)
//#endregion

//#region Produtos
router.get('/produto', produtosController.getProdC)
router.get('/pratosdodia/:id', pdController.getPD)

//#endregion


module.exports = router;