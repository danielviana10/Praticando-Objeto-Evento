let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br',
    img: './img/notebook.png'
}
// capturando body
let corpo = document.querySelector('body')

// inserindo a ul no body
let produtos = document.createElement('ul');
produtos.setAttribute('class','lista');
corpo.appendChild(produtos)
console.log(corpo);

// inserindo os itens da li na ul 
let nomeProduto = document.createElement('li');
let nomeSpan = document.createElement('span');
nomeProduto.setAttribute('class','nomeLista');
nomeSpan.innerText = produto.nome;
produtos.appendChild(nomeProduto);
nomeProduto.appendChild(nomeSpan);

// criando a imagem
let imgProduto = document.createElement('img');
imgProduto.setAttribute('class','imgProduto');
imgProduto.src = produto.img;
produtos.appendChild(imgProduto);


let valorProduto = document.createElement('li');
let valorSpan = document.createElement('span');
valorProduto.setAttribute('class','valorLista');
valorSpan.innerText = (produto.valor.toFixed(2));
produtos.appendChild(valorProduto);
valorProduto.appendChild(valorSpan);


let liquidProduto = document.createElement('button');
let liquidSpan = document.createElement('span');
liquidProduto.setAttribute('class','liquidLista');
liquidSpan.innerText = "Em liquidação";
produtos.appendChild(liquidProduto);
liquidProduto.appendChild(liquidSpan);

let novaLista = document.createElement('li');
novaLista.setAttribute('class','novaLista')
let novoValor = document.createElement('span');
produtos.appendChild(novaLista);
novaLista.appendChild(novoValor)


let distribuidorProduto = document.createElement('li');
distribuidorProduto.innerText = "Fabricante: ";
distribuidorProduto.setAttribute('class','distribuidorLista')
let distribuidorAncora = document.createElement('span');
distribuidorAncora.innerText = produto.distribuidor;
produtos.appendChild(distribuidorProduto);
distribuidorProduto.appendChild(distribuidorAncora);


// funções

let contador = 0;

liquidProduto.addEventListener("click", function() {
    contador++;

    if(produto.liquidacao == true && contador % 2 !== 0){
        valor = produto.valor - (produto.valor * 0.3);
        novoValor.innerHTML = `Hoje apenas: ${valor.toFixed(2)}`


    }else if(contador % 2 == 0){
            novoValor.innerText = '';
    }
}
)
