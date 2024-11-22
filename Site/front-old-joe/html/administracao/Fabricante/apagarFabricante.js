let res = document.getElementById('res')
let apag = document.getElementById('apag')

apag.addEventListener('click', ()=>{
    const codFabricante = document.getElementById('codFabricante').value

    fetch(`http://localhost:3000/fabricante/${codFabricante}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        },
    })
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        alert('Fabricante Apagado com Sucesso!')
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })

})