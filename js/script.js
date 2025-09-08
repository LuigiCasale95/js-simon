/* Dichiarazione INPUT */
const button = document.querySelector(".btn-primary")
const randomNumList = document.getElementById("numbers-list")
const countdown = document.getElementById("countdown")
const  instructions = document.getElementById("instructions")
const myForm = document.getElementById("answers-form")
const msn = document.getElementById("message")

let numUser1 = document.querySelector(".form-control1")
let numUser2 = document.querySelector(".form-control2")
let numUser3 = document.querySelector(".form-control3")
let numUser4 = document.querySelector(".form-control4")
let numUser5 = document.querySelector(".form-control5")

/* numUser1 = numUser1.value
numUser2 = numUser2.value
numUser3 = numUser3.value
numUser4 = numUser4.value
numUser5 = numUser5.value
 */
console.log(numUser1);

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
        myForm.classList.remove("d-none")
        randomNumList.classList.add("d-none")
        countdown.classList.add("d-none")
        instructions.innerHTML = "<h2>Ricordi che numeri erano?</h2>"

    } else {
        countdown.innerText = second--
    }

}, 1000)

/* Array con i numeri scelti dall'utente */
myForm.addEventListener("submit",
     function (evento){
    evento.preventDefault();
        let numUtente = []

        numUtente.push(numUser1.value)
        numUtente.push(numUser2.value)
        numUtente.push(numUser3.value)
        numUtente.push(numUser4.value)
        numUtente.push(numUser5.value)

        console.log(numUtente);
/* Confrontare ogni numero di ArrayCasuale con numeri ArrayUtente */
        let numVincenti = []
        console.log(numVincenti);
})









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
