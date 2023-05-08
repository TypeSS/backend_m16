const login = require("../Models/LoginModel")
const con = require("../connection")
const bcrypt = require("bcrypt");

const regiUser = async (req,res)=>{
const pass = bcrypt.hash(req.body.password, 10);

const user = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    morada: req.body.morada,
    password: pass
}
const resp = await login.getLogin(user.nome, user.email, user.telefone, user.morada, user.password)

return res.status(200).json(resp);

}

module.exports = {
    createUser: regiUser
}