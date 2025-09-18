
import java.util.Scanner;

//package Aulas.aula57.calculadora;

public class Calculator {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.println("===== Calcular dois números =====");
    
    System.out.printf("Escolha a operação:\nDigite 1 para SOMAR\nDigite 2 para SUBTRAIR\nDigite 3 para MULTIPLICAR\nDigite 4 para DIVIDIR\n");
    int option = input.nextInt();
    
    System.out.println("Digite o primeiro número: ");
    int numberOne = input.nextInt();
    
    System.out.println("Digite o segundo número: ");
    int numberTwo = input.nextInt();
    
    int result = 0;
    String operation = "";
    switch (option) {
        case 1:
            result = add(numberOne, numberTwo);
            operation = "Soma";
            break;
        case 2:
            result = subtract(numberOne, numberTwo);
            operation = "Subtração";
            break;
        case 3:
            result = multiply(numberOne, numberTwo);
            operation = "Multiplicação";
            break;
        case 4:
            result = divideBy(numberOne, numberTwo);
            operation = "Divisão";
            break;
        default:
            System.out.println("Opção Inválida!");
    }

    System.out.printf("A %s de %d e %d é igual a %d", operation, numberOne, numberTwo, result);

  }  
  public static int add(int a, int b) {
    return a + b;
  }

  public static int subtract(int a, int b) {
    return a - b;
  }

  public static int multiply(int a, int b) {
    return a * b;
  }

  public static int divideBy(int a, int b) {
    
    if(b == 0) {
        throw new ArithmeticException("Erro de divisão por Zero não permitida");
    } 
    
    return a / b;
    
  }
}
