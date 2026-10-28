const Funcionario = require('../models/Funcionario')
const CryptoJS = require('crypto-js')
const chavesecreta = 'bernardoeoretrogostodeacai'

const cadastrar = async(req,res)=>{
    try{
        const valores = req.body
        const senhaCripto = CryptoJS.AES.encrypt(valores.senha, chavesecreta).toString()
        const valores2 = {
            nome: valores.nome,
            email: valores.email,
            senha: senhaCripto
        }
        Funcionario.create(valores2)
        res.status(201).json({message: 'dados criados'})
    }catch(err){
        console.error('erro', err)
        res.status(500).json({message: 'internalError(500)'})
    }
}
module.exports = {cadastrar}