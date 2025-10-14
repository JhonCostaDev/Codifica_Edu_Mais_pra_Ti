public class Produto{
	/* Exercício 2 — Encapsulamento com Validação de Regra (Desconto)

	Estenda Produto com o método aplicarDesconto(double porcentagem). 

	Permita apenas valores entre 0 e 50 (inclusive)

	Lance exceção (IllegalArgumentException ou DescontoInvalidoException) se a regra for violada. 

	Mostre, em um main ou testes, o preço antes/depois do desconto e a reação a entradas inválidas.*/
	private String nome;
	private double preco;
	private int quantidadeEmEstoque;

	//métodos da classe
	public void aplicarDesconto(double porcentagem){
		if(porcentagem < 0 || porcentagem > 50){
			throw new IllegalArgumentException("O valor de desconto deve ser de 0 a 50%");
		}
		this.preco -= (preco * porcentagem / 100);
	}

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