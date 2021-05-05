/* 
js-campominato
Istuzioni:
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
:baby-yoda: Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano,
dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :dome-muro:
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :stuck_out_tongue:
*/

function random_bombe(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

//console.log(random_bombe(1,100));
var diff = Number(prompt('inserisci livello: 0-difficile/1-normale/2-facile'));
var lista_bombe = [];
var bomba;
var numeroMassimo;

/* if (diff == 0) {
    numeroMassimo = 100;
} else if (diff == 1){
    numeroMassimo = 80;
} else if(diff == 2){
    numeroMassimo = 50;
} */ /* else if (isNaN(diff) || diff < 1 || diff > 3 ) {
    alert('valore inserito non corretto');
    diff = Number(prompt('inserisci livello: 0-difficile/1-normale/2-facile'));
} */

while (isNaN(diff) || diff < 1 || diff > 2) {

    alert('valore inserito non corretto');
    diff = Number(prompt('inserisci livello: 0-difficile/1-normale/2-facile'));
}

if (diff == 0) {
    numeroMassimo = 100;
} else if (diff == 1){
    numeroMassimo = 80;
} else if(diff == 2){
    numeroMassimo = 50;
}


//aggiungere controllo che utente inserisca solo 1-2-3
/* while (diff !== 0 || diff !== 1 || diff !== 2) {
    alert('valore inserito non corretto');
    diff = Number(prompt('inserisci livello: 0-difficile/1-normale/2-facile'));
}
 */

/* var condizione = diff !== 0 || diff !== 1 || diff !== 2
console.log(condizione); */

while (lista_bombe.length < 16) {
    bomba = random_bombe(1,numeroMassimo);
    
    if (!lista_bombe.includes(bomba)) {
        lista_bombe.push(bomba);        
    }
}
console.log(lista_bombe);

var punteggio = 0;
var possibilita = numeroMassimo - 16;
var lista = [];

do {
    var userNumber = Number(prompt('Inserisci un numero'));
    
    if(lista_bombe.includes(userNumber)){
        alert('BOOM! hai perso. Il tuo punteggio: ' + punteggio)
    } else if (lista.includes(userNumber)){
        alert('Numero già inserito');
    } else if(userNumber < 1 || userNumber > 100){
        alert('numero non consentito')
    } else if (isNaN(userNumber)) {
        alert('valore inserito non corretto, inserisci un numero')
    } else {
        lista.push(userNumber);
        punteggio++;
    }

} while (lista.length < possibilita && !lista_bombe.includes(userNumber));

if (lista.length == possibilita) {
    alert('hai vinto');
}

console.log(lista);
console.log(punteggio);


//BONUS





