const ReservasModel = require("../Models/ReservasModel")

const getreservas = async (req, res) => {
    const resp = await ReservasModel.GetReservas();
    return res.status(200).json(resp)
}

const criarRes = async (req,res)=>{

    const reserva = {
        id_restaurante: req.body.id_restaurante,
        id_utilizador: req.body.id_utilizador,
        data: req.body.data,
        horas: req.body.horas,
        observacao: req.body.observacao
    }

    const resp = await ReservasModel.CriarReserva(reserva.id_restaurante, reserva.id_utilizador, reserva.data, reserva.horas, reserva.observacao)

    return res.status(200).json(resp);
}

module.exports = {
    criarRes
}