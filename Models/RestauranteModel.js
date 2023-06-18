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
  
  return result.recordsets[0]
  };
  

  const prodEnc = async (prodEnc) => {
      const pool = await con;

      const getId = await pool.request().query("SELECT TOP 1 id_encomenda FROM Encomendas ORDER BY id_encomenda DESC")
      const insertedId = getId.recordset[0].id_encomenda
      console.log(insertedId);
      try {
        const result = await pool
        .request()
        .input("id_encomenda", mssql.Int, insertedId)
        .input("id_produto", mssql.Int, prodEnc.id_produto)
        .input("preco", mssql.Numeric(18, 2), prodEnc.preco)
        .input("quantidade", mssql.Int, prodEnc.quantidade) 
        .query(
          "INSERT INTO ProdEnc (id_encomenda, id_produto, preco, quant) VALUES (@id_encomenda, @id_produto, @preco, @quantidade)"
        );
        return result.recordsets[0]
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      
      
  };
  
module.exports = {
    getRestaurantes,
    getCategorias,
    criarEncomenda,
    prodEnc
}