import java.util.Random;
public class VetorEx5 {
	public static void main(String[] args) {
		Random randomNumbers = new Random();
		int[] a = new int[10];
		int[] b = new int[10];
		

		for(int i = 0; i < a.length; i++) {
			a[i] = randomNumbers.nextInt(100);
			b[i] = a[i] * i; 
		}

		for(int item : b) {
			System.out.println(item);
		}
	}
}