import java.util.Scanner;

public class SomaVetores {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int vetor1[] = {10, 3, 4, 5, 6};
        int vetor2[] = {23, 4, 5, 6, 5};
        int vetorSoma[] = new int[vetor2.length];

        for (int i = 0; i < vetorSoma.length; i++){
            vetorSoma[i] = vetor1[i] + vetor2[i];
        }

        for (int soma : vetorSoma){
            System.out.println(soma);
        }

    }
}
