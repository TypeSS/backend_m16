const reg = require("../Models/RegisterUModel")
const con = require("../connection")
const bcrypt = require("bcrypt");

const regiUser = async (req,res)=>{

const pass = await bcrypt.hash(req.body.password, 10);

console.log(pass)

const user = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    morada: req.body.morada,
    password: pass
}

const resp = await reg.regUser(user.nome, user.email, user.telefone, user.morada, user.password)

return res.status(200).json(resp);

}

module.exports = {
    createUser: regiUser
}