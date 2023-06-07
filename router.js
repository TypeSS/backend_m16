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
router.post('/reservas', reservaController.criarRes)
router.get('/reserva', reservaController.getres)
router.put('/estadoreserva', reservaController.mudarestado)
router.get('/restaurantes', restauranteController.getrestaurante)
router.get('/categorias', restauranteController.getcategorias)
router.get('/mesasres/:id_restaurante', reservaController.getmesasres)
//#endregion

//#region Users
router.get('/users',userController.getusers)
router.get('/usercount',userController.usercount)
router.put('/updateuser',userController.userupdate)
router.post('/register', registerController.createUser)
router.post('/login', loginController.loginInfo)
//#endregion

//#region Produtos
router.get('/produto', produtosController.getProd)
router.get('/produtocategoria/:id', produtosController.getprodC)
router.get('/pratosdodia/:id', pdController.getPD)

//#endregion


module.exports = router;