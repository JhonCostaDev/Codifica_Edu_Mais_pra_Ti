public class Account {
	//variaveis de instancia
	private String name;		//nome
	private double balance; 	//saldo

	//construtor da classe com dois parametros
	public Account(String name, double balance) {
		this.name = name;

		//Valida que o saldo é maior que 0.0, se não for, a variável de instância saldo  mantém seu valor inicial padrão de 0.
		if(balance > 0.0) {
			this.balance = balance;
		}
	}

	//método para depósito (add) apenas quantia válida no saldo
	public void deposit(double depositAmount) {
		if (depositAmount > 0.0) //se o valor de deposito for maior que zero.
			balance = balance + depositAmount; //adiciona ao saldo.
	}

	//método para sacar da conta
	public void withDraw(double value) {
		if(value < balance) {
			balance = balance - value;
		} else {
			System.out.println("Not enough balance!");
		}
	} 

	//método para retornar o saldo da conta
	public double getBalance() {
		return balance;
	}	

	// método para definir o nome;
	public void setName(String name) {
		this.name = name;
	}

	//método para retornar o nome;
	public String getName() {
		return name;
	}
}