public class Produto{
	/* Encapsulamento (Classe Produto)
Implemente a classe Produto com atributos privados 
	* nome, 
	* preco e
	* quantidadeEmEstoque. 

Forneça getters e setters com validações: 
	* preco e quantidadeEmEstoque não podem ser negativos e 
	* nome não pode ser nulo ou vazio. 

Lance IllegalArgumentException em casos inválidos. 

Demonstre o uso criando instâncias, alterando valores válidos e 
tentando atribuições inválidas.*/
	private String nome;
	private double preco;
	private int quantidadeEmEstoque;


	//Setters
	public void setNome(String nome) {
		if(nome == null || nome.isEmpty()) {
			throw new IllegalArgumentException("O nome do produto não pode ser nulo ou vazio!");
		}
		this.nome = nome;
	}

	public void setPreco(double preco) {
		
		if(preco < 0) {
			throw new IllegalArgumentException("Valor inválido!");
		}

		this.preco = preco;
	}

	public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
		if(quantidadeEmEstoque < 0) {
			throw new IllegalArgumentException("Quantidade inválido!");
		}

		this.quantidadeEmEstoque = quantidadeEmEstoque;
	}
	//Getters

	public String getNome() {
		return nome;
	}

	public double getPreco() {
		return preco;
	}

	public int getQuantidadeEmEstoque() {
		return quantidadeEmEstoque;
	}


}