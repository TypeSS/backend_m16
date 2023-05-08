const PdModel = require("../Models/PdModel");

const PD = async (req,res)=>{
let id = req.params.id;
const resp = await PdModel.getPD(id);
return res.status(200).json(resp);
}

module.exports = {
    getPD : PD
}