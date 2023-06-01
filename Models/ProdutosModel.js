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

module.exports = {
    getProdutos,
    getProdutospC
}