import java.util.ArrayList;
import java.util.List;

public class MediaAritmetica {

    public static void main(String[] args) {

        List<Double> numerosDouble = new ArrayList<Double>();

        /*Implemente um método que receba uma lista de números e retorne a média aritmética dos elementos presentes na lista.*/
        System.out.println("Exercicios de média");
        numerosDouble.add(10.0);
        numerosDouble.add(12.4);
        numerosDouble.add(11.4);
        numerosDouble.add(15.2);
        numerosDouble.add(9.5);
        System.out.println();
        System.out.println("Média: " + MediaAritmetica.mediaAritmetica(numerosDouble));
        System.out.println();
    }

    public static double mediaAritmetica(List<Double> numeros) {
        double media = 0;
        double total = 0;

        for (double numero : numeros) {
            total += numero;
        }

        media = total / numeros.size();

        return media;
    }
}
