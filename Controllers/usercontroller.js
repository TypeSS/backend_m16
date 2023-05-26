const sql = require("../Models/UsersModel");

const getusers = async(req,res)=>{
    const resp = await sql.getUsers()
    return res.status(200).json(resp)
}

const getuserspid = async (req,res)=>{
    let id = req.params.id;
    const resp = await sql.getUserspId(id);
    return res.status(200).json(resp)
}

module.exports={
    getusers
}