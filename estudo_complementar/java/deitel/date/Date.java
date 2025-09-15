public class Date {
    /*
     * Crie uma classe chamada Date que inclua três variáveis de instância:
     *      * mes (int),
     *      * dia (int),
     *      * ano (int)
     * Crie um construtor que inicializa as três variáveis de instância supondo que os valores fornecidos estejam corretos. Ofereça um método set e get para cada variável de instância. Apresente um método displayDate que exiba mês, dia e ano separados por barras(/). Escreva um app DateTest que demonstre as capacidades da classe Date.
     */
    private int day;
    private int month;
    private int year;

    public Date (int day, int month, int year) {
        this.day = day;
        this.month = month;
        this.year = year; 
    }

    //Display
    public String displayDate() {
        return String.format("Data de hoje: %d / %d / %d", day, month, year);
    }

    //setters
    public void setDay(int day) {
        this.day = day;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public void setYear(int year) {
        this.year = year;
    }

    //getters

    public int getDay() {
        return day;
    }

    public int getMonth() {
        return month;
    }

    public int getYear() {
        return year;
    }
}