// Função ou Function -> Rotina

function soma(n1, n2) {
  return n1 + n2;
}
let num = 12.45;

console.log(isNaN(num));

console.log(Number.isInteger(12.00));

let numeroInteiro = 20;
let numeroDouble = 20.486;
console.log(numeroDouble.toFixed(2));

let texto = "Java"

console.log(texto.charAt(texto.length - 1)); //Imprime o último caracter

console.log(texto.lastIndexOf());

let espaco = " "

console.log(texto.replace("     ", ""));

console.log(texto.toLowerCase().includes("java"));

let teste = [
  {
    nome: "gustavo",
    idade: 12
  },
  {
    nome: "joao",
    idade: 15
  }
];
teste.forEach(teste => {
  let primeiraLetra = teste.nome.charAt(0);
  console.log(teste.nome.replace(primeiraLetra, primeiraLetra.toUpperCase()));
});

let nome = "gustavo henrique";
let nomeVetor = nome.split(" ");
nomeVetor.forEach(e => {
  let primeiraLetra = e.charAt(0);
  console.log(e.replace(primeiraLetra, primeiraLetra.toUpperCase()))
})


Math.random()


