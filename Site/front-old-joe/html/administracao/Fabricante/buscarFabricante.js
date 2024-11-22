let res = document.getElementById('res')
let consult = document.getElementById('consult')

consult.addEventListener('click', ()=>{
    const marcaFabricante = document.getElementById('marcaFabricante').value

    fetch(`http://localhost:3000/fabricante?marcaFabricante=${marcaFabricante}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML += 'Código: ' + dados.codFabricante + '<br>'
        res.innerHTML += 'Marca: ' + dados.marcaFabricante + '<br>'
        res.innerHTML += 'CNPJ: ' + dados.cnpjFabricante + '<br>'
    })
    .catch((err)=>{
        console.error('Erro ao buscar os dados!',err)
    })
})