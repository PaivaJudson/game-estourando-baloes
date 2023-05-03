var timerID = null; 


function iniciarJogo(){
    
    var url = window.location.search;
    //var level = url.toString()[url.toString().length-1];
    var nivel_jogo = url.replace('?', "");
    var tempo_segundos = 0;
    var qtde_baloes = 10;
    var baloes_estourados = 0;


    if(nivel_jogo == 1){
        tempo_segundos = 120;
    }
    else if(nivel_jogo == 2){
        tempo_segundos = 60;
    }
    else if(nivel_jogo == 3){
        tempo_segundos = 15;
    }

    document.getElementById('cronometro').innerHTML = tempo_segundos;
    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

    cria_baloes(qtde_baloes);

    contagem_tempo(tempo_segundos+1);

}

function game_over(){
    alert("Fim de Jogo, você não conseguiu estourar todos balões a tempo");
}

function contagem_tempo(segundos){
    
    segundos = segundos - 1;
    if(segundos == -1){
        clearTimeout(timerID);
        game_over();
        return false;
    }
    document.getElementById('cronometro').innerHTML = segundos;
    timerID = setTimeout("contagem_tempo("+segundos+")", 1000)


}


function cria_baloes(qtde_baloes){
    
    for (let index = 0; index < qtde_baloes; index++) {
        var balao = document.createElement('img');
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.id = 'b'+index;
        balao.onclick = function(){
            estourar(this);
        }
        document.getElementById('cenario').appendChild(balao);
    }
}

function estourar(e){

    var id_balao = e.id;

    document.getElementById(id_balao).setAttribute("onclick", "");
    document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';
    pontuacao(-1);
}

function pontuacao(decremento){

   var baloes_inteiros = parseInt(document.getElementById('baloes_inteiros').innerHTML);
   var baloes_estourados = parseInt(document.getElementById('baloes_estourados').innerHTML);

   baloes_inteiros = baloes_inteiros + decremento;
   baloes_estourados = baloes_estourados + 1;

   document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
   document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

   situacao_jogo(baloes_inteiros);
}

function situacao_jogo(baloes_inteiros){
    if (baloes_inteiros == 0) {
        alert("Parabéns você conseguiu!!")
        clearTimeout(timerID);
    }
}