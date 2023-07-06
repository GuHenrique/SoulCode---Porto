// Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.

// let numero = -10;

// if (numero == 0) {
//   console.log("Número igual a zero!")
// } else if (numero > 0) {
//   console.log("Número é positivo!")
// } else {
//   console.log("Número é negativo!")
// }

// Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.

// let idade = 18;

// if (idade >= 18) {
//   console.log("Você é maior de idade!")
// } else {
//   console.log("Você é menor de idade!")
// }



// Escreva um programa que receba três números e determine qual deles é o maior.

// let num1 = 3;
// let num2 = 3;
// let num3 = 1;

// if (num1 == num2 || num2 == num3 || num3 == num1) {
//   console.log("Os números não podem ser iguais!");
// }
// else if (num1 > num2 && num1 > num3) {
//   if (num2 > num3) {
//     console.log(num1 + " > " + num2 + " > " + num3);
//     console.log("Maior número é o número 1: " + num1)
//   } else {
//     console.log(num1 + " > " + num3 + " > " + num2);
//     console.log("Maior número é o número 1: " + num1)
//   }
// } else if (num2 > num1 && num2 > num3) {
//   if (num1 > num3) {
//     console.log(num2 + " > " + num1 + " > " + num3);
//     console.log("Maior número é o número 2: " + num2)
//   } else {
//     console.log(num2 + " > " + num3 + " > " + num1);
//     console.log("Maior número é o número 2: " + num2)

//   }
// } else {
//   if (num1 > num2) {
//     console.log(num3 + " > " + num1 + " > " + num2);
//     console.log("Maior número é o número 3: " + num3)
//   } else {
//     console.log(num3 + " > " + num2 + " > " + num1);
//     console.log("Maior número é o número 3: " + num3)
//   }
// }

// Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.

// let num1 = 213;
// let num2 = 1234;
// let produto = num1 * num2;

// if (produto % 2 == 0) {
//   console.log(`O Número ${num1} é Par`)
// } else {
//   console.log(`O Número ${num1} é Impar`)
// }

// Escreva um programa que solicite o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.

// let dia = "terca-feira";
// let diaLower = dia.toLowerCase();
// if (diaLower == "segunda-feira" || diaLower == "terca-feira" || diaLower == "quarta-feira" || diaLower == "quinta-feira" || diaLower == "sexta-feita") {
//   console.log(dia + " é um dia da semana!")
// } else if (diaLower == "domingo" || diaLower == "sabado") {
//   console.log("Fim de semana!")
// } else {
//   digitaNovamente = true;
//   console.log("Digite um dia válido, sem caracteres especiais e com final -feira");
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
//     console.log("Digite um número entre 1 e 7")
// }


// Crie um programa que solicite uma temperatura em Celsius e a converta para Fahrenheit, exibindo o resultado com duas casas decimais.

// let celsius = 32;
// let fahrenheit = celsius * 1.8 + 32;
// console.log(`a conversão de ${celsius}C para fahrenheit é de ${fahrenheit.toFixed(2)}F`);
