//Depois de 5 segundos executa a função que mostra a caixa de texto
setTimeout(function ativaMensagem(){
    document.getElementById('caixaTexto').style.visibility = 'visible';
},4000);

//Quando for dado um clique na caixa de texto a mensagem some
caixaTexto.onclick = function () {
    document.getElementById('caixaTexto').style.visibility = 'hidden';
}