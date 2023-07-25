//* Tramite prompt chiedo all'utente un numero

const userNumber = parseInt(prompt( 'Inserisci un numero'))

//* Definisco la variabile dove andrò a stampare i numeri
let numberEven

//* Controllo se il valore inserito dall'utente sia un numero
if (isNaN (userNumber)) {
    alert('Inserisci un numero');
    //* ALTRIMENTI SE è numero, controllo che sia pari 
} else if(userNumber % 2 === 0) {
    numberEven = userNumber;
    //* ALTRIMENTI il numero inserito è dispari, inserisco e stampo il successivo
} else {
    numberEven = userNumber + 1;
}

//* Stampo in console
console.log(numberEven);