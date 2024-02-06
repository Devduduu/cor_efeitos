const Yellow =  document.getElementById('btn-amarelo');
const Vermelho = document.getElementById('btn-vermelho');
const Black = document.getElementById('btn-preto');

function TrocarYellow(){
    document.querySelector("body").setAttribute('class', 'amarelo')
};

function TrocarRed(){
    document.querySelector("body").setAttribute('class', 'vermelho')
};

function TrocarBlack(){
    document.querySelector("body").setAttribute('class', 'preto')
};


Yellow.addEventListener('click', TrocarYellow);
Vermelho.addEventListener('click', TrocarRed);
Black.addEventListener('click', TrocarBlack);