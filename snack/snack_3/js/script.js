
// il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

var result = 0;
var output = document.getElementById("result");

// for serve a chiedere per 10 volte la stessa cosa 
for (var x = 1; x <= 10; x++) {

    //  parseInt mi restituisce un numero (intero)!
    var num = parseInt(prompt("inserisci un numero"));

    // somma il risultato 
    result += num;
}
// lo scriviaom fuori dal ciclo perche sara solo il risultato finale ad essere stampato!
output.innerHTML = "il risultato è:" + result;