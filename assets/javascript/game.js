$(document).ready( function() {
var wins = 0;
var losses = 0;
var minNumber = 19;
var maxNumber = 120;

var numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
$("#numberGuess").html(numberGuess);

var yourNumber = 0;
$("#yournumber").html(yourNumber);

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
    
    yourNumber += pink;
    $("#yournumber").html(yourNumber);
    if (numberGuess === yourNumber) {
   
        wins++; 
        $("#wins").html(wins);
        alert("You Win!");
        numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#numberGuess").html(numberGuess);
        yourNumber = 0;
        $("#yournumber").html(yourNumber);
        pink = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        purple = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        blue = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        green = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === purple);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (purple === blue || pink === blue);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === green && purple === green && blue === green);
     }
    else if (numberGuess < yourNumber) {
        losses++;
        $("#losses").html(losses);
        alert("You Lose");
        numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#numberGuess").html(numberGuess);
        yourNumber = 0;
        $("#yournumber").html(yourNumber);
        pink = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        purple = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        blue = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        green = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === purple);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (purple === blue || pink === blue);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === green && purple === green && blue === green);
    }
    else {
    $("#wins").html(wins);
    $("#losses").html(losses);
    }
});

$("#purple").click(function(){
    
    yourNumber += purple;
    $("#yournumber").html(yourNumber);
    if (numberGuess === yourNumber) {
   
        wins++; 
        $("#wins").html(wins);
        alert("You Win!");
        numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#numberGuess").html(numberGuess);
        yourNumber = 0;
        $("#yournumber").html(yourNumber);
        pink = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        purple = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        blue = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        green = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === purple);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (purple === blue || pink === blue);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === green && purple === green && blue === green);
    
     }
    else if (numberGuess < yourNumber) {
        losses++;
        $("#losses").html(losses);
        alert("You Lose");
        numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#numberGuess").html(numberGuess);
        yourNumber = 0;
        $("#yournumber").html(yourNumber);
        pink = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        purple = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        blue = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        green = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === purple);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (purple === blue || pink === blue);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === green && purple === green && blue === green);
    }
    else {
    $("#wins").html(wins);
    $("#losses").html(losses);
    }
});

$("#blue").click(function(){
    
    yourNumber += blue;
    $("#yournumber").html(yourNumber);
    if (numberGuess === yourNumber) {
   
        wins++; 
        $("#wins").html(wins);
        alert("You Win!");
        numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#numberGuess").html(numberGuess);
        yourNumber = 0;
        $("#yournumber").html(yourNumber);
        pink = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        purple = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        blue = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        green = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === purple);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (purple === blue || pink === blue);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === green && purple === green && blue === green);
    
     }
    else if (numberGuess < yourNumber) {
        losses++;
        $("#losses").html(losses);
        alert("You Lose");
        numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#numberGuess").html(numberGuess);
        yourNumber = 0;
        $("#yournumber").html(yourNumber);
        pink = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        purple = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        blue = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        green = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === purple);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (purple === blue || pink === blue);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === green && purple === green && blue === green);
    }
    else {
    $("#wins").html(wins);
    $("#losses").html(losses);
    }
});

$("#green").click(function(){
    
    yourNumber += green;
    $("#yournumber").html(yourNumber);
    if (numberGuess === yourNumber) {
   
        wins++; 
        $("#wins").html(wins);
        alert("You Win!");
        numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#numberGuess").html(numberGuess);
        yourNumber = 0;
        $("#yournumber").html(yourNumber);
        pink = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        purple = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        blue = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        green = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === purple);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (purple === blue || pink === blue);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === green && purple === green && blue === green);

    
     }
    else if (numberGuess < yourNumber) {
        losses++;
        $("#losses").html(losses);
        alert("You Lose");
        numberGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#numberGuess").html(numberGuess);
        yourNumber = 0;
        $("#yournumber").html(yourNumber);
        pink = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        purple = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        blue = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        green = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === purple);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (purple === blue || pink === blue);
        do {Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
        }
        while (pink === green && purple === green && blue === green);
    }
    else {
    $("#wins").html(wins);
    $("#losses").html(losses);
    }
});



});