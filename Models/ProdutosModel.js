const mssql = require('mssql');
const con = require('../connection');


const getProdutos = async()=>{
    const pool = await con;
    const result = await pool.request().query("SELECT Produtos.id_produto, Produtos.nomeproduto, Produtos.descricao, Produtos. preco, Categorias.categoria, Categorias.id_categoria,  Produtos.imagem from Produtos inner join Categorias on Categorias.id_categoria = Produtos.id_categoria order by categoria")
    return result.recordsets[0];
}



    const getProdutospC = async (id)=>{
        const pool = await con;
        const result = await pool.request().input("id_categoria", mssql.Int, id).query("SELECT nomeproduto, descricao, preco, Categorias.categoria, Produtos.imagem FROM Produtos inner join Categorias on Produtos.id_categoria = Categorias.id_categoria where Produtos.id_categoria = @id_categoria")
        return result.recordsets[0];
    }

    const CriarProd = async(prod)=>{
        const pool = await con;
        const result = await pool
    .request()
    .input("nomeproduto", mssql.VarChar(255), prod.nomeproduto)
    .input("descricao", mssql.VarChar(255), prod.descricao)
    .input("preco", mssql.Int, prod.preco)
    .input("id_categoria", mssql.Int, prod.id_categoria)
    .input("imagem", mssql.VarChar(255),prod.imagem)
    .query("INSERT INTO Produtos (nomeproduto, descricao, preco, id_categoria, imagem) VALUES (@nomeproduto, @descricao, @preco, @id_categoria, @imagem)");

    return result.recordsets[0]
    }

    const updateProduto = async(prod)=>{

    const pool = await con; 
    const result = await pool
    .request()
    .input("id_produto", mssql.Int, prod.id_produto)
    .input("nomeproduto", mssql.VarChar(255), prod.nomeproduto)
    .input("descricao", mssql.VarChar(255), prod.descricao)
    .input("preco", mssql.Int, prod.preco)
    .input("id_categoria", mssql.Int, prod.id_categoria)
    .query("UPDATE Produtos SET nomeproduto = @nomeproduto, descricao = @descricao, preco = @preco, id_categoria = @id_categoria WHERE id_produto = @id_produto");

    return result.recordsets[0]
    }

    const deleteProduto = async (id)=>{
        const pool = await con;
        const result = await pool
        .request()
        .input("id_produto",mssql.Int, id)
        .query("DELETE FROM Produtos where id_produto = @id_produto")

        console.log(id)
        return result.recordsets[0]
    }

module.exports = {
    getProdutos,
    getProdutospC,
    CriarProd,
    updateProduto,
    deleteProduto
}