
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// in questo caso il parseint nn serve perche sono gia stringhe!
var name1 = prompt("inserisci un nome");
var name2 = prompt( "inserisci un secondo nome");
var output =  document.getElementById("result");

// con length possiamo contare la lunghezza della stringa!
if (name1.length > name2.length) {
    output.innerHTML = name1 +  ''  + name2;
} else if (name2.length > name1.length) {
    output.innerHTML = name2 +  ''  + name1;
}else {
    output.innerHTML = name1 +  ''  + name2;
}