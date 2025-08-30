public class AddToArray {
    public static void main(String[] args) {
        int [] vetor = {42, 7, 98, 12, 55, 3, 29, 67, 81, 10};
        int [] newVetor = new int[vetor.length];

        int number = 53;

        for(int i = 0; i < vetor.length; i++) {
            newVetor[i] = vetor[i];
        }
        newVetor[newVetor.length] = number;

        for (int i = 0; i < newVetor.length; i++) {
            System.out.println(newVetor[i]);
        }
    }
}
