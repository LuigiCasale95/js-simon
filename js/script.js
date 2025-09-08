/* Dichiarazione INPUT */
const button = document.querySelector(".btn-primary")
const RandomNumList = document.getElementById("numbers-list")
const countdown = document.getElementById("countdown")
const  instructions = document.getElementById("instructions")
const numUser = document.querySelectorAll("form-control")

/* Array vuoto */
   let arrayRandomNum = []

/* generazione array con 5 num. casuali */
   arrayRandomNum = arrayAddNum(10, 50, 5);
   console.log(arrayRandomNum);
   
/* far visualizzare i numeri per 30 secondi  */

/* confronto numeri casuali  con numeri scelti dall'utente */

/* dichiarare quanti numeri sono uguali a quelli casuali apparsi */






/* FUNZIONI */
/* Generatore numeri casuali */
function randomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min +1)) + min
    return number
}
/* crea array di 5 numeri casuali */
function arrayAddNum (numMin, numMax, numberElements) {
    let arrayRandomNum = []

    /* creo ciclo for per scegliere 5 elementi da aggiungere alla lista */
    for (i = 0; i<numberElements; i++) {
        let nuovoNumero = randomNumber(numMin, numMax)
        arrayRandomNum.push(nuovoNumero)
    }

    return arrayRandomNum
}