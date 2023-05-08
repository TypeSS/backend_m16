const login = require("../Models/LoginModel")
const con = require("../connection")

const getLogin = async (req,res)=>{
const user = {
    email: req.body.email,
    password: req.body.password
}
const resp = await login.getLogin(user.email, user.password)

return res.status(200).json(resp);

}

module.exports = {
    loginInfo: getLogin
}