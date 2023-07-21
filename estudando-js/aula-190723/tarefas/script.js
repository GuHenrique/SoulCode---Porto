const tarefas = [];

function gerarTabela() {
  let tabela = `
    <table>
      <tr>
        <th>Descrição</th>
        <th>Prioridade</th>
        <th>Status</th>
        <th>Prazo</th>
        <th>Remover / Concluir</th>
        
      </tr>
  `;

  tarefas.forEach((tarefa, index) => {
    tabela += `

      <tr>
        <td>${tarefa.descricao}</td>
        <td>${tarefa.prioridade}</td>
        <td>${tarefa.stat}</td>
        <td>${tarefa.prazo}</td>
        <td>
          <button class="btnRemove" data-index="${index}"> Remover </button> 
          <button class="btnDone" data-index="${index}"> Concluir </button> 
        </td>
      </tr>
    `
  })

  tabela += '</table>';

  document.querySelector("#container").innerHTML = tabela;

  const btnRemove = document.querySelectorAll(".btnRemove");
  for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener("click", removerTarefa);
  }

  const btnDone = document.querySelectorAll(".btnDone");
  for (let i = 0; i < btnRemove.length; i++) {
    btnDone[i].addEventListener("click", concluirTarefa);
  }

}


document.querySelector("#formTarefa").addEventListener("submit", e => {
  e.preventDefault();

  const descricao = document.querySelector("#descricao").value;
  const prioridade = document.querySelector("#prioridade").value;
  const stat = document.querySelector("#status").value;
  const prazo = document.querySelector("#prazo").value;

  tarefas.push({ descricao, prioridade, stat, prazo });

  document.querySelector("#formTarefa").reset();

  gerarTabela();


})




function removerTarefa() {
  const index = this.getAttribute("data-index");
  tarefas.splice(index, 1);
  gerarTabela();
}

function concluirTarefa() {
  const index = this.getAttribute("data-index");
  tarefas[index].stat = "Tarefa concluida";
  gerarTabela();
}
