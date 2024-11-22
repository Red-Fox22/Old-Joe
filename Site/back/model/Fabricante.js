const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Fabricante = db.define('fabricante', {
    codFabricante: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nomeFabricante: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    marcaFabricante: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    cnpjFabricante: {
        type: DataTypes.STRING(14),
        allowNull: false
    },
    telefoneFabricante: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    emailFabricante: {
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
    }
},{
    tableName: 'fabricantes',
    createdAt: false,
    updatedAt: false
})

module.exports = Fabricante