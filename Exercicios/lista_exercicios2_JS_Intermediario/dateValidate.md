## Instruções


Validar uma data sem usar código envolve entender bem o funcionamento do calendário gregoriano, que é o sistema de data mais amplamente utilizado no mundo. Aqui estão os principais elementos que você precisa considerar:

📅 1. Dias válidos por mês
Cada mês tem um número fixo de dias, exceto fevereiro que pode variar:

Janeiro: 31 dias

Fevereiro: 28 ou 29 dias (dependendo se o ano é bissexto)

Março: 31 dias

Abril: 30 dias

Maio: 31 dias

Junho: 30 dias

Julho: 31 dias

Agosto: 31 dias

Setembro: 30 dias

Outubro: 31 dias

Novembro: 30 dias

Dezembro: 31 dias

🗓️ 2. Regras de ano bissexto
Um ano é bissexto quando é divisível por 4, mas:

Não é bissexto se também for divisível por 100,

A menos que também seja divisível por 400.

Exemplos:

2020 → bissexto ✅

1900 → não bissexto ❌

2000 → bissexto ✅

Assim, em um ano bissexto, fevereiro terá 29 dias; caso contrário, terá 28.

🚫 3. Verificações de consistência
O dia deve estar entre 1 e o máximo de dias do mês.

O mês deve estar entre 1 e 12.

O ano pode variar dependendo do contexto, mas geralmente aceita-se a partir do ano 1 em diante.

👀 4. Erros comuns a evitar
31 de abril ou 31 de junho (abril e junho só vão até o dia 30)

30 de fevereiro (não existe, mesmo em ano bissexto)

29 de fevereiro em ano não bissexto