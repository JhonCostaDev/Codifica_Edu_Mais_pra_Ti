import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;

public class Test {
    //instância da classe Scanner para capturas de dados 
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        
        ArrayList<Double> a = getArraySales();

        for(Double item : a) {
            System.out.println(item);
        }
        

        input.close();
    }

    public static ArrayList<Double> getArraySales(){

        //Instância da classe ArrayList
        ArrayList<Double> sales = new ArrayList<>();
        
        double itemValue; //guardará o valor individual da venda

        //Loop para obtenção dos dados que termina apenas com a escolha do usuário.
        while (true) {
            System.out.println("Digite o valor da venda"); //Prompt
            itemValue = input.nextDouble(); //Pega o valor digitado e armazena na variável
            sales.add(itemValue); //Adiciona o valor ao Array
            
            boolean opt = getOption();
            if (!opt) {
                break;
            }
        }
        
        return sales; //retorna o array de vendas
    }

    public static boolean getOption() {
        String[] validOptions = {"s", "sim", "n", "não", "nao"};

        while (true) {
            System.out.println("\"Deseja dicionar outra venda? Digite: Sim(S) - Não(N)\"");
    
            String option = input.next().toLowerCase();
            if(Arrays.asList(validOptions).contains(option)) {
                if(option.equals("s") || option.equals("sim")) {
                    return true;
                } else {
                    return false;
                }
            } else {
                System.out.println("Entrada inválida!");
                continue;
            }
            
        }

    }

}
