var lista = new ListaProdutos()
var cont = 0
var cont2 = 0
function inicia() {
    lista.listaProdutos.forEach(element => {
        escrever(element.Produto, element.Preco, element.Fornecedor, element.Estoque)
        cont2+=1
    });
}

inicia()

function sortearCor() {
    var vetor = ["#2a63ca", "#0081d2", "#0094b4", "#009f81", "#53a551"]
    var x = cont
    return vetor[x]
}


function escrever(nome, preco, fornecedor, estoque) {
    if (cont == 4)
        cont = 0
    var div = document.createElement("div")
    div.classList.add("card")
    div.style.width = "30%"
    div.style.textAlign = "center"
    div.style.color = "white"
    div.style.backgroundColor = sortearCor()
    cont += 1
    var div2 = document.createElement("div")
    div2.classList.add("card-body")
    div.appendChild(div2)
    var h = document.createElement("h5")
    h.classList.add("card-title")
    h.innerHTML = nome
    div2.appendChild(h)
    var hh = document.createElement("h6")
    hh.classList.add("card-subtitle")
    hh.innerHTML = `R$ ${preco}`
    div2.appendChild(hh)
    var p = document.createElement("p")
    p.classList.add("card-text")
    p.innerHTML = `${fornecedor} <br> ${estoque} unidades`
    div2.appendChild(p)

    var geral = document.getElementById("vitrine")

    geral.appendChild(div)

}

function tamanho() {
    setTimeout(500)
    if(lista.listaProdutos[0]==undefined || cont2 < 3)
    {
        document.body.style.height = "100vh"
    }
        
    }

    tamanho()



