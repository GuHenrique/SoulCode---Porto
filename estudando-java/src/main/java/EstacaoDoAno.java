import java.time.LocalDate;

public class EstacaoDoAno {
    public static void main(String[] args) {

        LocalDate data = LocalDate.parse("2023-05-10");
        System.out.println(EstacaoDoAno.estacaoDoAno(data));

    }


    public static String estacaoDoAno(LocalDate data) {
        int mes = data.getMonthValue();
        String estacao = "";
        switch (mes) {
            case 1, 2, 3:
                estacao = "Primavera";
                break;
            case 4, 5, 6:
                estacao = "Verão";
                break;
            case 7, 8, 9:
                estacao = "Outono";
                break;
            case 10, 11, 12:
                estacao = "Inverno";
                break;
        }

        return estacao;

    }

}
