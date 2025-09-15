public class Employee {
	/*Crie uma classe chamada Employee que inclua três variáveis de instância:
		* primeiro nome (String)
		* Sobrenome (String)
		* salário mensal(double)

	Crie um construtor que inicializa as três variáveis de instancia.
	Crie os métodos get e set para cada variável de instância. Se o salário mensal não for positivo,
	não configure o valor.

	Crie uma classe teste chamado EmployeeTest que demonstre as capacidades da classe Employee.
	Crie dois objetos Employee e exiba o salário anual de cada objeto, então dê um aumento de 10%
	e exiba novamente o salário anual de cada Employee.
	*/
	private String name;
	private String surName;
	private double salary;

	public Employee(String name, String surName, double salary) {
		this.name = name;
		this.surName = surName;
		this.salary = salary;
	}

	//setters
	public void setName(String name) {
		this.name = name;
	}

	public void setSurName(String surName) {
		this.surName = surName;
	}

	public void setSalary(double salary) {
		if(salary > 0) {
			this.salary = salary;
		} else {
			continue;
		}
		
	}

	//getters
	public String getName(){
		return name;
	}

	public String getSurName(){
		return surName;
	}

	public String getSalary(){
		return salary;
	}
}