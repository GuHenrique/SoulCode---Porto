import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.Date;


public class EstudoDatas {
    public static void main(String[] args) {

        LocalDate localDate = LocalDate.now();
        LocalTime localTime = LocalTime.now();
        LocalDateTime localDateTime = LocalDateTime.now();

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("hh:mm:ss");
        DateTimeFormatter dtf3 = DateTimeFormatter.ofPattern("dd/MM/yyyy hh:mm");

        System.out.println(localDate.format(dtf));
        System.out.println(localTime.format(dtf2));
        System.out.println(localDateTime.format(dtf3));

        int ano = 2023;
        int mes = 12;
        int dia = 7;

        LocalDate dataValida = LocalDate.of(ano, mes, dia);
        System.out.println("dia: " + dataValida.getDayOfMonth());
        System.out.println("mes: " + dataValida.getMonthValue());
        System.out.println("ano: " + dataValida.getYear());

        LocalDate data1 = LocalDate.now();
        LocalDate data2 = LocalDate.of(2023, 8, 2);
        if (data2.isAfter(data1)){
            System.out.println(dtf.format(data2) + " É depois!");
        }else {
            System.out.println(dtf.format(data2) + " Não é depois!");
        }

        data2.format(dtf);
        dtf.format(data2);

        System.out.println("teste formatação sem instanciar objetos: " + LocalDate.of(2023, 8, 1).format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        System.out.println("formatação sem instanciar o objeto DateTimeFormatter: " + data1.format(DateTimeFormatter.ofPattern("EEEE MMMM/yyyy")));

    }
}
