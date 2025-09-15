import java.util.Scanner;

public class AccountTeste {
	public static void main(String[] args) {

		//Instância do objeto Scanner para obter entradas do usuário
		Scanner input = new Scanner(System.in);

		//instância de dois objetos conta
		Account conta1 = new Account("Jane Green", 50.0);
		Account conta2 = new Account("John Blue", -7.53);

		//Exibir o saldo inicial de cada conta
		System.out.printf("%s - Balance: $ %.2f %n", conta1.getName(), conta1.getBalance());
		System.out.printf("%s - Balance: $ %.2f %n", conta2.getName(), conta2.getBalance());

		//Adicionando valores
		System.out.println("Digite o valor para deposito em Nome de Jane Green"); //prompt
		double depositAmount = input.nextDouble(); //armazena o valor do depósito

		System.out.printf("%nAdicionando $ %.2f na conta de Jane Green%n%n", depositAmount);
		conta1.deposit(depositAmount); //adiciona o valor a conta

		System.out.println("Digite o valor para deposito em Nome de John Blue"); //prompt
		depositAmount = input.nextDouble(); //armazena o valor do depósito

		System.out.printf("%nAdicionando $ %.2f na conta de John Blue%n%n", depositAmount);
		conta2.deposit(depositAmount); //adiciona o valor a conta

		//Exibir novo saldo
		System.out.println("Novo saldo");
		System.out.printf("%s - Balance: $ %.2f %n", conta1.getName(), conta1.getBalance());
		System.out.printf("%s - Balance: $ %.2f %n", conta2.getName(), conta2.getBalance());

		//Sacar valor
		System.out.println("Digite o valor para Saque em Nome de John Blue"); //prompt
		double withDrawAmount = input.nextDouble(); //armazena o valor do depósito
		conta2.withDraw(withDrawAmount);
		System.out.printf("%s - Balance: $ %.2f %n", conta2.getName(), conta2.getBalance());

	}
}