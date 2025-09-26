import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Senha atendimento1 = new Senha("Mario", "Silva", "21/08/1973");
        boolean option = true;

        System.out.println("Senha: " + atendimento1.getUuid());
        // do { 
        //     option = menu();
            
        // } while (option);
    }

    public static boolean  menu() {
        Scanner input = new Scanner(System.in);
        System.out.printf("""
                ======== ATENDIMENTO ==========
                Pressione 1 para Atender Senha
                Pressione 2 para Nova Senha
                pressiona 0 para sair
                """);
        int option = input.nextInt();
        if(option != 0) {
            return true;
        }
        return false;

    }
}
