//Criar referência aos elementos da página

function converterDuracao() {
    const inTitulo = document.getElementById('inTitulo');
    const inDuracao = document.getElementById('inDuracao');

    const outTitulo = document.getElementById('outTitulo');
    const outAnswer = document.getElementById('outAnswer');

    //obter conteúdo dos campos de entrada

    const titulo = inTitulo.value;
    const duracao = Number(inDuracao.value);

    //arredonda para baixo o resultado da divisão
    const horas = Math.floor(duracao / 60);


    //Obtem o resto da divisão entre os números
    const minutos = duracao % 60;

    //Altera o conteúdo dos parágrafos de resposta
    outTitulo.textContent = titulo;
    outAnswer.textContent = `${horas} horas(s) e ${minutos} minutos.`;
}
//Criar uma referência ao elemento btnConverter

const btnConverter = document.getElementById('btnConverter');
btnConverter.addEventListener('click', converterDuracao);