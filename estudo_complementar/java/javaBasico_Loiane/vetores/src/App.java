public class App {
	public static void main(String[] args) {
		//Iniciei o vetor a com cinco frutas
		String[] a = {"Banana", "Maçã", "Goiaba", "Uva", "Limão"};

		//Laço for para exibir as cinco frutas.
		for(int i = 0; i< a.length; i++) {
			System.out.println(a[i]);
		}

		//Criando vetor/array b vazio com 5 posições
		String[] b = new String[5];

		//Atribuindo valores de a em b
		b = a;

		//Imprimindo B

		for(int i = 0; i< b.length; i++) {
			System.out.println(b[i]);
		}

		



	}

}