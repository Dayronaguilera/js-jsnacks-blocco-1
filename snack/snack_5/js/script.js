// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

var numDaInserire = [];
 
// for serve a chiedere per 6 volte la stessa cosa 
for (var x = 1; x <= 6; x++) {

    //  parseInt mi restituisce un numero (intero) x 6 volte!
    var num = parseInt(prompt("inserisci un numero"));
    // se il nuemro e pari fai questo!
    if (num % 2 !== 0) {
        document.getElementById("result").innerHTML = "Pari";
        numDaInserire.Push(num);
    }  
}

console.log(numDaInserire);