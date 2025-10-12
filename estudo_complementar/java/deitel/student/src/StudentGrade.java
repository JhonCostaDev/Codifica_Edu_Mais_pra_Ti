//package estudo_complementar.java.deitel.student;
import java.util.ArrayList;
public class StudentGrade {
    private String name;
    private ArrayList<Double> grades;
   

    public StudentGrade(String name) {
       this.name = name;
       this.grades = new ArrayList<>();
       
    }

    public void addGrade(double grade) {
        this.grades.add(grade);
    }

    public double calcAverage() {
        double sumGrades = 0;
        for(double grade : this.grades) {
            sumGrades += grade;
        }

        return sumGrades / grades.size();
    }

    public String getLetterGrade() {
        double average = calcAverage() * 10;
        String letterGrade = "";
        if(average >= 90.0)
            letterGrade = "A";
        else if(average >= 80.0)
            letterGrade = "B";
        else if(average >= 70.0)
            letterGrade = "C";
        else if(average >= 60.0)
            letterGrade = "D";
        else
            letterGrade = "F";
        return  letterGrade;
    }

    

    public String getName() {
        return name;
    }
}
