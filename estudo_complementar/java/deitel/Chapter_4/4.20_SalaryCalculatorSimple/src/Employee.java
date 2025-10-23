public class Employee {
    private String name;
    private double workedHours;
    private double hourlyRate;
    private double grossPay;
    
    public Employee(String name, double workedHours, double hourlyRate) {
        this.name = name;
        this.workedHours = workedHours;
        this.hourlyRate = hourlyRate;
        this.grossPay = calcGrossPay();
    }

    //TODO: Method to show resume of employees
    @Override
    public String toString() {
        return ("""
                Nome: %s
                Horas trabalhadas na semana: %.2f horas
                Valor da hora trabalhada até 40 horas: R$ %.2f 
                Valor da hora trabalhada acima de 40 horas: R$ %.2f 
                Pagamento Semanal bruto: R$ %.2f
                """.formatted(name, workedHours, hourlyRate,hourlyRate + hourlyRate * 0.5, grossPay));
    }

    public double calcGrossPay() {
        // testa se o funcionário que trabalhou mais de 40 horas receba um adicional de 50% em cima do valor/hora
        if(workedHours > 40) { 
            return workedHours * (hourlyRate + hourlyRate * 0.5);
        }
        
        return workedHours * hourlyRate;
    }
    
    //Getters
    public String getName() {
        return name;
    }
    
    public double getWorkedHours(){
        return workedHours;
    }
    
    public double getHourlyRate(){
        return hourlyRate;
    }
    
    public double getGrossPay() {
        return grossPay;
    }
}