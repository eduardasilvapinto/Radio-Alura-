function tocaSom( idElementoAudio){
    document.querySelector( idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listsDeTeclas[contador];
    const efeito = teclas.classiList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function (){
        tocaSom(idAudio);
    }
}