import java.util.Scanner;

public class VerificaIdade {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite sua Idade\n");
        int idade = input.nextInt();

        if (idade < 18) {
            System.out.println("Você é menor de idade");
        } else if(idade > 18 && idade < 65) {
            System.out.println("Você é adulto");
        } else {
            System.out.println("Você é um idoso");
        }
    }
}
