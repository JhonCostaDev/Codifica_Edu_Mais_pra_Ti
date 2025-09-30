import java.util.Random; //IMport da classe que gerará números aleatórios

public class VetorEx3  {
	public static void main(String[] args) {

		Random getNumbers = new Random();
		int[] randomNumbers = new int[15];

		for(int i = 0; i < randomNumbers.length; i++) {
			randomNumbers[i] = getNumbers.nextInt(100);
		}
		for (int element : randomNumbers){
			System.out.println(element);
		}
		
		System.out.println("This vetor has " + randomNumbers.length + " elements");

		int[] vetorB = new int[15];

		for(int i = 0; i < vetorB.length; i++) {
			vetorB[i] = randomNumbers[i] * randomNumbers[i];
			System.out.println("Vetor B: " + vetorB[i]);
		}
	}
}