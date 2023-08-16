package aula_1508.heranca;

import java.time.LocalDate;

public class Carne extends Comida {
    private String categoria;


    public Carne() {
    }

    public Carne(String nome, Double preco, String codigo, LocalDate prazoDeValidade, Double caloria, String categoria) {
        super(nome, preco, codigo, prazoDeValidade, caloria);
        this.categoria = categoria;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
