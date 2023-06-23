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

const deleteuser = async(req,res)=>{
    let id = req.params.id
    const resp = await sql.deleteUser(id)
    return res.status(200).json(resp)
}

const getadmin = async (req, res)=>{
    const resp = await sql.getAdmin();
    return res.status(200).json(resp)
}

const adminupdate = async(req, res)=>{

    const user = {
        id:req.body.id_funcionario,
        nome:req.body.nomefunc,
        email:req.body.email,
        telefone:req.body.telefone,
        morada:req.body.morada,
        codPostal:req.body.codPostal
    };

    console.log(user)
    const resp = await sql.updateAdmin(user);
    return res.status(200).json(resp); 
}

const deleteadmin = async(req,res)=>{
    let id = req.params.id
    const resp = await sql.deleteUser(id)
    return res.status(200).json(resp)
}
module.exports={
    getusers,
    userupdate,
    usercount,
    getuserspid,
    deleteuser,
    getadmin,
    adminupdate,
    deleteadmin
}