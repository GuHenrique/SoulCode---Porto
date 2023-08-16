package estudoClasses;

public class Fruta {

    private String nome;
    private String cor;
    private double acidez;
    private boolean suculencia;

    public Fruta() {
    }

    public Fruta(String nome, String cor, double acidez, boolean suculencia) {
        this.nome = nome;
        this.cor = cor;
        this.acidez = acidez;
        this.suculencia = suculencia;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public double getAcidez() {
        return acidez;
    }

    public void setAcidez(double acidez) {
        this.acidez = acidez;
    }

    public boolean isSuculencia() {
        return suculencia;
    }

    public void setSuculencia(boolean suculencia) {
        this.suculencia = suculencia;
    }

    @Override
    public String toString() {
        return "Fruta{" +
                "nome='" + nome + '\'' +
                ", cor='" + cor + '\'' +
                ", acidez=" + acidez +
                ", suculencia=" + suculencia +
                '}';
    }
}
