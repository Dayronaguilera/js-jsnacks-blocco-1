// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// array dove verrà pushato il numero dispari
var userNum = [];
 
// for serve a chiedere per 6 volte la stessa cosa 
for (var x = 1; x <= 6; x++) {

    //  parseInt mi restituisce un numero (intero) x 6 volte!
    var num = parseInt(prompt("inserisci un numero"));
    
    // se il numero e dispari inseriscilo nell'array!
    if (num % 2 !== 0) {
        userNum.push(num);
    }  
}

console.log(userNum);