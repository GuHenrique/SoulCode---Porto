//JavaSctript = Tipagem dinâmica.

let variavel = 1;
console.log(variavel + " é um(a) " + typeof num);

variavel = "dassda";
console.log(variavel + " é um(a) " + typeof texto);

variavel = true;
console.log(variavel + " é um(a) " + typeof booleano);

variavel = { nome: "Gustavo", idade: 25 };
console.log(typeof variavel);

variavel = [1, 2, 4, 5];
console.log(typeof variavel);

variavel = function () { };
console.log(typeof variavel);

console.log("----------------------------")

let teste = undefined;
console.log(teste);

variavel = null;
console.log(variavel);

console.log(0 / 0) // NaN