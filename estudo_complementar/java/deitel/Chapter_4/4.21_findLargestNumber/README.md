# 4.21 Find Largest Number

## English
The process of finding the largest value is used frequently in computer applications. For example, a program that determines the winner of a sales contest would input the number of units sold by each salesperson. The salesperson who sells the most units wins the contest. 

Write a pseudocode program, then a Java application that inputs a series of 10 integers and determines and prints the largest integer. Your program should use at least the following three variables:

* a) **counter**: A counter to count to 10 (i.e., to keep track of how many numbers have been
input and to determine when all 10 numbers have been processed).
* b) **number**: The integer most recently input by the user.
* c) **largest**: The largest number found so far


## Pseudocode
```java
BEGIN
    INTEGER count <- 0
    INTEFER number <- 0
    INTEGER lagerst <- 0

    WRITE "Type 10 integers to show the largest one!"
    WHILE count < 11 DO
        WRITE "Enter the {count + 1} integer"
        READ number
        IF number > lagest THEN
            lagest <- number
        END IF

        count + 1
    END WHILE
    WRITE "The lagest number is: {lagest}"
END
```
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
