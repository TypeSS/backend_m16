const mssql = require('mssql');
const con = require('../connection');

const getRestaurantes = async ()=> {
    const pool = await con;
    const result = await pool.request().query("SELECT * FROM Restaurantes")
    return result.recordsets[0];
}

const getCategorias = async()=> {
    const pool = await con;
    const result = await pool.request().query("SELECT * FROM Categorias")
    return result.recordsets[0];
}
module.exports = {
    getRestaurantes,
    getCategorias
}