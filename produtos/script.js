lista = new ListaProdutos()
const botao = document.getElementById("botao");
var cont = 0
const nomehtml = document.getElementById("nome");
const precohtml = document.getElementById("preco");
const estoquehtml = document.getElementById("estoque");
const fornecedorhtml = document.getElementById("fornecedor");



botao.addEventListener("click", getdados)




function getdados() {


    if (verifica()) {
        var product = new Produto(nomehtml.value, precohtml.value, fornecedorhtml.value, estoquehtml.value);
        nomehtml.value = ""
        precohtml.value = ""
        fornecedorhtml.value = ""
        estoquehtml.value = ""
        lista.adicionarItem(product)
        lista.gravar()
        alert("Cadastrado com sucesso! Para visualizar acesse - Cadastrados -")
    }


}






function verifica() {
    console.log("oi")
    if (nomehtml.value == "" || precohtml == "" || estoquehtml == "" || fornecedorhtml == "") {
        alert("Preencha todos os campos!")
        return false
    }
    else
        return true
}

