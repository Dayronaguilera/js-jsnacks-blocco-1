
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var name1 = prompt("inserisci un nome");
var name2 = prompt( "inserisci un secondo nome");

if (name1.length > name2.length) {
    document.getElementById("result").innerHTML = name1 +  ''  + name2;
} else {
    document.getElementById("result").innerHTML = name2 +  ''  + name1;
}