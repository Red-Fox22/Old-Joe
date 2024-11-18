const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Estoque = db.define('estoque', {
    codEstoque: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    produtoId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'codProduto'
        }
    },
    nomeProduto:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    quantidadeEstoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'estoques',
    createdAt: false,
    updatedAt: false 
})

module.exports = Estoque