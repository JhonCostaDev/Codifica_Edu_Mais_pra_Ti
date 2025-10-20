public class Customer {
    private int accountNumber; //Numero da conta
    private int accountStartMonthBalance; //Saldo inicial do mes
    private int accountTotalDiscount; //Desconto total
    private int amountCreditGrantedMonth; //Valor de credito concedido no mes
    private int creditLimitAvailable; //Limite de credito disponivel
    private int newBalance;
    
    public Customer(int accountNumber, int accountStartMonthBalance, int accountTotalDiscount, int amountCreditGrantedMonth, int creditLimitAvailable) {
        this.accountNumber = accountNumber;
        this.accountStartMonthBalance = accountStartMonthBalance;
        this.accountTotalDiscount = accountTotalDiscount;
        this.amountCreditGrantedMonth = amountCreditGrantedMonth;
        this.creditLimitAvailable = creditLimitAvailable;
        this.newBalance = accountStartMonthBalance + amountCreditGrantedMonth - accountTotalDiscount;
    }
    
    public String isCreditLimitAvailable() {
        if (newBalance > creditLimitAvailable) {
            return "Limite de credito excedido";
        } else {
            return "Limite de credito disponivel";
        }
    }
    
}