
let ora = prompt("inserire una quantità di ore... ")
ora=parseInt(ora)
let minuti = prompt("inserire una quantita di minuti... ")
minuti=parseInt(minuti)
let millisecondi

millisecondi = ((ora * 60) * 60) * 1000 //conversione delle ore in millisecondi
millisecondi = millisecondi + ((minuti * 60) * 1000) //conversione minuti in millisecondi

console.log("il tipo di millisecondi: " + typeof millisecondi)

console.log("l'ora convertita in millisecondi è: " + millisecondi)