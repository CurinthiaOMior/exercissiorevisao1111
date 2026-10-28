const CryptoJS = require('crypto-js')
const chavesecreta = 'bernardoeoretrogostodeacai'

function authMiddleware(req,res,next){
    const token = req.headers['authorization'] || ''

    if(!token) return res.status(401).json({message: 'acesso negada'})
        try{
            const bytes = CryptoJS.AES.decrypt(token, chavesecreta)
            const dadosDescriptografados = bytes.toString(CryptoJS.enc.Utf8)

            if(!dadosDescriptografados) return res.status(401).json({message: 'token invalido'})
        
            const payload = JSON.parse(dadosDescriptografados)
            
            if(Date.now() > payload.expiraem) return res.status(401).json({message: 'sessão expirada'})

            req.usuario = payload
            next()
        }catch(err){
            return res.status(500).json({message: 'erro na autenticação'})
        }
}
module.exports = authMiddleware
