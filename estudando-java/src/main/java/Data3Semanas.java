import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class Data3Semanas {
    public static void main(String[] args) {
        /*Escreva um programa que calcule e exiba a data daqui a três semanas a partir da data atual.*/

        LocalDate hoje = LocalDate.now();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate dataAtualizada = hoje.plus(3, ChronoUnit.WEEKS);
        System.out.println("A data de hoje é " + hoje.format(dtf));
        System.out.println("A data daqui 3 semenas será: " + dataAtualizada.format(dtf));

        System.out.println();
    }
}
