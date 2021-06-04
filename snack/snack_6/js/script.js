// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente attraverso un prompt. (modificato) 

var number = parseInt(prompt("inserisci un numero"));

for (var i = 0; i <= number; i++) {
    document.getElementById("result").innerHTML += Math.pow(i, 3) + "</br>";
    
    
}
  