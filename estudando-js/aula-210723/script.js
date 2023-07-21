// import { melhoresFilmes, buscarFilme } from "./filmes.js";
// Para importação, é necessário usar as chaves. Caso o obejto importado esteja como default não é necessário o uso das chaves.
import melhoresFilmes, { buscarFilme } from "./filmes.js";


function preencheLista(filmes) {
    const lista = document.querySelector("#lista-filmes");
    lista.innerHTML = "";
    filmes.forEach(filme => {
        lista.innerHTML += `
            <li>${filme.titulo}</li>
        `
    })
};

preencheLista(melhoresFilmes);

buscarFilme(10);