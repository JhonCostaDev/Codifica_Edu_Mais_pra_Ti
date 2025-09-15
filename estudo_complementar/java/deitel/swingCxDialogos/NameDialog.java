import javax.swing.JOptionPane;

public class NameDialog {
	public static void main(String[] args) {
		//caixa de dialogo para inserir o nome
		String name = JOptionPane.showInputDialog("Qual é o seu nome?");

		//Mensagem de boas vindas
		String message = String.format("Bem-vindo, %s a programação em Java!", name);

		//Exibir mensagem.
		JOptionPane.showMessageDialog(null, message);
	}
}