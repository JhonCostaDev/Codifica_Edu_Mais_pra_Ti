//package exerciciosAula57.exercicio6;

public class Biggest {
    public static void main(String[] args) {
        int[] numbers = {87, 12, 45, 3, 76, 29, 94, 58, 21, 66};//Declarando array com 10 elementos aleatorios

        //Visualizando os elementos no terminal
        int bigger = numbers[0]; // variável para armazenar o maior número

        for(int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
            if(numbers[i] > bigger) {
                bigger = numbers[i];
            }
        }

        System.out.println("O maior elemento da lista é: " + bigger);


    }
}
