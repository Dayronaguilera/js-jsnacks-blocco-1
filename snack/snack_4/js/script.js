// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// nome che l'utente dichiara
var user = prompt("inserisci il tuo nome")

// questo e un array [--------] una lista di inviati
var invitatiGatsby = ['pippo', 'luca', 'paolo', 'marco'];
var output = document.getElementById("result");

var check = false; 

for (var i = 0; i < invitatiGatsby.length; i++) {
    if (invitatiGatsby[i] === user) {
        check = true;
    }
}

if (check) {
    output.innerHTML += 'Puoi partecipare!';
} else {
    output.innerHTML += 'Non puoi partecipare!';
}