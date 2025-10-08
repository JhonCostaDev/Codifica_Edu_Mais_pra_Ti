import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);


		System.out.println("Enter travel Location");
		String travelLocation = input.nextLine();

		//Distancia percorrida
		System.out.println("Enter distance traveled (Km)");
		int traveledDistance = input.nextInt();

		System.out.println("Enter fuel used (liters) ");
		int fuelUsed = input.nextInt();

		//calcular o consumo = distancia / litros = Km/l

		double consume = traveledDistance / fuelUsed;
		//System.out.printf("Total of fuel consumed: %.2f Km/l%n", consume);

		Travel travel1 = new Travel(travelLocation, traveledDistance, fuelUsed);
		System.out.println(travel1.toString());

	}
}