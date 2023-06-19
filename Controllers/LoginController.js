const login = require("../Models/LoginModel")
const con = require("../connection")
const bcrypt = require('bcrypt')
const { password } = require("../dbConfig")


const getLogin = async (req,res)=>{

const user = {
    email: req.body.email,
    password: req.body.password
}

const resp = await login.login(user)
return res.status(200).json(resp)
}

const loginAdmin = async(req,res)=>{
const user = {
    email:req.body.email,
    password:req.body.password
}

console.log(user)
const resp = await login.loginadmin(user)
console.log(resp)

return res.status(200).json(resp)
}

module.exports = {
    loginInfo: getLogin,
    loginAdmin
}