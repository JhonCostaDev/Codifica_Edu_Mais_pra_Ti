public class VetorEx2 {
	public static void main(String[] args) {
		int[] a = {1,2,3,4,5,6,7,8};
		int[] b = new int[8];

		for(int i = 0; i < a.length; i++) {
			b[i] = a[i] * 2;
			System.out.println(b[i]);
		}
	}
}