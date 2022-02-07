
function exibirTabela() {
    console.log('Teste')
    var tabela = document.getElementById("tabela");
    tabela.style.display = "inline";

    var botao = document.getElementById("idBotao");
    botao.addEventListener("click", exibirTabela);
}

function mostraMensagem() {
    alert('O botão foi clicado!!!');
}