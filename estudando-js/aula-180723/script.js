// window.document -> Objeto que representa o documento HTML

// Busca pelo Id do elemento;
let titulo = document.getElementById("titulo");

// Busca todos os elementos por class;
let paragrafos = document.getElementsByClassName("paragrafo");

// Busca todos os elementos pela tag HTML;
let negritos = document.getElementsByTagName("b");

// Busca UM elemento com base no seu seletor CSS;
let inputEmail = document.querySelector("input[type=email]");
let negritoParagrafo = document.querySelector("p b");
let paragrafo = document.querySelector(".paragrafo");

// Busca TODOS elemento com base no seu seletor CSS;
let negritosParagrafos = document.querySelectorAll("p b");




// Alinha o elemento;
titulo.align = "center";
// Mensagem que é exibida quando o mouse fica em cima do elemento;
titulo.title = "Titulo principal"
// Acessa o objeto style e dentro dela acessa a propriedade color;
titulo.style.color = "blue";
// Acessa o objeto style e dentro dela acessa a propriedade fontSize;
titulo.style.fontSize = "80px"
// Traz o conteúdo textual do elemento;
// console.log(paragrafo.innerText);
// Traz o conteudo HTML do elemento;
// console.log(paragrafo.innerHTML);
// substitui o conteudo textual e HTML, caso queira inserir uma tag html é possível;
paragrafo.innerHTML = "Testando o atributo <b>innerHTML</b>";
// substitui o conteudo textual, caso queira inserir uma tag html NÃO é possível;
paragrafo.innerText = "Testando o atributo <b>innerHTML</b>";
titulo.innerText = "RONALDO FENOMENO";
// Se setado para true, esconde o elemento.
paragrafos[0].hidden = false;

// Uso de classes com JavaScript;
let caixa = document.querySelector("#inform");
console.log(caixa)

// Adiciona uma nova classe do elemento;
caixa.classList.add("erro");
// Remove uma classe do elemento;
caixa.classList.remove("mensagem");
// Caso a classe ja exista no elemente ele remove, caso não exista ele adiciona;
caixa.classList.toggle("atencao");
caixa.classList.toggle("atencao");