import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //Inteiros
        int intVar = 23412341;
        long longVar = 31209384013010L;
        byte byteVar = 127;
        short shortVar = 32767;

        //Ponto flutuante / real
        double doubleVar = 984905823.32;
        float floatVar = 984905823.32f;

        //Char
        char charVar = 'A';

        //Lógicos
        boolean boolVarT = true;
        boolean boolVarF = false;

//        System.out.println("intVar =  " + intVar);
//        System.out.println("longVar =  " + longVar);
//        System.out.println("byteVar =  " + byteVar);
//        System.out.println("shortVar =  " + shortVar);
//        System.out.println("doubleVar =  " + doubleVar);
//        System.out.println("floatVar =  " + floatVar);
//
//        System.out.printf("Float var com printf %.2f\n", floatVar);

        String name = "Jonathan";
        System.out.println(name);

        //Definindo a localização da aplicação
        Locale.setDefault(Locale.US);


        //Declarando múltiplas variáveis

        int a, b, c;
        double area;

        a = 5;
        b = 7;
        c = 3;

        area = (double) (a + b) / 2 * c;
        System.out.println("A área do triângulo é: " + area);

        //inputs
//        Scanner input = new Scanner(System.in);
//        int number = input.nextInt();
//        System.out.println("Número: " + number);

    //MANIPULAÇÃO DE STRINGS

        System.out.println("========= MANIPULAÇÃO DE STRINGS =========");
        String text = "O Ceará é o melhor estado do Brasil";

        int length = text.length();
        System.out.println("Tamanho do texto: " + length);

        String upper = text.toUpperCase();
        System.out.println(upper);

        String loucura = text.replace("Ceará", "São Paulo");
        System.out.println(loucura);

        //Pegar parte de uma string
        String slice = text.substring(0, 8);
        System.out.println(slice);


        //Operações Matemáticas

        System.out.println("========= Operações Matemáticas =========");

        double number = 50.30;
        double arredondado = Math.round(number);

        System.out.println(Math.ceil(number));
        System.out.println(Math.floor(number));
        System.out.println(Math.round(number));
        System.out.println(Math.sqrt(number));
        System.out.println(Math.abs(number));
        System.out.println(Math.random());



        System.out.println("========= ARRAYS =========");


        int [] vetor = new int[10];

        for(int i = 0; i < 10; i++) {
            vetor[i] = i;
        }

        for(int i = 0; i < 10; i++) {
            System.out.println(vetor[i]);
        }

    }
}
