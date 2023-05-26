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

module.exports = { 
    getUsers,
    getUserspId
}