package aula_0408.exercicio;

import java.util.ArrayList;
import java.util.List;

public class Banco {
    private List<Conta> contas = new ArrayList<>();

    public Banco() {

    }

    public void criarConta(Cliente cliente) {
        Conta conta = new Conta();
        int numeroConta = contas.size() + 1;

        conta.setNumeroConta(numeroConta);
        conta.setSaldo(0.0);
        conta.setCliente(cliente);

        this.contas.add(conta);
    }

    public Conta buscarConta(int numeroConta) {
        Conta conta = new Conta();
        for (int i = 0; i < contas.size(); i++) {

            if (numeroConta == contas.get(i).getNumeroConta()) {
                return contas.get(i);
            }
        }
        return null;
    }

    public List<Conta> listarContas() {
        return contas;
    }

    @Override
    public String toString() {
        return "Banco: " +
                "\nContas: " + contas;
    }
}
