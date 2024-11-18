const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const ItemPedido = db.define('itemPedido', {
    codItemPedido: {
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
    produtoId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'codProduto'
        }
    },
    quantidadeProduto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precoProduto: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
}, {
    tableName: 'itemPedidos',
    createdAt: false,
    updatedAt: false
})

module.exports = ItemPedido
