public class Increment {
	public static void main(String[] args) {
		int c = 5;
		System.out.println("Pos increment");
		System.out.println("c before increment: " + c);
		System.out.println("c increment: " + c++);
		System.out.println("c after increment: " + c);

		System.out.println("======================");
		System.out.println("Pre increment");

		int d = 5;
		System.out.println("d before increment: " + d);
		System.out.println("d increment: " + ++d);
		System.out.println("d after increment: " + d);
	}
}