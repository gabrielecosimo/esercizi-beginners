function giorniDelMese(month) {
  let monthDays;
  switch (month) {
    case "febbraio":
      monthDays = 28;
      break;

    case "aprile":
    case "giugno":
    case "novembre":
    case "settembre":
      monthDays = 30;
      break;

    case "gennaio":
    case "marzo":
    case "maggio":
    case "luglio":
    case "agosto":
    case "ottobre":
    case "dicembre":
      monthDays = 31;
      break;

    default:
      console.log("inserisci un mese")
      break;
  }

  return monthDays;
}

let mese = prompt("inserisci un mese: ")
let nDays
nDays = giorniDelMese(mese.toLowerCase());

console.log(`i giorni di ${mese} sono ${nDays}`)
