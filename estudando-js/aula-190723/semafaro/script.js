const semaforos = [
  "assets/vermelho.png",
  "assets/amarelo.png",
  "assets/verde.png",
]
const img = document.querySelector("img")

document.querySelector("#vermelho").addEventListener("click", () => {
  clearInterval(intervalo);
  img.src = semaforos[0];
})

document.querySelector("#amarelo").addEventListener("click", () => {
  clearInterval(intervalo);
  img.src = semaforos[1];
})

document.querySelector("#verde").addEventListener("click", () => {
  clearInterval(intervalo);
  img.src = semaforos[2];
})

let intervalo = "";

document.querySelector("#automatico").addEventListener("click", () => {
  let corAtual = 1;
  intervalo = setInterval(() => {
    img.src = semaforos[corAtual];

    if (corAtual == (semaforos.length - 1)) {
      corAtual = 0;
    } else {
      corAtual++;
    }
  }, 500)
});