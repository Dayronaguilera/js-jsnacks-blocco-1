// Generatore di “nomi cognomi” casuali: 
// prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di 3 invitati.

var arrayName = ["Dayron ","Gabriele ","Noemi","Tony "]
var arraySurname = ["Patermo ","Aguilera ","Sanna ","d'agata "]
var listaInvitati = [];
var output = document.getElementById("list");

while (listaInvitati.length < 3) {
    var randomName = arrayName[Math.floor( Math.random() * arrayName.length)];
    var randomSurname = arraySurname[Math.floor( Math.random() * arraySurname.length)];

    var invitato = randomName + " " + randomSurname;

    if (!listaInvitati.includes(invitato)) {
        listaInvitati.push(invitato);

        output.innerHTML += "<li>" + invitato + "</li>";
   }
}
