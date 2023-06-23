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
const addRservas = async(req,res)=>{
    let mesas = req.body.mesas;
 let data = {
    reserva: req.body.id_reserva
 }
 const resp = await ReservasModel.CriarReserva(mesas,data)
}

const getmesasdispo = async (req,res)=>{
    let restaurante = req.params.id_restaurante

    const resp = await ReservasModel.getMesasDispo(restaurante);
    return res.status(200).json(resp);
}

const mesares = async (req,res)=>{
    const info = req.body
    const resps = []
    console.log(info)

    for(let i = 0; i<info.length; i++){
    const resp = await ReservasModel.mesasRes(info[i])
    resps.push(resp);
    }

    console.log(resps)
    return res.status(200).json(resps);
}

const rescli = async(req,res)=>{
    let id = req.params.id
    const resp = await ReservasModel.resCli(id);
    return res.status(200).json(resp);
}

const totalres = async(req,res)=>{
    const resp = await ReservasModel.TotalRes();
    return res.status(200).json(resp);
}

module.exports = {
    criarRes,
    getres,
    mudarestado,
    getmesasdispo,
    mesares,
    rescli,
    totalres
}