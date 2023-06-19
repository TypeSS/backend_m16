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
    password: pass,
    codPostal:req.body.codPostal
}

const resp = await reg.regUser(user)

return res.status(200).json(resp);

}


const regadmin = async (req,res)=>{


    const pass = await bcrypt.hash(req.body.password, 10);

const user = {
    nomefunc: req.body.nomefunc,
    email: req.body.email,
    telefone: req.body.telefone,
    morada: req.body.morada,
    password: pass,
    codPostal:req.body.codPostal,
    id_cargo:req.body.id_cargo
}

const resp = await reg.regAdmin(user)
return res.status(200).json(resp);
}

module.exports = {
    createUser: regiUser,
    regadmin
}