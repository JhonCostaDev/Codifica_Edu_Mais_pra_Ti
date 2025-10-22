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
    public double calcGrossPay() {
        
        if(workedHours > 40) {
            return workedHours * (hourlyRate + hourlyRate * 0.5);
        }
        
        return workedHours * hourlyRate;
    }
    
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