public class EstudoEnums {

    public static void main(String[] args) {
        Pessoa pessoa = new Pessoa("Gustavo", 20, NivelAcesso.USUARIO);

        if(pessoa.nivelAcesso == NivelAcesso.ADMINISTRADOR){
            System.out.println("Libera tudo!!");
        }


    }
}

class Pessoa {
    String nome;
    int idade;
    NivelAcesso nivelAcesso;

    public Pessoa(String nome, int idade, NivelAcesso nivelAcesso) {
        this.nome = nome;
        this.idade = idade;
        this.nivelAcesso = nivelAcesso;
    }
}

enum NivelAcesso {
    COMUM,
    USUARIO,
    ADMINISTRADOR
}