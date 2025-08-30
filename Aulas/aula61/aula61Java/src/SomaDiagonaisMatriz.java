public class SomaDiagonaisMatriz {
    public static void main(String[] args) {
        int [][] matrix = {
                {1, 2, 3}, //00, 03
                {4, 5, 6}, //11,
                {7, 8, 9}, //30, 33
        };

        for(int i = 0; i < matrix.length; i++) {
            for(int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j]);
            }
        }
        System.out.println("");
        int soma = 0;

        for(int i = 0; i < matrix.length; i++) {
            for(int j = 0; j < matrix[i].length; j++) {
                if (j % 2 == 0) {
                    //soma += matrix[i][j];
                    System.out.println(matrix[i][j]);
                }
            }
        }
        System.out.println("Soma: " + soma);
    }
}
