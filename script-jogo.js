
function iniciarJogo(){
    
    var url = window.location.search;
    //var level = url.toString()[url.toString().length-1];
    var nivel_jogo = url.replace('?', "");
    var tempo_segundos = 0;
    var qtde_baloes = 10;
    var baloes_estourados = 5;


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
    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

    cria_baloes(qtde_baloes);
}

function cria_baloes(qtde_baloes){
    
    for (let index = 0; index < qtde_baloes; index++) {
        var balao = document.createElement('img');
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        document.getElementById('cenario').appendChild(balao);
    }
}