const RestauranteModel = require('../Models/RestauranteModel')

const getrestaurante = async (req,res)=>{
    const resp = await RestauranteModel.getRestaurantes()
    return res.status(200).json(resp)
}

const getcategorias = async (req,res)=>{
    const resp = await RestauranteModel.getCategorias();
    return res.status(200).json(resp)
}

const criarenc = async (req, res) => {
    try {
      let estado = "Preparação";
      const encomendas = {
        id_utilizador: req.body.id_utilizador,
        id_restaurante: req.body.id_restaurante,
        tipoEnc: req.body.tipoEnc,
        estado: estado,
        precototal: req.body.precototal,
      };
  
      const resp = await RestauranteModel.criarEncomenda(encomendas);
      return res.status(200).json(resp);
    } catch (error) {
      return res.status(500).json({ error: "Erro" });
    }
}

  const prodenc = async (req, res) => {
    try {
      const prodEnc = req.body
    const resps = []

    for(let i = 0; i<prodEnc.length; i++){
    const resp = await RestauranteModel.prodEnc(prodEnc[i])
    resps.push(resp);
    }
    return res.status(200).json(resps);
    } catch (error) {
      return res.status(500).json({ error: "Erro"+error });
    }
  };
  

  const getenc = async (req,res)=>{
    try{
      const resp = await RestauranteModel.getEncomendas();
    return res.status(200).json(resp)
    }
    catch(error){
      return res.status(500).json({ "Erro":error })
    }
  }

  const getenccli= async(req,res)=>{
    try{
      let id = req.params.id
      const resp = await RestauranteModel.getEncomendasCli(id);
      return res.status(200).json(resp)
    }
    catch(error){
      return res.status(500).json({ "Erro":error })
    }
  }


  const getprodenc = async (req, res)=>{
    try{
      let id = req.params.id
      const resp = await RestauranteModel.getProdEnc(id)
      return res.status(200).json(resp)
    }
    catch(error){
      return res.status(500).json({ "Erro":error })
    }
  }

  const lucro = async (req,res)=>{
    const resp = await RestauranteModel.Lucro();
    return res.status(200).json(resp)
  }
module.exports = {
    getrestaurante,
    getcategorias,
    criarenc,
    prodenc,
    getenc,
    getenccli,
    getprodenc,
    lucro
}