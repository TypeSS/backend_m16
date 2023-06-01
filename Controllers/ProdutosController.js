const produtos = require("../Models/ProdutosModel");

const getprodutos = async (req,res)=>{
const resp = await produtos.getProdutos();
return res.status(200).json(resp);
}

const getprodC = async (req,res)=>{
    let id = req.params.id
    const resp = await produtos.getProdutospC(id);
    return res.status(200).json(resp);
}

module.exports = {
    getProd : getprodutos,
    getprodC
}