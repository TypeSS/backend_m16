const RestauranteModel = require('../Models/RestauranteModel')

const getrestaurante = async (req,res)=>{
    const resp = await RestauranteModel.getRestaurantes()
    return res.status(200).json(resp)
}

const getcategorias = async (req,res)=>{
    const resp = await RestauranteModel.getCategorias();
    return res.status(200).json(resp)
}
module.exports = {
    getrestaurante,
    getcategorias
}