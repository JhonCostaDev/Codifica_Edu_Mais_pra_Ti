/*
Crie uma classe chamada Invoice (fatura) para que uma loja de suprimentos de informática utilize para
representar uma fatura de um itm vendido nela.

Uma invoice (fatura) deve incluir quatro partes das informações como variáveis de instância:
	* número (String)
	* descrição (String)
	* Quantidade comprada de um item (int)
	* preço por item (double)
	* 
Sua classe deve ter um construtor que inicializa as quatros variáveis de instância.
Sua classe deve ter métodos get e set para as variáveis de instância
Sua classe deve ter um método chamado getInvoiceAmount que calcula o valor da fatura(Multiplica
a quantidade pelo preço por item) e retorna esse valor como double. Se a quantidade não for positiva
, ela deve ser configurada como 0. Se o preço por item não for positivo, ele deve ser configurado como 0

Crie outra classe InvoiceTeste que demonstra as capacidades da classe Invoice.
*/
public class Invoice {
	//Variáveis de instância
	private String id;
	private String description;
	private int quantity;
	private double unitPrice;

	//Construtor
	public Invoice(String id, String description, int quantity, double unitPrice) {
		this.id = id;
		this.description = description;
		this.quantity = quantity;
		this.unitPrice = unitPrice;
	}

	public double getInvoiceAmount() {
		if(quantity < 0) {
			quantity = 0;
		}

		if(unitPrice < 0) {
			unitPrice = 0;
		}

		return quantity * unitPrice;
	}

	//seters
	public void setId(String id) {
		this.id = id;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	//getres

	public String getId() {
		return id;
	}

	public String getDescription() {
		return description;
	}

	public int getQuantity() {
		return quantity;
	}

	public double getUnitPrice() {
		return unitPrice;
	}


	public void showInvoice(){
		System.out.printf("%s%n%s%n%d%n%.2f%n", id, description, quantity, unitPrice);
	}
}	