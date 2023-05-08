const mssql = require('mssql');
const con = require('../connection');

const getLogin = async (email, password)=>{
    const pool = await con;
    const result = await pool.request().input("email", mssql.VarChar,email).input("password", mssql.VarChar, password)
    .query("SELECT email, password from Utilizadores where email = @email AND password = @password")
    return result.recordsets[0];
}

module.exports = {
    getLogin
}