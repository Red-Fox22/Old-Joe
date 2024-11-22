const express = require("express")
const app = express()
const cors = require("cors")
const conn = require("./db/conn")

const controllerCliente = require("./controller/controllerCliente")
const controllerProduto = require("./controller/controllerProduto")
const controllerFabricante = require("./controller/controllerFabricante")


const PORT = 3000
const hostname = 'localhost'

/*------------------------------------------------*/

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
/*================== Controllers =================*/


app.post('/cliente', controllerCliente.cadastrarCliente)
app.get('/clientes', controllerCliente.listarCliente)
app.get('/cliente', controllerCliente.consultarCliente)
app.delete('/cliente/:id', controllerCliente.apagarCliente)
app.put('/cliente', controllerCliente.atualizarCliente)

/*------------------------------------------------*/

app.post('/produto', controllerProduto.cadastrarProduto)
app.get('/produtos', controllerProduto.listarProduto)
app.get('/produto', controllerProduto.consultarProduto)
app.delete('/produto/:id', controllerProduto.apagarProduto)
app.put('/produto', controllerProduto.atualizarProduto)

/*------------------------------------------------*/

app.post('/fabricante', controllerFabricante.cadastrarFabricante)
app.get('/fabricantes', controllerFabricante.listarFabricante)
app.get('/fabricante', controllerFabricante.consultarFabricante)
app.delete('/fabricante/:id', controllerFabricante.apagarFabricante)
app.put('/fabricante', controllerFabricante.atualizarFabricante)

/*------------------------------------------------*/


/*------------------------------------------------*/

app.get('/', (req, res)=>{
    res.status(200).json({message: 'Aplicação rodando'})
})

/*------------------------------------------------*/

conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor Rodando em ${hostname}:${PORT}`)
    })
}).catch((err)=>{
    console.error('Erro de conexão com o Banco de Dados', err)
})