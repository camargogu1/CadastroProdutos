class ListaProdutos
{
    #listaProdutos

    constructor()
    {
        const listaArmazenada = this.recuperar()
        if (listaArmazenada)
             this.#listaProdutos = listaArmazenada
        else
        {
            this.#listaProdutos = [];
            this.gravar();
        }
            
    }



    get listaProdutos()
    {
        return this.#listaProdutos
    }

    set listaProdutos(lista)
    {
        this.#listaProdutos = lista
    }

    gravar()
    {
        localStorage.setItem('listaProdutos',JSON.stringify(this.#listaProdutos))
    }

    recuperar()
    {
        return this.#listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'))
    }

    adicionarItem(element)
    {
        this.#listaProdutos.push(element)
    }

}