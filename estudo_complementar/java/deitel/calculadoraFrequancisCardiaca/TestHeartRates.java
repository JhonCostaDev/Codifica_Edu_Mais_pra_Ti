import java.util.Scanner;

public class TestHeartRates {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        HeartRates patient1 = new HeartRates("Tomas", "Smith", 21, 10, 1975);

        // System.out.println(patient1.calcAge());
        // System.out.println(patient1.maxHeartRate());
        // System.out.println(patient1.targetHeartRate());
        System.out.println(patient1.showSumary());
    }
}
