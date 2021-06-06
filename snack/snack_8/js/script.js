
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.
// (bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert) (modificato) 

var userNumber = prompt("inseserisci un numero di 4 cifre");

// permette di contare la lunghezza del numero inserito!
var numberLen = userNumber.length;

// se l'utente inserisce piu di 4 numeri!
if (numberLen !== 4) {
    alert("Attenzione stai inserendo piu di 4 cifre!")

    // l'utente deve inserire solo numeri e nn lettere!
} else if (isNaN(Number)) {
    alert("Attenzione devi inserire un numero di 4 cifre!")

    // se tutti i requisiti vengono soddisfatti esegui questo:
} else{
    
    var result = 0;
    
    for (var i = 0; i < numberLen; i++) {
        result += parseInt(userNumber[i]);
       
    }
}
console.log(result);