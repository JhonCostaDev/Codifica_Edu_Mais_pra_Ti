import java.util.Random;
public class VetorEx6 {
	//C[i] = A[i] + B[i].
	public static void main(String[] args) {
		Random randomNumbers = new Random();
		int[] a = new int[10];
		int[] b = new int[10];
		int[] c = new int[10];
		

		for(int i = 0; i < a.length; i++) {
			a[i] = randomNumbers.nextInt(100);
			b[i] = randomNumbers.nextInt(100);
			c[i] = a[i] + b[i];

			System.out.printf("%d + %d => %d\n", a[i], b[i], c[i]);
		}

		
	}
}