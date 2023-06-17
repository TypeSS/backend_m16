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
  
      const { recordset, insertedId } = await RestauranteModel.criarEncomenda(encomendas);
      const resp = { recordset, insertedId };
      console.log(resp)
      return res.status(200).json(resp);
    } catch (error) {
      return res.status(500).json({ error: "Erro" });
    }
    
    const resp = await RestauranteModel.criarEncomenda(encomendas)
}

  const prodenc = async (req, res) => {
    try {
      const prodEnc = req.body;
      const resps = [];
  
      for (let i = 0; i < prodEnc.length; i++) {
        const resp = await RestauranteModel.prodEnc(prodEnc[i], req.body.insertedId);
        resps.push(resp);
      }
  
      return res.status(200).json(resps);
    } catch (error) {
      return res.status(500).json({ error: "Erro" });
    }
  };
  

module.exports = {
    getrestaurante,
    getcategorias,
    criarenc,
    prodenc
}