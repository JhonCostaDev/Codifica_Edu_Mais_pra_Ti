public class Main {
    public static void main(String[] args) {

        int registro = 1234;
        String nomeCliente = "Francisco Messias Oliveira";
        int saldoMes = 1000;
        int gastoMensal = 800;
        int creditoUtilizado = 500;
        int limiteCredito = 1000;

        Customer fcoMessias = new Customer(registro, saldoMes, gastoMensal, creditoUtilizado, limiteCredito);
        System.out.println(fcoMessias.isCreditLimitAvailable());
    }
}