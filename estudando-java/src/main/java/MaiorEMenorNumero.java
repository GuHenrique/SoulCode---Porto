import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class MaiorEMenorNumero {
    public static void main(String[] args) {
        /*Crie um programa que receba 5 números do usuário e armazene-os em uma lista. Em seguida, exiba o maior e o menor número da lista.*/
        System.out.println("Exercício maior e menor número: ");
        List<Integer> numeros = new ArrayList<Integer>();

        numeros.add(456);
        numeros.add(321);
        numeros.add(435);
        numeros.add(234);
        numeros.add(122);

        Collections.sort(numeros);
        System.out.println("Menor número: " + numeros.get(0));
        System.out.println("Maior número " + numeros.get(numeros.size() - 1));

    }
}

