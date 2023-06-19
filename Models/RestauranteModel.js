const mssql = require('mssql');
const con = require('../connection');
let idEnc;


const getRestaurantes = async ()=> {
    const pool = await con;
    const result = await pool.request().query("SELECT * FROM Restaurantes order by nome_restaurante")
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
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      
      
  };

  const getEncomendas = async ()=>{
    const pool = await con;
    const result = await pool.request().query("SELECT Encomendas.id_encomenda, Utilizadores.nome, Restaurantes.nome_restaurante, Encomendas.precototal, Encomendas.tipoEnc, Encomendas.estado from Encomendas inner join Utilizadores on Utilizadores.id_utilizador = Encomendas.id_utilizador inner join Restaurantes on Encomendas.id_restaurante = Restaurantes.id_restaurante");
    return result.recordsets[0];
  }


  const getEncomendasCli = async (id)=>{
    const pool = await con;
    const result = await pool.request().input("id_utilizador", mssql.Int,id).query("SELECT Encomendas.id_encomenda, Utilizadores.nome, Restaurantes.nome_restaurante, Encomendas.precototal, Encomendas.tipoEnc, Encomendas.estado from Encomendas inner join Utilizadores on Utilizadores.id_utilizador = Encomendas.id_utilizador inner join Restaurantes on Encomendas.id_restaurante = Restaurantes.id_restaurante where Utilizadores.id_utilizador = @id_utilizador");
    return result.recordsets[0];
  }

  const getProdEnc = async (id)=>{
    const pool = await con;
    const result = await pool.request().input("id_encomenda", mssql.Int, id)
    .query("SELECT ProdEnc.id_encomenda, Produtos.nomeproduto, ProdEnc.quant, ProdEnc.preco FROM produtos INNER JOIN ProdEnc ON Produtos.id_produto = ProdEnc.id_produto INNER JOIN Encomendas ON ProdEnc.id_encomenda = Encomendas.id_encomenda WHERE Encomendas.id_encomenda = @id_encomenda")
    return result.recordsets[0];
  }
  
module.exports = {
    getRestaurantes,
    getCategorias,
    criarEncomenda,
    prodEnc,
    getEncomendas,
    getEncomendasCli,
    getProdEnc
}