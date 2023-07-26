const min = 1
const max = 99

//* Genero un primo array con un tot. di numeri interi
const numbersOne = [5, 8, 15, 78, 9, 27];

//* Genero un secondo array con un tot. di numeri interi
const numbersTwo= [2, 90, 55];

//* **SE** la lunghezza del primo array è maggiore della lungheza del secondo array
if (numbersOne.length > numbersTwo.length) {

    //* Creo una variabile di elementi da aggiungere
    let addElements = numbersOne.length - numbersTwo.length

        //* Creo un **FOR**
        for (let i = 0; i < addElements; i++) {

            //* Genero randomicamente un numero tramite la funzione math.random
            let newElement = Math.floor(Math.random () * max) + min;
            
            //* Aggiungo questo nuovo elemento all'array con lunghezza minore tramite **PUSH**
            numbersTwo.push(newElement);
        }
     
    //* **ALTRIMENTI SE** la lunghezza del secondo array è maggiore della lungheza del primo array
} else if (numbersTwo.length > numbersOne.length) {

    //* Creo una variabile di elementi da aggiungere
    let addElements = numbersTwo.length - numbersOne.length

        //* Creo un **FOR**
        for (let i = 0; i < addElements; i++) {

            //* //* Genero randomicamente un numero tramite la funzione math.random
            let newElement = Math.floor(Math.random () * max) + min;

            //* Aggiungo questo nuovo elemento all'array con lunghezza minore tramite **PUSH**
            numbersOne.push(newElement);
        }

    //* **ALTRIMENTI** alert
} else {
    alert('Gli array generati hanno lo stesso numero di elementi....')
}

console.table(numbersOne);
console.table(numbersTwo);
 