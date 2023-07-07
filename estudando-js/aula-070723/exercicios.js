// Escreva um programa que imprima os números de 1 a 20 usando um loop for.
// for (let i = 1; i <= 20; i++) {
//   console.log(i)
// }

// Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.
// let numero = 10;
// let proximo = 0;
// let anteriror = 0;
// let atual = 1;

// for (let i = 1; i <= numero; i++) {
//   if (i == numero) {
//     console.log(anteriror);
//   } else {
//     console.log(anteriror + " ");
//     proximo = anteriror + atual;
//     anteriror = atual - anteriror;
//     atual = anteriror + atual;
//   }
// }

// let p = 0;
// let u = 1;
// let i = 0;

// while (i < 10) {
//   console.log(p);
//   let soma = p + u;
//   p = u;
//   u = soma;
//   i++;
// }


// Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.

// let numero = 15;
// let soma = 0;
// console.log("Os número ímpares são: ")
// for (let i = 0; i <= numero; i++) {
//   if (!(i % 2 == 0)) {
//     console.log(i)
//     soma += i;
//   }

// }
// console.log("A soma de todos eles é igual a: " + soma)

// Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.

// let numero = 23;

// for (let i = 0; i <= 10; i++) {
//   console.log(numero + " + " + i + " = " + (numero + i));
// }

// Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.


// let numero = 100;
// for (let i = 1; i <= numero; i++) {
//   if (i % 7 == 0) {
//     console.log(i)
//   }
// }


// Escreva um programa que receba um número e desenhe na tela um triângulo formado

// let linha = "";

// for (let j = 0; j < 6; j++) {
//   linha += " *"
//   console.log(linha)
// }