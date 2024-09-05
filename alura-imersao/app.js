function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    // para cada dado dentro da lista, um personagem será selecionado
    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}.</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="https://www.max.com/br/pt/shows/last-of-us/93ba22b1-833e-47ba-ae94-8ee7b9eefa9a" target="_blank">${dado.link}</a>
            </div>
            `    
    }

    section.innerHTML = resultados

    }

