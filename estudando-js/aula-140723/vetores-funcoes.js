const nums = [6, 9, 0, 3, 8, 1, 4, 2, 5, 7, 7];

console.log(nums);

// Adiciona elemento ao final do vetor.
nums.push(10);
console.log(nums);

// Adiciona elemento ao início do vetor.
nums.unshift(11);
console.log(nums);

// Remove um elemento do final do vetor.
nums.pop();
console.log(nums);

// Remove um elemento do início do vetor.
nums.shift();
console.log(nums);

// Realiza a junção dos elementos em uma String.
let juncao = nums.join(" - ");
console.log(juncao);

let vetor2 = [5, 6, 7];

// Concatena os elementos de um vetor dentro de outro.
let vetor3 = nums.concat(vetor2);
console.log(vetor3);


// Organiza os elementos do vetor em ordem alfabética.
const nomes = ["Beatriz", "Diego", "Adriano", "Gustavo", "Vitor", "Aline"];
console.log(nomes.sort());

// nums.push(100, 102, 400);
// nums.sort((n1, n2) => n1 - n2);
// console.log(nums);

// Reverte a ordenação dos elementos do array.
// nums.reverse();
// console.log(nums);

// Retorna true ou false caso haja o elemento dentro do vetor.
// console.log(nums.includes(10));

// Substitue o valor passado no primeiro parametro na posição dos indices passados no segundo e terceiro parametro.
// nums.fill(0, 6, 8);
// console.log(nums);


console.log(nums)
// Retorna o index do elemento passado.
// console.log(nums.indexOf(7));

// Remove elementos especificos do vetor.
// Primeiro parametro, a partir de qual index quer remover, segundo parametro a quantidade de vezes que quer remover.
// nums.splice(6, 3);
// console.log(nums);

// Copia elementos do vetor para outro vetor.
// Primeiro parametro primeiro indice e segundo parametro ultimo indice -1 que sera copiado.
// let numsCortado = nums.slice(2, 5);
// console.log(numsCortado);


// Faz a iteração do vetor de uma maneira mais facil.
// nums.forEach(num => console.log(num));

// Reduz todo o vetor em um valor passado no parametro por uma function
// console.log(nums.reduce((cont, num) => cont + num));

// Transforma todos valores em num * 2.
console.log(nums.map(num => num * 2));

// Retorna o primeiro valor encontrado, caso a condiçao passada na callback seja true.
console.log(nums.find(num => num > 8));

// Retorna um vetor que corresponde a condição, caso seja true.
console.log(nums.filter(num => num % 2 == 0));

const names = [
  'Ana Silva',
  'João Santos',
  'Maria Pereira',
  'Pedro Oliveira',
  'Carolina Souza',
  'Lucas Ferreira',
  'Beatriz Costa',
  'André Rodrigues',
  'Juliana Almeida',
  'Rafael Nascimento',
  'Fernanda Ribeiro',
  'Gustavo Sousa',
  'Camila Rocha',
  'Marcelo Gomes',
  'Laura Santos',
  'Rodrigo Almeida',
  'Isabela Fernandes',
  'Diego Costa',
  'Amanda Santos',
  'Gabriel Pereira',
  'Natália Oliveira',
  'Daniel Rodrigues',
  'Larissa Almeida',
  'Thiago Nascimento',
  'Letícia Ribeiro',
  'Vitor Sousa',
  'Manuela Rocha',
  'Felipe Gomes',
  'Sophia Silva',
  'Matheus Fernandes',
  'Mariana Costa',
  'Rafael Nascimento'
];

// Traz o primeiro que achar caso condiçao seja true.
console.log(names.find(nome => nome.includes("Rocha")));

// Traz todos os elementos, caso a condição seja true.
console.log(names.filter(nome => nome.includes("Santos")));

// String como Vetor
let nome = `Prof. Gabriel Braga`;
let idade = 21;
let mensagem = `Nome: ${nome}\nIdade: ${idade} `;
console.log(mensagem);

console.log(nome.charAt(2));
console.log(nome[2]);