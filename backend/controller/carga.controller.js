const Carga = require('../models/Carga')
const chavesecreta = 'bernardoeoretrogostodeacai'

const cadastrar = async(req,res)=>{
    try{
        const valores = req.body
        
        Carga.create(valores)
        res.status(201).json({message: 'dados criados'})
    }catch(err){
        console.error('erro', err)
        res.status(500).json({message: 'internalError(500)'})
    }
}
module.exports = {cadastrar}