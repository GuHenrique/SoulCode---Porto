// Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.

// let numero = -10;

// if (numero == 0) {
//   console.log("Número igual a zero!")
// } else if (numero > 0) {
//   console.log("Número é positivo!")
// } else {
//   console.log("Número é negativo!")
// }

// Escreva um programa que receba dois números e determine qual deles é o maior.

// let num1 = 321321;
// let num2 = -543543534543;

// if (num1 > num2) {
//   console.log(num1 + " > " + num2);
// } else {
//   console.log(num2 + " > " + num1);
// }

// Crie um programa que receba dois números e verifique se ele é par ou ímpar.

// let num1 = 213;
// let num2 = 1234;

// if (num1 % 2 == 0) {
//   console.log(`O Número ${num1} é Par`)
// } else {
//   console.log(`O Número ${num1} é Impar`)
// }
// if (num2 % 2 == 0) {
//   console.log("O Número ${num2} é Par")
// } else {
//   console.log("O Número ${num2} é Impar")
// }

// Escreva um programa que solicite o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.

// let dia = "SeGuNDa";


// switch (dia.toLowerCase()) {
//   case "domingo":
//     console.log("Fim de semana");
//     break;
//   case "sabado":
//     console.log("Fim de semana");
//     break;
//   case "segunda":
//     console.log("Dia da semana");
//     break;
//   case "terça":
//     console.log("Dia da semana");
//     break;
//   case "quarta":
//     console.log("Dia da semana");
//     break;
//   case "quinta":
//     console.log("Dia da semana");
//     break;
//   case "sexta":
//     console.log("Dia da semana");
//     break;
//   default:
//     console.log("Digite um dia válido")
// }

// Faça um programa que solicite um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).

// let numero = 2;

// switch (numero) {
//   case 1:
//     console.log("Domingo");
//     break;
//   case 7:
//     console.log("Sabado");
//     break;
//   case 2:
//     console.log("Segunda-Feira");
//     break;
//   case 3:
//     console.log("Terça-Feira");
//     break;
//   case 4:
//     console.log("Quarta-Feira");
//     break;
//   case 5:
//     console.log("Quinta-Feira");
//     break;
//   case 6:
//     console.log("Sexta-Feira");
//     break;
//   default:
//     console.log("Digite um número válido")
// }


// Crie um programa que solicite uma temperatura em Celsius e a converta para Fahrenheit, exibindo o resultado com duas casas decimais.

let celsius = 32;
let fahrenheit = celsius * 1.8 + 32;
console.log(`a conversão de ${celsius}C para fahrenheit é de ${fahrenheit.toFixed(2)}F`);
