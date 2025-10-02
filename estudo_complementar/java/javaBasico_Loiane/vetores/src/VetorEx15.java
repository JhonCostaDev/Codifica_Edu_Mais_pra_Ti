import java.util.Random;
public class VetorEx15 {
	public static void main(String[] args) {
		//Instância a classe Random
		Random randomNumbers = new Random();
		
		//cria o vetor de 10 posições
		int[] a = new int[10];
		int eve = 0, odd = 0;

		//cria 10 elementos e armazena no vetor
		for(int i = 0; i < a.length; i++) {
			a[i] = randomNumbers.nextInt(100);
			if(a[i] % 2 == 0) {
				eve++;
			} else {
				odd++;
			}
			System.out.println("Position: " + i + " => "+ a[i]);
		}
		
		

		System.out.println("par: " + eve*10 + "%");
		System.out.println("impar: " + odd*10 + "%");
	}
}