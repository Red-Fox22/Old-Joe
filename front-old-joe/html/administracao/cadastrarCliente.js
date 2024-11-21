let res = document.getElementById('res')
let cadastrarCliente = document.getElementById('cadastrarCliente')

cadastrarCliente.addEventListener('click', (e) => {
    e.preventDefault()

    let nomeCliente = document.getElementById('nomeCliente').value
    let sobrenomeCliente = document.getElementById('sobrenomeCliente').value
    let cpfCliente = document.getElementById('cpfCliente').value
    let telefoneCliente = document.getElementById('telefoneCliente').value
    let emailCliente = document.getElementById('emailCliente').value
    let senha = document.getElementById('senha').value
    /*------------------------------------------------------------------------------*/

    let logradouro = document.getElementById('logradouro').value
    let numero = document.getElementById('numero').value
    let complemento = document.getElementById('complemento').value
    let bairro = document.getElementById('bairro').value
    let localidade = document.getElementById('localidade').value
    let uf = document.getElementById('uf').value
    let cep = document.getElementById('cep').value
    let statusCliente = document.getElementById('statusCliente').value

    /*------------------------------------------------------------------------------*/

    const dados = {
        nomeCliente: nomeCliente,
        sobrenomeCliente: sobrenomeCliente,
        cpfCliente: cpfCliente,
        telefoneCliente: telefoneCliente,
        emailCliente: emailCliente,
        senha: senha,
        /*------------------------------------------------------------------------------*/
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        localidade: localidade,
        uf: uf,
        cep: cep,
        localidade: localidade,
        statusCliente: statusCliente
    }

    fetch('http://localhost:3000/cliente', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
            alert('Cliente Cadastrado com Sucesso!')
        })
        .catch((err) => {
            console.error("Não foi possível cadastrar o Usuário", err)
        })
})