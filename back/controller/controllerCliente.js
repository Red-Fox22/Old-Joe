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
const atualizarCliente = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Cliente.findByPk(valores.codCliente)
        if (pesq === null) {
            console.log(pesq)
            res.status(404).json({ message: "Cliente não encontrado no banco de dados!" })
        } else {
            await Cliente.update(valores, { where: { codCliente: valores.codCliente } })
            const pesq2 = await Cliente.findByPk(valores.codCliente)
            res.status(200).json(pesq2)
        }
    } catch (err) {
        console.error('Erro ao atualizar o Cliente!', err)
        res.status(500).json({ message: 'Erro ao atualizar o Cliente!' })
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

module.exports = { cadastrarCliente, listarCliente, atualizarCliente }