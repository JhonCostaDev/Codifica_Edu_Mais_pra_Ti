public class Customer {
    private int accountNumber; //Numero da conta
    private int accountStartMonthBalance; //Saldo inicial do mes
    private int totalCreditsApplied; //Desconto total
    private int totalChargesThisMonth; //Valor de credito concedido no mes
    private int creditLimitAvailable; //Limite de credito disponivel
    
    
    public Customer(int accountNumber, int accountStartMonthBalance, int totalCreditsApplied, int totalChargesThisMonth, int creditLimitAvailable) {
        this.accountNumber = accountNumber;
        this.accountStartMonthBalance = accountStartMonthBalance;
        this.totalCreditsApplied = totalCreditsApplied;
        this.totalChargesThisMonth  = totalChargesThisMonth;
        this.creditLimitAvailable = creditLimitAvailable;
    }
    
    public int calculateNewBalance() {
        return  accountStartMonthBalance + totalChargesThisMonth - totalCreditsApplied;
    }
    
    public String isCreditLimitAvailable() {
        if (calculateNewBalance() > creditLimitAvailable) {
            return "Limite de credito excedido";
        } else {
            return "Limite de credito disponivel";
        }
    }
    
}