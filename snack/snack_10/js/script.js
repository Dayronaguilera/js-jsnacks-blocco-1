// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

var result = 0;

// versione for!
// for serve a chiedere per 5 volte la stessa cosa 
for (var x = 1; x <= 5; x++) {

    //  parseInt mi restituisce un numero (intero)!
    var num = parseInt(prompt("inserisci un numero"));

    // somma il risultato 
    result += num;
}
console.log("somma for:" + result);

// versione while
var sum = 0;
var x = 1;

// while serve a chiedere per 5 volte la stessa cosa 
while(x <= 5){
    var userNum = parseInt(prompt("inserisci un numero"));
    x++;
    sum += userNum;
}
console.log("somma while:" + sum);