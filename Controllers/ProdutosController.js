const produtos = require("../Models/ProdutosModel");
const multer = require('multer');
const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
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

    
        const prod = {
          nomeproduto: req.body.nomeproduto,
          descricao: req.body.descricao,
          preco: req.body.preco,
          id_categoria: req.body.id_categoria,
          imagem: req.body.imagem
        };

        const file = req.file;
    
        if(file){
            const accountName = "imgmod16";
            const accountKey = "lVcs4BJFx7fnIIEIQLxZYGLkMMfnhmwkOen4eqQqqZUikuyBKQhDoPNhysa6Eaz7pXAWcY9Z5apU+AStSNPIRQ==";
            const containerName = "teste";

            const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
            const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, sharedKeyCredential);
            const containerClient = blobServiceClient.getContainerClient(containerName);

            const blobName = file.originalname;
            const blockBlobClient = containerClient.getBlockBlobClient(blobName)
            const uploadResponse = await blockBlobClient.upload(file.buffer, file.buffer.length);
        }

        const resp = await produtos.CriarProd(prod)
        return res.status(200).json(resp)    
}

const upload = multer({ storage: multer.memoryStorage() }).single('ficheiro');


const updateprod = async(req,res)=>{
    const prod ={
        nomeproduto:req.body.nomeproduto,
        descricao:req.body.descricao,
        preco:req.body.preco,
        id_categoria:req.body.id_categoria
    } 

    const imagem = Buffer(req.body.ficheiro)

    const resp = await produtos.updateProduto(prod);
    return res.status(200).json(resp);

    
}




module.exports = {
    getProd : getprodutos,
    getprodC,
    criarprod,
    updateprod,
    upload
}