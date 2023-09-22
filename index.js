

var randomNumber1=Math.floor(Math.random()*6) +1;
var randomDiceİmage="dice"+ randomNumber1+".png";
var randomİmageSource="images/"+ randomDiceİmage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomİmageSource);


var randomNumber2=Math.floor(Math.random()*6) +1;
var randomDiceİmage1="dice"+ randomNumber2+".png";
var randomİmageSource1="images/"+ randomDiceİmage1;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomİmageSource1);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Winsss!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML=" Player 2 Winsss!";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Drawww!"
}