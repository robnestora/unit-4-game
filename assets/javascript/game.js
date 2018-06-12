$(document).ready( function() {
var wins = 0;
var losses = 0;
var minNumber = 19;
var maxNumber = 120;

var numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
$("#numberGuess").html(numberGuess);

var yourNumber = 0;
var gemMin = 1;
var gemMax = 12;
var pink = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
var purple = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
var blue = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
var green = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);

do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
}
while (pink === purple);

do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
}
while (purple === blue || pink === blue);

do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
}
while (pink === green && purple === green && blue === green);



$("#pink").click(function(){
    alert(pink);
    yourNumber += pink;
    $("#yournumber").html(yourNumber);
});

$("#purple").click(function(){
    alert(purple);
    yourNumber += purple;
    $("#yournumber").html(yourNumber);
});

$("#blue").click(function(){
    alert(blue);
    yourNumber += blue;
    $("#yournumber").html(yourNumber);
});

$("#green").click(function(){
    alert(green);
    yourNumber += green;
    $("#yournumber").html(yourNumber);
});
if (yourNumber === numberGuess) {
    wins++; 
    $("#wins").html(wins);
    alert("You Win!");
    numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $("#numberGuess").html(numberGuess);

 }
else if (yourNumber > numberGuess) {
    losses++;
    $("#losses").html(losses);
    alert("You Lose");
    numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $("#numberGuess").html(numberGuess);
}
else {
$("#wins").html(wins);
$("#losses").html(losses);
}

});