public class ContarAteDez {
    public static void main(String[] args) {
        System.out.println("FOR");
        for(int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
        System.out.println("While");
        int i = 1;
        while (i <= 10) {
            System.out.println(i);
            i++;
        }
        System.out.println("Do-While");
        do {
            System.out.println(i);
            i--;
        } while (i > 0);
    }
}
