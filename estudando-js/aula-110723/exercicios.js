// Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
// let texto = "Hoje tem Aula de JavaScript"
// let textoLowerCase = texto.toLowerCase();
// let soma = 0;
// for (let i = 0; i <= textoLowerCase.length; i++) {
//   if (textoLowerCase.charAt(i) == "a") {
//     soma++;
//   }
// }
// console.log(soma)


// Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.
// let numero = 81;
// console.log(Math.sqrt(numero));


// Escreva um programa que  arredonde um número para o inteiro mais próximo.
// let numeroDouble = 2.5678;
// console.log(Math.round(numeroDouble));


// Escreva um programa que  calcule o valor absoluto de um número.
// let numero = -123.2143;
// console.log(Math.abs(numero));

// Escreva um programa que  gere um número aleatório entre 10 e 20.
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(getRandomInt(10, 20));


// Arredonde um número para um número específico de casas decimais.
// let numero = 123.5434534;
// console.log(numero.toFixed(2));


// Escreva um programa que  converta uma string para um número decimal e arredonde para o número inteiro anterior.

// let numeroString = "2.45";
// let numeroFloat = parseFloat(numeroString);
// console.log(Math.floor(numeroFloat));


// Verifique se um número é um valor finito, infinito, NaN ou não.

// let numero = Infinity;

// if (!isNaN(numero)) {
//   console.log("É um número!")
//   if (isFinite) {
//     console.log("É finito!")
//   } else {
//     console.log("É infinito!")
//   }
// } else {
//   console.log("Não é um número")
// }


// Escreva um programa que verifique se a string "ba" contém em outras outra string.

// let texto = "Não tem essa palavra aqui!"
// let texto = "Hoje a Barbara veio aqui bater um papo!"
// let textoLowerCase = texto.toLowerCase();
// if (textoLowerCase.includes("ba")) {
//   console.log("A palavra 'ba' existe nesse texto!")
// } else {
//   console.log("A palavra 'ba' não existe no texto!")
// }

// Escreva um programa que  converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
// let texto = "Convertendo o texto para Letras Maiusculas e depois para Minusculas";
// let textoLowerCase = texto.toLowerCase();
// let textoUpperCase = texto.toUpperCase();
// console.log(textoLowerCase);
// console.log(textoUpperCase);


// Extraia uma parte específica de uma string com base em índices.
// let texto = "Extraia uma parte específica de uma string com base em índices";
// console.log(texto.substring(12, 20))


// Substitua todas as ocorrências de uma substring por outra em uma string.
// let texto = "Extraia uma parte específica de uma string com base em índices";
// console.log(texto.replace(texto.substring(0, 7), "Substituido"));

// Remova espaços em branco extras no início e no final e no final de uma string.
// let loginEmail = "   gustavo@email.com     ";
// console.log(loginEmail);
// console.log(loginEmail.trim());


// Inverta uma string. Utilize o laço for.
// let texto = "Inverta uma string. Utilize o laço for"
// let textoInvertido = ""
// for (let i = texto.length - 1; i >= 0; i--) {
//   textoInvertido += texto.charAt(i);

// }
// console.log(textoInvertido);
