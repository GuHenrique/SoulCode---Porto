import java.util.Scanner;

public class ValidaEmailSenha {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite seu email:");
        String email = sc.nextLine();

        System.out.print("Digite uma senha:");
        String senha = sc.nextLine();

        if (email.contains("@soulcode.com") && senha.length() > 8){
            System.out.println("Email e senha válidos");

        }else {
            System.out.println("Email e senha inválidos");
        }

    }
}
