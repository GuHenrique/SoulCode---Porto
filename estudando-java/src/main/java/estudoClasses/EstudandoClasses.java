package estudoClasses;

public class EstudandoClasses {

    public static void main(String[] args) {

        Fruta pera = new Fruta();
        pera.setNome("Pera");
        pera.setCor("verde");
        pera.setAcidez(0.4);
        pera.setSuculencia(true);

        Fruta abacaxi = new Fruta("Abacaxi", "amarelo", 2, true);


        System.out.println(abacaxi);
        System.out.println(pera);
    }
}
