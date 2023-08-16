package aula_1508.heranca;


import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Produto batata = new Produto("Batata", 8.5, "15893217");

        System.out.println(batata.getNome());
        System.out.println(batata.getCodigo());

        Livro livro = new Livro("Clean Code", 100.00, "123123", 300, "123.534.345");

        System.out.println(livro.getNumPaginas());
        System.out.println(livro.getNome());

        Comida comida = new Comida("Tapioca", 5.00, "5456745", LocalDate.of(2023, 10, 02), 24.5);

        System.out.println(comida.getPrazoDeValidade());

        Carne carne = new Carne("Picanha", 100.00, "123123", LocalDate.of(2023, 10, 23), 300.0, "A");

        System.out.println(carne.getPrazoDeValidade());
        System.out.println(carne.getCategoria());

    }
}
