//package exerciciosAula57.exercicio7;

public class AddToArray {
    public static void main(String[] args) {
        int[] numbers = {87, 12, 45, 3, 76, 29, 94, 58, 21, 66};//Declarando array com 10

        int newNumber = 144;

        int[] newArrayNumbers = new int[numbers.length + 1];

        for(int i = 0; i < numbers.length; i++) {
            newArrayNumbers[i] = numbers[i];
        }

        newArrayNumbers[numbers.length] = newNumber;

        for(int i = 0; i < newArrayNumbers.length; i++) {
            System.out.println(newArrayNumbers[i]);
        }


    }
}
