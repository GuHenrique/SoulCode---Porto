// Crie uma função que calcule o valor médio de três números, considerando que esses teram pesos 2, 3, 4 respectivamente.
let valorMedio = (p1, p2, p3) => {
  p1 *= 2;
  p2 *= 3;
  p3 *= 4;
  let media = (p1 + p2 + p3) / 9;
  return media.toFixed(2);
}

console.log(`O valor médio dos pesos é: ${valorMedio(50, 40, 60)}`)


// Crie uma função que receba um número inteiro e retorne a quantidade de divisores desse número.
function quantDivisores(numero) {
  let cont = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      cont++
    }
  }
  return cont;
}
console.log(`A quantidade de números divisores são: ${quantDivisores(10)}`);


// Crie uma função que calcule a soma de todos os dígitos de um número.
let contaDigito = (numero) => {
  let numTexto = numero.toString();
  let acumulador = 0;
  for (let i = 0; i < numTexto.length; i++) {
    acumulador += parseInt(numTexto.charAt(i));
  }
  return acumulador;
}
console.log(contaDigito(345));

// Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em ordem inversa.

function inverteTexto(texto) {
  let textoInvertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto.charAt(i);
  }
  return textoInvertido;
}
console.log(inverteTexto("ronaldo fenomeno"));

// Crie uma função que receba os valores de comprimento e tempo e retorne a velocidade média.

function velocidadeMedia(dist, tempo) {
  return dist / tempo;
}

console.log(velocidadeMedia(12, 20));

// Crie uma função que receba uma string e retorne outra string com todas as vogais removidas.

function isVogal(char) {
  switch (char.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
  }
  return false;
}

function removeVogais(texto) {
  let textoSemVogal = "";
  for (let i = 0; i < texto.length; i++) {
    let char = texto.charAt(i)
    if (!isVogal(char)) {
      textoSemVogal += char;
    }
  }
  return textoSemVogal;
}

console.log(removeVogais("Ronaldinho Gaucho"))



// Crie uma função que receba um receba um número no sistema decimal e retorne o mesmo número no sistema binário

function converteParaBinario(num) {
  let numBinario = "";
  let divisao = num;
  for (; ;) {
    if (divisao <= 0)
      break;
    let resto = divisao % 2;
    divisao = parseInt(divisao / 2);
    numBinario = resto + numBinario;
  }
  return numBinario;
}

console.log(converteParaBinario(345))

// Crie uma função que receba um número e uma outra função e execute essa de acordo com número informado.

function repeteFuncao(numRepeticao, func) {
  for (let i = 1; i <= numRepeticao; i++) {
    func(i);
  }
}

repeteFuncao(3, i => console.log("Executou!" + (i)));