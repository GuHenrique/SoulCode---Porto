const alunos = [
  {
    nome: "Gustavo",
    idade: 25,
    nota: 10
  },
  {
    nome: "Maria",
    idade: 19,
    nota: 7
  },
  {
    nome: "João",
    idade: 29,
    nota: 9
  },
  {
    nome: "Ronaldo",
    idade: 23,
    nota: 5
  }
]


function geraTabela() {
  let tabela = document.querySelector("#corpo-tabela");

  alunos.forEach(aluno => {

    return tabela.innerHTML +=
      `<tr>
        <td>${aluno.nome}</td>
        <td>${aluno.idade}</td>
        <td>${aluno.nota}</td>
      </tr>`

  })
}

geraTabela();