import java.util.Arrays;
import java.util.Locale;
import java.util.Scanner;
import java.util.stream.Stream;

public class EstudoVetores {

    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        int[] nums = {1, 2, 3, 4, 5};

        System.out.println(nums[4]);
        nums[4] = 8;
        System.out.println(nums[4]);

        for (int i = 0; i < nums.length; i++) {
            System.out.println(nums[i]);
        }

        Scanner sc = new Scanner(System.in);


        System.out.print("Digite a quantidade de notas que irá lançar: ");
        int n = sc.nextInt();
        double[] notas = new double[n];
        String[] alunos = new String[n];

        for (int i = 0; i < n; i++) {

            System.out.print("Digite o nome do aluno: ");
            sc.nextLine();
            alunos[i] = sc.nextLine();

            System.out.print("Digite a nota: ");
            notas[i] = sc.nextDouble();

        }
        sc.close();

        for (int i = 0; i < notas.length; i++) {
            System.out.println(alunos[i] + ": " + notas[i]);
        }
    }

}
