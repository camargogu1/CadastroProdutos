class Produto{

    #nome
    #preco

    #fornecedor
    #estoque

    constructor(nome,preco,fornecedor,estoque)
    {
        this.#nome = nome
        this.#preco = preco
        this.#fornecedor = fornecedor
        this.#estoque = estoque
    }

    set nome(novonome)
    {
        this.#nome = novonome
    }
        

    set preco (novopreco)
    {
        this.#preco = novopreco
    }

    set fornecedor (novofornecedor)
    {
        this.#fornecedor = novofornecedor
    }

    set estoque (novoestoque)
    {
        this.#estoque = novoestoque
    }

    get nome()
    {
        return this.#nome
    }

    get preco()
    {
        return this.#preco
    }

    get fornecedor()
    {
        return this.#fornecedor
    }

    get estoque ()
    {
        return this.#estoque
    }

    toJSON()
    {
        return{
            "Produto": this.#nome,
            "Preco": this.#preco,
            "Fornecedor": this.#fornecedor,
            "Estoque": this.#estoque
        }
    }

    toString()
    {
        return "Produto: " + this.#nome + "\n" +
        "Preco: "+ this.#preco + "\n"+
        "Fornecedor: " + this.#fornecedor + "\n"+
        "Estoque: " + this.#estoque + "\n"
    }









}