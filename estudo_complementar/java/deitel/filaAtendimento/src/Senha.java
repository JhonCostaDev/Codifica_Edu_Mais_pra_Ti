
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public final class Senha {
    private String uuid;
    private String name;
    private String surName;
    private String birthDate;
    private int age;

    public Senha(String name, String surName, String birthDate) {
        this.name = name;
        this.surName = surName;
        this.birthDate = birthDate;
        uuid = generateId();
        age = calcAge();
    }

    //Calcula a idade

    public int calcAge() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy"); 
        LocalDate birthDateFormatted = LocalDate.parse(birthDate, formatter);

        LocalDate today = LocalDate.now();

        Period currentAge = Period.between(birthDateFormatted, today);
        return currentAge.getYears();
    }


    // Gera ID do atendimento
    public String generateId() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formateDate = DateTimeFormatter.ofPattern("ddMMyyHHmmss");
        String dateFormatted = now.format(formateDate); 
        return String.format("%c%c%s", name.charAt(0), surName.charAt(0), dateFormatted);
    }

    //getters
    public String getUuid() {
        return uuid;
    }

    public String getName() {
        return name;
    }

    public String getSurName() {
        return surName;
    }

    public String getBirthDate() {
        return birthDate;
    }

    

}
