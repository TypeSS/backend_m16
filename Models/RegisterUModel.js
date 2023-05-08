const mssql = require('mssql');
const con = require('../connection');

const regUser = async (nome, email, telefone, morada, password)=>{
    const pool = await con;
    const result = await pool.request().input("nome", mssql.VarChar, nome)
    .input("email", mssql.VarChar, email).input("telefone", mssql.Int, telefone)
    .input("morada", mssql.VarChar, morada).input("password", mssql.VarChar, password)
    .query("INSERTO INTO Utilizadores (nome, email, telefone, morada, password) VALUES (@nome, @email, @telefone, @morada, @password)")
    return result.recordsets[0];
}

module.exports = {
    regUser
}