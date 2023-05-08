const login = require("../Models/LoginModel")
const con = require("../connection")
const bcrypt = require('bcrypt')
const { response, json } = require("express")

const getLogin = async (req,res)=>{
const user = {
    email: req.body.email,
    password: req.body.password
}
const resp = await login.login(user)
return res.status(200).json(resp)
}

module.exports = {
    loginInfo: getLogin
}