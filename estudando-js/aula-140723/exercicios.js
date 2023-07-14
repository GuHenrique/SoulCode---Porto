// Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.

let somaVetor = (numeros) => {
  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }
  return soma;
}

console.log(`A soma de todos os elementos é de: ${somaVetor([2, 3, 4, 6, 7])}`);


// Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.

function concatenaString(textos) {
  let textoConcat = "";
  for (let texto of textos) {
    textoConcat += " " + texto;
  }
  return textoConcat;
}

console.log(`A concatenação ficará assim: ${concatenaString(["Ola", "Tudo bem", "Com voce?"])}`);

// Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.


let maiorNumero = [1, 100, 3, 43, 21301231];
function pegaMaiorNumero(numeros) {
  let maior = 0;
  for (let numero of numeros) {
    if (numero > maior) {
      maior = numero;
    }
  }
  return maior;
}

console.log(`O maior número do vetor é: ${pegaMaiorNumero(maiorNumero)}`);


// Crie uma função que receba um vetor de números e retorne a média dos elementos.

function calculaMediaVetor(numeros) {
  let soma = 0;
  let media = 0;

  for (let num of numeros) {
    soma += num;
  }

  return media = soma / numeros.length;
}

console.log(`A média do vetor é: ${calculaMediaVetor([10, 20, 30])}`);

// Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.

let numeros2 = [4, 2, 5, 6, 7];

console.log(numeros2.map(n => Math.pow(n, 2)));

// Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.

let palavras = ["Teste", "Array", "Antena", "Alessandro", "Monitor", "Caneta"];

console.log(palavras.filter(p => p[0] == "A"));

// Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.

let numeros3 = [3, 4, 5, 6];
numeros3.forEach(n => console.log(n * 3));

// Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.

let numero10 = [20, 2, 5, 67, 87, 64564, 234, 10];
console.log(numero10.includes());