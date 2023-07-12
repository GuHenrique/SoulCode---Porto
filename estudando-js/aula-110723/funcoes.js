let somar = (n1, n2) => {
  return n1 + n2;
};

let subtrair = (n1, n2) => {

  console.log(n1 - n2);
};

subtrair(123, 123);

let a = somar(12, 123);
console.log(a);

let desenhaTriangulo = (altura) => {
  for (let i = 0; i <= altura; i++) {
    let linha = "";
    for (let j = 0; j < (altura - i); j++) {
      linha += " ";
    }
    for (let j = 0; j < i; j++) {
      linha += "* ";
    }
    console.log(linha)
  }
}
desenhaTriangulo(10);