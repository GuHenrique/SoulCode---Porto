import java.util.Locale;
import java.util.Scanner;

public class EstudoEstruturas {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);

/*        System.out.print("Digite o seu nome: ");
        String nome = scanner.nextLine();

        System.out.print("Qual a sua idade: ");
        int idade = scanner.nextInt();

        System.out.print("Qual a sua altura: ");
        double altura = scanner.nextDouble();

        System.out.print("Qual o seu peso: ");
        double peso = scanner.nextDouble();

        double imc = peso / Math.pow(altura, 2);

        System.out.println();
        System.out.println("*** INFORMAÇÕES ***");
        System.out.println("Nome: " + nome);
        System.out.print("Idade: " + idade + " anos, ");
        String mensagem = idade >= 18 ? "você é maior de idade" : "você é menor de idade";
        System.out.println(mensagem);
        System.out.printf("Altura : %.2f mt%n", altura);
        System.out.printf("Peso : %.2f kg%n", peso);
        System.out.printf("Seu IMC é %.2f. ", imc);

        if (imc < 17) {
            System.out.println("Muito abaixo do peso.");
        } else if (imc >= 17 && imc < 18.5) {
            System.out.println("Abaixo do peso");
        } else if (imc >= 18.5 && imc < 25) {
            System.out.println("Peso normal");
        } else if (imc >= 25 && imc < 30) {
            System.out.println("Acima do peso");
        } else if (imc >= 30 && imc < 35) {
            System.out.println("Obesidade I");
        } else if (imc >= 35 && imc < 40) {
            System.out.println("Obesidade II");
        } else if (imc > 40) {
            System.out.println("Obesidade III");
        }

        System.out.println("Selecione uma dieta (1 a 3)");
        System.out.println("1 - Água");
        System.out.println("2 - Fruta");
        System.out.println("1 - Batata");

        int opcao = scanner.nextInt();

        switch (opcao) {
            case 1 -> System.out.println("Você escolheu a dieta da água!");
            case 2 -> System.out.println("Você escolheu a dieta da fruta!");
            case 3 -> System.out.println("Você escolheu a dieta da batata!");
            default -> System.out.println("Escolha uma dieta válida!");
        }*/

        System.out.println("Digite a quantiade de repetições: ");
        int repeticoes = scanner.nextInt();
        int i = 0;
        while (i < repeticoes) {
            System.out.println("teste");
            i++;
        }
    }
}