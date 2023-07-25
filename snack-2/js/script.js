const nome = ['Alessandro', 'Giacomo', 'Riccardo', 'Marco', 'Francesco', 'Giulia'];
const cognome = ['Rossi', 'Bianchi', 'Castelli', 'Esposito', 'Aniello', 'Chicca'];
const lista = [];

for (let i = 0; i < nome.length; i++ ){
    const randomNome = nome [Math.floor(Math.random () * nome.length) + 0];
    const randomCognome = cognome[Math.floor(Math.random () * cognome.length) + 0];
    const nomeCognome = randomNome + ' ' +  randomCognome;
    lista.splice(0, 0,  nomeCognome);
}

console.log(lista)