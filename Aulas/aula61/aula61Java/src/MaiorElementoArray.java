public class MaiorElementoArray {
    public static void main(String[] args) {
        int [] vetor = {42, 7, 98, 12, 55, 3, 29, 67, 81, 10};

        for(int i = 0; i < vetor.length; i++) {
            System.out.println(vetor[i]);
        }

        int max = vetor[0];

        for(int i = 0; i < vetor.length; i++) {
            if (vetor[i] > max) {
                max = vetor[i];
            }
        }
        System.out.println("Maior: " + max);
    }
}
