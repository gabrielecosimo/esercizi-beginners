function calcMilliseconds(minutes, ore) {
    let mseconds = (minutes * 60 * 1000) + (ore * 60 * 60 * 1000)
    return mseconds
}

let m = prompt("inserisci un certo n di minuti")
let o = prompt("inserisci un certo n di ore")
let mseconds = calcMilliseconds(m, ore)
console.log(`in ${m} minuti e ${ore} ore ci sono ${ms} millisecondi`)

//funzione pura se non condivide variabili con l'esterno