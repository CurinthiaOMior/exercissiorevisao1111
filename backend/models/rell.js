const Carga = require("./Carga");
const Entrega = require("./Entrega");
const Funcionario = require("./Funcionario");
const Motorista = require("./Motorista");

//motorista

Motorista.hasMany(Carga, {
    foreignKey: "idMotorista",
    as: "motoristacarga",
    onDelete: "CASCADE"
})
Carga.belongsTo(Motorista, {
    foreignKey: "idMotorista",
    as: "cargaMotorista"
})

//carga
Carga.hasMany(Entrega, {
    foreignKey: "idCarga",
    as: "cargaEntrega",
    onDelete: "CASCADE"
})
Entrega.belongsTo(Carga, {
    foreignKey: "idCarga",
    as: "entregaCarga"
})

module.exports = {Carga, Entrega, Motorista, Funcionario }