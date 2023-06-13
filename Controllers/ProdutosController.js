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

const criarprod = async (req, res)=>{
    const prod ={
        nomeproduto:req.body.nomeproduto,
        descricao:req.body.descricao,
        preco:req.body.preco,
        id_categoria:req.body.id_categoria
    }

    const resp = await produtos.CriarProd(prod)
    return res.status(200).json(resp);
}

const updateprod = async(req,res)=>{
    const prod ={
        nomeproduto:req.body.nomeproduto,
        descricao:req.body.descricao,
        preco:req.body.preco,
        id_categoria:req.body.id_categoria
    } 

    const resp = await produtos.updateProduto(prod);
    return res.status(200).json(resp);
}




module.exports = {
    getProd : getprodutos,
    getprodC,
    criarprod,
    updateprod
}