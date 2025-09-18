package Aulas.aula57.exerciciosAula57.temperatura;
import java.util.Scanner;

public class ConversorTemp {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.println("===== Conversor de Temperatura ===== ");

		System.out.println("Digite 1 para converter de Celcius --> Fahrenheit\nDigite 2 para converter de Fahrenheit --> Celcius");

		int option = input.nextInt();

		if(option == 1) {
			//(°C × 1.8) + 32
			System.out.println("Digite a Temperatura em graus Celcius:");
			double celcius = input.nextDouble();
			
			double fahrenheit = (celcius * 1.8) + 32;
			System.out.printf("%.2fº Celcius equivalem a %.2fº Fahrenheit\n", celcius, fahrenheit);
		} else if(option == 2) {
			//°C = (°F − 32) × 5/9

			System.out.println("Digite a Temperatura em graus Fahrenheit:");
			double fahrenheit = input.nextDouble();
			double celcius = (fahrenheit - 32) * 5/9;
			System.out.printf("%.2fº Fahrenheit equivalem a %.2fº Celcius\n", fahrenheit, celcius);
		} else {
			System.out.println("Opção inválida!!!");
		}
	}
}