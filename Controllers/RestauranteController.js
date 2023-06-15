const RestauranteModel = require('../Models/RestauranteModel')

const getrestaurante = async (req,res)=>{
    const resp = await RestauranteModel.getRestaurantes()
    return res.status(200).json(resp)
}

const getcategorias = async (req,res)=>{
    const resp = await RestauranteModel.getCategorias();
    return res.status(200).json(resp)
}

const criarnec = async(req,res)=>{
    let estado = "Preparação"
    const encomendas = {
        "id_utilizador":req.body.id_utilizador,
        "id_restaurante":req.body.id_restaurante,
        "tipoEnc":req.body.tipoEnc,
        "estado":estado
    }

    
    const resp = await RestauranteModel.criarEncomenda()
}

const prodenc = async (req,res)=>{
    const produtos = req.body

    for(let i = 0;i<produtos.length;i++){
        const resp = await RestauranteModel.prodEnc(produtos[i])
    }
}
module.exports = {
    getrestaurante,
    getcategorias
}