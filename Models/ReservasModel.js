const mssql = require('mssql');
const con = require('../connection');


const CriarReserva = async (reserva)=> {
    sitaucao = "Pendente";
    const pool = await con;
    const result = await pool.request().input("id_restaurante", mssql.Int, reserva.id_restaurante).input("id_utilizador", mssql.Int, reserva.id_utilizador).input("data", mssql.VarChar(10), reserva.data).input("horas", mssql.VarChar(5), reserva.horas).input("situacao", mssql.VarChar(255), sitaucao).input("observacoes", mssql.VarChar(255), reserva.observacoes).input("nPessoas", mssql.Int, reserva.nPessoas).query("INSERT INTO Reservas (id_restaurante, id_utilizador, data, horas, situacao, observacoes, nPessoas) VALUES (@id_restaurante, @id_utilizador, @data, @horas, @situacao, @observacoes, @nPessoas)");

    
    return result.recordsets[0]
}

const getReservas = async ()=> {
    const pool = await con;
    const result = await pool.request().query("select id_reserva, Reservas.id_restaurante, [dbo].[Utilizadores].nome, [dbo].[Restaurantes].nome_restaurante, data, horas, nPessoas, situacao, observacoes from [dbo].[Reservas] inner join [dbo].[Utilizadores] on [dbo].[Utilizadores].id_utilizador = [dbo].[Reservas].id_utilizador inner join [dbo].[Restaurantes] on [dbo].[Restaurantes].id_restaurante = [dbo].[Reservas].id_restaurante");
    return result.recordsets[0]
}

const mudarEstado = async (estado)=>{
    const pool = await con;
    const result = await pool.request().input("situacao", mssql.VarChar(255), estado.situacao).input("id_reserva", mssql.Int, estado.id_reserva).query("UPDATE Reservas SET situacao = @situacao where id_reserva = @id_reserva")
    return result.recordsets[0]
}

getMesasRes = async (restaurante)=>{
const pool = await con;
const result = await pool.request().input("id_restaurante", mssql.Int,restaurante).query("SELEct id_mesa, lugares, nome_restaurante from Mesas inner join Restaurantes on Mesas.id_restaurante = Restaurantes.id_restaurante WHERE NOT EXISTS(SELECT * from ResMesa inner join Reservas on Reservas.id_reserva = ResMesa.id_reserva where Mesas.id_mesa = ResMesa.id_mesa and Reservas.data = ResMesa.data and Reservas.horas= ResMesa.horas) and Mesas.id_restaurante = @id_restaurante")
return result.recordsets[0]
}



module.exports = {
    getReservas,
    CriarReserva,
    mudarEstado,
    getMesasRes
}