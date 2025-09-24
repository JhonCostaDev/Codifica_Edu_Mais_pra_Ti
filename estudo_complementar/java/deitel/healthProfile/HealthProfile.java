//package estudo_complementar.java.deitel.healthProfile;

import java.time.LocalDate;
import java.time.Period;

public class HealthProfile {
    String name;
    String surName;
    char gender;
    int birthDay;
    int birthMonth;
    int birthYear;
    double height;
    double weight;

    //Constructor
    public HealthProfile(String name, String surName, char gender, int birthDay, int birthMonth, int birthYear, double height, double weight) {
        this.name = name;
        this.surName = surName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
        this.height = height;
        this.weight = weight;
    }
    //Age
    public int calcAge() {
        LocalDate today = LocalDate.now();
        LocalDate birDate = LocalDate.of(birthYear, birthMonth, birthDay);

        Period age = Period.between(birDate, today);

        return age.getYears();
    }

    //Body Mass Index BMI
    public double calcBMI() {
        return weight / Math.pow(height, 2);
    }


    // Heart Rates
    //Calcula frequência cardíaca
    public int maxHeartRate() {
        return 220 - calcAge();
    }

    //Calcula frequência cardíaca alvo
    public String targetHeartRate() {
        double minTargetRate = maxHeartRate() * 0.5;
        double maxTargetRate = maxHeartRate() * 0.8;

        return String.format("entre %.2f e %.2f", minTargetRate, maxTargetRate);
    }

    //Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public void setBirthDay(int birthDay) {
        this.birthDay = birthDay;
    }

    public void setBirthMonth(int birthMonth) {
        this.birthMonth = birthMonth;
    }

    public void setBirthYear(int birthYear) {
        this.birthYear = birthYear;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }
    

    //Getters

    public String getName() {
        return name;
    }

    public String getSurName() {
        return surName;
    }

    public char getGender() {
        return gender;
    }

    public int getBirthDay() {
        return birthDay;
    }

    public int getBirthMonth() {
        return birthMonth;
    }

    public int getBirthYear() {
        return birthYear;
    }

    public double getHeight() {
        return height;
    }

    public double getWeight() {
        return weight;
    }

}
