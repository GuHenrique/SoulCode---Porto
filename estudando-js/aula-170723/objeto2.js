class Pessoa {
  nome;
  idade;
  email;
}

let pessoa1 = new Pessoa();
pessoa1.nome = "Gustavo";
pessoa1.idade = 21;
pessoa1.email = "gustavo@gmail.com";

console.log(pessoa1);

const pessoa2 = {
  nome: "Ronaldo",
  idade: 40,
  email: "ronaldofenomeno@gmail.com"
}

console.log(pessoa2);

const pc = {
  ram: 16,
  disco: 1,
  processador: "i9 intel",
  fonte: "100w",
  placa: "gigabyte"
};

const saldo = 5000;

if (saldo > 4000) {
  pc.placaVideo = "RTX 3080"
};

console.log(pc);

delete pc.disco; // deleta uma propriedade do objeto.
console.log(pc)