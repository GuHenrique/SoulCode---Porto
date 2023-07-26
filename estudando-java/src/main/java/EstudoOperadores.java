public class EstudoOperadores {
    public static void main(String[] args) {

        System.out.println("Operadores matemáticos");
        int a = 10, b = 15;
        int soma = a + b;
        int subtracao = a - b;
        int multiplicacao = a * b;
        double divisao = (double) b / a;

        System.out.println("Soma:" + soma);
        System.out.println("Subtração:" + subtracao);
        System.out.println("Multiplicação:" + multiplicacao);
        System.out.println("Divisão:" + divisao);

        System.out.println();
        System.out.println("Math");
        double x = Math.pow(2, 3);
        System.out.println(x);
        double pi = Math.PI;
        System.out.println(pi);

        System.out.println();
        System.out.println("Incremento/Decremento");
        int valor = 5;
        valor++;
        System.out.println(valor);
        valor--;
        System.out.println(valor);

        System.out.println();
        System.out.println("Operadores relacionais");

        boolean teste1 = 10 > 5;
        boolean teste2 = 5 < 1;
        boolean teste3 = 5 == 5;
        boolean teste4 = 4 != 5;
        boolean teste5 = 4 >= 5;
        boolean teste6 = 4 <= 5;

        System.out.println("10 > 5 = " + teste1);
        System.out.println("5 < 1 = " + teste2);
        System.out.println("5 == 5 = " + teste3);
        System.out.println("4 != 5 = " + teste4);
        System.out.println("4 >= 5 = " + teste5);
        System.out.println("4 <= 5 = " + teste6);

        System.out.println();
        // Operadores lógicos

        boolean teste7 = true && false; //false
        boolean teste8 = true || false; //true
        boolean teste9 = !true; //false
        boolean teste10 = (5 < 10) && (8 > 10); //false
        boolean teste11 = (10 >= 0) && (1 < 5); //true


        System.out.println("true && false = " + teste7);
        System.out.println("true || false = " + teste8);
        System.out.println("!true = " + teste9);
        System.out.println("(5 < 10) && (8 > 10) = " + teste10);
        System.out.println("(10 >= 0) && (1 < 5) = " + teste11);

        System.out.println();
        System.out.println("IMC");
        double peso = 67.3;
        double altura = 1.74;
        double imc = peso / Math.pow(altura,2);
        System.out.printf("Seu imc é de: %.2f", imc);

    }
}
