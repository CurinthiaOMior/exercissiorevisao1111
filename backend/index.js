const express = require('express')
const cors = require('cors')
const db = require('./db/conn')

const authMiddleware = require('./middleware/auth.middleware')
const AuthController = require('./controller/auth.controller')
const FuncionarioController = require('./controller/Funcionario.controller')
const MotoristaController = require('./controller/Motorista.controller')
const CargaController = require('./controller/carga.controller')
const EntregaController = require('./controller/Entrega.controller')

const app = express()
const PORT = 3000
const hostname = 'localhost'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post('/login', AuthController.login)
app.post('/funcionario', FuncionarioController.cadastrar)

app.use(authMiddleware)

app.post('/carga', CargaController.cadastrar)
app.post('/entrega', EntregaController.cadastrar)
app.post('/motorista', MotoristaController.cadastrar)

db.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Erro ao conectar com o banco de dados!', err)
    })