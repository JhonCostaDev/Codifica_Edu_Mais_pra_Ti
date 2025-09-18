//package Aulas.aula57.arrays;

public class Main {
    public static void main(String[] args) {
        int [] vetor = new int[10]; // array vazio de 10 posições
        vetor[0] = 1; //Atribuição individual de cada posição do array.
        vetor[1] = 2;
        vetor[2] = 3;
        vetor[3] = 4;
        vetor[4] = 5;
        vetor[5] = 6;
        vetor[6] = 7;
        vetor[7] = 8;
        vetor[8] = 9;
        vetor[9] = 10;

        //Iteração pelos elementos do array
        for(int i = 0; i < vetor.length; i++) {
            System.out.println(vetor[i]);
        }

        //soma dos elementos do array
        int sum = 0;
        for(int i = 0; i < vetor.length; i++) {
           sum += vetor[i];
        }

        System.out.println("Soma: " + sum);

    }
}
