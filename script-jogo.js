
function iniciarJogo(){
    
    var url = window.location.search;
    //var level = url.toString()[url.toString().length-1];
    var nivel_jogo = url.replace('?', "");
    var tempo_segundos = 0;

    if(nivel_jogo == 1){
        tempo_segundos = 120;
    }
    else if(nivel_jogo == 2){
        tempo_segundos = 60;
    }
    else if(nivel_jogo == 3){
        tempo_segundos = 30;
    }

    document.getElementById('cronometro').innerHTML = tempo_segundos;

    var qtde_baloes = 10;

    cria_baloes(qtde_baloes);
}

