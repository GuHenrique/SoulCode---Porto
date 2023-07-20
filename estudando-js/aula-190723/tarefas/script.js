const btn = document.querySelector("#enviar");
const table = document.querySelector("#tarefa");


const descricao = document.querySelector("#descricao");
const prioridade = document.querySelector("#prioridade");
const stat = document.querySelector("#status");
const prazo = document.querySelector("#prazo");


const tarefas = [
  {
    descricao: "",
    prioridade: "",
    stat: "",
    prazo: ""
  }
];

const btnRemove = document.querySelector("#remove");
const btnDone = document.querySelector("#done");

btnRemove.addEventListener(e => {
  console.log(e.target.value);
})

btn.addEventListener("click", () => {
  tarefas.descricao = descricao.value;
  tarefas.prioridade = prioridade.value;
  tarefas.stat = stat.value;
  tarefas.prazo = prazo.value;

  table.innerHTML += `
      <tr>
        <td>${tarefas.descricao}</td>
        <td>${tarefas.prioridade}</td>
        <td>${tarefas.stat}</td>
        <td>${tarefas.prazo}</td>
        <td><button id="remove">Remover</button></td>
        <td><button id="done">Concluir</button></td>
       </tr>
    `

})


