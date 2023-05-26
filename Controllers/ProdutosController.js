const produtos = require("../Models/ProdutosModel");

const getprodutos = async (req,res)=>{
const resp = await produtos.getProdutos();
return res.status(200).json(resp);
}

module.exports = {
    getProdC : getprodutos
}