// // callback - função que é passada como parâmetro de outra função.


// function erro() {
//   console.log("DEU RUIM!")
// }

// function sucesso() {
//   console.log("DEU BOM!")
// }

// function requisicaoParaBanco(callbackSuccess, callbackError) {
//   for (let i = 0; i < 1000; i++) {
//     if (i === 19) {
//       // aqui gerou um erro
//       return callbackError();

//     }
//   }
//   return callbackSuccess();
// }

// requisicaoParaBanco(sucesso, erro);


// Função Anônima

// setTimeout(() => {
//   console.log("Olá Mundo!");
// }, 2000);

// function teste(n1, n2) {
//   console.log(n1 + n2);
// }

// setTimeout(teste, 2);

// Arrow Function

// () => { };

// setTimeout((e) => {
//   console.log("Arrow Function")
// }, 2000);


// parametros => escopo/intrução
// (req, res) => {
//   console.log(req + " " + res);
//   return 0;
// }

// Testando utilização das arrow functions
function teste(callback) {
  let valor = callback(130);
  console.log(valor)
}

// Primeira forma de executar teste(): 

function vezes2(numero) {
  return numero * 2;
}
teste(vezes2);

// Segunda forma de executar teste(): (Anônima)

teste(function (numero) {
  return numero * 2;
})

// Terceira forma de executar teste(): (Arrow) Modo 1

teste((numero) => { return numero * 2 }
);

// Terceira forma de executar teste(): (Arrow) Modo 2

//Apenas um parâmetro, posso retirar os parênteses. 
// Apenas uma linha de instrução, posso retirar as chaves e o return.
teste(numero => numero * 2);

setTimeout(_ => console.log("Olá Mundo!"), 3000);