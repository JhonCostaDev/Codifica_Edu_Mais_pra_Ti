import java.util.Scanner;

public class SwitchCase {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Digite:\n1-Excelente\n2-Bom\n3-Regular\n4-Ruím\n5-Péssimo\n\n");
        int option = input.nextInt();
        switch (option) {
            case 1:
                System.out.println("Você escolheu Excelente.");
                break;

            case 2:
                System.out.println("Você escolheu Bom.");
                break;

            case 3:
                System.out.println("Você escolheu Regular.");
                break;

            case 4:
                System.out.println("Você escolheu Ruím.");
                break;
            case 5:
                System.out.println("Você escolheu Péssimo.");
                break;
            default:
                System.out.println("Valor inválido!");
        }
    }
}
