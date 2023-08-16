package aula_1508.polimorfismo;

public class Gato extends Animal {

    private String corPelo;

    public Gato() {
    }

    public Gato(String nome, String especie, String habitat, String corPelo) {
        super(nome, especie, habitat);
        this.corPelo = corPelo;
    }

    public String getCorPelo() {
        return corPelo;
    }

    public void setCorPelo(String corPelo) {
        this.corPelo = corPelo;
    }

    @Override
    public void emitirSom() {
        System.out.println(getNome() + " Miau");
    }
}
