import java.util.Scanner;

public class App {
    /*Faça um Programa que peça dois números e imprima a soma.  */
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int number1, number2, result;
        System.out.println("========= Add Numbers =========");
        System.out.println("Type the first number");
        number1 = input.nextInt();

        System.out.println("Type the second number");
        number2 = input.nextInt();
        
        result = number1 + number2;
        System.out.printf("The sum of %d + %d is equal to: %d\n", number1, number2, result);
    }
}
