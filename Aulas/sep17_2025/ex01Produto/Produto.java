public class Produto {
    private String nome;
    private double preco;
    private int quantEmEstoque;

    //Setters
    public void getNome(String nome) {
        this.nome = nome;
    }

    public void getPreco(double preco) {
        this.preco = preco;
    }

    public void getQuantEmEstoque(int quantEmEstoque) {
        this.quantEmEstoque = quantEmEstoque;
    }
}