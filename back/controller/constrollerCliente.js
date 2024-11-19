const { Cliente } = require('../model/associacao')

const cadastrarCliente = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = Cliente.create(valores, { raw: true })
        res.status(201).json({ message: "Cadastro Concluído com Sucesso" })
    } catch (err) {
        console.error('Erro ao cadastrar o usuário', err)
        res.status(500).json({ message: 'Erro ao cadastrar o usuário' })
    }
}

/*------------------------------------------------*/

const listarCliente = async (req, res) => {
    try {
        const pesq = await Cliente.findAll()
        res.status(200).json(pesq)
    } catch (err) {
        res.status(500).json({ message: 'Erro na listagem dos Clientes' })
    }
}

module.exports = { cadastrarCliente, listarCliente }