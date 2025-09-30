package estudo_complementar.java.javaBasico_Loiane.ex02_givemeanumber.src;
import java.util.Scanner;;
public class App {
    /*Faça um Programa que peça um número e então mostre a 
mensagem O número informado foi [número]. */
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a number:");
        int number = input.nextInt();
        
        System.out.println("You give me the number: " + number);
    }
}
