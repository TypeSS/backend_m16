const mssql = require('mssql');
const con = require('../connection');
let idEnc;

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
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
=======
const criarEncomenda = async (enc) => {
    const pool = await con;
    const result = await pool
      .request()
      .input("id_utilizador", mssql.Int, enc.id_utilizador)
      .input("id_restaurante", mssql.Int, enc.id_restaurante)
      .input("tipoEnc", mssql.VarChar(255), enc.tipoEnc)
      .input("estado", mssql.VarChar(255), enc.estado)
      .input("precototal", mssql.Numeric(18, 2), enc.precototal)
      .output("id_encomenda", mssql.Int)
      .query(
        "DECLARE @output TABLE (id_encomenda INT); INSERT INTO Encomendas (id_utilizador, id_restaurante, tipoEnc, estado, precototal) OUTPUT inserted.id_encomenda INTO @output VALUES (@id_utilizador, @id_restaurante, @tipoEnc, @estado, @precototal); SELECT id_encomenda FROM @output;"
      );
  
      const insertedId = result.recordset[0].id_encomenda;
      console.log(insertedId)
    return result.recordsets[0], insertedId;
  };
  

  const prodEnc = async (prodEnc, insertedId) => {
      const pool = await con;
    const result = await pool
      .request()
      .input("id_encomenda", mssql.Int, insertedId)
      .input("nomeproduto", mssql.VarChar(255), prodEnc.nomeproduto)
      .input("preco", mssql.Numeric(18, 2), prodEnc.preco)
      .input("quantidade", mssql.Int, prodEnc.quantidade)
      .query(
        "INSERT INTO ProdEnc (id_encomenda, id_produto, quant, preco) VALUES (@id_encomenda, @nomeproduto, @preco, @quantidade)"
      );

      return result.recordsets[0]
  };
  



>>>>>>> Stashed changes
module.exports = {
    getRestaurantes,
    getCategorias,
    criarEncomenda,
    prodEnc
}