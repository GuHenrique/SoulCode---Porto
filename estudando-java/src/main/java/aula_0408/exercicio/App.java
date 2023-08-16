package aula_0408.exercicio;

public class App {
    public static void main(String[] args) {
        Cliente cliente1 = new Cliente("Gustavo", 26, "12321312");
        Cliente cliente2 = new Cliente("Joao", 43, "21314131");
        Banco banco = new Banco();

        banco.criarConta(cliente1);
        banco.criarConta(cliente2);

        System.out.println("**LISTA TODAS AS CONTAS**");
        System.out.println(banco.listarContas());
        System.out.println();

        System.out.println("**BUSCA CONTA PELO NUMERO**");
        System.out.println(banco.buscarConta(2));
        System.out.println();

        System.out.println("**DEPÓSITO E SAQUE**");
        banco.buscarConta(2).depositar(200);
        banco.buscarConta(2).sacar(100);
        banco.buscarConta(2).sacar(200);


    }
}
