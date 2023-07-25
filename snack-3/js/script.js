//* Genero un array di numero interi
const numbers = [25, 47, 35, 88, 5, 4, 0, 53, 65, 90]

//* Definisco una variabile somma
let somma = 0

//*Ciclo FOR
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    //* Condizione se la posizione occupata dal numero è dispari
    if (i % 2 !== 0) {

         //* Aggiungo  il valore alla variabile somma
        somma += number  
    }   
}

//* Stampo in console
console.log(somma)