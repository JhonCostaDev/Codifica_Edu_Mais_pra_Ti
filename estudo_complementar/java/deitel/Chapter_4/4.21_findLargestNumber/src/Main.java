import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		System.out.println("Type 10 integers to show the largest one!");
		int count = 0;
		int largest = 0;
		int number;
		while (count < 10) {
			
			number = validateInt(count);

			if(number > largest) {
				largest = number;
			}
			count++;
		}
		System.out.println("The lagest one is: " + largest);

		input.close();
	}
	//VALIDAR ENTRADA
	public static int validateInt(int count) {
		Scanner input = new Scanner(System.in);
		System.out.printf("Enter the %dº integer\n", count + 1);
		while(!input.hasNextInt()) {
			System.out.println("Invalid entry. Please type a integer number!");
			input.next();
			System.out.println("Try again!");
		}
		int number = input.nextInt();

		return number;
	}
}

