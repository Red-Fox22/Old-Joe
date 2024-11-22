const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('old-joe','root','senai',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('Banco de dados Conectado!')
}).catch((err)=>{
    console.error('Não foi possível conectar com  o banco de dados!', err)
})

module.exports = sequelize