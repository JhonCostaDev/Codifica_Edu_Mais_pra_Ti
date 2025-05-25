# Arrays

Um array é uma estrutura de dados mais simples possível em memória. Um array armazena valores sequencialmente. No javascript arrays podem armazenar valores de tipos diferentes.

```javascript
const averageTemp = []

averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 27.5;
averageTemp[4] = 52.0;
averageTemp[5] = 60.9;
```

## Representação gráfica de um array

![representação de um array](/estruturaDadosEAlgoritmos_Loiane/arrays/arrayTem.png)


## Criando e inicializando um novo array

```javascript
let daysOfWeek = new Array(); // array vazio usando palavra reservada new
daysOfWeek = new Array(7); // array vazio usando palavra reservada new com 7 posições
daysOfWeek = new Array(
    'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
);
```

A pesar de ser possível criar arrays usando a palavra reservada __new__, isso não é considerado uma boa prática. Podendo ser substituída simplesmente por:

```javascript
let daysOfWeek = []; //vazio

// ou

let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
```

## Verificando a quantidade de elementos de um array

```javascript
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


console.log(daysOfWeek.length); // 7
```

## Acessando elementos e fazendo iterações em arrays


```javascript
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];



// Laço FOR
for(let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}
```

