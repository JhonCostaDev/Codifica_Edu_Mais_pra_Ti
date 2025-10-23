
public class Main {
	public static void main(String[] args) {
		System.out.println("N 10 * N  100 * N   1000 * N");
		for(int i = 1; i < 11; i++){
			for(int j = 10; j < 1001; j*=10) {
				System.out.printf("%d\t", i * j);
			}
			System.out.println();
		}
	}
}

