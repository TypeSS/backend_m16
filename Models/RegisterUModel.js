const mssql = require('mssql');
const con = require('../connection');

const regUser = async (user)=>{
    const pool = await con;
    const result = await pool.request().input("nome", mssql.VarChar, user.nome)
    .input("email", mssql.VarChar, user.email).input("telefone", mssql.Int, user.telefone)
    .input("morada", mssql.VarChar, user.morada).input("password", mssql.VarChar, user.password)
    .input("codPostal", mssql.VarChar(255), user.codPostal)
    .query("INSERT INTO Utilizadores (nome, email, telefone, morada, password, codPostal) VALUES (@nome, @email, @telefone, @morada, @password, @codPostal)")

    return result.recordsets[0];
}

const regAdmin = async (user)=>{
    const pool = await con;
    const result = await pool.request().input("nome", mssql.VarChar, user.nome)
    .input("email", mssql.VarChar, user.email).input("telefone", mssql.Int, user.telefone)
    .input("morada", mssql.VarChar, user.morada).input("password", mssql.VarChar, user.password)
    .input("codPostal", mssql.VarChar(255), user.codPostal).input('id_cargo', mssql.Int, user.id_cargo)
    .query("INSERT INTO Funcionarios (nomefunc, email, telefone, morada, password, codPostal, id_cargo) VALUES (@nome, @email, @telefone, @morada, @password, @codPostal, @id_cargo)")
    return result.recordsets[0];
}

module.exports = {
    regUser,
    regAdmin
}