
function exibirTabela() {
    console.log('Teste')
    var tabela = document.getElementById("tabelaBusca");
    tabela.style.display = "table";

    var botao = document.getElementById("idBotao");
    botao.addEventListener("click", exibirTabela);
}

function mostraMensagem() {
    alert('O botão foi clicado!!!');
}