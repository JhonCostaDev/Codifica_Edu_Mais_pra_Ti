//package calculadoraFrequancisCardiaca;

import java.time.LocalDate;
import java.time.Period;

public class HeartRates {
    private String name;
    private String surName;
    private int birthDay;
    private int birthMonth;
    private int birthYear;

    public HeartRates(String name, String surName, int birthDay, int birthMonth, int birthYear) {
        this.name = name;
        this.surName = surName;
        this.birthDay = birthDay;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear; 
    }

        //Calcula a idade
    public int calcAge() {
        LocalDate today = LocalDate.now();
        LocalDate birthDate = LocalDate.of(birthYear, birthMonth, birthDay);

        Period age = Period.between(today, birthDate);

        return age.getYears();
    }

    //setters

    public void setName(String name) {
        this.name = name;
    }

    public void setSurName(String surName) {
        this.surName = surName;
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

    //getters

    public String getName() {
        return name;
    }

    public String getSurName() {
        return surName;
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

}
