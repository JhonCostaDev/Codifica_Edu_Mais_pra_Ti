import java.util.Random;

public class VetorEx4 {
	public static void main(String[] args) {
		Random getNumbers = new Random();
		int[] a = new int[15];
		double[] b = new double[15];

		for(int i = 0; i < a.length; i++) {
			a[i] = getNumbers.nextInt(100);
			b[i] = Math.sqrt(a[i]);

		}

		for(int i = 0; i < a.length; i++) {
			System.out.printf("%d => %.2f\n", a[i], b[i]);
		}
	}
}