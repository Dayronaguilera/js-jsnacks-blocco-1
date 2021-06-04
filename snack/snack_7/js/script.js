// Stampa le potenze di 2 fino a 1000.

var number = 1000;

for (var i = 0; i <= number; i++) {
    document.getElementById("result").innerHTML += Math.pow(2, i) + "</br>";
    
}