import java.util.Random;
public class VetorEx14 {
	public static void main(String[] args) {
		Random randomNumbers = new Random();
		int[] a = new int[10];
		int sum = 0;
		int numberOfItems = a.length;

		for(int i = 0; i < a.length; i++) {
			a[i] = randomNumbers.nextInt(100);
			sum += a[i];
		}

		System.out.println("The sum of all elements inside the array is: "+ sum);
		double average = sum / numberOfItems;
		System.out.println("The average of all elements inside the array is: "+ average);
	}
}