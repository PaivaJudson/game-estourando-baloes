function inciarJogo(){

    var nivel_game = document.getElementById('nivel_game').value;

    window.location.href = 'jogo.html?'+nivel_game;

}