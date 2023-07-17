// Objeto -> Estruta que representa um objeto do mundo real
// Objeto pode ser modelado -> Classe

class Livro {

  titulo;
  autor;
  paginas;

  constructor(titulo, autor, paginas) {

    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;

  }

}


// Para criar a estutura "fisica" do objeto pela classe é necessário fazer uma INSTÂNCIA.


let arquiteturaLimpa = new Livro();

arquiteturaLimpa.titulo = "Arquitetura Limpa";
arquiteturaLimpa.autor = "Robert C. Martin";
arquiteturaLimpa.paginas = 400;
console.log(arquiteturaLimpa);

let javaIniciantes = new Livro("Java para Iniciantes", "Herbert", 504);
console.log(javaIniciantes);

// Objeto sem classe
const objeto = {};