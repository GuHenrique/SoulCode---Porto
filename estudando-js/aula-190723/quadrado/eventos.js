// Evento -> Ação (Clique, Teclar, Movimentar o cursor)

// click -> Clique do mouse;
// dblclick -> Duplo clique do mouse;
// keydown -> Apertar uma tecla;
// keyup -> Soltar uma tecla;
// mouseover -> Moveu o ponteiro do mouse sobre o elemento;
// mouseout -> Moveu o ponteiro do mouse para fora do elemento;
// submit -> Submeter os dados de um formulário;
// change -> Alterar o valor de um campo de formulário;
// focus -> Evento acionado quando o foco está sobre o elemento;

const quadrado = document.querySelector("#quadrado");
console.log(quadrado);
let numAleatorio = Math.random() * 100 + 1;
quadrado.onclick = () => { // primeira forma de adicionar um "ouvidor de elementos"
  quadrado.style.backgroundColor = "#003049";
  quadrado.style.borderRadius = "0px";
  quadrado.style.transform = "translateY(200px)"
}

quadrado.ondblclick = () => {
  quadrado.style.borderRadius = "100px";
  quadrado.style.backgroundColor = "blue";
  quadrado.style.transform = "translateY(0px)"
}


function changeColorSquare() {
  quadrado.style.backgroundColor = "red"
}


quadrado.addEventListener("mouseout", () => {
  quadrado.style.backgroundColor = "#f07167"
})




document.querySelector("button").addEventListener("click", () => {

  let color = document.querySelector("input[type=color]").value;
  let corpo = document.querySelector("body");

  corpo.style.backgroundColor = `${color}`

})
