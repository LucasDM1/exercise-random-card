let symbols=['♦', '♥', '♠', '♣']
let numbers=['A','2','3', '4','5','6','7','8','9','10','J','Q','K']

function randomNumber(){
    let randomNum=Math.floor(Math.random()*(numbers.length));
    
    document.querySelector("#numberC").innerHTML=numbers[randomNum];
}
function randomSymbol(){
    let randomSym=Math.floor(Math.random()*(symbols.length));
    document.querySelector("#uppericon").innerHTML=symbols[randomSym];
    document.querySelector("#bottomicon").innerHTML=symbols[randomSym];
    if(randomSym==0||randomSym==1){
        document.querySelector(".card").classList.add("red");
    }else{
        document.querySelector(".card").classList.add("black");
    }
}

window.onload=function generateCard(){
    randomNumber();
    randomSymbol();
}