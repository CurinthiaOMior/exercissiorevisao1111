const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Carga = db.define('carga', {
    codCarga: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    volume: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    codigoRastreio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idMotorista: {
        type: DataTypes.INTEGER,
        references: {
            model: "motoristas",
            key: 'codMotorista'
        }
    }
},{
    timestamps: false,
    tableName: 'cargas'
})
module.exports = Carga