const { Fabricante } = require('../model/associacao')


const cadastrarFabricante = async (req,res)=>{
    const valores = req.body
    console.log(valores)
    try{
        const pesq = await Fabricante.create(valores, { raw: true})
        res.status(201).json(pesq)
    }catch(err){
        console.error('Erro a cadastrar o Fabricante!',err)
        res.status(500).json({message: 'Erro a cadastrar o Fabricante!'})
    }
}

const listarFabricante = async (req,res)=>{
    try{
        const pesq = await Fabricante.findAll()
        res.status(200).json(pesq)
    }catch(err){
        console.error('Erro a listar o Fabricante!',err)
        res.status(500).json({message: 'Erro a listar o Fabricante!'})
    }
}

const consultarFabricante = async (req,res)=>{
    const valor = req.query
    console.log(valor)
    try{
        const pesq = await Fabricante.findOne({where: { marca: valor.marca}})
        if(pesq === null){
            console.log('Marca não encontrada no banco de dados!')
            res.status(404).json({message: "Marca não encontrada no banco de dados!"})
        }else{
            console.log(pesq)
            res.status(200).json(pesq)
        }
    }catch(err){
        console.error('Erro a consultar o Fabricante!',err)
        res.status(500).json({message: 'Erro a consultar o Fabricante!'})
    }
}

const apagarFabricante = async (req,res)=>{
    const valor = req.params
    console.log(valor)
    try{
        const pesq = await Fabricante.findByPk(valor.id)
        if(pesq === null){
            console.log(pesq)
            res.status(404).json({message: "Fabricante não existe no banco de dados!"})
        }else{
            await Fabricante.destroy({where: { codFabricante: valor.id}})
            res.status(200).json({message: "Fabricnate Excluído do banco de dados!"})
        }
    }catch(err){
        console.error('Erro ao excluir o Fabricante!',err)
        res.status(500).json({message: 'Erro ao excluir o Fabricante!'})
    }
}

const atualizarFabricante = async (req,res)=>{
    const valores = req.body
    console.log(valores)
    try{
        const pesq = await Fabricante.findByPk(valores.codFabricante)
        if(pesq === null){
            console.log(pesq)
            res.status(404).json({message: "Fabricante não encontrado no banco de dados!"})
        }else{
            await Fabricante.update(valores, {where: { codFabricante: valores.codFabricante}})
            const pesq2 = await Fabricante.findByPk(valores.codFabricante)
            res.status(200).json(pesq2)
        }
    }catch(err){
        console.error('Erro ao atualizar o Fabricante!',err)
        res.status(500).json({message: 'Erro ao atualizar o Fabricante!'})
    }
}

module.exports = { cadastrarFabricante, listarFabricante, 
    consultarFabricante, apagarFabricante, atualizarFabricante }