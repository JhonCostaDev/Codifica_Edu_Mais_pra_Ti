# Conceitos Gerais da Programação Assíncrona

Normalmente, o código de um programa é executado de forma direta, com uma coisa acontecendo por vez. Se uma função depende do resultado de outra função, ela tem que esperar o retorno do resultado, e até que isso aconteça, o programa inteiro praticamente para de funcionar da perspectiva do usuário.

![ampulheta windows](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQDxIQFRUVFhgVFhcXERoVFxUXFhUXFhgYFR0YICggGRonGxcWIjEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBQgEAwL/xABHEAABAwIDBAQJCAgGAwEAAAABAAIDBBEFEiEGBxMxF0FU0RQiUVNhcZGSkxUyNVJyc7GzCDM0gaGy0uEWI0R0g8JiwcNC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARR/bHayLDo2SztkcHvyDIATexOtz6FE+mmh8zVe63vQWYirPppofM1Xut/qTppofM1Xut70FmIqz6aaHzNV7rf6k6aaHzNV7re9BZiKs+mmh8zVe63vTppofM1Xut70FmIqy6aaHzNV7re9TbZbH466nbUwte1ji4AOGvimx5INuiIgIijO2e2cGGiIzsldxS4NyAG2TKTe5H1ggkyKsummh8zVe63vTppofM1Xut70Fmoqy6aaHzNV7re9Ommh8zVe63vQWairLppofM1Xut706aaHzNV7re9BZqKsummh8zVe63vTppofM1Xut70FmotZs5jDKynjqog4MkBIDuYs4t1t6QtmgIiICKKbZbcwYa6Ns7JXGQEjIAbZSBrcjyqO9NND5mq91vegs1FWY300Pmar3W96x000Pmar3W96CzUVZ9NND5mq91venTTQ+Zqvdb/UgsxFWfTTQ+Zqvdb3p000Pmar3W/1ILMRVkd9ND5mq91verAwXEW1MEdQwODZWh7QeYB8qD2oiICIiCrd/wD+yU/35/LcqNK6yxrAqera1lXEyVrTmAdyBta6obfDg0FLWsipYmRMMDXFreRcZHi/8AggpQK/djNjsMloaaWemp3SPiaXucdSba31W6GwuEdlpvb/AHQc0rFl0x/gXB+y03t/usf4FwfstN7f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)

A icônica ampulheta do Windows que aparecia sempre quando clicavamos em um link, isso é o jeito do sistema operacional dizer: "A página que você está tentando acessar está sendo carregada, aguarde!".

Essa é uma situação frustrante, e não faz bom uso do poder de processamento do computador — especialmente em uma era em que computadores tem múltiplos núcleos de processamento disponíveis. Não há sentido em ficar esperando por algo quando você pode deixar outra tarefa ser executada em um núcleo de processador diferente e deixar que ele te avise quando terminar. Isso te permite fazer mais coisas por enquanto, o que é a base da **programação assincrona**. Depende do ambiente de programação que você está usando (navegadores da Web, no caso de desenvolvimento da Web) para fornecer APIs que permitem executar essas tarefas de forma assíncrona.

## Bloqueio de Código

Técnicas **async** (assíncronas) são muito úteis, principalmente na programação web. Quando um aplicativo web é executado em um navegador e executa um pedaço de código rigoroso sem retornar o controle para o navegador, ele pode parecer que travou. Isso é chamado de blocking; o navegador está bloqueado de continuar a manusear a entrada do usuário e de realizar outras tarefas até que o aplicativo web retorne o controle do processador.

E por quê isso acontece? A resposta é que o **JavaScript é single threaded**. E é neste ponto que precisamos introduzir a você o conceito de threads.

## Threads

Uma thread é basicamente um único processo que um programa pode usar para concluir tarefas. Cada thread só pode fazer uma tarefa de cada vez:

    Tarefa A --> Tarefa B --> Tarefa C

Cada tarefa será executada sequencialmente; uma tarefa tem que ser concluída antes que a próxima possa ser iniciada.

Como foi dito anteriormente, muitos computadores possuem múltiplos núcleos, para que possam fazer múltiplas coisas de uma vez só. Linguagens de programação que podem suportar múltiplas threads podem usar múltiplos processadores para concluir múltiplas tarefas simultâneamente:

    Thread 1: Tarefa A --> Tarefa B
    Thread 2: Tarefa C --> Tarefa D

## JavaScript é single threaded

JavaScript é tradicionalmente single-threaded. Mesmo com múltiplos núcleos de processamento, você só pode fazê-lo executar tarefas em uma única thread, chamada de main thread (thread principal). Nosso exemplo de cima é executado assim:

    Main thread: Renderizar circulos no canvas --> Mostrar alert()

Depois de um tempo, o JavaScript ganhou algumas ferramentas para ajudar em tais problemas. As **Web workers** te permitem mandar parte do processamento do JavaScript para uma thread separada. Você geralmente usaria uma worker para executar um processo pesado para que a UI não seja bloqueada.

    Main thread: Tarefa A --> Tarefa C
    Worker thread: Tarefa pesada B

## Código assíncrono

Web workers podem ser bem úteis, mas elas tem as suas limitações. Uma delas é que elas não são capazes de acessar a **DOM** — você não pode fazer com que uma worker faça algo diretamente para atualizar a UI. Nós não poderíamos renderizar nossos 1 milhão de círculos azuis na nossa worker; basicamente ela pode apenas fazer cálculos de números.

O segundo problema é que, mesmo que o código executado em uma worker não cause um bloqueio, ele ainda é um código síncrono. Isso se torna um problema quando uma função depende dos resultados de processos anteriores para funcionar. Considere os diagramas a seguir:

    Main thread: Tarefa A --> Tarefa B

Nesse caso, digamos que a tarefa A está fazendo algo como pegar uma imagem do servidor e que a tarefa B faz algo com essa imagem, como colocar um filtro nela. Se você iniciar a tarefa A e depois tentar executar a tarefa B imediatamente, você obterá um erro, porque a imagem não estará disponível ainda.

    Main thread: Tarefa A --> Tarefa B --> |Tarefa D|
    Worker thread: Tarefa C ---------------> |      |

Neste caso, digamos que a tarefa D faz uso dos resultados das tarefas B e C. Se nós pudermos garantir que esses resultados estejam disponíveis ao mesmo tempo, então tudo talvez esteja bem, mas isso não é garantido. Se a tarefa D tentar ser executada quando um dos resultados não estiver disponível, ela retornará um erro.

Para consertarmos tais problemas, os browsers nos permitem executar certas operações de modo assíncrono. Recursos como **Promises** te permitem executar uma operação e depois esperar pelo resultado antes de executar outra operação:

    Main thread: Tarefa A                   Tarefa B
    Promise:       |___operação async___|

Já que a operação está acontecendo em outro lugar, a main thread não está bloqueada enquanto a operação assíncrona está sendo processada.

Nós vamos começar a olhar em como podemos escrever código assíncrono no próximo artigo.

## Conclusão

O design moderno de software gira em torno do uso de programação assíncrona, para permitir que os programas façam mais de uma coisa por vez. Ao usar APIs mais novas e mais poderosas, você encontrará mais casos em que a única maneira de fazer as coisas é assincronamente. Costumava ser difícil escrever código assíncrono. Ainda é preciso se acostumar, mas ficou muito mais fácil. No restante deste módulo, exploraremos ainda mais por que o código assíncrono é importante e como projetar o código que evita alguns dos problemas descritos acima.

# JavaScript Assíncrono

Neste módulo vamos entender **JavaScript Assíncrono**, porque isso é importante e como pode ser usado para lidar com operações potencialmente **bloqueantes**, como a busca de recursos em um servidor remoto.

## Javascript assícrono cooperativo: Timeouts e intervalos

Este tutorial é sobre os métodos tradicionais que o JavaScript tem disponíveis para executar códigos assíncronamente depois que um dado período de tempo tenha passado, ou em um intervalo (um número de segundos por segundo), discute suas utilidades e considera seus problemas.

### Introdução

Por um longo tempo, a plataforma web tem oferecido à programadores JavaScript um número de funções que permitem que eles executem código assíncronamente depois de um determinado intervalo de tempo, e executar um bloco de código de modo assíncrono repetidamente até que você o mande parar.

Essas funções são: 

* **setTimeout()**: Executa um bloco específico uma vez depois de um determinado tempo.
```javascript
//Exemplo de uso do setTimeout

setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
```

* **setInterval()**: Executa um bloco específico repetidamente com um intervalo fixo entre cada chamada.

O método **setInterval()** oferecido das interfaces **Window** e **Worker**, repetem chamadas de funções ou executam trechos de código, com um tempo de espera fixo entre cada chamada. Isso retorna um ID único para o intervalo, podendo remove-lo mais tarde apenas o chamando **clearInterval()**. Este metodo é definido pelo mixin **WindowOrWorkerGlobalScope**.
```javascript

var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
var intervalID = scope.setInterval(code, delay);

```

* **requestAnimationFrame()**: Uma versão moderna de **setInterval()**. Ela executa um bloco de código específico antes do navegador renderizar a tela novamento, permitindo que seja executada em uma taxa de quadros adequada, independentemente do ambiente em que está sendo executado.

    O código executado por estas funções é executado na main thread (depois do dado intervalo).

    É importante saber que você pode (e irá) executar outros códigos antes que uma chamada setTimeout() é executada, ou entre iterações de setInterval(). Dependendo de como essas operações são intensas, elas podem atrasar o seu código async ainda mais, já que o código async só é executado depois que a main thread terminar seu processamento (ou seja, quando a fila estiver vazia). 

    De qualquer forma, essas funções são usadas para executar animações constantes e outros processamentos em um web site ou aplicação. 