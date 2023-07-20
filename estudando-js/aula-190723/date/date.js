let data = new Date();

console.log(data.toLocaleDateString());
console.log(data.toLocaleTimeString());
let agora = Date.now();
console.log(agora);
let dezMin = 1000 * 60 * 10;
console.log(agora + dezMin);
console.log(new Date(agora));
console.log(new Date(agora + dezMin));

console.log(new Date(2021, 12 - 1, 7)); // Os meses começam de zero

const btn = document.querySelector("#enviar");

btn.addEventListener("click", () => {
  const dataCampo = document.querySelector("#dataNasc");
  const valor = dataCampo.value;
  const vetorData = valor.split("-").map(n => Number(n));
  const data = new Date(vetorData[0], vetorData[1] - 1, vetorData[2]);
  window.alert(data);
});

