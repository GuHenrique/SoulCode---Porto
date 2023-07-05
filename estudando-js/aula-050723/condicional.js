// Estruturas condicionais
// const altura = 1.7;

// if (altura >= 1.6) {
//   console.log("Altura permitida!");
// } else {
//   console.log("Altura não permitida!");
// }

// let nivelIngles = 5;

// switch (nivelIngles) {
//   case 1: {
//     console.log("Iniciante");
//     break
//   }
//   case 2: {
//     console.log("Básico");
//     break
//   }
//   case 3: {
//     console.log("Intermediario");
//     break
//   }
//   case 4: {
//     console.log("Avançado");
//     break
//   }
//   case 5: {
//     console.log("Fluente");
//     break
//   }
//   default: {
//     console.log("Nível de inglês desconhecido!")
//   }
// }



// maiorNumero(1, 1, 1);

// function maiorNumero(num1, num2, num3) {
//   if (num1 == num2 || num2 == num3 || num1 == num3) {
//     console.log("Os numeros não podem ser iguais")

//   }
//   else if (num1 > num2 && num1 > num3) {
//     if (num2 > num3) {
//       console.log(num1 + " > " + num2 + " > " + num3);
//     } else {
//       console.log(num1 + " > " + num3 + " > " + num2);
//     }
//   } else if (num2 > num1 && num2 > num3) {
//     if (num1 > num3) {
//       console.log(num2 + " > " + num1 + " > " + num3);
//     } else {
//       console.log(num2 + " > " + num3 + " > " + num1);
//     }
//   } else {
//     if (num1 > num2) {
//       console.log(num3 + " > " + num1 + " > " + num2);
//     } else {
//       console.log(num3 + " > " + num2 + " > " + num2);
//     }
//   }

// }

let numeros = [2, 4, 6, 8, 10]
console.log(numeros.sort((a, b) => b - a))
