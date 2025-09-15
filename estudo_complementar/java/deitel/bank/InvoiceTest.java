import java.util.Scanner;
public class InvoiceTest {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		Invoice fatura1 = new Invoice("001", "Mouse negativo", 2, 8.99);
		double totalFatura1 = fatura1.getInvoiceAmount();
		fatura1.showInvoice();
		System.out.println(totalFatura1);
	}
}