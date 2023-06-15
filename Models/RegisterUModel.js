const mssql = require('mssql');
const con = require('../connection');

const regUser = async (user)=>{
    const pool = await con;
    const result = await pool.request().input("nome", mssql.VarChar, user.nome)
    .input("email", mssql.VarChar, user.email).input("telefone", mssql.Int, user.telefone)
    .input("morada", mssql.VarChar, user.morada).input("password", mssql.VarChar, user.password)
    .input("codPostal", mssql.VarChar(255), user.codPostal)
    .output("id_utilizador", mssql.Int)
    .query(" DECLARE @output TABLE (id_utilizador INT); INSERT INTO Utilizadores (nome, email, telefone, morada, password) OUTPUT inserted.id_utilizador VALUES (@nome, @email, @telefone, @morada, @password, @codPostal); SELECT id_utilizador FROM @output;")
    const insertedId = result.recordset[0].id_utilizador;
    console.log(insertedId);

    return result.recordsets[0];
}

module.exports = {
    regUser
}