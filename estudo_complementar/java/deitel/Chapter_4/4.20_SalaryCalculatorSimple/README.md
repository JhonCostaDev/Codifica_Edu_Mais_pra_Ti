# 4.20_SalaryCalculator

## English

Develop a Java application that determines the gross pay for each of three employees. The company pays straight time for the first 40 hours worked by each employee and time and a half for all hours worked in excess of 40. You’re given a list of the employees, their
number of hours worked last week and their hourly rates. Your program should input this information for each employee, then determine and display the employee’s gross pay. Use class Scanner to input the data

## Portuguese - Calculador de salário
Desenvolva um aplicativo java que determina o salário bruto de cada um de três empregados. A empresa paga as horas normais pelas primeiras 40 horas trabalhadas por cada funcionário e 50% a mais por todas as horas trabalhadas além das 40 horas. Você recebe uma lista de empregados, o número de horas trabalhadas por eles na semana e o salário-hora de cada um. Seu programa deve aceitar a entrada dessas informações para cada empregado e, então, determinar e exibir o salário bruto do empregado. Utilize a classe Scanner para inserir os dados.

 - salario semanal
 - ate 40 horas - hora salario base
 - acima de 40 horas - hora salario base + 50%



## Estrutura

- `src/`: Contém os arquivos fonte (.java)
- `bin/`: Contém os arquivos compilados (.class)

## Como compilar

```bash
javac -d bin src/*.java
```

## Como executar

```bash
java -cp bin NomeDaClassePrincipal
```
```java

//System.out.println("Nome - Horas Trabalhadas - Valor/Hora");
 Employee employee1 = new Employee(employeeNames[0],employeesData[0][0],employeesData[0][1]);
```