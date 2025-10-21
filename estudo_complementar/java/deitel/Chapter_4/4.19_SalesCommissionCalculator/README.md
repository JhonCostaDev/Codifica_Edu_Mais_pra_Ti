# 4.19_SalesCommissionCalculator

## Portugues
(Calculador de comissão de vendas) Uma grand empresa paga seu pessoal de vendas com base em comissões. O pessoal de vendas recebe R$ 200 por semana mais 9% de suas vendas brutas durante esse período. Por exemplo, um vendedor que realiza um total de vendas de mercadorias de R$ 5.000 em uma semana recebe R$ 200,00 mais 9%, um total de R$ 650,00. Foi-lhe fornecida uma lista dos itens vendidos por cada vendedor. Os valores desses itens são como  segue:
| Item | Value |
|------| ------|
|1|    239.99 |
|2|    129.75 |
|3|    99.95 |
|4|    350.89 |

Desenvolva um aplicativo Java que recebe entrada de itens vendidos por um vendedor durante a última semana e calcula e exibe os rendimentos do vendedor. Não existe limite para o número de itens que pode ser vendido

salario/semana = 200 + 9% das vendas brutas.

### Pseudocódigo
```
Inicio
    vendas = 0
    faça:
        Escreva: "Digite o valor do item"
        Leia: item - real
        vendas <= vendas + item

        Escreva: "Adicionar nova venda? (sim (S) / Não (N))"
        Leia: sentinela
    
    Enquanto == "sim" 
    salario = 200 + (vendas * 0.09)

    Escreva: "O salário semanal foi de: {salario}"
```


## English
(SalesCommission Calculator) A large company pays its salespeople on a commission basis.
 The salespeople receive $200 per week plus 9% of their gross sales for that week. For example, a salesperson who sells $5000 worth of merchandise in a week receives $200 plus 9% of $5000, or a total of $650. You’ve been supplied with a list of the items sold by each salesperson. The values of these items are as follows:
 
| Item | Value |
|------| ------|
|1|    239.99 |
|2|    129.75 |
|3|    99.95 |
|4|    350.89 |
 
 Develop a Java application that inputs one salesperson’s items sold for last week and calculates and
 displays that salesperson’s earnings. There’s no limit to the number of items that can be sold.



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
