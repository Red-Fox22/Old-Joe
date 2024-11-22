let btn_t1 = document.getElementById('btn_t1')

let produtos = []

function adicionarCarrinho(e){
    let nomeProduto = e.target.getAttribute('data-nomeProduto')
    let precoProduto = e.target.getAttribute('data-precoProduto')
    let codProduto = e.target.getAttribute('data-codProduto')
    let quantidadeProduto = e.target.parentElement.querySelector('#qtde').value
    let produto = {
        nomeProduto: nomeProduto,
        precoProduto: precoProduto,
        codProduto: codProduto,
        quantidadeProduto: quantidadeProduto
    }
    produtos.push(produto)
    console.log(produtos)

    localStorage.setItem('produtos',JSON.stringify(produtos))
}


btn_t1.addEventListener('click', adicionarCarrinho)