const mssql = require('mssql');
const con = require('../connection');
let idEnc;



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

const criarEncomenda = async(encomendas)=>{
 const pool = await con;
 const result = await pool.request().input("id_utilizador", mssql.Int, encomendas.id_utilizador)
 .input("id_restaurante", mssql.Int, encomendas.id_restaurante)
 .input("tipoEnc", mssql.VarChar(255), encomendas.tipoEnc)
 .input("estado", mssql.VarChar(255), encomendas.estado)
 .output("id_encomenda", mssql.Int)
 .query("DECLARE @output TABLE (id_encomenda INT); INSERT INTO Encomendas (id_utilizador, id_restaurante, tipoEnc, estado) OUTPUT inserted.id_encomenda VALUES (@id_utilizador, @id_restaurante, @tipoEnc, @estado); SELECT id_utilizador FROM @output;")

 idEnc = result.recordset[0].id_utilizador;
 console.log(idEnc);
}
module.exports = {
    getRestaurantes,
    getCategorias,
    criarEncomenda
}