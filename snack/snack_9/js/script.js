// Calcola la somma e la media dei primi 10 numeri.

var max = 10;
var sum = 0;

for (var i = 1; i <=max; i++) {
    sum += i;
}

var avg = sum/max;

console.log("la somma è: " + sum);
console.log("la media è: " + avg);