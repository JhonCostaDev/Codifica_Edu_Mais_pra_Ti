//package Aulas.aula57.strings;

public class Main {
    public static void main(String[] args) {
        String text = "I have a beautiful Daughter";

        int textLenght = text.length();
        String lowerText = text.toLowerCase(); //minusculas
        String upperText = text.toUpperCase(); //maisculas
        boolean contains = text.contains("Daughter");
        String replaceText = text.replace("Daughter", "Child");
        String subString = text.substring(0, 6);



        System.out.println("Quantidade de letras: "+ textLenght);
        System.out.println("Minúsculas: "+ lowerText);
        System.out.println("Maiúsculas: " + upperText);
        System.out.println(contains);
        System.out.println(replaceText);
        System.out.println(subString);
    }
}
