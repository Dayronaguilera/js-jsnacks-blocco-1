
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

var number1 = parseInt(prompt("inserisci un numero"));
var number2 = parseInt(prompt("inserisci un secondo numero"));

if (number1 > number2) {
    document.getElementById("result").innerHTML = "sei maggiore" + "</br>" + "number1" ;
} else if (number2 > number1) {
    document.getElementById("result").innerHTML = "sei maggiore" + "</br>" + "number2" ;
} else {
    document.getElementById("result").innerHTML = "siete uguali" + "</br>" + "number2+number1" ;
} 

    
