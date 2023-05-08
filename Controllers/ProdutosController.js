const produtos = require("../Models/ProdutosModel");

const getprodutos = async (req,res)=>{
let id = req.params.id
const resp = await produtos.getProdutos(id);
return res.status(200).json(resp);
}

module.exports = {
    getProdC : getprodutos
}