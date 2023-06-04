const ReservasModel = require("../Models/ReservasModel")

const getres = async (req,res)=>{
    const resp = await ReservasModel.getReservas();
    return res.status(200).json(resp); 
}

const criarRes = async (req,res)=>{

    const reserva = {
        id_restaurante: req.body.id_restaurante,
        id_utilizador: req.body.id_utilizador,
        data: req.body.data,
        horas: req.body.horas,
        observacoes: req.body.observacoes,
        nPessoas: req.body.nPessoas
    }

    const resp = await ReservasModel.CriarReserva(reserva);

    return res.status(200).json(resp);
}

const mudarestado = async(req,res) => {
    const estado = {
        situacao: req.body.situacao,
        id_reserva: req.body.id_reserva
    }

    const resp = await ReservasModel.mudarEstado(estado)
    return res.status(200).json(resp);
}

module.exports = {
    criarRes,
    getres,
    mudarestado
}