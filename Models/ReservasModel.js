const mssql = require('mssql');
const con = require('../connection');

const GetReservas = async ()=> {
    const pool = await con;
    const result = await pool.request().query("SELECT * from Reservas");
    return result.recordsets[0];
}

const CriarReserva = async (id_restaurante, id_utilizador, data, hora)=> {
    const pool = await con;
    const result = await pool.request().input("id_restaurante", mssql.Int, id_restaurante).input("id_utilizador", mssql.Int, id_utilizador).input("data", mssql.Date,data).input("hora", mssql.Time, hora).query("INSERT INTO Reservas (id_restaurante, id_utilizador, data, hora) VALUES (@id_restaurante, @id_utilizador, @data, @hora")
}

module.export = {
    GetReservas,
    CriarReserva
}