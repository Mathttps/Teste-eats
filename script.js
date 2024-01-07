let escolha1, escolha2, escolha3;

let salgado, beber, doce;
let pSalgado, pBeber, pDoce;


function comida(elemento) {
    let escolha = document.querySelectorAll('.frango');
    let teste = elemento.classList.contains('borda')

    let nomePrato = elemento.querySelector('h2').innerText;
    let valorPrato = elemento.querySelector('.preco').innerText;


    for (i = 0; i < escolha.length; i++) {
        escolha[i].classList.remove('borda');
        escolha[i].querySelector('.iconic').classList.remove('marked');
    }

    elemento.classList.add('borda');
    elemento.querySelector('.iconic').classList.add('marked');


    escolha1 = true

    if (teste === true) {
        elemento.classList.remove('borda');
        elemento.querySelector('.iconic').classList.remove('marked');
        escolha1 = false
    }


    salgado = nomePrato;
    pSalgado = valorPrato;
    fecharPedido()

}



function bebida(elemento) {
    let escolha = document.querySelectorAll('.bebida');
    let teste = elemento.classList.contains('borda');

    let nomePrato = elemento.querySelector('h2').innerText;
    let valorPrato = elemento.querySelector('.preco').innerText;

    for (i = 0; i < escolha.length; i++) {
        escolha[i].classList.remove('borda');
        escolha[i].querySelector('.iconic').classList.remove('marked');
    }

    elemento.classList.add('borda');
    elemento.querySelector('.iconic').classList.add('marked')

    escolha2 = true

    if (teste === true) {
        elemento.classList.remove('borda');
        elemento.querySelector('.iconic').classList.remove('marked');
        escolha2 = false
    }

    beber = nomePrato;
    pBeber = valorPrato;
    fecharPedido()
}

function sobremesa(elemento) {
    let escolha = document.querySelectorAll('.pudim');
    let teste = elemento.classList.contains('borda')

    let nomePrato = elemento.querySelector('h2').innerText;
    let valorPrato = elemento.querySelector('.preco').innerText;

    for (i = 0; i < escolha.length; i++) {
        escolha[i].classList.remove('borda');
        escolha[i].querySelector('.iconic').classList.remove('marked');
    }

    elemento.classList.add('borda');
    elemento.querySelector('.iconic').classList.add('marked');

    escolha3 = true;

    if (teste === true) {
        elemento.classList.remove('borda');
        elemento.querySelector('.iconic').classList.remove('marked');
        escolha3 = false
    }

    doce = nomePrato;
    pDoce = valorPrato;
    fecharPedido()
}

function fecharPedido() {
    let pedido = document.querySelector(".confirm");
    if (escolha1 && escolha2 && escolha3) {
        pedido.classList.add('verde')
        pedido.innerHTML = "<h1>Fechar pedido</h1>"
        pedido.removeAttribute('disabled');

    } else {
        pedido.classList.remove('verde');
        pedido.innerHTML = "<h1>Selecione os 3 itens <br> para fechar o pedido</h1>"
        pedido.setAttribute('disabled', 'true')
    }
}

function teste(elemento) {
    if (elemento.disabled == false) {
        const nome = prompt('Qual o seu nome?');
        const endereco = prompt('Endereço para entrega?');

        const total = totalSoma();

        const mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${salgado}
    - Bebida: ${beber}
    - Sobremesa: ${doce}
    Total: ${total}
    
    Nome: ${nome}
    Endereço: ${endereco}`;

    const mensWP = encodeURIComponent(mensagem);

    window.open(`https://wa.me/5551995211997?text=${mensWP}`);
    }
}

function totalSoma() {
    let precoPrato = pSalgado.replace('R$', '');
    precoPrato = precoPrato.replace(',', '.');
    precoPrato = Number(precoPrato);

    let precoBebida = pBeber.replace('R$', '');
    precoBebida = precoBebida.replace(',', '.');
    precoBebida = Number(precoBebida);

    let precoDoce = pDoce.replace('R$', '');
    precoDoce = precoDoce.replace(',' , '.');
    precoDoce = Number(precoDoce);

    const total = precoPrato + precoBebida + precoDoce;

    return total.toFixed(2);

}

// salgado, beber, doce;
// pSalgado, pBeber, pDoce;




// var divsCards = document.querySelectorAll('.frango');
// for (var i = 0; i < divsCards.length; i++) {
//     var div = divsCards[i];
//     div.classList.remove('borda');
//     div.querySelector('.iconic').classList.remove('marked');
// }

// // Adicionar a seleção à div clicada
// elemento.classList.add('borda');
// elemento.querySelector('.iconic').classList.add('marked');