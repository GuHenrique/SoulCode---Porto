package aula_0408.exercicio;

public class Conta {
    private Integer numeroConta;
    private Double saldo;
    private Cliente cliente;

    public Conta() {
    }

    public Conta(int numeroConta, Double saldo, Cliente cliente) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    public int getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(int numeroConta) {
        this.numeroConta = numeroConta;
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void depositar(double valor) {
        if(valor > 0){
            saldo += valor;
            System.out.println();
            System.out.println("Depósito realizado com sucesso");
            System.out.println("Seu saldo atual é de: "+ getSaldo());

        }else {
            System.out.println();
            System.out.println("Insira um valor válido");
        }

    }

    public void sacar(double valor) {
        if (valor <= saldo) {
            saldo -= valor;
            System.out.println();
            System.out.println("Saque realizado com sucesso");
            System.out.println("Seu saldo atual é de: " + getSaldo());

        } else {
            System.out.println();
            System.out.println("Saldo insuficiente");
        }
    }

    @Override
    public String toString() {
        return "\nConta" +
                "\n  Numero: " + numeroConta +
                "\n  Saldo: " + getSaldo() + cliente;
    }

}
