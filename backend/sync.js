const {Carga, Entrega, Motorista, Funcionario } = require('./models/rell')
const db = require('./db/conn')

async function syncDB() {
    try{
        await db.sync({force:true})
    }catch(err){
        console.log('erro', err)
    }finally{
        await db.close()
    }
}
syncDB()