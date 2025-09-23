import java.util.Scanner; // Import da classe Scanner para entrada do usuário

public class Main {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		Produto arroz = new Produto();

		arroz.setNome("Arroz da vovó");
		arroz.setPreco(100);
		arroz.setQuantidadeEmEstoque(10);

		resume(arroz);
		arroz.aplicarDesconto(10);
		resume(arroz);


		// Produto biscoito = new Produto();
		// biscoito.setNome("Maizena");
		// biscoito.setQuantidadeEmEstoque(-1);
		// biscoito.setPreco(-2.99);
		// resume(biscoito);

		


	}

	//método para exibir um resumo
	public static void resume(Produto produto) {
		System.out.printf("""
			=== Produto === 
			Produto: %s 
			Quantidade em Estoque: %d 
			Preço unítário: R$ %.2f
			Valor Total: R$ R$ %.2f
			=== 
			\n""", produto.getNome(), produto.getQuantidadeEmEstoque(), produto.getPreco(), produto.getQuantidadeEmEstoque() * produto.getPreco());
	}
}