// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// nome che l'utente dichiara
var user = prompt("inserisci il tuo nome")

// questo e un array [--------] una lista di inviati
var invitatiGatsby = ['pippo', 'luca', 'paolo', 'marco'];
var output = document.getElementById("result");

var check = false; 

// in questo caso il for serve per contare all'interno dell array x n volte
for (var i = 0; i < invitatiGatsby.length; i++) {
    // con if si deve verificare la condizione per eseguire il comando!
    if (invitatiGatsby[i] === user) {
        check = true;
    }
}

if (check) {
    output.innerHTML += 'Puoi partecipare!';
} else {
    output.innerHTML += 'Non puoi partecipare!';
}