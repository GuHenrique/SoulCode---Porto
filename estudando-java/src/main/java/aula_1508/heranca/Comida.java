package aula_1508.heranca;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Comida extends Produto {

    private LocalDate prazoDeValidade;
    private Double caloria;

    public Comida() {
    }

    public Comida(String nome, Double preco, String codigo, LocalDate prazoDeValidade, Double caloria) {
        super(nome, preco, codigo);
        this.prazoDeValidade = prazoDeValidade;
        this.caloria = caloria;
    }

    public String getPrazoDeValidade() {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return prazoDeValidade.format(dtf);

    }

    public void setPrazoDeValidade(LocalDate prazoDeValidade) {
        this.prazoDeValidade = prazoDeValidade;
    }

    public Double getCaloria() {
        return caloria;
    }

    public void setCaloria(Double caloria) {
        this.caloria = caloria;
    }
}
