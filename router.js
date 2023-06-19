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
router.get('/mesasres/:id_restaurante', reservaController.getmesasdispo)
router.post('/mesasres', reservaController.mesares)
router.get('/reservas/:id',reservaController.rescli)
router.post('/encomenda', restauranteController.criarenc)
router.post('/prodenc', restauranteController.prodenc)
router.get('/encomenda', restauranteController.getenc)
router.get('/prodenc/:id', restauranteController.getprodenc)
//#endregion

//#region Users
router.get('/users',userController.getusers)
router.get('/usercount',userController.usercount)
router.get('/user/:id', userController.getuserspid)
router.put('/updateuser',userController.userupdate)
router.post('/register', registerController.createUser)
router.post('/login', loginController.loginInfo)
router.delete('/cliente/:id', userController.deleteuser)
//#endregion


//#region 
router.post('/adminreg', registerController.regadmin)
router.post('/adminlogin', loginController.loginAdmin)
//#endregion

//#region Produtos
router.get('/produto', produtosController.getProd)
router.get('/produtocategoria/:id', produtosController.getprodC)
router.get('/pratosdodia/:id', pdController.getPD)
router.get('/ocasioes', pdController.Ocasioes)
router.post('/produto',produtosController.upload,produtosController.criarprod)
router.put('/updateProduto', produtosController.updateprod)
router.delete('/produto/:id', produtosController.deleteprod)
//#endregion


module.exports = router;