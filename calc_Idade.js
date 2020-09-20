
var campoAno = document.getElementById('campoAno');
var mensagemResult = document.getElementById('mensagemResult');
var botaoCalc = document.getElementById('botaoCalc');
botaoCalc.onclick = calc_Idade;
var botaoLimpar = document.getElementById('botaoLimpar');
botaoLimpar.addEventListener('click', limpar);

function calc_Idade() {
    var ano = campoAno.value.trim();
    var idade = new Date().getFullYear() - ano;
    var mensagem = 'Idade: ' + idade + ' ano(s).';
    mensagemResult.innerText = mensagem;
}
function limpar() {
    campoAno.value = '';
    mensagemResult.innerText = '';
}