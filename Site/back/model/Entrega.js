const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Entrega = db.define('entrega', {
    codEntrega: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    pedidoId: { 
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'pedidos',
            key: 'codPedido'
        }
    },
    nomeProduto:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    quantidadeProduto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataEntrega: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    tableName: 'entregas',
    createdAt: false,
    updatedAt: false 
})

module.exports = Entrega