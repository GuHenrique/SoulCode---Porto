import { livros } from "./livros.js";

function preencheTabela(vetor) {
    const tabela = document.querySelector("#tb-livros");
    tabela.innerHTML = "";
    vetor.forEach(livro => {
        tabela.innerHTML += `
            <tr>
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.anoPublicacao}</td>
                <td>${livro.genero}</td>
            </tr>
        
        `
    })
}


preencheTabela(livros);