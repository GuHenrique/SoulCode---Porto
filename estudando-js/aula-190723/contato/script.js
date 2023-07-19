let email = document.querySelector("#email");
let campos = document.querySelectorAll("input, textarea");
function validarEmail() {
  const valor = email.value;
  if (valor.includes("@") && !valor == "") {

    email.style.borderColor = "green";
  } else {

    email.style.borderColor = "red";
  }
}
email.addEventListener("input", validarEmail);

function validarCampoVazio(evento) {
  const campo = evento.target;  //Objeto target reprenseta o elemento que acionou o evento

  let valor = campo.value;

  if (valor == "") {

    campo.style.borderColor = "red";
  } else {

    campo.style.borderColor = "green";
  }

}

campos.forEach(campo => {

  campo.addEventListener("blur", validarCampoVazio) // evento blur, só tem a ação quando é tirado o foco do campo
});

