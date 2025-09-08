/* Dichiarazione INPUT */
const button = document.querySelector(".btn-primary")
const randomNumList = document.getElementById("numbers-list")
const countdown = document.getElementById("countdown")
const  instructions = document.getElementById("instructions")
const numUser = document.getElementById("answers-form")

let second = 3
countdown.innerText = second--
/* Array vuoto */
   let arrayRandomNum = []

/* generazione array con 5 num. casuali */
   arrayRandomNum = arrayAddNum(10, 50, 5);
   console.log(arrayRandomNum);
/* Far apparire i numeri in HTML */
   for (i = 0; i < arrayRandomNum.length; i++) {
    let elementLi = arrayRandomNum[i]
    randomNumList.innerHTML = arrayRandomNum
   }
/* Countdown di 30 secondi */
/* Far scomparire i numeri dopo 30 secondi  */
const countdown30 = setInterval(function() {
    if(second === 0){
        numUser.classList.remove("d-none")
        randomNumList.classList.add("d-none")
        countdown.classList.add("d-none")
        instructions.innerHTML = "<h2>Ricordi che numeri erano?</h2>"

    } else {
        countdown.innerText = second--
    }

}, 1000)

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