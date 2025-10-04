import java.util.Random;
public class VetorEx16 {
	public static void main(String[] args) {
		//Instância a classe Random
		Random randomNumbers = new Random();
		
		//cria o vetor de 10 posições
		int[] a = new int[10];
		int sumBelow15 = 0;
		int howManyisfifteen = 0;
		int sumAbove15 = 0;
		int howManyAbovefifteen = 0;
		int averageAbove15 = 0;


		//cria 10 elementos e armazena no vetor
		for(int i = 0; i < a.length; i++) {
			a[i] = randomNumbers.nextInt(100);
			if(a[i] < 15) {
				sumBelow15 += a[i];
			} else if(a[i] == 15) {
				howManyisfifteen++;
			} else {
				sumAbove15 += a[i];
				howManyAbovefifteen++;
			}
		}
		averageAbove15 =  sumAbove15 / howManyAbovefifteen;
		
		

		System.out.println("The sum of itens below 15: " + sumBelow15);
		System.out.println("Number of itens equal 15: " + howManyisfifteen);
		System.out.println("The average of itens above 15: " + averageAbove15);

		for(int element : a){
			System.out.printf("%d,", element);
		}
	}
}