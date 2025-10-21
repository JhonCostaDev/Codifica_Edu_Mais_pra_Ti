import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        
        ArrayList<Double> vendas = getArraySales();
        showSummary(vendas);

        input.close();
    }

    //Esse método pede as vendas e as salva em um arrayList, retornando-o no final
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

    //Esse método valida a opção de continuar ou não a inserir vendas no programa.
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

    //Esse método calcula o salário semanal de acordo com o pedido no enunciado.
    public static double calcWeekSalary(ArrayList<Double> arr) {
        
        double somaVendas = arr.stream().mapToDouble(Double::doubleValue).sum();
        
        double salarioSemanal = 200 + somaVendas * 0.09;
        return salarioSemanal;
    }

    //Esse método mostra um resumo do dados inseridos e do valor semanal ganho pelo vendedor!
    public static void showSummary(ArrayList<Double> arr) {
        double sumSales = arr.stream().mapToDouble(Double::doubleValue).sum();
        double commissionSales = sumSales * 0.09;
        double weekSalary = calcWeekSalary(arr);


        System.out.println("===== Vendas ======");
        System.out.println("Nº venda    Valor ");
        for(int i = 0; i < arr.size(); i++) {
            System.out.printf("%d ------> %.2f\n", i+1, arr.get(i));
        }
        System.out.printf("""
                Comissão Fixa Semanal: %.2f
                Total de Vendas: %.2f
                Comissão Vendas(9%%): %.2f

                Total: %.2f
                """, 200.0, sumSales, commissionSales, weekSalary);
    }
}