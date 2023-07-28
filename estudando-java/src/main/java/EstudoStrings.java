import java.sql.SQLOutput;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class EstudoStrings {
    public static void main(String[] args) {
        String java = "Java";

        System.out.println(java.toLowerCase());
        System.out.println(java.toUpperCase());
        System.out.println(java.substring(2, 4)); // inidicine inicial, indice final + 1;

        String nome1 = "Estefane";
        String nome2 = "Estefane";
        String nome3 = "Estefane";




        System.out.println(nome1 == nome2); // compara os objetos nome1 e nome2;
        System.out.println(nome1.equals(nome2)); // compara os textos de nome1 e nome2;

        String numeStr = "4";
        int num = Integer.parseInt(numeStr);

        System.out.println("Hash nome1" + System.identityHashCode(nome1));
        System.out.println("Hash nome2" + System.identityHashCode(nome2));

        Scanner sc = new Scanner(System.in);

        String texto = "Vamos para o break retornamos, as 10:35";

        System.out.println("Digite uma palavra");
        String palavra = sc.nextLine();

        if(palavra.isBlank()){
            System.out.println("Conteúdo vazio");
        }
        else if(texto.contains(palavra)){
            System.out.println("Contém");
        }else{
            System.out.println("Não contém");
        }

    }
}
