public class NumeroPrimo {
    public static void main(String[] args) {
        /*Escreva um método que receba um número inteiro e retorne verdadeiro se ele for primo e falso caso contrário.*/

        System.out.println(NumeroPrimo.ePrimo(7));
        System.out.println();
    }

    public static boolean ePrimo(int numero) {
        int contador = 0;
        for (int i = 1; i <= numero; i++) {
            if (numero % i == 0) {
                contador++;
            }
        }
        if (contador == 2) {
            return true;
        } else {
            return false;
        }
    }

}