let res = document.getElementById('res')
let list = document.getElementById('list')

list.addEventListener('click', ()=>{

    fetch(`http://localhost:3000/fabricantes`)
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML = '<hr>'
        dados.forEach(dad => {
           res.innerHTML += 'Código: ' + dad.codFabricante + '<br>'
           res.innerHTML += 'Marca: ' + dad.marcaFabricante + '<br>'
           res.innerHTML += 'CNPJ: ' + dad.cnpjFabricante + '<br>'
           res.innerHTML += '<hr>'
           res.style.textAlign = 'center'
        })
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })
})