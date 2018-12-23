const drumCount = document.querySelectorAll('.drum').length
console.log(drumCount);

for(i=0;i<drumCount;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var text = this.innerText;
        makeSound(text)
        buttonAni(text)
    })
    
}
document.addEventListener('keypress',function(e){
    makeSound(e.key)
    buttonAni(e.key)
})

function makeSound(key){
    
    switch(key) {
        case 'w':
        var audioA = new Audio("notes/fa.wav")
        audioA.play();
        break;
        case 'a':
        var audioB = new Audio("notes/la.wav")
        audioB.play();
        break;
        case 's':
        var audioC = new Audio("notes/mi.wav")
        audioC.play();
        break;
        case 'd':
        var audioD = new Audio("notes/so.wav")
        audioD.play();
        break;
        case 'j':
        var audioJ = new Audio("notes/ti.wav")
        audioJ.play();
        break;
        case 'k':
        var audioK = new Audio("notes/do2.wav")
        audioK.play();
        break;
        default: console.log('poo')
    }
}

function buttonAni(currKey) {
    var activeBtn = document.querySelector("." + currKey);
    activeBtn.classList.add('pressed')
    setTimeout(function(){
        activeBtn.classList.remove("pressed")
    },100)
}



// =========





// var Bellboy = function(name,age,hotels,hasPermit){
//     this.name = name;
//     this.age = age;
//     this.hotels = hotels;
//     this.hasPermit = hasPermit;
//     this.cleanRoom = function(){
//         alert('nice pecs')
//     }
// }

// let bellboy1 = new Bellboy("Austin",14,['Mirage','Rio'],true);
// bellboy1.cleanRoom()

