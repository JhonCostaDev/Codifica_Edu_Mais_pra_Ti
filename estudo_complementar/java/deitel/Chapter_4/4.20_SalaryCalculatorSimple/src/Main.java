public class Main {
    public static void main(String[] args) {
        //Lista ficticia com nomes de funcionários para teste
        String[] employeeNames = {
            "Ana Beatriz", "Carlos Eduardo", "Maria Clara", "João Pedro", "Luana Gabriela",
            "Felipe Augusto", "Camila Vitória", "Rafael Henrique", "Juliana Cristina", "Lucas Gabriel", "Fernanda Luísa", "Bruno César", "Patrícia Helena", "Gustavo André", "Larissa Bianca", "Rodrigo Antônio", "Isabela Fernanda", "Marcelo Vinícius", "Tatiane Renata", "Daniel Felipe", "Aline Rafaela", "Thiago Emanuel", "Vanessa Camargo", "Eduardo Jorge", "Natália Simone", "André Luiz", "Sabrina Kelly", "Diego Matheus", "Letícia Mariana", "Vinícius Rafael", "Elaine Cristina", "Leonardo Bruno", "Michele Regina", "Paulo Ricardo", "Débora Nayara", "Fábio Alexandre", "Carla Juliana", "Renato Sérgio", "Bianca Thais", "Alex Sandro", "Simone Aparecida", "Murilo César", "Tatiana Lopes", "Wesley Rodrigo", "Cristiane Souza", "Igor Fernando", "Adriana Martins", "Nathan Oliveira", "Roberta Lima", "Caio Eduardo"
};
        //Lista de pares [horas trabalhadas, hora/valor]
        double[][] employeesData = {
            {36.0, 20.75}, {42.0, 28.50}, {40.0, 30.00}, {38.5, 24.90}, {45.0, 32.10},
            {39.0, 27.80}, {41.0, 26.40}, {37.5, 29.95}, {44.0, 31.25}, {40.0, 22.50},
            {43.0, 33.10}, {38.0, 25.75}, {46.0, 34.90}, {35.0, 21.80}, {42.5, 28.00},
            {39.5, 26.90}, {41.5, 30.50}, {37.0, 24.40}, {44.5, 32.80}, {36.5, 23.90},
            {40.5, 27.10}, {38.0, 29.00}, {45.5, 35.20}, {39.0, 26.75}, {43.5, 31.90},
            {36.0, 22.60}, {42.0, 30.10}, {40.0, 28.40}, {38.5, 25.90}, {45.0, 33.50},
            {39.0, 27.60}, {41.0, 26.20}, {37.5, 29.50}, {44.0, 30.75}, {40.0, 23.50},
            {43.0, 32.10}, {38.0, 26.25}, {46.0, 35.00}, {35.0, 22.80}, {42.5, 27.90},
            {39.5, 25.90}, {41.5, 29.50}, {37.0, 23.40}, {44.5, 31.80}, {36.5, 24.90},
            {40.5, 26.10}, {38.0, 28.00}, {45.5, 34.20}, {39.0, 25.75}, {43.5, 30.90}
};

        //cria um array que armazenará os objetos Employee, o tamanho é determinado pelo o tamanho do array de funcionários
        Employee[] team = new Employee[employeeNames.length];
        
        //Laço para que criará os objetos Employees e adicionará ao array employee e exibirá a saída através do método toString() da classe.
        for(int i = 0; i < team.length; i++){
            team[i] = new Employee(employeeNames[i],employeesData[i][0],employeesData[i][1]);
            System.out.println(team[i]);
        }
        
        // //
        // for(Employee employee : team) {
        //     System.out.println(employee);
        // }
        
        }
}