import java.util.*;

public class EstudoListas {

    public static void main(String[] args) {
        List<Integer> numeros = new ArrayList<Integer>();

        Integer numero1 = 123;
        int numero2 = 213213;

        numeros.add(5);
        numeros.add(8);
        numeros.add(3);
        numeros.add(9);

        System.out.println("Primeiro for: ");
        for (int i = 0; i < numeros.size(); i++) {
            System.out.println(numeros.get(i));
        }
        System.out.println("ForEach ");
        for (int numero : numeros) {
            System.out.println(numero);
        }

        System.out.println("Método ForEach()");
        numeros.forEach(System.out::println);
        List<String> nomes;
        nomes = new ArrayList<String>();
        nomes.add("Gustavo");
        nomes.add("Ronaldo");
        nomes.add("Denise");
        Collections.sort(nomes);

        System.out.println();
        Set<Integer> numeros2 = new TreeSet<Integer>();
        numeros2.add(4);
        numeros2.add(76);
        numeros2.add(3);
        numeros2.add(1);

        numeros2.forEach(System.out::println);
    }


}
