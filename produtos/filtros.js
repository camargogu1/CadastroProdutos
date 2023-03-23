
/* ORDENAR ---------------------------   */
var botaoP = document.getElementById("ordenaP")
botaoP.addEventListener("click", ordenaP)

function ordenaP() {
    document.getElementById("vitrine").innerHTML = ""
    var lista = new ListaProdutos();
    var listaOrdenada = []
    listaOrdenada = lista.listaProdutos.sort(function compare(b, a) {
        if (a.Preco > b.Preco) return 1
        if (a.Preco < b.Preco) return -1
    })
    listaOrdenada.forEach(element => {
        escrever(element.Produto, element.Preco, element.Fornecedor, element.Estoque)
    });
}

/* LIMPAR ---------------------------   */

var botaoL = document.getElementById("limpar")
botaoL.addEventListener("click",limpar)

function limpar()
{
    const response = confirm("Tem certeza que deseja limpar todos os produtos?")
    if(response)
        {
            document.getElementById("vitrine").innerHTML = ""
            var lista = []
            localStorage.setItem("listaProdutos", JSON.stringify(lista))
            location.reload()
        }
}

/* PESQUISAR ---------------------------   */

var busca = document.getElementById("search")
busca.addEventListener("click",pesquisa)

function pesquisa()

{
    let item = document.getElementById("pesquisa").value
    let listaP = []
    let listaB = new ListaProdutos()
    listaP = listaB.listaProdutos.filter(element => element.Produto == item)
    document.getElementById("vitrine").innerHTML = ""
    listaP.forEach(element => escrever(element.Produto, element.Preco, element.Fornecedor, element.Estoque))
   

}

/* EXIBIR TODOS ---------------------------   */
var bot = document.getElementById("todos")
bot.addEventListener("click",exibirTodos)

function exibirTodos(){

    let listaB = new ListaProdutos()
    document.getElementById("vitrine").innerHTML = ""
    listaB.listaProdutos.forEach(element => escrever(element.Produto, element.Preco, element.Fornecedor, element.Estoque))

}