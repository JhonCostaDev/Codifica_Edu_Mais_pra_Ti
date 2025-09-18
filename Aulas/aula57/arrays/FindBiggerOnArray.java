//package Aulas.aula57.arrays;

public class FindBiggerOnArray {
    /*Find the biggest number on this array */
    public static void main(String[] args) {
        int [] numbers = {37, 82, 5, 61, 14, 99, 23, 76, 48, 2, 91, 33, 67, 8, 55, 70, 19, 43, 88, 30};
        int bigger = numbers[0];
        int position = 0;
        for(int i = 0; i < numbers.length; i++) {
            if(bigger < numbers[i]) {
                bigger = numbers[i];
                position = i;
            }
        }
        System.out.printf("The biggest is: %d at the %dº position\n", bigger, position);
    }
}
