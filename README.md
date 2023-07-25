# Esercizio di oggi pomeriggio: Snacks blocco 2

## Traccia:
- JSnack1:
  - Inserisci un numero
  -  **SE** è pari stampa il numero, 
  - **ALTRIMENTI SE** è dispari stampa il numero successivo.
<hr>

- JSnack2:
  - Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
  <hr>

- JSnack3:
  - Crea un array di numeri interi 
  - fai la somma di tutti gli elementi che sono in posizione dispari

- JSnackBonus:
  - Crea due array che hanno un numero di elementi diversi.
  - Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

  ## Svolgimento

  ### JSNACK1:

- Tramite prompt chiedo all'utente un numero
- **SE** il numero inserito dall'utente è pari, stampo il numero
- **ALTRIMENTI SE** il numero inserito è dispari, stampo il successivo
<hr>

  ### JSNACK2:

- Genero un primo array di nomi
- Genero un secondo array di cognomi
- Genero un terzo array per il momento vuoto, dove andrò ad inserire i nomi e cognomi generati casualmente
- Creo un **FOR** 
  - Recupero in maniera casuale un nome dall'array nome
  - Recupero in maniera casuale un cognome dall'array cognome

- Creo una const dove inserisco il nome e il cognome random
- Aggiungo all'array lista il nome e il cognome generato 
- Stampo in console l'array lista
<hr>

 ### JSNACK3:

 - Genero un array con numeri interi
 - Definisco una variabile somma
 - Creo un **FOR**
    - **SE** il numero occupa una posizione dispari all'interno dell'array, lo aggiungo alla variabile somma
- Stampo in console la somma dei numeri di posizione dispari

### JSNACKBONUS:

- Genero un primo array con un tot. di numeri interi
- Genero un secondo array con un tot. di numeri interi
- **SE** la lunghezza del primo array è maggiore della lungheza del secondo array
- Creo una variabile di elementi da aggiungere
  - **SE** la variabile elementi da aggiunger è maggiore di 0
    - Creo un **FOR**
      - Genero randomicamente un numero tramite la funzione math.random
      - Aggiungo questo nuovo elemento all'array con lunghezza minore tramite **PUSH**
- **ALTRIMENTI SE** la lunghezza del secondo array è maggiore della lungheza del primo array
- Creo una variabile di elementi da aggiungere
  - **SE** la variabile elementi da aggiunger è maggiore di 0
    - Creo un **FOR**
      - Genero randomicamente un numero tramite la funzione math.random
      - Aggiungo questo nuovo elemento all'array con lunghezza minore tramite **PUSH**
- **ALTRIMENTI** alert

