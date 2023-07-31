class Garrafa {
    double volume;

    public double obterVolume() {
        return this.volume;
    }

}

public class EstudandoMetodos{

    public String bemVindo(String nome, int idade) {
        return String.format("Bem vindo, %s, você tem %d anos", nome, idade);

    }

    public void imprimir(String texto) {
        System.out.println(texto);
    }

    public double soma(double n1, double n2, double n3) {
        return n1 + n2 + n3;
    }

    public static void main(String[] args) {
        Garrafa garrafa = new Garrafa();

        garrafa.volume = 1.5;
        garrafa.obterVolume();
    }
}