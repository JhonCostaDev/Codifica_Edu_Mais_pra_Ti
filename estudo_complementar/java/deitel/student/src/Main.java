//package estudo_complementar.java.deitel.student;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        StudentGrade josy = new StudentGrade("Josyllane");
        int addNewGrade = 1;
        
        /*
            menu
            -estudantes cadastrados
            - cadastrar novo estudante
            - cadastrar nota (persistindo dados)
        */
        do {
            System.out.println("Adicionar nota: ");
            double nota = input.nextDouble();
            josy.addGrade(nota);
            System.out.println("Adicionar nova nota? 1 - SIM / 0 - NÃO");
            addNewGrade = input.nextInt();
        }while (addNewGrade == 1);

        System.out.println("Média numérica: " + josy.calcAverage());
        System.out.println("Nota final: " + josy.getLetterGrade());
        //menu();
    }

    // public static void menu() {
    //     System.out.printf("""
    //         ===================================
    //                       ESCOLAR
    //         ===================================
    //         1 - Estudantes Cadastrados

    //         """);
    // }
}
