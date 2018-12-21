

for(i=0;i<document.querySelectorAll(".note").length;i++){
    document.querySelectorAll(".note")[i].addEventListener('click', function (){
        
})
}


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
    const audio1 = new Audio('/notes/do1.wav');
    audio1.play();
}

function doRemove() {
    do1.classList.remove("animated");
    do1.classList.remove('jello');
}

function playRe(){
    document.body.style.background = 'DarkGrey'
    re1.classList.add('animated');
    re1.classList.add('rubberBand');
    setTimeout(reRemove, 2000);
    const audio2 = new Audio('/notes/re.wav');
    audio2.play();
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
    const audio3 = new Audio('/notes/mi.wav');
    audio3.play();
}

function miRemove() {
    mi1.classList.remove("animated");
    mi1.classList.remove('wobble');
}

function playFa(){
    document.body.style.background = 'brown'
    fa1.classList.add('animated');
    fa1.classList.add('flipInX');
    setTimeout(faRemove, 2000);
    const audio3 = new Audio('/notes/fa.wav');
    audio3.play();
}

function faRemove() {
    fa1.classList.remove("animated");
    fa1.classList.remove('flipInX');
}

function playSo(){
    document.body.style.background = 'lightpink'
    so1.classList.add('animated');
    so1.classList.add('tada');
    setTimeout(soRemove, 2000);
    const audio3 = new Audio('/notes/so.wav');
    audio3.play();
}

function soRemove() {
    so1.classList.remove("animated");
    so1.classList.remove('tada');
}

function playLa(){
    document.body.style.background = 'LightYellow'
    la1.classList.add('animated');
    la1.classList.add('flash');
    setTimeout(laRemove, 2000);
    const audio3 = new Audio('/notes/la.wav');
    audio3.play();
}

function laRemove() {
    la1.classList.remove("animated");
    la1.classList.remove('flash');
}


function playTi(){
    document.body.style.background = 'lime'
    ti1.classList.add('animated');
    ti1.classList.add('headShake');
    setTimeout(tiRemove, 2000);
    const audio3 = new Audio('/notes/ti.wav');
    audio3.play();
}

function tiRemove() {
    ti1.classList.remove("animated");
    ti1.classList.remove('headShake');
}

function playDo2(){
    document.body.style.background = 'skyblue'
    do2.classList.add('animated');
    do2.classList.add('heartBeat');
    setTimeout(do2Remove, 2000);
    const audio3 = new Audio('/notes/do2.wav');
    audio3.play();
}

function do2Remove() {
    do2.classList.remove("animated");
    do2.classList.remove('heartBeat');
}


