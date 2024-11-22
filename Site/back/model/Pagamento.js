const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Pagamento = db.define('pagamento', {
    codPagamento: {
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
    dataVencimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    valorPagamento: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    tableName: 'pagamentos',
    createdAt: false,
    updatedAt: false 
})

module.exports = Pagamento