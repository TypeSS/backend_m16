const sql = require("../Models/UsersModel");

const getusers = async (req,res)=>{
    let id = req.params.id;
    const resp = await sql.getUsers(id);
    return res.status(200).json(resp)
}

module.exports={
    getusers
}