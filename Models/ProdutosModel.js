const mssql = require('mssql');
const con = require('../connection');

const getProdutos = async()=>{
    const pool = await con;
    const result = await pool.request().query("SELECT nomeproduto, descricao, preco, Categorias.categoria FROM Produtos inner join Categorias on Produtos.id_categoria = Categorias.id_categoria order by categoria")
    return result.recordsets[0];
}



    const getProdutospC = async (id)=>{
        const pool = await con;
        const result = await pool.request().input("id_categoria", mssql.Int, id).query("SELECT nomeproduto, descricao, preco, Categorias.categoria FROM Produtos inner join Categorias on Produtos.id_categoria = Categorias.id_categoria where Produtos.id_categoria = @id_categoria")
        return result.recordsets[0];
    }

    const CriarProd = async(prod)=>{
        const pool = await con; // Assuming you have a connection pool named "con"
  const result = await pool
    .request()
    .input("nomeproduto", mssql.VarChar(255), prod.nomeproduto)
    .input("descricao", mssql.VarChar(255), prod.descricao)
    .input("preco", mssql.Int, prod.preco)
    .input("id_categoria", mssql.Int, prod.id_categoria)
    .query("INSERT INTO Produtos (nomeproduto, descricao, preco, id_categoria) VALUES (@nomeproduto, @descricao, @preco, @id_categoria)");

    return result.recordsets[0]
    }

module.exports = {
    getProdutos,
    getProdutospC,
    CriarProd
}