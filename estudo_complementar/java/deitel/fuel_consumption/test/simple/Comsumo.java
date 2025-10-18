import java.util.Scanner;

public class Comsumo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int somaKilometragem = 0;
        int somaCombustivelGasto = 0;
        double somaAutonomia = 0;
        int numeroViagens = 0;
        String repetir;
        do {
            System.out.println("Quantos Kilômetros foram dirigidos?(Km)");
            int kilometragem = input.nextInt();
            System.out.println("Qual a quantidade de combustivel foram gastos? (litros)");
            int combustivel = input.nextInt();
            
            double autonomia = (double) kilometragem / combustivel;
            somaKilometragem += kilometragem;
            somaCombustivelGasto +=combustivel;
            somaAutonomia += autonomia;
            numeroViagens++;
            
            System.out.printf("Aperte Enter para inserir outro registro ou 0 (zero) para sair \n");
            repetir = input.nextLine();
            
            
        } while(repetir != "0");
        
        /*
       O programa deve calcular e exibir o consumo em quilômetros/litro para cada viagem e imprimir a quilometragem total e a soma total de litros de combustível consumidos até esse ponto para todas as viagens.  */
       double mediaKilometragem = somaKilometragem / numeroViagens;
       double mediaConsumoViagem = somaCombustivelGasto / numeroViagens;
       double mediaAutonomia = somaAutonomia / numeroViagens;
       
       System.out.printf("""
           Soma em Kilômetros de todas as viagens: %d
           Soma de combustível consumido em todas as viagens: %d
           Média de Kilômetros viajados: %.2f
           Média de combustível consumido: %.2f
           Média de autonomia por viagem: %.2f
           """, somaKilometragem, somaCombustivelGasto, mediaKilometragem, mediaConsumoViagem, mediaAutonomia);  
    }
}