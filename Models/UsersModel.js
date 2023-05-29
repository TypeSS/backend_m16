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

const updateUser = async (i, nome, email,telefone, morada, codPostal )=>{
    const pool = await con;
    const result = await pool.request().input("id_utilizador", mssql.Int, id).input("nome", mssql.VarChar(255), nome).input("email",mssql.VarChar(255),email).input("telefone", mssql.Int, telefone).input("morada", mssql.VarChar(255), morada).input("codigoP", mssql.VarChar("255"), codPostal).query("UPDATE Utilizadores SET nome = @nome, email = @email, telefone = @telefone, morada = @morada, codPostal = @codPostal where id_utilizador = @id_utilizador")
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