function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value; 

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum personagem encontrado. Digite um nome válido.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados 
    let resultados = "";
    let personagem = "";
    let descricao = "";
    let tags = "";


    // para cada dado dentro da lista, um personagem será selecionado
    for (let dado of dadosPersonagens) {
        personagem = dado.personagem.toLowerCase()
        descricao = dado.descricao.toLowerCase()


        if (personagem.includes(campoPesquisa) || descricao.includes(campoPesquisa) 
            || tags.includes(campoPesquisa)) {

        resultados += `
            <div class="item-resultado">
                <img src="${dado.foto}">
                <div class="item-infomacoes"
                    <h2>${dado.personagem}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank"><button>Ver mais</button></a>
                </div>
            </div>
            `;    
        }
    }  

    if (!resultados)
        resultados = "<p>Nada foi encontrado.</p>"

    section.innerHTML = resultados

    }

