// Vetores - Arrays
// let nota = 9.6; // Variavveis simples

// let notas = [9.6, 9.1, 6, 7, 8]; // Variavel composta

// let times = ["São Paulo", "Flamengo", "Gremio"];

// let ativados = [true, false, true];

// let daniel = ["Daniel", 23, "Ensino Superior", true]; // Má pratica

// console.log(typeof times); // Objeto
// console.log(notas.length); // Tamanho do vetor

let pesos = [89.5, 60.0, 45.4, 67.0, 75.3];
// console.log(pesos.length);
// console.log(pesos[0]) // indice -> numero que representa a posição do elemento que começa de 0;
// console.log(pesos[0] + pesos[1]);
// console.log(pesos);

// for (let i = 0; i < pesos.length; i++) {
//   console.log(pesos[i]);
// }

// pesos.forEach(e => console.log(e));

let operacoes = [
  (n1, n2) => n1 + n2,
  (n1, n2) => n1 - n2,
  (n1, n2) => n1 * n2,
  (n1, n2) => n1 / n2
]

// console.log(operacoes[0](3, 5));

// console.log(pesos);
// pesos[2] = 90;
// console.log(pesos);

// for (let i = 0; i < pesos.length; i++) {
//   console.log(pesos[i] * 2);
// }

// let acumulador = 0;
// for (let i = 0; i < pesos.length; i++) {
//   acumulador += pesos[i];

// }
// console.log(acumulador * 2)

for (let peso of pesos) {
  console.log(peso)
}

for (let indice in pesos) {
  console.log(indice);
  console.log(pesos[indice]);
}