const Funcionario = require('../models/Funcionario')
const CryptoJS = require('crypto-js')
const chavesecreta = 'bernardoeoretrogostodeacai'

const login = async(req,res) => {
    const valores = req.body

    if(!valores.email || !valores.senha) return res.status(400).json({message: 'informe seu email'})

    try{
        const funcionario = await Funcionario.findOne({where: {email: valores.email}})

        if(!funcionario)return res.stauts(404).json({message: 'usuario nao encontrado'})

        const bytes = CryptoJS.AES.decrypt(funcionario.senha, chavesecreta)
        const senhadb = bytes.toString(CryptoJS.enc.Utf8)

        if(valores.senha !== senhadb) return res.status(401).json({message: 'senha incorreta'})

        const tempolimite = 3 * 60 * 60 * 1000
        const tempoexpiracao = Date.now() + tempolimite

        const payload = {
            idMotorista: funcionario.codMotorista,
            nome: funcionario.nome,
            expiraem: tempoexpiracao
        }

        const token =  CryptoJS.AES.encrypt(JSON.stringify(payload), chavesecreta).toString()

        return res.status(200).json({ message: 'login realizado com sucesso', token: token, nome: funcionario.nome})
        }catch(err){
            console.error('Erro ao tentar fazer o login', err)
            return res.status(500).json({message: 'Erro ao tentar fazer o login'})
    }
}
module.exports = {login}