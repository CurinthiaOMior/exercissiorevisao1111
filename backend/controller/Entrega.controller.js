const Entrega = require('../models/Entrega')
const chavesecreta = 'bernardoeoretrogostodeacai'

const cadastrar = async(req,res)=>{
    try{
        const valores = req.body
        
        Entrega.create(valores)
        res.status(201).json({message: 'dados criados'})
    }catch(err){
        console.error('erro', err)
        res.status(500).json({message: 'internalError(500)'})
    }
}
module.exports = {cadastrar}