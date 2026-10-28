const Motorista = require('../models/Motorista')
const CryptoJS = require('crypto-js')
const chavesecreta = 'bernardoeoretrogostodeacai'

const cadastrar = async(req,res)=>{
    try{
        const valores = req.body
        
        const cnhCripto = CryptoJS.AES.encrypt(valores.cnh, chavesecreta).toString()
        const cpfCripto = CryptoJS.AES.encrypt(valores.cpf, chavesecreta).toString()

        const valores2 = {
            nome: valores.nome,
            cnh: cnhCripto,
            cpf: cpfCripto,
            telefone: valores.telefone,
        }
        Motorista.create(valores2)
        res.status(201).json({message: 'dados criados'})
    }catch(err){
        console.error('erro', err)
        res.status(500).json({message: 'internalError(500)'})
    }
}
module.exports = {cadastrar}