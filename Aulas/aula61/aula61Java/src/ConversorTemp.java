import java.util.Scanner;

public class ConversorTemp {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite a temperatura em Celsius: \n");
        double celsius = input.nextDouble();

        double fahrenheit = (celsius * 9 /5) + 32;

        System.out.printf("%.2fºC equivalem à %.2fºF\n", celsius, fahrenheit);

        input.close();
    }
}
