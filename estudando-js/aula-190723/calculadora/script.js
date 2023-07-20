const btns = document.querySelectorAll(".pressable");
const btnAc = document.querySelector("#ac");
const calc = document.querySelector("#calc");
const visor = document.querySelector("#visor")

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    visor.value += e.target.innerText;

  })
})

calc.addEventListener("click", () => {
  let expressao = visor.value.replaceAll(",", ".")
  let resultado = eval(expressao).toString().replaceAll(".", ",");
  visor.value = resultado;
})

btnAc.addEventListener("click", () => {
  visor.value = "";
})

