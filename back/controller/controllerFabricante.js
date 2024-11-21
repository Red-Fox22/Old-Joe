const { Fabricante } = require('../model/associacao')

const cadastrarFabricante = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = Fabricante.create(valores, { raw: true })
        res.status(201).json({ message: "Cadastro Concluído com Sucesso" })
    } catch (err) {
        console.error('Erro ao cadastrar o fabricante', err)
        res.status(500).json({ message: 'Erro ao cadastrar o fabricante' })
    }
}

/*------------------------------------------------*/

const listarFabricante = async (req, res) => {
    try {
        const pesq = await Fabricante.findAll()
        res.status(200).json(pesq)
    } catch (err) {
        res.status(500).json({ message: 'Erro na listagem dos Fabricantes' })
    }
}

module.exports = { cadastrarFabricante, listarFabricante }