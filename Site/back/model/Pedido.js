const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Pedido = db.define('pedido', {
    codPedido: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    clienteId:{
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'codCliente'
        }
    },
    dataPedido: {
        type: DataTypes.DATE,
        allowNull: false
    },
    valorPedido: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    tableName: 'pedidos',
    createdAt: false,
    updatedAt: false 
})

module.exports = Pedido
