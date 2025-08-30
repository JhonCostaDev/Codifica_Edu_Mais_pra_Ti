import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Calculadora");
        System.out.println("Escolha a operação:\n1-Somar\n2-Subtrair\n3-Multiplicar\n4-Dividir\n\n");
        int operation = input.nextInt();

        System.out.println("Digite o primeiro número\n");
        int number1 = input.nextInt();

        System.out.println("Digite o segundo número\n");
        int number2 = input.nextInt();


        switch (operation) {
            case 1:
                System.out.println("O Resultado é: " + (number1 + number2));
                break;

            case 2:
                System.out.println("O Resultado é: " + (number1 - number2));
                break;

            case 3:
                System.out.println("O Resultado é: " + (number1 * number2));
                break;

            case 4:
                if(number2 != 0) {
                    System.out.println("O Resultado é: " + (number1 / number2));
                } else {
                    System.out.println("Erro Divisão por Zero!");
                }

                break;

            default:
                System.out.println("Operação inválida!");
        }
    }
}
