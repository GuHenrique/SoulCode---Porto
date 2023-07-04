// Operadores de Atribuição

// let result = 30;

// result += 20;
// console.log(result);

// result -= 45;
// console.log(result);

// result *= 7;
// console.log(result);

// result %= 9;
// console.log(result);

// result /= 2;
// console.log(result);

// result **= 2;
// console.log(result);

//Operadores Incremento e Decremento

/*
  a++ -> Pós Incremento
  ++a -> Pré Incremento
  a-- -> Pós Decremento
  --a -> Pré Decremento
*/

// let a = 0;
// console.log(a);  //0

// console.log(a++)  //0

// console.log(++a); //2

// console.log(--a); //1

// console.log(a--); //1

// console.log(a) //0


/* Opreadores Relacionais

  < Menor que
  > Maior que
  == Igual a
  === Igual a e mesmo tipo
  <= Menor ou igual
  >= Maior ou igual
  != Diferente

*/

// const n1 = 9;
// const n2 = 11;
// const n3 = 9;
// const n4 = 13;
// const n5 = "11";

// console.log(n1 < n2); //true

// console.log(n1 > n2); //false

// console.log(n1 <= n2); //true

// console.log(n1 < n3); //false

// console.log(n1 <= n3); //true

// console.log(n1 >= n3); //true

// console.log(n1 > n3); //false

// console.log(n3 == n4); //false

// console.log(n1 == n3); //true

// console.log(n1 != n3); //false

// console.log(n1 != n4); //true

// console.log(n2 == n5); //true == comparada apenas o valor

// console.log(n2 === n5); //false === compara o valor e o tipo de variável

// console.log("Gabriel Braga" == "Gabriel Jesus"); //false

// console.log("Gabriel" == "Gabriel"); //true

// console.log(3.14 == 3);//false

// console.log(1.0 + 2.0 === 3.0); //true


/*
Operadores Lógicos
  && -> E
  || -> OU
  ! -> NÁO
*/

// console.log(true);
// console.log(false);

// // E
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(true && true && true && true && false); //false
// console.log(false && true); //false

// // OU
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(true || true || true || true || false); //true
// console.log(false || false); //false
// console.log(false || true); //true

// // NÃO
// console.log(!true) //false
// console.log(!false) //true

// console.log(!true || false); //false
// console.log(true || true && false); //true precedência dos operadores ! -> && -> ||
// console.log((true || true) && false); //false


// // dada a idade, a pessoa é obrigada a votar.
// let idade = 80;
// let calculo = idade >= 18 && idade <= 65 ? "Obrigatório" : "Não é obrigatório"
// console.log(calculo);

//OPERADOR TERNÁRIO - <condição> ? <resultado se true> : <resultado se false>;
let menssagem;
let nota1 = 9;
let nota2 = 7;
let media = (nota1 + nota2) / 2;
let condicao = media >= 7;

menssagem = condicao ? "APROVADO" : "REPROVADO";
console.log(menssagem);

// aritméticos > relacionais > lógicos

