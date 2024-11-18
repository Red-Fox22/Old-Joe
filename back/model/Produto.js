const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {
    codProduto: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    fabricanteId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'fabricantes',
            key: 'codFabricante'
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
    precoProduto: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    descricaoProduto:{
        type: DataTypes.STRING(40),
        allowNull: false
    }
},{
    tableName: 'produtos',
    createdAt: false,
    updatedAt: false 
})

module.exports = Produto