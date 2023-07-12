// Crie uma função que calcule o valor médio de três números, considerando que esses teram pesos 2, 3, 4 respectivamente.
let valorMedio = (p1, p2, p3) => {
  p1 *= 2;
  p2 *= 3;
  p3 *= 4;
  let media = (p1 + p2 + p3) / 3;
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

console.log(`Os números divisores são: ${quantDivisores(10)}`);

// Crie uma função que calcule a soma de todos os dígitos de um número.
let contaDigito = (numero) => {

  let numeroString = toString(numero).replace(".", "");
  return numeroString.length;
}

console.log(contaDigito(123123123));

// Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em ordem inversa.

function inverteTexto(texto) {
  let textoInvertido = "";
  for (let i = texto.length; i >= 0; i--) {
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

