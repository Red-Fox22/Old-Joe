let compras = document.getElementById('compras')
let btn_resumo = document.getElementById('btn_resumo')

console.log(btn_resumo)

btn_resumo.addEventListener('click', () => {
    let carrinho = JSON.parse(localStorage.getItem('produtos'))
    console.log(carrinho)
    compras.innerHTML = ''

    let total = 0.0

    carrinho.forEach(prod => {
        total += (prod.precoProduto * prod.quantidadeProduto)
        compras.innerHTML += `Produto: ${prod.nomeProduto}
                                <br> R$ ${prod.precoProduto}
                                <br>Quantidade: ${prod.quantidadeProduto}<br>`
    })

    console.log(total)
    compras.innerHTML += '<hr>'
    compras.innerHTML += `Total: R$ ${total}`

})