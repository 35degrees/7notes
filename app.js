let do1 = document.querySelector('.do')
let re1 = document.querySelector('.re')
let mi1 = document.querySelector('.mi')
let fa1 = document.querySelector('.fa')
let so1 = document.querySelector('.so')
let la1 = document.querySelector('.la')
let ti1 = document.querySelector('.ti')
let do2 = document.querySelector('.dooctave')

do1.addEventListener('click',playDo, false);
re1.addEventListener('click',playRe);
mi1.addEventListener('click',playMi);
fa1.addEventListener('click',playFa);
so1.addEventListener('click',playSo);
la1.addEventListener('click',playLa);
ti1.addEventListener('click',playTi);
do2.addEventListener('click',playDo2);

function playDo(){
    document.body.style.background = 'gold'
    do1.classList.add('animated');
    do1.classList.add('jello');
    setTimeout(doRemove, 2000);
}

function doRemove() {
    do1.classList.remove("animated");
    do1.classList.remove('jello');
}

function playRe(){
    document.body.style.background = 'black'
    re1.classList.add('animated');
    re1.classList.add('rubberBand');
    setTimeout(reRemove, 2000);
}

function reRemove() {
    re1.classList.remove("animated");
    re1.classList.remove('rubberBand');
}

function playMi(){
    document.body.style.background = 'cornflowerblue';
    mi1.classList.add('animated');
    mi1.classList.add('wobble');
    setTimeout(miRemove, 2000);
}

function miRemove() {
    mi1.classList.remove("animated");
    mi1.classList.remove('wobble');
}

function playFa(){
    document.body.style.background = 'brown'
}

function playSo(){
    document.body.style.background = 'lightpink'
}

function playLa(){
    document.body.style.background = 'yellow'
}

function playTi(){
    document.body.style.background = 'lime'
}

function playDo2(){
    console.log('re works too')
}

