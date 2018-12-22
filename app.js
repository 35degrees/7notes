
var bgColor = ["aliceblue", "gold","bisque","burlywood","fuschia","plum","LightCoral","darkgrey","cornflowerblue","lightpink","lime","skyblue","LightYellow","SeaGreen","PaleTurquoise"]
var bcglength = bgColor.length;
function changeBg(){
    var random = Math.floor(Math.random()*bcglength);
    document.body.style.background = `${ bgColor[random] }`
}
const aniMate = ['bounceInDown','fadeIn','jello','rubberBand','wobble','flipInX','tada','flash','headShake','heartBeat','swing','bounce','jackInTheBox']
var anilength = aniMate.length;
function changeAni() {
    return aniMate[Math.floor(Math.random()*anilength)];
}
// var changeAni = aniMate[Math.floor(Math.random()*anilength)];

const numOfNotes = document.querySelectorAll(".note").length


for(i=0;i<numOfNotes;i++){
    document.querySelectorAll(".note")[i].addEventListener('click', function (){
        changeBg();
})
}

function changeBg(){
    var random = Math.floor(Math.random()*bcglength);
    document.body.style.background = `${ bgColor[random] }`
}

function changeAni() {
    return aniMate[Math.floor(Math.random()*anilength)];
}


let note = document.querySelectorAll('button')
let do1 = document.querySelector('.do')
let re1 = document.querySelector('.re')
let mi1 = document.querySelector('.mi')
let fa1 = document.querySelector('.fa')
let so1 = document.querySelector('.so')
let la1 = document.querySelector('.la')
let ti1 = document.querySelector('.ti')
let do2 = document.querySelector('.dooctave')

// note.addEventListener('click', function (){
//     var random = Math.floor(Math.random()*bgColor.length);
    
//     })
// note.addEventListener('click',changeBg);
do1.addEventListener('click',playDo);
re1.addEventListener('click',playRe);
mi1.addEventListener('click',playMi);
fa1.addEventListener('click',playFa);
so1.addEventListener('click',playSo);
la1.addEventListener('click',playLa);
ti1.addEventListener('click',playTi);
do2.addEventListener('click',playDo2);

function playDo(){
    do1.classList.add('animated');
    do1.classList.add(changeAni());
    setTimeout(doRemove, 600);
    const audio1 = new Audio('/notes/do1.wav');
    audio1.play();
}

function doRemove() {
    do1.classList.remove("animated");
    do1.classList.remove('bounceInDown','fadeIn','jello','rubberBand','wobble','flipInX','tada','flash','headShake','heartBeat','swing','bounce','jackInTheBox');
}

function playRe(){
    re1.classList.add('animated');
    re1.classList.add(changeAni());
    setTimeout(reRemove, 600);
    const audio2 = new Audio('/notes/re.wav');
    audio2.play();
}

function reRemove() {
    re1.classList.remove("animated");
    re1.classList.remove('bounceInDown','fadeIn','jello','rubberBand','wobble','flipInX','tada','flash','headShake','heartBeat','swing','bounce','jackInTheBox');
}

function playMi(){
    mi1.classList.add('animated');
    mi1.classList.add(changeAni());
    setTimeout(miRemove, 600);
    const audio3 = new Audio('/notes/mi.wav');
    audio3.play();
}

function miRemove() {
    mi1.classList.remove("animated");
    mi1.classList.remove('bounceInDown','fadeIn','jello','rubberBand','wobble','flipInX','tada','flash','headShake','heartBeat','swing','bounce','jackInTheBox');
}

function playFa(){
    fa1.classList.add('animated');
    fa1.classList.add(changeAni());
    setTimeout(faRemove, 600);
    const audio3 = new Audio('/notes/fa.wav');
    audio3.play();
}

function faRemove() {
    fa1.classList.remove("animated");
    fa1.classList.remove('bounceInDown','fadeIn','jello','rubberBand','wobble','flipInX','tada','flash','headShake','heartBeat','swing','bounce','jackInTheBox');
}

function playSo(){
    so1.classList.add('animated');
    so1.classList.add(changeAni());
    setTimeout(soRemove, 600);
    const audio3 = new Audio('/notes/so.wav');
    audio3.play();
}

function soRemove() {
    so1.classList.remove("animated");
    so1.classList.remove('bounceInDown','fadeIn','jello','rubberBand','wobble','flipInX','tada','flash','headShake','heartBeat','swing','bounce','jackInTheBox');
}

function playLa(){
    la1.classList.add('animated');
    la1.classList.add(changeAni());
    setTimeout(laRemove, 600);
    const audio3 = new Audio('/notes/la.wav');
    audio3.play();
}

function laRemove() {
    la1.classList.remove("animated");
    la1.classList.remove('bounceInDown','fadeIn','jello','rubberBand','wobble','flipInX','tada','flash','headShake','heartBeat','swing','bounce','jackInTheBox');
}


function playTi(){
    ti1.classList.add('animated');
    ti1.classList.add(changeAni());
    setTimeout(tiRemove, 600);
    const audio3 = new Audio('/notes/ti.wav');
    audio3.play();
}

function tiRemove() {
    ti1.classList.remove("animated");
    ti1.classList.remove('bounceInDown','fadeIn','jello','rubberBand','wobble','flipInX','tada','flash','headShake','heartBeat','swing','bounce','jackInTheBox');
}

function playDo2(){
    do2.classList.add('animated');
    do2.classList.add(changeAni());
    setTimeout(do2Remove, 600);
    const audio3 = new Audio('/notes/do2.wav');
    audio3.play();
}

function do2Remove() {
    do2.classList.remove("animated");
    do2.classList.remove('bounceInDown','fadeIn','jello','rubberBand','wobble','flipInX','tada','flash','headShake','heartBeat','swing','bounce','jackInTheBox');
}


