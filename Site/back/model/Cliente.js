const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Cliente = db.define('cliente', {
    codCliente: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nomeCliente: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    sobrenomeCliente: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    cpfCliente: {
        type: DataTypes.STRING(14),
        allowNull: false
    },
    telefoneCliente: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    emailCliente: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    logradouro:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    numero:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    complemento:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    bairro:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    localidade:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    uf:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    statusCliente:{
            type: DataTypes.STRING(20),
            allowNull: false
    }
},{
    tableName: 'clientes',
    createdAt: false,
    updatedAt: false
})

module.exports = Cliente