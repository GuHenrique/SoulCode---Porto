const tarefas = [{
	descricao: "teste",
	prioriade: "teste",
	status: "teste",
	prazo: new Date()
}];

function gerarTabela() {
	let tabela = `
	
	<table>
		<tr>

			<th>Concluir</th>
			<th>Descrição</th>
			<th>Prioridade</th>
			<th>Status</th>
			<th>Prazo</th>
			<th>Remover</th>

	  	</tr>

  `;


	tarefas.forEach((tarefa, index) => {
		tabela += `

			<tr>
				<td>
					<input type="checkbox" class="btnDone" 
					${tarefa.status == "Tarefa concluida" && "checked"} 
					data-index="${index}">
				</td>
			
				<td>${tarefa.descricao}</td>
				<td>${tarefa.prioridade}</td>
				<td>${tarefa.status}</td>
				<td>${tarefa.prazo}</td>
				<td>
					<button class="btnRemove" data-index="${index}"> Remover </button>
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
	const status = document.querySelector("#status").value;
	const prazo = document.querySelector("#prazo").value;

	tarefas.push({ descricao, prioridade, status, prazo });

	document.querySelector("#formTarefa").reset();

	gerarTabela();

});


function removerTarefa() {
	const index = this.getAttribute("data-index");
	tarefas.splice(index, 1);
	gerarTabela();
};

function concluirTarefa() {
	const index = this.getAttribute("data-index");
	tarefas[index].status = "Tarefa concluida";
	gerarTabela();


};

gerarTabela();