public class Main {
    public static void main(String[] args) {
        
        Customer cliente1 = new Customer(
            1001,  // Número da conta
            500,   // Saldo inicial do mês
            200,   // Total de créditos aplicados (pagamentos)
            300,   // Total de compras no mês
            1000   // Limite de crédito
        );
        
        Customer cliente2 = new Customer(
            1002,
            400,
            100,
            300,
            600
        );
        
        Customer cliente3 = new Customer(
            1003,
            800,
            100,
            500,
            1100
        );
        
        System.out.println("cliente1: " + cliente1.calculateNewBalance() + cliente1.isCreditLimitAvailable());
        
        System.out.println("cliente2: " + cliente2.calculateNewBalance() + cliente2.isCreditLimitAvailable());
        
        System.out.println("cliente3: " + cliente3.calculateNewBalance() + cliente3.isCreditLimitAvailable());
        
        


        

        
    }

}