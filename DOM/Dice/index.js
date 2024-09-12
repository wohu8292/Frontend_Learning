//dice1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImgSrc1 = "./images/dice"+randomNumber1+".png";

var firstDice = document.querySelectorAll("img")[0]
firstDice.setAttribute("src", randomDiceImgSrc1);

//dice2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImgSrc2 = "./images/dice"+randomNumber2+".png";

var secondDice = document.querySelectorAll("img")[1]
secondDice.setAttribute("src", randomDiceImgSrc2);

if(randomNumber1>randomNumber2){
 document.querySelector("h1").innerHTML="Player1 Win!"   
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Win!"
}else{
    document.querySelector("h1").innerHTML="Draw"
}