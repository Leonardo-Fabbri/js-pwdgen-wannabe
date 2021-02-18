//dichiarazione delle variabili 
var nome;

nome=prompt("inserisci il tuo nome");
console.log(nome);

var cognome;

cognome=prompt("inserisci il tuo cognome");
console.log(cognome);

var colore;

colore=prompt("inserisci il tuo colore preferito");
console.log(colore);


document.getElementById("my_id").innerHTML=nome+cognome+colore;
nome+" "+cognome+" "+colore ;



// nome+ " " + cognome
// "leo fabbri"
