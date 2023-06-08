const mssql = require("mssql");
const con = require('../connection')

const getUsers = async ()=>{
    const pool = await con;
    const result = await pool.request()
    .query("SELECT * FROM Utilizadores");
    return result.recordsets[0];
}

 const  getUserspId = async (id) =>{
    const pool = await con;
    const result = await pool.request().input("id_utilizador",mssql.Int,id).query('SELECT * FROM Utilizadores WHERE id_utilizador = @id_utilizador')
    return result.recordsets[0];
}

const updateUser = async (user)=>{
    const pool = await con;
    const result = await pool.request().input("id_utilizador", mssql.Int, user.id).input("nome", mssql.VarChar(255), user.nome).input("email",mssql.VarChar(255),user.email).input("telefone", mssql.Int, user.telefone).input("morada", mssql.VarChar(255), user.morada).input("codPostal", mssql.VarChar("255"), user.codPostal).query("UPDATE Utilizadores SET nome = @nome, email = @email, telefone = @telefone, morada = @morada, codPostal = @codPostal where id_utilizador = @id_utilizador")
    return result.recordsets[0]
}

const userCount = async ()=>{
    const pool = await con;
    const result = await pool.request().query("SELECT count(nome) from Utilizadores")
    return result.recordsets[0]
}



module.exports = { 
    getUsers,
    getUserspId,
    userCount,
    updateUser
}