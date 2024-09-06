function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value; 

    let personagem = "";
    let descricao = "";
    let tags =   m "";


    let resultados = "";

    // para cada dado dentro da lista, um personagem será selecionado
    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}.</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank"><button>Ver mais</button></a>
            </div>
            `    
    }

    section.innerHTML = resultados

    }

