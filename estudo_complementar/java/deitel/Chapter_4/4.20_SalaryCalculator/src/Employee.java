
public class Employee {
    private String id;
    private String name;
    private String surName;
    private String jobTitle;
    private SalaryRange rangeSalary;
    private Salary employeeSalary;

    public Employee(String id, String name, String surName, String jobTitle, SalaryRange rangeSalary) {
        this.id = id;
        this.name = name;
        this.surName = surName;
        this.jobTitle = jobTitle;
        this.rangeSalary = rangeSalary;
    }

}
