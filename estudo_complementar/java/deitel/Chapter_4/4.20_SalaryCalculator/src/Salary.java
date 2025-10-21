
public class Salary {
    private double hoursWorked;
    private SalaryRange range;
    private double salary;

    public Salary(double hoursWorked, SalaryRange range) {
        this.hoursWorked = hoursWorked;
        this.range = range;
    }

    public void calcSalary() {
        double hourWorkedValue = range.getHourlyRate();
        
        if (hoursWorked > 40) {
            this.salary = hoursWorked * (hourWorkedValue + hourWorkedValue * 0.5);
        } else {
            this.salary = hourWorkedValue * hoursWorked;
        } 
    }
}
