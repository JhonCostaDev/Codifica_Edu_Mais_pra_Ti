public class Pessoa {
    //attributes
    public String name;
    public int age;
    public String gender;

    //constructor
    public Pessoa(String name, int age, String gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    //method
    public void introduce() {
        System.out.println("Hi! My name is " + name + " and I'm " + age + " years old and I'm a " + gender + ".");
    }
    
}
