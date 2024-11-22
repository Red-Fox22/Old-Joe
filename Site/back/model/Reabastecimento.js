const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Reabastecimento = db.define('reabastecimento', {
    codReabastecimento: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    estoqueId: { 
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'estoques',
            key: 'codEstoque'
        }
    },
    nomeProduto:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    quantidadeEstoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataReabastecimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    tableName: 'reabastecimentos',
    createdAt: false,
    updatedAt: false 
})

module.exports = Reabastecimento