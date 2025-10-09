package estudo_complementar.java.deitel.fuel_consumption.test;

import java.util.ArrayList;

public class ArrayListObject {
    public static void main(String[] args) {
        ArrayList<Object> data = new ArrayList<>();

        data.add("Jonathan");
        data.add(39);
        data.add("1.79");

        for (Object item: data) {
            System.out.println(item);
        }

    }
}
