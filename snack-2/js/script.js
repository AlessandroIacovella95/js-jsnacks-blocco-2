//* Genero un primo array di nomi
const nome = ['Alessandro', 'Giacomo', 'Riccardo', 'Marco', 'Francesco', 'Giulia'];

//* Genero un secondo array di cognomi
const cognome = ['Rossi', 'Bianchi', 'Castelli', 'Esposito', 'Aniello', 'Chicca'];

//* Genero un terzo array vuoto
const lista = [];

//* Ciclo FOR
for (let i = 0; i < nome.length; i++ ){

    //* Recupero in maniera casuale un nome dall'array nome
    const randomNome = nome [Math.floor(Math.random () * nome.length)];
    
    //* Recupero in maniera casuale un cognome dall'array cognome
    const randomCognome = cognome[Math.floor(Math.random () * cognome.length)];

    //* Creo una const dove inserisco il nome e il cognome random
    const nomeCognome = randomNome + ' ' +  randomCognome;

    //* Aggiungo all'array lista il nome e il cognome generato
    lista.splice(0, 0,  nomeCognome);
}

//* Stampo in console l'array lista
console.log(lista)