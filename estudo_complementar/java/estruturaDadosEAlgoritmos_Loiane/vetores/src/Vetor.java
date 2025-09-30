public class Vetor {
	private String[] elementos;
	private int tamanho;

	public Vetor(int capacidade) {
		this.elementos = new String[capacidade];
		this.tamanho = 0;
		
	}
	//INEFICIENTE
	// public void adiciona(String elemento) {
	// 	for(int i = 0; i < this.elementos.length; i++) { 
	// 		if(this.elementos[i] == null) {
	// 			this.elementos[i] = elemento;
	// 			break;
	// 		}
	// 	}
	// }

	//OPCAO MAIS EFICIENTE
	// public void adiciona(String elemento) throws Exception {
	// 	if(this.tamanho < this.elementos.length) {
	// 		this.elementos[this.tamanho] = elemento;
	// 		this.tamanho++;
	// 	} else {
	// 		throw new Exception("Vetor cheio!");
	// 	}	
	// }

	public boolean adiciona(String elemento) {
		if(this.tamanho < this.elementos.length) {
			this.elementos[this.tamanho] = elemento;
			this.tamanho++;
			return true;
		}
		return false;

	}

	//Metodo para retornar o tamanho do vetor
	public int getTamanho() {
		return this.tamanho;
	}
	

	

	
}