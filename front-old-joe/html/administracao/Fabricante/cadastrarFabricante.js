let res = document.getElementById('res')
let cadastrarFabricante = document.getElementById('cadastrarFabricante')

cadastrarFabricante.addEventListener('click', (e) => {
    e.preventDefault()

    let nomeFabricante = document.getElementById('nomeFabricante').value
    let marcaFabricante = document.getElementById('marcaFabricante').value
    let cnpjFabricante = document.getElementById('cnpjFabricante').value
    let telefoneFabricante = document.getElementById('telefoneFabricante').value
    let emailFabricante = document.getElementById('emailFabricante').value

    /*------------------------------------------------------------------------------*/

    let logradouro = document.getElementById('logradouro').value
    let numero = document.getElementById('numero').value
    let complemento = document.getElementById('complemento').value
    let bairro = document.getElementById('bairro').value
    let localidade = document.getElementById('localidade').value
    let uf = document.getElementById('uf').value
    let cep = document.getElementById('cep').value

    /*------------------------------------------------------------------------------*/

    const dados = {
        nomeFabricante: nomeFabricante,
        marcaFabricante: marcaFabricante,
        cnpjFabricante: cnpjFabricante,
        telefoneFabricante: telefoneFabricante,
        emailFabricante: emailFabricante,
        /*------------------------------------------------------------------------------*/
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        localidade: localidade,
        uf: uf,
        cep: cep,
        localidade: localidade
    }

    fetch('http://localhost:3000/fabricante', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
            alert('Fabricante Cadastrado com Sucesso!')
        })
        .catch((err) => {
            console.error("Não foi possível cadastrar o Fabricante", err)
        })
})