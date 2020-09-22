
var campoAno = document.getElementById('campoAno');
var mensagemResult = document.getElementById('mensagemResult');
var botaoCalc = document.getElementById('botaoCalc');
botaoCalc.onclick = calc_Idade;
var botaoLimpar = document.getElementById('botaoLimpar');
botaoLimpar.addEventListener('click', limpar);

function calc_Idade() {
    var ano = parseInt(campoAno.value);
    var idade = new Date().getFullYear() - ano;
    
    if(isNaN(ano)) {
        alert('Ano de nascimento inválido');
        campoAno.value = '';
    } else if(ano > new Date().getFullYear()) {
        alert('Ano de nascimento maior que o ano atual');
        campoAno.value = '';
    } else {
        var mensagem = 'Idade: ' + idade + ' ano(s).';
    mensagemResult.innerText = mensagem;
    }
}
    
function limpar() {
    campoAno.value = '';
    mensagemResult.innerText = '';
}