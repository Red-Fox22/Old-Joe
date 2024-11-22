const { Produto } = require('../model/associacao')

const cadastrarProduto = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = Produto.create(valores, { raw: true })
        res.status(201).json({ message: "Cadastro Concluído com Sucesso" })
    } catch (err) {
        console.error('Erro ao cadastrar o usuário', err)
        res.status(500).json({ message: 'Erro ao cadastrar o usuário' })
    }
}

module.exports = { cadastrarProduto }