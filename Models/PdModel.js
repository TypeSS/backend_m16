const mssql = require('mssql');
const con = require('../connection');

const getPD = async (id)=>{
    const pool = await con;
    const result = await pool.request().input("id_ocasiao", mssql.Int,id).query("SELECT nomeproduto, preco, categoria, ocasiao from Produtos inner join PratosDoDia on Produtos.id_produto = PratosDoDia.id_produto inner join Categorias on Produtos.id_categoria = Categorias.id_categoria inner join Ocasioes on PratosDoDia.id_ocasiao = Ocasioes.id_ocasiao WHERE Ocasioes.id_ocasiao = @id_ocasiao")
    
    return result.recordsets[0];
}

module.exports = {
    getPD
}