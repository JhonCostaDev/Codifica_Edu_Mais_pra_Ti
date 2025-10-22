public class Main {
    public static void main(String[] args) {
        String[] employeeNames = {
            "Antonio",
            "João",
            "José"
        };
        double[][] employeesData = {
            {38.0, 22.50}, 
            {40.0, 25.9},
            {45.0, 35.9}       
        };
        //System.out.println("Nome - Horas Trabalhadas - Valor/Hora");
         Employee[] team = new Employee[3];
         
         for(int i = 0; i < team.length; i++){
             team[i] = new Employee(employeeNames[i],employeesData[i][0],employeesData[i][1]);
         }
         
         System.out.println(team[0].getName());
        
        }
}
    