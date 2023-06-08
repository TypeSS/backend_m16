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

const userupdate = async(req, res)=>{

    const user = {
        id:req.body.id_utilizador,
        nome:req.body.nome,
        email:req.body.email,
        telefone:req.body.telefone,
        morada:req.body.morada,
        codPostal:req.body.codPostal
    };

    console.log(user)
    const resp = await sql.updateUser(user);
    return res.status(200).json(resp); 
}

const usercount = async(req, res)=>{
    const result = await sql.userCount()
    console.log(result)
    return res.status(200).json(result)
}
module.exports={
    getusers,
    userupdate,
    usercount,
    getuserspid
}